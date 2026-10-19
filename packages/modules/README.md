# @faiber/faiber-modules

Products, variants, carts, orders, inventory, editorial posts and pages, taxonomy, SEO, generic comments and reactions, access rules, pricing, and samples.

## Install

```bash
npm install @faiber/faiber-modules
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { ModulesApi } from "@faiber/faiber-modules";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("modules", {
  domains: { modules: process.env.FAIBER_MODULES_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new ModulesApi(client);

const products = await api.products.list({
  "page[number]": 1,
  "page[size]": 24,
});
const posts = await api.posts.list();
```

## Complete capability

This package exposes 179 registered operations from the content and commerce modules service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `access` | 4 | `DELETE`, `GET`, `POST`, `PUT` |
| `audit-log` | 1 | `GET` |
| `author` | 6 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `blog` | 6 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `cart` | 2 | `GET`, `PUT` |
| `category` | 9 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `comment` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `content` | 9 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `content-transfer` | 4 | `GET`, `PUT` |
| `integration` | 1 | `GET` |
| `inventory` | 12 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `management-api` | 17 | `GET`, `POST`, `PUT` |
| `media` | 3 | `GET`, `POST` |
| `order` | 12 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `podcast` | 8 | `DELETE`, `GET`, `PATCH`, `POST` |
| `product` | 13 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `reaction` | 3 | `DELETE`, `GET`, `POST` |
| `request` | 13 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `router` | 6 | `GET`, `POST` |
| `search` | 1 | `GET` |
| `seo-content` | 9 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `service-pricing` | 6 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `session` | 1 | `GET` |
| `stock-movement` | 2 | `GET`, `POST` |
| `tag` | 9 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `user-sample` | 14 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |

Categories, tags, comments, reactions, SEO, content attachments, pricing, access, and commerce operations are available under `api.operations`. Community feeds and social posts are provided by `@faiber/faiber-social`.

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

### Storefront checkout and public forms

```ts
const quote = await api.operations.orderQuotePost({
  id: checkoutId,
  items: [{ variant_id: variantId, quantity: 1 }],
  shipping: { fullName: "Test Buyer", phone: "+989000000000", city: "Rasht", address: "Delivery address", postalCode: "1234567890" },
}, { headers: { Origin: websiteOrigin } });
await api.operations.orderPayPost(checkoutId, { max_total: quote.data.total }, { headers: { Origin: websiteOrigin } });
```

These owner-scoped operations use `/api/v1/shop/checkout/*` and return raw `ShopCheckout` records. Shipping uses camelCase; checkout amounts are integer IRR. Reuse the checkout UUID on retries and retain the configured website Origin for quote, pay and cancel. The server owns prices and rejects stale accepted totals.

`operations.routerListGet({page:1})` lists published storefront products, 100 per page with `hasMore`. `requestSubmitPost` retains administrative request-log behavior; the separate public-form operation submits an idempotent `submission_id` to `website_contact`, `website_newsletter`, or `website_waitlist`. Public forms validate email and field bounds, reject honeypot content and return 429 when rate limited. Website defaults provisioning requires `modules:request:create`.

Wildcard file paths use raw nonempty segments and preserve directory separators.
Do not pre-encode paths or include dot traversal, percent escapes, query/fragment
syntax or backslashes; invalid paths fail locally before transport.
