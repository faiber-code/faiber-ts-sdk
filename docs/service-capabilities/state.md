# state capability discovery

Authoritative game worlds, rooms, schemas, state replication, sequenced inputs and bounded WASM execution.

جهان و اتاق بازی مرجع، طرح داده، همگام‌سازی وضعیت، ورودی ترتیبی و اجرای محدود وب‌اسمبلی.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `6be433e043caddb2d1a5761562cfc42bd0c67190`
- SDK source revision: `6be433e043caddb2d1a5761562cfc42bd0c67190`
- Working HEAD: `6be433e043caddb2d1a5761562cfc42bd0c67190`
- Source relationship: same

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-state/src/main.rs:43` | inspect middleware/local scope | pending |
| `GET /api/v1/worlds` | `infera-state/src/routes.rs:64` | state:read | pending |
| `POST /api/v1/worlds` | `infera-state/src/routes.rs:90` | state:write | pending |
| `GET /api/v1/worlds/{world_id}` | `infera-state/src/routes.rs:102` | state:read | pending |
| `PUT /api/v1/worlds/{world_id}` | `infera-state/src/routes.rs:126` | state:write | pending |
| `DELETE /api/v1/worlds/{world_id}` | `infera-state/src/routes.rs:169` | state:write | pending |
| `GET /api/v1/worlds/{world_id}/rooms` | `infera-state/src/routes.rs:289` | state:read | pending |
| `POST /api/v1/worlds/{world_id}/rooms` | `infera-state/src/routes.rs:307` | state:write | pending |
| `GET /api/v1/worlds/{world_id}/wasm` | `infera-state/src/routes.rs:428` | state:read | pending |
| `POST /api/v1/worlds/{world_id}/wasm` | `infera-state/src/routes.rs:405` | state:write | pending |
| `GET /api/v1/worlds/{world_id}/endpoints` | `infera-state/src/routes.rs:522` | state:read | pending |
| `POST /api/v1/worlds/{world_id}/endpoints` | `infera-state/src/routes.rs:478` | state:write | pending |
| `GET /api/v1/rooms/{room_id}` | `infera-state/src/routes.rs:320` | state:read | pending |
| `PUT /api/v1/rooms/{room_id}` | `infera-state/src/routes.rs:337` | state:write | pending |
| `DELETE /api/v1/rooms/{room_id}` | `infera-state/src/routes.rs:371` | state:write | pending |
| `DELETE /api/v1/worlds/{world_id}/wasm/{module_id}` | `infera-state/src/routes.rs:446` | state:write | pending |
| `DELETE /api/v1/worlds/{world_id}/endpoints/{endpoint_id}` | `infera-state/src/routes.rs:549` | state:write | pending |
| `POST /api/v1/rooms/{room_id}/join` | `infera-state/src/routes.rs:386` | state:execute | pending |
| `POST /api/v1/rooms/{room_id}/endpoints/{slug}` | `infera-state/src/routes.rs:575` | state:execute | pending |
| `GET /api/v1/realtime` | `infera-state/src/routes.rs:612` | inspect middleware/local scope | pending |
| `GET /api/v1/game-operations/summary` | `infera-state/src/routes.rs:213` | state:read | pending |
| `GET /api/v1/game-operations/worlds` | `infera-state/src/routes.rs:226` | state:read | pending |
| `PATCH /api/v1/game-operations/worlds/{game_id}/economy` | `infera-state/src/routes.rs:239` | state:write | pending |
| `GET /api/v1/game-operations/sessions` | `infera-state/src/routes.rs:254` | state:read | pending |
| `GET /api/v1/game-operations/sessions/{session_id}/events` | `infera-state/src/routes.rs:268` | state:read | pending |
| `POST /api/v2/games/{game_id}/matchmaking/tickets` | `infera-state/src/kheradgah_routes.rs:45` | inspect middleware/local scope | pending |
| `GET /api/v2/games/{game_id}/matchmaking/tickets/{ticket_id}` | `infera-state/src/kheradgah_routes.rs:61` | inspect middleware/local scope | pending |
| `DELETE /api/v2/games/{game_id}/matchmaking/tickets/{ticket_id}` | `infera-state/src/kheradgah_routes.rs:76` | inspect middleware/local scope | pending |
| `GET /api/v2/matches/{match_id}/view` | `infera-state/src/kheradgah_routes.rs:91` | inspect middleware/local scope | pending |
| `POST /api/v2/matches/{match_id}/connections` | `infera-state/src/kheradgah_routes.rs:105` | inspect middleware/local scope | pending |
| `GET /api/v2/realtime` | `infera-state/src/kheradgah_routes.rs:119` | inspect middleware/local scope | pending |
| `GET /api/v2/games` | `infera-state/src/games_routes.rs:50` | inspect middleware/local scope | pending |
| `GET /api/v2/games/{game_id}` | `infera-state/src/games_routes.rs:58` | inspect middleware/local scope | pending |
| `POST /api/v2/games/{game_id}/sessions` | `infera-state/src/games_routes.rs:72` | inspect middleware/local scope | pending |
| `POST /api/v2/games/{game_id}/matchmaking` | `infera-state/src/games_routes.rs:134` | inspect middleware/local scope | pending |
| `GET /api/v2/game-matchmaking/{ticket_id}` | `infera-state/src/games_routes.rs:147` | inspect middleware/local scope | pending |
| `POST /api/v2/games/{game_id}/lobbies` | `infera-state/src/games_routes.rs:97` | inspect middleware/local scope | pending |
| `POST /api/v2/game-lobbies/{code}/join` | `infera-state/src/games_routes.rs:110` | inspect middleware/local scope | pending |
| `GET /api/v2/game-lobbies/{code}` | `infera-state/src/games_routes.rs:122` | inspect middleware/local scope | pending |
| `GET /api/v2/game-sessions/{session_id}` | `infera-state/src/games_routes.rs:159` | inspect middleware/local scope | pending |
| `POST /api/v2/game-sessions/{session_id}/ready` | `infera-state/src/games_routes.rs:171` | inspect middleware/local scope | pending |
| `POST /api/v2/game-sessions/{session_id}/commands` | `infera-state/src/games_routes.rs:183` | inspect middleware/local scope | pending |
| `GET /api/v2/game-history` | `infera-state/src/games_routes.rs:196` | inspect middleware/local scope | pending |
| `GET /api/v2/game-progress` | `infera-state/src/games_routes.rs:207` | inspect middleware/local scope | pending |
| `GET /api/v2/game-world-progress` | `infera-state/src/games_routes.rs:218` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/state.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
