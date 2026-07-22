import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: response without a declared JSON model. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: RoomStateRespond. */
export interface RoomStateRoomStateRespondPostInput extends JsonObject {
  "values": string[];
}
/** Backend response type: RoomStateRespondResponse. */
export interface RoomStateRoomStateRespondPostResponseData extends JsonObject {
  "validated": boolean;
}
export interface RoomStateRoomStateRespondPostResponse extends ApiEnvelope<RoomStateRoomStateRespondPostResponseData> {
}

/** Backend query type: RoomListQuery. */
export interface RoomRoomsIndexGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
  "custom_only"?: boolean;
  "search"?: string;
}
/** Backend response type: RoomListResponse. */
export interface RoomRoomsIndexGetResponseData extends JsonObject {
  "rooms": JsonValue[];
}
export interface RoomRoomsIndexGetResponse extends ApiEnvelope<RoomRoomsIndexGetResponseData> {
}

/** Backend request type: RoomCreate. */
export interface RoomRoomsCreatePostInput extends JsonObject {
  "name": string;
  "capacity": number;
  "session_id"?: string;
  "users"?: string[];
  "states"?: JsonValue[];
  "status"?: number;
  "starts_at": string;
}
/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsCreatePostResponseData extends JsonObject {
  "room": JsonValue;
}
export interface RoomRoomsCreatePostResponse extends ApiEnvelope<RoomRoomsCreatePostResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsDeleteDeleteResponseData extends JsonObject {
  "room": JsonValue;
}
export interface RoomRoomsDeleteDeleteResponse extends ApiEnvelope<RoomRoomsDeleteDeleteResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsShowGetResponseData extends JsonObject {
  "room": JsonValue;
}
export interface RoomRoomsShowGetResponse extends ApiEnvelope<RoomRoomsShowGetResponseData> {
}

/** Backend request type: RoomUpdate. */
export interface RoomRoomsUpdatePatchInput extends JsonObject {
  "name"?: string;
  "capacity"?: number;
  "session_id"?: string;
  "users"?: string[];
  "states"?: JsonValue[];
  "status"?: number;
  "starts_at"?: string;
}
/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsUpdatePatchResponseData extends JsonObject {
  "room": JsonValue;
}
export interface RoomRoomsUpdatePatchResponse extends ApiEnvelope<RoomRoomsUpdatePatchResponseData> {
}

/** Backend request type: RoomUpdate. */
export interface RoomRoomsUpdatePutInput extends JsonObject {
  "name"?: string;
  "capacity"?: number;
  "session_id"?: string;
  "users"?: string[];
  "states"?: JsonValue[];
  "status"?: number;
  "starts_at"?: string;
}
/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsUpdatePutResponseData extends JsonObject {
  "room": JsonValue;
}
export interface RoomRoomsUpdatePutResponse extends ApiEnvelope<RoomRoomsUpdatePutResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoomRoomsEndGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoomRoomsInteractiveStartPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: LiveKitTokenResponse. */
export interface RoomRoomsLivekitTokenGetResponseData extends JsonObject {
  "token": string;
  "url": string;
}
export interface RoomRoomsLivekitTokenGetResponse extends ApiEnvelope<RoomRoomsLivekitTokenGetResponseData> {
}

/** Backend response type: RoomSingleFullResponse. */
export interface RoomRoomsPlaybackShowGetResponseData extends JsonObject {
  "room": JsonValue;
}
export interface RoomRoomsPlaybackShowGetResponse extends ApiEnvelope<RoomRoomsPlaybackShowGetResponseData> {
}

/** Backend response type: RoomRecordingResponse. */
export interface RoomRoomsRecordingsGetResponseData extends JsonObject {
  "recordings": JsonValue[];
}
export interface RoomRoomsRecordingsGetResponse extends ApiEnvelope<RoomRoomsRecordingsGetResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsStartGetResponseData extends JsonObject {
  "room": JsonValue;
}
export interface RoomRoomsStartGetResponse extends ApiEnvelope<RoomRoomsStartGetResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsStopGetResponseData extends JsonObject {
  "room": JsonValue;
}
export interface RoomRoomsStopGetResponse extends ApiEnvelope<RoomRoomsStopGetResponseData> {
}

/** Backend response type: RoomAnalyticsResponse. */
export interface RoomRoomsAnalyticsGetResponseData extends JsonObject {
  "ongoing_sessions": number;
  "sessions_today": number;
  "ongoing_users": number;
  "connected_users_today": number;
}
export interface RoomRoomsAnalyticsGetResponse extends ApiEnvelope<RoomRoomsAnalyticsGetResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoomLivekitWebhookPostResponse extends ApiEnvelope<JsonValue> {
}

