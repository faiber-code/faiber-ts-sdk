import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ChatOperations extends ServiceApi {
  /** GET /api/v1/conversations; permission: chat:read. */
  routesListGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations` });
  }
  /** POST /api/v1/conversations; permission: chat:write. */
  routesCreatePost(data: T.RoutesCreatePostInput, options?: RequestOptions<T.RoutesCreatePostInput>) {
    return this.client.request<T.RoutesCreatePostResponse, T.RoutesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/conversations`, data: data });
  }
  /** DELETE /api/v1/conversations/{id}; permission: chat:delete. */
  routesArchiveDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesArchiveDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/conversations/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/conversations/{id}; permission: chat:read. */
  routesGetOneGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetOneGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/conversations/{id}; permission: chat:write. */
  routesUpdatePut(id: Identifier, data: T.RoutesUpdatePutInput, options?: RequestOptions<T.RoutesUpdatePutInput>) {
    return this.client.request<T.RoutesUpdatePutResponse, T.RoutesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/conversations/${encodeURIComponent(id)}`, data: data });
  }
  /** POST /api/v1/conversations/{id}/ai/messages; permission: chat:ai. */
  routesAiSendPost(id: Identifier, data: T.RoutesAiSendPostInput, options?: RequestOptions<T.RoutesAiSendPostInput>) {
    return this.client.request<T.RoutesAiSendPostResponse, T.RoutesAiSendPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/ai/messages`, data: data });
  }
  /** GET /api/v1/conversations/{id}/events; permission: chat:read. */
  routesEventsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/events` });
  }
  /** GET /api/v1/conversations/{id}/members; permission: chat:read. */
  routesMembersGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesMembersGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/members` });
  }
  /** POST /api/v1/conversations/{id}/members; permission: chat:manage. */
  routesAddMemberPost(id: Identifier, data: T.RoutesAddMemberPostInput, options?: RequestOptions<T.RoutesAddMemberPostInput>) {
    return this.client.request<T.RoutesAddMemberPostResponse, T.RoutesAddMemberPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/members`, data: data });
  }
  /** DELETE /api/v1/conversations/{id}/members/{user_id}; permission: chat:manage. */
  routesRemoveMemberDelete(id: Identifier, userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveMemberDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/conversations/${encodeURIComponent(id)}/members/${encodeURIComponent(userId)}` });
  }
  /** GET /api/v1/conversations/{id}/messages; permission: chat:read. */
  routesMessagesGet(id: Identifier, params?: T.RoutesMessagesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesMessagesGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/messages`, params });
  }
  /** POST /api/v1/conversations/{id}/messages; permission: chat:write. */
  routesSendPost(id: Identifier, data: T.RoutesSendPostInput, options?: RequestOptions<T.RoutesSendPostInput>) {
    return this.client.request<T.RoutesSendPostResponse, T.RoutesSendPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/messages`, data: data });
  }
  /** POST /api/v1/conversations/{id}/read; permission: chat:write. */
  routesReadPost(id: Identifier, data: T.RoutesReadPostInput, options?: RequestOptions<T.RoutesReadPostInput>) {
    return this.client.request<T.RoutesReadPostResponse, T.RoutesReadPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/read`, data: data });
  }
  /** DELETE /api/v1/messages/{id}; permission: chat:delete. */
  routesDeleteMessageDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteMessageDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/messages/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/messages/{id}; permission: chat:write. */
  routesEditPut(id: Identifier, data: T.RoutesEditPutInput, options?: RequestOptions<T.RoutesEditPutInput>) {
    return this.client.request<T.RoutesEditPutResponse, T.RoutesEditPutInput>({ ...options, method: "PUT", url: `/api/v1/messages/${encodeURIComponent(id)}`, data: data });
  }
  /** POST /api/v1/messages/{id}/reactions; permission: chat:write. */
  routesReactPost(id: Identifier, data: T.RoutesReactPostInput, options?: RequestOptions<T.RoutesReactPostInput>) {
    return this.client.request<T.RoutesReactPostResponse, T.RoutesReactPostInput>({ ...options, method: "POST", url: `/api/v1/messages/${encodeURIComponent(id)}/reactions`, data: data });
  }
}

