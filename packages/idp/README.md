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
  device_id: "my-stable-device-id",
});
await tokens.setTokens({
  accessToken: login.data.data.access_token,
  refreshToken: login.data.data.refresh_token,
});
```

## Complete capability

This package exposes 114 mounted operations from the identity and access service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `acl` | 10 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `auth` | 27 | `DELETE`, `GET`, `OPTIONS`, `POST` |
| `custom-oauth` | 8 | `DELETE`, `GET`, `POST`, `PUT` |
| `effective-permissions` | 1 | `GET` |
| `identity-authority` | 10 | `GET`, `POST`, `PUT` |
| `integration` | 1 | `GET` |
| `oauth-clients` | 6 | `DELETE`, `GET`, `POST`, `PUT` |
| `oidc` | 11 | `GET`, `POST` |
| `router` | 2 | `GET` |
| `settings` | 7 | `GET`, `POST`, `PUT` |
| `visibility` | 4 | `GET`, `POST`, `PUT` |
| `user` | 27 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |

Legacy token login, web login, account login, and OTP login are encoded as `application/x-www-form-urlencoded`. `api.operations.authBrowserLoginPost` accepts a registered public client, a password or OTP credential, and a matching HTTPS Origin; it returns an HttpOnly session cookie without a client secret or bearer token in the response. Persist and reuse a stable, non-secret `device_id` for legacy token login so the IDP can distinguish physical devices. Use `api.sessions()` to list active sessions and `api.revokeSession(sessionId)` to revoke one. Role assignment uses role UUIDs.

## Authentication and authorization

Use a `TokenProvider` to forward the signed-in user's Bearer token, or enable `withCredentials` for secure HttpOnly cookie sessions. Native handler permission and credential requirements are documented in each operation's JSDoc. Protected user and ACL calls revalidate active native principal, client and session state. The SDK does not embed API keys, credentials, localhost URLs, sandbox hosts, or production hosts.

## Inputs, queries, responses, and transport

All methods return the complete Axios response, including status, headers, and request IDs. Request bodies and query objects are named exported interfaces. Managed user pagination uses native `page` and `per_page` keys (defaults 1 and 20; at most 100 per page). Linked billing uses `page` and `page_size`. User-directory search requires at least three trimmed characters and returns at most ten masked matches. Standard Axios request options, headers, timeouts, adapters, interceptors, and `AbortSignal` cancellation are supported as the final argument.

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

Managed user responses include `created_at`, the UTC registration timestamp, nullable `display_name`, and `linked_providers`. Registration statistics remain available through the typed user registration-stats operation.

### Handoff and current-user passwords

`operations.authExchangeHandoffTokenPost({token, client_id})` consumes a single-use handoff code and returns a token envelope. `authIssueHandoffTokenPost` is server-only and requires `x-infera-handoff-secret`; never put that secret into browser code. `authOtpLoginPost` sends its named input as URL-encoded form data, including `otp_code`.

`operations.userStatusGet()` returns `{data:{has_password}}`. `userSavePut({password})` replaces only the authenticated account's password and preserves OAuth identities; passwords must contain 8–128 characters. Website OAuth bootstrap accepts a canonical HTTPS origin and requires an administrator or the trusted federation service.

## OIDC service paths

Discovery uses `/.well-known/openid-configuration`; authorization, token, user-info, JWKS, revocation, introspection and logout use `/oauth2/*` at the service root. These paths do not have an `/api/v1` prefix. The generated OIDC methods use the shared client and form-encode token/revocation inputs. Internal single-use token generation requires the target user UUID in the URL. Pass the server-only `x-infera-idp-service-token` header for the current identity project and the configured internal Host. Host alone is rejected. Missing/invalid credentials return 401; missing credential configuration fails closed with 503. Never expose project credentials or the platform derivation seed in a browser.

### Current grants and active role membership

`api.authority.currentPermissions(userId, { service })` reads current grants from that IDP. It requires both `idp:user:read` and `idp:acl:read`; its revision and observation time do not grant resource access or justify caching permissions. The consuming service must still enforce ownership and current permissions. `service` is the actual stored IDP permission namespace; for Messenger this is `message`, which must not be inferred from the SDK package name.

`api.authority.activeRoleUsers({ role_name, page, per_page })` requires `idp:user:read` and always requests enabled accounts with current active membership in the exact, case-sensitive native role name. Optional `role_id` must identify the same role. It preserves the full Axios response and supports `AbortSignal`, timeouts and normal authentication options.

```ts
const controller = new AbortController();
const response = await api.authority.activeRoleUsers(
  { role_name: 'reviewer', page: 1, per_page: 25 },
  { signal: controller.signal },
);
const members = response.data.data.users;
```

These methods require an IDP that implements the current grant and role-filter contracts. `activeRoleUsers` checks the native filter acknowledgement and returned active membership, throwing `IdpRoleFilterError` with code `idp_role_filter_unconfirmed` when the server does not confirm the scope. It makes no unfiltered fallback request. Native HTTP and authentication failures remain Axios errors. Pagination is bounded to 100 users per page, and IDP clamps requests beyond the last page.

### Revisioned role permission changes

Read `api.authority.roleGrants(roleId)` using `idp:acl:read`, review the returned
permissions, then call `api.authority.changeRoleGrants(roleId, {
expected_revision: snapshot.revision, add: [permissionId], remove: [] })` with both
`idp:acl:read` and `idp:acl:update`. Use the native role and permission UUIDs.
This atomically preserves unrelated grants. The full Axios response retains
status, request headers and private `no-store` caching policy. The revision is a
conflict token, never a delegated credential or permission cache.

A stale revision returns409: fetch a new snapshot and explicitly review/rebase
the intended changes. Never retry automatically with a new revision. Invalid,
inactive or duplicate additions and overlapping add/remove sets return400;
the built-in admin role is protected406. Combined additions/removals are limited
to `max_delta_entries` (currently4096). Unavailable/oversized snapshots return503.
Signals, timeouts and authentication use the shared client options. The legacy
role replacement methods intentionally replace the entire permission set and
must not be used for a minimal additive change. Mixed older service writers must
be quiesced during deployment; rolling back a grant requires a fresh reviewed
revision and removal of only the addition still owned by that operation.

## Additive memberships and intentional replacement

`roleMemberships(userId)` reads all stored membership rows, including inactive and duplicate rows, with an opaque observed revision. `addRoleMemberships(userId, { add_role_ids })` adds 1–128 unique active local role UUIDs to an already active local user. It preserves existing memberships; it never activates an account. The server rechecks current read/update ACL authority under the target lock. Both calls return the complete Axios response.

```ts
await api.addRoleMemberships(userId, { add_role_ids: [reviewerRoleId] });
const observed = (await api.roleMemberships(userId)).data.data;
// Only for an intentional full replacement reviewed against this exact snapshot:
await api.changeRoles(userId, { roles: reviewedRoleIds }, observed.revision);
```

Replacement helpers, including generated PATCH/PUT operations, require the captured revision and send it as quoted `If-Match`. A stale revision returns 409; missing backend preconditions return 428. Refresh the review after a conflict. Never fetch a new revision merely to submit a saved stale role union. This SDK does not do that automatically. The IDP audit migration and backend activation require their separate release gates.

## Native response and update behavior

`login`, `accountLogin`, `otpLogin`, and `refresh` return token envelopes. `webLogin`, `logout`, and `revokeSession` return only `{status, message}`. `providers()` returns `{data:{providers:string[]}}`; `register()` returns `{data:{user:{user_id, created}}}`. User deletion and forced user logout return `data.user`, while role deletion returns `data.id` and `data.name`.

Managed `users.update`/`users.replace` and `updateUser` clear omitted, null, or empty identifier fields in this backend. Include every phone, email and national code value you intend to retain. Self identifier updates only fill missing identifiers; they reject replacement of an existing value with 409.

The legacy administrative `changePassword` operation removes all local identity rows before inserting the new password identity. The current-user `operations.userSavePut` operation preserves other login identities. Its accepted `current_password` field is not checked by this backend; a current active session authorizes replacement.

OIDC and native authorization, OAuth callback, token-login and browser handoff operations return HTTP redirects. Browser clients generally navigate to these authorization URLs; an Axios call may follow a redirect and receive the destination page. OIDC token/user-info/discovery/JWKS/introspection responses are raw JSON. Logout/back-channel logout return empty 204 and revocation returns empty 200. Login-page asset download returns bytes with Axios `responseType: "arraybuffer"`; uploads require the first multipart field to be named `file`, PNG/JPEG/WebP with a matching signature, and 1 byte–8 MiB.

Public registration rejects role assignment; use managed creation or the reviewed membership workflow. Full membership replacement requires `idp:acl:update` and the captured revision; reading a snapshot requires `idp:acl:read`, and additive membership updates require both. The `users/sync` handler has no session/ACL guard and triggers downstream publication; deployment gateway policy determines its exposure.

### Dynamic profile and identity scopes

`idp.visibility.catalog()`, `.rules(roleId)` and `.save(roleId, input)` require
`idp:visibility:assign`. Actions remain in the service YAML catalog; target role UUIDs
are configurable. Rule assignment is a privileged operation: holders can configure
scoped access for any role, including their own.

```ts
const { data: response } = await sdk.idp.visibility.rules(supportRoleId);
await sdk.idp.visibility.save(supportRoleId, {
  revision: response.data.revision,
  grants: [{
    action: 'profile:list', scope: 'roles',
    target_role_ids: [studentRoleId, teacherRoleId], assignable_role_ids: [],
  }],
}, { signal: abortController.signal });
```

Saving replaces the role's entire scope document. Handle HTTP 409 by reloading
and reviewing the current revision before retrying; HTTP 422 indicates an invalid
action or role. Responses preserve Axios metadata. `.resolve({ action })` resolves
the current caller's live scope and returns HTTP 403 if no grant exists. List,
detail, edit, password and role assignment are independent actions.

With no saved document (revision 0), existing active permissions keep unrestricted
target access. Saving a document enables explicit rules; saving an empty document
denies its scoped actions. Grants from other roles and direct permissions remain
additive. Catalog role choices include every current IDP role, including custom
roles. Services choose `legacy_action` for their actual route; clients cannot use
a student-list permission to authorize unrelated list routes.
