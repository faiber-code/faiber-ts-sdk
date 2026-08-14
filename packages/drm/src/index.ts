import { ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";

/** Complete typed client for the sandbox digital-rights media service. */
import { DrmOperations } from "./operations.js";
export class DrmApi extends ServiceApi {
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
}

export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
