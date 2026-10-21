/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope, JsonObject, JsonValue } from '@faiber/sdk-core';
export interface HandoffToken { token: string }
export interface PasswordStatus { has_password: boolean }
export type HandoffTokenResponse = ApiEnvelope<HandoffToken>;
export type PasswordStatusResponse = ApiEnvelope<PasswordStatus>;

export interface HandoffAccessToken { access_token: string; refresh_token: string; expires_in: number; scope: string }
export type HandoffAccessTokenResponse = ApiEnvelope<HandoffAccessToken>;


/** Single-use token returned by the internal guarded generation endpoint. */
export interface OneTimeToken { token: string }
export type OneTimeTokenResponse = ApiEnvelope<OneTimeToken>;

/** Raw OIDC discovery metadata emitted by the IDP, with root-relative issuer endpoints. */
export interface OidcDiscoveryDocument {
  issuer:string; authorization_endpoint:string; token_endpoint:string; userinfo_endpoint:string;
  jwks_uri:string; revocation_endpoint:string; introspection_endpoint:string; end_session_endpoint:string;
  backchannel_logout_supported:boolean; backchannel_logout_session_supported:boolean;
  response_types_supported:string[]; grant_types_supported:string[]; subject_types_supported:string[];
  id_token_signing_alg_values_supported:string[]; scopes_supported:string[]; claims_supported:string[];
  code_challenge_methods_supported:string[]; token_endpoint_auth_methods_supported:string[];
}
export interface OidcRsaSigningKey { kty:'RSA'; use:'sig'; alg:'RS256'; kid:string; n:string; e:string }
export interface OidcJwks { keys:OidcRsaSigningKey[] }
/** Optional claims appear only when the access token includes their scopes. */
export interface OidcUserInfo {
  sub:string; name?:string|null; email?:string|null; email_verified?:boolean;
  phone_number?:string|null; phone_number_verified?:boolean;
  national_code?:string|null; national_code_verified?:boolean; roles?:string[]; permissions?:string[];
}
export interface OidcInactiveToken { active:false }
export interface OidcActiveToken {
  active:true; client_id:string; iss:string; aud:string; sub:string; scope:string; exp:number;
  token_type:'access_token'|'refresh_token';
}
export type OidcIntrospection = OidcInactiveToken | OidcActiveToken;


/** Status/message success body; these handlers do not return a data member. */
export interface IdpEmptyResponse { status: string; message: string }
/** Localized login-page text; response keys are present and nullable. */
export interface LoginPageLocalization extends JsonObject { title: string | null; subtitle: string | null; trademark: string | null }
/** Partial localized text accepted by settings updates. */
export interface LoginPageLocalizationInput extends JsonObject { title?: string | null; subtitle?: string | null; trademark?: string | null }
export interface LoginPageSettings extends JsonObject {
  title: string | null; subtitle: string | null; trademark: string | null;
  icon_asset_key: string | null; icon_url: string | null;
  localizations: Record<string, LoginPageLocalization>;
  mockup_asset_keys: string[]; mockup_image_urls: string[]; faiber_enabled: boolean;
}
export interface LoginPageSettingsInput extends JsonObject {
  title?: string | null; subtitle?: string | null; trademark?: string | null;
  icon_asset_key?: string | null; localizations?: Record<string, LoginPageLocalizationInput>;
  mockup_asset_keys?: string[]; faiber_enabled?: boolean;
}
export type LoginPageSettingsResponse = ApiEnvelope<LoginPageSettings>;
/** Raw asset bytes. The operation sets Axios responseType to arraybuffer. */
export type LoginPageAssetBytes = ArrayBuffer | Uint8Array;
/** Flow metadata wire model from faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. */
export interface IdpIntegrationField { name: string; field_type: string; required: boolean; description: string }
export interface IdpIntegrationEvent { event_name: string; payload_fields: IdpIntegrationField[] }
export interface IdpFlowIntegration { queue: string; events: IdpIntegrationEvent[] }
export type IdpFlowIntegrationResponse = ApiEnvelope<IdpFlowIntegration>;
/**
 * Backend stores these custom-provider settings as arbitrary serde_json::Value.
 * Supported claim_mapping values are dotted claim paths; extra_authorize_params
 * string values are appended to the upstream URL; role_mapping string values are
 * local role UUIDs. Other persisted JSON is returned unchanged and ignored by those readers.
 */
export type CustomProviderMappingJson = JsonValue;

/** Opaque persisted provider configuration; mapping semantics are described by CustomProviderMappingJson. */
export interface CustomProviderView extends JsonObject {
  id: string; provider_key: string; display_name: string; protocol: string;
  issuer_url: string | null; authorization_url: string; token_url: string; userinfo_url: string;
  client_id: string; has_secret: boolean; scopes: string[];
  claim_mapping: CustomProviderMappingJson; extra_authorize_params: CustomProviderMappingJson;
  role_mapping: CustomProviderMappingJson; default_role_id: string | null;
  icon_url: string | null; display_order: number; enabled: boolean;
}
export interface CustomProviderInput extends JsonObject {
  provider_key: string; display_name: string; protocol: 'oidc' | 'oauth2';
  issuer_url?: string | null; authorization_url: string; token_url: string; userinfo_url: string;
  client_id: string; client_secret?: string | null; scopes?: string[];
  claim_mapping?: CustomProviderMappingJson; extra_authorize_params?: CustomProviderMappingJson;
  role_mapping?: CustomProviderMappingJson; default_role_id?: string | null;
  icon_url?: string | null; display_order?: number; enabled?: boolean;
}
export type CustomProviderListResponse = ApiEnvelope<CustomProviderView[]>;
export type CustomProviderResponse = ApiEnvelope<CustomProviderView>;
