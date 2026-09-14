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

/** Backend request type: PerformancePolicyInput. */
export interface RoutesUpsertPerformancePolicyPutInput extends JsonObject {
  "month": string;
  "team_id"?: string | null;
  "user_id"?: string | null;
  "minimum_completed_tasks"?: number;
  "target_points"?: number;
  "estimate_capacity_hours"?: number | null;
}
/** Backend response type: serde_json::Value. */
export interface RoutesUpsertPerformancePolicyPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: PointHistoryQuery. */
export interface RoutesPointHistoryGetQuery extends QueryParams {
  "month"?: string | null;
  "user_id"?: string | null;
  "limit"?: number | null;
}
/** Backend response type: Vec<serde_json::Value>. */
export interface RoutesPointHistoryGetResponse extends ApiEnvelope<JsonValue[]> {
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
export type RoutesCreateProjectPostInputMode = "software" | "marketing";
export interface RoutesCreateProjectPostInput extends JsonObject {
  "team_id"?: string | null;
  "key": string;
  "name": string;
  "description"?: string;
  "mode": RoutesCreateProjectPostInputMode;
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

/** Backend response type: Vec<WorkflowStateView>. */
export interface RoutesWorkflowStatesGetResponseItem extends JsonObject {
  "key": string;
  "name": JsonValue;
  "category": string;
  "position": number;
  "wip_limit"?: number | null;
}
export interface RoutesWorkflowStatesGetResponse extends ApiEnvelope<RoutesWorkflowStatesGetResponseItem[]> {
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

/** Backend query type: MonitoringQuery. */
export interface RoutesTeamMonitoringGetQuery extends QueryParams {
  "month"?: string | null;
  "team_id"?: string | null;
}
/** Backend response type: serde_json::Value. */
export interface RoutesTeamMonitoringGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: SprintListQuery. */
export interface RoutesListSprintsGetQuery extends QueryParams {
  "team_id"?: string | null;
  "project_id"?: string | null;
  "status"?: string | null;
}
/** Backend response type: Vec<SprintView>. */
export interface RoutesListSprintsGetResponseItem extends JsonObject {
  "id": string;
  "team_id": string;
  "project_id"?: string | null;
  "name": string;
  "goal": string;
  "status": string;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "capacity"?: number | null;
  "version": number;
}
export interface RoutesListSprintsGetResponse extends ApiEnvelope<RoutesListSprintsGetResponseItem[]> {
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

/** Backend response type: Vec<TeamView>. */
export interface RoutesListTeamsGetResponseItem extends JsonObject {
  "id": string;
  "key": string;
  "name": string;
  "description": string;
  "status": string;
  "member_ids": string[];
  "version": number;
}
export interface RoutesListTeamsGetResponse extends ApiEnvelope<RoutesListTeamsGetResponseItem[]> {
}

/** Backend request type: CreateTeam. */
export interface RoutesCreateTeamPostInput extends JsonObject {
  "key": string;
  "name": string;
  "description"?: string;
  "member_ids"?: string[];
}
/** Backend response type: raw-response. */
export interface RoutesCreateTeamPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: raw-response. */
export interface RoutesGetTeamGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateTeam. */
export interface RoutesUpdateTeamPatchInput extends JsonObject {
  "name"?: string | null;
  "description"?: string | null;
  "status"?: string | null;
  "member_ids"?: string[] | null;
}
/** Backend response type: raw-response. */
export interface RoutesUpdateTeamPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: WorkItemListQuery. */
export interface RoutesListWorkItemsGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "project_id"?: string | null;
  "sprint_id"?: string | null;
  "owner_id"?: string | null;
  "team_id"?: string | null;
  "status"?: string | null;
  "q"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: Vec<WorkItemView>. */
export interface RoutesListWorkItemsGetResponseItem extends JsonObject {
  "id": string;
  "workspace_id": string;
  "project_id": string;
  "team_id"?: string | null;
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
  "team_id"?: string | null;
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
  "team_id"?: string | null;
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

/** Backend response type: Vec<CommentView>. */
export interface RoutesListCommentsGetResponseItem extends JsonObject {
  "id": string;
  "work_item_id": string;
  "author_id": string;
  "body": string;
  "mentions": string[];
  "version": number;
  "created_at": string;
}
export interface RoutesListCommentsGetResponse extends ApiEnvelope<RoutesListCommentsGetResponseItem[]> {
}

/** Backend request type: CreateComment. */
export interface RoutesCreateCommentPostInput extends JsonObject {
  "body": string;
  "mentions"?: string[];
}
/** Backend response type: raw-response. */
export interface RoutesCreateCommentPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<CommitLinkView>. */
export interface RoutesListCommitsGetResponseItem extends JsonObject {
  "id": string;
  "work_item_id": string;
  "linked_by": string;
  "sandbox_project": string;
  "commit_sha": string;
  "subject": string;
  "branch"?: string | null;
  "repository_label"?: string | null;
  "committed_at"?: string | null;
  "metadata": JsonValue;
  "created_at": string;
}
export interface RoutesListCommitsGetResponse extends ApiEnvelope<RoutesListCommitsGetResponseItem[]> {
}

/** Backend request type: AttachCommit. */
export interface RoutesAttachCommitPostInput extends JsonObject {
  "commit_sha": string;
  "subject"?: string;
  "branch"?: string | null;
  "repository_label"?: string | null;
  "committed_at"?: string | null;
  "metadata"?: JsonValue;
}
/** Backend response type: raw-response. */
export interface RoutesAttachCommitPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: PointEntryInput. */
export interface RoutesAddPointsPostInput extends JsonObject {
  "user_id": string;
  "entry_type": string;
  "points": number;
  "reason"?: string;
}
/** Backend response type: raw-response. */
export interface RoutesAddPointsPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: TransitionWorkItem. */
export interface RoutesTransitionWorkItemPostInput extends JsonObject {
  "status": string;
  "rank"?: string | null;
}
/** Backend response type: raw-response. */
export interface RoutesTransitionWorkItemPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<WorkLogView>. */
export interface RoutesListWorkLogsGetResponseItem extends JsonObject {
  "id": string;
  "work_item_id": string;
  "author_id": string;
  "body": string;
  "minutes"?: number | null;
  "log_type": string;
  "created_at": string;
}
export interface RoutesListWorkLogsGetResponse extends ApiEnvelope<RoutesListWorkLogsGetResponseItem[]> {
}

/** Backend request type: CreateWorkLog. */
export interface RoutesCreateWorkLogPostInput extends JsonObject {
  "body": string;
  "minutes"?: number | null;
  "log_type"?: string;
}
/** Backend response type: raw-response. */
export interface RoutesCreateWorkLogPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<WorkSessionView>. */
export interface RoutesListWorkSessionsGetResponseItem extends JsonObject {
  "id": string;
  "workspace_id": string;
  "work_item_id": string;
  "user_id": string;
  "client_id": string;
  "state": string;
  "runtime_state": string;
  "started_at": string;
  "ended_at"?: string | null;
  "last_heartbeat_at": string;
  "active_seconds": number;
  "idle_seconds": number;
  "elapsed_seconds": number;
  "stop_reason"?: string | null;
  "metadata": JsonValue;
  "version": number;
}
export interface RoutesListWorkSessionsGetResponse extends ApiEnvelope<RoutesListWorkSessionsGetResponseItem[]> {
}

/** Backend request type: StartWorkSession. */
export interface RoutesStartWorkSessionPostInput extends JsonObject {
  "client_id": string;
  "metadata"?: JsonValue;
}
/** Backend response type: raw-response. */
export interface RoutesStartWorkSessionPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: HeartbeatWorkSession. */
export interface RoutesHeartbeatWorkSessionPostInput extends JsonObject {
  "active_seconds"?: number;
  "idle_seconds"?: number;
  "state": string;
  "observed_at"?: string | null;
}
/** Backend response type: WorkSessionView. */
export interface RoutesHeartbeatWorkSessionPostResponseData extends JsonObject {
  "id": string;
  "workspace_id": string;
  "work_item_id": string;
  "user_id": string;
  "client_id": string;
  "state": string;
  "runtime_state": string;
  "started_at": string;
  "ended_at"?: string | null;
  "last_heartbeat_at": string;
  "active_seconds": number;
  "idle_seconds": number;
  "elapsed_seconds": number;
  "stop_reason"?: string | null;
  "metadata": JsonValue;
  "version": number;
}
export interface RoutesHeartbeatWorkSessionPostResponse extends ApiEnvelope<RoutesHeartbeatWorkSessionPostResponseData> {
}

/** Backend request type: StopWorkSession. */
export interface RoutesStopWorkSessionPostInput extends JsonObject {
  "reason"?: string | null;
}
/** Backend response type: WorkSessionView. */
export interface RoutesStopWorkSessionPostResponseData extends JsonObject {
  "id": string;
  "workspace_id": string;
  "work_item_id": string;
  "user_id": string;
  "client_id": string;
  "state": string;
  "runtime_state": string;
  "started_at": string;
  "ended_at"?: string | null;
  "last_heartbeat_at": string;
  "active_seconds": number;
  "idle_seconds": number;
  "elapsed_seconds": number;
  "stop_reason"?: string | null;
  "metadata": JsonValue;
  "version": number;
}
export interface RoutesStopWorkSessionPostResponse extends ApiEnvelope<RoutesStopWorkSessionPostResponseData> {
}

/** Backend response type: Vec<WorkSessionView>. */
export interface RoutesActiveWorkSessionsGetResponseItem extends JsonObject {
  "id": string;
  "workspace_id": string;
  "work_item_id": string;
  "user_id": string;
  "client_id": string;
  "state": string;
  "runtime_state": string;
  "started_at": string;
  "ended_at"?: string | null;
  "last_heartbeat_at": string;
  "active_seconds": number;
  "idle_seconds": number;
  "elapsed_seconds": number;
  "stop_reason"?: string | null;
  "metadata": JsonValue;
  "version": number;
}
export interface RoutesActiveWorkSessionsGetResponse extends ApiEnvelope<RoutesActiveWorkSessionsGetResponseItem[]> {
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
