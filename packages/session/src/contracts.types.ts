/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope } from '@faiber/sdk-core';
export interface SessionPresenceEvent { id: string; profile_id: string; kind: 'joined'|'left'; at: string }
export type SessionPresenceResponse = ApiEnvelope<SessionPresenceEvent[]>;


/** Trusted LMS snapshot; user identifiers use Session's current room-client identity mapping. */
export interface SessionNotificationState {
  room_id: string;
  classroom_session_id: string | null;
  present_user_ids: string[];
  actual_started_at: string | null;
  entry_available: boolean;
  ended: boolean;
}
export type SessionNotificationStateResponse = import('@faiber/sdk-core').ApiEnvelope<SessionNotificationState>;

/** Opaque peer transport, not a JSON business model. Set Content-Type for the target API. */
export type SessionPeerProxyBody = string | Blob | ArrayBuffer | Uint8Array | undefined;
/** Buffered peer bytes. Streaming peers require explicit streaming transport on the shared client. */
export type SessionPeerProxyResponse = ArrayBuffer | Uint8Array;

/** Peer query names and value types are defined by the target service operation. */
export type SessionPeerProxyQuery = import('@faiber/sdk-core').QueryParams;
