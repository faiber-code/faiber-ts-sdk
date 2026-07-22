import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: response without a declared JSON model. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: PermissionListResponse. */
export interface AclPermissionsIndexGetResponseData extends JsonObject {
  "permissions": JsonValue[];
  "services": string[];
}
export interface AclPermissionsIndexGetResponse extends ApiEnvelope<AclPermissionsIndexGetResponseData> {
}

/** Backend response type: RoleListResponse. */
export interface AclRolesIndexGetResponseData extends JsonObject {
  "roles": JsonValue[];
}
export interface AclRolesIndexGetResponse extends ApiEnvelope<AclRolesIndexGetResponseData> {
}

/** Backend request type: CreateRole. */
export interface AclRolesCreatePostInput extends JsonObject {
  "name": string;
  "permissions": string[];
}
/** Backend response type: RoleSingleResponse. */
export interface AclRolesCreatePostResponseData extends JsonObject {
  "role": JsonValue;
}
export interface AclRolesCreatePostResponse extends ApiEnvelope<AclRolesCreatePostResponseData> {
}

/** Backend response type: RoleResponse. */
export interface AclRolesDeleteDeleteResponseData extends JsonObject {
  "id": string;
  "name": string;
}
export interface AclRolesDeleteDeleteResponse extends ApiEnvelope<AclRolesDeleteDeleteResponseData> {
}

/** Backend response type: RoleSingleResponse. */
export interface AclRolesShowGetResponseData extends JsonObject {
  "role": JsonValue;
}
export interface AclRolesShowGetResponse extends ApiEnvelope<AclRolesShowGetResponseData> {
}

/** Backend request type: UpdateRole. */
export interface AclRolesUpdatePatchInput extends JsonObject {
  "permissions": string[];
}
/** Backend response type: RoleSingleResponse. */
export interface AclRolesUpdatePatchResponseData extends JsonObject {
  "role": JsonValue;
}
export interface AclRolesUpdatePatchResponse extends ApiEnvelope<AclRolesUpdatePatchResponseData> {
}

/** Backend request type: UpdateRole. */
export interface AclRolesUpdatePutInput extends JsonObject {
  "permissions": string[];
}
/** Backend response type: RoleSingleResponse. */
export interface AclRolesUpdatePutResponseData extends JsonObject {
  "role": JsonValue;
}
export interface AclRolesUpdatePutResponse extends ApiEnvelope<AclRolesUpdatePutResponseData> {
}

/** Backend request type: AccountTokenRequest. */
export interface AuthLoginAccountPostInput extends JsonObject {
  "account": string;
  "device_id"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface AuthLoginAccountPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface AuthGenerateOneTimeTokenRoutePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: LinkedIdentitiesResponse. */
export interface AuthListLinkedIdentitiesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: PasswordTokenRequest. */
export interface AuthLoginPostInput extends JsonObject {
  "grant_type": string;
  "username": string;
  "password": string;
  "client_id": string;
  "client_secret": string;
  "device_id"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface AuthLoginPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface AuthOauthUnlinkDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: OAuthStartQuery. */
export interface AuthOauthStartGetQuery extends QueryParams {
  "redirect"?: string;
  "intent"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface AuthOauthStartGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: OAuthCallbackQuery. */
export interface AuthOauthCallbackGetQuery extends QueryParams {
  "code"?: string;
  "state"?: string;
  "error"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface AuthOauthCallbackGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: OAuthProvidersPublicResponse. */
export interface AuthOauthProvidersGetResponseData extends JsonObject {
  "providers": string[];
}
export interface AuthOauthProvidersGetResponse extends ApiEnvelope<AuthOauthProvidersGetResponseData> {
}

/** Backend request type: OTPTokenRequest. */
export interface AuthOtpLoginPostInput extends JsonObject {
  "grant_type": string;
  "username": string;
  "otp_code": string;
  "client_id": string;
  "client_secret": string;
  "device_id"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface AuthOtpLoginPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface AuthRefreshTokenGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface AuthGenerateSecureOneTimeTokenRoutePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: TokenQuery. */
export interface AuthLoginTokenGetQuery extends QueryParams {
  "token": string;
  "redirect": string;
}
/** Backend response type: response without a declared JSON model. */
export interface AuthLoginTokenGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface AuthValidateGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface AuthLogoutGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: PasswordTokenRequest. */
export interface AuthLoginWebPostInput extends JsonObject {
  "grant_type": string;
  "username": string;
  "password": string;
  "client_id": string;
  "client_secret": string;
  "device_id"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface AuthLoginWebPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: OAuthSettingsResponse. */
export interface SettingsOauthSettingsShowGetResponseData extends JsonObject {
  "google": JsonValue;
  "github": JsonValue;
}
export interface SettingsOauthSettingsShowGetResponse extends ApiEnvelope<SettingsOauthSettingsShowGetResponseData> {
}

/** Backend request type: UpdateOAuthSettings. */
export interface SettingsOauthSettingsUpdatePutInput extends JsonObject {
  "google": JsonValue;
  "github": JsonValue;
}
/** Backend response type: OAuthSettingsResponse. */
export interface SettingsOauthSettingsUpdatePutResponseData extends JsonObject {
  "google": JsonValue;
  "github": JsonValue;
}
export interface SettingsOauthSettingsUpdatePutResponse extends ApiEnvelope<SettingsOauthSettingsUpdatePutResponseData> {
}

/** Backend query type: UsersQuery. */
export interface UserUsersIndexGetQuery extends QueryParams {
  "search"?: string;
  "status"?: string;
  "role_id"?: string;
  "page"?: number;
  "per_page"?: number;
}
/** Backend response type: UserListResponse. */
export interface UserUsersIndexGetResponseData extends JsonObject {
  "users": JsonValue[];
  "total": number;
  "page": number;
  "per_page": number;
}
export interface UserUsersIndexGetResponse extends ApiEnvelope<UserUsersIndexGetResponseData> {
}

/** Backend request type: CreateUser. */
export interface UserUserCreatePostInput extends JsonObject {
  "phone"?: string;
  "email"?: string;
  "national_code"?: string;
  "password"?: string;
  "roles": string[];
}
/** Backend response type: UserResponse. */
export interface UserUserCreatePostResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserUserCreatePostResponse extends ApiEnvelope<UserUserCreatePostResponseData> {
}

/** Backend response type: UserResponse. */
export interface UserUserDeleteDeleteResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserUserDeleteDeleteResponse extends ApiEnvelope<UserUserDeleteDeleteResponseData> {
}

/** Backend response type: UserResponse. */
export interface UserUserFindGetResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserUserFindGetResponse extends ApiEnvelope<UserUserFindGetResponseData> {
}

/** Backend request type: UpdateUser. */
export interface UserUserUpdatePatchInput extends JsonObject {
  "phone"?: string;
  "email"?: string;
  "national_code"?: string;
}
/** Backend response type: UserResponse. */
export interface UserUserUpdatePatchResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserUserUpdatePatchResponse extends ApiEnvelope<UserUserUpdatePatchResponseData> {
}

/** Backend request type: UpdateUser. */
export interface UserUserUpdatePutInput extends JsonObject {
  "phone"?: string;
  "email"?: string;
  "national_code"?: string;
}
/** Backend response type: UserResponse. */
export interface UserUserUpdatePutResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserUserUpdatePutResponse extends ApiEnvelope<UserUserUpdatePutResponseData> {
}

/** Backend request type: UpdateUserPassword. */
export interface UserChangePasswordPatchInput extends JsonObject {
  "password"?: string;
}
/** Backend response type: UserResponse. */
export interface UserChangePasswordPatchResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserChangePasswordPatchResponse extends ApiEnvelope<UserChangePasswordPatchResponseData> {
}

/** Backend request type: UpdateUserPassword. */
export interface UserChangePasswordPutInput extends JsonObject {
  "password"?: string;
}
/** Backend response type: UserResponse. */
export interface UserChangePasswordPutResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserChangePasswordPutResponse extends ApiEnvelope<UserChangePasswordPutResponseData> {
}

/** Backend request type: UpdateUserRoles. */
export interface UserChangeRolesPatchInput extends JsonObject {
  "roles"?: string[];
}
/** Backend response type: UserResponse. */
export interface UserChangeRolesPatchResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserChangeRolesPatchResponse extends ApiEnvelope<UserChangeRolesPatchResponseData> {
}

/** Backend request type: UpdateUserRoles. */
export interface UserChangeRolesPutInput extends JsonObject {
  "roles"?: string[];
}
/** Backend response type: UserResponse. */
export interface UserChangeRolesPutResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserChangeRolesPutResponse extends ApiEnvelope<UserChangeRolesPutResponseData> {
}

/** Backend response type: UserResponse. */
export interface UserUserLogoutGetResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserUserLogoutGetResponse extends ApiEnvelope<UserUserLogoutGetResponseData> {
}

/** Backend request type: UpdateUserStatus. */
export interface UserUserSetStatusPatchInput extends JsonObject {
  "enabled": boolean;
}
/** Backend response type: UserResponse. */
export interface UserUserSetStatusPatchResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserUserSetStatusPatchResponse extends ApiEnvelope<UserUserSetStatusPatchResponseData> {
}

/** Backend request type: UpdateUserStatus. */
export interface UserUserSetStatusPutInput extends JsonObject {
  "enabled": boolean;
}
/** Backend response type: UserResponse. */
export interface UserUserSetStatusPutResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserUserSetStatusPutResponse extends ApiEnvelope<UserUserSetStatusPutResponseData> {
}

/** Backend request type: FullRegister. */
export interface UserRegisterPostInput extends JsonObject {
  "phone"?: string;
  "email"?: string;
  "national_code"?: string;
  "role"?: string;
  "roles"?: string[];
}
/** Backend response type: FindUserResponse. */
export interface UserRegisterPostResponseData extends JsonObject {
  "user": JsonValue;
}
export interface UserRegisterPostResponse extends ApiEnvelope<UserRegisterPostResponseData> {
}

/** Backend request type: EmailRegister. */
export interface UserRegisterWithEmailPostInput extends JsonObject {
  "email": string;
}
/** Backend response type: RegisterResponse. */
export interface UserRegisterWithEmailPostResponseData extends JsonObject {
  "user_id": string;
  "otp_sent": JsonValue;
}
export interface UserRegisterWithEmailPostResponse extends ApiEnvelope<UserRegisterWithEmailPostResponseData> {
}

/** Backend request type: PhoneRegister. */
export interface UserRegisterWithPhonePostInput extends JsonObject {
  "phone": string;
  "role"?: string;
  "roles"?: string[];
}
/** Backend response type: RegisterResponse. */
export interface UserRegisterWithPhonePostResponseData extends JsonObject {
  "user_id": string;
  "otp_sent": JsonValue;
}
export interface UserRegisterWithPhonePostResponse extends ApiEnvelope<UserRegisterWithPhonePostResponseData> {
}

/** Backend response type: UserSelfResponse. */
export interface UserUserFindSelfGetResponseData extends JsonObject {
  "id": string;
  "phone"?: string;
  "email"?: string;
  "national_code"?: string;
  "status": number;
  "roles": JsonValue[];
  "permissions": JsonValue[];
}
export interface UserUserFindSelfGetResponse extends ApiEnvelope<UserUserFindSelfGetResponseData> {
}

/** Backend response type: UserStatsResponse. */
export interface UserUsersStatsGetResponseData extends JsonObject {
  "users_count": number;
  "active_users_count": number;
  "active_sessions_count": number;
}
export interface UserUsersStatsGetResponse extends ApiEnvelope<UserUsersStatsGetResponseData> {
}

/** Backend response type: bool. */
export interface UserSyncUsersGetResponse extends ApiEnvelope<boolean> {
}

