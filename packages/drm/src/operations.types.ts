import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend query type: AuditQuery. */
export interface RouterAuditEventsGetQuery extends QueryParams {
  "page"?: number | null;
  "size"?: number | null;
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: Page<audit_event::Model>. */
export type RouterAuditEventsGetResponse = BackendJson<"Page<audit_event::Model>">;

/** Backend query type: AnalysisQuery. */
export interface RouterListAnalysesGetQuery extends QueryParams {
  "page"?: number | null;
  "size"?: number | null;
  "search"?: string | null;
  "status"?: string | null;
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: Page<CompositionAnalysis>. */
export type RouterListAnalysesGetResponse = BackendJson<"Page<CompositionAnalysis>">;

/** Backend response type: Vec<composition_category::Model>. */
export interface RouterListCompositionCategoriesGetResponseItem extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "title": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterListCompositionCategoriesGetResponse = RouterListCompositionCategoriesGetResponseItem[];

/** Backend request type: CompositionCategoryInput. */
export interface RouterCreateCompositionCategoryPostInput extends JsonObject {
  "title": string;
  "parent_id"?: string | null;
}
/** Backend response type: composition_category::Model. */
export interface RouterCreateCompositionCategoryPostResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "title": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterCreateCompositionCategoryPostResponse = RouterCreateCompositionCategoryPostResponseData;

/** Backend response type: no-content. */
export type RouterDeleteCompositionCategoryDeleteResponse = void;

/** Backend request type: CompositionCategoryInput. */
export interface RouterUpdateCompositionCategoryPatchInput extends JsonObject {
  "title": string;
  "parent_id"?: string | null;
}
/** Backend response type: composition_category::Model. */
export interface RouterUpdateCompositionCategoryPatchResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "title": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterUpdateCompositionCategoryPatchResponse = RouterUpdateCompositionCategoryPatchResponseData;

/** Backend query type: CompositionQuery. */
export interface RouterListCompositionsGetQuery extends QueryParams {
  "search"?: string | null;
  "category_id"?: string | null;
  "uncategorized"?: boolean;
  "page"?: number | null;
  "size"?: number | null;
}
/** Backend response type: Page<mixed_media::Model>. */
export type RouterListCompositionsGetResponse = BackendJson<"Page<mixed_media::Model>">;

/** Backend request type: CompositionInput. */
export interface RouterCreateCompositionPostInput extends JsonObject {
  "id"?: string | null;
  "library_id": string;
  "name": string;
  "description"?: string | null;
  "category_id"?: string | null;
}
/** Backend response type: mixed_media::Model. */
export interface RouterCreateCompositionPostResponseData extends JsonObject {
  "id": string;
  "library_id": string;
  "category_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "transcription_language": string;
  "status": string;
  "manifest_version": number;
  "published_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type RouterCreateCompositionPostResponse = RouterCreateCompositionPostResponseData;

/** Backend response type: Vec<mixed_media_manifest::Model>. */
export interface RouterListManifestsGetApiV1CompositionsIdManifestsResponseItem extends JsonObject {
  "id": string;
  "mixed_media_id": string;
  "version": number;
  "document": BackendJson<"Json">;
  "created_at": string;
}
export type RouterListManifestsGetApiV1CompositionsIdManifestsResponse = RouterListManifestsGetApiV1CompositionsIdManifestsResponseItem[];

/** Backend request type: HistoricalManifestInput. */
export interface RouterCreateManifestVersionPostInput extends JsonObject {
  "id"?: string | null;
  "document": JsonValue;
  "created_at"?: string | null;
}
/** Backend response type: mixed_media_manifest::Model. */
export interface RouterCreateManifestVersionPostResponseData extends JsonObject {
  "id": string;
  "mixed_media_id": string;
  "version": number;
  "document": BackendJson<"Json">;
  "created_at": string;
}
export type RouterCreateManifestVersionPostResponse = RouterCreateManifestVersionPostResponseData;

/** Backend response type: mixed_media_manifest::Model. */
export interface RouterPublishPostApiV1CompositionsIdPublishResponseData extends JsonObject {
  "id": string;
  "mixed_media_id": string;
  "version": number;
  "document": BackendJson<"Json">;
  "created_at": string;
}
export type RouterPublishPostApiV1CompositionsIdPublishResponse = RouterPublishPostApiV1CompositionsIdPublishResponseData;

/** Backend response type: mixed_media_workflow::Model. */
export interface RouterGetWorkflowGetApiV1CompositionsIdWorkflowResponseData extends JsonObject {
  "mixed_media_id": string;
  "nodes": BackendJson<"Json">;
  "edges": BackendJson<"Json">;
  "revision": number;
  "updated_at": string;
}
export type RouterGetWorkflowGetApiV1CompositionsIdWorkflowResponse = RouterGetWorkflowGetApiV1CompositionsIdWorkflowResponseData;

/** Backend request type: WorkflowInput. */
export interface RouterSaveWorkflowPutApiV1CompositionsIdWorkflowInput extends JsonObject {
  "nodes": JsonValue;
  "edges": JsonValue;
}
/** Backend response type: mixed_media_workflow::Model. */
export interface RouterSaveWorkflowPutApiV1CompositionsIdWorkflowResponseData extends JsonObject {
  "mixed_media_id": string;
  "nodes": BackendJson<"Json">;
  "edges": BackendJson<"Json">;
  "revision": number;
  "updated_at": string;
}
export type RouterSaveWorkflowPutApiV1CompositionsIdWorkflowResponse = RouterSaveWorkflowPutApiV1CompositionsIdWorkflowResponseData;

/** Backend response type: serde_json::Value. */
export type RouterDashboardGetResponse = JsonValue;

/** Backend query type: DrmJobQuery. */
export interface RouterListJobsGetQuery extends QueryParams {
  "status"?: string | null;
  "media_id"?: string | null;
  "page"?: number | null;
  "size"?: number | null;
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: Page<DrmJobResponse>. */
export type RouterListJobsGetResponse = BackendJson<"Page<DrmJobResponse>">;

/** Backend request type: EnqueueDrmInput. */
export interface RouterCreateJobPostInputConfig extends JsonObject {
  "download"?: boolean;
  "transcode"?: boolean;
  "package"?: boolean;
  "allow_video_only_on_audio_error"?: boolean;
}
export interface RouterCreateJobPostInput extends JsonObject {
  "media_id": string;
  "config"?: RouterCreateJobPostInputConfig;
}
/** Backend response type: DrmJobResponse. */
export interface RouterCreateJobPostResponseData extends JsonObject {
  "id": string;
  "media_id": string;
  "package_id"?: string | null;
  "status": string;
  "stage": string;
  "progress": number;
  "attempts": number;
  "max_attempts": number;
  "next_retry_at"?: string | null;
  "last_error"?: string | null;
  "config": BackendJson<"Json">;
  "created_at": string;
  "updated_at": string;
  "started_at"?: string | null;
  "completed_at"?: string | null;
  "media_name": string;
  "media_type": string;
}
export type RouterCreateJobPostResponse = RouterCreateJobPostResponseData;

/** Backend response type: no-content. */
export type RouterCancelJobDeleteResponse = void;

/** Backend request type: DrmConfig. */
export interface RouterRetryJobPostInput extends JsonObject {
  "download"?: boolean;
  "transcode"?: boolean;
  "package"?: boolean;
  "allow_video_only_on_audio_error"?: boolean;
}
/** Backend response type: DrmJobResponse. */
export interface RouterRetryJobPostResponseData extends JsonObject {
  "id": string;
  "media_id": string;
  "package_id"?: string | null;
  "status": string;
  "stage": string;
  "progress": number;
  "attempts": number;
  "max_attempts": number;
  "next_retry_at"?: string | null;
  "last_error"?: string | null;
  "config": BackendJson<"Json">;
  "created_at": string;
  "updated_at": string;
  "started_at"?: string | null;
  "completed_at"?: string | null;
  "media_name": string;
  "media_type": string;
}
export type RouterRetryJobPostResponse = RouterRetryJobPostResponseData;

/** Backend response type: RetryFailedResponse. */
export interface RouterRetryAllFailedPostResponseData extends JsonObject {
  "count": number;
}
export type RouterRetryAllFailedPostResponse = RouterRetryAllFailedPostResponseData;

/** Backend query type: ExternalReferenceQuery. */
export interface RouterListExternalReferencesGetQuery extends QueryParams {
  "internal_type"?: string | null;
  "internal_id"?: string | null;
}
/** Backend response type: Vec<external_reference::Model>. */
export interface RouterListExternalReferencesGetResponseItem extends JsonObject {
  "system": string;
  "entity_type": string;
  "external_id": string;
  "internal_type": string;
  "internal_id": string;
  "metadata": BackendJson<"Json">;
  "created_at": string;
  "updated_at": string;
}
export type RouterListExternalReferencesGetResponse = RouterListExternalReferencesGetResponseItem[];

/** Backend request type: ExternalReferenceInput. */
export interface RouterUpsertExternalReferencePostInput extends JsonObject {
  "system": string;
  "entity_type": string;
  "external_id": string;
  "internal_type": string;
  "internal_id": string;
  "metadata"?: JsonValue;
}
/** Backend response type: external_reference::Model. */
export interface RouterUpsertExternalReferencePostResponseData extends JsonObject {
  "system": string;
  "entity_type": string;
  "external_id": string;
  "internal_type": string;
  "internal_id": string;
  "metadata": BackendJson<"Json">;
  "created_at": string;
  "updated_at": string;
}
export type RouterUpsertExternalReferencePostResponse = RouterUpsertExternalReferencePostResponseData;

/** Backend response type: Vec<folder::Model>. */
export interface RouterListFoldersGetResponseItem extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "name": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterListFoldersGetResponse = RouterListFoldersGetResponseItem[];

/** Backend request type: FolderInput. */
export interface RouterCreateFolderPostInput extends JsonObject {
  "name": string;
  "parent_id"?: string | null;
}
/** Backend response type: folder::Model. */
export interface RouterCreateFolderPostResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "name": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterCreateFolderPostResponse = RouterCreateFolderPostResponseData;

/** Backend response type: no-content. */
export type RouterDeleteFolderDeleteResponse = void;

/** Backend request type: FolderInput. */
export interface RouterUpdateFolderPatchInput extends JsonObject {
  "name": string;
  "parent_id"?: string | null;
}
/** Backend response type: folder::Model. */
export interface RouterUpdateFolderPatchResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "name": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterUpdateFolderPatchResponse = RouterUpdateFolderPatchResponseData;

/** Backend response type: Vec<content_library::Model>. */
export interface RouterListLibrariesGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "status": string;
  "visibility": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterListLibrariesGetResponse = RouterListLibrariesGetResponseItem[];

/** Backend request type: LibraryInput. */
export interface RouterCreateLibraryPostInput extends JsonObject {
  "id"?: string | null;
  "name": string;
  "description"?: string | null;
  "status"?: string | null;
  "visibility"?: string | null;
}
/** Backend response type: content_library::Model. */
export interface RouterCreateLibraryPostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "status": string;
  "visibility": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterCreateLibraryPostResponse = RouterCreateLibraryPostResponseData;

/** Backend response type: no-content. */
export type RouterDeleteLibraryDeleteResponse = void;

/** Backend response type: content_library::Model. */
export interface RouterGetLibraryGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "status": string;
  "visibility": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterGetLibraryGetResponse = RouterGetLibraryGetResponseData;

/** Backend request type: LibraryInput. */
export interface RouterUpdateLibraryPatchInput extends JsonObject {
  "id"?: string | null;
  "name": string;
  "description"?: string | null;
  "status"?: string | null;
  "visibility"?: string | null;
}
/** Backend response type: content_library::Model. */
export interface RouterUpdateLibraryPatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "status": string;
  "visibility": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterUpdateLibraryPatchResponse = RouterUpdateLibraryPatchResponseData;

/** Backend response type: Vec<content_category::Model>. */
export interface RouterListCategoriesGetResponseItem extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "parent_id"?: string | null;
  "title": string;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterListCategoriesGetResponse = RouterListCategoriesGetResponseItem[];

/** Backend request type: GenericCategoryInput. */
export interface RouterCreateCategoryPostApiV1LibrariesIdCategoriesInput extends JsonObject {
  "id"?: string | null;
  "parent_id"?: string | null;
  "title": string;
}
/** Backend response type: content_category::Model. */
export interface RouterCreateCategoryPostApiV1LibrariesIdCategoriesResponseData extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "parent_id"?: string | null;
  "title": string;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterCreateCategoryPostApiV1LibrariesIdCategoriesResponse = RouterCreateCategoryPostApiV1LibrariesIdCategoriesResponseData;

/** Backend response type: Vec<media_part::Model>. */
export interface RouterListItemsGetResponseItem extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds": number;
  "textual": BackendJson<"Json">;
  "rewards": BackendJson<"Json">;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
  "primary_media_id"?: string | null;
  "hint_media_id"?: string | null;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterListItemsGetResponse = RouterListItemsGetResponseItem[];

/** Backend request type: ContentItemInput. */
export interface RouterCreateItemPostInput extends JsonObject {
  "id"?: string | null;
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds"?: number;
  "textual"?: JsonValue;
  "rewards"?: JsonValue;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
}
/** Backend response type: media_part::Model. */
export interface RouterCreateItemPostResponseData extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds": number;
  "textual": BackendJson<"Json">;
  "rewards": BackendJson<"Json">;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
  "primary_media_id"?: string | null;
  "hint_media_id"?: string | null;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterCreateItemPostResponse = RouterCreateItemPostResponseData;

/** Backend query type: ContentItemsQuery. */
export interface RouterQueryItemsGetQuery extends QueryParams {
  "category_id"?: string | null;
  "direct"?: boolean;
  "errors"?: boolean;
  "search"?: string | null;
  "page"?: number | null;
  "size"?: number | null;
}
/** Backend response type: Page<media_part::Model>. */
export type RouterQueryItemsGetResponse = BackendJson<"Page<media_part::Model>">;

/** Backend response type: LibraryStats. */
export interface RouterLibraryStatsGetResponseData extends JsonObject {
  "total": number;
  "question": number;
  "task": number;
  "video": number;
  "game": number;
}
export type RouterLibraryStatsGetResponse = RouterLibraryStatsGetResponseData;

/** Backend response type: no-content. */
export type RouterArchiveCategoryDeleteResponse = void;

/** Backend request type: GenericCategoryInput. */
export interface RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdInput extends JsonObject {
  "id"?: string | null;
  "parent_id"?: string | null;
  "title": string;
}
/** Backend response type: content_category::Model. */
export interface RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdResponseData extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "parent_id"?: string | null;
  "title": string;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdResponse = RouterUpdateCategoryPatchApiV1LibrariesLibraryIdCategoriesIdResponseData;

/** Backend response type: no-content. */
export type RouterArchiveItemDeleteResponse = void;

/** Backend response type: media_part::Model. */
export interface RouterGetItemGetResponseData extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds": number;
  "textual": BackendJson<"Json">;
  "rewards": BackendJson<"Json">;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
  "primary_media_id"?: string | null;
  "hint_media_id"?: string | null;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterGetItemGetResponse = RouterGetItemGetResponseData;

/** Backend request type: ContentItemInput. */
export interface RouterUpdateItemPutInput extends JsonObject {
  "id"?: string | null;
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds"?: number;
  "textual"?: JsonValue;
  "rewards"?: JsonValue;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
}
/** Backend response type: media_part::Model. */
export interface RouterUpdateItemPutResponseData extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds": number;
  "textual": BackendJson<"Json">;
  "rewards": BackendJson<"Json">;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
  "primary_media_id"?: string | null;
  "hint_media_id"?: string | null;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterUpdateItemPutResponse = RouterUpdateItemPutResponseData;

/** Backend response type: Vec<content_item_media::Model>. */
export interface RouterItemAttachmentsGetResponseItem extends JsonObject {
  "content_item_id": string;
  "media_id": string;
  "slot": string;
  "position": number;
  "is_current": boolean;
  "created_at": string;
}
export type RouterItemAttachmentsGetResponse = RouterItemAttachmentsGetResponseItem[];

/** Backend request type: AttachmentInput. */
export interface RouterAttachMediaPostInput extends JsonObject {
  "media_id": string;
  "slot": string;
  "position"?: number;
  "is_current"?: boolean;
}
/** Backend response type: content_item_media::Model. */
export interface RouterAttachMediaPostResponseData extends JsonObject {
  "content_item_id": string;
  "media_id": string;
  "slot": string;
  "position": number;
  "is_current": boolean;
  "created_at": string;
}
export type RouterAttachMediaPostResponse = RouterAttachMediaPostResponseData;

/** Backend query type: PackageQuery. */
export interface RouterClearKeyLicenseGetQuery extends QueryParams {
  "package_id"?: string | null;
}
/** Backend response type: serde_json::Value. */
export type RouterClearKeyLicenseGetResponse = JsonValue;

/** Backend query type: ListQuery. */
export interface RouterListMediaGetQuery extends QueryParams {
  "search"?: string | null;
  "media_type"?: string | null;
  "folder_id"?: string | null;
  "tag_id"?: string | null;
  "page"?: number | null;
  "size"?: number | null;
}
/** Backend response type: Page<MediaResponse>. */
export type RouterListMediaGetResponse = BackendJson<"Page<MediaResponse>">;

/** Backend request type: multipart/form-data. */
export type RouterUploadMediaPostInput = FormData;
/** Backend response type: MediaResponse. */
export interface RouterUploadMediaPostResponseDataTags extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export interface RouterUploadMediaPostResponseDataTranscription extends JsonObject {
  "id": string;
  "media_id": string;
  "model_ref": string;
  "language": string;
  "detected_language"?: string | null;
  "status": string;
  "transcript"?: string | null;
  "last_error"?: string | null;
  "attempts": number;
  "max_attempts": number;
  "next_retry_at"?: string | null;
  "queued_at": string;
  "started_at"?: string | null;
  "completed_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface RouterUploadMediaPostResponseData extends JsonObject {
  "id": string;
  "folder_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "media_type": string;
  "mime_type": string;
  "object_key": string;
  "bucket": string;
  "size_bytes": number;
  "duration_seconds"?: number | null;
  "status": string;
  "original_filename"?: string | null;
  "checksum_sha256"?: string | null;
  "archived_at"?: string | null;
  "created_at": string;
  "updated_at": string;
  "tags": RouterUploadMediaPostResponseDataTags[];
  "transcription"?: RouterUploadMediaPostResponseDataTranscription | null;
}
export type RouterUploadMediaPostResponse = RouterUploadMediaPostResponseData;

/** Backend response type: no-content. */
export type RouterDeleteMediaDeleteResponse = void;

/** Backend response type: MediaResponse. */
export interface RouterGetMediaGetResponseDataTags extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export interface RouterGetMediaGetResponseDataTranscription extends JsonObject {
  "id": string;
  "media_id": string;
  "model_ref": string;
  "language": string;
  "detected_language"?: string | null;
  "status": string;
  "transcript"?: string | null;
  "last_error"?: string | null;
  "attempts": number;
  "max_attempts": number;
  "next_retry_at"?: string | null;
  "queued_at": string;
  "started_at"?: string | null;
  "completed_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface RouterGetMediaGetResponseData extends JsonObject {
  "id": string;
  "folder_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "media_type": string;
  "mime_type": string;
  "object_key": string;
  "bucket": string;
  "size_bytes": number;
  "duration_seconds"?: number | null;
  "status": string;
  "original_filename"?: string | null;
  "checksum_sha256"?: string | null;
  "archived_at"?: string | null;
  "created_at": string;
  "updated_at": string;
  "tags": RouterGetMediaGetResponseDataTags[];
  "transcription"?: RouterGetMediaGetResponseDataTranscription | null;
}
export type RouterGetMediaGetResponse = RouterGetMediaGetResponseData;

/** Backend request type: MediaUpdate. */
export interface RouterUpdateMediaPatchInput extends JsonObject {
  "name"?: string | null;
  "description"?: string | null;
  "folder_id"?: string | null;
  "duration_seconds"?: number | null;
  "status"?: string | null;
  "tag_ids"?: string[] | null;
}
/** Backend response type: MediaResponse. */
export interface RouterUpdateMediaPatchResponseDataTags extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export interface RouterUpdateMediaPatchResponseDataTranscription extends JsonObject {
  "id": string;
  "media_id": string;
  "model_ref": string;
  "language": string;
  "detected_language"?: string | null;
  "status": string;
  "transcript"?: string | null;
  "last_error"?: string | null;
  "attempts": number;
  "max_attempts": number;
  "next_retry_at"?: string | null;
  "queued_at": string;
  "started_at"?: string | null;
  "completed_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface RouterUpdateMediaPatchResponseData extends JsonObject {
  "id": string;
  "folder_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "media_type": string;
  "mime_type": string;
  "object_key": string;
  "bucket": string;
  "size_bytes": number;
  "duration_seconds"?: number | null;
  "status": string;
  "original_filename"?: string | null;
  "checksum_sha256"?: string | null;
  "archived_at"?: string | null;
  "created_at": string;
  "updated_at": string;
  "tags": RouterUpdateMediaPatchResponseDataTags[];
  "transcription"?: RouterUpdateMediaPatchResponseDataTranscription | null;
}
export type RouterUpdateMediaPatchResponse = RouterUpdateMediaPatchResponseData;

/** Backend response type: Vec<PackageResponse>. */
export interface RouterListPackagesGetResponseItem extends JsonObject {
  "id": string;
  "media_id": string;
  "revision": number;
  "status": string;
  "profile": BackendJson<"Json">;
  "manifest_dash_key"?: string | null;
  "manifest_hls_key"?: string | null;
  "object_prefix": string;
  "checksum_manifest"?: string | null;
  "last_error"?: string | null;
  "created_at": string;
  "updated_at": string;
  "completed_at"?: string | null;
  "dash_url"?: string | null;
  "hls_url"?: string | null;
}
export type RouterListPackagesGetResponse = RouterListPackagesGetResponseItem[];

/** Backend request type: Option<DrmConfig. */
export interface RouterRegeneratePostInput extends JsonObject {
  "download"?: boolean;
  "transcode"?: boolean;
  "package"?: boolean;
  "allow_video_only_on_audio_error"?: boolean;
}
/** Backend response type: drm_job::Model. */
export interface RouterRegeneratePostResponseData extends JsonObject {
  "id": string;
  "media_id": string;
  "package_id"?: string | null;
  "status": string;
  "stage": string;
  "progress": number;
  "attempts": number;
  "max_attempts": number;
  "next_retry_at"?: string | null;
  "last_error"?: string | null;
  "config": BackendJson<"Json">;
  "created_at": string;
  "updated_at": string;
  "started_at"?: string | null;
  "completed_at"?: string | null;
}
export type RouterRegeneratePostResponse = RouterRegeneratePostResponseData;

/** Backend response type: PlaybackResponse. */
export interface RouterPlaybackGetResponseData extends JsonObject {
  "media_id": string;
  "media_type": string;
  "mime_type": string;
  "url": string;
  "expires_in_seconds": number;
}
export type RouterPlaybackGetResponse = RouterPlaybackGetResponseData;

/** Backend request type: BatchMediaInput. */
export interface RouterBatchMediaPostInput extends JsonObject {
  "ids": string[];
}
/** Backend response type: Vec<MediaResponse>. */
export interface RouterBatchMediaPostResponseItemTags extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export interface RouterBatchMediaPostResponseItemTranscription extends JsonObject {
  "id": string;
  "media_id": string;
  "model_ref": string;
  "language": string;
  "detected_language"?: string | null;
  "status": string;
  "transcript"?: string | null;
  "last_error"?: string | null;
  "attempts": number;
  "max_attempts": number;
  "next_retry_at"?: string | null;
  "queued_at": string;
  "started_at"?: string | null;
  "completed_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface RouterBatchMediaPostResponseItem extends JsonObject {
  "id": string;
  "folder_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "media_type": string;
  "mime_type": string;
  "object_key": string;
  "bucket": string;
  "size_bytes": number;
  "duration_seconds"?: number | null;
  "status": string;
  "original_filename"?: string | null;
  "checksum_sha256"?: string | null;
  "archived_at"?: string | null;
  "created_at": string;
  "updated_at": string;
  "tags": RouterBatchMediaPostResponseItemTags[];
  "transcription"?: RouterBatchMediaPostResponseItemTranscription | null;
}
export type RouterBatchMediaPostResponse = RouterBatchMediaPostResponseItem[];

/** Backend query type: DrmStatusesQuery. */
export interface RouterDrmStatusesGetQuery extends QueryParams {
  "ids": string;
}
/** Backend response type: Vec<MediaDrmStatusResponse>. */
export interface RouterDrmStatusesGetResponseItem extends JsonObject {
  "media_id": string;
  "media_type": string;
  "media_status": string;
  "package_status"?: string | null;
  "job_status"?: string | null;
  "effective_status": string;
}
export type RouterDrmStatusesGetResponse = RouterDrmStatusesGetResponseItem[];

/** Backend response type: no-content. */
export type RouterArchivePackageDeleteResponse = void;

/** Backend request type: RegisterMediaInput. */
export interface RouterRegisterExistingMediaPostInput extends JsonObject {
  "id"?: string | null;
  "object_key": string;
  "original_filename": string;
  "name"?: string | null;
  "description"?: string | null;
  "mime_type": string;
  "size_bytes": number;
  "checksum_sha256"?: string | null;
  "folder_id"?: string | null;
}
/** Backend response type: MediaResponse. */
export interface RouterRegisterExistingMediaPostResponseDataTags extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export interface RouterRegisterExistingMediaPostResponseDataTranscription extends JsonObject {
  "id": string;
  "media_id": string;
  "model_ref": string;
  "language": string;
  "detected_language"?: string | null;
  "status": string;
  "transcript"?: string | null;
  "last_error"?: string | null;
  "attempts": number;
  "max_attempts": number;
  "next_retry_at"?: string | null;
  "queued_at": string;
  "started_at"?: string | null;
  "completed_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface RouterRegisterExistingMediaPostResponseData extends JsonObject {
  "id": string;
  "folder_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "media_type": string;
  "mime_type": string;
  "object_key": string;
  "bucket": string;
  "size_bytes": number;
  "duration_seconds"?: number | null;
  "status": string;
  "original_filename"?: string | null;
  "checksum_sha256"?: string | null;
  "archived_at"?: string | null;
  "created_at": string;
  "updated_at": string;
  "tags": RouterRegisterExistingMediaPostResponseDataTags[];
  "transcription"?: RouterRegisterExistingMediaPostResponseDataTranscription | null;
}
export type RouterRegisterExistingMediaPostResponse = RouterRegisterExistingMediaPostResponseData;

/** Backend response type: Vec<mixed_media::Model>. */
export interface RouterListMixedMediaGetResponseItem extends JsonObject {
  "id": string;
  "library_id": string;
  "category_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "transcription_language": string;
  "status": string;
  "manifest_version": number;
  "published_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type RouterListMixedMediaGetResponse = RouterListMixedMediaGetResponseItem[];

/** Backend request type: MixedMediaInput. */
export interface RouterCreateMixedMediaPostInput extends JsonObject {
  "library_id": string;
  "name": string;
  "description"?: string | null;
  "category_id"?: string | null;
  "transcription_language"?: string | null;
}
/** Backend response type: mixed_media::Model. */
export interface RouterCreateMixedMediaPostResponseData extends JsonObject {
  "id": string;
  "library_id": string;
  "category_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "transcription_language": string;
  "status": string;
  "manifest_version": number;
  "published_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type RouterCreateMixedMediaPostResponse = RouterCreateMixedMediaPostResponseData;

/** Backend response type: no-content. */
export type RouterDeleteMixedMediaDeleteResponse = void;

/** Backend response type: mixed_media::Model. */
export interface RouterGetMixedMediaGetResponseData extends JsonObject {
  "id": string;
  "library_id": string;
  "category_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "transcription_language": string;
  "status": string;
  "manifest_version": number;
  "published_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type RouterGetMixedMediaGetResponse = RouterGetMixedMediaGetResponseData;

/** Backend request type: MixedMediaUpdate. */
export interface RouterUpdateMixedMediaPatchInput extends JsonObject {
  "library_id"?: string | null;
  "name"?: string | null;
  "description"?: string | null;
  "status"?: string | null;
  "transcription_language"?: string | null;
  "category_id"?: string | null;
}
/** Backend response type: mixed_media::Model. */
export interface RouterUpdateMixedMediaPatchResponseData extends JsonObject {
  "id": string;
  "library_id": string;
  "category_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "transcription_language": string;
  "status": string;
  "manifest_version": number;
  "published_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type RouterUpdateMixedMediaPatchResponse = RouterUpdateMixedMediaPatchResponseData;

/** Backend response type: Option<CompositionAnalysis>. */
export type RouterGetAnalysisGetResponse = BackendJson<"CompositionAnalysis"> | null;

/** Backend request type: StartAnalysisInput. */
export interface RouterStartAnalysisPostInput extends JsonObject {
  "language"?: string | null;
  "force"?: boolean;
}
/** Backend response type: CompositionAnalysis. */
export interface RouterStartAnalysisPostResponseData extends JsonObject {
  "mixed_media_id": string;
  "composition_name": string;
  "manifest_version": number;
  "model_ref": string;
  "summary_model_ref"?: string | null;
  "language": string;
  "detected_language"?: string | null;
  "status": string;
  "transcript"?: string | null;
  "summary"?: string | null;
  "last_error"?: string | null;
  "queued_at": string;
  "started_at"?: string | null;
  "completed_at"?: string | null;
  "updated_at": string;
}
export type RouterStartAnalysisPostResponse = RouterStartAnalysisPostResponseData;

/** Backend request type: CategoryInput. */
export interface RouterCreateCategoryPostApiV1MixedMediaIdCategoriesInput extends JsonObject {
  "title": string;
  "parent_id"?: string | null;
}
/** Backend response type: content_category::Model. */
export interface RouterCreateCategoryPostApiV1MixedMediaIdCategoriesResponseData extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "parent_id"?: string | null;
  "title": string;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterCreateCategoryPostApiV1MixedMediaIdCategoriesResponse = RouterCreateCategoryPostApiV1MixedMediaIdCategoriesResponseData;

/** Backend response type: KnowledgeSyncSettings. */
export interface RouterGetSettingsGetApiV1MixedMediaIdKnowledgeSyncResponseData extends JsonObject {
  "mixed_media_id": string;
  "enabled": boolean;
  "knowledge_base_id"?: string | null;
  "sync_status": string;
  "synced_manifest_version"?: number | null;
  "knowledge_document_id"?: string | null;
  "sync_event_id"?: string | null;
  "last_error"?: string | null;
  "last_synced_at"?: string | null;
}
export type RouterGetSettingsGetApiV1MixedMediaIdKnowledgeSyncResponse = RouterGetSettingsGetApiV1MixedMediaIdKnowledgeSyncResponseData;

/** Backend response type: KnowledgeSyncSettings. */
export interface RouterSyncNowPostResponseData extends JsonObject {
  "mixed_media_id": string;
  "enabled": boolean;
  "knowledge_base_id"?: string | null;
  "sync_status": string;
  "synced_manifest_version"?: number | null;
  "knowledge_document_id"?: string | null;
  "sync_event_id"?: string | null;
  "last_error"?: string | null;
  "last_synced_at"?: string | null;
}
export type RouterSyncNowPostResponse = RouterSyncNowPostResponseData;

/** Backend request type: UpdateKnowledgeSync. */
export interface RouterUpdateSettingsPutInput extends JsonObject {
  "enabled": boolean;
  "knowledge_base_id"?: string | null;
}
/** Backend response type: KnowledgeSyncSettings. */
export interface RouterUpdateSettingsPutResponseData extends JsonObject {
  "mixed_media_id": string;
  "enabled": boolean;
  "knowledge_base_id"?: string | null;
  "sync_status": string;
  "synced_manifest_version"?: number | null;
  "knowledge_document_id"?: string | null;
  "sync_event_id"?: string | null;
  "last_error"?: string | null;
  "last_synced_at"?: string | null;
}
export type RouterUpdateSettingsPutResponse = RouterUpdateSettingsPutResponseData;

/** Backend response type: mixed_media_manifest::Model. */
export interface RouterGetManifestGetResponseData extends JsonObject {
  "id": string;
  "mixed_media_id": string;
  "version": number;
  "document": BackendJson<"Json">;
  "created_at": string;
}
export type RouterGetManifestGetResponse = RouterGetManifestGetResponseData;

/** Backend response type: Vec<mixed_media_manifest::Model>. */
export interface RouterListManifestsGetApiV1MixedMediaIdManifestsResponseItem extends JsonObject {
  "id": string;
  "mixed_media_id": string;
  "version": number;
  "document": BackendJson<"Json">;
  "created_at": string;
}
export type RouterListManifestsGetApiV1MixedMediaIdManifestsResponse = RouterListManifestsGetApiV1MixedMediaIdManifestsResponseItem[];

/** Backend request type: PartInput. */
export interface RouterCreatePartPostInput extends JsonObject {
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds"?: number;
  "textual"?: JsonValue;
  "rewards"?: JsonValue;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
  "primary_media_id"?: string | null;
  "hint_media_id"?: string | null;
}
/** Backend response type: media_part::Model. */
export interface RouterCreatePartPostResponseData extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds": number;
  "textual": BackendJson<"Json">;
  "rewards": BackendJson<"Json">;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
  "primary_media_id"?: string | null;
  "hint_media_id"?: string | null;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterCreatePartPostResponse = RouterCreatePartPostResponseData;

/** Backend response type: mixed_media_manifest::Model. */
export interface RouterPublishPostApiV1MixedMediaIdPublishResponseData extends JsonObject {
  "id": string;
  "mixed_media_id": string;
  "version": number;
  "document": BackendJson<"Json">;
  "created_at": string;
}
export type RouterPublishPostApiV1MixedMediaIdPublishResponse = RouterPublishPostApiV1MixedMediaIdPublishResponseData;

/** Backend response type: EditorResources. */
export interface RouterResourcesGetResponseDataCategories extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "parent_id"?: string | null;
  "title": string;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export interface RouterResourcesGetResponseDataParts extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds": number;
  "textual": BackendJson<"Json">;
  "rewards": BackendJson<"Json">;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
  "primary_media_id"?: string | null;
  "hint_media_id"?: string | null;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export interface RouterResourcesGetResponseData extends JsonObject {
  "categories": RouterResourcesGetResponseDataCategories[];
  "parts": RouterResourcesGetResponseDataParts[];
}
export type RouterResourcesGetResponse = RouterResourcesGetResponseData;

/** Backend response type: mixed_media_workflow::Model. */
export interface RouterGetWorkflowGetApiV1MixedMediaIdWorkflowResponseData extends JsonObject {
  "mixed_media_id": string;
  "nodes": BackendJson<"Json">;
  "edges": BackendJson<"Json">;
  "revision": number;
  "updated_at": string;
}
export type RouterGetWorkflowGetApiV1MixedMediaIdWorkflowResponse = RouterGetWorkflowGetApiV1MixedMediaIdWorkflowResponseData;

/** Backend request type: WorkflowInput. */
export interface RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowInput extends JsonObject {
  "nodes": JsonValue;
  "edges": JsonValue;
}
/** Backend response type: mixed_media_workflow::Model. */
export interface RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowResponseData extends JsonObject {
  "mixed_media_id": string;
  "nodes": BackendJson<"Json">;
  "edges": BackendJson<"Json">;
  "revision": number;
  "updated_at": string;
}
export type RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowResponse = RouterSaveWorkflowPutApiV1MixedMediaIdWorkflowResponseData;

/** Backend response type: no-content. */
export type RouterDeleteCategoryDeleteResponse = void;

/** Backend request type: CategoryInput. */
export interface RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdInput extends JsonObject {
  "title": string;
  "parent_id"?: string | null;
}
/** Backend response type: content_category::Model. */
export interface RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdResponseData extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "parent_id"?: string | null;
  "title": string;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdResponse = RouterUpdateCategoryPatchApiV1MixedMediaMixedIdCategoriesIdResponseData;

/** Backend response type: no-content. */
export type RouterDeletePartDeleteResponse = void;

/** Backend response type: media_part::Model. */
export interface RouterGetPartGetResponseData extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds": number;
  "textual": BackendJson<"Json">;
  "rewards": BackendJson<"Json">;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
  "primary_media_id"?: string | null;
  "hint_media_id"?: string | null;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterGetPartGetResponse = RouterGetPartGetResponseData;

/** Backend request type: PartInput. */
export interface RouterUpdatePartPutInput extends JsonObject {
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds"?: number;
  "textual"?: JsonValue;
  "rewards"?: JsonValue;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
  "primary_media_id"?: string | null;
  "hint_media_id"?: string | null;
}
/** Backend response type: media_part::Model. */
export interface RouterUpdatePartPutResponseData extends JsonObject {
  "id": string;
  "mixed_media_id"?: string | null;
  "library_id": string;
  "category_id"?: string | null;
  "title": string;
  "state": string;
  "media_type"?: string | null;
  "duration_seconds": number;
  "textual": BackendJson<"Json">;
  "rewards": BackendJson<"Json">;
  "textual_hint"?: string | null;
  "game_id"?: string | null;
  "primary_media_id"?: string | null;
  "hint_media_id"?: string | null;
  "created_at": string;
  "updated_at": string;
  "archived_at"?: string | null;
}
export type RouterUpdatePartPutResponse = RouterUpdatePartPutResponseData;

/** Backend response type: serde_json::Value. */
export type RouterHealthGetResponse = JsonValue;

/** Backend response type: Value. */
export type RouterKnowledgeCatalogGetResponse = JsonValue;

/** Backend response type: SettingsResponse. */
export interface RouterGetSettingsGetApiV1OperationsSettingsResponseData extends JsonObject {
  "package_concurrency": number;
  "transcription_enabled": boolean;
  "transcription_model_ref"?: string | null;
  "summary_model_ref"?: string | null;
}
export type RouterGetSettingsGetApiV1OperationsSettingsResponse = RouterGetSettingsGetApiV1OperationsSettingsResponseData;

/** Backend request type: SettingsInput. */
export interface RouterUpdateSettingsPatchInput extends JsonObject {
  "package_concurrency": number;
  "transcription_enabled"?: boolean;
  "transcription_model_ref"?: string | null;
  "summary_model_ref"?: string | null;
}
/** Backend response type: SettingsResponse. */
export interface RouterUpdateSettingsPatchResponseData extends JsonObject {
  "package_concurrency": number;
  "transcription_enabled": boolean;
  "transcription_model_ref"?: string | null;
  "summary_model_ref"?: string | null;
}
export type RouterUpdateSettingsPatchResponse = RouterUpdateSettingsPatchResponseData;

/** Backend response type: Vec<TranscriptionModel>. */
export interface RouterTranscriptionModelsGetResponseItem extends JsonObject {
  "model_ref": string;
  "model": string;
  "provider_label": string;
  "source": string;
}
export type RouterTranscriptionModelsGetResponse = RouterTranscriptionModelsGetResponseItem[];

/** Backend request type: LegacyPackageInput. */
export interface RouterLegacyEnqueuePostInput extends JsonObject {
  "id": string;
  "download"?: boolean;
  "transcode"?: boolean;
  "package"?: boolean;
}
/** Backend response type: serde_json::Value. */
export type RouterLegacyEnqueuePostResponse = JsonValue;

/** Backend response type: serde_json::Value. */
export type RouterLegacyStatusGetResponse = JsonValue;

/** Backend response type: raw-response. */
export interface RouterPackageFileGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export type RouterStatusGetResponse = JsonValue;

/** Backend response type: Vec<tag::Model>. */
export interface RouterListTagsGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export type RouterListTagsGetResponse = RouterListTagsGetResponseItem[];

/** Backend request type: TagInput. */
export interface RouterCreateTagPostInput extends JsonObject {
  "name": string;
}
/** Backend response type: tag::Model. */
export interface RouterCreateTagPostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export type RouterCreateTagPostResponse = RouterCreateTagPostResponseData;

/** Backend response type: no-content. */
export type RouterDeleteTagDeleteResponse = void;

/** Backend request type: UploadSessionInput. */
export interface RouterCreateUploadSessionPostInput extends JsonObject {
  "media_id"?: string | null;
  "filename": string;
  "name"?: string | null;
  "description"?: string | null;
  "mime_type": string;
  "folder_id"?: string | null;
  "total_bytes": number;
  "part_size"?: number | null;
}
/** Backend response type: UploadSessionResponse. */
export interface RouterCreateUploadSessionPostResponseDataParts extends JsonObject {
  "session_id": string;
  "part_number": number;
  "etag": string;
  "size_bytes": number;
  "created_at": string;
}
export interface RouterCreateUploadSessionPostResponseData extends JsonObject {
  "id": string;
  "media_id": string;
  "object_key": string;
  "multipart_upload_id": string;
  "filename": string;
  "name": string;
  "description"?: string | null;
  "mime_type": string;
  "media_type": string;
  "folder_id"?: string | null;
  "total_bytes": number;
  "part_size": number;
  "checksum_sha256"?: string | null;
  "status": string;
  "error"?: string | null;
  "expires_at": string;
  "created_at": string;
  "updated_at": string;
  "completed_at"?: string | null;
  "parts": RouterCreateUploadSessionPostResponseDataParts[];
}
export type RouterCreateUploadSessionPostResponse = RouterCreateUploadSessionPostResponseData;

/** Backend response type: no-content. */
export type RouterCancelUploadDeleteResponse = void;

/** Backend response type: UploadSessionResponse. */
export interface RouterGetUploadSessionGetResponseDataParts extends JsonObject {
  "session_id": string;
  "part_number": number;
  "etag": string;
  "size_bytes": number;
  "created_at": string;
}
export interface RouterGetUploadSessionGetResponseData extends JsonObject {
  "id": string;
  "media_id": string;
  "object_key": string;
  "multipart_upload_id": string;
  "filename": string;
  "name": string;
  "description"?: string | null;
  "mime_type": string;
  "media_type": string;
  "folder_id"?: string | null;
  "total_bytes": number;
  "part_size": number;
  "checksum_sha256"?: string | null;
  "status": string;
  "error"?: string | null;
  "expires_at": string;
  "created_at": string;
  "updated_at": string;
  "completed_at"?: string | null;
  "parts": RouterGetUploadSessionGetResponseDataParts[];
}
export type RouterGetUploadSessionGetResponse = RouterGetUploadSessionGetResponseData;

/** Backend request type: CompleteUploadInput. */
export interface RouterCompleteUploadPostInput extends JsonObject {
  "checksum_sha256"?: string | null;
}
/** Backend response type: MediaResponse. */
export interface RouterCompleteUploadPostResponseDataTags extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export interface RouterCompleteUploadPostResponseDataTranscription extends JsonObject {
  "id": string;
  "media_id": string;
  "model_ref": string;
  "language": string;
  "detected_language"?: string | null;
  "status": string;
  "transcript"?: string | null;
  "last_error"?: string | null;
  "attempts": number;
  "max_attempts": number;
  "next_retry_at"?: string | null;
  "queued_at": string;
  "started_at"?: string | null;
  "completed_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface RouterCompleteUploadPostResponseData extends JsonObject {
  "id": string;
  "folder_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "media_type": string;
  "mime_type": string;
  "object_key": string;
  "bucket": string;
  "size_bytes": number;
  "duration_seconds"?: number | null;
  "status": string;
  "original_filename"?: string | null;
  "checksum_sha256"?: string | null;
  "archived_at"?: string | null;
  "created_at": string;
  "updated_at": string;
  "tags": RouterCompleteUploadPostResponseDataTags[];
  "transcription"?: RouterCompleteUploadPostResponseDataTranscription | null;
}
export type RouterCompleteUploadPostResponse = RouterCompleteUploadPostResponseData;

/** Backend request type: binary byte stream. */
export type RouterPutUploadPartPutInput = Blob | ArrayBuffer | ArrayBufferView;
/** Backend response type: upload_part::Model. */
export interface RouterPutUploadPartPutResponseData extends JsonObject {
  "session_id": string;
  "part_number": number;
  "etag": string;
  "size_bytes": number;
  "created_at": string;
}
export type RouterPutUploadPartPutResponse = RouterPutUploadPartPutResponseData;
