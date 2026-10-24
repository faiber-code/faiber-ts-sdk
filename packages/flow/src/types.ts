import type { JsonObject, JsonValue, QueryParams } from "@faiber/sdk-core";

/** Flow success envelope; application errors instead return { error: string }. */
export interface FlowEnvelope<T> { status: "success"; message: "ok"; data: T }
export interface FlowErrorResponse { error: string }
export interface FlowHealth { version: string }
export type FlowHealthResponse = FlowEnvelope<FlowHealth>;
/** Backend stores arbitrary JSON editor position and node data, including custom node types. */
export interface FlowNode { id: string; type: string; position?: JsonValue | null; data: JsonValue }
/** Edge data is an extensible JSON document; condition is interpreted by the execution engine. */
export interface FlowEdge { id: string; source: string; target: string; data?: JsonValue | null }
export interface FlowGraph { nodes: FlowNode[]; edges: FlowEdge[] }
/** Serialized graph retains nullable position/data fields even when inputs omitted them. */
export interface FlowResponseNode { id: string; type: string; position: JsonValue | null; data: JsonValue }
export interface FlowResponseEdge { id: string; source: string; target: string; data: JsonValue | null }
export interface FlowResponseGraph { nodes: FlowResponseNode[]; edges: FlowResponseEdge[] }
export interface Flow {
  id: string; name: string; slug: string; enabled: boolean; trigger_key: string;
  capture_fields: string[]; graph: FlowResponseGraph; version: number; created_at: string; updated_at: string;
}
/** Name length 1..200, nonempty trigger_key. Enabled defaults false; null/omitted graph creates one trigger. */
export interface CreateFlowInput { name: string; slug?: string | null; trigger_key: string; enabled?: boolean | null; graph?: FlowGraph | null }
/** PUT is a partial update. Null and omitted fields preserve existing values. */
export interface UpdateFlowInput { name?: string | null; slug?: string | null; trigger_key?: string | null; enabled?: boolean | null; graph?: FlowGraph | null }
export type FlowListQuery = Record<string, never>;
export type FlowListResponse = FlowEnvelope<Flow[]>;
export type FlowResponse = FlowEnvelope<Flow>;
export interface FlowDeleteResult { deleted: true }
export type FlowDeleteResponse = FlowEnvelope<FlowDeleteResult>;
export interface FlowValidationResult { valid: boolean; errors: string[] }
export type FlowValidationResponse = FlowEnvelope<FlowValidationResult>;
export interface ImportFlowEntry { name: string; slug?: string | null; trigger_key: string; enabled?: boolean; graph: FlowGraph }
/** Payload is a backend-declared arbitrary JSON mapping of downstream event fields and expression specifications. */
export interface ImportEventBridgeEntry {
  name: string; slug?: string | null; event_key: string; enabled?: boolean;
  target_service: string; target_event: string; queue?: string | null; payload: JsonObject; condition?: JsonValue | null;
}
export interface ImportEventBridgeGroupEntry {
  name_prefix?: string | null; slug_prefix?: string | null; event_keys: string[]; enabled?: boolean;
  target_service: string; target_event: string; queue?: string | null; payload: JsonObject; condition?: JsonValue | null;
}
/** version/source are accepted metadata and not inspected. Arrays default empty; dry_run defaults false. */
export interface ImportFlowsInput {
  version?: number | null; source?: string | null; dry_run?: boolean; flows?: ImportFlowEntry[];
  event_bridges?: ImportEventBridgeEntry[]; event_bridge_groups?: ImportEventBridgeGroupEntry[];
}
export interface ImportFlowsResult { validated: number; created: number; updated: number; unchanged: number; dry_run: boolean }
export type ImportFlowsResponse = FlowEnvelope<ImportFlowsResult>;
/** Arbitrary event JSON becomes EndpointEvent.request. JSON null is valid; an absent body is not. */
export type EmitFlowEventInput = JsonValue;
export interface EmitFlowEventResult { accepted: true; event_id: string; trigger_key: string }
export type EmitFlowEventResponse = FlowEnvelope<EmitFlowEventResult>;
export interface FlowRun {
  id: string; flow_id: string; trigger_event_id: string; status: string; error: string | null;
  started_at: string; finished_at: string | null;
}
/** Runtime payload is arbitrary downstream JSON; duplicate node records are suppressed by the backend. */
export interface FlowRunStep { id: string; node_id: string; condition_passed: boolean; emitted_event: string | null; payload: JsonValue | null; created_at: string }
/** Backend persists EndpointEvent as JSON context and allows null for historical runs. */
export interface FlowRunDetail extends FlowRun { context: JsonValue | null; steps: FlowRunStep[] }
/** Nonnegative u64 limit; defaults 50 with no application clamp. Use safe JavaScript integers. */
export interface FlowRunsQuery extends QueryParams { limit?: number | null }
export type FlowRunListResponse = FlowEnvelope<FlowRun[]>;
export type FlowRunResponse = FlowEnvelope<FlowRunDetail>;
export interface TriggerDefinition { service: string; method: string; path: string; trigger_key: string }
/** payload_fields is imported/stored verbatim from external service metadata as arbitrary JSON. */
export interface ActionDefinition { service: string; event_name: string; queue: string; payload_fields: JsonValue }
export type TriggerCatalogResponse = FlowEnvelope<TriggerDefinition[]>;
export type ActionCatalogResponse = FlowEnvelope<ActionDefinition[]>;
export interface ActiveTrigger { trigger_key: string; capture_fields: string[] }
export interface ActiveTriggersResult { version: number; triggers: ActiveTrigger[] }
/** Filter matches endpoint.{service}. prefix; generic event triggers are excluded when set. */
export interface ActiveTriggersQuery extends QueryParams { service?: string | null }
export type ActiveTriggersResponse = FlowEnvelope<ActiveTriggersResult>;
export interface CatalogSyncFailure { service: string; source: string; error: string }
export interface CatalogSyncResult { triggers: number; actions: number; succeeded_services: string[]; failed_services: CatalogSyncFailure[] }
export type CatalogSyncResponse = FlowEnvelope<CatalogSyncResult>;
/** Shared Flow integration metadata shape; exact external dependency revision remains a native acceptance gate. */
export interface FlowIntegrationField { name: string; field_type: string; required: boolean; description: string }
export interface FlowIntegrationEvent { event_name: string; payload_fields: FlowIntegrationField[] }
export interface FlowIntegrationResult { queue: string; events: FlowIntegrationEvent[] }
export type FlowIntegrationResponse = FlowEnvelope<FlowIntegrationResult>;
