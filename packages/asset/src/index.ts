import { RestResource, ServiceApi, type Identifier, type JsonObject, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
export class AssetApi extends ServiceApi {
  readonly assets = new RestResource(this.client, "/api/v1/assets"); readonly ranks = new RestResource(this.client, "/api/v1/ranks"); readonly actions = new RestResource(this.client, "/api/v1/actions");
  dashboard(options?: RequestOptions) { return this.client.get("/api/v1/dashboard", undefined, options); } wallet(options?: RequestOptions) { return this.client.get("/api/v1/wallet", undefined, options); }
  subscriptions(params?: QueryParams, options?: RequestOptions) { return this.client.get("/api/v1/subscriptions", params, options); } plans(params?: QueryParams, options?: RequestOptions) { return this.client.get("/api/v1/plans", params, options); }
  bankSummary(options?: RequestOptions) { return this.client.get("/api/v1/bank-summary", undefined, options); } bankTransactions(params?: QueryParams, options?: RequestOptions) { return this.client.get("/api/v1/bank-transactions", params, options); }
  setAiPlan(profileId: Identifier, data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.put(`/api/v1/llm-pricing/plans/${encodeURIComponent(profileId)}`, data, options); }
}
export * from "@faiber/sdk-core";
