import { ServiceApi, type ApiEnvelope, type Identifier, type JsonValue, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import { KnowledgeOperations } from "./operations.js";
const id = (value: Identifier) => encodeURIComponent(value);
export class KnowledgeApi extends ServiceApi {
  /** Loads full contracts from an enabled assistant binding and its immutable published release, without semantic truncation. Requires knowledge:runtime; missing published bindings return 404. */
  assistantContracts(assistantId: Identifier, slug: string, options?: RequestOptions) { return this.client.get<T.AssistantContractsResponse>(`/api/v1/runtime/assistants/${id(assistantId)}/contracts/${id(slug)}`, undefined, options); }
  /** Searches active match rules across authorized bases. Requires `knowledge:read`. Filters apply before stable pagination; foreign/deleted bases contribute no rows. */
  matchRules(params?: T.KnowledgeRuleListQuery, options?: RequestOptions) { return this.client.get<T.MatchRuleListResponse>("/api/v1/match-rules", params, options); }
  readonly operations = new KnowledgeOperations(this.client);
  knowledgeBases(params?: T.KnowledgeListQuery, options?: RequestOptions) { return this.client.get<T.KnowledgeBaseListResponse>("/api/v1/knowledge-bases", params, options); }
  createKnowledgeBase(data: T.CreateKnowledgeBaseInput, options?: RequestOptions<T.CreateKnowledgeBaseInput>) { return this.client.post<T.KnowledgeBaseResponse, T.CreateKnowledgeBaseInput>("/api/v1/knowledge-bases", data, options); }
  knowledgeBase(baseId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeBaseResponse>(`/api/v1/knowledge-bases/${id(baseId)}`, undefined, options); }
  updateKnowledgeBase(baseId: Identifier, data: T.UpdateKnowledgeBaseInput, options?: RequestOptions<T.UpdateKnowledgeBaseInput>) { return this.client.put<T.KnowledgeBaseResponse, T.UpdateKnowledgeBaseInput>(`/api/v1/knowledge-bases/${id(baseId)}`, data, options); }
  deleteKnowledgeBase(baseId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/knowledge-bases/${id(baseId)}`, options); }
  /** Publishes an immutable snapshot. Requires `knowledge:publish`; incomplete content returns 400. Returns the release identity/checksum, while the mutable base stores its published_release_id. */
  publish(baseId: Identifier, options?: RequestOptions) { return this.client.post<T.KnowledgeReleaseResponse>(`/api/v1/knowledge-bases/${id(baseId)}/publish`, undefined, options); }
  /** Reads an immutable release by its release ID. Requires `knowledge:read`; tenant or missing-base access returns 404. */
  release(releaseId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeReleaseResponse>(`/api/v1/knowledge-releases/${id(releaseId)}`, undefined, options); }
  export(baseId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeExportResponse>(`/api/v1/knowledge-bases/${id(baseId)}/export`, undefined, options); }
  groups(baseId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeGroupListResponse>(`/api/v1/knowledge-bases/${id(baseId)}/groups`, undefined, options); }
  createGroup(baseId: Identifier, data: T.CreateGroupInput, options?: RequestOptions<T.CreateGroupInput>) { return this.client.post<T.KnowledgeGroupResponse, T.CreateGroupInput>(`/api/v1/knowledge-bases/${id(baseId)}/groups`, data, options); }
  updateGroup(groupId: Identifier, data: T.UpdateGroupInput, options?: RequestOptions<T.UpdateGroupInput>) { return this.client.put<T.KnowledgeGroupResponse, T.UpdateGroupInput>(`/api/v1/groups/${id(groupId)}`, data, options); }
  deleteGroup(groupId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/groups/${id(groupId)}`, options); }
  items(baseId: Identifier, params?: T.KnowledgeListQuery, options?: RequestOptions) { return this.client.get<T.KnowledgeItemListResponse>(`/api/v1/knowledge-bases/${id(baseId)}/items`, params, options); }
  createItem(baseId: Identifier, data: T.CreateItemInput, options?: RequestOptions<T.CreateItemInput>) { return this.client.post<T.KnowledgeItemResponse, T.CreateItemInput>(`/api/v1/knowledge-bases/${id(baseId)}/items`, data, options); }
  item(itemId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeItemResponse>(`/api/v1/items/${id(itemId)}`, undefined, options); }
  updateItem(itemId: Identifier, data: T.UpdateItemInput, options?: RequestOptions<T.UpdateItemInput>) { return this.client.put<T.KnowledgeItemResponse, T.UpdateItemInput>(`/api/v1/items/${id(itemId)}`, data, options); }
  deleteItem(itemId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/items/${id(itemId)}`, options); }
  query(chatSlug: string, data: T.RuntimeQueryInput, options?: RequestOptions<T.RuntimeQueryInput>) { return this.client.post<T.RuntimeResultResponse, T.RuntimeQueryInput>(`/api/v1/runtime/chat/${id(chatSlug)}/query`, data, options); }
  queryAssistant(assistantId: Identifier, data: T.AssistantQueryInput, options?: RequestOptions<T.AssistantQueryInput>) { return this.client.post<T.AssistantRuntimeResponse, T.AssistantQueryInput>(`/api/v1/runtime/assistants/${id(assistantId)}/query`, data, options); }
  recordAssistantTurn(assistantId: Identifier, data: T.RecordAssistantTurnInput, options?: RequestOptions<T.RecordAssistantTurnInput>) { return this.client.post<ApiEnvelope<JsonValue>, T.RecordAssistantTurnInput>(`/api/v1/runtime/assistants/${id(assistantId)}/memory/turn`, data, options); }
  memorySubjects(params?: T.MemorySubjectQuery, options?: RequestOptions) { return this.client.get<T.MemorySubjectListResponse>("/api/v1/memory-subjects", params, options); }
  clearMemorySubject(subjectId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/memory-subjects/${id(subjectId)}`, options); }
  setMemoryOverride(subjectId: Identifier, data: T.MemoryOverrideInput, options?: RequestOptions<T.MemoryOverrideInput>) { if(!/^[a-f0-9]{64}$/.test(data.expected_revision))throw new TypeError("A captured memory policy revision is required"); return this.client.put<T.MemorySubjectResponse, T.MemoryOverrideInput>(`/api/v1/memory-subjects/${id(subjectId)}/policy`, data, options); }
  /** Current authorized projection, with separate effective policy/raw overrides and captured CAS revision. */
  memorySubject(subjectId:Identifier,options?:RequestOptions){return this.client.get<T.MemorySubjectResponse>(`/api/v1/memory-subjects/${id(subjectId)}`,undefined,options);}
  /** Bounded atomic facts; forgotten/expired content is redacted by the service. */
  memories(subjectId:Identifier,params?:T.MemoryRecordQuery,options?:RequestOptions){return this.client.get<T.MemoryRecordListResponse>(`/api/v1/memory-subjects/${id(subjectId)}/memories`,params,options);}
  memory(subjectId:Identifier,memoryId:Identifier,options?:RequestOptions){return this.client.get<T.MemoryRecordResponse>(`/api/v1/memory-subjects/${id(subjectId)}/memories/${id(memoryId)}`,undefined,options);}
  memoryAudit(subjectId:Identifier,params?:T.MemoryAuditQuery,options?:RequestOptions){return this.client.get<T.MemoryAuditListResponse>(`/api/v1/memory-subjects/${id(subjectId)}/audit-events`,params,options);}
  /** Correct only a reviewed, complete active target set; a409 must not be silently rebased. */
  correctMemory(subjectId:Identifier,data:T.MemoryCorrectionInput,options?:RequestOptions<T.MemoryCorrectionInput>){return this.client.post<T.MemoryCorrectionResponse,T.MemoryCorrectionInput>(`/api/v1/memory-subjects/${id(subjectId)}/corrections`,data,options);}
  forgetMemory(subjectId:Identifier,memoryId:Identifier,params?:T.MemoryClearQuery,options?:RequestOptions){return this.client.request<void>({...options,method:"DELETE",url:`/api/v1/memory-subjects/${id(subjectId)}/memories/${id(memoryId)}`,params});}
  clearSubjectMemory(subjectId:Identifier,params?:T.MemoryClearQuery,options?:RequestOptions){return this.client.request<void>({...options,method:"DELETE",url:`/api/v1/memory-subjects/${id(subjectId)}`,params});}
  /** Explicit desired state + reviewed source version. Never auto-fetch/retry stale edits. */
  setSourceState(sourceId:Identifier,data:T.SourceStateInput,options?:RequestOptions<T.SourceStateInput>){
    if(!Number.isSafeInteger(data.expected_version)||data.expected_version<1||!["active","paused"].includes(data.desired_state))throw new TypeError("A reviewed source version and desired state are required");
    return this.client.post<T.KnowledgeSourceResponse,T.SourceStateInput>(`/api/v1/sources/${id(sourceId)}/pause`,data,options);
  }
  /** Canonical MCP scope invalidation, including accepted work with no extracted subject. */
  async forgetAssistantScope(assistantId:Identifier,data:T.MemoryScopeForgetInput,options?:RequestOptions){
    const response=await this.client.post<T.MemoryScopeForgetResponse>("/api/v1/runtime/mcp",{jsonrpc:"2.0",id:"memory-forget",method:"tools/call",params:{name:"memory_forget",arguments:{assistant_id:assistantId,...data}}},options);
    const result=response.data?.result?.structuredContent;
    if(!response.data||typeof response.data!=="object"||"error" in response.data||response.data.jsonrpc!=="2.0"||response.data.id!=="memory-forget"||response.data.result?.isError===true||result?.scope_fenced!==true||result.cleared!==true||!Number.isSafeInteger(result.rows_changed)||result.rows_changed<0||(result.subject_id!==null&&typeof result.subject_id!=="string"))throw new Error("The service did not confirm memory scope invalidation");
    return response;
  }
  auditEvents(options?: RequestOptions) { return this.client.get<T.KnowledgeAuditEventListResponse>("/api/v1/audit-events", undefined, options); }
  toolSchema(options?: RequestOptions) { return this.client.get<ApiEnvelope<JsonValue>>("/api/v1/runtime/tool-schema", undefined, options); }
  /** Reads scoped inventories, dependency health, retrieval latency, quality, and backlog. Requires `knowledge:read`. */
  platformStatus(options?: RequestOptions) { return this.client.get<T.PlatformStatusResponse>("/api/v1/platform/status", undefined, options); }
  /** Lists truthful converter capabilities and configuration state. Requires `knowledge:read`. */
  converters(options?: RequestOptions) { return this.client.get<T.ConverterListResponse>("/api/v1/platform/converters", undefined, options); }
  /** Lists observable ingestion jobs. Requires `knowledge:read`. */
  processingJobs(options?: RequestOptions) { return this.client.get<T.ProcessingJobListResponse>("/api/v1/processing-jobs", undefined, options); }
  /** Lists governed sources in the current organization. Requires `knowledge:read`. */
  sources(options?: RequestOptions) { return this.client.get<T.KnowledgeSourceListResponse>("/api/v1/sources", undefined, options); }
  /** Lists governed documents in the current organization. Requires `knowledge:read`. */
  documents(options?: RequestOptions) { return this.client.get<T.KnowledgeDocumentListResponse>("/api/v1/documents", undefined, options); }
  /** Indexes text/chunks synchronously; identical input returns 200 without a new job, changed text or source fields return 201 with a completed job. Requires `knowledge:write`. Embedding readiness is separate. */
  ingestDocument(data:T.IngestDocumentInput,options?:RequestOptions<T.IngestDocumentInput>){return this.client.post<T.IngestDocumentResponse,T.IngestDocumentInput>("/api/v1/documents",data,options);}
  /** Configures a versioned assistant context policy with optimistic revision checking. Requires `knowledge:write`. */
  /** Capture when opening a draft; never refresh this revision while submitting it. */
  assistantConfiguration(assistantId:Identifier,options?:RequestOptions){return this.client.get<T.AssistantPolicySnapshotResponse>('/api/v1/runtime/assistants/'+id(assistantId)+'/configure',undefined,options);}
  configureAssistant(assistantId:Identifier,data:T.AssistantConfigurationInput,options?:RequestOptions<T.AssistantConfigurationInput>){
    if(!Number.isSafeInteger(data.expected_policy_revision)||data.expected_policy_revision<0||!validConfigurationId(data.configuration_id))throw new TypeError("Captured policy revision and non-nil configuration UUID are required");
    return this.client.put<T.AssistantConfigurationResponse,T.AssistantConfigurationInput>('/api/v1/runtime/assistants/'+id(assistantId)+'/configure',data,options);
  }
  assistantConfigurationOperation(assistantId:Identifier,operationId:Identifier,options?:RequestOptions){return this.client.get<T.AssistantConfigurationOperationResponse>('/api/v1/runtime/assistants/'+id(assistantId)+'/configuration-operations/'+id(operationId),undefined,options);}
  cancelAssistantConfiguration(assistantId:Identifier,operationId:Identifier,input:T.AssistantConfigurationCancellation,options?:RequestOptions<T.AssistantConfigurationCancellation>){return this.client.post<T.AssistantConfigurationOperationResponse,T.AssistantConfigurationCancellation>('/api/v1/runtime/assistants/'+id(assistantId)+'/configuration-operations/'+id(operationId),input,options);}
  /** Retrieves governed, packed assistant context and returns its delivery cursor. Requires `knowledge:runtime`. */
  assistantQuery(assistantId:Identifier,data:T.AssistantQueryInput,options?:RequestOptions<T.AssistantQueryInput>){return this.client.post<T.AssistantRuntimeResponse,T.AssistantQueryInput>(`/api/v1/runtime/assistants/${id(assistantId)}/query`,data,options);}
  /** Runs the same canonical pipeline for operator preview. Requires `knowledge:runtime`. */
  previewAssistant(assistantId:Identifier,data:T.AssistantQueryInput,options?:RequestOptions<T.AssistantQueryInput>){return this.client.post<T.AssistantRuntimeResponse,T.AssistantQueryInput>(`/api/v1/runtime/assistants/${id(assistantId)}/preview`,data,options);}
  /** Runs the canonical evaluation adapter using identical governance. Requires `knowledge:runtime`. */
  evaluateAssistant(assistantId:Identifier,data:T.AssistantQueryInput,options?:RequestOptions<T.AssistantQueryInput>){return this.client.post<T.AssistantRuntimeResponse,T.AssistantQueryInput>(`/api/v1/runtime/assistants/${id(assistantId)}/evaluations`,data,options);}
  /** Queues post-response memory extraction with message idempotency. Requires `knowledge:runtime`. */
  recordMemoryTurn(assistantId:Identifier,data:T.MemoryTurnInput,options?:RequestOptions<T.MemoryTurnInput>){return this.client.post<ApiEnvelope<JsonValue>,T.MemoryTurnInput>(`/api/v1/runtime/assistants/${id(assistantId)}/memory/turn`,data,options);}
  /** Attaches authoritative provider usage and cached-token categories to a retrieval trace. Requires `knowledge:runtime`. */
  recordRetrievalUsage(traceId:Identifier,data:T.RetrievalUsageInput,options?:RequestOptions<T.RetrievalUsageInput>){return this.client.post<ApiEnvelope<JsonValue>,T.RetrievalUsageInput>(`/api/v1/runtime/retrieval-traces/${id(traceId)}/usage`,data,options);}
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";

function validConfigurationId(value:unknown):value is string{return typeof value==="string"&&/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value)&&value.replaceAll("-","")!=="0".repeat(32);}
