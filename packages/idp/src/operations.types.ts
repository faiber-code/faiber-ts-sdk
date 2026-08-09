import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export type OidcDiscoveryGetResponse = JsonValue;

/** Backend response type: PermissionListResponse. */
export interface AclPermissionsIndexGetResponseData extends JsonObject {
  "permissions": BackendJson<"PermissionResponse">[];
  "services": string[];
}
export interface AclPermissionsIndexGetResponse extends ApiEnvelope<AclPermissionsIndexGetResponseData> {
}

/** Backend response type: RoleListResponse. */
export interface AclRolesIndexGetResponseData extends JsonObject {
  "roles": BackendJson<"RoleResponse">[];
}
export interface AclRolesIndexGetResponse extends ApiEnvelope<AclRolesIndexGetResponseData> {
}

/** Backend request type: CreateRole. */
export interface AclRolesCreatePostInput extends JsonObject {
  "name": string;
  "permissions"?: string[];
}
/** Backend response type: RoleSingleResponse. */
export interface AclRolesCreatePostResponseData extends JsonObject {
  "role": BackendJson<"RoleDetailResponse">;
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
  "role": BackendJson<"RoleDetailResponse">;
}
export interface AclRolesShowGetResponse extends ApiEnvelope<AclRolesShowGetResponseData> {
}

/** Backend request type: UpdateRole. */
export interface AclRolesUpdatePatchInput extends JsonObject {
  "permissions": string[];
}
/** Backend response type: RoleSingleResponse. */
export interface AclRolesUpdatePatchResponseData extends JsonObject {
  "role": BackendJson<"RoleDetailResponse">;
}
export interface AclRolesUpdatePatchResponse extends ApiEnvelope<AclRolesUpdatePatchResponseData> {
}

/** Backend request type: UpdateRole. */
export interface AclRolesUpdatePutInput extends JsonObject {
  "permissions": string[];
}
/** Backend response type: RoleSingleResponse. */
export interface AclRolesUpdatePutResponseData extends JsonObject {
  "role": BackendJson<"RoleDetailResponse">;
}
export interface AclRolesUpdatePutResponse extends ApiEnvelope<AclRolesUpdatePutResponseData> {
}

/** Backend request type: AccountTokenRequest. */
export interface AuthLoginAccountPostInput extends JsonObject {
  "account": string;
  "device_id"?: string | null;
}
/** Backend response type: api. */
export interface AuthLoginAccountPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: AuthorityView. */
export interface IdentityAuthorityPublicShowGetResponseData extends JsonObject {
  "mode": string;
  "canonical_provider_id"?: string | null;
  "canonical_provider_key"?: string | null;
  "canonical_display_name"?: string | null;
  "canonical_issuer"?: string | null;
  "subject_policy": string;
  "jit_provisioning": boolean;
  "activated_at"?: string | null;
  "last_discovery_at"?: string | null;
  "last_login_at"?: string | null;
  "last_logout_at"?: string | null;
  "last_error"?: string | null;
  "federated_session_count": number;
  "rollout_enabled": boolean;
}
export interface IdentityAuthorityPublicShowGetResponse extends ApiEnvelope<IdentityAuthorityPublicShowGetResponseData> {
}

/** Backend query type: StartQuery. */
export interface CustomOauthStartGetQuery extends QueryParams {
  "redirect"?: string | null;
  "intent"?: string | null;
}
/** Backend response type: redirect. */
export type CustomOauthStartGetResponse = void;

/** Backend query type: CallbackQuery. */
export interface CustomOauthCallbackGetQuery extends QueryParams {
  "code"?: string | null;
  "state"?: string | null;
  "error"?: string | null;
}
/** Backend response type: redirect. */
export type CustomOauthCallbackGetResponse = void;

/** Backend response type: APIEmptyResponse. */
export interface CustomOauthUnlinkDeleteResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type CustomOauthUnlinkDeleteResponse = CustomOauthUnlinkDeleteResponseData;

/** Backend response type: Vec<PublicProviderView>. */
export interface CustomOauthPublicProvidersGetResponseItem extends JsonObject {
  "id": string;
  "provider_key": string;
  "display_name": string;
  "icon_url"?: string | null;
}
export interface CustomOauthPublicProvidersGetResponse extends ApiEnvelope<CustomOauthPublicProvidersGetResponseItem[]> {
}

/** Backend response type: api. */
export interface AuthGenerateOneTimeTokenRoutePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: BrowserHandoffQuery. */
export interface AuthBrowserHandoffGetQuery extends QueryParams {
  "target": string;
  "redirect": string;
}
/** Backend response type: api. */
export interface AuthBrowserHandoffGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: LinkedIdentitiesResponse. */
export interface AuthListLinkedIdentitiesGetResponseData extends JsonObject {
  "identities": BackendJson<"LinkedIdentityItem">[];
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
/** Backend response type: api. */
export interface AuthLoginPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface AuthLogoutGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: AuthorizeQuery. */
export interface AuthAuthorizeGetQuery extends QueryParams {
  "response_type": string;
  "client_id": string;
  "redirect_uri": string;
  "state": string;
  "code_challenge": string;
  "code_challenge_method": string;
}
/** Backend response type: redirect. */
export type AuthAuthorizeGetResponse = void;

/** Backend request type: TokenRequest. */
export interface AuthTokenPostInput extends JsonObject {
  "grant_type": string;
  "code": string;
  "client_id": string;
  "redirect_uri": string;
  "code_verifier": string;
  "device_id"?: string | null;
}
/** Backend response type: NativeTokenResponse. */
export interface AuthTokenPostResponseData extends JsonObject {
  "access_token": string;
  "refresh_token": string;
  "token_type": BackendJson<"&'static str">;
  "expires_in": number;
  "scope": string;
}
export type AuthTokenPostResponse = AuthTokenPostResponseData;

/** Backend response type: APIEmptyResponse. */
export interface AuthOauthUnlinkDeleteResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type AuthOauthUnlinkDeleteResponse = AuthOauthUnlinkDeleteResponseData;

/** Backend query type: OAuthStartQuery. */
export interface AuthOauthStartGetQuery extends QueryParams {
  "redirect"?: string | null;
  "intent"?: string | null;
}
/** Backend response type: redirect. */
export type AuthOauthStartGetResponse = void;

/** Backend query type: OAuthCallbackQuery. */
export interface AuthOauthCallbackGetQuery extends QueryParams {
  "code"?: string | null;
  "state"?: string | null;
  "error"?: string | null;
}
/** Backend response type: redirect. */
export type AuthOauthCallbackGetResponse = void;

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
/** Backend response type: api. */
export interface AuthOtpLoginPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface AuthRefreshTokenGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface AuthGenerateSecureOneTimeTokenRoutePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<SessionResponse>. */
export interface AuthListSessionsGetResponseItem extends JsonObject {
  "id": string;
  "client": BackendJson<"SessionClientResponse">;
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

/** Backend response type: APIEmptyResponse. */
export interface AuthDeleteSessionDeleteResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type AuthDeleteSessionDeleteResponse = AuthDeleteSessionDeleteResponseData;

/** Backend query type: TokenQuery. */
export interface AuthLoginTokenGetQuery extends QueryParams {
  "token": string;
  "redirect": string;
}
/** Backend response type: api. */
export interface AuthLoginTokenGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: raw-response. */
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
/** Backend response type: api. */
export interface AuthLoginWebPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: EnrollmentInput. */
export interface IdentityAuthorityEnrollPostInput extends JsonObject {
  "code": string;
  "linked_issuer": string;
  "redirect_uri": string;
  "post_logout_redirect_uri": string;
}
/** Backend response type: EnrollmentView. */
export interface IdentityAuthorityEnrollPostResponseData extends JsonObject {
  "client_id": string;
  "client_secret": string;
}
export interface IdentityAuthorityEnrollPostResponse extends ApiEnvelope<IdentityAuthorityEnrollPostResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<BackendJson<"infera_flow_sdk::FlowIntegrationResponse">> {
}

/** Backend query type: AuthorizeQuery. */
export interface OidcAuthorizeGetQuery extends QueryParams {
  "response_type": string;
  "client_id": string;
  "redirect_uri": string;
  "state": string;
  "code_challenge": string;
  "code_challenge_method": string;
}
/** Backend response type: redirect. */
export type OidcAuthorizeGetResponse = void;

/** Backend request type: BackchannelLogoutForm. */
export interface OidcBackchannelLogoutPostInput extends JsonObject {
  "logout_token": string;
}
/** Backend response type: no-content. */
export type OidcBackchannelLogoutPostResponse = void;

/** Backend request type: TokenOnly. */
export interface OidcIntrospectPostInput extends JsonObject {
  "token": string;
  "client_id"?: string | null;
  "client_secret"?: string | null;
}
/** Backend response type: Value. */
export type OidcIntrospectPostResponse = JsonValue;

/** Backend response type: Value. */
export type OidcJwksGetResponse = JsonValue;

/** Backend response type: api. */
export interface OidcLogoutGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface OidcLogoutPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: TokenOnly. */
export interface OidcRevokePostInput extends JsonObject {
  "token": string;
  "client_id"?: string | null;
  "client_secret"?: string | null;
}
/** Backend response type: no-content. */
export type OidcRevokePostResponse = void;

/** Backend request type: TokenForm. */
export interface OidcTokenPostInput extends JsonObject {
  "grant_type": string;
  "code"?: string | null;
  "redirect_uri"?: string | null;
  "client_id"?: string | null;
  "client_secret"?: string | null;
  "code_verifier"?: string | null;
  "refresh_token"?: string | null;
  "device_id"?: string | null;
  "subject_token"?: string | null;
  "subject_token_type"?: string | null;
  "scope"?: string | null;
}
/** Backend response type: TokenResponse. */
export interface OidcTokenPostResponseData extends JsonObject {
  "access_token": string;
  "refresh_token": string;
  "expires_in": number;
  "scope": string;
}
export type OidcTokenPostResponse = OidcTokenPostResponseData;

/** Backend response type: Value. */
export type OidcUserinfoGetResponse = JsonValue;

/** Backend response type: Value. */
export type OidcUserinfoPostResponse = JsonValue;

/** Backend response type: Vec<ProviderView>. */
export interface CustomOauthListGetResponseItem extends JsonObject {
  "id": string;
  "provider_key": string;
  "display_name": string;
  "protocol": string;
  "issuer_url"?: string | null;
  "authorization_url": string;
  "token_url": string;
  "userinfo_url": string;
  "client_id": string;
  "has_secret": boolean;
  "scopes": string[];
  "claim_mapping": JsonValue;
  "extra_authorize_params": JsonValue;
  "role_mapping": JsonValue;
  "default_role_id"?: string | null;
  "icon_url"?: string | null;
  "display_order": number;
  "enabled": boolean;
}
export interface CustomOauthListGetResponse extends ApiEnvelope<CustomOauthListGetResponseItem[]> {
}

/** Backend request type: ProviderInput. */
export interface CustomOauthCreatePostInput extends JsonObject {
  "provider_key": string;
  "display_name": string;
  "protocol": string;
  "issuer_url"?: string | null;
  "authorization_url": string;
  "token_url": string;
  "userinfo_url": string;
  "client_id": string;
  "client_secret"?: string | null;
  "scopes"?: string[];
  "claim_mapping"?: JsonValue;
  "extra_authorize_params"?: JsonValue;
  "role_mapping"?: JsonValue;
  "default_role_id"?: string | null;
  "icon_url"?: string | null;
  "display_order"?: number;
  "enabled"?: boolean;
}
/** Backend response type: ProviderView. */
export interface CustomOauthCreatePostResponseData extends JsonObject {
  "id": string;
  "provider_key": string;
  "display_name": string;
  "protocol": string;
  "issuer_url"?: string | null;
  "authorization_url": string;
  "token_url": string;
  "userinfo_url": string;
  "client_id": string;
  "has_secret": boolean;
  "scopes": string[];
  "claim_mapping": JsonValue;
  "extra_authorize_params": JsonValue;
  "role_mapping": JsonValue;
  "default_role_id"?: string | null;
  "icon_url"?: string | null;
  "display_order": number;
  "enabled": boolean;
}
export interface CustomOauthCreatePostResponse extends ApiEnvelope<CustomOauthCreatePostResponseData> {
}

/** Backend response type: APIEmptyResponse. */
export interface CustomOauthRemoveDeleteResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type CustomOauthRemoveDeleteResponse = CustomOauthRemoveDeleteResponseData;

/** Backend request type: ProviderInput. */
export interface CustomOauthUpdatePutInput extends JsonObject {
  "provider_key": string;
  "display_name": string;
  "protocol": string;
  "issuer_url"?: string | null;
  "authorization_url": string;
  "token_url": string;
  "userinfo_url": string;
  "client_id": string;
  "client_secret"?: string | null;
  "scopes"?: string[];
  "claim_mapping"?: JsonValue;
  "extra_authorize_params"?: JsonValue;
  "role_mapping"?: JsonValue;
  "default_role_id"?: string | null;
  "icon_url"?: string | null;
  "display_order"?: number;
  "enabled"?: boolean;
}
/** Backend response type: ProviderView. */
export interface CustomOauthUpdatePutResponseData extends JsonObject {
  "id": string;
  "provider_key": string;
  "display_name": string;
  "protocol": string;
  "issuer_url"?: string | null;
  "authorization_url": string;
  "token_url": string;
  "userinfo_url": string;
  "client_id": string;
  "has_secret": boolean;
  "scopes": string[];
  "claim_mapping": JsonValue;
  "extra_authorize_params": JsonValue;
  "role_mapping": JsonValue;
  "default_role_id"?: string | null;
  "icon_url"?: string | null;
  "display_order": number;
  "enabled": boolean;
}
export interface CustomOauthUpdatePutResponse extends ApiEnvelope<CustomOauthUpdatePutResponseData> {
}

/** Backend response type: AuthorityView. */
export interface IdentityAuthorityAdminShowGetResponseData extends JsonObject {
  "mode": string;
  "canonical_provider_id"?: string | null;
  "canonical_provider_key"?: string | null;
  "canonical_display_name"?: string | null;
  "canonical_issuer"?: string | null;
  "subject_policy": string;
  "jit_provisioning": boolean;
  "activated_at"?: string | null;
  "last_discovery_at"?: string | null;
  "last_login_at"?: string | null;
  "last_logout_at"?: string | null;
  "last_error"?: string | null;
  "federated_session_count": number;
  "rollout_enabled": boolean;
}
export interface IdentityAuthorityAdminShowGetResponse extends ApiEnvelope<IdentityAuthorityAdminShowGetResponseData> {
}

/** Backend request type: UpdateAuthority. */
export interface IdentityAuthorityUpdatePutInput extends JsonObject {
  "mode": string;
  "canonical_provider_id"?: string | null;
  "jit_provisioning"?: boolean;
}
/** Backend response type: AuthorityView. */
export interface IdentityAuthorityUpdatePutResponseData extends JsonObject {
  "mode": string;
  "canonical_provider_id"?: string | null;
  "canonical_provider_key"?: string | null;
  "canonical_display_name"?: string | null;
  "canonical_issuer"?: string | null;
  "subject_policy": string;
  "jit_provisioning": boolean;
  "activated_at"?: string | null;
  "last_discovery_at"?: string | null;
  "last_login_at"?: string | null;
  "last_logout_at"?: string | null;
  "last_error"?: string | null;
  "federated_session_count": number;
  "rollout_enabled": boolean;
}
export interface IdentityAuthorityUpdatePutResponse extends ApiEnvelope<IdentityAuthorityUpdatePutResponseData> {
}

/** Backend request type: DiscoverInput. */
export interface IdentityAuthorityDiscoverPostInput extends JsonObject {
  "issuer_url": string;
}
/** Backend response type: DiscoveryView. */
export interface IdentityAuthorityDiscoverPostResponseData extends JsonObject {
  "issuer": string;
  "authorization_endpoint": string;
  "token_endpoint": string;
  "userinfo_endpoint": string;
  "jwks_uri": string;
  "end_session_endpoint"?: string | null;
  "backchannel_logout_supported": boolean;
}
export interface IdentityAuthorityDiscoverPostResponse extends ApiEnvelope<IdentityAuthorityDiscoverPostResponseData> {
}

/** Backend request type: PairCanonicalInput. */
export interface IdentityAuthorityPairCanonicalPostInput extends JsonObject {
  "canonical_issuer": string;
  "pairing_code": string;
}
/** Backend response type: AuthorityView. */
export interface IdentityAuthorityPairCanonicalPostResponseData extends JsonObject {
  "mode": string;
  "canonical_provider_id"?: string | null;
  "canonical_provider_key"?: string | null;
  "canonical_display_name"?: string | null;
  "canonical_issuer"?: string | null;
  "subject_policy": string;
  "jit_provisioning": boolean;
  "activated_at"?: string | null;
  "last_discovery_at"?: string | null;
  "last_login_at"?: string | null;
  "last_logout_at"?: string | null;
  "last_error"?: string | null;
  "federated_session_count": number;
  "rollout_enabled": boolean;
}
export interface IdentityAuthorityPairCanonicalPostResponse extends ApiEnvelope<IdentityAuthorityPairCanonicalPostResponseData> {
}

/** Backend request type: PairingInvitationInput. */
export interface IdentityAuthorityCreatePairingInvitationPostInput extends JsonObject {
  "linked_issuer": string;
}
/** Backend response type: PairingInvitationView. */
export interface IdentityAuthorityCreatePairingInvitationPostResponseData extends JsonObject {
  "code": string;
  "expires_at": string;
}
export interface IdentityAuthorityCreatePairingInvitationPostResponse extends ApiEnvelope<IdentityAuthorityCreatePairingInvitationPostResponseData> {
}

/** Backend response type: OAuthSettingsResponse. */
export interface SettingsOauthSettingsShowGetResponseData extends JsonObject {
  "google": BackendJson<"OAuthProviderAdminView">;
  "github": BackendJson<"OAuthProviderAdminView">;
}
export interface SettingsOauthSettingsShowGetResponse extends ApiEnvelope<SettingsOauthSettingsShowGetResponseData> {
}

/** Backend request type: UpdateOAuthSettings. */
export interface SettingsOauthSettingsUpdatePutInput extends JsonObject {
  "google": BackendJson<"OAuthProviderUpdate">;
  "github": BackendJson<"OAuthProviderUpdate">;
}
/** Backend response type: OAuthSettingsResponse. */
export interface SettingsOauthSettingsUpdatePutResponseData extends JsonObject {
  "google": BackendJson<"OAuthProviderAdminView">;
  "github": BackendJson<"OAuthProviderAdminView">;
}
export interface SettingsOauthSettingsUpdatePutResponse extends ApiEnvelope<SettingsOauthSettingsUpdatePutResponseData> {
}

/** Backend response type: Vec<ClientView>. */
export interface OauthClientsListGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "client_id": string;
  "redirect_uris": string[];
  "post_logout_redirect_uris": string[];
  "grant_types": string[];
  "scopes": string[];
  "client_type": string;
  "token_endpoint_auth_method": string;
  "trusted": boolean;
  "status": number;
}
export interface OauthClientsListGetResponse extends ApiEnvelope<OauthClientsListGetResponseItem[]> {
}

/** Backend request type: ClientInput. */
export interface OauthClientsCreatePostInput extends JsonObject {
  "name": string;
  "client_id": string;
  "redirect_uris"?: string[];
  "post_logout_redirect_uris"?: string[];
  "grant_types"?: string[];
  "scopes"?: string[];
  "client_type": string;
  "token_endpoint_auth_method": string;
  "trusted"?: boolean;
  "status"?: number;
}
/** Backend response type: ClientCreated. */
export interface OauthClientsCreatePostResponseData extends JsonObject {
  "client": BackendJson<"ClientView">;
  "client_secret"?: string | null;
}
export interface OauthClientsCreatePostResponse extends ApiEnvelope<OauthClientsCreatePostResponseData> {
}

/** Backend response type: APIEmptyResponse. */
export interface OauthClientsRemoveDeleteResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type OauthClientsRemoveDeleteResponse = OauthClientsRemoveDeleteResponseData;

/** Backend request type: ClientInput. */
export interface OauthClientsUpdatePutInput extends JsonObject {
  "name": string;
  "client_id": string;
  "redirect_uris"?: string[];
  "post_logout_redirect_uris"?: string[];
  "grant_types"?: string[];
  "scopes"?: string[];
  "client_type": string;
  "token_endpoint_auth_method": string;
  "trusted"?: boolean;
  "status"?: number;
}
/** Backend response type: ClientView. */
export interface OauthClientsUpdatePutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "client_id": string;
  "redirect_uris": string[];
  "post_logout_redirect_uris": string[];
  "grant_types": string[];
  "scopes": string[];
  "client_type": string;
  "token_endpoint_auth_method": string;
  "trusted": boolean;
  "status": number;
}
export interface OauthClientsUpdatePutResponse extends ApiEnvelope<OauthClientsUpdatePutResponseData> {
}

/** Backend response type: ClientCreated. */
export interface OauthClientsRotatePostResponseData extends JsonObject {
  "client": BackendJson<"ClientView">;
  "client_secret"?: string | null;
}
export interface OauthClientsRotatePostResponse extends ApiEnvelope<OauthClientsRotatePostResponseData> {
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
export interface UserUsersIndexGetResponseData extends JsonObject {
  "users": BackendJson<"UserResource">[];
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
export interface UserUserCreatePostResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
}
export interface UserUserCreatePostResponse extends ApiEnvelope<UserUserCreatePostResponseData> {
}

/** Backend response type: UserResponse. */
export interface UserUserDeleteDeleteResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
}
export interface UserUserDeleteDeleteResponse extends ApiEnvelope<UserUserDeleteDeleteResponseData> {
}

/** Backend response type: UserResponse. */
export interface UserUserFindGetResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
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
export interface UserUserUpdatePatchResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
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
export interface UserUserUpdatePutResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
}
export interface UserUserUpdatePutResponse extends ApiEnvelope<UserUserUpdatePutResponseData> {
}

/** Backend request type: UpdateUserPassword. */
export interface UserChangePasswordPatchInput extends JsonObject {
  "password"?: string | null;
}
/** Backend response type: UserResponse. */
export interface UserChangePasswordPatchResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
}
export interface UserChangePasswordPatchResponse extends ApiEnvelope<UserChangePasswordPatchResponseData> {
}

/** Backend request type: UpdateUserPassword. */
export interface UserChangePasswordPutInput extends JsonObject {
  "password"?: string | null;
}
/** Backend response type: UserResponse. */
export interface UserChangePasswordPutResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
}
export interface UserChangePasswordPutResponse extends ApiEnvelope<UserChangePasswordPutResponseData> {
}

/** Backend request type: UpdateUserRoles. */
export interface UserChangeRolesPatchInput extends JsonObject {
  "roles"?: string[] | null;
}
/** Backend response type: UserResponse. */
export interface UserChangeRolesPatchResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
}
export interface UserChangeRolesPatchResponse extends ApiEnvelope<UserChangeRolesPatchResponseData> {
}

/** Backend request type: UpdateUserRoles. */
export interface UserChangeRolesPutInput extends JsonObject {
  "roles"?: string[] | null;
}
/** Backend response type: UserResponse. */
export interface UserChangeRolesPutResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
}
export interface UserChangeRolesPutResponse extends ApiEnvelope<UserChangeRolesPutResponseData> {
}

/** Backend response type: UserResponse. */
export interface UserUserLogoutGetResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
}
export interface UserUserLogoutGetResponse extends ApiEnvelope<UserUserLogoutGetResponseData> {
}

/** Backend request type: UpdateUserStatus. */
export interface UserUserSetStatusPatchInput extends JsonObject {
  "enabled": boolean;
}
/** Backend response type: UserResponse. */
export interface UserUserSetStatusPatchResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
}
export interface UserUserSetStatusPatchResponse extends ApiEnvelope<UserUserSetStatusPatchResponseData> {
}

/** Backend request type: UpdateUserStatus. */
export interface UserUserSetStatusPutInput extends JsonObject {
  "enabled": boolean;
}
/** Backend response type: UserResponse. */
export interface UserUserSetStatusPutResponseData extends JsonObject {
  "user": BackendJson<"UserResource">;
}
export interface UserUserSetStatusPutResponse extends ApiEnvelope<UserUserSetStatusPutResponseData> {
}

/** Backend query type: DirectoryQuery. */
export interface UserUsersDirectoryGetQuery extends QueryParams {
  "search": string;
}
/** Backend response type: DirectoryUserListResponse. */
export interface UserUsersDirectoryGetResponseData extends JsonObject {
  "users": BackendJson<"DirectoryUserResource">[];
}
export interface UserUsersDirectoryGetResponse extends ApiEnvelope<UserUsersDirectoryGetResponseData> {
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
export interface UserRegisterPostResponseData extends JsonObject {
  "user": BackendJson<"RegisterResponseIdOnly">;
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
  "otp_sent": BackendJson<"OTPResult">;
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
export interface UserRegisterWithPhonePostResponseData extends JsonObject {
  "user_id": string;
  "otp_sent": BackendJson<"OTPResult">;
}
export interface UserRegisterWithPhonePostResponse extends ApiEnvelope<UserRegisterWithPhonePostResponseData> {
}

/** Backend query type: RegistrationStatsQuery. */
export interface UserUsersRegistrationStatsGetQuery extends QueryParams {
  "range"?: string | null;
}
/** Backend response type: RegistrationStatsResponse. */
export interface UserUsersRegistrationStatsGetResponseData extends JsonObject {
  "points": BackendJson<"RegistrationStatsPoint">[];
}
export interface UserUsersRegistrationStatsGetResponse extends ApiEnvelope<UserUsersRegistrationStatsGetResponseData> {
}

/** Backend response type: UserSelfResponse. */
export interface UserUserFindSelfGetResponseData extends JsonObject {
  "id": string;
  "phone"?: string | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "status": number;
  "roles": BackendJson<"RoleResponse">[];
  "permissions": BackendJson<"PermissionResponse">[];
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

