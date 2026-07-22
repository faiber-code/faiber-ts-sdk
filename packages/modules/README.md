# @faiber/faiber-modules

Products, variants, carts, orders, inventory, posts, social content, taxonomy, SEO, comments, reactions, access rules, pricing, and samples.

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

This package exposes 146 registered operations from the content and commerce modules service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

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
| `integration` | 1 | `GET` |
| `inventory` | 12 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `order` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `product` | 13 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `reaction` | 3 | `DELETE`, `GET`, `POST` |
| `request` | 12 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `router` | 3 | `GET` |
| `seo-content` | 9 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `service-pricing` | 6 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `session` | 1 | `GET` |
| `social` | 8 | `DELETE`, `GET`, `PATCH`, `POST` |
| `stock-movement` | 2 | `GET`, `POST` |
| `tag` | 9 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `user-sample` | 14 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |

Target attachment routes for categories, tags, content, comments, SEO, access, and reactions are available under `api.operations` with exact host/target path parameters.

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
