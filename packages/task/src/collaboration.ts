import { ServiceApi, type Identifier, type RequestOptions } from '@faiber/sdk-core';
import type { TaskResponse } from './types.js';

export type StageCategory = 'backlog' | 'unstarted' | 'started' | 'completed' | 'cancelled';
export interface BoardStage { id: string; key: string; name: Record<string, string>; category: StageCategory; position: number; wip_limit: number | null }
export interface BoardWorkflow { id: string; project_id: string; version: number; stages: BoardStage[] }
export interface SaveBoardWorkflow { version: number; stages: BoardStage[]; destinations?: Record<string, string> }
export type MemoryBucket = 'storage_bytes' | 'imports' | 'research' | 'audio_seconds';
export interface MemoryAllowance { bucket: MemoryBucket; limit: number; used: number; reserved: number; remaining: number }
export interface MemoryUsage { owner_id: string; plan: string; period_start: string; period_end: string; allowances: MemoryAllowance[] }
export type AttachmentPurpose = 'comment' | 'cover' | 'inline' | 'note' | 'import';
export type AttachmentStatus = 'pending' | 'quarantined' | 'clean' | 'rejected' | 'deleted';
export interface TaskAttachment { id: string; work_item_id: string; filename: string; content_type: string; size_bytes: number; status: AttachmentStatus; purpose: AttachmentPurpose; version: number }
export interface CreateAttachment { request_id: string; filename: string; content_type: string; size_bytes: number; checksum_sha256: string; purpose: AttachmentPurpose }
export interface UploadAttachment { file: Blob; filename: string }
export interface DeletedAttachment { id: string; deleted: boolean }
export interface NoteMediaItem { attachment: TaskAttachment; role: 'cover' | 'inline' | 'attachment' | 'source'; description: string; focus_x: number; focus_y: number }
export interface NoteMedia { note_id: string; version: number; items: NoteMediaItem[] }
export interface SetNoteCover { version: number; attachment_id: string | null; description?: string; focus_x?: number; focus_y?: number }
export interface AddNoteMedia { version: number; attachment_id: string; role: 'inline' | 'attachment' | 'source'; description?: string }
export interface CollaborationConfig { media: boolean; boards: boolean; knowledge: boolean; imports: boolean; web_imports: boolean; max_web_bytes: number; media_imports:boolean; max_import_image_bytes:number; max_import_audio_bytes:number; max_import_audio_seconds:number; research: boolean; voice:boolean; max_file_bytes: number; max_audio_bytes: number }
export interface PlanMemoryLimit {plan:'none'|'trial'|'personal'|'planner'|'business'|'legend';storage_bytes:number;imports:number;research:number;audio_seconds:number;version:number}
export interface PlanMemoryLimits {items:PlanMemoryLimit[]}
export interface RemoveNoteMedia { version:number }
export type AttachmentDownload = ArrayBuffer | Uint8Array;

export interface NoteImportJob { project_id:string; id:string; note_id:string; attachment_id:string|null; source_url:string|null; index_only:boolean; media_kind:'document'|'image'|'audio';language:'auto'|'fa'|'en'; note_version:number; version:number; status:'queued'|'processing'|'preview'|'applied'|'failed'|'cancelled'; actor_id:string;attempts:number;next_attempt:string;created_at:string;updated_at:string;error_code:string|null; result:DocumentExtraction|null }
export interface DocumentExtraction { provenance?:{url:string;original_url:string;title:string;retrieved_at:string;content_type:string}; text:string; tables?:ExtractedTable[]; pages?:number; duration_ms?:number; warnings?:string[]; converter_version?:string }
export interface ExtractedTable { title:string; rows:string[][] }
export interface StartSourceImport { id:string; url:string; version:number }
export interface StartNoteImport { language?:'auto'|'fa'|'en'; id:string; attachment_id:string; version:number }
export interface ControlNoteImport { version:number; action:'cancel'|'retry'|'refresh' }
export interface ApplyNoteImport { version:number; mode:'append'|'replace'; summary?:string|null }
export interface NoteIndexing { enabled:boolean; note_id:string; version:number; job:{status:'queued'|'processing'|'indexed'|'failed';requested_version:number;indexed_version:number|null;last_error:string|null}|null }
export interface NoteCitation { kind:'task_note'; note_id:string; project_id:string; version:number; passage?:number; path:string; title?:string }
export interface NoteKnowledgeQuery { project_id:string; additional_project_ids?:string[]; query:string; note_id?:string; locale?:string }
export interface NoteProvenance {authority:'task';note_version?:number;indexing?:boolean;untrusted_evidence:true}
export interface NoteKnowledgeSource { id:string; title:string|Record<string,string>; content:string|Record<string,string>; citation:NoteCitation; provenance:NoteProvenance }
export interface NoteKnowledgeResult { sources:NoteKnowledgeSource[]; citations:NoteCitation[]; scope:string[]; indexing_pending:boolean }

/** Collaborative Task contracts; every method inherits the authenticated Faiber transport.
 * All endpoints require task:access:use and current local resource permissions.
 */
export class TaskCollaborationOperations extends ServiceApi {
  /** Current user's owner-pooled allowances; requires task:access:use. */
  ownUsage(options?:RequestOptions){return this.client.get<TaskResponse<MemoryUsage>>('/api/v1/memory-usage',undefined,options);}
  /** Configured limits for all six tiers. Does not change prices or AI/image allowances. */
  memoryLimits(options?:RequestOptions){return this.client.get<TaskResponse<PlanMemoryLimits>>('/api/v1/plans/memory-limits',undefined,options);}
  /** Administrator-only, atomic versioned update. Supply all six tiers; stale versions return 409. */
  configureMemoryLimits(data:PlanMemoryLimits,options?:RequestOptions<PlanMemoryLimits>){return this.client.put<TaskResponse<PlanMemoryLimits>,PlanMemoryLimits>('/api/v1/plans/admin/memory-limits',data,options);}
  /** Read enabled collaboration features and deployment upload ceilings. Requires task:access:use. */
  config(options?: RequestOptions) {
    return this.client.get<TaskResponse<CollaborationConfig>>('/api/v1/collaboration/config', undefined, options);
  }
  /** Read stable stage IDs and workflow version. Requires project.read; inaccessible projects return 404. */
  workflow(project: Identifier, options?: RequestOptions) {
    return this.client.get<TaskResponse<BoardWorkflow>>(`/api/v1/projects/${encodeURIComponent(project)}/board-workflow`, undefined, options);
  }
  /** Replace shared stage order/names; managers only. Supply destinations for occupied removed stages.
   * Existing IDs, keys and categories remain stable. Returns 409 on a stale workflow or missing destination.
   */
  saveWorkflow(project: Identifier, data: SaveBoardWorkflow, options?: RequestOptions<SaveBoardWorkflow>) {
    return this.client.put<TaskResponse<BoardWorkflow>, SaveBoardWorkflow>(`/api/v1/projects/${encodeURIComponent(project)}/board-workflow`, data, options);
  }
  /** Read owner-pooled remaining limits for an accessible project, including reserved usage. */
  usage(project: Identifier, options?: RequestOptions) {
    return this.client.get<TaskResponse<MemoryUsage>>(`/api/v1/projects/${encodeURIComponent(project)}/memory-usage`, undefined, options);
  }
  /** Reserve a private upload. Use a stable request UUID on retries. Requires attachment.create
   * plus comment.create or note update access; returns 409 on exhausted storage or conflicting retries.
   */
  createAttachment(item: Identifier, data: CreateAttachment, options?: RequestOptions<CreateAttachment>) {
    return this.client.post<TaskResponse<TaskAttachment>, CreateAttachment>(`/api/v1/work-items/${encodeURIComponent(item)}/attachments`, data, options);
  }
  /** Upload the reserved bytes using FormData. Signal and onUploadProgress are supported.
   * A successful upload remains quarantined until scanning finishes; size/type/hash mismatches return 400.
   */
  uploadAttachment(id: Identifier, data: UploadAttachment, options?: RequestOptions<FormData>) {
    const form = new FormData(); form.append('file', data.file, data.filename);
    return this.client.put<TaskResponse<TaskAttachment>, FormData>(`/api/v1/attachments/${encodeURIComponent(id)}/content`, form, options);
  }
  /** Poll scan status. Unbound files are visible only to their uploader; requires current task read access. */
  attachment(id: Identifier, options?: RequestOptions) {
    return this.client.get<TaskResponse<TaskAttachment>>(`/api/v1/attachments/${encodeURIComponent(id)}`, undefined, options);
  }
  /** Download clean bytes after a fresh permission check. Returns binary data in browser/Node Axios adapters;
   * quarantined files return 409. Preserve the full response to retain Content-Disposition and request IDs.
   */
  downloadAttachment(id: Identifier, options?: RequestOptions) {
    return this.client.request<AttachmentDownload>({ ...options, method: 'GET', url: `/api/v1/attachments/${encodeURIComponent(id)}/download`, responseType: 'arraybuffer' });
  }
  /** Delete an unbound upload and release retained storage. Requires ownership/delete_own or attachment.manage.
   * Bound files return 409; remove their note/comment reference first.
   */
  deleteAttachment(id: Identifier, options?: RequestOptions) {
    return this.client.delete<TaskResponse<DeletedAttachment>>(`/api/v1/attachments/${encodeURIComponent(id)}`, options);
  }
  /** Read authorized note media and the note version used by cover updates. */
  noteMedia(id: Identifier, options?: RequestOptions) {
    return this.client.get<TaskResponse<NoteMedia>>(`/api/v1/notes/${encodeURIComponent(id)}/media`, undefined, options);
  }
  /** Bind a clean upload to a note as an inline image, attachment or original source.
   * Requires note edit access and the current note version. Retrying identical bindings is idempotent.
   */
  attachNoteMedia(id: Identifier, data: AddNoteMedia, options?: RequestOptions<AddNoteMedia>) {
    return this.client.post<TaskResponse<NoteMedia>, AddNoteMedia>(`/api/v1/notes/${encodeURIComponent(id)}/media`, data, options);
  }
  /** Remove a retained file binding without deleting imported text. Requires note edit access and current version.
   * Storage remains charged until private-object cleanup completes. Cover removal uses setNoteCover instead.
   */
  removeNoteMedia(id:Identifier,attachment:Identifier,data:RemoveNoteMedia,options?:RequestOptions<RemoveNoteMedia>){
    return this.client.request<TaskResponse<NoteMedia>,RemoveNoteMedia>({...options,method:'DELETE',url:`/api/v1/notes/${encodeURIComponent(id)}/media/${encodeURIComponent(attachment)}`,data});
  }
  /** Set, reposition or remove a clean note cover; requires note edit access.
   * Set attachment_id to null to remove. Focus coordinates are 0..1. Stale note versions return 409.
   */
  setNoteCover(id: Identifier, data: SetNoteCover, options?: RequestOptions<SetNoteCover>) {
    return this.client.put<TaskResponse<NoteMedia>, SetNoteCover>(`/api/v1/notes/${encodeURIComponent(id)}/cover`, data, options);
  }
  /** Indexing state for the current authoritative note version; requires note read access. */
  noteIndexing(id:Identifier,options?:RequestOptions){return this.client.get<TaskResponse<NoteIndexing>>(`/api/v1/notes/${encodeURIComponent(id)}/indexing`,undefined,options);}
  /** Retry a failed projection; requires note edit access. */
  retryNoteIndexing(id:Identifier,options?:RequestOptions){return this.client.post<TaskResponse<NoteIndexing>>(`/api/v1/notes/${encodeURIComponent(id)}/indexing`,undefined,options);}
  /** Search at most ten explicitly selected accessible spaces. Every source is reauthorized by Task. */
  searchNotes(data:NoteKnowledgeQuery,options?:RequestOptions<NoteKnowledgeQuery>){return this.client.post<TaskResponse<NoteKnowledgeResult>,NoteKnowledgeQuery>('/api/v1/notes/knowledge/search',data,options);}
  /** Queue a public-page import for an editable note. Reserves an import and bounded retained storage; unsafe URLs return 400. */
  startSourceImport(id:Identifier,data:StartSourceImport,options?:RequestOptions<StartSourceImport>){return this.client.post<TaskResponse<NoteImportJob>,StartSourceImport>(`/api/v1/notes/${encodeURIComponent(id)}/source-imports`,data,options);}

  /** Queue extraction of a clean original uploaded by the caller. Requires note edit access. Stable IDs deduplicate retries; quota exhaustion returns 409. */
  startNoteImport(id:Identifier,data:StartNoteImport,options?:RequestOptions<StartNoteImport>){return this.client.post<TaskResponse<NoteImportJob>,StartNoteImport>(`/api/v1/notes/${encodeURIComponent(id)}/imports`,data,options);}
  /** Poll an import owned by the current user; revoked note edit access denies access. */
  noteImport(id:Identifier,options?:RequestOptions){return this.client.get<TaskResponse<NoteImportJob>>(`/api/v1/note-imports/${encodeURIComponent(id)}`,undefined,options);}
  /** Cancel, retry or refresh a preview's target version. Stale job versions return 409. */
  controlNoteImport(id:Identifier,data:ControlNoteImport,options?:RequestOptions<ControlNoteImport>){return this.client.post<TaskResponse<NoteImportJob>,ControlNoteImport>(`/api/v1/note-imports/${encodeURIComponent(id)}`,data,options);}
  /** Explicitly approve a preview; stale note versions return 409. Original binding and note changes are atomic. */
  applyNoteImport(id:Identifier,data:ApplyNoteImport,options?:RequestOptions<ApplyNoteImport>){return this.client.post<TaskResponse<NoteImportJob>,ApplyNoteImport>(`/api/v1/note-imports/${encodeURIComponent(id)}/apply`,data,options);}

}
