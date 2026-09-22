import { ServiceApi, type RequestOptions } from '@faiber/sdk-core';
import type { WorkItem, CreateWorkItemInput, ChecklistItem, Reminder, ReminderInput, TaskResponse } from './types.js';
/** A note category belongs to one Task project and inherits its authorization. */
export interface NoteFolder {id:string;workspace_id:string;project_id:string;parent_id:string|null;name:string;version:number;created_by:string;created_at:string;updated_at:string}
/** Calendar preferences are stored for the authenticated user; weekdays use Sunday=0. */
export interface PlanningPreferences {timezone:string;calendar:'gregorian'|'persian';week_start:number;working_days:number[];work_start:string;work_end:string;default_duration_minutes:number}
export interface PlanningPreferencesResult {preferences:PlanningPreferences|null;version:number}
export interface WorkspaceQuery {project_id?:string|null;owner_id?:string|null;item_type?:'task'|'note'|null;q?:string|null;from?:string|null;until?:string|null;completed_by_me?:boolean;active_only?:boolean;cursor?:string|null;limit?:number}
export interface WorkspaceItem extends WorkItem {folder_id:string|null;planned_start_at:string|null;planned_end_at:string|null;checklist:ChecklistItem[];reminder:Reminder|null}
export interface WorkspaceQueryResult {items:WorkspaceItem[];total:number;next_cursor:string|null;retrieved_at:string;completion_source:string;history_note:string}
export interface WorkspacePatch {title?:string;description?:string;priority?:'low'|'medium'|'high'|'urgent';owner_id?:string;due_at?:string|null}
export type WorkspaceOperation =
 | {kind:'create';item:CreateWorkItemInput;checklist:ChecklistItem[]}
 | {kind:'update';id:string;expected_version:number;patch:WorkspacePatch}
 | {kind:'transition';id:string;expected_version:number;status:string}
 | {kind:'delete';id:string;expected_version:number}
 | {kind:'checklist';id:string;expected_version:number;items:ChecklistItem[]}
 | {kind:'reminder';id:string;expected_version:number;reminder:ReminderInput|null}
 | {kind:'plan';id:string;expected_version:number;start:string|null;end:string|null}
 | {kind:'move_note';id:string;expected_version:number;folder_id:string|null}
 | {kind:'folder';id:string;project_id:string;expected_version:number;name:string;parent_id:string|null}
 | {kind:'delete_folder';id:string;expected_version:number;destination_id:string|null};
export interface ReviewProposalInput {request_id?:string;conversation_id:string;project_id:string|null;operations:WorkspaceOperation[]}
export interface WorkspaceSnapshot {task:WorkspaceItem;checklist:ChecklistItem[];reminder:Reminder|null}
export interface ReviewedChange {kind:WorkspaceOperation['kind'];before:WorkspaceSnapshot|NoteFolder|null;after:WorkspaceSnapshot|NoteFolder|null;moved_notes?:WorkspaceItem[];destination_id?:string|null}
export interface ReviewProposal extends ReviewProposalInput {id:string;workspace_id:string;user_id:string;revision:number;preview:ReviewedChange[];status:'pending'|'applied';result:ReviewedChange[]|null;created_at:string;updated_at:string}
const version = (v:number,o?:RequestOptions):RequestOptions => ({...o,headers:{...o?.headers,'If-Match':String(v)}});
/** Authorized workspace operations. All methods preserve Axios responses and cancellation. */
export class TaskWorkspaceOperations extends ServiceApi {
 /** Rebuild a pending proposal against current versions; returns a new revision requiring review. Requires current domain access; never applies changes. */
 refresh(id:string,revision:number,options?:RequestOptions){return this.client.post<TaskResponse<ReviewProposal>>(`/api/v1/review-proposals/${encodeURIComponent(id)}/refresh`,undefined,version(revision,options))}

 /** Query exact totals and cursor pages with Task SQL authorization; date intervals are [from,until). Requires task:access:use and work_item.read. */
 query(data:WorkspaceQuery,options?:RequestOptions<WorkspaceQuery>){return this.client.post<TaskResponse<WorkspaceQueryResult>,WorkspaceQuery>('/api/v1/assistant/query',data,options)}
 /** Read the current user's planning settings; preferences is null until configured. */
 preferences(options?:RequestOptions){return this.client.get<TaskResponse<PlanningPreferencesResult>>('/api/v1/planning-preferences',undefined,options)}
 /** Save explicit planning preferences with version 0 initially; 409 means concurrent modification. */
 savePreferences(data:PlanningPreferences,expectedVersion:number,options?:RequestOptions){return this.client.put<TaskResponse<PlanningPreferencesResult>,PlanningPreferences>('/api/v1/planning-preferences',data,version(expectedVersion,options))}
 /** Read space-owned category folders; inaccessible projects return 403/404. */
 folders(projectId:string,options?:RequestOptions){return this.client.get<TaskResponse<NoteFolder[]>>('/api/v1/note-folders',{project_id:projectId},options)}
 /** Validate a batch in a rolled-back transaction without storing a proposal or applying changes. */
 validate(data:ReviewProposalInput,options?:RequestOptions<ReviewProposalInput>){return this.client.post<TaskResponse<{preview:ReviewedChange[]}>,ReviewProposalInput>('/api/v1/review-proposals/validate',data,options)}
 /** Persist a validated before/after preview. Domain permissions apply to every operation. */
 propose(data:ReviewProposalInput,options?:RequestOptions<ReviewProposalInput>){return this.client.post<TaskResponse<ReviewProposal>,ReviewProposalInput>('/api/v1/review-proposals',data,options)}
 /** Read only the authenticated owner's proposal and recheck record access. */
 proposal(id:string,options?:RequestOptions){return this.client.get<TaskResponse<ReviewProposal>>(`/api/v1/review-proposals/${encodeURIComponent(id)}`,undefined,options)}
 /** Replace the editable batch with a newly validated revision; conversation and space cannot change. */
 revise(id:string,data:ReviewProposalInput,revision:number,options?:RequestOptions){return this.client.put<TaskResponse<ReviewProposal>,ReviewProposalInput>(`/api/v1/review-proposals/${encodeURIComponent(id)}`,data,version(revision,options))}
 /** Apply a reviewed revision atomically. Retries of the same revision are idempotent; conflicts apply nothing. */
 apply(id:string,revision:number,options?:RequestOptions){return this.client.post<TaskResponse<ReviewProposal>>(`/api/v1/review-proposals/${encodeURIComponent(id)}/apply`,undefined,version(revision,options))}
}

export interface NoteFoldersQuery { project_id: string; }
export interface WorkspaceQueryResponse extends TaskResponse<WorkspaceQueryResult> {}
export interface PlanningPreferencesResponse extends TaskResponse<PlanningPreferencesResult> {}
export interface NoteFoldersResponse extends TaskResponse<NoteFolder[]> {}
export interface ReviewProposalResponse extends TaskResponse<ReviewProposal> {}
export interface ReviewPreviewResult { preview: ReviewedChange[]; }
export interface ReviewPreviewResponse extends TaskResponse<ReviewPreviewResult> {}
