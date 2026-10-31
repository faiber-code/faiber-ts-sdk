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
export interface DoOrder {refund_eligible?:boolean;id:string;pack:DoPack;status:'pending'|'paid'|'refunded'|'cancelled';redirect_url:string|null}
export interface RewardStreak {current_days:number;best_days:number;freezes:number;last_day:string|null}
export interface RewardEnrollment {workspace_id:string;user_id:string;enrolled_at:string;timezone:string;first_purchase_id:string|null;first_purchase_status:'reserved'|'paid'|null;referrer_id:string|null}
export interface RewardReferral {status:'pending'|'reserved'|'qualified'|'expired';expires_at:string}
export interface DoRedemption {id:string;item:DoItem;coins:number;status:'pending'|'delivered'|'held';created_at:string}
export interface DoOwnedItem {item_id:string;kind:'cosmetic'|'badge'}
export interface DoRiskHold {reason:string;created_at:string}
export interface DoRiskAppeal {id:string;reason:string;status:'open'|'resolved';created_at:string}
export interface DoRiskAppealInput {request_id:string;reason:string}
export interface DoRiskAppealReceipt {id:string;status:'open'}
export interface CampaignBudgetSummary {campaign_id:string;status:string;available:number;reserved:number}
export interface DoRefund {id:string;order_id:string;coins:number;amount_rial:number;status:'pending'|'refunded';created_at?:string}
export interface DoRefundRequest {request_id:string}
export interface DoSnapshot {refunds?:DoRefund[];refund_reserved?:number;campaign_budgets?:CampaignBudgetSummary[];risk_hold:DoRiskHold|null;risk_appeals:DoRiskAppeal[];version:number;enabled:boolean;public_creation:boolean;public_participation:boolean;high_value_threshold:number;review_hours:number;appeal_days:number;first_week_discount:number;later_discount:number;referral_extra_discount:number;referral_reward:number;referral_monthly_limit:number;referral_campaign_id:string|null;available:number;reserved:number;packs:DoPack[];catalog:DoItem[];history:DoHistory[];orders:DoOrder[];campaign_available?:number;redemptions:DoRedemption[];owned_items:DoOwnedItem[];standard_approvals:number;high_value_approvals:number}
export interface RewardOverview extends DoSnapshot {discount_percent:number;enrollment:RewardEnrollment;streak:RewardStreak;referrals:RewardReferral[]}
export interface RewardPurchase {request_id:string;pack_id?:string;item_id?:string}
export interface DoPackCheckout {redirect_url:string}
export interface DoPackSettlement {credited:number;redirect_url?:string;status?:'pending'|'paid'|'cancelled'}
export interface RewardCheckin {request_id:string;timezone:string;referrer_id?:string}
export interface TaskDoxRequest {id:string;workspace_id:string;space_id:string;work_item_id:string;user_id:string;amount:number;status:'pending'|'approved'|'awarded';reviewer_id:string|null}
export interface TaskDoxState {enabled:boolean;request:TaskDoxRequest|null;can_offer:boolean;can_approve:boolean}
export interface DoxScore {space_id:string;enabled:boolean;score:number;can_manage:boolean}
export interface DoxMutation {request_id:string;action:'request'|'approve'|'configure';amount?:number;enabled?:boolean}
export interface DoxResult {accepted?:boolean;enabled?:boolean}

/** Campaigns and rewards use authenticated Task access; private records additionally
 * enforce campaign/space membership. Every operation preserves Axios responses,
 * supports cancellation and reports unavailable funding as a service error. */
export class RewardsApi extends ServiceApi {
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
 /** Gets the global Do wallet, catalog, offers and account-wide streak. */
 overview(options?:RequestOptions){return this.client.get<RewardResponse<RewardOverview>>('/api/v1/rewards',undefined,options)}
 /** Appeals a risk hold using a stable request ID. Requires authenticated Task access; the operator's reason stays visible in overview. 409 if an appeal is already open. */
 appealRisk(body:DoRiskAppealInput,options?:RequestOptions<DoRiskAppealInput>){return this.client.post<RewardResponse<DoRiskAppealReceipt>,DoRiskAppealInput>('/api/v1/rewards/risk-appeal',body,options)}
 /** Records one server-dated check-in, with replay protection. */
 checkin(body:RewardCheckin,options?:RequestOptions<RewardCheckin>){return this.client.post<RewardResponse<RewardStreak>,RewardCheckin>('/api/v1/rewards/checkin',body,options)}
 /** Prepares a server-priced coin-pack payment. Never grants coins at checkout. */
 buyPack(body:RewardPurchase,options?:RequestOptions<RewardPurchase>){return this.client.post<RewardResponse<DoPackCheckout>,RewardPurchase>('/api/v1/rewards/packs',body,options)}
 /** Reconciles a provider-verified pack payment; duplicate callbacks do not mint twice. */
 reconcilePack(id:string,options?:RequestOptions<undefined>){return this.client.post<RewardResponse<DoPackSettlement>,undefined>(`/api/v1/rewards/packs/${encodeURIComponent(id)}/reconcile`,undefined,options)}
 /** Reserves only an untouched original purchased pack for refund. Stable request IDs replay safely; committed, transferred or spent origins cannot be refunded. */
 refundPack(id:string,body:DoRefundRequest,options?:RequestOptions<DoRefundRequest>){return this.client.post<RewardResponse<DoRefund>,DoRefundRequest>(`/api/v1/rewards/packs/${encodeURIComponent(id)}/refund`,body,options)}
 /** Buys an enabled catalog item; entitlement delivery may remain pending. */
 redeem(body:RewardPurchase,options?:RequestOptions<RewardPurchase>){return this.client.post<RewardResponse<RewardReceipt>,RewardPurchase>('/api/v1/rewards/redeem',body,options)}
 /** Reads one's private Dox score in an authorized space. */
 dox(id:string,options?:RequestOptions){return this.client.get<RewardResponse<DoxScore>>(`/api/v1/projects/${encodeURIComponent(id)}/dox`,undefined,options)}
 /** Enables local Dox scoring; requires space campaign management. */
 configureDox(id:string,body:DoxMutation,options?:RequestOptions<DoxMutation>){return this.client.post<RewardResponse<DoxResult>,DoxMutation>(`/api/v1/projects/${encodeURIComponent(id)}/dox`,body,options)}
 /** Reads the authorized task's private recognition request and available approval actions. Requires Task access and work_item.read; inaccessible IDs return 404. */
 taskDoxState(id:string,options?:RequestOptions){return this.client.get<RewardResponse<TaskDoxState>>(`/api/v1/work-items/${encodeURIComponent(id)}/dox`,undefined,options)}
 /** Offers Dox before completion or approves another member's completed task. */
 taskDox(id:string,body:DoxMutation,options?:RequestOptions<DoxMutation>){return this.client.post<RewardResponse<DoxResult>,DoxMutation>(`/api/v1/work-items/${encodeURIComponent(id)}/dox`,body,options)}
}
