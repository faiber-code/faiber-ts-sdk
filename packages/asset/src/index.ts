import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions, } from "@faiber/sdk-core";
import type * as T from "./types.js";
import type * as O from "./operations.types.js";
import { AssetOperations } from "./operations.js";
export class AssetApi extends ServiceApi {
    readonly operations = new AssetOperations(this.client);
    readonly assets = new RestResource<T.Asset, T.CreateAssetInput, T.UpdateAssetInput, T.AssetListResponse, T.AssetResponse>(this.client, "/api/v1/assets", { supported: ["list", "show", "create", "update", "delete"] });
    readonly ranks = new RestResource<T.Rank, T.CreateRankInput, T.UpdateRankInput, T.RankListResponse, T.RankResponse>(this.client, "/api/v1/ranks", { supported: ["list", "show", "create", "update", "delete"] });
    readonly actions = new RestResource<T.AssetAction, T.CreateAssetActionInput, T.UpdateAssetActionInput, T.AssetActionListResponse, T.AssetActionResponse>(this.client, "/api/v1/actions", { supported: ["list", "show", "create", "update", "delete"] });
    dashboard(options?: RequestOptions) {
        return this.client.get<T.AssetDashboardResponse>("/api/v1/dashboard", undefined, options);
    }
    wallet(options?: RequestOptions) {
        return this.client.get<T.WalletResponse>("/api/v1/wallet", undefined, options);
    }
    /** Lists completed daily metered costs for the authenticated Faiber account. */
    dailyCosts(params?: T.DailyCostQuery, options?: RequestOptions) {
        return this.client.get<T.DailyCostPageResponse>("/api/v1/me/transactions/days", params, options);
    }
    /** Starts a top-up and returns the payment-provider handoff URL. */
    topUpWallet(data: T.WalletTopUpInput, options?: RequestOptions<T.WalletTopUpInput>) {
        return this.client.post<T.WalletTopUpResponse, T.WalletTopUpInput>("/api/v1/wallet/topup", data, options);
    }
    /** Reads one user's wallet and recent ledger entries. Requires `admin:charge:read`. */
    adminUserWallet(profileId: Identifier, params?: T.AdminWalletQuery, options?: RequestOptions) {
        return this.client.get<T.AdminWalletSnapshotResponse>(`/api/v1/admin/users/${encodeURIComponent(profileId)}/wallet`, params, options);
    }
    /** Credits or debits one user's wallet and records an auditable ledger entry. Requires `admin:charge:update`. */
    adjustAdminUserWallet(profileId: Identifier, data: T.AdminWalletAdjustmentInput, options?: RequestOptions<T.AdminWalletAdjustmentInput>) {
        return this.client.post<T.AdminWalletSnapshotResponse, T.AdminWalletAdjustmentInput>(`/api/v1/admin/users/${encodeURIComponent(profileId)}/wallet/adjustments`, data, options);
    }
    /** Reads effective project pricing without creating or changing a sandbox allocation. */
    sandboxProjectPricing(project: Identifier, options?: RequestOptions) {
        return this.client.get<T.SandboxProjectPricingResponse>(`/api/v1/sandbox-resources/${encodeURIComponent(project)}/pricing`, undefined, options);
    }
    /** Moves an existing sandbox allocation and subscription to a linked Faiber financial owner. */
    setSandboxFinancialOwner(project: Identifier, data: O.SandboxBillingAdminProjectFinancialOwnerPutInput, options?: RequestOptions<O.SandboxBillingAdminProjectFinancialOwnerPutInput>) {
        return this.operations.sandboxBillingAdminProjectFinancialOwnerPut(project, data, options);
    }
    /** Sets or clears the fixed monthly price charged for a sandbox project. */
    setSandboxFixedPrice(profileId: Identifier, project: Identifier, data: O.SandboxBillingAdminProjectPricingOverridePutInput, options?: RequestOptions<O.SandboxBillingAdminProjectPricingOverridePutInput>) {
        return this.operations.sandboxBillingAdminProjectPricingOverridePut(profileId, project, data, options);
    }
    subscriptions(params?: QueryParams, options?: RequestOptions) {
        return this.client.get<T.SubscriptionListResponse>("/api/v1/subscriptions", params, options);
    }
    plans(params?: QueryParams, options?: RequestOptions) {
        return this.client.get<T.BillingPlanListResponse>("/api/v1/plans", params, options);
    }
    bankSummary(options?: RequestOptions) {
        return this.client.get<T.BankSummaryResponse>("/api/v1/bank-summary", undefined, options);
    }
    bankTransactions(params?: QueryParams, options?: RequestOptions) {
        return this.client.get<T.BankTransactionListResponse>("/api/v1/bank-transactions", params, options);
    }
    setAiPlan(profileId: Identifier, data: T.SetAiPlanInput, options?: RequestOptions<T.SetAiPlanInput>) {
        return this.client.put<T.AiUsagePlanResponse, T.SetAiPlanInput>(`/api/v1/llm-pricing/plans/${encodeURIComponent(profileId)}`, data, options);
    }
}
export * from "@faiber/sdk-core";
export * from "./types.js";
export * from "./operations.js";
export * from "./operations.types.js";
