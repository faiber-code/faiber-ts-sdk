import type { ChatApi } from './index.js';
import type { SpeechSynthesisInput } from './types.js';

export interface SpeechPlaybackOptions {
  signal?: AbortSignal;
  /** Called when the first audio actually starts, and while waiting for later audio. */
  onPhase?: (phase: 'buffering' | 'playing') => void;
}
/** Split on natural boundaries, with a short first phrase for lower startup latency.
 * All non-whitespace text is retained, including Persian punctuation and long tokens. */
export function splitSpeechText(text: string): string[] {
  const words = text.trim().split(/\s+/u).filter(Boolean);
  const parts: string[] = [];
  let part = '';
  for (const word of words) {
    const limit = parts.length ? 240 : 85;
    if (part && part.length + word.length + 1 > limit) { parts.push(part); part = ''; }
    part += (part ? ' ' : '') + word;
    if (/[.!?؟؛:]$/u.test(word) && part.length >= (parts.length ? 90 : 25)) {
      parts.push(part); part = '';
    }
  }
  if (part) parts.push(part);
  return parts;
}
/** Play compact MP3 in phrase order while preparing the next phrase. Requires chat:ai.
 * Uses the configured ChatApi transport/authentication. Browser-only; invoke after a user
 * gesture. Resolves when playback ends, rejects on provider/playback errors. Abort stops
 * playback and outstanding requests. At most two requests/audio segments are outstanding;
 * no audio or text is cached across users. This is progressive phrase synthesis, not a
 * provider token/audio stream. Each phrase is independently billed by the configured provider.
 */
export async function playSpeech(api: ChatApi, input: SpeechSynthesisInput, options: SpeechPlaybackOptions = {}): Promise<void> {
  if (!input.text.trim() || [...input.text].length > 5000) throw new RangeError('Speech text must contain 1–5000 characters');
  const controller = new AbortController();
  const abort = () => controller.abort();
  options.signal?.addEventListener('abort', abort, {once: true});
  if (options.signal?.aborted) abort();
  const context = new AudioContext();
  let source: AudioBufferSourceNode | undefined;
  const check = () => { if (controller.signal.aborted) throw new DOMException('Playback cancelled', 'AbortError'); };
  try {
    check();
    await context.resume();
    const parts = splitSpeechText(input.text);
    const load = async (text: string) => {
      check();
      const response = await api.synthesize({...input, text, format: 'mp3'}, {signal: controller.signal});
      check();
      const buffer = await context.decodeAudioData(await response.data.arrayBuffer());
      check();
      return buffer;
    };
    let next = load(parts[0]!);
    // Attach a rejection handler immediately while current audio is playing.
    void next.catch(() => {});
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) options.onPhase?.('buffering');
      const buffer = await next;
      check();
      if (i + 1 < parts.length) { next = load(parts[i + 1]!); void next.catch(() => {}); }
      await new Promise<void>((resolve, reject) => {
        const onAbort = () => { try { source?.stop(); } catch {} reject(new DOMException('Playback cancelled', 'AbortError')); };
        controller.signal.addEventListener('abort', onAbort, {once: true});
        source = context.createBufferSource(); source.buffer = buffer; source.connect(context.destination);
        source.addEventListener('ended', () => { controller.signal.removeEventListener('abort', onAbort); resolve(); }, {once:true});
        source.start(); options.onPhase?.('playing');
      });
    }
  } finally {
    controller.abort();
    try { source?.stop(); } catch {}
    await context.close().catch(() => {});
    options.signal?.removeEventListener('abort', abort);
  }
}
