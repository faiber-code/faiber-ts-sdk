import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class KnowledgeOperations extends ServiceApi {
  /**
   * Performs the list actions operation for the routes capability.
   * Calls `GET /api/v1/actions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:actions.
   */
  routesListActionsGet(params?: T.RoutesListActionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListActionsGetResponse>({ ...options, method: "GET", url: `/api/v1/actions`, params });
  }
  /**
   * Performs the update action status operation for the routes capability.
   * Calls `PATCH /api/v1/actions/{id}/status` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:actions.
   */
  routesUpdateActionStatusPatch(id: Identifier, data: T.RoutesUpdateActionStatusPatchInput, options?: RequestOptions<T.RoutesUpdateActionStatusPatchInput>) {
    return this.client.request<T.RoutesUpdateActionStatusPatchResponse, T.RoutesUpdateActionStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/actions/${encodeURIComponent(id)}/status`, data: data });
  }
  /**
   * Performs the list audit operation for the routes capability.
   * Calls `GET /api/v1/audit` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:audit.
   */
  routesListAuditGet(params?: T.RoutesListAuditGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListAuditGetResponse>({ ...options, method: "GET", url: `/api/v1/audit`, params });
  }
  /**
   * Performs the list bindings operation for the routes capability.
   * Calls `GET /api/v1/chat-bindings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListBindingsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListBindingsGetResponse>({ ...options, method: "GET", url: `/api/v1/chat-bindings` });
  }
  /**
   * Performs the create binding operation for the routes capability.
   * Calls `POST /api/v1/chat-bindings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateBindingPost(data: T.RoutesCreateBindingPostInput, options?: RequestOptions<T.RoutesCreateBindingPostInput>) {
    return this.client.request<T.RoutesCreateBindingPostResponse, T.RoutesCreateBindingPostInput>({ ...options, method: "POST", url: `/api/v1/chat-bindings`, data: data });
  }
  /**
   * Performs the delete binding operation for the routes capability.
   * Calls `DELETE /api/v1/chat-bindings/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteBindingDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteBindingDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/chat-bindings/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update binding operation for the routes capability.
   * Calls `PUT /api/v1/chat-bindings/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateBindingPut(id: Identifier, data: T.RoutesUpdateBindingPutInput, options?: RequestOptions<T.RoutesUpdateBindingPutInput>) {
    return this.client.request<T.RoutesUpdateBindingPutResponse, T.RoutesUpdateBindingPutInput>({ ...options, method: "PUT", url: `/api/v1/chat-bindings/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the delete edge operation for the routes capability.
   * Calls `DELETE /api/v1/edges/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteEdgeDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteEdgeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/edges/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update edge operation for the routes capability.
   * Calls `PUT /api/v1/edges/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateEdgePut(id: Identifier, data: T.RoutesUpdateEdgePutInput, options?: RequestOptions<T.RoutesUpdateEdgePutInput>) {
    return this.client.request<T.RoutesUpdateEdgePutResponse, T.RoutesUpdateEdgePutInput>({ ...options, method: "PUT", url: `/api/v1/edges/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the delete group operation for the routes capability.
   * Calls `DELETE /api/v1/groups/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteGroupDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteGroupDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/groups/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update group operation for the routes capability.
   * Calls `PUT /api/v1/groups/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateGroupPut(id: Identifier, data: T.RoutesUpdateGroupPutInput, options?: RequestOptions<T.RoutesUpdateGroupPutInput>) {
    return this.client.request<T.RoutesUpdateGroupPutResponse, T.RoutesUpdateGroupPutInput>({ ...options, method: "PUT", url: `/api/v1/groups/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the delete item operation for the routes capability.
   * Calls `DELETE /api/v1/items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteItemDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteItemDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/items/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get item operation for the routes capability.
   * Calls `GET /api/v1/items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesGetItemGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetItemGetResponse>({ ...options, method: "GET", url: `/api/v1/items/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update item operation for the routes capability.
   * Calls `PUT /api/v1/items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateItemPut(id: Identifier, data: T.RoutesUpdateItemPutInput, options?: RequestOptions<T.RoutesUpdateItemPutInput>) {
    return this.client.request<T.RoutesUpdateItemPutResponse, T.RoutesUpdateItemPutInput>({ ...options, method: "PUT", url: `/api/v1/items/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list bases operation for the routes capability.
   * Calls `GET /api/v1/knowledge-bases` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListBasesGet(params?: T.RoutesListBasesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListBasesGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases`, params });
  }
  /**
   * Performs the create base operation for the routes capability.
   * Calls `POST /api/v1/knowledge-bases` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateBasePost(data: T.RoutesCreateBasePostInput, options?: RequestOptions<T.RoutesCreateBasePostInput>) {
    return this.client.request<T.RoutesCreateBasePostResponse, T.RoutesCreateBasePostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases`, data: data });
  }
  /**
   * Performs the delete base operation for the routes capability.
   * Calls `DELETE /api/v1/knowledge-bases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteBaseDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteBaseDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get base operation for the routes capability.
   * Calls `GET /api/v1/knowledge-bases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesGetBaseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetBaseGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update base operation for the routes capability.
   * Calls `PUT /api/v1/knowledge-bases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateBasePut(id: Identifier, data: T.RoutesUpdateBasePutInput, options?: RequestOptions<T.RoutesUpdateBasePutInput>) {
    return this.client.request<T.RoutesUpdateBasePutResponse, T.RoutesUpdateBasePutInput>({ ...options, method: "PUT", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list edges operation for the routes capability.
   * Calls `GET /api/v1/knowledge-bases/{id}/edges` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListEdgesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListEdgesGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/edges` });
  }
  /**
   * Performs the create edge operation for the routes capability.
   * Calls `POST /api/v1/knowledge-bases/{id}/edges` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateEdgePost(id: Identifier, data: T.RoutesCreateEdgePostInput, options?: RequestOptions<T.RoutesCreateEdgePostInput>) {
    return this.client.request<T.RoutesCreateEdgePostResponse, T.RoutesCreateEdgePostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/edges`, data: data });
  }
  /**
   * Performs the export base operation for the routes capability.
   * Calls `GET /api/v1/knowledge-bases/{id}/export` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesExportBaseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesExportBaseGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/export` });
  }
  /**
   * Performs the list groups operation for the routes capability.
   * Calls `GET /api/v1/knowledge-bases/{id}/groups` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListGroupsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListGroupsGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/groups` });
  }
  /**
   * Performs the create group operation for the routes capability.
   * Calls `POST /api/v1/knowledge-bases/{id}/groups` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateGroupPost(id: Identifier, data: T.RoutesCreateGroupPostInput, options?: RequestOptions<T.RoutesCreateGroupPostInput>) {
    return this.client.request<T.RoutesCreateGroupPostResponse, T.RoutesCreateGroupPostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/groups`, data: data });
  }
  /**
   * Performs the list items operation for the routes capability.
   * Calls `GET /api/v1/knowledge-bases/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListItemsGet(id: Identifier, params?: T.RoutesListItemsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/items`, params });
  }
  /**
   * Performs the create item operation for the routes capability.
   * Calls `POST /api/v1/knowledge-bases/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateItemPost(id: Identifier, data: T.RoutesCreateItemPostInput, options?: RequestOptions<T.RoutesCreateItemPostInput>) {
    return this.client.request<T.RoutesCreateItemPostResponse, T.RoutesCreateItemPostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/items`, data: data });
  }
  /**
   * Performs the publish operation for the routes capability.
   * Calls `POST /api/v1/knowledge-bases/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:publish.
   */
  routesPublishPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesPublishPostResponse>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Performs the list rules operation for the routes capability.
   * Calls `GET /api/v1/match-rules` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListRulesGet(params?: T.RoutesListRulesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListRulesGetResponse>({ ...options, method: "GET", url: `/api/v1/match-rules`, params });
  }
  /**
   * Performs the create rule operation for the routes capability.
   * Calls `POST /api/v1/match-rules` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateRulePost(data: T.RoutesCreateRulePostInput, options?: RequestOptions<T.RoutesCreateRulePostInput>) {
    return this.client.request<T.RoutesCreateRulePostResponse, T.RoutesCreateRulePostInput>({ ...options, method: "POST", url: `/api/v1/match-rules`, data: data });
  }
  /**
   * Performs the delete rule operation for the routes capability.
   * Calls `DELETE /api/v1/match-rules/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteRuleDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteRuleDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/match-rules/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update rule operation for the routes capability.
   * Calls `PUT /api/v1/match-rules/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateRulePut(id: Identifier, data: T.RoutesUpdateRulePutInput, options?: RequestOptions<T.RoutesUpdateRulePutInput>) {
    return this.client.request<T.RoutesUpdateRulePutResponse, T.RoutesUpdateRulePutInput>({ ...options, method: "PUT", url: `/api/v1/match-rules/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the runtime query operation for the routes capability.
   * Calls `POST /api/v1/runtime/chat/{chat_slug}/query` through the shared IDP-aware Faiber client.
   * @param chatSlug Backend path identifier `chat_slug`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  routesRuntimeQueryPost(chatSlug: Identifier, data: T.RoutesRuntimeQueryPostInput, options?: RequestOptions<T.RoutesRuntimeQueryPostInput>) {
    return this.client.request<T.RoutesRuntimeQueryPostResponse, T.RoutesRuntimeQueryPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/chat/${encodeURIComponent(chatSlug)}/query`, data: data });
  }
  /**
   * Performs the tool schema operation for the routes capability.
   * Calls `GET /api/v1/runtime/tool-schema` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesToolSchemaGet(options?: RequestOptions) {
    return this.client.request<T.RoutesToolSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/tool-schema` });
  }
  /**
   * Performs the health operation for the main capability.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  mainHealthGet(options?: RequestOptions) {
    return this.client.request<T.MainHealthGetResponse>({ ...options, method: "GET", url: `/health` });
  }
}

