import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class DrmOperations extends ServiceApi {
  /**
   * Performs the audit events operation for the router capability.
   * Calls `GET /audit-events` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerAuditEventsGet(params?: T.RouterAuditEventsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterAuditEventsGetResponse>({ ...options, method: "GET", url: `/audit-events`, params });
  }
  /**
   * Performs the list analyses operation for the router capability.
   * Calls `GET /composition-analyses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListAnalysesGet(params?: T.RouterListAnalysesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListAnalysesGetResponse>({ ...options, method: "GET", url: `/composition-analyses`, params });
  }
  /**
   * Performs the list composition categories operation for the router capability.
   * Calls `GET /composition-categories` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListCompositionCategoriesGet(options?: RequestOptions) {
    return this.client.request<T.RouterListCompositionCategoriesGetResponse>({ ...options, method: "GET", url: `/composition-categories` });
  }
  /**
   * Performs the create composition category operation for the router capability.
   * Calls `POST /composition-categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateCompositionCategoryPost(data: T.RouterCreateCompositionCategoryPostInput, options?: RequestOptions<T.RouterCreateCompositionCategoryPostInput>) {
    return this.client.request<T.RouterCreateCompositionCategoryPostResponse, T.RouterCreateCompositionCategoryPostInput>({ ...options, method: "POST", url: `/composition-categories`, data: data });
  }
  /**
   * Performs the delete composition category operation for the router capability.
   * Calls `DELETE /composition-categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeleteCompositionCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteCompositionCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/composition-categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update composition category operation for the router capability.
   * Calls `PATCH /composition-categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateCompositionCategoryPatch(id: Identifier, data: T.RouterUpdateCompositionCategoryPatchInput, options?: RequestOptions<T.RouterUpdateCompositionCategoryPatchInput>) {
    return this.client.request<T.RouterUpdateCompositionCategoryPatchResponse, T.RouterUpdateCompositionCategoryPatchInput>({ ...options, method: "PATCH", url: `/composition-categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list compositions operation for the router capability.
   * Calls `GET /compositions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListCompositionsGet(params?: T.RouterListCompositionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListCompositionsGetResponse>({ ...options, method: "GET", url: `/compositions`, params });
  }
  /**
   * Performs the create composition operation for the router capability.
   * Calls `POST /compositions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateCompositionPost(data: T.RouterCreateCompositionPostInput, options?: RequestOptions<T.RouterCreateCompositionPostInput>) {
    return this.client.request<T.RouterCreateCompositionPostResponse, T.RouterCreateCompositionPostInput>({ ...options, method: "POST", url: `/compositions`, data: data });
  }
  /**
   * Performs the list manifests operation for the router capability.
   * Calls `GET /compositions/{id}/manifests` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListManifestsGetCompositionsIdManifests(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListManifestsGetCompositionsIdManifestsResponse>({ ...options, method: "GET", url: `/compositions/${encodeURIComponent(id)}/manifests` });
  }
  /**
   * Performs the create manifest version operation for the router capability.
   * Calls `POST /compositions/{id}/manifests` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateManifestVersionPost(id: Identifier, data: T.RouterCreateManifestVersionPostInput, options?: RequestOptions<T.RouterCreateManifestVersionPostInput>) {
    return this.client.request<T.RouterCreateManifestVersionPostResponse, T.RouterCreateManifestVersionPostInput>({ ...options, method: "POST", url: `/compositions/${encodeURIComponent(id)}/manifests`, data: data });
  }
  /**
   * Performs the publish operation for the router capability.
   * Calls `POST /compositions/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerPublishPostCompositionsIdPublish(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPublishPostCompositionsIdPublishResponse>({ ...options, method: "POST", url: `/compositions/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Performs the get workflow operation for the router capability.
   * Calls `GET /compositions/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetWorkflowGetCompositionsIdWorkflow(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetWorkflowGetCompositionsIdWorkflowResponse>({ ...options, method: "GET", url: `/compositions/${encodeURIComponent(id)}/workflow` });
  }
  /**
   * Performs the save workflow operation for the router capability.
   * Calls `PUT /compositions/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerSaveWorkflowPutCompositionsIdWorkflow(id: Identifier, data: T.RouterSaveWorkflowPutCompositionsIdWorkflowInput, options?: RequestOptions<T.RouterSaveWorkflowPutCompositionsIdWorkflowInput>) {
    return this.client.request<T.RouterSaveWorkflowPutCompositionsIdWorkflowResponse, T.RouterSaveWorkflowPutCompositionsIdWorkflowInput>({ ...options, method: "PUT", url: `/compositions/${encodeURIComponent(id)}/workflow`, data: data });
  }
  /**
   * Performs the dashboard operation for the router capability.
   * Calls `GET /dashboard/summary` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDashboardGet(options?: RequestOptions) {
    return this.client.request<T.RouterDashboardGetResponse>({ ...options, method: "GET", url: `/dashboard/summary` });
  }
  /**
   * Performs the list jobs operation for the router capability.
   * Calls `GET /drm/jobs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListJobsGet(params?: T.RouterListJobsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListJobsGetResponse>({ ...options, method: "GET", url: `/drm/jobs`, params });
  }
  /**
   * Performs the create job operation for the router capability.
   * Calls `POST /drm/jobs` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateJobPost(data: T.RouterCreateJobPostInput, options?: RequestOptions<T.RouterCreateJobPostInput>) {
    return this.client.request<T.RouterCreateJobPostResponse, T.RouterCreateJobPostInput>({ ...options, method: "POST", url: `/drm/jobs`, data: data });
  }
  /**
   * Performs the cancel job operation for the router capability.
   * Calls `DELETE /drm/jobs/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCancelJobDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterCancelJobDeleteResponse>({ ...options, method: "DELETE", url: `/drm/jobs/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the retry job operation for the router capability.
   * Calls `POST /drm/jobs/{id}/retry` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerRetryJobPost(id: Identifier, data: T.RouterRetryJobPostInput, options?: RequestOptions<T.RouterRetryJobPostInput>) {
    return this.client.request<T.RouterRetryJobPostResponse, T.RouterRetryJobPostInput>({ ...options, method: "POST", url: `/drm/jobs/${encodeURIComponent(id)}/retry`, data: data });
  }
  /**
   * Performs the retry all failed operation for the router capability.
   * Calls `POST /drm/jobs/actions/retry-failed` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerRetryAllFailedPost(options?: RequestOptions) {
    return this.client.request<T.RouterRetryAllFailedPostResponse>({ ...options, method: "POST", url: `/drm/jobs/actions/retry-failed` });
  }
  /**
   * Performs the list external references operation for the router capability.
   * Calls `GET /external-references` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListExternalReferencesGet(params?: T.RouterListExternalReferencesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListExternalReferencesGetResponse>({ ...options, method: "GET", url: `/external-references`, params });
  }
  /**
   * Performs the upsert external reference operation for the router capability.
   * Calls `POST /external-references` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpsertExternalReferencePost(data: T.RouterUpsertExternalReferencePostInput, options?: RequestOptions<T.RouterUpsertExternalReferencePostInput>) {
    return this.client.request<T.RouterUpsertExternalReferencePostResponse, T.RouterUpsertExternalReferencePostInput>({ ...options, method: "POST", url: `/external-references`, data: data });
  }
  /**
   * Performs the list folders operation for the router capability.
   * Calls `GET /folders` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListFoldersGet(options?: RequestOptions) {
    return this.client.request<T.RouterListFoldersGetResponse>({ ...options, method: "GET", url: `/folders` });
  }
  /**
   * Performs the create folder operation for the router capability.
   * Calls `POST /folders` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateFolderPost(data: T.RouterCreateFolderPostInput, options?: RequestOptions<T.RouterCreateFolderPostInput>) {
    return this.client.request<T.RouterCreateFolderPostResponse, T.RouterCreateFolderPostInput>({ ...options, method: "POST", url: `/folders`, data: data });
  }
  /**
   * Performs the delete folder operation for the router capability.
   * Calls `DELETE /folders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeleteFolderDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteFolderDeleteResponse>({ ...options, method: "DELETE", url: `/folders/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update folder operation for the router capability.
   * Calls `PATCH /folders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateFolderPatch(id: Identifier, data: T.RouterUpdateFolderPatchInput, options?: RequestOptions<T.RouterUpdateFolderPatchInput>) {
    return this.client.request<T.RouterUpdateFolderPatchResponse, T.RouterUpdateFolderPatchInput>({ ...options, method: "PATCH", url: `/folders/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list libraries operation for the router capability.
   * Calls `GET /libraries` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListLibrariesGet(options?: RequestOptions) {
    return this.client.request<T.RouterListLibrariesGetResponse>({ ...options, method: "GET", url: `/libraries` });
  }
  /**
   * Performs the create library operation for the router capability.
   * Calls `POST /libraries` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateLibraryPost(data: T.RouterCreateLibraryPostInput, options?: RequestOptions<T.RouterCreateLibraryPostInput>) {
    return this.client.request<T.RouterCreateLibraryPostResponse, T.RouterCreateLibraryPostInput>({ ...options, method: "POST", url: `/libraries`, data: data });
  }
  /**
   * Performs the delete library operation for the router capability.
   * Calls `DELETE /libraries/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeleteLibraryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteLibraryDeleteResponse>({ ...options, method: "DELETE", url: `/libraries/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get library operation for the router capability.
   * Calls `GET /libraries/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetLibraryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetLibraryGetResponse>({ ...options, method: "GET", url: `/libraries/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update library operation for the router capability.
   * Calls `PATCH /libraries/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateLibraryPatch(id: Identifier, data: T.RouterUpdateLibraryPatchInput, options?: RequestOptions<T.RouterUpdateLibraryPatchInput>) {
    return this.client.request<T.RouterUpdateLibraryPatchResponse, T.RouterUpdateLibraryPatchInput>({ ...options, method: "PATCH", url: `/libraries/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list categories operation for the router capability.
   * Calls `GET /libraries/{id}/categories` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListCategoriesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListCategoriesGetResponse>({ ...options, method: "GET", url: `/libraries/${encodeURIComponent(id)}/categories` });
  }
  /**
   * Performs the create category operation for the router capability.
   * Calls `POST /libraries/{id}/categories` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateCategoryPostLibrariesIdCategories(id: Identifier, data: T.RouterCreateCategoryPostLibrariesIdCategoriesInput, options?: RequestOptions<T.RouterCreateCategoryPostLibrariesIdCategoriesInput>) {
    return this.client.request<T.RouterCreateCategoryPostLibrariesIdCategoriesResponse, T.RouterCreateCategoryPostLibrariesIdCategoriesInput>({ ...options, method: "POST", url: `/libraries/${encodeURIComponent(id)}/categories`, data: data });
  }
  /**
   * Performs the list items operation for the router capability.
   * Calls `GET /libraries/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListItemsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListItemsGetResponse>({ ...options, method: "GET", url: `/libraries/${encodeURIComponent(id)}/items` });
  }
  /**
   * Performs the create item operation for the router capability.
   * Calls `POST /libraries/{id}/items` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateItemPost(id: Identifier, data: T.RouterCreateItemPostInput, options?: RequestOptions<T.RouterCreateItemPostInput>) {
    return this.client.request<T.RouterCreateItemPostResponse, T.RouterCreateItemPostInput>({ ...options, method: "POST", url: `/libraries/${encodeURIComponent(id)}/items`, data: data });
  }
  /**
   * Performs the query items operation for the router capability.
   * Calls `GET /libraries/{id}/items/query` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerQueryItemsGet(id: Identifier, params?: T.RouterQueryItemsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterQueryItemsGetResponse>({ ...options, method: "GET", url: `/libraries/${encodeURIComponent(id)}/items/query`, params });
  }
  /**
   * Performs the library stats operation for the router capability.
   * Calls `GET /libraries/{id}/stats` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerLibraryStatsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterLibraryStatsGetResponse>({ ...options, method: "GET", url: `/libraries/${encodeURIComponent(id)}/stats` });
  }
  /**
   * Performs the archive category operation for the router capability.
   * Calls `DELETE /libraries/{library_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerArchiveCategoryDelete(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterArchiveCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/libraries/${encodeURIComponent(libraryId)}/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update category operation for the router capability.
   * Calls `PATCH /libraries/{library_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateCategoryPatchLibrariesLibraryIdCategoriesId(libraryId: Identifier, id: Identifier, data: T.RouterUpdateCategoryPatchLibrariesLibraryIdCategoriesIdInput, options?: RequestOptions<T.RouterUpdateCategoryPatchLibrariesLibraryIdCategoriesIdInput>) {
    return this.client.request<T.RouterUpdateCategoryPatchLibrariesLibraryIdCategoriesIdResponse, T.RouterUpdateCategoryPatchLibrariesLibraryIdCategoriesIdInput>({ ...options, method: "PATCH", url: `/libraries/${encodeURIComponent(libraryId)}/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the archive item operation for the router capability.
   * Calls `DELETE /libraries/{library_id}/items/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerArchiveItemDelete(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterArchiveItemDeleteResponse>({ ...options, method: "DELETE", url: `/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get item operation for the router capability.
   * Calls `GET /libraries/{library_id}/items/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetItemGet(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetItemGetResponse>({ ...options, method: "GET", url: `/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update item operation for the router capability.
   * Calls `PUT /libraries/{library_id}/items/{id}` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateItemPut(libraryId: Identifier, id: Identifier, data: T.RouterUpdateItemPutInput, options?: RequestOptions<T.RouterUpdateItemPutInput>) {
    return this.client.request<T.RouterUpdateItemPutResponse, T.RouterUpdateItemPutInput>({ ...options, method: "PUT", url: `/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the item attachments operation for the router capability.
   * Calls `GET /libraries/{library_id}/items/{id}/attachments` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerItemAttachmentsGet(libraryId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterItemAttachmentsGetResponse>({ ...options, method: "GET", url: `/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}/attachments` });
  }
  /**
   * Performs the attach media operation for the router capability.
   * Calls `POST /libraries/{library_id}/items/{id}/attachments` through the shared IDP-aware Faiber client.
   * @param libraryId Backend path identifier `library_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerAttachMediaPost(libraryId: Identifier, id: Identifier, data: T.RouterAttachMediaPostInput, options?: RequestOptions<T.RouterAttachMediaPostInput>) {
    return this.client.request<T.RouterAttachMediaPostResponse, T.RouterAttachMediaPostInput>({ ...options, method: "POST", url: `/libraries/${encodeURIComponent(libraryId)}/items/${encodeURIComponent(id)}/attachments`, data: data });
  }
  /**
   * Performs the clear key license operation for the router capability.
   * Calls `GET /licenses/clearkey` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerClearKeyLicenseGet(params?: T.RouterClearKeyLicenseGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterClearKeyLicenseGetResponse>({ ...options, method: "GET", url: `/licenses/clearkey`, params });
  }
  /**
   * Performs the list media operation for the router capability.
   * Calls `GET /media` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListMediaGet(params?: T.RouterListMediaGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListMediaGetResponse>({ ...options, method: "GET", url: `/media`, params });
  }
  /**
   * Performs the upload media operation for the router capability.
   * Calls `POST /media` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUploadMediaPost(data: T.RouterUploadMediaPostInput, options?: RequestOptions<T.RouterUploadMediaPostInput>) {
    return this.client.request<T.RouterUploadMediaPostResponse, T.RouterUploadMediaPostInput>({ ...options, method: "POST", url: `/media`, data: data });
  }
  /**
   * Performs the delete media operation for the router capability.
   * Calls `DELETE /media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeleteMediaDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteMediaDeleteResponse>({ ...options, method: "DELETE", url: `/media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get media operation for the router capability.
   * Calls `GET /media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetMediaGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetMediaGetResponse>({ ...options, method: "GET", url: `/media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update media operation for the router capability.
   * Calls `PATCH /media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateMediaPatch(id: Identifier, data: T.RouterUpdateMediaPatchInput, options?: RequestOptions<T.RouterUpdateMediaPatchInput>) {
    return this.client.request<T.RouterUpdateMediaPatchResponse, T.RouterUpdateMediaPatchInput>({ ...options, method: "PATCH", url: `/media/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list packages operation for the router capability.
   * Calls `GET /media/{id}/packages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListPackagesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListPackagesGetResponse>({ ...options, method: "GET", url: `/media/${encodeURIComponent(id)}/packages` });
  }
  /**
   * Performs the regenerate operation for the router capability.
   * Calls `POST /media/{id}/packages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerRegeneratePost(id: Identifier, data: T.RouterRegeneratePostInput, options?: RequestOptions<T.RouterRegeneratePostInput>) {
    return this.client.request<T.RouterRegeneratePostResponse, T.RouterRegeneratePostInput>({ ...options, method: "POST", url: `/media/${encodeURIComponent(id)}/packages`, data: data });
  }
  /**
   * Performs the playback operation for the router capability.
   * Calls `GET /media/{id}/playback` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerPlaybackGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPlaybackGetResponse>({ ...options, method: "GET", url: `/media/${encodeURIComponent(id)}/playback` });
  }
  /**
   * Performs the batch media operation for the router capability.
   * Calls `POST /media/batch` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerBatchMediaPost(data: T.RouterBatchMediaPostInput, options?: RequestOptions<T.RouterBatchMediaPostInput>) {
    return this.client.request<T.RouterBatchMediaPostResponse, T.RouterBatchMediaPostInput>({ ...options, method: "POST", url: `/media/batch`, data: data });
  }
  /**
   * Performs the drm statuses operation for the router capability.
   * Calls `GET /media/drm-statuses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDrmStatusesGet(params?: T.RouterDrmStatusesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterDrmStatusesGetResponse>({ ...options, method: "GET", url: `/media/drm-statuses`, params });
  }
  /**
   * Performs the archive package operation for the router capability.
   * Calls `DELETE /media/packages/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerArchivePackageDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterArchivePackageDeleteResponse>({ ...options, method: "DELETE", url: `/media/packages/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the register existing media operation for the router capability.
   * Calls `POST /media/register` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerRegisterExistingMediaPost(data: T.RouterRegisterExistingMediaPostInput, options?: RequestOptions<T.RouterRegisterExistingMediaPostInput>) {
    return this.client.request<T.RouterRegisterExistingMediaPostResponse, T.RouterRegisterExistingMediaPostInput>({ ...options, method: "POST", url: `/media/register`, data: data });
  }
  /**
   * Performs the list mixed media operation for the router capability.
   * Calls `GET /mixed-media` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListMixedMediaGet(options?: RequestOptions) {
    return this.client.request<T.RouterListMixedMediaGetResponse>({ ...options, method: "GET", url: `/mixed-media` });
  }
  /**
   * Performs the create mixed media operation for the router capability.
   * Calls `POST /mixed-media` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateMixedMediaPost(data: T.RouterCreateMixedMediaPostInput, options?: RequestOptions<T.RouterCreateMixedMediaPostInput>) {
    return this.client.request<T.RouterCreateMixedMediaPostResponse, T.RouterCreateMixedMediaPostInput>({ ...options, method: "POST", url: `/mixed-media`, data: data });
  }
  /**
   * Performs the delete mixed media operation for the router capability.
   * Calls `DELETE /mixed-media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeleteMixedMediaDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteMixedMediaDeleteResponse>({ ...options, method: "DELETE", url: `/mixed-media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get mixed media operation for the router capability.
   * Calls `GET /mixed-media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetMixedMediaGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetMixedMediaGetResponse>({ ...options, method: "GET", url: `/mixed-media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update mixed media operation for the router capability.
   * Calls `PATCH /mixed-media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateMixedMediaPatch(id: Identifier, data: T.RouterUpdateMixedMediaPatchInput, options?: RequestOptions<T.RouterUpdateMixedMediaPatchInput>) {
    return this.client.request<T.RouterUpdateMixedMediaPatchResponse, T.RouterUpdateMixedMediaPatchInput>({ ...options, method: "PATCH", url: `/mixed-media/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the get analysis operation for the router capability.
   * Calls `GET /mixed-media/{id}/analysis` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetAnalysisGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetAnalysisGetResponse>({ ...options, method: "GET", url: `/mixed-media/${encodeURIComponent(id)}/analysis` });
  }
  /**
   * Performs the start analysis operation for the router capability.
   * Calls `POST /mixed-media/{id}/analysis` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStartAnalysisPost(id: Identifier, data: T.RouterStartAnalysisPostInput, options?: RequestOptions<T.RouterStartAnalysisPostInput>) {
    return this.client.request<T.RouterStartAnalysisPostResponse, T.RouterStartAnalysisPostInput>({ ...options, method: "POST", url: `/mixed-media/${encodeURIComponent(id)}/analysis`, data: data });
  }
  /**
   * Performs the create category operation for the router capability.
   * Calls `POST /mixed-media/{id}/categories` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateCategoryPostMixedMediaIdCategories(id: Identifier, data: T.RouterCreateCategoryPostMixedMediaIdCategoriesInput, options?: RequestOptions<T.RouterCreateCategoryPostMixedMediaIdCategoriesInput>) {
    return this.client.request<T.RouterCreateCategoryPostMixedMediaIdCategoriesResponse, T.RouterCreateCategoryPostMixedMediaIdCategoriesInput>({ ...options, method: "POST", url: `/mixed-media/${encodeURIComponent(id)}/categories`, data: data });
  }
  /**
   * Performs the get settings operation for the router capability.
   * Calls `GET /mixed-media/{id}/knowledge-sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetSettingsGetMixedMediaIdKnowledgeSync(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetSettingsGetMixedMediaIdKnowledgeSyncResponse>({ ...options, method: "GET", url: `/mixed-media/${encodeURIComponent(id)}/knowledge-sync` });
  }
  /**
   * Performs the sync now operation for the router capability.
   * Calls `POST /mixed-media/{id}/knowledge-sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerSyncNowPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterSyncNowPostResponse>({ ...options, method: "POST", url: `/mixed-media/${encodeURIComponent(id)}/knowledge-sync` });
  }
  /**
   * Performs the update settings operation for the router capability.
   * Calls `PUT /mixed-media/{id}/knowledge-sync` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateSettingsPut(id: Identifier, data: T.RouterUpdateSettingsPutInput, options?: RequestOptions<T.RouterUpdateSettingsPutInput>) {
    return this.client.request<T.RouterUpdateSettingsPutResponse, T.RouterUpdateSettingsPutInput>({ ...options, method: "PUT", url: `/mixed-media/${encodeURIComponent(id)}/knowledge-sync`, data: data });
  }
  /**
   * Performs the get manifest operation for the router capability.
   * Calls `GET /mixed-media/{id}/manifest` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetManifestGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetManifestGetResponse>({ ...options, method: "GET", url: `/mixed-media/${encodeURIComponent(id)}/manifest` });
  }
  /**
   * Performs the list manifests operation for the router capability.
   * Calls `GET /mixed-media/{id}/manifests` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListManifestsGetMixedMediaIdManifests(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterListManifestsGetMixedMediaIdManifestsResponse>({ ...options, method: "GET", url: `/mixed-media/${encodeURIComponent(id)}/manifests` });
  }
  /**
   * Performs the create part operation for the router capability.
   * Calls `POST /mixed-media/{id}/parts` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreatePartPost(id: Identifier, data: T.RouterCreatePartPostInput, options?: RequestOptions<T.RouterCreatePartPostInput>) {
    return this.client.request<T.RouterCreatePartPostResponse, T.RouterCreatePartPostInput>({ ...options, method: "POST", url: `/mixed-media/${encodeURIComponent(id)}/parts`, data: data });
  }
  /**
   * Performs the publish operation for the router capability.
   * Calls `POST /mixed-media/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerPublishPostMixedMediaIdPublish(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPublishPostMixedMediaIdPublishResponse>({ ...options, method: "POST", url: `/mixed-media/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Performs the resources operation for the router capability.
   * Calls `GET /mixed-media/{id}/resources` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerResourcesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterResourcesGetResponse>({ ...options, method: "GET", url: `/mixed-media/${encodeURIComponent(id)}/resources` });
  }
  /**
   * Performs the get workflow operation for the router capability.
   * Calls `GET /mixed-media/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetWorkflowGetMixedMediaIdWorkflow(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetWorkflowGetMixedMediaIdWorkflowResponse>({ ...options, method: "GET", url: `/mixed-media/${encodeURIComponent(id)}/workflow` });
  }
  /**
   * Performs the save workflow operation for the router capability.
   * Calls `PUT /mixed-media/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerSaveWorkflowPutMixedMediaIdWorkflow(id: Identifier, data: T.RouterSaveWorkflowPutMixedMediaIdWorkflowInput, options?: RequestOptions<T.RouterSaveWorkflowPutMixedMediaIdWorkflowInput>) {
    return this.client.request<T.RouterSaveWorkflowPutMixedMediaIdWorkflowResponse, T.RouterSaveWorkflowPutMixedMediaIdWorkflowInput>({ ...options, method: "PUT", url: `/mixed-media/${encodeURIComponent(id)}/workflow`, data: data });
  }
  /**
   * Performs the delete category operation for the router capability.
   * Calls `DELETE /mixed-media/{mixed_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeleteCategoryDelete(mixedId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/mixed-media/${encodeURIComponent(mixedId)}/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update category operation for the router capability.
   * Calls `PATCH /mixed-media/{mixed_id}/categories/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateCategoryPatchMixedMediaMixedIdCategoriesId(mixedId: Identifier, id: Identifier, data: T.RouterUpdateCategoryPatchMixedMediaMixedIdCategoriesIdInput, options?: RequestOptions<T.RouterUpdateCategoryPatchMixedMediaMixedIdCategoriesIdInput>) {
    return this.client.request<T.RouterUpdateCategoryPatchMixedMediaMixedIdCategoriesIdResponse, T.RouterUpdateCategoryPatchMixedMediaMixedIdCategoriesIdInput>({ ...options, method: "PATCH", url: `/mixed-media/${encodeURIComponent(mixedId)}/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the delete part operation for the router capability.
   * Calls `DELETE /mixed-media/{mixed_id}/parts/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeletePartDelete(mixedId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeletePartDeleteResponse>({ ...options, method: "DELETE", url: `/mixed-media/${encodeURIComponent(mixedId)}/parts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get part operation for the router capability.
   * Calls `GET /mixed-media/{mixed_id}/parts/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetPartGet(mixedId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetPartGetResponse>({ ...options, method: "GET", url: `/mixed-media/${encodeURIComponent(mixedId)}/parts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update part operation for the router capability.
   * Calls `PUT /mixed-media/{mixed_id}/parts/{id}` through the shared IDP-aware Faiber client.
   * @param mixedId Backend path identifier `mixed_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdatePartPut(mixedId: Identifier, id: Identifier, data: T.RouterUpdatePartPutInput, options?: RequestOptions<T.RouterUpdatePartPutInput>) {
    return this.client.request<T.RouterUpdatePartPutResponse, T.RouterUpdatePartPutInput>({ ...options, method: "PUT", url: `/mixed-media/${encodeURIComponent(mixedId)}/parts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the health operation for the router capability.
   * Calls `GET /operations/health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerHealthGet(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetResponse>({ ...options, method: "GET", url: `/operations/health` });
  }
  /**
   * Performs the knowledge catalog operation for the router capability.
   * Calls `GET /operations/knowledge-catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerKnowledgeCatalogGet(options?: RequestOptions) {
    return this.client.request<T.RouterKnowledgeCatalogGetResponse>({ ...options, method: "GET", url: `/operations/knowledge-catalog` });
  }
  /**
   * Performs the get settings operation for the router capability.
   * Calls `GET /operations/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetSettingsGetOperationsSettings(options?: RequestOptions) {
    return this.client.request<T.RouterGetSettingsGetOperationsSettingsResponse>({ ...options, method: "GET", url: `/operations/settings` });
  }
  /**
   * Performs the update settings operation for the router capability.
   * Calls `PATCH /operations/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateSettingsPatch(data: T.RouterUpdateSettingsPatchInput, options?: RequestOptions<T.RouterUpdateSettingsPatchInput>) {
    return this.client.request<T.RouterUpdateSettingsPatchResponse, T.RouterUpdateSettingsPatchInput>({ ...options, method: "PATCH", url: `/operations/settings`, data: data });
  }
  /**
   * Performs the transcription models operation for the router capability.
   * Calls `GET /operations/transcription-models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerTranscriptionModelsGet(options?: RequestOptions) {
    return this.client.request<T.RouterTranscriptionModelsGetResponse>({ ...options, method: "GET", url: `/operations/transcription-models` });
  }
  /**
   * Performs the legacy enqueue operation for the router capability.
   * Calls `POST /packages` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerLegacyEnqueuePost(data: T.RouterLegacyEnqueuePostInput, options?: RequestOptions<T.RouterLegacyEnqueuePostInput>) {
    return this.client.request<T.RouterLegacyEnqueuePostResponse, T.RouterLegacyEnqueuePostInput>({ ...options, method: "POST", url: `/packages`, data: data });
  }
  /**
   * Performs the legacy status operation for the router capability.
   * Calls `GET /packages/{kind}/{media_id}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param mediaId Backend path identifier `media_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerLegacyStatusGet(kind: Identifier, mediaId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterLegacyStatusGetResponse>({ ...options, method: "GET", url: `/packages/${encodeURIComponent(kind)}/${encodeURIComponent(mediaId)}` });
  }
  /**
   * Performs the package file operation for the router capability.
   * Calls `GET /packages/{package_id}/files/{*path}` through the shared IDP-aware Faiber client.
   * @param packageId Backend path identifier `package_id`.
   * @param path Backend path identifier `*path`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerPackageFileGet(packageId: Identifier, path: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPackageFileGetResponse>({ ...options, method: "GET", url: `/packages/${encodeURIComponent(packageId)}/files/${encodeURIComponent(path)}` });
  }
  /**
   * Performs the status operation for the router capability.
   * Calls `GET /status` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusGetResponse>({ ...options, method: "GET", url: `/status` });
  }
  /**
   * Performs the list tags operation for the router capability.
   * Calls `GET /tags` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListTagsGet(options?: RequestOptions) {
    return this.client.request<T.RouterListTagsGetResponse>({ ...options, method: "GET", url: `/tags` });
  }
  /**
   * Performs the create tag operation for the router capability.
   * Calls `POST /tags` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateTagPost(data: T.RouterCreateTagPostInput, options?: RequestOptions<T.RouterCreateTagPostInput>) {
    return this.client.request<T.RouterCreateTagPostResponse, T.RouterCreateTagPostInput>({ ...options, method: "POST", url: `/tags`, data: data });
  }
  /**
   * Performs the delete tag operation for the router capability.
   * Calls `DELETE /tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeleteTagDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteTagDeleteResponse>({ ...options, method: "DELETE", url: `/tags/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the create upload session operation for the router capability.
   * Calls `POST /upload-sessions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateUploadSessionPost(data: T.RouterCreateUploadSessionPostInput, options?: RequestOptions<T.RouterCreateUploadSessionPostInput>) {
    return this.client.request<T.RouterCreateUploadSessionPostResponse, T.RouterCreateUploadSessionPostInput>({ ...options, method: "POST", url: `/upload-sessions`, data: data });
  }
  /**
   * Performs the cancel upload operation for the router capability.
   * Calls `DELETE /upload-sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCancelUploadDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterCancelUploadDeleteResponse>({ ...options, method: "DELETE", url: `/upload-sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get upload session operation for the router capability.
   * Calls `GET /upload-sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetUploadSessionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetUploadSessionGetResponse>({ ...options, method: "GET", url: `/upload-sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the complete upload operation for the router capability.
   * Calls `POST /upload-sessions/{id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCompleteUploadPost(id: Identifier, data: T.RouterCompleteUploadPostInput, options?: RequestOptions<T.RouterCompleteUploadPostInput>) {
    return this.client.request<T.RouterCompleteUploadPostResponse, T.RouterCompleteUploadPostInput>({ ...options, method: "POST", url: `/upload-sessions/${encodeURIComponent(id)}/complete`, data: data });
  }
  /**
   * Performs the put upload part operation for the router capability.
   * Calls `PUT /upload-sessions/{id}/parts/{part_number}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param partNumber Backend path identifier `part_number`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerPutUploadPartPut(id: Identifier, partNumber: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPutUploadPartPutResponse>({ ...options, method: "PUT", url: `/upload-sessions/${encodeURIComponent(id)}/parts/${encodeURIComponent(partNumber)}` });
  }
}
