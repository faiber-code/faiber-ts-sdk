import { RestResource, ServiceApi, type RequestOptions } from "@faiber/sdk-core";
import type { CreateGatewayInput, CreatePaymentInput, CreatePaymentResponse, GatewayListResponse, GatewayOptionsResponse, GatewayResponse, Transaction, TransactionListResponse, TransactionResponse, UpdateGatewayInput, GatewayListQuery, TransactionListQuery, DailyIncomeQuery } from "./types.js";
import type * as O from "./operations.types.js";
import { PaymentOperations } from "./operations.js";
/** Gateway CRUD retains the deleted record envelope returned by Payment. All methods retain Axios metadata/cancellation and reject with AxiosError. */
export class PaymentGatewaysApi extends ServiceApi {
    /** List by status with bracketed pagination; requires admin:gateway:read. */
    list(params?: GatewayListQuery, options?: RequestOptions) { return this.client.get<GatewayListResponse>("/api/v1/gateways", params, options); }
    /** Read an integer gateway ID; requires admin:gateway:read. Missing ID returns404. */
    show(id: number, params?: GatewayListQuery, options?: RequestOptions) { return this.client.get<GatewayResponse>(`/api/v1/gateways/${encodeURIComponent(id)}`, params, options); }
    /** Create provider configuration; requires admin:gateway:create. Invalid provider returns422. */
    create(data: CreateGatewayInput, options?: RequestOptions<CreateGatewayInput>) { return this.client.post<GatewayResponse, CreateGatewayInput>("/api/v1/gateways", data, options); }
    /** Patch configured fields; requires admin:gateway:update. Null optional fields do not clear stored values. */
    update(id: number, data: UpdateGatewayInput, options?: RequestOptions<UpdateGatewayInput>) { return this.client.patch<GatewayResponse, UpdateGatewayInput>(`/api/v1/gateways/${encodeURIComponent(id)}`, data, options); }
    /** Hard-delete and return the gateway record; requires admin:gateway:delete. Missing ID returns404. */
    delete(id: number, options?: RequestOptions) { return this.client.delete<GatewayResponse>(`/api/v1/gateways/${encodeURIComponent(id)}`, options); }
}
export class PaymentApi extends ServiceApi {
    readonly operations = new PaymentOperations(this.client);
    readonly gateways = new PaymentGatewaysApi(this.client);
    readonly transactions = new RestResource<Transaction, never, never, TransactionListResponse, TransactionResponse, TransactionListQuery>(this.client, "/api/v1/transactions", { supported: ["list", "show"] });
    createPayment(data: CreatePaymentInput, options?: RequestOptions<CreatePaymentInput>) { return this.client.post<CreatePaymentResponse, CreatePaymentInput>("/api/v1/payment", data, options); }
    gatewayOptions(options?: RequestOptions) { return this.client.get<GatewayOptionsResponse>("/api/v1/gateways/options", undefined, options); }
    /** Accepted income per UTC date, zero-filled; backend defaults30 days and clamps1–90. Requires admin:transaction:read. */
    dailyIncome(options?: RequestOptions) { return this.operations.transactionDailyIncomeGet(undefined, options); }
    /** Read the chart with an explicit day window; retains Axios metadata and cancellation. */
    dailyIncomeFor(params: DailyIncomeQuery, options?: RequestOptions) { return this.operations.transactionDailyIncomeGet(params, options); }
    settings(options?: RequestOptions) { return this.operations.settingsShowGet(options); }
    updateSettings(data: O.SettingsUpdatePatchInput, options?: RequestOptions<O.SettingsUpdatePatchInput>) { return this.operations.settingsUpdatePatch(data, options); }
    transactionStatus(id: string, options?: RequestOptions) { return this.operations.routerShowStatusGet(id, options); }
    verificationLogs(id: string, options?: RequestOptions) { return this.operations.transactionVerificationLogsGet(id, options); }
    verifyTransaction(id: string, options?: RequestOptions) { return this.operations.transactionVerifyPaymentPost(id, options); }
    rejectTransaction(id: string, options?: RequestOptions) { return this.operations.transactionRejectPaymentPost(id, options); }
    integrationDocs(options?: RequestOptions) { return this.operations.integrationIntegrationDocsShowGet(options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";

export * from "./contracts.types.js";
