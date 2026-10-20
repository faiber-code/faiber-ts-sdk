# @faiber/faiber-messenger

Notification dispatch and inboxes, templates and localized content, channels, providers, subscriptions, dashboard metrics, and integration metadata.

## Install

```bash
npm install @faiber/faiber-messenger
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { MessengerApi } from "@faiber/faiber-messenger";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("messenger", {
  domains: { messenger: process.env.FAIBER_MESSENGER_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new MessengerApi(client);

const inbox = await api.myInbox();
const first = inbox.data.data.data[0];
if (first) await api.markMyNotificationRead(first.id);
```

## Complete capability

This package exposes 47 registered operations from the messaging service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `channel` | 6 | `DELETE`, `GET`, `PATCH`, `POST` |
| `dashboard` | 1 | `GET` |
| `integration` | 3 | `GET` |
| `notification` | 10 | `GET`, `PATCH`, `POST` |
| `router` | 3 | `GET` |
| `service` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `template` | 8 | `DELETE`, `GET`, `PATCH`, `POST` |

Self-service inbox routes derive the recipient from the authenticated user and return a reduced response without delivery administration fields. Administrative notification routes and template content remain separate operations.

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

### Realtime through Sockudo

Use `subscribeRealtime` from `@faiber/sdk-core` for private Sockudo subscriptions. Chat configuration comes from `ChatApi.realtimeConfig(conversationId)` and authorization from `ChatApi.realtimeAuth`; both require conversation membership and `chat:read`. Notification configuration and authorization use `MessengerApi.operations.notificationNotificationsRealtimeConfigGet` and `notificationNotificationsRealtimeAuthPost` with `notification:self:read`; the backend permits only the signed-in recipient's channel. Keep these service responsibilities separate. Reload persisted records on subscription/reconnect, close subscriptions on logout, and keep all Sockudo secrets server-side. See the [core subscription example](https://github.com/faiber-code/faiber-ts-sdk/tree/main/packages/core#sockudo-realtime-subscriptions).

### Provider setup and OTP readiness

```ts
const report = await api.operations.serviceSetupCheckPost();
console.log(report.data.data.channels, report.data.data.providerVerified);
```

This read-only inspection requires `admin:service:read` and sends no notifications. Each provider result names its channel, configuration and verification status. `serviceReadinessPost` is a server-only OTP check requiring the `x-website-otp-token` header; its response is the raw `{ready}` object. Standard Axios headers, timeouts, errors and cancellation are preserved.

## Durable self delivery (0.24.1)

Use `api.delivery.events()` to initialize a cursor **before** loading `api.myInbox()`, then poll from that cursor. Prefer scoped sockets while connected, reconciling missed events through this same durable stream. Deduplicate by notification ID; read changes also enter the stream. A 410 requests a full snapshot resync. `events` defaults to a 35-second Axios timeout for the server's 25-second wait. AbortSignal and explicit timeout overrides work normally.

`api.delivery.unreadCount()` is the authoritative notification count, independent of chat unread messages. `registerDevice({application_id,installation_id,platform,token,locale})` registers an authenticated Android/iOS installation; reuse the installation UUID when tokens change and revoke before logout. Device tokens are encrypted and transient provider failures have independent durable retries. Background/closed clients require configured OS/Web Push and permission; sockets and polling cannot run in a terminated application. Reconcile after account change, reconnect and resume.

Canonical Web Push operations expose configuration, encrypted subscription registration/removal, test delivery and delivery status. Request permission from a user action. Semantic destinations resolve through approved local client routes; provider acceptance does not prove display or reading. All new delivery operations require `notification:self:read` and derive the recipient from authentication, never an arbitrary recipient parameter.

## Recipient delivery contract candidate

`myInboxPage({"page[number]":2,"page[size]":30},options)` uses native bracket pagination. Default size is20; the native service clamps it to1..100. `myInbox(options)` remains compatible and now accepts an explicit typed `params` member through `InboxRequestOptions`.

Inbox items always include nullable title/body/path/destination/work-item/event fields. `description` is recipient message copy. The updated stream DTO carries the same recipient projection plus `deleted`; malformed historical IDs/timestamps can be null. Provider diagnostics, raw recipient/service routing, raw params and provider options are excluded. Destination retains native dynamic JSON and needs recognized-shape validation before navigation.

Durable long-poll and socket payloads include `cursor` and `event_id`; the legacy socket base projection does not establish a durable cursor. Initialize the cursor, read the snapshot, then resume;410 requires resynchronization. Self-read permissions use the actual IDP `message` namespace and remain recipient-bound.

These updated types target the recipient-projection backend candidate. Its exact source adoption and freshly packed SDK/native tests remain release gates; this source change is not a publication or deployed compatibility certificate.
