import type { JsonObject, JsonValue, QueryParams } from "@faiber/sdk-core";
/** Extensible backend JSON: custom metadata is intentionally not constrained by a schema in Rust. */
export type CrmDynamicJson = JsonValue;
export type CrmTaskPriority = "low" | "normal" | "high" | "urgent";
export type CrmTaskStatus = "open" | "in_progress" | "completed" | "cancelled";
export type CrmActivityCreateType = "note" | "call" | "email" | "meeting" | "demo" | "message";
export type CrmContactLifecycle = "active" | "inactive" | "do_not_contact";
export type CrmLeadStatus = "new" | "working" | "qualified" | "disqualified" | "converted";
export type CrmCampaignStatus = "draft" | "active" | "paused" | "completed" | "archived";
export type CrmAiMode = "off" | "advisory" | "approval_required" | "bounded_auto";
export interface CrmTaskCreateInput extends JsonObject {
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "profile_id"?: string | null;
  "assignee_user_id"?: string | null;
  "title": string;
  "description"?: string | null;
  "task_type"?: string | null;
  "priority"?: CrmTaskPriority | null;
  "due_at"?: string | null;
}

export interface CrmTaskStatusInput extends JsonObject {
  "status": CrmTaskStatus;
  "version": number;
}

export interface CrmActivityCreateInput extends JsonObject {
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "activity_type": CrmActivityCreateType;
  "direction"?: string | null;
  "subject"?: string | null;
  "body"?: string | null;
  "outcome"?: string | null;
  "occurred_at"?: string | null;
  "duration_seconds"?: number | null;
  "metadata"?: CrmDynamicJson;
}

export interface CrmContactUpdateInput extends JsonObject {
  "version": number;
  "first_name"?: string | null;
  "last_name"?: string | null;
  "job_title"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "preferred_channel"?: string | null;
  "lifecycle_status"?: CrmContactLifecycle | null;
}

export interface CrmLeadUpdateInput extends JsonObject {
  "version": number;
  "title"?: string | null;
  "first_name"?: string | null;
  "last_name"?: string | null;
  "company_name"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "segment"?: string | null;
  "offer"?: string | null;
  "status"?: CrmLeadStatus | null;
  "score"?: number | null;
  "estimated_value"?: number | null;
  "currency"?: string | null;
  "next_activity_at"?: string | null;
  "profile_id"?: string | null;
}

export interface CrmCampaignCreateInput extends JsonObject {
  "source_id"?: string | null;
  "name": string;
  "slug": string;
  "status"?: CrmCampaignStatus | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "budget"?: number | null;
  "actual_cost"?: number | null;
  "currency"?: string | null;
  "metadata"?: CrmDynamicJson;
}

export interface CrmWorkspaceUpdateInput extends JsonObject {
  "name"?: string | null;
  "locale"?: string | null;
  "timezone"?: string | null;
  "currency"?: string | null;
  "ai_mode"?: CrmAiMode | null;
  "agentic_enabled"?: boolean | null;
  "version": number;
}
export interface CrmActivityReminderCreateInput extends JsonObject {
  activity: CrmActivityCreateInput; reminder: CrmTaskCreateInput;
}
/** Plain scalar cursor query; limit defaults 50, clamped 1..100; a full page supplies a nullable UUID next_cursor. */
export interface CrmCursorQuery extends QueryParams { cursor?: string | null; limit?: number | null }
export interface CrmSearchQuery extends CrmCursorQuery { q?: string | null }
export interface CrmDealListQuery extends CrmSearchQuery {
 pipeline_id?: string | null; stage_id?: string | null; status?: string | null; team_id?: string | null; owner_user_id?: string | null;
}
/** statuses is one comma-separated string. UUID cursor comparison remains id > cursor even for custom ordering. */
export interface CrmLeadListQuery extends CrmDealListQuery {
 statuses?: string | null; profile_id?: string | null; active_from?: string | null; active_to?: string | null;
 sort?: "task_priority" | "created_at" | "created_at_desc" | null;
}
export interface CrmTaskListQuery extends CrmCursorQuery {
 status?: string | null; profile_id?: string | null; active_from?: string | null; active_to?: string | null;
}
export interface CrmJobListQuery extends CrmCursorQuery { status?: string | null }
/** Comma-separated entity columns, with - prefix for descending; unrecognized columns are ignored. */
export interface CrmEntitySortQuery extends QueryParams { sort?: string | null }
export interface CrmOfficeLeadQuery extends QueryParams { profile_id: string; foreign_key: string; flags?: string }

export type CrmWorkflowEntityType = "lead" | "deal";
export type CrmWorkflowStageType = "open" | "won" | "lost";
export type CrmWorkflowActionKind = "internal" | "external";
export interface CrmWorkflowActionDefinition extends JsonObject { key: string; kind: CrmWorkflowActionKind; form: string; required?: boolean }

export interface CrmWorkflowCreateInput extends JsonObject {
  "name": string;
  "slug": string;
  "flags"?: string[];
  "acquire_flags": string[];
  "priority": number;
  "entity_type"?: CrmWorkflowEntityType;
  "team_id"?: string | null;
  "is_default"?: boolean;
  "is_active"?: boolean;
  "daily_quota"?: number;
  "can_create_lead"?: boolean;
  "actions"?: CrmWorkflowActionDefinition[];
  "hint"?: string | null;
}

export interface CrmWorkflowUpdateInput extends JsonObject {
  "name"?: string | null;
  "slug"?: string | null;
  "flags"?: string[] | null;
  "acquire_flags"?: string[] | null;
  "priority"?: number | null;
  "entity_type"?: CrmWorkflowEntityType | null;
  "team_id"?: string | null;
  "is_default"?: boolean | null;
  "is_active"?: boolean | null;
  "daily_quota"?: number | null;
  "version"?: number | null;
  "can_create_lead"?: boolean | null;
  "actions"?: CrmWorkflowActionDefinition[] | null;
  "hint"?: string | null;
}

export interface CrmWorkflowNodeCreateInput extends JsonObject {
  "name": string;
  "slug": string;
  "priority": number;
  "probability"?: number;
  "stage_type"?: CrmWorkflowStageType;
  "sla_minutes"?: number | null;
  "is_active"?: boolean;
  "is_draggable_in"?: boolean;
  "is_draggable_out"?: boolean;
  "actions"?: CrmDynamicJson | null;
  "auto_win"?: boolean;
}

export interface CrmWorkflowNodeUpdateInput extends JsonObject {
  "name"?: string | null;
  "slug"?: string | null;
  "priority"?: number | null;
  "probability"?: number | null;
  "stage_type"?: CrmWorkflowStageType | null;
  "sla_minutes"?: number | null;
  "is_active"?: boolean | null;
  "is_draggable_in"?: boolean | null;
  "is_draggable_out"?: boolean | null;
  "actions"?: CrmDynamicJson | null;
  "auto_win"?: boolean | null;
}
