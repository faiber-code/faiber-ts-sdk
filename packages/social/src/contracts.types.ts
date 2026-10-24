import type { JsonValue, QueryParams } from "@faiber/sdk-core";
import type { SocialResponse, SocialListMeta } from "./types.js";
import type { SocialAdminPolicyConfig, SocialAdminCapabilities, SocialAdminClaimStatus } from "./admin.types.js";
/** Published category policy, distinct from the operator draft record. */
export interface SocialCategoryCapabilityPolicy { id:string; category_id:string; version:number; config:SocialAdminPolicyConfig; published_at:string; }
export type SocialCategoryCapabilityPolicyResponse = SocialResponse<SocialCategoryCapabilityPolicy>;
export type SocialCapabilities = SocialAdminCapabilities;
export type SocialCapabilitiesResponse = SocialResponse<SocialCapabilities>;
/** Exact coordinates are short-lived and carry Cache-Control:no-store; never persist them. */
export interface SocialNavigationLocation { post_id:string; latitude:number; longitude:number; expires_in_seconds:60; }
export interface SocialNavigationAccessInput { reason?:string|null; }
export type SocialNavigationAccessResponse = SocialResponse<SocialNavigationLocation>;
/** Evidence is intentionally application-defined serde_json::Value, default null. Message is trimmed and bounded to 1–5000 characters. */
export interface SocialCreateClaimInput { message:string; evidence?:JsonValue; }
export interface SocialClaimCreated { id:string; post_id:string; claimant_user_id:string; status:"submitted"; }
export type SocialClaimCreatedResponse = SocialResponse<SocialClaimCreated>;
export interface SocialClaim { id:string; post_id:string; claimant_user_id:string; message:string; evidence:JsonValue; status:SocialAdminClaimStatus; created_at:string; updated_at:string; mutual_contact_consent:boolean; }
export interface SocialClaimResolution { post_id:string; selected_claim_id:string; author_approved_at:string|null; moderator_approved_at:string|null; moderator_user_id:string|null; outcome:string|null; status:"pending"|"approved"|"resolved"|"disputed"; created_at:string; updated_at:string; }
export interface SocialClaimDetail extends SocialClaim { resolution:SocialClaimResolution|null; }
export type SocialClaimDetailResponse = SocialResponse<SocialClaimDetail>;
export interface SocialClaimListQuery extends QueryParams { page?:number; limit?:number; }
export interface SocialClaimPageResponse extends SocialResponse<SocialClaim[]> { meta:SocialListMeta; }
export interface SocialClaimWithdrawn { id:string; status:"withdrawn"; }
export type SocialClaimWithdrawnResponse = SocialResponse<SocialClaimWithdrawn>;
export interface SocialClaimSelected { claim_id:string; post_id:string; status:"selected"; author_approved:true; }
export type SocialClaimSelectedResponse = SocialResponse<SocialClaimSelected>;
export interface SocialContactConsentInput { consented:boolean; }
export interface SocialContactConsent { claim_id:string; consented:boolean; mutual_consent:boolean; }
export type SocialContactConsentResponse = SocialResponse<SocialContactConsent>;
export type SocialFundingStatus = "funded"|"payout_requested"|"paid"|"refund_requested"|"refunded"|"failed"|"disputed"|"expired";
export interface SocialFundingEventInput { external_event_id:string; post_id:string; external_reference:string; status:SocialFundingStatus; unit:"money"|"asset"; code:string; amount:string; }
export interface SocialFundingDuplicate { post_id:string; duplicate:true; }
export interface SocialFundingApplied { post_id:string; duplicate:false; status:SocialFundingStatus; }
export type SocialFundingEventResult = SocialFundingDuplicate | SocialFundingApplied;
export type SocialFundingEventResponse = SocialResponse<SocialFundingEventResult>;
export interface SocialPostCancelled { post_id:string; lifecycle_status:"cancelled"; }
export type SocialPostCancelledResponse = SocialResponse<SocialPostCancelled>;
