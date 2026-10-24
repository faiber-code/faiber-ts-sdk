// Source-reviewed at 1e6b40ca; this metadata does not certify native execution.
export const knowledgeReviewedOperationContracts={
  "knowledge:GET /health": {
    "purpose": "Read database readiness with commit/version. HTTP 503 returns the same success envelope with degraded status; Axios rejects by default.",
    "response": "import(\"./types.js\").KnowledgeReadinessResponse"
  },
  "knowledge:GET /health/live": {
    "purpose": "Read process liveness and package version. This does not check database or worker readiness."
  },
  "knowledge:GET /health/ready": {
    "purpose": "Read database readiness with commit/version. HTTP 503 returns the same success envelope with degraded status; Axios rejects by default.",
    "response": "import(\"./types.js\").KnowledgeReadinessResponse"
  },
  "knowledge:GET /api/v1/knowledge-releases/{id}": {
    "purpose": "Read an immutable release after authorizing its base. The base ownership check also rejects missing or deleted bases."
  },
  "knowledge:GET /api/v1/knowledge-bases": {
    "purpose": "Search current-organization nondeleted bases by name/slug and optional status. Page defaults to 1 and limit to 50, clamped to 1–200."
  },
  "knowledge:POST /api/v1/knowledge-bases": {
    "purpose": "Create a draft base for the current organization. Slug validation and organization slug uniqueness are enforced; returns 201."
  },
  "knowledge:GET /api/v1/knowledge-bases/{id}": {
    "purpose": "Read a nondeleted organization-owned base. Foreign and missing base IDs return 404."
  },
  "knowledge:PUT /api/v1/knowledge-bases/{id}": {
    "purpose": "Update an organization-owned base under optional expected_version. Null scalar fields behave as omitted; stale versions conflict with 409."
  },
  "knowledge:DELETE /api/v1/knowledge-bases/{id}": {
    "purpose": "Soft-delete and archive a current-organization base transactionally; retained child rows remain inaccessible through the base. Returns 204."
  },
  "knowledge:POST /api/v1/knowledge-bases/{id}/publish": {
    "purpose": "Publish an immutable release snapshot of complete authorized content and update the base release pointer transactionally. Invalid content fails with 400."
  },
  "knowledge:GET /api/v1/knowledge-bases/{id}/export": {
    "purpose": "Export the current mutable authoring base, groups, items, edges and rules with an export timestamp. This is not an immutable published release."
  },
  "knowledge:GET /api/v1/knowledge-bases/{id}/groups": {
    "purpose": "List nondeleted groups after authorizing their base; returns an unpaginated array ordered by level then sort order."
  },
  "knowledge:POST /api/v1/knowledge-bases/{id}/groups": {
    "purpose": "Create a group under a tenant-authorized locked base. Parent relationships and slug uniqueness are validated; returns 201."
  },
  "knowledge:PUT /api/v1/groups/{id}": {
    "purpose": "Update a group under a tenant-authorized locked base. Parent moves validate cycles and descendant levels; optional expected_version detects stale drafts."
  },
  "knowledge:DELETE /api/v1/groups/{id}": {
    "purpose": "Soft-delete one authorized empty group. Child groups, active items or active rules block deletion with 409; success returns 204."
  },
  "knowledge:GET /api/v1/knowledge-bases/{id}/items": {
    "purpose": "Page nondeleted items after authorizing their base. Status, kind, link identifiers and slug/kind search apply; shared group filter is ignored."
  },
  "knowledge:POST /api/v1/knowledge-bases/{id}/items": {
    "purpose": "Create a draft item in an authorized group. Importance, validity and linked service/entity fields are validated; returns 201."
  },
  "knowledge:GET /api/v1/items/{id}": {
    "purpose": "Read a nondeleted item through its organization-owned base; absent and foreign items return 404."
  },
  "knowledge:PUT /api/v1/items/{id}": {
    "purpose": "Update an item transactionally with optional expected_version. Omitted/null optional scalar fields preserve current values; empty link strings clear links."
  },
  "knowledge:DELETE /api/v1/items/{id}": {
    "purpose": "Soft-delete one authorized item transactionally and record editor audit; returns 204."
  },
  "knowledge:GET /api/v1/knowledge-bases/{id}/edges": {
    "purpose": "Read graph edges after authorizing their base, ordered by latest update. This endpoint does not accept pagination."
  },
  "knowledge:POST /api/v1/knowledge-bases/{id}/edges": {
    "purpose": "Create an edge with both endpoint items in the authorized base. Invalid cross-base endpoints fail; returns 201."
  },
  "knowledge:PUT /api/v1/edges/{id}": {
    "purpose": "Update an organization-owned graph edge under an authorized base lock and optional expected_version; stale edits return 409."
  },
  "knowledge:DELETE /api/v1/edges/{id}": {
    "purpose": "Delete an organization-owned graph edge and record editor audit transactionally; returns 204."
  },
  "knowledge:GET /api/v1/chat-bindings": {
    "purpose": "List current-organization chat bindings ordered by chat slug. The result is not paginated."
  },
  "knowledge:POST /api/v1/chat-bindings": {
    "purpose": "Create a chat binding to an authorized base with group scope and tool policy; returns 201."
  },
  "knowledge:PUT /api/v1/chat-bindings/{id}": {
    "purpose": "Update a tenant-owned chat binding under a base lock and optional expected_version; no implicit stale retry is performed."
  },
  "knowledge:DELETE /api/v1/chat-bindings/{id}": {
    "purpose": "Delete a tenant-owned chat binding and audit the change transactionally; returns 204."
  },
  "knowledge:GET /api/v1/match-rules": {
    "purpose": "Search nondeleted rules across all owned active bases before stable priority/ID pagination. Base, group, enabled and localized name/slug filters apply."
  },
  "knowledge:POST /api/v1/match-rules": {
    "purpose": "Create a rule with validated base/group relationship and conditions; outcomes retain their extensible JSON shape. Returns 201."
  },
  "knowledge:PUT /api/v1/match-rules/{id}": {
    "purpose": "Update a rule after locked base ownership and group validation. Optional expected_version returns 409 for stale edits."
  },
  "knowledge:DELETE /api/v1/match-rules/{id}": {
    "purpose": "Soft-delete an authorized match rule and record editor audit transactionally; returns 204."
  },
  "knowledge:GET /api/v1/actions": {
    "purpose": "List current-organization customer actions, newest first. Only status and the clamped limit are applied; page and other shared ListQuery filters are ignored."
  },
  "knowledge:PATCH /api/v1/actions/{id}/status": {
    "purpose": "Update one organization-scoped action status and customer input. Completed stamps completed_at; a later status change retains that stamp."
  },
  "knowledge:GET /api/v1/audit": {
    "purpose": "List editor audit rows for the current organization, newest first and limited to 1–200. Shared query fields other than limit are ignored."
  },
  "knowledge:GET /api/v1/platform/status": {
    "purpose": "Read scoped inventories and last-24-hour retrieval aggregates. Metrics are null without traces; ready is not proof of every external dependency.",
    "response": "import(\"./types.js\").PlatformStatusResponse"
  },
  "knowledge:GET /api/v1/platform/catalog": {
    "purpose": "Read scoped base/recommender summaries and full assistant policies with enabled binding IDs. This is an inventory, not an authorization grant.",
    "response": "import(\"./types.js\").KnowledgeCatalogResponse"
  },
  "knowledge:GET /api/v1/platform/converters": {
    "purpose": "List converter registry capabilities, configuration requirements and reported health. Registry availability does not certify that a worker executed a job.",
    "response": "import(\"./types.js\").ConverterListResponse"
  },
  "knowledge:GET /api/v1/processing-jobs": {
    "purpose": "List up to 500 current-organization processing job rows by latest update; counters and queued status do not certify execution."
  },
  "knowledge:GET /api/v1/audit-events": {
    "purpose": "List up to 500 current-organization platform audit events. knowledge:memory:read additionally includes redacted memory events; knowledge:read alone excludes them.",
    "auth": "knowledge:read; knowledge:memory:read additionally includes redacted memory events"
  },
  "knowledge:GET /api/v1/evaluation-cases": {
    "purpose": "Read up to 500 active current-organization evaluation cases ordered by latest update.",
    "response": "import(\"./types.js\").KnowledgeEvaluationCaseListResponse"
  },
  "knowledge:POST /api/v1/evaluation-cases": {
    "purpose": "Upsert a stable-key evaluation case in the current organization and return 201. Blank stable key/query and identity/secret-bearing context fail validation.",
    "response": "import(\"./types.js\").KnowledgeEvaluationCaseResponse"
  },
  "knowledge:GET /api/v1/sources": {
    "purpose": "List current-organization governed sources by latest update, including source version and configuration."
  },
  "knowledge:POST /api/v1/sources": {
    "purpose": "Create a source under a locked owned base. Validate source kind, slug and secret references; returns 201 without executing synchronization."
  },
  "knowledge:POST /api/v1/sources/{id}/sync": {
    "purpose": "Persist or reuse a scoped source-sync job and return 202 with its real job ID. This receipt does not certify an available executor."
  },
  "knowledge:POST /api/v1/sources/{id}/pause": {
    "methodName": "platformPauseSourcePost",
    "typeBase": "PlatformPauseSourcePost",
    "input": "import(\"./types.js\").SourceStateInput",
    "response": "import(\"./types.js\").KnowledgeSourceResponse",
    "auth": "knowledge:write",
    "purpose": "Set active/paused desired source state under the captured expected_version. Stale intent conflicts; already-desired state is unchanged."
  },
  "knowledge:GET /api/v1/documents": {
    "purpose": "List scoped nondeleted document summaries, excluding content and metadata. No client-side synthetic pagination is applied."
  },
  "knowledge:POST /api/v1/documents": {
    "purpose": "Synchronously index governed text/chunks. Identical content returns 200 unchanged; changed content returns 201 with a completed job. Embedding readiness is separate."
  },
  "knowledge:POST /api/v1/documents/{id}/reprocess": {
    "purpose": "Persist or reuse a scoped document-reprocess job and return 202 with the actual job ID. Queued does not certify execution."
  },
  "knowledge:POST /api/v1/processing-jobs/{id}/retry": {
    "purpose": "Requeue a failed, dead-letter, retry or cancelled job with a new attempt lifecycle after scoped locks and duplicate-work checks. Ineligible jobs conflict."
  },
  "knowledge:POST /api/v1/processing-jobs/{id}/cancel": {
    "purpose": "Request cancellation of a scoped job. Queued/retry jobs become cancelled immediately; processing work retains status until worker acknowledgement."
  },
  "knowledge:POST /api/v1/platform/cache/invalidate": {
    "purpose": "Remove only current-organization assistant policy cache entries and return their count after audit.",
    "response": "import(\"./types.js\").CacheInvalidationResponse"
  },
  "knowledge:GET /api/v1/recommender-groups": {
    "purpose": "List scoped recommender groups with their items ordered by sort order; this is an unpaginated nested inventory.",
    "response": "import(\"./types.js\").RecommenderGroupListResponse"
  },
  "knowledge:POST /api/v1/recommender-groups": {
    "purpose": "Create a current-organization recommender group with max_results clamped to 1–50; returns 201.",
    "response": "import(\"./types.js\").RecommenderGroupResponse"
  },
  "knowledge:POST /api/v1/recommender-groups/{id}/items": {
    "purpose": "Create an item only inside a current-organization recommender group; missing or foreign groups return 404 and success returns 201.",
    "response": "import(\"./types.js\").RecommenderItemResponse"
  },
  "knowledge:POST /api/v1/runtime/chat/{chat_slug}/query": {
    "purpose": "Resolve a chat binding through immutable published knowledge and evaluate profile rules. Binding scope, levels, conditions and context budgets apply."
  },
  "knowledge:GET /api/v1/runtime/tool-schema": {
    "purpose": "Read the query_knowledge JSON Schema. This descriptive route has no handler permission guard; transport still uses the configured shared client.",
    "response": "import(\"./types.js\").KnowledgeToolSchemaResponse"
  },
  "knowledge:GET /api/v1/runtime/assistants/{assistant_id}/contracts/{slug}": {
    "purpose": "Load complete assistant contract records from enabled bindings and immutable releases. Shared dependencies are pinned; absent/incomplete/ambiguous contracts fail.",
    "response": "import(\"./types.js\").AssistantContractsResponse"
  },
  "knowledge:POST /api/v1/runtime/assistants/{assistant_id}/query": {
    "purpose": "Run governed assistant retrieval with policy ceilings, scoped provider evidence and context delivery tracking. A missing policy returns explicit empty context.",
    "response": "import(\"./types.js\").AssistantRuntimeResponse"
  },
  "knowledge:POST /api/v1/runtime/assistants/{assistant_id}/preview": {
    "purpose": "Run the canonical assistant retrieval pipeline with preview surface metadata under the same governance.",
    "response": "import(\"./types.js\").AssistantRuntimeResponse"
  },
  "knowledge:POST /api/v1/runtime/assistants/{assistant_id}/evaluations": {
    "purpose": "Run the canonical assistant retrieval pipeline with evaluation surface metadata under the same governance.",
    "response": "import(\"./types.js\").AssistantRuntimeResponse"
  },
  "knowledge:POST /api/v1/runtime/assistants/{assistant_id}/memory/turn": {
    "purpose": "Admit an idempotent assistant turn into the memory outbox under current policy and scope epochs. HTTP 202 can return queued:false; it does not certify extraction.",
    "response": "import(\"./types.js\").MemoryTurnResponse"
  },
  "knowledge:GET /api/v1/runtime/evidence/documents/{id}": {
    "purpose": "Read complete indexed nondeleted document evidence in the current organization; missing or unindexed documents return 404.",
    "response": "import(\"./types.js\").DocumentEvidenceResponse"
  },
  "knowledge:GET /api/v1/runtime/evidence/session/{id}": {
    "purpose": "Read active session evidence for the authenticated owner or participant. A current user is required even with session:read:all; inaccessible evidence returns 404.",
    "response": "import(\"./types.js\").SessionEvidenceResponse"
  },
  "knowledge:POST /api/v1/runtime/retrieval-traces/{id}/usage": {
    "purpose": "Attach nonnegative provider token usage and nullable cost to a scoped retrieval trace. Missing or foreign trace IDs return 404.",
    "response": "import(\"./types.js\").RetrievalUsageResponse"
  },
  "knowledge:POST /api/v1/runtime/mcp": {
    "purpose": "Execute JSON-RPC initialize, tools/list or tools/call through the governed pipeline. JSON-RPC errors may use HTTP 200; inspect result/error before claiming success.",
    "response": "import(\"./types.js\").KnowledgeMcpResponse"
  },
  "knowledge:POST /internal/task-projections/sync": {
    "purpose": "Upsert a projected Task note under trusted Task authority. Lower or conflicting same versions return 409; exact replays are idempotent.",
    "response": "import(\"./types.js\").TaskProjectionResponse",
    "auth": "trusted Task authority token in x-task-projection-token plus x-organization-id; server only"
  },
  "knowledge:POST /internal/task-projections/candidates": {
    "purpose": "Find at most 100 projected Task note identities within 1–10 allowed project IDs and a query of at most 2000 characters. Requires trusted Task authority.",
    "response": "import(\"./types.js\").TaskProjectionCandidateListResponse",
    "auth": "trusted Task authority token in x-task-projection-token plus x-organization-id; server only"
  },
  "knowledge:POST /internal/task-projections/passages": {
    "purpose": "Retrieve passages for an authorized note/version manifest with at most 100 sources. Requires trusted Task authority; stale/deleted versions are excluded.",
    "auth": "trusted Task authority token in x-task-projection-token plus x-organization-id; server only",
    "response": "import(\"./types.js\").KnowledgeRetrievalResponse"
  },
  "knowledge:POST /internal/task-conversions": {
    "purpose": "Convert a 1–25,000,000-byte source using trusted Task authority and x-organization-id. The body is binary, not JSON or multipart.",
    "auth": "trusted Task authority token in x-task-projection-token plus x-organization-id; server only"
  },
  "knowledge:POST /api/v1/memory-outbox/{id}/replay": {
    "response": "import(\"./types.js\").MemoryOutboxReplayResponse"
  },
  "knowledge:GET /api/v1/memory-subjects": {
    "methodName": "platformListMemorySubjectsGet",
    "typeBase": "PlatformListMemorySubjectsGet",
    "query": "import(\"./types.js\").MemorySubjectQuery",
    "response": "import(\"./types.js\").MemorySubjectListResponse",
    "auth": "knowledge:memory:read; current organization/subject predicates on every read",
    "purpose": "List bounded current subjects with literal profile/identity search, type/status/enabled filters and stable pagination. Return separate nullable overrides, effective policy, actual counts, server capabilities and captured revision; only the bounded Profile identity allowlist is returned."
  },
  "knowledge:GET /api/v1/memory-subjects/{id}": {
    "methodName": "platformMemorySubjectGet",
    "typeBase": "PlatformMemorySubjectGet",
    "response": "import(\"./types.js\").MemorySubjectResponse",
    "auth": "knowledge:memory:read; current organization/subject predicates on every read",
    "purpose": "Read one currently authorized subject by ID. Foreign and absent tenant records return404; response separates raw nullable overrides from effective policy and provides the reviewed policy revision."
  },
  "knowledge:GET /api/v1/memory-subjects/{id}/memories": {
    "methodName": "platformListMemoriesGet",
    "typeBase": "PlatformListMemoriesGet",
    "query": "import(\"./types.js\").MemoryRecordQuery",
    "response": "import(\"./types.js\").MemoryRecordListResponse",
    "auth": "knowledge:memory:read; current organization/subject predicates on every read",
    "purpose": "Read1–200 atomic records with allowlisted type/lifecycle filters and deterministic pages. Expired/forgotten content is redacted. Text, JSON fact values and provenance references are bounded; no embedding/raw metadata payload is exposed."
  },
  "knowledge:GET /api/v1/memory-subjects/{subject_id}/memories/{memory_id}": {
    "methodName": "platformMemoryRecordGet",
    "typeBase": "PlatformMemoryRecordGet",
    "response": "import(\"./types.js\").MemoryRecordResponse",
    "auth": "knowledge:memory:read; current organization/subject predicates on every read",
    "purpose": "Read one memory using organization AND subject AND memory predicates. Forgotten/expired record text, fact values, confidence and evidence are redacted, including a forgotten parent subject."
  },
  "knowledge:GET /api/v1/memory-subjects/{id}/audit-events": {
    "methodName": "platformMemoryAuditGet",
    "typeBase": "PlatformMemoryAuditGet",
    "query": "import(\"./types.js\").MemoryAuditQuery",
    "response": "import(\"./types.js\").MemoryAuditListResponse",
    "auth": "knowledge:memory:read; current organization/subject predicates on every read",
    "purpose": "Read paginated authorized audit identifiers/actions/actors/dates. Retained before/after payloads and free-text reasons are excluded to prevent forgotten content reappearing through audit."
  },
  "knowledge:POST /api/v1/memory-subjects/{id}/corrections": {
    "methodName": "platformCorrectMemoryPost",
    "typeBase": "PlatformCorrectMemoryPost",
    "input": "import(\"./types.js\").MemoryCorrectionInput",
    "response": "import(\"./types.js\").MemoryCorrectionResponse",
    "auth": "knowledge:memory:write AND current authenticated subject owner; active permitted long memory policy",
    "purpose": "Apply an explicit correction UUID with1–32 reviewed active target IDs, an8192-byte statement and500-byte reason. Complete conflict-set CAS, immutable replay receipt and evidence/audit share one transaction;409 must never be automatically rebased."
  },
  "knowledge:PUT /api/v1/memory-subjects/{id}/policy": {
    "methodName": "platformSetMemoryOverridePut",
    "typeBase": "PlatformSetMemoryOverridePut",
    "input": "import(\"./types.js\").MemoryOverrideInput",
    "response": "import(\"./types.js\").MemorySubjectResponse",
    "auth": "current authenticated subject owner OR scoped knowledge:memory:write; captured expected_revision and current policy rules",
    "purpose": "Set nullable personal overrides using a captured revision. Null/missing values reset under PUT semantics. Policy/override/epoch change makes the revision stale;409 commits no state or audit. Response is a safe current subject projection. Assistant disabled lanes are hard ceilings even when the legacy widening flag is true."
  },
  "knowledge:DELETE /api/v1/memory-subjects/{id}": {
    "methodName": "platformClearMemorySubjectDelete",
    "typeBase": "PlatformClearMemorySubjectDelete",
    "query": "import(\"./types.js\").MemoryClearQuery",
    "response": "void",
    "auth": "current authenticated subject owner OR scoped knowledge:memory:delete; common transactional scope fence/audit",
    "purpose": "Atomically fence selected short/long or full subject scope and update current records/counters/audit.204 confirms commit. Original Chat conversations and retained physical copies remain separate service-owned actions."
  },
  "knowledge:DELETE /api/v1/memory-subjects/{subject_id}/memories/{memory_id}": {
    "methodName": "platformForgetMemoryDelete",
    "typeBase": "PlatformForgetMemoryDelete",
    "query": "import(\"./types.js\").MemoryClearQuery",
    "response": "void",
    "auth": "current authenticated subject owner OR scoped knowledge:memory:delete",
    "purpose": "Forget one authorized retained memory row atomically with counters/audit. This does not certify source-family tombstones or erasure of associated conversation projections."
  },
  "knowledge:GET /api/v1/runtime/assistants/{assistant_id}/configure": {
    "response": "import(\"./types.js\").AssistantPolicySnapshotResponse",
    "auth": "knowledge:write; current tenant",
    "purpose": "Capture the current assistant policy revision at edit time. Zero denotes absent policy. Never fetch a fresh revision to rebase a stale submission."
  },
  "knowledge:PUT /api/v1/runtime/assistants/{assistant_id}/configure": {
    "input": "import(\"./types.js\").AssistantConfigurationInput",
    "response": "import(\"./types.js\").AssistantConfigurationResponse",
    "auth": "knowledge:write; current tenant and immutable operation actor",
    "purpose": "Apply a non-nil configuration UUID with the captured policy revision. Policy, history, bindings, epochs, audit and exact operation outcome share one transaction. Identical original-actor replay returns the immutable result without duplicate epoch changes; cancelled or changed requests conflict."
  },
  "knowledge:GET /api/v1/runtime/assistants/{assistant_id}/configuration-operations/{operation_id}": {
    "response": "import(\"./types.js\").AssistantConfigurationOperationResponse",
    "auth": "knowledge:write; current tenant and assistant",
    "purpose": "Read authoritative applied/cancelled operation outcome after waiting for concurrent configuration writers. Absence is404, never inferred success."
  },
  "knowledge:POST /api/v1/runtime/assistants/{assistant_id}/configuration-operations/{operation_id}": {
    "input": "import(\"./types.js\").AssistantConfigurationCancellation",
    "response": "import(\"./types.js\").AssistantConfigurationOperationResponse",
    "auth": "knowledge:write; current authorized administration",
    "purpose": "Write an immutable cancellation tombstone with a bounded reason before releasing a pending Chat fence. Delayed original delivery conflicts. Applied configurations require recovery and cannot be cancelled as absent."
  }
};
