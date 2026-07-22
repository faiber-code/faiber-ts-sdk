# @faiber/faiber-social

Social categories, feeds, posts, threaded comments, likes, reactions, reports, moderation, and migration from legacy Modules social data.

## Install

```bash
npm install @faiber/faiber-social
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { SocialApi } from "@faiber/faiber-social";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("social", {
  domains: { social: process.env.FAIBER_SOCIAL_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new SocialApi(client);

const categories = await api.categories();
const feed = await api.feed({ category_id: categories.data.data[0]?.id, page: 1, limit: 20 });
```

## Complete capability

This package exposes 32 registered operations from the social interactions service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `api` | 32 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |

Social owns community categories, posts, and interactions on those posts and comments. Modules continues to own generic comments and reactions for products, services, and other Modules resources.

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
