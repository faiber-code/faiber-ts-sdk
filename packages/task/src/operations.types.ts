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

/** Backend request type: WorkspaceQuery. */
export interface RoutesQueryPostInputFieldFilters extends JsonObject {
  "key": string;
  "op": string;
  "value"?: JsonValue | null;
  "unit"?: string | null;
}
export interface RoutesQueryPostInput extends JsonObject {
  "project_id"?: string | null;
  "owner_id"?: string | null;
  "item_type"?: string | null;
  "q"?: string | null;
  "from"?: string | null;
  "until"?: string | null;
  "completed_by_me"?: boolean;
  "active_only"?: boolean;
  "cursor"?: string | null;
  "limit"?: number | null;
  "include_archived"?: boolean;
  "record_type"?: string | null;
  "field_filters"?: RoutesQueryPostInputFieldFilters[];
}
/** Backend response type: Value. */
export interface RoutesQueryPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export type RoutesRemoveDeleteApiV1AttachmentsIdResponse = import("./types.js").TaskResponse<import("./collaboration.js").DeletedAttachment>;

/** Backend response type: Attachment. */
export type RoutesStatusGetApiV1AttachmentsIdResponse = import("./types.js").TaskResponse<import("./collaboration.js").TaskAttachment>;

/** Backend request type: multipart/form-data. */
export type RoutesContentPutInput = FormData;
/** Backend response type: Attachment. */
export type RoutesContentPutResponse = import("./types.js").TaskResponse<import("./collaboration.js").TaskAttachment>;

/** Backend response type: raw-response. */
export type RoutesDownloadGetResponse = ArrayBuffer | Uint8Array;

/** Backend response type: serde_json::Value. */
export type RoutesConfigGetApiV1CollaborationConfigResponse = import("./types.js").TaskResponse<import("./collaboration.js").CollaborationConfig>;

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

/** Backend query type: GiftQuery. */
export interface RoutesListGetQuery extends QueryParams {
  "page"?: number | null;
  "per_page"?: number | null;
  "search"?: string | null;
}
/** Backend response type: Value. */
export interface RoutesListGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateGift. */
export interface RoutesCreatePostApiV1InternalPlansGiftsInputLimits extends JsonObject {
  "tasks": number;
  "responses": number;
  "images"?: number;
  "shared_spaces": number;
  "members": number;
}
export interface RoutesCreatePostApiV1InternalPlansGiftsInput extends JsonObject {
  "request_id": string;
  "created_by": string;
  "max_uses"?: number;
  "label": string;
  "status": string;
  "expires_at": string;
  "limits": RoutesCreatePostApiV1InternalPlansGiftsInputLimits;
  "rotate_token"?: boolean;
}
/** Backend response type: Value. */
export interface RoutesCreatePostApiV1InternalPlansGiftsResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: GiftSettings. */
export interface RoutesUpdatePutInputLimits extends JsonObject {
  "tasks": number;
  "responses": number;
  "images"?: number;
  "shared_spaces": number;
  "members": number;
}
export interface RoutesUpdatePutInput extends JsonObject {
  "max_uses"?: number;
  "label": string;
  "status": string;
  "expires_at": string;
  "limits": RoutesUpdatePutInputLimits;
  "rotate_token"?: boolean;
}
/** Backend response type: Value. */
export interface RoutesUpdatePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ReserveInput. */
export type RoutesReserveInternalPostInputBucket = "storage_bytes" | "imports" | "research" | "audio_seconds";
export interface RoutesReserveInternalPostInput extends JsonObject {
  "id": string;
  "user_id": string;
  "project_id"?: string | null;
  "bucket": RoutesReserveInternalPostInputBucket;
  "units": number;
}
/** Backend response type: serde_json::Value. */
export interface RoutesReserveInternalPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: SettleInput. */
export type RoutesSettleInternalPostInputBucket = "storage_bytes" | "imports" | "research" | "audio_seconds";
export interface RoutesSettleInternalPostInput extends JsonObject {
  "completed_at"?: string | null;
  "user_id": string;
  "bucket": RoutesSettleInternalPostInputBucket;
  "completed_units": number;
}
/** Backend response type: serde_json::Value. */
export interface RoutesSettleInternalPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Reserve. */
export type RoutesReservePostInputBucket = "tasks" | "images" | "responses";
export interface RoutesReservePostInput extends JsonObject {
  "id": string;
  "user_id": string;
  "project_id"?: string | null;
  "bucket"?: RoutesReservePostInputBucket;
}
/** Backend response type: Value. */
export interface RoutesReservePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Finish. */
export type RoutesFinishPostInputBucket = "tasks" | "images" | "responses";
export interface RoutesFinishPostInput extends JsonObject {
  "completed": boolean;
  "bucket"?: RoutesFinishPostInputBucket | null;
}
/** Backend response type: Value. */
export interface RoutesFinishPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Usage. */
export type RoutesOwnGetResponse = import("./types.js").TaskResponse<import("./collaboration.js").MemoryUsage>;

/** Backend query type: FolderQuery. */
export interface RoutesFoldersGetQuery extends QueryParams {
  "project_id": string;
}
/** Backend response type: Value. */
export interface RoutesFoldersGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export type RoutesGetGetApiV1NoteImportsIdResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteImportJob>;

/** Backend request type: Control. */
export type RoutesControlPostInput = import("./collaboration.js").ControlNoteImport;
/** Backend response type: Value. */
export type RoutesControlPostResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteImportJob>;

/** Backend request type: Apply. */
export type RoutesApplyPostApiV1NoteImportsIdApplyInput = import("./collaboration.js").ApplyNoteImport;
/** Backend response type: Value. */
export type RoutesApplyPostApiV1NoteImportsIdApplyResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteImportJob>;

/** Backend request type: SetCover. */
export type RoutesCoverPutInput = import("./collaboration.js").SetNoteCover;
/** Backend response type: NoteMedia. */
export type RoutesCoverPutResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteMedia>;

/** Backend response type: Value. */
export interface RoutesDocumentGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Update. */
export interface RoutesUpdatePostInput extends JsonObject {
  "id": string;
  "generation": number;
  "body": string;
  "plain_text": string;
}
/** Backend response type: Value. */
export interface RoutesUpdatePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Create. */
export type RoutesCreatePostApiV1NotesIdImportsInput = import("./collaboration.js").StartNoteImport;
/** Backend response type: Value. */
export type RoutesCreatePostApiV1NotesIdImportsResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteImportJob>;

/** Backend response type: Value. */
export type RoutesStatusGetApiV1NotesIdIndexingResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteIndexing>;

/** Backend response type: Value. */
export interface RoutesRetryPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: NoteMedia. */
export type RoutesGetGetApiV1NotesIdMediaResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteMedia>;

/** Backend request type: AddMedia. */
export type RoutesAddPostInput = import("./collaboration.js").AddNoteMedia;
/** Backend response type: NoteMedia. */
export type RoutesAddPostResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteMedia>;

/** Backend request type: RemoveMedia. */
export type RoutesRemoveDeleteApiV1NotesIdMediaAttachmentInput = import("./collaboration.js").RemoveNoteMedia;
/** Backend response type: NoteMedia. */
export type RoutesRemoveDeleteApiV1NotesIdMediaAttachmentResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteMedia>;

/** Backend request type: Authorization. */
export interface RoutesAuthorizePostInput extends JsonObject {
  "socket_id": string;
  "channel_name": string;
}
/** Backend response type: Value. */
export type RoutesAuthorizePostResponse = JsonValue;

/** Backend response type: Value. */
export interface RoutesConfigGetApiV1NotesIdRealtimeConfigResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateSource. */
export type RoutesCreatePostApiV1NotesIdSourceImportsInput = import("./collaboration.js").StartSourceImport;
/** Backend response type: Value. */
export type RoutesCreatePostApiV1NotesIdSourceImportsResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteImportJob>;

/** Backend response type: Value. */
export interface RoutesCatalogGetApiV1NotesDataCatalogResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Query. */
export type RoutesSearchPostInput = import("./collaboration.js").NoteKnowledgeQuery;
/** Backend response type: Value. */
export type RoutesSearchPostResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteKnowledgeResult>;

/** Backend response type: Value. */
export interface RoutesGetPreferencesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: NotificationPreferencesInput. */
export interface RoutesPutPreferencesPutInput extends JsonObject {
  "sms_enabled"?: boolean;
  "email_enabled"?: boolean;
}
/** Backend response type: Value. */
export interface RoutesPutPreferencesPutResponse extends ApiEnvelope<JsonValue> {
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

/** Backend response type: Value. */
export interface RoutesPreferencesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: PlanningPreferences. */
export interface RoutesSavePreferencesPutInput extends JsonObject {
  "timezone": string;
  "calendar": string;
  "week_start": number;
  "working_days": number[];
  "work_start": string;
  "work_end": string;
  "default_duration_minutes": number;
}
/** Backend response type: Value. */
export interface RoutesSavePreferencesPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ScopeQuery. */
export interface RoutesGetGetApiV1PlansQuery extends QueryParams {
  "project_id"?: string | null;
}
/** Backend response type: Value. */
export interface RoutesGetGetApiV1PlansResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: IncomeQuery. */
export interface RoutesIncomeGetQuery extends QueryParams {
  "from": string;
  "to": string;
  "plan"?: string | null;
  "page"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesIncomeGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: MemoryLimits. */
export type RoutesConfigurePutInput = import("./collaboration.js").PlanMemoryLimits;
/** Backend response type: MemoryLimits. */
export type RoutesConfigurePutResponse = import("./types.js").TaskResponse<import("./collaboration.js").PlanMemoryLimits>;

/** Backend query type: UsersQuery. */
export interface RoutesUsersGetQuery extends QueryParams {
  "user_ids": string;
}
/** Backend response type: Value. */
export interface RoutesUsersGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Checkout. */
export interface RoutesCheckoutPostInput extends JsonObject {
  "plan": string;
  "request_id": string;
}
/** Backend response type: Value. */
export interface RoutesCheckoutPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Redeem. */
export interface RoutesRedeemPostInput extends JsonObject {
  "token": string;
}
/** Backend response type: Value. */
export interface RoutesRedeemPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesGiftPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: MemoryLimits. */
export type RoutesCatalogGetApiV1PlansMemoryLimitsResponse = import("./types.js").TaskResponse<import("./collaboration.js").PlanMemoryLimits>;

/** Backend response type: Value. */
export interface RoutesReconcilePostResponse extends ApiEnvelope<JsonValue> {
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
  "plan_access"?: JsonValue | null;
  "id": string;
  "created_by": string;
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
export type RoutesCreateProjectPostInputMode = "software" | "marketing" | "general";
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

/** Backend response type: Workflow. */
export type RoutesGetGetApiV1ProjectsIdBoardWorkflowResponse = import("./types.js").TaskResponse<import("./collaboration.js").BoardWorkflow>;

/** Backend request type: SaveWorkflow. */
export type RoutesPutPutApiV1ProjectsIdBoardWorkflowInput = import("./collaboration.js").SaveBoardWorkflow;
/** Backend response type: Workflow. */
export type RoutesPutPutApiV1ProjectsIdBoardWorkflowResponse = import("./types.js").TaskResponse<import("./collaboration.js").BoardWorkflow>;

/** Backend response type: Value. */
export interface RoutesProjectChecklistsGetResponse extends ApiEnvelope<JsonValue> {
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

/** Backend response type: Value. */
export interface RoutesMembersGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesRemoveMemberDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Usage. */
export type RoutesGetGetApiV1ProjectsIdMemoryUsageResponse = import("./types.js").TaskResponse<import("./collaboration.js").MemoryUsage>;

/** Backend query type: Filters. */
export interface RoutesGetGetApiV1ProjectsIdReportQuery extends QueryParams {
  "from": string;
  "to": string;
}
/** Backend response type: Report. */
export interface RoutesGetGetApiV1ProjectsIdReportResponseDataTasksTimes extends JsonObject {
  "user_id": string;
  "period_seconds": number;
  "total_seconds": number;
}
export interface RoutesGetGetApiV1ProjectsIdReportResponseDataTasks extends JsonObject {
  "id": string;
  "title": string;
  "status": string;
  "priority": string;
  "owner_id": string;
  "created_at": string;
  "due_at"?: string | null;
  "completed_at"?: string | null;
  "completed_by"?: string | null;
  "period_seconds": number;
  "total_seconds": number;
  "times": RoutesGetGetApiV1ProjectsIdReportResponseDataTasksTimes[];
  "history_available": boolean;
}
export interface RoutesGetGetApiV1ProjectsIdReportResponseData extends JsonObject {
  "project_id": string;
  "from": string;
  "to": string;
  "generated_at": string;
  "tasks": RoutesGetGetApiV1ProjectsIdReportResponseDataTasks[];
}
export interface RoutesGetGetApiV1ProjectsIdReportResponse extends ApiEnvelope<RoutesGetGetApiV1ProjectsIdReportResponseData> {
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

/** Backend response type: raw-response. */
export type RoutesEnsurePersonalProjectPostResponse = import("./types.js").ProjectResponse;

/** Backend request type: CreateSharedProject. */
export interface RoutesCreateSharedProjectPostInput extends JsonObject {
  "name": string;
  "description"?: string;
}
/** Backend response type: raw-response. */
export type RoutesCreateSharedProjectPostResponse = import("./types.js").ProjectResponse;

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

/** Backend request type: ProposalInput. */
export type RoutesProposePostInputOperations = "create" | "update" | "transition" | "archive_note" | "import_note" | "delete" | "checklist" | "reminder" | "plan" | "move_note" | "folder" | "delete_folder";
export interface RoutesProposePostInput extends JsonObject {
  "request_id"?: string | null;
  "conversation_id": string;
  "project_id"?: string | null;
  "operations": RoutesProposePostInputOperations[];
}
/** Backend response type: Value. */
export interface RoutesProposePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesGetGetApiV1ReviewProposalsIdResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ProposalInput. */
export type RoutesRevisePutInputOperations = "create" | "update" | "transition" | "archive_note" | "import_note" | "delete" | "checklist" | "reminder" | "plan" | "move_note" | "folder" | "delete_folder";
export interface RoutesRevisePutInput extends JsonObject {
  "request_id"?: string | null;
  "conversation_id": string;
  "project_id"?: string | null;
  "operations": RoutesRevisePutInputOperations[];
}
/** Backend response type: Value. */
export interface RoutesRevisePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesApplyPostApiV1ReviewProposalsIdApplyResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesRefreshPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ProposalInput. */
export type RoutesValidateProposalPostInputOperations = "create" | "update" | "transition" | "archive_note" | "import_note" | "delete" | "checklist" | "reminder" | "plan" | "move_note" | "folder" | "delete_folder";
export interface RoutesValidateProposalPostInput extends JsonObject {
  "request_id"?: string | null;
  "conversation_id": string;
  "project_id"?: string | null;
  "operations": RoutesValidateProposalPostInputOperations[];
}
/** Backend response type: Value. */
export interface RoutesValidateProposalPostResponse extends ApiEnvelope<JsonValue> {
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
  "stage_id"?: string | null;
  "status_category"?: string;
  "priority": string;
  "rank": string;
  "owner_id": string;
  "reporter_id": string;
  "estimate"?: number | null;
  "story_points"?: number | null;
  "progress_started_at"?: string | null;
  "start_at"?: string | null;
  "folder_id"?: string | null;
  "planned_start_at"?: string | null;
  "planned_end_at"?: string | null;
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
export interface RoutesCreateWorkItemPostInputChecklist extends JsonObject {
  "id": string;
  "title": string;
  "done": boolean;
}
export type RoutesCreateWorkItemPostInputReminderTriggers = "relative" | "same_day";
export interface RoutesCreateWorkItemPostInputReminder extends JsonObject {
  "anchor_at": string;
  "timezone": string;
  "recurrence"?: string;
  "triggers"?: RoutesCreateWorkItemPostInputReminderTriggers[];
}
export interface RoutesCreateWorkItemPostInput extends JsonObject {
  "checklist"?: RoutesCreateWorkItemPostInputChecklist[];
  "reminder"?: RoutesCreateWorkItemPostInputReminder | null;
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

/** Backend response type: no-content. */
export type RoutesRemoveWorkItemDeleteResponse = void;

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

/** Backend query type: ActivityQuery. */
export interface RoutesWorkItemActivityGetQuery extends QueryParams {
  "offset"?: number;
}
/** Backend response type: Vec<serde_json::Value>. */
export interface RoutesWorkItemActivityGetResponse extends ApiEnvelope<JsonValue[]> {
}

/** Backend request type: CreateUpload. */
export type RoutesCreatePostApiV1WorkItemsIdAttachmentsInput = import("./collaboration.js").CreateAttachment;
/** Backend response type: Attachment. */
export type RoutesCreatePostApiV1WorkItemsIdAttachmentsResponse = import("./types.js").TaskResponse<import("./collaboration.js").TaskAttachment>;

/** Backend response type: Value. */
export interface RoutesWorkItemChecklistGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ChecklistInput. */
export interface RoutesReplaceChecklistPutInputItems extends JsonObject {
  "id": string;
  "title": string;
  "done": boolean;
}
export interface RoutesReplaceChecklistPutInput extends JsonObject {
  "items": RoutesReplaceChecklistPutInputItems[];
}
/** Backend response type: Value. */
export interface RoutesReplaceChecklistPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<CommentView>. */
export interface RoutesListCommentsGetResponseItemAttachments extends JsonObject {
  "id": string;
  "work_item_id": string;
  "filename": string;
  "content_type": string;
  "size_bytes": number;
  "status": string;
  "purpose": string;
  "version": number;
}
export interface RoutesListCommentsGetResponseItem extends JsonObject {
  "id": string;
  "work_item_id": string;
  "author_id": string;
  "body": string;
  "mentions": string[];
  "version": number;
  "created_at": string;
  "attachments": RoutesListCommentsGetResponseItemAttachments[];
}
export interface RoutesListCommentsGetResponse extends ApiEnvelope<RoutesListCommentsGetResponseItem[]> {
}

/** Backend request type: CreateComment. */
export interface RoutesCreateCommentPostInput extends JsonObject {
  "body"?: string;
  "mentions"?: string[];
  "attachment_ids"?: string[];
  "request_id"?: string | null;
}
/** Backend response type: raw-response. */
export interface RoutesCreateCommentPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: CommentPageQuery. */
export interface RoutesCommentPageGetQuery extends QueryParams {
  "before"?: string | null;
}
/** Backend response type: CommentPage. */
export interface RoutesCommentPageGetResponseDataItemsAttachments extends JsonObject {
  "id": string;
  "work_item_id": string;
  "filename": string;
  "content_type": string;
  "size_bytes": number;
  "status": string;
  "purpose": string;
  "version": number;
}
export interface RoutesCommentPageGetResponseDataItems extends JsonObject {
  "id": string;
  "work_item_id": string;
  "author_id": string;
  "body": string;
  "mentions": string[];
  "version": number;
  "created_at": string;
  "attachments": RoutesCommentPageGetResponseDataItemsAttachments[];
}
export interface RoutesCommentPageGetResponseData extends JsonObject {
  "items": RoutesCommentPageGetResponseDataItems[];
  "next_cursor"?: string | null;
}
export interface RoutesCommentPageGetResponse extends ApiEnvelope<RoutesCommentPageGetResponseData> {
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

/** Backend response type: Value. */
export interface RoutesRemoveDeleteApiV1WorkItemsIdReminderResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesGetGetApiV1WorkItemsIdReminderResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Input. */
export type RoutesPutPutApiV1WorkItemsIdReminderInputTriggers = "relative" | "same_day";
export interface RoutesPutPutApiV1WorkItemsIdReminderInput extends JsonObject {
  "anchor_at": string;
  "timezone": string;
  "recurrence"?: string;
  "triggers"?: RoutesPutPutApiV1WorkItemsIdReminderInputTriggers[];
}
/** Backend response type: Value. */
export interface RoutesPutPutApiV1WorkItemsIdReminderResponse extends ApiEnvelope<JsonValue> {
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
