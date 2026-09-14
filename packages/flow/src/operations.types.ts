import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: HealthResponse. */
export interface RouterStatusRouteGetResponseData extends JsonObject {
  "version": string;
}
export interface RouterStatusRouteGetResponse extends ApiEnvelope<RouterStatusRouteGetResponseData> {
}

/** Backend response type: Vec<crate::catalog::methods::CatalogActionView>. */
export interface CatalogActionsGetResponseItem extends JsonObject {
  "service": string;
  "event_name": string;
  "queue": string;
  "payload_fields": JsonValue;
}
export interface CatalogActionsGetResponse extends ApiEnvelope<CatalogActionsGetResponseItem[]> {
}

/** Backend response type: serde_json::Value. */
export interface CatalogSyncPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<crate::catalog::methods::CatalogTriggerView>. */
export interface CatalogTriggersGetResponseItem extends JsonObject {
  "service": string;
  "method": string;
  "path": string;
  "trigger_key": string;
}
export interface CatalogTriggersGetResponse extends ApiEnvelope<CatalogTriggersGetResponseItem[]> {
}

/** Backend request type: serde_json::Value. */
export type EventEmitPostInput = JsonValue;
/** Backend response type: serde_json::Value. */
export interface EventEmitPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<FlowResponse>. */
export interface FlowIndexGetResponseItemGraphNodes extends JsonObject {
  "id": string;
  "type": string;
  "position"?: JsonValue | null;
  "data": JsonValue;
}
export interface FlowIndexGetResponseItemGraphEdges extends JsonObject {
  "id": string;
  "source": string;
  "target": string;
  "data"?: JsonValue | null;
}
export interface FlowIndexGetResponseItemGraph extends JsonObject {
  "nodes": FlowIndexGetResponseItemGraphNodes[];
  "edges": FlowIndexGetResponseItemGraphEdges[];
}
export interface FlowIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "enabled": boolean;
  "trigger_key": string;
  "capture_fields": string[];
  "graph": FlowIndexGetResponseItemGraph;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export interface FlowIndexGetResponse extends ApiEnvelope<FlowIndexGetResponseItem[]> {
}

/** Backend request type: CreateFlowRequest. */
export interface FlowStorePostInputGraphNodes extends JsonObject {
  "id": string;
  "type": string;
  "position"?: JsonValue | null;
  "data": JsonValue;
}
export interface FlowStorePostInputGraphEdges extends JsonObject {
  "id": string;
  "source": string;
  "target": string;
  "data"?: JsonValue | null;
}
export interface FlowStorePostInputGraph extends JsonObject {
  "nodes": FlowStorePostInputGraphNodes[];
  "edges": FlowStorePostInputGraphEdges[];
}
export interface FlowStorePostInput extends JsonObject {
  "name": string;
  "slug"?: string | null;
  "trigger_key": string;
  "enabled"?: boolean | null;
  "graph"?: FlowStorePostInputGraph | null;
}
/** Backend response type: FlowResponse. */
export interface FlowStorePostResponseDataGraphNodes extends JsonObject {
  "id": string;
  "type": string;
  "position"?: JsonValue | null;
  "data": JsonValue;
}
export interface FlowStorePostResponseDataGraphEdges extends JsonObject {
  "id": string;
  "source": string;
  "target": string;
  "data"?: JsonValue | null;
}
export interface FlowStorePostResponseDataGraph extends JsonObject {
  "nodes": FlowStorePostResponseDataGraphNodes[];
  "edges": FlowStorePostResponseDataGraphEdges[];
}
export interface FlowStorePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "enabled": boolean;
  "trigger_key": string;
  "capture_fields": string[];
  "graph": FlowStorePostResponseDataGraph;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export interface FlowStorePostResponse extends ApiEnvelope<FlowStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface FlowDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: FlowResponse. */
export interface FlowShowGetResponseDataGraphNodes extends JsonObject {
  "id": string;
  "type": string;
  "position"?: JsonValue | null;
  "data": JsonValue;
}
export interface FlowShowGetResponseDataGraphEdges extends JsonObject {
  "id": string;
  "source": string;
  "target": string;
  "data"?: JsonValue | null;
}
export interface FlowShowGetResponseDataGraph extends JsonObject {
  "nodes": FlowShowGetResponseDataGraphNodes[];
  "edges": FlowShowGetResponseDataGraphEdges[];
}
export interface FlowShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "enabled": boolean;
  "trigger_key": string;
  "capture_fields": string[];
  "graph": FlowShowGetResponseDataGraph;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export interface FlowShowGetResponse extends ApiEnvelope<FlowShowGetResponseData> {
}

/** Backend request type: UpdateFlowRequest. */
export interface FlowUpdatePutInputGraphNodes extends JsonObject {
  "id": string;
  "type": string;
  "position"?: JsonValue | null;
  "data": JsonValue;
}
export interface FlowUpdatePutInputGraphEdges extends JsonObject {
  "id": string;
  "source": string;
  "target": string;
  "data"?: JsonValue | null;
}
export interface FlowUpdatePutInputGraph extends JsonObject {
  "nodes": FlowUpdatePutInputGraphNodes[];
  "edges": FlowUpdatePutInputGraphEdges[];
}
export interface FlowUpdatePutInput extends JsonObject {
  "name"?: string | null;
  "slug"?: string | null;
  "trigger_key"?: string | null;
  "enabled"?: boolean | null;
  "graph"?: FlowUpdatePutInputGraph | null;
}
/** Backend response type: FlowResponse. */
export interface FlowUpdatePutResponseDataGraphNodes extends JsonObject {
  "id": string;
  "type": string;
  "position"?: JsonValue | null;
  "data": JsonValue;
}
export interface FlowUpdatePutResponseDataGraphEdges extends JsonObject {
  "id": string;
  "source": string;
  "target": string;
  "data"?: JsonValue | null;
}
export interface FlowUpdatePutResponseDataGraph extends JsonObject {
  "nodes": FlowUpdatePutResponseDataGraphNodes[];
  "edges": FlowUpdatePutResponseDataGraphEdges[];
}
export interface FlowUpdatePutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "enabled": boolean;
  "trigger_key": string;
  "capture_fields": string[];
  "graph": FlowUpdatePutResponseDataGraph;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export interface FlowUpdatePutResponse extends ApiEnvelope<FlowUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface FlowValidatePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ImportFlowsRequest. */
export interface FlowImportPostInputFlowsGraphNodes extends JsonObject {
  "id": string;
  "type": string;
  "position"?: JsonValue | null;
  "data": JsonValue;
}
export interface FlowImportPostInputFlowsGraphEdges extends JsonObject {
  "id": string;
  "source": string;
  "target": string;
  "data"?: JsonValue | null;
}
export interface FlowImportPostInputFlowsGraph extends JsonObject {
  "nodes": FlowImportPostInputFlowsGraphNodes[];
  "edges": FlowImportPostInputFlowsGraphEdges[];
}
export interface FlowImportPostInputFlows extends JsonObject {
  "name": string;
  "slug"?: string | null;
  "trigger_key": string;
  "enabled"?: boolean;
  "graph": FlowImportPostInputFlowsGraph;
}
export interface FlowImportPostInputEventBridges extends JsonObject {
  "name": string;
  "slug"?: string | null;
  "event_key": string;
  "enabled"?: boolean;
  "target_service": string;
  "target_event": string;
  "queue"?: string | null;
  "payload": BackendJson<"serde_json::Map<String, serde_json::Value>">;
  "condition"?: JsonValue | null;
}
export interface FlowImportPostInputEventBridgeGroups extends JsonObject {
  "name_prefix"?: string | null;
  "slug_prefix"?: string | null;
  "event_keys": string[];
  "enabled"?: boolean;
  "target_service": string;
  "target_event": string;
  "queue"?: string | null;
  "payload": BackendJson<"serde_json::Map<String, serde_json::Value>">;
  "condition"?: JsonValue | null;
}
export interface FlowImportPostInput extends JsonObject {
  "version"?: number | null;
  "source"?: string | null;
  "dry_run"?: boolean;
  "flows"?: FlowImportPostInputFlows[];
  "event_bridges"?: FlowImportPostInputEventBridges[];
  "event_bridge_groups"?: FlowImportPostInputEventBridgeGroups[];
}
/** Backend response type: ImportFlowsResponse. */
export interface FlowImportPostResponseData extends JsonObject {
  "validated": number;
  "created": number;
  "updated": number;
  "unchanged": number;
  "dry_run": boolean;
}
export interface FlowImportPostResponse extends ApiEnvelope<FlowImportPostResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface RouterIntegrationFlowGetResponse extends ApiEnvelope<BackendJson<"infera_flow_sdk::FlowIntegrationResponse">> {
}

/** Backend query type: RegistryQuery. */
export interface RegistryActiveTriggersGetQuery extends QueryParams {
  "service"?: string | null;
}
/** Backend response type: ActiveTriggersResponse. */
export interface RegistryActiveTriggersGetResponseDataTriggers extends JsonObject {
  "trigger_key": string;
  "capture_fields": string[];
}
export interface RegistryActiveTriggersGetResponseData extends JsonObject {
  "version": number;
  "triggers": RegistryActiveTriggersGetResponseDataTriggers[];
}
export interface RegistryActiveTriggersGetResponse extends ApiEnvelope<RegistryActiveTriggersGetResponseData> {
}

/** Backend query type: RunsQuery. */
export interface RunIndexGetQuery extends QueryParams {
  "limit"?: number | null;
}
/** Backend response type: Vec<crate::run::methods::FlowRunView>. */
export interface RunIndexGetResponseItem extends JsonObject {
  "id": string;
  "flow_id": string;
  "trigger_event_id": string;
  "status": string;
  "error"?: string | null;
  "started_at": string;
  "finished_at"?: string | null;
}
export interface RunIndexGetResponse extends ApiEnvelope<RunIndexGetResponseItem[]> {
}

/** Backend response type: crate::run::methods::FlowRunDetailView. */
export interface RunShowGetResponseDataSteps extends JsonObject {
  "id": string;
  "node_id": string;
  "condition_passed": boolean;
  "emitted_event"?: string | null;
  "payload"?: JsonValue | null;
  "created_at": string;
}
export interface RunShowGetResponseData extends JsonObject {
  "id": string;
  "flow_id": string;
  "trigger_event_id": string;
  "status": string;
  "error"?: string | null;
  "started_at": string;
  "finished_at"?: string | null;
  "context"?: JsonValue | null;
  "steps": RunShowGetResponseDataSteps[];
}
export interface RunShowGetResponse extends ApiEnvelope<RunShowGetResponseData> {
}

/** Backend response type: HealthResponse. */
export interface RouterStatusRouteGetHealthResponseData extends JsonObject {
  "version": string;
}
export interface RouterStatusRouteGetHealthResponse extends ApiEnvelope<RouterStatusRouteGetHealthResponseData> {
}

/** Backend response type: HealthResponse. */
export interface RouterStatusRouteGetUpResponseData extends JsonObject {
  "version": string;
}
export interface RouterStatusRouteGetUpResponse extends ApiEnvelope<RouterStatusRouteGetUpResponseData> {
}
