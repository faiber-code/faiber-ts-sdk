import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";
import { openMatchRealtime, openRoomRealtime } from "./match-realtime.js";

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
   * Open room replication with the ticket returned by join. This operation uses a WebSocket upgrade, not an Axios HTTP request.
   * Calls `GET /api/v1/realtime` as a WebSocket upgrade.
   * @param ticket Scoped ticket from the authenticated room join endpoint.
   * @param options Injectable WebSocket constructor and AbortSignal; cancellation closes the socket.
   * @returns The connected StateRealtimeClient, with typed ServerEvent subscriptions.
   * @throws Error when WebSocket is unavailable, the ticket origin differs, or the connection fails; required permission: short-lived room ticket issued by the authenticated join endpoint.
   */
  routesRealtimeGet(ticket: import("./types.js").JoinTicket, options?: import("./contracts.types.js").StateRoomRealtimeOptions) {
    return openRoomRealtime(this.client, ticket, options);
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
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `GET /api/v2/game-history` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesHistoryGet(options?: RequestOptions) {
    return this.client.request<T.GamesRoutesHistoryGetResponse>({ ...options, method: "GET", url: `/api/v2/game-history` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `GET /api/v2/game-lobbies/{code}` through the shared IDP-aware Faiber client.
   * @param code Backend path identifier `code`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesLobbyGet(code: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesLobbyGetResponse>({ ...options, method: "GET", url: `/api/v2/game-lobbies/${encodeURIComponent(code)}` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `POST /api/v2/game-lobbies/{code}/join` through the shared IDP-aware Faiber client.
   * @param code Backend path identifier `code`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesJoinLobbyPost(code: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesJoinLobbyPostResponse>({ ...options, method: "POST", url: `/api/v2/game-lobbies/${encodeURIComponent(code)}/join` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `GET /api/v2/game-matchmaking/{ticket_id}` through the shared IDP-aware Faiber client.
   * @param ticketId Backend path identifier `ticket_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesTicketGet(ticketId: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesTicketGetResponse>({ ...options, method: "GET", url: `/api/v2/game-matchmaking/${encodeURIComponent(ticketId)}` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `GET /api/v2/game-progress` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesProgressGet(options?: RequestOptions) {
    return this.client.request<T.GamesRoutesProgressGetResponse>({ ...options, method: "GET", url: `/api/v2/game-progress` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `GET /api/v2/game-sessions/{session_id}` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesViewGet(sessionId: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesViewGetResponse>({ ...options, method: "GET", url: `/api/v2/game-sessions/${encodeURIComponent(sessionId)}` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `POST /api/v2/game-sessions/{session_id}/commands` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesCommandPost(sessionId: Identifier, data: T.GamesRoutesCommandPostInput, options?: RequestOptions<T.GamesRoutesCommandPostInput>) {
    return this.client.request<T.GamesRoutesCommandPostResponse, T.GamesRoutesCommandPostInput>({ ...options, method: "POST", url: `/api/v2/game-sessions/${encodeURIComponent(sessionId)}/commands`, data: data });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `POST /api/v2/game-sessions/{session_id}/ready` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesReadyPost(sessionId: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesReadyPostResponse>({ ...options, method: "POST", url: `/api/v2/game-sessions/${encodeURIComponent(sessionId)}/ready` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `GET /api/v2/game-world-progress` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesWorldProgressGet(options?: RequestOptions) {
    return this.client.request<T.GamesRoutesWorldProgressGetResponse>({ ...options, method: "GET", url: `/api/v2/game-world-progress` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `GET /api/v2/games` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public catalog.
   */
  gamesRoutesCatalogGet(options?: RequestOptions) {
    return this.client.request<T.GamesRoutesCatalogGetResponse>({ ...options, method: "GET", url: `/api/v2/games` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `GET /api/v2/games/{game_id}` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public catalog.
   */
  gamesRoutesGameGet(gameId: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesGameGetResponse>({ ...options, method: "GET", url: `/api/v2/games/${encodeURIComponent(gameId)}` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `POST /api/v2/games/{game_id}/lobbies` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesCreateLobbyPost(gameId: Identifier, data: T.GamesRoutesCreateLobbyPostInput, options?: RequestOptions<T.GamesRoutesCreateLobbyPostInput>) {
    return this.client.request<T.GamesRoutesCreateLobbyPostResponse, T.GamesRoutesCreateLobbyPostInput>({ ...options, method: "POST", url: `/api/v2/games/${encodeURIComponent(gameId)}/lobbies`, data: data });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `POST /api/v2/games/{game_id}/matchmaking` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesEnqueuePost(gameId: Identifier, data: T.GamesRoutesEnqueuePostInput, options?: RequestOptions<T.GamesRoutesEnqueuePostInput>) {
    return this.client.request<T.GamesRoutesEnqueuePostResponse, T.GamesRoutesEnqueuePostInput>({ ...options, method: "POST", url: `/api/v2/games/${encodeURIComponent(gameId)}/matchmaking`, data: data });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `POST /api/v2/games/{game_id}/matchmaking/tickets` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  kheradgahRoutesEnqueuePost(gameId: Identifier, data: T.KheradgahRoutesEnqueuePostInput, options?: RequestOptions<T.KheradgahRoutesEnqueuePostInput>) {
    return this.client.request<T.KheradgahRoutesEnqueuePostResponse, T.KheradgahRoutesEnqueuePostInput>({ ...options, method: "POST", url: `/api/v2/games/${encodeURIComponent(gameId)}/matchmaking/tickets`, data: data });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `DELETE /api/v2/games/{game_id}/matchmaking/tickets/{ticket_id}` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param ticketId Backend path identifier `ticket_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  kheradgahRoutesCancelDelete(gameId: Identifier, ticketId: Identifier, options?: RequestOptions) {
    return this.client.request<T.KheradgahRoutesCancelDeleteResponse>({ ...options, method: "DELETE", url: `/api/v2/games/${encodeURIComponent(gameId)}/matchmaking/tickets/${encodeURIComponent(ticketId)}` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `GET /api/v2/games/{game_id}/matchmaking/tickets/{ticket_id}` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param ticketId Backend path identifier `ticket_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  kheradgahRoutesTicketGet(gameId: Identifier, ticketId: Identifier, options?: RequestOptions) {
    return this.client.request<T.KheradgahRoutesTicketGetResponse>({ ...options, method: "GET", url: `/api/v2/games/${encodeURIComponent(gameId)}/matchmaking/tickets/${encodeURIComponent(ticketId)}` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `POST /api/v2/games/{game_id}/sessions` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  gamesRoutesCreateSessionPost(gameId: Identifier, data: T.GamesRoutesCreateSessionPostInput, options?: RequestOptions<T.GamesRoutesCreateSessionPostInput>) {
    return this.client.request<T.GamesRoutesCreateSessionPostResponse, T.GamesRoutesCreateSessionPostInput>({ ...options, method: "POST", url: `/api/v2/games/${encodeURIComponent(gameId)}/sessions`, data: { ...data, "gameId": String(gameId) } });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `POST /api/v2/matches/{match_id}/connections` through the shared IDP-aware Faiber client.
   * @param matchId Backend path identifier `match_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  kheradgahRoutesConnectionPost(matchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.KheradgahRoutesConnectionPostResponse>({ ...options, method: "POST", url: `/api/v2/matches/${encodeURIComponent(matchId)}/connections` });
  }
  /**
   * Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.
   * Calls `GET /api/v2/matches/{match_id}/view` through the shared IDP-aware Faiber client.
   * @param matchId Backend path identifier `match_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: state:execute and authenticated game membership.
   */
  kheradgahRoutesViewGet(matchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.KheradgahRoutesViewGetResponse>({ ...options, method: "GET", url: `/api/v2/matches/${encodeURIComponent(matchId)}/view` });
  }
  /**
   * Open the v2 match WebSocket and send its one-use hello ticket within five seconds. Acquire a fresh connection ticket after reconnecting.
   * Calls `GET /api/v2/realtime` as a WebSocket upgrade.
   * @param ticket One-use connection ticket from the authenticated match connection endpoint.
   * @param options Injectable WebSocket constructor and AbortSignal; cancellation closes the socket.
   * @returns The connected WebSocket; messages use KheradgahServerFrame, not an Axios response.
   * @throws Error when WebSocket is unavailable, the ticket origin differs, or the connection fails; required permission: one-use, 30-second connection ticket issued by the authenticated match connection operation; Origin validation.
   */
  connectMatchRealtime(ticket: import("./contracts.types.js").KheradgahConnectionTicket, options?: import("./contracts.types.js").KheradgahRealtimeOptions) {
    return openMatchRealtime(this.client, ticket, options);
  }
  /**
   * Read the static State transport and ruleset advertisement. This does not verify persistence, gateway authentication, matches or WebSocket readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public static process advertisement; deployment gateway policy remains separate.
   */
  mainProcessHealthGet(options?: RequestOptions) {
    return this.client.request<T.MainProcessHealthGetResponse>({ ...options, method: "GET", url: `/health` });
  }
}
