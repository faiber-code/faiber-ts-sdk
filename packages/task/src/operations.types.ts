import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: serde_json::Value. */
export type RoutesOpenapiGetResponse = import("@faiber/sdk-core").ServiceOpenApiDocument;

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
  "team_id": string | null;
  "project_id": string | null;
  "work_item_id": string | null;
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
export type RoutesCreateAgentProposalPostResponse = import("./types.js").TaskResponse<import("./types.js").AgentProposal>;

/** Backend response type: serde_json::Value. */
export type RoutesApproveAgentProposalPostResponse = import("./types.js").TaskResponse<import("./types.js").ApprovedAgentProposal>;

/** Backend request type: WorkspaceQuery. */
export type RoutesQueryPostInput = import("./workspace.js").WorkspaceQuery;
/** Backend response type: Value. */
export type RoutesQueryPostResponse = import("./types.js").TaskResponse<import("./workspace.js").WorkspaceQueryResult>;

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
export type RoutesEventsGetResponse = import("./types.js").TaskEventStreamBody;

/** Backend response type: Value. */
export type FeedbackAssigneesGetResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackAssignees>;

/** Backend request type: InitializeAttachment. */
export type FeedbackInitializePostInput = import("./feedback.js").InitializeFeedbackAttachment;
/** Backend response type: AttachmentView. */
export type FeedbackInitializePostResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackAttachment>;

/** Backend response type: AttachmentView. */
export type FeedbackCompletePostResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackAttachment>;

/** Backend request type: binary byte stream. */
export type FeedbackUploadPutInput = Blob | ArrayBuffer | ArrayBufferView;
/** Backend response type: AttachmentView. */
export type FeedbackUploadPutResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackAttachment>;

/** Backend response type: Value. */
export type FeedbackCapabilitiesGetResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackCapabilities>;

/** Backend response type: Value. */
export type FeedbackGetPolicyGetResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackPolicyResult>;

/** Backend request type: FeedbackPolicy. */
export type FeedbackPutPolicyPutInput = import("./feedback.js").FeedbackPolicy;
/** Backend response type: Value. */
export type FeedbackPutPolicyPutResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackPolicyResult>;

/** Backend query type: ListQuery. */
export type FeedbackIndexGetQuery = import("./feedback.js").FeedbackListQuery;
/** Backend response type: RequestPage. */
export type FeedbackIndexGetResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackPage>;

/** Backend request type: SubmitRequest. */
export type FeedbackCreatePostInput = import("./feedback.js").SubmitFeedbackRequest;
/** Backend response type: Value. */
export type FeedbackCreatePostResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackRequest>;

/** Backend response type: RequestDetail. */
export type FeedbackShowGetResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackDetail>;

/** Backend response type: raw-response. */
export type FeedbackContentGetResponse = ArrayBuffer | Uint8Array;

/** Backend request type: DecideRequest. */
export type FeedbackDecisionPostInput = import("./feedback.js").DecideFeedbackRequest;
/** Backend response type: Value. */
export type FeedbackDecisionPostResponse = import("./types.js").TaskResponse<import("./feedback.js").FeedbackRequest>;

/** Backend request type: UseGuestLink. */
export interface RoutesUseGuestLinkPostInput extends JsonObject {
  "token": string;
}
/** Backend response type: serde_json::Value. */
export type RoutesUseGuestLinkPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").GuestLinkAccess>;

/** Backend query type: GiftQuery. */
export interface RoutesListGetQuery extends QueryParams {
  "page"?: number | null;
  "per_page"?: number | null;
  "search"?: string | null;
}
/** Backend response type: Value. */
export type RoutesListGetResponse = import("./types.js").TaskResponse<import("./wire.types.js").ManagedTrialGiftPage>;

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
export type RoutesCreatePostApiV1InternalPlansGiftsResponse = import("./types.js").TaskResponse<import("./wire.types.js").ManagedTrialGift>;

/** Backend response type: Value. */
export type RoutesShowGetResponse = import("./types.js").TaskResponse<import("./wire.types.js").ManagedTrialGift>;

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
export type RoutesUpdatePutResponse = import("./types.js").TaskResponse<import("./wire.types.js").ManagedTrialGift>;

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
export type RoutesReserveInternalPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").MemoryReservation>;

/** Backend request type: SettleInput. */
export type RoutesSettleInternalPostInputBucket = "storage_bytes" | "imports" | "research" | "audio_seconds";
export interface RoutesSettleInternalPostInput extends JsonObject {
  "completed_at"?: string | null;
  "user_id": string;
  "bucket": RoutesSettleInternalPostInputBucket;
  "completed_units": number;
}
/** Backend response type: serde_json::Value. */
export type RoutesSettleInternalPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").MemorySettlement>;

/** Backend request type: Reserve. */
export type RoutesReservePostInputBucket = "tasks" | "images" | "responses";
export interface RoutesReservePostInput extends JsonObject {
  "id": string;
  "user_id": string;
  "project_id"?: string | null;
  "bucket"?: RoutesReservePostInputBucket;
}
/** Backend response type: Value. */
export type RoutesReservePostResponse = import("./types.js").TaskResponse<import("./wire.types.js").UsageReservation>;

/** Backend request type: Finish. */
export type RoutesFinishPostInputBucket = "tasks" | "images" | "responses";
export interface RoutesFinishPostInput extends JsonObject {
  "completed": boolean;
  "bucket"?: RoutesFinishPostInputBucket | null;
}
/** Backend response type: Value. */
export type RoutesFinishPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").FinishedUsageReservation>;

/** Backend response type: Usage. */
export type RoutesOwnGetResponse = import("./types.js").TaskResponse<import("./collaboration.js").MemoryUsage>;

/** Backend query type: FolderQuery. */
export interface RoutesFoldersGetQuery extends QueryParams {
  "project_id": string;
}
/** Backend response type: Value. */
export type RoutesFoldersGetResponse = import("./types.js").TaskResponse<import("./workspace.js").NoteFolder[]>;

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
export type RoutesDocumentGetResponse = import("./types.js").TaskResponse<import("./wire.types.js").NoteDocument>;

/** Backend request type: Update. */
export type RoutesUpdatePostInput = import("./wire.types.js").SaveNoteDocument;
/** Backend response type: Value. */
export type RoutesUpdatePostResponse = import("./types.js").TaskResponse<import("./wire.types.js").NoteDocument>;

/** Backend request type: Create. */
export type RoutesCreatePostApiV1NotesIdImportsInput = import("./collaboration.js").StartNoteImport;
/** Backend response type: Value. */
export type RoutesCreatePostApiV1NotesIdImportsResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteImportJob>;

/** Backend response type: Value. */
export type RoutesStatusGetApiV1NotesIdIndexingResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteIndexing>;

/** Backend response type: Value. */
export type RoutesRetryPostResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteIndexing>;

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
export type RoutesAuthorizePostResponse = import("./wire.types.js").NoteRealtimeAuthorization;

/** Backend response type: Value. */
export type RoutesConfigGetApiV1NotesIdRealtimeConfigResponse = import("./types.js").TaskResponse<import("./wire.types.js").NoteRealtimeConfig>;

/** Backend request type: CreateSource. */
export type RoutesCreatePostApiV1NotesIdSourceImportsInput = import("./collaboration.js").StartSourceImport;
/** Backend response type: Value. */
export type RoutesCreatePostApiV1NotesIdSourceImportsResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteImportJob>;

/** Backend query type: CatalogQuery. */
export type RoutesCatalogGetApiV1NotesDataCatalogQuery = import("./wire.types.js").NoteDataCatalogQuery;
/** Backend response type: Value. */
export type RoutesCatalogGetApiV1NotesDataCatalogResponse = import("./types.js").TaskResponse<import("./wire.types.js").NoteDataCatalog>;

/** Backend request type: Query. */
export type RoutesSearchPostInput = import("./collaboration.js").NoteKnowledgeQuery;
/** Backend response type: Value. */
export type RoutesSearchPostResponse = import("./types.js").TaskResponse<import("./collaboration.js").NoteKnowledgeResult>;

/** Backend response type: Value. */
export type RoutesGetPreferencesGetResponse = import("./types.js").TaskResponse<import("./wire.types.js").NotificationPreferences>;

/** Backend request type: NotificationPreferencesInput. */
export interface RoutesPutPreferencesPutInput extends JsonObject {
  "sms_enabled"?: boolean;
  "email_enabled"?: boolean;
}
/** Backend response type: Value. */
export type RoutesPutPreferencesPutResponse = import("./types.js").TaskResponse<import("./wire.types.js").NotificationPreferences>;

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
export type RoutesUpsertPerformancePolicyPutResponse = import("./types.js").TaskResponse<import("./wire.types.js").PerformancePolicy>;

/** Backend response type: Value. */
export type RoutesPreferencesGetResponse = import("./types.js").TaskResponse<import("./workspace.js").PlanningPreferencesResult>;

/** Backend request type: PlanningPreferences. */
export type RoutesSavePreferencesPutInput = import("./workspace.js").PlanningPreferences;
/** Backend response type: Value. */
export type RoutesSavePreferencesPutResponse = import("./types.js").TaskResponse<import("./workspace.js").PlanningPreferencesResult>;

/** Backend query type: ScopeQuery. */
export interface RoutesGetGetApiV1PlansQuery extends QueryParams {
  "project_id"?: string | null;
}
/** Backend response type: Value. */
export type RoutesGetGetApiV1PlansResponse = import("./types.js").TaskResponse<import("./wire.types.js").PlanAccount>;

/** Backend query type: IncomeQuery. */
export interface RoutesIncomeGetQuery extends QueryParams {
  "from": string;
  "to": string;
  "plan"?: string | null;
  "page"?: number | null;
}
/** Backend response type: Value. */
export type RoutesIncomeGetResponse = import("./types.js").TaskResponse<import("./types.js").IncomeReportData>;

/** Backend request type: MemoryLimits. */
export type RoutesConfigurePutInput = import("./collaboration.js").PlanMemoryLimits;
/** Backend response type: MemoryLimits. */
export type RoutesConfigurePutResponse = import("./types.js").TaskResponse<import("./collaboration.js").PlanMemoryLimits>;

/** Backend query type: UsersQuery. */
export interface RoutesUsersGetQuery extends QueryParams {
  "user_ids": string;
}
/** Backend response type: Value. */
export type RoutesUsersGetResponse = import("./types.js").TaskResponse<import("./types.js").AdminUserPlansData>;

/** Backend request type: Checkout. */
export interface RoutesCheckoutPostInput extends JsonObject {
  "plan": string;
  "request_id": string;
}
/** Backend response type: Value. */
export type RoutesCheckoutPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").PlanCheckoutResult>;

/** Backend request type: Redeem. */
export interface RoutesRedeemPostInput extends JsonObject {
  "token": string;
}
/** Backend response type: Value. */
export type RoutesRedeemPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").PlanRedeemed>;

/** Backend response type: Value. */
export type RoutesGiftPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").PlanGiftToken>;

/** Backend response type: MemoryLimits. */
export type RoutesCatalogGetApiV1PlansMemoryLimitsResponse = import("./types.js").TaskResponse<import("./collaboration.js").PlanMemoryLimits>;

/** Backend response type: Value. */
export type RoutesReconcilePostResponse = import("./types.js").TaskResponse<import("./wire.types.js").PlanReconcile>;

/** Backend query type: PointHistoryQuery. */
export interface RoutesPointHistoryGetQuery extends QueryParams {
  "month"?: string | null;
  "user_id"?: string | null;
  "limit"?: number | null;
}
/** Backend response type: Vec<serde_json::Value>. */
export type RoutesPointHistoryGetResponse = import("./types.js").TaskResponse<import("./wire.types.js").PointHistoryEntry[]>;

/** Backend query type: ProjectListQuery. */
export interface RoutesListProjectsGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "mode"?: QueryValue | null;
  "status"?: string | null;
  "q"?: string | null;
}
/** Backend response type: Vec<ProjectView>. */
export type RoutesListProjectsGetResponse = import("./types.js").TaskPageResponse<import("./types.js").Project>;

/** Backend request type: CreateProject. */
export type RoutesCreateProjectPostInput = import("./types.js").CreateProjectInput;
/** Backend response type: raw-response. */
export type RoutesCreateProjectPostResponse = import("./types.js").TaskResponse<import("./types.js").Project>;

/** Backend response type: raw-response. */
export type RoutesGetProjectGetResponse = import("./types.js").TaskResponse<import("./types.js").Project>;

/** Backend request type: UpdateProject. */
export type RoutesUpdateProjectPatchInput = import("./types.js").UpdateProjectInput;
/** Backend response type: raw-response. */
export type RoutesUpdateProjectPatchResponse = import("./types.js").TaskResponse<import("./types.js").Project>;

/** Backend response type: Workflow. */
export type RoutesGetGetApiV1ProjectsIdBoardWorkflowResponse = import("./types.js").TaskResponse<import("./collaboration.js").BoardWorkflow>;

/** Backend request type: SaveWorkflow. */
export type RoutesPutPutApiV1ProjectsIdBoardWorkflowInput = import("./collaboration.js").SaveBoardWorkflow;
/** Backend response type: Workflow. */
export type RoutesPutPutApiV1ProjectsIdBoardWorkflowResponse = import("./types.js").TaskResponse<import("./collaboration.js").BoardWorkflow>;

/** Backend response type: Value. */
export type RoutesProjectChecklistsGetResponse = import("./types.js").TaskResponse<import("./types.js").ChecklistSnapshot[]>;

/** Backend request type: GrantAccess. */
export interface RoutesGrantProjectAccessPostInput extends JsonObject {
  "user_id": string;
  "profile_key": string;
  "expires_at"?: string | null;
}
/** Backend response type: serde_json::Value. */
export type RoutesGrantProjectAccessPostResponse = import("./types.js").TaskResponse<import("./types.js").GrantProjectAccessResult>;

/** Backend response type: Value. */
export type RoutesMembersGetResponse = import("./types.js").TaskResponse<import("./types.js").ProjectMember[]>;

/** Backend response type: Value. */
export type RoutesRemoveMemberDeleteResponse = import("./types.js").TaskResponse<import("./types.js").RemovalResult>;

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
  "due_at": string | null;
  "completed_at": string | null;
  "completed_by": string | null;
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
  "wip_limit": number | null;
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
export type RoutesTeamMonitoringGetResponse = import("./types.js").TaskResponse<import("./wire.types.js").TeamMonitoring>;

/** Backend request type: ProposalInput. */
export type RoutesProposePostInput = import("./workspace.js").ReviewProposalInput;
/** Backend response type: Value. */
export type RoutesProposePostResponse = import("./types.js").TaskResponse<import("./workspace.js").ReviewProposal>;

/** Backend response type: Value. */
export type RoutesGetGetApiV1ReviewProposalsIdResponse = import("./types.js").TaskResponse<import("./workspace.js").ReviewProposal>;

/** Backend request type: ProposalInput. */
export type RoutesRevisePutInput = import("./workspace.js").ReviewProposalInput;
/** Backend response type: Value. */
export type RoutesRevisePutResponse = import("./types.js").TaskResponse<import("./workspace.js").ReviewProposal>;

/** Backend response type: Value. */
export type RoutesApplyPostApiV1ReviewProposalsIdApplyResponse = import("./types.js").TaskResponse<import("./workspace.js").ReviewProposal>;

/** Backend response type: Value. */
export type RoutesRefreshPostResponse = import("./types.js").TaskResponse<import("./workspace.js").ReviewProposal>;

/** Backend request type: ProposalInput. */
export type RoutesValidateProposalPostInput = import("./workspace.js").ReviewProposalInput;
/** Backend response type: Value. */
export type RoutesValidateProposalPostResponse = import("./types.js").TaskResponse<import("./workspace.js").ReviewPreviewResult>;

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
  "project_id": string | null;
  "name": string;
  "goal": string;
  "status": string;
  "starts_at": string | null;
  "ends_at": string | null;
  "capacity": number | null;
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
export type RoutesCreateSprintPostResponse = import("./types.js").TaskResponse<import("./types.js").Sprint>;

/** Backend response type: raw-response. */
export type RoutesCompleteSprintPostResponse = import("./types.js").TaskResponse<import("./types.js").Sprint>;

/** Backend response type: raw-response. */
export type RoutesStartSprintPostResponse = import("./types.js").TaskResponse<import("./types.js").Sprint>;

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
export type RoutesCreateTeamPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").Team>;

/** Backend response type: raw-response. */
export type RoutesGetTeamGetResponse = import("./types.js").TaskResponse<import("./wire.types.js").Team>;

/** Backend request type: UpdateTeam. */
export interface RoutesUpdateTeamPatchInput extends JsonObject {
  "name"?: string | null;
  "description"?: string | null;
  "status"?: string | null;
  "member_ids"?: string[] | null;
}
/** Backend response type: raw-response. */
export type RoutesUpdateTeamPatchResponse = import("./types.js").TaskResponse<import("./wire.types.js").Team>;

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
export type RoutesListWorkItemsGetResponse = import("./types.js").TaskPageResponse<import("./types.js").WorkItem>;

/** Backend request type: CreateWorkItem. */
export type RoutesCreateWorkItemPostInput = import("./types.js").CreateWorkItemInput;
/** Backend response type: raw-response. */
export type RoutesCreateWorkItemPostResponse = import("./types.js").TaskResponse<import("./types.js").WorkItem>;

/** Backend response type: no-content. */
export type RoutesRemoveWorkItemDeleteResponse = import("./wire.types.js").DeletedWorkItemResponse;

/** Backend response type: raw-response. */
export type RoutesGetWorkItemGetResponse = import("./types.js").TaskResponse<import("./types.js").WorkItem>;

/** Backend request type: UpdateWorkItem. */
export type RoutesUpdateWorkItemPatchInput = import("./types.js").UpdateWorkItemInput;
/** Backend response type: raw-response. */
export type RoutesUpdateWorkItemPatchResponse = import("./types.js").TaskResponse<import("./types.js").WorkItem>;

/** Backend query type: ActivityQuery. */
export interface RoutesWorkItemActivityGetQuery extends QueryParams {
  "offset"?: number;
}
/** Backend response type: Vec<serde_json::Value>. */
export type RoutesWorkItemActivityGetResponse = import("./types.js").TaskResponse<import("./wire.types.js").WorkItemActivity[]>;

/** Backend request type: CreateUpload. */
export type RoutesCreatePostApiV1WorkItemsIdAttachmentsInput = import("./collaboration.js").CreateAttachment;
/** Backend response type: Attachment. */
export type RoutesCreatePostApiV1WorkItemsIdAttachmentsResponse = import("./types.js").TaskResponse<import("./collaboration.js").TaskAttachment>;

/** Backend response type: Value. */
export type RoutesWorkItemChecklistGetResponse = import("./types.js").TaskResponse<import("./types.js").ChecklistSnapshot>;

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
export type RoutesReplaceChecklistPutResponse = import("./types.js").TaskResponse<import("./types.js").ChecklistResult>;

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
export type RoutesCreateCommentPostResponse = import("./types.js").TaskResponse<import("./types.js").Comment>;

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
  "next_cursor": string | null;
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
  "branch": string | null;
  "repository_label": string | null;
  "committed_at": string | null;
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
export type RoutesAttachCommitPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").CommitLink>;

/** Backend request type: PointEntryInput. */
export interface RoutesAddPointsPostInput extends JsonObject {
  "user_id": string;
  "entry_type": string;
  "points": number;
  "reason"?: string;
}
/** Backend response type: raw-response. */
export type RoutesAddPointsPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").PointEntry>;

/** Backend response type: Value. */
export type RoutesRemoveDeleteApiV1WorkItemsIdReminderResponse = import("./types.js").TaskResponse<import("./types.js").RemovalResult>;

/** Backend response type: Value. */
export type RoutesGetGetApiV1WorkItemsIdReminderResponse = import("./types.js").TaskResponse<import("./types.js").Reminder | null>;

/** Backend request type: Input. */
export type RoutesPutPutApiV1WorkItemsIdReminderInput = import("./types.js").ReminderInput;
/** Backend response type: Value. */
export type RoutesPutPutApiV1WorkItemsIdReminderResponse = import("./types.js").TaskResponse<import("./types.js").Reminder>;

/** Backend request type: TransitionWorkItem. */
export interface RoutesTransitionWorkItemPostInput extends JsonObject {
  "status": string;
  "rank"?: string | null;
}
/** Backend response type: raw-response. */
export type RoutesTransitionWorkItemPostResponse = import("./types.js").TaskResponse<import("./types.js").WorkItem>;

/** Backend response type: Vec<WorkLogView>. */
export interface RoutesListWorkLogsGetResponseItem extends JsonObject {
  "id": string;
  "work_item_id": string;
  "author_id": string;
  "body": string;
  "minutes": number | null;
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
export type RoutesCreateWorkLogPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").WorkLog>;

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
  "ended_at": string | null;
  "last_heartbeat_at": string;
  "active_seconds": number;
  "idle_seconds": number;
  "elapsed_seconds": number;
  "stop_reason": string | null;
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
export type RoutesStartWorkSessionPostResponse = import("./types.js").TaskResponse<import("./wire.types.js").StartedWorkSession>;

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
  "ended_at": string | null;
  "last_heartbeat_at": string;
  "active_seconds": number;
  "idle_seconds": number;
  "elapsed_seconds": number;
  "stop_reason": string | null;
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
  "ended_at": string | null;
  "last_heartbeat_at": string;
  "active_seconds": number;
  "idle_seconds": number;
  "elapsed_seconds": number;
  "stop_reason": string | null;
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
  "ended_at": string | null;
  "last_heartbeat_at": string;
  "active_seconds": number;
  "idle_seconds": number;
  "elapsed_seconds": number;
  "stop_reason": string | null;
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
export type RoutesReadyGetHealthDependenciesResponse = import("./types.js").TaskResponse<import("./wire.types.js").Readiness>;

/** Backend response type: Health. */
export interface RoutesLiveGetResponseData extends JsonObject {
  "service": string;
  "version": string;
  "status": string;
}
export interface RoutesLiveGetResponse extends ApiEnvelope<RoutesLiveGetResponseData> {
}

/** Backend response type: raw-response. */
export type RoutesReadyGetHealthReadyResponse = import("./types.js").TaskResponse<import("./wire.types.js").Readiness>;

/** Backend response type: raw-response. */
export type RoutesMetricsGetResponse = string;
