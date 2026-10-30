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

This package exposes 112 mounted operations from the social interactions service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `api` | 60 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `admin` | 37 | `DELETE`, `GET`, `PATCH`, `POST` |
| `discovery` | 14 | `DELETE`, `GET`, `POST`, `PUT` |
| `main` | 1 | `GET` |

Social owns community categories, posts, and interactions on those posts and comments. Modules continues to own generic comments and reactions for products, services, and other Modules resources.

## Authentication and authorization

Use a `TokenProvider` to forward the signed-in user's Bearer token, or enable `withCredentials` for secure HttpOnly cookie sessions. Permission requirements copied from service route guards are included in each operation's JSDoc. The SDK does not embed API keys, credentials, localhost URLs, sandbox hosts, or production hosts.

## Inputs, queries, responses, and transport

All methods return the complete Axios response, including status, headers, and request IDs. Request bodies and query objects are named exported interfaces. Social pagination uses flat `page` and `limit` keys, not nested pagination. Authenticated lists default to page 1 and limit 30, clamp page to at least 1 and limit to 1–100. Standard Axios request options, headers, timeouts, adapters, interceptors, and `AbortSignal` cancellation are supported as the final argument.

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

The generated `api.operations.admin*` methods cover the mounted `/api/v1/admin/social` router. Exported `SocialAdmin*` models describe the SQL projections, records, request bodies and pagination. All calls use the same `FaiberClient`; use current project-authorized credentials. Forwarded actor/organization headers belong to trusted service infrastructure and must not be accepted from an untrusted browser.

```ts
const page = await api.operations.adminPostsGet({
  q: "event", status: "pending", page: 1, limit: 30,
});
const post = await api.operations.adminPostDetailGet(page.data.data[0].id);
const reports = await api.operations.adminReportsGet({ status: "open" });
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

## Public discovery and server-side social graph

`operations.discoveryFeedGet(query)`, `discoveryPostDetailGet(id)` and `discoveryCommentsGet(id)` return public projections scoped to the service runtime's configured organization/category. Private, moderated, deleted, blocked and expired story records are excluded. The public feed accepts text, author and subject filters; `subject_refs` is a comma-separated place UUID list (up to100 parsed entries). Limits clamp to1–100 and pages to1–10000. Feed responses are arrays in `{status:"success",data}` without a total. Comments are oldest-first and capped at100.

`discoveryMediaGet(id)` returns binary bytes, not JSON, after checking parent visibility. Respect its `private, no-cache` header. Missing/unpublished records return404; object-storage failures propagate as server errors.

Follow/block, notification preferences and worker routes use a **server-only** runtime `BFF_SERVICE_KEY` and a verified actor UUID. Keep that credential in the trusted composition server's in-memory configuration. Never put it in a browser bundle or accept actor/permission headers from model output or an untrusted request. Graph targets use the exported `SocialFollowTargetKind` (`user` or `place`). Graph and preference reads return `{data}`, rather than the public Social success envelope. Follow/block mutations return204; a blocked relationship prevents user follow and hides the public author's content.

The worker additionally needs exact `social:integrations:write` context. `discoveryOutboxGet()` returns the oldest50 undelivered notifications without acquiring a lease. Deduplicate downstream effects before `discoveryAckPut(id)`: acknowledgment marks delivery and is not proof of a downstream business effect. `discoveryPlaceEventPost({id,place_id,status})` uses the event UUID for transactional duplicate suppression and queues only opted-in place followers. Notification preferences support `follow`, `comment`, `place`, and `quest`, defaulting to enabled.

These operations require the coordinated service image that includes discovery migrations5–9. Each project retains its separate runtime, configuration and data boundary. The SDK exposes server workflows; it does not provision credentials, grant permissions, or move project data.

## Publication, claims and location workflows

Use a UUID `request_key` on `createPost` to retry a publication attempt. The first completed publication returns 201; an identical completed retry returns 200. A changed fingerprint or an unfinished request returns 409. Reuse the same key after an uncertain transport result. The current fingerprint includes core content and the subject type/reference; changing other capabilities does not establish a distinct request. Capability assertions are issuer-signed and bound to the current organization, owner and resource. A category with a published capability policy requires a capabilities object even if no section is required. Policy-controlled fields and resource assertions may reject publication with 400, 403 or 409.

```ts
const publication = await api.createPost({
  request_key: crypto.randomUUID(),
  body: "Who can help document this community project?",
});
const claims = await api.operations.apiMyPostClaimsGet(publication.data.data.id, {
  page: 1, limit: 20,
});
```

A different signed-in participant can call `api.operations.apiCreateClaimPost(postId, {message, evidence})` when category policy enables claims. Claim creation returns an acknowledgment, while claim lists include message, evidence, timestamps and `mutual_contact_consent`. Detail adds nullable `resolution`. Selection is restricted to the post author; withdrawal is restricted to the claimant in submitted state. Contact consent is available to either participant and returns `mutual_consent`; it does not disclose contact details. Operator approval resolves an author-selected claim. Claim state conflicts return 409.

`feedLocation()` returns `data: null` when unset; `setFeedLocation` returns a non-null preference. Latitude/longitude use their normal geographic ranges and range must be greater than zero and at most 500 km. Authenticated feeds apply saved location ranking; public discovery feeds use their separate projection and filters. Exact navigation access returns coordinates with a 60-second lifetime and `no-store` headers; retain these only as needed for the current interaction.

`operations.apiGetMediaGet(id)` and `discoveryMediaGet(id)` request an array buffer and retain content/cache headers. Uploads accept JPEG, PNG or WebP Blobs between 1 byte and 12 MiB. Supply the returned uploaded media UUID in every media array entry when creating/updating posts. The server takes the first multipart field; do not put metadata ahead of the file.

Social entity responses include required nullable database fields such as `deleted_at`, category/title/parent identifiers and moderation messages. Posts include `lifecycle_status`; reports include organization and resolution fields. A moderation action result contains `action` and `status`; its previous status is available in the audit record. Category labels/descriptions, metadata, stored media, issuer snapshots and claim evidence remain JSON because the backend intentionally stores application-defined JSON values.

A view requires at least 1000 visible milliseconds (400 below that threshold); own-author and duplicate daily views return `counted: false`. Share idempotency keys are unique per organization/user across posts, so use a fresh key for a different share. Funding events return a discriminated result: `duplicate: true` omits status; `duplicate: false` includes the applied funding status. A matching amount/unit/code is required.

User follows and published comment inserts can enqueue notifications through a database trigger, subject to preference opt-out. Place follows do not enqueue follow notifications. Retrying an existing follow edge does not create another insert notification.

Package contracts describe the supported service source. Native integration evidence and deployment compatibility are separate verification requirements; this SDK does not assert that every mounted operation has been exercised against the deployed service.

### Funded campaigns and private recognition

Campaign jobs use Social posts and claims. Public Do campaign discovery does not
expose private participant identities or evidence. Starting a job queues a funded
reservation; proof review queues an idempotent Asset settlement. A pending response
is not confirmation that a reward has been paid. Read the assignment again to
observe settlement. Dox campaigns are private and have no spending power.

Use stable `request_id` values on retries. A reused ID with different contents
returns a conflict. Upload scanned evidence using `FormData`; proof downloads
require participant, campaign moderator, or authorized operator access. These APIs
require deployed campaign support and configured service integrations. Financial
features are disabled until funded and enabled by the service operator.

```ts
const campaigns = await social.campaigns.campaigns({ view: 'public' }, { signal: controller.signal });
console.log(campaigns.status, campaigns.data.data.items);
```
