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

This package exposes 86 registered operations from the assets and billing service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `action` | 6 | `DELETE`, `GET`, `PATCH`, `POST` |
| `ai-billing` | 3 | `POST` |
| `bank` | 5 | `GET`, `PATCH`, `POST` |
| `catalog` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `charge` | 2 | `GET`, `PATCH` |
| `dashboard` | 1 | `GET` |
| `game-escrow` | 4 | `GET`, `POST` |
| `integration` | 3 | `GET` |
| `leaderboard` | 1 | `GET` |
| `llm-usage` | 4 | `DELETE`, `GET`, `PUT` |
| `logs` | 2 | `GET` |
| `rank` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `router` | 2 | `GET` |
| `sandbox-billing` | 10 | `DELETE`, `GET`, `POST`, `PUT` |
| `service-lifecycle` | 4 | `DELETE`, `POST` |
| `wallet` | 9 | `GET` |
| `wallet-billing` | 20 | `DELETE`, `GET`, `POST`, `PUT` |

Administrative and self-service billing routes are distinct operations. Purchase, top-up, pause, resume, removal, and permanent-data deletion methods preserve the backend verbs and permission annotations.

## Scoped funded rewards

`myEconomy()`, `economyValuation()`, `myEconomyHistory()` and
`economyLeaderboard({role, period_id})` expose classroom balances, funding capacity,
recovery blocks, session Charge, entitlements and separate role rankings. Monetary
amounts and Coin quantities are exact decimal strings. Valuation includes its
currency; divide IRR by 10 explicitly when displaying Toman.

```ts
const valuation = await api.economyValuation();
const preview = await api.previewEconomyReward({
  action_name: "configured-action", role: "student", scope_id: classroomId,
  source_id: verifiedEvidenceId, session_id: roomId, replay: false,
});
const purchase = await api.purchaseEconomyItem({
  event_id: crypto.randomUUID(), item_id: "configured-pack", payment: "money",
});
```

Preview never changes a balance. Completion requires verified domain evidence or
an authorized operator using `economyCommand()` with an audit reason. Services
send funding, admission and interaction commands through RabbitMQ. Client HTTP
cannot fabricate those commands. Operator policy and journal methods require the
permissions documented on each method.

Reuse purchase/credit `event_id` when retrying. Money quotes lock the displayed
amount until `expires_at`; read the purchase from `myEconomy()` for its payment
redirect URL or provider error. Successful payment credits once. Coin redemption
can fail while refund recovery or a backing shortfall remains. Purchased credit
persists independently of session Charge; `applySessionChargeCredit()` fills only
space below the session maximum. All methods retain normal Axios error responses,
authorization and cancellation options.

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

### Trial gifts and wallet checkout

`operations.trialGiftsListGet(product, query)` pages through product-owned gifts; `trialGiftsCreatePost`, `trialGiftsUpdatePut`, and `trialGiftsCopyTokenGet` administer them. Product IDs are `2done` and `fitapp`. Both the declared admin Charge permission and the Asset Charge permission are required. Reuse `request_id` when creating a gift; token copying requires an available vault and an unused gift.

`operations.sandboxBillingQuoteResourcesPost(input)` quotes resources without allocating or debiting. Monetary quote values are decimal strings. `walletBillingWalletSubscriptionsPost` atomically purchases subscriptions from the current wallet with a stable `request_id` and a maximum accepted amount; changed quotes return 409 and insufficient balance returns 402. `walletBillingWalletPurchaseShowGet` reads only the authenticated owner's receipt. Fitness product publication is server-only and rejects changes to an already published tier.
