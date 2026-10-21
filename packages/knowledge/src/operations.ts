import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class KnowledgeOperations extends ServiceApi {
  /**
   * List current-organization customer actions, newest first. Only status and the clamped limit are applied; page and other shared ListQuery filters are ignored.
   * Calls `GET /api/v1/actions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:actions.
   */
  workspaceAssistantContracts(params?: T.RoutesListActionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListActionsGetResponse>({ ...options, method: "GET", url: `/api/v1/actions`, params });
  }
  /**
   * Update one organization-scoped action status and customer input. Completed stamps completed_at; a later status change retains that stamp.
   * Calls `PATCH /api/v1/actions/{id}/status` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:actions.
   */
  routesUpdateActionStatusPatch(id: Identifier, data: T.RoutesUpdateActionStatusPatchInput, options?: RequestOptions<T.RoutesUpdateActionStatusPatchInput>) {
    return this.client.request<T.RoutesUpdateActionStatusPatchResponse, T.RoutesUpdateActionStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/actions/${encodeURIComponent(id)}/status`, data: data });
  }
  /**
   * List editor audit rows for the current organization, newest first and limited to 1–200. Shared query fields other than limit are ignored.
   * Calls `GET /api/v1/audit` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:audit.
   */
  routesListAuditGet(params?: T.RoutesListAuditGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListAuditGetResponse>({ ...options, method: "GET", url: `/api/v1/audit`, params });
  }
  /**
   * List up to 500 current-organization platform audit events. knowledge:memory:read additionally includes redacted memory events; knowledge:read alone excludes them.
   * Calls `GET /api/v1/audit-events` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read; knowledge:memory:read additionally includes redacted memory events.
   */
  platformAuditEventsGet(options?: RequestOptions) {
    return this.client.request<T.PlatformAuditEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/audit-events` });
  }
  /**
   * List current-organization chat bindings ordered by chat slug. The result is not paginated.
   * Calls `GET /api/v1/chat-bindings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListBindingsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListBindingsGetResponse>({ ...options, method: "GET", url: `/api/v1/chat-bindings` });
  }
  /**
   * Create a chat binding to an authorized base with group scope and tool policy; returns 201.
   * Calls `POST /api/v1/chat-bindings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateBindingPost(data: T.RoutesCreateBindingPostInput, options?: RequestOptions<T.RoutesCreateBindingPostInput>) {
    return this.client.request<T.RoutesCreateBindingPostResponse, T.RoutesCreateBindingPostInput>({ ...options, method: "POST", url: `/api/v1/chat-bindings`, data: data });
  }
  /**
   * Delete a tenant-owned chat binding and audit the change transactionally; returns 204.
   * Calls `DELETE /api/v1/chat-bindings/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteBindingDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteBindingDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/chat-bindings/${encodeURIComponent(id)}` });
  }
  /**
   * Update a tenant-owned chat binding under a base lock and optional expected_version; no implicit stale retry is performed.
   * Calls `PUT /api/v1/chat-bindings/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateBindingPut(id: Identifier, data: T.RoutesUpdateBindingPutInput, options?: RequestOptions<T.RoutesUpdateBindingPutInput>) {
    return this.client.request<T.RoutesUpdateBindingPutResponse, T.RoutesUpdateBindingPutInput>({ ...options, method: "PUT", url: `/api/v1/chat-bindings/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List scoped nondeleted document summaries, excluding content and metadata. No client-side synthetic pagination is applied.
   * Calls `GET /api/v1/documents` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformListDocumentsGet(options?: RequestOptions) {
    return this.client.request<T.PlatformListDocumentsGetResponse>({ ...options, method: "GET", url: `/api/v1/documents` });
  }
  /**
   * Synchronously index governed text/chunks. Identical content returns 200 unchanged; changed content returns 201 with a completed job. Embedding readiness is separate.
   * Calls `POST /api/v1/documents` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformIngestDocumentPost(data: T.PlatformIngestDocumentPostInput, options?: RequestOptions<T.PlatformIngestDocumentPostInput>) {
    return this.client.request<T.PlatformIngestDocumentPostResponse, T.PlatformIngestDocumentPostInput>({ ...options, method: "POST", url: `/api/v1/documents`, data: data });
  }
  /**
   * Persist or reuse a scoped document-reprocess job and return 202 with the actual job ID. Queued does not certify execution.
   * Calls `POST /api/v1/documents/{id}/reprocess` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformReprocessDocumentPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformReprocessDocumentPostResponse>({ ...options, method: "POST", url: `/api/v1/documents/${encodeURIComponent(id)}/reprocess` });
  }
  /**
   * Delete an organization-owned graph edge and record editor audit transactionally; returns 204.
   * Calls `DELETE /api/v1/edges/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteEdgeDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteEdgeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/edges/${encodeURIComponent(id)}` });
  }
  /**
   * Update an organization-owned graph edge under an authorized base lock and optional expected_version; stale edits return 409.
   * Calls `PUT /api/v1/edges/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateEdgePut(id: Identifier, data: T.RoutesUpdateEdgePutInput, options?: RequestOptions<T.RoutesUpdateEdgePutInput>) {
    return this.client.request<T.RoutesUpdateEdgePutResponse, T.RoutesUpdateEdgePutInput>({ ...options, method: "PUT", url: `/api/v1/edges/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read up to 500 active current-organization evaluation cases ordered by latest update.
   * Calls `GET /api/v1/evaluation-cases` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformListEvaluationCasesGet(options?: RequestOptions) {
    return this.client.request<T.PlatformListEvaluationCasesGetResponse>({ ...options, method: "GET", url: `/api/v1/evaluation-cases` });
  }
  /**
   * Upsert a stable-key evaluation case in the current organization and return 201. Blank stable key/query and identity/secret-bearing context fail validation.
   * Calls `POST /api/v1/evaluation-cases` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformSaveEvaluationCasePost(data: T.PlatformSaveEvaluationCasePostInput, options?: RequestOptions<T.PlatformSaveEvaluationCasePostInput>) {
    return this.client.request<T.PlatformSaveEvaluationCasePostResponse, T.PlatformSaveEvaluationCasePostInput>({ ...options, method: "POST", url: `/api/v1/evaluation-cases`, data: data });
  }
  /**
   * Soft-delete one authorized empty group. Child groups, active items or active rules block deletion with 409; success returns 204.
   * Calls `DELETE /api/v1/groups/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteGroupDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteGroupDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/groups/${encodeURIComponent(id)}` });
  }
  /**
   * Update a group under a tenant-authorized locked base. Parent moves validate cycles and descendant levels; optional expected_version detects stale drafts.
   * Calls `PUT /api/v1/groups/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateGroupPut(id: Identifier, data: T.RoutesUpdateGroupPutInput, options?: RequestOptions<T.RoutesUpdateGroupPutInput>) {
    return this.client.request<T.RoutesUpdateGroupPutResponse, T.RoutesUpdateGroupPutInput>({ ...options, method: "PUT", url: `/api/v1/groups/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Soft-delete one authorized item transactionally and record editor audit; returns 204.
   * Calls `DELETE /api/v1/items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteItemDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteItemDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/items/${encodeURIComponent(id)}` });
  }
  /**
   * Read a nondeleted item through its organization-owned base; absent and foreign items return 404.
   * Calls `GET /api/v1/items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesGetItemGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetItemGetResponse>({ ...options, method: "GET", url: `/api/v1/items/${encodeURIComponent(id)}` });
  }
  /**
   * Update an item transactionally with optional expected_version. Omitted/null optional scalar fields preserve current values; empty link strings clear links.
   * Calls `PUT /api/v1/items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateItemPut(id: Identifier, data: T.RoutesUpdateItemPutInput, options?: RequestOptions<T.RoutesUpdateItemPutInput>) {
    return this.client.request<T.RoutesUpdateItemPutResponse, T.RoutesUpdateItemPutInput>({ ...options, method: "PUT", url: `/api/v1/items/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Search current-organization nondeleted bases by name/slug and optional status. Page defaults to 1 and limit to 50, clamped to 1–200.
   * Calls `GET /api/v1/knowledge-bases` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListBasesGet(params?: T.RoutesListBasesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListBasesGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases`, params });
  }
  /**
   * Create a draft base for the current organization. Slug validation and organization slug uniqueness are enforced; returns 201.
   * Calls `POST /api/v1/knowledge-bases` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateBasePost(data: T.RoutesCreateBasePostInput, options?: RequestOptions<T.RoutesCreateBasePostInput>) {
    return this.client.request<T.RoutesCreateBasePostResponse, T.RoutesCreateBasePostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases`, data: data });
  }
  /**
   * Soft-delete and archive a current-organization base transactionally; retained child rows remain inaccessible through the base. Returns 204.
   * Calls `DELETE /api/v1/knowledge-bases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteBaseDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteBaseDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}` });
  }
  /**
   * Read a nondeleted organization-owned base. Foreign and missing base IDs return 404.
   * Calls `GET /api/v1/knowledge-bases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesGetBaseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetBaseGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}` });
  }
  /**
   * Update an organization-owned base under optional expected_version. Null scalar fields behave as omitted; stale versions conflict with 409.
   * Calls `PUT /api/v1/knowledge-bases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesUpdateBasePut(id: Identifier, data: T.RoutesUpdateBasePutInput, options?: RequestOptions<T.RoutesUpdateBasePutInput>) {
    return this.client.request<T.RoutesUpdateBasePutResponse, T.RoutesUpdateBasePutInput>({ ...options, method: "PUT", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read graph edges after authorizing their base, ordered by latest update. This endpoint does not accept pagination.
   * Calls `GET /api/v1/knowledge-bases/{id}/edges` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListEdgesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListEdgesGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/edges` });
  }
  /**
   * Create an edge with both endpoint items in the authorized base. Invalid cross-base endpoints fail; returns 201.
   * Calls `POST /api/v1/knowledge-bases/{id}/edges` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateEdgePost(id: Identifier, data: T.RoutesCreateEdgePostInput, options?: RequestOptions<T.RoutesCreateEdgePostInput>) {
    return this.client.request<T.RoutesCreateEdgePostResponse, T.RoutesCreateEdgePostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/edges`, data: data });
  }
  /**
   * Export the current mutable authoring base, groups, items, edges and rules with an export timestamp. This is not an immutable published release.
   * Calls `GET /api/v1/knowledge-bases/{id}/export` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesExportBaseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesExportBaseGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/export` });
  }
  /**
   * List nondeleted groups after authorizing their base; returns an unpaginated array ordered by level then sort order.
   * Calls `GET /api/v1/knowledge-bases/{id}/groups` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListGroupsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListGroupsGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/groups` });
  }
  /**
   * Create a group under a tenant-authorized locked base. Parent relationships and slug uniqueness are validated; returns 201.
   * Calls `POST /api/v1/knowledge-bases/{id}/groups` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateGroupPost(id: Identifier, data: T.RoutesCreateGroupPostInput, options?: RequestOptions<T.RoutesCreateGroupPostInput>) {
    return this.client.request<T.RoutesCreateGroupPostResponse, T.RoutesCreateGroupPostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/groups`, data: data });
  }
  /**
   * Page nondeleted items after authorizing their base. Status, kind, link identifiers and slug/kind search apply; shared group filter is ignored.
   * Calls `GET /api/v1/knowledge-bases/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListItemsGet(id: Identifier, params?: T.RoutesListItemsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/items`, params });
  }
  /**
   * Create a draft item in an authorized group. Importance, validity and linked service/entity fields are validated; returns 201.
   * Calls `POST /api/v1/knowledge-bases/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateItemPost(id: Identifier, data: T.RoutesCreateItemPostInput, options?: RequestOptions<T.RoutesCreateItemPostInput>) {
    return this.client.request<T.RoutesCreateItemPostResponse, T.RoutesCreateItemPostInput>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/items`, data: data });
  }
  /**
   * Publish an immutable release snapshot of complete authorized content and update the base release pointer transactionally. Invalid content fails with 400.
   * Calls `POST /api/v1/knowledge-bases/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:publish.
   */
  routesPublishPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesPublishPostResponse>({ ...options, method: "POST", url: `/api/v1/knowledge-bases/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Read an immutable release after authorizing its base. The base ownership check also rejects missing or deleted bases.
   * Calls `GET /api/v1/knowledge-releases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesGetReleaseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetReleaseGetResponse>({ ...options, method: "GET", url: `/api/v1/knowledge-releases/${encodeURIComponent(id)}` });
  }
  /**
   * Search nondeleted rules across all owned active bases before stable priority/ID pagination. Base, group, enabled and localized name/slug filters apply.
   * Calls `GET /api/v1/match-rules` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  routesListRulesGet(params?: T.RoutesListRulesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListRulesGetResponse>({ ...options, method: "GET", url: `/api/v1/match-rules`, params });
  }
  /**
   * Create a rule with validated base/group relationship and conditions; outcomes retain their extensible JSON shape. Returns 201.
   * Calls `POST /api/v1/match-rules` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  routesCreateRulePost(data: T.RoutesCreateRulePostInput, options?: RequestOptions<T.RoutesCreateRulePostInput>) {
    return this.client.request<T.RoutesCreateRulePostResponse, T.RoutesCreateRulePostInput>({ ...options, method: "POST", url: `/api/v1/match-rules`, data: data });
  }
  /**
   * Soft-delete an authorized match rule and record editor audit transactionally; returns 204.
   * Calls `DELETE /api/v1/match-rules/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:delete.
   */
  routesDeleteRuleDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteRuleDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/match-rules/${encodeURIComponent(id)}` });
  }
  /**
   * Update a rule after locked base ownership and group validation. Optional expected_version returns 409 for stale edits.
   * Calls `PUT /api/v1/match-rules/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:memory:write.
   */
  platformReplayMemoryOutboxPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformReplayMemoryOutboxPostResponse>({ ...options, method: "POST", url: `/api/v1/memory-outbox/${encodeURIComponent(id)}/replay` });
  }
  /**
   * List bounded current subjects with literal profile/identity search, type/status/enabled filters and stable pagination. Return separate nullable overrides, effective policy, actual counts, server capabilities and captured revision; only the bounded Profile identity allowlist is returned.
   * Calls `GET /api/v1/memory-subjects` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:memory:read; current organization/subject predicates on every read.
   */
  platformListMemorySubjectsGet(params?: T.PlatformListMemorySubjectsGetQuery, options?: RequestOptions) {
    return this.client.request<T.PlatformListMemorySubjectsGetResponse>({ ...options, method: "GET", url: `/api/v1/memory-subjects`, params });
  }
  /**
   * Atomically fence selected short/long or full subject scope and update current records/counters/audit.204 confirms commit. Original Chat conversations and retained physical copies remain separate service-owned actions.
   * Calls `DELETE /api/v1/memory-subjects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current authenticated subject owner OR scoped knowledge:memory:delete; common transactional scope fence/audit.
   */
  platformClearMemorySubjectDelete(id: Identifier, params?: T.PlatformClearMemorySubjectDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.PlatformClearMemorySubjectDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/memory-subjects/${encodeURIComponent(id)}`, params });
  }
  /**
   * Read one currently authorized subject by ID. Foreign and absent tenant records return404; response separates raw nullable overrides from effective policy and provides the reviewed policy revision.
   * Calls `GET /api/v1/memory-subjects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:memory:read; current organization/subject predicates on every read.
   */
  platformMemorySubjectGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformMemorySubjectGetResponse>({ ...options, method: "GET", url: `/api/v1/memory-subjects/${encodeURIComponent(id)}` });
  }
  /**
   * Read paginated authorized audit identifiers/actions/actors/dates. Retained before/after payloads and free-text reasons are excluded to prevent forgotten content reappearing through audit.
   * Calls `GET /api/v1/memory-subjects/{id}/audit-events` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:memory:read; current organization/subject predicates on every read.
   */
  platformMemoryAuditGet(id: Identifier, params?: T.PlatformMemoryAuditGetQuery, options?: RequestOptions) {
    return this.client.request<T.PlatformMemoryAuditGetResponse>({ ...options, method: "GET", url: `/api/v1/memory-subjects/${encodeURIComponent(id)}/audit-events`, params });
  }
  /**
   * Apply an explicit correction UUID with1–32 reviewed active target IDs, an8192-byte statement and500-byte reason. Complete conflict-set CAS, immutable replay receipt and evidence/audit share one transaction;409 must never be automatically rebased.
   * Calls `POST /api/v1/memory-subjects/{id}/corrections` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:memory:write AND current authenticated subject owner; active permitted long memory policy.
   */
  platformCorrectMemoryPost(id: Identifier, data: T.PlatformCorrectMemoryPostInput, options?: RequestOptions<T.PlatformCorrectMemoryPostInput>) {
    return this.client.request<T.PlatformCorrectMemoryPostResponse, T.PlatformCorrectMemoryPostInput>({ ...options, method: "POST", url: `/api/v1/memory-subjects/${encodeURIComponent(id)}/corrections`, data: data });
  }
  /**
   * Read1–200 atomic records with allowlisted type/lifecycle filters and deterministic pages. Expired/forgotten content is redacted. Text, JSON fact values and provenance references are bounded; no embedding/raw metadata payload is exposed.
   * Calls `GET /api/v1/memory-subjects/{id}/memories` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:memory:read; current organization/subject predicates on every read.
   */
  platformListMemoriesGet(id: Identifier, params?: T.PlatformListMemoriesGetQuery, options?: RequestOptions) {
    return this.client.request<T.PlatformListMemoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/memory-subjects/${encodeURIComponent(id)}/memories`, params });
  }
  /**
   * Set nullable personal overrides using a captured revision. Null/missing values reset under PUT semantics. Policy/override/epoch change makes the revision stale;409 commits no state or audit. Response is a safe current subject projection. Assistant disabled lanes are hard ceilings even when the legacy widening flag is true.
   * Calls `PUT /api/v1/memory-subjects/{id}/policy` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current authenticated subject owner OR scoped knowledge:memory:write; captured expected_revision and current policy rules.
   */
  platformSetMemoryOverridePut(id: Identifier, data: T.PlatformSetMemoryOverridePutInput, options?: RequestOptions<T.PlatformSetMemoryOverridePutInput>) {
    return this.client.request<T.PlatformSetMemoryOverridePutResponse, T.PlatformSetMemoryOverridePutInput>({ ...options, method: "PUT", url: `/api/v1/memory-subjects/${encodeURIComponent(id)}/policy`, data: data });
  }
  /**
   * Forget one authorized retained memory row atomically with counters/audit. This does not certify source-family tombstones or erasure of associated conversation projections.
   * Calls `DELETE /api/v1/memory-subjects/{subject_id}/memories/{memory_id}` through the shared IDP-aware Faiber client.
   * @param subjectId Backend path identifier `subject_id`.
   * @param memoryId Backend path identifier `memory_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: current authenticated subject owner OR scoped knowledge:memory:delete.
   */
  platformForgetMemoryDelete(subjectId: Identifier, memoryId: Identifier, params?: T.PlatformForgetMemoryDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.PlatformForgetMemoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/memory-subjects/${encodeURIComponent(subjectId)}/memories/${encodeURIComponent(memoryId)}`, params });
  }
  /**
   * Read one memory using organization AND subject AND memory predicates. Forgotten/expired record text, fact values, confidence and evidence are redacted, including a forgotten parent subject.
   * Calls `GET /api/v1/memory-subjects/{subject_id}/memories/{memory_id}` through the shared IDP-aware Faiber client.
   * @param subjectId Backend path identifier `subject_id`.
   * @param memoryId Backend path identifier `memory_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:memory:read; current organization/subject predicates on every read.
   */
  platformMemoryRecordGet(subjectId: Identifier, memoryId: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformMemoryRecordGetResponse>({ ...options, method: "GET", url: `/api/v1/memory-subjects/${encodeURIComponent(subjectId)}/memories/${encodeURIComponent(memoryId)}` });
  }
  /**
   * Remove only current-organization assistant policy cache entries and return their count after audit.
   * Calls `POST /api/v1/platform/cache/invalidate` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformInvalidatePolicyCachePost(options?: RequestOptions) {
    return this.client.request<T.PlatformInvalidatePolicyCachePostResponse>({ ...options, method: "POST", url: `/api/v1/platform/cache/invalidate` });
  }
  /**
   * Read scoped base/recommender summaries and full assistant policies with enabled binding IDs. This is an inventory, not an authorization grant.
   * Calls `GET /api/v1/platform/catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformCatalogGet(options?: RequestOptions) {
    return this.client.request<T.PlatformCatalogGetResponse>({ ...options, method: "GET", url: `/api/v1/platform/catalog` });
  }
  /**
   * List converter registry capabilities, configuration requirements and reported health. Registry availability does not certify that a worker executed a job.
   * Calls `GET /api/v1/platform/converters` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformConvertersGet(options?: RequestOptions) {
    return this.client.request<T.PlatformConvertersGetResponse>({ ...options, method: "GET", url: `/api/v1/platform/converters` });
  }
  /**
   * Read scoped inventories and last-24-hour retrieval aggregates. Metrics are null without traces; ready is not proof of every external dependency.
   * Calls `GET /api/v1/platform/status` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformStatusGet(options?: RequestOptions) {
    return this.client.request<T.PlatformStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/platform/status` });
  }
  /**
   * List up to 500 current-organization processing job rows by latest update; counters and queued status do not certify execution.
   * Calls `GET /api/v1/processing-jobs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformProcessingJobsGet(options?: RequestOptions) {
    return this.client.request<T.PlatformProcessingJobsGetResponse>({ ...options, method: "GET", url: `/api/v1/processing-jobs` });
  }
  /**
   * Request cancellation of a scoped job. Queued/retry jobs become cancelled immediately; processing work retains status until worker acknowledgement.
   * Calls `POST /api/v1/processing-jobs/{id}/cancel` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformCancelProcessingJobPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformCancelProcessingJobPostResponse>({ ...options, method: "POST", url: `/api/v1/processing-jobs/${encodeURIComponent(id)}/cancel` });
  }
  /**
   * Requeue a failed, dead-letter, retry or cancelled job with a new attempt lifecycle after scoped locks and duplicate-work checks. Ineligible jobs conflict.
   * Calls `POST /api/v1/processing-jobs/{id}/retry` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformRetryProcessingJobPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformRetryProcessingJobPostResponse>({ ...options, method: "POST", url: `/api/v1/processing-jobs/${encodeURIComponent(id)}/retry` });
  }
  /**
   * List scoped recommender groups with their items ordered by sort order; this is an unpaginated nested inventory.
   * Calls `GET /api/v1/recommender-groups` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformListRecommendersGet(options?: RequestOptions) {
    return this.client.request<T.PlatformListRecommendersGetResponse>({ ...options, method: "GET", url: `/api/v1/recommender-groups` });
  }
  /**
   * Create a current-organization recommender group with max_results clamped to 1–50; returns 201.
   * Calls `POST /api/v1/recommender-groups` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformCreateRecommenderGroupPost(data: T.PlatformCreateRecommenderGroupPostInput, options?: RequestOptions<T.PlatformCreateRecommenderGroupPostInput>) {
    return this.client.request<T.PlatformCreateRecommenderGroupPostResponse, T.PlatformCreateRecommenderGroupPostInput>({ ...options, method: "POST", url: `/api/v1/recommender-groups`, data: data });
  }
  /**
   * Create an item only inside a current-organization recommender group; missing or foreign groups return 404 and success returns 201.
   * Calls `POST /api/v1/recommender-groups/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformCreateRecommenderItemPost(id: Identifier, data: T.PlatformCreateRecommenderItemPostInput, options?: RequestOptions<T.PlatformCreateRecommenderItemPostInput>) {
    return this.client.request<T.PlatformCreateRecommenderItemPostResponse, T.PlatformCreateRecommenderItemPostInput>({ ...options, method: "POST", url: `/api/v1/recommender-groups/${encodeURIComponent(id)}/items`, data: data });
  }
  /**
   * Read authoritative applied/cancelled operation outcome after waiting for concurrent configuration writers. Absence is404, never inferred success.
   * Calls `GET /api/v1/runtime/assistants/{assistant_id}/configuration-operations/{operation_id}` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param operationId Backend path identifier `operation_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write; current tenant and assistant.
   */
  platformAssistantConfigurationOperationGet(assistantId: Identifier, operationId: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformAssistantConfigurationOperationGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/configuration-operations/${encodeURIComponent(operationId)}` });
  }
  /**
   * Write an immutable cancellation tombstone with a bounded reason before releasing a pending Chat fence. Delayed original delivery conflicts. Applied configurations require recovery and cannot be cancelled as absent.
   * Calls `POST /api/v1/runtime/assistants/{assistant_id}/configuration-operations/{operation_id}` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param operationId Backend path identifier `operation_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write; current authorized administration.
   */
  platformCancelAssistantConfigurationOperationPost(assistantId: Identifier, operationId: Identifier, data: T.PlatformCancelAssistantConfigurationOperationPostInput, options?: RequestOptions<T.PlatformCancelAssistantConfigurationOperationPostInput>) {
    return this.client.request<T.PlatformCancelAssistantConfigurationOperationPostResponse, T.PlatformCancelAssistantConfigurationOperationPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/configuration-operations/${encodeURIComponent(operationId)}`, data: data });
  }
  /**
   * Capture the current assistant policy revision at edit time. Zero denotes absent policy. Never fetch a fresh revision to rebase a stale submission.
   * Calls `GET /api/v1/runtime/assistants/{assistant_id}/configure` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write; current tenant.
   */
  platformAssistantConfigurationSnapshotGet(assistantId: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformAssistantConfigurationSnapshotGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/configure` });
  }
  /**
   * Apply a non-nil configuration UUID with the captured policy revision. Policy, history, bindings, epochs, audit and exact operation outcome share one transaction. Identical original-actor replay returns the immutable result without duplicate epoch changes; cancelled or changed requests conflict.
   * Calls `PUT /api/v1/runtime/assistants/{assistant_id}/configure` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write; current tenant and immutable operation actor.
   */
  platformConfigureAssistantPut(assistantId: Identifier, data: T.PlatformConfigureAssistantPutInput, options?: RequestOptions<T.PlatformConfigureAssistantPutInput>) {
    return this.client.request<T.PlatformConfigureAssistantPutResponse, T.PlatformConfigureAssistantPutInput>({ ...options, method: "PUT", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/configure`, data: data });
  }
  /**
   * Load complete assistant contract records from enabled bindings and immutable releases. Shared dependencies are pinned; absent/incomplete/ambiguous contracts fail.
   * Calls `GET /api/v1/runtime/assistants/{assistant_id}/contracts/{slug}` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param slug Backend path identifier `slug`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  routesGetGet(assistantId: Identifier, slug: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/contracts/${encodeURIComponent(slug)}` });
  }
  /**
   * Run the canonical assistant retrieval pipeline with evaluation surface metadata under the same governance.
   * Calls `POST /api/v1/runtime/assistants/{assistant_id}/evaluations` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  platformEvaluateAssistantPost(assistantId: Identifier, data: T.PlatformEvaluateAssistantPostInput, options?: RequestOptions<T.PlatformEvaluateAssistantPostInput>) {
    return this.client.request<T.PlatformEvaluateAssistantPostResponse, T.PlatformEvaluateAssistantPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/evaluations`, data: data });
  }
  /**
   * Admit an idempotent assistant turn into the memory outbox under current policy and scope epochs. HTTP 202 can return queued:false; it does not certify extraction.
   * Calls `POST /api/v1/runtime/assistants/{assistant_id}/memory/turn` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformRecordTurnPost(assistantId: Identifier, data: T.PlatformRecordTurnPostInput, options?: RequestOptions<T.PlatformRecordTurnPostInput>) {
    return this.client.request<T.PlatformRecordTurnPostResponse, T.PlatformRecordTurnPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/memory/turn`, data: data });
  }
  /**
   * Run the canonical assistant retrieval pipeline with preview surface metadata under the same governance.
   * Calls `POST /api/v1/runtime/assistants/{assistant_id}/preview` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  platformPreviewAssistantPost(assistantId: Identifier, data: T.PlatformPreviewAssistantPostInput, options?: RequestOptions<T.PlatformPreviewAssistantPostInput>) {
    return this.client.request<T.PlatformPreviewAssistantPostResponse, T.PlatformPreviewAssistantPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/preview`, data: data });
  }
  /**
   * Run governed assistant retrieval with policy ceilings, scoped provider evidence and context delivery tracking. A missing policy returns explicit empty context.
   * Calls `POST /api/v1/runtime/assistants/{assistant_id}/query` through the shared IDP-aware Faiber client.
   * @param assistantId Backend path identifier `assistant_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformQueryAssistantPost(assistantId: Identifier, data: T.PlatformQueryAssistantPostInput, options?: RequestOptions<T.PlatformQueryAssistantPostInput>) {
    return this.client.request<T.PlatformQueryAssistantPostResponse, T.PlatformQueryAssistantPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/assistants/${encodeURIComponent(assistantId)}/query`, data: data });
  }
  /**
   * Resolve a chat binding through immutable published knowledge and evaluate profile rules. Binding scope, levels, conditions and context budgets apply.
   * Calls `POST /api/v1/runtime/chat/{chat_slug}/query` through the shared IDP-aware Faiber client.
   * @param chatSlug Backend path identifier `chat_slug`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  routesRuntimeQueryPost(chatSlug: Identifier, data: T.RoutesRuntimeQueryPostInput, options?: RequestOptions<T.RoutesRuntimeQueryPostInput>) {
    return this.client.request<T.RoutesRuntimeQueryPostResponse, T.RoutesRuntimeQueryPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/chat/${encodeURIComponent(chatSlug)}/query`, data: data });
  }
  /**
   * Read complete indexed nondeleted document evidence in the current organization; missing or unindexed documents return 404.
   * Calls `GET /api/v1/runtime/evidence/documents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformDocumentEvidenceGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformDocumentEvidenceGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/evidence/documents/${encodeURIComponent(id)}` });
  }
  /**
   * Read active session evidence for the authenticated owner or participant. A current user is required even with session:read:all; inaccessible evidence returns 404.
   * Calls `GET /api/v1/runtime/evidence/session/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformSessionEvidenceGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformSessionEvidenceGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/evidence/session/${encodeURIComponent(id)}` });
  }
  /**
   * Execute JSON-RPC initialize, tools/list or tools/call through the governed pipeline. JSON-RPC errors may use HTTP 200; inspect result/error before claiming success.
   * Calls `POST /api/v1/runtime/mcp` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformMcpPost(data: T.PlatformMcpPostInput, options?: RequestOptions<T.PlatformMcpPostInput>) {
    return this.client.request<T.PlatformMcpPostResponse, T.PlatformMcpPostInput>({ ...options, method: "POST", url: `/api/v1/runtime/mcp`, data: data });
  }
  /**
   * Attach nonnegative provider token usage and nullable cost to a scoped retrieval trace. Missing or foreign trace IDs return 404.
   * Calls `POST /api/v1/runtime/retrieval-traces/{id}/usage` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:runtime.
   */
  platformRecordRetrievalUsagePost(id: Identifier, data: T.PlatformRecordRetrievalUsagePostInput, options?: RequestOptions<T.PlatformRecordRetrievalUsagePostInput>) {
    return this.client.request<T.PlatformRecordRetrievalUsagePostResponse, T.PlatformRecordRetrievalUsagePostInput>({ ...options, method: "POST", url: `/api/v1/runtime/retrieval-traces/${encodeURIComponent(id)}/usage`, data: data });
  }
  /**
   * Read the query_knowledge JSON Schema. This descriptive route has no handler permission guard; transport still uses the configured shared client.
   * Calls `GET /api/v1/runtime/tool-schema` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesToolSchemaGet(options?: RequestOptions) {
    return this.client.request<T.RoutesToolSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/runtime/tool-schema` });
  }
  /**
   * List current-organization governed sources by latest update, including source version and configuration.
   * Calls `GET /api/v1/sources` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:read.
   */
  platformListSourcesGet(options?: RequestOptions) {
    return this.client.request<T.PlatformListSourcesGetResponse>({ ...options, method: "GET", url: `/api/v1/sources` });
  }
  /**
   * Create a source under a locked owned base. Validate source kind, slug and secret references; returns 201 without executing synchronization.
   * Calls `POST /api/v1/sources` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformCreateSourcePost(data: T.PlatformCreateSourcePostInput, options?: RequestOptions<T.PlatformCreateSourcePostInput>) {
    return this.client.request<T.PlatformCreateSourcePostResponse, T.PlatformCreateSourcePostInput>({ ...options, method: "POST", url: `/api/v1/sources`, data: data });
  }
  /**
   * Set active/paused desired source state under the captured expected_version. Stale intent conflicts; already-desired state is unchanged.
   * Calls `POST /api/v1/sources/{id}/pause` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformPauseSourcePost(id: Identifier, data: T.PlatformPauseSourcePostInput, options?: RequestOptions<T.PlatformPauseSourcePostInput>) {
    return this.client.request<T.PlatformPauseSourcePostResponse, T.PlatformPauseSourcePostInput>({ ...options, method: "POST", url: `/api/v1/sources/${encodeURIComponent(id)}/pause`, data: data });
  }
  /**
   * Persist or reuse a scoped source-sync job and return 202 with its real job ID. This receipt does not certify an available executor.
   * Calls `POST /api/v1/sources/{id}/sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: knowledge:write.
   */
  platformSyncSourcePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlatformSyncSourcePostResponse>({ ...options, method: "POST", url: `/api/v1/sources/${encodeURIComponent(id)}/sync` });
  }
  /**
   * Read database readiness with commit/version. HTTP 503 returns the same success envelope with degraded status; Axios rejects by default.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  mainReadinessGetHealth(options?: RequestOptions) {
    return this.client.request<T.MainReadinessGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Read process liveness and package version. This does not check database or worker readiness.
   * Calls `GET /health/live` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  mainLivenessGet(options?: RequestOptions) {
    return this.client.request<T.MainLivenessGetResponse>({ ...options, method: "GET", url: `/health/live` });
  }
  /**
   * Read database readiness with commit/version. HTTP 503 returns the same success envelope with degraded status; Axios rejects by default.
   * Calls `GET /health/ready` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  mainReadinessGetHealthReady(options?: RequestOptions) {
    return this.client.request<T.MainReadinessGetHealthReadyResponse>({ ...options, method: "GET", url: `/health/ready` });
  }
  /**
   * Convert a 1–25,000,000-byte source using trusted Task authority and x-organization-id. The body is binary, not JSON or multipart.
   * Calls `POST /internal/task-conversions` through the shared IDP-aware Faiber client.
   * @param data Typed binary byte stream.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted Task authority token in x-task-projection-token plus x-organization-id; server only.
   */
  mainConvertPost(data: T.MainConvertPostInput, options?: RequestOptions<T.MainConvertPostInput>) {
    return this.client.request<T.MainConvertPostResponse, T.MainConvertPostInput>({ ...options, method: "POST", url: `/internal/task-conversions`, data: data, headers: { "Content-Type": "application/octet-stream", ...options?.headers } });
  }
  /**
   * Find at most 100 projected Task note identities within 1–10 allowed project IDs and a query of at most 2000 characters. Requires trusted Task authority.
   * Calls `POST /internal/task-projections/candidates` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted Task authority token in x-task-projection-token plus x-organization-id; server only.
   */
  taskProjectionsCandidatesPost(data: T.TaskProjectionsCandidatesPostInput, options?: RequestOptions<T.TaskProjectionsCandidatesPostInput>) {
    return this.client.request<T.TaskProjectionsCandidatesPostResponse, T.TaskProjectionsCandidatesPostInput>({ ...options, method: "POST", url: `/internal/task-projections/candidates`, data: data });
  }
  /**
   * Retrieve passages for an authorized note/version manifest with at most 100 sources. Requires trusted Task authority; stale/deleted versions are excluded.
   * Calls `POST /internal/task-projections/passages` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted Task authority token in x-task-projection-token plus x-organization-id; server only.
   */
  taskProjectionsPassagesPost(data: T.TaskProjectionsPassagesPostInput, options?: RequestOptions<T.TaskProjectionsPassagesPostInput>) {
    return this.client.request<T.TaskProjectionsPassagesPostResponse, T.TaskProjectionsPassagesPostInput>({ ...options, method: "POST", url: `/internal/task-projections/passages`, data: data });
  }
  /**
   * Upsert a projected Task note under trusted Task authority. Lower or conflicting same versions return 409; exact replays are idempotent.
   * Calls `POST /internal/task-projections/sync` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted Task authority token in x-task-projection-token plus x-organization-id; server only.
   */
  taskProjectionsSyncPost(data: T.TaskProjectionsSyncPostInput, options?: RequestOptions<T.TaskProjectionsSyncPostInput>) {
    return this.client.request<T.TaskProjectionsSyncPostResponse, T.TaskProjectionsSyncPostInput>({ ...options, method: "POST", url: `/internal/task-projections/sync`, data: data });
  }
}
