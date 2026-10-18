import type { FaiberClient } from '@faiber/sdk-core';
import type { KheradgahConnectionTicket, KheradgahRealtimeOptions } from './contracts.types.js';

/** Open an upgrade using an authenticated, short-lived connection ticket; never put IDP tokens in URLs. */
export function openMatchRealtime(client: FaiberClient, ticket: KheradgahConnectionTicket, options: KheradgahRealtimeOptions = {}): Promise<WebSocket> {
  const Socket = options.WebSocket ?? globalThis.WebSocket;
  if (!Socket) return Promise.reject(new Error('WebSocket is unavailable; provide options.WebSocket'));
  const base = client.axios.defaults.baseURL;
  if (!base) return Promise.reject(new Error('The State service URL is required'));
  const expected = new URL(base);
  const url = new URL(ticket.websocketUrl);
  const socketProtocol = (protocol: string) => protocol === 'https:' || protocol === 'wss:' ? 'wss:' : 'ws:';
  if (!['http:', 'https:', 'ws:', 'wss:'].includes(url.protocol) || url.host !== expected.host || socketProtocol(url.protocol) !== socketProtocol(expected.protocol) || url.pathname !== '/api/v2/realtime' || url.username || url.password || url.search || url.hash) {
    return Promise.reject(new Error('The match ticket must use the configured State service origin and realtime path'));
  }
  if (!Number.isFinite(Date.parse(ticket.expiresAt)) || Date.parse(ticket.expiresAt) <= Date.now() || !ticket.ticket) return Promise.reject(new Error('The match connection ticket is expired or empty'));
  url.protocol = socketProtocol(url.protocol);
  return new Promise((resolve, reject) => {
    if (options.signal?.aborted) { reject(new DOMException('Connection aborted', 'AbortError')); return; }
    const socket = new Socket(url.toString());
    const abort = () => { socket.close(); reject(new DOMException('Connection aborted', 'AbortError')); };
    options.signal?.addEventListener('abort', abort, { once: true });
    socket.addEventListener('close', () => options.signal?.removeEventListener('abort', abort), { once: true });
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({ type: 'hello', ticket: ticket.ticket }));
      resolve(socket);
    }, { once: true });
    socket.addEventListener('error', () => { options.signal?.removeEventListener('abort', abort); socket.close(); reject(new Error('Unable to connect to State match realtime')); }, { once: true });
    socket.addEventListener('close', () => reject(new Error('State match connection closed before opening')), { once: true });
  });
}

import type { JoinTicket } from './types.js';
import type { StateRoomRealtimeOptions } from './contracts.types.js';
import { StateRealtimeClient } from './realtime.js';
/** Bind room replication to the configured authenticated service and its scoped join ticket. */
export async function openRoomRealtime(client: FaiberClient, ticket: JoinTicket, options: StateRoomRealtimeOptions = {}): Promise<StateRealtimeClient> {
  const expected = new URL(client.axios.defaults.baseURL ?? '');
  const url = new URL(ticket.websocket_url);
  if (url.host !== expected.host || url.pathname !== '/api/v1/realtime' || url.username || url.password || url.search || url.hash || !['http:', 'https:', 'ws:', 'wss:'].includes(url.protocol) || (['https:', 'wss:'].includes(url.protocol) !== ['https:', 'wss:'].includes(expected.protocol))) throw new Error('The room ticket must use the configured State realtime origin');
  url.protocol = ['https:', 'wss:'].includes(url.protocol) ? 'wss:' : 'ws:';
  if (options.signal?.aborted) throw new DOMException('Connection aborted', 'AbortError');
  const realtime = new StateRealtimeClient({ ...ticket, websocket_url: url.toString() }, options);
  let rejectClosed: (reason: Error) => void = () => {};
  const closed = new Promise<never>((_, reject) => { rejectClosed = reject; });
  const abort = () => { realtime.close(); rejectClosed(new DOMException('Connection aborted', 'AbortError')); };
  options.signal?.addEventListener('abort', abort, { once: true });
  realtime.on('close', () => { options.signal?.removeEventListener('abort', abort); rejectClosed(new Error('Room realtime connection closed')); });
  try { await Promise.race([realtime.connect(), closed]); return realtime; }
  catch (error) { options.signal?.removeEventListener('abort', abort); realtime.close(); throw error; }
}
