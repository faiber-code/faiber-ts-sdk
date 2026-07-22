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
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
```

`FaiberClient` resolves only configured service origins, rejects absolute URLs by default, adds a Bearer token supplied by `TokenProvider`, and preserves full Axios responses. Cookie sessions work with `withCredentials: true` and no token provider. `MemoryTokenProvider` and opt-in `StorageTokenProvider` are included; custom providers can bind server-side sessions or encrypted storage.

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

Configure `refreshAuth` for one shared refresh when concurrent calls receive `401`. Retried calls obtain the new token and failed refreshes clear stale credentials. The SDK does not unwrap or hide Axios errors, so applications retain status, response body, headers, request IDs, cancellation, and timeout details.
