import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend query type: ListQuery. */
export interface RoutesListActionsGetQuery extends QueryParams {
  "q"?: string | null;
  "status"?: string | null;
  "group"?: string | null;
  "kind"?: string | null;
  "linked_service"?: string | null;
  "linked_entity_type"?: string | null;
  "linked_entity_id"?: string | null;
  "page"?: number | null;
  "limit"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesListActionsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ActionStatus. */
export interface RoutesUpdateActionStatusPatchInput extends JsonObject {
  "status": string;
  "input"?: JsonValue;
}
/** Backend response type: Value. */
export interface RoutesUpdateActionStatusPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ListQuery. */
export interface RoutesListAuditGetQuery extends QueryParams {
  "q"?: string | null;
  "status"?: string | null;
  "group"?: string | null;
  "kind"?: string | null;
  "linked_service"?: string | null;
  "linked_entity_type"?: string | null;
  "linked_entity_id"?: string | null;
  "page"?: number | null;
  "limit"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesListAuditGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesListBindingsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateBinding. */
export interface RoutesCreateBindingPostInput extends JsonObject {
  "chat_slug": string;
  "knowledge_base_id": string;
  "group_slugs"?: JsonValue;
  "max_level"?: number;
  "tool_policy"?: JsonValue;
  "enabled"?: boolean;
}
/** Backend response type: Value. */
export interface RoutesCreateBindingPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: no-content. */
export type RoutesDeleteBindingDeleteResponse = void;

/** Backend request type: UpdateBinding. */
export interface RoutesUpdateBindingPutInput extends JsonObject {
  "group_slugs"?: JsonValue | null;
  "max_level"?: number | null;
  "tool_policy"?: JsonValue | null;
  "enabled"?: boolean | null;
  "expected_version"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesUpdateBindingPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: no-content. */
export type RoutesDeleteEdgeDeleteResponse = void;

/** Backend request type: UpdateEdge. */
export interface RoutesUpdateEdgePutInput extends JsonObject {
  "edge_type"?: string | null;
  "conditions"?: JsonValue | null;
  "weight"?: number | null;
  "status"?: string | null;
  "expected_version"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesUpdateEdgePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: no-content. */
export type RoutesDeleteGroupDeleteResponse = void;

/** Backend request type: UpdateGroup. */
export interface RoutesUpdateGroupPutInput extends JsonObject {
  "parent_id"?: string | null;
  "name"?: JsonValue | null;
  "description"?: JsonValue | null;
  "sort_order"?: number | null;
  "inclusion_policy"?: JsonValue | null;
  "status"?: string | null;
  "expected_version"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesUpdateGroupPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: no-content. */
export type RoutesDeleteItemDeleteResponse = void;

/** Backend response type: Value. */
export interface RoutesGetItemGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateItem. */
export interface RoutesUpdateItemPutInput extends JsonObject {
  "group_id"?: string | null;
  "kind"?: string | null;
  "title"?: JsonValue | null;
  "summary"?: JsonValue | null;
  "content"?: JsonValue | null;
  "metadata"?: JsonValue | null;
  "description"?: JsonValue | null;
  "linked_service"?: string | null;
  "linked_entity_type"?: string | null;
  "linked_entity_id"?: string | null;
  "link_url"?: string | null;
  "open_in_new_tab"?: boolean | null;
  "show_when"?: JsonValue | null;
  "tags"?: JsonValue | null;
  "importance"?: string | null;
  "status"?: string | null;
  "valid_from"?: string | null;
  "valid_to"?: string | null;
  "expected_version"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesUpdateItemPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ListQuery. */
export interface RoutesListBasesGetQuery extends QueryParams {
  "q"?: string | null;
  "status"?: string | null;
  "group"?: string | null;
  "kind"?: string | null;
  "linked_service"?: string | null;
  "linked_entity_type"?: string | null;
  "linked_entity_id"?: string | null;
  "page"?: number | null;
  "limit"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesListBasesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateKnowledgeBase. */
export interface RoutesCreateBasePostInput extends JsonObject {
  "slug": string;
  "name": string;
  "description"?: string;
  "default_language"?: string;
  "supported_languages"?: JsonValue;
  "settings"?: JsonValue;
}
/** Backend response type: Value. */
export interface RoutesCreateBasePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: no-content. */
export type RoutesDeleteBaseDeleteResponse = void;

/** Backend response type: Value. */
export interface RoutesGetBaseGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateKnowledgeBase. */
export interface RoutesUpdateBasePutInput extends JsonObject {
  "name"?: string | null;
  "description"?: string | null;
  "default_language"?: string | null;
  "supported_languages"?: JsonValue | null;
  "settings"?: JsonValue | null;
  "status"?: string | null;
  "expected_version"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesUpdateBasePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesListEdgesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateEdge. */
export interface RoutesCreateEdgePostInput extends JsonObject {
  "from_item_id": string;
  "to_item_id": string;
  "edge_type": string;
  "conditions"?: JsonValue;
  "weight"?: number;
}
/** Backend response type: Value. */
export interface RoutesCreateEdgePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesExportBaseGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesListGroupsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateGroup. */
export interface RoutesCreateGroupPostInput extends JsonObject {
  "parent_id"?: string | null;
  "slug": string;
  "name": JsonValue;
  "description"?: JsonValue;
  "sort_order"?: number;
  "inclusion_policy"?: JsonValue;
}
/** Backend response type: Value. */
export interface RoutesCreateGroupPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ListQuery. */
export interface RoutesListItemsGetQuery extends QueryParams {
  "q"?: string | null;
  "status"?: string | null;
  "group"?: string | null;
  "kind"?: string | null;
  "linked_service"?: string | null;
  "linked_entity_type"?: string | null;
  "linked_entity_id"?: string | null;
  "page"?: number | null;
  "limit"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesListItemsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateItem. */
export interface RoutesCreateItemPostInput extends JsonObject {
  "group_id": string;
  "slug": string;
  "kind": string;
  "title": JsonValue;
  "summary"?: JsonValue;
  "content": JsonValue;
  "metadata"?: JsonValue;
  "description"?: JsonValue;
  "linked_service"?: string | null;
  "linked_entity_type"?: string | null;
  "linked_entity_id"?: string | null;
  "link_url"?: string | null;
  "open_in_new_tab"?: boolean;
  "show_when"?: JsonValue;
  "tags"?: JsonValue;
  "importance"?: string;
  "valid_from"?: string | null;
  "valid_to"?: string | null;
}
/** Backend response type: Value. */
export interface RoutesCreateItemPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesPublishPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ListQuery. */
export interface RoutesListRulesGetQuery extends QueryParams {
  "q"?: string | null;
  "status"?: string | null;
  "group"?: string | null;
  "kind"?: string | null;
  "linked_service"?: string | null;
  "linked_entity_type"?: string | null;
  "linked_entity_id"?: string | null;
  "page"?: number | null;
  "limit"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesListRulesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateRule. */
export interface RoutesCreateRulePostInput extends JsonObject {
  "knowledge_base_id": string;
  "group_id"?: string | null;
  "slug": string;
  "name": JsonValue;
  "priority"?: number;
  "conditions": JsonValue;
  "outcomes": JsonValue;
  "stop_on_match"?: boolean;
  "enabled"?: boolean;
}
/** Backend response type: Value. */
export interface RoutesCreateRulePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: no-content. */
export type RoutesDeleteRuleDeleteResponse = void;

/** Backend request type: UpdateRule. */
export interface RoutesUpdateRulePutInput extends JsonObject {
  "group_id"?: string | null;
  "name"?: JsonValue | null;
  "priority"?: number | null;
  "conditions"?: JsonValue | null;
  "outcomes"?: JsonValue | null;
  "stop_on_match"?: boolean | null;
  "enabled"?: boolean | null;
  "expected_version"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesUpdateRulePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: RuntimeQuery. */
export interface RoutesRuntimeQueryPostInput extends JsonObject {
  "query"?: string | null;
  "profile_id"?: string | null;
  "profile"?: JsonValue;
  "props"?: JsonValue;
  "meta"?: JsonValue;
  "inputs"?: JsonValue;
  "group_slugs"?: JsonValue;
  "level"?: number | null;
  "limit"?: number | null;
  "compact"?: boolean;
  "max_context_chars"?: number | null;
  "event"?: JsonValue | null;
}
/** Backend response type: RuntimeResult. */
export interface RoutesRuntimeQueryPostResponseData extends JsonObject {
  "chat_slug": string;
  "release"?: JsonValue | null;
  "knowledge": JsonValue[];
  "suggestions": JsonValue[];
  "matched_rules": JsonValue[];
  "notifications": JsonValue[];
  "warnings": JsonValue[];
  "todos": JsonValue[];
  "input_requests": JsonValue[];
  "directions": JsonValue[];
  "trace": JsonValue;
}
export interface RoutesRuntimeQueryPostResponse extends ApiEnvelope<RoutesRuntimeQueryPostResponseData> {
}

/** Backend response type: Value. */
export interface RoutesToolSchemaGetResponse extends ApiEnvelope<JsonValue> {
}

