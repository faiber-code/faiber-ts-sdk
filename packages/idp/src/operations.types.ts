import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: handler-defined response. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: PermissionListResponse. */
export interface AclPermissionsIndexGetResponseDataPermissions extends JsonObject {
  "id": string;
  "name": string;
}
export interface AclPermissionsIndexGetResponseData extends JsonObject {
  "permissions": AclPermissionsIndexGetResponseDataPermissions[];
  "services": string[];
}
export interface AclPermissionsIndexGetResponse extends ApiEnvelope<AclPermissionsIndexGetResponseData> {
}

/** Backend response type: RoleListResponse. */
export interface AclRolesIndexGetResponseDataRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface AclRolesIndexGetResponseData extends JsonObject {
  "roles": AclRolesIndexGetResponseDataRoles[];
}
export interface AclRolesIndexGetResponse extends ApiEnvelope<AclRolesIndexGetResponseData> {
}

/** Backend request type: CreateRole. */
export interface AclRolesCreatePostInput extends JsonObject {
  "name": string;
  "permissions"?: string[];
}
/** Backend response type: RoleSingleResponse. */
export interface AclRolesCreatePostResponseDataRolePermissions extends JsonObject {
  "id": string;
  "name": string;
}
export interface AclRolesCreatePostResponseDataRole extends JsonObject {
  "id": string;
  "name": string;
  "permissions": AclRolesCreatePostResponseDataRolePermissions[];
}
export interface AclRolesCreatePostResponseData extends JsonObject {
  "role": AclRolesCreatePostResponseDataRole;
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
export interface AclRolesShowGetResponseDataRolePermissions extends JsonObject {
  "id": string;
  "name": string;
}
export interface AclRolesShowGetResponseDataRole extends JsonObject {
  "id": string;
  "name": string;
  "permissions": AclRolesShowGetResponseDataRolePermissions[];
}
export interface AclRolesShowGetResponseData extends JsonObject {
  "role": AclRolesShowGetResponseDataRole;
}
export interface AclRolesShowGetResponse extends ApiEnvelope<AclRolesShowGetResponseData> {
}

/** Backend request type: UpdateRole. */
export interface AclRolesUpdatePatchInput extends JsonObject {
  "permissions": string[];
}
/** Backend response type: RoleSingleResponse. */
export interface AclRolesUpdatePatchResponseDataRolePermissions extends JsonObject {
  "id": string;
  "name": string;
}
export interface AclRolesUpdatePatchResponseDataRole extends JsonObject {
  "id": string;
  "name": string;
  "permissions": AclRolesUpdatePatchResponseDataRolePermissions[];
}
export interface AclRolesUpdatePatchResponseData extends JsonObject {
  "role": AclRolesUpdatePatchResponseDataRole;
}
export interface AclRolesUpdatePatchResponse extends ApiEnvelope<AclRolesUpdatePatchResponseData> {
}

/** Backend request type: UpdateRole. */
export interface AclRolesUpdatePutInput extends JsonObject {
  "permissions": string[];
}
/** Backend response type: RoleSingleResponse. */
export interface AclRolesUpdatePutResponseDataRolePermissions extends JsonObject {
  "id": string;
  "name": string;
}
export interface AclRolesUpdatePutResponseDataRole extends JsonObject {
  "id": string;
  "name": string;
  "permissions": AclRolesUpdatePutResponseDataRolePermissions[];
}
export interface AclRolesUpdatePutResponseData extends JsonObject {
  "role": AclRolesUpdatePutResponseDataRole;
}
export interface AclRolesUpdatePutResponse extends ApiEnvelope<AclRolesUpdatePutResponseData> {
}

/** Backend request type: AccountTokenRequest. */
export interface AuthLoginAccountPostInput extends JsonObject {
  "account": string;
  "device_id"?: string | null;
}
/** Backend response type: handler-defined response. */
export interface AuthLoginAccountPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface AuthGenerateOneTimeTokenRoutePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: LinkedIdentitiesResponse. */
export interface AuthListLinkedIdentitiesGetResponseDataIdentities extends JsonObject {
  "provider": string;
  "provider_id": string;
  "linked_at": string;
}
export interface AuthListLinkedIdentitiesGetResponseData extends JsonObject {
  "identities": AuthListLinkedIdentitiesGetResponseDataIdentities[];
}
export interface AuthListLinkedIdentitiesGetResponse extends ApiEnvelope<AuthListLinkedIdentitiesGetResponseData> {
}

/** Backend request type: PasswordTokenRequest. */
export interface AuthLoginPostInput extends JsonObject {
  "grant_type": string;
  "username": string;
  "password": string;
  "client_id": string;
  "client_secret": string;
  "device_id"?: string | null;
}
/** Backend response type: handler-defined response. */
export interface AuthLoginPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface AuthLogoutGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface AuthAuthorizeGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface AuthTokenPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface AuthOauthUnlinkDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: OAuthStartQuery. */
export interface AuthOauthStartGetQuery extends QueryParams {
  "redirect"?: string | null;
  "intent"?: string | null;
}
/** Backend response type: handler-defined response. */
export interface AuthOauthStartGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: OAuthCallbackQuery. */
export interface AuthOauthCallbackGetQuery extends QueryParams {
  "code"?: string | null;
  "state"?: string | null;
  "error"?: string | null;
}
/** Backend response type: handler-defined response. */
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
  "device_id"?: string | null;
}
/** Backend response type: handler-defined response. */
export interface AuthOtpLoginPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface AuthRefreshTokenGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface AuthGenerateSecureOneTimeTokenRoutePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<SessionResponse>. */
export interface AuthListSessionsGetResponseItemClient extends JsonObject {
  "id": string;
  "name": string;
}
export interface AuthListSessionsGetResponseItem extends JsonObject {
  "id": string;
  "client": AuthListSessionsGetResponseItemClient;
  "browser": string;
  "operating_system": string;
  "device_id"?: string | null;
  "user_agent"?: string | null;
  "ip_address"?: string | null;
  "ip_address_v6"?: string | null;
  "created_at": string;
  "last_accessed"?: string | null;
  "is_current": boolean;
}
export interface AuthListSessionsGetResponse extends ApiEnvelope<AuthListSessionsGetResponseItem[]> {
}

/** Backend response type: handler-defined response. */
export interface AuthDeleteSessionDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: TokenQuery. */
export interface AuthLoginTokenGetQuery extends QueryParams {
  "token": string;
  "redirect": string;
}
/** Backend response type: handler-defined response. */
export interface AuthLoginTokenGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface AuthValidateGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: PasswordTokenRequest. */
export interface AuthLoginWebPostInput extends JsonObject {
  "grant_type": string;
  "username": string;
  "password": string;
  "client_id": string;
  "client_secret": string;
  "device_id"?: string | null;
}
/** Backend response type: handler-defined response. */
export interface AuthLoginWebPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: OAuthSettingsResponse. */
export interface SettingsOauthSettingsShowGetResponseDataGoogle extends JsonObject {
  "client_id": string;
  "has_secret": boolean;
  "scope"?: string | null;
}
export interface SettingsOauthSettingsShowGetResponseDataGithub extends JsonObject {
  "client_id": string;
  "has_secret": boolean;
  "scope"?: string | null;
}
export interface SettingsOauthSettingsShowGetResponseData extends JsonObject {
  "google": SettingsOauthSettingsShowGetResponseDataGoogle;
  "github": SettingsOauthSettingsShowGetResponseDataGithub;
}
export interface SettingsOauthSettingsShowGetResponse extends ApiEnvelope<SettingsOauthSettingsShowGetResponseData> {
}

/** Backend request type: UpdateOAuthSettings. */
export interface SettingsOauthSettingsUpdatePutInputGoogle extends JsonObject {
  "client_id": string;
  "client_secret"?: string | null;
  "scope"?: string | null;
}
export interface SettingsOauthSettingsUpdatePutInputGithub extends JsonObject {
  "client_id": string;
  "client_secret"?: string | null;
  "scope"?: string | null;
}
export interface SettingsOauthSettingsUpdatePutInput extends JsonObject {
  "google": SettingsOauthSettingsUpdatePutInputGoogle;
  "github": SettingsOauthSettingsUpdatePutInputGithub;
}
/** Backend response type: OAuthSettingsResponse. */
export interface SettingsOauthSettingsUpdatePutResponseDataGoogle extends JsonObject {
  "client_id": string;
  "has_secret": boolean;
  "scope"?: string | null;
}
export interface SettingsOauthSettingsUpdatePutResponseDataGithub extends JsonObject {
  "client_id": string;
  "has_secret": boolean;
  "scope"?: string | null;
}
export interface SettingsOauthSettingsUpdatePutResponseData extends JsonObject {
  "google": SettingsOauthSettingsUpdatePutResponseDataGoogle;
  "github": SettingsOauthSettingsUpdatePutResponseDataGithub;
}
export interface SettingsOauthSettingsUpdatePutResponse extends ApiEnvelope<SettingsOauthSettingsUpdatePutResponseData> {
}

/** Backend query type: UsersQuery. */
export interface UserUsersIndexGetQuery extends QueryParams {
  "search"?: string | null;
  "status"?: string | null;
  "role_id"?: string | null;
  "page"?: number | null;
  "per_page"?: number | null;
}
/** Backend response type: UserListResponse. */
export interface UserUsersIndexGetResponseDataUsersRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUsersIndexGetResponseDataUsers extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserUsersIndexGetResponseDataUsersRoles[];
}
export interface UserUsersIndexGetResponseData extends JsonObject {
  "users": UserUsersIndexGetResponseDataUsers[];
  "total": number;
  "page": number;
  "per_page": number;
}
export interface UserUsersIndexGetResponse extends ApiEnvelope<UserUsersIndexGetResponseData> {
}

/** Backend request type: CreateUser. */
export interface UserUserCreatePostInput extends JsonObject {
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "password"?: string | null;
  "roles"?: string[];
}
/** Backend response type: UserResponse. */
export interface UserUserCreatePostResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUserCreatePostResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserUserCreatePostResponseDataUserRoles[];
}
export interface UserUserCreatePostResponseData extends JsonObject {
  "user": UserUserCreatePostResponseDataUser;
}
export interface UserUserCreatePostResponse extends ApiEnvelope<UserUserCreatePostResponseData> {
}

/** Backend response type: UserResponse. */
export interface UserUserDeleteDeleteResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUserDeleteDeleteResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserUserDeleteDeleteResponseDataUserRoles[];
}
export interface UserUserDeleteDeleteResponseData extends JsonObject {
  "user": UserUserDeleteDeleteResponseDataUser;
}
export interface UserUserDeleteDeleteResponse extends ApiEnvelope<UserUserDeleteDeleteResponseData> {
}

/** Backend response type: UserResponse. */
export interface UserUserFindGetResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUserFindGetResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserUserFindGetResponseDataUserRoles[];
}
export interface UserUserFindGetResponseData extends JsonObject {
  "user": UserUserFindGetResponseDataUser;
}
export interface UserUserFindGetResponse extends ApiEnvelope<UserUserFindGetResponseData> {
}

/** Backend request type: UpdateUser. */
export interface UserUserUpdatePatchInput extends JsonObject {
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
}
/** Backend response type: UserResponse. */
export interface UserUserUpdatePatchResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUserUpdatePatchResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserUserUpdatePatchResponseDataUserRoles[];
}
export interface UserUserUpdatePatchResponseData extends JsonObject {
  "user": UserUserUpdatePatchResponseDataUser;
}
export interface UserUserUpdatePatchResponse extends ApiEnvelope<UserUserUpdatePatchResponseData> {
}

/** Backend request type: UpdateUser. */
export interface UserUserUpdatePutInput extends JsonObject {
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
}
/** Backend response type: UserResponse. */
export interface UserUserUpdatePutResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUserUpdatePutResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserUserUpdatePutResponseDataUserRoles[];
}
export interface UserUserUpdatePutResponseData extends JsonObject {
  "user": UserUserUpdatePutResponseDataUser;
}
export interface UserUserUpdatePutResponse extends ApiEnvelope<UserUserUpdatePutResponseData> {
}

/** Backend request type: UpdateUserPassword. */
export interface UserChangePasswordPatchInput extends JsonObject {
  "password"?: string | null;
}
/** Backend response type: UserResponse. */
export interface UserChangePasswordPatchResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserChangePasswordPatchResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserChangePasswordPatchResponseDataUserRoles[];
}
export interface UserChangePasswordPatchResponseData extends JsonObject {
  "user": UserChangePasswordPatchResponseDataUser;
}
export interface UserChangePasswordPatchResponse extends ApiEnvelope<UserChangePasswordPatchResponseData> {
}

/** Backend request type: UpdateUserPassword. */
export interface UserChangePasswordPutInput extends JsonObject {
  "password"?: string | null;
}
/** Backend response type: UserResponse. */
export interface UserChangePasswordPutResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserChangePasswordPutResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserChangePasswordPutResponseDataUserRoles[];
}
export interface UserChangePasswordPutResponseData extends JsonObject {
  "user": UserChangePasswordPutResponseDataUser;
}
export interface UserChangePasswordPutResponse extends ApiEnvelope<UserChangePasswordPutResponseData> {
}

/** Backend request type: UpdateUserRoles. */
export interface UserChangeRolesPatchInput extends JsonObject {
  "roles"?: string[] | null;
}
/** Backend response type: UserResponse. */
export interface UserChangeRolesPatchResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserChangeRolesPatchResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserChangeRolesPatchResponseDataUserRoles[];
}
export interface UserChangeRolesPatchResponseData extends JsonObject {
  "user": UserChangeRolesPatchResponseDataUser;
}
export interface UserChangeRolesPatchResponse extends ApiEnvelope<UserChangeRolesPatchResponseData> {
}

/** Backend request type: UpdateUserRoles. */
export interface UserChangeRolesPutInput extends JsonObject {
  "roles"?: string[] | null;
}
/** Backend response type: UserResponse. */
export interface UserChangeRolesPutResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserChangeRolesPutResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserChangeRolesPutResponseDataUserRoles[];
}
export interface UserChangeRolesPutResponseData extends JsonObject {
  "user": UserChangeRolesPutResponseDataUser;
}
export interface UserChangeRolesPutResponse extends ApiEnvelope<UserChangeRolesPutResponseData> {
}

/** Backend response type: UserResponse. */
export interface UserUserLogoutGetResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUserLogoutGetResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserUserLogoutGetResponseDataUserRoles[];
}
export interface UserUserLogoutGetResponseData extends JsonObject {
  "user": UserUserLogoutGetResponseDataUser;
}
export interface UserUserLogoutGetResponse extends ApiEnvelope<UserUserLogoutGetResponseData> {
}

/** Backend request type: UpdateUserStatus. */
export interface UserUserSetStatusPatchInput extends JsonObject {
  "enabled": boolean;
}
/** Backend response type: UserResponse. */
export interface UserUserSetStatusPatchResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUserSetStatusPatchResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserUserSetStatusPatchResponseDataUserRoles[];
}
export interface UserUserSetStatusPatchResponseData extends JsonObject {
  "user": UserUserSetStatusPatchResponseDataUser;
}
export interface UserUserSetStatusPatchResponse extends ApiEnvelope<UserUserSetStatusPatchResponseData> {
}

/** Backend request type: UpdateUserStatus. */
export interface UserUserSetStatusPutInput extends JsonObject {
  "enabled": boolean;
}
/** Backend response type: UserResponse. */
export interface UserUserSetStatusPutResponseDataUserRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUserSetStatusPutResponseDataUser extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "active_sessions": number;
  "roles": UserUserSetStatusPutResponseDataUserRoles[];
}
export interface UserUserSetStatusPutResponseData extends JsonObject {
  "user": UserUserSetStatusPutResponseDataUser;
}
export interface UserUserSetStatusPutResponse extends ApiEnvelope<UserUserSetStatusPutResponseData> {
}

/** Backend request type: FullRegister. */
export interface UserRegisterPostInput extends JsonObject {
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "role"?: string | null;
  "roles"?: string[] | null;
}
/** Backend response type: FindUserResponse. */
export interface UserRegisterPostResponseDataUser extends JsonObject {
  "user_id": string;
  "created": boolean;
}
export interface UserRegisterPostResponseData extends JsonObject {
  "user": UserRegisterPostResponseDataUser;
}
export interface UserRegisterPostResponse extends ApiEnvelope<UserRegisterPostResponseData> {
}

/** Backend request type: EmailRegister. */
export interface UserRegisterWithEmailPostInput extends JsonObject {
  "email": string;
}
/** Backend response type: RegisterResponse. */
export interface UserRegisterWithEmailPostResponseDataOtpSent extends JsonObject {
  "phone": boolean;
  "email": boolean;
}
export interface UserRegisterWithEmailPostResponseData extends JsonObject {
  "user_id": string;
  "otp_sent": UserRegisterWithEmailPostResponseDataOtpSent;
}
export interface UserRegisterWithEmailPostResponse extends ApiEnvelope<UserRegisterWithEmailPostResponseData> {
}

/** Backend request type: PhoneRegister. */
export interface UserRegisterWithPhonePostInput extends JsonObject {
  "phone": string;
  "role"?: string | null;
  "roles"?: string[] | null;
}
/** Backend response type: RegisterResponse. */
export interface UserRegisterWithPhonePostResponseDataOtpSent extends JsonObject {
  "phone": boolean;
  "email": boolean;
}
export interface UserRegisterWithPhonePostResponseData extends JsonObject {
  "user_id": string;
  "otp_sent": UserRegisterWithPhonePostResponseDataOtpSent;
}
export interface UserRegisterWithPhonePostResponse extends ApiEnvelope<UserRegisterWithPhonePostResponseData> {
}

/** Backend query type: RegistrationStatsQuery. */
export interface UserUsersRegistrationStatsGetQuery extends QueryParams {
  "range"?: string | null;
}
/** Backend response type: RegistrationStatsResponse. */
export interface UserUsersRegistrationStatsGetResponseDataPoints extends JsonObject {
  "bucket": string;
  "registrations": number;
}
export interface UserUsersRegistrationStatsGetResponseData extends JsonObject {
  "points": UserUsersRegistrationStatsGetResponseDataPoints[];
}
export interface UserUsersRegistrationStatsGetResponse extends ApiEnvelope<UserUsersRegistrationStatsGetResponseData> {
}

/** Backend response type: UserSelfResponse. */
export interface UserUserFindSelfGetResponseDataRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUserFindSelfGetResponseDataPermissions extends JsonObject {
  "id": string;
  "name": string;
}
export interface UserUserFindSelfGetResponseData extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "roles": UserUserFindSelfGetResponseDataRoles[];
  "permissions": UserUserFindSelfGetResponseDataPermissions[];
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

