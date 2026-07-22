# @faiber/faiber-idp

Authentication, sessions, users, roles, permissions, OAuth identities, and identity settings.

## Install

```bash
npm install @faiber/faiber-idp
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { IdpApi } from "@faiber/faiber-idp";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("idp", {
  domains: { idp: process.env.FAIBER_IDP_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new IdpApi(client);

const login = await api.login({
  grant_type: "password",
  username: "admin@example.com",
  password: "secret",
  client_id: "2",
  client_secret: "client-secret",
});
await tokens.setTokens({
  accessToken: login.data.data.access_token,
  refreshToken: login.data.data.refresh_token,
});
```

## Complete capability

This package exposes 46 registered operations from the identity and access service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `acl` | 7 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `auth` | 15 | `DELETE`, `GET`, `POST` |
| `integration` | 1 | `GET` |
| `router` | 2 | `GET` |
| `settings` | 2 | `GET`, `PUT` |
| `user` | 19 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |

Login, web login, account login, and OTP login are encoded as `application/x-www-form-urlencoded` exactly as required by the IDP service. Role assignment uses role UUIDs; role names returned by the service are not restricted to a hard-coded SDK union.

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
