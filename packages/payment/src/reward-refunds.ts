import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
import type {PaymentEnvelope} from './types.js';
export type BankRefundStatus='requested'|'processing'|'refunded';
export interface BankRefundReview {version:number;actor_id:string;bank_reference:string;reason:string;created_at:string}
export interface BankRefund {review_version:number;can_reopen?:boolean;id:string;product:string;profile_id:string;order_id:string;transaction_id:string;gateway_id:number;amount_rial:number;coins:number;status:BankRefundStatus;bank_reference:string|null;executor_id:string|null;created_at:string;settled_at:string|null;reviews:BankRefundReview[];payment:{provider:string;authority:string|null;tracking_code:string|null;masked_card_number:string|null};can_start?:boolean;can_confirm?:boolean}
export interface BankRefundSummary {id:string;product:string;profile_id:string;order_id:string;amount_rial:number;status:BankRefundStatus;created_at:string;confirmations:number}
export interface BankRefundReviewInput {version:number;operation_id:string;reason:string;bank_reference:string|null;original_payer_confirmed:boolean;full_amount_confirmed:boolean}
export interface RewardRefundReceipt {id:string;profile_id:string;order_id:string;transaction_id:string;coins:number;amount_rial:number;status:'pending'|'refunded'}
/** Financial operator workflow. Bank execution occurs in the original merchant portal; two distinct assigned operators verify its completed outcome. */
export class RewardRefundsApi extends ServiceApi {
 /** Requires admin:transaction:read; returns at most 100 pending-first records. */
 list(options?:RequestOptions){return this.client.get<PaymentEnvelope<BankRefundSummary[]>>('/api/v1/reward-refunds/',undefined,options)}
 /** Reads a refund with immutable review rounds. Requires admin:transaction:read; missing IDs return 404. Write capabilities additionally require product assignment. */
 show(id:string,options?:RequestOptions){return this.client.get<PaymentEnvelope<BankRefund>>(`/api/v1/reward-refunds/${encodeURIComponent(id)}`,undefined,options)}
 /** Requires admin:transaction:refund and configured assignment; a refund owner cannot review their own refund. */
 start(id:string,body:BankRefundReviewInput,options?:RequestOptions<BankRefundReviewInput>){return this.client.post<PaymentEnvelope<BankRefund>,BankRefundReviewInput>(`/api/v1/reward-refunds/${encodeURIComponent(id)}/start`,body,options)}
 /** Records an immutable independent bank verification; exact operation replays never count twice. */
 confirm(id:string,body:BankRefundReviewInput,options?:RequestOptions<BankRefundReviewInput>){return this.client.post<PaymentEnvelope<BankRefund>,BankRefundReviewInput>(`/api/v1/reward-refunds/${encodeURIComponent(id)}/confirm`,body,options)}
 /** Reopens only the verification round, retaining all old evidence. Never executes another bank refund. */
 reopen(id:string,body:BankRefundReviewInput,options?:RequestOptions<BankRefundReviewInput>){return this.client.post<PaymentEnvelope<BankRefund>,BankRefundReviewInput>(`/api/v1/reward-refunds/${encodeURIComponent(id)}/reopen`,body,options)}

}
