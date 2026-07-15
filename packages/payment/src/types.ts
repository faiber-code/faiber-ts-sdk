import type { ApiEnvelope, JsonObject, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
export interface Gateway extends JsonObject {
    id: string;
    name: string;
    provider: string;
    status: string;
    priority?: number;
}
export interface CreateGatewayInput extends JsonObject {
    name: string;
    provider: string;
    status?: string;
    priority?: number;
    options?: JsonObject;
}
export interface UpdateGatewayInput extends Partial<CreateGatewayInput> {
}
export interface Transaction extends JsonObject {
    id: string;
    amount: number;
    currency: string;
    status: string;
    reference?: string;
    created_at?: string;
}
export interface CreatePaymentInput extends JsonObject {
    amount: number;
    currency: string;
    gateway_id?: string;
    callback_url?: string;
    metadata?: JsonObject;
}
export interface PaymentResult extends JsonObject {
    transaction: Transaction;
    redirect_url?: string;
}
export interface GatewayOption extends JsonObject {
    id: string;
    name: string;
    provider: string;
}
export interface DailyIncome extends JsonObject {
    date: string;
    amount: number;
    count: number;
}
export interface GatewayListResponse extends ResourceListResponse<Gateway> {
}
export interface GatewayResponse extends ResourceResponse<Gateway> {
}
export interface TransactionListResponse extends ResourceListResponse<Transaction> {
}
export interface TransactionResponse extends ResourceResponse<Transaction> {
}
export interface CreatePaymentResponse extends ApiEnvelope<PaymentResult> {
}
export interface GatewayOptionsResponse extends ApiEnvelope<GatewayOption[]> {
}
export interface DailyIncomeResponse extends ApiEnvelope<DailyIncome[]> {
}
