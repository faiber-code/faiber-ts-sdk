import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class DrmOperations extends ServiceApi {
  /**
   * Performs the audit events operation for the router capability.
   * Calls `GET /api/v1/audit-events` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:audit:read.
   */
  routerAuditEventsGet(params?: T.RouterAuditEventsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterAuditEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/audit-events`, params });
  }
  /**
   * Performs the list analyses operation for the router capability.
   * Calls `GET /api/v1/composition-analyses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerListAnalysesGet(params?: T.RouterListAnalysesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListAnalysesGetResponse>({ ...options, method: "GET", url: `/api/v1/composition-analyses`, params });
  }
  /**
   * Performs the list composition categories operation for the router capability.
   * Calls `GET /api/v1/composition-categories` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerListCompositionCategoriesGet(options?: RequestOptions) {
    return this.client.request<T.RouterListCompositionCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/composition-categories` });
  }
  /**
   * Performs the create composition category operation for the router capability.
   * Calls `POST /api/v1/composition-categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerCreateCompositionCategoryPost(data: T.RouterCreateCompositionCategoryPostInput, options?: RequestOptions<T.RouterCreateCompositionCategoryPostInput>) {
    return this.client.request<T.RouterCreateCompositionCategoryPostResponse, T.RouterCreateCompositionCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/composition-categories`, data: data });
  }
  /**
   * Performs the delete composition category operation for the router capability.
   * Calls `DELETE /api/v1/composition-categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerDeleteCompositionCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteCompositionCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/composition-categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update composition category operation for the router capability.
   * Calls `PATCH /api/v1/composition-categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerUpdateCompositionCategoryPatch(id: Identifier, data: T.RouterUpdateCompositionCategoryPatchInput, options?: RequestOptions<T.RouterUpdateCompositionCategoryPatchInput>) {
    return this.client.request<T.RouterUpdateCompositionCategoryPatchResponse, T.RouterUpdateCompositionCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/composition-categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list compositions operation for the router capability.
   * Calls `GET /api/v1/compositions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerListCompositionsGet(params?: T.RouterListCompositionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListCompositionsGetResponse>({ ...options, method: "GET", url: `/api/v1/compositions`, params });
  }
  /**
   * Performs the create composition operation for the router capability.
   * Calls `POST /api/v1/compositions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerCreateCompositionPost(data: T.RouterCreateCompositionPostInput, options?: RequestOptions<T.RouterCreateCompositionPostInput>) {
    return this.client.request<T.RouterCreateCompositionPostResponse, T.RouterCreateCompositionPostInput>({ ...options, method: "POST", url: `/api/v1/compositions`, data: data });
  }
  /**
   * Performs the list manifests operation for the router capability.
   * Calls `GET /api/v1/compositions/{id}/manifests` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerListManifestsGetApiV1CompositionsIdManifests(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListManifestsGetApiV1CompositionsIdManifestsResponse>({ ...options, method: "GET", url: `/api/v1/compositions/${encodeURIComponent(id)}/manifests` });
  }
  /**
   * Performs the create manifest version operation for the router capability.
   * Calls `POST /api/v1/compositions/{id}/manifests` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerCreateManifestVersionPost(id: Identifier, data: T.RouterCreateManifestVersionPostInput, options?: RequestOptions<T.RouterCreateManifestVersionPostInput>) {
    return this.client.request<T.RouterCreateManifestVersionPostResponse, T.RouterCreateManifestVersionPostInput>({ ...options, method: "POST", url: `/api/v1/compositions/${encodeURIComponent(id)}/manifests`, data: data });
  }
  /**
   * Performs the publish operation for the router capability.
   * Calls `POST /api/v1/compositions/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerPublishPostApiV1CompositionsIdPublish(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPublishPostApiV1CompositionsIdPublishResponse>({ ...options, method: "POST", url: `/api/v1/compositions/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Performs the get workflow operation for the router capability.
   * Calls `GET /api/v1/compositions/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerGetWorkflowGetApiV1CompositionsIdWorkflow(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetWorkflowGetApiV1CompositionsIdWorkflowResponse>({ ...options, method: "GET", url: `/api/v1/compositions/${encodeURIComponent(id)}/workflow` });
  }
  /**
   * Performs the save workflow operation for the router capability.
   * Calls `PUT /api/v1/compositions/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerSaveWorkflowPutApiV1CompositionsIdWorkflow(id: Identifier, data: T.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput, options?: RequestOptions<T.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput>) {
    return this.client.request<T.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowResponse, T.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput>({ ...options, method: "PUT", url: `/api/v1/compositions/${encodeURIComponent(id)}/workflow`, data: data });
  }
  /**
   * Performs the dashboard operation for the router capability.
   * Calls `GET /api/v1/dashboard/summary` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:read.
   */
  routerDashboardGet(options?: RequestOptions) {
    return this.client.request<T.RouterDashboardGetResponse>({ ...options, method: "GET", url: `/api/v1/dashboard/summary` });
  }
  /**
   * Performs the list jobs operation for the router capability.
   * Calls `GET /api/v1/drm/jobs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:read.
   */
  routerListJobsGet(params?: T.RouterListJobsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListJobsGetResponse>({ ...options, method: "GET", url: `/api/v1/drm/jobs`, params });
  }
  /**
   * Performs the create job operation for the router capability.
   * Calls `POST /api/v1/drm/jobs` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:write.
   */
  routerCreateJobPost(data: T.RouterCreateJobPostInput, options?: RequestOptions<T.RouterCreateJobPostInput>) {
    return this.client.request<T.RouterCreateJobPostResponse, T.RouterCreateJobPostInput>({ ...options, method: "POST", url: `/api/v1/drm/jobs`, data: data });
  }
  /**
   * Performs the cancel job operation for the router capability.
   * Calls `DELETE /api/v1/drm/jobs/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:write.
   */
  routerCancelJobDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterCancelJobDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/drm/jobs/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the retry job operation for the router capability.
   * Calls `POST /api/v1/drm/jobs/{id}/retry` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:write.
   */
  routerRetryJobPost(id: Identifier, data: T.RouterRetryJobPostInput, options?: RequestOptions<T.RouterRetryJobPostInput>) {
    return this.client.request<T.RouterRetryJobPostResponse, T.RouterRetryJobPostInput>({ ...options, method: "POST", url: `/api/v1/drm/jobs/${encodeURIComponent(id)}/retry`, data: data });
  }
  /**
   * Performs the retry all failed operation for the router capability.
   * Calls `POST /api/v1/drm/jobs/actions/retry-failed` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:write.
   */
  routerRetryAllFailedPost(options?: RequestOptions) {
    return this.client.request<T.RouterRetryAllFailedPostResponse>({ ...options, method: "POST", url: `/api/v1/drm/jobs/actions/retry-failed` });
  }
  /**
   * Performs the list external references operation for the router capability.
   * Calls `GET /api/v1/external-references` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerListExternalReferencesGet(params?: T.RouterListExternalReferencesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListExternalReferencesGetResponse>({ ...options, method: "GET", url: `/api/v1/external-references`, params });
  }
  /**
   * Performs the upsert external reference operation for the router capability.
   * Calls `POST /api/v1/external-references` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerUpsertExternalReferencePost(data: T.RouterUpsertExternalReferencePostInput, options?: RequestOptions<T.RouterUpsertExternalReferencePostInput>) {
    return this.client.request<T.RouterUpsertExternalReferencePostResponse, T.RouterUpsertExternalReferencePostInput>({ ...options, method: "POST", url: `/api/v1/external-references`, data: data });
  }
  /**
   * Performs the list folders operation for the router capability.
   * Calls `GET /api/v1/folders` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:read.
   */
  routerListFoldersGet(options?: RequestOptions) {
    return this.client.request<T.RouterListFoldersGetResponse>({ ...options, method: "GET", url: `/api/v1/folders` });
  }
  /**
   * Performs the create folder operation for the router capability.
   * Calls `POST /api/v1/folders` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerCreateFolderPost(data: T.RouterCreateFolderPostInput, options?: RequestOptions<T.RouterCreateFolderPostInput>) {
    return this.client.request<T.RouterCreateFolderPostResponse, T.RouterCreateFolderPostInput>({ ...options, method: "POST", url: `/api/v1/folders`, data: data });
  }
  /**
   * Performs the delete folder operation for the router capability.
   * Calls `DELETE /api/v1/folders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerDeleteFolderDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteFolderDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/folders/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update folder operation for the router capability.
   * Calls `PATCH /api/v1/folders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerUpdateFolderPatch(id: Identifier, data: T.RouterUpdateFolderPatchInput, options?: RequestOptions<T.RouterUpdateFolderPatchInput>) {
    return this.client.request<T.RouterUpdateFolderPatchResponse, T.RouterUpdateFolderPatchInput>({ ...options, method: "PATCH", url: `/api/v1/folders/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list libraries operation for the router capability.
   * Calls `GET /api/v1/libraries` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:library:read.
   */
  routerListLibrariesGet(options?: RequestOptions) {
    return this.client.request<T.RouterListLibrariesGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries` });
  }
  /**
   * Performs the create library operation for the router capability.
   * Calls `POST /api/v1/libraries` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:library:write.
   */
  routerCreateLibraryPost(data: T.RouterCreateLibraryPostInput, options?: RequestOptions<T.RouterCreateLibraryPostInput>) {
    return this.client.request<T.RouterCreateLibraryPostResponse, T.RouterCreateLibraryPostInput>({ ...options, method: "POST", url: `/api/v1/libraries`, data: data });
  }
  /**
   * Performs the delete library operation for the router capability.
   * Calls `DELETE /api/v1/libraries/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:library:delete.
   */
  routerDeleteLibraryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteLibraryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/libraries/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get library operation for the router capability.
   * Calls `GET /api/v1/libraries/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:library:read.
   */
  routerGetLibraryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetLibraryGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update library operation for the router capability.
   * Calls `PATCH /api/v1/libraries/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:library:write.
   */
  routerUpdateLibraryPatch(id: Identifier, data: T.RouterUpdateLibraryPatchInput, options?: RequestOptions<T.RouterUpdateLibraryPatchInput>) {
    return this.client.request<T.RouterUpdateLibraryPatchResponse, T.RouterUpdateLibraryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/libraries/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list categories operation for the router capability.
   * Calls `GET /api/v1/libraries/{id}/categories` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:library:read.
   */
  routerListCategoriesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(id)}/categories` });
  }
  /**
   * Performs the create category operation for the router capability.
   * Calls `POST /api/v1/libraries/{id}/categories` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:library:write.
   */
  routerCreateCategoryPostApiV1LibrariesIdCategories(id: Identifier, data: T.RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput, options?: RequestOptions<T.RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput>) {
    return this.client.request<T.RouterCreateCategoryPostApiV1LibrariesIdCategoriesResponse, T.RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput>({ ...options, method: "POST", url: `/api/v1/libraries/${encodeURIComponent(id)}/categories`, data: data });
  }
  /**
   * Performs the list items operation for the router capability.
   * Calls `GET /api/v1/libraries/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:content:read.
   */
  routerListItemsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(id)}/items` });
  }
  /**
   * Performs the create item operation for the router capability.
   * Calls `POST /api/v1/libraries/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:content:write.
   */
  routerCreateItemPost(id: Identifier, data: T.RouterCreateItemPostInput, options?: RequestOptions<T.RouterCreateItemPostInput>) {
    return this.client.request<T.RouterCreateItemPostResponse, T.RouterCreateItemPostInput>({ ...options, method: "POST", url: `/api/v1/libraries/${encodeURIComponent(id)}/items`, data: data });
  }
  /**
   * Performs the query items operation for the router capability.
   * Calls `GET /api/v1/libraries/{id}/items/query` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:content:read.
   */
  routerQueryItemsGet(id: Identifier, params?: T.RouterQueryItemsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterQueryItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(id)}/items/query`, params });
  }
  /**
   * Performs the library stats operation for the router capability.
   * Calls `GET /api/v1/libraries/{id}/stats` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:library:read.
   */
  routerLibraryStatsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterLibraryStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(id)}/stats` });
  }
  /**
   * Performs the archive category operation for the router capability.
   * Calls `DELETE /api/v1/libraries/{library_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:library:write.
   */
  routerArchiveCategoryDelete(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterArchiveCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update category operation for the router capability.
   * Calls `PATCH /api/v1/libraries/{library_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:library:write.
   */
  routerUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesId(libraryId: Identifier, id: Identifier, data: T.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput, options?: RequestOptions<T.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput>) {
    return this.client.request<T.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdResponse, T.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput>({ ...options, method: "PATCH", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the archive item operation for the router capability.
   * Calls `DELETE /api/v1/libraries/{library_id}/items/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:content:write.
   */
  routerArchiveItemDelete(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterArchiveItemDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get item operation for the router capability.
   * Calls `GET /api/v1/libraries/{library_id}/items/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:content:read.
   */
  routerGetItemGet(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetItemGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update item operation for the router capability.
   * Calls `PUT /api/v1/libraries/{library_id}/items/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:content:write.
   */
  routerUpdateItemPut(libraryId: Identifier, id: Identifier, data: T.RouterUpdateItemPutInput, options?: RequestOptions<T.RouterUpdateItemPutInput>) {
    return this.client.request<T.RouterUpdateItemPutResponse, T.RouterUpdateItemPutInput>({ ...options, method: "PUT", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the item attachments operation for the router capability.
   * Calls `GET /api/v1/libraries/{library_id}/items/{id}/attachments` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:content:read.
   */
  routerItemAttachmentsGet(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterItemAttachmentsGetResponse>({ ...options, method: "GET", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}/attachments` });
  }
  /**
   * Performs the attach media operation for the router capability.
   * Calls `POST /api/v1/libraries/{library_id}/items/{id}/attachments` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:content:write.
   */
  routerAttachMediaPost(libraryId: Identifier, id: Identifier, data: T.RouterAttachMediaPostInput, options?: RequestOptions<T.RouterAttachMediaPostInput>) {
    return this.client.request<T.RouterAttachMediaPostResponse, T.RouterAttachMediaPostInput>({ ...options, method: "POST", url: `/api/v1/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}/attachments`, data: data });
  }
  /**
   * Performs the clear key license operation for the router capability.
   * Calls `GET /api/v1/licenses/clearkey` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:license:read.
   */
  routerClearKeyLicenseGet(params?: T.RouterClearKeyLicenseGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterClearKeyLicenseGetResponse>({ ...options, method: "GET", url: `/api/v1/licenses/clearkey`, params });
  }
  /**
   * Performs the list media operation for the router capability.
   * Calls `GET /api/v1/media` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:read.
   */
  routerListMediaGet(params?: T.RouterListMediaGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/media`, params });
  }
  /**
   * Performs the upload media operation for the router capability.
   * Calls `POST /api/v1/media` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerUploadMediaPost(data: T.RouterUploadMediaPostInput, options?: RequestOptions<T.RouterUploadMediaPostInput>) {
    return this.client.request<T.RouterUploadMediaPostResponse, T.RouterUploadMediaPostInput>({ ...options, method: "POST", url: `/api/v1/media`, data: data });
  }
  /**
   * Performs the delete media operation for the router capability.
   * Calls `DELETE /api/v1/media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerDeleteMediaDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteMediaDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get media operation for the router capability.
   * Calls `GET /api/v1/media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:read.
   */
  routerGetMediaGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update media operation for the router capability.
   * Calls `PATCH /api/v1/media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerUpdateMediaPatch(id: Identifier, data: T.RouterUpdateMediaPatchInput, options?: RequestOptions<T.RouterUpdateMediaPatchInput>) {
    return this.client.request<T.RouterUpdateMediaPatchResponse, T.RouterUpdateMediaPatchInput>({ ...options, method: "PATCH", url: `/api/v1/media/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list packages operation for the router capability.
   * Calls `GET /api/v1/media/{id}/packages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:read.
   */
  routerListPackagesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListPackagesGetResponse>({ ...options, method: "GET", url: `/api/v1/media/${encodeURIComponent(id)}/packages` });
  }
  /**
   * Performs the regenerate operation for the router capability.
   * Calls `POST /api/v1/media/{id}/packages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:write.
   */
  routerRegeneratePost(id: Identifier, data: T.RouterRegeneratePostInput, options?: RequestOptions<T.RouterRegeneratePostInput>) {
    return this.client.request<T.RouterRegeneratePostResponse, T.RouterRegeneratePostInput>({ ...options, method: "POST", url: `/api/v1/media/${encodeURIComponent(id)}/packages`, data: data });
  }
  /**
   * Performs the playback operation for the router capability.
   * Calls `GET /api/v1/media/{id}/playback` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:read.
   */
  routerPlaybackGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPlaybackGetResponse>({ ...options, method: "GET", url: `/api/v1/media/${encodeURIComponent(id)}/playback` });
  }
  /**
   * Performs the batch media operation for the router capability.
   * Calls `POST /api/v1/media/batch` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerBatchMediaPost(data: T.RouterBatchMediaPostInput, options?: RequestOptions<T.RouterBatchMediaPostInput>) {
    return this.client.request<T.RouterBatchMediaPostResponse, T.RouterBatchMediaPostInput>({ ...options, method: "POST", url: `/api/v1/media/batch`, data: data });
  }
  /**
   * Performs the drm statuses operation for the router capability.
   * Calls `GET /api/v1/media/drm-statuses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:read.
   */
  routerDrmStatusesGet(params?: T.RouterDrmStatusesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterDrmStatusesGetResponse>({ ...options, method: "GET", url: `/api/v1/media/drm-statuses`, params });
  }
  /**
   * Performs the archive package operation for the router capability.
   * Calls `DELETE /api/v1/media/packages/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:write.
   */
  routerArchivePackageDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterArchivePackageDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/media/packages/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the register existing media operation for the router capability.
   * Calls `POST /api/v1/media/register` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerRegisterExistingMediaPost(data: T.RouterRegisterExistingMediaPostInput, options?: RequestOptions<T.RouterRegisterExistingMediaPostInput>) {
    return this.client.request<T.RouterRegisterExistingMediaPostResponse, T.RouterRegisterExistingMediaPostInput>({ ...options, method: "POST", url: `/api/v1/media/register`, data: data });
  }
  /**
   * Performs the list mixed media operation for the router capability.
   * Calls `GET /api/v1/mixed-media` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerListMixedMediaGet(options?: RequestOptions) {
    return this.client.request<T.RouterListMixedMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media` });
  }
  /**
   * Performs the create mixed media operation for the router capability.
   * Calls `POST /api/v1/mixed-media` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerCreateMixedMediaPost(data: T.RouterCreateMixedMediaPostInput, options?: RequestOptions<T.RouterCreateMixedMediaPostInput>) {
    return this.client.request<T.RouterCreateMixedMediaPostResponse, T.RouterCreateMixedMediaPostInput>({ ...options, method: "POST", url: `/api/v1/mixed-media`, data: data });
  }
  /**
   * Performs the delete mixed media operation for the router capability.
   * Calls `DELETE /api/v1/mixed-media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerDeleteMixedMediaDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteMixedMediaDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/mixed-media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get mixed media operation for the router capability.
   * Calls `GET /api/v1/mixed-media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerGetMixedMediaGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetMixedMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update mixed media operation for the router capability.
   * Calls `PATCH /api/v1/mixed-media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerUpdateMixedMediaPatch(id: Identifier, data: T.RouterUpdateMixedMediaPatchInput, options?: RequestOptions<T.RouterUpdateMixedMediaPatchInput>) {
    return this.client.request<T.RouterUpdateMixedMediaPatchResponse, T.RouterUpdateMixedMediaPatchInput>({ ...options, method: "PATCH", url: `/api/v1/mixed-media/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the get analysis operation for the router capability.
   * Calls `GET /api/v1/mixed-media/{id}/analysis` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerGetAnalysisGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetAnalysisGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/analysis` });
  }
  /**
   * Performs the start analysis operation for the router capability.
   * Calls `POST /api/v1/mixed-media/{id}/analysis` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerStartAnalysisPost(id: Identifier, data: T.RouterStartAnalysisPostInput, options?: RequestOptions<T.RouterStartAnalysisPostInput>) {
    return this.client.request<T.RouterStartAnalysisPostResponse, T.RouterStartAnalysisPostInput>({ ...options, method: "POST", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/analysis`, data: data });
  }
  /**
   * Performs the create category operation for the router capability.
   * Calls `POST /api/v1/mixed-media/{id}/categories` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerCreateCategoryPostApiV1MixedMediaIdCategories(id: Identifier, data: T.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput, options?: RequestOptions<T.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput>) {
    return this.client.request<T.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesResponse, T.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput>({ ...options, method: "POST", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/categories`, data: data });
  }
  /**
   * Performs the get settings operation for the router capability.
   * Calls `GET /api/v1/mixed-media/{id}/knowledge-sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerGetSettingsGetApiV1MixedMediaIdKnowledgeSync(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetSettingsGetApiV1MixedMediaIdKnowledgeSyncResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/knowledge-sync` });
  }
  /**
   * Performs the sync now operation for the router capability.
   * Calls `POST /api/v1/mixed-media/{id}/knowledge-sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerSyncNowPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterSyncNowPostResponse>({ ...options, method: "POST", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/knowledge-sync` });
  }
  /**
   * Performs the update settings operation for the router capability.
   * Calls `PUT /api/v1/mixed-media/{id}/knowledge-sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerUpdateSettingsPut(id: Identifier, data: T.RouterUpdateSettingsPutInput, options?: RequestOptions<T.RouterUpdateSettingsPutInput>) {
    return this.client.request<T.RouterUpdateSettingsPutResponse, T.RouterUpdateSettingsPutInput>({ ...options, method: "PUT", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/knowledge-sync`, data: data });
  }
  /**
   * Performs the get manifest operation for the router capability.
   * Calls `GET /api/v1/mixed-media/{id}/manifest` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerGetManifestGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetManifestGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/manifest` });
  }
  /**
   * Performs the list manifests operation for the router capability.
   * Calls `GET /api/v1/mixed-media/{id}/manifests` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerListManifestsGetApiV1MixedMediaIdManifests(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListManifestsGetApiV1MixedMediaIdManifestsResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/manifests` });
  }
  /**
   * Performs the create part operation for the router capability.
   * Calls `POST /api/v1/mixed-media/{id}/parts` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerCreatePartPost(id: Identifier, data: T.RouterCreatePartPostInput, options?: RequestOptions<T.RouterCreatePartPostInput>) {
    return this.client.request<T.RouterCreatePartPostResponse, T.RouterCreatePartPostInput>({ ...options, method: "POST", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/parts`, data: data });
  }
  /**
   * Performs the publish operation for the router capability.
   * Calls `POST /api/v1/mixed-media/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerPublishPostApiV1MixedMediaIdPublish(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPublishPostApiV1MixedMediaIdPublishResponse>({ ...options, method: "POST", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Performs the resources operation for the router capability.
   * Calls `GET /api/v1/mixed-media/{id}/resources` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerResourcesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterResourcesGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/resources` });
  }
  /**
   * Performs the get workflow operation for the router capability.
   * Calls `GET /api/v1/mixed-media/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerGetWorkflowGetApiV1MixedMediaIdWorkflow(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetWorkflowGetApiV1MixedMediaIdWorkflowResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/workflow` });
  }
  /**
   * Performs the save workflow operation for the router capability.
   * Calls `PUT /api/v1/mixed-media/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerSaveWorkflowPutApiV1MixedMediaIdWorkflow(id: Identifier, data: T.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput, options?: RequestOptions<T.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput>) {
    return this.client.request<T.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowResponse, T.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput>({ ...options, method: "PUT", url: `/api/v1/mixed-media/${encodeURIComponent(id)}/workflow`, data: data });
  }
  /**
   * Performs the delete category operation for the router capability.
   * Calls `DELETE /api/v1/mixed-media/{mixed_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerDeleteCategoryDelete(mixedId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/mixed-media/${encodeURIComponent(mixedId)}/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update category operation for the router capability.
   * Calls `PATCH /api/v1/mixed-media/{mixed_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesId(mixedId: Identifier, id: Identifier, data: T.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput, options?: RequestOptions<T.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput>) {
    return this.client.request<T.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdResponse, T.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput>({ ...options, method: "PATCH", url: `/api/v1/mixed-media/${encodeURIComponent(mixedId)}/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the delete part operation for the router capability.
   * Calls `DELETE /api/v1/mixed-media/{mixed_id}/parts/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerDeletePartDelete(mixedId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeletePartDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/mixed-media/${encodeURIComponent(mixedId)}/parts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get part operation for the router capability.
   * Calls `GET /api/v1/mixed-media/{mixed_id}/parts/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:read.
   */
  routerGetPartGet(mixedId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetPartGetResponse>({ ...options, method: "GET", url: `/api/v1/mixed-media/${encodeURIComponent(mixedId)}/parts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update part operation for the router capability.
   * Calls `PUT /api/v1/mixed-media/{mixed_id}/parts/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:composition:write.
   */
  routerUpdatePartPut(mixedId: Identifier, id: Identifier, data: T.RouterUpdatePartPutInput, options?: RequestOptions<T.RouterUpdatePartPutInput>) {
    return this.client.request<T.RouterUpdatePartPutResponse, T.RouterUpdatePartPutInput>({ ...options, method: "PUT", url: `/api/v1/mixed-media/${encodeURIComponent(mixedId)}/parts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the health operation for the router capability.
   * Calls `GET /api/v1/operations/health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:read.
   */
  routerHealthGet(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetResponse>({ ...options, method: "GET", url: `/api/v1/operations/health` });
  }
  /**
   * Performs the knowledge catalog operation for the router capability.
   * Calls `GET /api/v1/operations/knowledge-catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:read.
   */
  routerKnowledgeCatalogGet(options?: RequestOptions) {
    return this.client.request<T.RouterKnowledgeCatalogGetResponse>({ ...options, method: "GET", url: `/api/v1/operations/knowledge-catalog` });
  }
  /**
   * Performs the get settings operation for the router capability.
   * Calls `GET /api/v1/operations/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:manage.
   */
  routerGetSettingsGetApiV1OperationsSettings(options?: RequestOptions) {
    return this.client.request<T.RouterGetSettingsGetApiV1OperationsSettingsResponse>({ ...options, method: "GET", url: `/api/v1/operations/settings` });
  }
  /**
   * Performs the update settings operation for the router capability.
   * Calls `PATCH /api/v1/operations/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:manage.
   */
  routerUpdateSettingsPatch(data: T.RouterUpdateSettingsPatchInput, options?: RequestOptions<T.RouterUpdateSettingsPatchInput>) {
    return this.client.request<T.RouterUpdateSettingsPatchResponse, T.RouterUpdateSettingsPatchInput>({ ...options, method: "PATCH", url: `/api/v1/operations/settings`, data: data });
  }
  /**
   * Performs the transcription models operation for the router capability.
   * Calls `GET /api/v1/operations/transcription-models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:manage.
   */
  routerTranscriptionModelsGet(options?: RequestOptions) {
    return this.client.request<T.RouterTranscriptionModelsGetResponse>({ ...options, method: "GET", url: `/api/v1/operations/transcription-models` });
  }
  /**
   * Performs the legacy enqueue operation for the router capability.
   * Calls `POST /api/v1/packages` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:write.
   */
  routerLegacyEnqueuePost(data: T.RouterLegacyEnqueuePostInput, options?: RequestOptions<T.RouterLegacyEnqueuePostInput>) {
    return this.client.request<T.RouterLegacyEnqueuePostResponse, T.RouterLegacyEnqueuePostInput>({ ...options, method: "POST", url: `/api/v1/packages`, data: data });
  }
  /**
   * Performs the legacy status operation for the router capability.
   * Calls `GET /api/v1/packages/{kind}/{media_id}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param mediaId Backend path identifier `media_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:read.
   */
  routerLegacyStatusGet(kind: Identifier, mediaId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterLegacyStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/packages/${encodeURIComponent(kind)}/${encodeURIComponent(mediaId)}` });
  }
  /**
   * Performs the package file operation for the router capability.
   * Calls `GET /api/v1/packages/{package_id}/files/{*path}` through the shared IDP-aware Faiber client.
   * @param packageId Backend path identifier `package_id`.
   * @param path Backend path identifier `*path`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:package:read.
   */
  routerPackageFileGet(packageId: Identifier, path: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPackageFileGetResponse>({ ...options, method: "GET", url: `/api/v1/packages/${encodeURIComponent(packageId)}/files/${encodeURIComponent(path)}` });
  }
  /**
   * Performs the status operation for the router capability.
   * Calls `GET /api/v1/status` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:read.
   */
  routerStatusGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/status` });
  }
  /**
   * Performs the list tags operation for the router capability.
   * Calls `GET /api/v1/tags` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:read.
   */
  routerListTagsGet(options?: RequestOptions) {
    return this.client.request<T.RouterListTagsGetResponse>({ ...options, method: "GET", url: `/api/v1/tags` });
  }
  /**
   * Performs the create tag operation for the router capability.
   * Calls `POST /api/v1/tags` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerCreateTagPost(data: T.RouterCreateTagPostInput, options?: RequestOptions<T.RouterCreateTagPostInput>) {
    return this.client.request<T.RouterCreateTagPostResponse, T.RouterCreateTagPostInput>({ ...options, method: "POST", url: `/api/v1/tags`, data: data });
  }
  /**
   * Performs the delete tag operation for the router capability.
   * Calls `DELETE /api/v1/tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerDeleteTagDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteTagDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/tags/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the create upload session operation for the router capability.
   * Calls `POST /api/v1/upload-sessions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerCreateUploadSessionPost(data: T.RouterCreateUploadSessionPostInput, options?: RequestOptions<T.RouterCreateUploadSessionPostInput>) {
    return this.client.request<T.RouterCreateUploadSessionPostResponse, T.RouterCreateUploadSessionPostInput>({ ...options, method: "POST", url: `/api/v1/upload-sessions`, data: data });
  }
  /**
   * Performs the cancel upload operation for the router capability.
   * Calls `DELETE /api/v1/upload-sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerCancelUploadDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterCancelUploadDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/upload-sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get upload session operation for the router capability.
   * Calls `GET /api/v1/upload-sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:read.
   */
  routerGetUploadSessionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetUploadSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/upload-sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the complete upload operation for the router capability.
   * Calls `POST /api/v1/upload-sessions/{id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerCompleteUploadPost(id: Identifier, data: T.RouterCompleteUploadPostInput, options?: RequestOptions<T.RouterCompleteUploadPostInput>) {
    return this.client.request<T.RouterCompleteUploadPostResponse, T.RouterCompleteUploadPostInput>({ ...options, method: "POST", url: `/api/v1/upload-sessions/${encodeURIComponent(id)}/complete`, data: data });
  }
  /**
   * Performs the put upload part operation for the router capability.
   * Calls `PUT /api/v1/upload-sessions/{id}/parts/{part_number}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param partNumber Backend path identifier `part_number`.
   * @param data Typed binary byte stream.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: drm:media:write.
   */
  routerPutUploadPartPut(id: Identifier, partNumber: Identifier, data: T.RouterPutUploadPartPutInput, options?: RequestOptions<T.RouterPutUploadPartPutInput>) {
    return this.client.request<T.RouterPutUploadPartPutResponse, T.RouterPutUploadPartPutInput>({ ...options, method: "PUT", url: `/api/v1/upload-sessions/${encodeURIComponent(id)}/parts/${encodeURIComponent(partNumber)}`, data: data, headers: { "Content-Type": "application/octet-stream", ...options?.headers } });
  }
}
