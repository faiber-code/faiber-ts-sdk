# @faiber/faiber-knowledge

Versioned knowledge bases, groups, items, graph edges, chat bindings, match rules, runtime resolution, publishing, actions, and audit history.

## Install

```bash
npm install @faiber/faiber-knowledge
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { KnowledgeApi } from "@faiber/faiber-knowledge";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("knowledge", {
  domains: { knowledge: process.env.FAIBER_KNOWLEDGE_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new KnowledgeApi(client);

const bases = await api.knowledgeBases({ status: "published", limit: 20 });
const result = await api.query("fitness-coach", {
  query: "What workout is scheduled today?",
  profile_id: userId,
});
```

## Complete capability

This package exposes 76 registered operations from the knowledge service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `main` | 4 | `GET`, `POST` |
| `platform` | 34 | `DELETE`, `GET`, `POST`, `PUT` |
| `routes` | 35 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `task_projections` | 3 | `POST` |

Management routes use optimistic version fields where supported. Runtime queries are scoped by chat slug and return matched knowledge, rules, notifications, warnings, tasks, input requests, directions, and trace data.

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

### Deterministic published assistant contracts

`knowledge.assistantContracts(assistantId, '2done-assistants')` retrieves complete contract records from the assistant's enabled base binding and immutable published release. It returns `data.release_id` and keyed `data.contracts`, including localized content and versioned JSON Schema metadata. Unlike semantic retrieval, this operation does not rank, truncate, or omit required contracts. It requires `knowledge:runtime`; absent, disabled, unpublished, or inaccessible bindings fail rather than returning partial guidance. Normal Axios authentication, cancellation, and error handling apply.

Internal operations require a trusted server credential and current tenant scope. Never call them from a browser or expose the service credential to application users.

### Publish and read an immutable release

`publish(baseId)` requires `knowledge:publish` and returns a
`KnowledgeReleaseResponse`, including the release ID, manifest, checksum, and
publication timestamp. The mutable knowledge base instead points to that release
through `published_release_id`. Read a pinned snapshot with `release(releaseId)`
or `operations.routesGetReleaseGet(releaseId)`; both require `knowledge:read`.
An authoring `export(baseId)` is mutable and has an export timestamp; it is not a
published instruction bundle.

```ts
const published = await api.publish(baseId, { signal });
const release = await api.release(published.data.data.id, { signal });
console.log(release.data.data.checksum_sha256);
```

Base, group, item, edge, binding, and rule responses expose their actual record
fields, including revisions, timestamps, nullable actor/deletion fields, and item
links. Localized content, metadata, condition expressions, and policies retain
JSON values where the service defines an extensible schema. Item links require
`linked_service`, `linked_entity_type`, and `linked_entity_id` together. An empty
link string clears that link field during an update; omitted fields are preserved.
`null` does not clear optional update fields in the current Rust DTOs. Use
`expected_version` when editing to detect conflicts; handle HTTP 409 by reloading
the current record and preserving unsaved user input.

### Filter and page match rules

`matchRules({ q, knowledge_base_id, group_id, enabled, page, limit })` filters
active rules before pagination across all authorized active bases. `q` matches
slug or localized name text. The response includes `meta.total`, `meta.page`, and
`meta.limit`; `limit` is bounded to 1–200 and pages start at 1. Ordering is by
priority followed by rule ID. This API does not truncate the base directory to
its first 200 records. `operations.routesListRulesGet()` exposes the same wire
contract. Group and base filters use their UUIDs; inaccessible or deleted bases
contribute no results.
