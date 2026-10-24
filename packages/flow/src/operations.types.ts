import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: HealthResponse. */
export type RouterStatusRouteGetResponse = import("./types.js").FlowHealthResponse;

/** Backend response type: Vec<crate::catalog::methods::CatalogActionView>. */
export type CatalogActionsGetResponse = import("./types.js").ActionCatalogResponse;

/** Backend response type: serde_json::Value. */
export type CatalogSyncPostResponse = import("./types.js").CatalogSyncResponse;

/** Backend response type: Vec<crate::catalog::methods::CatalogTriggerView>. */
export type CatalogTriggersGetResponse = import("./types.js").TriggerCatalogResponse;

/** Backend request type: serde_json::Value. */
export type EventEmitPostInput = import("./types.js").EmitFlowEventInput;
/** Backend response type: serde_json::Value. */
export type EventEmitPostResponse = import("./types.js").EmitFlowEventResponse;

/** Backend response type: Vec<FlowResponse>. */
export type FlowIndexGetResponse = import("./types.js").FlowListResponse;

/** Backend request type: CreateFlowRequest. */
export type FlowStorePostInput = import("./types.js").CreateFlowInput;
/** Backend response type: FlowResponse. */
export type FlowStorePostResponse = import("./types.js").FlowResponse;

/** Backend response type: serde_json::Value. */
export type FlowDestroyDeleteResponse = import("./types.js").FlowDeleteResponse;

/** Backend response type: FlowResponse. */
export type FlowShowGetResponse = import("./types.js").FlowResponse;

/** Backend request type: UpdateFlowRequest. */
export type FlowUpdatePutInput = import("./types.js").UpdateFlowInput;
/** Backend response type: FlowResponse. */
export type FlowUpdatePutResponse = import("./types.js").FlowResponse;

/** Backend response type: serde_json::Value. */
export type FlowValidatePostResponse = import("./types.js").FlowValidationResponse;

/** Backend request type: ImportFlowsRequest. */
export type FlowImportPostInput = import("./types.js").ImportFlowsInput;
/** Backend response type: ImportFlowsResponse. */
export type FlowImportPostResponse = import("./types.js").ImportFlowsResponse;

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export type RouterIntegrationFlowGetResponse = import("./types.js").FlowIntegrationResponse;

/** Backend query type: RegistryQuery. */
export type RegistryActiveTriggersGetQuery = import("./types.js").ActiveTriggersQuery;
/** Backend response type: ActiveTriggersResponse. */
export type RegistryActiveTriggersGetResponse = import("./types.js").ActiveTriggersResponse;

/** Backend query type: RunsQuery. */
export type RunIndexGetQuery = import("./types.js").FlowRunsQuery;
/** Backend response type: Vec<crate::run::methods::FlowRunView>. */
export type RunIndexGetResponse = import("./types.js").FlowRunListResponse;

/** Backend response type: crate::run::methods::FlowRunDetailView. */
export type RunShowGetResponse = import("./types.js").FlowRunResponse;

/** Backend response type: HealthResponse. */
export type RouterStatusRouteGetHealthResponse = import("./types.js").FlowHealthResponse;

/** Backend response type: HealthResponse. */
export type RouterStatusRouteGetUpResponse = import("./types.js").FlowHealthResponse;
