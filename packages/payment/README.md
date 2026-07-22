# @faiber/faiber-payment

Gateway administration, payment creation, transaction lookup, daily income, browser callbacks, and payment status pages.

## Install

```bash
npm install @faiber/faiber-payment
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { PaymentApi } from "@faiber/faiber-payment";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("payment", {
  domains: { payment: process.env.FAIBER_PAYMENT_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new PaymentApi(client);

const gateways = await api.gateways.list();
const payment = await api.createPayment({
  amount: 4900,
  gateway_id: gatewayId,
});
```

## Complete capability

This package exposes 18 registered operations from the payments service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `gateway` | 6 | `DELETE`, `GET`, `PATCH`, `POST` |
| `integration` | 2 | `GET` |
| `payment` | 1 | `POST` |
| `payment-web` | 3 | `GET`, `POST` |
| `router` | 3 | `GET` |
| `session` | 1 | `GET` |
| `transaction` | 2 | `GET` |

Browser callback and verification routes are exposed in `api.operations`; callers should preserve the provider query parameters returned by the payment service.

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
