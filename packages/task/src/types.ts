import type {ApiEnvelope, CursorQuery, JsonObject, JsonValue, QueryParams} from '@faiber/sdk-core'
export interface WorkspaceSummary{ id:string;sandbox_id:string;name:string;version:number }
export type ProjectMode='software'|'marketing'|'general'
export type ProductPlanId='none'|'trial'|'personal'|'planner'|'business'|'legend';
export interface AdminUserPlansQuery extends QueryParams {user_ids:string}
export interface AdminUserPlan {user_id:string;plan:ProductPlanId;status:'inactive'|'trial'|'paid';expires_at:string|null}
export interface AdminUserPlansData {items:AdminUserPlan[]}
export interface IncomeReportQuery extends QueryParams {from:string;to:string;plan?:'personal'|'planner'|'business'|'legend'|'';page?:number}
export interface IncomeReportPoint {day:string;income_toman:number;purchases:number}
export interface PlanPurchase {id:string;user_id:string;plan:ProductPlanId;amount_toman:number;purchased_at:string;kind:'purchase'|'renew'|'upgrade'}
export interface IncomeReportData {total:number;income_toman:number;page:number;per_page:number;timezone:'Asia/Tehran';generated_at:string;points:IncomeReportPoint[];items:PlanPurchase[]}
/** settings is the backend serde_json::Value extension document; plan_access has a fixed schema. */
export interface Project{ created_by:string;plan_access?:ProjectPlanAccess;id:string;workspace_id:string;team_id:string|null;key:string;name:string;description:string;mode:ProjectMode;status:string;settings:JsonValue;version:number;created_at:string;updated_at:string }
export type ProjectResponse = TaskResponse<Project>
/** custom_fields is the backend schema-extensible JSON document (including note_data and timer extensions). */
export interface WorkItem{ team_id:string|null;progress_started_at:string|null;folder_id:string|null;planned_start_at:string|null;planned_end_at:string|null;id:string;workspace_id:string;project_id:string;parent_id:string|null;sequence:number;key:string;item_type:string;title:string;description:string;status:string;stage_id:string|null;status_category:'backlog'|'unstarted'|'started'|'completed'|'cancelled';priority:string;rank:string;owner_id:string;reporter_id:string;estimate:number|null;story_points:number|null;start_at:string|null;due_at:string|null;completed_at:string|null;sprint_id:string|null;release_id:string|null;campaign_id:string|null;custom_fields:JsonValue;version:number;created_at:string;updated_at:string }
export interface CreateProjectInput{team_id?:string|null;key:string;name:string;description?:string;mode:ProjectMode;settings?:JsonValue}
export interface CreateSharedProjectInput{name:string;description?:string}
export interface UpdateProjectInput{ name?:string|null;description?:string|null;status?:string|null;settings?:JsonValue }
export interface ProjectQuery extends CursorQuery{mode?:ProjectMode;status?:string;q?:string}
export interface WorkItemQuery extends CursorQuery{team_id?:string;project_id?:string;sprint_id?:string;owner_id?:string;status?:string;q?:string;sort?:string}
export interface CreateWorkItemInput{
  /** Initial steps are saved atomically with the task and reminder. */
  team_id?:string|null;checklist?: ChecklistItem[];reminder?:ReminderInput|null;project_id:string;parent_id?:string|null;item_type?:string;title:string;description?:string;priority?:string;owner_id:string;estimate?:number|null;story_points?:number|null;start_at?:string|null;due_at?:string|null;sprint_id?:string|null;release_id?:string|null;campaign_id?:string|null;custom_fields?:JsonValue;external_source?:string|null;external_id?:string|null}
export interface UpdateWorkItemInput{team_id?:string|null;title?:string|null;description?:string|null;priority?:string|null;owner_id?:string|null;estimate?:number|null;story_points?:number|null;start_at?:string|null;due_at?:string|null;sprint_id?:string|null;release_id?:string|null;campaign_id?:string|null;custom_fields?:JsonValue}
export interface TransitionWorkItemInput{status:string;rank?:string}
export interface CreateSprintInput{team_id:string;project_id?:string|null;name:string;goal?:string;starts_at?:string|null;ends_at?:string|null;capacity?:number|null}
export interface Sprint{ id:string;team_id:string;project_id:string|null;name:string;goal:string;status:string;starts_at:string|null;ends_at:string|null;capacity:number|null;version:number }
export interface CreateCommentInput{body?:string;mentions?:string[];attachment_ids?:string[];request_id?:string}
export interface Comment{ id:string;work_item_id:string;author_id:string;body:string;mentions:string[];version:number;created_at:string;attachments:import('./collaboration.js').TaskAttachment[] }
export interface GrantProjectAccessInput{user_id:string;profile_key:string;expires_at?:string|null}
export interface GrantProjectAccessResult{project_id:string;user_id:string;profile:string}
/** payload is an opaque serde_json::Value; this endpoint stores a proposal without executing it. */
export interface AgentProposalInput{project_id:string;work_item_id?:string|null;operation:string;payload:JsonValue}
export interface AgentProposal{ id:string;status:'pending';operation:string;payload:JsonValue }
export interface ApprovedAgentProposal{ id:string;status:'approved' }
export interface EffectiveAccess{user_id:string;workspace_id:string;team_id:string|null;project_id:string|null;work_item_id:string|null;capabilities:string[]}
export interface ReportSummary{total:number;completed:number;overdue:number;in_progress:number;completion_rate:number}
export interface TaskResponse<T> extends ApiEnvelope<T>{status:string}
export interface TaskListResponse<T> extends TaskResponse<T[]>{meta?:TaskPaginationMeta}
export interface EffectiveAccessQuery extends QueryParams{team_id?:string;project_id?:string;work_item_id?:string}
export type TaskEventStreamBody=ReadableStream<Uint8Array>|AsyncIterable<Uint8Array|string>|string

export interface ChecklistItem { id:string; title:string; done:boolean }
export interface ChecklistInput { items:ChecklistItem[] }
export interface ChecklistResult { id:string; version:number; items:ChecklistItem[] }
export interface ChecklistSnapshot extends ChecklistResult { task:WorkItem }
export interface ProjectMember { id:string; role:string; version:number }
export interface RemovalResult { removed:boolean }
export type ReminderTrigger = {kind:'relative';minutes_before:number}|{kind:'same_day';time:string};
export interface ReminderInput { anchor_at:string; timezone:string; recurrence?:'once'|'daily'|'monthly';triggers?:ReminderTrigger[] }
export interface Reminder extends ReminderInput { recurrence:'once'|'daily'|'monthly';triggers:ReminderTrigger[]; work_item_id:string; workspace_id:string; user_id:string; next_at:string|null; last_queued_at:string|null; version:number }

/** Present only when product-plan enforcement is enabled. */
export interface ProjectPlanAccess { allowed:boolean }

/** PageMeta values are nullable when the repository does not supply cursor/total counts. */
export interface TaskPaginationMeta {next_cursor?:string|null;previous_cursor?:string|null;limit:number;total?:number|null}
export interface TaskPageResponse<T> extends TaskListResponse<T> {meta:TaskPaginationMeta}
