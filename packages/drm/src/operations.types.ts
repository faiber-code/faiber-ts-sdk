import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend query type: AuditQuery. */
export type RouterAuditEventsGetQuery = import("./wire.types.js").DrmAuditQuery;
/** Backend response type: Page<audit_event::Model>. */
export type RouterAuditEventsGetResponse = import("./wire.types.js").DrmPage<import("./wire.types.js").DrmAuditEvent>;

/** Backend query type: AnalysisQuery. */
export type RouterListAnalysesGetQuery = import("./wire.types.js").DrmAnalysisQuery;
/** Backend response type: Page<CompositionAnalysis>. */
export type RouterListAnalysesGetResponse = import("./wire.types.js").DrmPage<import("./wire.types.js").DrmCompositionAnalysis>;

/** Backend response type: Vec<composition_category::Model>. */
export type RouterListCompositionCategoriesGetResponse = (import("./wire.types.js").DrmCompositionCategory)[];

/** Backend request type: CompositionCategoryInput. */
export type RouterCreateCompositionCategoryPostInput = import("./wire.types.js").DrmCompositionCategoryInput;
/** Backend response type: composition_category::Model. */
export type RouterCreateCompositionCategoryPostResponse = import("./wire.types.js").DrmCompositionCategory;

/** Backend response type: no-content. */
export type RouterDeleteCompositionCategoryDeleteResponse = void;

/** Backend request type: CompositionCategoryInput. */
export type RouterUpdateCompositionCategoryPatchInput = import("./wire.types.js").DrmCompositionCategoryInput;
/** Backend response type: composition_category::Model. */
export type RouterUpdateCompositionCategoryPatchResponse = import("./wire.types.js").DrmCompositionCategory;

/** Backend query type: CompositionQuery. */
export type RouterListCompositionsGetQuery = import("./wire.types.js").DrmCompositionQuery;
/** Backend response type: Page<mixed_media::Model>. */
export type RouterListCompositionsGetResponse = import("./wire.types.js").DrmPage<import("./wire.types.js").DrmMixedMedia>;

/** Backend request type: CompositionInput. */
export type RouterCreateCompositionPostInput = import("./wire.types.js").DrmCompositionInput;
/** Backend response type: mixed_media::Model. */
export type RouterCreateCompositionPostResponse = import("./wire.types.js").DrmMixedMedia;

/** Backend response type: Vec<mixed_media_manifest::Model>. */
export type RouterListManifestsGetApiV1CompositionsIdManifestsResponse = (import("./wire.types.js").DrmMixedMediaManifest)[];

/** Backend request type: HistoricalManifestInput. */
export type RouterCreateManifestVersionPostInput = import("./wire.types.js").DrmHistoricalManifestInput;
/** Backend response type: mixed_media_manifest::Model. */
export type RouterCreateManifestVersionPostResponse = import("./wire.types.js").DrmMixedMediaManifest;

/** Backend response type: mixed_media_manifest::Model. */
export type RouterPublishPostApiV1CompositionsIdPublishResponse = import("./wire.types.js").DrmMixedMediaManifest;

/** Backend response type: mixed_media_workflow::Model. */
export type RouterGetWorkflowGetApiV1CompositionsIdWorkflowResponse = import("./wire.types.js").DrmMixedMediaWorkflow;

/** Backend request type: WorkflowInput. */
export type RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput = import("./wire.types.js").DrmWorkflowInput;
/** Backend response type: mixed_media_workflow::Model. */
export type RouterSaveWorkflowPutApiV1CompositionsIdWorkflowResponse = import("./wire.types.js").DrmMixedMediaWorkflow;

/** Backend response type: serde_json::Value. */
export type RouterDashboardGetResponse = import("./wire.types.js").DrmDashboard;

/** Backend query type: DrmJobQuery. */
export type RouterListJobsGetQuery = import("./wire.types.js").DrmJobQuery;
/** Backend response type: Page<DrmJobResponse>. */
export type RouterListJobsGetResponse = import("./wire.types.js").DrmPage<import("./wire.types.js").DrmJobResponse>;

/** Backend request type: EnqueueDrmInput. */
export type RouterCreateJobPostInput = import("./wire.types.js").DrmEnqueueDrmInput;
/** Backend response type: DrmJobResponse. */
export type RouterCreateJobPostResponse = import("./wire.types.js").DrmJobResponse;

/** Backend response type: no-content. */
export type RouterCancelJobDeleteResponse = void;

/** Backend request type: DrmConfig. */
export type RouterRetryJobPostInput = import("./wire.types.js").DrmConfig | undefined;
/** Backend response type: DrmJobResponse. */
export type RouterRetryJobPostResponse = import("./wire.types.js").DrmJobResponse;

/** Backend response type: RetryFailedResponse. */
export type RouterRetryAllFailedPostResponse = import("./wire.types.js").DrmRetryFailedResponse;

/** Backend query type: ExternalReferenceQuery. */
export type RouterListExternalReferencesGetQuery = import("./wire.types.js").DrmExternalReferenceQuery;
/** Backend response type: Vec<external_reference::Model>. */
export type RouterListExternalReferencesGetResponse = (import("./wire.types.js").DrmExternalReference)[];

/** Backend request type: ExternalReferenceInput. */
export type RouterUpsertExternalReferencePostInput = import("./wire.types.js").DrmExternalReferenceInput;
/** Backend response type: external_reference::Model. */
export type RouterUpsertExternalReferencePostResponse = import("./wire.types.js").DrmExternalReference;

/** Backend response type: Vec<folder::Model>. */
export type RouterListFoldersGetResponse = (import("./wire.types.js").DrmFolder)[];

/** Backend request type: FolderInput. */
export type RouterCreateFolderPostInput = import("./wire.types.js").DrmFolderInput;
/** Backend response type: folder::Model. */
export type RouterCreateFolderPostResponse = import("./wire.types.js").DrmFolder;

/** Backend response type: no-content. */
export type RouterDeleteFolderDeleteResponse = void;

/** Backend request type: FolderInput. */
export type RouterUpdateFolderPatchInput = import("./wire.types.js").DrmFolderInput;
/** Backend response type: folder::Model. */
export type RouterUpdateFolderPatchResponse = import("./wire.types.js").DrmFolder;

/** Backend response type: Vec<content_library::Model>. */
export type RouterListLibrariesGetResponse = (import("./wire.types.js").DrmContentLibrary)[];

/** Backend request type: LibraryInput. */
export type RouterCreateLibraryPostInput = import("./wire.types.js").DrmLibraryInput;
/** Backend response type: content_library::Model. */
export type RouterCreateLibraryPostResponse = import("./wire.types.js").DrmContentLibrary;

/** Backend response type: no-content. */
export type RouterDeleteLibraryDeleteResponse = void;

/** Backend response type: content_library::Model. */
export type RouterGetLibraryGetResponse = import("./wire.types.js").DrmContentLibrary;

/** Backend request type: LibraryInput. */
export type RouterUpdateLibraryPatchInput = import("./wire.types.js").DrmLibraryInput;
/** Backend response type: content_library::Model. */
export type RouterUpdateLibraryPatchResponse = import("./wire.types.js").DrmContentLibrary;

/** Backend response type: Vec<content_category::Model>. */
export type RouterListCategoriesGetResponse = (import("./wire.types.js").DrmContentCategory)[];

/** Backend request type: GenericCategoryInput. */
export type RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput = import("./wire.types.js").DrmGenericCategoryInput;
/** Backend response type: content_category::Model. */
export type RouterCreateCategoryPostApiV1LibrariesIdCategoriesResponse = import("./wire.types.js").DrmContentCategory;

/** Backend response type: Vec<media_part::Model>. */
export type RouterListItemsGetResponse = (import("./wire.types.js").DrmMediaPart)[];

/** Backend request type: ContentItemInput. */
export type RouterCreateItemPostInput = import("./wire.types.js").DrmContentItemInput;
/** Backend response type: media_part::Model. */
export type RouterCreateItemPostResponse = import("./wire.types.js").DrmMediaPart;

/** Backend query type: ContentItemsQuery. */
export type RouterQueryItemsGetQuery = import("./wire.types.js").DrmContentItemsQuery;
/** Backend response type: Page<media_part::Model>. */
export type RouterQueryItemsGetResponse = import("./wire.types.js").DrmPage<import("./wire.types.js").DrmMediaPart>;

/** Backend response type: LibraryStats. */
export type RouterLibraryStatsGetResponse = import("./wire.types.js").DrmLibraryStats;

/** Backend response type: no-content. */
export type RouterArchiveCategoryDeleteResponse = void;

/** Backend request type: GenericCategoryInput. */
export type RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput = import("./wire.types.js").DrmGenericCategoryInput;
/** Backend response type: content_category::Model. */
export type RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdResponse = import("./wire.types.js").DrmContentCategory;

/** Backend response type: no-content. */
export type RouterArchiveItemDeleteResponse = void;

/** Backend response type: media_part::Model. */
export type RouterGetItemGetResponse = import("./wire.types.js").DrmMediaPart;

/** Backend request type: ContentItemInput. */
export type RouterUpdateItemPutInput = import("./wire.types.js").DrmContentItemInput;
/** Backend response type: media_part::Model. */
export type RouterUpdateItemPutResponse = import("./wire.types.js").DrmMediaPart;

/** Backend response type: Vec<content_item_media::Model>. */
export type RouterItemAttachmentsGetResponse = (import("./wire.types.js").DrmContentItemMedia)[];

/** Backend request type: AttachmentInput. */
export type RouterAttachMediaPostInput = import("./wire.types.js").DrmAttachmentInput;
/** Backend response type: content_item_media::Model. */
export type RouterAttachMediaPostResponse = import("./wire.types.js").DrmContentItemMedia;

/** Backend query type: PackageQuery. */
export type RouterClearKeyLicenseGetQuery = import("./wire.types.js").DrmPackageQuery;
/** Backend response type: serde_json::Value. */
export type RouterClearKeyLicenseGetResponse = import("./wire.types.js").DrmClearKeyLicense;

/** Backend query type: ListQuery. */
export type RouterListMediaGetQuery = import("./wire.types.js").DrmMediaListQuery;
/** Backend response type: Page<MediaResponse>. */
export type RouterListMediaGetResponse = import("./wire.types.js").DrmPage<import("./wire.types.js").DrmMediaRecord>;

/** Backend request type: multipart/form-data. */
export type RouterUploadMediaPostInput = FormData;
/** Backend response type: MediaResponse. */
export type RouterUploadMediaPostResponse = import("./wire.types.js").DrmMediaRecord;

/** Backend response type: no-content. */
export type RouterDeleteMediaDeleteResponse = void;

/** Backend response type: MediaResponse. */
export type RouterGetMediaGetResponse = import("./wire.types.js").DrmMediaRecord;

/** Backend request type: MediaUpdate. */
export type RouterUpdateMediaPatchInput = import("./wire.types.js").DrmMediaUpdate;
/** Backend response type: MediaResponse. */
export type RouterUpdateMediaPatchResponse = import("./wire.types.js").DrmMediaRecord;

/** Backend response type: Vec<PackageResponse>. */
export type RouterListPackagesGetResponse = (import("./wire.types.js").DrmPackageResponse)[];

/** Backend request type: Option<DrmConfig. */
export type RouterRegeneratePostInput = import("./wire.types.js").DrmConfig | null;
/** Backend response type: drm_job::Model. */
export type RouterRegeneratePostResponse = import("./wire.types.js").DrmJob;

/** Backend response type: PlaybackResponse. */
export type RouterPlaybackGetResponse = import("./wire.types.js").DrmPlayback;

/** Backend request type: BatchMediaInput. */
export type RouterBatchMediaPostInput = import("./wire.types.js").DrmBatchMediaInput;
/** Backend response type: Vec<MediaResponse>. */
export type RouterBatchMediaPostResponse = (import("./wire.types.js").DrmMediaRecord)[];

/** Backend query type: DrmStatusesQuery. */
export type RouterDrmStatusesGetQuery = import("./wire.types.js").DrmStatusesQuery;
/** Backend response type: Vec<MediaDrmStatusResponse>. */
export type RouterDrmStatusesGetResponse = (import("./wire.types.js").DrmMediaDrmStatusResponse)[];

/** Backend response type: no-content. */
export type RouterArchivePackageDeleteResponse = void;

/** Backend request type: RegisterMediaInput. */
export type RouterRegisterExistingMediaPostInput = import("./wire.types.js").DrmRegisterMediaInput;
/** Backend response type: MediaResponse. */
export type RouterRegisterExistingMediaPostResponse = import("./wire.types.js").DrmMediaRecord;

/** Backend response type: Vec<mixed_media::Model>. */
export type RouterListMixedMediaGetResponse = (import("./wire.types.js").DrmMixedMedia)[];

/** Backend request type: MixedMediaInput. */
export type RouterCreateMixedMediaPostInput = import("./wire.types.js").DrmMixedMediaInput;
/** Backend response type: mixed_media::Model. */
export type RouterCreateMixedMediaPostResponse = import("./wire.types.js").DrmMixedMedia;

/** Backend response type: no-content. */
export type RouterDeleteMixedMediaDeleteResponse = void;

/** Backend response type: mixed_media::Model. */
export type RouterGetMixedMediaGetResponse = import("./wire.types.js").DrmMixedMedia;

/** Backend request type: MixedMediaUpdate. */
export type RouterUpdateMixedMediaPatchInput = import("./wire.types.js").DrmMixedMediaUpdate;
/** Backend response type: mixed_media::Model. */
export type RouterUpdateMixedMediaPatchResponse = import("./wire.types.js").DrmMixedMedia;

/** Backend response type: Option<CompositionAnalysis>. */
export type RouterGetAnalysisGetResponse = import("./wire.types.js").DrmCompositionAnalysis | null;

/** Backend request type: StartAnalysisInput. */
export type RouterStartAnalysisPostInput = import("./wire.types.js").DrmStartAnalysisInput | undefined;
/** Backend response type: CompositionAnalysis. */
export type RouterStartAnalysisPostResponse = import("./wire.types.js").DrmCompositionAnalysis;

/** Backend request type: CategoryInput. */
export type RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput = import("./wire.types.js").DrmCategoryInput;
/** Backend response type: content_category::Model. */
export type RouterCreateCategoryPostApiV1MixedMediaIdCategoriesResponse = import("./wire.types.js").DrmContentCategory;

/** Backend response type: KnowledgeSyncSettings. */
export type RouterGetSettingsGetApiV1MixedMediaIdKnowledgeSyncResponse = import("./wire.types.js").DrmKnowledgeSyncSettings;

/** Backend response type: KnowledgeSyncSettings. */
export type RouterSyncNowPostResponse = import("./wire.types.js").DrmKnowledgeSyncSettings;

/** Backend request type: UpdateKnowledgeSync. */
export type RouterUpdateSettingsPutInput = import("./wire.types.js").DrmUpdateKnowledgeSync;
/** Backend response type: KnowledgeSyncSettings. */
export type RouterUpdateSettingsPutResponse = import("./wire.types.js").DrmKnowledgeSyncSettings;

/** Backend response type: mixed_media_manifest::Model. */
export type RouterGetManifestGetResponse = import("./wire.types.js").DrmMixedMediaManifest;

/** Backend response type: Vec<mixed_media_manifest::Model>. */
export type RouterListManifestsGetApiV1MixedMediaIdManifestsResponse = (import("./wire.types.js").DrmMixedMediaManifest)[];

/** Backend request type: PartInput. */
export type RouterCreatePartPostInput = import("./wire.types.js").DrmPartInput;
/** Backend response type: media_part::Model. */
export type RouterCreatePartPostResponse = import("./wire.types.js").DrmMediaPart;

/** Backend response type: mixed_media_manifest::Model. */
export type RouterPublishPostApiV1MixedMediaIdPublishResponse = import("./wire.types.js").DrmMixedMediaManifest;

/** Backend response type: EditorResources. */
export type RouterResourcesGetResponse = import("./wire.types.js").DrmEditorResources;

/** Backend response type: mixed_media_workflow::Model. */
export type RouterGetWorkflowGetApiV1MixedMediaIdWorkflowResponse = import("./wire.types.js").DrmMixedMediaWorkflow;

/** Backend request type: WorkflowInput. */
export type RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput = import("./wire.types.js").DrmWorkflowInput;
/** Backend response type: mixed_media_workflow::Model. */
export type RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowResponse = import("./wire.types.js").DrmMixedMediaWorkflow;

/** Backend response type: no-content. */
export type RouterDeleteCategoryDeleteResponse = void;

/** Backend request type: CategoryInput. */
export type RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput = import("./wire.types.js").DrmCategoryInput;
/** Backend response type: content_category::Model. */
export type RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdResponse = import("./wire.types.js").DrmContentCategory;

/** Backend response type: no-content. */
export type RouterDeletePartDeleteResponse = void;

/** Backend response type: media_part::Model. */
export type RouterGetPartGetResponse = import("./wire.types.js").DrmMediaPart;

/** Backend request type: PartInput. */
export type RouterUpdatePartPutInput = import("./wire.types.js").DrmPartInput;
/** Backend response type: media_part::Model. */
export type RouterUpdatePartPutResponse = import("./wire.types.js").DrmMediaPart;

/** Backend response type: serde_json::Value. */
export type RouterHealthGetResponse = import("./wire.types.js").DrmHealth;

/** Backend response type: Value. */
export type RouterKnowledgeCatalogGetResponse = import("./wire.types.js").DrmKnowledgeCatalog;

/** Backend response type: SettingsResponse. */
export type RouterGetSettingsGetApiV1OperationsSettingsResponse = import("./wire.types.js").DrmSettingsResponse;

/** Backend request type: SettingsInput. */
export type RouterUpdateSettingsPatchInput = import("./wire.types.js").DrmSettingsInput;
/** Backend response type: SettingsResponse. */
export type RouterUpdateSettingsPatchResponse = import("./wire.types.js").DrmSettingsResponse;

/** Backend response type: Vec<TranscriptionModel>. */
export type RouterTranscriptionModelsGetResponse = (import("./wire.types.js").DrmTranscriptionModel)[];

/** Backend request type: LegacyPackageInput. */
export type RouterLegacyEnqueuePostInput = import("./wire.types.js").DrmLegacyPackageInput;
/** Backend response type: serde_json::Value. */
export type RouterLegacyEnqueuePostResponse = import("./wire.types.js").DrmLegacyEnqueue;

/** Backend response type: serde_json::Value. */
export type RouterLegacyStatusGetResponse = import("./wire.types.js").DrmLegacyStatus;

/** Backend response type: raw-response. */
export type RouterPackageFileGetResponse = import("./wire.types.js").DrmPackageFile;

/** Backend response type: serde_json::Value. */
export type RouterStatusGetResponse = import("./wire.types.js").DrmStatus;

/** Backend response type: Vec<tag::Model>. */
export type RouterListTagsGetResponse = (import("./wire.types.js").DrmTag)[];

/** Backend request type: TagInput. */
export type RouterCreateTagPostInput = import("./wire.types.js").DrmTagInput;
/** Backend response type: tag::Model. */
export type RouterCreateTagPostResponse = import("./wire.types.js").DrmTag;

/** Backend response type: no-content. */
export type RouterDeleteTagDeleteResponse = void;

/** Backend request type: UploadSessionInput. */
export type RouterCreateUploadSessionPostInput = import("./wire.types.js").DrmUploadSessionInput;
/** Backend response type: UploadSessionResponse. */
export type RouterCreateUploadSessionPostResponse = import("./wire.types.js").DrmUploadSessionResponse;

/** Backend response type: no-content. */
export type RouterCancelUploadDeleteResponse = void;

/** Backend response type: UploadSessionResponse. */
export type RouterGetUploadSessionGetResponse = import("./wire.types.js").DrmUploadSessionResponse;

/** Backend request type: CompleteUploadInput. */
export type RouterCompleteUploadPostInput = import("./wire.types.js").DrmCompleteUploadInput;
/** Backend response type: MediaResponse. */
export type RouterCompleteUploadPostResponse = import("./wire.types.js").DrmMediaRecord;

/** Backend request type: binary byte stream. */
export type RouterPutUploadPartPutInput = import("./wire.types.js").DrmUploadPartBody;
/** Backend response type: upload_part::Model. */
export type RouterPutUploadPartPutResponse = import("./wire.types.js").DrmUploadPart;
