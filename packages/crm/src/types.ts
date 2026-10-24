import type { ApiEnvelope, JsonObject, JsonValue } from "@faiber/sdk-core";
import type * as O from "./operations.types.js";

export type CrmWorkspace = O.ApiContextGetResponseData;
export type CrmPipeline = CrmPipelineWithStages;
export type CrmTeam = O.ApiTeamsGetResponseItem;
export type CrmCompany = O.ApiCompanyGetResponseData;
export type CrmContact = O.ApiContactGetResponseData;
/** Bare lead returned by list, create, update, assignment and stage operations. */
export type CrmLeadRecord = O.ApiCreateLeadPostResponseData;
/** Lead detail enriches the bare record with a nullable remote profile. */
export type CrmLead = O.ApiLeadGetResponseData;
/** Backward-compatible name for the current production lead view. */
export type Lead = CrmLead;
export type CrmDeal = O.ApiDealGetResponseData;
export type CrmTask = O.ApiCreateTaskPostResponseData;
export type CrmActivity = O.ApiCreateActivityPostResponseData;
export type CrmActivityProfile = O.ApiCreateActivityPostResponseDataProfile;
export type CrmWorklog = O.ApiWorklogsGetResponseItem;
export type CrmWorkflow = O.ApiShowWorkflowRouteGetApiV1WorkflowIdResponseData;
export type CrmWorkflowAction = O.ApiShowWorkflowRouteGetApiV1WorkflowIdResponseDataActions;
export type CrmWorkflowNode = O.ApiShowWorkflowNodeRouteGetResponseData;
export type CrmSource = O.ApiCreateSourcePostResponseData;
export type CrmCampaign = O.ApiCreateCampaignPostResponseData;
export type CrmSosLead = O.ApiAddLeadToSosPostResponseData;
export type CrmWorkflowAssignment = O.ApiCreateWorkflowAssignmentPostResponseData;
export type CrmDeletionResult = O.ApiDeleteTeamDeleteResponseData;
export type CrmReportRun = O.ApiReportRunGetResponseData;
export interface CrmMetricValue extends JsonObject {
  key: string;
  value: number;
  unit: string;
  freshness: string;
  source_of_truth: string;
  status: string;
  computed_at: string;
  evidence_count: number;
}

export interface CrmOverview extends JsonObject {
  period_start: string;
  period_end: string;
  metrics: CrmMetricValue[];
  data_quality_warnings: string[];
}
export type CrmWebhookSubscription = O.ApiAutomationWebhooksGetResponseItem;

export interface CrmResponseMeta extends JsonObject {
  request_id: string;
}

export interface CrmApiResponse<T> extends ApiEnvelope<T> {
  meta: CrmResponseMeta;
}

export type CrmListQuery = O.ApiLeadsGetQuery;
export type CreateCrmCompanyInput = O.ApiCreateCompanyPostInput;
export type UpdateCrmCompanyInput = O.ApiUpdateCompanyPatchInput;
export type CreateCrmContactInput = O.ApiCreateContactPostInput;
export type UpdateCrmContactInput = O.ApiUpdateContactPatchInput;
export type CreateCrmLeadInput = O.ApiCreateLeadPostInput;
export type UpdateCrmLeadInput = O.ApiUpdateLeadPatchInput;
export type CreateCrmDealInput = O.ApiCreateDealPostInput;
export type UpdateCrmDealInput = O.ApiUpdateDealPatchInput;
export type CreateCrmTaskInput = O.ApiCreateTaskPostInput;
export type CreateCrmActivityInput = O.ApiCreateActivityPostInput;
export type CreateCrmWorkflowInput = O.ApiCreateWorkflowRoutePostApiV1WorkflowInput;
export type UpdateCrmWorkflowInput = O.ApiUpdateWorkflowRoutePatchApiV1WorkflowIdInput;
export type CreateCrmWorkflowNodeInput = O.ApiCreateWorkflowNodeRoutePostApiV1WorkflowNodeIdInput;
export type UpdateCrmWorkflowNodeInput = O.ApiUpdateWorkflowNodeCompatRoutePatchInput;
export type CrmMoveStageInput = O.ApiMoveLeadStagePatchInput;
export type CrmAssignmentInput = O.ApiAssignLeadPatchInput;
export type DeleteCrmTeamInput = O.ApiDeleteTeamDeleteInput;
export type CreateCrmWorkflowAssignmentInput = O.ApiCreateWorkflowAssignmentPostInput;

export interface CrmListData<T extends JsonObject> extends JsonObject {
  items: T[];
  next_cursor: string | null;
}

export type CrmCompanyListResponse = CrmApiResponse<CrmListData<CrmCompany>>;
export type CrmContactListResponse = CrmApiResponse<CrmListData<CrmContact>>;
export type CrmLeadListResponse = CrmApiResponse<CrmListData<CrmLeadRecord>>;
export type CrmDealListResponse = CrmApiResponse<CrmListData<CrmDeal>>;
export type CrmTaskListResponse = CrmApiResponse<CrmListData<CrmTask>>;
export type CrmActivityListResponse = CrmApiResponse<CrmListData<CrmActivity>>;

export interface CrmPipelineStage extends JsonObject {
  id: string;
  pipeline_id: string;
  name: string;
  slug: string;
  position: number;
  probability: number;
  stage_type: string;
  sla_minutes: number | null;
  is_active: boolean;
  is_draggable_in: boolean;
  is_draggable_out: boolean;
  actions: JsonValue;
}

export interface CrmPipelineRecord extends JsonObject {
  id: string;
  name: string;
  slug: string;
  entity_type: string;
  team_id: string | null;
  is_default: boolean;
  is_active: boolean;
  priority: number;
  hint: string | null;
  daily_quota: number;
  can_create_lead: boolean;
  acquire_flags: JsonValue;
  actions: JsonValue;
  version: number;
}

export interface CrmPipelineWithStages extends CrmPipelineRecord {
  stages: CrmPipelineStage[];
}

export type CrmPipelinesResponse = CrmApiResponse<CrmPipelineWithStages[]>;

export interface CrmTeamMember extends JsonObject {
  id: string;
  team_id: string;
  user_id: string;
  title: string | null;
  capacity: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CrmTeamDetail extends JsonObject {
  team: CrmTeam;
  members: CrmTeamMember[];
}

export type CrmTeamDetailResponse = CrmApiResponse<CrmTeamDetail>;

export interface CrmBoardColumn<T extends JsonObject> extends JsonObject {
  stage: CrmPipelineStage;
  records: T[];
  count: number;
  total_value: number;
}

export interface CrmBoard<T extends JsonObject> extends JsonObject {
  pipeline: CrmPipelineRecord;
  columns: CrmBoardColumn<T>[];
}

export type CrmBoardResponse = CrmApiResponse<CrmBoard<CrmLeadRecord> | CrmBoard<CrmDeal>>;

export interface CrmReportCatalog extends JsonObject {
  reports: CrmReportDefinition[];
  metrics: CrmMetricDefinition[];
}

export type CrmReportCatalogResponse = CrmApiResponse<CrmReportCatalog>;

export interface CrmReportRefreshResult extends JsonObject {
  report_run_id: string;
  status: "ready";
  overview: CrmOverview;
  agentic_started: false;
}

export type CrmReportRefreshResponse = CrmApiResponse<CrmReportRefreshResult>;

export interface CrmAgenticInsightResult extends JsonObject {
  job_id: string;
  report_run_id: string;
  status: "queued";
  charged_to_user_id: string;
}

export type CrmAgenticInsightResponse = CrmApiResponse<CrmAgenticInsightResult>;
export type CrmOverviewResponse = CrmApiResponse<CrmOverview>;

export interface CrmAutomationJob extends JsonObject {
  id: string;
  job_type: string;
  status: string;
  priority: number;
  attempts: number;
  max_attempts: number;
  available_at: string;
  result: JsonValue | null;
  last_error: string | null;
  created_at: string;
  updated_at: string;
}

export type CrmAutomationJobListResponse = CrmApiResponse<CrmListData<CrmAutomationJob>>;

export interface CrmErrorBody extends JsonObject {
  code: string;
  message: string;
  details: JsonValue;
}

/** JSON returned when the legacy API not-found handler is reached. */
export interface CrmApiRouteNotFound { error: { code: "api_route_not_found"; message: string } }

/** HEAD has no body; the production CORS layer answers OPTIONS with an empty200. */
export type CrmApiFallbackResponse = CrmApiRouteNotFound | void;

/** Raw process liveness response; unlike modern CRM envelopes, it has status/message and no meta. */
export interface CrmHealthData { version: string }
export interface CrmHealthResponse { status: "success"; message: string; data: CrmHealthData }
/** Dependency readiness uses HTTP 503 when either database or broker is unavailable. */
export interface CrmReadinessData extends CrmHealthData { database: boolean; broker: boolean }
export interface CrmReadinessResponse { status: "success" | "unavailable"; message: string; data: CrmReadinessData }
export interface CrmReportDefinition extends JsonObject {
  id: string; name: string; slug: string; report_type: string; metric_keys: string[]; schedule: string | null; is_active: boolean;
}
export interface CrmMetricDefinition extends JsonObject {
  key: string; label_en: string; label_fa: string; description_en: string; description_fa: string;
  unit: string; formula: string; source_of_truth: string; freshness: string; is_certified: boolean; version: number;
}
export interface CrmLeadReminderDeletion extends JsonObject { lead_id: string; deleted: number }
export type CrmLeadReminderDeletionResponse = CrmApiResponse<CrmLeadReminderDeletion>;
/** Office integration queries the legacy leads table, not crm_leads. JSON fields are stored extensible legacy values. */
export interface CrmOfficeLead extends JsonObject {
  id: string; profile_id: string | null; title: string | null; description: string | null;
  creator_id: string; task_priority: number; workflow_id: string | null; workflow_node_id: string | null;
  campaign_id: string | null; source_id: string | null; enrollment_id: number | null; enrollment_course_id: number | null;
  installment_id: number | null; installment_enrollment_id: number | null; task_status: string; foreign_key: string | null;
  flags: JsonValue; assignee_ids: JsonValue; meta: JsonValue; active_at: string | null; won_at: string | null;
  deleted_at: string | null; created_at: string; updated_at: string;
}
export interface CrmOfficeLeadResponse { status: "success"; message: string; data: CrmOfficeLead | null }

export interface CrmDailyWorkflowStats extends JsonObject {
  id: string; name: string; slug: string; priority: number; hint: string | null; daily_tasks: number; leads_count: number; lead_count: number;
}
export interface CrmDailyStats extends JsonObject {
  workflows: CrmDailyWorkflowStats[]; total_tasks: number; total_done_tasks: number; extra_tasks_done: number; all_tasks_done: boolean;
}
export type CrmDailyStatsResponse = CrmApiResponse<CrmDailyStats>;
export interface CrmWorkflowLeadStats extends JsonObject {
  id: string; name: string; slug: string; priority: number; total: number; active: number; inactive: number;
}
export interface CrmLeadStats extends JsonObject { total: number; active: number; inactive: number; workflows: CrmWorkflowLeadStats[] }
export type CrmLeadStatsResponse = CrmApiResponse<CrmLeadStats>;
