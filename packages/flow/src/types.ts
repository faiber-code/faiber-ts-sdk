import type { ApiEnvelope, JsonObject, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
export interface Flow extends JsonObject {
    id: string;
    name: string;
    status: string;
    trigger?: JsonObject;
    actions?: JsonObject[];
}
export interface CreateFlowInput extends JsonObject {
    name: string;
    trigger: JsonObject;
    actions: JsonObject[];
    status?: string;
}
export interface UpdateFlowInput extends Partial<CreateFlowInput> {
}
export interface FlowRun extends JsonObject {
    id: string;
    flow_id: string;
    status: string;
    started_at?: string;
    finished_at?: string;
}
export interface TriggerDefinition extends JsonObject {
    type: string;
    name: string;
    schema?: JsonObject;
}
export interface ActionDefinition extends JsonObject {
    type: string;
    name: string;
    schema?: JsonObject;
}
export interface FlowValidationResult extends JsonObject {
    valid: boolean;
    errors: string[];
}
export interface ActiveTrigger extends JsonObject {
    flow_id: string;
    type: string;
}
export interface FlowListResponse extends ResourceListResponse<Flow> {
}
export interface FlowResponse extends ResourceResponse<Flow> {
}
export interface FlowRunListResponse extends ResourceListResponse<FlowRun> {
}
export interface FlowRunResponse extends ResourceResponse<FlowRun> {
}
export interface FlowValidationResponse extends ApiEnvelope<FlowValidationResult> {
}
export interface TriggerCatalogResponse extends ApiEnvelope<TriggerDefinition[]> {
}
export interface ActionCatalogResponse extends ApiEnvelope<ActionDefinition[]> {
}
export interface ActiveTriggersResponse extends ApiEnvelope<ActiveTrigger[]> {
}
export interface CatalogSyncResponse extends ApiEnvelope<{
    synced: boolean;
}> {
}
