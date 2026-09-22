import type { ApiEnvelope, JsonObject, JsonValue, QueryParams } from "@faiber/sdk-core";

export interface KnowledgeListQuery extends QueryParams { q?: string; status?: string; group?: string; kind?: string; page?: number; limit?: number; }
export interface KnowledgeBase extends JsonObject { id: string; organization_id: string; slug: string; name: string; description: string; default_language: string; supported_languages: JsonValue; settings: JsonValue; status: string; version: number; created_at: string; updated_at: string; }
export interface KnowledgeGroup extends JsonObject { id: string; knowledge_base_id: string; parent_id?: string | null; slug: string; name: JsonValue; description: JsonValue; sort_order: number; inclusion_policy: JsonValue; status: string; version: number; }
export interface KnowledgeItem extends JsonObject { id: string; knowledge_base_id: string; group_id: string; slug: string; kind: string; title: JsonValue; summary: JsonValue; content: JsonValue; metadata: JsonValue; tags: JsonValue; importance: string; status: string; version: number; }
export interface KnowledgeEdge extends JsonObject { id: string; knowledge_base_id: string; from_item_id: string; to_item_id: string; edge_type: string; conditions: JsonValue; weight: number; status: string; version: number; }
export interface ChatBinding extends JsonObject { id: string; chat_slug: string; knowledge_base_id: string; group_slugs: JsonValue; max_level: number; tool_policy: JsonValue; enabled: boolean; version: number; }
export interface MatchRule extends JsonObject { id: string; knowledge_base_id: string; group_id?: string | null; slug: string; name: JsonValue; priority: number; conditions: JsonValue; outcomes: JsonValue; stop_on_match: boolean; enabled: boolean; version: number; }
export interface CreateKnowledgeBaseInput extends JsonObject { slug: string; name: string; description?: string; default_language?: string; supported_languages?: JsonValue; settings?: JsonValue; }
export interface UpdateKnowledgeBaseInput extends JsonObject { name?: string; description?: string; default_language?: string; supported_languages?: JsonValue; settings?: JsonValue; status?: string; expected_version?: number; }
export interface CreateGroupInput extends JsonObject { parent_id?: string; slug: string; name: JsonValue; description?: JsonValue; sort_order?: number; inclusion_policy?: JsonValue; }
export interface UpdateGroupInput extends JsonObject { parent_id?: string; name?: JsonValue; description?: JsonValue; sort_order?: number; inclusion_policy?: JsonValue; status?: string; expected_version?: number; }
export interface CreateItemInput extends JsonObject { group_id: string; slug: string; kind: string; title: JsonValue; summary?: JsonValue; content: JsonValue; metadata?: JsonValue; tags?: JsonValue; importance?: string; valid_from?: string; valid_to?: string; }
export interface UpdateItemInput extends JsonObject { group_id?: string; kind?: string; title?: JsonValue; summary?: JsonValue; content?: JsonValue; metadata?: JsonValue; tags?: JsonValue; importance?: string; status?: string; valid_from?: string; valid_to?: string; expected_version?: number; }
export interface CreateEdgeInput extends JsonObject { from_item_id: string; to_item_id: string; edge_type: string; conditions?: JsonValue; weight?: number; }
export interface UpdateEdgeInput extends JsonObject { edge_type?: string; conditions?: JsonValue; weight?: number; status?: string; expected_version?: number; }
export interface CreateBindingInput extends JsonObject { chat_slug: string; knowledge_base_id: string; group_slugs?: JsonValue; max_level?: number; tool_policy?: JsonValue; enabled?: boolean; }
export interface UpdateBindingInput extends JsonObject { group_slugs?: JsonValue; max_level?: number; tool_policy?: JsonValue; enabled?: boolean; expected_version?: number; }
export interface CreateRuleInput extends JsonObject { knowledge_base_id: string; group_id?: string; slug: string; name: JsonValue; priority?: number; conditions: JsonValue; outcomes: JsonValue; stop_on_match?: boolean; enabled?: boolean; }
export interface UpdateRuleInput extends JsonObject { group_id?: string; name?: JsonValue; priority?: number; conditions?: JsonValue; outcomes?: JsonValue; stop_on_match?: boolean; enabled?: boolean; expected_version?: number; }
export interface RuntimeQueryInput extends JsonObject { query?: string; profile_id?: string; profile?: JsonValue; props?: JsonValue; meta?: JsonValue; inputs?: JsonValue; group_slugs?: JsonValue; level?: number; limit?: number; event?: JsonValue; }
export interface RuntimeResult extends JsonObject { chat_slug: string; release?: JsonValue; knowledge: JsonValue[]; matched_rules: JsonValue[]; notifications: JsonValue[]; warnings: JsonValue[]; todos: JsonValue[]; input_requests: JsonValue[]; directions: JsonValue[]; trace: JsonValue; }
export interface MemorySubjectQuery extends QueryParams { assistant_id?: string; q?: string; memory_type?: "short" | "long"; page?: number; limit?: number; }
export interface MemoryOverrideInput extends JsonObject { short_memory_enabled?: boolean; long_memory_enabled?: boolean; }
export interface ActionStatusInput extends JsonObject { status: string; input?: JsonValue; }
export type KnowledgeBaseResponse = ApiEnvelope<KnowledgeBase>;
export type KnowledgeBaseListResponse = ApiEnvelope<KnowledgeBase[]>;
export type KnowledgeGroupResponse = ApiEnvelope<KnowledgeGroup>;
export type KnowledgeGroupListResponse = ApiEnvelope<KnowledgeGroup[]>;
export type KnowledgeItemResponse = ApiEnvelope<KnowledgeItem>;
export type KnowledgeItemListResponse = ApiEnvelope<KnowledgeItem[]>;
export type KnowledgeEdgeResponse = ApiEnvelope<KnowledgeEdge>;
export type KnowledgeEdgeListResponse = ApiEnvelope<KnowledgeEdge[]>;
export type ChatBindingResponse = ApiEnvelope<ChatBinding>;
export type ChatBindingListResponse = ApiEnvelope<ChatBinding[]>;
export type MatchRuleResponse = ApiEnvelope<MatchRule>;
export type MatchRuleListResponse = ApiEnvelope<MatchRule[]>;
export type RuntimeResultResponse = ApiEnvelope<RuntimeResult>;

export type ContextMode = "economy" | "balanced" | "deep" | "custom";
export type DependencyState = "ready" | "empty" | "stale" | "degraded" | "denied" | "unavailable";
export interface AssistantConfigurationInput extends JsonObject {
  expected_policy_revision?: number;
  assistant_name?: string;
  knowledge_base_ids?: string[];
  recommender_group_ids?: string[];
  short_memory_enabled?: boolean;
  long_memory_enabled?: boolean;
  short_memory_turns?: number;
  long_memory_limit?: number;
  context_mode?: ContextMode;
  context_budget_tokens?: number;
  knowledge_enabled?: boolean;
  recommenders_enabled?: boolean;
  selected_media_enabled?: boolean;
  session_enabled?: boolean;
  max_knowledge_results?: number;
  max_chunks_per_document?: number;
  max_selected_media_chunks?: number;
  max_session_items?: number;
  max_findings?: number;
  max_recommendations?: number;
  graph_enabled?: boolean;
  vector_enabled?: boolean;
  query_expansion_enabled?: boolean;
  reranking_enabled?: boolean;
  selected_media_budget_percent?: number;
  knowledge_budget_percent?: number;
  memory_budget_percent?: number;
  recommender_budget_percent?: number;
  profile_budget_percent?: number;
  session_budget_percent?: number;
  findings_budget_percent?: number;
}
export interface AssistantQueryInput extends JsonObject {
  user_id: string;
  query?: string;
  profile?: JsonValue;
  profile_version?: string;
  profile_source?: string;
  profile_refreshed_at?: string;
  conversation_id?: string;
  drm_media_ids?: string[];
  model_id?: string;
  context?: JsonValue;
  delivered_memory_ids?: string[];
  delivered_result_ids?: string[];
  context_cursor?: string;
  force_full_context?: boolean;
  query_embedding?: number[];
  limit?: number;
}
export interface RetrievalBudget extends JsonObject { requested_tokens:number; used_tokens:number; remaining_tokens:number; dropped_count:number; truncated:boolean; estimator:string; sections:Record<string,number>; }
export interface AssistantRuntimeResult extends JsonObject { policy:JsonValue; knowledge:JsonValue[]; memory:JsonValue; recommendations:JsonValue[]; citations:JsonValue[]; findings:JsonValue[]; trace:JsonValue; budget:RetrievalBudget; }
export interface MemoryTurnInput extends JsonObject { user_id:string; profile?:JsonValue; profile_version?:string; profile_source?:string; profile_refreshed_at?:string; conversation_id:string; user_message:string; assistant_message:string; user_message_id?:string; assistant_message_id?:string; }
export interface RecordAssistantTurnInput extends MemoryTurnInput {}
export interface RetrievalUsageInput extends JsonObject { final_prompt_tokens:number; cached_input_tokens?:number; reasoning_tokens?:number; output_tokens?:number; token_attribution?:JsonValue; actual_cost?:number; outcome?:string; }
export interface PlatformStatus extends JsonObject { service:string; version:string; commit:string; status:string; checked_at:string; knowledge_bases:number; published_bases:number; sources:number; documents:number; chunks:number; entities:number; relations:number; assistants:number; memory_subjects:number; memories:number; recommender_groups:number; open_findings:number; queued_jobs:number; processing_jobs:number; failed_jobs:number; stale_documents:number; missing_embeddings:number; memory_backlog:number; dead_letters:number; retrieval:JsonValue; dependencies:Record<string,string>; }
export interface KnowledgeSource extends JsonObject { id:string; knowledge_base_id:string; slug:string; name:JsonValue; source_type:string; status:string; sync_status:string; document_count:number; chunk_count:number; last_error?:string|null; last_synced_at?:string|null; }
export interface KnowledgeDocument extends JsonObject { id:string; knowledge_base_id:string; source_id?:string|null; external_id?:string|null; title:string; media_type:string; language?:string|null; provenance:JsonValue; metadata:JsonValue; status:string; checksum:string; version:number; }
export interface ConverterCapability extends JsonObject { id:string; display_name:JsonValue; category:string; extensions:string[]; mime_types:string[]; capabilities:string[]; output_types:string[]; supported_languages:string[]; limits:JsonValue; cost_model:JsonValue; configuration_requirements:JsonValue; status:string; health:JsonValue; version:string; mode:string; }
export interface ProcessingJob extends JsonObject { id:string; organization_id:string; knowledge_base_id?:string|null; source_id?:string|null; document_id?:string|null; job_type:string; status:string; stage:string; progress:number; attempts:number; max_attempts:number; next_attempt_at:string; error_code?:string|null; error_detail?:string|null; safe_log:JsonValue; }
export interface IngestDocumentInput extends JsonObject { knowledge_base_id:string; source_id?:string|null; external_id?:string|null; title:string; content:string; media_type?:string; language?:string; provenance?:JsonValue; metadata?:JsonValue; }
export type AssistantRuntimeResponse = ApiEnvelope<AssistantRuntimeResult>;
export type PlatformStatusResponse = ApiEnvelope<PlatformStatus>;
export type KnowledgeSourceListResponse = ApiEnvelope<KnowledgeSource[]>;
export type KnowledgeDocumentListResponse = ApiEnvelope<KnowledgeDocument[]>;
export type ConverterListResponse = ApiEnvelope<ConverterCapability[]>;
export type ConverterCapabilityListResponse = ConverterListResponse;
export type ProcessingJobListResponse = ApiEnvelope<ProcessingJob[]>;

/** Published contract content and deliberately extensible JSON Schema metadata. */
export interface PublishedAssistantContract { content: Record<string, string>; metadata: { contract_version: string; output_schema?: JsonValue; shared_contract?: {slug:string;version:string;release_id:string} }; }
export interface AssistantContractsResult { release_id: string; shared_release_id?: string|null; contracts: Record<string, PublishedAssistantContract>; }
export interface AssistantContractsResponse { data: AssistantContractsResult; }
