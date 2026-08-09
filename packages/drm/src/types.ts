import type { JsonObject, QueryParams } from "@faiber/sdk-core";

export type DrmMediaType = "audio" | "video";
export type DrmMediaStatus = "active" | "inactive" | (string & {});

export interface DrmStatus extends JsonObject { status: "ok"; service: "infera-drm"; }
export interface DrmFolder extends JsonObject {
  id: string; parent_id: string | null; name: string; created_at: string; updated_at: string;
}
export interface DrmFolderInput extends JsonObject { name: string; parent_id?: string | null; }
export interface DrmTag extends JsonObject { id: string; name: string; created_at: string; }
export interface DrmTagInput extends JsonObject { name: string; }
export interface DrmMedia extends JsonObject {
  id: string; folder_id: string | null; name: string; description: string | null;
  media_type: DrmMediaType; mime_type: string; object_key: string; bucket: string;
  size_bytes: number; duration_seconds: number | null; status: DrmMediaStatus;
  created_at: string; updated_at: string;
}
export interface DrmMediaRecord extends DrmMedia { tags: DrmTag[]; }
export interface DrmMediaListQuery extends QueryParams {
  search?: string; media_type?: DrmMediaType; folder_id?: string; tag_id?: string;
  page?: number; size?: number;
}
export interface DrmMediaPage extends JsonObject {
  data: DrmMediaRecord[]; page: number; page_size: number; total_items: number;
}
export interface DrmMediaUpdate extends JsonObject {
  name?: string; description?: string; folder_id?: string | null;
  duration_seconds?: number; status?: DrmMediaStatus; tag_ids?: string[];
}
export interface DrmMediaUpload {
  file: Blob; name?: string; description?: string; folder_id?: string | null; tag_ids?: string[];
}
export interface DrmPlayback extends JsonObject {
  media_id: string; media_type: DrmMediaType; mime_type: string; url: string; expires_in_seconds: number;
}
