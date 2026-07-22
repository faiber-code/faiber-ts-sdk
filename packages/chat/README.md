# @faiber/faiber-chat

Direct, group, channel, and AI conversations with members, messages, threads, reactions, read cursors, realtime events, and Agentic-backed AI turns.

## Install

```bash
npm install @faiber/faiber-chat
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { ChatApi } from "@faiber/faiber-chat";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("chat", {
  domains: { chat: process.env.FAIBER_CHAT_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new ChatApi(client);

const conversation = await api.createConversation({
  kind: "direct",
  member_ids: [recipientUserId],
});
await api.sendMessage(conversation.data.data.id, { content: { text: "Hello" } });
```

## Complete capability

This package exposes 16 registered operations from the chat service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `routes` | 16 | `DELETE`, `GET`, `POST`, `PUT` |

AI turns are executed and billed by Infera Agentic; Chat only coordinates conversation context and reconciliation. The events endpoint is an SSE stream and can be requested with normal SDK authorization headers.

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
