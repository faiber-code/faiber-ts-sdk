import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
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
export interface RouterUploadMediaPostResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "name": string;
  "created_at": string;
  "updated_at": string;
  "tags": BackendJson<"entity::tag::Model">[];
}
export type RouterUploadMediaPostResponse = RouterUploadMediaPostResponseData;

/** Backend response type: no-content. */
export type RouterDeleteMediaDeleteResponse = void;

/** Backend response type: MediaResponse. */
export interface RouterGetMediaGetResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "name": string;
  "created_at": string;
  "updated_at": string;
  "tags": BackendJson<"entity::tag::Model">[];
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
export interface RouterUpdateMediaPatchResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "name": string;
  "created_at": string;
  "updated_at": string;
  "tags": BackendJson<"entity::tag::Model">[];
}
export type RouterUpdateMediaPatchResponse = RouterUpdateMediaPatchResponseData;

/** Backend response type: PlaybackResponse. */
export interface RouterPlaybackGetResponseData extends JsonObject {
  "media_id": string;
  "media_type": string;
  "mime_type": string;
  "url": string;
  "expires_in_seconds": number;
}
export type RouterPlaybackGetResponse = RouterPlaybackGetResponseData;

/** Backend response type: serde_json::Value. */
export type RouterStatusGetResponse = JsonValue;

/** Backend response type: Vec<tag::Model>. */
export interface RouterListTagsGetResponseItem extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "name": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterListTagsGetResponse = RouterListTagsGetResponseItem[];

/** Backend request type: TagInput. */
export interface RouterCreateTagPostInput extends JsonObject {
  "name": string;
}
/** Backend response type: tag::Model. */
export interface RouterCreateTagPostResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string | null;
  "name": string;
  "created_at": string;
  "updated_at": string;
}
export type RouterCreateTagPostResponse = RouterCreateTagPostResponseData;

/** Backend response type: no-content. */
export type RouterDeleteTagDeleteResponse = void;
