import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
import type {CreatePaymentInput,CreatePaymentResponse,PaymentEnvelope,PaymentTransactionStatus} from './types.js';
import type {RewardRefundReceipt} from './reward-refunds.js';
export interface RewardPaymentReceipt {uuid:string;amount:number;status:PaymentTransactionStatus|null;service_name:string;service_model_type:string|null;service_model_id:string|null;live_payment?:boolean}
export interface RewardCheckoutReadiness {live_gateway_ready:boolean;refund_supported:boolean;refund_operator_count?:number;refund_mode?:string|null}
export type RewardPaymentResponse=PaymentEnvelope<RewardPaymentReceipt>;
/** Configured product checkout. Trusted backend credentials must never be sent to browsers. */
export class RewardCheckoutApi extends ServiceApi {
 /** Backend-only gateway/refund configuration check using the product service token; availability does not prove actual reserve funding or bank acceptance. */
 readiness(product:string,options?:RequestOptions){return this.client.get<PaymentEnvelope<RewardCheckoutReadiness>>(`/api/v1/internal/reward-checkouts/${encodeURIComponent(product)}/readiness`,undefined,options)}
 /** Backend-only idempotent registration or reconciliation of an Asset-reserved original-pack refund. */
 refund(product:string,body:RewardRefundReceipt,options?:RequestOptions<RewardRefundReceipt>){return this.client.post<PaymentEnvelope<RewardRefundReceipt>,RewardRefundReceipt>(`/api/v1/internal/reward-checkouts/${encodeURIComponent(product)}/refunds`,body,options)}
 /** Creates a server-priced reward pack payment for a configured product. Requires its service Bearer token and exact order, model, idempotency key and callback origin. Returns 403 for mismatches; never credits coins. */
 create(product:string,body:CreatePaymentInput,options?:RequestOptions<CreatePaymentInput>){return this.client.post<CreatePaymentResponse,CreatePaymentInput>(`/api/v1/internal/reward-checkouts/${encodeURIComponent(product)}/payment`,body,options)}
 /** Reads a verified product transaction. Requires that product's service Bearer token; other products/models return 403. Asset uses this receipt independently before granting coins. */
 receipt(product:string,id:string,options?:RequestOptions){return this.client.get<RewardPaymentResponse>(`/api/v1/internal/reward-checkouts/${encodeURIComponent(product)}/transactions/${encodeURIComponent(id)}`,undefined,options)}
}
