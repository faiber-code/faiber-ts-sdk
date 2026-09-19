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
  device_id: getOrCreateStableDeviceId(),
});
await tokens.setTokens({
  accessToken: login.data.data.access_token,
  refreshToken: login.data.data.refresh_token,
});
```

## Complete capability

This package exposes 97 registered operations from the identity and access service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `acl` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `auth` | 23 | `DELETE`, `GET`, `POST` |
| `custom-oauth` | 8 | `DELETE`, `GET`, `POST`, `PUT` |
| `identity-authority` | 10 | `GET`, `POST`, `PUT` |
| `integration` | 1 | `GET` |
| `oauth-clients` | 5 | `DELETE`, `GET`, `POST`, `PUT` |
| `oidc` | 11 | `GET`, `POST` |
| `router` | 2 | `GET` |
| `settings` | 7 | `GET`, `POST`, `PUT` |
| `user` | 22 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |

Legacy token login, web login, account login, and OTP login are encoded as `application/x-www-form-urlencoded`. `api.operations.authBrowserLoginPost` accepts a registered public client, a password or OTP credential, and a matching HTTPS Origin; it returns an HttpOnly session cookie without a client secret or bearer token in the response. Persist and reuse a stable, non-secret `device_id` for legacy token login so the IDP can distinguish physical devices. Use `api.sessions()` to list active sessions and `api.revokeSession(sessionId)` to revoke one. Role assignment uses role UUIDs.

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
