# @faiber/faiber-asset

Wallets, balances, plans, subscriptions, purchases, ranks, rewards, usage, bank transactions, sandbox billing, and service lifecycle operations.

## Install

```bash
npm install @faiber/faiber-asset
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { AssetApi } from "@faiber/faiber-asset";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("asset", {
  domains: { asset: process.env.FAIBER_ASSET_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new AssetApi(client);

const assets = await api.assets.list({ "page[number]": 1 });
const wallet = await api.operations.walletBillingWalletShowGet();
```

## Complete capability

This package exposes 66 registered operations from the assets and billing service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `action` | 6 | `DELETE`, `GET`, `PATCH`, `POST` |
| `bank` | 5 | `GET`, `PATCH`, `POST` |
| `catalog` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `charge` | 2 | `GET`, `PATCH` |
| `dashboard` | 1 | `GET` |
| `integration` | 3 | `GET` |
| `llm-usage` | 3 | `GET`, `PUT` |
| `logs` | 2 | `GET` |
| `rank` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `router` | 2 | `GET` |
| `sandbox-billing` | 7 | `DELETE`, `GET`, `POST`, `PUT` |
| `service-lifecycle` | 4 | `DELETE`, `POST` |
| `wallet` | 4 | `GET` |
| `wallet-billing` | 17 | `DELETE`, `GET`, `POST`, `PUT` |

Administrative and self-service billing routes are distinct operations. Purchase, top-up, pause, resume, removal, and permanent-data deletion methods preserve the backend verbs and permission annotations.

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
