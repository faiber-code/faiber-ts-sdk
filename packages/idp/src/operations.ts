import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class IdpOperations extends ServiceApi {
  /**
   * Performs the status route operation for the router capability.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Performs the openapi json operation for the router capability.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Performs the discovery operation for the oidc capability.
   * Calls `GET /api/v1/.well-known/openid-configuration` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcDiscoveryGet(options?: RequestOptions) {
    return this.client.request<T.OidcDiscoveryGetResponse>({ ...options, method: "GET", url: `/api/v1/.well-known/openid-configuration` });
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
   * Performs the login account operation for the auth capability.
   * Calls `POST /api/v1/auth/account-login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authLoginAccountPost(data: T.AuthLoginAccountPostInput, options?: RequestOptions<T.AuthLoginAccountPostInput>) {
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
   * Performs the login operation for the auth capability.
   * Calls `POST /api/v1/auth/login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authLoginPost(data: T.AuthLoginPostInput, options?: RequestOptions<T.AuthLoginPostInput>) {
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
  authTokenPost(data: T.AuthTokenPostInput, options?: RequestOptions<T.AuthTokenPostInput>) {
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
   * Performs the otp login operation for the auth capability.
   * Calls `POST /api/v1/auth/otp-login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authOtpLoginPost(data: T.AuthOtpLoginPostInput, options?: RequestOptions<T.AuthOtpLoginPostInput>) {
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
   * Performs the generate secure one time token route operation for the auth capability.
   * Calls `POST /api/v1/auth/secure/generate/one-time` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authGenerateSecureOneTimeTokenRoutePost(options?: RequestOptions) {
    return this.client.request<T.AuthGenerateSecureOneTimeTokenRoutePostResponse>({ ...options, method: "POST", url: `/api/v1/auth/secure/generate/one-time` });
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
   * Performs the validate operation for the auth capability.
   * Calls `GET /api/v1/auth/validate` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authValidateGet(options?: RequestOptions) {
    return this.client.request<T.AuthValidateGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/validate` });
  }
  /**
   * Performs the login web operation for the auth capability.
   * Calls `POST /api/v1/auth/web-login` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authLoginWebPost(data: T.AuthLoginWebPostInput, options?: RequestOptions<T.AuthLoginWebPostInput>) {
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
   * Performs the flow integration show operation for the integration capability.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Performs the authorize operation for the oidc capability.
   * Calls `GET /api/v1/oauth2/authorize` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcAuthorizeGet(params?: T.OidcAuthorizeGetQuery, options?: RequestOptions) {
    return this.client.request<T.OidcAuthorizeGetResponse>({ ...options, method: "GET", url: `/api/v1/oauth2/authorize`, params });
  }
  /**
   * Performs the backchannel logout operation for the oidc capability.
   * Calls `POST /api/v1/oauth2/backchannel-logout` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcBackchannelLogoutPost(data: T.OidcBackchannelLogoutPostInput, options?: RequestOptions<T.OidcBackchannelLogoutPostInput>) {
    return this.client.request<T.OidcBackchannelLogoutPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/oauth2/backchannel-logout`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Performs the introspect operation for the oidc capability.
   * Calls `POST /api/v1/oauth2/introspect` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcIntrospectPost(data: T.OidcIntrospectPostInput, options?: RequestOptions<T.OidcIntrospectPostInput>) {
    return this.client.request<T.OidcIntrospectPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/oauth2/introspect`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Performs the jwks operation for the oidc capability.
   * Calls `GET /api/v1/oauth2/jwks` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcJwksGet(options?: RequestOptions) {
    return this.client.request<T.OidcJwksGetResponse>({ ...options, method: "GET", url: `/api/v1/oauth2/jwks` });
  }
  /**
   * Performs the logout operation for the oidc capability.
   * Calls `GET /api/v1/oauth2/logout` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcLogoutGet(options?: RequestOptions) {
    return this.client.request<T.OidcLogoutGetResponse>({ ...options, method: "GET", url: `/api/v1/oauth2/logout` });
  }
  /**
   * Performs the logout operation for the oidc capability.
   * Calls `POST /api/v1/oauth2/logout` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcLogoutPost(options?: RequestOptions) {
    return this.client.request<T.OidcLogoutPostResponse>({ ...options, method: "POST", url: `/api/v1/oauth2/logout` });
  }
  /**
   * Performs the revoke operation for the oidc capability.
   * Calls `POST /api/v1/oauth2/revoke` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcRevokePost(data: T.OidcRevokePostInput, options?: RequestOptions<T.OidcRevokePostInput>) {
    return this.client.request<T.OidcRevokePostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/oauth2/revoke`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Performs the token operation for the oidc capability.
   * Calls `POST /api/v1/oauth2/token` through the shared IDP-aware Faiber client.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcTokenPost(data: T.OidcTokenPostInput, options?: RequestOptions<T.OidcTokenPostInput>) {
    return this.client.request<T.OidcTokenPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/oauth2/token`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Performs the userinfo operation for the oidc capability.
   * Calls `GET /api/v1/oauth2/userinfo` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcUserinfoGet(options?: RequestOptions) {
    return this.client.request<T.OidcUserinfoGetResponse>({ ...options, method: "GET", url: `/api/v1/oauth2/userinfo` });
  }
  /**
   * Performs the userinfo operation for the oidc capability.
   * Calls `POST /api/v1/oauth2/userinfo` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  oidcUserinfoPost(options?: RequestOptions) {
    return this.client.request<T.OidcUserinfoPostResponse>({ ...options, method: "POST", url: `/api/v1/oauth2/userinfo` });
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
}

