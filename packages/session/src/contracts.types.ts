/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope } from '@faiber/sdk-core';
export interface SessionPresenceEvent { id: string; profile_id: string; kind: 'joined'|'left'; at: string }
export type SessionPresenceResponse = ApiEnvelope<SessionPresenceEvent[]>;

