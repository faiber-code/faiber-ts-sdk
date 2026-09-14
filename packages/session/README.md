# @faiber/faiber-session

Rooms, room lifecycle, LiveKit tokens and webhooks, recordings, playback, analytics, interactive starts, and room-state responses.

## Install

```bash
npm install @faiber/faiber-session
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { SessionApi } from "@faiber/faiber-session";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("session", {
  domains: { session: process.env.FAIBER_SESSION_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new SessionApi(client);

const rooms = await api.rooms.list({ "page[number]": 1 });
const token = await api.livekitToken(roomId);
const recordings = await api.listRecordings({ status: "ready" });
const recording = await api.recordingManifest(recordingId);
const liveView = api.roomViewUrl(roomId);
const recordingsView = api.recordingViewUrl(roomId);
```

## Complete capability

This package exposes 34 registered operations from the live sessions service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `assistant_tools` | 3 | `GET` |
| `branding` | 5 | `GET`, `POST`, `PUT` |
| `configuration` | 2 | `GET`, `PUT` |
| `integration` | 2 | `GET` |
| `recording` | 4 | `GET`, `POST` |
| `room` | 16 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `room_state` | 1 | `POST` |
| `router` | 1 | `GET` |

Room creation and management, join/token access, stop/end, interactive starts, playback, leaderboards, room recordings, the global recording queue, manifests, processing schedules, audio models, LiveKit configuration, branding, Chat assistant tools, and state responses are all covered. `roomViewUrl`, `recordingViewUrl`, and `playbackViewUrl` generate the canonical Session web views from the configured Session domain. Unusual lifecycle verbs—including `POST` for ending a room—are preserved exactly.

## Authentication and authorization

Use a `TokenProvider` to forward the signed-in user's Bearer token, or enable `withCredentials` for secure HttpOnly cookie sessions. Permission requirements copied from service route guards are included in each operation's JSDoc. The SDK does not embed API keys, credentials, localhost URLs, sandbox hosts, or production hosts.

## Inputs, queries, responses, and transport

All methods return the complete Axios response, including status, headers, and request IDs. Request bodies and query objects are named exported interfaces. Nested pagination uses keys such as `page[number]` and `page[size]` where required by the service. Standard Axios request options, headers, timeouts, adapters, interceptors, and `AbortSignal` cancellation are supported as the final argument.

Generic REST resources are capability-guarded. Calling a legacy method that the service does not register throws `UnsupportedOperationError` before sending a request instead of producing a backend `405`.

## Errors and cancellation

```ts
try {
  await api.client.get("/health", undefined, { signal: AbortSignal.timeout(5_000) });
} catch (error) {
  // Axios errors retain response.status and the service error body.
}
```

Use `@faiber/faiber-ts-sdk` when one application needs multiple Faiber services with one configuration.
