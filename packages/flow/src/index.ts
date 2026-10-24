import { RestResource, ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import { FlowOperations } from "./operations.js";
export class FlowApi extends ServiceApi {
    readonly operations = new FlowOperations(this.client);
    /** List/read/create/partially PUT/delete flows; declared flow permissions vary by verb. Errors: 400 graph, 404 missing, 409 slug, 500 persistence/notification. */
    readonly flows = new RestResource<T.Flow, T.CreateFlowInput, T.UpdateFlowInput, T.FlowListResponse, T.FlowResponse, T.FlowListQuery, T.FlowDeleteResponse>(this.client, "/api/v1/flows", { supported: ["list", "show", "create", "update", "replace", "delete"], updateMethod: "PUT" });
    /** Read global runs (limit defaults 50) or UUID detail with flattened run/context/steps; declared flow_run:read, missing detail 404. */
    readonly runs = new RestResource<T.FlowRun, never, never, T.FlowRunListResponse, T.FlowRunResponse, T.FlowRunsQuery>(this.client, "/api/v1/runs", { supported: ["list", "show"] });
    /** Validate persisted UUID graph; returns valid/errors under HTTP 200. Declared flow:update; missing flow 404. */
    validate(id: Identifier, options?: RequestOptions) { return this.client.post<T.FlowValidationResponse>(`/api/v1/flows/${encodeURIComponent(id)}/validate`, undefined, options); }
    /** List cached trigger definitions; declared flow:read. Database failures 500. */
    triggers(options?: RequestOptions) { return this.client.get<T.TriggerCatalogResponse>("/api/v1/catalog/triggers", undefined, options); }
    /** List cached actions with verbatim external payload_fields JSON; declared flow:read. Database failures 500. */
    actions(options?: RequestOptions) { return this.client.get<T.ActionCatalogResponse>("/api/v1/catalog/actions", undefined, options); }
    /** Read versioned enabled registry, optionally endpoint-service filtered. No local permission check; database failures 500. */
    activeTriggers(query?: T.ActiveTriggersQuery, options?: RequestOptions) { return this.client.get<T.ActiveTriggersResponse>("/api/v1/registry/active-triggers", query, options); }
    /** Refresh configured services; partial failures remain HTTP 200 report. Declared catalog:sync. */
    syncCatalog(options?: RequestOptions) { return this.client.post<T.CatalogSyncResponse>("/api/v1/catalog/sync", undefined, options); }
    /** Import/upsert by normalized slug with optional transactional dry-run; declared flow:create + flow:update. Invalid manifests 400; post-commit notify failures 500. */
    importFlows(input: T.ImportFlowsInput, options?: RequestOptions<T.ImportFlowsInput>) { return this.client.post<T.ImportFlowsResponse, T.ImportFlowsInput>("/api/v1/flows/import", input, options); }
    /** Execute matching enabled flows using arbitrary JSON. Explicit flow:execute or * required (403); invalid event key 400. Returns HTTP 200 accepted even when individual executions fail. Retrying creates new events/runs. */
    emitEvent(eventKey: string, input: T.EmitFlowEventInput, options?: RequestOptions<T.EmitFlowEventInput>) { return this.client.post<T.EmitFlowEventResponse, T.EmitFlowEventInput>(`/api/v1/events/${encodeURIComponent(eventKey)}`, input, { ...options, headers: { "Content-Type": "application/json", ...options?.headers } }); }
    /** Read integration queue/events metadata; no handler-local permission check. Exact external dependency acceptance remains pending. */
    integration(options?: RequestOptions) { return this.client.get<T.FlowIntegrationResponse>("/api/v1/integration/flow", undefined, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
