import { createSpeechRecorder, type SpeechRecorder } from './speech-recorder.js';
import type { ChatApi } from './index.js';
import type { SpeechLanguage } from './types.js';
export interface LiveSpeechInput {
  action: 'start' | 'push' | 'finish' | 'cancel';
  session_id?: string;
  sequence?: number;
  audio_base64?: string;
  content_type?: string;
  language?: SpeechLanguage;
}
export interface LiveSpeechResult { session_id: string; text: string; final_result: boolean; error: string | null }
export interface LiveSpeechResponse { data: LiveSpeechResult; status: string; meta: null }
export interface LiveDictationOptions {
  language?: SpeechLanguage;
  signal?: AbortSignal;
  /** Complete provisional utterance, replacing the previous partial; never append partials. */
  onPartial: (text: string) => void;
  onError?: (error: Error) => void;
}
export interface LiveDictation {
  /** Stop capture and obtain the authoritative final revision. */
  finish(): Promise<string>;
  /** Discard dictation and release capture/network resources. */
  cancel(): void;
}
/** Continuous compact Opus dictation over authenticated, ordered HTTP chunks. Requires chat:ai.
 * The server retains a decoder/recognizer session; audio is sent once, never cumulative reuploads.
 * Partials can revise earlier words. Currently supports the configured Persian Shenava model and
 * browsers with WebM/Ogg Opus. Start can reject if unsupported/busy; apps may offer batch capture.
 * Capture is capped at 60 seconds, queued audio at 128 KiB. Call finish or cancel on unmount.
 */
export async function startLiveDictation(api: ChatApi, options: LiveDictationOptions): Promise<LiveDictation> {
  const controller = new AbortController();
  let capture: SpeechRecorder | undefined;
  let session = '', sequence = 0, stopped = false, queued = 0;
  let chain: Promise<void> = Promise.resolve();
  let failure: Error | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let finished: Promise<string> | undefined;
  const cleanup = () => { clearTimeout(timer); capture?.dispose(); options.signal?.removeEventListener('abort', cancel); };
  function cancel() {
    if (stopped && controller.signal.aborted) return;
    stopped = true; controller.abort(); cleanup();
    if (session) void api.liveSpeech({action:'cancel',session_id:session},{timeout:5000}).catch(()=>{});
  }
  const check = () => { if (controller.signal.aborted) throw new DOMException('Dictation cancelled','AbortError'); };
  const result = (value: LiveSpeechResult) => {
    if (value.error) throw new Error(value.error);
    if (!stopped && value.text) options.onPartial(value.text);
    return value.text;
  };
  const fail = (cause: unknown) => {
    if (controller.signal.aborted) return;
    failure = cause instanceof Error ? cause : new Error('Dictation failed');
    cancel(); options.onError?.(failure);
  };
  options.signal?.addEventListener('abort',cancel,{once:true});
  if (options.signal?.aborted) cancel();
  try {
    check();
    capture = await createSpeechRecorder({signal:controller.signal});
    if (!/^audio\/(webm|ogg)/.test(capture.mimeType)) throw new DOMException('Live Opus unavailable','NotSupportedError');
    session = (await api.liveSpeech({action:'start',language:options.language ?? 'auto',content_type:capture.mimeType},{signal:controller.signal})).data.data.session_id;
    check();
    const recorder = capture.recorder;
    let resolveStop!:()=>void;
    const stop = new Promise<void>(resolve => {resolveStop=resolve;});
    recorder.onstop = resolveStop;
    recorder.onerror = () => fail(new Error('Audio capture failed'));
    recorder.ondataavailable = event => {
      if (!event.data.size || controller.signal.aborted) return;
      queued += event.data.size;
      if (queued>128*1024 || event.data.size>48*1024) { fail(new Error('Speech connection too slow')); return; }
      chain = chain.then(async () => {
        check();
        const bytes = new Uint8Array(await event.data.arrayBuffer());
        let binary = ''; for (const byte of bytes) binary += String.fromCharCode(byte);
        const response = await api.liveSpeech({action:'push',session_id:session,sequence:sequence++,audio_base64:btoa(binary)},{signal:controller.signal,timeout:15000});
        queued -= event.data.size; result(response.data.data);
      });
      void chain.catch(fail);
    };
    recorder.start(350);
    const finish = () => finished ??= (async () => {
      if (failure) throw failure;
      check(); stopped = true;
      clearTimeout(timer);
      if (recorder.state !== 'inactive') recorder.stop();
      await stop; capture?.dispose();
      try {
        await chain; check();
        const response = await api.liveSpeech({action:'finish',session_id:session,sequence:sequence++},{signal:controller.signal,timeout:30000});
        if (!response.data.data.final_result) throw new Error('Missing final transcript');
        return result(response.data.data);
      } finally { cancel(); }
    })();
    timer = setTimeout(() => { fail(new Error('Maximum live recording duration reached')); },60000);
    return {finish,cancel};
  } catch (error) { cancel(); throw error; }
}
