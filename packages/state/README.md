# @faiber/faiber-state-sdk

Typed State worlds, rooms, WASM export bindings, server-authoritative games and ticket-authenticated WebSockets.

```bash
npm install @faiber/faiber-state-sdk
```

```ts
import { FaiberClient } from "@faiber/sdk-core";
import { StateApi, StateRealtimeClient } from "@faiber/faiber-state-sdk";

const state = new StateApi(new FaiberClient("state", {
  domains: { state: "https://state.example.com" },
  authMode: "cookie",
}));
const options = { headers: { "x-organization-id": organizationId }, signal };
const world = await state.createWorld({ name: "Arena", slug: "arena" }, options);
const room = await state.createRoom(world.data.data.id, { name: "Room 1", capacity: 8 }, options);
const ticket = (await state.join(room.data.data.id, userId, options)).data.data;
const realtime = new StateRealtimeClient(ticket);
realtime.on("patch", patch => applyServerPatch(patch));
realtime.on("pong", ({ tick }) => observeServerTick(tick));
await realtime.connect();
realtime.sendInput({ move_x: 5, move_z: -1 });
// On leaving the room:
realtime.close();
```

Use secure HttpOnly cookies with `withCredentials`, or configure `FaiberClient` with a `TokenProvider` that supplies an in-memory Bearer token. Every HTTP call preserves the full Axios response, options, errors and cancellation signal. Catch Axios errors for validation (400/422), missing records (404), permission failures (401/403), conflicts (409), and transport failures. Aborting `signal` cancels HTTP requests. The complete facade is available as [`@faiber/faiber-ts-sdk`](https://www.npmjs.com/package/@faiber/faiber-ts-sdk).

v1 world/room/WASM operations require an authenticated user, a non-nil `x-organization-id` UUID, and `state:read`, `state:write`, or `state:execute` as documented per operation. State management, wildcard and admin aliases are also accepted. Joining/invoking for another user requires management authority. Managed game worlds expose `managed: true` and reject update/deletion with 409. All v1 and v2 success responses use `{ data }`.

Browsers carry room input over WebSocket. Native hosts can inject `DatagramTransport` for the JSON UDP input gateway; each datagram includes the scoped room ticket. `acked` UDP delivery returns an acknowledgement. The room ticket expires after five minutes and is checked at upgrade; rejoining obtains a new player and ticket. `close()` stops retries. The backend may deliver a patch both as an input response and broadcast; consumers should track entity revisions/sequences. `PredictionBuffer` can replay pending inputs after authoritative updates.

The generated `state.operations` covers all mounted HTTP APIs and both WebSocket upgrades. v2 game catalog reads are public; protected game operations require `state:execute` and applicable owner/member checks. The SQL game runtime uses the tenant configured on the service. Game-operations summary, economy, session pages and event pages have named response models. Their query keys use snake_case (`page_size`, `settlement_status`, `user_id`); returned page metadata uses camelCase. Session pages default to 25 entries, event pages to 50, and both clamp sizes to 10–100.

```ts
const created = await state.operations.gamesRoutesCreateSessionPost(gameId, {
  difficulty: "11-14", paid: false,
}, { signal });
const page = await state.operations.routesGameOperationSessionsGet({
  page: 1, page_size: 25, paid: false,
}, options);
const connection = await state.createMatchConnection(matchId, { signal });
const socket = await state.operations.connectMatchRealtime(connection.data.data, { signal });
```

Game commands include a stable command UUID and the expected state version. Stale HTTP game versions return 409; match WebSocket command rejection uses a `command_result` frame and a fresh snapshot. Board, challenge, metrics, event payloads and game answer/action JSON deliberately vary by registered game/ruleset and are documented as `GamePayload`; component/input JSON varies by authored world schema.

`connectMatchRealtime` validates the configured service origin and sends a 30-second one-use connection ticket in the initial hello frame within five seconds. Acquire a fresh ticket after reconnecting. `MatchRealtimeClient` automatically reconnects only when supplied `refreshTicket`; a consumed ticket cannot be reused. The server validates allowed browser Origins. `routesRealtimeGet(ticket, { signal })` opens v1 room replication against the configured service origin. Socket operations return a connected WebSocket/client.

`health()` and `operations.mainProcessHealthGet()` read the static `/health` advertisement (`service`, `status`, `transports`, `rulesets`, `wasm`). This advertises WebSocket and `kheradgah.v1`; it does not verify database, gameplay, persistence, gateway or WebSocket readiness.
