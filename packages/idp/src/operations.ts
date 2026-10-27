import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";
import { membershipRevisionOptions } from "./memberships.js";

export class IdpOperations extends ServiceApi {
  /**
   * Read raw OIDC discovery metadata, including issuer-root endpoints; no API envelope.
   * Calls `GET /.well-known/openid-configuration` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public metadata handler.
   */
  oidcDiscoveryGet(options?: RequestOptions) {
    return this.client.request<T.OidcDiscoveryGetResponse>({ ...options, method: "GET", url: `/.well-known/openid-configuration` });
  }
  /**
   * Read the runtime OpenAPI document. This partial annotated document is not the complete mounted endpoint inventory.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler authentication check; deployment gateway policy is separate.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Read built-in quick/service permission templates resolved to current permissions; each template includes category, nullable service and permission UUID/name records.
   * Calls `GET /api/v1/acl/permission-templates` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:acl:read.
   */
  aclPermissionTemplatesIndexGet(options?: RequestOptions) {
    return this.client.request<T.AclPermissionTemplatesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/permission-templates` });
  }
  /**
   * List native permission UUID/name records and the static service namespace catalog in data.permissions and data.services.
   * Calls `GET /api/v1/acl/permissions` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:acl:read.
   */
  aclPermissionsIndexGet(options?: RequestOptions) {
    return this.client.request<T.AclPermissionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/permissions` });
  }
  /**
   * List active local roles as data.roles with UUID and name.
   * Calls `GET /api/v1/acl/roles` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:acl:read.
   */
  aclRolesIndexGet(options?: RequestOptions) {
    return this.client.request<T.AclRolesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/roles` });
  }
  /**
   * Create an active local role. Accepts optional initial permissions but the response permission array is empty; read the role to inspect persisted grants.
   * Calls `POST /api/v1/acl/roles` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:acl:update.
   */
  aclRolesCreatePost(data: T.AclRolesCreatePostInput, options?: RequestOptions<T.AclRolesCreatePostInput>) {
    return this.client.request<T.AclRolesCreatePostResponse, T.AclRolesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/acl/roles`, data: data });
  }
  /**
   * Delete an active local role; built-in names are protected (406). Returns data.id/name, not data.role or a deleted flag.
   * Calls `DELETE /api/v1/acl/roles/{role_id}` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:acl:update.
   */
  aclRolesDeleteDelete(roleId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AclRolesDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}` });
  }
  /**
   * Read one active local role and its permission UUID/name list; unknown/inactive roles return 404.
   * Calls `GET /api/v1/acl/roles/{role_id}` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:acl:read.
   */
  aclRolesShowGet(roleId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AclRolesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}` });
  }
  /**
   * Replace the entire permission set of one active role; preserves no omitted grants. The built-in admin role is protected (406); prefer revisioned permission deltas for additive changes.
   * Calls `PATCH /api/v1/acl/roles/{role_id}` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:acl:update.
   */
  aclRolesUpdatePatch(roleId: Identifier, data: T.AclRolesUpdatePatchInput, options?: RequestOptions<T.AclRolesUpdatePatchInput>) {
    return this.client.request<T.AclRolesUpdatePatchResponse, T.AclRolesUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}`, data: data });
  }
  /**
   * Replace the entire permission set of one active role; preserves no omitted grants. The built-in admin role is protected (406); prefer revisioned permission deltas for additive changes.
   * Calls `PUT /api/v1/acl/roles/{role_id}` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:acl:update.
   */
  aclRolesUpdatePut(roleId: Identifier, data: T.AclRolesUpdatePutInput, options?: RequestOptions<T.AclRolesUpdatePutInput>) {
    return this.client.request<T.AclRolesUpdatePutResponse, T.AclRolesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}`, data: data });
  }
  /**
   * Read one active local role grant snapshot and its opaque conflict revision. Includes current active permission UUIDs/names and stored grant count; maximum snapshot is 4096 rows. Private no-store response; revision conveys no delegated authority.
   * Calls `GET /api/v1/acl/roles/{role_id}/permission-grants` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:acl:read.
   */
  aclReadGet(roleId: string, options?: RequestOptions) {
    return this.client.request<T.AclReadGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}/permission-grants` });
  }
  /**
   * Apply an atomic bounded permission delta using the reviewed expected_revision. Both read/update ACL grants are required; stale revision returns 409, protected admin role 406, invalid/overlapping/duplicate IDs 400. Preserves unrelated and inactive stored grants.
   * Calls `PATCH /api/v1/acl/roles/{role_id}/permission-grants` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: both current idp:acl:read and idp:acl:update, rechecked under role lock.
   */
  aclChangePatch(roleId: string, data: T.AclChangePatchInput, options?: RequestOptions<T.AclChangePatchInput>) {
    return this.client.request<T.AclChangePatchResponse, T.AclChangePatchInput>({ ...options, method: "PATCH", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}/permission-grants`, data: data });
  }
  /**
   * Read a current local-IDP permission snapshot scoped to the required stored service namespace (lowercase, max 64 characters). Includes direct/role grants only while user, memberships, roles, grants and permissions are active. Bound 1024; private no-store; observation revision is not delegated authority.
   * Calls `GET /api/v1/acl/users/{user_id}/effective-permissions` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: both current idp:user:read and idp:acl:read.
   */
  effectivePermissionsReadGet(userId: Identifier, params: T.EffectivePermissionsReadGetQuery, options?: RequestOptions) {
    return this.client.request<T.EffectivePermissionsReadGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/users/${encodeURIComponent(userId)}/effective-permissions`, params });
  }
  /**
   * Exchange the current parent session for child-account tokens after checking Profile parent ownership. account is the child native user UUID; returns a token envelope, not a cookie-only body.
   * Calls `POST /api/v1/auth/account-login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer or secure cookie session; no additional ACL permission.
   */
  authLoginAccountPost(data: T.AuthLoginAccountPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.AuthLoginAccountPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/account-login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Read public local/canonical identity authority mode, rollout and federation session status; nullable upstream configuration values remain null.
   * Calls `GET /api/v1/auth/authority` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public authority-status handler.
   */
  identityAuthorityPublicShowGet(options?: RequestOptions) {
    return this.client.request<T.IdentityAuthorityPublicShowGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/authority` });
  }
  /**
   * Authenticate a registered public client with a password or OTP and matching HTTPS Origin. Returns only status/message and HttpOnly cookies; never returns bearer credentials. Invalid origin returns 403.
   * Calls `POST /api/v1/auth/browser-login` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: local identity authority, active public client with auth method none, matching registered HTTPS Origin and valid user credentials.
   */
  authBrowserLoginPost(data: T.AuthBrowserLoginPostInput, options?: RequestOptions<T.AuthBrowserLoginPostInput>) {
    return this.client.request<T.AuthBrowserLoginPostResponse, T.AuthBrowserLoginPostInput>({ ...options, method: "POST", url: `/api/v1/auth/browser-login`, data: data });
  }
  /**
   * Start custom OAuth/OIDC with private state cookie and S256 PKCE. intent=link requires a session; linked mode restricts to the canonical provider. Redirects to the upstream authorization URL.
   * Calls `GET /api/v1/auth/custom-oauth/{provider}` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public login bootstrap; intent=link requires current session.
   */
  customOauthStartGet(provider: Identifier, params?: T.CustomOauthStartGetQuery, options?: RequestOptions) {
    return this.client.request<T.CustomOauthStartGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/custom-oauth/${encodeURIComponent(provider)}`, params });
  }
  /**
   * Finish custom OAuth/OIDC with matching private state, single-use code and validated upstream claims. Performs bounded claim/role mapping and establishes session cookies before redirect. Linked mode only accepts the configured canonical provider.
   * Calls `GET /api/v1/auth/custom-oauth/{provider}/callback` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: matching private state cookie, upstream code and validated provider claims.
   */
  customOauthCallbackGet(provider: Identifier, params?: T.CustomOauthCallbackGetQuery, options?: RequestOptions) {
    return this.client.request<T.CustomOauthCallbackGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/custom-oauth/${encodeURIComponent(provider)}/callback`, params });
  }
  /**
   * Unlink one custom-provider identity from the current account; the last login method cannot be removed (409). Returns status/message.
   * Calls `DELETE /api/v1/auth/custom-oauth/{provider}/link` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer/cookie session.
   */
  customOauthUnlinkDelete(provider: Identifier, options?: RequestOptions) {
    return this.client.request<T.CustomOauthUnlinkDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/auth/custom-oauth/${encodeURIComponent(provider)}/link` });
  }
  /**
   * List enabled custom OAuth provider public views; linked mode only exposes the canonical provider. Faiber provider visibility follows faiber_enabled.
   * Calls `GET /api/v1/auth/custom-oauth/providers` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public provider-discovery handler.
   */
  customOauthPublicProvidersGet(options?: RequestOptions) {
    return this.client.request<T.CustomOauthPublicProvidersGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/custom-oauth/providers` });
  }
  /**
   * Generate one durable single-use token bound to the current user, client and active session; returns data.token. Missing session returns 401.
   * Calls `POST /api/v1/auth/generate/one-time` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer or secure cookie session; no additional ACL permission.
   */
  authGenerateOneTimeTokenRoutePost(options?: RequestOptions) {
    return this.client.request<T.AuthGenerateOneTimeTokenRoutePostResponse>({ ...options, method: "POST", url: `/api/v1/auth/generate/one-time` });
  }
  /**
   * Transfer a current canonical-realm session to an explicitly trusted HTTPS IDP alias. Returns a 303 redirect to login or token-login; target and return redirect must satisfy realm checks.
   * Calls `GET /api/v1/auth/handoff` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer or secure cookie session; no additional ACL permission.
   */
  authBrowserHandoffGet(params: T.AuthBrowserHandoffGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthBrowserHandoffGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/handoff`, params });
  }
  /**
   * Consume a handoff_ code once for its explicit active OAuth client. Revalidates user, client and session; returns a token envelope. Wrong-client consumption is rejected.
   * Calls `POST /api/v1/auth/handoff/exchange` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: valid single-use handoff_ token matching the explicit client_id.
   */
  authExchangeHandoffTokenPost(data: T.AuthExchangeHandoffTokenPostInput, options?: RequestOptions<T.AuthExchangeHandoffTokenPostInput>) {
    return this.client.request<T.AuthExchangeHandoffTokenPostResponse, T.AuthExchangeHandoffTokenPostInput>({ ...options, method: "POST", url: `/api/v1/auth/handoff/exchange`, data: data });
  }
  /**
   * List provider subjects linked to the current user, including built-in identities and active custom-provider identities. Returns data.identities.
   * Calls `GET /api/v1/auth/identities` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer or secure cookie session; no additional ACL permission.
   */
  authListLinkedIdentitiesGet(options?: RequestOptions) {
    return this.client.request<T.AuthListLinkedIdentitiesGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/identities` });
  }
  /**
   * Read the linked main-Faiber wallet and daily costs. page defaults to 1, page_size to 14 (1–100), timezone to 0 (±840 minutes). Optional project slug uses alphanumeric/hyphen characters; downstream failures return 502.
   * Calls `GET /api/v1/auth/linked-faiber/billing` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer or secure cookie session; no additional ACL permission.
   */
  authLinkedFaiberBillingGet(params?: T.AuthLinkedFaiberBillingGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthLinkedFaiberBillingGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/linked-faiber/billing`, params });
  }
  /**
   * Create a positive top-up against the linked main-Faiber wallet; returns purchase_id and payment_url. Non-positive amount returns 422; upstream rejection becomes 502.
   * Calls `POST /api/v1/auth/linked-faiber/wallet/topup` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer or secure cookie session; no additional ACL permission.
   */
  authLinkedFaiberWalletTopupPost(data: T.AuthLinkedFaiberWalletTopupPostInput, options?: RequestOptions<T.AuthLinkedFaiberWalletTopupPostInput>) {
    return this.client.request<T.AuthLinkedFaiberWalletTopupPostResponse, T.AuthLinkedFaiberWalletTopupPostInput>({ ...options, method: "POST", url: `/api/v1/auth/linked-faiber/wallet/topup`, data: data });
  }
  /**
   * Exchange a password with grant_type=password and the configured legacy client secret for a token envelope. Disabled principal, client or session cannot receive tokens.
   * Calls `POST /api/v1/auth/login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: local identity authority plus registered legacy client_id/client_secret and user credentials.
   */
  authLoginPost(data: T.AuthLoginPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.AuthLoginPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Revoke the current session and tokens, attempt back-channel logout and remove the current cookies. Returns only status/message; missing session returns 401.
   * Calls `GET /api/v1/auth/logout` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer or secure cookie session; no additional ACL permission.
   */
  authLogoutGet(options?: RequestOptions) {
    return this.client.request<T.AuthLogoutGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/logout` });
  }
  /**
   * Start the native S256 PKCE code flow. Requires registered redirect, state of at least 16 characters and challenge of at least 43 characters. Returns a 303 login or callback redirect; code expires after 120 seconds.
   * Calls `GET /api/v1/auth/native/authorize` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: registered native client/redirect and current session or login redirect.
   */
  authAuthorizeGet(params: T.AuthAuthorizeGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthAuthorizeGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/native/authorize`, params });
  }
  /**
   * Consume the native authorization code once with its client, redirect and 43–128 character PKCE verifier. Sends URL-encoded form; returns raw token JSON including token_type.
   * Calls `POST /api/v1/auth/native/token` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: valid native single-use authorization code and matching S256 verifier/client/redirect.
   */
  authTokenPost(data: T.AuthTokenPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.AuthTokenPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/native/token`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Remove a built-in provider identity from the current account. Refuses removal of the last login method with 409; returns status/message.
   * Calls `DELETE /api/v1/auth/oauth/{provider}` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer or secure cookie session; no additional ACL permission.
   */
  authOauthUnlinkDelete(provider: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthOauthUnlinkDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/auth/oauth/${encodeURIComponent(provider)}` });
  }
  /**
   * Begin built-in Google/GitHub login or linking with a private state cookie and 303 redirect. intent=link requires an existing session; redirect is constrained by backend realm rules.
   * Calls `GET /api/v1/auth/oauth/{provider}` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public login bootstrap; intent=link requires current Bearer/cookie session.
   */
  authOauthStartGet(provider: Identifier, params?: T.AuthOauthStartGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthOauthStartGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/oauth/${encodeURIComponent(provider)}`, params });
  }
  /**
   * Finish built-in OAuth using the private state cookie and upstream code. Establishes or links the identity, sets session cookies and redirects; errors may be reported by login redirect.
   * Calls `GET /api/v1/auth/oauth/{provider}/callback` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: matching private OAuth state cookie and upstream authorization code.
   */
  authOauthCallbackGet(provider: Identifier, params?: T.AuthOauthCallbackGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthOauthCallbackGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/oauth/${encodeURIComponent(provider)}/callback`, params });
  }
  /**
   * List enabled built-in provider names in data.providers; does not return an array of provider objects.
   * Calls `GET /api/v1/auth/oauth/providers` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public provider-discovery handler.
   */
  authOauthProvidersGet(options?: RequestOptions) {
    return this.client.request<T.AuthOauthProvidersGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/oauth/providers` });
  }
  /**
   * Exchange grant_type=password plus otp_code and the configured legacy client secret. Returns a token envelope and sets session cookies; OTP and local-authority checks apply.
   * Calls `POST /api/v1/auth/otp-login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: local identity authority plus registered legacy client_id/client_secret and user credentials.
   */
  authOtpLoginPost(data: T.AuthOtpLoginPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.AuthOtpLoginPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/otp-login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Refresh from the private refresh cookie when present, otherwise from a Bearer refresh credential. Returns a token envelope; cookie refresh preserves its original refresh deadline while token refresh revokes the old credential.
   * Calls `GET /api/v1/auth/refresh` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: valid active refresh cookie or Bearer refresh token; access token is not a refresh credential.
   */
  authRefreshTokenGet(options?: RequestOptions) {
    return this.client.request<T.AuthRefreshTokenGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/refresh` });
  }
  /**
   * Consume a non-handoff durable one-time token once and revalidate its bound client, user and session; returns a token envelope. This is an internal server operation.
   * Calls `POST /api/v1/auth/secure/exchange/one-time` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only x-infera-idp-service-token and exact configured internal Host; missing configuration 503, invalid credential 401, wrong Host 403.
   */
  authExchangeOneTimeTokenPost(data: T.AuthExchangeOneTimeTokenPostInput, options?: RequestOptions<T.AuthExchangeOneTimeTokenPostInput>) {
    return this.client.request<T.AuthExchangeOneTimeTokenPostResponse, T.AuthExchangeOneTimeTokenPostInput>({ ...options, method: "POST", url: `/api/v1/auth/secure/exchange/one-time`, data: data });
  }
  /**
   * Generate one durable single-use token for a target native user UUID and the service default client; returns data.token. This is an internal server operation.
   * Calls `POST /api/v1/auth/secure/generate/one-time/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only x-infera-idp-service-token and exact configured internal Host; missing configuration 503, invalid credential 401, wrong Host 403.
   */
  authGenerateSecureOneTimeTokenRoutePost(userId: string, options?: RequestOptions) {
    return this.client.request<T.AuthGenerateSecureOneTimeTokenRoutePostResponse>({ ...options, method: "POST", url: `/api/v1/auth/secure/generate/one-time/${encodeURIComponent(userId)}` });
  }
  /**
   * Issue one single-use handoff_ code for a specified allowed client and target user. Requires a server secret header; never expose this credential in browser code.
   * Calls `POST /api/v1/auth/secure/handoff/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only x-infera-handoff-secret and configured client allowlist.
   */
  authIssueHandoffTokenPost(userId: Identifier, data: T.AuthIssueHandoffTokenPostInput, options?: RequestOptions<T.AuthIssueHandoffTokenPostInput>) {
    return this.client.request<T.AuthIssueHandoffTokenPostResponse, T.AuthIssueHandoffTokenPostInput>({ ...options, method: "POST", url: `/api/v1/auth/secure/handoff/${encodeURIComponent(userId)}`, data: data });
  }
  /**
   * List active sessions for the current user, including client and device metadata and is_current. Nullable metadata fields remain present as null.
   * Calls `GET /api/v1/auth/sessions` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer or secure cookie session; no additional ACL permission.
   */
  authListSessionsGet(options?: RequestOptions) {
    return this.client.request<T.AuthListSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/sessions` });
  }
  /**
   * Revoke another active session owned by the current user. Unknown/unowned sessions return 404 and the current session returns 409; use logout to end the current session.
   * Calls `DELETE /api/v1/auth/sessions/{session_id}` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer or secure cookie session; no additional ACL permission.
   */
  authDeleteSessionDelete(sessionId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthDeleteSessionDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/auth/sessions/${encodeURIComponent(sessionId)}` });
  }
  /**
   * Consume a durable single-use token, set session cookies and return a 303 redirect within the same sandbox realm. handoff_ codes are rejected; returns no JSON envelope.
   * Calls `GET /api/v1/auth/token-login` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: valid durable single-use token and same-realm redirect; bootstrap session flow.
   */
  authLoginTokenGet(params: T.AuthLoginTokenGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthLoginTokenGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/token-login`, params });
  }
  /**
   * Validate forward-auth and emit principal/permission response headers with a status/message JSON body. Preflight bypasses authentication; HTML unauthenticated requests may redirect. Original method/URI, service and required-role headers affect policy.
   * Calls `GET /api/v1/auth/validate` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current Bearer/cookie session and forward-auth policy; OPTIONS/preflight returns success without authentication.
   */
  authValidateGet(options?: RequestOptions) {
    return this.client.request<T.AuthValidateGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/validate` });
  }
  /**
   * Return empty HTTP 200 CORS preflight from the outer CorsLayer before the validate handler executes; no JSON body or principal headers are produced.
   * Calls `OPTIONS /api/v1/auth/validate` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current Bearer/cookie session and forward-auth policy; OPTIONS/preflight returns success without authentication.
   */
  authValidateOptions(options?: RequestOptions) {
    return this.client.request<T.AuthValidateOptionsResponse>({ ...options, method: "OPTIONS", url: `/api/v1/auth/validate` });
  }
  /**
   * Authenticate a legacy client password form and set secure session cookies. Returns only status/message; does not return tokens in the body.
   * Calls `POST /api/v1/auth/web-login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: local identity authority plus registered legacy client_id/client_secret and user credentials.
   */
  authLoginWebPost(data: T.AuthLoginWebPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.AuthLoginWebPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/web-login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Consume a matching unexpired invitation once and create a confidential linked OAuth client. Redirect hosts must match the invited issuer; returns one-time plaintext client secret. Linked mode conflicts (409), invalid/used code returns 401.
   * Calls `POST /api/v1/federation/enroll` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: matching durable single-use pairing invitation code and linked issuer; no admin session required.
   */
  identityAuthorityEnrollPost(data: T.IdentityAuthorityEnrollPostInput, options?: RequestOptions<T.IdentityAuthorityEnrollPostInput>) {
    return this.client.request<T.IdentityAuthorityEnrollPostResponse, T.IdentityAuthorityEnrollPostInput>({ ...options, method: "POST", url: `/api/v1/federation/enroll`, data: data });
  }
  /**
   * List stored custom OAuth providers with endpoint/mapping configuration and has_secret; encrypted/plaintext secrets are omitted.
   * Calls `GET /api/v1/settings/custom-oauth` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: native administrator or enabled short-lived x-faiber-federation-token scoped to providers.list.
   */
  customOauthListGet(options?: RequestOptions) {
    return this.client.request<T.CustomOauthListGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/custom-oauth` });
  }
  /**
   * Create custom OAuth/OIDC configuration with an encrypted nonempty client secret. Validates public endpoint URLs and provider key; defaults scopes when empty. Success is 201; duplicate key 409.
   * Calls `POST /api/v1/settings/custom-oauth` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: native administrator or enabled short-lived x-faiber-federation-token scoped to providers.create.
   */
  customOauthCreatePost(data: T.CustomOauthCreatePostInput, options?: RequestOptions<T.CustomOauthCreatePostInput>) {
    return this.client.request<T.CustomOauthCreatePostResponse, T.CustomOauthCreatePostInput>({ ...options, method: "POST", url: `/api/v1/settings/custom-oauth`, data: data });
  }
  /**
   * Delete a custom provider only if no external identities reference it; references return 409. Returns status/message.
   * Calls `DELETE /api/v1/settings/custom-oauth/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current native administrator role.
   */
  customOauthRemoveDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CustomOauthRemoveDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/settings/custom-oauth/${encodeURIComponent(id)}` });
  }
  /**
   * Replace custom provider settings, retaining existing secret when client_secret is absent/empty. Omitted arrays/maps/default flags follow backend defaults; invalid endpoint/key/protocol returns 400.
   * Calls `PUT /api/v1/settings/custom-oauth/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: native administrator or enabled short-lived x-faiber-federation-token scoped to providers.update.
   */
  customOauthUpdatePut(id: Identifier, data: T.CustomOauthUpdatePutInput, options?: RequestOptions<T.CustomOauthUpdatePutInput>) {
    return this.client.request<T.CustomOauthUpdatePutResponse, T.CustomOauthUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/custom-oauth/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read administrative identity authority state; same body as the public authority view.
   * Calls `GET /api/v1/settings/identity-authority` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current native administrator role.
   */
  identityAuthorityAdminShowGet(options?: RequestOptions) {
    return this.client.request<T.IdentityAuthorityAdminShowGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/identity-authority` });
  }
  /**
   * Update canonical/linked authority mode and JIT provisioning. Linked mode requires enabled OIDC provider, rollout, matching discovery and tested local admin login; unmet preconditions return 412.
   * Calls `PUT /api/v1/settings/identity-authority` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current native administrator role.
   */
  identityAuthorityUpdatePut(data: T.IdentityAuthorityUpdatePutInput, options?: RequestOptions<T.IdentityAuthorityUpdatePutInput>) {
    return this.client.request<T.IdentityAuthorityUpdatePutResponse, T.IdentityAuthorityUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/identity-authority`, data: data });
  }
  /**
   * Activate exactly one enabled paired canonical OIDC provider; rollout must be enabled (412), ambiguous or incompatible authority returns 409.
   * Calls `POST /api/v1/settings/identity-authority/activate-canonical` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: native administrator or enabled short-lived x-faiber-federation-token scoped to authority.activate.
   */
  identityAuthorityActivateCanonicalPost(options?: RequestOptions) {
    return this.client.request<T.IdentityAuthorityActivateCanonicalPostResponse>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/activate-canonical` });
  }
  /**
   * Discover and validate a public upstream OIDC issuer and required HTTPS endpoints; records discovery status. Invalid URL returns 400; failed or malformed discovery returns 502.
   * Calls `POST /api/v1/settings/identity-authority/discover` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: native administrator or enabled short-lived x-faiber-federation-token scoped to authority.discover.
   */
  identityAuthorityDiscoverPost(data: T.IdentityAuthorityDiscoverPostInput, options?: RequestOptions<T.IdentityAuthorityDiscoverPostInput>) {
    return this.client.request<T.IdentityAuthorityDiscoverPostResponse, T.IdentityAuthorityDiscoverPostInput>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/discover`, data: data });
  }
  /**
   * Pair the canonical upstream using issuer and invitation code, then activate linked mode. Existing linked authority conflicts (409); rollout/provider conditions apply.
   * Calls `POST /api/v1/settings/identity-authority/pair` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: native administrator or enabled short-lived x-faiber-federation-token scoped to authority.pair.
   */
  identityAuthorityPairCanonicalPost(data: T.IdentityAuthorityPairCanonicalPostInput, options?: RequestOptions<T.IdentityAuthorityPairCanonicalPostInput>) {
    return this.client.request<T.IdentityAuthorityPairCanonicalPostResponse, T.IdentityAuthorityPairCanonicalPostInput>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/pair`, data: data });
  }
  /**
   * Pair the Faiber sign-in provider using issuer and invitation code, then enable it on the login page without changing canonical authority.
   * Calls `POST /api/v1/settings/identity-authority/pair-faiber` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: native administrator or enabled short-lived x-faiber-federation-token scoped to providers.pair-faiber.
   */
  identityAuthorityPairFaiberPost(data: T.IdentityAuthorityPairFaiberPostInput, options?: RequestOptions<T.IdentityAuthorityPairFaiberPostInput>) {
    return this.client.request<T.IdentityAuthorityPairFaiberPostResponse, T.IdentityAuthorityPairFaiberPostInput>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/pair-faiber`, data: data });
  }
  /**
   * Create a ten-minute single-use invitation bound to a linked public issuer; linked authorities cannot invite (409). Returns code and expiry.
   * Calls `POST /api/v1/settings/identity-authority/pairing-invitations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: native administrator or enabled short-lived x-faiber-federation-token scoped to authority.invite.
   */
  identityAuthorityCreatePairingInvitationPost(data: T.IdentityAuthorityCreatePairingInvitationPostInput, options?: RequestOptions<T.IdentityAuthorityCreatePairingInvitationPostInput>) {
    return this.client.request<T.IdentityAuthorityCreatePairingInvitationPostResponse, T.IdentityAuthorityCreatePairingInvitationPostInput>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/pairing-invitations`, data: data });
  }
  /**
   * Restore local canonical mode and clear linked-provider authority settings. Returns the updated authority view.
   * Calls `POST /api/v1/settings/identity-authority/recover-canonical` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: native administrator or enabled short-lived x-faiber-federation-token scoped to authority.recover.
   */
  identityAuthorityRecoverCanonicalModePost(options?: RequestOptions) {
    return this.client.request<T.IdentityAuthorityRecoverCanonicalModePostResponse>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/recover-canonical` });
  }
  /**
   * Read login-page settings for customization, including nullable localized text and asset references.
   * Calls `GET /api/v1/settings/login-page` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:login_page:customize.
   */
  settingsLoginPageSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.SettingsLoginPageSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/login-page` });
  }
  /**
   * Replace login-page customization fields and per-locale text. Omitted default arrays/maps become empty and faiber_enabled defaults false; response includes resolved asset URLs.
   * Calls `PUT /api/v1/settings/login-page` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:login_page:customize.
   */
  settingsLoginPageSettingsUpdatePut(data: T.SettingsLoginPageSettingsUpdatePutInput, options?: RequestOptions<T.SettingsLoginPageSettingsUpdatePutInput>) {
    return this.client.request<T.SettingsLoginPageSettingsUpdatePutResponse, T.SettingsLoginPageSettingsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/login-page`, data: data });
  }
  /**
   * Upload exactly the first multipart file field named file. Accepts nonempty PNG/JPEG/WebP up to 8 MiB with matching signature. Returns data.asset_key/url; bad MIME/signature 415, size 413, storage failures 502/503.
   * Calls `POST /api/v1/settings/login-page/assets` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:login_page:customize.
   */
  settingsLoginPageAssetUploadPost(data: T.SettingsLoginPageAssetUploadPostInput, options?: RequestOptions<T.SettingsLoginPageAssetUploadPostInput>) {
    return this.client.request<T.SettingsLoginPageAssetUploadPostResponse, T.SettingsLoginPageAssetUploadPostInput>({ ...options, method: "POST", url: `/api/v1/settings/login-page/assets`, data: data });
  }
  /**
   * Read raw immutable login-page asset bytes with Content-Type and public cache headers. Invalid/missing asset returns 404, unconfigured object storage 503; uses Axios arraybuffer.
   * Calls `GET /api/v1/settings/login-page/assets/{asset_key}` through the shared IDP-aware Faiber client.
   * @param assetKey Backend path identifier `asset_key`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public handler; deployment gateway policy is separate.
   */
  settingsLoginPageAssetGet(assetKey: Identifier, options?: RequestOptions) {
    return this.client.request<T.SettingsLoginPageAssetGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/login-page/assets/${encodeURIComponent(assetKey)}`, responseType: "arraybuffer" });
  }
  /**
   * Read public login-page text, nullable asset URLs and per-locale text settings; does not require customization permission.
   * Calls `GET /api/v1/settings/login-page/public` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public handler; deployment gateway policy is separate.
   */
  settingsLoginPageSettingsPublicGet(options?: RequestOptions) {
    return this.client.request<T.SettingsLoginPageSettingsPublicGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/login-page/public` });
  }
  /**
   * Read built-in Google/GitHub OAuth client configuration; secrets are represented by has_secret only.
   * Calls `GET /api/v1/settings/oauth` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current native administrator role.
   */
  settingsOauthSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.SettingsOauthSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/oauth` });
  }
  /**
   * Update built-in Google/GitHub OAuth configuration; response hides secrets and reports has_secret.
   * Calls `PUT /api/v1/settings/oauth` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current native administrator role.
   */
  settingsOauthSettingsUpdatePut(data: T.SettingsOauthSettingsUpdatePutInput, options?: RequestOptions<T.SettingsOauthSettingsUpdatePutInput>) {
    return this.client.request<T.SettingsOauthSettingsUpdatePutResponse, T.SettingsOauthSettingsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/oauth`, data: data });
  }
  /**
   * List OAuth clients without secrets, including redirect URIs, grants, scopes, service account binding and current status.
   * Calls `GET /api/v1/settings/oauth-clients` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current native administrator role.
   */
  oauthClientsListGet(options?: RequestOptions) {
    return this.client.request<T.OauthClientsListGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/oauth-clients` });
  }
  /**
   * Create a public/confidential OAuth client. Public clients require auth method none; confidential secret is returned once. The website client ID is reserved; success is 201 and duplicate ID returns 409.
   * Calls `POST /api/v1/settings/oauth-clients` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current native administrator role.
   */
  oauthClientsCreatePost(data: T.OauthClientsCreatePostInput, options?: RequestOptions<T.OauthClientsCreatePostInput>) {
    return this.client.request<T.OauthClientsCreatePostResponse, T.OauthClientsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/settings/oauth-clients`, data: data });
  }
  /**
   * Delete an OAuth client only when it has no active token rows; disable it first on 409. Returns status/message and may succeed for an absent UUID.
   * Calls `DELETE /api/v1/settings/oauth-clients/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current native administrator role.
   */
  oauthClientsRemoveDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OauthClientsRemoveDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/settings/oauth-clients/${encodeURIComponent(id)}` });
  }
  /**
   * Replace OAuth client settings in a transaction. Disabling the client or changing service_user_id revokes its tokens and sessions; reserved website ID collision returns 409.
   * Calls `PUT /api/v1/settings/oauth-clients/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current native administrator role.
   */
  oauthClientsUpdatePut(id: Identifier, data: T.OauthClientsUpdatePutInput, options?: RequestOptions<T.OauthClientsUpdatePutInput>) {
    return this.client.request<T.OauthClientsUpdatePutResponse, T.OauthClientsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/oauth-clients/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Generate a replacement secret for a confidential client and return it once with client metadata. Public clients return 400; existing token revocation is not performed by this handler.
   * Calls `POST /api/v1/settings/oauth-clients/{id}/rotate-secret` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current native administrator role.
   */
  oauthClientsRotatePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OauthClientsRotatePostResponse>({ ...options, method: "POST", url: `/api/v1/settings/oauth-clients/${encodeURIComponent(id)}/rotate-secret` });
  }
  /**
   * Provision the reserved unprivileged browser client for a canonical HTTPS origin. Never assigns a service user, trusted status or admin scopes; unknown fields/invalid origin fail. Duplicate/incompatible reserved rows return 409.
   * Calls `POST /api/v1/settings/oauth-clients/website-bootstrap` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: native administrator or enabled short-lived x-faiber-federation-token scoped to browser-client.bootstrap.
   */
  oauthClientsBootstrapWebsitePost(data: T.OauthClientsBootstrapWebsitePostInput, options?: RequestOptions<T.OauthClientsBootstrapWebsitePostInput>) {
    return this.client.request<T.OauthClientsBootstrapWebsitePostResponse, T.OauthClientsBootstrapWebsitePostInput>({ ...options, method: "POST", url: `/api/v1/settings/oauth-clients/website-bootstrap`, data: data });
  }
  /**
   * List managed users using search, enabled/disabled status and exact current active role filters. page defaults to 1, per_page to 20 and clamps to 1–100; pages clamp to the last page. UUID search is exact; other search uses SQL LIKE across identifiers/display name.
   * Calls `GET /api/v1/users` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:read through the native active principal/session and a matching dynamic target scope.
   */
  userUsersIndexGet(params?: T.UserUsersIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserUsersIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/users`, params });
  }
  /**
   * Create a managed user with at least one identifier; password needs at least 8 characters. Applies local role UUIDs and activates the account. Duplicate identity returns 409; returns data.user.
   * Calls `POST /api/v1/users` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:create through the native active principal/session.
   */
  userUserCreatePost(data: T.UserUserCreatePostInput, options?: RequestOptions<T.UserUserCreatePostInput>) {
    return this.client.request<T.UserUserCreatePostResponse, T.UserUserCreatePostInput>({ ...options, method: "POST", url: `/api/v1/users`, data: data });
  }
  /**
   * Delete a managed user and publish downstream deletion. Cannot delete the current caller (406); returns data.user, not a deleted flag.
   * Calls `DELETE /api/v1/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:delete through the native active principal/session and a matching dynamic target scope.
   */
  userUserDeleteDelete(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserUserDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/users/${encodeURIComponent(userId)}` });
  }
  /**
   * Read a managed user by native UUID; returns data.user and 404 for unknown identities.
   * Calls `GET /api/v1/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:read through the native active principal/session and a matching dynamic target scope.
   */
  userUserFindGet(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserUserFindGetResponse>({ ...options, method: "GET", url: `/api/v1/users/${encodeURIComponent(userId)}` });
  }
  /**
   * Replace phone, email and national_code using PATCH or PUT. Omitted/null/empty fields are cleared by this backend, so supply every identity value to retain. Validates and publishes Profile/LMS updates; returns data.user.
   * Calls `PATCH /api/v1/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:update through the native active principal/session and a matching dynamic target scope.
   */
  userUserUpdatePatch(userId: Identifier, data: T.UserUserUpdatePatchInput, options?: RequestOptions<T.UserUserUpdatePatchInput>) {
    return this.client.request<T.UserUserUpdatePatchResponse, T.UserUserUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}`, data: data });
  }
  /**
   * Replace phone, email and national_code using PATCH or PUT. Omitted/null/empty fields are cleared by this backend, so supply every identity value to retain. Validates and publishes Profile/LMS updates; returns data.user.
   * Calls `PUT /api/v1/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:update through the native active principal/session and a matching dynamic target scope.
   */
  userUserUpdatePut(userId: Identifier, data: T.UserUserUpdatePutInput, options?: RequestOptions<T.UserUserUpdatePutInput>) {
    return this.client.request<T.UserUserUpdatePutResponse, T.UserUserUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}`, data: data });
  }
  /**
   * Set an administrative target password of at least 8 characters. When password is supplied, this legacy handler deletes all local identity rows before creating the password identity; use self/password for preservation. Returns data.user.
   * Calls `PATCH /api/v1/users/{user_id}/change-password` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:change_password through the native active principal/session and a matching dynamic target scope.
   */
  userChangePasswordPatch(userId: Identifier, data: T.UserChangePasswordPatchInput, options?: RequestOptions<T.UserChangePasswordPatchInput>) {
    return this.client.request<T.UserChangePasswordPatchResponse, T.UserChangePasswordPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}/change-password`, data: data });
  }
  /**
   * Set an administrative target password of at least 8 characters. When password is supplied, this legacy handler deletes all local identity rows before creating the password identity; use self/password for preservation. Returns data.user.
   * Calls `PUT /api/v1/users/{user_id}/change-password` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:change_password through the native active principal/session and a matching dynamic target scope.
   */
  userChangePasswordPut(userId: Identifier, data: T.UserChangePasswordPutInput, options?: RequestOptions<T.UserChangePasswordPutInput>) {
    return this.client.request<T.UserChangePasswordPutResponse, T.UserChangePasswordPutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}/change-password`, data: data });
  }
  /**
   * Intentionally replace target memberships with reviewed role UUIDs and quoted If-Match revision. Missing precondition is 428; stale revision is 409 with zero changes. Never fetch a fresh revision to submit a saved stale union. Missing/null roles is a no-op.
   * Calls `PATCH /api/v1/users/{user_id}/change-roles` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param membershipRevision Exact opaque revision from the reviewed membership snapshot; stale revisions return 409 without automatic refetch.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: idp:user:assign_roles with a matching current target scope; added and removed roles must fit its assignment ceiling, rechecked after target user lock.
   */
  userChangeRolesPatch(userId: Identifier, data: T.UserChangeRolesPatchInput, membershipRevision: string, options?: RequestOptions<T.UserChangeRolesPatchInput>) {
    options = membershipRevisionOptions(membershipRevision, options);
    return this.client.request<T.UserChangeRolesPatchResponse, T.UserChangeRolesPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}/change-roles`, data: data });
  }
  /**
   * Intentionally replace target memberships with reviewed role UUIDs and quoted If-Match revision. Missing precondition is 428; stale revision is 409 with zero changes. Never fetch a fresh revision to submit a saved stale union. Missing/null roles is a no-op.
   * Calls `PUT /api/v1/users/{user_id}/change-roles` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param membershipRevision Exact opaque revision from the reviewed membership snapshot; stale revisions return 409 without automatic refetch.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: idp:user:assign_roles with a matching current target scope; added and removed roles must fit its assignment ceiling, rechecked after target user lock.
   */
  userChangeRolesPut(userId: Identifier, data: T.UserChangeRolesPutInput, membershipRevision: string, options?: RequestOptions<T.UserChangeRolesPutInput>) {
    options = membershipRevisionOptions(membershipRevision, options);
    return this.client.request<T.UserChangeRolesPutResponse, T.UserChangeRolesPutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}/change-roles`, data: data });
  }
  /**
   * Performs the read operation for the user capability.
   * Calls `GET /api/v1/users/{user_id}/identity-keys` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userReadGetApiV1UsersUserIdIdentityKeys(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserReadGetApiV1UsersUserIdIdentityKeysResponse>({ ...options, method: "GET", url: `/api/v1/users/${encodeURIComponent(userId)}/identity-keys` });
  }
  /**
   * Force-revoke all target user sessions and attempt back-channel logout propagation; returns the updated data.user with active-session count.
   * Calls `GET /api/v1/users/{user_id}/logout` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:logout through the native active principal/session and a matching dynamic target scope.
   */
  userUserLogoutGet(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserUserLogoutGetResponse>({ ...options, method: "GET", url: `/api/v1/users/${encodeURIComponent(userId)}/logout` });
  }
  /**
   * Read every stored local role membership row, including inactive and duplicate rows, with an opaque revision. Does not activate the target or grant authority.
   * Calls `GET /api/v1/users/{user_id}/role-memberships` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: idp:user:read with a matching current target scope, rechecked after target user lock.
   */
  userRoleMembershipsGet(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserRoleMembershipsGetResponse>({ ...options, method: "GET", url: `/api/v1/users/${encodeURIComponent(userId)}/role-memberships` });
  }
  /**
   * Append 1–128 unique non-nil active local role UUIDs to an already enabled local user. Preserves every existing membership; repeated active additions are no-ops. Rechecks authority under the target lock.
   * Calls `POST /api/v1/users/{user_id}/role-memberships` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: idp:user:assign_roles with a matching current target scope and assignable-role ceiling, rechecked after target user lock.
   */
  userRoleMembershipsPost(userId: Identifier, data: T.UserRoleMembershipsPostInput, options?: RequestOptions<T.UserRoleMembershipsPostInput>) {
    return this.client.request<T.UserRoleMembershipsPostResponse, T.UserRoleMembershipsPostInput>({ ...options, method: "POST", url: `/api/v1/users/${encodeURIComponent(userId)}/role-memberships`, data: data });
  }
  /**
   * Enable or disable a target account. Cannot disable self (406); disabling revokes current tokens/sessions before external publication and re-enabling does not restore credentials. Returns data.user.
   * Calls `PATCH /api/v1/users/{user_id}/status` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:update through the native active principal/session and a matching dynamic target scope.
   */
  userUserSetStatusPatch(userId: Identifier, data: T.UserUserSetStatusPatchInput, options?: RequestOptions<T.UserUserSetStatusPatchInput>) {
    return this.client.request<T.UserUserSetStatusPatchResponse, T.UserUserSetStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}/status`, data: data });
  }
  /**
   * Enable or disable a target account. Cannot disable self (406); disabling revokes current tokens/sessions before external publication and re-enabling does not restore credentials. Returns data.user.
   * Calls `PUT /api/v1/users/{user_id}/status` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:update through the native active principal/session and a matching dynamic target scope.
   */
  userUserSetStatusPut(userId: Identifier, data: T.UserUserSetStatusPutInput, options?: RequestOptions<T.UserUserSetStatusPutInput>) {
    return this.client.request<T.UserUserSetStatusPutResponse, T.UserUserSetStatusPutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}/status`, data: data });
  }
  /**
   * Search enabled accounts using at least 3 trimmed characters; returns at most 10 matches. Email/phone are masked except exact contact matches. Requires a session, not user-read administration.
   * Calls `GET /api/v1/users/directory` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer/cookie session.
   */
  userUsersDirectoryGet(params: T.UserUsersDirectoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserUsersDirectoryGetResponse>({ ...options, method: "GET", url: `/api/v1/users/directory`, params });
  }
  /**
   * Resolve or create an identity by supplied identifiers. Public role/roles assignment is forbidden (403); returns data.user containing only user_id and created, not a managed user resource.
   * Calls `POST /api/v1/users/register` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public local-authority registration bootstrap; cannot assign roles.
   */
  userRegisterPost(data: T.UserRegisterPostInput, options?: RequestOptions<T.UserRegisterPostInput>) {
    return this.client.request<T.UserRegisterPostResponse, T.UserRegisterPostInput>({ ...options, method: "POST", url: `/api/v1/users/register`, data: data });
  }
  /**
   * Find or register an email identity and request OTP delivery; returns user_id and otp_sent flags. Local identity authority is required.
   * Calls `POST /api/v1/users/register-email` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public local-authority registration bootstrap; cannot assign roles.
   */
  userRegisterWithEmailPost(data: T.UserRegisterWithEmailPostInput, options?: RequestOptions<T.UserRegisterWithEmailPostInput>) {
    return this.client.request<T.UserRegisterWithEmailPostResponse, T.UserRegisterWithEmailPostInput>({ ...options, method: "POST", url: `/api/v1/users/register-email`, data: data });
  }
  /**
   * Find or register an OTP phone identity and request an OTP delivery. Public registration cannot assign roles (403); returns user_id and otp_sent flags.
   * Calls `POST /api/v1/users/register-phone` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public local-authority registration bootstrap; cannot assign roles.
   */
  userRegisterWithPhonePost(data: T.UserRegisterWithPhonePostInput, options?: RequestOptions<T.UserRegisterWithPhonePostInput>) {
    return this.client.request<T.UserRegisterWithPhonePostResponse, T.UserRegisterWithPhonePostInput>({ ...options, method: "POST", url: `/api/v1/users/register-phone`, data: data });
  }
  /**
   * Read registration buckets for range=day (default), week or year; invalid range returns 400. Returns data.points with bucket and registrations.
   * Calls `GET /api/v1/users/registration-stats` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:read through the native active principal/session and a matching dynamic target scope.
   */
  userUsersRegistrationStatsGet(params?: T.UserUsersRegistrationStatsGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserUsersRegistrationStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/users/registration-stats`, params });
  }
  /**
   * Read the authenticated identity and current roles/permissions directly in data; no data.user wrapper.
   * Calls `GET /api/v1/users/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer/cookie session.
   */
  userUserFindSelfGet(options?: RequestOptions) {
    return this.client.request<T.UserUserFindSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/users/self` });
  }
  /**
   * Fill missing self identifiers only; trims values and lowercases email. Existing identifiers cannot be replaced (409); empty input returns 422. Publishes Profile/LMS identity updates.
   * Calls `PATCH /api/v1/users/self` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer/cookie session.
   */
  userUserUpdateSelfPatch(data: T.UserUserUpdateSelfPatchInput, options?: RequestOptions<T.UserUserUpdateSelfPatchInput>) {
    return this.client.request<T.UserUserUpdateSelfPatchResponse, T.UserUserUpdateSelfPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/self`, data: data });
  }
  /**
   * Read whether the current account has a password identity; returns data.has_password.
   * Calls `GET /api/v1/users/self/password` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer/cookie session.
   */
  userStatusGet(options?: RequestOptions) {
    return this.client.request<T.UserStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/users/self/password` });
  }
  /**
   * Set the current account password (8–128 characters) while preserving non-password identities. current_password is accepted but not verified by this backend; session authentication authorizes replacement. Unknown fields return 422.
   * Calls `PUT /api/v1/users/self/password` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current active Bearer/cookie session.
   */
  userSavePut(data: T.UserSavePutInput, options?: RequestOptions<T.UserSavePutInput>) {
    return this.client.request<T.UserSavePutResponse, T.UserSavePutInput>({ ...options, method: "PUT", url: `/api/v1/users/self/password`, data: data });
  }
  /**
   * Read counts of total users, enabled users and active sessions; returns the three counts in data.
   * Calls `GET /api/v1/users/stats` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current idp:user:read through the native active principal/session and a matching dynamic target scope.
   */
  userUsersStatsGet(options?: RequestOptions) {
    return this.client.request<T.UserUsersStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/users/stats` });
  }
  /**
   * Publish all users to LMS and active users to Profile; this GET mutates downstream state and returns data=true. Handler has no session or ACL check; deployment gateway policy is separate.
   * Calls `GET /api/v1/users/sync` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler session or ACL check; deployment gateway policy is separate.
   */
  userSyncUsersGet(options?: RequestOptions) {
    return this.client.request<T.UserSyncUsersGetResponse>({ ...options, method: "GET", url: `/api/v1/users/sync` });
  }
  /**
   * List active YAML-defined scoped actions and stable local role UUIDs for rule assignment.
   * Calls `GET /api/v1/visibility/catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: idp:visibility:assign on the current active local principal.
   */
  visibilityCatalogGet(options?: RequestOptions) {
    return this.client.request<T.VisibilityCatalogGetResponse>({ ...options, method: "GET", url: `/api/v1/visibility/catalog` });
  }
  /**
   * Resolve only the authenticated caller against current role memberships and permission grants. No matching grant returns 403. Never accepts caller-supplied actor IDs or scopes.
   * Calls `POST /api/v1/visibility/resolve` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated current principal with an active scoped grant for the requested action.
   */
  visibilityResolvePost(data: T.VisibilityResolvePostInput, options?: RequestOptions<T.VisibilityResolvePostInput>) {
    return this.client.request<T.VisibilityResolvePostResponse, T.VisibilityResolvePostInput>({ ...options, method: "POST", url: `/api/v1/visibility/resolve`, data: data });
  }
  /**
   * Read one local role scope document and its concurrency revision; unknown roles return 404.
   * Calls `GET /api/v1/visibility/roles/{role_id}` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: idp:visibility:assign on the current active local principal.
   */
  visibilityRoleGet(roleId: Identifier, options?: RequestOptions) {
    return this.client.request<T.VisibilityRoleGetResponse>({ ...options, method: "GET", url: `/api/v1/visibility/roles/${encodeURIComponent(roleId)}` });
  }
  /**
   * Replace the role scope document atomically with an audit entry. Supply the observed revision; stale revisions return 409 and invalid catalog actions or target UUIDs return 422.
   * Calls `PUT /api/v1/visibility/roles/{role_id}` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: idp:visibility:assign on the current active local principal.
   */
  visibilityRolePut(roleId: Identifier, data: T.VisibilityRolePutInput, options?: RequestOptions<T.VisibilityRolePutInput>) {
    return this.client.request<T.VisibilityRolePutResponse, T.VisibilityRolePutInput>({ ...options, method: "PUT", url: `/api/v1/visibility/roles/${encodeURIComponent(roleId)}`, data: data });
  }
  /**
   * Read process health and the static service version; does not verify database, broker or downstream readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler authentication check; deployment gateway policy is separate.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Read Flow integration queue and event/field metadata for UserUpdate, UserDelete and notification delivery. Returns metadata only; does not publish events.
   * Calls `GET /integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public metadata handler; deployment gateway policy is separate.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/integration/flow` });
  }
  /**
   * Authorize an OIDC code flow using S256 PKCE, state of at least 8 characters, registered redirect URI and allowed openid scopes. Redirects to login when unauthenticated; returns 303 with Location.
   * Calls `GET /oauth2/authorize` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: registered active OAuth client; current user Bearer/cookie session or login redirect.
   */
  oidcAuthorizeGet(params: T.OidcAuthorizeGetQuery, options?: RequestOptions) {
    return this.client.request<T.OidcAuthorizeGetResponse>({ ...options, method: "GET", url: `/oauth2/authorize`, params });
  }
  /**
   * Consume a validated upstream OIDC logout JWT in linked mode; nonce is forbidden and logout event plus subject/session is required. Deletes matching linked sessions and returns empty 204.
   * Calls `POST /oauth2/backchannel-logout` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: linked identity authority and a valid signed canonical-provider logout JWT.
   */
  oidcBackchannelLogoutPost(data: T.OidcBackchannelLogoutPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.OidcBackchannelLogoutPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/oauth2/backchannel-logout`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Inspect an access or refresh token as a raw active/inactive JSON union; authenticate the requesting OAuth client through form credentials or HTTP Basic.
   * Calls `POST /oauth2/introspect` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: registered OAuth client and the credential method configured for that client.
   */
  oidcIntrospectPost(data: T.OidcIntrospectPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.OidcIntrospectPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/oauth2/introspect`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Read public RSA signing keys as raw JWKS; key configuration errors propagate and no private key material is returned.
   * Calls `GET /oauth2/jwks` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public signing-key handler.
   */
  oidcJwksGet(options?: RequestOptions) {
    return this.client.request<T.OidcJwksGetResponse>({ ...options, method: "GET", url: `/oauth2/jwks` });
  }
  /**
   * End the current session and attempt back-channel logout propagation; returns empty 204 even when no current session is found. Does not clear cookies in this handler.
   * Calls `GET /oauth2/logout` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current Bearer/cookie session when present; otherwise succeeds without a session.
   */
  oidcLogoutGet(options?: RequestOptions) {
    return this.client.request<T.OidcLogoutGetResponse>({ ...options, method: "GET", url: `/oauth2/logout` });
  }
  /**
   * End the current session and attempt back-channel logout propagation; returns empty 204 even when no current session is found. Does not clear cookies in this handler.
   * Calls `POST /oauth2/logout` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current Bearer/cookie session when present; otherwise succeeds without a session.
   */
  oidcLogoutPost(options?: RequestOptions) {
    return this.client.request<T.OidcLogoutPostResponse>({ ...options, method: "POST", url: `/oauth2/logout` });
  }
  /**
   * Revoke a token belonging to the authenticated OAuth client. Unknown or another client token remains a successful no-op; returns empty HTTP 200, not JSON.
   * Calls `POST /oauth2/revoke` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: registered OAuth client and the credential method configured for that client.
   */
  oidcRevokePost(data: T.OidcRevokePostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.OidcRevokePostResponse, URLSearchParams>({ ...options, method: "POST", url: `/oauth2/revoke`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Exchange an authorization code, refresh token, service client credential or canonical subject token. Sends a URL-encoded form and returns raw token JSON; supported fields depend on grant_type. Client credentials require an assigned service user; token exchange requires linked authority.
   * Calls `POST /oauth2/token` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: registered OAuth client and the credential method configured for that client.
   */
  oidcTokenPost(data: T.OidcTokenPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.OidcTokenPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/oauth2/token`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Read the Bearer token subject and only claims allowed by its scopes; nullable values remain nullable. Returns raw JSON; missing or invalid tokens/users fail with 401.
   * Calls `GET /oauth2/userinfo` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: valid active Bearer access token (cookie alone is not accepted).
   */
  oidcUserinfoGet(options?: RequestOptions) {
    return this.client.request<T.OidcUserinfoGetResponse>({ ...options, method: "GET", url: `/oauth2/userinfo` });
  }
  /**
   * Read the Bearer token subject and only claims allowed by its scopes; nullable values remain nullable. Returns raw JSON; missing or invalid tokens/users fail with 401.
   * Calls `POST /oauth2/userinfo` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: valid active Bearer access token (cookie alone is not accepted).
   */
  oidcUserinfoPost(options?: RequestOptions) {
    return this.client.request<T.OidcUserinfoPostResponse>({ ...options, method: "POST", url: `/oauth2/userinfo` });
  }
}
