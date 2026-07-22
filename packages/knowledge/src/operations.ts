import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class KnowledgeOperations extends ServiceApi {
  /** GET /api/v1/actions; permission: knowledge:actions. */
  routesListActionsGet(params?: T.RoutesListActionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListActionsGetResponse>({ ...options, method: "GET", url: `/api/v1/actions`, params });
  }
  /** PATCH /api/v1/actions/{id}/status; permission: knowledge:actions. */
  routesUpdateActionStatusPatch(id: Identifier, data: T.RoutesUpdateActionStatusPatchInput, options?: RequestOptions<T.RoutesUpdateActionStatusPatchInput>) {
    return this.client.request<T.RoutesUpdateActionStatusPatchResponse, T.RoutesUpdateActionStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/actions/${encodeURIComponent(id)}/status`, data: data });
  }
  /** GET /api/v1/audit; permission: knowledge:audit. */
  routesListAuditGet(params?: T.RoutesListAuditGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListAuditGetResponse>({ ...options, method: "GET", url: `/api/v1/audit`, params });
  }
  /** GET /api/v1/chat-bindings; permission: knowledge:read. */
  routesListBindingsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListBindingsGetResponse>({ ...options, method: "GET", url: `/api/v1/chat-bindings` });
  }
  /** POST /api/v1/chat-bindings; permission: knowledge:write. */
  routesCreateBindingPost(data: T.RoutesCreateBindingPostInput, options?: RequestOptions<T.RoutesCreateBindingPostInput>) {
    return this.client.request<T.RoutesCreateBindingPostResponse, T.RoutesCreateBindingPostInput>({ ...options, method: "POST", url: `/api/v1/chat-bindings`, data: data });
  }
  /** DELETE /api/v1/chat-bindings/{id}; permission: knowledge:delete. */
  routesDeleteBindingDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteBindingDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/chat-bindings/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/chat-bindings/{id}; permission: knowledge:write. */
  routesUpdateBindingPut(id: Identifier, data: T.RoutesUpdateBindingPutInput, options?: RequestOptions<T.RoutesUpdateBindingPutInput>) {
    return this.client.request<T.RoutesUpdateBindingPutResponse, T.RoutesUpdateBindingPutInput>({ ...options, method: "PUT", url: `/api/v1/chat-bindings/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/edges/{id}; permission: knowledge:delete. */
  routesDeleteEdgeDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteEdgeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/edges/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/edges/{id}; permission: knowledge:write. */
  routesUpdateEdgePut(id: Identifier, data: T.RoutesUpdateEdgePutInput, options?: RequestOptions<T.RoutesUpdateEdgePutInput>) {
    return this.client.request<T.RoutesUpdateEdgePutResponse, T.RoutesUpdateEdgePutInput>({ ...options, method: "PUT", url: `/api/v1/edges/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/groups/{id}; permission: knowledge:delete. */
  routesDeleteGroupDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteGroupDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/groups/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/groups/{id}; permission: knowledge:write. */
  routesUpdateGroupPut(id: Identifier, data: T.RoutesUpdateGroupPutInput, options?: RequestOptions<T.RoutesUpdateGroupPutInput>) {
    return this.client.request<T.RoutesUpdateGroupPutResponse, T.RoutesUpdateGroupPutInput>({ ...options, method: "PUT", url: `/api/v1/groups/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/items/{id}; permission: knowledge:delete. */
  routesDeleteItemDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteItemDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/items/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/items/{id}; permission: knowledge:read. */
  routesGetItemGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetItemGetResponse>({ ...options, method: "GET", url: `/api/v1/items/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/items/{id}; permission: knowledge:write. */
  routesUpdateItemPut(id: Identifier, data: T.RoutesUpdateItemPutInput, options?: RequestOptions<T.RoutesUpdateItemPutInput>) {
    return this.client.request<T.RoutesUpdateItemPutResponse, T.RoutesUpdateItemPutInput>({ ...options, method: "PUT", url: `/api/v1/items/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/knowledge-bases; permission: knowledge:read. */
  routesListBasesGet(params?: T.RoutesListBasesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListBasesGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases`, params });
  }
  /** POST /api/v1/knowledge-bases; permission: knowledge:write. */
  routesCreateBasePost(data: T.RoutesCreateBasePostInput, options?: RequestOptions<T.RoutesCreateBasePostInput>) {
    return this.client.request<T.RoutesCreateBasePostResponse, T.RoutesCreateBasePostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases`, data: data });
  }
  /** DELETE /api/v1/knowledge-bases/{id}; permission: knowledge:delete. */
  routesDeleteBaseDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteBaseDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/knowledge-bases/{id}; permission: knowledge:read. */
  routesGetBaseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetBaseGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/knowledge-bases/{id}; permission: knowledge:write. */
  routesUpdateBasePut(id: Identifier, data: T.RoutesUpdateBasePutInput, options?: RequestOptions<T.RoutesUpdateBasePutInput>) {
    return this.client.request<T.RoutesUpdateBasePutResponse, T.RoutesUpdateBasePutInput>({ ...options, method: "PUT", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/knowledge-bases/{id}/edges; permission: knowledge:read. */
  routesListEdgesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListEdgesGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/edges` });
  }
  /** POST /api/v1/knowledge-bases/{id}/edges; permission: knowledge:write. */
  routesCreateEdgePost(id: Identifier, data: T.RoutesCreateEdgePostInput, options?: RequestOptions<T.RoutesCreateEdgePostInput>) {
    return this.client.request<T.RoutesCreateEdgePostResponse, T.RoutesCreateEdgePostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/edges`, data: data });
  }
  /** GET /api/v1/knowledge-bases/{id}/export; permission: knowledge:read. */
  routesExportBaseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesExportBaseGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/export` });
  }
  /** GET /api/v1/knowledge-bases/{id}/groups; permission: knowledge:read. */
  routesListGroupsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListGroupsGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/groups` });
  }
  /** POST /api/v1/knowledge-bases/{id}/groups; permission: knowledge:write. */
  routesCreateGroupPost(id: Identifier, data: T.RoutesCreateGroupPostInput, options?: RequestOptions<T.RoutesCreateGroupPostInput>) {
    return this.client.request<T.RoutesCreateGroupPostResponse, T.RoutesCreateGroupPostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/groups`, data: data });
  }
  /** GET /api/v1/knowledge-bases/{id}/items; permission: knowledge:read. */
  routesListItemsGet(id: Identifier, params?: T.RoutesListItemsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/items`, params });
  }
  /** POST /api/v1/knowledge-bases/{id}/items; permission: knowledge:write. */
  routesCreateItemPost(id: Identifier, data: T.RoutesCreateItemPostInput, options?: RequestOptions<T.RoutesCreateItemPostInput>) {
    return this.client.request<T.RoutesCreateItemPostResponse, T.RoutesCreateItemPostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/items`, data: data });
  }
  /** POST /api/v1/knowledge-bases/{id}/publish; permission: knowledge:publish. */
  routesPublishPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesPublishPostResponse>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/publish` });
  }
  /** GET /api/v1/match-rules; permission: knowledge:read. */
  routesListRulesGet(params?: T.RoutesListRulesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListRulesGetResponse>({ ...options, method: "GET", url: `/api/v1/match-rules`, params });
  }
  /** POST /api/v1/match-rules; permission: knowledge:write. */
  routesCreateRulePost(data: T.RoutesCreateRulePostInput, options?: RequestOptions<T.RoutesCreateRulePostInput>) {
    return this.client.request<T.RoutesCreateRulePostResponse, T.RoutesCreateRulePostInput>({ ...options, method: "POST", url: `/api/v1/match-rules`, data: data });
  }
  /** DELETE /api/v1/match-rules/{id}; permission: knowledge:delete. */
  routesDeleteRuleDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteRuleDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/match-rules/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/match-rules/{id}; permission: knowledge:write. */
  routesUpdateRulePut(id: Identifier, data: T.RoutesUpdateRulePutInput, options?: RequestOptions<T.RoutesUpdateRulePutInput>) {
    return this.client.request<T.RoutesUpdateRulePutResponse, T.RoutesUpdateRulePutInput>({ ...options, method: "PUT", url: `/api/v1/match-rules/${encodeURIComponent(id)}`, data: data });
  }
  /** POST /api/v1/runtime/chat/{chat_slug}/query; permission: knowledge:runtime. */
  routesRuntimeQueryPost(chatSlug: Identifier, data: T.RoutesRuntimeQueryPostInput, options?: RequestOptions<T.RoutesRuntimeQueryPostInput>) {
    return this.client.request<T.RoutesRuntimeQueryPostResponse, T.RoutesRuntimeQueryPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/chat/${encodeURIComponent(chatSlug)}/query`, data: data });
  }
  /** GET /api/v1/runtime/tool-schema; permission: public/session-derived. */
  routesToolSchemaGet(options?: RequestOptions) {
    return this.client.request<T.RoutesToolSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/tool-schema` });
  }
}

