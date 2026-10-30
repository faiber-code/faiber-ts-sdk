import { ServiceApi, type RequestOptions } from '@faiber/sdk-core';
export type CampaignAsset = 'do'|'dox';
export type CampaignVisibility = 'public'|'private';
export type CampaignStatus = 'draft'|'published'|'closed';
export type AssignmentStatus = 'funding_pending'|'active'|'submitted'|'changes_requested'|'rejected'|'appealed'|'payout_pending'|'paid'|'release_pending'|'released';
export interface RewardResponse<T>{data:T}
export interface Campaign {reward_min?:number|null;reward_max?:number|null;remaining_slots?:number;available_do?:number|null;id:string;organization_id:string;space_id:string|null;owner_id:string;asset:CampaignAsset;visibility:CampaignVisibility;status:CampaignStatus;official:boolean;title:string;description:string;terms:string;cover:string|null;starts_at:string;ends_at:string;version:number;created_at:string}
export interface CampaignInput {request_id:string;space_id:string|null;title:string;description:string;terms:string;cover:string|null;asset:CampaignAsset;visibility:CampaignVisibility;starts_at:string;ends_at:string;moderators:string[]}
export interface CampaignJob {remaining_slots?:number;available_slots?:number;available?:boolean;required_approvals?:number|null;id:string;campaign_id:string;title:string;instructions:string;reward:number;capacity:number;per_person:number;submission_hours:number;evidence_type:'proof'|'referral';version:number;enabled:boolean}
export interface CampaignJobInput {request_id:string;title:string;instructions:string;reward:number;capacity:number;per_person:number;submission_hours:number;evidence_type:'proof'|'referral'}
export interface CampaignMutation {request_id:string;version?:number;action:'join'|'invite'|'moderator'|'remove'|'publish'|'visibility'|'fund'|'close'|'official'|'start';user_id?:string;coins?:number;confirmed?:boolean;visibility?:CampaignVisibility}
export interface RewardReceipt {id:string;version?:number;status?:AssignmentStatus|'pending';accepted?:boolean;coins?:number;approvals?:number}
export interface CampaignList {items:Campaign[];page:number}
export interface CampaignListQuery {view?:'mine'|'public';page?:number;space_id?:string}
export interface CampaignMember {user_id:string;role:'participant'|'moderator';active:boolean}
export interface CampaignAvailability {available_do:number|null;review_hours:number|null;appeal_days:number|null}
export interface CampaignDetail {availability?:CampaignAvailability;campaign:Campaign;jobs:CampaignJob[];role:'participant'|'moderator'|null;members:CampaignMember[];finance:DoSnapshot|null}
export interface CampaignAssignment {id:string;campaign_id:string;job_id:string;user_id:string;status:AssignmentStatus;reward:number;instructions:string;required_approvals:number;review_hours:number;appeal_days:number;deadline:string;review_deadline:string|null;appeal_until:string|null;submission_version:number;version:number;risk_flags:string[];last_error:string|null;created_at:string;campaign_title?:string;job_title?:string;asset?:CampaignAsset}
export interface CampaignWorkList {items:CampaignAssignment[]}
export interface CampaignWorkQuery {view?:'review'|'appeals'}
export interface CampaignProof {assignment_id:string;version:number;note:string;links:string[];attachment_ids:string[];external_ids:string[];created_at:string}
export interface ProofFile {id:string;filename:string;mime:string;size_bytes:number;status:'uploading'|'clean'|'quarantined'}
export interface CampaignReview {id:string;assignment_id:string;submission_version:number;reviewer_id:string;decision:'approve'|'changes'|'reject'|'appeal'|'resolve_approve'|'resolve_reject';reason:string;created_at:string}
export interface CampaignWorkDetail {assignment:CampaignAssignment;submissions:CampaignProof[];reviews:CampaignReview[];files:ProofFile[]}
export interface SubmitCampaignProof {request_id:string;version:number;note:string;links:string[];attachments:string[];external_ids:string[]}
export interface ReviewCampaignProof {request_id:string;version:number;decision:CampaignReview['decision'];reason:string}
export interface DoPack {id:string;coins:number;price_rial:number;enabled:boolean}
export interface DoItem {id:string;title_en:string;title_fa:string;kind:'cosmetic'|'badge'|'plan';coins:number;cost_rial:number;enabled:boolean;plan:string|null}
export interface DoHistory {operation_id:string;source:string;destination:string;coins:number;created_at:string}
export interface DoOrder {id:string;pack:DoPack;status:'pending'|'paid'|'refunded'|'cancelled';redirect_url:string|null}
export interface RewardStreak {current_days:number;best_days:number;freezes:number;last_day:string|null}
export interface RewardEnrollment {workspace_id:string;user_id:string;enrolled_at:string;timezone:string;first_purchase_id:string|null;first_purchase_status:'reserved'|'paid'|null;referrer_id:string|null}
export interface RewardReferral {status:'pending'|'reserved'|'qualified'|'expired';expires_at:string}
export interface DoRedemption {id:string;item:DoItem;coins:number;status:'pending'|'delivered'|'held';created_at:string}
export interface DoOwnedItem {item_id:string;kind:'cosmetic'|'badge'}
export interface DoRiskHold {reason:string;created_at:string}
export interface DoRiskAppeal {id:string;reason:string;status:'open'|'resolved';created_at:string}
export interface CampaignBudgetSummary {campaign_id:string;status:string;available:number;reserved:number}
export interface DoSnapshot {campaign_budgets?:CampaignBudgetSummary[];risk_hold:DoRiskHold|null;risk_appeals:DoRiskAppeal[];version:number;enabled:boolean;public_creation:boolean;public_participation:boolean;high_value_threshold:number;review_hours:number;appeal_days:number;first_week_discount:number;later_discount:number;referral_extra_discount:number;referral_reward:number;referral_monthly_limit:number;referral_campaign_id:string|null;available:number;reserved:number;packs:DoPack[];catalog:DoItem[];history:DoHistory[];orders:DoOrder[];campaign_available?:number;redemptions:DoRedemption[];owned_items:DoOwnedItem[];standard_approvals:number;high_value_approvals:number}
export interface RewardOverview extends DoSnapshot {discount_percent:number;enrollment:RewardEnrollment;streak:RewardStreak;referrals:RewardReferral[]}
export interface RewardPurchase {request_id:string;pack_id?:string;item_id?:string}
export interface DoPackCheckout {redirect_url:string}
export interface DoPackSettlement {credited:number}
export interface RewardCheckin {request_id:string;timezone:string;referrer_id?:string}
export interface DoxScore {space_id:string;enabled:boolean;score:number;can_manage:boolean}
export interface DoxMutation {request_id:string;action:'request'|'approve'|'configure';amount?:number;enabled?:boolean}
export interface DoxResult {accepted?:boolean;enabled?:boolean}

/** Campaigns and rewards use authenticated Task access; private records additionally
 * enforce campaign/space membership. Every operation preserves Axios responses,
 * supports cancellation and reports unavailable funding as a service error. */
export class CampaignsApi extends ServiceApi {
 /** Lists authorized campaigns, 25 per page; view=public never includes private campaigns. */
 campaigns(query?:CampaignListQuery,options?:RequestOptions){return this.client.get<RewardResponse<CampaignList>>('/api/v1/campaigns',query?{...query}:undefined,options)}
 /** Creates a draft; Dox requires a private authorized space. */
 createCampaign(body:CampaignInput,options?:RequestOptions<CampaignInput>){return this.client.post<RewardResponse<RewardReceipt>,CampaignInput>('/api/v1/campaigns',body,options)}
 /** Gets visible campaign metadata and jobs. Proof and participant identities are private. */
 campaign(id:string,options?:RequestOptions){return this.client.get<RewardResponse<CampaignDetail>>(`/api/v1/campaigns/${encodeURIComponent(id)}`,undefined,options)}
 /** Mutates membership, publication, budget or closure; owner permissions apply. */
 changeCampaign(id:string,body:CampaignMutation,options?:RequestOptions<CampaignMutation>){return this.client.post<RewardResponse<RewardReceipt>,CampaignMutation>(`/api/v1/campaigns/${encodeURIComponent(id)}`,body,options)}
 /** Adds a job to an owned draft; accepted reward terms are immutable. */
 addJob(id:string,body:CampaignJobInput,options?:RequestOptions<CampaignJobInput>){return this.client.post<RewardResponse<RewardReceipt>,CampaignJobInput>(`/api/v1/campaigns/${encodeURIComponent(id)}/jobs`,body,options)}
 /** Starts an eligible job; pending funding must complete before submission. */
 startJob(id:string,body:CampaignMutation,options?:RequestOptions<CampaignMutation>){return this.client.post<RewardResponse<RewardReceipt>,CampaignMutation>(`/api/v1/campaign-jobs/${encodeURIComponent(id)}/start`,body,options)}
 /** Lists own assignments or a permitted moderation/appeals queue. */
 work(query?:CampaignWorkQuery,options?:RequestOptions){return this.client.get<RewardResponse<CampaignWorkList>>('/api/v1/campaign-assignments',query?{...query}:undefined,options)}
 /** Gets private evidence, submission versions and review history. */
 assignment(id:string,options?:RequestOptions){return this.client.get<RewardResponse<CampaignWorkDetail>>(`/api/v1/campaign-assignments/${encodeURIComponent(id)}`,undefined,options)}
 /** Submits clean attachment IDs or HTTPS proof links using the current assignment version. */
 submit(id:string,body:SubmitCampaignProof,options?:RequestOptions<SubmitCampaignProof>){return this.client.post<RewardResponse<RewardReceipt>,SubmitCampaignProof>(`/api/v1/campaign-assignments/${encodeURIComponent(id)}/submit`,body,options)}
 /** Reviews or appeals a submission; self-approval is forbidden. */
 review(id:string,body:ReviewCampaignProof,options?:RequestOptions<ReviewCampaignProof>){return this.client.post<RewardResponse<RewardReceipt>,ReviewCampaignProof>(`/api/v1/campaign-assignments/${encodeURIComponent(id)}/review`,body,options)}
 /** Uploads one private proof file. The server scans and validates it before acceptance. */
 upload(id:string,body:FormData,options?:RequestOptions<FormData>){return this.client.post<RewardResponse<ProofFile>,FormData>(`/api/v1/campaign-assignments/${encodeURIComponent(id)}/files`,body,options)}
 /** Downloads evidence only for its participant, moderator or authorized appeal operator. */
 file(id:string,options?:RequestOptions){return this.client.get<Blob>(`/api/v1/campaign-files/${encodeURIComponent(id)}`,undefined,{...options,responseType:'blob'})}
}
