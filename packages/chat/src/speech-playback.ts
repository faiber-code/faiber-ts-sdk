import type { ChatApi } from './index.js';
import type { SpeechSynthesisInput } from './types.js';

export interface SpeechPlaybackOptions {
  signal?: AbortSignal;
  /** Reports actual playback and waits when synthesis cannot keep up. */
  onPhase?: (phase: 'buffering' | 'playing') => void;
  /** Opt-in local replay. Include service/tenant, authenticated user and voice/settings revision.
   * The latest utterance replaces the previous one. Never use a shared anonymous scope. */
  cacheScope?: string;
  /** Persist the last compressed audio in IndexedDB across reloads. Requires cacheScope.
   * Audio remains on this device until replaced or clearSpeechPlaybackCache() is called. */
  persistCache?: boolean;
}
interface CachedSpeech { key: string; clips: (Blob | null)[] }
let latest: CachedSpeech | undefined;
let generation = 0;
let storageQueue: Promise<unknown> = Promise.resolve();
const MAX_CACHE_BYTES = 16 * 1024 * 1024;
function database(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('faiber-last-speech-v1', 1);
    let expired = false;
    const timer = setTimeout(() => { expired = true; reject(new Error('Audio storage unavailable')); }, 1000);
    request.onupgradeneeded = () => request.result.createObjectStore('audio');
    request.onerror = () => { clearTimeout(timer); reject(request.error); };
    request.onsuccess = () => { clearTimeout(timer); if (expired) request.result.close(); else resolve(request.result); };
  });
}
async function stored(write?: CachedSpeech | null): Promise<CachedSpeech | undefined> {
  const db = await database();
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction('audio', write === undefined ? 'readonly' : 'readwrite');
      const store = tx.objectStore('audio');
      const request = write === undefined ? store.get('latest') : write === null ? store.delete('latest') : store.put(write, 'latest');
      tx.oncomplete = () => resolve(write === undefined ? request.result as CachedSpeech | undefined : undefined);
      tx.onerror = tx.onabort = () => reject(tx.error);
    });
  } finally { db.close(); }
}
function persist(value: CachedSpeech | null): Promise<unknown> {
  storageQueue = storageQueue.catch(() => {}).then(() => stored(value)).catch(() => {});
  return storageQueue;
}
/** Erase the latest replay audio from memory and IndexedDB, e.g. on logout/account switch.
 * Does not stop an active player; abort its signal first. Storage failures are non-fatal. */
export async function clearSpeechPlaybackCache(): Promise<void> {
  generation++; latest = undefined;
  await persist(null);
}
/** Split into balanced speech-sized phrases; preserve every non-whitespace token. */
export function splitSpeechText(text: string): string[] {
  const parts: string[] = []; let part = '';
  for (const word of text.trim().split(/\s+/u).filter(Boolean)) {
    if (part && part.length + word.length + 1 > (parts.length ? 38 : 55)) { parts.push(part); part = ''; }
    part += (part ? ' ' : '') + word;
    if (/[.!?؟؛:]$/u.test(word) && part.length >= 25) { parts.push(part); part = ''; }
  }
  if (part) parts.push(part);
  return parts;
}
/** Progressive MP3 playback through the configured authenticated ChatApi (chat:ai).
 * Starts the first phrase immediately; serial synthesis runs independently up to three
 * phrases ahead. Ready buffers are scheduled on the audio clock without waiting for ended.
 * Slower-than-realtime generation may still require buffering. Each newly synthesized phrase
 * is billed independently; cached replay makes no synthesis request. Browser-only, invoke
 * after a user gesture. Abort stops all scheduled audio and outstanding network requests.
 */
export async function playSpeech(api: ChatApi, input: SpeechSynthesisInput, options: SpeechPlaybackOptions = {}): Promise<void> {
  if (!input.text.trim() || [...input.text].length > 5000) throw new RangeError('Speech text must contain 1–5000 characters');
  const controller = new AbortController();
  const abort = () => controller.abort();
  options.signal?.addEventListener('abort', abort, {once: true});
  if (options.signal?.aborted) abort();
  const context = new AudioContext();
  const sources = new Set<AudioBufferSourceNode>();
  const phaseTimers = new Set<ReturnType<typeof setTimeout>>();
  const check = () => { if (controller.signal.aborted) throw new DOMException('Playback cancelled', 'AbortError'); };
  let wake: (() => void) | undefined;
  let rejectCompletion: ((error: unknown) => void) | undefined;
  const onAbort = () => { for (const source of sources) { try { source.stop(); } catch {} } wake?.(); rejectCompletion?.(new DOMException('Playback cancelled', 'AbortError')); };
  controller.signal.addEventListener('abort', onAbort);
  let producer: Promise<void> | undefined;
  try {
    check(); await context.resume();
    const parts = splitSpeechText(input.text);
    const epoch = ++generation;
    let cache: CachedSpeech | undefined;
    if (options.cacheScope) {
      const bytes = new TextEncoder().encode(JSON.stringify([options.cacheScope, input.language, parts]));
      const key = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)), n => n.toString(16).padStart(2, '0')).join('');
      if (!latest && options.persistCache) { await storageQueue; const saved = await stored().catch(() => undefined); if (generation === epoch) latest = saved; }
      check();
      cache = latest?.key === key && latest.clips.length === parts.length && latest.clips.every(clip => clip === null || clip instanceof Blob) ? latest : {key, clips: parts.map(() => null)};
      if (generation === epoch) latest = cache;
    }
    let completed = 0, endTime = 0;
    let resolveCompletion!: () => void;
    const completion = new Promise<void>((resolve, reject) => { resolveCompletion = resolve; rejectCompletion = reject; });
    const changed = () => { wake?.(); wake = undefined; };
    const wait = () => new Promise<void>(resolve => { wake = resolve; });
    producer = (async () => {
      for (let i = 0; i < parts.length; i++) {
        while (i - completed >= 3) { await wait(); check(); }
        check();
        let blob = cache?.clips[i];
        if (!blob) {
          const response = await api.synthesize({...input, text: parts[i]!, format: 'mp3'}, {signal: controller.signal});
          check(); blob = response.data;
          if (cache && generation === epoch) {
            cache.clips[i] = blob;
            if (cache.clips.reduce((sum, clip) => sum + (clip?.size ?? 0), 0) <= MAX_CACHE_BYTES) {
              if (options.persistCache) void persist({key: cache.key, clips: [...cache.clips]});
            } else { cache = undefined; latest = undefined; if (options.persistCache) void persist(null); }
          }
        }
        const buffer = await context.decodeAudioData(await blob.arrayBuffer()); check();
        const source = context.createBufferSource(); source.buffer = buffer; source.connect(context.destination);
        // A small initial lead lets the next request overlap the first phrase's start.
        const when = Math.max(context.currentTime + (i === 0 && !cache?.clips.every(Boolean) ? 0.5 : 0), endTime);
        endTime = when + buffer.duration;
        sources.add(source);
        source.addEventListener('ended', () => {
          sources.delete(source); source.disconnect(); completed++; changed();
          if (completed === parts.length) resolveCompletion();
          if (completed < parts.length && sources.size === 0 && !controller.signal.aborted) options.onPhase?.('buffering');
        }, {once: true});
        const starting = sources.size === 1;
        source.start(when);
        if (starting) {
          const delay = (when - context.currentTime) * 1000;
          if (delay > 0) { const timer = setTimeout(() => { phaseTimers.delete(timer); if (!controller.signal.aborted) options.onPhase?.('playing'); }, delay); phaseTimers.add(timer); }
          else options.onPhase?.('playing');
        }
      }
    })().catch(error => { rejectCompletion?.(error); }).finally(changed);
    await completion;
  } finally {
    for (const timer of phaseTimers) clearTimeout(timer);
    controller.abort();
    // A compliant transport observes AbortSignal; do not keep a cancelled player open.
    void producer?.catch(() => {});
    await context.close().catch(() => {});
    options.signal?.removeEventListener('abort', abort);
  }
}
