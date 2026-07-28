import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ChatOperations extends ServiceApi {
  /**
   * Performs the list operation for the routes capability.
   * Calls `GET /api/v1/conversations` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:read.
   */
  routesListGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations` });
  }
  /**
   * Performs the create operation for the routes capability.
   * Calls `POST /api/v1/conversations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:write.
   */
  routesCreatePost(data: T.RoutesCreatePostInput, options?: RequestOptions<T.RoutesCreatePostInput>) {
    return this.client.request<T.RoutesCreatePostResponse, T.RoutesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/conversations`, data: data });
  }
  /**
   * Performs the archive operation for the routes capability.
   * Calls `DELETE /api/v1/conversations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:delete.
   */
  routesArchiveDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesArchiveDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/conversations/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get one operation for the routes capability.
   * Calls `GET /api/v1/conversations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:read.
   */
  routesGetOneGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetOneGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the routes capability.
   * Calls `PUT /api/v1/conversations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:write.
   */
  routesUpdatePut(id: Identifier, data: T.RoutesUpdatePutInput, options?: RequestOptions<T.RoutesUpdatePutInput>) {
    return this.client.request<T.RoutesUpdatePutResponse, T.RoutesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/conversations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the ai send operation for the routes capability.
   * Calls `POST /api/v1/conversations/{id}/ai/messages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:ai.
   */
  routesAiSendPost(id: Identifier, data: T.RoutesAiSendPostInput, options?: RequestOptions<T.RoutesAiSendPostInput>) {
    return this.client.request<T.RoutesAiSendPostResponse, T.RoutesAiSendPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/ai/messages`, data: data });
  }
  /**
   * Performs the events operation for the routes capability.
   * Calls `GET /api/v1/conversations/{id}/events` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:read.
   */
  routesEventsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/events` });
  }
  /**
   * Performs the members operation for the routes capability.
   * Calls `GET /api/v1/conversations/{id}/members` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:read.
   */
  routesMembersGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesMembersGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/members` });
  }
  /**
   * Performs the add member operation for the routes capability.
   * Calls `POST /api/v1/conversations/{id}/members` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:manage.
   */
  routesAddMemberPost(id: Identifier, data: T.RoutesAddMemberPostInput, options?: RequestOptions<T.RoutesAddMemberPostInput>) {
    return this.client.request<T.RoutesAddMemberPostResponse, T.RoutesAddMemberPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/members`, data: data });
  }
  /**
   * Performs the remove member operation for the routes capability.
   * Calls `DELETE /api/v1/conversations/{id}/members/{user_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:manage.
   */
  routesRemoveMemberDelete(id: Identifier, userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveMemberDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/conversations/${encodeURIComponent(id)}/members/${encodeURIComponent(userId)}` });
  }
  /**
   * Performs the messages operation for the routes capability.
   * Calls `GET /api/v1/conversations/{id}/messages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:read.
   */
  routesMessagesGet(id: Identifier, params?: T.RoutesMessagesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesMessagesGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/messages`, params });
  }
  /**
   * Performs the send operation for the routes capability.
   * Calls `POST /api/v1/conversations/{id}/messages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:write.
   */
  routesSendPost(id: Identifier, data: T.RoutesSendPostInput, options?: RequestOptions<T.RoutesSendPostInput>) {
    return this.client.request<T.RoutesSendPostResponse, T.RoutesSendPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/messages`, data: data });
  }
  /**
   * Performs the read operation for the routes capability.
   * Calls `POST /api/v1/conversations/{id}/read` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:write.
   */
  routesReadPost(id: Identifier, data: T.RoutesReadPostInput, options?: RequestOptions<T.RoutesReadPostInput>) {
    return this.client.request<T.RoutesReadPostResponse, T.RoutesReadPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/read`, data: data });
  }
  /**
   * Performs the delete message operation for the routes capability.
   * Calls `DELETE /api/v1/messages/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:delete.
   */
  routesDeleteMessageDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteMessageDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/messages/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the edit operation for the routes capability.
   * Calls `PUT /api/v1/messages/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:write.
   */
  routesEditPut(id: Identifier, data: T.RoutesEditPutInput, options?: RequestOptions<T.RoutesEditPutInput>) {
    return this.client.request<T.RoutesEditPutResponse, T.RoutesEditPutInput>({ ...options, method: "PUT", url: `/api/v1/messages/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the react operation for the routes capability.
   * Calls `POST /api/v1/messages/{id}/reactions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: chat:write.
   */
  routesReactPost(id: Identifier, data: T.RoutesReactPostInput, options?: RequestOptions<T.RoutesReactPostInput>) {
    return this.client.request<T.RoutesReactPostResponse, T.RoutesReactPostInput>({ ...options, method: "POST", url: `/api/v1/messages/${encodeURIComponent(id)}/reactions`, data: data });
  }
}

