# @faiber/faiber-state-sdk

TypeScript client for Infera State worlds, rooms, authoritative state, WASM endpoints, realtime replication, and client prediction.

```ts
const ticket = (await faiber.state.join(roomId, userId)).data.data;
const realtime = new StateRealtimeClient(ticket);
realtime.on("patch", patch => applyServerPatch(patch));
await realtime.connect();
realtime.sendInput({ move_x: 5, move_z: -1 }, "unreliable");
```

Browsers use the reliable WebSocket channel by default. Native mobile/desktop hosts can inject a `DatagramTransport` for UDP or QUIC traffic. `PredictionBuffer` replays unacknowledged input after each authoritative patch.
