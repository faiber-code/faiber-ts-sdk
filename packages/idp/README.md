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

This package exposes 104 registered operations from the identity and access service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `acl` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `auth` | 27 | `DELETE`, `GET`, `OPTIONS`, `POST` |
| `custom-oauth` | 8 | `DELETE`, `GET`, `POST`, `PUT` |
| `identity-authority` | 10 | `GET`, `POST`, `PUT` |
| `integration` | 1 | `GET` |
| `oauth-clients` | 6 | `DELETE`, `GET`, `POST`, `PUT` |
| `oidc` | 11 | `GET`, `POST` |
| `router` | 2 | `GET` |
| `settings` | 7 | `GET`, `POST`, `PUT` |
| `user` | 24 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |

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

Managed user responses include `created_at`, the UTC registration timestamp (optional for compatibility with older deployments). Registration statistics remain available through the typed user registration-stats operation.

### Handoff and current-user passwords

`operations.authExchangeHandoffTokenPost({token, client_id})` consumes a single-use handoff code and returns a token envelope. `authIssueHandoffTokenPost` is server-only and requires `x-infera-handoff-secret`; never put that secret into browser code. `authOtpLoginPost` sends its named input as URL-encoded form data, including `otp_code`.

`operations.userStatusGet()` returns `{data:{has_password}}`. `userSavePut({password})` replaces only the authenticated account's password and preserves OAuth identities; passwords must contain 8–128 characters. Website OAuth bootstrap accepts a canonical HTTPS origin and requires an administrator or the trusted federation service.

## OIDC service paths

Discovery uses `/.well-known/openid-configuration`; authorization, token, user-info, JWKS, revocation, introspection and logout use `/oauth2/*` at the service root. These paths do not have an `/api/v1` prefix. The generated OIDC methods use the shared client and form-encode token/revocation inputs. Internal single-use token generation requires the target user UUID in the URL. Pass the server-only `x-infera-idp-service-token` header for the current identity project and the configured internal Host. Host alone is rejected. Missing/invalid credentials return 401; missing credential configuration fails closed with 503. Never expose project credentials or the platform derivation seed in a browser.

### Current grants and active role membership

`idp.authority.currentPermissions(userId, { service })` reads current grants from that IDP. It requires both `idp:user:read` and `idp:acl:read`; its revision and observation time do not grant resource access or justify caching permissions. The consuming service must still enforce ownership and current permissions.

`idp.authority.activeRoleUsers({ role_name, page, per_page })` requires `idp:user:read` and always requests enabled accounts with current active membership in the exact, case-sensitive native role name. Optional `role_id` must identify the same role. It preserves the full Axios response and supports `AbortSignal`, timeouts and normal authentication options.

```ts
const response = await idp.authority.activeRoleUsers(
  { role_name: 'reviewer', page: 1, per_page: 25 },
  { signal: controller.signal },
);
const members = response.data.data.users;
```

These methods require an IDP that implements the current grant and role-filter contracts. `activeRoleUsers` checks the native filter acknowledgement and returned active membership, throwing `IdpRoleFilterError` with code `idp_role_filter_unconfirmed` when the server does not confirm the scope. It makes no unfiltered fallback request. Native HTTP and authentication failures remain Axios errors. Pagination is bounded to 100 users per page, and IDP clamps requests beyond the last page.
