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

const context = await api.assistantQuery(assistantId, {
  user_id: userId,
  conversation_id: conversationId,
  query: "Explain the selected lesson",
  drm_media_ids: [mediaId],
  model_id: "provider/model",
  profile: currentProfile,
});

// Send this cursor on the next turn to receive only relevant context deltas.
const cursor = context.data.data.trace.context_cursor;
```

## Complete capability

Common authoring operations and governed assistant, memory, ingestion, converter, job, usage, and status workflows have typed methods on `api`; generated legacy authoring operations remain available on `api.operations`. Assistant responses include hard token-budget accounting, citations, dependency state, trace IDs, and a conversation delivery cursor.

| Area | Operations | HTTP methods |
|---|---:|---|
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
