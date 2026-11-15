# Faiber local engine

Install with `npm install @faiber/faiber-engine`.

```ts
import { LocalEngineClient } from '@faiber/faiber-engine';
const engine = new LocalEngineClient(pairingAddress);
await engine.health({ signal });
const session = await engine.openVideo(selectedFile, { signal });
const capabilities = await engine.capabilities(session.session_id);
```

The pairing address is issued by the local engine host. Keep it and the client in memory; never place it in chat messages, analytics, URLs, or persistent browser storage. Only literal `127.0.0.1` HTTP addresses with a port and host-issued secret are accepted. Redirects and ambient cookies are disabled. The host must allow your exact application origin. Browsers may request local-network access.

`openVideo` copies a selected file only to the loopback host on the same device. `save`, `export`, `job`, `frame`, and `artifact` operate within that authenticated session. Export completion still requires visual and audio review. Capabilities explicitly describe unsupported operations. All requests accept an abort signal; aborting a request does not cancel an already queued engine export. Errors reject the promise. Restarting the host invalidates the pairing secret and sessions.

For cloud services use the [complete SDK](https://www.npmjs.com/package/@faiber/faiber-ts-sdk); never send a local pairing secret to a cloud service.
