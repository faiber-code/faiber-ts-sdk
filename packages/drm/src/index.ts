import { ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import type * as O from "./operations.types.js";

/** Complete typed client for the sandbox digital-rights media service. */
import { DrmOperations } from "./operations.js";
export class DrmApi extends ServiceApi {
    readonly operations = new DrmOperations(this.client);
  /** Checks public process liveness (dependency health is a separate operation); preserves Axios status/headers and cancellation. Calls `GET /api/v1/status`. */
  status(options?: RequestOptions) { return this.client.get<T.DrmStatus>("/api/v1/status", undefined, options); }
  /** Lists media folders; requires drm:media:read. Calls `GET /api/v1/folders`. */
  folders(options?: RequestOptions) { return this.client.get<T.DrmFolder[]>("/api/v1/folders", undefined, options); }
  /** Creates a named media folder; requires drm:media:write; empty name returns400. Calls `POST /api/v1/folders`. */
  createFolder(data: T.DrmFolderInput, options?: RequestOptions<T.DrmFolderInput>) { return this.client.post<T.DrmFolder, T.DrmFolderInput>("/api/v1/folders", data, options); }
  /** Replaces a folder name and parent; requires drm:media:write; self-parent400, missing folder404. Calls `PATCH /api/v1/folders/{id}`. */
  updateFolder(id: Identifier, data: T.DrmFolderInput, options?: RequestOptions<T.DrmFolderInput>) { return this.client.patch<T.DrmFolder, T.DrmFolderInput>(`/api/v1/folders/${encodeURIComponent(id)}`, data, options); }
  /** Deletes a folder and returns the full204 Axios response; requires drm:media:write. Calls `DELETE /api/v1/folders/{id}`. */
  deleteFolder(id: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/folders/${encodeURIComponent(id)}`, options); }
  /** Lists tags by name; requires drm:media:read; preserves full Axios response and errors. Calls `GET /api/v1/tags`. */
  tags(options?: RequestOptions) { return this.client.get<T.DrmTag[]>("/api/v1/tags", undefined, options); }
  /** Creates a nonempty media tag; requires drm:media:write; empty name400. Calls `POST /api/v1/tags`. */
  createTag(data: T.DrmTagInput, options?: RequestOptions<T.DrmTagInput>) { return this.client.post<T.DrmTag, T.DrmTagInput>("/api/v1/tags", data, options); }
  /** Deletes a tag and returns the full204 Axios response; requires drm:media:write. Calls `DELETE /api/v1/tags/{id}`. */
  deleteTag(id: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/tags/${encodeURIComponent(id)}`, options); }
  /** Searches paginated audio/video/image media with tag/folder/type filters; defaults page1,size30 (clamps1..100); requires drm:media:read. Calls `GET /api/v1/media`. */
  media(params?: T.DrmMediaListQuery, options?: RequestOptions) { return this.client.get<T.DrmMediaPage>("/api/v1/media", params, options); }
  /** Gets flattened media metadata, tags and nullable transcription; requires drm:media:read; missing media404. Calls `GET /api/v1/media/{id}`. */
  medium(id: Identifier, options?: RequestOptions) { return this.client.get<T.DrmMediaRecord>(`/api/v1/media/${encodeURIComponent(id)}`, undefined, options); }
  /** Gets up to 50 media records in one ordered request. Calls `POST /api/v1/media/batch`; requires `drm:media:read`. */
  batchMedia(data:T.DrmBatchMediaInput,options?:RequestOptions<T.DrmBatchMediaInput>){return this.client.post<T.DrmMediaRecord[],T.DrmBatchMediaInput>("/api/v1/media/batch",data,options);}
  /** Uploads audio/video/image with optional metadata and explicit filename; requires drm:media:write; MIME validation400; returns201. Calls `POST /api/v1/media` as multipart form data. */
  uploadMedia(input: T.DrmMediaUpload, options?: RequestOptions<FormData>) {
    const data = new FormData();
    data.append("file", input.file, input.filename ?? (typeof File !== "undefined" && input.file instanceof File ? input.file.name : "upload"));
    if (input.name !== undefined) data.append("name", input.name);
    if (input.description !== undefined) data.append("description", input.description);
    if (input.folder_id !== undefined) data.append("folder_id", input.folder_id ?? "");
    if (input.tag_ids !== undefined) data.append("tag_ids", JSON.stringify(input.tag_ids));
    return this.client.post<T.DrmMediaRecord, FormData>("/api/v1/media", data, options);
  }
  /** Patches media metadata or replaces tag links; requires drm:media:write; folder_id:null preserves at this pin; missing media404. Calls `PATCH /api/v1/media/{id}`. */
  updateMedia(id: Identifier, data: T.DrmMediaUpdate, options?: RequestOptions<T.DrmMediaUpdate>) { return this.client.patch<T.DrmMediaRecord, T.DrmMediaUpdate>(`/api/v1/media/${encodeURIComponent(id)}`, data, options); }
  /** Deletes media metadata and stored objects; requires drm:media:write; attached content409; success204. Calls `DELETE /api/v1/media/{id}`. */
  deleteMedia(id: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/media/${encodeURIComponent(id)}`, options); }
  /** Creates a15-minute signed original playback URL, independent of DRM state; requires drm:media:read; archived/missing media404. Calls `GET /api/v1/media/{id}/playback`. */
  playback(id: Identifier, options?: RequestOptions) { return this.client.get<T.DrmPlayback>(`/api/v1/media/${encodeURIComponent(id)}/playback`, undefined, options); }
  /** Read a temporary ClearKey license using required package_id; requires drm:license:read. */
  clearKeyLicense(params: O.RouterClearKeyLicenseGetQuery, options?: RequestOptions) { return this.operations.routerClearKeyLicenseGet(params, options); }
  /** Convenience wrapper for {@link DrmOperations.routerRegisterExistingMediaPost}; preserves its parameters, permissions, Axios response and errors. */
  registerExistingMedia(data: O.RouterRegisterExistingMediaPostInput, options?: RequestOptions<O.RouterRegisterExistingMediaPostInput>) { return this.operations.routerRegisterExistingMediaPost(data, options); }

  /** Convenience wrapper for {@link DrmOperations.routerDashboardGet}; preserves its parameters, permissions, Axios response and errors. */
  dashboardSummary(options?: RequestOptions) { return this.operations.routerDashboardGet(options); }
  /** Read effective package/job status for comma-separated UUID ids; requires drm:media:read. */
  drmStatuses(params: O.RouterDrmStatusesGetQuery, options?: RequestOptions) { return this.operations.routerDrmStatusesGet(params, options); }
  /** Convenience wrapper for {@link DrmOperations.routerAuditEventsGet}; preserves its parameters, permissions, Axios response and errors. */
  auditEvents(params?: O.RouterAuditEventsGetQuery, options?: RequestOptions) { return this.operations.routerAuditEventsGet(params, options); }
  /** Convenience wrapper for {@link DrmOperations.routerListExternalReferencesGet}; preserves its parameters, permissions, Axios response and errors. */
  externalReferences(params?: O.RouterListExternalReferencesGetQuery, options?: RequestOptions) { return this.operations.routerListExternalReferencesGet(params, options); }
  /** Convenience wrapper for {@link DrmOperations.routerUpsertExternalReferencePost}; preserves its parameters, permissions, Axios response and errors. */
  upsertExternalReference(data: O.RouterUpsertExternalReferencePostInput, options?: RequestOptions<O.RouterUpsertExternalReferencePostInput>) { return this.operations.routerUpsertExternalReferencePost(data, options); }

  /** Convenience wrapper for {@link DrmOperations.routerListLibrariesGet}; preserves its parameters, permissions, Axios response and errors. */
  listLibraries(options?: RequestOptions) { return this.operations.routerListLibrariesGet(options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreateLibraryPost}; preserves its parameters, permissions, Axios response and errors. */
  createLibrary(data: O.RouterCreateLibraryPostInput, options?: RequestOptions<O.RouterCreateLibraryPostInput>) { return this.operations.routerCreateLibraryPost(data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetLibraryGet}; preserves its parameters, permissions, Axios response and errors. */
  library(id: Identifier, options?: RequestOptions) { return this.operations.routerGetLibraryGet(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerUpdateLibraryPatch}; preserves its parameters, permissions, Axios response and errors. */
  updateLibrary(id: Identifier, data: O.RouterUpdateLibraryPatchInput, options?: RequestOptions<O.RouterUpdateLibraryPatchInput>) { return this.operations.routerUpdateLibraryPatch(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerDeleteLibraryDelete}; preserves its parameters, permissions, Axios response and errors. */
  deleteLibrary(id: Identifier, options?: RequestOptions) { return this.operations.routerDeleteLibraryDelete(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerLibraryStatsGet}; preserves its parameters, permissions, Axios response and errors. */
  libraryStats(id: Identifier, options?: RequestOptions) { return this.operations.routerLibraryStatsGet(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerListCategoriesGet}; preserves its parameters, permissions, Axios response and errors. */
  libraryCategories(id: Identifier, options?: RequestOptions) { return this.operations.routerListCategoriesGet(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreateCategoryPostApiV1LibrariesIdCategories}; preserves its parameters, permissions, Axios response and errors. */
  createLibraryCategory(id: Identifier, data: O.RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput, options?: RequestOptions<O.RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput>) { return this.operations.routerCreateCategoryPostApiV1LibrariesIdCategories(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesId}; preserves its parameters, permissions, Axios response and errors. */
  updateLibraryCategory(libraryId: Identifier, categoryId: Identifier, data: O.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput, options?: RequestOptions<O.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput>) { return this.operations.routerUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesId(libraryId, categoryId, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerArchiveCategoryDelete}; preserves its parameters, permissions, Axios response and errors. */
  archiveLibraryCategory(libraryId: Identifier, categoryId: Identifier, options?: RequestOptions) { return this.operations.routerArchiveCategoryDelete(libraryId, categoryId, options); }
  /** Convenience wrapper for {@link DrmOperations.routerListItemsGet}; preserves its parameters, permissions, Axios response and errors. */
  libraryItems(id: Identifier, options?: RequestOptions) { return this.operations.routerListItemsGet(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerQueryItemsGet}; preserves its parameters, permissions, Axios response and errors. */
  queryLibraryItems(id: Identifier, params?: O.RouterQueryItemsGetQuery, options?: RequestOptions) { return this.operations.routerQueryItemsGet(id, params, options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreateItemPost}; preserves its parameters, permissions, Axios response and errors. */
  createLibraryItem(id: Identifier, data: O.RouterCreateItemPostInput, options?: RequestOptions<O.RouterCreateItemPostInput>) { return this.operations.routerCreateItemPost(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetItemGet}; preserves its parameters, permissions, Axios response and errors. */
  libraryItem(libraryId: Identifier, itemId: Identifier, options?: RequestOptions) { return this.operations.routerGetItemGet(libraryId, itemId, options); }
  /** Convenience wrapper for {@link DrmOperations.routerUpdateItemPut}; preserves its parameters, permissions, Axios response and errors. */
  updateLibraryItem(libraryId: Identifier, itemId: Identifier, data: O.RouterUpdateItemPutInput, options?: RequestOptions<O.RouterUpdateItemPutInput>) { return this.operations.routerUpdateItemPut(libraryId, itemId, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerArchiveItemDelete}; preserves its parameters, permissions, Axios response and errors. */
  archiveLibraryItem(libraryId: Identifier, itemId: Identifier, options?: RequestOptions) { return this.operations.routerArchiveItemDelete(libraryId, itemId, options); }
  /** Convenience wrapper for {@link DrmOperations.routerItemAttachmentsGet}; preserves its parameters, permissions, Axios response and errors. */
  libraryItemAttachments(libraryId: Identifier, itemId: Identifier, options?: RequestOptions) { return this.operations.routerItemAttachmentsGet(libraryId, itemId, options); }
  /** Convenience wrapper for {@link DrmOperations.routerAttachMediaPost}; preserves its parameters, permissions, Axios response and errors. */
  attachLibraryMedia(libraryId: Identifier, itemId: Identifier, data: O.RouterAttachMediaPostInput, options?: RequestOptions<O.RouterAttachMediaPostInput>) { return this.operations.routerAttachMediaPost(libraryId, itemId, data, options); }

  /** Convenience wrapper for {@link DrmOperations.routerListCompositionCategoriesGet}; preserves its parameters, permissions, Axios response and errors. */
  listCompositionCategories(options?: RequestOptions) { return this.operations.routerListCompositionCategoriesGet(options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreateCompositionCategoryPost}; preserves its parameters, permissions, Axios response and errors. */
  createCompositionCategory(data: O.RouterCreateCompositionCategoryPostInput, options?: RequestOptions<O.RouterCreateCompositionCategoryPostInput>) { return this.operations.routerCreateCompositionCategoryPost(data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerUpdateCompositionCategoryPatch}; preserves its parameters, permissions, Axios response and errors. */
  updateCompositionCategory(id: Identifier, data: O.RouterUpdateCompositionCategoryPatchInput, options?: RequestOptions<O.RouterUpdateCompositionCategoryPatchInput>) { return this.operations.routerUpdateCompositionCategoryPatch(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerDeleteCompositionCategoryDelete}; preserves its parameters, permissions, Axios response and errors. */
  deleteCompositionCategory(id: Identifier, options?: RequestOptions) { return this.operations.routerDeleteCompositionCategoryDelete(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerListCompositionsGet}; preserves its parameters, permissions, Axios response and errors. */
  listCompositions(params?: O.RouterListCompositionsGetQuery, options?: RequestOptions) { return this.operations.routerListCompositionsGet(params, options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreateCompositionPost}; preserves its parameters, permissions, Axios response and errors. */
  createComposition(data: O.RouterCreateCompositionPostInput, options?: RequestOptions<O.RouterCreateCompositionPostInput>) { return this.operations.routerCreateCompositionPost(data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetWorkflowGetApiV1CompositionsIdWorkflow}; preserves its parameters, permissions, Axios response and errors. */
  compositionWorkflow(id: Identifier, options?: RequestOptions) { return this.operations.routerGetWorkflowGetApiV1CompositionsIdWorkflow(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerSaveWorkflowPutApiV1CompositionsIdWorkflow}; preserves its parameters, permissions, Axios response and errors. */
  saveCompositionWorkflow(id: Identifier, data: O.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput, options?: RequestOptions<O.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput>) { return this.operations.routerSaveWorkflowPutApiV1CompositionsIdWorkflow(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerListManifestsGetApiV1CompositionsIdManifests}; preserves its parameters, permissions, Axios response and errors. */
  compositionManifests(id: Identifier, options?: RequestOptions) { return this.operations.routerListManifestsGetApiV1CompositionsIdManifests(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreateManifestVersionPost}; preserves its parameters, permissions, Axios response and errors. */
  createCompositionManifest(id: Identifier, data: O.RouterCreateManifestVersionPostInput, options?: RequestOptions<O.RouterCreateManifestVersionPostInput>) { return this.operations.routerCreateManifestVersionPost(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerPublishPostApiV1CompositionsIdPublish}; preserves its parameters, permissions, Axios response and errors. */
  publishComposition(id: Identifier, options?: RequestOptions) { return this.operations.routerPublishPostApiV1CompositionsIdPublish(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerListAnalysesGet}; preserves its parameters, permissions, Axios response and errors. */
  compositionAnalyses(params?: O.RouterListAnalysesGetQuery, options?: RequestOptions) { return this.operations.routerListAnalysesGet(params, options); }

  /** Convenience wrapper for {@link DrmOperations.routerListMixedMediaGet}; preserves its parameters, permissions, Axios response and errors. */
  listMixedMedia(options?: RequestOptions) { return this.operations.routerListMixedMediaGet(options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreateMixedMediaPost}; preserves its parameters, permissions, Axios response and errors. */
  createMixedMedia(data: O.RouterCreateMixedMediaPostInput, options?: RequestOptions<O.RouterCreateMixedMediaPostInput>) { return this.operations.routerCreateMixedMediaPost(data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetMixedMediaGet}; preserves its parameters, permissions, Axios response and errors. */
  mixedMedia(id: Identifier, options?: RequestOptions) { return this.operations.routerGetMixedMediaGet(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerUpdateMixedMediaPatch}; preserves its parameters, permissions, Axios response and errors. */
  updateMixedMedia(id: Identifier, data: O.RouterUpdateMixedMediaPatchInput, options?: RequestOptions<O.RouterUpdateMixedMediaPatchInput>) { return this.operations.routerUpdateMixedMediaPatch(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerDeleteMixedMediaDelete}; preserves its parameters, permissions, Axios response and errors. */
  deleteMixedMedia(id: Identifier, options?: RequestOptions) { return this.operations.routerDeleteMixedMediaDelete(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerResourcesGet}; preserves its parameters, permissions, Axios response and errors. */
  mixedMediaResources(id: Identifier, options?: RequestOptions) { return this.operations.routerResourcesGet(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetManifestGet}; preserves its parameters, permissions, Axios response and errors. */
  mixedMediaManifest(id: Identifier, options?: RequestOptions) { return this.operations.routerGetManifestGet(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerListManifestsGetApiV1MixedMediaIdManifests}; preserves its parameters, permissions, Axios response and errors. */
  mixedMediaManifests(id: Identifier, options?: RequestOptions) { return this.operations.routerListManifestsGetApiV1MixedMediaIdManifests(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetWorkflowGetApiV1MixedMediaIdWorkflow}; preserves its parameters, permissions, Axios response and errors. */
  mixedMediaWorkflow(id: Identifier, options?: RequestOptions) { return this.operations.routerGetWorkflowGetApiV1MixedMediaIdWorkflow(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerSaveWorkflowPutApiV1MixedMediaIdWorkflow}; preserves its parameters, permissions, Axios response and errors. */
  saveMixedMediaWorkflow(id: Identifier, data: O.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput, options?: RequestOptions<O.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput>) { return this.operations.routerSaveWorkflowPutApiV1MixedMediaIdWorkflow(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerPublishPostApiV1MixedMediaIdPublish}; preserves its parameters, permissions, Axios response and errors. */
  publishMixedMedia(id: Identifier, options?: RequestOptions) { return this.operations.routerPublishPostApiV1MixedMediaIdPublish(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetAnalysisGet}; preserves its parameters, permissions, Axios response and errors. */
  mixedMediaAnalysis(id: Identifier, options?: RequestOptions) { return this.operations.routerGetAnalysisGet(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerStartAnalysisPost}; preserves its parameters, permissions, Axios response and errors. */
  startMixedMediaAnalysis(id: Identifier, data: O.RouterStartAnalysisPostInput, options?: RequestOptions<O.RouterStartAnalysisPostInput>) { return this.operations.routerStartAnalysisPost(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreateCategoryPostApiV1MixedMediaIdCategories}; preserves its parameters, permissions, Axios response and errors. */
  createMixedMediaCategory(id: Identifier, data: O.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput, options?: RequestOptions<O.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput>) { return this.operations.routerCreateCategoryPostApiV1MixedMediaIdCategories(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesId}; preserves its parameters, permissions, Axios response and errors. */
  updateMixedMediaCategory(mixedId: Identifier, id: Identifier, data: O.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput, options?: RequestOptions<O.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput>) { return this.operations.routerUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesId(mixedId, id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerDeleteCategoryDelete}; preserves its parameters, permissions, Axios response and errors. */
  deleteMixedMediaCategory(mixedId: Identifier, id: Identifier, options?: RequestOptions) { return this.operations.routerDeleteCategoryDelete(mixedId, id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreatePartPost}; preserves its parameters, permissions, Axios response and errors. */
  createMixedMediaPart(id: Identifier, data: O.RouterCreatePartPostInput, options?: RequestOptions<O.RouterCreatePartPostInput>) { return this.operations.routerCreatePartPost(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetPartGet}; preserves its parameters, permissions, Axios response and errors. */
  mixedMediaPart(mixedId: Identifier, id: Identifier, options?: RequestOptions) { return this.operations.routerGetPartGet(mixedId, id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerUpdatePartPut}; preserves its parameters, permissions, Axios response and errors. */
  updateMixedMediaPart(mixedId: Identifier, id: Identifier, data: O.RouterUpdatePartPutInput, options?: RequestOptions<O.RouterUpdatePartPutInput>) { return this.operations.routerUpdatePartPut(mixedId, id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerDeletePartDelete}; preserves its parameters, permissions, Axios response and errors. */
  deleteMixedMediaPart(mixedId: Identifier, id: Identifier, options?: RequestOptions) { return this.operations.routerDeletePartDelete(mixedId, id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetSettingsGetApiV1MixedMediaIdKnowledgeSync}; preserves its parameters, permissions, Axios response and errors. */
  mixedMediaKnowledgeSync(id: Identifier, options?: RequestOptions) { return this.operations.routerGetSettingsGetApiV1MixedMediaIdKnowledgeSync(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerUpdateSettingsPut}; preserves its parameters, permissions, Axios response and errors. */
  updateMixedMediaKnowledgeSync(id: Identifier, data: O.RouterUpdateSettingsPutInput, options?: RequestOptions<O.RouterUpdateSettingsPutInput>) { return this.operations.routerUpdateSettingsPut(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerSyncNowPost}; preserves its parameters, permissions, Axios response and errors. */
  syncMixedMediaKnowledge(id: Identifier, options?: RequestOptions) { return this.operations.routerSyncNowPost(id, options); }

  /** Convenience wrapper for {@link DrmOperations.routerListJobsGet}; preserves its parameters, permissions, Axios response and errors. */
  packageJobs(params?: O.RouterListJobsGetQuery, options?: RequestOptions) { return this.operations.routerListJobsGet(params, options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreateJobPost}; preserves its parameters, permissions, Axios response and errors. */
  createPackageJob(data: O.RouterCreateJobPostInput, options?: RequestOptions<O.RouterCreateJobPostInput>) { return this.operations.routerCreateJobPost(data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerCancelJobDelete}; preserves its parameters, permissions, Axios response and errors. */
  cancelPackageJob(id: Identifier, options?: RequestOptions) { return this.operations.routerCancelJobDelete(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerRetryJobPost}; preserves its parameters, permissions, Axios response and errors. */
  retryPackageJob(id: Identifier, data: O.RouterRetryJobPostInput, options?: RequestOptions<O.RouterRetryJobPostInput>) { return this.operations.routerRetryJobPost(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerRetryAllFailedPost}; preserves its parameters, permissions, Axios response and errors. */
  retryAllFailedPackageJobs(options?: RequestOptions) { return this.operations.routerRetryAllFailedPost(options); }
  /** Convenience wrapper for {@link DrmOperations.routerListPackagesGet}; preserves its parameters, permissions, Axios response and errors. */
  mediaPackages(id: Identifier, options?: RequestOptions) { return this.operations.routerListPackagesGet(id, options); }
  /** Convenience wrapper for {@link DrmOperations.routerRegeneratePost}; preserves its parameters, permissions, Axios response and errors. */
  regenerateMediaPackages(id: Identifier, data: O.RouterRegeneratePostInput, options?: RequestOptions<O.RouterRegeneratePostInput>) { return this.operations.routerRegeneratePost(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerArchivePackageDelete}; preserves its parameters, permissions, Axios response and errors. */
  archiveMediaPackage(id: Identifier, options?: RequestOptions) { return this.operations.routerArchivePackageDelete(id, options); }
  /** Download ready package bytes, preserving Range response metadata; requires drm:package:read. */
  packageFile(packageId: Identifier, path: string, options?: RequestOptions) { return this.operations.routerPackageFileGet(packageId, path, options); }
  /** Convenience wrapper for {@link DrmOperations.routerHealthGet}; preserves its parameters, permissions, Axios response and errors. */
  operationsHealth(options?: RequestOptions) { return this.operations.routerHealthGet(options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetSettingsGetApiV1OperationsSettings}; preserves its parameters, permissions, Axios response and errors. */
  operationsSettings(options?: RequestOptions) { return this.operations.routerGetSettingsGetApiV1OperationsSettings(options); }
  /** Convenience wrapper for {@link DrmOperations.routerUpdateSettingsPatch}; preserves its parameters, permissions, Axios response and errors. */
  updateOperationsSettings(data: O.RouterUpdateSettingsPatchInput, options?: RequestOptions<O.RouterUpdateSettingsPatchInput>) { return this.operations.routerUpdateSettingsPatch(data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerTranscriptionModelsGet}; preserves its parameters, permissions, Axios response and errors. */
  transcriptionModels(options?: RequestOptions) { return this.operations.routerTranscriptionModelsGet(options); }
  /** Convenience wrapper for {@link DrmOperations.routerKnowledgeCatalogGet}; preserves its parameters, permissions, Axios response and errors. */
  knowledgeCatalog(options?: RequestOptions) { return this.operations.routerKnowledgeCatalogGet(options); }
  /** Convenience wrapper for {@link DrmOperations.routerCreateUploadSessionPost}; preserves its parameters, permissions, Axios response and errors. */
  createUploadSession(data: O.RouterCreateUploadSessionPostInput, options?: RequestOptions<O.RouterCreateUploadSessionPostInput>) { return this.operations.routerCreateUploadSessionPost(data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerGetUploadSessionGet}; preserves its parameters, permissions, Axios response and errors. */
  uploadSession(id: Identifier, options?: RequestOptions) { return this.operations.routerGetUploadSessionGet(id, options); }
  /** Upload raw session bytes; part numbers are integers1..10000 and require drm:media:write. */
  uploadPart(id: Identifier, partNumber: number, data: O.RouterPutUploadPartPutInput, options?: RequestOptions<O.RouterPutUploadPartPutInput>) { return this.operations.routerPutUploadPartPut(id, partNumber, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerCompleteUploadPost}; preserves its parameters, permissions, Axios response and errors. */
  completeUpload(id: Identifier, data: O.RouterCompleteUploadPostInput, options?: RequestOptions<O.RouterCompleteUploadPostInput>) { return this.operations.routerCompleteUploadPost(id, data, options); }
  /** Convenience wrapper for {@link DrmOperations.routerCancelUploadDelete}; preserves its parameters, permissions, Axios response and errors. */
  cancelUpload(id: Identifier, options?: RequestOptions) { return this.operations.routerCancelUploadDelete(id, options); }
}

export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
