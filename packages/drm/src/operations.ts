import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";
function wildcardPath(path: Identifier): string {
  const parts = String(path).split("/");
  if (parts.some(part => !part || part === "." || part === ".." || /[%?#\\]/.test(part))) throw new TypeError("Wildcard paths require nonempty raw segments without dot traversal, percent escapes, query, fragment or backslash");
  return parts.map(part => encodeURIComponent(part)).join("/");
}

export class DrmOperations extends ServiceApi {
  /**
   * Page audit events descending created_at; defaults page1,size50, clamps1..100; from/to inclusive timestamps.
   * Calls `GET /api/v1/audit-events` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:audit:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerAuditEventsGet(params?: T.RouterAuditEventsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterAuditEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/audit-events`, params });
  }
  /**
   * Page composition analyses with search/status/time filters; defaults page1,size20 with size clamped1..100.
   * Calls `GET /api/v1/composition-analyses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListAnalysesGet(params?: T.RouterListAnalysesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListAnalysesGetResponse>({ ...options, method: "GET", url: `/api/v1/composition-analyses`, params });
  }
  /**
   * List composition categories. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/composition-categories` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListCompositionCategoriesGet(options?: RequestOptions) {
    return this.client.request<T.RouterListCompositionCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/composition-categories` });
  }
  /**
   * Create composition category. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `POST /api/v1/composition-categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateCompositionCategoryPost(data: T.RouterCreateCompositionCategoryPostInput, options?: RequestOptions<T.RouterCreateCompositionCategoryPostInput>) {
    return this.client.request<T.RouterCreateCompositionCategoryPostResponse, T.RouterCreateCompositionCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/composition-categories`, data: data });
  }
  /**
   * Delete composition category. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `DELETE /api/v1/composition-categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerDeleteCompositionCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteCompositionCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/composition-categories/${encodeURIComponent(id)}` });
  }
  /**
   * Update composition category. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `PATCH /api/v1/composition-categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdateCompositionCategoryPatch(id: Identifier, data: T.RouterUpdateCompositionCategoryPatchInput, options?: RequestOptions<T.RouterUpdateCompositionCategoryPatchInput>) {
    return this.client.request<T.RouterUpdateCompositionCategoryPatchResponse, T.RouterUpdateCompositionCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/composition-categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Page compositions by updated time descending; defaults page1,size20 (clamps1..100). uncategorized=true overrides category_id; category filter includes descendants; search matches name/description.
   * Calls `GET /api/v1/compositions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListCompositionsGet(params?: T.RouterListCompositionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListCompositionsGetResponse>({ ...options, method: "GET", url: `/api/v1/compositions`, params });
  }
  /**
   * Create composition. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `POST /api/v1/compositions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateCompositionPost(data: T.RouterCreateCompositionPostInput, options?: RequestOptions<T.RouterCreateCompositionPostInput>) {
    return this.client.request<T.RouterCreateCompositionPostResponse, T.RouterCreateCompositionPostInput>({ ...options, method: "POST", url: `/api/v1/compositions`, data: data });
  }
  /**
   * List manifests. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/compositions/{id}/manifests` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListManifestsGetApiV1CompositionsIdManifests(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListManifestsGetApiV1CompositionsIdManifestsResponse>({ ...options, method: "GET", url: `/api/v1/compositions/${encodeURIComponent(id)}/manifests` });
  }
  /**
   * Store caller-supplied historical JSON document and increment composition manifest version. Existing explicit manifest ID returns200, otherwise201.
   * Calls `POST /api/v1/compositions/{id}/manifests` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateManifestVersionPost(id: Identifier, data: T.RouterCreateManifestVersionPostInput, options?: RequestOptions<T.RouterCreateManifestVersionPostInput>) {
    return this.client.request<T.RouterCreateManifestVersionPostResponse, T.RouterCreateManifestVersionPostInput>({ ...options, method: "POST", url: `/api/v1/compositions/${encodeURIComponent(id)}/manifests`, data: data });
  }
  /**
   * Validate a nonempty, singly started, connected acyclic workflow and ready video references, then create versioned manifest201. Referenced unarchived items may come from other libraries; launches Knowledge sync/optional analysis.
   * Calls `POST /api/v1/compositions/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerPublishPostApiV1CompositionsIdPublish(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPublishPostApiV1CompositionsIdPublishResponse>({ ...options, method: "POST", url: `/api/v1/compositions/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Get workflow. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/compositions/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetWorkflowGetApiV1CompositionsIdWorkflow(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetWorkflowGetApiV1CompositionsIdWorkflowResponse>({ ...options, method: "GET", url: `/api/v1/compositions/${encodeURIComponent(id)}/workflow` });
  }
  /**
   * Replace nodes and edges arrays and increment revision; returns400 if either is not an array. Node data remains editor-defined JSON.
   * Calls `PUT /api/v1/compositions/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerSaveWorkflowPutApiV1CompositionsIdWorkflow(id: Identifier, data: T.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput, options?: RequestOptions<T.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput>) {
    return this.client.request<T.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowResponse, T.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput>({ ...options, method: "PUT", url: `/api/v1/compositions/${encodeURIComponent(id)}/workflow`, data: data });
  }
  /**
   * Read global media/content/package counts and latest10 updated jobs.
   * Calls `GET /api/v1/dashboard/summary` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerDashboardGet(options?: RequestOptions) {
    return this.client.request<T.RouterDashboardGetResponse>({ ...options, method: "GET", url: `/api/v1/dashboard/summary` });
  }
  /**
   * Page DRM jobs newest first; defaults page1,size30 (clamps1..100); status/media_id/from/to filters combine. Response flattens job and adds media_name/media_type.
   * Calls `GET /api/v1/drm/jobs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListJobsGet(params?: T.RouterListJobsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListJobsGetResponse>({ ...options, method: "GET", url: `/api/v1/drm/jobs`, params });
  }
  /**
   * Enqueue video packaging (audio/image400); deduplicate existing queued/processing/retrying job; full config defaults true/true/true/false; returns202.
   * Calls `POST /api/v1/drm/jobs` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateJobPost(data: T.RouterCreateJobPostInput, options?: RequestOptions<T.RouterCreateJobPostInput>) {
    return this.client.request<T.RouterCreateJobPostResponse, T.RouterCreateJobPostInput>({ ...options, method: "POST", url: `/api/v1/drm/jobs`, data: data });
  }
  /**
   * Cancel active job and update package/media transactionally; finished job400; success204.
   * Calls `DELETE /api/v1/drm/jobs/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCancelJobDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterCancelJobDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/drm/jobs/${encodeURIComponent(id)}` });
  }
  /**
   * Retry failed/cancelled job, optionally replacing config (undefined omits body); other states400. Resets package/media and queue state transactionally.
   * Calls `POST /api/v1/drm/jobs/{id}/retry` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerRetryJobPost(id: Identifier, data: T.RouterRetryJobPostInput, options?: RequestOptions<T.RouterRetryJobPostInput>) {
    return this.client.request<T.RouterRetryJobPostResponse, T.RouterRetryJobPostInput>({ ...options, method: "POST", url: `/api/v1/drm/jobs/${encodeURIComponent(id)}/retry`, data: data });
  }
  /**
   * Retry only newest failed job per media and skip any media with active work; returns count.
   * Calls `POST /api/v1/drm/jobs/actions/retry-failed` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerRetryAllFailedPost(options?: RequestOptions) {
    return this.client.request<T.RouterRetryAllFailedPostResponse>({ ...options, method: "POST", url: `/api/v1/drm/jobs/actions/retry-failed` });
  }
  /**
   * List external references. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/external-references` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListExternalReferencesGet(params?: T.RouterListExternalReferencesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListExternalReferencesGetResponse>({ ...options, method: "GET", url: `/api/v1/external-references`, params });
  }
  /**
   * Create external mapping or return existing identical mapping; conflicting internal target409; existing metadata is preserved.
   * Calls `POST /api/v1/external-references` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpsertExternalReferencePost(data: T.RouterUpsertExternalReferencePostInput, options?: RequestOptions<T.RouterUpsertExternalReferencePostInput>) {
    return this.client.request<T.RouterUpsertExternalReferencePostResponse, T.RouterUpsertExternalReferencePostInput>({ ...options, method: "POST", url: `/api/v1/external-references`, data: data });
  }
  /**
   * List folders. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/folders` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListFoldersGet(options?: RequestOptions) {
    return this.client.request<T.RouterListFoldersGetResponse>({ ...options, method: "GET", url: `/api/v1/folders` });
  }
  /**
   * Create folder. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `POST /api/v1/folders` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateFolderPost(data: T.RouterCreateFolderPostInput, options?: RequestOptions<T.RouterCreateFolderPostInput>) {
    return this.client.request<T.RouterCreateFolderPostResponse, T.RouterCreateFolderPostInput>({ ...options, method: "POST", url: `/api/v1/folders`, data: data });
  }
  /**
   * Delete folder. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `DELETE /api/v1/folders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerDeleteFolderDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteFolderDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/folders/${encodeURIComponent(id)}` });
  }
  /**
   * Update folder. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `PATCH /api/v1/folders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdateFolderPatch(id: Identifier, data: T.RouterUpdateFolderPatchInput, options?: RequestOptions<T.RouterUpdateFolderPatchInput>) {
    return this.client.request<T.RouterUpdateFolderPatchResponse, T.RouterUpdateFolderPatchInput>({ ...options, method: "PATCH", url: `/api/v1/folders/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List only public libraries ordered by name; direct get by ID can read private libraries with route permission.
   * Calls `GET /api/v1/libraries` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:library:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListLibrariesGet(options?: RequestOptions) {
    return this.client.request<T.RouterListLibrariesGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries` });
  }
  /**
   * Create public/private library; defaults public/active; blank name400. Existing explicit ID200, new201.
   * Calls `POST /api/v1/libraries` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:library:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateLibraryPost(data: T.RouterCreateLibraryPostInput, options?: RequestOptions<T.RouterCreateLibraryPostInput>) {
    return this.client.request<T.RouterCreateLibraryPostResponse, T.RouterCreateLibraryPostInput>({ ...options, method: "POST", url: `/api/v1/libraries`, data: data });
  }
  /**
   * Permanently delete library, categories, items, compositions and linked external references transactionally; requires dedicated library delete permission; success204.
   * Calls `DELETE /api/v1/libraries/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:library:delete (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerDeleteLibraryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteLibraryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/libraries/${encodeURIComponent(id)}` });
  }
  /**
   * Get library. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/libraries/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:library:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetLibraryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetLibraryGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(id)}` });
  }
  /**
   * Replace library name/description and optionally status/visibility; description omitted clears; visibility only public/private.
   * Calls `PATCH /api/v1/libraries/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:library:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdateLibraryPatch(id: Identifier, data: T.RouterUpdateLibraryPatchInput, options?: RequestOptions<T.RouterUpdateLibraryPatchInput>) {
    return this.client.request<T.RouterUpdateLibraryPatchResponse, T.RouterUpdateLibraryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/libraries/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List categories. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/libraries/{id}/categories` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:library:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListCategoriesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(id)}/categories` });
  }
  /**
   * Create category; parent must be in the same library or mixed media scope. Returns201, or200 on an existing explicit generic category ID.
   * Calls `POST /api/v1/libraries/{id}/categories` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:library:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateCategoryPostApiV1LibrariesIdCategories(id: Identifier, data: T.RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput, options?: RequestOptions<T.RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput>) {
    return this.client.request<T.RouterCreateCategoryPostApiV1LibrariesIdCategoriesResponse, T.RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput>({ ...options, method: "POST", url: `/api/v1/libraries/${encodeURIComponent(id)}/categories`, data: data });
  }
  /**
   * List items. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/libraries/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:content:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListItemsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(id)}/items` });
  }
  /**
   * Create reusable content; state must be Question/Task/Interactive/Game. Negative duration clamps0. rewards is accepted but stored as empty object. Explicit existing ID returns200, otherwise201.
   * Calls `POST /api/v1/libraries/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:content:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateItemPost(id: Identifier, data: T.RouterCreateItemPostInput, options?: RequestOptions<T.RouterCreateItemPostInput>) {
    return this.client.request<T.RouterCreateItemPostResponse, T.RouterCreateItemPostInput>({ ...options, method: "POST", url: `/api/v1/libraries/${encodeURIComponent(id)}/items`, data: data });
  }
  /**
   * Page unarchived library items by title; page1,size30,size clamps1..100. category_id includes descendants unless direct=true. errors=true finds missing/failed media; search filters title.
   * Calls `GET /api/v1/libraries/{id}/items/query` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:content:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerQueryItemsGet(id: Identifier, params?: T.RouterQueryItemsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterQueryItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(id)}/items/query`, params });
  }
  /**
   * Library stats. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/libraries/{id}/stats` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:library:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerLibraryStatsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterLibraryStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(id)}/stats` });
  }
  /**
   * Archive category descendants and contained content transactionally; returns204. Category must belong to path library.
   * Calls `DELETE /api/v1/libraries/{library_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:library:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerArchiveCategoryDelete(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterArchiveCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Replace title and parent; reject self-parent. Generic library route and mixed-media route enforce their respective parent scope.
   * Calls `PATCH /api/v1/libraries/{library_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:library:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesId(libraryId: Identifier, id: Identifier, data: T.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput, options?: RequestOptions<T.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput>) {
    return this.client.request<T.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdResponse, T.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput>({ ...options, method: "PATCH", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Archive item. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `DELETE /api/v1/libraries/{library_id}/items/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:content:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerArchiveItemDelete(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterArchiveItemDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}` });
  }
  /**
   * Read item by UUID. The pinned handler ignores library_id when fetching; callers must select the intended library and deployment authorization remains authoritative.
   * Calls `GET /api/v1/libraries/{library_id}/items/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:content:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetItemGet(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetItemGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}` });
  }
  /**
   * Replace item fields, checking path library. Negative duration clamps0; rewards is stored as empty object. Omitted optional members clear/reset corresponding fields.
   * Calls `PUT /api/v1/libraries/{library_id}/items/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:content:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdateItemPut(libraryId: Identifier, id: Identifier, data: T.RouterUpdateItemPutInput, options?: RequestOptions<T.RouterUpdateItemPutInput>) {
    return this.client.request<T.RouterUpdateItemPutResponse, T.RouterUpdateItemPutInput>({ ...options, method: "PUT", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Item attachments. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/libraries/{library_id}/items/{id}/attachments` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:content:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerItemAttachmentsGet(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterItemAttachmentsGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}/attachments` });
  }
  /**
   * Attach primary/hint media; is_current demotes prior current attachment in the slot and updates the item media pointer; position clamps0; existing link200, new201.
   * Calls `POST /api/v1/libraries/{library_id}/items/{id}/attachments` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:content:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerAttachMediaPost(libraryId: Identifier, id: Identifier, data: T.RouterAttachMediaPostInput, options?: RequestOptions<T.RouterAttachMediaPostInput>) {
    return this.client.request<T.RouterAttachMediaPostResponse, T.RouterAttachMediaPostInput>({ ...options, method: "POST", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}/attachments`, data: data });
  }
  /**
   * Read temporary ClearKey JWK document; package_id UUID required. Keep key material private and use authenticated shared transport.
   * Calls `GET /api/v1/licenses/clearkey` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:license:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerClearKeyLicenseGet(params: T.RouterClearKeyLicenseGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterClearKeyLicenseGetResponse>({ ...options, method: "GET", url: `/api/v1/licenses/clearkey`, params });
  }
  /**
   * Search name, description and matching tags, with media_type/folder_id/tag_id AND filters. Defaults page=1,size=30; size clamps1..100; newest created first.
   * Calls `GET /api/v1/media` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListMediaGet(params?: T.RouterListMediaGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/media`, params });
  }
  /**
   * Upload audio, video or image multipart file. Fields name/description/folder_id are text; tag_ids is JSON-encoded UUID array. Returns201; video queues packaging and optional transcription.
   * Calls `POST /api/v1/media` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUploadMediaPost(data: T.RouterUploadMediaPostInput, options?: RequestOptions<T.RouterUploadMediaPostInput>) {
    return this.client.request<T.RouterUploadMediaPostResponse, T.RouterUploadMediaPostInput>({ ...options, method: "POST", url: `/api/v1/media`, data: data });
  }
  /**
   * Delete metadata, original and package storage; attached content conflicts409; returns204.
   * Calls `DELETE /api/v1/media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerDeleteMediaDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteMediaDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/media/${encodeURIComponent(id)}` });
  }
  /**
   * Get media. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetMediaGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/media/${encodeURIComponent(id)}` });
  }
  /**
   * Patch supplied metadata and replace tag links when tag_ids is present. Plain Serde Option<Option<Uuid>> means folder_id:null is a no-op; description/duration null also preserve.
   * Calls `PATCH /api/v1/media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdateMediaPatch(id: Identifier, data: T.RouterUpdateMediaPatchInput, options?: RequestOptions<T.RouterUpdateMediaPatchInput>) {
    return this.client.request<T.RouterUpdateMediaPatchResponse, T.RouterUpdateMediaPatchInput>({ ...options, method: "PATCH", url: `/api/v1/media/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List packages. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/media/{id}/packages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListPackagesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListPackagesGetResponse>({ ...options, method: "GET", url: `/api/v1/media/${encodeURIComponent(id)}/packages` });
  }
  /**
   * Enqueue/deduplicate video packaging; JSON null selects default config; send null rather than an absent JSON body. Returns202 raw job without media_name/media_type.
   * Calls `POST /api/v1/media/{id}/packages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerRegeneratePost(id: Identifier, data: T.RouterRegeneratePostInput, options?: RequestOptions<T.RouterRegeneratePostInput>) {
    return this.client.request<T.RouterRegeneratePostResponse, T.RouterRegeneratePostInput>({ ...options, method: "POST", url: `/api/v1/media/${encodeURIComponent(id)}/packages`, data: data, headers: { "Content-Type": "application/json", ...options?.headers } });
  }
  /**
   * Return a900-second signed original-object URL, independent of package readiness. Archived media404; status alone does not hide the original.
   * Calls `GET /api/v1/media/{id}/playback` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerPlaybackGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPlaybackGetResponse>({ ...options, method: "GET", url: `/api/v1/media/${encodeURIComponent(id)}/playback` });
  }
  /**
   * Read deduplicated IDs in request order; at most the first50 unique IDs are used; missing IDs are omitted.
   * Calls `POST /api/v1/media/batch` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerBatchMediaPost(data: T.RouterBatchMediaPostInput, options?: RequestOptions<T.RouterBatchMediaPostInput>) {
    return this.client.request<T.RouterBatchMediaPostResponse, T.RouterBatchMediaPostInput>({ ...options, method: "POST", url: `/api/v1/media/batch`, data: data });
  }
  /**
   * Read effective video package/job states for comma-separated UUID ids (required). Invalid UUIDs ignored; at most500 unique IDs; ready package takes precedence; non-video not_applicable.
   * Calls `GET /api/v1/media/drm-statuses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerDrmStatusesGet(params: T.RouterDrmStatusesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterDrmStatusesGetResponse>({ ...options, method: "GET", url: `/api/v1/media/drm-statuses`, params });
  }
  /**
   * Archive package. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `DELETE /api/v1/media/packages/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerArchivePackageDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterArchivePackageDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/media/packages/${encodeURIComponent(id)}` });
  }
  /**
   * Register existing originals/ object (reject ..) after actual size verification; accepts audio/video/image. Existing ID returns200; new201; video queues DRM/transcription.
   * Calls `POST /api/v1/media/register` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerRegisterExistingMediaPost(data: T.RouterRegisterExistingMediaPostInput, options?: RequestOptions<T.RouterRegisterExistingMediaPostInput>) {
    return this.client.request<T.RouterRegisterExistingMediaPostResponse, T.RouterRegisterExistingMediaPostInput>({ ...options, method: "POST", url: `/api/v1/media/register`, data: data });
  }
  /**
   * List mixed media. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/mixed-media` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListMixedMediaGet(options?: RequestOptions) {
    return this.client.request<T.RouterListMixedMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media` });
  }
  /**
   * Create composition and revision1 workflow. Requires existing library/category; nonempty name; transcription_language auto/fa/en; defaults auto; returns201.
   * Calls `POST /api/v1/mixed-media` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateMixedMediaPost(data: T.RouterCreateMixedMediaPostInput, options?: RequestOptions<T.RouterCreateMixedMediaPostInput>) {
    return this.client.request<T.RouterCreateMixedMediaPostResponse, T.RouterCreateMixedMediaPostInput>({ ...options, method: "POST", url: `/api/v1/mixed-media`, data: data });
  }
  /**
   * Delete mixed media. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `DELETE /api/v1/mixed-media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerDeleteMixedMediaDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteMixedMediaDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/mixed-media/${encodeURIComponent(id)}` });
  }
  /**
   * Get mixed media. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/mixed-media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetMixedMediaGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetMixedMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}` });
  }
  /**
   * Patch composition. category_id:null explicitly clears category; omitted category preserves. Plain nested-Option description:null preserves at this pin. Language auto/fa/en; status draft/published/inactive.
   * Calls `PATCH /api/v1/mixed-media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdateMixedMediaPatch(id: Identifier, data: T.RouterUpdateMixedMediaPatchInput, options?: RequestOptions<T.RouterUpdateMixedMediaPatchInput>) {
    return this.client.request<T.RouterUpdateMixedMediaPatchResponse, T.RouterUpdateMixedMediaPatchInput>({ ...options, method: "PATCH", url: `/api/v1/mixed-media/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Return analysis or JSON null when no analysis/composition exists; errors other than not-found propagate.
   * Calls `GET /api/v1/mixed-media/{id}/analysis` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetAnalysisGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetAnalysisGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/analysis` });
  }
  /**
   * Queue composition analysis; body may be omitted (undefined) or supply language/force. Language override persists and requires auto/fa/en. Returns existing active work unless force applies; model/settings errors400.
   * Calls `POST /api/v1/mixed-media/{id}/analysis` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerStartAnalysisPost(id: Identifier, data: T.RouterStartAnalysisPostInput, options?: RequestOptions<T.RouterStartAnalysisPostInput>) {
    return this.client.request<T.RouterStartAnalysisPostResponse, T.RouterStartAnalysisPostInput>({ ...options, method: "POST", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/analysis`, data: data });
  }
  /**
   * Create category; parent must be in the same library or mixed media scope. Returns201, or200 on an existing explicit generic category ID.
   * Calls `POST /api/v1/mixed-media/{id}/categories` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateCategoryPostApiV1MixedMediaIdCategories(id: Identifier, data: T.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput, options?: RequestOptions<T.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput>) {
    return this.client.request<T.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesResponse, T.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput>({ ...options, method: "POST", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/categories`, data: data });
  }
  /**
   * Read persisted settings. Knowledge settings read creates default row for an existing composition; absent composition404. Operations settings require drm:manage.
   * Calls `GET /api/v1/mixed-media/{id}/knowledge-sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetSettingsGetApiV1MixedMediaIdKnowledgeSync(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetSettingsGetApiV1MixedMediaIdKnowledgeSyncResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/knowledge-sync` });
  }
  /**
   * Synchronize published composition using Knowledge broker; x-organization-id UUID required unless server default configured. Returns settings; disabled/missing configuration can reject.
   * Calls `POST /api/v1/mixed-media/{id}/knowledge-sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerSyncNowPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterSyncNowPostResponse>({ ...options, method: "POST", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/knowledge-sync` });
  }
  /**
   * Update operational or Knowledge settings. Operations package_concurrency1..16; enabled transcription requires speech and summary models. Knowledge enabled requires knowledge_base_id and organization context; starts immediate sync.
   * Calls `PUT /api/v1/mixed-media/{id}/knowledge-sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdateSettingsPut(id: Identifier, data: T.RouterUpdateSettingsPutInput, options?: RequestOptions<T.RouterUpdateSettingsPutInput>) {
    return this.client.request<T.RouterUpdateSettingsPutResponse, T.RouterUpdateSettingsPutInput>({ ...options, method: "PUT", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/knowledge-sync`, data: data });
  }
  /**
   * Get manifest. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/mixed-media/{id}/manifest` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetManifestGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetManifestGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/manifest` });
  }
  /**
   * List manifests. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/mixed-media/{id}/manifests` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListManifestsGetApiV1MixedMediaIdManifests(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListManifestsGetApiV1MixedMediaIdManifestsResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/manifests` });
  }
  /**
   * Create composition part; nonempty title, Question/Task/Interactive/Game state and nonnegative duration required; referenced media must exist. rewards is persisted empty; returns201.
   * Calls `POST /api/v1/mixed-media/{id}/parts` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreatePartPost(id: Identifier, data: T.RouterCreatePartPostInput, options?: RequestOptions<T.RouterCreatePartPostInput>) {
    return this.client.request<T.RouterCreatePartPostResponse, T.RouterCreatePartPostInput>({ ...options, method: "POST", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/parts`, data: data });
  }
  /**
   * Validate a nonempty, singly started, connected acyclic workflow and ready video references, then create versioned manifest201. Referenced unarchived items may come from other libraries; launches Knowledge sync/optional analysis.
   * Calls `POST /api/v1/mixed-media/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerPublishPostApiV1MixedMediaIdPublish(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPublishPostApiV1MixedMediaIdPublishResponse>({ ...options, method: "POST", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Read unarchived categories and parts from the composition owning library, ordered by title.
   * Calls `GET /api/v1/mixed-media/{id}/resources` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerResourcesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterResourcesGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/resources` });
  }
  /**
   * Get workflow. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/mixed-media/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetWorkflowGetApiV1MixedMediaIdWorkflow(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetWorkflowGetApiV1MixedMediaIdWorkflowResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/workflow` });
  }
  /**
   * Replace nodes and edges arrays and increment revision; returns400 if either is not an array. Node data remains editor-defined JSON.
   * Calls `PUT /api/v1/mixed-media/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerSaveWorkflowPutApiV1MixedMediaIdWorkflow(id: Identifier, data: T.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput, options?: RequestOptions<T.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput>) {
    return this.client.request<T.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowResponse, T.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput>({ ...options, method: "PUT", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/workflow`, data: data });
  }
  /**
   * Delete category. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `DELETE /api/v1/mixed-media/{mixed_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerDeleteCategoryDelete(mixedId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/mixed-media/${encodeURIComponent(mixedId)}/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Replace title and parent; reject self-parent. Generic library route and mixed-media route enforce their respective parent scope.
   * Calls `PATCH /api/v1/mixed-media/{mixed_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesId(mixedId: Identifier, id: Identifier, data: T.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput, options?: RequestOptions<T.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput>) {
    return this.client.request<T.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdResponse, T.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput>({ ...options, method: "PATCH", url: `/api/v1/mixed-media/${encodeURIComponent(mixedId)}/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Delete part. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `DELETE /api/v1/mixed-media/{mixed_id}/parts/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerDeletePartDelete(mixedId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeletePartDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/mixed-media/${encodeURIComponent(mixedId)}/parts/${encodeURIComponent(id)}` });
  }
  /**
   * Get part. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/mixed-media/{mixed_id}/parts/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetPartGet(mixedId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetPartGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(mixedId)}/parts/${encodeURIComponent(id)}` });
  }
  /**
   * Replace composition part within path parent; validates title/state/duration/media and stores rewards as empty object.
   * Calls `PUT /api/v1/mixed-media/{mixed_id}/parts/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdatePartPut(mixedId: Identifier, id: Identifier, data: T.RouterUpdatePartPutInput, options?: RequestOptions<T.RouterUpdatePartPutInput>) {
    return this.client.request<T.RouterUpdatePartPutResponse, T.RouterUpdatePartPutInput>({ ...options, method: "PUT", url: `/api/v1/mixed-media/${encodeURIComponent(mixedId)}/parts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read dependency/tool/storage health including nullable tool versions and public_url; service marker remains ok even if dependencies are false.
   * Calls `GET /api/v1/operations/health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerHealthGet(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetResponse>({ ...options, method: "GET", url: `/api/v1/operations/health` });
  }
  /**
   * Proxy Knowledge platform catalog verbatim; requires x-organization-id UUID unless server default configured. Forwards Authorization or configured service credential. Upstream failures500.
   * Calls `GET /api/v1/operations/knowledge-catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerKnowledgeCatalogGet(options?: RequestOptions) {
    return this.client.request<T.RouterKnowledgeCatalogGetResponse>({ ...options, method: "GET", url: `/api/v1/operations/knowledge-catalog` });
  }
  /**
   * Read persisted settings. Knowledge settings read creates default row for an existing composition; absent composition404. Operations settings require drm:manage.
   * Calls `GET /api/v1/operations/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:manage (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetSettingsGetApiV1OperationsSettings(options?: RequestOptions) {
    return this.client.request<T.RouterGetSettingsGetApiV1OperationsSettingsResponse>({ ...options, method: "GET", url: `/api/v1/operations/settings` });
  }
  /**
   * Update operational or Knowledge settings. Operations package_concurrency1..16; enabled transcription requires speech and summary models. Knowledge enabled requires knowledge_base_id and organization context; starts immediate sync.
   * Calls `PATCH /api/v1/operations/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:manage (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerUpdateSettingsPatch(data: T.RouterUpdateSettingsPatchInput, options?: RequestOptions<T.RouterUpdateSettingsPatchInput>) {
    return this.client.request<T.RouterUpdateSettingsPatchResponse, T.RouterUpdateSettingsPatchInput>({ ...options, method: "PATCH", url: `/api/v1/operations/settings`, data: data });
  }
  /**
   * Transcription models. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/operations/transcription-models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:manage (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerTranscriptionModelsGet(options?: RequestOptions) {
    return this.client.request<T.RouterTranscriptionModelsGetResponse>({ ...options, method: "GET", url: `/api/v1/operations/transcription-models` });
  }
  /**
   * Legacy video enqueue; omitted download/transcode/package default false (unlike modern config); returns202 with job_id/status.
   * Calls `POST /api/v1/packages` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerLegacyEnqueuePost(data: T.RouterLegacyEnqueuePostInput, options?: RequestOptions<T.RouterLegacyEnqueuePostInput>) {
    return this.client.request<T.RouterLegacyEnqueuePostResponse, T.RouterLegacyEnqueuePostInput>({ ...options, method: "POST", url: `/api/v1/packages`, data: data });
  }
  /**
   * Read newest job for media UUID; kind path member is ignored by pinned handler; response contains key/content_type/policy/status plus job_id/progress.
   * Calls `GET /api/v1/packages/{kind}/{media_id}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param mediaId Backend path identifier `media_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerLegacyStatusGet(kind: Identifier, mediaId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterLegacyStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/packages/${encodeURIComponent(kind)}/${encodeURIComponent(mediaId)}` });
  }
  /**
   * Download raw ready package bytes with optional Range header. Returns200 or206 with Content-Range/Accept-Ranges/Content-Type/cache metadata. Not-ready409; invalid path400; missing object404.
   * Calls `GET /api/v1/packages/{package_id}/files/{*path}` through the shared IDP-aware Faiber client.
   * @param packageId Backend path identifier `package_id`.
   * @param path Backend path identifier `*path`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:package:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerPackageFileGet(packageId: Identifier, path: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPackageFileGetResponse>({ ...options, method: "GET", url: `/api/v1/packages/${encodeURIComponent(packageId)}/files/${wildcardPath(path)}`, responseType: "arraybuffer" });
  }
  /**
   * Read public liveness marker; this does not inspect database or object storage.
   * Calls `GET /api/v1/status` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Public status; configured credentials still forwarded through FaiberClient.
   */
  routerStatusGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/status` });
  }
  /**
   * List tags. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/tags` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerListTagsGet(options?: RequestOptions) {
    return this.client.request<T.RouterListTagsGetResponse>({ ...options, method: "GET", url: `/api/v1/tags` });
  }
  /**
   * Create tag. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `POST /api/v1/tags` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateTagPost(data: T.RouterCreateTagPostInput, options?: RequestOptions<T.RouterCreateTagPostInput>) {
    return this.client.request<T.RouterCreateTagPostResponse, T.RouterCreateTagPostInput>({ ...options, method: "POST", url: `/api/v1/tags`, data: data });
  }
  /**
   * Delete tag. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `DELETE /api/v1/tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerDeleteTagDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteTagDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/tags/${encodeURIComponent(id)}` });
  }
  /**
   * Create24-hour resumable session for audio/video/image; total_bytes positive; default part10MiB clamped5..64MiB; existing media_id409; returns201 with sorted parts.
   * Calls `POST /api/v1/upload-sessions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCreateUploadSessionPost(data: T.RouterCreateUploadSessionPostInput, options?: RequestOptions<T.RouterCreateUploadSessionPostInput>) {
    return this.client.request<T.RouterCreateUploadSessionPostResponse, T.RouterCreateUploadSessionPostInput>({ ...options, method: "POST", url: `/api/v1/upload-sessions`, data: data });
  }
  /**
   * Abort uploading storage session and mark cancelled; returns204, including sessions already completed/cancelled.
   * Calls `DELETE /api/v1/upload-sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCancelUploadDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterCancelUploadDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/upload-sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Get upload session. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.
   * Calls `GET /api/v1/upload-sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerGetUploadSessionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetUploadSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/upload-sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Complete multipart when uploaded sizes sum total_bytes, verify stored size and register media201; repeat completed session200. checksum_sha256 is stored client metadata, not independently verified.
   * Calls `POST /api/v1/upload-sessions/{id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerCompleteUploadPost(id: Identifier, data: T.RouterCompleteUploadPostInput, options?: RequestOptions<T.RouterCompleteUploadPostInput>) {
    return this.client.request<T.RouterCompleteUploadPostResponse, T.RouterCompleteUploadPostInput>({ ...options, method: "POST", url: `/api/v1/upload-sessions/${encodeURIComponent(id)}/complete`, data: data });
  }
  /**
   * Send raw bytes (not JSON/multipart), part_number1..10000; nonempty body no larger than session part_size; expired/non-uploading409. Re-upload replaces stored part metadata.
   * Calls `PUT /api/v1/upload-sessions/{id}/parts/{part_number}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param partNumber Backend path identifier `part_number`.
   * @param data Typed binary byte stream.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified.
   */
  routerPutUploadPartPut(id: Identifier, partNumber: number, data: T.RouterPutUploadPartPutInput, options?: RequestOptions<T.RouterPutUploadPartPutInput>) {
    return this.client.request<T.RouterPutUploadPartPutResponse, T.RouterPutUploadPartPutInput>({ ...options, method: "PUT", url: `/api/v1/upload-sessions/${encodeURIComponent(id)}/parts/${encodeURIComponent(partNumber)}`, data: data, headers: { "Content-Type": "application/octet-stream", ...options?.headers } });
  }
}
