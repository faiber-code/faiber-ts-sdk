import type { ApiEnvelope, JsonValue } from '@faiber/sdk-core';
import type * as O from './operations.types.js';
import type { SessionInteractionReceipt } from './reviewed-wire.js';
export type Room = O.RoomRoomsShowGetResponseDataRoom;
export type CreateRoomInput = O.RoomRoomsCreatePostInput;
export type UpdateRoomInput = O.RoomRoomsUpdatePatchInput;
export type RoomAnalytics = O.RoomRoomsAnalyticsGetResponseData;
export type Recording = O.RoomRoomsRecordingsGetResponseDataRecordings;
export type LivekitToken = O.RoomRoomsLivekitTokenGetResponseData;
/** Interactive start has no JSON body on the mounted route. */
export type StartInteractiveInput = undefined;
export type Playback = O.RoomRoomsPlaybackShowGetResponseData;
export type RoomListResponse = O.RoomRoomsIndexGetResponse;
export type RoomResponse = O.RoomRoomsShowGetResponse;
export type RoomAnalyticsResponse = O.RoomRoomsAnalyticsGetResponse;
export type RecordingsResponse = O.RoomRoomsRecordingsGetResponse;
export type LivekitTokenResponse = O.RoomRoomsLivekitTokenGetResponse;
export type StartInteractiveResponse = O.RoomRoomsInteractiveStartPostResponse;
export type EndRoomResponse = O.RoomRoomsEndPostResponse;
export type PlaybackResponse = O.RoomRoomsPlaybackShowGetResponse;
/** content is arbitrary client-authored JSON, limited by the handler to 4096 encoded bytes. */
export interface RoomInteractionInput { event_id: string; interaction: 'emoji' | 'raise_hand' | 'room_chat' | 'interaction'; content: JsonValue }
/** Asset receipt fields beyond reservation_id remain Asset-owned JSON. Session does not assert a charge type. */
export type RoomInteractionData = SessionInteractionReceipt;
export type RoomInteractionResponse = ApiEnvelope<RoomInteractionData>;
