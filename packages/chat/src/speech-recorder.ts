/** Browser microphone capture optimized for spoken STT input. No network requests are made. */
export interface SpeechRecorderOptions {
  /** Aborts microphone acquisition and disposes an active recording. */
  signal?: AbortSignal;
  /** Target Opus bitrate, 16–64 kbit/s; default 32 kbit/s. AAC fallback uses at least 64 kbit/s. */
  audioBitsPerSecond?: number;
  /** Enable a gentle 80 Hz rumble filter and 8 kHz low-pass; default true. */
  filter?: boolean;
}
export interface SpeechRecorder {
  /** Set data/error/stop handlers, then call start(). Final chunks arrive before stop. */
  recorder: MediaRecorder;
  /** Actual container selected by MediaRecorder; use this as the final Blob type. */
  mimeType: string;
  /** Actual microphone settings: processing support varies by browser/device. */
  settings: MediaTrackSettings;
  /** Requested encoding rate; browsers may choose a different actual rate. */
  targetBitsPerSecond: number;
  /** Whether the optional Web Audio speech filters are active. */
  filtered: boolean;
  /** Stops recording, releases microphone tracks and closes audio resources. Idempotent. */
  dispose(): void;
}
/** Create after a user gesture in a secure browser context. Uses native noise suppression,
 * echo cancellation and gain control when supported, mono capture, Opus (preferred) or AAC.
 * Does not trim pauses or gate quiet speech. Call dispose on cancel/unmount and after stop.
 * Rejects with the original permission/device error; AbortError on cancellation and
 * NotSupportedError if no supported compressed recording format exists. Browser-only;
 * importing this module in Node is safe. Send the resulting Blob with ChatApi.transcribe.
 */
export async function createSpeechRecorder(options: SpeechRecorderOptions = {}): Promise<SpeechRecorder> {
  const rate = options.audioBitsPerSecond ?? 32000;
  if (!Number.isInteger(rate) || rate < 16000 || rate > 64000) throw new RangeError('Speech bitrate must be 16000–64000');
  const aborted = () => { if (options.signal?.aborted) throw new DOMException('Recording cancelled', 'AbortError'); };
  aborted();
  if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined')
    throw new DOMException('Microphone recording is unavailable', 'NotSupportedError');
  const mime = ['audio/webm;codecs=opus', 'audio/ogg;codecs=opus', 'audio/mp4'].find(type => MediaRecorder.isTypeSupported(type));
  if (!mime) throw new DOMException('Compressed speech recording is unavailable', 'NotSupportedError');
  const stream = await navigator.mediaDevices.getUserMedia({audio: {
    channelCount: {ideal: 1}, sampleRate: {ideal: 48000},
    echoCancellation: {ideal: true}, noiseSuppression: {ideal: true}, autoGainControl: {ideal: true},
  }, video: false});
  let context: AudioContext | undefined;
  let output: MediaStream | undefined;
  let recorder: MediaRecorder | undefined;
  let disposed = false;
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    options.signal?.removeEventListener('abort', dispose);
    try { if (recorder && recorder.state !== 'inactive') recorder.stop(); } catch { /* device already ended */ }
    stream.getTracks().forEach(track => track.stop());
    output?.getTracks().forEach(track => track.stop());
    if (context) void context.close().catch(() => {});
  };
  options.signal?.addEventListener('abort', dispose, {once: true});
  try {
    aborted();
    const track = stream.getAudioTracks()[0];
    if (!track) throw new DOMException('No audio track', 'NotFoundError');
    track.contentHint = 'speech';
    if (options.filter !== false && typeof AudioContext !== 'undefined') {
      try {
        context = new AudioContext();
        let resumeTimer: ReturnType<typeof setTimeout> | undefined;
        try {
          await Promise.race([context.resume(), new Promise<never>((_, reject) => { resumeTimer = setTimeout(() => reject(new Error("Audio context suspended")), 1000); })]);
        } finally { clearTimeout(resumeTimer); }
        aborted();
        // Avoid hanging or silently recording silence when a browser suspends Web Audio.
        if (context.state !== 'running') throw new Error('Audio context suspended');
        const source = context.createMediaStreamSource(stream);
        const high = context.createBiquadFilter(); high.type = 'highpass'; high.frequency.value = 80; high.Q.value = 0.707;
        const low = context.createBiquadFilter(); low.type = 'lowpass'; low.frequency.value = 8000; low.Q.value = 0.707;
        const destination = context.createMediaStreamDestination();
        destination.channelCount = 1; destination.channelCountMode = 'explicit';
        source.connect(high); high.connect(low); low.connect(destination);
        output = destination.stream;
      } catch {
        if (context) void context.close().catch(() => {});
        context = undefined;
        aborted(); // Native denoising/compression remain available without Web Audio.
      }
    }
    aborted();
    const targetBitsPerSecond = mime === 'audio/mp4' ? Math.max(rate, 64000) : rate;
    recorder = new MediaRecorder(output ?? stream, {mimeType: mime, audioBitsPerSecond: targetBitsPerSecond});
    return {recorder, mimeType: recorder.mimeType || mime, settings: track.getSettings(), targetBitsPerSecond, filtered: !!output, dispose};
  } catch (error) { dispose(); throw error; }
}
