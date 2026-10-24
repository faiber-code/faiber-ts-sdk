import type { JsonValue, QueryParams } from "@faiber/sdk-core";

/** Source: src/models.rs Page<T>; pages start at 1 and return a bare pagination object. */
export interface DrmPage<T> {
  data: T[];
  page: number;
  page_size: number;
  total_items: number;
}

/** JSON fields explicitly persisted as arbitrary serde_json::Value by DRM: editor textual/rewards, workflow node data, historical manifest documents, external metadata and audit snapshots. */
export type DrmDynamicJson = JsonValue;
/** Upstream Knowledge catalog is passed through verbatim without a local response model; its deployed schema is controlled by the Knowledge service. */
export type DrmKnowledgeCatalog = JsonValue;

export type DrmMediaType = "audio" | "video" | "image";
/** Stored status strings are extensible, including drm_processing/drm_failed. */
export type DrmMediaStatus = string;
export type DrmContentState = "Question" | "Task" | "Interactive" | "Game";
export type DrmVisibility = "public" | "private";
export type DrmTranscriptionLanguage = "auto" | "fa" | "en";
export type DrmCompositionStatus = "draft" | "published" | "inactive";

/** Source: entity/src/audit_event.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmAuditEvent {
  id: string;
  actor_id: string | null;
  action: string;
  entity_type: string;
  entity_id: string | null;
  request_id: string | null;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  before_data: DrmDynamicJson | null;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  after_data: DrmDynamicJson | null;
  created_at: string;
}

/** Source: entity/src/composition_category.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmCompositionCategory {
  id: string;
  parent_id: string | null;
  title: string;
  created_at: string;
  updated_at: string;
}

/** Source: entity/src/content_category.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmContentCategory {
  id: string;
  mixed_media_id: string | null;
  library_id: string;
  parent_id: string | null;
  title: string;
  created_at: string;
  updated_at: string;
  archived_at: string | null;
}

/** Source: entity/src/content_item_media.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmContentItemMedia {
  content_item_id: string;
  media_id: string;
  slot: string;
  position: number;
  is_current: boolean;
  created_at: string;
}

/** Source: entity/src/content_library.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmContentLibrary {
  id: string;
  name: string;
  description: string | null;
  status: string;
  visibility: DrmVisibility;
  created_at: string;
  updated_at: string;
}

/** Source: entity/src/drm_job.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmJob {
  id: string;
  media_id: string;
  package_id: string | null;
  status: string;
  stage: string;
  progress: number;
  attempts: number;
  max_attempts: number;
  next_retry_at: string | null;
  last_error: string | null;
  config: DrmResolvedConfig;
  created_at: string;
  updated_at: string;
  started_at: string | null;
  completed_at: string | null;
}

/** Source: entity/src/drm_key.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmDrmKey {
  id: string;
  package_id: string;
  key_id: string;
  label: string;
  encrypted_key: string;
  nonce: string;
  created_at: string;
}

/** Source: entity/src/external_reference.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmExternalReference {
  system: string;
  entity_type: string;
  external_id: string;
  internal_type: string;
  internal_id: string;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  metadata: DrmDynamicJson;
  created_at: string;
  updated_at: string;
}

/** Source: entity/src/folder.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmFolder {
  id: string;
  parent_id: string | null;
  name: string;
  created_at: string;
  updated_at: string;
}

/** Source: entity/src/media.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMedia {
  id: string;
  folder_id: string | null;
  name: string;
  description: string | null;
  media_type: DrmMediaType;
  mime_type: string;
  object_key: string;
  bucket: string;
  size_bytes: number;
  duration_seconds: number | null;
  status: string;
  original_filename: string | null;
  checksum_sha256: string | null;
  archived_at: string | null;
  created_at: string;
  updated_at: string;
}

/** Source: entity/src/media_package.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMediaPackage {
  id: string;
  media_id: string;
  revision: number;
  status: string;
  profile: DrmResolvedConfig;
  manifest_dash_key: string | null;
  manifest_hls_key: string | null;
  object_prefix: string;
  checksum_manifest: string | null;
  last_error: string | null;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
}

/** Source: entity/src/media_part.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMediaPart {
  id: string;
  mixed_media_id: string | null;
  library_id: string;
  category_id: string | null;
  title: string;
  state: string;
  media_type: string | null;
  duration_seconds: number;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  textual: DrmDynamicJson;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  rewards: DrmDynamicJson;
  textual_hint: string | null;
  game_id: string | null;
  primary_media_id: string | null;
  hint_media_id: string | null;
  created_at: string;
  updated_at: string;
  archived_at: string | null;
}

/** Source: entity/src/media_tag.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMediaTag {
  media_id: string;
  tag_id: string;
}

/** Source: entity/src/media_transcription.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMediaTranscription {
  id: string;
  media_id: string;
  model_ref: string;
  language: string;
  detected_language: string | null;
  status: string;
  transcript: string | null;
  last_error: string | null;
  attempts: number;
  max_attempts: number;
  next_retry_at: string | null;
  queued_at: string;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

/** Source: entity/src/mixed_media.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMixedMedia {
  id: string;
  library_id: string;
  category_id: string | null;
  name: string;
  description: string | null;
  transcription_language: string;
  status: string;
  manifest_version: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

/** Source: entity/src/mixed_media_manifest.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMixedMediaManifest {
  id: string;
  mixed_media_id: string;
  version: number;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  document: DrmDynamicJson;
  created_at: string;
}

/** Source: entity/src/mixed_media_workflow.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMixedMediaWorkflow {
  mixed_media_id: string;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  nodes: DrmDynamicJson[];
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  edges: DrmDynamicJson[];
  revision: number;
  updated_at: string;
}

/** Source: entity/src/tag.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmTag {
  id: string;
  name: string;
  created_at: string;
}

/** Source: entity/src/upload_part.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmUploadPart {
  session_id: string;
  part_number: number;
  etag: string;
  size_bytes: number;
  created_at: string;
}

/** Source: entity/src/upload_session.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmUploadSession {
  id: string;
  media_id: string;
  object_key: string;
  multipart_upload_id: string;
  filename: string;
  name: string;
  description: string | null;
  mime_type: string;
  media_type: string;
  folder_id: string | null;
  total_bytes: number;
  part_size: number;
  checksum_sha256: string | null;
  status: string;
  error: string | null;
  expires_at: string;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
}

/** Source: src/composition_analysis.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmAnalysisQuery extends QueryParams {
  page?: number | null;
  size?: number | null;
  search?: string | null;
  status?: string | null;
  from?: string | null;
  to?: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmAttachmentInput {
  media_id: string;
  slot: "primary" | "hint";
  position?: number;
  is_current?: boolean;
}

/** Source: src/operations_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmAuditQuery extends QueryParams {
  page?: number | null;
  size?: number | null;
  from?: string | null;
  to?: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmBatchMediaInput {
  ids: (string)[];
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmCategoryInput {
  title: string;
  parent_id?: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmCompleteUploadInput {
  checksum_sha256?: string | null;
}

/** Source: src/composition_analysis.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmCompositionAnalysis {
  mixed_media_id: string;
  composition_name: string;
  manifest_version: number;
  model_ref: string;
  summary_model_ref: string | null;
  language: string;
  detected_language: string | null;
  status: string;
  transcript: string | null;
  summary: string | null;
  last_error: string | null;
  queued_at: string;
  started_at: string | null;
  completed_at: string | null;
  updated_at: string;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmCompositionCategoryInput {
  title: string;
  parent_id?: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmCompositionInput {
  id?: string | null;
  library_id: string;
  name: string;
  description?: string | null;
  category_id?: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmCompositionQuery extends QueryParams {
  search?: string | null;
  category_id?: string | null;
  uncategorized?: boolean;
  page?: number | null;
  size?: number | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmContentItemInput {
  id?: string | null;
  category_id?: string | null;
  title: string;
  state: DrmContentState;
  media_type?: string | null;
  duration_seconds?: number;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  textual?: DrmDynamicJson;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  rewards?: DrmDynamicJson;
  textual_hint?: string | null;
  game_id?: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmContentItemsQuery extends QueryParams {
  category_id?: string | null;
  direct?: boolean;
  errors?: boolean;
  search?: string | null;
  page?: number | null;
  size?: number | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmConfig {
  download?: boolean;
  transcode?: boolean;
  package?: boolean;
  allow_video_only_on_audio_error?: boolean;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmJobQuery extends QueryParams {
  status?: string | null;
  media_id?: string | null;
  page?: number | null;
  size?: number | null;
  from?: string | null;
  to?: string | null;
}

/** Source: src/drm_queue.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmJobResponse extends DrmJob {
  media_name: string;
  media_type: string;
}

/** Source: src/package_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmStatusesQuery extends QueryParams {
  ids: string;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmEditorResources {
  categories: (DrmContentCategory)[];
  parts: (DrmMediaPart)[];
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmEnqueueDrmInput {
  media_id: string;
  config?: DrmConfig;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmExternalReferenceInput {
  system: string;
  entity_type: string;
  external_id: string;
  internal_type: string;
  internal_id: string;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  metadata?: DrmDynamicJson;
}

/** Source: src/generic_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmExternalReferenceQuery extends QueryParams {
  internal_type?: string | null;
  internal_id?: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmFolderInput {
  name: string;
  parent_id?: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmGenericCategoryInput {
  id?: string | null;
  parent_id?: string | null;
  title: string;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmHistoricalManifestInput {
  id?: string | null;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  document: DrmDynamicJson;
  created_at?: string | null;
}

/** Source: src/knowledge_sync.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmKnowledgeSyncSettings {
  mixed_media_id: string;
  enabled: boolean;
  knowledge_base_id: string | null;
  sync_status: string;
  synced_manifest_version: number | null;
  knowledge_document_id: string | null;
  sync_event_id: string | null;
  last_error: string | null;
  last_synced_at: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmLegacyPackageInput {
  id: string;
  download?: boolean;
  transcode?: boolean;
  package?: boolean;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmLibraryInput {
  id?: string | null;
  name: string;
  description?: string | null;
  status?: string | null;
  visibility?: DrmVisibility | null;
}

/** Source: src/generic_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmLibraryStats {
  total: number;
  question: number;
  task: number;
  video: number;
  game: number;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMediaListQuery extends QueryParams {
  search?: string | null;
  media_type?: string | null;
  folder_id?: string | null;
  tag_id?: string | null;
  page?: number | null;
  size?: number | null;
}

/** Source: src/package_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMediaDrmStatusResponse {
  media_id: string;
  media_type: string;
  media_status: string;
  package_status: string | null;
  job_status: string | null;
  effective_status: string;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMediaRecord extends DrmMedia {
  tags: (DrmTag)[];
  transcription: DrmMediaTranscription | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMediaUpdate {
  name?: string | null;
  description?: string | null;
  folder_id?: string | null;
  duration_seconds?: number | null;
  status?: string | null;
  tag_ids?: (string)[] | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMixedMediaInput {
  library_id: string;
  name: string;
  description?: string | null;
  category_id?: string | null;
  transcription_language?: DrmTranscriptionLanguage | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmMixedMediaUpdate {
  library_id?: string | null;
  name?: string | null;
  description?: string | null;
  status?: DrmCompositionStatus | null;
  transcription_language?: DrmTranscriptionLanguage | null;
  category_id?: string | null;
}

/** Source: src/package_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmPackageQuery extends QueryParams {
  package_id: string;
}

/** Source: src/package_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmPackageResponse extends DrmMediaPackage {
  dash_url: string | null;
  hls_url: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmPartInput {
  category_id?: string | null;
  title: string;
  state: DrmContentState;
  media_type?: string | null;
  duration_seconds?: number;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  textual?: DrmDynamicJson;
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  rewards?: DrmDynamicJson;
  textual_hint?: string | null;
  game_id?: string | null;
  primary_media_id?: string | null;
  hint_media_id?: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmPlayback {
  media_id: string;
  media_type: DrmMediaType;
  mime_type: string;
  url: string;
  expires_in_seconds: number;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmRegisterMediaInput {
  id?: string | null;
  object_key: string;
  original_filename: string;
  name?: string | null;
  description?: string | null;
  mime_type: string;
  size_bytes: number;
  checksum_sha256?: string | null;
  folder_id?: string | null;
}

/** Source: src/drm_queue.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmRetryFailedResponse {
  count: number;
}

/** Source: src/operations_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmSettingsInput {
  package_concurrency: number;
  transcription_enabled?: boolean;
  transcription_model_ref?: string | null;
  summary_model_ref?: string | null;
}

/** Source: src/operations_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmSettingsResponse {
  package_concurrency: number;
  transcription_enabled: boolean;
  transcription_model_ref: string | null;
  summary_model_ref: string | null;
}

/** Source: src/composition_analysis.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmStartAnalysisInput {
  language?: string | null;
  force?: boolean;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmTagInput {
  name: string;
}

/** Source: src/operations_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmTranscriptionModel {
  model_ref: string;
  model: string;
  provider_label: string;
  source: string;
  capabilities: (string)[];
}

/** Source: src/knowledge_sync.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmUpdateKnowledgeSync {
  enabled: boolean;
  knowledge_base_id?: string | null;
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmUploadSessionInput {
  media_id?: string | null;
  filename: string;
  name?: string | null;
  description?: string | null;
  mime_type: string;
  folder_id?: string | null;
  total_bytes: number;
  part_size?: number | null;
}

/** Source: src/upload_handlers.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmUploadSessionResponse extends DrmUploadSession {
  parts: (DrmUploadPart)[];
}

/** Source: src/models.rs. Wire fields retain snake_case; nullable output members are always present. */
export interface DrmWorkflowInput {
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  nodes: DrmDynamicJson[];
  /** Arbitrary JSON explicitly accepted/persisted by this backend field. */
  edges: DrmDynamicJson[];
}

/** All four flags are present in stored queue/package configurations. */
export interface DrmResolvedConfig { download: boolean; transcode: boolean; package: boolean; allow_video_only_on_audio_error: boolean; }
export interface DrmStatus { status: "ok"; service: "infera-drm"; }
export interface DrmMediaUpload { file: Blob; name?: string; description?: string; folder_id?: string | null; tag_ids?: string[]; filename?: string; }
export type DrmUploadPartBody = Blob | ArrayBuffer | ArrayBufferView;
export type DrmPackageFile = ArrayBuffer;
export interface DrmClearKey { kty: "oct"; kid: string; k: string; }
export interface DrmClearKeyLicense { keys: DrmClearKey[]; type: "temporary"; }
export interface DrmLegacyEnqueue { job_id: string; status: string; }
export interface DrmLegacyKey { content_type: "content"; policy: "default"; status: string; }
export interface DrmLegacyStatus { key: DrmLegacyKey; status: string; job_id: string; progress: number; }
export interface DrmDashboardMedia { total: number; bytes: number; }
export interface DrmDashboardContent { libraries: number; categories: number; items: number; compositions: number; }
export interface DrmDashboardPackages { ready: number; active: number; failed: number; }
export interface DrmDashboard { media: DrmDashboardMedia; content: DrmDashboardContent; packages: DrmDashboardPackages; recent_jobs: DrmJobResponse[]; }
export interface DrmHealthWorker { mode: "remote" | "service"; concurrency: number; }
export interface DrmHealthTools { ffmpeg: string | null; shaka_packager: string | null; }
export interface DrmHealthStorage { endpoint: string | null; bucket: string; public_url: string | null; region: string; path_style: boolean; credentials_configured: boolean; }
export interface DrmHealth { service: "ok"; database: boolean; object_storage: boolean; worker: DrmHealthWorker; tools: DrmHealthTools; storage: DrmHealthStorage; }
export interface DrmError { error: string; }
