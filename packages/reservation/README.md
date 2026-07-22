# @faiber/faiber-reservation

Bookable services, providers, provider-service assignments, work schedules, generated and available slots, and reservations.

## Install

```bash
npm install @faiber/faiber-reservation
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { ReservationApi } from "@faiber/faiber-reservation";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("reservation", {
  domains: { reservation: process.env.FAIBER_RESERVATION_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new ReservationApi(client);

const slots = await api.availableSlots({
  provider_id: 42,
  service_id: 8,
  date: "2026-07-22",
});
await api.setSchedules(42, { schedules });
```

## Complete capability

This package exposes 29 registered operations from the reservations service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `integration` | 1 | `GET` |
| `provider` | 8 | `DELETE`, `GET`, `PATCH`, `POST` |
| `reservation` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `reservation-service` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `router` | 3 | `GET` |
| `time-slot` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `work-schedule` | 2 | `GET`, `PUT` |

Dates are ISO-8601 at the API boundary. Local calendar conversion belongs in application presentation code.

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
