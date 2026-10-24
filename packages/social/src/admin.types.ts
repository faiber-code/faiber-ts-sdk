import type {JsonValue, QueryParams} from '@faiber/sdk-core';
import type {SocialCategory,SocialPost,SocialComment,SocialReport,SocialListMeta,ModerationStatus,SocialPostKind,SocialVisibility,CreateCategoryInput,UpdateCategoryInput} from './types.js';
/** Wire shapes reviewed against src/admin.rs and migrations 1–4 at Social d067ac956571abd73211b06d835caa658b1f09bc. */
export interface SocialAdminResponse<T> { status:'success'; data:T; }
export interface SocialAdminPage<T> extends SocialAdminResponse<T[]> { meta:SocialListMeta; }
/** Offset pagination defaults page1/limit30; server clamps page>=1 and limit1..100. */
export interface SocialAdminPageQuery extends QueryParams {page?:number;limit?:number;}
/** Only status is applied by the shared list helper; q/category_id are not filters here. */
export interface SocialAdminStatusQuery extends SocialAdminPageQuery {status?:string;}
export interface SocialAdminPostsQuery extends SocialAdminPageQuery {q?:string;status?:ModerationStatus;category_id?:string;}
/** q is parsed as an actor UUID; the current server ignores an invalid UUID. */
export interface SocialAdminActorsQuery extends SocialAdminPageQuery {q?:string;}
export type SocialAdminLifecycle = 'draft'|'awaiting_funding'|'pending_moderation'|'published'|'resolved'|'expired'|'cancelled'|'disputed';
export interface SocialAdminOverview {posts:number;pending_moderation:number;open_reports:number;active_categories:number;open_claims:number;funding_exceptions:number;integration_failures:number;}
export interface SocialAdminPostSummary {id:string;author_user_id:string;category_id:string|null;kind:SocialPostKind;visibility:SocialVisibility;title:string|null;body:string;media:JsonValue;moderation_status:ModerationStatus;moderation_message:string|null;lifecycle_status:SocialAdminLifecycle;comments_count:number;reactions_count:number;created_at:string;updated_at:string;}
export interface SocialAdminPost extends SocialPost {deleted_at:string|null;lifecycle_status:SocialAdminLifecycle;}
export interface SocialAdminComment extends SocialComment {deleted_at:string|null;}
export interface SocialAdminReport extends SocialReport {organization_id:string;resolved_by:string|null;resolution:string|null;resolved_at:string|null;}
export interface SocialAdminMedia {id:string;organization_id:string;uploader_user_id:string;post_id:string|null;object_key:string;content_type:string;size_bytes:number;created_at:string;}
export interface SocialAdminCategory extends SocialCategory {deleted_at:string|null;}
export type SocialAdminCreateCategoryInput=CreateCategoryInput;
export type SocialAdminUpdateCategoryInput=UpdateCategoryInput;
/** Only these section names are accepted. Section contents intentionally remain arbitrary JSON. The evaluator inspects settings such as required, allowed_types, access_policies, navigation_allowed, allowed_units and enabled; it does not validate an exhaustive section schema. */
export interface SocialAdminPolicyConfig {subject?:JsonValue;location?:JsonValue;bounty?:JsonValue;claims?:JsonValue;resolution?:JsonValue;expiry?:JsonValue;linked_actions?:JsonValue;}
export interface SocialAdminPolicyInput {category_id:string;config:SocialAdminPolicyConfig;}
export interface SocialAdminPolicy {id:string;organization_id:string;category_id:string;version:number;status:'draft'|'published'|'retired';config:SocialAdminPolicyConfig;created_by:string;published_by:string|null;created_at:string;updated_at:string;published_at:string|null;}
export type SocialAdminClaimStatus='submitted'|'withdrawn'|'selected'|'approved'|'rejected'|'resolved'|'disputed';
export interface SocialAdminClaim {id:string;organization_id:string;post_id:string;claimant_user_id:string;message:string;evidence:JsonValue;status:SocialAdminClaimStatus;created_at:string;updated_at:string;}
export type SocialAdminBountyStatus='awaiting_funding'|'funded'|'payout_requested'|'paid'|'refund_requested'|'refunded'|'failed'|'disputed'|'expired';
/** Admin SQL uses to_jsonb(numeric), so amount is a JSON number; public capability projection instead uses a decimal string. */
export interface SocialAdminBounty {id:string;organization_id:string;post_id:string;unit:'money'|'asset';code:string;amount:number;status:SocialAdminBountyStatus;external_reference:string|null;expires_at:string|null;created_at:string;updated_at:string;}
export type SocialAdminRestrictionScope='all'|'post'|'comment'|'claim'|'reaction';
export interface SocialAdminCreateRestrictionInput {user_id:string;scope:SocialAdminRestrictionScope;reason:string;evidence_ref?:string|null;starts_at?:string|null;ends_at?:string|null;}
export interface SocialAdminRestriction {id:string;organization_id:string;user_id:string;scope:SocialAdminRestrictionScope;reason:string;evidence_ref:string|null;status:'active'|'expired'|'revoked';starts_at:string;ends_at:string|null;created_by:string;revoked_by:string|null;created_at:string;updated_at:string;}
export interface SocialAdminReasonInput {reason:string;}
export interface SocialAdminClaimDecision {claim_id:string;post_id:string;status:'resolved'|'rejected';}
export interface SocialAdminLocation {post_id:string;latitude:number;longitude:number;expires_in_seconds:number;}
export interface SocialAdminActor {user_id:string;posts:number;last_activity_at:string;}
export interface SocialAdminActorDetail {user_id:string;posts:number;comments:number;reports_submitted:number;claims:number;restrictions:SocialAdminRestriction[];}
export interface SocialAdminRestrictionCreated {id:string;status:'active';}
export interface SocialAdminRestrictionRevoked {id:string;status:'revoked';}
export interface SocialAdminIntegrationPending {id:string;status:'pending';}
export interface SocialAdminAnalytics {posts_by_status:Record<string,number>;reports_by_status:Record<string,number>;claims_by_status:Record<string,number>;navigation_grants:number;}
export interface SocialAdminAudit {id:string;organization_id:string;operator_user_id:string;action:string;target_type:string;target_id:string;reason:string|null;request_id:string|null;metadata:JsonValue;created_at:string;}
/** payload is the application-defined event body stored by Social's durable integration outbox. */
export interface SocialAdminIntegration {id:string;organization_id:string;topic:string;aggregate_type:string;aggregate_id:string;payload:JsonValue;status:'pending'|'delivered'|'failed'|'dead_letter';attempts:number;last_error:string|null;next_attempt_at:string|null;created_at:string;updated_at:string;}
export interface SocialAdminSettings {contract_version:'capabilities-v1';location_encryption_configured:boolean;assertion_issuers_configured:boolean;secrets_exposed:false;}
/** Public assertion snapshot contents are intentionally issuer-defined JSON, stored verbatim by the service. */
export interface SocialCapabilitySubject {subject_type:string|null;subject_ref:string|null;public_snapshot:JsonValue;}
export interface SocialCapabilityLocation {public_label:string|null;public_precision:string|null;navigation_enabled:boolean;exact_location_available:boolean;}
export interface SocialCapabilityBounty {unit:string|null;code:string|null;amount:string|null;status:string|null;expires_at:string|null;}
export interface SocialCapabilityLinkedAction {action_type:string|null;resource_ref:string|null;public_snapshot:JsonValue;}
export interface SocialAdminCapabilities {version:1;post_id:string;author_user_id:string;lifecycle_status:SocialAdminLifecycle;subject:SocialCapabilitySubject|null;location:SocialCapabilityLocation|null;bounty:SocialCapabilityBounty|null;linked_actions:SocialCapabilityLinkedAction[];}

export interface SocialAdminPostDetail {post:Omit<SocialAdminPost,'metadata'>;metadata:JsonValue;reports:SocialAdminReport[];comments:number;views:number;shares:number;capabilities:SocialAdminCapabilities;}
export interface SocialAdminModerationQueue {posts:SocialAdminPost[];comments:SocialAdminComment[];reports:SocialAdminReport[];}
