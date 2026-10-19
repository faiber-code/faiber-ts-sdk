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

This package exposes 36 registered operations from the payments service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `asset-checkout` | 1 | `GET` |
| `fitness` | 3 | `GET`, `POST` |
| `gateway` | 7 | `DELETE`, `GET`, `PATCH`, `POST` |
| `integration` | 2 | `GET` |
| `payment` | 1 | `POST` |
| `payment-web` | 3 | `GET`, `POST` |
| `product-plans` | 3 | `GET`, `POST` |
| `router` | 5 | `GET` |
| `session` | 1 | `GET` |
| `settings` | 2 | `GET`, `PATCH` |
| `shop-checkout` | 3 | `GET`, `POST` |
| `transaction` | 5 | `GET`, `POST` |

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

### Verified checkout and readiness

`operations.gatewaySetupCheckPost()` performs a read-only live-provider check with `admin:gateway:read`. Product-specific payment operations cover 2done, fitness and storefront checkout. Internal endpoints require their product's trusted server credential; an end-user token alone does not grant access.

`operations.assetCheckoutReceiptGet(purchaseId, options)` accepts `x-asset-payment-token` through `options.headers` and returns a **raw** verified receipt with `purchaseId`, `transaction`, integer IRR `amount`, `providerVerified` and `status` (`pending`, `accepted`, or `rejected`). Other product receipt operations retain their service envelopes. Payment creation uses stable product-specific idempotency keys; retry fitness checkout through `fitnessRetryPost` rather than creating an unrelated transaction.

### Gateway and transaction administration

Gateway identifiers are integers. `gateways.list({ status: "active", "page[number]": 1, "page[size]": 20 })` returns `data.data` and `data.meta`. Gateway create/update supports `sandbox`; nullable response fields are always present. The `options` response is opaque stored provider configuration and may contain encrypted values: do not populate editable credential fields from it or log it. Delete returns the removed gateway record, not a boolean result. Gateway calls require the corresponding `admin:gateway:read`, `create`, `update`, or `delete` permission.

`transactions.list()` returns a nested `data.transactions` page, filtered aggregate summaries, service names and gateway options. Transaction records use `uuid`; they declare no `currency` field. `transactions.show(uuid)` and `transactionStatus(uuid)` return status only. Administration requires `admin:transaction:read`, and verify/reject requires `admin:transaction:verify` plus an authenticated verifier. Verification may contact a payment provider; inspect its `successful` result rather than equating HTTP200 with a successful payment.

`gatewayOptions()` returns `{ providers, statuses }` label/value arrays. `dailyIncomeFor({ days: 7 })` returns UTC date/amount points, including zero dates; the backend clamps the day window to1–90. No count field is returned. `createPayment()` accepts an optional `idempotency_key`; trusted product, fitness, Asset and storefront purchases must use their dedicated server-authorized checkout contracts. Generic creation is not an authorization bypass for those purchases.
