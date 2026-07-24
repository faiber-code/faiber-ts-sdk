# @faiber/faiber-game-sdk

Portable TypeScript/WebAssembly game runtime designed to scale from a small 2D web game to a cross-platform 3D title.

The first foundation includes an ECS world, fixed-step game loop, pluggable renderer and physics systems, WebAssembly game plugins, adaptive device quality, automatic texture variant selection, WebGL 2/headless backends, and direct Infera State replication bindings.

```ts
const game = new FaiberGame({ canvas, tickRate: 60, autoResize: true });
game.use(movementSystem);
game.use(new StateReplicationSystem(realtime, stateBinding).connect());
await game.start();
```

WebGPU, native GPU backends, Bevy component interchange, 2D/3D physics, editor tooling, shader graph, ray tracing, mobile/desktop packaging, asset cooking, and platform certification are adapter-level roadmap items. The capability detector never claims unsupported ray tracing and always selects a runnable fallback for the device.
