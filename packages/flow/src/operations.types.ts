import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

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

/** Backend response type: Vec<FlowResponse>. */
export interface FlowIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "enabled": boolean;
  "trigger_key": string;
  "capture_fields": string[];
  "graph": JsonValue;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export interface FlowIndexGetResponse extends ApiEnvelope<FlowIndexGetResponseItem[]> {
}

/** Backend request type: CreateFlowRequest. */
export interface FlowStorePostInput extends JsonObject {
  "name": string;
  "slug"?: string;
  "trigger_key": string;
  "enabled"?: boolean;
  "graph"?: JsonValue;
}
/** Backend response type: FlowResponse. */
export interface FlowStorePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "enabled": boolean;
  "trigger_key": string;
  "capture_fields": string[];
  "graph": JsonValue;
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
export interface FlowShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "enabled": boolean;
  "trigger_key": string;
  "capture_fields": string[];
  "graph": JsonValue;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export interface FlowShowGetResponse extends ApiEnvelope<FlowShowGetResponseData> {
}

/** Backend request type: UpdateFlowRequest. */
export interface FlowUpdatePutInput extends JsonObject {
  "name"?: string;
  "slug"?: string;
  "trigger_key"?: string;
  "enabled"?: boolean;
  "graph"?: JsonValue;
}
/** Backend response type: FlowResponse. */
export interface FlowUpdatePutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "enabled": boolean;
  "trigger_key": string;
  "capture_fields": string[];
  "graph": JsonValue;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export interface FlowUpdatePutResponse extends ApiEnvelope<FlowUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface FlowValidatePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface RouterIntegrationFlowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: RegistryQuery. */
export interface RegistryActiveTriggersGetQuery extends QueryParams {
  "service"?: string;
}
/** Backend response type: ActiveTriggersResponse. */
export interface RegistryActiveTriggersGetResponseData extends JsonObject {
  "version": number;
  "triggers": JsonValue[];
}
export interface RegistryActiveTriggersGetResponse extends ApiEnvelope<RegistryActiveTriggersGetResponseData> {
}

/** Backend query type: RunsQuery. */
export interface RunIndexGetQuery extends QueryParams {
  "limit"?: number;
}
/** Backend response type: Vec<crate::run::methods::FlowRunView>. */
export interface RunIndexGetResponseItem extends JsonObject {
  "id": string;
  "flow_id": string;
  "trigger_event_id": string;
  "status": string;
  "error"?: string;
  "started_at": string;
  "finished_at"?: string;
}
export interface RunIndexGetResponse extends ApiEnvelope<RunIndexGetResponseItem[]> {
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

