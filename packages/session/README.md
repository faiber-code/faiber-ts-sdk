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
```

## Complete capability

This package exposes 41 extracted operations from the pinned Session source. Common workflows have concise methods on `api`; generated operations and their named types are exported. Extraction is structural coverage, and does not certify all cross-service workflows.

| Area | Operations | HTTP methods |
|---|---:|---|
| `asset-economy` | 1 | `POST` |
| `assistant-tools` | 3 | `GET` |
| `branding` | 5 | `GET`, `POST`, `PUT` |
| `configuration` | 2 | `GET`, `PUT` |
| `integration` | 3 | `GET`, `POST` |
| `notification-state` | 1 | `GET` |
| `recording` | 4 | `GET`, `POST` |
| `room` | 19 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `room-state` | 1 | `POST` |
| `router` | 2 | `GET` |

Room start, stop, end, playback, recording, webhook, and state-response routes are separate operations so their unusual GET/POST verbs are preserved exactly.

When scoped assets are enabled, use `interact(roomId, {event_id, interaction,
content})` for `emoji`, `raise_hand`, `room_chat` and other configured interactions.
Reuse the event ID on retry. The server verifies membership, mute state, Charge,
cooldowns and chat limits before delivery. Room chat is free of Charge but remains
rate limited. Browser LiveKit data publication is disabled in this mode.
Participant admission uses RabbitMQ reservations internally; callers must not
consume free sessions or reset Charge themselves. Broker timeouts reject admission
and interactions. Cancellation through normal Axios options remains supported.

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

### Presence and moderation

`operations.roomRoomsPresenceEventsGet(roomId)` returns typed `joined`/`left` events with UTC timestamps. Access requires a room read permission and preview/participant authorization. `roomRoomsSelfModerationGet` reads the current participant's mute state; `roomRoomsParticipantMutePut(roomId, profileId, {muted:true})` requires `room:end` and authorized room ownership. Muted-until timestamps are nullable RFC 3339 strings. Standard authenticated Axios responses and cancellation options are retained.

### Trusted LMS notification state

`operations.notificationStateSnapshotGet(roomId, options)` requires a server-only
`x-infera-lms-token` matching Session's `LMS_SERVICE_TOKEN`. Never expose it to a browser.
The response includes nullable classroom-session and actual-start timestamps, current
present user IDs, entry availability and ended state. Missing configuration or an
unavailable media provider returns503; an invalid credential returns403.

This observation can persist the first learning-start marker and an outbox event.
Live rooms consult LiveKit with a five-second bound; composition rooms consult recent
client activity. It is not proof of unique attendance or punctuality. The SDK preserves
Session's room-client IDs; callers must verify their mapping to canonical IDP users.
`flowIntegration()` calls the mounted root path `/integration/flow`.
