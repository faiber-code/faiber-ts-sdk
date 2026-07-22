import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class SessionOperations extends ServiceApi {
  /** GET /; permission: public/session-derived. */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /** GET /api/v1/integration/flow; permission: public/session-derived. */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /** POST /api/v1/room_states/{room_state_id}/respond; permission: room_state:respond. */
  roomStateRoomStateRespondPost(roomStateId: Identifier, data: T.RoomStateRoomStateRespondPostInput, options?: RequestOptions<T.RoomStateRoomStateRespondPostInput>) {
    return this.client.request<T.RoomStateRoomStateRespondPostResponse, T.RoomStateRoomStateRespondPostInput>({ ...options, method: "POST", url: `/api/v1/room_states/${encodeURIComponent(roomStateId)}/respond`, data: data });
  }
  /** GET /api/v1/rooms; permission: room:read. */
  roomRoomsIndexGet(params?: T.RoomRoomsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms`, params });
  }
  /** POST /api/v1/rooms; permission: room:create. */
  roomRoomsCreatePost(data: T.RoomRoomsCreatePostInput, options?: RequestOptions<T.RoomRoomsCreatePostInput>) {
    return this.client.request<T.RoomRoomsCreatePostResponse, T.RoomRoomsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/rooms`, data: data });
  }
  /** DELETE /api/v1/rooms/{room_id}; permission: room:delete. */
  roomRoomsDeleteDelete(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/rooms/${encodeURIComponent(roomId)}` });
  }
  /** GET /api/v1/rooms/{room_id}; permission: room:read. */
  roomRoomsShowGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}` });
  }
  /** PATCH /api/v1/rooms/{room_id}; permission: room:update. */
  roomRoomsUpdatePatch(roomId: Identifier, data: T.RoomRoomsUpdatePatchInput, options?: RequestOptions<T.RoomRoomsUpdatePatchInput>) {
    return this.client.request<T.RoomRoomsUpdatePatchResponse, T.RoomRoomsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/rooms/${encodeURIComponent(roomId)}`, data: data });
  }
  /** PUT /api/v1/rooms/{room_id}; permission: room:update. */
  roomRoomsUpdatePut(roomId: Identifier, data: T.RoomRoomsUpdatePutInput, options?: RequestOptions<T.RoomRoomsUpdatePutInput>) {
    return this.client.request<T.RoomRoomsUpdatePutResponse, T.RoomRoomsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/rooms/${encodeURIComponent(roomId)}`, data: data });
  }
  /** GET /api/v1/rooms/{room_id}/end; permission: room:end. */
  roomRoomsEndGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsEndGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/end` });
  }
  /** POST /api/v1/rooms/{room_id}/interactive/start; permission: room:start_interactive. */
  roomRoomsInteractiveStartPost(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsInteractiveStartPostResponse>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/interactive/start` });
  }
  /** GET /api/v1/rooms/{room_id}/livekit-token; permission: room:read_livekit_token. */
  roomRoomsLivekitTokenGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsLivekitTokenGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/livekit-token` });
  }
  /** GET /api/v1/rooms/{room_id}/playback; permission: room:read_playback. */
  roomRoomsPlaybackShowGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsPlaybackShowGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/playback` });
  }
  /** GET /api/v1/rooms/{room_id}/recordings; permission: room:read_recordings. */
  roomRoomsRecordingsGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsRecordingsGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/recordings` });
  }
  /** GET /api/v1/rooms/{room_id}/start; permission: room:start. */
  roomRoomsStartGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsStartGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/start` });
  }
  /** GET /api/v1/rooms/{room_id}/stop; permission: room:stop. */
  roomRoomsStopGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoomRoomsStopGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/stop` });
  }
  /** GET /api/v1/rooms/analytics; permission: room:read_analytics. */
  roomRoomsAnalyticsGet(options?: RequestOptions) {
    return this.client.request<T.RoomRoomsAnalyticsGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/analytics` });
  }
  /** POST /api/v1/rooms/livekit/webhook; permission: public/session-derived. */
  roomLivekitWebhookPost(options?: RequestOptions) {
    return this.client.request<T.RoomLivekitWebhookPostResponse>({ ...options, method: "POST", url: `/api/v1/rooms/livekit/webhook` });
  }
}

