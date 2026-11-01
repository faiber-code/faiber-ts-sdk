import { ServiceApi, type RequestOptions } from '@faiber/sdk-core';
export type RewardMode = 'distributed' | 'managed';
export interface SpaceProduct {
    id: string;
    title: string;
    description: string;
    amount: number;
    enabled: boolean;
    version: number;
}
export interface SpaceRewards {
    space_id: string;
    enabled: boolean;
    mode: RewardMode;
    moderators: string[];
    version: number;
    can_manage: boolean;
    can_moderate: boolean;
    can_redeem: boolean;
    member_count: number;
    balance?: number;
    treasury?: number;
    history?: {
        id: string;
        source: string;
        destination: string;
        amount: number;
        kind: 'allocation' | 'task' | 'purchase';
        title: string;
        created_at: string;
        source_id: string;
    }[];
    history_has_more?: boolean;
    history_cursor?:string|null;
    products: SpaceProduct[];
    purchases: {
        id: string;
        product_id: string;
        status: 'pending' | 'delivered' | 'failed';
        title: string;
        amount: number;
        created_at: string;
    }[];
    reviews: {
        id: string;
        title: string;
        amount: number;
    }[];
}
export interface SpaceTaskReward {
    locked: boolean;
    enabled: boolean;
    mode: RewardMode;
    request: null | {
        amount: number;
        status: 'pending' | 'approved' | 'awarded' | 'failed';
        user_id: string;
    };
    can_offer: boolean;
    can_approve: boolean;
}

export interface DoxConfigureInput {request_id:string;action:'configure';enabled:boolean;mode:RewardMode;moderators:string[];version:number}
export interface DoxProductInput {id?:string;version?:number;request_id:string;title:string;description:string;amount:number;enabled:boolean}
export interface DoxPurchaseInput {request_id:string;product_id:string;version:number}
export interface DoxTaskInput {request_id:string;action:'request'|'approve';amount?:number}
export interface DoxReceipt {locked?:boolean;payout_status?:'pending'|'approved'|'awarded'|'failed'|null;accepted?:boolean;id?:string;version?:number}
export interface DoxResponse<T> {data:T}
export interface ModerationTask {id:string;title:string;description:string|null;owner_id:string;status:string;status_category:string;completed_at:string|null;version:number;review_status:ModerationStatus;amount:number;payout_status:'paid'|'processing'|'failed'|'none';reviewed_at:string|null;reviewer_id:string|null;checklist:ModerationChecklistItem[]}
export interface ModerationChecklistItem {id:string;title:string;done:boolean}
export type ModerationStatus='pending'|'verified'|'rejected'|'unreviewed';
export interface ModerationQueue {item:ModerationTask|null;remaining:number}
export interface ModerationTaskQuery {status?:'all'|ModerationStatus;page?:number;page_size?:number}
export interface ModerationTaskPage {items:ModerationTask[];total:number;page:number;page_size:number}
export interface ModerationDecision {request_id:string;version:number;action:'approve'|'reject'|'skip';amount?:number}
export type {DoxTransferStatus,DoxTransactionKind,DoxTransactionQuery,DoxTransaction,DoxAccountBalance,DoxSpaceSummary,DoxTransactionPage} from '@faiber/faiber-asset';
import type {DoxTransactionQuery,DoxTransactionPage} from '@faiber/faiber-asset';
/** Space-local rewards. All methods inherit caller authentication from FaiberClient,
 * preserve Axios responses and support cancellation. Requires task:access:use plus
 * scoped project/work-item permissions; inaccessible spaces return 403/404.
 * Dox is isolated per space. Use stable request IDs for retries after transport failures. */
export class SpaceRewardsApi extends ServiceApi {
 /** Read settings, wallet, products and a 100-entry history page. Pass history_cursor as before to continue. Requires project.read and current membership. */
 read(id:string,before?:string,options?:RequestOptions){return this.client.get<DoxResponse<SpaceRewards>>(`/api/v1/projects/${encodeURIComponent(id)}/dox`,before?{before}:undefined,options)}
 /** Configure rewards as the creator with project.update. Starts disabled; managed requires selected members. 409 on stale version; allocation is 500 per member, once. */
 configure(id:string,body:DoxConfigureInput,options?:RequestOptions<DoxConfigureInput>){return this.client.post<DoxResponse<DoxReceipt>,DoxConfigureInput>(`/api/v1/projects/${encodeURIComponent(id)}/dox`,body,options)}
 /** Create or update an owner-managed product. Positive integer amounts, title <=300; updates require its current version. */
 product(id:string,body:DoxProductInput,options?:RequestOptions<DoxProductInput>){return this.client.post<DoxResponse<DoxReceipt>,DoxProductInput>(`/api/v1/projects/${encodeURIComponent(id)}/dox/products`,body,options)}
 /** Purchase a versioned product with reward.redeem; durable settlement may remain processing. Successful transfers notify current members. */
 purchase(id:string,body:DoxPurchaseInput,options?:RequestOptions<DoxPurchaseInput>){return this.client.post<DoxResponse<DoxReceipt>,DoxPurchaseInput>(`/api/v1/projects/${encodeURIComponent(id)}/dox/purchase`,body,options)}
 /** Read a task's estimate, transfer status and available actions. Requires work_item.read. locked means approval prevents task mutations. */
 task(id:string,options?:RequestOptions){return this.client.get<DoxResponse<SpaceTaskReward>>(`/api/v1/work-items/${encodeURIComponent(id)}/dox`,undefined,options)}
 /** Offer as creator before completion, or approve as authorized creator/moderator. Self-review is forbidden; failed payouts are retryable. */
 changeTask(id:string,body:DoxTaskInput,options?:RequestOptions<DoxTaskInput>){return this.client.post<DoxResponse<DoxReceipt>,DoxTaskInput>(`/api/v1/work-items/${encodeURIComponent(id)}/dox`,body,options)}
 /** Get the next completed task and remaining count, optionally a specific task. Requires selected managed-reward moderator, membership and approval.review. Own tasks are excluded. */
 queue(id:string,task?:string,options?:RequestOptions){return this.client.get<DoxResponse<ModerationQueue>>(`/api/v1/projects/${encodeURIComponent(id)}/moderation`,task?{task}:undefined,options)}
 /** Page all visible tasks by review status. Requires moderator access; page is one-based, page_size 1..100 (default20). */
 tasks(id:string,query:ModerationTaskQuery={},options?:RequestOptions){return this.client.get<DoxResponse<ModerationTaskPage>>(`/api/v1/projects/${encodeURIComponent(id)}/moderation/tasks`,{...query},options)}
 /** Approve/lock with an integer Dox amount (zero allowed), reject to Todo, or skip to the queue end. Requires moderator access and current task version. 409 on concurrent review; never pays twice. */
 decide(id:string,task:string,body:ModerationDecision,options?:RequestOptions<ModerationDecision>){return this.client.post<DoxResponse<DoxReceipt>,ModerationDecision>(`/api/v1/projects/${encodeURIComponent(id)}/moderation/${encodeURIComponent(task)}`,body,options)}
 /** Page the full space ledger or processing/failed attempts; moderator-only. account is space or user:UUID; direction requires account. Summary includes all space balances, independent of filters. */
 transactions(id:string,query:DoxTransactionQuery={},options?:RequestOptions){return this.client.get<DoxResponse<DoxTransactionPage>>(`/api/v1/projects/${encodeURIComponent(id)}/moderation/transactions`,{...query},options)}
}
