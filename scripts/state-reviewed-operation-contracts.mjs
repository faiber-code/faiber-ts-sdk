// Direct mounted handler/model/auth/repository review at State b8d3bfa828878a979a8c8765285bfd3899965bd4. Native gameplay acceptance pending.
export const stateReviewedOperationContracts = {
  "state:GET /api/v1/game-operations/sessions": {
    "purpose": "Page configured game-tenant sessions newest first; defaults page=1/page_size=25, page >=1 and size clamped 10..100. Snake_case filters combine with AND; user_id means membership.",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted)",
    "response": "import(\"./contracts.types.js\").GameOperationSessionsResponse"
  },
  "state:GET /api/v1/game-operations/sessions/{session_id}/events": {
    "purpose": "Page configured game-tenant events by descending sequence; defaults page=1/page_size=50, size clamped 10..100. Optional kind and user_id combine; absent session returns404.",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted)",
    "response": "import(\"./contracts.types.js\").GameOperationEventsResponse"
  },
  "state:GET /api/v1/game-operations/summary": {
    "purpose": "Read configured game-tenant counts grouped by game, status, payment and settlement status. Runtime tenant comes from service configuration, not x-organization-id.",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted)",
    "response": "import(\"./contracts.types.js\").GameOperationsSummaryResponse"
  },
  "state:GET /api/v1/game-operations/worlds": {
    "purpose": "Read configured game-tenant economy entries, including disabled worlds, ordered by slug.",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted)",
    "response": "import(\"./contracts.types.js\").GameEconomiesResponse"
  },
  "state:PATCH /api/v1/game-operations/worlds/{game_id}/economy": {
    "purpose": "Replace economy settings: entryCoins 0..1000000 (solo games must remain free), burnPercent 0..100 rounded to basis points; errors422.",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "response": "import(\"./contracts.types.js\").GameEconomyResponse"
  },
  "state:GET /api/v1/realtime": {
    "response": "import(\"./types.js\").ServerEvent",
    "auth": "short-lived room ticket issued by the authenticated join endpoint",
    "purpose": "Open room replication with room_id/player_id/ticket query parameters. Five-minute ticket is validated at upgrade; wrong/expired ticket401. Input identity is bound to the upgrade. Receives snapshot/patch/player/ack/pong/error frames.",
    "websocket": "room"
  },
  "state:DELETE /api/v1/rooms/{room_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<boolean>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "purpose": "Delete an organization room; missing/foreign room404; success data:true."
  },
  "state:GET /api/v1/rooms/{room_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").Room>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted)",
    "purpose": "Read a complete organization room snapshot including players and entities; missing/foreign room404."
  },
  "state:PUT /api/v1/rooms/{room_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").Room>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "purpose": "Update room name, capacity or status; null fields preserve. Capacity clamps1..4096 and cannot shrink below current players (409); blank name400."
  },
  "state:POST /api/v1/rooms/{room_id}/endpoints/{slug}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").StatePatch>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:execute (state management/wildcard/admin aliases accepted)",
    "purpose": "Invoke WASM for a caller-owned player (management grants can act for others). Guest must export ()->i32 returning0; numeric writes and fuel limits apply. Returns authoritative patch; execution errors400."
  },
  "state:POST /api/v1/rooms/{room_id}/join": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").JoinTicket>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:execute (state management/wildcard/admin aliases accepted)",
    "purpose": "Create a player/entity and five-minute scoped room ticket. user_id must match caller unless state management grant; full/foreign/missing room400."
  },
  "state:GET /api/v1/worlds": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").World[]>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted)",
    "purpose": "List organization worlds with managed game worlds, sorted by name. managed worlds cannot be updated/deleted."
  },
  "state:POST /api/v1/worlds": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").World>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "purpose": "Create an in-memory world; nonempty name and slug required. Missing replication uses60/20/128/120; physics defaults disabled."
  },
  "state:DELETE /api/v1/worlds/{world_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<boolean>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "purpose": "Delete an organization world and its rooms, endpoints and WASM modules; managed world409; missing404; success data:true."
  },
  "state:GET /api/v1/worlds/{world_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").World>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted)",
    "purpose": "Read an organization world or configured managed game projection; absent world404."
  },
  "state:PUT /api/v1/worlds/{world_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").World>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "purpose": "Update an organization world; null/missing fields preserve values. Supplied nested configs replace existing configs with serde defaults. Managed game worlds409; blank name400."
  },
  "state:GET /api/v1/worlds/{world_id}/endpoints": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").WasmEndpoint[]>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted)",
    "purpose": "List world export bindings; missing/foreign world404."
  },
  "state:POST /api/v1/worlds/{world_id}/endpoints": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").WasmEndpoint>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "purpose": "Bind a world WASM module export to a component and slug. Foreign module400; module export signature checked on invocation."
  },
  "state:DELETE /api/v1/worlds/{world_id}/endpoints/{endpoint_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<boolean>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "purpose": "Delete an organization world export binding; missing world/binding404; success data:true."
  },
  "state:GET /api/v1/worlds/{world_id}/rooms": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").Room[]>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted)",
    "purpose": "List organization rooms for a world. Unknown/foreign world returns an empty list."
  },
  "state:POST /api/v1/worlds/{world_id}/rooms": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").Room>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "purpose": "Create a room in an in-memory organization world. capacity defaults32 and clamps1..4096; absent/foreign world400."
  },
  "state:GET /api/v1/worlds/{world_id}/wasm": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").WasmModuleInfo[]>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:read (state management/wildcard/admin aliases accepted)",
    "purpose": "List organization world WASM metadata; missing/foreign world404."
  },
  "state:POST /api/v1/worlds/{world_id}/wasm": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").WasmModuleInfo>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "purpose": "Upload JSON base64 WASM, validate bytes and return SHA256 metadata. Invalid base64/WASM400, missing/foreign world404."
  },
  "state:DELETE /api/v1/worlds/{world_id}/wasm/{module_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<boolean>",
    "auth": "authenticated IDP user, non-nil x-organization-id UUID and state:write (state management/wildcard/admin aliases accepted)",
    "purpose": "Delete a world module; attached endpoints must be deleted first(409). Missing world/module404; success data:true."
  },
  "state:GET /api/v2/game-history": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameSessionView[]>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "List the caller latest50 member session projections ordered newest first."
  },
  "state:GET /api/v2/game-lobbies/{code}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameLobbyView>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Read an invite lobby visible to creator or session member; absent/inaccessible lobby422."
  },
  "state:POST /api/v2/game-lobbies/{code}/join": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameLobbyJoined>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Join waiting unexpired invite lobby; code is trimmed and uppercased; invalid/full/expired lobby422."
  },
  "state:GET /api/v2/game-matchmaking/{ticket_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameQueueTicket>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Read caller-owned queue ticket; absent/foreign ticket404. sessionId remains null while queued."
  },
  "state:GET /api/v2/game-progress": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameProgress[]>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Read caller finished-session aggregates by game/difficulty; sufficientData requires at least3 samples."
  },
  "state:GET /api/v2/game-sessions/{session_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameSessionView>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Read caller-member session projection; absent/foreign404. Board/challenge/lastEvent JSON depends on registered game and ruleset."
  },
  "state:POST /api/v2/game-sessions/{session_id}/commands": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameSessionView>",
    "input": "import(\"./contracts.types.js\").GameCommandInput",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Apply stable commandId with expectedVersion; duplicate IDs return current projection, stale versions409. Game/ruleset determines answer/action JSON. Never automatically rebase conflicts."
  },
  "state:POST /api/v2/game-sessions/{session_id}/ready": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameSessionView>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Mark member ready; paid sessions enforce readiness timeout and upstream escrow funding. Returns current caller projection; domain errors422."
  },
  "state:GET /api/v2/game-world-progress": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameWorldProgress[]>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Read configured-tenant caller world progression ordered by game."
  },
  "state:GET /api/v2/games": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameCatalogEntry[]>",
    "auth": "public catalog",
    "purpose": "Read enabled configured-tenant game catalog with current entryCoins and burnPercent. No authentication permission required."
  },
  "state:GET /api/v2/games/{game_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameCatalogEntry>",
    "auth": "public catalog",
    "purpose": "Read enabled configured-tenant game definition and economy; unknown/disabled game404."
  },
  "state:POST /api/v2/games/{game_id}/lobbies": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameLobbyCreated>",
    "input": "import(\"./contracts.types.js\").GameQueueInput",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Create invite lobby for authenticated caller; defaults difficulty11-14/paidfalse, expiry600seconds."
  },
  "state:POST /api/v2/games/{game_id}/matchmaking": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameQueueReceipt>",
    "input": "import(\"./contracts.types.js\").GameQueueInput",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Queue authenticated caller by game/difficulty/paid; default difficulty11-14, paidfalse; returns queued/matched receipt with90-second expiry."
  },
  "state:POST /api/v2/games/{game_id}/matchmaking/tickets": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").KheradgahTicket>",
    "input": "import(\"./contracts.types.js\").KheradgahQueueInput",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Queue the authenticated caller for kheradgah only; mode is ranked_duel/ranked_alliance/open_court. Other game404, domain conflict409."
  },
  "state:DELETE /api/v2/games/{game_id}/matchmaking/tickets/{ticket_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").KheradgahTicket>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Cancel caller-owned queued kheradgah ticket; matched tickets409, other game404."
  },
  "state:GET /api/v2/games/{game_id}/matchmaking/tickets/{ticket_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").KheradgahTicket>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Read caller-owned kheradgah matchmaking ticket; unknown game/ticket404."
  },
  "state:POST /api/v2/games/{game_id}/sessions": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameSessionView>",
    "input": "import(\"./contracts.types.js\").GameCreateInput",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Create a server-authoritative session. SDK supplies required gameId from the path; the handler also overrides it. Solo sessions only; paid sessions must use matchmaking. difficulty defaults11-14 and accepts8-10/11-14/15-18; paid defaultsfalse. Invalid game404, domain validation422.",
    "pathFields": {
      "gameId": "gameId"
    }
  },
  "state:POST /api/v2/matches/{match_id}/connections": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").KheradgahConnectionTicket>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Issue a30-second one-use kheradgah connection ticket to a match member; missing/foreign match404. Send ticket in hello frame within5seconds."
  },
  "state:GET /api/v2/matches/{match_id}/view": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").KheradgahView>",
    "auth": "authenticated IDP user with state:execute (management/admin/wildcard aliases accepted); owner/member checks apply where relevant",
    "purpose": "Read member-specific kheradgah projection: only own hand and answer statistics are disclosed; finished question is null; missing/foreign match404."
  },
  "state:GET /api/v2/realtime": {
    "response": "import(\"./contracts.types.js\").KheradgahServerFrame",
    "auth": "one-use, 30-second connection ticket issued by the authenticated match connection operation; Origin validation",
    "purpose": "Open allowed-Origin match WebSocket. Send one-use ticket in hello within5seconds; invalid hello/ticket returns error frame. Commands return accepted result or rejected code then fresh snapshot; conflicts use frames, not HTTP409.",
    "websocket": true,
    "methodName": "connectMatchRealtime"
  },
  "state:GET /health": {
    "methodName": "mainProcessHealthGet",
    "typeBase": "MainProcessHealthGet",
    "response": "import(\"./contracts.types.js\").StateProcessHealthResponse",
    "auth": "public static process advertisement; deployment gateway policy remains separate",
    "purpose": "Read the static process advertisement with websocket and kheradgah.v1. This does not attest database, game, gateway, persistence or WebSocket readiness."
  }
};
