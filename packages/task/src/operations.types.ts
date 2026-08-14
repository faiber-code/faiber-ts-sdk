import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: serde_json::Value. */
export type RoutesOpenapiGetResponse = JsonValue;

/** Backend query type: AccessQuery. */
export interface RoutesEffectiveAccessGetQuery extends QueryParams {
  "team_id"?: string | null;
  "project_id"?: string | null;
  "work_item_id"?: string | null;
}
/** Backend response type: EffectiveAccess. */
export interface RoutesEffectiveAccessGetResponseData extends JsonObject {
  "user_id": string;
  "workspace_id": string;
  "team_id"?: string | null;
  "project_id"?: string | null;
  "work_item_id"?: string | null;
  "capabilities": string[];
}
export interface RoutesEffectiveAccessGetResponse extends ApiEnvelope<RoutesEffectiveAccessGetResponseData> {
}

/** Backend request type: AgentProposalInput. */
export interface RoutesCreateAgentProposalPostInput extends JsonObject {
  "project_id": string;
  "work_item_id"?: string | null;
  "operation": string;
  "payload": JsonValue;
}
/** Backend response type: raw-response. */
export interface RoutesCreateAgentProposalPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface RoutesApproveAgentProposalPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: stream. */
export interface RoutesEventsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UseGuestLink. */
export interface RoutesUseGuestLinkPostInput extends JsonObject {
  "token": string;
}
/** Backend response type: serde_json::Value. */
export interface RoutesUseGuestLinkPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ProjectListQuery. */
export interface RoutesListProjectsGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "mode"?: QueryValue | null;
  "status"?: string | null;
  "q"?: string | null;
}
/** Backend response type: Vec<ProjectView>. */
export interface RoutesListProjectsGetResponseItem extends JsonObject {
  "id": string;
  "workspace_id": string;
  "team_id"?: string | null;
  "key": string;
  "name": string;
  "description": string;
  "mode": string;
  "status": string;
  "settings": JsonValue;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export interface RoutesListProjectsGetResponse extends ApiEnvelope<RoutesListProjectsGetResponseItem[]> {
}

/** Backend request type: CreateProject. */
export interface RoutesCreateProjectPostInput extends JsonObject {
  "team_id"?: string | null;
  "key": string;
  "name": string;
  "description"?: string;
  "mode": BackendJson<"ProjectMode">;
  "settings"?: JsonValue;
}
/** Backend response type: raw-response. */
export interface RoutesCreateProjectPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: raw-response. */
export interface RoutesGetProjectGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateProject. */
export interface RoutesUpdateProjectPatchInput extends JsonObject {
  "name"?: string | null;
  "description"?: string | null;
  "status"?: string | null;
  "settings"?: JsonValue | null;
}
/** Backend response type: raw-response. */
export interface RoutesUpdateProjectPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: GrantAccess. */
export interface RoutesGrantProjectAccessPostInput extends JsonObject {
  "user_id": string;
  "profile_key": string;
  "expires_at"?: string | null;
}
/** Backend response type: serde_json::Value. */
export interface RoutesGrantProjectAccessPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ReportQuery. */
export interface RoutesReportSummaryGetQuery extends QueryParams {
  "project_id": string;
}
/** Backend response type: ReportSummary. */
export interface RoutesReportSummaryGetResponseData extends JsonObject {
  "total": number;
  "completed": number;
  "overdue": number;
  "in_progress": number;
  "completion_rate": number;
}
export interface RoutesReportSummaryGetResponse extends ApiEnvelope<RoutesReportSummaryGetResponseData> {
}

/** Backend request type: CreateSprint. */
export interface RoutesCreateSprintPostInput extends JsonObject {
  "team_id": string;
  "project_id"?: string | null;
  "name": string;
  "goal"?: string;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "capacity"?: number | null;
}
/** Backend response type: raw-response. */
export interface RoutesCreateSprintPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: raw-response. */
export interface RoutesCompleteSprintPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: raw-response. */
export interface RoutesStartSprintPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: WorkItemListQuery. */
export interface RoutesListWorkItemsGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "project_id"?: string | null;
  "sprint_id"?: string | null;
  "owner_id"?: string | null;
  "status"?: string | null;
  "q"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: Vec<WorkItemView>. */
export interface RoutesListWorkItemsGetResponseItem extends JsonObject {
  "id": string;
  "workspace_id": string;
  "project_id": string;
  "parent_id"?: string | null;
  "sequence": number;
  "key": string;
  "item_type": string;
  "title": string;
  "description": string;
  "status": string;
  "priority": string;
  "rank": string;
  "owner_id": string;
  "reporter_id": string;
  "estimate"?: number | null;
  "story_points"?: number | null;
  "start_at"?: string | null;
  "due_at"?: string | null;
  "completed_at"?: string | null;
  "sprint_id"?: string | null;
  "release_id"?: string | null;
  "campaign_id"?: string | null;
  "custom_fields": JsonValue;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export interface RoutesListWorkItemsGetResponse extends ApiEnvelope<RoutesListWorkItemsGetResponseItem[]> {
}

/** Backend request type: CreateWorkItem. */
export interface RoutesCreateWorkItemPostInput extends JsonObject {
  "project_id": string;
  "parent_id"?: string | null;
  "item_type"?: string;
  "title": string;
  "description"?: string;
  "priority"?: string;
  "owner_id": string;
  "estimate"?: number | null;
  "story_points"?: number | null;
  "start_at"?: string | null;
  "due_at"?: string | null;
  "sprint_id"?: string | null;
  "release_id"?: string | null;
  "campaign_id"?: string | null;
  "custom_fields"?: JsonValue;
  "external_source"?: string | null;
  "external_id"?: string | null;
}
/** Backend response type: raw-response. */
export interface RoutesCreateWorkItemPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: raw-response. */
export interface RoutesGetWorkItemGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateWorkItem. */
export interface RoutesUpdateWorkItemPatchInput extends JsonObject {
  "title"?: string | null;
  "description"?: string | null;
  "priority"?: string | null;
  "owner_id"?: string | null;
  "estimate"?: number | null;
  "story_points"?: number | null;
  "start_at"?: string | null;
  "due_at"?: string | null;
  "sprint_id"?: string | null;
  "release_id"?: string | null;
  "campaign_id"?: string | null;
  "custom_fields"?: JsonValue | null;
}
/** Backend response type: raw-response. */
export interface RoutesUpdateWorkItemPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateComment. */
export interface RoutesCreateCommentPostInput extends JsonObject {
  "body": string;
  "mentions"?: string[];
}
/** Backend response type: raw-response. */
export interface RoutesCreateCommentPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: TransitionWorkItem. */
export interface RoutesTransitionWorkItemPostInput extends JsonObject {
  "status": string;
  "rank"?: string | null;
}
/** Backend response type: raw-response. */
export interface RoutesTransitionWorkItemPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: WorkspaceSummary. */
export interface RoutesWorkspaceGetResponseData extends JsonObject {
  "id": string;
  "sandbox_id": string;
  "name": string;
  "version": number;
}
export interface RoutesWorkspaceGetResponse extends ApiEnvelope<RoutesWorkspaceGetResponseData> {
}

/** Backend response type: raw-response. */
export interface RoutesReadyGetHealthDependenciesResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Health. */
export interface RoutesLiveGetResponseData extends JsonObject {
  "service": string;
  "version": string;
  "status": string;
}
export interface RoutesLiveGetResponse extends ApiEnvelope<RoutesLiveGetResponseData> {
}

/** Backend response type: raw-response. */
export interface RoutesReadyGetHealthReadyResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: raw-response. */
export interface RoutesMetricsGetResponse extends ApiEnvelope<JsonValue> {
}
