import type * as E from "./economy.types.js";
import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions, } from "@faiber/sdk-core";
import type * as T from "./types.js";
import type * as O from "./operations.types.js";
import { AssetOperations } from "./operations.js";
export class AssetApi extends ServiceApi {
    /** Reads versioned scoped-reward policy. Requires admin:coin_settings:read. */
    economyPolicy(options?: RequestOptions) { return this.client.get<E.EconomyPolicyResponse>("/api/v1/economy/policy", undefined, options); }
    /** Updates a higher policy version; launch/supply/currency remain immutable. Requires admin:coin_settings:update. */
    updateEconomyPolicy(data:E.EconomyPolicy, options?:RequestOptions<E.EconomyPolicy>) { return this.client.put<E.EconomyPolicyResponse,E.EconomyPolicy>("/api/v1/economy/policy",data,options); }
    /** Executes an audited operator reward or scope closure; rejects broker-only commands. Requires admin:action:complete. */
    economyCommand(data:E.EconomyOperatorCommand,options?:RequestOptions<E.EconomyOperatorCommand>) { return this.client.post<E.EconomyCommandResponse,E.EconomyOperatorCommand>("/api/v1/economy/commands",data,options); }
    /** Lists scoped budgets, bank counters, recovery balances or other named projections. Requires admin:bank_transaction:read. */
    economyObjects<K extends E.EconomyObjectKind>(kind:K,params?:E.EconomyObjectQuery,options?:RequestOptions) { return this.client.get<E.EconomyObjectsResponse<K>>(`/api/v1/economy/objects/${encodeURIComponent(kind)}`,params,options); }
    /** Reads immutable journal entries using a sequence cursor. Requires admin:user_asset_log:read. */
    economyJournal(params?:E.EconomyJournalQuery,options?:RequestOptions) { return this.client.get<E.EconomyJournalResponse>("/api/v1/economy/journal",params,options); }
    /** Reads the authenticated user's wallet, free-session entitlements, Charge and purchases. Requires admin:wallet:read_own. */
    myEconomy(options?:RequestOptions) { return this.client.get<E.EconomyObjectsResponse>("/api/v1/economy/me",undefined,options); }
    /** Buys a configured item using Coin, crafting ingredients, or a ten-minute money quote. Reuse event_id on retry. Requires admin:wallet:read_own. */
    purchaseEconomyItem(data:E.EconomyPurchaseInput,options?:RequestOptions<E.EconomyPurchaseInput>) { return this.client.post<E.EconomyCommandResponse,E.EconomyPurchaseInput>("/api/v1/economy/me/purchases",data,options); }
    /** Applies only the credits that fit below the session Charge maximum, preserving the remainder. Requires admin:wallet:read_own. */
    applySessionChargeCredit(sessionId:Identifier,data:E.EconomyCreditInput,options?:RequestOptions<E.EconomyCreditInput>) { return this.client.post<E.EconomyCommandResponse<E.EconomyCreditReceipt>,E.EconomyCreditInput>(`/api/v1/economy/me/sessions/${encodeURIComponent(sessionId)}/credit`,data,options); }
    /** Reads live Coin value and bank shortfall in explicit currency units. Requires admin:wallet:read_own. */
    economyValuation(options?:RequestOptions) { return this.client.get<E.EconomyValuationResponse>("/api/v1/economy/valuation",undefined,options); }
    /** Reads only the authenticated profile's immutable changes, using sequence pagination. Requires admin:wallet:read_own. */
    myEconomyHistory(params?:E.EconomyJournalQuery,options?:RequestOptions) { return this.client.get<E.EconomyHistoryResponse>("/api/v1/economy/me/history",params,options); }
    /** Simulates an award and rolls back every change. Evidence still requires verification for completion. Requires admin:wallet:read_own. */
    previewEconomyReward(data:E.EconomyPreviewInput,options?:RequestOptions<E.EconomyPreviewInput>) { return this.client.post<E.EconomyCommandResponse,E.EconomyPreviewInput>("/api/v1/economy/me/rewards/preview",data,options); }
    /** Reads a single role's period or global XP rankings. Replays do not change live rankings. Requires admin:wallet:read_own. */
    economyLeaderboard(params:E.EconomyLeaderboardQuery,options?:RequestOptions) { return this.client.get<E.EconomyLeaderboardResponse>("/api/v1/economy/leaderboards",params,options); }
    /** Reads permission-aware operator controls. Requires admin:wallet:read_own or admin:coin_settings:read. */
    economyCapabilities(options?:RequestOptions) { return this.client.get<E.EconomyCapabilitiesResponse>("/api/v1/economy/capabilities",undefined,options); }
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
    /** Reads the authenticated profile's complete enriched asset balances. */
    myAssets(options?: RequestOptions) { return this.operations.walletMeAssetsShowGet(options); }
    /** Lists the authenticated profile's server-paginated asset achievement history. */
    assetHistory(params?: T.AssetHistoryQuery, options?: RequestOptions) { return this.operations.walletMeAssetHistoryGet(params, options); }
    /** Returns global or cohort-scoped rankings plus the current user's neighboring ranks. */
    leaderboard(params?: T.LeaderboardQuery, options?: RequestOptions) {
        return this.client.get<T.LeaderboardResponse>("/api/v1/leaderboard", params, options);
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

export * from "./economy.types.js";

export * from "./contracts.types.js";
