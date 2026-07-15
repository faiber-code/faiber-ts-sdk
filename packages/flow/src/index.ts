import { RestResource, ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
export class FlowApi extends ServiceApi {
    readonly flows = new RestResource<T.Flow, T.CreateFlowInput, T.UpdateFlowInput, T.FlowListResponse, T.FlowResponse>(this.client, "/api/v1/flows");
    readonly runs = new RestResource<T.FlowRun, never, never, T.FlowRunListResponse, T.FlowRunResponse>(this.client, "/api/v1/runs");
    validate(id: Identifier, options?: RequestOptions) { return this.client.post<T.FlowValidationResponse>(`/api/v1/flows/${encodeURIComponent(id)}/validate`, undefined, options); }
    triggers(options?: RequestOptions) { return this.client.get<T.TriggerCatalogResponse>("/api/v1/catalog/triggers", undefined, options); }
    actions(options?: RequestOptions) { return this.client.get<T.ActionCatalogResponse>("/api/v1/catalog/actions", undefined, options); }
    activeTriggers(options?: RequestOptions) { return this.client.get<T.ActiveTriggersResponse>("/api/v1/registry/active-triggers", undefined, options); }
    syncCatalog(options?: RequestOptions) { return this.client.post<T.CatalogSyncResponse>("/api/v1/catalog/sync", undefined, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
