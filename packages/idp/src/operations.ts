import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class IdpOperations extends ServiceApi {
  /** GET /; permission: public/session-derived. */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /** GET /api/openapi.json; permission: public/session-derived. */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /** GET /api/v1/acl/permissions; permission: public/session-derived. */
  aclPermissionsIndexGet(options?: RequestOptions) {
    return this.client.request<T.AclPermissionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/permissions` });
  }
  /** GET /api/v1/acl/roles; permission: public/session-derived. */
  aclRolesIndexGet(options?: RequestOptions) {
    return this.client.request<T.AclRolesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/roles` });
  }
  /** POST /api/v1/acl/roles; permission: public/session-derived. */
  aclRolesCreatePost(data: T.AclRolesCreatePostInput, options?: RequestOptions<T.AclRolesCreatePostInput>) {
    return this.client.request<T.AclRolesCreatePostResponse, T.AclRolesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/acl/roles`, data: data });
  }
  /** DELETE /api/v1/acl/roles/{role_id}; permission: public/session-derived. */
  aclRolesDeleteDelete(roleId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AclRolesDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}` });
  }
  /** GET /api/v1/acl/roles/{role_id}; permission: public/session-derived. */
  aclRolesShowGet(roleId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AclRolesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}` });
  }
  /** PATCH /api/v1/acl/roles/{role_id}; permission: public/session-derived. */
  aclRolesUpdatePatch(roleId: Identifier, data: T.AclRolesUpdatePatchInput, options?: RequestOptions<T.AclRolesUpdatePatchInput>) {
    return this.client.request<T.AclRolesUpdatePatchResponse, T.AclRolesUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}`, data: data });
  }
  /** PUT /api/v1/acl/roles/{role_id}; permission: public/session-derived. */
  aclRolesUpdatePut(roleId: Identifier, data: T.AclRolesUpdatePutInput, options?: RequestOptions<T.AclRolesUpdatePutInput>) {
    return this.client.request<T.AclRolesUpdatePutResponse, T.AclRolesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/acl/roles/${encodeURIComponent(roleId)}`, data: data });
  }
  /** POST /api/v1/auth/account-login; permission: public/session-derived. */
  authLoginAccountPost(data: T.AuthLoginAccountPostInput, options?: RequestOptions<T.AuthLoginAccountPostInput>) {
    return this.client.request<T.AuthLoginAccountPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/account-login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /** POST /api/v1/auth/generate/one-time; permission: public/session-derived. */
  authGenerateOneTimeTokenRoutePost(options?: RequestOptions) {
    return this.client.request<T.AuthGenerateOneTimeTokenRoutePostResponse>({ ...options, method: "POST", url: `/api/v1/auth/generate/one-time` });
  }
  /** GET /api/v1/auth/identities; permission: public/session-derived. */
  authListLinkedIdentitiesGet(options?: RequestOptions) {
    return this.client.request<T.AuthListLinkedIdentitiesGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/identities` });
  }
  /** POST /api/v1/auth/login; permission: public/session-derived. */
  authLoginPost(data: T.AuthLoginPostInput, options?: RequestOptions<T.AuthLoginPostInput>) {
    return this.client.request<T.AuthLoginPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /** DELETE /api/v1/auth/oauth/{provider}; permission: public/session-derived. */
  authOauthUnlinkDelete(provider: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthOauthUnlinkDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/auth/oauth/${encodeURIComponent(provider)}` });
  }
  /** GET /api/v1/auth/oauth/{provider}; permission: public/session-derived. */
  authOauthStartGet(provider: Identifier, params?: T.AuthOauthStartGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthOauthStartGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/oauth/${encodeURIComponent(provider)}`, params });
  }
  /** GET /api/v1/auth/oauth/{provider}/callback; permission: public/session-derived. */
  authOauthCallbackGet(provider: Identifier, params?: T.AuthOauthCallbackGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthOauthCallbackGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/oauth/${encodeURIComponent(provider)}/callback`, params });
  }
  /** GET /api/v1/auth/oauth/providers; permission: public/session-derived. */
  authOauthProvidersGet(options?: RequestOptions) {
    return this.client.request<T.AuthOauthProvidersGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/oauth/providers` });
  }
  /** POST /api/v1/auth/otp-login; permission: public/session-derived. */
  authOtpLoginPost(data: T.AuthOtpLoginPostInput, options?: RequestOptions<T.AuthOtpLoginPostInput>) {
    return this.client.request<T.AuthOtpLoginPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/otp-login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /** GET /api/v1/auth/refresh; permission: public/session-derived. */
  authRefreshTokenGet(options?: RequestOptions) {
    return this.client.request<T.AuthRefreshTokenGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/refresh` });
  }
  /** POST /api/v1/auth/secure/generate/one-time; permission: public/session-derived. */
  authGenerateSecureOneTimeTokenRoutePost(options?: RequestOptions) {
    return this.client.request<T.AuthGenerateSecureOneTimeTokenRoutePostResponse>({ ...options, method: "POST", url: `/api/v1/auth/secure/generate/one-time` });
  }
  /** GET /api/v1/auth/token-login; permission: public/session-derived. */
  authLoginTokenGet(params?: T.AuthLoginTokenGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthLoginTokenGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/token-login`, params });
  }
  /** GET /api/v1/auth/validate; permission: public/session-derived. */
  authValidateGet(options?: RequestOptions) {
    return this.client.request<T.AuthValidateGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/validate` });
  }
  /** GET /api/v1/auth/web-login; permission: public/session-derived. */
  authLogoutGet(options?: RequestOptions) {
    return this.client.request<T.AuthLogoutGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/web-login` });
  }
  /** POST /api/v1/auth/web-login; permission: public/session-derived. */
  authLoginWebPost(data: T.AuthLoginWebPostInput, options?: RequestOptions<T.AuthLoginWebPostInput>) {
    return this.client.request<T.AuthLoginWebPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/auth/web-login`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /** GET /api/v1/integration/flow; permission: public/session-derived. */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /** GET /api/v1/settings/oauth; permission: public/session-derived. */
  settingsOauthSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.SettingsOauthSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/settings/oauth` });
  }
  /** PUT /api/v1/settings/oauth; permission: public/session-derived. */
  settingsOauthSettingsUpdatePut(data: T.SettingsOauthSettingsUpdatePutInput, options?: RequestOptions<T.SettingsOauthSettingsUpdatePutInput>) {
    return this.client.request<T.SettingsOauthSettingsUpdatePutResponse, T.SettingsOauthSettingsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/settings/oauth`, data: data });
  }
  /** GET /api/v1/users; permission: public/session-derived. */
  userUsersIndexGet(params?: T.UserUsersIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserUsersIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/users`, params });
  }
  /** POST /api/v1/users; permission: public/session-derived. */
  userUserCreatePost(data: T.UserUserCreatePostInput, options?: RequestOptions<T.UserUserCreatePostInput>) {
    return this.client.request<T.UserUserCreatePostResponse, T.UserUserCreatePostInput>({ ...options, method: "POST", url: `/api/v1/users`, data: data });
  }
  /** DELETE /api/v1/users/{user_id}; permission: public/session-derived. */
  userUserDeleteDelete(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserUserDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/users/${encodeURIComponent(userId)}` });
  }
  /** GET /api/v1/users/{user_id}; permission: public/session-derived. */
  userUserFindGet(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserUserFindGetResponse>({ ...options, method: "GET", url: `/api/v1/users/${encodeURIComponent(userId)}` });
  }
  /** PATCH /api/v1/users/{user_id}; permission: public/session-derived. */
  userUserUpdatePatch(userId: Identifier, data: T.UserUserUpdatePatchInput, options?: RequestOptions<T.UserUserUpdatePatchInput>) {
    return this.client.request<T.UserUserUpdatePatchResponse, T.UserUserUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}`, data: data });
  }
  /** PUT /api/v1/users/{user_id}; permission: public/session-derived. */
  userUserUpdatePut(userId: Identifier, data: T.UserUserUpdatePutInput, options?: RequestOptions<T.UserUserUpdatePutInput>) {
    return this.client.request<T.UserUserUpdatePutResponse, T.UserUserUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}`, data: data });
  }
  /** PATCH /api/v1/users/{user_id}/change-password; permission: public/session-derived. */
  userChangePasswordPatch(userId: Identifier, data: T.UserChangePasswordPatchInput, options?: RequestOptions<T.UserChangePasswordPatchInput>) {
    return this.client.request<T.UserChangePasswordPatchResponse, T.UserChangePasswordPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}/change-password`, data: data });
  }
  /** PUT /api/v1/users/{user_id}/change-password; permission: public/session-derived. */
  userChangePasswordPut(userId: Identifier, data: T.UserChangePasswordPutInput, options?: RequestOptions<T.UserChangePasswordPutInput>) {
    return this.client.request<T.UserChangePasswordPutResponse, T.UserChangePasswordPutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}/change-password`, data: data });
  }
  /** PATCH /api/v1/users/{user_id}/change-roles; permission: public/session-derived. */
  userChangeRolesPatch(userId: Identifier, data: T.UserChangeRolesPatchInput, options?: RequestOptions<T.UserChangeRolesPatchInput>) {
    return this.client.request<T.UserChangeRolesPatchResponse, T.UserChangeRolesPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}/change-roles`, data: data });
  }
  /** PUT /api/v1/users/{user_id}/change-roles; permission: public/session-derived. */
  userChangeRolesPut(userId: Identifier, data: T.UserChangeRolesPutInput, options?: RequestOptions<T.UserChangeRolesPutInput>) {
    return this.client.request<T.UserChangeRolesPutResponse, T.UserChangeRolesPutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}/change-roles`, data: data });
  }
  /** GET /api/v1/users/{user_id}/logout; permission: public/session-derived. */
  userUserLogoutGet(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserUserLogoutGetResponse>({ ...options, method: "GET", url: `/api/v1/users/${encodeURIComponent(userId)}/logout` });
  }
  /** PATCH /api/v1/users/{user_id}/status; permission: public/session-derived. */
  userUserSetStatusPatch(userId: Identifier, data: T.UserUserSetStatusPatchInput, options?: RequestOptions<T.UserUserSetStatusPatchInput>) {
    return this.client.request<T.UserUserSetStatusPatchResponse, T.UserUserSetStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/users/${encodeURIComponent(userId)}/status`, data: data });
  }
  /** PUT /api/v1/users/{user_id}/status; permission: public/session-derived. */
  userUserSetStatusPut(userId: Identifier, data: T.UserUserSetStatusPutInput, options?: RequestOptions<T.UserUserSetStatusPutInput>) {
    return this.client.request<T.UserUserSetStatusPutResponse, T.UserUserSetStatusPutInput>({ ...options, method: "PUT", url: `/api/v1/users/${encodeURIComponent(userId)}/status`, data: data });
  }
  /** POST /api/v1/users/register; permission: public/session-derived. */
  userRegisterPost(data: T.UserRegisterPostInput, options?: RequestOptions<T.UserRegisterPostInput>) {
    return this.client.request<T.UserRegisterPostResponse, T.UserRegisterPostInput>({ ...options, method: "POST", url: `/api/v1/users/register`, data: data });
  }
  /** POST /api/v1/users/register-email; permission: public/session-derived. */
  userRegisterWithEmailPost(data: T.UserRegisterWithEmailPostInput, options?: RequestOptions<T.UserRegisterWithEmailPostInput>) {
    return this.client.request<T.UserRegisterWithEmailPostResponse, T.UserRegisterWithEmailPostInput>({ ...options, method: "POST", url: `/api/v1/users/register-email`, data: data });
  }
  /** POST /api/v1/users/register-phone; permission: public/session-derived. */
  userRegisterWithPhonePost(data: T.UserRegisterWithPhonePostInput, options?: RequestOptions<T.UserRegisterWithPhonePostInput>) {
    return this.client.request<T.UserRegisterWithPhonePostResponse, T.UserRegisterWithPhonePostInput>({ ...options, method: "POST", url: `/api/v1/users/register-phone`, data: data });
  }
  /** GET /api/v1/users/self; permission: public/session-derived. */
  userUserFindSelfGet(options?: RequestOptions) {
    return this.client.request<T.UserUserFindSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/users/self` });
  }
  /** GET /api/v1/users/stats; permission: public/session-derived. */
  userUsersStatsGet(options?: RequestOptions) {
    return this.client.request<T.UserUsersStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/users/stats` });
  }
  /** GET /api/v1/users/sync; permission: public/session-derived. */
  userSyncUsersGet(options?: RequestOptions) {
    return this.client.request<T.UserSyncUsersGetResponse>({ ...options, method: "GET", url: `/api/v1/users/sync` });
  }
}

