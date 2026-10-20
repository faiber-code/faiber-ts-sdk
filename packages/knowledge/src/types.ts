import type { ApiEnvelope, JsonObject, JsonValue, QueryParams } from "@faiber/sdk-core";

/** Accepted by the backend importance validator; response records remain strings for historical data. */
export type KnowledgeImportance = "debug" | "info" | "notice" | "warning" | "urgent" | "critical";
export type KnowledgeActionStatus = "open" | "acknowledged" | "snoozed" | "completed" | "dismissed";
export interface KnowledgeListQuery extends QueryParams { q?: string; status?: string; group?: string; kind?: string; linked_service?: string; linked_entity_type?: string; linked_entity_id?: string; page?: number; limit?: number; }
export interface KnowledgeBase extends JsonObject { id: string; organization_id: string; slug: string; name: string; description: string; default_language: string; supported_languages: JsonValue; settings: JsonValue; status: string; version: number; created_at: string; updated_at: string; published_release_id: string | null; created_by: string | null; updated_by: string | null; deleted_at: string | null; }
export interface KnowledgeGroup extends JsonObject { id: string; knowledge_base_id: string; parent_id: string | null; slug: string; name: JsonValue; description: JsonValue; sort_order: number; inclusion_policy: JsonValue; status: string; version: number; level: number; created_at: string; updated_at: string; deleted_at: string | null; }
export interface KnowledgeItem extends JsonObject { id: string; knowledge_base_id: string; group_id: string; slug: string; kind: string; title: JsonValue; summary: JsonValue; content: JsonValue; metadata: JsonValue; tags: JsonValue; importance: string; status: string; version: number; description: JsonValue; linked_service: string | null; linked_entity_type: string | null; linked_entity_id: string | null; link_url: string | null; open_in_new_tab: boolean; show_when: JsonValue; valid_from: string | null; valid_to: string | null; checksum_sha256: string; created_by: string | null; updated_by: string | null; created_at: string; updated_at: string; deleted_at: string | null; }
export interface KnowledgeEdge extends JsonObject { id: string; knowledge_base_id: string; from_item_id: string; to_item_id: string; edge_type: string; conditions: JsonValue; weight: number; status: string; version: number; created_at: string; updated_at: string; }
export interface ChatBinding extends JsonObject { id: string; chat_slug: string; knowledge_base_id: string; group_slugs: JsonValue; max_level: number; tool_policy: JsonValue; enabled: boolean; version: number; organization_id: string; created_at: string; updated_at: string; }
export interface MatchRule extends JsonObject { id: string; knowledge_base_id: string; group_id: string | null; slug: string; name: JsonValue; priority: number; conditions: JsonValue; outcomes: JsonValue; stop_on_match: boolean; enabled: boolean; version: number; created_at: string; updated_at: string; deleted_at: string | null; }
export interface CreateKnowledgeBaseInput extends JsonObject { slug: string; name: string; description?: string; default_language?: string; supported_languages?: JsonValue; settings?: JsonValue; }
export interface UpdateKnowledgeBaseInput extends JsonObject { name?: string | null; description?: string | null; default_language?: string | null; supported_languages?: JsonValue; settings?: JsonValue; status?: string | null; expected_version?: number | null; }
export interface CreateGroupInput extends JsonObject { parent_id?: string | null; slug: string; name: JsonValue; description?: JsonValue; sort_order?: number; inclusion_policy?: JsonValue; }
export interface UpdateGroupInput extends JsonObject { parent_id?: string | null; name?: JsonValue; description?: JsonValue; sort_order?: number | null; inclusion_policy?: JsonValue; status?: string | null; expected_version?: number | null; }
export interface CreateItemInput extends JsonObject { group_id: string; slug: string; kind: string; title: JsonValue; summary?: JsonValue; content: JsonValue; metadata?: JsonValue; tags?: JsonValue; importance?: KnowledgeImportance; valid_from?: string | null; valid_to?: string | null; description?: JsonValue; linked_service?: string | null; linked_entity_type?: string | null; linked_entity_id?: string | null; link_url?: string | null; open_in_new_tab?: boolean; show_when?: JsonValue; }
export interface UpdateItemInput extends JsonObject { group_id?: string | null; kind?: string | null; title?: JsonValue; summary?: JsonValue; content?: JsonValue; metadata?: JsonValue; tags?: JsonValue; importance?: KnowledgeImportance | null; status?: string | null; valid_from?: string | null; valid_to?: string | null; expected_version?: number | null; description?: JsonValue; linked_service?: string | null; linked_entity_type?: string | null; linked_entity_id?: string | null; link_url?: string | null; open_in_new_tab?: boolean | null; show_when?: JsonValue; }
export interface CreateEdgeInput extends JsonObject { from_item_id: string; to_item_id: string; edge_type: string; conditions?: JsonValue; weight?: number; }
export interface UpdateEdgeInput extends JsonObject { edge_type?: string | null; conditions?: JsonValue; weight?: number | null; status?: string | null; expected_version?: number | null; }
export interface CreateBindingInput extends JsonObject { chat_slug: string; knowledge_base_id: string; group_slugs?: JsonValue; max_level?: number; tool_policy?: JsonValue; enabled?: boolean; }
export interface UpdateBindingInput extends JsonObject { group_slugs?: JsonValue; max_level?: number | null; tool_policy?: JsonValue; enabled?: boolean | null; expected_version?: number | null; }
export interface CreateRuleInput extends JsonObject { knowledge_base_id: string; group_id?: string | null; slug: string; name: JsonValue; priority?: number; conditions: JsonValue; outcomes: JsonValue; stop_on_match?: boolean; enabled?: boolean; }
export interface UpdateRuleInput extends JsonObject { group_id?: string | null; name?: JsonValue; priority?: number | null; conditions?: JsonValue; outcomes?: JsonValue; stop_on_match?: boolean | null; enabled?: boolean | null; expected_version?: number | null; }
export interface RuntimeQueryInput extends JsonObject { query?: string; profile_id?: string; profile?: JsonValue; props?: JsonValue; meta?: JsonValue; inputs?: JsonValue; group_slugs?: JsonValue; level?: number | null; limit?: number | null; compact?: boolean; max_context_chars?: number | null; event?: JsonValue; }
export interface RuntimeResult extends JsonObject { chat_slug: string; release: JsonValue; knowledge: JsonValue[]; suggestions: JsonValue[]; matched_rules: JsonValue[]; notifications: JsonValue[]; warnings: JsonValue[]; todos: JsonValue[]; input_requests: JsonValue[]; directions: JsonValue[]; trace: JsonValue; }
export interface MemorySubjectQuery extends QueryParams { assistant_id?: string; q?: string; memory_type?: "short" | "long"; page?: number; limit?: number; }
export interface MemoryOverrideInput extends JsonObject { short_memory_enabled?: boolean; long_memory_enabled?: boolean; }
export interface ActionStatusInput extends JsonObject { status: KnowledgeActionStatus; input?: JsonValue; }
export type KnowledgeBaseResponse = ApiEnvelope<KnowledgeBase>;
export interface KnowledgeBaseListResponse extends ApiEnvelope<KnowledgeBase[]> { meta: KnowledgePaginationMeta; }
export type KnowledgeGroupResponse = ApiEnvelope<KnowledgeGroup>;
export type KnowledgeGroupListResponse = ApiEnvelope<KnowledgeGroup[]>;
export type KnowledgeItemResponse = ApiEnvelope<KnowledgeItem>;
export interface KnowledgeItemListResponse extends ApiEnvelope<KnowledgeItem[]> { meta: KnowledgePaginationMeta; }
export type KnowledgeEdgeResponse = ApiEnvelope<KnowledgeEdge>;
export type KnowledgeEdgeListResponse = ApiEnvelope<KnowledgeEdge[]>;
export type ChatBindingResponse = ApiEnvelope<ChatBinding>;
export type ChatBindingListResponse = ApiEnvelope<ChatBinding[]>;
export type MatchRuleResponse = ApiEnvelope<MatchRule>;
export interface MatchRuleListResponse extends ApiEnvelope<MatchRule[]> { meta: KnowledgePaginationMeta; }
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
/** Source kinds accepted by configuration validation. Availability of an execution adapter is separate. */
export type KnowledgeSourceType = "manual" | "api" | "crawler" | "web" | "sitemap" | "rss" | "infera-drm" | "infera-session" | "structured" | "database-export";
export interface KnowledgeSource extends JsonObject { id:string; organization_id:string; knowledge_base_id:string; slug:string; name:JsonValue; source_type:string; configuration:JsonValue; provenance_policy:JsonValue; status:string; sync_status:string; sync_cursor:string|null; document_count:number; chunk_count:number; last_error:string|null; last_synced_at:string|null; version:number; created_at:string; updated_at:string; converter_id:string|null; converter_version:string|null; configuration_checksum:string|null; next_sync_at:string|null; stale_at:string|null; last_success_at:string|null; schedule:string|null; }
/** Slug is 2–120 lowercase ASCII letters/digits/hyphens/underscores. Use Control secret references instead of raw credentials. */
export interface CreateKnowledgeSourceInput extends JsonObject { knowledge_base_id:string; slug:string; name:JsonValue; source_type:KnowledgeSourceType; configuration?:JsonValue; provenance_policy?:JsonValue; }
export type KnowledgeSourceResponse = ApiEnvelope<KnowledgeSource>;
/** Durable enqueue receipt; queued does not certify worker execution or adapter availability. */
export interface KnowledgeQueuedJob extends JsonObject { job_id:string; queued:true; }
export type KnowledgeQueuedJobResponse = ApiEnvelope<KnowledgeQueuedJob>;
/** Document list projection. Content, metadata and checksum are not returned by this list endpoint. */
export interface KnowledgeDocument extends JsonObject { id:string; knowledge_base_id:string; source_id:string|null; external_id:string|null; title:string; media_type:string; language:string|null; provenance:JsonValue; status:string; indexed_at:string|null; version:number; created_at:string; }
export interface IndexedDocumentReceipt extends JsonObject { id:string; job_id:string; checksum:string; chunks:number; status:"indexed"; }
export interface UnchangedDocumentReceipt extends JsonObject { id:string; checksum:string; chunks:number; status:"unchanged"; }
export type IngestDocumentReceipt = IndexedDocumentReceipt | UnchangedDocumentReceipt;
export type IngestDocumentResponse = ApiEnvelope<IngestDocumentReceipt>;
export interface KnowledgeCustomerAction extends JsonObject { id:string; organization_id:string; knowledge_base_id:string; evaluation_id:string|null; profile_id:string|null; action_type:string; importance:string; title:JsonValue; body:JsonValue; payload:JsonValue; status:string; dedupe_key:string|null; due_at:string|null; created_at:string; updated_at:string; completed_at:string|null; }
export type KnowledgeCustomerActionResponse = ApiEnvelope<KnowledgeCustomerAction>;
export type KnowledgeCustomerActionListResponse = ApiEnvelope<KnowledgeCustomerAction[]>;
/** Authoring editor audit history, distinct from platform audit events. */
export interface KnowledgeAuditLog extends JsonObject { id:string; organization_id:string; actor_id:string|null; action:string; entity_type:string; entity_id:string; before:JsonValue; after:JsonValue; request_id:string|null; created_at:string; }
export type KnowledgeAuditLogListResponse = ApiEnvelope<KnowledgeAuditLog[]>;
export interface KnowledgeAuditEvent extends JsonObject { id:string; organization_id:string; actor_user_id:string|null; action:string; entity_type:string; entity_id:string|null; reason:string|null; before_state:JsonValue; after_state:JsonValue; created_at:string; }
export type KnowledgeAuditEventListResponse = ApiEnvelope<KnowledgeAuditEvent[]>;
export interface ConverterCapability extends JsonObject { id:string; display_name:JsonValue; category:string; extensions:string[]; mime_types:string[]; capabilities:string[]; output_types:string[]; supported_languages:string[]; limits:JsonValue; cost_model:JsonValue; configuration_requirements:JsonValue; status:string; health:JsonValue; version:string; mode:string; }
/** Full processing-job row returned by list/retry/cancel; counters are not proof of completed execution. */
export interface ProcessingJob extends JsonObject { id:string; organization_id:string; knowledge_base_id:string|null; source_id:string|null; document_id:string|null; project_id:string|null; owner_user_id:string|null; job_type:string; status:string; stage:string; progress:number; attempts:number; max_attempts:number; priority:number; idempotency_key:string|null; input_payload:JsonValue; input_checksum:string|null; converter_version:string|null; chunker_version:string|null; summarizer_version:string|null; embedding_version:string|null; requested_tokens:number; actual_tokens:number; estimated_cost:number|null; actual_cost:number|null; item_total:number; item_completed:number; eta_at:string|null; next_attempt_at:string; lease_owner:string|null; lease_expires_at:string|null; cancel_requested_at:string|null; dead_lettered_at:string|null; error_code:string|null; error_detail:string|null; metrics:JsonValue; safe_log:JsonValue; created_at:string; started_at:string|null; finished_at:string|null; updated_at:string; }
export type ProcessingJobResponse = ApiEnvelope<ProcessingJob>;
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

/** Immutable release snapshot. JSON content, rules and policy fields preserve their backend-defined extension values. */
export interface KnowledgePublicationManifest extends JsonObject {
  schema_version: string;
  release_version: number;
  knowledge_base: KnowledgeBase;
  groups: KnowledgeGroup[];
  items: KnowledgeItem[];
  edges: KnowledgeEdge[];
  rules: MatchRule[];
}
/** A published or retired immutable snapshot, not the mutable knowledge-base record. */
export interface KnowledgeRelease extends JsonObject {
  id: string;
  knowledge_base_id: string;
  version: number;
  manifest: KnowledgePublicationManifest;
  checksum_sha256: string;
  status: string;
  published_by: string | null;
  published_at: string;
  retired_at: string | null;
}
/** Mutable authoring export. Use KnowledgeRelease for pinned runtime instructions. */
export interface KnowledgeExport extends JsonObject {
  schema_version: string;
  exported_at: string;
  knowledge_base: KnowledgeBase;
  groups: KnowledgeGroup[];
  items: KnowledgeItem[];
  edges: KnowledgeEdge[];
  rules: MatchRule[];
}
export type KnowledgeReleaseResponse = ApiEnvelope<KnowledgeRelease>;
export type KnowledgeExportResponse = ApiEnvelope<KnowledgeExport>;

/** Match-rule filters apply before pagination across every active owned base. Search matches slug or localized name text. */
export interface KnowledgeRuleListQuery extends QueryParams {
  q?: string;
  knowledge_base_id?: string;
  group_id?: string;
  enabled?: boolean;
  page?: number;
  limit?: number;
}
export interface KnowledgePaginationMeta { total: number; page: number; limit: number; }
