import { RestResource, ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type { CreateGatewayInput, CreatePaymentInput, CreatePaymentResponse, DailyIncomeResponse, Gateway, GatewayListResponse, GatewayOptionsResponse, GatewayResponse, Transaction, TransactionListResponse, TransactionResponse, UpdateGatewayInput } from "./types.js";
import type * as O from "./operations.types.js";
import { PaymentOperations } from "./operations.js";
export class PaymentApi extends ServiceApi {
    readonly operations = new PaymentOperations(this.client);
    readonly gateways = new RestResource<Gateway, CreateGatewayInput, UpdateGatewayInput, GatewayListResponse, GatewayResponse>(this.client, "/api/v1/gateways", { supported: ["list", "show", "create", "update", "delete"] });
    readonly transactions = new RestResource<Transaction, never, never, TransactionListResponse, TransactionResponse>(this.client, "/api/v1/transactions", { supported: ["list", "show"] });
    createPayment(data: CreatePaymentInput, options?: RequestOptions<CreatePaymentInput>) { return this.client.post<CreatePaymentResponse, CreatePaymentInput>("/api/v1/payment", data, options); }
    gatewayOptions(options?: RequestOptions) { return this.client.get<GatewayOptionsResponse>("/api/v1/gateways/options", undefined, options); }
    dailyIncome(options?: RequestOptions) { return this.client.get<DailyIncomeResponse>("/api/v1/transactions/daily-income", undefined, options); }
    settings(options?: RequestOptions) { return this.operations.settingsShowGet(options); }
    updateSettings(data: O.SettingsUpdatePatchInput, options?: RequestOptions<O.SettingsUpdatePatchInput>) { return this.operations.settingsUpdatePatch(data, options); }
    transactionStatus(id: Identifier, options?: RequestOptions) { return this.operations.routerShowStatusGet(id, options); }
    verificationLogs(id: Identifier, options?: RequestOptions) { return this.operations.transactionVerificationLogsGet(id, options); }
    verifyTransaction(id: Identifier, options?: RequestOptions) { return this.operations.transactionVerifyPaymentPost(id, options); }
    rejectTransaction(id: Identifier, options?: RequestOptions) { return this.operations.transactionRejectPaymentPost(id, options); }
    integrationDocs(options?: RequestOptions) { return this.operations.integrationIntegrationDocsShowGet(options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
