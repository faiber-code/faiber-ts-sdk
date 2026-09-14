import { ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import type * as O from "./operations.types.js";

/** Complete typed client for the sandbox digital-rights media service. */
import { DrmOperations } from "./operations.js";
export class DrmApi extends ServiceApi {
    readonly operations = new DrmOperations(this.client);
  /** Checks DRM service readiness. Calls `GET /api/v1/status`. */
  status(options?: RequestOptions) { return this.client.get<T.DrmStatus>("/api/v1/status", undefined, options); }
  /** Lists media folders. Calls `GET /api/v1/folders`. */
  folders(options?: RequestOptions) { return this.client.get<T.DrmFolder[]>("/api/v1/folders", undefined, options); }
  /** Creates a media folder. Calls `POST /api/v1/folders`. */
  createFolder(data: T.DrmFolderInput, options?: RequestOptions<T.DrmFolderInput>) { return this.client.post<T.DrmFolder, T.DrmFolderInput>("/api/v1/folders", data, options); }
  /** Replaces a folder's mutable name and parent. Calls `PATCH /api/v1/folders/{id}`. */
  updateFolder(id: Identifier, data: T.DrmFolderInput, options?: RequestOptions<T.DrmFolderInput>) { return this.client.patch<T.DrmFolder, T.DrmFolderInput>(`/api/v1/folders/${encodeURIComponent(id)}`, data, options); }
  /** Deletes a folder and returns the full 204 Axios response. Calls `DELETE /api/v1/folders/{id}`. */
  deleteFolder(id: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/folders/${encodeURIComponent(id)}`, options); }
  /** Lists media tags. Calls `GET /api/v1/tags`. */
  tags(options?: RequestOptions) { return this.client.get<T.DrmTag[]>("/api/v1/tags", undefined, options); }
  /** Creates a media tag. Calls `POST /api/v1/tags`. */
  createTag(data: T.DrmTagInput, options?: RequestOptions<T.DrmTagInput>) { return this.client.post<T.DrmTag, T.DrmTagInput>("/api/v1/tags", data, options); }
  /** Deletes a tag and returns the full 204 Axios response. Calls `DELETE /api/v1/tags/{id}`. */
  deleteTag(id: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/tags/${encodeURIComponent(id)}`, options); }
  /** Searches and filters paginated audio/video media. Calls `GET /api/v1/media`. */
  media(params?: T.DrmMediaListQuery, options?: RequestOptions) { return this.client.get<T.DrmMediaPage>("/api/v1/media", params, options); }
  /** Gets media metadata and tags. Calls `GET /api/v1/media/{id}`. */
  medium(id: Identifier, options?: RequestOptions) { return this.client.get<T.DrmMediaRecord>(`/api/v1/media/${encodeURIComponent(id)}`, undefined, options); }
  /** Gets up to 50 media records in one ordered request. Calls `POST /api/v1/media/batch`; requires `drm:media:read`. */
  batchMedia(data:T.DrmBatchMediaInput,options?:RequestOptions<T.DrmBatchMediaInput>){return this.client.post<T.DrmMediaRecord[],T.DrmBatchMediaInput>("/api/v1/media/batch",data,options);}
  /** Uploads audio/video with optional metadata. Calls `POST /api/v1/media` as multipart form data. */
  uploadMedia(input: T.DrmMediaUpload, options?: RequestOptions<FormData>) {
    const data = new FormData();
    data.append("file", input.file);
    if (input.name !== undefined) data.append("name", input.name);
    if (input.description !== undefined) data.append("description", input.description);
    if (input.folder_id !== undefined) data.append("folder_id", input.folder_id ?? "");
    if (input.tag_ids !== undefined) data.append("tag_ids", JSON.stringify(input.tag_ids));
    return this.client.post<T.DrmMediaRecord, FormData>("/api/v1/media", data, options);
  }
  /** Updates media metadata or tag links. Calls `PATCH /api/v1/media/{id}`. */
  updateMedia(id: Identifier, data: T.DrmMediaUpdate, options?: RequestOptions<T.DrmMediaUpdate>) { return this.client.patch<T.DrmMediaRecord, T.DrmMediaUpdate>(`/api/v1/media/${encodeURIComponent(id)}`, data, options); }
  /** Deletes media metadata and stored object. Calls `DELETE /api/v1/media/{id}`. */
  deleteMedia(id: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/media/${encodeURIComponent(id)}`, options); }
  /** Creates a 15-minute signed playback URL for active media. Calls `GET /api/v1/media/{id}/playback`. */
  playback(id: Identifier, options?: RequestOptions) { return this.client.get<T.DrmPlayback>(`/api/v1/media/${encodeURIComponent(id)}/playback`, undefined, options); }
  clearKeyLicense(params?: O.RouterClearKeyLicenseGetQuery, options?: RequestOptions) { return this.operations.routerClearKeyLicenseGet(params, options); }
  registerExistingMedia(data: O.RouterRegisterExistingMediaPostInput, options?: RequestOptions<O.RouterRegisterExistingMediaPostInput>) { return this.operations.routerRegisterExistingMediaPost(data, options); }

  dashboardSummary(options?: RequestOptions) { return this.operations.routerDashboardGet(options); }
  drmStatuses(params?: O.RouterDrmStatusesGetQuery, options?: RequestOptions) { return this.operations.routerDrmStatusesGet(params, options); }
  auditEvents(params?: O.RouterAuditEventsGetQuery, options?: RequestOptions) { return this.operations.routerAuditEventsGet(params, options); }
  externalReferences(params?: O.RouterListExternalReferencesGetQuery, options?: RequestOptions) { return this.operations.routerListExternalReferencesGet(params, options); }
  upsertExternalReference(data: O.RouterUpsertExternalReferencePostInput, options?: RequestOptions<O.RouterUpsertExternalReferencePostInput>) { return this.operations.routerUpsertExternalReferencePost(data, options); }

  listLibraries(options?: RequestOptions) { return this.operations.routerListLibrariesGet(options); }
  createLibrary(data: O.RouterCreateLibraryPostInput, options?: RequestOptions<O.RouterCreateLibraryPostInput>) { return this.operations.routerCreateLibraryPost(data, options); }
  library(id: Identifier, options?: RequestOptions) { return this.operations.routerGetLibraryGet(id, options); }
  updateLibrary(id: Identifier, data: O.RouterUpdateLibraryPatchInput, options?: RequestOptions<O.RouterUpdateLibraryPatchInput>) { return this.operations.routerUpdateLibraryPatch(id, data, options); }
  deleteLibrary(id: Identifier, options?: RequestOptions) { return this.operations.routerDeleteLibraryDelete(id, options); }
  libraryStats(id: Identifier, options?: RequestOptions) { return this.operations.routerLibraryStatsGet(id, options); }
  libraryCategories(id: Identifier, options?: RequestOptions) { return this.operations.routerListCategoriesGet(id, options); }
  createLibraryCategory(id: Identifier, data: O.RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput, options?: RequestOptions<O.RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput>) { return this.operations.routerCreateCategoryPostApiV1LibrariesIdCategories(id, data, options); }
  updateLibraryCategory(libraryId: Identifier, categoryId: Identifier, data: O.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput, options?: RequestOptions<O.RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput>) { return this.operations.routerUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesId(libraryId, categoryId, data, options); }
  archiveLibraryCategory(libraryId: Identifier, categoryId: Identifier, options?: RequestOptions) { return this.operations.routerArchiveCategoryDelete(libraryId, categoryId, options); }
  libraryItems(id: Identifier, options?: RequestOptions) { return this.operations.routerListItemsGet(id, options); }
  queryLibraryItems(id: Identifier, params?: O.RouterQueryItemsGetQuery, options?: RequestOptions) { return this.operations.routerQueryItemsGet(id, params, options); }
  createLibraryItem(id: Identifier, data: O.RouterCreateItemPostInput, options?: RequestOptions<O.RouterCreateItemPostInput>) { return this.operations.routerCreateItemPost(id, data, options); }
  libraryItem(libraryId: Identifier, itemId: Identifier, options?: RequestOptions) { return this.operations.routerGetItemGet(libraryId, itemId, options); }
  updateLibraryItem(libraryId: Identifier, itemId: Identifier, data: O.RouterUpdateItemPutInput, options?: RequestOptions<O.RouterUpdateItemPutInput>) { return this.operations.routerUpdateItemPut(libraryId, itemId, data, options); }
  archiveLibraryItem(libraryId: Identifier, itemId: Identifier, options?: RequestOptions) { return this.operations.routerArchiveItemDelete(libraryId, itemId, options); }
  libraryItemAttachments(libraryId: Identifier, itemId: Identifier, options?: RequestOptions) { return this.operations.routerItemAttachmentsGet(libraryId, itemId, options); }
  attachLibraryMedia(libraryId: Identifier, itemId: Identifier, data: O.RouterAttachMediaPostInput, options?: RequestOptions<O.RouterAttachMediaPostInput>) { return this.operations.routerAttachMediaPost(libraryId, itemId, data, options); }

  listCompositionCategories(options?: RequestOptions) { return this.operations.routerListCompositionCategoriesGet(options); }
  createCompositionCategory(data: O.RouterCreateCompositionCategoryPostInput, options?: RequestOptions<O.RouterCreateCompositionCategoryPostInput>) { return this.operations.routerCreateCompositionCategoryPost(data, options); }
  updateCompositionCategory(id: Identifier, data: O.RouterUpdateCompositionCategoryPatchInput, options?: RequestOptions<O.RouterUpdateCompositionCategoryPatchInput>) { return this.operations.routerUpdateCompositionCategoryPatch(id, data, options); }
  deleteCompositionCategory(id: Identifier, options?: RequestOptions) { return this.operations.routerDeleteCompositionCategoryDelete(id, options); }
  listCompositions(params?: O.RouterListCompositionsGetQuery, options?: RequestOptions) { return this.operations.routerListCompositionsGet(params, options); }
  createComposition(data: O.RouterCreateCompositionPostInput, options?: RequestOptions<O.RouterCreateCompositionPostInput>) { return this.operations.routerCreateCompositionPost(data, options); }
  compositionWorkflow(id: Identifier, options?: RequestOptions) { return this.operations.routerGetWorkflowGetApiV1CompositionsIdWorkflow(id, options); }
  saveCompositionWorkflow(id: Identifier, data: O.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput, options?: RequestOptions<O.RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput>) { return this.operations.routerSaveWorkflowPutApiV1CompositionsIdWorkflow(id, data, options); }
  compositionManifests(id: Identifier, options?: RequestOptions) { return this.operations.routerListManifestsGetApiV1CompositionsIdManifests(id, options); }
  createCompositionManifest(id: Identifier, data: O.RouterCreateManifestVersionPostInput, options?: RequestOptions<O.RouterCreateManifestVersionPostInput>) { return this.operations.routerCreateManifestVersionPost(id, data, options); }
  publishComposition(id: Identifier, options?: RequestOptions) { return this.operations.routerPublishPostApiV1CompositionsIdPublish(id, options); }
  compositionAnalyses(params?: O.RouterListAnalysesGetQuery, options?: RequestOptions) { return this.operations.routerListAnalysesGet(params, options); }

  listMixedMedia(options?: RequestOptions) { return this.operations.routerListMixedMediaGet(options); }
  createMixedMedia(data: O.RouterCreateMixedMediaPostInput, options?: RequestOptions<O.RouterCreateMixedMediaPostInput>) { return this.operations.routerCreateMixedMediaPost(data, options); }
  mixedMedia(id: Identifier, options?: RequestOptions) { return this.operations.routerGetMixedMediaGet(id, options); }
  updateMixedMedia(id: Identifier, data: O.RouterUpdateMixedMediaPatchInput, options?: RequestOptions<O.RouterUpdateMixedMediaPatchInput>) { return this.operations.routerUpdateMixedMediaPatch(id, data, options); }
  deleteMixedMedia(id: Identifier, options?: RequestOptions) { return this.operations.routerDeleteMixedMediaDelete(id, options); }
  mixedMediaResources(id: Identifier, options?: RequestOptions) { return this.operations.routerResourcesGet(id, options); }
  mixedMediaManifest(id: Identifier, options?: RequestOptions) { return this.operations.routerGetManifestGet(id, options); }
  mixedMediaManifests(id: Identifier, options?: RequestOptions) { return this.operations.routerListManifestsGetApiV1MixedMediaIdManifests(id, options); }
  mixedMediaWorkflow(id: Identifier, options?: RequestOptions) { return this.operations.routerGetWorkflowGetApiV1MixedMediaIdWorkflow(id, options); }
  saveMixedMediaWorkflow(id: Identifier, data: O.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput, options?: RequestOptions<O.RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput>) { return this.operations.routerSaveWorkflowPutApiV1MixedMediaIdWorkflow(id, data, options); }
  publishMixedMedia(id: Identifier, options?: RequestOptions) { return this.operations.routerPublishPostApiV1MixedMediaIdPublish(id, options); }
  mixedMediaAnalysis(id: Identifier, options?: RequestOptions) { return this.operations.routerGetAnalysisGet(id, options); }
  startMixedMediaAnalysis(id: Identifier, data: O.RouterStartAnalysisPostInput, options?: RequestOptions<O.RouterStartAnalysisPostInput>) { return this.operations.routerStartAnalysisPost(id, data, options); }
  createMixedMediaCategory(id: Identifier, data: O.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput, options?: RequestOptions<O.RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput>) { return this.operations.routerCreateCategoryPostApiV1MixedMediaIdCategories(id, data, options); }
  updateMixedMediaCategory(mixedId: Identifier, id: Identifier, data: O.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput, options?: RequestOptions<O.RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput>) { return this.operations.routerUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesId(mixedId, id, data, options); }
  deleteMixedMediaCategory(mixedId: Identifier, id: Identifier, options?: RequestOptions) { return this.operations.routerDeleteCategoryDelete(mixedId, id, options); }
  createMixedMediaPart(id: Identifier, data: O.RouterCreatePartPostInput, options?: RequestOptions<O.RouterCreatePartPostInput>) { return this.operations.routerCreatePartPost(id, data, options); }
  mixedMediaPart(mixedId: Identifier, id: Identifier, options?: RequestOptions) { return this.operations.routerGetPartGet(mixedId, id, options); }
  updateMixedMediaPart(mixedId: Identifier, id: Identifier, data: O.RouterUpdatePartPutInput, options?: RequestOptions<O.RouterUpdatePartPutInput>) { return this.operations.routerUpdatePartPut(mixedId, id, data, options); }
  deleteMixedMediaPart(mixedId: Identifier, id: Identifier, options?: RequestOptions) { return this.operations.routerDeletePartDelete(mixedId, id, options); }
  mixedMediaKnowledgeSync(id: Identifier, options?: RequestOptions) { return this.operations.routerGetSettingsGetApiV1MixedMediaIdKnowledgeSync(id, options); }
  updateMixedMediaKnowledgeSync(id: Identifier, data: O.RouterUpdateSettingsPutInput, options?: RequestOptions<O.RouterUpdateSettingsPutInput>) { return this.operations.routerUpdateSettingsPut(id, data, options); }
  syncMixedMediaKnowledge(id: Identifier, options?: RequestOptions) { return this.operations.routerSyncNowPost(id, options); }

  packageJobs(params?: O.RouterListJobsGetQuery, options?: RequestOptions) { return this.operations.routerListJobsGet(params, options); }
  createPackageJob(data: O.RouterCreateJobPostInput, options?: RequestOptions<O.RouterCreateJobPostInput>) { return this.operations.routerCreateJobPost(data, options); }
  cancelPackageJob(id: Identifier, options?: RequestOptions) { return this.operations.routerCancelJobDelete(id, options); }
  retryPackageJob(id: Identifier, data: O.RouterRetryJobPostInput, options?: RequestOptions<O.RouterRetryJobPostInput>) { return this.operations.routerRetryJobPost(id, data, options); }
  retryAllFailedPackageJobs(options?: RequestOptions) { return this.operations.routerRetryAllFailedPost(options); }
  mediaPackages(id: Identifier, options?: RequestOptions) { return this.operations.routerListPackagesGet(id, options); }
  regenerateMediaPackages(id: Identifier, data: O.RouterRegeneratePostInput, options?: RequestOptions<O.RouterRegeneratePostInput>) { return this.operations.routerRegeneratePost(id, data, options); }
  archiveMediaPackage(id: Identifier, options?: RequestOptions) { return this.operations.routerArchivePackageDelete(id, options); }
  operationsHealth(options?: RequestOptions) { return this.operations.routerHealthGet(options); }
  operationsSettings(options?: RequestOptions) { return this.operations.routerGetSettingsGetApiV1OperationsSettings(options); }
  updateOperationsSettings(data: O.RouterUpdateSettingsPatchInput, options?: RequestOptions<O.RouterUpdateSettingsPatchInput>) { return this.operations.routerUpdateSettingsPatch(data, options); }
  transcriptionModels(options?: RequestOptions) { return this.operations.routerTranscriptionModelsGet(options); }
  knowledgeCatalog(options?: RequestOptions) { return this.operations.routerKnowledgeCatalogGet(options); }
  createUploadSession(data: O.RouterCreateUploadSessionPostInput, options?: RequestOptions<O.RouterCreateUploadSessionPostInput>) { return this.operations.routerCreateUploadSessionPost(data, options); }
  uploadSession(id: Identifier, options?: RequestOptions) { return this.operations.routerGetUploadSessionGet(id, options); }
  uploadPart(id: Identifier, partNumber: Identifier, data: O.RouterPutUploadPartPutInput, options?: RequestOptions<O.RouterPutUploadPartPutInput>) { return this.operations.routerPutUploadPartPut(id, partNumber, data, options); }
  completeUpload(id: Identifier, data: O.RouterCompleteUploadPostInput, options?: RequestOptions<O.RouterCompleteUploadPostInput>) { return this.operations.routerCompleteUploadPost(id, data, options); }
  cancelUpload(id: Identifier, options?: RequestOptions) { return this.operations.routerCancelUploadDelete(id, options); }
}

export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
