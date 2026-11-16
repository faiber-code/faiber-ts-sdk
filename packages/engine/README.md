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

### Multi-source local editing

Use `openSession()` then `addMedia(session.session_id, opaqueId, selectedFile)` for
videos, still images and audio selected by the user. `frames()` returns local
preview artifact names and exact sample times: `overview: true` samples the full
source, while `fps: 2` covers up to eight seconds and `fps: 10` up to 1.6 seconds.
Compose these previews into a bounded contact sheet before sending model evidence.
`audioPreview()` extracts at most 30 seconds of mono WAV locally; transcription is
an explicit separate speech API operation. Neither method sends originals to a model.

Timelines accept ordered clips, normalized crop, speed, grading, fades, finite
`effect` values, incoming transitions, and up to eight positioned audio tracks.
Discover `capabilities()` first. The first clip uses a cut; overlapping transitions
reduce total duration. `save()` returns a revision; `export()` renders that revision.
Poll `job()` for actual stage progress, and use `cancel()` to stop a running export.
Cancellation is complete only after a terminal job status. A completed artifact
still requires human picture/sound review. Local sessions expire with the host.
