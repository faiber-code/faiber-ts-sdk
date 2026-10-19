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

This package exposes 30 source-mounted operations from the reservations service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

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

### Capacity, time and retained history

Providers have `capacity`1..1000 (default1), shared across overlapping appointments
for all their service offerings. Generation creates distinct single-claim slot IDs;
do not merge them by timestamp or use `is_reserved` updates to make/release bookings.
`operations.providerCapacityReportGet(providerId, {"page[number]":1,"page[size]":20})`
returns a locked snapshot with capacity, current/future peak, observed time and paged
legacy conflict windows. It does not reserve admission; booking checks capacity again.

Dates in availability/generation are strict UTC `YYYY-MM-DD`; appointment timestamps
are RFC3339. Pagination uses bracketed keys and defaults1/20 with page size1..100.
Invalid bounds/statuses/dates fail; generations are bounded, atomic and repeatable.

Cancellation uses DELETE but retains booking history and returns `{status,message,data:null}`.
Repeated cancellation succeeds without releasing a newer booking of the same slot.
Provider/service/slot deletion can return409 to protect claims or history. Unit-valued
association/deletion receipts also carry `data:null`. Read the booking afterward when
its updated state is needed. Public availability excludes legacy user-held slots.

Management calls require a trusted non-nil current user and organization header,
plus the source's matching resource/action or accepted reservation manage grant.
A role label alone does not authorize an action. Instances rely on their trusted
single-project routing boundary; clients must not invent organization identity.
Customer UUID existence and project membership require the canonical IDP lookup;
these local SDK tests do not establish live gateway or cross-service identity binding.
