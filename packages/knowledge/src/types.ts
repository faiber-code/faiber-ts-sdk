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
export interface RuntimeQueryInput extends JsonObject { query?: string | null; profile_id?: string | null; profile?: JsonValue; props?: JsonValue; meta?: JsonValue; inputs?: JsonValue; group_slugs?: JsonValue; level?: number | null; limit?: number | null; compact?: boolean; max_context_chars?: number | null; event?: JsonValue; }
export interface RuntimeResult extends JsonObject { chat_slug: string; release: JsonValue; knowledge: JsonValue[]; suggestions: JsonValue[]; matched_rules: JsonValue[]; notifications: JsonValue[]; warnings: JsonValue[]; todos: JsonValue[]; input_requests: JsonValue[]; directions: JsonValue[]; trace: JsonValue; }
export interface MemorySubjectQuery extends QueryParams { enabled?:boolean; status?:"active"|"disabled"|"forgotten"; assistant_id?: string; q?: string; memory_type?: "short" | "long"; page?: number; limit?: number; }
export interface MemoryOverrideInput extends JsonObject { expected_revision:string; short_memory_enabled?: boolean|null; long_memory_enabled?: boolean|null; reason?:string|null; }
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
  configuration_id: string;
  expected_policy_revision: number;
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
  profile_version?: string | null;
  profile_source?: string | null;
  profile_refreshed_at?: string | null;
  conversation_id?: string | null;
  drm_media_ids?: string[];
  model_id?: string | null;
  context?: JsonValue;
  delivered_memory_ids?: string[];
  delivered_result_ids?: string[];
  context_cursor?: string | null;
  force_full_context?: boolean;
  evaluation_case_id?: string | null;
  query_embedding?: number[];
  /** Retrieval prefetch limit (default 12, clamped to 1–50 and policy); not a combined response-row cap. */
  limit?: number;
}
export interface RetrievalBudget extends JsonObject { requested_tokens:number; used_tokens:number; remaining_tokens:number; dropped_count:number; truncated:boolean; estimator:string; sections?:Record<string,number>; }
export interface AssistantRuntimeResult extends JsonObject { policy:AssistantPolicy|MissingAssistantPolicy; knowledge:JsonValue[]; memory:AssistantRuntimeMemory; recommendations:JsonValue[]; citations:JsonValue[]; findings:JsonValue[]; trace:JsonValue; budget:RetrievalBudget; }
export interface MemoryTurnInput extends JsonObject { user_id:string; profile?:JsonValue; profile_version?:string|null; profile_source?:string|null; profile_refreshed_at?:string|null; conversation_id:string; user_message:string; assistant_message:string; user_message_id?:string|null; assistant_message_id?:string|null; }
export interface RecordAssistantTurnInput extends MemoryTurnInput {}
export interface RetrievalUsageInput extends JsonObject { final_prompt_tokens:number; cached_input_tokens?:number; reasoning_tokens?:number; output_tokens?:number; token_attribution?:JsonValue; actual_cost?:number|null; outcome?:string|null; }
export interface PlatformStatus extends JsonObject { service:string; version:string; commit:string; status:string; checked_at:string; knowledge_bases:number; published_bases:number; sources:number; documents:number; chunks:number; entities:number; relations:number; assistants:number; memory_subjects:number; memories:number; recommender_groups:number; open_findings:number; queued_jobs:number; processing_jobs:number; failed_jobs:number; stale_documents:number; missing_embeddings:number; memory_backlog:number; dead_letters:number; retrieval:RetrievalMetrics; dependencies:Record<string,string>; }
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
export interface ConverterCapability extends JsonObject { id:string; display_name:JsonValue; category:string; extensions:string[]; mime_types:string[]; capabilities:string[]; features:string[]; output_types:string[]; supported_languages:string[]; limits:JsonValue; cost_model:JsonValue; configuration_requirements:JsonValue; status:string; health:JsonValue; version:string; mode:string; }
/** Full processing-job row returned by list/retry/cancel; counters are not proof of completed execution. */
export interface ProcessingJob extends JsonObject { id:string; organization_id:string; knowledge_base_id:string|null; source_id:string|null; document_id:string|null; project_id:string|null; owner_user_id:string|null; job_type:string; status:string; stage:string; progress:number; attempts:number; max_attempts:number; priority:number; idempotency_key:string|null; input_payload:JsonValue; input_checksum:string|null; converter_version:string|null; chunker_version:string|null; summarizer_version:string|null; embedding_version:string|null; requested_tokens:number; actual_tokens:number; estimated_cost:number|null; actual_cost:number|null; item_total:number; item_completed:number; eta_at:string|null; next_attempt_at:string; lease_owner:string|null; lease_expires_at:string|null; cancel_requested_at:string|null; dead_lettered_at:string|null; error_code:string|null; error_detail:string|null; metrics:JsonValue; safe_log:JsonValue; created_at:string; started_at:string|null; finished_at:string|null; updated_at:string; }
export type ProcessingJobResponse = ApiEnvelope<ProcessingJob>;
export interface IngestDocumentInput extends JsonObject { knowledge_base_id:string; source_id?:string|null; external_id?:string|null; title:string; content:string; media_type?:string; language?:string|null; provenance?:JsonValue; metadata?:JsonValue; }
export type AssistantRuntimeResponse = ApiEnvelope<AssistantRuntimeResult>;
export type PlatformStatusResponse = ApiEnvelope<PlatformStatus>;
export type KnowledgeSourceListResponse = ApiEnvelope<KnowledgeSource[]>;
export type KnowledgeDocumentListResponse = ApiEnvelope<KnowledgeDocument[]>;
export type ConverterListResponse = ApiEnvelope<ConverterCapability[]>;
export type ConverterCapabilityListResponse = ConverterListResponse;
export type ProcessingJobListResponse = ApiEnvelope<ProcessingJob[]>;

/** Published contract content and deliberately extensible JSON Schema metadata. */
/** Backend preserves authored JSON content and metadata; callers validate their own contract schema/version. */
export interface PublishedAssistantContractMetadata extends JsonObject { contract_version: JsonValue; output_schema?: JsonValue; shared_contract?: JsonValue; }
export interface PublishedAssistantContract extends JsonObject { content: JsonValue; metadata: PublishedAssistantContractMetadata; }
export interface AssistantContractsResult { release_id: string; shared_release_id?: string|null; contracts: Record<string, PublishedAssistantContract>; }
export type AssistantContractsResponse = ApiEnvelope<AssistantContractsResult>;

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

// Canonical v1 management successor. These draft types require the matching
// backend/source-pin gate before package promotion.
export interface MemorySubjectPolicy extends JsonObject {effective_override_mode:"narrow_only";short_memory_enabled:boolean|null;long_memory_enabled:boolean|null;status:string|null;policy_revision:number|null;override_widening_allowed:boolean|null;}
export interface MemorySubjectOverrides extends JsonObject {short_memory_enabled:boolean|null;long_memory_enabled:boolean|null;revision:number;}
export interface MemorySubjectCapabilities extends JsonObject {set_policy:boolean;forget:boolean;correct:boolean;}
export interface MemorySubject extends JsonObject {id:string;assistant_id:string;assistant_name:string|null;user_id:string;profile_id:string|null;profile:MemorySubjectProfile;status:"active"|"disabled"|"forgotten";short_memory_enabled:boolean;long_memory_enabled:boolean;short_memory_count:number;long_memory_count:number;last_seen_at:string|null;profile_refreshed_at:string|null;policy:MemorySubjectPolicy;overrides:MemorySubjectOverrides;expected_revision:string;scope_epochs:MemoryScopeEpochs;capabilities:MemorySubjectCapabilities;}
export type MemorySubjectResponse=ApiEnvelope<MemorySubject>;
export interface MemorySubjectListResponse extends ApiEnvelope<MemorySubject[]>{meta:KnowledgePaginationMeta;}
export interface MemoryRecordQuery extends QueryParams {page?:number;limit?:number;memory_type?:"short"|"long";status?:"all"|"active"|"superseded"|"contradicted"|"forgotten"|"expired";}
export interface MemoryEvidence extends JsonObject {id:string;source_kind:"conversation_turn"|"user_correction";source_event_id:string;conversation_id:string;message_id:string|null;source_order:"unverified";observed_at:string;}
export interface MemoryRecord extends JsonObject {id:string;subject_id:string;memory_type:"short"|"long";kind:string;fact_type:string|null;identity_cardinality:"singleton"|"independent"|null;status:"active"|"superseded"|"contradicted"|"forgotten"|"expired";redacted:boolean;content:string|null;content_truncated:boolean;fact_key:string|null;fact_value:JsonValue;fact_value_truncated:boolean;confidence:number|null;extraction_version:string|null;created_at:string;updated_at:string;expires_at:string|null;forgotten_at:string|null;superseded_by:string|null;contradicted_by:string|null;provenance:MemoryEvidence[];}
export type MemoryRecordResponse=ApiEnvelope<MemoryRecord>;
export interface MemoryRecordListResponse extends ApiEnvelope<MemoryRecord[]>{meta:KnowledgePaginationMeta&{expected_revision:string};}
export interface MemoryAuditQuery extends QueryParams {page?:number;limit?:number;}
export interface MemoryAuditEntry extends JsonObject {id:string;action:string;entity_type:string;entity_id:string|null;actor_user_id:string|null;created_at:string;}
export interface MemoryAuditListResponse extends ApiEnvelope<MemoryAuditEntry[]>{meta:KnowledgePaginationMeta;}
export interface MemoryCorrectionInput extends JsonObject {correction_id:string;expected_memory_ids:string[];user_statement:string;reason:string;}
export interface MemoryCorrectionReceipt extends JsonObject {correction_id:string;memory_id:string;replaced_memory_ids:string[];applied:true;replayed:boolean;}
export type MemoryCorrectionResponse=ApiEnvelope<MemoryCorrectionReceipt>;
export interface MemoryClearQuery extends QueryParams {memory_type?:"short"|"long";reason?:string;}
export interface MemoryScopeForgetInput extends JsonObject {user_id:string;memory_type?:"short"|"long";reason?:string;}
export interface MemoryScopeClearResult extends JsonObject {scope_fenced:true;rows_changed:number;cleared:true;subject_id:string|null;}
export interface MemoryScopeForgetResponse {jsonrpc:"2.0";id:JsonValue;result:{content:Array<{type:"text";text:string}>;structuredContent:MemoryScopeClearResult;isError?:boolean};}
export interface SourceStateInput extends JsonObject {desired_state:"active"|"paused";expected_version:number;}

export interface AssistantPolicySnapshot extends JsonObject {
  assistant_id: string; exists: boolean; expected_policy_revision: number; configuration: AssistantPolicy | null;
}
export type AssistantPolicySnapshotResponse = ApiEnvelope<AssistantPolicySnapshot>;
export interface AssistantConfigurationReceipt extends JsonObject {
  assistant_id: string; configuration_id: string; configured: true; replayed: boolean; policy_revision: number;
}
export type AssistantConfigurationResponse = ApiEnvelope<AssistantConfigurationReceipt>;
export interface AssistantConfigurationOperation extends JsonObject {
  id: string; organization_id: string; assistant_id: string; actor_id: string | null;
  request: JsonObject; policy_revision: number | null; status: "applied" | "cancelled"; created_at: string;
}
export type AssistantConfigurationOperationResponse = ApiEnvelope<AssistantConfigurationOperation>;
export interface AssistantConfigurationCancellation extends JsonObject { reason: string; }

/** Nullable metrics when no scoped trace exists in the last 24 hours. */
export interface RetrievalMetrics extends JsonObject { p50_ms:number|null; p95_ms:number|null; p99_ms:number|null; citation_coverage:number|null; context_tokens:number|null; }
/** Persisted policy row, including configuration and governed rollout settings. */
export interface AssistantPolicy extends JsonObject {
  id:string; organization_id:string; assistant_id:string; assistant_name:string;
  short_memory_enabled:boolean; long_memory_enabled:boolean; short_memory_turns:number; long_memory_limit:number; retention_days:number;
  status:string; version:number; created_at:string; updated_at:string; policy_revision:number;
  context_mode:ContextMode; context_budget_tokens:number; knowledge_enabled:boolean; recommenders_enabled:boolean; selected_media_enabled:boolean; session_enabled:boolean;
  max_knowledge_results:number; max_chunks_per_document:number; max_selected_media_chunks:number; max_session_items:number; max_findings:number; max_recommendations:number;
  graph_enabled:boolean; vector_enabled:boolean; query_expansion_enabled:boolean; reranking_enabled:boolean;
  selected_media_budget_percent:number; knowledge_budget_percent:number; memory_budget_percent:number; recommender_budget_percent:number; profile_budget_percent:number; session_budget_percent:number; findings_budget_percent:number;
  retrieval_strategy:string; organization_rollout_cohort:string|null; fallback_policy:JsonValue; override_widening_allowed:boolean;short_memory_retention_days:number;long_memory_retention_days:number;
}
export interface MissingAssistantPolicy extends JsonObject { status:"missing"; knowledge_enabled:false; short_memory_enabled:false; long_memory_enabled:false; recommenders_enabled:false; }
/** Payloads preserve the retrieval provider's heterogeneous persisted memory rows. */
export interface AssistantRuntimeMemory extends JsonObject {short:JsonValue[];long:JsonValue[];subject_id:string|null;}
export interface CatalogKnowledgeBase extends JsonObject {id:string;slug:string;name:string;status:string;}
export interface CatalogRecommenderGroup extends JsonObject {id:string;slug:string;name:JsonValue;status:string;max_results:number;}
export interface CatalogAssistantPolicy extends AssistantPolicy {knowledge_base_ids:string[];recommender_group_ids:string[];}
export interface KnowledgeCatalog extends JsonObject {knowledge_bases:CatalogKnowledgeBase[];recommender_groups:CatalogRecommenderGroup[];assistant_policies:CatalogAssistantPolicy[];}
export type KnowledgeCatalogResponse=ApiEnvelope<KnowledgeCatalog>;
export interface KnowledgeEvaluationCase extends JsonObject {id:string;organization_id:string;knowledge_base_id:string|null;assistant_id:string|null;stable_key:string;language:string|null;query:string;sanitized_context:JsonValue;relevant_targets:JsonValue;expected_top1:string|null;selected_media_ids:string[];thresholds:JsonValue;status:string;created_at:string;updated_at:string;}
export type KnowledgeEvaluationCaseResponse=ApiEnvelope<KnowledgeEvaluationCase>;
export type KnowledgeEvaluationCaseListResponse=ApiEnvelope<KnowledgeEvaluationCase[]>;
export interface RecommenderGroup extends JsonObject {id:string;organization_id:string;slug:string;name:JsonValue;description:JsonValue;strategy:string;conditions:JsonValue;max_results:number;status:string;version:number;created_at:string;updated_at:string;}
export interface RecommenderItem extends JsonObject {id:string;organization_id:string;recommender_group_id:string;stable_key:string;kind:string;label:JsonValue;description:JsonValue;linked_service:string|null;linked_entity_type:string|null;linked_entity_id:string|null;link_url:string|null;action_style:string;open_in_new_tab:boolean;conditions:JsonValue;tags:JsonValue;base_score:number;sort_order:number;enabled:boolean;version:number;created_at:string;updated_at:string;}
export interface RecommenderGroupWithItems extends RecommenderGroup {items:RecommenderItem[];}
export type RecommenderGroupResponse=ApiEnvelope<RecommenderGroup>;
export type RecommenderItemResponse=ApiEnvelope<RecommenderItem>;
export type RecommenderGroupListResponse=ApiEnvelope<RecommenderGroupWithItems[]>;
export interface MemoryOutboxReplay extends JsonObject {id:string;status:"pending";}
export type MemoryOutboxReplayResponse=ApiEnvelope<MemoryOutboxReplay>;
export interface CacheInvalidation extends JsonObject {entries_removed:number;}
export type CacheInvalidationResponse=ApiEnvelope<CacheInvalidation>;
export interface MemoryTurnQueued extends JsonObject {queued:true;outbox_id:string;status:string;idempotency_key:string;}
export interface MemoryTurnSkipped extends JsonObject {queued:false;reason:"assistant_policy_missing_or_inactive"|"memory_disabled"|"memory_subject_disabled_or_override";}
/** HTTP 202 records admission or an explicit skip; it does not certify extraction. */
export type MemoryTurnResponse=ApiEnvelope<MemoryTurnQueued|MemoryTurnSkipped>;
export interface RetrievalUsageReceipt extends JsonObject {id:string;retrieval_tokens:number;final_prompt_tokens:number;cached_input_tokens:number;reasoning_tokens:number;output_tokens:number;token_attribution:JsonValue;actual_cost:number|null;}
export type RetrievalUsageResponse=ApiEnvelope<RetrievalUsageReceipt>;
export interface DocumentEvidence extends JsonObject {id:string;knowledge_base_id:string;title:string;content:string;full_transcript:string|null;document_role:string;composition_id:string|null;part_id:string|null;media_id:string|null;media_role:string|null;provenance:JsonValue;metadata:JsonValue;checksum:string;version:number;}
export type DocumentEvidenceResponse=ApiEnvelope<DocumentEvidence>;
export interface SessionEvidence extends JsonObject {id:string;knowledge_base_id:string;room_id:string;recording_id:string|null;track_id:string|null;summary:string;transcript:string|null;analysis:JsonValue;linked_composition_id:string|null;provenance:JsonValue;projected_at:string;}
export type SessionEvidenceResponse=ApiEnvelope<SessionEvidence>;
export interface KnowledgeReadiness extends JsonObject {service:string;version:string;commit:string;status:"ready"|"degraded";dependencies:{database:"ready"|"unavailable"};}
export type KnowledgeReadinessResponse=ApiEnvelope<KnowledgeReadiness>;
export interface TaskProjectionCandidate extends JsonObject {note_id:string;project_id:string;version:number;}
export type TaskProjectionCandidateListResponse=ApiEnvelope<TaskProjectionCandidate[]>;
export interface TaskProjectionReceipt extends JsonObject {note_id:string;version:number;}
export type TaskProjectionResponse=ApiEnvelope<TaskProjectionReceipt>;
/** JSON Schema is an extensible document, not an application data placeholder. */
export interface KnowledgeToolSchema extends JsonObject {name:string;description:string;input_schema:JsonObject;}
export type KnowledgeToolSchemaResponse=ApiEnvelope<KnowledgeToolSchema>;
/** JSON-RPC result varies by method/tool; typed convenience calls expose concrete tool results. */
export interface KnowledgeMcpSuccess extends JsonObject {jsonrpc:"2.0";id:JsonValue;result:JsonValue;}
export interface KnowledgeMcpFailure extends JsonObject {jsonrpc:"2.0";id:JsonValue;error:{code:number;message:string};}
export type KnowledgeMcpResponse=KnowledgeMcpSuccess|KnowledgeMcpFailure;

/** Concrete pinned retrieval wire model; payload/title/content/provenance/citations are heterogeneous provider JSON. */
export type KnowledgeResultCategory = "authored_item" | "document_chunk" | "graph_neighbor" | "media_transcript_chunk" | "session_evidence" | "profile_fact" | "user_memory" | "finding" | "recommendation";
export type KnowledgeExclusionReason = "tenant_scope" | "assistant_scope" | "user_scope" | "base_not_published" | "release_not_published" | "item_not_published" | "deleted" | "not_yet_valid" | "expired" | "group_scope" | "maximum_level" | "condition_mismatch" | "edge_condition_mismatch" | "recommender_group_condition_mismatch" | "recommender_item_condition_mismatch" | "visibility_denied" | "session_scope" | "selected_media_scope" | "duplicate" | "recommender_group_limit" | "selected_media_limit" | "result_limit" | "context_budget" | "policy_disabled" | "already_delivered";
export interface KnowledgeRetrievalScore extends JsonObject {lexical:number;vector:number;exact_title:number;entity:number;graph:number;base_priority:number;importance:number;freshness:number;selected_media:number;reciprocal_rank:number;final_score:number;}
export interface KnowledgeAcceptedResult extends JsonObject {id:string;category:KnowledgeResultCategory;title:JsonValue;summary:JsonValue;content:JsonValue;provenance:JsonValue;citation:JsonValue;score:KnowledgeRetrievalScore;token_count:number;selected_media:boolean;payload:JsonValue;}
export interface KnowledgeExcludedResult extends JsonObject {candidate_id:string;category:KnowledgeResultCategory;reason:KnowledgeExclusionReason;}
export interface KnowledgeRetrievalBudget extends JsonObject {requested_tokens:number;used_tokens:number;remaining_tokens:number;dropped_count:number;truncated:boolean;estimator:string;sections:Record<string,number>;}
export interface KnowledgeRetrievalResult extends JsonObject {candidate_sets:Record<string,number>;accepted_results:KnowledgeAcceptedResult[];excluded_results:KnowledgeExcludedResult[];memories:KnowledgeAcceptedResult[];recommendations:KnowledgeAcceptedResult[];findings:KnowledgeAcceptedResult[];citations:JsonValue[];provenance:JsonValue[];score_explanations:Record<string,KnowledgeRetrievalScore>;budget:KnowledgeRetrievalBudget;dependency_state:Record<string,DependencyState>;trace:JsonValue;}
export type KnowledgeRetrievalResponse=ApiEnvelope<KnowledgeRetrievalResult>;

/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataAcceptedResultsCategory = KnowledgeResultCategory;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataAcceptedResultsScore = KnowledgeRetrievalScore;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataAcceptedResults = KnowledgeAcceptedResult;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataExcludedResultsCategory = KnowledgeResultCategory;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataExcludedResultsReason = KnowledgeExclusionReason;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataExcludedResults = KnowledgeExcludedResult;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataMemoriesCategory = KnowledgeResultCategory;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataMemoriesScore = KnowledgeRetrievalScore;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataMemories = KnowledgeAcceptedResult;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataRecommendationsCategory = KnowledgeResultCategory;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataRecommendationsScore = KnowledgeRetrievalScore;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataRecommendations = KnowledgeAcceptedResult;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataFindingsCategory = KnowledgeResultCategory;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataFindingsScore = KnowledgeRetrievalScore;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataFindings = KnowledgeAcceptedResult;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseDataBudget = KnowledgeRetrievalBudget;
/** Compatibility alias for the concrete pinned retrieval model. */
export type TaskProjectionsPassagesPostResponseData = KnowledgeRetrievalResult;
/** Compatibility alias for the assistant runtime payload. */
export type PlatformEvaluateAssistantPostResponseData = AssistantRuntimeResult;
/** Compatibility alias for the assistant runtime payload. */
export type PlatformPreviewAssistantPostResponseData = AssistantRuntimeResult;
/** Compatibility alias for the assistant runtime payload. */
export type PlatformQueryAssistantPostResponseData = AssistantRuntimeResult;

/** Bounded identity fields explicitly projected by the management handler; other profile attributes are omitted. */
export interface MemorySubjectProfile extends JsonObject {display_name?:string;full_name?:string;name?:string;first_name?:string;last_name?:string;email?:string;phone?:string;national_code?:string;}
export interface MemoryScopeEpochs extends JsonObject {short:number;long:number;}
