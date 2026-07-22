import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions, } from "@faiber/sdk-core";
import type * as T from "./types.js";
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
