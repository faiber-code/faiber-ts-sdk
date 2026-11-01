import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
import type {TaskResponse,ProductPlanId} from './types.js';
import type {PlanDefinition} from './wire.types.js';
export interface FaiberSyncSettings {version:number;destination_id?:string;organization_id?:string;auto_import:boolean;auto_update:boolean;status_map:Record<string,string>;last_synced_at?:string;last_error?:string}
export interface FaiberSyncQueued {queued:boolean}
export interface SpaceReportQuery {from:string;to:string}
export interface SpaceReportPersonTime {user_id:string;period_seconds:number;total_seconds:number}
export interface SpaceReportTask {id:string;title:string;status:string;priority:string;owner_id:string;created_at:string;due_at:string|null;completed_at:string|null;completed_by:string|null;period_seconds:number;total_seconds:number;times:SpaceReportPersonTime[];history_available:boolean}
export interface SpaceReportData {project_id:string;from:string;to:string;generated_at:string;tasks:SpaceReportTask[]}
export interface AiCreditBalance {profile_id:string;currency:'IRR';plan_rial:string;topup_rial:string;reserved_rial:string;used_rial:string;debt_rial:string;next_expiry:string|null}
export interface AdminUserBilling {user_id:string;plan:ProductPlanId;status:string;expires_at:string|null;state:string;plans:PlanDefinition[];credit_enabled:boolean;ai_credits:AiCreditBalance|null;credit_unavailable:boolean;pending_adjustments:number}
export type AdminBillingAdjustment={kind:'credit';request_id:string;amount_toman:number;reason:string}|{kind:'plan';request_id:string;plan:string;expected_state:string;reason:string};
export interface AdminBillingReceipt {request_id:string;status:'applied'|'queued'}
/** Generic project synchronization, reporting and subscription administration.
 * Inherits authenticated FaiberClient transport and preserves full Axios responses. */
export class TaskIntegrationsApi extends ServiceApi {
 /** Read this actor's Faiber project synchronization settings. Requires task:access:use; settings are actor-scoped. */
 sync(project:string,options?:RequestOptions){return this.client.get<TaskResponse<FaiberSyncSettings>>(`/api/v1/integrations/faiber/${encodeURIComponent(project)}/sync`,undefined,options)}
 /** Save versioned settings after checking source connection and destination project permissions. 409 for stale settings; disabling remains possible after revocation. */
 saveSync(project:string,input:FaiberSyncSettings,options?:RequestOptions<FaiberSyncSettings>){return this.client.put<TaskResponse<FaiberSyncSettings>,FaiberSyncSettings>(`/api/v1/integrations/faiber/${encodeURIComponent(project)}/sync`,input,options)}
 /** Queue a sync attempt; does not imply imported data is already available. */
 runSync(project:string,options?:RequestOptions){return this.client.post<TaskResponse<FaiberSyncQueued>>(`/api/v1/integrations/faiber/${encodeURIComponent(project)}/sync/run`,{},options)}
 /** Scoped timer report for [from,to). Requires project reporting access; times are seconds. */
 report(project:string,query:SpaceReportQuery,options?:RequestOptions){return this.client.get<TaskResponse<SpaceReportData>>(`/api/v1/projects/${encodeURIComponent(project)}/report`,{...query},options)}
 /** Inspect an authorized admin target's subscription and credit balance. Upstream failure sets credit_unavailable without inventing a balance. */
 billing(user:string,options?:RequestOptions){return this.client.get<TaskResponse<AdminUserBilling>>(`/api/v1/plans/admin/users/${encodeURIComponent(user)}`,undefined,options)}
 /** Record an explicit, audited entitlement adjustment. Stable request IDs prevent double grants; plan changes require the returned state precondition. queued means durable delivery is pending. */
 adjustBilling(user:string,input:AdminBillingAdjustment,options?:RequestOptions<AdminBillingAdjustment>){return this.client.post<TaskResponse<AdminBillingReceipt>,AdminBillingAdjustment>(`/api/v1/plans/admin/users/${encodeURIComponent(user)}/adjustments`,input,options)}
}
