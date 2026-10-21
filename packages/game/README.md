# @faiber/faiber-game-sdk

Portable TypeScript/WebAssembly game runtime designed to scale from a small 2D web game to a cross-platform 3D title.

```bash
npm install @faiber/faiber-game-sdk
```

The first foundation includes an ECS world, fixed-step game loop, pluggable renderer and physics systems, WebAssembly game plugins, adaptive device quality, automatic texture variant selection, WebGL 2/headless backends, and direct Infera State replication bindings.

```ts
import { FaiberGame } from "@faiber/faiber-game-sdk";

const game = new FaiberGame({ canvas, tickRate: 60, autoResize: true });
await game.start();
```

WebGPU, native GPU backends, Bevy component interchange, 2D/3D physics, editor tooling, shader graph, ray tracing, mobile/desktop packaging, asset cooking, and platform certification are adapter-level roadmap items. The capability detector never claims unsupported ray tracing and always selects a runnable fallback for the device.

This is a local browser runtime, not a separate Game HTTP service. State-backed match transports must use an authenticated State SDK client with secure HttpOnly cookies or an in-memory token provider. Never put a service secret in game code. Transport promises propagate failures to the caller; close match sessions and stop the game on unmount. Local rendering does not authorize moves or determine server rewards. Use `@faiber/faiber-ts-sdk` for the complete service facade. The packaged provenance manifest binds the local source and State dependency contract.
