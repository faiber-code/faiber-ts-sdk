import { ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import { KnowledgeOperations } from "./operations.js";
const id = (value: Identifier) => encodeURIComponent(value);
export class KnowledgeApi extends ServiceApi {
  /** Loads full contracts from an enabled assistant binding and its immutable published release, without semantic truncation. Requires knowledge:runtime; missing published bindings return 404. */
  assistantContracts(assistantId: Identifier, slug: string, options?: RequestOptions) { return this.client.get<T.AssistantContractsResponse>(`/api/v1/runtime/assistants/${id(assistantId)}/contracts/${id(slug)}`, undefined, options); }
  /** Searches active match rules across authorized bases. Requires `knowledge:read`. Filters apply before stable pagination; foreign/deleted bases contribute no rows. */
  matchRules(params?: T.KnowledgeRuleListQuery, options?: RequestOptions) { return this.client.get<T.MatchRuleListResponse>("/api/v1/match-rules", params, options); }
  readonly operations = new KnowledgeOperations(this.client);
  /** Search current-organization nondeleted bases by name/slug and optional status. Page defaults to 1 and limit to 50, clamped to 1–200.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  knowledgeBases(params?: T.KnowledgeListQuery, options?: RequestOptions) { return this.client.get<T.KnowledgeBaseListResponse>("/api/v1/knowledge-bases", params, options); }
  /** Create a draft base for the current organization. Slug validation and organization slug uniqueness are enforced; returns 201.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:write), validation, not-found, conflict or transport errors.
   */
  createKnowledgeBase(data: T.CreateKnowledgeBaseInput, options?: RequestOptions<T.CreateKnowledgeBaseInput>) { return this.client.post<T.KnowledgeBaseResponse, T.CreateKnowledgeBaseInput>("/api/v1/knowledge-bases", data, options); }
  /** Read a nondeleted organization-owned base. Foreign and missing base IDs return 404.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  knowledgeBase(baseId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeBaseResponse>(`/api/v1/knowledge-bases/${id(baseId)}`, undefined, options); }
  /** Update an organization-owned base under optional expected_version. Null scalar fields behave as omitted; stale versions conflict with 409.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:write), validation, not-found, conflict or transport errors.
   */
  updateKnowledgeBase(baseId: Identifier, data: T.UpdateKnowledgeBaseInput, options?: RequestOptions<T.UpdateKnowledgeBaseInput>) { return this.client.put<T.KnowledgeBaseResponse, T.UpdateKnowledgeBaseInput>(`/api/v1/knowledge-bases/${id(baseId)}`, data, options); }
  /** Soft-delete and archive a current-organization base transactionally; retained child rows remain inaccessible through the base. Returns 204.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:delete), validation, not-found, conflict or transport errors.
   */
  deleteKnowledgeBase(baseId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/knowledge-bases/${id(baseId)}`, options); }
  /** Publishes an immutable snapshot. Requires `knowledge:publish`; incomplete content returns 400. Returns the release identity/checksum, while the mutable base stores its published_release_id. */
  publish(baseId: Identifier, options?: RequestOptions) { return this.client.post<T.KnowledgeReleaseResponse>(`/api/v1/knowledge-bases/${id(baseId)}/publish`, undefined, options); }
  /** Reads an immutable release by its release ID. Requires `knowledge:read`; tenant or missing-base access returns 404. */
  /** Read an immutable release after authorizing its base. The base ownership check also rejects missing or deleted bases.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  release(releaseId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeReleaseResponse>(`/api/v1/knowledge-releases/${id(releaseId)}`, undefined, options); }
  /** Export the current mutable authoring base, groups, items, edges and rules with an export timestamp. This is not an immutable published release.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  export(baseId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeExportResponse>(`/api/v1/knowledge-bases/${id(baseId)}/export`, undefined, options); }
  /** List nondeleted groups after authorizing their base; returns an unpaginated array ordered by level then sort order.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  groups(baseId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeGroupListResponse>(`/api/v1/knowledge-bases/${id(baseId)}/groups`, undefined, options); }
  /** Create a group under a tenant-authorized locked base. Parent relationships and slug uniqueness are validated; returns 201.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:write), validation, not-found, conflict or transport errors.
   */
  createGroup(baseId: Identifier, data: T.CreateGroupInput, options?: RequestOptions<T.CreateGroupInput>) { return this.client.post<T.KnowledgeGroupResponse, T.CreateGroupInput>(`/api/v1/knowledge-bases/${id(baseId)}/groups`, data, options); }
  /** Update a group under a tenant-authorized locked base. Parent moves validate cycles and descendant levels; optional expected_version detects stale drafts.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:write), validation, not-found, conflict or transport errors.
   */
  updateGroup(groupId: Identifier, data: T.UpdateGroupInput, options?: RequestOptions<T.UpdateGroupInput>) { return this.client.put<T.KnowledgeGroupResponse, T.UpdateGroupInput>(`/api/v1/groups/${id(groupId)}`, data, options); }
  /** Soft-delete one authorized empty group. Child groups, active items or active rules block deletion with 409; success returns 204.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:delete), validation, not-found, conflict or transport errors.
   */
  deleteGroup(groupId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/groups/${id(groupId)}`, options); }
  /** Page nondeleted items after authorizing their base. Status, kind, link identifiers and slug/kind search apply; shared group filter is ignored.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  items(baseId: Identifier, params?: T.KnowledgeListQuery, options?: RequestOptions) { return this.client.get<T.KnowledgeItemListResponse>(`/api/v1/knowledge-bases/${id(baseId)}/items`, params, options); }
  /** Create a draft item in an authorized group. Importance, validity and linked service/entity fields are validated; returns 201.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:write), validation, not-found, conflict or transport errors.
   */
  createItem(baseId: Identifier, data: T.CreateItemInput, options?: RequestOptions<T.CreateItemInput>) { return this.client.post<T.KnowledgeItemResponse, T.CreateItemInput>(`/api/v1/knowledge-bases/${id(baseId)}/items`, data, options); }
  /** Read a nondeleted item through its organization-owned base; absent and foreign items return 404.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  item(itemId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeItemResponse>(`/api/v1/items/${id(itemId)}`, undefined, options); }
  /** Update an item transactionally with optional expected_version. Omitted/null optional scalar fields preserve current values; empty link strings clear links.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:write), validation, not-found, conflict or transport errors.
   */
  updateItem(itemId: Identifier, data: T.UpdateItemInput, options?: RequestOptions<T.UpdateItemInput>) { return this.client.put<T.KnowledgeItemResponse, T.UpdateItemInput>(`/api/v1/items/${id(itemId)}`, data, options); }
  /** Soft-delete one authorized item transactionally and record editor audit; returns 204.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:delete), validation, not-found, conflict or transport errors.
   */
  deleteItem(itemId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/items/${id(itemId)}`, options); }
  /** Resolve a chat binding through immutable published knowledge and evaluate profile rules. Binding scope, levels, conditions and context budgets apply.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:runtime), validation, not-found, conflict or transport errors.
   */
  query(chatSlug: string, data: T.RuntimeQueryInput, options?: RequestOptions<T.RuntimeQueryInput>) { return this.client.post<T.RuntimeResultResponse, T.RuntimeQueryInput>(`/api/v1/runtime/chat/${id(chatSlug)}/query`, data, options); }
  /** Run governed assistant retrieval with policy ceilings, scoped provider evidence and context delivery tracking. A missing policy returns explicit empty context.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:runtime), validation, not-found, conflict or transport errors.
   */
  queryAssistant(assistantId: Identifier, data: T.AssistantQueryInput, options?: RequestOptions<T.AssistantQueryInput>) { return this.client.post<T.AssistantRuntimeResponse, T.AssistantQueryInput>(`/api/v1/runtime/assistants/${id(assistantId)}/query`, data, options); }
  /** Admit an idempotent assistant turn into the memory outbox under current policy and scope epochs. HTTP 202 can return queued:false; it does not certify extraction.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:runtime), validation, not-found, conflict or transport errors.
   */
  recordAssistantTurn(assistantId: Identifier, data: T.RecordAssistantTurnInput, options?: RequestOptions<T.RecordAssistantTurnInput>) { return this.client.post<T.MemoryTurnResponse, T.RecordAssistantTurnInput>(`/api/v1/runtime/assistants/${id(assistantId)}/memory/turn`, data, options); }
  /** List bounded current subjects with flat page/limit and literal identity search; profile exposes a bounded identity allowlist.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:memory:read), validation, not-found, conflict or transport failures.
   */
  memorySubjects(params?: T.MemorySubjectQuery, options?: RequestOptions) { return this.client.get<T.MemorySubjectListResponse>("/api/v1/memory-subjects", params, options); }
  /** Clear the entire authorized subject scope transactionally; returns 204.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (current subject owner or knowledge:memory:delete), validation, not-found, conflict or transport failures.
   */
  clearMemorySubject(subjectId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/memory-subjects/${id(subjectId)}`, options); }
  /** Write nullable PUT overrides using a captured expected_revision; stale policy/epoch edits return 409 without rebasing.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (current subject owner or knowledge:memory:write), validation, not-found, conflict or transport failures.
   */
  setMemoryOverride(subjectId: Identifier, data: T.MemoryOverrideInput, options?: RequestOptions<T.MemoryOverrideInput>) { if(!/^[a-f0-9]{64}$/.test(data.expected_revision))throw new TypeError("A captured memory policy revision is required"); return this.client.put<T.MemorySubjectResponse, T.MemoryOverrideInput>(`/api/v1/memory-subjects/${id(subjectId)}/policy`, data, options); }
  /** Current authorized projection, with separate effective policy/raw overrides and captured CAS revision. */
  /** Read a current safe subject projection, policy ceilings, counters and captured revision; foreign/missing subjects return 404.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:memory:read), validation, not-found, conflict or transport failures.
   */
  memorySubject(subjectId:Identifier,options?:RequestOptions){return this.client.get<T.MemorySubjectResponse>(`/api/v1/memory-subjects/${id(subjectId)}`,undefined,options);}
  /** Bounded atomic facts; forgotten/expired content is redacted by the service. */
  /** List bounded atomic memory records with redaction and stable page/limit metadata, including captured revision.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:memory:read), validation, not-found, conflict or transport failures.
   */
  memories(subjectId:Identifier,params?:T.MemoryRecordQuery,options?:RequestOptions){return this.client.get<T.MemoryRecordListResponse>(`/api/v1/memory-subjects/${id(subjectId)}/memories`,params,options);}
  /** Read a record under organization, subject and memory predicates with forgotten/expired content redacted.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:memory:read), validation, not-found, conflict or transport failures.
   */
  memory(subjectId:Identifier,memoryId:Identifier,options?:RequestOptions){return this.client.get<T.MemoryRecordResponse>(`/api/v1/memory-subjects/${id(subjectId)}/memories/${id(memoryId)}`,undefined,options);}
  /** Read bounded scoped audit identities/actions without retained before/after or free-text reasons.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:memory:read), validation, not-found, conflict or transport failures.
   */
  memoryAudit(subjectId:Identifier,params?:T.MemoryAuditQuery,options?:RequestOptions){return this.client.get<T.MemoryAuditListResponse>(`/api/v1/memory-subjects/${id(subjectId)}/audit-events`,params,options);}
  /** Correct only a reviewed, complete active target set; a409 must not be silently rebased. */
  /** Apply an explicit correction UUID to the reviewed complete active target set; a conflict must not be silently rebased.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:memory:write and current subject owner), validation, not-found, conflict or transport failures.
   */
  correctMemory(subjectId:Identifier,data:T.MemoryCorrectionInput,options?:RequestOptions<T.MemoryCorrectionInput>){return this.client.post<T.MemoryCorrectionResponse,T.MemoryCorrectionInput>(`/api/v1/memory-subjects/${id(subjectId)}/corrections`,data,options);}
  /** Forget one scoped memory with optional memory_type and bounded reason; returns 204 after commit.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (current subject owner or knowledge:memory:delete), validation, not-found, conflict or transport failures.
   */
  forgetMemory(subjectId:Identifier,memoryId:Identifier,params?:T.MemoryClearQuery,options?:RequestOptions){return this.client.request<void>({...options,method:"DELETE",url:`/api/v1/memory-subjects/${id(subjectId)}/memories/${id(memoryId)}`,params});}
  /** Clear short, long or full subject scope with a transactional scope fence and audit; returns 204.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (current subject owner or knowledge:memory:delete), validation, not-found, conflict or transport failures.
   */
  clearSubjectMemory(subjectId:Identifier,params?:T.MemoryClearQuery,options?:RequestOptions){return this.client.request<void>({...options,method:"DELETE",url:`/api/v1/memory-subjects/${id(subjectId)}`,params});}
  /** Explicit desired state + reviewed source version. Never auto-fetch/retry stale edits. */
  /** Set active/paused desired source state under the captured expected_version. Stale intent conflicts; already-desired state is unchanged.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:write), validation, not-found, conflict or transport errors.
   */
  setSourceState(sourceId:Identifier,data:T.SourceStateInput,options?:RequestOptions<T.SourceStateInput>){
    if(!Number.isSafeInteger(data.expected_version)||data.expected_version<1||!["active","paused"].includes(data.desired_state))throw new TypeError("A reviewed source version and desired state are required");
    return this.client.post<T.KnowledgeSourceResponse,T.SourceStateInput>(`/api/v1/sources/${id(sourceId)}/pause`,data,options);
  }
  /** Canonical MCP scope invalidation, including accepted work with no extracted subject. */
  /** Invalidate canonical assistant/user scope through MCP, including accepted work without extracted subjects. Reject unconfirmed JSON-RPC success.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:runtime plus current subject owner or knowledge:memory:delete), validation, not-found, conflict or transport failures.
   */
  async forgetAssistantScope(assistantId:Identifier,data:T.MemoryScopeForgetInput,options?:RequestOptions){
    const response=await this.client.post<T.MemoryScopeForgetResponse>("/api/v1/runtime/mcp",{jsonrpc:"2.0",id:"memory-forget",method:"tools/call",params:{name:"memory_forget",arguments:{assistant_id:assistantId,...data}}},options);
    const result=response.data?.result?.structuredContent;
    if(!response.data||typeof response.data!=="object"||"error" in response.data||response.data.jsonrpc!=="2.0"||response.data.id!=="memory-forget"||response.data.result?.isError===true||result?.scope_fenced!==true||result.cleared!==true||!Number.isSafeInteger(result.rows_changed)||result.rows_changed<0||(result.subject_id!==null&&typeof result.subject_id!=="string"))throw new Error("The service did not confirm memory scope invalidation");
    return response;
  }
  /** List up to 500 current-organization platform audit events. knowledge:memory:read additionally includes redacted memory events; knowledge:read alone excludes them.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read, knowledge:memory:read), validation, not-found, conflict or transport errors.
   */
  auditEvents(options?: RequestOptions) { return this.client.get<T.KnowledgeAuditEventListResponse>("/api/v1/audit-events", undefined, options); }
  /** Read the query_knowledge JSON Schema. This descriptive route has no handler permission guard; transport still uses the configured shared client.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (no handler-specific permission), validation, not-found, conflict or transport errors.
   */
  toolSchema(options?: RequestOptions) { return this.client.get<T.KnowledgeToolSchemaResponse>("/api/v1/runtime/tool-schema", undefined, options); }
  /** Reads scoped inventories, dependency health, retrieval latency, quality, and backlog. Requires `knowledge:read`. */
  /** Read scoped inventories and last-24-hour retrieval aggregates. Metrics are null without traces; ready is not proof of every external dependency.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  platformStatus(options?: RequestOptions) { return this.client.get<T.PlatformStatusResponse>("/api/v1/platform/status", undefined, options); }
  /** Lists truthful converter capabilities and configuration state. Requires `knowledge:read`. */
  /** List converter registry capabilities, configuration requirements and reported health. Registry availability does not certify that a worker executed a job.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  converters(options?: RequestOptions) { return this.client.get<T.ConverterListResponse>("/api/v1/platform/converters", undefined, options); }
  /** Lists observable ingestion jobs. Requires `knowledge:read`. */
  /** List up to 500 current-organization processing job rows by latest update; counters and queued status do not certify execution.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  processingJobs(options?: RequestOptions) { return this.client.get<T.ProcessingJobListResponse>("/api/v1/processing-jobs", undefined, options); }
  /** Lists governed sources in the current organization. Requires `knowledge:read`. */
  /** List current-organization governed sources by latest update, including source version and configuration.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  sources(options?: RequestOptions) { return this.client.get<T.KnowledgeSourceListResponse>("/api/v1/sources", undefined, options); }
  /** Lists governed documents in the current organization. Requires `knowledge:read`. */
  /** List scoped nondeleted document summaries, excluding content and metadata. No client-side synthetic pagination is applied.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:read), validation, not-found, conflict or transport errors.
   */
  documents(options?: RequestOptions) { return this.client.get<T.KnowledgeDocumentListResponse>("/api/v1/documents", undefined, options); }
  /** Indexes text/chunks synchronously; identical input returns 200 without a new job, changed text or source fields return 201 with a completed job. Requires `knowledge:write`. Embedding readiness is separate. */
  /** Synchronously index governed text/chunks. Identical content returns 200 unchanged; changed content returns 201 with a completed job. Embedding readiness is separate.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:write), validation, not-found, conflict or transport errors.
   */
  ingestDocument(data:T.IngestDocumentInput,options?:RequestOptions<T.IngestDocumentInput>){return this.client.post<T.IngestDocumentResponse,T.IngestDocumentInput>("/api/v1/documents",data,options);}
  /** Configures a versioned assistant context policy with optimistic revision checking. Requires `knowledge:write`. */
  /** Capture when opening a draft; never refresh this revision while submitting it. */
  /** Capture the policy snapshot and expected_policy_revision when opening a draft; zero denotes absent policy.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:write), validation, not-found, conflict or transport failures.
   */
  assistantConfiguration(assistantId:Identifier,options?:RequestOptions){return this.client.get<T.AssistantPolicySnapshotResponse>('/api/v1/runtime/assistants/'+id(assistantId)+'/configure',undefined,options);}
  /** Apply a non-nil configuration UUID and captured policy revision atomically; exact original-actor replay is idempotent and stale edits conflict.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:write), validation, not-found, conflict or transport failures.
   */
  configureAssistant(assistantId:Identifier,data:T.AssistantConfigurationInput,options?:RequestOptions<T.AssistantConfigurationInput>){
    if(!Number.isSafeInteger(data.expected_policy_revision)||data.expected_policy_revision<0||!validConfigurationId(data.configuration_id))throw new TypeError("Captured policy revision and non-nil configuration UUID are required");
    return this.client.put<T.AssistantConfigurationResponse,T.AssistantConfigurationInput>('/api/v1/runtime/assistants/'+id(assistantId)+'/configure',data,options);
  }
  /** Read an authoritative applied/cancelled configuration operation; absence is 404 and never inferred success.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:write), validation, not-found, conflict or transport failures.
   */
  assistantConfigurationOperation(assistantId:Identifier,operationId:Identifier,options?:RequestOptions){return this.client.get<T.AssistantConfigurationOperationResponse>('/api/v1/runtime/assistants/'+id(assistantId)+'/configuration-operations/'+id(operationId),undefined,options);}
  /** Write an immutable cancellation tombstone before releasing a pending configuration fence; applied operations conflict.
   * @param options Axios headers, timeout, credentials and AbortSignal; preceding inputs retain their named wire types.
   * @returns Complete Axios response with status and headers.
   * @throws AxiosError for authorization (knowledge:write), validation, not-found, conflict or transport failures.
   */
  cancelAssistantConfiguration(assistantId:Identifier,operationId:Identifier,input:T.AssistantConfigurationCancellation,options?:RequestOptions<T.AssistantConfigurationCancellation>){return this.client.post<T.AssistantConfigurationOperationResponse,T.AssistantConfigurationCancellation>('/api/v1/runtime/assistants/'+id(assistantId)+'/configuration-operations/'+id(operationId),input,options);}
  /** Retrieves governed, packed assistant context and returns its delivery cursor. Requires `knowledge:runtime`. */
  /** Run governed assistant retrieval with policy ceilings, scoped provider evidence and context delivery tracking. A missing policy returns explicit empty context.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:runtime), validation, not-found, conflict or transport errors.
   */
  assistantQuery(assistantId:Identifier,data:T.AssistantQueryInput,options?:RequestOptions<T.AssistantQueryInput>){return this.client.post<T.AssistantRuntimeResponse,T.AssistantQueryInput>(`/api/v1/runtime/assistants/${id(assistantId)}/query`,data,options);}
  /** Runs the same canonical pipeline for operator preview. Requires `knowledge:runtime`. */
  /** Run the canonical assistant retrieval pipeline with preview surface metadata under the same governance.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (no handler-specific permission), validation, not-found, conflict or transport errors.
   */
  previewAssistant(assistantId:Identifier,data:T.AssistantQueryInput,options?:RequestOptions<T.AssistantQueryInput>){return this.client.post<T.AssistantRuntimeResponse,T.AssistantQueryInput>(`/api/v1/runtime/assistants/${id(assistantId)}/preview`,data,options);}
  /** Runs the canonical evaluation adapter using identical governance. Requires `knowledge:runtime`. */
  /** Run the canonical assistant retrieval pipeline with evaluation surface metadata under the same governance.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (no handler-specific permission), validation, not-found, conflict or transport errors.
   */
  evaluateAssistant(assistantId:Identifier,data:T.AssistantQueryInput,options?:RequestOptions<T.AssistantQueryInput>){return this.client.post<T.AssistantRuntimeResponse,T.AssistantQueryInput>(`/api/v1/runtime/assistants/${id(assistantId)}/evaluations`,data,options);}
  /** Queues post-response memory extraction with message idempotency. Requires `knowledge:runtime`. */
  /** Admit an idempotent assistant turn into the memory outbox under current policy and scope epochs. HTTP 202 can return queued:false; it does not certify extraction.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:runtime), validation, not-found, conflict or transport errors.
   */
  recordMemoryTurn(assistantId:Identifier,data:T.MemoryTurnInput,options?:RequestOptions<T.MemoryTurnInput>){return this.client.post<T.MemoryTurnResponse,T.MemoryTurnInput>(`/api/v1/runtime/assistants/${id(assistantId)}/memory/turn`,data,options);}
  /** Attaches authoritative provider usage and cached-token categories to a retrieval trace. Requires `knowledge:runtime`. */
  /** Attach nonnegative provider token usage and nullable cost to a scoped retrieval trace. Missing or foreign trace IDs return 404.
   * Parameters carry the named wire input/path/query; options preserve Axios headers, timeout and AbortSignal.
   * @returns Full Axios response with typed envelope, status and headers.
   * @throws AxiosError for permission (knowledge:runtime), validation, not-found, conflict or transport errors.
   */
  recordRetrievalUsage(traceId:Identifier,data:T.RetrievalUsageInput,options?:RequestOptions<T.RetrievalUsageInput>){return this.client.post<T.RetrievalUsageResponse,T.RetrievalUsageInput>(`/api/v1/runtime/retrieval-traces/${id(traceId)}/usage`,data,options);}
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";

function validConfigurationId(value:unknown):value is string{return typeof value==="string"&&/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value)&&value.replaceAll("-","")!=="0".repeat(32);}
