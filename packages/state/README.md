# @faiber/faiber-state-sdk

TypeScript client for Infera State worlds, rooms, authoritative state, WASM endpoints, realtime replication, and client prediction.

```bash
npm install @faiber/faiber-ts-sdk
```

```ts
const ticket = (await faiber.state.join(roomId, userId)).data.data;
const realtime = new StateRealtimeClient(ticket);
realtime.on("patch", patch => applyServerPatch(patch));
await realtime.connect();
realtime.sendInput({ move_x: 5, move_z: -1 }, "unreliable");
```

Browsers use the reliable WebSocket channel by default. Native mobile/desktop hosts can inject a `DatagramTransport` for UDP or QUIC traffic. `PredictionBuffer` replays unacknowledged input after each authoritative patch.

All HTTP methods use the shared `FaiberClient`, so Bearer tokens and secure-cookie credentials,
Axios errors, cancellation signals, and custom request options are preserved. The realtime socket
authenticates with the short-lived ticket returned by the authorized `join` call.

### Versioned games and match realtime

The generated operations also cover v2 game catalogs, sessions, commands, invite lobbies, progress, matchmaking and connection tickets. v1 and v2 return `{data}` envelopes. Game request/response fields use camelCase; commands include a stable command UUID and the expected state version. Stale versions return 409. The registered ruleset determines board and challenge JSON payloads.

```ts
const created = await faiber.state.operations.gamesRoutesCreateSessionPost(gameId, { difficulty: "11-14", paid: false });
const connected = await faiber.state.operations.kheradgahRoutesConnectionPost(matchId);
const socket = await faiber.state.operations.connectMatchRealtime(connected.data.data, { signal });
```

Protected HTTP operations inherit the configured token/cookie transport and require `state:execute`. `connectMatchRealtime` performs the WebSocket upgrade, validates the configured State origin and sends the 30-second one-use ticket in the initial hello frame. Acquire a new ticket after reconnecting. `routesRealtimeGet` opens v1 room replication using a scoped `JoinTicket`. WebSocket operations return a connected socket/client; HTTP operations preserve complete Axios responses.

### Process advertisement

`operations.mainProcessHealthGet()` reads `/health` as a typed static advertisement:
`data.service`, `data.status`, `data.transports`, `data.rulesets` and `data.wasm`.
It is not a database, match engine, WebSocket or gateway readiness guarantee.
