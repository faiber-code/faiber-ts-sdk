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
  toolSchema(options?: RequestOptions) { return this.client.get<ApiEnvelope<JsonValue>>("/api/v1/runtime/tool-schema", undefined, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
