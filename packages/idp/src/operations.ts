import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class IdpOperations extends ServiceApi {
  /**
   * Read raw OIDC issuer metadata and supported grants, scopes, claims and PKCE methods.
   * Calls `GET /.well-known/openid-configuration` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public discovery handler; deployment gateway policy is separate.
   */
  oidcDiscoveryGet(options?: RequestOptions) {
    return this.client.request<T.OidcDiscoveryGetResponse>({ ...options, method: "GET", url: `/.well-known/openid-configuration` });
  }
  /**
   * Read the raw generated OpenAPI document. Annotations may omit mounted routes; this document is not an endpoint-completeness guarantee.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Performs the permission templates index operation for the acl capability.
   * Calls `GET /api/v1/acl/permission-templates` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aclPermissionTemplatesIndexGet(options?: RequestOptions) {
    return this.client.request<T.AclPermissionTemplatesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/permission-templates` });
  }
  /**
   * Performs the permissions index operation for the acl capability.
   * Calls `GET /api/v1/acl/permissions` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aclPermissionsIndexGet(options?: RequestOptions) {
    return this.client.request<T.AclPermissionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/permissions` });
  }
  /**
   * Performs the roles index operation for the acl capability.
   * Calls `GET /api/v1/acl/roles` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aclRolesIndexGet(options?: RequestOptions) {
    return this.client.request<T.AclRolesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/roles` });
  }
  /**
   * Performs the roles create operation for the acl capability.
   * Calls `POST /api/v1/acl/roles` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aclRolesCreatePost(data: T.AclRolesCreatePostInput, options?: RequestOptions<T.AclRolesCreatePostInput>) {
    return this.client.request<T.AclRolesCreatePostResponse, T.AclRolesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/acl/roles`, data: data });
  }
  /**
   * Performs the roles delete operation for the acl capability.
   * Calls `DELETE /api/v1/acl/roles/{role_id}` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aclRolesDeleteDelete(roleId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AclRolesDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}` });
  }
  /**
   * Performs the roles show operation for the acl capability.
   * Calls `GET /api/v1/acl/roles/{role_id}` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aclRolesShowGet(roleId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AclRolesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}` });
  }
  /**
   * Performs the roles update operation for the acl capability.
   * Calls `PATCH /api/v1/acl/roles/{role_id}` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aclRolesUpdatePatch(roleId: Identifier, data: T.AclRolesUpdatePatchInput, options?: RequestOptions<T.AclRolesUpdatePatchInput>) {
    return this.client.request<T.AclRolesUpdatePatchResponse, T.AclRolesUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}`, data: data });
  }
  /**
   * Performs the roles update operation for the acl capability.
   * Calls `PUT /api/v1/acl/roles/{role_id}` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aclRolesUpdatePut(roleId: Identifier, data: T.AclRolesUpdatePutInput, options?: RequestOptions<T.AclRolesUpdatePutInput>) {
    return this.client.request<T.AclRolesUpdatePutResponse, T.AclRolesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}`, data: data });
  }
  /**
   * Read an atomic role grant snapshot and conflict revision, active canonical names and bounded stored row count with private no-store caching. Unknown role404, denied401, oversized/unavailable503. A revision is not a credential or durable authority cache.
   * Calls `GET /api/v1/acl/roles/{role_id}/permission-grants` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current genuine bearer/cookie user with idp:acl:read.
   */
  aclReadGet(roleId: string, options?: RequestOptions) {
    return this.client.request<T.AclReadGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}/permission-grants` });
  }
  /**
   * Atomically add/remove only reviewed permission UUIDs under expected_revision. Preserve unrelated/inactive rows; bound combined delta4096. Stale revision409 requires explicit re-read/rebase; invalid additions/duplicates/overlap400, protected admin406, unavailable503. Never retry blindly or replace full grants. No durable mutation receipt is created.
   * Calls `PATCH /api/v1/acl/roles/{role_id}/permission-grants` through the shared IDP-aware Faiber client.
   * @param roleId Backend path identifier `role_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current genuine bearer/cookie user with BOTH idp:acl:read and idp:acl:update, revalidated after the role row lock.
   */
  aclChangePatch(roleId: string, data: T.AclChangePatchInput, options?: RequestOptions<T.AclChangePatchInput>) {
    return this.client.request<T.AclChangePatchResponse, T.AclChangePatchInput>({ ...options, method: "PATCH", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}/permission-grants`, data: data });
  }
  /**
   * Read a bounded current local-IDP grant snapshot for one user/service. Never cache this as delegated authorization; equal revision does not extend authority. Unavailable or oversized snapshots fail closed.
   * Calls `GET /api/v1/acl/users/{user_id}/effective-permissions` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: BOTH current idp:user:read and idp:acl:read; current active local principal/client/session.
   */
  effectivePermissionsReadGet(userId: Identifier, params: T.EffectivePermissionsReadGetQuery, options?: RequestOptions) {
    return this.client.request<T.EffectivePermissionsReadGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/users/${encodeURIComponent(userId)}/effective-permissions`, params });
  }
  /**
   * Performs the login account operation for the auth capability.
   * Calls `POST /api/v1/auth/account-login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authLoginAccountPost(data: T.AuthLoginAccountPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.AuthLoginAccountPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/account-login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Performs the public show operation for the identity authority capability.
   * Calls `GET /api/v1/auth/authority` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  identityAuthorityPublicShowGet(options?: RequestOptions) {
    return this.client.request<T.IdentityAuthorityPublicShowGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/authority` });
  }
  /**
   * Performs the browser login operation for the auth capability.
   * Calls `POST /api/v1/auth/browser-login` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authBrowserLoginPost(data: T.AuthBrowserLoginPostInput, options?: RequestOptions<T.AuthBrowserLoginPostInput>) {
    return this.client.request<T.AuthBrowserLoginPostResponse, T.AuthBrowserLoginPostInput>({ ...options, method: "POST", url: `/api/v1/auth/browser-login`, data: data });
  }
  /**
   * Performs the start operation for the custom oauth capability.
   * Calls `GET /api/v1/auth/custom-oauth/{provider}` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  customOauthStartGet(provider: Identifier, params?: T.CustomOauthStartGetQuery, options?: RequestOptions) {
    return this.client.request<T.CustomOauthStartGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/custom-oauth/${encodeURIComponent(provider)}`, params });
  }
  /**
   * Performs the callback operation for the custom oauth capability.
   * Calls `GET /api/v1/auth/custom-oauth/{provider}/callback` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  customOauthCallbackGet(provider: Identifier, params?: T.CustomOauthCallbackGetQuery, options?: RequestOptions) {
    return this.client.request<T.CustomOauthCallbackGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/custom-oauth/${encodeURIComponent(provider)}/callback`, params });
  }
  /**
   * Performs the unlink operation for the custom oauth capability.
   * Calls `DELETE /api/v1/auth/custom-oauth/{provider}/link` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  customOauthUnlinkDelete(provider: Identifier, options?: RequestOptions) {
    return this.client.request<T.CustomOauthUnlinkDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/auth/custom-oauth/${encodeURIComponent(provider)}/link` });
  }
  /**
   * Performs the public providers operation for the custom oauth capability.
   * Calls `GET /api/v1/auth/custom-oauth/providers` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  customOauthPublicProvidersGet(options?: RequestOptions) {
    return this.client.request<T.CustomOauthPublicProvidersGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/custom-oauth/providers` });
  }
  /**
   * Performs the generate one time token route operation for the auth capability.
   * Calls `POST /api/v1/auth/generate/one-time` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authGenerateOneTimeTokenRoutePost(options?: RequestOptions) {
    return this.client.request<T.AuthGenerateOneTimeTokenRoutePostResponse>({ ...options, method: "POST", url: `/api/v1/auth/generate/one-time` });
  }
  /**
   * Performs the browser handoff operation for the auth capability.
   * Calls `GET /api/v1/auth/handoff` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authBrowserHandoffGet(params?: T.AuthBrowserHandoffGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthBrowserHandoffGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/handoff`, params });
  }
  /**
   * Exchange a handoff code for the matching client. Invalid or consumed codes return 400; inactive sessions return 401.
   * Calls `POST /api/v1/auth/handoff/exchange` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public bootstrap; consumes a single-use handoff code.
   */
  authExchangeHandoffTokenPost(data: T.AuthExchangeHandoffTokenPostInput, options?: RequestOptions<T.AuthExchangeHandoffTokenPostInput>) {
    return this.client.request<T.AuthExchangeHandoffTokenPostResponse, T.AuthExchangeHandoffTokenPostInput>({ ...options, method: "POST", url: `/api/v1/auth/handoff/exchange`, data: data });
  }
  /**
   * Performs the list linked identities operation for the auth capability.
   * Calls `GET /api/v1/auth/identities` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authListLinkedIdentitiesGet(options?: RequestOptions) {
    return this.client.request<T.AuthListLinkedIdentitiesGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/identities` });
  }
  /**
   * Performs the linked faiber billing operation for the auth capability.
   * Calls `GET /api/v1/auth/linked-faiber/billing` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authLinkedFaiberBillingGet(params?: T.AuthLinkedFaiberBillingGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthLinkedFaiberBillingGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/linked-faiber/billing`, params });
  }
  /**
   * Performs the linked faiber wallet topup operation for the auth capability.
   * Calls `POST /api/v1/auth/linked-faiber/wallet/topup` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authLinkedFaiberWalletTopupPost(data: T.AuthLinkedFaiberWalletTopupPostInput, options?: RequestOptions<T.AuthLinkedFaiberWalletTopupPostInput>) {
    return this.client.request<T.AuthLinkedFaiberWalletTopupPostResponse, T.AuthLinkedFaiberWalletTopupPostInput>({ ...options, method: "POST", url: `/api/v1/auth/linked-faiber/wallet/topup`, data: data });
  }
  /**
   * Performs the login operation for the auth capability.
   * Calls `POST /api/v1/auth/login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authLoginPost(data: T.AuthLoginPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.AuthLoginPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Performs the logout operation for the auth capability.
   * Calls `GET /api/v1/auth/logout` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authLogoutGet(options?: RequestOptions) {
    return this.client.request<T.AuthLogoutGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/logout` });
  }
  /**
   * Performs the authorize operation for the auth capability.
   * Calls `GET /api/v1/auth/native/authorize` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authAuthorizeGet(params?: T.AuthAuthorizeGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthAuthorizeGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/native/authorize`, params });
  }
  /**
   * Performs the token operation for the auth capability.
   * Calls `POST /api/v1/auth/native/token` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authTokenPost(data: T.AuthTokenPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.AuthTokenPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/native/token`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Performs the oauth unlink operation for the auth capability.
   * Calls `DELETE /api/v1/auth/oauth/{provider}` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authOauthUnlinkDelete(provider: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthOauthUnlinkDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/auth/oauth/${encodeURIComponent(provider)}` });
  }
  /**
   * Performs the oauth start operation for the auth capability.
   * Calls `GET /api/v1/auth/oauth/{provider}` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authOauthStartGet(provider: Identifier, params?: T.AuthOauthStartGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthOauthStartGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/oauth/${encodeURIComponent(provider)}`, params });
  }
  /**
   * Performs the oauth callback operation for the auth capability.
   * Calls `GET /api/v1/auth/oauth/{provider}/callback` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authOauthCallbackGet(provider: Identifier, params?: T.AuthOauthCallbackGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthOauthCallbackGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/oauth/${encodeURIComponent(provider)}/callback`, params });
  }
  /**
   * Performs the oauth providers operation for the auth capability.
   * Calls `GET /api/v1/auth/oauth/providers` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authOauthProvidersGet(options?: RequestOptions) {
    return this.client.request<T.AuthOauthProvidersGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/oauth/providers` });
  }
  /**
   * Exchange OTP credentials using application/x-www-form-urlencoded; full token response and cancellation options are preserved.
   * Calls `POST /api/v1/auth/otp-login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public OAuth bootstrap.
   */
  authOtpLoginPost(data: T.AuthOtpLoginPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.AuthOtpLoginPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/otp-login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Performs the refresh token operation for the auth capability.
   * Calls `GET /api/v1/auth/refresh` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authRefreshTokenGet(options?: RequestOptions) {
    return this.client.request<T.AuthRefreshTokenGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/refresh` });
  }
  /**
   * Consume a single-use token and issue access/refresh tokens for its active matching session. Reuse returns 400; invalid session ownership returns 401. The same configured identity-project service credential is required; Host alone cannot authorize the call.
   * Calls `POST /api/v1/auth/secure/exchange/one-time` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only x-infera-idp-service-token credential for the current identity project plus the configured internal Host.
   */
  authExchangeOneTimeTokenPost(data: T.AuthExchangeOneTimeTokenPostInput, options?: RequestOptions<T.AuthExchangeOneTimeTokenPostInput>) {
    return this.client.request<T.AuthExchangeOneTimeTokenPostResponse, T.AuthExchangeOneTimeTokenPostInput>({ ...options, method: "POST", url: `/api/v1/auth/secure/exchange/one-time`, data: data });
  }
  /**
   * Issue a single-use login token for the user UUID in the URL. Missing users return 401; missing/invalid credentials return 401, a wrong internal Host returns 403, and missing/short server credential configuration returns 503. Never expose the credential to browsers.
   * Calls `POST /api/v1/auth/secure/generate/one-time/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only x-infera-idp-service-token credential for the current identity project plus the configured internal Host.
   */
  authGenerateSecureOneTimeTokenRoutePost(userId: string, options?: RequestOptions) {
    return this.client.request<T.AuthGenerateSecureOneTimeTokenRoutePostResponse>({ ...options, method: "POST", url: `/api/v1/auth/secure/generate/one-time/${encodeURIComponent(userId)}` });
  }
  /**
   * Issue a single-use handoff code for an allowed OAuth client. Requires the server secret header; never expose it in a browser.
   * Calls `POST /api/v1/auth/secure/handoff/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only x-infera-handoff-secret; configured client allowlist.
   */
  authIssueHandoffTokenPost(userId: Identifier, data: T.AuthIssueHandoffTokenPostInput, options?: RequestOptions<T.AuthIssueHandoffTokenPostInput>) {
    return this.client.request<T.AuthIssueHandoffTokenPostResponse, T.AuthIssueHandoffTokenPostInput>({ ...options, method: "POST", url: `/api/v1/auth/secure/handoff/${encodeURIComponent(userId)}`, data: data });
  }
  /**
   * Performs the list sessions operation for the auth capability.
   * Calls `GET /api/v1/auth/sessions` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authListSessionsGet(options?: RequestOptions) {
    return this.client.request<T.AuthListSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/sessions` });
  }
  /**
   * Performs the delete session operation for the auth capability.
   * Calls `DELETE /api/v1/auth/sessions/{session_id}` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authDeleteSessionDelete(sessionId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthDeleteSessionDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/auth/sessions/${encodeURIComponent(sessionId)}` });
  }
  /**
   * Performs the login token operation for the auth capability.
   * Calls `GET /api/v1/auth/token-login` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authLoginTokenGet(params?: T.AuthLoginTokenGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthLoginTokenGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/token-login`, params });
  }
  /**
   * Validate a forwarded request. Success has status/message and principal headers, not a data.user_id body; HTML failures may redirect to login. The outer CORS layer answers OPTIONS with an empty response; it is not proof of an authenticated session.
   * Calls `GET /api/v1/auth/validate` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: forward-auth policy for the original method/URI/service, or CORS preflight; invalid credentials fail closed.
   */
  authValidateGet(options?: RequestOptions) {
    return this.client.request<T.AuthValidateGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/validate` });
  }
  /**
   * Validate a forwarded request. Success has status/message and principal headers, not a data.user_id body; HTML failures may redirect to login. The outer CORS layer answers OPTIONS with an empty response; it is not proof of an authenticated session.
   * Calls `OPTIONS /api/v1/auth/validate` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: forward-auth policy for the original method/URI/service, or CORS preflight; invalid credentials fail closed.
   */
  authValidateOptions(options?: RequestOptions) {
    return this.client.request<T.AuthValidateOptionsResponse>({ ...options, method: "OPTIONS", url: `/api/v1/auth/validate` });
  }
  /**
   * Performs the login web operation for the auth capability.
   * Calls `POST /api/v1/auth/web-login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authLoginWebPost(data: T.AuthLoginWebPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.AuthLoginWebPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/web-login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Performs the enroll operation for the identity authority capability.
   * Calls `POST /api/v1/federation/enroll` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  identityAuthorityEnrollPost(data: T.IdentityAuthorityEnrollPostInput, options?: RequestOptions<T.IdentityAuthorityEnrollPostInput>) {
    return this.client.request<T.IdentityAuthorityEnrollPostResponse, T.IdentityAuthorityEnrollPostInput>({ ...options, method: "POST", url: `/api/v1/federation/enroll`, data: data });
  }
  /**
   * Performs the list operation for the custom oauth capability.
   * Calls `GET /api/v1/settings/custom-oauth` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  customOauthListGet(options?: RequestOptions) {
    return this.client.request<T.CustomOauthListGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/custom-oauth` });
  }
  /**
   * Performs the create operation for the custom oauth capability.
   * Calls `POST /api/v1/settings/custom-oauth` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  customOauthCreatePost(data: T.CustomOauthCreatePostInput, options?: RequestOptions<T.CustomOauthCreatePostInput>) {
    return this.client.request<T.CustomOauthCreatePostResponse, T.CustomOauthCreatePostInput>({ ...options, method: "POST", url: `/api/v1/settings/custom-oauth`, data: data });
  }
  /**
   * Performs the remove operation for the custom oauth capability.
   * Calls `DELETE /api/v1/settings/custom-oauth/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  customOauthRemoveDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CustomOauthRemoveDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/settings/custom-oauth/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the custom oauth capability.
   * Calls `PUT /api/v1/settings/custom-oauth/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  customOauthUpdatePut(id: Identifier, data: T.CustomOauthUpdatePutInput, options?: RequestOptions<T.CustomOauthUpdatePutInput>) {
    return this.client.request<T.CustomOauthUpdatePutResponse, T.CustomOauthUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/custom-oauth/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the admin show operation for the identity authority capability.
   * Calls `GET /api/v1/settings/identity-authority` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  identityAuthorityAdminShowGet(options?: RequestOptions) {
    return this.client.request<T.IdentityAuthorityAdminShowGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/identity-authority` });
  }
  /**
   * Performs the update operation for the identity authority capability.
   * Calls `PUT /api/v1/settings/identity-authority` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  identityAuthorityUpdatePut(data: T.IdentityAuthorityUpdatePutInput, options?: RequestOptions<T.IdentityAuthorityUpdatePutInput>) {
    return this.client.request<T.IdentityAuthorityUpdatePutResponse, T.IdentityAuthorityUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/identity-authority`, data: data });
  }
  /**
   * Performs the activate canonical operation for the identity authority capability.
   * Calls `POST /api/v1/settings/identity-authority/activate-canonical` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  identityAuthorityActivateCanonicalPost(options?: RequestOptions) {
    return this.client.request<T.IdentityAuthorityActivateCanonicalPostResponse>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/activate-canonical` });
  }
  /**
   * Performs the discover operation for the identity authority capability.
   * Calls `POST /api/v1/settings/identity-authority/discover` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  identityAuthorityDiscoverPost(data: T.IdentityAuthorityDiscoverPostInput, options?: RequestOptions<T.IdentityAuthorityDiscoverPostInput>) {
    return this.client.request<T.IdentityAuthorityDiscoverPostResponse, T.IdentityAuthorityDiscoverPostInput>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/discover`, data: data });
  }
  /**
   * Performs the pair canonical operation for the identity authority capability.
   * Calls `POST /api/v1/settings/identity-authority/pair` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  identityAuthorityPairCanonicalPost(data: T.IdentityAuthorityPairCanonicalPostInput, options?: RequestOptions<T.IdentityAuthorityPairCanonicalPostInput>) {
    return this.client.request<T.IdentityAuthorityPairCanonicalPostResponse, T.IdentityAuthorityPairCanonicalPostInput>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/pair`, data: data });
  }
  /**
   * Performs the pair faiber operation for the identity authority capability.
   * Calls `POST /api/v1/settings/identity-authority/pair-faiber` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  identityAuthorityPairFaiberPost(data: T.IdentityAuthorityPairFaiberPostInput, options?: RequestOptions<T.IdentityAuthorityPairFaiberPostInput>) {
    return this.client.request<T.IdentityAuthorityPairFaiberPostResponse, T.IdentityAuthorityPairFaiberPostInput>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/pair-faiber`, data: data });
  }
  /**
   * Performs the create pairing invitation operation for the identity authority capability.
   * Calls `POST /api/v1/settings/identity-authority/pairing-invitations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  identityAuthorityCreatePairingInvitationPost(data: T.IdentityAuthorityCreatePairingInvitationPostInput, options?: RequestOptions<T.IdentityAuthorityCreatePairingInvitationPostInput>) {
    return this.client.request<T.IdentityAuthorityCreatePairingInvitationPostResponse, T.IdentityAuthorityCreatePairingInvitationPostInput>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/pairing-invitations`, data: data });
  }
  /**
   * Performs the recover canonical mode operation for the identity authority capability.
   * Calls `POST /api/v1/settings/identity-authority/recover-canonical` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  identityAuthorityRecoverCanonicalModePost(options?: RequestOptions) {
    return this.client.request<T.IdentityAuthorityRecoverCanonicalModePostResponse>({ ...options, method: "POST", url: `/api/v1/settings/identity-authority/recover-canonical` });
  }
  /**
   * Performs the login page settings show operation for the settings capability.
   * Calls `GET /api/v1/settings/login-page` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  settingsLoginPageSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.SettingsLoginPageSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/login-page` });
  }
  /**
   * Performs the login page settings update operation for the settings capability.
   * Calls `PUT /api/v1/settings/login-page` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  settingsLoginPageSettingsUpdatePut(data: T.SettingsLoginPageSettingsUpdatePutInput, options?: RequestOptions<T.SettingsLoginPageSettingsUpdatePutInput>) {
    return this.client.request<T.SettingsLoginPageSettingsUpdatePutResponse, T.SettingsLoginPageSettingsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/login-page`, data: data });
  }
  /**
   * Performs the login page asset upload operation for the settings capability.
   * Calls `POST /api/v1/settings/login-page/assets` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  settingsLoginPageAssetUploadPost(data: T.SettingsLoginPageAssetUploadPostInput, options?: RequestOptions<T.SettingsLoginPageAssetUploadPostInput>) {
    return this.client.request<T.SettingsLoginPageAssetUploadPostResponse, T.SettingsLoginPageAssetUploadPostInput>({ ...options, method: "POST", url: `/api/v1/settings/login-page/assets`, data: data });
  }
  /**
   * Performs the login page asset operation for the settings capability.
   * Calls `GET /api/v1/settings/login-page/assets/{asset_key}` through the shared IDP-aware Faiber client.
   * @param assetKey Backend path identifier `asset_key`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  settingsLoginPageAssetGet(assetKey: Identifier, options?: RequestOptions) {
    return this.client.request<T.SettingsLoginPageAssetGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/login-page/assets/${encodeURIComponent(assetKey)}` });
  }
  /**
   * Performs the login page settings public operation for the settings capability.
   * Calls `GET /api/v1/settings/login-page/public` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  settingsLoginPageSettingsPublicGet(options?: RequestOptions) {
    return this.client.request<T.SettingsLoginPageSettingsPublicGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/login-page/public` });
  }
  /**
   * Performs the oauth settings show operation for the settings capability.
   * Calls `GET /api/v1/settings/oauth` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  settingsOauthSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.SettingsOauthSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/oauth` });
  }
  /**
   * Performs the oauth settings update operation for the settings capability.
   * Calls `PUT /api/v1/settings/oauth` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  settingsOauthSettingsUpdatePut(data: T.SettingsOauthSettingsUpdatePutInput, options?: RequestOptions<T.SettingsOauthSettingsUpdatePutInput>) {
    return this.client.request<T.SettingsOauthSettingsUpdatePutResponse, T.SettingsOauthSettingsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/oauth`, data: data });
  }
  /**
   * Performs the list operation for the oauth clients capability.
   * Calls `GET /api/v1/settings/oauth-clients` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oauthClientsListGet(options?: RequestOptions) {
    return this.client.request<T.OauthClientsListGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/oauth-clients` });
  }
  /**
   * Performs the create operation for the oauth clients capability.
   * Calls `POST /api/v1/settings/oauth-clients` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oauthClientsCreatePost(data: T.OauthClientsCreatePostInput, options?: RequestOptions<T.OauthClientsCreatePostInput>) {
    return this.client.request<T.OauthClientsCreatePostResponse, T.OauthClientsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/settings/oauth-clients`, data: data });
  }
  /**
   * Performs the remove operation for the oauth clients capability.
   * Calls `DELETE /api/v1/settings/oauth-clients/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oauthClientsRemoveDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OauthClientsRemoveDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/settings/oauth-clients/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the oauth clients capability.
   * Calls `PUT /api/v1/settings/oauth-clients/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oauthClientsUpdatePut(id: Identifier, data: T.OauthClientsUpdatePutInput, options?: RequestOptions<T.OauthClientsUpdatePutInput>) {
    return this.client.request<T.OauthClientsUpdatePutResponse, T.OauthClientsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/oauth-clients/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the rotate operation for the oauth clients capability.
   * Calls `POST /api/v1/settings/oauth-clients/{id}/rotate-secret` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oauthClientsRotatePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OauthClientsRotatePostResponse>({ ...options, method: "POST", url: `/api/v1/settings/oauth-clients/${encodeURIComponent(id)}/rotate-secret` });
  }
  /**
   * Idempotently provision the unprivileged website OAuth client for a canonical HTTPS origin; conflicting origins or disabled clients return 409.
   * Calls `POST /api/v1/settings/oauth-clients/website-bootstrap` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP administrator or federation service browser-client.bootstrap credential.
   */
  oauthClientsBootstrapWebsitePost(data: T.OauthClientsBootstrapWebsitePostInput, options?: RequestOptions<T.OauthClientsBootstrapWebsitePostInput>) {
    return this.client.request<T.OauthClientsBootstrapWebsitePostResponse, T.OauthClientsBootstrapWebsitePostInput>({ ...options, method: "POST", url: `/api/v1/settings/oauth-clients/website-bootstrap`, data: data });
  }
  /**
   * Performs the users index operation for the user capability.
   * Calls `GET /api/v1/users` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUsersIndexGet(params?: T.UserUsersIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserUsersIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/users`, params });
  }
  /**
   * Performs the user create operation for the user capability.
   * Calls `POST /api/v1/users` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUserCreatePost(data: T.UserUserCreatePostInput, options?: RequestOptions<T.UserUserCreatePostInput>) {
    return this.client.request<T.UserUserCreatePostResponse, T.UserUserCreatePostInput>({ ...options, method: "POST", url: `/api/v1/users`, data: data });
  }
  /**
   * Performs the user delete operation for the user capability.
   * Calls `DELETE /api/v1/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUserDeleteDelete(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserUserDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/users/${encodeURIComponent(userId)}` });
  }
  /**
   * Performs the user find operation for the user capability.
   * Calls `GET /api/v1/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUserFindGet(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserUserFindGetResponse>({ ...options, method: "GET", url: `/api/v1/users/${encodeURIComponent(userId)}` });
  }
  /**
   * Performs the user update operation for the user capability.
   * Calls `PATCH /api/v1/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUserUpdatePatch(userId: Identifier, data: T.UserUserUpdatePatchInput, options?: RequestOptions<T.UserUserUpdatePatchInput>) {
    return this.client.request<T.UserUserUpdatePatchResponse, T.UserUserUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}`, data: data });
  }
  /**
   * Performs the user update operation for the user capability.
   * Calls `PUT /api/v1/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUserUpdatePut(userId: Identifier, data: T.UserUserUpdatePutInput, options?: RequestOptions<T.UserUserUpdatePutInput>) {
    return this.client.request<T.UserUserUpdatePutResponse, T.UserUserUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}`, data: data });
  }
  /**
   * Performs the change password operation for the user capability.
   * Calls `PATCH /api/v1/users/{user_id}/change-password` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userChangePasswordPatch(userId: Identifier, data: T.UserChangePasswordPatchInput, options?: RequestOptions<T.UserChangePasswordPatchInput>) {
    return this.client.request<T.UserChangePasswordPatchResponse, T.UserChangePasswordPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}/change-password`, data: data });
  }
  /**
   * Performs the change password operation for the user capability.
   * Calls `PUT /api/v1/users/{user_id}/change-password` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userChangePasswordPut(userId: Identifier, data: T.UserChangePasswordPutInput, options?: RequestOptions<T.UserChangePasswordPutInput>) {
    return this.client.request<T.UserChangePasswordPutResponse, T.UserChangePasswordPutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}/change-password`, data: data });
  }
  /**
   * Performs the change roles operation for the user capability.
   * Calls `PATCH /api/v1/users/{user_id}/change-roles` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userChangeRolesPatch(userId: Identifier, data: T.UserChangeRolesPatchInput, options?: RequestOptions<T.UserChangeRolesPatchInput>) {
    return this.client.request<T.UserChangeRolesPatchResponse, T.UserChangeRolesPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}/change-roles`, data: data });
  }
  /**
   * Performs the change roles operation for the user capability.
   * Calls `PUT /api/v1/users/{user_id}/change-roles` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userChangeRolesPut(userId: Identifier, data: T.UserChangeRolesPutInput, options?: RequestOptions<T.UserChangeRolesPutInput>) {
    return this.client.request<T.UserChangeRolesPutResponse, T.UserChangeRolesPutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}/change-roles`, data: data });
  }
  /**
   * Performs the user logout operation for the user capability.
   * Calls `GET /api/v1/users/{user_id}/logout` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUserLogoutGet(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserUserLogoutGetResponse>({ ...options, method: "GET", url: `/api/v1/users/${encodeURIComponent(userId)}/logout` });
  }
  /**
   * Performs the user set status operation for the user capability.
   * Calls `PATCH /api/v1/users/{user_id}/status` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUserSetStatusPatch(userId: Identifier, data: T.UserUserSetStatusPatchInput, options?: RequestOptions<T.UserUserSetStatusPatchInput>) {
    return this.client.request<T.UserUserSetStatusPatchResponse, T.UserUserSetStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}/status`, data: data });
  }
  /**
   * Performs the user set status operation for the user capability.
   * Calls `PUT /api/v1/users/{user_id}/status` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUserSetStatusPut(userId: Identifier, data: T.UserUserSetStatusPutInput, options?: RequestOptions<T.UserUserSetStatusPutInput>) {
    return this.client.request<T.UserUserSetStatusPutResponse, T.UserUserSetStatusPutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}/status`, data: data });
  }
  /**
   * Performs the users directory operation for the user capability.
   * Calls `GET /api/v1/users/directory` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUsersDirectoryGet(params?: T.UserUsersDirectoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserUsersDirectoryGetResponse>({ ...options, method: "GET", url: `/api/v1/users/directory`, params });
  }
  /**
   * Performs the register operation for the user capability.
   * Calls `POST /api/v1/users/register` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userRegisterPost(data: T.UserRegisterPostInput, options?: RequestOptions<T.UserRegisterPostInput>) {
    return this.client.request<T.UserRegisterPostResponse, T.UserRegisterPostInput>({ ...options, method: "POST", url: `/api/v1/users/register`, data: data });
  }
  /**
   * Performs the register with email operation for the user capability.
   * Calls `POST /api/v1/users/register-email` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userRegisterWithEmailPost(data: T.UserRegisterWithEmailPostInput, options?: RequestOptions<T.UserRegisterWithEmailPostInput>) {
    return this.client.request<T.UserRegisterWithEmailPostResponse, T.UserRegisterWithEmailPostInput>({ ...options, method: "POST", url: `/api/v1/users/register-email`, data: data });
  }
  /**
   * Performs the register with phone operation for the user capability.
   * Calls `POST /api/v1/users/register-phone` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userRegisterWithPhonePost(data: T.UserRegisterWithPhonePostInput, options?: RequestOptions<T.UserRegisterWithPhonePostInput>) {
    return this.client.request<T.UserRegisterWithPhonePostResponse, T.UserRegisterWithPhonePostInput>({ ...options, method: "POST", url: `/api/v1/users/register-phone`, data: data });
  }
  /**
   * Performs the users registration stats operation for the user capability.
   * Calls `GET /api/v1/users/registration-stats` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUsersRegistrationStatsGet(params?: T.UserUsersRegistrationStatsGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserUsersRegistrationStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/users/registration-stats`, params });
  }
  /**
   * Performs the user find self operation for the user capability.
   * Calls `GET /api/v1/users/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUserFindSelfGet(options?: RequestOptions) {
    return this.client.request<T.UserUserFindSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/users/self` });
  }
  /**
   * Performs the user update self operation for the user capability.
   * Calls `PATCH /api/v1/users/self` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUserUpdateSelfPatch(data: T.UserUserUpdateSelfPatchInput, options?: RequestOptions<T.UserUserUpdateSelfPatchInput>) {
    return this.client.request<T.UserUserUpdateSelfPatchResponse, T.UserUserUpdateSelfPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/self`, data: data });
  }
  /**
   * Read or update the authenticated account password. Password updates require 8–128 characters and preserve linked OAuth identities.
   * Calls `GET /api/v1/users/self/password` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated user session.
   */
  userStatusGet(options?: RequestOptions) {
    return this.client.request<T.UserStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/users/self/password` });
  }
  /**
   * Read or update the authenticated account password. Password updates require 8–128 characters and preserve linked OAuth identities.
   * Calls `PUT /api/v1/users/self/password` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated user session.
   */
  userSavePut(data: T.UserSavePutInput, options?: RequestOptions<T.UserSavePutInput>) {
    return this.client.request<T.UserSavePutResponse, T.UserSavePutInput>({ ...options, method: "PUT", url: `/api/v1/users/self/password`, data: data });
  }
  /**
   * Performs the users stats operation for the user capability.
   * Calls `GET /api/v1/users/stats` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userUsersStatsGet(options?: RequestOptions) {
    return this.client.request<T.UserUsersStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/users/stats` });
  }
  /**
   * Performs the sync users operation for the user capability.
   * Calls `GET /api/v1/users/sync` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSyncUsersGet(options?: RequestOptions) {
    return this.client.request<T.UserSyncUsersGetResponse>({ ...options, method: "GET", url: `/api/v1/users/sync` });
  }
  /**
   * Read process health and the reported service version. Does not verify database, broker or downstream readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Performs the flow integration show operation for the integration capability.
   * Calls `GET /integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/integration/flow` });
  }
  /**
   * Performs the authorize operation for the oidc capability.
   * Calls `GET /oauth2/authorize` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcAuthorizeGet(params?: T.OidcAuthorizeGetQuery, options?: RequestOptions) {
    return this.client.request<T.OidcAuthorizeGetResponse>({ ...options, method: "GET", url: `/oauth2/authorize`, params });
  }
  /**
   * Performs the backchannel logout operation for the oidc capability.
   * Calls `POST /oauth2/backchannel-logout` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcBackchannelLogoutPost(data: T.OidcBackchannelLogoutPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.OidcBackchannelLogoutPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/oauth2/backchannel-logout`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Inspect an access or refresh token as a raw active/inactive union using form-encoded client credentials or HTTP Basic authentication.
   * Calls `POST /oauth2/introspect` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: valid active OAuth client and its configured authentication method.
   */
  oidcIntrospectPost(data: T.OidcIntrospectPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.OidcIntrospectPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/oauth2/introspect`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Read public RSA signing keys as a raw JWKS document; key configuration errors propagate.
   * Calls `GET /oauth2/jwks` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public signing-key handler; contains no private key material.
   */
  oidcJwksGet(options?: RequestOptions) {
    return this.client.request<T.OidcJwksGetResponse>({ ...options, method: "GET", url: `/oauth2/jwks` });
  }
  /**
   * End the current session and propagate back-channel logout; returns 204 even when no current session is found.
   * Calls `GET /oauth2/logout` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current Bearer token or secure browser cookie when present.
   */
  oidcLogoutGet(options?: RequestOptions) {
    return this.client.request<T.OidcLogoutGetResponse>({ ...options, method: "GET", url: `/oauth2/logout` });
  }
  /**
   * End the current session and propagate back-channel logout; returns 204 even when no current session is found.
   * Calls `POST /oauth2/logout` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current Bearer token or secure browser cookie when present.
   */
  oidcLogoutPost(options?: RequestOptions) {
    return this.client.request<T.OidcLogoutPostResponse>({ ...options, method: "POST", url: `/oauth2/logout` });
  }
  /**
   * Performs the revoke operation for the oidc capability.
   * Calls `POST /oauth2/revoke` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcRevokePost(data: T.OidcRevokePostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.OidcRevokePostResponse, URLSearchParams>({ ...options, method: "POST", url: `/oauth2/revoke`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Performs the token operation for the oidc capability.
   * Calls `POST /oauth2/token` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcTokenPost(data: T.OidcTokenPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.OidcTokenPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/oauth2/token`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Read the token subject and only claims allowed by its scopes. No API envelope; nullable identity values remain nullable.
   * Calls `GET /oauth2/userinfo` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: valid Bearer access token; missing/invalid tokens or users return 401.
   */
  oidcUserinfoGet(options?: RequestOptions) {
    return this.client.request<T.OidcUserinfoGetResponse>({ ...options, method: "GET", url: `/oauth2/userinfo` });
  }
  /**
   * Read the token subject and only claims allowed by its scopes. No API envelope; nullable identity values remain nullable.
   * Calls `POST /oauth2/userinfo` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: valid Bearer access token; missing/invalid tokens or users return 401.
   */
  oidcUserinfoPost(options?: RequestOptions) {
    return this.client.request<T.OidcUserinfoPostResponse>({ ...options, method: "POST", url: `/oauth2/userinfo` });
  }
}
