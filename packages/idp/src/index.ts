import { IdpRoleResource, IdpUserResource } from "./resources.js";
import { membershipRevisionOptions, type AddUserRoleMemberships, type AddUserRoleMembershipsResponse, type UserRoleMembershipSnapshotResponse } from "./memberships.js";
import type { IdpEmptyResponse } from "./contracts.types.js";
import type { RegistrationResponse } from "./types.js";
import { IdpAuthorityApi } from "./authority.js";
import { RestResource, ServiceApi, urlEncoded, type Identifier, type RequestOptions, } from "@faiber/sdk-core";
import type { AccountLoginInput, AuthTokensResponse, ChangePasswordInput, ChangeRolesInput, LinkedFaiberBillingQuery, LinkedFaiberBillingResponse, LinkedFaiberTopUpInput, LinkedFaiberTopUpResponse, LinkedIdentityListResponse, LoginInput, LogoutUserResponse, OAuthProviderListResponse, OtpLoginInput, Permission, PermissionListResponse, PermissionResponse, RegisterUserInput, SessionListResponse, SetUserStatusInput, UpdateUserInput, UserResponse, UserSelfResponse, ValidateSessionResponse, WebLoginInput, } from "./types.js";
import { IdpOperations } from "./operations.js";
export class IdpApi extends ServiceApi {
    readonly authority = new IdpAuthorityApi(this.client);
    readonly operations = new IdpOperations(this.client);
    readonly users = new IdpUserResource(this.client);
    readonly roles = new IdpRoleResource(this.client);
    readonly permissions = new RestResource<Permission, never, never, PermissionListResponse, PermissionResponse>(this.client, "/api/v1/acl/permissions", { supported: ["list"] });
    /**
     * Exchange a password with grant_type=password and the configured legacy client secret for a token envelope. Disabled principal, client or session cannot receive tokens.
     * Authorization: local identity authority plus registered legacy client_id/client_secret and user credentials.
     * @param data Named request body with the native wire fields.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    login(data: LoginInput, options?: RequestOptions<URLSearchParams>) {
        return this.client.post<AuthTokensResponse, URLSearchParams>("/api/v1/auth/login", urlEncoded(data), { ...options, headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
    }
    /**
     * Authenticate a legacy client password form and set secure session cookies. Returns only status/message; does not return tokens in the body.
     * Authorization: local identity authority plus registered legacy client_id/client_secret and user credentials.
     * @param data Named request body with the native wire fields.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    webLogin(data: WebLoginInput, options?: RequestOptions<URLSearchParams>) {
        return this.client.post<IdpEmptyResponse, URLSearchParams>("/api/v1/auth/web-login", urlEncoded(data), { ...options, headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
    }
    /**
     * Exchange the current parent session for child-account tokens after checking Profile parent ownership. account is the child native user UUID; returns a token envelope, not a cookie-only body.
     * Authorization: current active Bearer or secure cookie session; no additional ACL permission.
     * @param data Named request body with the native wire fields.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    accountLogin(data: AccountLoginInput, options?: RequestOptions<URLSearchParams>) {
        return this.client.post<AuthTokensResponse, URLSearchParams>("/api/v1/auth/account-login", urlEncoded(data), { ...options, headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
    }
    /**
     * Exchange grant_type=password plus otp_code and the configured legacy client secret. Returns a token envelope and sets session cookies; OTP and local-authority checks apply.
     * Authorization: local identity authority plus registered legacy client_id/client_secret and user credentials.
     * @param data Named request body with the native wire fields.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    otpLogin(data: OtpLoginInput, options?: RequestOptions<URLSearchParams>) {
        return this.client.post<AuthTokensResponse, URLSearchParams>("/api/v1/auth/otp-login", urlEncoded(data), { ...options, headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
    }
    /**
     * Validate forward-auth and emit principal/permission response headers with a status/message JSON body. Preflight bypasses authentication; HTML unauthenticated requests may redirect. Original method/URI, service and required-role headers affect policy.
     * Authorization: current Bearer/cookie session and forward-auth policy; OPTIONS/preflight returns success without authentication.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    validate(options?: RequestOptions) {
        return this.client.get<ValidateSessionResponse>("/api/v1/auth/validate", undefined, options);
    }
    /**
     * Refresh from the private refresh cookie when present, otherwise from a Bearer refresh credential. Returns a token envelope; cookie refresh preserves its original refresh deadline while token refresh revokes the old credential.
     * Authorization: valid active refresh cookie or Bearer refresh token; access token is not a refresh credential.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    refresh(options?: RequestOptions) {
        return this.client.get<AuthTokensResponse>("/api/v1/auth/refresh", undefined, options);
    }
    /**
     * Revoke the current session and tokens, attempt back-channel logout and remove the current cookies. Returns only status/message; missing session returns 401.
     * Authorization: current active Bearer or secure cookie session; no additional ACL permission.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    logout(options?: RequestOptions) {
        return this.client.get<IdpEmptyResponse>("/api/v1/auth/logout", undefined, options);
    }
    /**
     * List active sessions for the current user, including client and device metadata and is_current. Nullable metadata fields remain present as null.
     * Authorization: current active Bearer or secure cookie session; no additional ACL permission.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    sessions(options?: RequestOptions) {
        return this.client.get<SessionListResponse>("/api/v1/auth/sessions", undefined, options);
    }
    /**
     * Revoke another active session owned by the current user. Unknown/unowned sessions return 404 and the current session returns 409; use logout to end the current session.
     * Authorization: current active Bearer or secure cookie session; no additional ACL permission.
     * @param sessionId Owned active session UUID.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    revokeSession(sessionId: Identifier, options?: RequestOptions) {
        return this.client.delete<IdpEmptyResponse>(`/api/v1/auth/sessions/${encodeURIComponent(sessionId)}`, options);
    }
    /**
     * Read the authenticated identity and current roles/permissions directly in data; no data.user wrapper.
     * Authorization: current active Bearer/cookie session.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    self(options?: RequestOptions) {
        return this.client.get<UserSelfResponse>("/api/v1/users/self", undefined, options);
    }
    /**
     * List enabled built-in provider names in data.providers; does not return an array of provider objects.
     * Authorization: public provider-discovery handler.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    providers(options?: RequestOptions) {
        return this.client.get<OAuthProviderListResponse>("/api/v1/auth/oauth/providers", undefined, options);
    }
    /**
     * List provider subjects linked to the current user, including built-in identities and active custom-provider identities. Returns data.identities.
     * Authorization: current active Bearer or secure cookie session; no additional ACL permission.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    linkedIdentities(options?: RequestOptions) {
        return this.client.get<LinkedIdentityListResponse>("/api/v1/auth/identities", undefined, options);
    }
    /**
     * Read the linked main-Faiber wallet and daily costs. page defaults to 1, page_size to 14 (1–100), timezone to 0 (±840 minutes). Optional project slug uses alphanumeric/hyphen characters; downstream failures return 502.
     * Authorization: current active Bearer or secure cookie session; no additional ACL permission.
     * @param params Native billing filters and bounded pagination.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    linkedFaiberBilling(params?: LinkedFaiberBillingQuery, options?: RequestOptions) {
        return this.client.get<LinkedFaiberBillingResponse>("/api/v1/auth/linked-faiber/billing", params, options);
    }
    /**
     * Create a positive top-up against the linked main-Faiber wallet; returns purchase_id and payment_url. Non-positive amount returns 422; upstream rejection becomes 502.
     * Authorization: current active Bearer or secure cookie session; no additional ACL permission.
     * @param data Named request body with the native wire fields.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    topUpLinkedFaiberWallet(data: LinkedFaiberTopUpInput, options?: RequestOptions<LinkedFaiberTopUpInput>) {
        return this.client.post<LinkedFaiberTopUpResponse, LinkedFaiberTopUpInput>("/api/v1/auth/linked-faiber/wallet/topup", data, options);
    }
    /**
     * Resolve or create an identity by supplied identifiers. Public role/roles assignment is forbidden (403); returns data.user containing only user_id and created, not a managed user resource.
     * Authorization: public local-authority registration bootstrap; cannot assign roles.
     * @param data Named request body with the native wire fields.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    register(data: RegisterUserInput, options?: RequestOptions<RegisterUserInput>) {
        return this.client.post<RegistrationResponse, RegisterUserInput>("/api/v1/users/register", data, options);
    }
    /**
     * Replace phone, email and national_code using PATCH or PUT. Omitted/null/empty fields are cleared by this backend, so supply every identity value to retain. Validates and publishes Profile/LMS updates; returns data.user.
     * Authorization: current idp:user:update through the native active principal/session.
     * @param userId Native identity user UUID.
     * @param data Named request body with the native wire fields.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    updateUser(userId: Identifier, data: UpdateUserInput, options?: RequestOptions<UpdateUserInput>) {
        return this.client.patch<UserResponse, UpdateUserInput>(`/api/v1/users/${encodeURIComponent(userId)}`, data, options);
    }
    /**
     * Set an administrative target password of at least 8 characters. When password is supplied, this legacy handler deletes all local identity rows before creating the password identity; use self/password for preservation. Returns data.user.
     * Authorization: current idp:user:change_password through the native active principal/session.
     * @param userId Native identity user UUID.
     * @param data Named request body with the native wire fields.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    changePassword(userId: Identifier, data: ChangePasswordInput, options?: RequestOptions<ChangePasswordInput>) {
        return this.client.patch<UserResponse, ChangePasswordInput>(`/api/v1/users/${encodeURIComponent(userId)}/change-password`, data, options);
    }
    /**
     * Intentionally replace target memberships with reviewed role UUIDs and quoted If-Match revision. Missing precondition is 428; stale revision is 409 with zero changes. Never fetch a fresh revision to submit a saved stale union. Missing/null roles is a no-op.
     * Authorization: current idp:acl:update, rechecked after target user lock; target must already be active when roles are supplied.
     * @param userId Native identity user UUID.
     * @param data Named request body with the native wire fields.
     * @param membershipRevision Exact opaque revision captured by the caller for this reviewed replacement.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    changeRoles(userId: Identifier, data: ChangeRolesInput, membershipRevision: string, options?: RequestOptions<ChangeRolesInput>) {
        return this.client.patch<UserResponse, ChangeRolesInput>(`/api/v1/users/${encodeURIComponent(userId)}/change-roles`, data, membershipRevisionOptions(membershipRevision, options));
    }
    /**
     * Read every stored local role membership row, including inactive and duplicate rows, with an opaque revision. Does not activate the target or grant authority.
     * Authorization: current idp:acl:read, rechecked after target user lock.
     * @param userId Native identity user UUID.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    roleMemberships(userId: Identifier, options?: RequestOptions) {
        return this.client.get<UserRoleMembershipSnapshotResponse>(`/api/v1/users/${encodeURIComponent(userId)}/role-memberships`, undefined, options);
    }
    /**
     * Append 1–128 unique non-nil active local role UUIDs to an already enabled local user. Preserves every existing membership; repeated active additions are no-ops. Rechecks authority under the target lock.
     * Authorization: both current idp:acl:read and idp:acl:update, rechecked after target user lock.
     * @param userId Native identity user UUID.
     * @param data Named request body with the native wire fields.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    addRoleMemberships(userId: Identifier, data: AddUserRoleMemberships, options?: RequestOptions<AddUserRoleMemberships>) {
        return this.client.post<AddUserRoleMembershipsResponse, AddUserRoleMemberships>(`/api/v1/users/${encodeURIComponent(userId)}/role-memberships`, data, options);
    }
    /**
     * Enable or disable a target account. Cannot disable self (406); disabling revokes current tokens/sessions before external publication and re-enabling does not restore credentials. Returns data.user.
     * Authorization: current idp:user:update through the native active principal/session.
     * @param userId Native identity user UUID.
     * @param data Named request body with the native wire fields.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    setStatus(userId: Identifier, data: SetUserStatusInput, options?: RequestOptions<SetUserStatusInput>) {
        return this.client.patch<UserResponse, SetUserStatusInput>(`/api/v1/users/${encodeURIComponent(userId)}/status`, data, options);
    }
    /**
     * Force-revoke all target user sessions and attempt back-channel logout propagation; returns the updated data.user with active-session count.
     * Authorization: current idp:user:logout through the native active principal/session.
     * @param userId Native identity user UUID.
     * @param options Authentication, cancellation, timeout, headers and Axios request options.
     * @returns Complete Axios response preserving the native body, status and headers.
     * @throws AxiosError for native validation, authorization, conflict, not-found or transport failures.
     */
    logoutUser(userId: Identifier, options?: RequestOptions) {
        return this.client.get<LogoutUserResponse>(`/api/v1/users/${encodeURIComponent(userId)}/logout`, undefined, options);
    }
}
export * from "@faiber/sdk-core";
export * from "./types.js";
export * from "./operations.js";
export * from "./operations.types.js";

export * from "./contracts.types.js";

export * from "./authority.js";

export * from "./memberships.js";

export * from "./resources.js";
