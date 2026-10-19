/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope } from '@faiber/sdk-core';
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
