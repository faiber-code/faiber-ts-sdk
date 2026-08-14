import type {ApiEnvelope, CursorQuery, JsonObject, QueryParams} from '@faiber/sdk-core'
export interface WorkspaceSummary{ id:string;sandbox_id:string;name:string;version:number }
export type ProjectMode='software'|'marketing'
export interface Project{ id:string;workspace_id:string;team_id:string|null;key:string;name:string;description:string;mode:ProjectMode;status:string;settings:JsonObject;version:number;created_at:string;updated_at:string }
export interface WorkItem{ id:string;workspace_id:string;project_id:string;parent_id:string|null;sequence:number;key:string;item_type:string;title:string;description:string;status:string;priority:string;rank:string;owner_id:string;reporter_id:string;estimate:number|null;story_points:number|null;start_at:string|null;due_at:string|null;completed_at:string|null;sprint_id:string|null;release_id:string|null;campaign_id:string|null;custom_fields:JsonObject;version:number;created_at:string;updated_at:string }
export interface CreateProjectInput{team_id?:string|null;key:string;name:string;description?:string;mode:ProjectMode;settings?:JsonObject}
export interface UpdateProjectInput{ name?:string;description?:string;status?:string;settings?:JsonObject }
export interface ProjectQuery extends CursorQuery{mode?:ProjectMode;status?:string;q?:string}
export interface WorkItemQuery extends CursorQuery{project_id?:string;sprint_id?:string;owner_id?:string;status?:string;q?:string;sort?:string}
export interface CreateWorkItemInput{project_id:string;parent_id?:string|null;item_type?:string;title:string;description?:string;priority?:string;owner_id:string;estimate?:number|null;story_points?:number|null;start_at?:string|null;due_at?:string|null;sprint_id?:string|null;release_id?:string|null;campaign_id?:string|null;custom_fields?:JsonObject;external_source?:string|null;external_id?:string|null}
export interface UpdateWorkItemInput{title?:string;description?:string;priority?:string;owner_id?:string;estimate?:number|null;story_points?:number|null;start_at?:string|null;due_at?:string|null;sprint_id?:string|null;release_id?:string|null;campaign_id?:string|null;custom_fields?:JsonObject}
export interface TransitionWorkItemInput{status:string;rank?:string}
export interface CreateSprintInput{team_id:string;project_id?:string|null;name:string;goal?:string;starts_at?:string|null;ends_at?:string|null;capacity?:number|null}
export interface Sprint{ id:string;team_id:string;project_id:string|null;name:string;goal:string;status:string;starts_at:string|null;ends_at:string|null;capacity:number|null;version:number }
export interface CreateCommentInput{body:string;mentions?:string[]}
export interface Comment{ id:string;work_item_id:string;author_id:string;body:string;mentions:string[];version:number;created_at:string }
export interface GrantProjectAccessInput{user_id:string;profile_key:string;expires_at?:string|null}
export interface GrantProjectAccessResult{project_id:string;user_id:string;profile:string}
export interface AgentProposalInput{project_id:string;work_item_id?:string|null;operation:string;payload:JsonObject}
export interface AgentProposal{ id:string;status:'pending';operation:string;payload:JsonObject }
export interface ApprovedAgentProposal{ id:string;status:'approved' }
export interface EffectiveAccess{user_id:string;workspace_id:string;team_id:string|null;project_id:string|null;work_item_id:string|null;capabilities:string[]}
export interface ReportSummary{total:number;completed:number;overdue:number;in_progress:number;completion_rate:number}
export interface TaskResponse<T> extends ApiEnvelope<T>{status:string}
export interface TaskListResponse<T> extends TaskResponse<T[]>{meta?:{next_cursor?:string|null;previous_cursor?:string|null;limit:number;total?:number}}
export interface EffectiveAccessQuery extends QueryParams{team_id?:string;project_id?:string;work_item_id?:string}
export type TaskEventStreamBody=ReadableStream<Uint8Array>|AsyncIterable<Uint8Array|string>|string
