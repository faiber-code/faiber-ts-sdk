import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";
import { openMatchRealtime, openRoomRealtime } from "./match-realtime.js";

export class StateOperations extends ServiceApi {
  /**
   * Page configured game-tenant sessions newest first; defaults page=1/page_size=25, page >=1 and size clamped 10..100. Snake_case filters combine with AND; user_id means membership.
   * Calls `GET /api/v1/game-operations/sessions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted).
   */
  routesGameOperationSessionsGet(params?: T.RoutesGameOperationSessionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesGameOperationSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/game-operations/sessions`, params });
  }
  /**
   * Page configured game-tenant events by descending sequence; defaults page=1/page_size=50, size clamped 10..100. Optional kind and user_id combine; absent session returns404.
   * Calls `GET /api/v1/game-operations/sessions/{session_id}/events` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted).
   */
  routesGameOperationEventsGet(sessionId: Identifier, params?: T.RoutesGameOperationEventsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesGameOperationEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/game-operations/sessions/${encodeURIComponent(sessionId)}/events`, params });
  }
  /**
   * Read configured game-tenant counts grouped by game, status, payment and settlement status. Runtime tenant comes from service configuration, not x-organization-id.
   * Calls `GET /api/v1/game-operations/summary` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted).
   */
  routesGameOperationsSummaryGet(options?: RequestOptions) {
    return this.client.request<T.RoutesGameOperationsSummaryGetResponse>({ ...options, method: "GET", url: `/api/v1/game-operations/summary` });
  }
  /**
   * Read configured game-tenant economy entries, including disabled worlds, ordered by slug.
   * Calls `GET /api/v1/game-operations/worlds` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted).
   */
  routesGameOperationWorldsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesGameOperationWorldsGetResponse>({ ...options, method: "GET", url: `/api/v1/game-operations/worlds` });
  }
  /**
   * Replace economy settings: entryCoins 0..1000000 (solo games must remain free), burnPercent 0..100 rounded to basis points; errors422.
   * Calls `PATCH /api/v1/game-operations/worlds/{game_id}/economy` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesUpdateGameOperationEconomyPatch(gameId: Identifier, data: T.RoutesUpdateGameOperationEconomyPatchInput, options?: RequestOptions<T.RoutesUpdateGameOperationEconomyPatchInput>) {
    return this.client.request<T.RoutesUpdateGameOperationEconomyPatchResponse, T.RoutesUpdateGameOperationEconomyPatchInput>({ ...options, method: "PATCH", url: `/api/v1/game-operations/worlds/${encodeURIComponent(gameId)}/economy`, data: data });
  }
  /**
   * Open room replication with room_id/player_id/ticket query parameters. Five-minute ticket is validated at upgrade; wrong/expired ticket401. Input identity is bound to the upgrade. Receives snapshot/patch/player/ack/pong/error frames.
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
   * Delete an organization room; missing/foreign room404; success data:true.
   * Calls `DELETE /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesDeleteRoomDelete(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteRoomDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/rooms/${encodeURIComponent(roomId)}` });
  }
  /**
   * Read a complete organization room snapshot including players and entities; missing/foreign room404.
   * Calls `GET /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted).
   */
  routesGetRoomGet(roomId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetRoomGetResponse>({ ...options, method: "GET", url: `/api/v1/rooms/${encodeURIComponent(roomId)}` });
  }
  /**
   * Update room name, capacity or status; null fields preserve. Capacity clamps1..4096 and cannot shrink below current players (409); blank name400.
   * Calls `PUT /api/v1/rooms/{room_id}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesUpdateRoomPut(roomId: Identifier, data: T.RoutesUpdateRoomPutInput, options?: RequestOptions<T.RoutesUpdateRoomPutInput>) {
    return this.client.request<T.RoutesUpdateRoomPutResponse, T.RoutesUpdateRoomPutInput>({ ...options, method: "PUT", url: `/api/v1/rooms/${encodeURIComponent(roomId)}`, data: data });
  }
  /**
   * Invoke WASM for a caller-owned player (management grants can act for others). Guest must export ()->i32 returning0; numeric writes and fuel limits apply. Returns authoritative patch; execution errors400.
   * Calls `POST /api/v1/rooms/{room_id}/endpoints/{slug}` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param slug Backend path identifier `slug`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:execute (state management/wildcard/admin aliases accepted).
   */
  routesInvokeEndpointPost(roomId: Identifier, slug: Identifier, data: T.RoutesInvokeEndpointPostInput, options?: RequestOptions<T.RoutesInvokeEndpointPostInput>) {
    return this.client.request<T.RoutesInvokeEndpointPostResponse, T.RoutesInvokeEndpointPostInput>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/endpoints/${encodeURIComponent(slug)}`, data: data });
  }
  /**
   * Create a player/entity and five-minute scoped room ticket. user_id must match caller unless state management grant; full/foreign/missing room400.
   * Calls `POST /api/v1/rooms/{room_id}/join` through the shared IDP-aware Faiber client.
   * @param roomId Backend path identifier `room_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:execute (state management/wildcard/admin aliases accepted).
   */
  routesJoinRoomPost(roomId: Identifier, data: T.RoutesJoinRoomPostInput, options?: RequestOptions<T.RoutesJoinRoomPostInput>) {
    return this.client.request<T.RoutesJoinRoomPostResponse, T.RoutesJoinRoomPostInput>({ ...options, method: "POST", url: `/api/v1/rooms/${encodeURIComponent(roomId)}/join`, data: data });
  }
  /**
   * List organization worlds with managed game worlds, sorted by name. managed worlds cannot be updated/deleted.
   * Calls `GET /api/v1/worlds` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted).
   */
  routesListWorldsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListWorldsGetResponse>({ ...options, method: "GET", url: `/api/v1/worlds` });
  }
  /**
   * Create an in-memory world; nonempty name and slug required. Missing replication uses60/20/128/120; physics defaults disabled.
   * Calls `POST /api/v1/worlds` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesCreateWorldPost(data: T.RoutesCreateWorldPostInput, options?: RequestOptions<T.RoutesCreateWorldPostInput>) {
    return this.client.request<T.RoutesCreateWorldPostResponse, T.RoutesCreateWorldPostInput>({ ...options, method: "POST", url: `/api/v1/worlds`, data: data });
  }
  /**
   * Delete an organization world and its rooms, endpoints and WASM modules; managed world409; missing404; success data:true.
   * Calls `DELETE /api/v1/worlds/{world_id}` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesDeleteWorldDelete(worldId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteWorldDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/worlds/${encodeURIComponent(worldId)}` });
  }
  /**
   * Read an organization world or configured managed game projection; absent world404.
   * Calls `GET /api/v1/worlds/{world_id}` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted).
   */
  routesGetWorldGet(worldId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetWorldGetResponse>({ ...options, method: "GET", url: `/api/v1/worlds/${encodeURIComponent(worldId)}` });
  }
  /**
   * Update an organization world; null/missing fields preserve values. Supplied nested configs replace existing configs with serde defaults. Managed game worlds409; blank name400.
   * Calls `PUT /api/v1/worlds/{world_id}` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesUpdateWorldPut(worldId: Identifier, data: T.RoutesUpdateWorldPutInput, options?: RequestOptions<T.RoutesUpdateWorldPutInput>) {
    return this.client.request<T.RoutesUpdateWorldPutResponse, T.RoutesUpdateWorldPutInput>({ ...options, method: "PUT", url: `/api/v1/worlds/${encodeURIComponent(worldId)}`, data: data });
  }
  /**
   * List world export bindings; missing/foreign world404.
   * Calls `GET /api/v1/worlds/{world_id}/endpoints` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted).
   */
  routesListEndpointsGet(worldId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListEndpointsGetResponse>({ ...options, method: "GET", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/endpoints` });
  }
  /**
   * Bind a world WASM module export to a component and slug. Foreign module400; module export signature checked on invocation.
   * Calls `POST /api/v1/worlds/{world_id}/endpoints` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesCreateEndpointPost(worldId: Identifier, data: T.RoutesCreateEndpointPostInput, options?: RequestOptions<T.RoutesCreateEndpointPostInput>) {
    return this.client.request<T.RoutesCreateEndpointPostResponse, T.RoutesCreateEndpointPostInput>({ ...options, method: "POST", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/endpoints`, data: data });
  }
  /**
   * Delete an organization world export binding; missing world/binding404; success data:true.
   * Calls `DELETE /api/v1/worlds/{world_id}/endpoints/{endpoint_id}` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param endpointId Backend path identifier `endpoint_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesDeleteEndpointDelete(worldId: Identifier, endpointId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteEndpointDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/endpoints/${encodeURIComponent(endpointId)}` });
  }
  /**
   * List organization rooms for a world. Unknown/foreign world returns an empty list.
   * Calls `GET /api/v1/worlds/{world_id}/rooms` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted).
   */
  routesListRoomsGet(worldId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListRoomsGetResponse>({ ...options, method: "GET", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/rooms` });
  }
  /**
   * Create a room in an in-memory organization world. capacity defaults32 and clamps1..4096; absent/foreign world400.
   * Calls `POST /api/v1/worlds/{world_id}/rooms` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesCreateRoomPost(worldId: Identifier, data: T.RoutesCreateRoomPostInput, options?: RequestOptions<T.RoutesCreateRoomPostInput>) {
    return this.client.request<T.RoutesCreateRoomPostResponse, T.RoutesCreateRoomPostInput>({ ...options, method: "POST", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/rooms`, data: data });
  }
  /**
   * List organization world WASM metadata; missing/foreign world404.
   * Calls `GET /api/v1/worlds/{world_id}/wasm` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted).
   */
  routesListWasmGet(worldId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListWasmGetResponse>({ ...options, method: "GET", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/wasm` });
  }
  /**
   * Upload JSON base64 WASM, validate bytes and return SHA256 metadata. Invalid base64/WASM400, missing/foreign world404.
   * Calls `POST /api/v1/worlds/{world_id}/wasm` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesUploadWasmPost(worldId: Identifier, data: T.RoutesUploadWasmPostInput, options?: RequestOptions<T.RoutesUploadWasmPostInput>) {
    return this.client.request<T.RoutesUploadWasmPostResponse, T.RoutesUploadWasmPostInput>({ ...options, method: "POST", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/wasm`, data: data });
  }
  /**
   * Delete a world module; attached endpoints must be deleted first(409). Missing world/module404; success data:true.
   * Calls `DELETE /api/v1/worlds/{world_id}/wasm/{module_id}` through the shared IDP-aware Faiber client.
   * @param worldId Backend path identifier `world_id`.
   * @param moduleId Backend path identifier `module_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted).
   */
  routesDeleteWasmDelete(worldId: Identifier, moduleId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteWasmDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/worlds/${encodeURIComponent(worldId)}/wasm/${encodeURIComponent(moduleId)}` });
  }
  /**
   * List the caller latest50 member session projections ordered newest first.
   * Calls `GET /api/v2/game-history` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesHistoryGet(options?: RequestOptions) {
    return this.client.request<T.GamesRoutesHistoryGetResponse>({ ...options, method: "GET", url: `/api/v2/game-history` });
  }
  /**
   * Read an invite lobby visible to creator or session member; absent/inaccessible lobby422.
   * Calls `GET /api/v2/game-lobbies/{code}` through the shared IDP-aware Faiber client.
   * @param code Backend path identifier `code`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesLobbyGet(code: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesLobbyGetResponse>({ ...options, method: "GET", url: `/api/v2/game-lobbies/${encodeURIComponent(code)}` });
  }
  /**
   * Join waiting unexpired invite lobby; code is trimmed and uppercased; invalid/full/expired lobby422.
   * Calls `POST /api/v2/game-lobbies/{code}/join` through the shared IDP-aware Faiber client.
   * @param code Backend path identifier `code`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesJoinLobbyPost(code: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesJoinLobbyPostResponse>({ ...options, method: "POST", url: `/api/v2/game-lobbies/${encodeURIComponent(code)}/join` });
  }
  /**
   * Read caller-owned queue ticket; absent/foreign ticket404. sessionId remains null while queued.
   * Calls `GET /api/v2/game-matchmaking/{ticket_id}` through the shared IDP-aware Faiber client.
   * @param ticketId Backend path identifier `ticket_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesTicketGet(ticketId: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesTicketGetResponse>({ ...options, method: "GET", url: `/api/v2/game-matchmaking/${encodeURIComponent(ticketId)}` });
  }
  /**
   * Read caller finished-session aggregates by game/difficulty; sufficientData requires at least3 samples.
   * Calls `GET /api/v2/game-progress` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesProgressGet(options?: RequestOptions) {
    return this.client.request<T.GamesRoutesProgressGetResponse>({ ...options, method: "GET", url: `/api/v2/game-progress` });
  }
  /**
   * Read caller-member session projection; absent/foreign404. Board/challenge/lastEvent JSON depends on registered game and ruleset.
   * Calls `GET /api/v2/game-sessions/{session_id}` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesViewGet(sessionId: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesViewGetResponse>({ ...options, method: "GET", url: `/api/v2/game-sessions/${encodeURIComponent(sessionId)}` });
  }
  /**
   * Apply stable commandId with expectedVersion; duplicate IDs return current projection, stale versions409. Game/ruleset determines answer/action JSON. Never automatically rebase conflicts.
   * Calls `POST /api/v2/game-sessions/{session_id}/commands` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesCommandPost(sessionId: Identifier, data: T.GamesRoutesCommandPostInput, options?: RequestOptions<T.GamesRoutesCommandPostInput>) {
    return this.client.request<T.GamesRoutesCommandPostResponse, T.GamesRoutesCommandPostInput>({ ...options, method: "POST", url: `/api/v2/game-sessions/${encodeURIComponent(sessionId)}/commands`, data: data });
  }
  /**
   * Mark member ready; paid sessions enforce readiness timeout and upstream escrow funding. Returns current caller projection; domain errors422.
   * Calls `POST /api/v2/game-sessions/{session_id}/ready` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesReadyPost(sessionId: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesReadyPostResponse>({ ...options, method: "POST", url: `/api/v2/game-sessions/${encodeURIComponent(sessionId)}/ready` });
  }
  /**
   * Read configured-tenant caller world progression ordered by game.
   * Calls `GET /api/v2/game-world-progress` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesWorldProgressGet(options?: RequestOptions) {
    return this.client.request<T.GamesRoutesWorldProgressGetResponse>({ ...options, method: "GET", url: `/api/v2/game-world-progress` });
  }
  /**
   * Read enabled configured-tenant game catalog with current entryCoins and burnPercent. No authentication permission required.
   * Calls `GET /api/v2/games` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public catalog.
   */
  gamesRoutesCatalogGet(options?: RequestOptions) {
    return this.client.request<T.GamesRoutesCatalogGetResponse>({ ...options, method: "GET", url: `/api/v2/games` });
  }
  /**
   * Read enabled configured-tenant game definition and economy; unknown/disabled game404.
   * Calls `GET /api/v2/games/{game_id}` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public catalog.
   */
  gamesRoutesGameGet(gameId: Identifier, options?: RequestOptions) {
    return this.client.request<T.GamesRoutesGameGetResponse>({ ...options, method: "GET", url: `/api/v2/games/${encodeURIComponent(gameId)}` });
  }
  /**
   * Create invite lobby for authenticated caller; defaults difficulty11-14/paidfalse, expiry600seconds.
   * Calls `POST /api/v2/games/{game_id}/lobbies` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesCreateLobbyPost(gameId: Identifier, data: T.GamesRoutesCreateLobbyPostInput, options?: RequestOptions<T.GamesRoutesCreateLobbyPostInput>) {
    return this.client.request<T.GamesRoutesCreateLobbyPostResponse, T.GamesRoutesCreateLobbyPostInput>({ ...options, method: "POST", url: `/api/v2/games/${encodeURIComponent(gameId)}/lobbies`, data: data });
  }
  /**
   * Queue authenticated caller by game/difficulty/paid; default difficulty11-14, paidfalse; returns queued/matched receipt with90-second expiry.
   * Calls `POST /api/v2/games/{game_id}/matchmaking` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesEnqueuePost(gameId: Identifier, data: T.GamesRoutesEnqueuePostInput, options?: RequestOptions<T.GamesRoutesEnqueuePostInput>) {
    return this.client.request<T.GamesRoutesEnqueuePostResponse, T.GamesRoutesEnqueuePostInput>({ ...options, method: "POST", url: `/api/v2/games/${encodeURIComponent(gameId)}/matchmaking`, data: data });
  }
  /**
   * Queue the authenticated caller for kheradgah only; mode is ranked_duel/ranked_alliance/open_court. Other game404, domain conflict409.
   * Calls `POST /api/v2/games/{game_id}/matchmaking/tickets` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  kheradgahRoutesEnqueuePost(gameId: Identifier, data: T.KheradgahRoutesEnqueuePostInput, options?: RequestOptions<T.KheradgahRoutesEnqueuePostInput>) {
    return this.client.request<T.KheradgahRoutesEnqueuePostResponse, T.KheradgahRoutesEnqueuePostInput>({ ...options, method: "POST", url: `/api/v2/games/${encodeURIComponent(gameId)}/matchmaking/tickets`, data: data });
  }
  /**
   * Cancel caller-owned queued kheradgah ticket; matched tickets409, other game404.
   * Calls `DELETE /api/v2/games/{game_id}/matchmaking/tickets/{ticket_id}` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param ticketId Backend path identifier `ticket_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  kheradgahRoutesCancelDelete(gameId: Identifier, ticketId: Identifier, options?: RequestOptions) {
    return this.client.request<T.KheradgahRoutesCancelDeleteResponse>({ ...options, method: "DELETE", url: `/api/v2/games/${encodeURIComponent(gameId)}/matchmaking/tickets/${encodeURIComponent(ticketId)}` });
  }
  /**
   * Read caller-owned kheradgah matchmaking ticket; unknown game/ticket404.
   * Calls `GET /api/v2/games/{game_id}/matchmaking/tickets/{ticket_id}` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param ticketId Backend path identifier `ticket_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  kheradgahRoutesTicketGet(gameId: Identifier, ticketId: Identifier, options?: RequestOptions) {
    return this.client.request<T.KheradgahRoutesTicketGetResponse>({ ...options, method: "GET", url: `/api/v2/games/${encodeURIComponent(gameId)}/matchmaking/tickets/${encodeURIComponent(ticketId)}` });
  }
  /**
   * Create a server-authoritative session. SDK supplies required gameId from the path; the handler also overrides it. Solo sessions only; paid sessions must use matchmaking. difficulty defaults11-14 and accepts8-10/11-14/15-18; paid defaultsfalse. Invalid game404, domain validation422.
   * Calls `POST /api/v2/games/{game_id}/sessions` through the shared IDP-aware Faiber client.
   * @param gameId Backend path identifier `game_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  gamesRoutesCreateSessionPost(gameId: Identifier, data: T.GamesRoutesCreateSessionPostInput, options?: RequestOptions<T.GamesRoutesCreateSessionPostInput>) {
    return this.client.request<T.GamesRoutesCreateSessionPostResponse, T.GamesRoutesCreateSessionPostInput>({ ...options, method: "POST", url: `/api/v2/games/${encodeURIComponent(gameId)}/sessions`, data: { ...data, "gameId": String(gameId) } });
  }
  /**
   * Issue a30-second one-use kheradgah connection ticket to a match member; missing/foreign match404. Send ticket in hello frame within5seconds.
   * Calls `POST /api/v2/matches/{match_id}/connections` through the shared IDP-aware Faiber client.
   * @param matchId Backend path identifier `match_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  kheradgahRoutesConnectionPost(matchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.KheradgahRoutesConnectionPostResponse>({ ...options, method: "POST", url: `/api/v2/matches/${encodeURIComponent(matchId)}/connections` });
  }
  /**
   * Read member-specific kheradgah projection: only own hand and answer statistics are disclosed; finished question is null; missing/foreign match404.
   * Calls `GET /api/v2/matches/{match_id}/view` through the shared IDP-aware Faiber client.
   * @param matchId Backend path identifier `match_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant.
   */
  kheradgahRoutesViewGet(matchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.KheradgahRoutesViewGetResponse>({ ...options, method: "GET", url: `/api/v2/matches/${encodeURIComponent(matchId)}/view` });
  }
  /**
   * Open allowed-Origin match WebSocket. Send one-use ticket in hello within5seconds; invalid hello/ticket returns error frame. Commands return accepted result or rejected code then fresh snapshot; conflicts use frames, not HTTP409.
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
   * Read the static process advertisement with websocket and kheradgah.v1. This does not attest database, game, gateway, persistence or WebSocket readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public static process advertisement; deployment gateway policy remains separate.
   */
  mainProcessHealthGet(options?: RequestOptions) {
    return this.client.request<T.MainProcessHealthGetResponse>({ ...options, method: "GET", url: `/health` });
  }
}
