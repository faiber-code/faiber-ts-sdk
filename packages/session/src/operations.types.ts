import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: LiveKitConfigResponse. */
export interface ConfigurationLivekitConfigShowGetResponseData extends JsonObject {
  "livekit_url": string;
  "livekit_ws_url": string;
  "api_key": string;
  "has_api_secret": boolean;
  "egress_enabled": boolean;
  "egress_layout": string;
  "recording_prefix": string;
  "s3_endpoint": string;
  "s3_region": string;
  "s3_bucket": string;
  "s3_access_key": string;
  "has_s3_secret_key": boolean;
  "s3_force_path_style": boolean;
  "agentic_url": string;
  "has_agentic_service_token": boolean;
  "audio_processing_enabled": boolean;
  "audio_model_ref"?: string | null;
  "audio_language": string;
  "chat_model_ref"?: string | null;
  "chat_assistant_id"?: BackendJson<"uuid::Uuid"> | null;
  "task_validation_model_ref"?: string | null;
  "archive_delay_minutes": number;
  "processing_window_start": string;
  "processing_window_end": string;
}
export interface ConfigurationLivekitConfigShowGetResponse extends ApiEnvelope<ConfigurationLivekitConfigShowGetResponseData> {
}

/** Backend request type: LiveKitConfigUpdate. */
export interface ConfigurationLivekitConfigUpdatePutInput extends JsonObject {
  "livekit_url": string;
  "livekit_ws_url": string;
  "api_key": string;
  "api_secret"?: string | null;
  "egress_enabled": boolean;
  "egress_layout": string;
  "recording_prefix": string;
  "s3_endpoint": string;
  "s3_region": string;
  "s3_bucket": string;
  "s3_access_key": string;
  "s3_secret_key"?: string | null;
  "s3_force_path_style": boolean;
  "agentic_url": string;
  "audio_processing_enabled"?: boolean;
  "audio_model_ref"?: string | null;
  "audio_language"?: string;
  "chat_model_ref"?: string | null;
  "chat_assistant_id"?: BackendJson<"uuid::Uuid"> | null;
  "task_validation_model_ref"?: string | null;
  "archive_delay_minutes": number;
  "processing_window_start": string;
  "processing_window_end": string;
}
/** Backend response type: LiveKitConfigResponse. */
export interface ConfigurationLivekitConfigUpdatePutResponseData extends JsonObject {
  "livekit_url": string;
  "livekit_ws_url": string;
  "api_key": string;
  "has_api_secret": boolean;
  "egress_enabled": boolean;
  "egress_layout": string;
  "recording_prefix": string;
  "s3_endpoint": string;
  "s3_region": string;
  "s3_bucket": string;
  "s3_access_key": string;
  "has_s3_secret_key": boolean;
  "s3_force_path_style": boolean;
  "agentic_url": string;
  "has_agentic_service_token": boolean;
  "audio_processing_enabled": boolean;
  "audio_model_ref"?: string | null;
  "audio_language": string;
  "chat_model_ref"?: string | null;
  "chat_assistant_id"?: BackendJson<"uuid::Uuid"> | null;
  "task_validation_model_ref"?: string | null;
  "archive_delay_minutes": number;
  "processing_window_start": string;
  "processing_window_end": string;
}
export interface ConfigurationLivekitConfigUpdatePutResponse extends ApiEnvelope<ConfigurationLivekitConfigUpdatePutResponseData> {
}

/** Backend response type: crate::integration::models::IntegrationDocsResponse. */
export interface IntegrationIntegrationDocsShowGetResponseData extends JsonObject {
  "api_base_path": string;
  "livekit_ws_url": string;
  "authentication": string;
  "steps": BackendJson<"IntegrationStep">[];
  "snippets": BackendJson<"IntegrationSnippet">[];
}
export interface IntegrationIntegrationDocsShowGetResponse extends ApiEnvelope<IntegrationIntegrationDocsShowGetResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<BackendJson<"infera_flow_sdk::FlowIntegrationResponse">> {
}

/** Backend response type: Value. */
export interface AssistantToolsToolSchemaGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: SessionQuery. */
export interface AssistantToolsListUserSessionsGetQuery extends QueryParams {
  "q"?: string | null;
  "limit"?: number | null;
}
/** Backend response type: Value. */
export interface AssistantToolsListUserSessionsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface AssistantToolsUserSessionDetailGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: RecordingQueueQuery. */
export interface RecordingRecordingsIndexGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "search"?: string | null;
  "status"?: string | null;
}
/** Backend response type: RecordingQueueResponse. */
export interface RecordingRecordingsIndexGetResponseData extends JsonObject {
  "recordings": BackendJson<"RecordingQueueItem">[];
  "meta": BackendJson<"PagedPaginationMeta">;
}
export interface RecordingRecordingsIndexGetResponse extends ApiEnvelope<RecordingRecordingsIndexGetResponseData> {
}

/** Backend response type: RecordingManifestResponse. */
export interface RecordingRecordingManifestGetResponseData extends JsonObject {
  "schema_version": number;
  "recording_id": string;
  "room_id": string;
  "status": string;
  "started_at"?: string | null;
  "stopped_at"?: string | null;
  "archive_key"?: string | null;
  "manifest_key"?: string | null;
  "tracks": BackendJson<"RecordingTrackResponse">[];
  "audio_analyses": BackendJson<"AudioAnalysisResponse">[];
}
export interface RecordingRecordingManifestGetResponse extends ApiEnvelope<RecordingRecordingManifestGetResponseData> {
}

/** Backend request type: ScheduleRecordingRequest. */
export interface RecordingRecordingSchedulePostInput extends JsonObject {
  "process_at": string;
  "audio_processing"?: boolean | null;
  "audio_model_ref"?: string | null;
}
/** Backend response type: RecordingManifestResponse. */
export interface RecordingRecordingSchedulePostResponseData extends JsonObject {
  "schema_version": number;
  "recording_id": string;
  "room_id": string;
  "status": string;
  "started_at"?: string | null;
  "stopped_at"?: string | null;
  "archive_key"?: string | null;
  "manifest_key"?: string | null;
  "tracks": BackendJson<"RecordingTrackResponse">[];
  "audio_analyses": BackendJson<"AudioAnalysisResponse">[];
}
export interface RecordingRecordingSchedulePostResponse extends ApiEnvelope<RecordingRecordingSchedulePostResponseData> {
}

/** Backend response type: Vec<AudioModel>. */
export interface RecordingAudioModelsGetResponseItem extends JsonObject {
  "model_ref": string;
  "model": string;
  "provider_label": string;
  "source": string;
}
export interface RecordingAudioModelsGetResponse extends ApiEnvelope<RecordingAudioModelsGetResponseItem[]> {
}

/** Backend request type: RoomStateRespond. */
export interface RoomStateRoomStateRespondPostInput extends JsonObject {
  "values": string[];
  "evidence_images"?: BackendJson<"TaskEvidenceImage">[];
}
/** Backend response type: RoomStateRespondResponse. */
export interface RoomStateRoomStateRespondPostResponseData extends JsonObject {
  "validated": boolean;
  "event": string;
  "reason"?: string | null;
}
export interface RoomStateRoomStateRespondPostResponse extends ApiEnvelope<RoomStateRoomStateRespondPostResponseData> {
}

/** Backend query type: RoomListQuery. */
export interface RoomRoomsIndexGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "custom_only"?: boolean | null;
  "search"?: string | null;
}
/** Backend response type: RoomListResponse. */
export interface RoomRoomsIndexGetResponseData extends JsonObject {
  "rooms": BackendJson<"RoomResponse">[];
}
export interface RoomRoomsIndexGetResponse extends ApiEnvelope<RoomRoomsIndexGetResponseData> {
}

/** Backend request type: RoomCreate. */
export interface RoomRoomsCreatePostInput extends JsonObject {
  "name": string;
  "capacity": number;
  "session_id"?: string | null;
  "users"?: string[] | null;
  "states"?: BackendJson<"RoomStateCommand">[] | null;
  "status"?: number | null;
  "starts_at": string;
  "drm_mixed_media_id"?: string | null;
}
/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsCreatePostResponseData extends JsonObject {
  "room": BackendJson<"RoomDetailResponse">;
}
export interface RoomRoomsCreatePostResponse extends ApiEnvelope<RoomRoomsCreatePostResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsDeleteDeleteResponseData extends JsonObject {
  "room": BackendJson<"RoomDetailResponse">;
}
export interface RoomRoomsDeleteDeleteResponse extends ApiEnvelope<RoomRoomsDeleteDeleteResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsShowGetResponseData extends JsonObject {
  "room": BackendJson<"RoomDetailResponse">;
}
export interface RoomRoomsShowGetResponse extends ApiEnvelope<RoomRoomsShowGetResponseData> {
}

/** Backend request type: RoomUpdate. */
export interface RoomRoomsUpdatePatchInput extends JsonObject {
  "name"?: string | null;
  "capacity"?: number | null;
  "session_id"?: string | null;
  "users"?: string[] | null;
  "states"?: BackendJson<"RoomStateCommand">[] | null;
  "status"?: number | null;
  "starts_at"?: string | null;
}
/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsUpdatePatchResponseData extends JsonObject {
  "room": BackendJson<"RoomDetailResponse">;
}
export interface RoomRoomsUpdatePatchResponse extends ApiEnvelope<RoomRoomsUpdatePatchResponseData> {
}

/** Backend request type: RoomUpdate. */
export interface RoomRoomsUpdatePutInput extends JsonObject {
  "name"?: string | null;
  "capacity"?: number | null;
  "session_id"?: string | null;
  "users"?: string[] | null;
  "states"?: BackendJson<"RoomStateCommand">[] | null;
  "status"?: number | null;
  "starts_at"?: string | null;
}
/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsUpdatePutResponseData extends JsonObject {
  "room": BackendJson<"RoomDetailResponse">;
}
export interface RoomRoomsUpdatePutResponse extends ApiEnvelope<RoomRoomsUpdatePutResponseData> {
}

/** Backend response type: APIEmptyResponse. */
export interface RoomRoomsEndPostResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type RoomRoomsEndPostResponse = RoomRoomsEndPostResponseData;

/** Backend response type: APIEmptyResponse. */
export interface RoomRoomsInteractiveStartPostResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type RoomRoomsInteractiveStartPostResponse = RoomRoomsInteractiveStartPostResponseData;

/** Backend response type: LiveKitJoinResponse. */
export interface RoomRoomsJoinGetResponseData extends JsonObject {
  "token": string;
  "url": string;
  "room_name": string;
  "can_end": boolean;
  "chat_model_ref"?: string | null;
  "chat_assistant_id"?: string | null;
  "realtime"?: BackendJson<"RealtimeJoinResponse"> | null;
}
export interface RoomRoomsJoinGetResponse extends ApiEnvelope<RoomRoomsJoinGetResponseData> {
}

/** Backend response type: RoomLeaderboardResponse. */
export interface RoomRoomsLeaderboardGetResponseData extends JsonObject {
  "entries": BackendJson<"RoomLeaderboardEntry">[];
}
export interface RoomRoomsLeaderboardGetResponse extends ApiEnvelope<RoomRoomsLeaderboardGetResponseData> {
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
  "room": BackendJson<"RoomDetailFullResponse">;
}
export interface RoomRoomsPlaybackShowGetResponse extends ApiEnvelope<RoomRoomsPlaybackShowGetResponseData> {
}

/** Backend response type: RoomRecordingResponse. */
export interface RoomRoomsRecordingsGetResponseData extends JsonObject {
  "room": BackendJson<"RoomRecordingRoomResponse">;
  "recordings": BackendJson<"RoomRecording">[];
}
export interface RoomRoomsRecordingsGetResponse extends ApiEnvelope<RoomRoomsRecordingsGetResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsStopGetResponseData extends JsonObject {
  "room": BackendJson<"RoomDetailResponse">;
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

/** Backend response type: APIEmptyResponse. */
export interface RoomLivekitWebhookPostResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type RoomLivekitWebhookPostResponse = RoomLivekitWebhookPostResponseData;
