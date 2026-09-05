import { ServiceApi, type ApiEnvelope, type Identifier, type JsonValue, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import { KnowledgeOperations } from "./operations.js";
const id = (value: Identifier) => encodeURIComponent(value);
export class KnowledgeApi extends ServiceApi {
  readonly operations = new KnowledgeOperations(this.client);
  knowledgeBases(params?: T.KnowledgeListQuery, options?: RequestOptions) { return this.client.get<T.KnowledgeBaseListResponse>("/api/v1/knowledge-bases", params, options); }
  createKnowledgeBase(data: T.CreateKnowledgeBaseInput, options?: RequestOptions<T.CreateKnowledgeBaseInput>) { return this.client.post<T.KnowledgeBaseResponse, T.CreateKnowledgeBaseInput>("/api/v1/knowledge-bases", data, options); }
  knowledgeBase(baseId: Identifier, options?: RequestOptions) { return this.client.get<T.KnowledgeBaseResponse>(`/api/v1/knowledge-bases/${id(baseId)}`, undefined, options); }
  updateKnowledgeBase(baseId: Identifier, data: T.UpdateKnowledgeBaseInput, options?: RequestOptions<T.UpdateKnowledgeBaseInput>) { return this.client.put<T.KnowledgeBaseResponse, T.UpdateKnowledgeBaseInput>(`/api/v1/knowledge-bases/${id(baseId)}`, data, options); }
  deleteKnowledgeBase(baseId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/knowledge-bases/${id(baseId)}`, options); }
  publish(baseId: Identifier, options?: RequestOptions) { return this.client.post<T.KnowledgeBaseResponse>(`/api/v1/knowledge-bases/${id(baseId)}/publish`, undefined, options); }
  export(baseId: Identifier, options?: RequestOptions) { return this.client.get<ApiEnvelope<JsonValue>>(`/api/v1/knowledge-bases/${id(baseId)}/export`, undefined, options); }
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
  memorySubjects(params?: T.MemorySubjectQuery, options?: RequestOptions) { return this.client.get<ApiEnvelope<JsonValue[]>>("/api/v1/memory-subjects", params, options); }
  clearMemorySubject(subjectId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/memory-subjects/${id(subjectId)}`, options); }
  setMemoryOverride(subjectId: Identifier, data: T.MemoryOverrideInput, options?: RequestOptions<T.MemoryOverrideInput>) { return this.client.put<ApiEnvelope<JsonValue>, T.MemoryOverrideInput>(`/api/v1/memory-subjects/${id(subjectId)}/policy`, data, options); }
  auditEvents(options?: RequestOptions) { return this.client.get<ApiEnvelope<JsonValue[]>>("/api/v1/audit-events", undefined, options); }
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
  /** Queues an idempotent document ingestion job. Requires `knowledge:write`. */
  ingestDocument(data:T.IngestDocumentInput,options?:RequestOptions<T.IngestDocumentInput>){return this.client.post<ApiEnvelope<JsonValue>,T.IngestDocumentInput>("/api/v1/documents",data,options);}
  /** Configures a versioned assistant context policy with optimistic revision checking. Requires `knowledge:write`. */
  configureAssistant(assistantId:Identifier,data:T.AssistantConfigurationInput,options?:RequestOptions<T.AssistantConfigurationInput>){return this.client.put<ApiEnvelope<JsonValue>,T.AssistantConfigurationInput>(`/api/v1/runtime/assistants/${id(assistantId)}/configure`,data,options);}
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
