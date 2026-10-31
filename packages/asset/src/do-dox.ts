import { ServiceApi, type RequestOptions } from '@faiber/sdk-core';

export interface DoPack { id:string; coins:number; price_rial:number; enabled:boolean }
export interface AssetDoRefundReceipt {id:string;profile_id:string;order_id:string;transaction_id:string;coins:number;amount_rial:number;status:'pending'|'refunded'}
export interface AssetDoRefundRequest {id:string;operation_id:string;profile_id:string;order_id:string}
/** Trusted backend integration. Supply x-do-service-token for Task requests or x-do-refund-token for Payment reads; never expose these credentials in a browser. */
export class DoRefundIntegrationApi extends ServiceApi {
 reserve(body:AssetDoRefundRequest,options?:RequestOptions<AssetDoRefundRequest>){return this.client.post<DoResponse<AssetDoRefundReceipt>,AssetDoRefundRequest>('/api/v1/internal/do/refunds',body,options)}
 receipt(id:string,options?:RequestOptions){return this.client.get<DoResponse<AssetDoRefundReceipt>>(`/api/v1/internal/do/refunds/${encodeURIComponent(id)}`,undefined,options)}
}
export interface DoItem { id:string; title_en:string; title_fa:string; kind:'cosmetic'|'badge'|'plan'; coins:number; cost_rial:number; enabled:boolean; plan:string|null }
export interface DoPolicy {
  pilot_profiles?:string[]; enabled:boolean; public_creation:boolean; public_participation:boolean; packs:DoPack[]; catalog:DoItem[];
  reserve_rial_per_do:number; fee_basis_points:number; marketing_budget_rial:number; margin_basis_points:number;
  delivery_cost_rial:Record<string,number>; high_value_threshold:number; standard_approvals:number; high_value_approvals:number;
  review_hours:number; appeal_days:number; first_week_discount:number; later_discount:number; referral_extra_discount:number;
  referral_reward:number; referral_monthly_limit:number; referral_campaign_id:string|null;
}
export interface DoResponse<T> { status:string; message:string; data:T }
export interface DoPolicySnapshot { can_edit:boolean; version:number; policy:DoPolicy }
export interface DoPolicyEdit { version:number; policy:DoPolicy; reason:string }
export interface DoRiskEdit { profile_id:string; held:boolean; reason:string }
export interface DoRiskResult { held:boolean }
export interface DoCampaignFunding { request_id:string; campaign_id:string; owner_id:string; coins:number; reason:string }
export interface DoFundingResult { funded:number; reserved_rial:number }
export interface DoPolicyAuditData { reason:string; before:DoPolicy; after:DoPolicy }
export interface DoRiskAuditData { profile_id:string; held:boolean; reason:string }
export interface DoFundingAuditData { actor:string; campaign_id:string; owner_id:string; coins:number; reason:string }
export type DoAuditEvent = {id:string;actor_id:string;created_at:string} & (
  {action:'risk_signal';data:{profile_id:string;reason:'circular_funding';assignment_id:string}}|{action:'risk_appeal';data:{profile_id:string;reason:string}}|{action:'policy';data:DoPolicyAuditData}|{action:'risk';data:DoRiskAuditData}|{action:'marketing_fund';data:DoFundingAuditData}
);
export interface DoRiskAppeal {id:string;profile_id:string;reason:string;status:'open'|'resolved';created_at:string}
export interface DoAudit { risk_appeals:DoRiskAppeal[];outstanding:number; balances:number; backing_rial:string; submitted:number; pending:number; audit:DoAuditEvent[] }

/** Product-isolated funded rewards policy. The existing scoped economy remains separate.
 * All methods inherit FaiberClient authentication, cancellation, and full Axios responses.
 */
export class DoEconomyApi extends ServiceApi {
  /** Reads packs, benefit prices, review rules and promotion reserves. Requires admin:coin_settings:read. */
  policy(options?:RequestOptions){return this.client.get<DoResponse<DoPolicySnapshot>>('/api/v1/do/policy',undefined,options)}
  /** Saves an audited version of policy. Requires admin:coin_settings:update; stale versions and underfunded packs return 409. */
  savePolicy(body:DoPolicyEdit,options?:RequestOptions<DoPolicyEdit>){return this.client.put<DoResponse<DoPolicySnapshot>,DoPolicyEdit>('/api/v1/do/policy',body,options)}
  /** Reads outstanding backing and the latest 100 operator audit records. Requires admin:coin_settings:read. */
  audit(options?:RequestOptions){return this.client.get<DoResponse<DoAudit>>('/api/v1/do/audit',undefined,options)}
  /** Holds or releases a profile's payouts/redemptions with an audited reason. Requires admin:coin_settings:update. */
  setRisk(body:DoRiskEdit,options?:RequestOptions<DoRiskEdit>){return this.client.post<DoResponse<DoRiskResult>,DoRiskEdit>('/api/v1/do/risk',body,options)}
  /** Funds a campaign from explicit marketing reserves. Requires admin:coin_settings:update. Reuse request_id on retries; changed semantics return 409. */
  fundCampaign(body:DoCampaignFunding,options?:RequestOptions<DoCampaignFunding>){return this.client.post<DoResponse<DoFundingResult>,DoCampaignFunding>('/api/v1/do/campaign-funding',body,options)}
}
