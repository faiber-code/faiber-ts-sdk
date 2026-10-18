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
export interface PlatformAuditEventsGetResponse extends ApiEnvelope<JsonValue> {
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

/** Backend response type: Value. */
export interface PlatformListDocumentsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: IngestDocument. */
export interface PlatformIngestDocumentPostInput extends JsonObject {
  "knowledge_base_id": string;
  "source_id"?: string | null;
  "external_id"?: string | null;
  "title": string;
  "content": string;
  "media_type"?: string;
  "language"?: string | null;
  "provenance"?: JsonValue;
  "metadata"?: JsonValue;
}
/** Backend response type: Value. */
export interface PlatformIngestDocumentPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformReprocessDocumentPostResponse extends ApiEnvelope<JsonValue> {
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

/** Backend response type: Value. */
export interface PlatformListEvaluationCasesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: SaveEvaluationCase. */
export interface PlatformSaveEvaluationCasePostInput extends JsonObject {
  "knowledge_base_id"?: string | null;
  "assistant_id"?: string | null;
  "stable_key": string;
  "language"?: string | null;
  "query": string;
  "sanitized_context"?: JsonValue;
  "relevant_targets"?: JsonValue;
  "expected_top1"?: string | null;
  "selected_media_ids"?: string[];
  "thresholds"?: JsonValue;
}
/** Backend response type: Value. */
export interface PlatformSaveEvaluationCasePostResponse extends ApiEnvelope<JsonValue> {
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

/** Backend response type: Value. */
export interface RoutesGetReleaseGetResponse extends ApiEnvelope<JsonValue> {
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

/** Backend response type: Value. */
export interface PlatformReplayMemoryOutboxPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: MemoryFilter. */
export interface PlatformListMemorySubjectsGetQuery extends QueryParams {
  "assistant_id"?: string | null;
  "q"?: string | null;
  "memory_type"?: string | null;
  "page"?: number | null;
  "limit"?: number | null;
}
/** Backend response type: Value. */
export interface PlatformListMemorySubjectsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: MemoryClearQuery. */
export interface PlatformClearMemorySubjectDeleteQuery extends QueryParams {
  "memory_type"?: string | null;
  "reason"?: string | null;
}
/** Backend response type: no-content. */
export type PlatformClearMemorySubjectDeleteResponse = void;

/** Backend request type: MemoryOverride. */
export interface PlatformSetMemoryOverridePutInput extends JsonObject {
  "short_memory_enabled"?: boolean | null;
  "long_memory_enabled"?: boolean | null;
  "reason"?: string | null;
}
/** Backend response type: Value. */
export interface PlatformSetMemoryOverridePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: MemoryClearQuery. */
export interface PlatformForgetMemoryDeleteQuery extends QueryParams {
  "memory_type"?: string | null;
  "reason"?: string | null;
}
/** Backend response type: no-content. */
export type PlatformForgetMemoryDeleteResponse = void;

/** Backend response type: Value. */
export interface PlatformInvalidatePolicyCachePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformCatalogGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformConvertersGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformStatusGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformProcessingJobsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformCancelProcessingJobPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformRetryProcessingJobPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformListRecommendersGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateRecommenderGroup. */
export interface PlatformCreateRecommenderGroupPostInput extends JsonObject {
  "slug": string;
  "name": JsonValue;
  "description"?: JsonValue;
  "strategy"?: string;
  "conditions"?: JsonValue;
  "max_results"?: number;
}
/** Backend response type: Value. */
export interface PlatformCreateRecommenderGroupPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateRecommenderItem. */
export interface PlatformCreateRecommenderItemPostInput extends JsonObject {
  "stable_key": string;
  "kind": string;
  "label": JsonValue;
  "description"?: JsonValue;
  "linked_service"?: string | null;
  "linked_entity_type"?: string | null;
  "linked_entity_id"?: string | null;
  "link_url"?: string | null;
  "conditions"?: JsonValue;
  "tags"?: JsonValue;
  "base_score"?: number;
}
/** Backend response type: Value. */
export interface PlatformCreateRecommenderItemPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: AssistantConfiguration. */
export interface PlatformConfigureAssistantPutInput extends JsonObject {
  "expected_policy_revision"?: number | null;
  "assistant_name"?: string;
  "knowledge_base_ids"?: string[];
  "recommender_group_ids"?: string[];
  "short_memory_enabled"?: boolean;
  "long_memory_enabled"?: boolean;
  "short_memory_turns"?: number;
  "long_memory_limit"?: number;
  "context_mode"?: string;
  "context_budget_tokens"?: number;
  "knowledge_enabled"?: boolean;
  "recommenders_enabled"?: boolean;
  "selected_media_enabled"?: boolean;
  "session_enabled"?: boolean;
  "max_knowledge_results"?: number;
  "max_chunks_per_document"?: number;
  "max_selected_media_chunks"?: number;
  "max_session_items"?: number;
  "max_findings"?: number;
  "max_recommendations"?: number;
  "graph_enabled"?: boolean;
  "vector_enabled"?: boolean;
  "query_expansion_enabled"?: boolean;
  "reranking_enabled"?: boolean;
  "selected_media_budget_percent"?: number;
  "knowledge_budget_percent"?: number;
  "memory_budget_percent"?: number;
  "recommender_budget_percent"?: number;
  "profile_budget_percent"?: number;
  "session_budget_percent"?: number;
  "findings_budget_percent"?: number;
}
/** Backend response type: Value. */
export interface PlatformConfigureAssistantPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesGetGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: AssistantQuery. */
export type PlatformEvaluateAssistantPostInputSurface = "chat_slug" | "assistant" | "mcp" | "preview" | "evaluation";
export interface PlatformEvaluateAssistantPostInput extends JsonObject {
  "user_id": string;
  "query"?: string;
  "profile"?: JsonValue;
  "profile_version"?: string | null;
  "profile_source"?: string | null;
  "profile_refreshed_at"?: string | null;
  "conversation_id"?: string | null;
  "drm_media_ids"?: string[];
  "model_id"?: string | null;
  "context"?: JsonValue;
  "delivered_memory_ids"?: string[];
  "delivered_result_ids"?: string[];
  "context_cursor"?: string | null;
  "force_full_context"?: boolean;
  "evaluation_case_id"?: string | null;
  "query_embedding"?: number[];
  "limit"?: number;
  "surface"?: PlatformEvaluateAssistantPostInputSurface | null;
}
/** Backend response type: AssistantRuntimeResult. */
export interface PlatformEvaluateAssistantPostResponseData extends JsonObject {
  "policy": JsonValue;
  "knowledge": JsonValue[];
  "memory": JsonValue;
  "recommendations": JsonValue[];
  "citations": JsonValue[];
  "findings": JsonValue[];
  "trace": JsonValue;
  "budget": JsonValue;
}
export interface PlatformEvaluateAssistantPostResponse extends ApiEnvelope<PlatformEvaluateAssistantPostResponseData> {
}

/** Backend request type: RecordTurn. */
export interface PlatformRecordTurnPostInput extends JsonObject {
  "user_id": string;
  "profile"?: JsonValue;
  "profile_version"?: string | null;
  "profile_source"?: string | null;
  "profile_refreshed_at"?: string | null;
  "conversation_id": string;
  "user_message": string;
  "assistant_message": string;
  "user_message_id"?: string | null;
  "assistant_message_id"?: string | null;
}
/** Backend response type: Value. */
export interface PlatformRecordTurnPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: AssistantQuery. */
export type PlatformPreviewAssistantPostInputSurface = "chat_slug" | "assistant" | "mcp" | "preview" | "evaluation";
export interface PlatformPreviewAssistantPostInput extends JsonObject {
  "user_id": string;
  "query"?: string;
  "profile"?: JsonValue;
  "profile_version"?: string | null;
  "profile_source"?: string | null;
  "profile_refreshed_at"?: string | null;
  "conversation_id"?: string | null;
  "drm_media_ids"?: string[];
  "model_id"?: string | null;
  "context"?: JsonValue;
  "delivered_memory_ids"?: string[];
  "delivered_result_ids"?: string[];
  "context_cursor"?: string | null;
  "force_full_context"?: boolean;
  "evaluation_case_id"?: string | null;
  "query_embedding"?: number[];
  "limit"?: number;
  "surface"?: PlatformPreviewAssistantPostInputSurface | null;
}
/** Backend response type: AssistantRuntimeResult. */
export interface PlatformPreviewAssistantPostResponseData extends JsonObject {
  "policy": JsonValue;
  "knowledge": JsonValue[];
  "memory": JsonValue;
  "recommendations": JsonValue[];
  "citations": JsonValue[];
  "findings": JsonValue[];
  "trace": JsonValue;
  "budget": JsonValue;
}
export interface PlatformPreviewAssistantPostResponse extends ApiEnvelope<PlatformPreviewAssistantPostResponseData> {
}

/** Backend request type: AssistantQuery. */
export type PlatformQueryAssistantPostInputSurface = "chat_slug" | "assistant" | "mcp" | "preview" | "evaluation";
export interface PlatformQueryAssistantPostInput extends JsonObject {
  "user_id": string;
  "query"?: string;
  "profile"?: JsonValue;
  "profile_version"?: string | null;
  "profile_source"?: string | null;
  "profile_refreshed_at"?: string | null;
  "conversation_id"?: string | null;
  "drm_media_ids"?: string[];
  "model_id"?: string | null;
  "context"?: JsonValue;
  "delivered_memory_ids"?: string[];
  "delivered_result_ids"?: string[];
  "context_cursor"?: string | null;
  "force_full_context"?: boolean;
  "evaluation_case_id"?: string | null;
  "query_embedding"?: number[];
  "limit"?: number;
  "surface"?: PlatformQueryAssistantPostInputSurface | null;
}
/** Backend response type: AssistantRuntimeResult. */
export interface PlatformQueryAssistantPostResponseData extends JsonObject {
  "policy": JsonValue;
  "knowledge": JsonValue[];
  "memory": JsonValue;
  "recommendations": JsonValue[];
  "citations": JsonValue[];
  "findings": JsonValue[];
  "trace": JsonValue;
  "budget": JsonValue;
}
export interface PlatformQueryAssistantPostResponse extends ApiEnvelope<PlatformQueryAssistantPostResponseData> {
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
export interface PlatformDocumentEvidenceGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformSessionEvidenceGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: McpRequest. */
export interface PlatformMcpPostInput extends JsonObject {
  "jsonrpc": string;
  "id"?: JsonValue | null;
  "method": string;
  "params"?: JsonValue;
}
/** Backend response type: Value. */
export type PlatformMcpPostResponse = JsonValue;

/** Backend request type: RetrievalUsageReport. */
export interface PlatformRecordRetrievalUsagePostInput extends JsonObject {
  "final_prompt_tokens": number;
  "cached_input_tokens"?: number;
  "reasoning_tokens"?: number;
  "output_tokens"?: number;
  "token_attribution"?: JsonValue;
  "actual_cost"?: number | null;
  "outcome"?: string | null;
}
/** Backend response type: Value. */
export interface PlatformRecordRetrievalUsagePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesToolSchemaGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformListSourcesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateSource. */
export interface PlatformCreateSourcePostInput extends JsonObject {
  "knowledge_base_id": string;
  "slug": string;
  "name": JsonValue;
  "source_type": string;
  "configuration"?: JsonValue;
  "provenance_policy"?: JsonValue;
}
/** Backend response type: Value. */
export interface PlatformCreateSourcePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformPauseSourcePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface PlatformSyncSourcePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface MainReadinessGetHealthResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Health. */
export interface MainLivenessGetResponseData extends JsonObject {
  "service": string;
  "version": string;
  "status": string;
}
export interface MainLivenessGetResponse extends ApiEnvelope<MainLivenessGetResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface MainReadinessGetHealthReadyResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: binary byte stream. */
export type MainConvertPostInput = Blob | ArrayBuffer | ArrayBufferView;
/** Backend response type: Extraction. */
export interface MainConvertPostResponseDataTables extends JsonObject {
  "title": string;
  "rows": string[][];
}
export interface MainConvertPostResponseData extends JsonObject {
  "text": string;
  "tables": MainConvertPostResponseDataTables[];
  "pages"?: number | null;
  "warnings": string[];
  "converter_version": string;
}
export interface MainConvertPostResponse extends ApiEnvelope<MainConvertPostResponseData> {
}

/** Backend request type: Search. */
export interface TaskProjectionsCandidatesPostInput extends JsonObject {
  "project_ids": string[];
  "query": string;
}
/** Backend response type: Value. */
export interface TaskProjectionsCandidatesPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Passages. */
export interface TaskProjectionsPassagesPostInputSources extends JsonObject {
  "note_id": string;
  "version": number;
}
export interface TaskProjectionsPassagesPostInput extends JsonObject {
  "user_id": string;
  "query": string;
  "locale": string;
  "sources": TaskProjectionsPassagesPostInputSources[];
}
/** Backend response type: RetrievalResult. */
export type TaskProjectionsPassagesPostResponseDataAcceptedResultsCategory = "authored_item" | "document_chunk" | "graph_neighbor" | "media_transcript_chunk" | "session_evidence" | "profile_fact" | "user_memory" | "finding" | "recommendation";
export interface TaskProjectionsPassagesPostResponseDataAcceptedResultsScore extends JsonObject {
  "lexical": number;
  "vector": number;
  "exact_title": number;
  "entity": number;
  "graph": number;
  "base_priority": number;
  "importance": number;
  "freshness": number;
  "selected_media": number;
  "reciprocal_rank": number;
  "final_score": number;
}
export interface TaskProjectionsPassagesPostResponseDataAcceptedResults extends JsonObject {
  "id": string;
  "category": TaskProjectionsPassagesPostResponseDataAcceptedResultsCategory;
  "title": JsonValue;
  "summary": JsonValue;
  "content": JsonValue;
  "provenance": JsonValue;
  "citation": JsonValue;
  "score": TaskProjectionsPassagesPostResponseDataAcceptedResultsScore;
  "token_count": number;
  "selected_media": boolean;
  "payload": JsonValue;
}
export type TaskProjectionsPassagesPostResponseDataExcludedResultsCategory = "authored_item" | "document_chunk" | "graph_neighbor" | "media_transcript_chunk" | "session_evidence" | "profile_fact" | "user_memory" | "finding" | "recommendation";
export type TaskProjectionsPassagesPostResponseDataExcludedResultsReason = "tenant_scope" | "assistant_scope" | "user_scope" | "base_not_published" | "release_not_published" | "item_not_published" | "deleted" | "not_yet_valid" | "expired" | "group_scope" | "maximum_level" | "condition_mismatch" | "edge_condition_mismatch" | "recommender_group_condition_mismatch" | "recommender_item_condition_mismatch" | "visibility_denied" | "session_scope" | "selected_media_scope" | "duplicate" | "recommender_group_limit" | "result_limit" | "context_budget" | "policy_disabled" | "already_delivered";
export interface TaskProjectionsPassagesPostResponseDataExcludedResults extends JsonObject {
  "candidate_id": string;
  "category": TaskProjectionsPassagesPostResponseDataExcludedResultsCategory;
  "reason": TaskProjectionsPassagesPostResponseDataExcludedResultsReason;
}
export type TaskProjectionsPassagesPostResponseDataMemoriesCategory = "authored_item" | "document_chunk" | "graph_neighbor" | "media_transcript_chunk" | "session_evidence" | "profile_fact" | "user_memory" | "finding" | "recommendation";
export interface TaskProjectionsPassagesPostResponseDataMemoriesScore extends JsonObject {
  "lexical": number;
  "vector": number;
  "exact_title": number;
  "entity": number;
  "graph": number;
  "base_priority": number;
  "importance": number;
  "freshness": number;
  "selected_media": number;
  "reciprocal_rank": number;
  "final_score": number;
}
export interface TaskProjectionsPassagesPostResponseDataMemories extends JsonObject {
  "id": string;
  "category": TaskProjectionsPassagesPostResponseDataMemoriesCategory;
  "title": JsonValue;
  "summary": JsonValue;
  "content": JsonValue;
  "provenance": JsonValue;
  "citation": JsonValue;
  "score": TaskProjectionsPassagesPostResponseDataMemoriesScore;
  "token_count": number;
  "selected_media": boolean;
  "payload": JsonValue;
}
export type TaskProjectionsPassagesPostResponseDataRecommendationsCategory = "authored_item" | "document_chunk" | "graph_neighbor" | "media_transcript_chunk" | "session_evidence" | "profile_fact" | "user_memory" | "finding" | "recommendation";
export interface TaskProjectionsPassagesPostResponseDataRecommendationsScore extends JsonObject {
  "lexical": number;
  "vector": number;
  "exact_title": number;
  "entity": number;
  "graph": number;
  "base_priority": number;
  "importance": number;
  "freshness": number;
  "selected_media": number;
  "reciprocal_rank": number;
  "final_score": number;
}
export interface TaskProjectionsPassagesPostResponseDataRecommendations extends JsonObject {
  "id": string;
  "category": TaskProjectionsPassagesPostResponseDataRecommendationsCategory;
  "title": JsonValue;
  "summary": JsonValue;
  "content": JsonValue;
  "provenance": JsonValue;
  "citation": JsonValue;
  "score": TaskProjectionsPassagesPostResponseDataRecommendationsScore;
  "token_count": number;
  "selected_media": boolean;
  "payload": JsonValue;
}
export type TaskProjectionsPassagesPostResponseDataFindingsCategory = "authored_item" | "document_chunk" | "graph_neighbor" | "media_transcript_chunk" | "session_evidence" | "profile_fact" | "user_memory" | "finding" | "recommendation";
export interface TaskProjectionsPassagesPostResponseDataFindingsScore extends JsonObject {
  "lexical": number;
  "vector": number;
  "exact_title": number;
  "entity": number;
  "graph": number;
  "base_priority": number;
  "importance": number;
  "freshness": number;
  "selected_media": number;
  "reciprocal_rank": number;
  "final_score": number;
}
export interface TaskProjectionsPassagesPostResponseDataFindings extends JsonObject {
  "id": string;
  "category": TaskProjectionsPassagesPostResponseDataFindingsCategory;
  "title": JsonValue;
  "summary": JsonValue;
  "content": JsonValue;
  "provenance": JsonValue;
  "citation": JsonValue;
  "score": TaskProjectionsPassagesPostResponseDataFindingsScore;
  "token_count": number;
  "selected_media": boolean;
  "payload": JsonValue;
}
export interface TaskProjectionsPassagesPostResponseDataBudget extends JsonObject {
  "requested_tokens": number;
  "used_tokens": number;
  "remaining_tokens": number;
  "dropped_count": number;
  "truncated": boolean;
  "estimator": string;
  "sections": Record<string, number>;
}
export interface TaskProjectionsPassagesPostResponseData extends JsonObject {
  "candidate_sets": Record<string, number>;
  "accepted_results": TaskProjectionsPassagesPostResponseDataAcceptedResults[];
  "excluded_results": TaskProjectionsPassagesPostResponseDataExcludedResults[];
  "memories": TaskProjectionsPassagesPostResponseDataMemories[];
  "recommendations": TaskProjectionsPassagesPostResponseDataRecommendations[];
  "findings": TaskProjectionsPassagesPostResponseDataFindings[];
  "citations": JsonValue[];
  "provenance": JsonValue[];
  "score_explanations": Record<string, BackendJson<"ScoreExplanation">>;
  "budget": TaskProjectionsPassagesPostResponseDataBudget;
  "dependency_state": Record<string, BackendJson<"DependencyState">>;
  "trace": JsonValue;
}
export interface TaskProjectionsPassagesPostResponse extends ApiEnvelope<TaskProjectionsPassagesPostResponseData> {
}

/** Backend request type: Projection. */
export interface TaskProjectionsSyncPostInput extends JsonObject {
  "note_id": string;
  "project_id": string;
  "version": number;
  "title": string;
  "content": string;
  "deleted"?: boolean;
}
/** Backend response type: Value. */
export interface TaskProjectionsSyncPostResponse extends ApiEnvelope<JsonValue> {
}
