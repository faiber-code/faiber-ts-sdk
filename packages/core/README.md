# @faiber/sdk-core

Shared transport, authentication, REST resources, OpenAPI operations, uploads, pagination, and environment helpers for every Faiber TypeScript SDK.

## Install

```bash
npm install @faiber/sdk-core
```

## Client and authentication

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";

const tokens = new MemoryTokenProvider({ accessToken: initialToken });
const client = new FaiberClient("profile", {
  domains: { profile: "https://profile.example.com" },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});

const response = await client.get("/api/v1/profile", {
  page_number: 1,
  page_size: 25,
  search: "Rasul",
});
```

Implement `TokenProvider` for server sessions, encrypted storage, or another host-specific strategy. `StorageTokenProvider` is available for browser applications that explicitly accept Web Storage's XSS exposure. Cookie authentication requires no token provider.

## Automatic refresh

Configure `refreshAuth` to refresh once when concurrent requests receive `401`; waiting requests share the same refresh operation and retry with the new authorization value.

## Typed OpenAPI operations

`OpenApiClient<paths>` derives path, query, header, body, and response types from an `openapi-typescript` contract:

```ts
import { OpenApiClient } from "@faiber/sdk-core";
import type { paths } from "./profile.openapi.js";

const operations = new OpenApiClient<paths>(client);
const profile = await operations.get("/api/v1/profile/{uuid}/admin", {
  path: { uuid: userId },
});
```

## Multipart uploads

```ts
import { multipart } from "@faiber/sdk-core";

await client.post("/api/v1/profile/me/avatar", multipart({
  file,
  alt: "Profile portrait",
  roles: ["avatar", "thumbnail"],
}));
```

All requests return full Axios responses and accept standard Axios cancellation, headers, adapters, interceptors, and timeout options.
