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

This package exposes 61 registered operations from the social interactions service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `api` | 60 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `main` | 1 | `GET` |

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

## Operator administration

The generated `social.operations.admin*` methods cover the mounted `/api/v1/admin/social` router. Exported `SocialAdmin*` models describe the SQL projections, records, request bodies and pagination. All calls use the same `FaiberClient`; use current project-authorized credentials. Forwarded actor/organization headers belong to trusted service infrastructure and must not be accepted from an untrusted browser.

```ts
const page = await social.operations.adminPostsGet({
  q: "event", status: "pending", page: 1, limit: 30,
});
const post = await social.operations.adminPostDetailGet(page.data.data[0].id);
const reports = await social.operations.adminReportsGet({ status: "open" });
```

| Administration area | Required service permission |
| --- | --- |
| Overview, categories/policy reads | `social:panel:view` |
| Posts, comments, media, actors | `social:content:read` |
| Category mutations | `social:categories:manage` |
| Draft policy creation/edit/publication | `social:capabilities:manage` |
| Moderation queue | `social:moderation:review` |
| Reports | `social:reports:manage` |
| Claims/decisions | `social:claims:manage` |
| Bounties | `social:funding:review` |
| Exact location reveal | `social:location:reveal` |
| Restrictions | `social:actors:restrict` |
| Analytics | `social:analytics:read` |
| Audit | `social:audit:read` |
| Integration events/replay | `social:integrations:manage` |
| Configuration-presence flags | `social:settings:manage` |

Paged responses contain `data` arrays and `meta: {total,page,limit}`. Pages default to1 and limits to30; limits clamp to1–100. Posts support text, category and moderation-status filters. Other shared lists support only their `status` field: media interprets it as content type, audit as action. Actor `q` is a UUID; invalid values are currently ignored and actor totals describe the current page. Unpaginated category/policy/moderation endpoints do not accept list filters.

Creating categories, draft policies and restrictions returns201. Category archive returns204. Publishing a draft retires the prior published policy; editing/publishing a non-draft returns409. Operator decisions require an authenticated user. Exact-location responses include `Cache-Control: no-store` and expire after60seconds; never persist them in browser caches. Admin bounty amounts are JSON numbers, whereas the public capability projection uses decimal strings.

Replay only accepts failed/dead-letter events, requires a reason, and returns a pending receipt rather than proof that another service applied the effect. The matching reviewed service repair commits its reset and audit together. Claim decisions reject terminal states with409 in that repair. These repaired behaviors require the coordinated service version; installing the SDK alone does not upgrade a service runtime.

All methods accept request cancellation and timeout options and retain full Axios responses. Handle400 validation,401 missing actor,403 missing permission,404 missing scoped record,409 lifecycle conflict and transport/server errors without treating a failed request as proof that an older service rolled back its writes.
