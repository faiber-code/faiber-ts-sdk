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

const sent = await api.send({
  recipient_id: userId,
  template: "membership-expiring",
  data: { days: 3 },
});
await api.operations.notificationNotificationsMarkReadPatch(notificationId);
```

## Complete capability

This package exposes 30 registered operations from the messaging service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `channel` | 6 | `DELETE`, `GET`, `PATCH`, `POST` |
| `dashboard` | 1 | `GET` |
| `integration` | 3 | `GET` |
| `notification` | 4 | `GET`, `PATCH`, `POST` |
| `router` | 3 | `GET` |
| `service` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `template` | 8 | `DELETE`, `GET`, `PATCH`, `POST` |

Template content has its own create/update/list routes. Notification read state uses the dedicated PATCH operation rather than generic notification CRUD.

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
