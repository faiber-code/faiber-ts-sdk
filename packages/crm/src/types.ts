import type { ApiEnvelope, JsonObject, JsonValue } from "@faiber/sdk-core";
import type * as O from "./operations.types.js";

export type CrmWorkspace = O.ApiContextGetResponseData;
export type CrmPipeline = CrmPipelineWithStages;
export type CrmTeam = O.ApiTeamsGetResponseItem;
export type CrmCompany = O.ApiCompanyGetResponseData;
export type CrmContact = O.ApiContactGetResponseData;
export type CrmLead = O.ApiLeadGetResponseData;
/** Backward-compatible name for the current production lead view. */
export type Lead = CrmLead;
export type CrmDeal = O.ApiDealGetResponseData;
export type CrmTask = O.ApiCreateTaskPostResponseData;
export type CrmActivity = O.ApiCreateActivityPostResponseData;
export type CrmSource = O.ApiCreateSourcePostResponseData;
export type CrmCampaign = O.ApiCreateCampaignPostResponseData;
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
export type CrmMoveStageInput = O.ApiMoveLeadStagePatchInput;
export type CrmAssignmentInput = O.ApiAssignLeadPatchInput;

export interface CrmListData<T extends JsonObject> extends JsonObject {
  items: T[];
  next_cursor: string | null;
}

export type CrmCompanyListResponse = CrmApiResponse<CrmListData<CrmCompany>>;
export type CrmContactListResponse = CrmApiResponse<CrmListData<CrmContact>>;
export type CrmLeadListResponse = CrmApiResponse<CrmListData<CrmLead>>;
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
}

export interface CrmPipelineWithStages extends JsonObject {
  id: string;
  name: string;
  slug: string;
  entity_type: string;
  team_id: string | null;
  is_default: boolean;
  is_active: boolean;
  version: number;
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
  stage: JsonObject;
  records: T[];
  count: number;
  total_value: number;
}

export interface CrmBoard<T extends JsonObject> extends JsonObject {
  pipeline: JsonObject;
  columns: CrmBoardColumn<T>[];
}

export type CrmBoardResponse = CrmApiResponse<CrmBoard<CrmLead> | CrmBoard<CrmDeal>>;

export interface CrmReportCatalog extends JsonObject {
  reports: JsonObject[];
  metrics: JsonObject[];
}

export type CrmReportCatalogResponse = CrmApiResponse<CrmReportCatalog>;

export interface CrmReportRefreshResult extends JsonObject {
  report_run_id: string;
  status: string;
  overview: CrmOverview;
  agentic_started: boolean;
}

export type CrmReportRefreshResponse = CrmApiResponse<CrmReportRefreshResult>;

export interface CrmAgenticInsightResult extends JsonObject {
  job_id: string;
  report_run_id: string;
  status: string;
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
