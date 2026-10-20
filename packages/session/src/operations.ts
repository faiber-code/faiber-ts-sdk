import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";
function wildcardPath(path: Identifier): string {
  const parts = String(path).split("/");
  if (parts.some(part => !part || part === "." || part === ".." || /[%?#\\]/.test(part))) throw new TypeError("Wildcard paths require nonempty raw segments without dot traversal, percent escapes, query, fragment or backslash");
  return parts.map(part => encodeURIComponent(part)).join("/");
}

export class SessionOperations extends ServiceApi {
  /**
   * Read the Session process version; does not verify database or media-provider readiness.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Read or save native learner branding with localized text and asset references. Runtime feedback routing is configured separately.
   * Calls `GET /api/v1/config/branding` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session:config:read.
   */
  brandingShowGet(options?: RequestOptions) {
    return this.client.request<T.BrandingShowGetResponse>({ ...options, method: "GET", url: `/api/v1/config/branding` });
  }
  /**
   * Read or save native learner branding with localized text and asset references. Runtime feedback routing is configured separately.
   * Calls `PUT /api/v1/config/branding` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session:config:update.
   */
  brandingUpdatePut(data: T.BrandingUpdatePutInput, options?: RequestOptions<T.BrandingUpdatePutInput>) {
    return this.client.request<T.BrandingUpdatePutResponse, T.BrandingUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/config/branding`, data: data });
  }
  /**
   * Performs the upload operation for the branding capability.
   * Calls `POST /api/v1/config/branding/assets` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: config:update.
   */
  brandingUploadPost(data: T.BrandingUploadPostInput, options?: RequestOptions<T.BrandingUploadPostInput>) {
    return this.client.request<T.BrandingUploadPostResponse, T.BrandingUploadPostInput>({ ...options, method: "POST", url: `/api/v1/config/branding/assets`, data: data });
  }
  /**
   * Performs the livekit config show operation for the configuration capability.
   * Calls `GET /api/v1/config/livekit` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: config:read.
   */
  configurationLivekitConfigShowGet(options?: RequestOptions) {
    return this.client.request<T.ConfigurationLivekitConfigShowGetResponse>({ ...options, method: "GET", url: `/api/v1/config/livekit` });
  }
  /**
   * Performs the livekit config update operation for the configuration capability.
   * Calls `PUT /api/v1/config/livekit` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: config:update.
   */
  configurationLivekitConfigUpdatePut(data: T.ConfigurationLivekitConfigUpdatePutInput, options?: RequestOptions<T.ConfigurationLivekitConfigUpdatePutInput>) {
    return this.client.request<T.ConfigurationLivekitConfigUpdatePutResponse, T.ConfigurationLivekitConfigUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/config/livekit`, data: data });
  }
  /**
   * Performs the integration docs show operation for the integration capability.
   * Calls `GET /api/v1/integration/docs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: integration:read.
   */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /**
   * Performs the tool schema operation for the assistant tools capability.
   * Calls `GET /api/v1/integrations/chat/tool-schema` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  assistantToolsToolSchemaGet(options?: RequestOptions) {
    return this.client.request<T.AssistantToolsToolSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/integrations/chat/tool-schema` });
  }
  /**
   * Performs the list user sessions operation for the assistant tools capability.
   * Calls `GET /api/v1/integrations/chat/users/{user_id}/sessions` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  assistantToolsListUserSessionsGet(userId: Identifier, params?: T.AssistantToolsListUserSessionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AssistantToolsListUserSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/integrations/chat/users/${encodeURIComponent(userId)}/sessions`, params });
  }
  /**
   * Performs the user session detail operation for the assistant tools capability.
   * Calls `GET /api/v1/integrations/chat/users/{user_id}/sessions/{room_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  assistantToolsUserSessionDetailGet(userId: Identifier, roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AssistantToolsUserSessionDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/integrations/chat/users/${encodeURIComponent(userId)}/sessions/${encodeURIComponent(roomId)}` });
  }
  /**
   * Observe current room presence and persist the first actual learning start with a transactional outbox event when the source rules are satisfied. Live rooms query LiveKit with a five-second timeout; provider failures return503. Composition rooms use recent client activity. Ended rooms return no present users. This GET may persist state; it is not a write-free health check or proof of unique attendance.
   * Calls `GET /api/v1/integrations/lms/rooms/{id}/notification-state` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only x-infera-lms-token matching LMS_SERVICE_TOKEN; missing configuration returns503, invalid token403.
   */
  notificationStateSnapshotGet(id: string, options?: RequestOptions) {
    return this.client.request<T.NotificationStateSnapshotGetResponse>({ ...options, method: "GET", url: `/api/v1/integrations/lms/rooms/${encodeURIComponent(id)}/notification-state` });
  }
  /**
   * Read public branding and the validated configuration-derived feedback Task origin. Runtime discovery is not a writable branding field.
   * Calls `GET /api/v1/public/branding` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public runtime branding/discovery; no actor or administration permission.
   */
  brandingPublicShowGet(options?: RequestOptions) {
    return this.client.request<T.BrandingPublicShowGetResponse>({ ...options, method: "GET", url: `/api/v1/public/branding` });
  }
  /**
   * Performs the asset operation for the branding capability.
   * Calls `GET /api/v1/public/branding/assets/{key}` through the shared IDP-aware Faiber client.
   * @param key Backend path identifier `key`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  brandingAssetGet(key: Identifier, options?: RequestOptions) {
    return this.client.request<T.BrandingAssetGetResponse>({ ...options, method: "GET", url: `/api/v1/public/branding/assets/${encodeURIComponent(key)}` });
  }
  /**
   * Performs the recordings index operation for the recording capability.
   * Calls `GET /api/v1/recordings` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room_recording:read.
   */
  recordingRecordingsIndexGet(params?: T.RecordingRecordingsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RecordingRecordingsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/recordings`, params });
  }
  /**
   * Performs the recording manifest operation for the recording capability.
   * Calls `GET /api/v1/recordings/{recording_id}/manifest` through the shared IDP-aware Faiber client.
   * @param recordingId Backend path identifier `recording_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room_recording:read.
   */
  recordingRecordingManifestGet(recordingId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RecordingRecordingManifestGetResponse>({ ...options, method: "GET", url: `/api/v1/recordings/${encodeURIComponent(recordingId)}/manifest` });
  }
  /**
   * Performs the recording schedule operation for the recording capability.
   * Calls `POST /api/v1/recordings/{recording_id}/schedule` through the shared IDP-aware Faiber client.
   * @param recordingId Backend path identifier `recording_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room_recording:process.
   */
  recordingRecordingSchedulePost(recordingId: Identifier, data: T.RecordingRecordingSchedulePostInput, options?: RequestOptions<T.RecordingRecordingSchedulePostInput>) {
    return this.client.request<T.RecordingRecordingSchedulePostResponse, T.RecordingRecordingSchedulePostInput>({ ...options, method: "POST", url: `/api/v1/recordings/${encodeURIComponent(recordingId)}/schedule`, data: data });
  }
  /**
   * Performs the audio models operation for the recording capability.
   * Calls `GET /api/v1/recordings/audio-models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: config:read.
   */
  recordingAudioModelsGet(options?: RequestOptions) {
    return this.client.request<T.RecordingAudioModelsGetResponse>({ ...options, method: "GET", url: `/api/v1/recordings/audio-models` });
  }
  /**
   * Performs the room state respond operation for the room state capability.
   * Calls `POST /api/v1/room_states/{room_state_id}/respond` through the shared IDP-aware Faiber client.
   * @param roomStateId Backend path identifier `room_state_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room_state:respond.
   */
  roomStateRoomStateRespondPost(roomStateId: Identifier, data: T.RoomStateRoomStateRespondPostInput, options?: RequestOptions<T.RoomStateRoomStateRespondPostInput>) {
    return this.client.request<T.RoomStateRoomStateRespondPostResponse, T.RoomStateRoomStateRespondPostInput>({ ...options, method: "POST", url: `/api/v1/room_states/${encodeURIComponent(roomStateId)}/respond`, data: data });
  }
  /**
   * Performs the rooms index operation for the room capability.
   * Calls `GET /api/v1/rooms` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:read.
   */
  roomRoomsIndexGet(params?: T.RoomRoomsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms`, params });
  }
  /**
   * Performs the rooms create operation for the room capability.
   * Calls `POST /api/v1/rooms` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:create.
   */
  roomRoomsCreatePost(data: T.RoomRoomsCreatePostInput, options?: RequestOptions<T.RoomRoomsCreatePostInput>) {
    return this.client.request<T.RoomRoomsCreatePostResponse, T.RoomRoomsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/rooms`, data: data });
  }
  /**
   * Performs the rooms delete operation for the room capability.
   * Calls `DELETE /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:delete.
   */
  roomRoomsDeleteDelete(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/rooms/${encodeURIComponent(roomId)}` });
  }
  /**
   * Performs the rooms show operation for the room capability.
   * Calls `GET /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:read.
   */
  roomRoomsShowGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}` });
  }
  /**
   * Performs the rooms update operation for the room capability.
   * Calls `PATCH /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:update.
   */
  roomRoomsUpdatePatch(roomId: Identifier, data: T.RoomRoomsUpdatePatchInput, options?: RequestOptions<T.RoomRoomsUpdatePatchInput>) {
    return this.client.request<T.RoomRoomsUpdatePatchResponse, T.RoomRoomsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/rooms/${encodeURIComponent(roomId)}`, data: data });
  }
  /**
   * Performs the rooms update operation for the room capability.
   * Calls `PUT /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:update.
   */
  roomRoomsUpdatePut(roomId: Identifier, data: T.RoomRoomsUpdatePutInput, options?: RequestOptions<T.RoomRoomsUpdatePutInput>) {
    return this.client.request<T.RoomRoomsUpdatePutResponse, T.RoomRoomsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/rooms/${encodeURIComponent(roomId)}`, data: data });
  }
  /**
   * Performs the rooms end operation for the room capability.
   * Calls `POST /api/v1/rooms/{room_id}/end` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:end.
   */
  roomRoomsEndPost(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsEndPostResponse>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/end` });
  }
  /**
   * Performs the interact operation for the asset economy capability.
   * Calls `POST /api/v1/rooms/{room_id}/interactions` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:read_own.
   */
  assetEconomyInteractPost(roomId: Identifier, data: T.AssetEconomyInteractPostInput, options?: RequestOptions<T.AssetEconomyInteractPostInput>) {
    return this.client.request<T.AssetEconomyInteractPostResponse, T.AssetEconomyInteractPostInput>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/interactions`, data: data });
  }
  /**
   * Performs the rooms interactive start operation for the room capability.
   * Calls `POST /api/v1/rooms/{room_id}/interactive/start` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:start_interactive.
   */
  roomRoomsInteractiveStartPost(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsInteractiveStartPostResponse>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/interactive/start` });
  }
  /**
   * Performs the rooms join operation for the room capability.
   * Calls `GET /api/v1/rooms/{room_id}/join` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:read_livekit_token.
   */
  roomRoomsJoinGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsJoinGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/join` });
  }
  /**
   * Performs the rooms leaderboard operation for the room capability.
   * Calls `GET /api/v1/rooms/{room_id}/leaderboard` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:read_own.
   */
  roomRoomsLeaderboardGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsLeaderboardGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/leaderboard` });
  }
  /**
   * Performs the rooms livekit token operation for the room capability.
   * Calls `GET /api/v1/rooms/{room_id}/livekit-token` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:read_livekit_token.
   */
  roomRoomsLivekitTokenGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsLivekitTokenGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/livekit-token` });
  }
  /**
   * Performs the rooms self moderation operation for the room capability.
   * Calls `GET /api/v1/rooms/{room_id}/moderation` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:read_own.
   */
  roomRoomsSelfModerationGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsSelfModerationGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/moderation` });
  }
  /**
   * Performs the rooms participant mute operation for the room capability.
   * Calls `PUT /api/v1/rooms/{room_id}/participants/{profile_id}/mute` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param profileId Backend path identifier `profile_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:end.
   */
  roomRoomsParticipantMutePut(roomId: Identifier, profileId: Identifier, data: T.RoomRoomsParticipantMutePutInput, options?: RequestOptions<T.RoomRoomsParticipantMutePutInput>) {
    return this.client.request<T.RoomRoomsParticipantMutePutResponse, T.RoomRoomsParticipantMutePutInput>({ ...options, method: "PUT", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/participants/${encodeURIComponent(profileId)}/mute`, data: data });
  }
  /**
   * Performs the rooms playback show operation for the room capability.
   * Calls `GET /api/v1/rooms/{room_id}/playback` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:read_playback.
   */
  roomRoomsPlaybackShowGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsPlaybackShowGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/playback` });
  }
  /**
   * Performs the rooms presence events operation for the room capability.
   * Calls `GET /api/v1/rooms/{room_id}/presence-events` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:read or room:read_all or room:read_own plus room preview/participation access.
   */
  roomRoomsPresenceEventsGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsPresenceEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/presence-events` });
  }
  /**
   * Performs the rooms recordings operation for the room capability.
   * Calls `GET /api/v1/rooms/{room_id}/recordings` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room_recording:read.
   */
  roomRoomsRecordingsGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsRecordingsGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/recordings` });
  }
  /**
   * Performs the rooms stop operation for the room capability.
   * Calls `GET /api/v1/rooms/{room_id}/stop` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:stop.
   */
  roomRoomsStopGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsStopGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/stop` });
  }
  /**
   * Performs the rooms analytics operation for the room capability.
   * Calls `GET /api/v1/rooms/analytics` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: room:read_analytics.
   */
  roomRoomsAnalyticsGet(options?: RequestOptions) {
    return this.client.request<T.RoomRoomsAnalyticsGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/analytics` });
  }
  /**
   * Performs the livekit webhook operation for the room capability.
   * Calls `POST /api/v1/rooms/livekit/webhook` through the shared IDP-aware Faiber client.
   * @param data Typed binary byte stream.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  roomLivekitWebhookPost(data: T.RoomLivekitWebhookPostInput, options?: RequestOptions<T.RoomLivekitWebhookPostInput>) {
    return this.client.request<T.RoomLivekitWebhookPostResponse, T.RoomLivekitWebhookPostInput>({ ...options, method: "POST", url: `/api/v1/rooms/livekit/webhook`, data: data, headers: { "Content-Type": "application/octet-stream", ...options?.headers } });
  }
  /**
   * Read current configured observer binding, operator policy and reconciliation counts. Missing binding or unavailable IDP/database returns 503; denied current authority returns 401/403.
   * Calls `GET /api/v1/summary-access` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Bearer token revalidated against current IDP session:summary_access:manage; cookie-only sessions are not accepted.
   */
  nativeSummaryAccessStatus(options?: RequestOptions) {
    return this.client.request<T.NativeAccessGetStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/summary-access` });
  }
  /**
   * Approve or disable source-owned read-only observation using the current policy revision. Stale revisions return 409; a blank or overlong reason returns 422. Saving does not clear object revocations or imply reconciliation has finished.
   * Calls `PUT /api/v1/summary-access` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Bearer token revalidated against current IDP session:summary_access:manage; cookie-only sessions are not accepted.
   */
  saveNativeSummaryAccessPolicy(data: T.NativeAccessUpdatePolicyPutInput, options?: RequestOptions<T.NativeAccessUpdatePolicyPutInput>) {
    return this.client.request<T.NativeAccessUpdatePolicyPutResponse, T.NativeAccessUpdatePolicyPutInput>({ ...options, method: "PUT", url: `/api/v1/summary-access`, data: data });
  }
  /**
   * Persist an object revocation under the current source scope. A non-nil object UUID and reason are required; objects outside the configured scope are forbidden. Re-enabling the policy preserves this revocation.
   * Calls `POST /api/v1/summary-access/revocations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Bearer token revalidated against current IDP session:summary_access:manage; cookie-only sessions are not accepted.
   */
  revokeNativeSummaryObject(data: T.NativeAccessRevokePostInput, options?: RequestOptions<T.NativeAccessRevokePostInput>) {
    return this.client.request<T.NativeAccessRevokePostResponse, T.NativeAccessRevokePostInput>({ ...options, method: "POST", url: `/api/v1/summary-access/revocations`, data: data });
  }
  /**
   * Remove an object revocation with a required JSON reason body and reconcile that object under the current source policy. This does not enable a disabled policy or bypass current scope checks.
   * Calls `DELETE /api/v1/summary-access/revocations/{object}` through the shared IDP-aware Faiber client.
   * @param object Backend path identifier `object`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Bearer token revalidated against current IDP session:summary_access:manage; cookie-only sessions are not accepted.
   */
  restoreNativeSummaryObject(object: Identifier, data: T.NativeAccessRestoreDeleteInput, options?: RequestOptions<T.NativeAccessRestoreDeleteInput>) {
    return this.client.request<T.NativeAccessRestoreDeleteResponse, T.NativeAccessRestoreDeleteInput>({ ...options, method: "DELETE", url: `/api/v1/summary-access/revocations/${encodeURIComponent(object)}`, data: data });
  }
  /**
   * Proxy a peer API path through Session with the selected method and at most2MiB request bytes. Supply raw nonempty path segments, not percent-encoded paths, query strings or traversal. Query parameters retain the target API semantics. Returns buffered bytes and full Axios status/headers; use explicit shared-client streaming transport for SSE or media streams. Unknown peers404; missing Chat/DRM/LMS peer configuration or upstream transport failures502; oversized bodies413. Asset/Profile retain system-namespace fallbacks; do not assume sandbox isolation without explicit peer configuration. This grants no independent peer membership or attendance proof.
   * Calls `ANY /api/v1/view/{service}/{*path}` through the shared IDP-aware Faiber client.
   * @param service Backend path identifier `service`.
   * @param path Backend path identifier `*path`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param data Typed JSON request body.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Session extractor context forwarded to the peer; scoped Chat grants check room participation/preview and Chat membership; authenticated DRM read grants are path-based, without a room-membership lookup; downstream checks remain authoritative.
   */
  routerProxyViewServiceAny(service: "chat" | "asset" | "profile" | "drm" | "lms", path: string, method: import("@faiber/sdk-core").HttpRequestMethod, data: T.RouterProxyViewServiceAnyInput, params?: T.RouterProxyViewServiceAnyQuery, options?: RequestOptions<T.RouterProxyViewServiceAnyInput>) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.RouterProxyViewServiceAnyResponse, T.RouterProxyViewServiceAnyInput>({ ...options, method: method, url: `/api/v1/view/${encodeURIComponent(service)}/${wildcardPath(path)}`, data: data, params, responseType: "arraybuffer" });
  }
  /**
   * Read the Session process version; does not verify database or media-provider readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerStatusRouteGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Performs the flow integration show operation for the integration capability.
   * Calls `GET /integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/integration/flow` });
  }
}
