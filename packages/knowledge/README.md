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

This package exposes 36 registered operations from the knowledge service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `main` | 3 | `GET` |
| `routes` | 33 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |

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
