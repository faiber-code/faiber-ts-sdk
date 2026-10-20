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
  workspaceAssistantContracts(params?: T.RoutesListActionsGetQuery, options?: RequestOptions) {
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
   * Performs the audit events operation for the platform capability.
   * Calls `GET /api/v1/audit-events` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformAuditEventsGet(options?: RequestOptions) {
    return this.client.request<T.PlatformAuditEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/audit-events` });
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
   * Performs the list documents operation for the platform capability.
   * Calls `GET /api/v1/documents` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformListDocumentsGet(options?: RequestOptions) {
    return this.client.request<T.PlatformListDocumentsGetResponse>({ ...options, method: "GET", url: `/api/v1/documents` });
  }
  /**
   * Performs the ingest document operation for the platform capability.
   * Calls `POST /api/v1/documents` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformIngestDocumentPost(data: T.PlatformIngestDocumentPostInput, options?: RequestOptions<T.PlatformIngestDocumentPostInput>) {
    return this.client.request<T.PlatformIngestDocumentPostResponse, T.PlatformIngestDocumentPostInput>({ ...options, method: "POST", url: `/api/v1/documents`, data: data });
  }
  /**
   * Performs the reprocess document operation for the platform capability.
   * Calls `POST /api/v1/documents/{id}/reprocess` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformReprocessDocumentPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformReprocessDocumentPostResponse>({ ...options, method: "POST", url: `/api/v1/documents/${encodeURIComponent(id)}/reprocess` });
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
   * Performs the list evaluation cases operation for the platform capability.
   * Calls `GET /api/v1/evaluation-cases` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformListEvaluationCasesGet(options?: RequestOptions) {
    return this.client.request<T.PlatformListEvaluationCasesGetResponse>({ ...options, method: "GET", url: `/api/v1/evaluation-cases` });
  }
  /**
   * Performs the save evaluation case operation for the platform capability.
   * Calls `POST /api/v1/evaluation-cases` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformSaveEvaluationCasePost(data: T.PlatformSaveEvaluationCasePostInput, options?: RequestOptions<T.PlatformSaveEvaluationCasePostInput>) {
    return this.client.request<T.PlatformSaveEvaluationCasePostResponse, T.PlatformSaveEvaluationCasePostInput>({ ...options, method: "POST", url: `/api/v1/evaluation-cases`, data: data });
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
   * Performs the get release operation for the routes capability.
   * Calls `GET /api/v1/knowledge-releases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesGetReleaseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetReleaseGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-releases/${encodeURIComponent(id)}` });
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
   * Performs the replay memory outbox operation for the platform capability.
   * Calls `POST /api/v1/memory-outbox/{id}/replay` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:memory:write.
   */
  platformReplayMemoryOutboxPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformReplayMemoryOutboxPostResponse>({ ...options, method: "POST", url: `/api/v1/memory-outbox/${encodeURIComponent(id)}/replay` });
  }
  /**
   * Performs the list memory subjects operation for the platform capability.
   * Calls `GET /api/v1/memory-subjects` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:memory:read.
   */
  platformListMemorySubjectsGet(params?: T.PlatformListMemorySubjectsGetQuery, options?: RequestOptions) {
    return this.client.request<T.PlatformListMemorySubjectsGetResponse>({ ...options, method: "GET", url: `/api/v1/memory-subjects`, params });
  }
  /**
   * Performs the clear memory subject operation for the platform capability.
   * Calls `DELETE /api/v1/memory-subjects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  platformClearMemorySubjectDelete(id: Identifier, params?: T.PlatformClearMemorySubjectDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.PlatformClearMemorySubjectDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/memory-subjects/${encodeURIComponent(id)}`, params });
  }
  /**
   * Performs the set memory override operation for the platform capability.
   * Calls `PUT /api/v1/memory-subjects/{id}/policy` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  platformSetMemoryOverridePut(id: Identifier, data: T.PlatformSetMemoryOverridePutInput, options?: RequestOptions<T.PlatformSetMemoryOverridePutInput>) {
    return this.client.request<T.PlatformSetMemoryOverridePutResponse, T.PlatformSetMemoryOverridePutInput>({ ...options, method: "PUT", url: `/api/v1/memory-subjects/${encodeURIComponent(id)}/policy`, data: data });
  }
  /**
   * Performs the forget memory operation for the platform capability.
   * Calls `DELETE /api/v1/memory-subjects/{subject_id}/memories/{memory_id}` through the shared IDP-aware Faiber client.
   * @param subjectId Backend path identifier `subject_id`.
   * @param memoryId Backend path identifier `memory_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  platformForgetMemoryDelete(subjectId: Identifier, memoryId: Identifier, params?: T.PlatformForgetMemoryDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.PlatformForgetMemoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/memory-subjects/${encodeURIComponent(subjectId)}/memories/${encodeURIComponent(memoryId)}`, params });
  }
  /**
   * Performs the invalidate policy cache operation for the platform capability.
   * Calls `POST /api/v1/platform/cache/invalidate` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformInvalidatePolicyCachePost(options?: RequestOptions) {
    return this.client.request<T.PlatformInvalidatePolicyCachePostResponse>({ ...options, method: "POST", url: `/api/v1/platform/cache/invalidate` });
  }
  /**
   * Performs the catalog operation for the platform capability.
   * Calls `GET /api/v1/platform/catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformCatalogGet(options?: RequestOptions) {
    return this.client.request<T.PlatformCatalogGetResponse>({ ...options, method: "GET", url: `/api/v1/platform/catalog` });
  }
  /**
   * Performs the converters operation for the platform capability.
   * Calls `GET /api/v1/platform/converters` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformConvertersGet(options?: RequestOptions) {
    return this.client.request<T.PlatformConvertersGetResponse>({ ...options, method: "GET", url: `/api/v1/platform/converters` });
  }
  /**
   * Performs the status operation for the platform capability.
   * Calls `GET /api/v1/platform/status` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformStatusGet(options?: RequestOptions) {
    return this.client.request<T.PlatformStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/platform/status` });
  }
  /**
   * Performs the processing jobs operation for the platform capability.
   * Calls `GET /api/v1/processing-jobs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformProcessingJobsGet(options?: RequestOptions) {
    return this.client.request<T.PlatformProcessingJobsGetResponse>({ ...options, method: "GET", url: `/api/v1/processing-jobs` });
  }
  /**
   * Performs the cancel processing job operation for the platform capability.
   * Calls `POST /api/v1/processing-jobs/{id}/cancel` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformCancelProcessingJobPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformCancelProcessingJobPostResponse>({ ...options, method: "POST", url: `/api/v1/processing-jobs/${encodeURIComponent(id)}/cancel` });
  }
  /**
   * Performs the retry processing job operation for the platform capability.
   * Calls `POST /api/v1/processing-jobs/{id}/retry` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformRetryProcessingJobPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformRetryProcessingJobPostResponse>({ ...options, method: "POST", url: `/api/v1/processing-jobs/${encodeURIComponent(id)}/retry` });
  }
  /**
   * Performs the list recommenders operation for the platform capability.
   * Calls `GET /api/v1/recommender-groups` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformListRecommendersGet(options?: RequestOptions) {
    return this.client.request<T.PlatformListRecommendersGetResponse>({ ...options, method: "GET", url: `/api/v1/recommender-groups` });
  }
  /**
   * Performs the create recommender group operation for the platform capability.
   * Calls `POST /api/v1/recommender-groups` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformCreateRecommenderGroupPost(data: T.PlatformCreateRecommenderGroupPostInput, options?: RequestOptions<T.PlatformCreateRecommenderGroupPostInput>) {
    return this.client.request<T.PlatformCreateRecommenderGroupPostResponse, T.PlatformCreateRecommenderGroupPostInput>({ ...options, method: "POST", url: `/api/v1/recommender-groups`, data: data });
  }
  /**
   * Performs the create recommender item operation for the platform capability.
   * Calls `POST /api/v1/recommender-groups/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformCreateRecommenderItemPost(id: Identifier, data: T.PlatformCreateRecommenderItemPostInput, options?: RequestOptions<T.PlatformCreateRecommenderItemPostInput>) {
    return this.client.request<T.PlatformCreateRecommenderItemPostResponse, T.PlatformCreateRecommenderItemPostInput>({ ...options, method: "POST", url: `/api/v1/recommender-groups/${encodeURIComponent(id)}/items`, data: data });
  }
  /**
   * Performs the configure assistant operation for the platform capability.
   * Calls `PUT /api/v1/runtime/assistants/{assistant_id}/configure` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformConfigureAssistantPut(assistantId: Identifier, data: T.PlatformConfigureAssistantPutInput, options?: RequestOptions<T.PlatformConfigureAssistantPutInput>) {
    return this.client.request<T.PlatformConfigureAssistantPutResponse, T.PlatformConfigureAssistantPutInput>({ ...options, method: "PUT", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/configure`, data: data });
  }
  /**
   * Performs the get operation for the routes capability.
   * Calls `GET /api/v1/runtime/assistants/{assistant_id}/contracts/{slug}` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param slug Backend path identifier `slug`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  routesGetGet(assistantId: Identifier, slug: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/contracts/${encodeURIComponent(slug)}` });
  }
  /**
   * Performs the evaluate assistant operation for the platform capability.
   * Calls `POST /api/v1/runtime/assistants/{assistant_id}/evaluations` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  platformEvaluateAssistantPost(assistantId: Identifier, data: T.PlatformEvaluateAssistantPostInput, options?: RequestOptions<T.PlatformEvaluateAssistantPostInput>) {
    return this.client.request<T.PlatformEvaluateAssistantPostResponse, T.PlatformEvaluateAssistantPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/evaluations`, data: data });
  }
  /**
   * Performs the record turn operation for the platform capability.
   * Calls `POST /api/v1/runtime/assistants/{assistant_id}/memory/turn` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformRecordTurnPost(assistantId: Identifier, data: T.PlatformRecordTurnPostInput, options?: RequestOptions<T.PlatformRecordTurnPostInput>) {
    return this.client.request<T.PlatformRecordTurnPostResponse, T.PlatformRecordTurnPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/memory/turn`, data: data });
  }
  /**
   * Performs the preview assistant operation for the platform capability.
   * Calls `POST /api/v1/runtime/assistants/{assistant_id}/preview` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  platformPreviewAssistantPost(assistantId: Identifier, data: T.PlatformPreviewAssistantPostInput, options?: RequestOptions<T.PlatformPreviewAssistantPostInput>) {
    return this.client.request<T.PlatformPreviewAssistantPostResponse, T.PlatformPreviewAssistantPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/preview`, data: data });
  }
  /**
   * Performs the query assistant operation for the platform capability.
   * Calls `POST /api/v1/runtime/assistants/{assistant_id}/query` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformQueryAssistantPost(assistantId: Identifier, data: T.PlatformQueryAssistantPostInput, options?: RequestOptions<T.PlatformQueryAssistantPostInput>) {
    return this.client.request<T.PlatformQueryAssistantPostResponse, T.PlatformQueryAssistantPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/query`, data: data });
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
   * Performs the document evidence operation for the platform capability.
   * Calls `GET /api/v1/runtime/evidence/documents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformDocumentEvidenceGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformDocumentEvidenceGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/evidence/documents/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the session evidence operation for the platform capability.
   * Calls `GET /api/v1/runtime/evidence/session/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformSessionEvidenceGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformSessionEvidenceGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/evidence/session/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the mcp operation for the platform capability.
   * Calls `POST /api/v1/runtime/mcp` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformMcpPost(data: T.PlatformMcpPostInput, options?: RequestOptions<T.PlatformMcpPostInput>) {
    return this.client.request<T.PlatformMcpPostResponse, T.PlatformMcpPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/mcp`, data: data });
  }
  /**
   * Performs the record retrieval usage operation for the platform capability.
   * Calls `POST /api/v1/runtime/retrieval-traces/{id}/usage` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformRecordRetrievalUsagePost(id: Identifier, data: T.PlatformRecordRetrievalUsagePostInput, options?: RequestOptions<T.PlatformRecordRetrievalUsagePostInput>) {
    return this.client.request<T.PlatformRecordRetrievalUsagePostResponse, T.PlatformRecordRetrievalUsagePostInput>({ ...options, method: "POST", url: `/api/v1/runtime/retrieval-traces/${encodeURIComponent(id)}/usage`, data: data });
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
   * Performs the list sources operation for the platform capability.
   * Calls `GET /api/v1/sources` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformListSourcesGet(options?: RequestOptions) {
    return this.client.request<T.PlatformListSourcesGetResponse>({ ...options, method: "GET", url: `/api/v1/sources` });
  }
  /**
   * Performs the create source operation for the platform capability.
   * Calls `POST /api/v1/sources` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformCreateSourcePost(data: T.PlatformCreateSourcePostInput, options?: RequestOptions<T.PlatformCreateSourcePostInput>) {
    return this.client.request<T.PlatformCreateSourcePostResponse, T.PlatformCreateSourcePostInput>({ ...options, method: "POST", url: `/api/v1/sources`, data: data });
  }
  /**
   * Performs the pause source operation for the platform capability.
   * Calls `POST /api/v1/sources/{id}/pause` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformPauseSourcePost(id: Identifier, data:T.PlatformPauseSourcePostInput, options?: RequestOptions<T.PlatformPauseSourcePostInput>) {
    return this.client.request<T.PlatformPauseSourcePostResponse,T.PlatformPauseSourcePostInput>({ ...options, method: "POST", url: `/api/v1/sources/${encodeURIComponent(id)}/pause`,data });
  }
  /**
   * Performs the sync source operation for the platform capability.
   * Calls `POST /api/v1/sources/{id}/sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformSyncSourcePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformSyncSourcePostResponse>({ ...options, method: "POST", url: `/api/v1/sources/${encodeURIComponent(id)}/sync` });
  }
  /**
   * Performs the readiness operation for the main capability.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  mainReadinessGetHealth(options?: RequestOptions) {
    return this.client.request<T.MainReadinessGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Performs the liveness operation for the main capability.
   * Calls `GET /health/live` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  mainLivenessGet(options?: RequestOptions) {
    return this.client.request<T.MainLivenessGetResponse>({ ...options, method: "GET", url: `/health/live` });
  }
  /**
   * Performs the readiness operation for the main capability.
   * Calls `GET /health/ready` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  mainReadinessGetHealthReady(options?: RequestOptions) {
    return this.client.request<T.MainReadinessGetHealthReadyResponse>({ ...options, method: "GET", url: `/health/ready` });
  }
  /**
   * Performs the convert operation for the main capability.
   * Calls `POST /internal/task-conversions` through the shared IDP-aware Faiber client.
   * @param data Typed binary byte stream.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  mainConvertPost(data: T.MainConvertPostInput, options?: RequestOptions<T.MainConvertPostInput>) {
    return this.client.request<T.MainConvertPostResponse, T.MainConvertPostInput>({ ...options, method: "POST", url: `/internal/task-conversions`, data: data, headers: { "Content-Type": "application/octet-stream", ...options?.headers } });
  }
  /**
   * Performs the candidates operation for the task projections capability.
   * Calls `POST /internal/task-projections/candidates` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  taskProjectionsCandidatesPost(data: T.TaskProjectionsCandidatesPostInput, options?: RequestOptions<T.TaskProjectionsCandidatesPostInput>) {
    return this.client.request<T.TaskProjectionsCandidatesPostResponse, T.TaskProjectionsCandidatesPostInput>({ ...options, method: "POST", url: `/internal/task-projections/candidates`, data: data });
  }
  /**
   * Performs the passages operation for the task projections capability.
   * Calls `POST /internal/task-projections/passages` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  taskProjectionsPassagesPost(data: T.TaskProjectionsPassagesPostInput, options?: RequestOptions<T.TaskProjectionsPassagesPostInput>) {
    return this.client.request<T.TaskProjectionsPassagesPostResponse, T.TaskProjectionsPassagesPostInput>({ ...options, method: "POST", url: `/internal/task-projections/passages`, data: data });
  }
  /**
   * Performs the sync operation for the task projections capability.
   * Calls `POST /internal/task-projections/sync` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  taskProjectionsSyncPost(data: T.TaskProjectionsSyncPostInput, options?: RequestOptions<T.TaskProjectionsSyncPostInput>) {
    return this.client.request<T.TaskProjectionsSyncPostResponse, T.TaskProjectionsSyncPostInput>({ ...options, method: "POST", url: `/internal/task-projections/sync`, data: data });
  }
}
