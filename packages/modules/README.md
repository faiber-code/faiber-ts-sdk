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
  page_number: 1,
  page_size: 24,
  scope: "public-shop",
});
const posts = await api.posts.list();
```

Images and videos can be persisted in Modules-managed object storage with the
typed media helper. The service returns the object URL, key, MIME type, and size.

```ts
const uploaded = await api.uploadMediaAsset(videoFile, "student-project", {
  signal: AbortSignal.timeout(120_000),
});
console.log(uploaded.data.url);
```

Published CMS content and arbitrary-depth category trees are available through the
public-role methods:

```ts
const categories = await api.publicContentCategories("post", "fa");
const articles = await api.publicContentList("post", "fa", {
  page_number: 1,
  page_size: 12,
  category: categories.data[0]?.slug,
});
const article = await api.publicContent(
  "post",
  "fa",
  "Iran-Teen-AI-&-Coding-Elites-2025", // retained legacy SEO slug is supported
);
renderTrustedCmsHtml(article.data.sanitized_html);
```

Published posts and active products share one indexed autocomplete endpoint. Use
`scope: "posts"`, `"products"`, or `"mixed"`; the full Axios response and request
cancellation remain available.

```ts
const suggestions = await api.autocomplete(
  { q: "برنامه نویسی", scope: "mixed", locale: "fa", limit: 8 },
  { signal: AbortSignal.timeout(5_000) },
);

for (const item of suggestions.data.items) {
  console.log(item.kind, item.title, item.slug);
}
```

Trusted migration operators can use `importContentCategory` and
`importContentDocument` for deterministic, replay-safe imports. Those calls require
`content:write`; importing a published document also requires `content:publish`.

## Complete capability

This package exposes 170 generated registered operations plus curated public-content and migration methods from the content and commerce modules service. Common workflows have concise methods on `api`; every generated backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

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
