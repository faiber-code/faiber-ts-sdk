import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";
function wildcardPath(path: Identifier): string {
  const parts = String(path).split("/");
  if (parts.some(part => !part || part === "." || part === ".." || /[%?#\\]/.test(part))) throw new TypeError("Wildcard paths require nonempty raw segments without dot traversal, percent escapes, query, fragment or backslash");
  return parts.map(part => encodeURIComponent(part)).join("/");
}

export class SessionOperations extends ServiceApi {
  /**
   * Read public liveness and hard-coded service version; no database readiness probe.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local permission requirement; production auth context middleware still runs.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Read flattened branding with nullable title/icon and locale map. Requires a non-nil user and config:read.
   * Calls `GET /api/v1/config/branding` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; config:read.
   */
  brandingShowGet(options?: RequestOptions) {
    return this.client.request<T.BrandingShowGetResponse>({ ...options, method: "GET", url: `/api/v1/config/branding` });
  }
  /**
   * Replace branding; omitted fields reset to defaults. Locale keys normalize lowercase, titles trim (500 characters max), at most 30 locales; icon URL derives from uploaded key. Invalid/unuploaded keys return422.
   * Calls `PUT /api/v1/config/branding` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; config:update.
   */
  brandingUpdatePut(data: T.BrandingUpdatePutInput, options?: RequestOptions<T.BrandingUpdatePutInput>) {
    return this.client.request<T.BrandingUpdatePutResponse, T.BrandingUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/config/branding`, data: data });
  }
  /**
   * Upload FormData with file as its first field. PNG/JPEG/WebP signature and MIME must match; nonempty image at most8MiB. Returns asset_key and URL; malformed, oversized and unsupported files return400/413/415.
   * Calls `POST /api/v1/config/branding/assets` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; config:update.
   */
  brandingUploadPost(data: T.BrandingUploadPostInput, options?: RequestOptions<T.BrandingUploadPostInput>) {
    return this.client.request<T.BrandingUploadPostResponse, T.BrandingUploadPostInput>({ ...options, method: "POST", url: `/api/v1/config/branding/assets`, data: data });
  }
  /**
   * Read LiveKit/recording/AI settings with secret-presence booleans; secrets are never returned.
   * Calls `GET /api/v1/config/livekit` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; config:read.
   */
  configurationLivekitConfigShowGet(options?: RequestOptions) {
    return this.client.request<T.ConfigurationLivekitConfigShowGetResponse>({ ...options, method: "GET", url: `/api/v1/config/livekit` });
  }
  /**
   * Replace LiveKit settings. Missing/null/blank secret fields preserve existing secrets; omitted audio_processing_enabled becomes false, audio_language defaults auto. Model refs may clear with null. Invalid URLs, language, schedules and model configuration return422.
   * Calls `PUT /api/v1/config/livekit` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; config:update.
   */
  configurationLivekitConfigUpdatePut(data: T.ConfigurationLivekitConfigUpdatePutInput, options?: RequestOptions<T.ConfigurationLivekitConfigUpdatePutInput>) {
    return this.client.request<T.ConfigurationLivekitConfigUpdatePutResponse, T.ConfigurationLivekitConfigUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/config/livekit`, data: data });
  }
  /**
   * Read browser integration steps and code snippets with the configured public LiveKit websocket URL.
   * Calls `GET /api/v1/integration/docs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; integration:read.
   */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /**
   * Read the two stable assistant tool schemas (session_list and session_detail). This route has no local permission gate.
   * Calls `GET /api/v1/integrations/chat/tool-schema` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local permission requirement; production auth context middleware still runs.
   */
  assistantToolsToolSchemaGet(options?: RequestOptions) {
    return this.client.request<T.AssistantToolsToolSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/integrations/chat/tool-schema` });
  }
  /**
   * List the specified user participant rooms by newest activity. q searches room name; limit defaults20 and clamps1..100. Latest analysis is restricted to that user and transcript truncates to1200 characters.
   * Calls `GET /api/v1/integrations/chat/users/{user_id}/sessions` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Own user plus assistant_session:read_own OR room_recording:read_own OR room:read_recordings; OR assistant_session:read_all/room_recording:read_all. * and session:* accepted.
   */
  assistantToolsListUserSessionsGet(userId: Identifier, params?: T.AssistantToolsListUserSessionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AssistantToolsListUserSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/integrations/chat/users/${encodeURIComponent(userId)}/sessions`, params });
  }
  /**
   * Read one room only if the specified user is a participant; missing membership/room returns404. Own access filters analyses to that user; read_all includes all room analyses. DRM manifest and model analysis remain provider-owned JSON.
   * Calls `GET /api/v1/integrations/chat/users/{user_id}/sessions/{room_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Own user plus assistant_session:read_own OR room_recording:read_own OR room:read_recordings; OR assistant_session:read_all/room_recording:read_all. * and session:* accepted.
   */
  assistantToolsUserSessionDetailGet(userId: Identifier, roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AssistantToolsUserSessionDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/integrations/chat/users/${encodeURIComponent(userId)}/sessions/${encodeURIComponent(roomId)}` });
  }
  /**
   * Read trusted LMS notification state. Header x-infera-lms-token must match LMS_SERVICE_TOKEN (403 on mismatch,503 if missing/provider unavailable). This read can persist learning start and an outbox event; LiveKit probe timeout is5s.
   * Calls `GET /api/v1/integrations/lms/rooms/{id}/notification-state` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server-only x-infera-lms-token matching LMS_SERVICE_TOKEN.
   */
  notificationStateSnapshotGet(id: string, options?: RequestOptions) {
    return this.client.request<T.NotificationStateSnapshotGetResponse>({ ...options, method: "GET", url: `/api/v1/integrations/lms/rooms/${encodeURIComponent(id)}/notification-state` });
  }
  /**
   * Read public flattened branding and nullable runtime-validated feedback_task_origin. This origin cannot be saved through branding.
   * Calls `GET /api/v1/public/branding` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local permission requirement; production auth context middleware still runs.
   */
  brandingPublicShowGet(options?: RequestOptions) {
    return this.client.request<T.BrandingPublicShowGetResponse>({ ...options, method: "GET", url: `/api/v1/public/branding` });
  }
  /**
   * Read public raw branding image bytes with immutable cache headers. Invalid/missing UUID.extension key returns404; this is not a JSON envelope.
   * Calls `GET /api/v1/public/branding/assets/{key}` through the shared IDP-aware Faiber client.
   * @param key Backend path identifier `key`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local permission requirement; production auth context middleware still runs.
   */
  brandingAssetGet(key: Identifier, options?: RequestOptions) {
    return this.client.request<T.BrandingAssetGetResponse>({ ...options, method: "GET", url: `/api/v1/public/branding/assets/${encodeURIComponent(key)}`, responseType: "arraybuffer" });
  }
  /**
   * Page recording queue with page_number/page_size (default1/10, page>=1 and size1..100), escaped literal search and exact status filter. Returns recordings and meta; sorted by started_at descending.
   * Calls `GET /api/v1/recordings` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room_recording:read; aliases room_recording:read_all, room:read_recordings.
   */
  recordingRecordingsIndexGet(params?: T.RecordingRecordingsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RecordingRecordingsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/recordings`, params });
  }
  /**
   * Read typed recording tracks and analyses; missing recording returns404. Own read requires current room-client membership; global/admin scopes are accepted. Analysis remains model-owned JSON.
   * Calls `GET /api/v1/recordings/{recording_id}/manifest` through the shared IDP-aware Faiber client.
   * @param recordingId Backend path identifier `recording_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room_recording:read; aliases room_recording:read_all, room_recording:read_own, room:read_recordings.
   */
  recordingRecordingManifestGet(recordingId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RecordingRecordingManifestGetResponse>({ ...options, method: "GET", url: `/api/v1/recordings/${encodeURIComponent(recordingId)}/manifest` });
  }
  /**
   * Schedule ready/scheduled/failed recording processing; raw_capturing/processing/archived/deleting or raced transitions return409. process_at is timezone-free ISO datetime. Omitted/null optional audio fields preserve current values.
   * Calls `POST /api/v1/recordings/{recording_id}/schedule` through the shared IDP-aware Faiber client.
   * @param recordingId Backend path identifier `recording_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room_recording:process.
   */
  recordingRecordingSchedulePost(recordingId: Identifier, data: T.RecordingRecordingSchedulePostInput, options?: RequestOptions<T.RecordingRecordingSchedulePostInput>) {
    return this.client.request<T.RecordingRecordingSchedulePostResponse, T.RecordingRecordingSchedulePostInput>({ ...options, method: "POST", url: `/api/v1/recordings/${encodeURIComponent(recordingId)}/schedule`, data: data });
  }
  /**
   * Read normalized Agentic audio model catalog using configured financial owner or current config user; missing owner/upstream failure returns502.
   * Calls `GET /api/v1/recordings/audio-models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; config:read.
   */
  recordingAudioModelsGet(options?: RequestOptions) {
    return this.client.request<T.RecordingAudioModelsGetResponse>({ ...options, method: "GET", url: `/api/v1/recordings/audio-models` });
  }
  /**
   * Respond as a current participant to question/task/game state. Staff cannot answer questions/tasks. values are required; evidence_images defaults empty. Failed task validation returns200 with validated:false, without persisting completion. Accepted replies may advance the active cohort and emit rewards.
   * Calls `POST /api/v1/room_states/{room_state_id}/respond` through the shared IDP-aware Faiber client.
   * @param roomStateId Backend path identifier `room_state_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room_state:respond; aliases room:read_own.
   */
  roomStateRoomStateRespondPost(roomStateId: Identifier, data: T.RoomStateRoomStateRespondPostInput, options?: RequestOptions<T.RoomStateRoomStateRespondPostInput>) {
    return this.client.request<T.RoomStateRoomStateRespondPostResponse, T.RoomStateRoomStateRespondPostInput>({ ...options, method: "POST", url: `/api/v1/room_states/${encodeURIComponent(roomStateId)}/respond`, data: data });
  }
  /**
   * List rooms with page_number/page_size (default1/10; supply positive values), custom_only and normalized Persian/literal search. Returns data.rooms without pagination metadata. status is numeric; current_state uses Rust enum variant casing.
   * Calls `GET /api/v1/rooms` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:read; aliases room:read_all, room:read_own.
   */
  roomRoomsIndexGet(params?: T.RoomRoomsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms`, params });
  }
  /**
   * Create a room with required name/capacity/starts_at; starts_at is timezone-free ISO datetime. Room-state names use PascalCase (ChargeLow), numeric room status defaults1. Composition rooms materialize DRM state later. Returns200 data.room.
   * Calls `POST /api/v1/rooms` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:create; aliases room:read, room:read_own.
   */
  roomRoomsCreatePost(data: T.RoomRoomsCreatePostInput, options?: RequestOptions<T.RoomRoomsCreatePostInput>) {
    return this.client.request<T.RoomRoomsCreatePostResponse, T.RoomRoomsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/rooms`, data: data });
  }
  /**
   * Delete room and dependent records; returns200 data.room snapshot of the deleted room, not a generic deleted boolean. Missing room returns404; started-room media cleanup is best effort.
   * Calls `DELETE /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:delete.
   */
  roomRoomsDeleteDelete(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/rooms/${encodeURIComponent(roomId)}` });
  }
  /**
   * Read room detail with nullable timestamps/current_state and numeric status. Requires preview access or own room membership; missing room returns404.
   * Calls `GET /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:read; aliases room:read_all, room:read_own.
   */
  roomRoomsShowGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}` });
  }
  /**
   * Partially update a room via PUT or PATCH (same handler). Omitted/null optional fields preserve values; users/states arrays synchronize membership/states. Before start, timing/state edits reset lifecycle; after start progress is retained. Missing room currently returns500.
   * Calls `PATCH /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:update.
   */
  roomRoomsUpdatePatch(roomId: Identifier, data: T.RoomRoomsUpdatePatchInput, options?: RequestOptions<T.RoomRoomsUpdatePatchInput>) {
    return this.client.request<T.RoomRoomsUpdatePatchResponse, T.RoomRoomsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/rooms/${encodeURIComponent(roomId)}`, data: data });
  }
  /**
   * Partially update a room via PUT or PATCH (same handler). Omitted/null optional fields preserve values; users/states arrays synchronize membership/states. Before start, timing/state edits reset lifecycle; after start progress is retained. Missing room currently returns500.
   * Calls `PUT /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:update.
   */
  roomRoomsUpdatePut(roomId: Identifier, data: T.RoomRoomsUpdatePutInput, options?: RequestOptions<T.RoomRoomsUpdatePutInput>) {
    return this.client.request<T.RoomRoomsUpdatePutResponse, T.RoomRoomsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/rooms/${encodeURIComponent(roomId)}`, data: data });
  }
  /**
   * End current room; requires teacher/admin/manager role or current LMS teacher in addition to permission. Returns200 {status,message} without data; absent room returns404.
   * Calls `POST /api/v1/rooms/{room_id}/end` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:end.
   */
  roomRoomsEndPost(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsEndPostResponse>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/end` });
  }
  /**
   * Queue a server-authorized interaction for an unmuted participant in an active room. Reuse event_id only for identical interaction/content; changed or pending retries return409. content max4096 encoded bytes; disabled interactions return422. Asset receipt returns unchanged.
   * Calls `POST /api/v1/rooms/{room_id}/interactions` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:read_own; aliases room:read.
   */
  assetEconomyInteractPost(roomId: Identifier, data: T.AssetEconomyInteractPostInput, options?: RequestOptions<T.AssetEconomyInteractPostInput>) {
    return this.client.request<T.AssetEconomyInteractPostResponse, T.AssetEconomyInteractPostInput>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/interactions`, data: data });
  }
  /**
   * Start interactive state for a current room participant after asset checks; no request body. Returns200 {status,message} without data; missing room/client returns404.
   * Calls `POST /api/v1/rooms/{room_id}/interactive/start` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:start_interactive; aliases room:read_own.
   */
  roomRoomsInteractiveStartPost(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsInteractiveStartPostResponse>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/interactive/start` });
  }
  /**
   * Issue fresh LiveKit participant token after preview/participant checks and asset admission. Ended room returns empty token. chat_model_ref/chat_assistant_id/realtime are omitted when unavailable; membership and provider grants are enforced server-side.
   * Calls `GET /api/v1/rooms/{room_id}/join` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:read_livekit_token; aliases room:read, room:read_all, room:read_own.
   */
  roomRoomsJoinGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsJoinGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/join` });
  }
  /**
   * Read active seconds, earned coins and asset names per participant; this handler has no extra room-membership check beyond declared permission.
   * Calls `GET /api/v1/rooms/{room_id}/leaderboard` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:read_own; aliases room:read, room:read_all.
   */
  roomRoomsLeaderboardGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsLeaderboardGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/leaderboard` });
  }
  /**
   * Issue LiveKit preview/participant token after preview/membership checks; ended room returns409 and missing room returns404.
   * Calls `GET /api/v1/rooms/{room_id}/livekit-token` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:read_livekit_token; aliases room:read, room:read_all, room:read_own, room_recording:read, room_recording:read_all, room_recording:read_own.
   */
  roomRoomsLivekitTokenGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsLivekitTokenGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/livekit-token` });
  }
  /**
   * Read current participant mute status; expired mute becomes null. Authenticated user and existing participant are required; absent participant returns404.
   * Calls `GET /api/v1/rooms/{room_id}/moderation` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:read_own; aliases room:read, room:read_all.
   */
  roomRoomsSelfModerationGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsSelfModerationGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/moderation` });
  }
  /**
   * Mute/unmute a student as teacher/admin/manager or current LMS teacher. Self mute returns400, staff targets403, unverifiable LMS staff503. Returns nullable muted_until.
   * Calls `PUT /api/v1/rooms/{room_id}/participants/{profile_id}/mute` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param profileId Backend path identifier `profile_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:end; aliases room:update, room:read, room:read_own.
   */
  roomRoomsParticipantMutePut(roomId: Identifier, profileId: Identifier, data: T.RoomRoomsParticipantMutePutInput, options?: RequestOptions<T.RoomRoomsParticipantMutePutInput>) {
    return this.client.request<T.RoomRoomsParticipantMutePutResponse, T.RoomRoomsParticipantMutePutInput>({ ...options, method: "PUT", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/participants/${encodeURIComponent(profileId)}/mute`, data: data });
  }
  /**
   * Read full playback room/states after preview and readiness checks. Classroom session IDs can resolve through LMS. Unready/untimed composition returns409; timestamps include nullable available_until.
   * Calls `GET /api/v1/rooms/{room_id}/playback` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:read_playback; aliases room:read, room:read_all, room:read_own, room_recording:read, room_recording:read_all, room_recording:read_own.
   */
  roomRoomsPlaybackShowGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsPlaybackShowGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/playback` });
  }
  /**
   * Read joined/left activity-log events for an authorized previewer or participant, sorted by timestamp then ID. Output timestamps are UTC; missing room returns404.
   * Calls `GET /api/v1/rooms/{room_id}/presence-events` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:read; aliases room:read_all, room:read_own.
   */
  roomRoomsPresenceEventsGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsPresenceEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/presence-events` });
  }
  /**
   * Read recording list and analyses after recording permission and current membership/global/admin checks; presigned URLs are returned, with model-produced analysis JSON.
   * Calls `GET /api/v1/rooms/{room_id}/recordings` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room_recording:read; aliases room_recording:read_all, room_recording:read_own, room:read_recordings.
   */
  roomRoomsRecordingsGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsRecordingsGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/recordings` });
  }
  /**
   * Stop room using its registered GET route and return200 data.room. This operation mutates state; missing room returns404.
   * Calls `GET /api/v1/rooms/{room_id}/stop` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:stop.
   */
  roomRoomsStopGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsStopGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/stop` });
  }
  /**
   * Read ongoing sessions, today sessions and distinct ongoing/today connected users from repository activity and room records.
   * Calls `GET /api/v1/rooms/analytics` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP Bearer token or secure cookie via shared FaiberClient; room:read_analytics.
   */
  roomRoomsAnalyticsGet(options?: RequestOptions) {
    return this.client.request<T.RoomRoomsAnalyticsGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/analytics` });
  }
  /**
   * Receive signed LiveKit webhook raw bytes; preserve the signed body exactly and supply Authorization. Invalid/missing signature returns401. Success returns200 {status,message} without data; this is server-to-server transport.
   * Calls `POST /api/v1/rooms/livekit/webhook` through the shared IDP-aware Faiber client.
   * @param data Typed binary byte stream.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: LiveKit webhook Authorization signature; preserve exact body bytes.
   */
  roomLivekitWebhookPost(data: T.RoomLivekitWebhookPostInput, options?: RequestOptions<T.RoomLivekitWebhookPostInput>) {
    return this.client.request<T.RoomLivekitWebhookPostResponse, T.RoomLivekitWebhookPostInput>({ ...options, method: "POST", url: `/api/v1/rooms/livekit/webhook`, data: data, headers: { "Content-Type": "application/octet-stream", ...options?.headers } });
  }
  /**
   * Read native observation policy with current IDP Bearer authority session:summary_access:manage; cookie-only and spoofed actor headers are insufficient. Binding is source-owned; this is not an MCP session.
   * Calls `GET /api/v1/summary-access` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current IDP Bearer authority session:summary_access:manage; source binding and downstream collector checks.
   */
  nativeSummaryAccessStatus(options?: RequestOptions) {
    return this.client.request<T.NativeAccessGetStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/summary-access` });
  }
  /**
   * Save native observation policy with optimistic expected_revision (stale409), required reason max1024 Unicode characters, and current collector session:summary:read validation when enabling. After503 reload current state before retrying; mutation may have committed.
   * Calls `PUT /api/v1/summary-access` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current IDP Bearer authority session:summary_access:manage; source binding and downstream collector checks.
   */
  saveNativeSummaryAccessPolicy(data: T.NativeAccessUpdatePolicyPutInput, options?: RequestOptions<T.NativeAccessUpdatePolicyPutInput>) {
    return this.client.request<T.NativeAccessUpdatePolicyPutResponse, T.NativeAccessUpdatePolicyPutInput>({ ...options, method: "PUT", url: `/api/v1/summary-access`, data: data });
  }
  /**
   * Revoke one native summary object with required reason max1024 Unicode characters. Revocation survives policy disable/re-enable. Reload current state after503 because mutation can commit before status reconciliation fails.
   * Calls `POST /api/v1/summary-access/revocations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current IDP Bearer authority session:summary_access:manage; source binding and downstream collector checks.
   */
  revokeNativeSummaryObject(data: T.NativeAccessRevokePostInput, options?: RequestOptions<T.NativeAccessRevokePostInput>) {
    return this.client.request<T.NativeAccessRevokePostResponse, T.NativeAccessRevokePostInput>({ ...options, method: "POST", url: `/api/v1/summary-access/revocations`, data: data });
  }
  /**
   * Restore a native summary object using JSON DELETE body with required reason max1024 Unicode characters. Reload after503; restored status can lag reconciliation.
   * Calls `DELETE /api/v1/summary-access/revocations/{object}` through the shared IDP-aware Faiber client.
   * @param object Backend path identifier `object`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current IDP Bearer authority session:summary_access:manage; source binding and downstream collector checks.
   */
  restoreNativeSummaryObject(object: Identifier, data: T.NativeAccessRestoreDeleteInput, options?: RequestOptions<T.NativeAccessRestoreDeleteInput>) {
    return this.client.request<T.NativeAccessRestoreDeleteResponse, T.NativeAccessRestoreDeleteInput>({ ...options, method: "DELETE", url: `/api/v1/summary-access/revocations/${encodeURIComponent(object)}`, data: data });
  }
  /**
   * Forward opaque peer bytes through Session actor extraction to chat/asset/profile/drm/lms; explicit HTTP method and separate query. Body max2MiB (413); missing configured Chat/DRM/LMS or upstream failure502; unknown peer404. Chat room grants enforce membership and filter collections; DRM path-based read grants do not prove room membership. Response headers are allowlisted; SDK buffers upstream streams.
   * Calls `ANY /api/v1/view/{service}/{*path}` through the shared IDP-aware Faiber client.
   * @param service Backend path identifier `service`.
   * @param path Backend path identifier `*path`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param data Typed JSON request body.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Extracted IDP actor; Session room/peer authorization plus target-service current authorization.
   */
  routerProxyViewServiceAny(service: "chat" | "asset" | "profile" | "drm" | "lms", path: string, method: import("@faiber/sdk-core").HttpRequestMethod, data: T.RouterProxyViewServiceAnyInput, params?: T.RouterProxyViewServiceAnyQuery, options?: RequestOptions<T.RouterProxyViewServiceAnyInput>) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.RouterProxyViewServiceAnyResponse, T.RouterProxyViewServiceAnyInput>({ ...options, method: method, url: `/api/v1/view/${encodeURIComponent(service)}/${wildcardPath(path)}`, data: data, params, responseType: "arraybuffer" });
  }
  /**
   * Read public liveness and hard-coded service version; no database readiness probe.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local permission requirement; production auth context middleware still runs.
   */
  routerStatusRouteGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Read Flow integration queue/events from the pinned infera-flow-sdk model; mounted at root /integration/flow.
   * Calls `GET /integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local permission requirement; production auth context middleware still runs.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/integration/flow` });
  }
}
