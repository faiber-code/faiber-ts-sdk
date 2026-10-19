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
