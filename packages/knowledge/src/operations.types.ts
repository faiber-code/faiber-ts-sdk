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
export type RoutesListActionsGetResponse = import("./types.js").KnowledgeCustomerActionListResponse;

/** Backend request type: ActionStatus. */
export type RoutesUpdateActionStatusPatchInput = import("./types.js").ActionStatusInput;
/** Backend response type: Value. */
export type RoutesUpdateActionStatusPatchResponse = import("./types.js").KnowledgeCustomerActionResponse;

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
export type RoutesListAuditGetResponse = import("./types.js").KnowledgeAuditLogListResponse;

/** Backend response type: Value. */
export type PlatformAuditEventsGetResponse = import("./types.js").KnowledgeAuditEventListResponse;

/** Backend response type: Value. */
export type RoutesListBindingsGetResponse = import("./types.js").ChatBindingListResponse;

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
export type RoutesCreateBindingPostResponse = import("./types.js").ChatBindingResponse;

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
export type RoutesUpdateBindingPutResponse = import("./types.js").ChatBindingResponse;

/** Backend response type: Value. */
export type PlatformListDocumentsGetResponse = import("./types.js").KnowledgeDocumentListResponse;

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
export type PlatformIngestDocumentPostResponse = import("./types.js").IngestDocumentResponse;

/** Backend response type: Value. */
export type PlatformReprocessDocumentPostResponse = import("./types.js").KnowledgeQueuedJobResponse;

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
export type RoutesUpdateEdgePutResponse = import("./types.js").KnowledgeEdgeResponse;

/** Backend response type: Value. */
export type PlatformListEvaluationCasesGetResponse = import("./types.js").KnowledgeEvaluationCaseListResponse;

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
export type PlatformSaveEvaluationCasePostResponse = import("./types.js").KnowledgeEvaluationCaseResponse;

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
export type RoutesUpdateGroupPutResponse = import("./types.js").KnowledgeGroupResponse;

/** Backend response type: no-content. */
export type RoutesDeleteItemDeleteResponse = void;

/** Backend response type: Value. */
export type RoutesGetItemGetResponse = import("./types.js").KnowledgeItemResponse;

/** Backend request type: UpdateItem. */
export type RoutesUpdateItemPutInput = import("./types.js").UpdateItemInput;
/** Backend response type: Value. */
export type RoutesUpdateItemPutResponse = import("./types.js").KnowledgeItemResponse;

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
export type RoutesListBasesGetResponse = import("./types.js").KnowledgeBaseListResponse;

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
export type RoutesCreateBasePostResponse = import("./types.js").KnowledgeBaseResponse;

/** Backend response type: no-content. */
export type RoutesDeleteBaseDeleteResponse = void;

/** Backend response type: Value. */
export type RoutesGetBaseGetResponse = import("./types.js").KnowledgeBaseResponse;

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
export type RoutesUpdateBasePutResponse = import("./types.js").KnowledgeBaseResponse;

/** Backend response type: Value. */
export type RoutesListEdgesGetResponse = import("./types.js").KnowledgeEdgeListResponse;

/** Backend request type: CreateEdge. */
export interface RoutesCreateEdgePostInput extends JsonObject {
  "from_item_id": string;
  "to_item_id": string;
  "edge_type": string;
  "conditions"?: JsonValue;
  "weight"?: number;
}
/** Backend response type: Value. */
export type RoutesCreateEdgePostResponse = import("./types.js").KnowledgeEdgeResponse;

/** Backend response type: Value. */
export type RoutesExportBaseGetResponse = import("./types.js").KnowledgeExportResponse;

/** Backend response type: Value. */
export type RoutesListGroupsGetResponse = import("./types.js").KnowledgeGroupListResponse;

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
export type RoutesCreateGroupPostResponse = import("./types.js").KnowledgeGroupResponse;

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
export type RoutesListItemsGetResponse = import("./types.js").KnowledgeItemListResponse;

/** Backend request type: CreateItem. */
export type RoutesCreateItemPostInput = import("./types.js").CreateItemInput;
/** Backend response type: Value. */
export type RoutesCreateItemPostResponse = import("./types.js").KnowledgeItemResponse;

/** Backend response type: Value. */
export type RoutesPublishPostResponse = import("./types.js").KnowledgeReleaseResponse;

/** Backend response type: Value. */
export type RoutesGetReleaseGetResponse = import("./types.js").KnowledgeReleaseResponse;

/** Backend query type: RuleListQuery. */
export interface RoutesListRulesGetQuery extends QueryParams {
  "q"?: string | null;
  "knowledge_base_id"?: string | null;
  "group_id"?: string | null;
  "enabled"?: boolean | null;
  "page"?: number | null;
  "limit"?: number | null;
}
/** Backend response type: Value. */
export type RoutesListRulesGetResponse = import("./types.js").MatchRuleListResponse;

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
export type RoutesCreateRulePostResponse = import("./types.js").MatchRuleResponse;

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
export type RoutesUpdateRulePutResponse = import("./types.js").MatchRuleResponse;

/** Backend response type: Value. */
export type PlatformReplayMemoryOutboxPostResponse = import("./types.js").MemoryOutboxReplayResponse;

/** Backend query type: MemoryFilter. */
export type PlatformListMemorySubjectsGetQuery = import("./types.js").MemorySubjectQuery;
/** Backend response type: Value. */
export type PlatformListMemorySubjectsGetResponse = import("./types.js").MemorySubjectListResponse;

/** Backend query type: MemoryClearQuery. */
export type PlatformClearMemorySubjectDeleteQuery = import("./types.js").MemoryClearQuery;
/** Backend response type: no-content. */
export type PlatformClearMemorySubjectDeleteResponse = void;

/** Backend response type: Value. */
export type PlatformMemorySubjectGetResponse = import("./types.js").MemorySubjectResponse;

/** Backend query type: AuditQuery. */
export type PlatformMemoryAuditGetQuery = import("./types.js").MemoryAuditQuery;
/** Backend response type: Value. */
export type PlatformMemoryAuditGetResponse = import("./types.js").MemoryAuditListResponse;

/** Backend request type: Correction. */
export type PlatformCorrectMemoryPostInput = import("./types.js").MemoryCorrectionInput;
/** Backend response type: Value. */
export type PlatformCorrectMemoryPostResponse = import("./types.js").MemoryCorrectionResponse;

/** Backend query type: RecordsQuery. */
export type PlatformListMemoriesGetQuery = import("./types.js").MemoryRecordQuery;
/** Backend response type: Value. */
export type PlatformListMemoriesGetResponse = import("./types.js").MemoryRecordListResponse;

/** Backend request type: MemoryOverride. */
export type PlatformSetMemoryOverridePutInput = import("./types.js").MemoryOverrideInput;
/** Backend response type: Value. */
export type PlatformSetMemoryOverridePutResponse = import("./types.js").MemorySubjectResponse;

/** Backend query type: MemoryClearQuery. */
export type PlatformForgetMemoryDeleteQuery = import("./types.js").MemoryClearQuery;
/** Backend response type: no-content. */
export type PlatformForgetMemoryDeleteResponse = void;

/** Backend response type: Value. */
export type PlatformMemoryRecordGetResponse = import("./types.js").MemoryRecordResponse;

/** Backend response type: Value. */
export type PlatformInvalidatePolicyCachePostResponse = import("./types.js").CacheInvalidationResponse;

/** Backend response type: Value. */
export type PlatformCatalogGetResponse = import("./types.js").KnowledgeCatalogResponse;

/** Backend response type: Value. */
export type PlatformConvertersGetResponse = import("./types.js").ConverterListResponse;

/** Backend response type: Value. */
export type PlatformStatusGetResponse = import("./types.js").PlatformStatusResponse;

/** Backend response type: Value. */
export type PlatformProcessingJobsGetResponse = import("./types.js").ProcessingJobListResponse;

/** Backend response type: Value. */
export type PlatformCancelProcessingJobPostResponse = import("./types.js").ProcessingJobResponse;

/** Backend response type: Value. */
export type PlatformRetryProcessingJobPostResponse = import("./types.js").ProcessingJobResponse;

/** Backend response type: Value. */
export type PlatformListRecommendersGetResponse = import("./types.js").RecommenderGroupListResponse;

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
export type PlatformCreateRecommenderGroupPostResponse = import("./types.js").RecommenderGroupResponse;

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
export type PlatformCreateRecommenderItemPostResponse = import("./types.js").RecommenderItemResponse;

/** Backend response type: Value. */
export type PlatformAssistantConfigurationOperationGetResponse = import("./types.js").AssistantConfigurationOperationResponse;

/** Backend request type: ConfigurationCancellation. */
export type PlatformCancelAssistantConfigurationOperationPostInput = import("./types.js").AssistantConfigurationCancellation;
/** Backend response type: Value. */
export type PlatformCancelAssistantConfigurationOperationPostResponse = import("./types.js").AssistantConfigurationOperationResponse;

/** Backend response type: Value. */
export type PlatformAssistantConfigurationSnapshotGetResponse = import("./types.js").AssistantPolicySnapshotResponse;

/** Backend request type: AssistantConfiguration. */
export type PlatformConfigureAssistantPutInput = import("./types.js").AssistantConfigurationInput;
/** Backend response type: Value. */
export type PlatformConfigureAssistantPutResponse = import("./types.js").AssistantConfigurationResponse;

/** Backend response type: Value. */
export type RoutesGetGetResponse = import("./types.js").AssistantContractsResponse;

/** Backend request type: AssistantQuery. */
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
}
/** Backend response type: AssistantRuntimeResult. */
export type PlatformEvaluateAssistantPostResponse = import("./types.js").AssistantRuntimeResponse;

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
export type PlatformRecordTurnPostResponse = import("./types.js").MemoryTurnResponse;

/** Backend request type: AssistantQuery. */
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
}
/** Backend response type: AssistantRuntimeResult. */
export type PlatformPreviewAssistantPostResponse = import("./types.js").AssistantRuntimeResponse;

/** Backend request type: AssistantQuery. */
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
}
/** Backend response type: AssistantRuntimeResult. */
export type PlatformQueryAssistantPostResponse = import("./types.js").AssistantRuntimeResponse;

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
  "release": JsonValue | null;
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
export type PlatformDocumentEvidenceGetResponse = import("./types.js").DocumentEvidenceResponse;

/** Backend response type: Value. */
export type PlatformSessionEvidenceGetResponse = import("./types.js").SessionEvidenceResponse;

/** Backend request type: McpRequest. */
export interface PlatformMcpPostInput extends JsonObject {
  "jsonrpc": string;
  "id"?: JsonValue | null;
  "method": string;
  "params"?: JsonValue;
}
/** Backend response type: Value. */
export type PlatformMcpPostResponse = import("./types.js").KnowledgeMcpResponse;

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
export type PlatformRecordRetrievalUsagePostResponse = import("./types.js").RetrievalUsageResponse;

/** Backend response type: Value. */
export type RoutesToolSchemaGetResponse = import("./types.js").KnowledgeToolSchemaResponse;

/** Backend response type: Value. */
export type PlatformListSourcesGetResponse = import("./types.js").KnowledgeSourceListResponse;

/** Backend request type: CreateSource. */
export type PlatformCreateSourcePostInput = import("./types.js").CreateKnowledgeSourceInput;
/** Backend response type: Value. */
export type PlatformCreateSourcePostResponse = import("./types.js").KnowledgeSourceResponse;

/** Backend request type: SourceStateInput. */
export type PlatformPauseSourcePostInput = import("./types.js").SourceStateInput;
/** Backend response type: Value. */
export type PlatformPauseSourcePostResponse = import("./types.js").KnowledgeSourceResponse;

/** Backend response type: Value. */
export type PlatformSyncSourcePostResponse = import("./types.js").KnowledgeQueuedJobResponse;

/** Backend response type: serde_json::Value. */
export type MainReadinessGetHealthResponse = import("./types.js").KnowledgeReadinessResponse;

/** Backend response type: Health. */
export interface MainLivenessGetResponseData extends JsonObject {
  "service": string;
  "version": string;
  "status": string;
}
export interface MainLivenessGetResponse extends ApiEnvelope<MainLivenessGetResponseData> {
}

/** Backend response type: serde_json::Value. */
export type MainReadinessGetHealthReadyResponse = import("./types.js").KnowledgeReadinessResponse;

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
  "pages": number | null;
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
export type TaskProjectionsCandidatesPostResponse = import("./types.js").TaskProjectionCandidateListResponse;

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
export type TaskProjectionsPassagesPostResponse = import("./types.js").KnowledgeRetrievalResponse;

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
export type TaskProjectionsSyncPostResponse = import("./types.js").TaskProjectionResponse;
