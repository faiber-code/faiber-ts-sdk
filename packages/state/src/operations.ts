import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class StateOperations extends ServiceApi {
  /**
   * Performs the game operation sessions operation for the routes capability.
   * Calls `GET /api/v1/game-operations/sessions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:read.
   */
  routesGameOperationSessionsGet(params?: T.RoutesGameOperationSessionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesGameOperationSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/game-operations/sessions`, params });
  }
  /**
   * Performs the game operation events operation for the routes capability.
   * Calls `GET /api/v1/game-operations/sessions/{session_id}/events` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:read.
   */
  routesGameOperationEventsGet(sessionId: Identifier, params?: T.RoutesGameOperationEventsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesGameOperationEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/game-operations/sessions/${encodeURIComponent(sessionId)}/events`, params });
  }
  /**
   * Performs the game operations summary operation for the routes capability.
   * Calls `GET /api/v1/game-operations/summary` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:read.
   */
  routesGameOperationsSummaryGet(options?: RequestOptions) {
    return this.client.request<T.RoutesGameOperationsSummaryGetResponse>({ ...options, method: "GET", url: `/api/v1/game-operations/summary` });
  }
  /**
   * Performs the game operation worlds operation for the routes capability.
   * Calls `GET /api/v1/game-operations/worlds` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:read.
   */
  routesGameOperationWorldsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesGameOperationWorldsGetResponse>({ ...options, method: "GET", url: `/api/v1/game-operations/worlds` });
  }
  /**
   * Performs the update game operation economy operation for the routes capability.
   * Calls `PATCH /api/v1/game-operations/worlds/{game_id}/economy` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesUpdateGameOperationEconomyPatch(gameId: Identifier, data: T.RoutesUpdateGameOperationEconomyPatchInput, options?: RequestOptions<T.RoutesUpdateGameOperationEconomyPatchInput>) {
    return this.client.request<T.RoutesUpdateGameOperationEconomyPatchResponse, T.RoutesUpdateGameOperationEconomyPatchInput>({ ...options, method: "PATCH", url: `/api/v1/game-operations/worlds/${encodeURIComponent(gameId)}/economy`, data: data });
  }
  /**
   * Performs the realtime operation for the routes capability.
   * Calls `GET /api/v1/realtime` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesRealtimeGet(params?: T.RoutesRealtimeGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesRealtimeGetResponse>({ ...options, method: "GET", url: `/api/v1/realtime`, params });
  }
  /**
   * Performs the delete room operation for the routes capability.
   * Calls `DELETE /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesDeleteRoomDelete(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteRoomDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/rooms/${encodeURIComponent(roomId)}` });
  }
  /**
   * Performs the get room operation for the routes capability.
   * Calls `GET /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:read.
   */
  routesGetRoomGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetRoomGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}` });
  }
  /**
   * Performs the update room operation for the routes capability.
   * Calls `PUT /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesUpdateRoomPut(roomId: Identifier, data: T.RoutesUpdateRoomPutInput, options?: RequestOptions<T.RoutesUpdateRoomPutInput>) {
    return this.client.request<T.RoutesUpdateRoomPutResponse, T.RoutesUpdateRoomPutInput>({ ...options, method: "PUT", url: `/api/v1/rooms/${encodeURIComponent(roomId)}`, data: data });
  }
  /**
   * Performs the invoke endpoint operation for the routes capability.
   * Calls `POST /api/v1/rooms/{room_id}/endpoints/{slug}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param slug Backend path identifier `slug`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute.
   */
  routesInvokeEndpointPost(roomId: Identifier, slug: Identifier, data: T.RoutesInvokeEndpointPostInput, options?: RequestOptions<T.RoutesInvokeEndpointPostInput>) {
    return this.client.request<T.RoutesInvokeEndpointPostResponse, T.RoutesInvokeEndpointPostInput>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/endpoints/${encodeURIComponent(slug)}`, data: data });
  }
  /**
   * Performs the join room operation for the routes capability.
   * Calls `POST /api/v1/rooms/{room_id}/join` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute.
   */
  routesJoinRoomPost(roomId: Identifier, data: T.RoutesJoinRoomPostInput, options?: RequestOptions<T.RoutesJoinRoomPostInput>) {
    return this.client.request<T.RoutesJoinRoomPostResponse, T.RoutesJoinRoomPostInput>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/join`, data: data });
  }
  /**
   * Performs the list worlds operation for the routes capability.
   * Calls `GET /api/v1/worlds` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:read.
   */
  routesListWorldsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListWorldsGetResponse>({ ...options, method: "GET", url: `/api/v1/worlds` });
  }
  /**
   * Performs the create world operation for the routes capability.
   * Calls `POST /api/v1/worlds` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesCreateWorldPost(data: T.RoutesCreateWorldPostInput, options?: RequestOptions<T.RoutesCreateWorldPostInput>) {
    return this.client.request<T.RoutesCreateWorldPostResponse, T.RoutesCreateWorldPostInput>({ ...options, method: "POST", url: `/api/v1/worlds`, data: data });
  }
  /**
   * Performs the delete world operation for the routes capability.
   * Calls `DELETE /api/v1/worlds/{world_id}` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesDeleteWorldDelete(worldId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteWorldDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/worlds/${encodeURIComponent(worldId)}` });
  }
  /**
   * Performs the get world operation for the routes capability.
   * Calls `GET /api/v1/worlds/{world_id}` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:read.
   */
  routesGetWorldGet(worldId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetWorldGetResponse>({ ...options, method: "GET", url: `/api/v1/worlds/${encodeURIComponent(worldId)}` });
  }
  /**
   * Performs the update world operation for the routes capability.
   * Calls `PUT /api/v1/worlds/{world_id}` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesUpdateWorldPut(worldId: Identifier, data: T.RoutesUpdateWorldPutInput, options?: RequestOptions<T.RoutesUpdateWorldPutInput>) {
    return this.client.request<T.RoutesUpdateWorldPutResponse, T.RoutesUpdateWorldPutInput>({ ...options, method: "PUT", url: `/api/v1/worlds/${encodeURIComponent(worldId)}`, data: data });
  }
  /**
   * Performs the list endpoints operation for the routes capability.
   * Calls `GET /api/v1/worlds/{world_id}/endpoints` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:read.
   */
  routesListEndpointsGet(worldId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListEndpointsGetResponse>({ ...options, method: "GET", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/endpoints` });
  }
  /**
   * Performs the create endpoint operation for the routes capability.
   * Calls `POST /api/v1/worlds/{world_id}/endpoints` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesCreateEndpointPost(worldId: Identifier, data: T.RoutesCreateEndpointPostInput, options?: RequestOptions<T.RoutesCreateEndpointPostInput>) {
    return this.client.request<T.RoutesCreateEndpointPostResponse, T.RoutesCreateEndpointPostInput>({ ...options, method: "POST", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/endpoints`, data: data });
  }
  /**
   * Performs the delete endpoint operation for the routes capability.
   * Calls `DELETE /api/v1/worlds/{world_id}/endpoints/{endpoint_id}` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param endpointId Backend path identifier `endpoint_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesDeleteEndpointDelete(worldId: Identifier, endpointId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteEndpointDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/endpoints/${encodeURIComponent(endpointId)}` });
  }
  /**
   * Performs the list rooms operation for the routes capability.
   * Calls `GET /api/v1/worlds/{world_id}/rooms` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:read.
   */
  routesListRoomsGet(worldId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListRoomsGetResponse>({ ...options, method: "GET", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/rooms` });
  }
  /**
   * Performs the create room operation for the routes capability.
   * Calls `POST /api/v1/worlds/{world_id}/rooms` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesCreateRoomPost(worldId: Identifier, data: T.RoutesCreateRoomPostInput, options?: RequestOptions<T.RoutesCreateRoomPostInput>) {
    return this.client.request<T.RoutesCreateRoomPostResponse, T.RoutesCreateRoomPostInput>({ ...options, method: "POST", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/rooms`, data: data });
  }
  /**
   * Performs the list wasm operation for the routes capability.
   * Calls `GET /api/v1/worlds/{world_id}/wasm` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:read.
   */
  routesListWasmGet(worldId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListWasmGetResponse>({ ...options, method: "GET", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/wasm` });
  }
  /**
   * Performs the upload wasm operation for the routes capability.
   * Calls `POST /api/v1/worlds/{world_id}/wasm` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesUploadWasmPost(worldId: Identifier, data: T.RoutesUploadWasmPostInput, options?: RequestOptions<T.RoutesUploadWasmPostInput>) {
    return this.client.request<T.RoutesUploadWasmPostResponse, T.RoutesUploadWasmPostInput>({ ...options, method: "POST", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/wasm`, data: data });
  }
  /**
   * Performs the delete wasm operation for the routes capability.
   * Calls `DELETE /api/v1/worlds/{world_id}/wasm/{module_id}` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param moduleId Backend path identifier `module_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:write.
   */
  routesDeleteWasmDelete(worldId: Identifier, moduleId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteWasmDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/wasm/${encodeURIComponent(moduleId)}` });
  }
}
