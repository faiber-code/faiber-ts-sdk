import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend query type: ListQuery. */
export interface RoutesListActionsGetQuery extends QueryParams {
  "q"?: string;
  "status"?: string;
  "group"?: string;
  "kind"?: string;
  "page"?: number;
  "limit"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesListActionsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ActionStatus. */
export interface RoutesUpdateActionStatusPatchInput extends JsonObject {
  "status": string;
  "input": JsonValue;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesUpdateActionStatusPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ListQuery. */
export interface RoutesListAuditGetQuery extends QueryParams {
  "q"?: string;
  "status"?: string;
  "group"?: string;
  "kind"?: string;
  "page"?: number;
  "limit"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesListAuditGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesListBindingsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateBinding. */
export interface RoutesCreateBindingPostInput extends JsonObject {
  "chat_slug": string;
  "knowledge_base_id": string;
  "group_slugs": JsonValue;
  "max_level": number;
  "tool_policy": JsonValue;
  "enabled": boolean;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesCreateBindingPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesDeleteBindingDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateBinding. */
export interface RoutesUpdateBindingPutInput extends JsonObject {
  "group_slugs"?: JsonValue;
  "max_level"?: number;
  "tool_policy"?: JsonValue;
  "enabled"?: boolean;
  "expected_version"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesUpdateBindingPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesDeleteEdgeDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateEdge. */
export interface RoutesUpdateEdgePutInput extends JsonObject {
  "edge_type"?: string;
  "conditions"?: JsonValue;
  "weight"?: number;
  "status"?: string;
  "expected_version"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesUpdateEdgePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesDeleteGroupDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateGroup. */
export interface RoutesUpdateGroupPutInput extends JsonObject {
  "parent_id"?: string;
  "name"?: JsonValue;
  "description"?: JsonValue;
  "sort_order"?: number;
  "inclusion_policy"?: JsonValue;
  "status"?: string;
  "expected_version"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesUpdateGroupPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesDeleteItemDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesGetItemGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateItem. */
export interface RoutesUpdateItemPutInput extends JsonObject {
  "group_id"?: string;
  "kind"?: string;
  "title"?: JsonValue;
  "summary"?: JsonValue;
  "content"?: JsonValue;
  "metadata"?: JsonValue;
  "tags"?: JsonValue;
  "importance"?: string;
  "status"?: string;
  "valid_from"?: string;
  "valid_to"?: string;
  "expected_version"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesUpdateItemPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ListQuery. */
export interface RoutesListBasesGetQuery extends QueryParams {
  "q"?: string;
  "status"?: string;
  "group"?: string;
  "kind"?: string;
  "page"?: number;
  "limit"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesListBasesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateKnowledgeBase. */
export interface RoutesCreateBasePostInput extends JsonObject {
  "slug": string;
  "name": string;
  "description": string;
  "default_language": string;
  "supported_languages": JsonValue;
  "settings": JsonValue;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesCreateBasePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesDeleteBaseDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesGetBaseGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateKnowledgeBase. */
export interface RoutesUpdateBasePutInput extends JsonObject {
  "name"?: string;
  "description"?: string;
  "default_language"?: string;
  "supported_languages"?: JsonValue;
  "settings"?: JsonValue;
  "status"?: string;
  "expected_version"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesUpdateBasePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesListEdgesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateEdge. */
export interface RoutesCreateEdgePostInput extends JsonObject {
  "from_item_id": string;
  "to_item_id": string;
  "edge_type": string;
  "conditions": JsonValue;
  "weight": number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesCreateEdgePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesExportBaseGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesListGroupsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateGroup. */
export interface RoutesCreateGroupPostInput extends JsonObject {
  "parent_id"?: string;
  "slug": string;
  "name": JsonValue;
  "description": JsonValue;
  "sort_order": number;
  "inclusion_policy": JsonValue;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesCreateGroupPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ListQuery. */
export interface RoutesListItemsGetQuery extends QueryParams {
  "q"?: string;
  "status"?: string;
  "group"?: string;
  "kind"?: string;
  "page"?: number;
  "limit"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesListItemsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateItem. */
export interface RoutesCreateItemPostInput extends JsonObject {
  "group_id": string;
  "slug": string;
  "kind": string;
  "title": JsonValue;
  "summary": JsonValue;
  "content": JsonValue;
  "metadata": JsonValue;
  "tags": JsonValue;
  "importance": string;
  "valid_from"?: string;
  "valid_to"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesCreateItemPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesPublishPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ListQuery. */
export interface RoutesListRulesGetQuery extends QueryParams {
  "q"?: string;
  "status"?: string;
  "group"?: string;
  "kind"?: string;
  "page"?: number;
  "limit"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesListRulesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateRule. */
export interface RoutesCreateRulePostInput extends JsonObject {
  "knowledge_base_id": string;
  "group_id"?: string;
  "slug": string;
  "name": JsonValue;
  "priority": number;
  "conditions": JsonValue;
  "outcomes": JsonValue;
  "stop_on_match": boolean;
  "enabled": boolean;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesCreateRulePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesDeleteRuleDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateRule. */
export interface RoutesUpdateRulePutInput extends JsonObject {
  "group_id"?: string;
  "name"?: JsonValue;
  "priority"?: number;
  "conditions"?: JsonValue;
  "outcomes"?: JsonValue;
  "stop_on_match"?: boolean;
  "enabled"?: boolean;
  "expected_version"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesUpdateRulePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: RuntimeQuery. */
export interface RoutesRuntimeQueryPostInput extends JsonObject {
  "query"?: string;
  "profile_id"?: string;
  "profile": JsonValue;
  "props": JsonValue;
  "meta": JsonValue;
  "inputs": JsonValue;
  "group_slugs": JsonValue;
  "level"?: number;
  "limit"?: number;
  "event"?: JsonValue;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesRuntimeQueryPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesToolSchemaGetResponse extends ApiEnvelope<JsonValue> {
}

