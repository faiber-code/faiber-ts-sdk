# @faiber/sdk-core

Framework-neutral transport and authentication primitives shared by every Faiber TypeScript SDK.

## Install and configure

```bash
npm install @faiber/sdk-core
```

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";

const tokens = new MemoryTokenProvider({ accessToken: session.accessToken });
const client = new FaiberClient("profile", {
  domains: { profile: import.meta.env.FAIBER_PROFILE_URL },
  authMode: "bearer",
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
```

`FaiberClient` resolves only configured service origins, rejects absolute URLs by default, adds a Bearer token supplied by `TokenProvider`, and preserves full Axios responses. Set `authMode: "cookie"` to enable credentialed requests automatically and suppress Bearer injection. `auto` is the backward-compatible default and uses a token when available while honoring explicit Axios cookie settings. `MemoryTokenProvider` and opt-in `StorageTokenProvider` are included; custom providers can bind server-side sessions or encrypted storage.

## Requests and encoding

```ts
import { multipart, urlEncoded } from "@faiber/sdk-core";

await client.post("/api/v1/login", urlEncoded({ username, password }), {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

await client.post("/api/v1/profile/avatar", multipart({ file, alt: "Avatar" }));
```

The client provides typed `get`, `post`, `put`, `patch`, `delete`, and generic `request` methods. Query values, request headers, timeout, adapters, interceptors, `AbortSignal`, multipart data, and URL-encoded forms remain available through Axios-compatible options.

## Resources and generated operations

`RestResource` supplies typed list/show/create/update/replace/delete helpers. Each resource declares the operations its backend actually mounts; unsupported calls throw `UnsupportedOperationError` locally instead of sending a request that will return `405`. The update verb is configurable per service.

`OpenApiClient<paths>` derives path, query, header, body, and response types from `openapi-typescript` contracts. Service packages also expose generated named operations that preserve every mounted backend verb, path parameter, query object, request body, response envelope, transport encoding, and permission annotation.

## Authentication refresh and errors

Configure `refreshAuth` for one shared refresh when concurrent calls receive `401`. Retried calls obtain the new token; in cookie mode the callback may return `null` after the server rotates its HttpOnly cookie and the protected request is still retried once. Failed refreshes clear stale credentials. A refresh failure preserves the original protected-request Axios error (and attaches the refresh error as its `cause` when possible), so applications retain the operation's status, response body, headers, request IDs, cancellation, and timeout details.

## Sockudo realtime subscriptions

`subscribeRealtime` connects a private Sockudo channel over the Pusher-compatible WebSocket protocol. Fetch the browser-safe configuration from the owning service and authorize through its authenticated Faiber client. Chat owns conversation channels; Messenger owns notification channels. No app secret belongs in the browser.

```ts
import { FaiberClient, subscribeRealtime } from '@faiber/sdk-core';
import { ChatApi } from '@faiber/faiber-chat';
const chat = new ChatApi(new FaiberClient('chat', {
  domains: { chat: 'https://chat.example.com' }, authMode: 'cookie',
}));
const conversationId = 'your-conversation-id';
const config = (await chat.realtimeConfig(conversationId)).data.data;
const reloadMessages = async () => {
  const response = await chat.messages(conversationId);
  console.log(response.data.data);
};
const subscription = subscribeRealtime({
  config,
  authorize: async input => (await chat.realtimeAuth(conversationId, input)).data,
  onEvent: () => { void reloadMessages(); },
  onSubscribed: () => { void reloadMessages(); },
  onError: error => console.error(error.message),
});
// On logout or component teardown:
subscription.close();
```

Subscription authorization is repeated on reconnect. `onSubscribed` runs after every successful subscription: reload persisted data to recover events missed while offline. Events are invalidation hints and their service-specific payload is intentionally `unknown`; service HTTP responses remain authoritative. `onError` reports connection/authorization failures; HTTP authorization failures retain normal Axios behavior within your callback. Close cancels the connection and ignores late authorization results. HTTPS pages require `wss:`; allow the exact WebSocket origin in your Content Security Policy.
