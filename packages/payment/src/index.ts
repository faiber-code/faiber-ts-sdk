import { ServiceApi, type RequestOptions } from "@faiber/sdk-core";
import type { CreateGatewayInput, CreatePaymentInput, CreatePaymentResponse, GatewayListResponse, GatewayOptionsResponse, GatewayResponse, TransactionListResponse, TransactionResponse, UpdateGatewayInput, GatewayListQuery, TransactionListQuery, DailyIncomeQuery, UpdatePaymentSettingsInput } from "./types.js";
import { PaymentOperations } from "./operations.js";
/** Gateway CRUD retains the deleted record envelope returned by Payment. All methods retain Axios metadata/cancellation and reject with AxiosError. */
export class PaymentGatewaysApi extends ServiceApi {
    /** List by status with bracketed pagination; requires admin:gateway:read. */
    list(params?: GatewayListQuery, options?: RequestOptions) { return this.client.get<GatewayListResponse>("/api/v1/gateways", params, options); }
    /** Read an integer gateway ID; requires admin:gateway:read. Missing ID returns404. */
    show(id: number, options?: RequestOptions) { return this.client.get<GatewayResponse>(`/api/v1/gateways/${encodeURIComponent(id)}`, undefined, options); }
    /** Create provider configuration; requires admin:gateway:create. Invalid provider returns422. */
    create(data: CreateGatewayInput, options?: RequestOptions<CreateGatewayInput>) { return this.client.post<GatewayResponse, CreateGatewayInput>("/api/v1/gateways", data, options); }
    /** Patch configured fields; requires admin:gateway:update. Null optional fields do not clear stored values. */
    update(id: number, data: UpdateGatewayInput, options?: RequestOptions<UpdateGatewayInput>) { return this.client.patch<GatewayResponse, UpdateGatewayInput>(`/api/v1/gateways/${encodeURIComponent(id)}`, data, options); }
    /** Hard-delete and return the gateway record; requires admin:gateway:delete. Missing ID returns404. */
    delete(id: number, options?: RequestOptions) { return this.client.delete<GatewayResponse>(`/api/v1/gateways/${encodeURIComponent(id)}`, options); }
}
/** Transaction administration list and UUID status lookup; every call retains Axios metadata and cancellation. */
export class PaymentTransactionsApi extends ServiceApi {
    /** Filter transactions and summaries; bracket pagination defaults 1/20 and size clamps 1..100. Requires admin:transaction:read; errors use AxiosError. */
    list(params?: TransactionListQuery, options?: RequestOptions) { return this.client.get<TransactionListResponse>("/api/v1/transactions", params, options); }
    /** Read status only by transaction UUID; no local permission gate. Missing UUID returns 404; errors use AxiosError. */
    show(uuid: string, options?: RequestOptions) { return this.client.get<TransactionResponse>(`/api/v1/transactions/${encodeURIComponent(uuid)}`, undefined, options); }
}
export class PaymentApi extends ServiceApi {
    readonly operations = new PaymentOperations(this.client);
    readonly gateways = new PaymentGatewaysApi(this.client);
    readonly transactions = new PaymentTransactionsApi(this.client);
    /** Create a positive-amount payment link with optional body idempotency_key; returns transaction UUID and redirect URL. Product reservations use their trusted checkout routes. Errors include 409 conflict, 422 validation and 502 provider failure; Asset may require x-asset-payment-token. */
    createPayment(data: CreatePaymentInput, options?: RequestOptions<CreatePaymentInput>) { return this.client.post<CreatePaymentResponse, CreatePaymentInput>("/api/v1/payment", data, options); }
    /** Read provider/status label arrays; requires admin:gateway:read. Returns full Axios response; permission failures reject with AxiosError. */
    gatewayOptions(options?: RequestOptions) { return this.client.get<GatewayOptionsResponse>("/api/v1/gateways/options", undefined, options); }
    /** Accepted income per UTC date, zero-filled; backend defaults30 days and clamps1–90. Requires admin:transaction:read. */
    dailyIncome(options?: RequestOptions) { return this.operations.transactionDailyIncomeGet(undefined, options); }
    /** Read the chart with an explicit day window; retains Axios metadata and cancellation. */
    dailyIncomeFor(params: DailyIncomeQuery, options?: RequestOptions) { return this.operations.transactionDailyIncomeGet(params, options); }
    /** Read configured fallback URL (default https://faiber.ir); requires admin:gateway:read. Returns full Axios response; errors use AxiosError. */
    settings(options?: RequestOptions) { return this.operations.settingsShowGet(options); }
    /** Save absolute HTTP(S) fallback URL without credentials; requires admin:gateway:update. Invalid URL returns 422; returns normalized URL with Axios metadata. */
    updateSettings(data: UpdatePaymentSettingsInput, options?: RequestOptions<UpdatePaymentSettingsInput>) { return this.operations.settingsUpdatePatch(data, options); }
    /** Read status only by UUID; no local permission gate. Missing transaction returns 404; returns full Axios response and rejects with AxiosError. */
    transactionStatus(id: string, options?: RequestOptions) { return this.operations.routerShowStatusGet(id, options); }
    /** Read newest-first verification records by UUID; requires admin:transaction:read. Missing transaction returns 404; errors use AxiosError. */
    verificationLogs(id: string, options?: RequestOptions) { return this.operations.transactionVerificationLogsGet(id, options); }
    /** Verify stored transaction UUID with its provider and record verifier; requires authenticated admin:transaction:verify. HTTP 200 may report successful:false. Returns full Axios response; missing records return 404. */
    verifyTransaction(id: string, options?: RequestOptions) { return this.operations.transactionVerifyPaymentPost(id, options); }
    /** Reject pending transaction UUID and emit result with verifier; requires authenticated admin:transaction:verify. Other states return 409; returns full Axios response and errors use AxiosError. */
    rejectTransaction(id: string, options?: RequestOptions) { return this.operations.transactionRejectPaymentPost(id, options); }
    /** Read HTTP integration metadata and SDK snippets; declared IDP permission admin:integration:read, with ingress enforcement required. Returns full Axios response; errors use AxiosError. */
    integrationDocs(options?: RequestOptions) { return this.operations.integrationIntegrationDocsShowGet(options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";

export * from "./contracts.types.js";
