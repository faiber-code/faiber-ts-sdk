import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class SessionOperations extends ServiceApi {
  /**
   * Performs the status route operation for the router capability.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
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
   * Performs the flow integration show operation for the integration capability.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
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
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  roomLivekitWebhookPost(options?: RequestOptions) {
    return this.client.request<T.RoomLivekitWebhookPostResponse>({ ...options, method: "POST", url: `/api/v1/rooms/livekit/webhook` });
  }
}
