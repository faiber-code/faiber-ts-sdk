import { ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import { CrmOperations } from "./operations.js";
import type * as O from "./operations.types.js";

/** Current production CRM API mounted by `infera-crm` under `/api/v1`. */
export class CrmApi extends ServiceApi {
  readonly operations = new CrmOperations(this.client);

  context(options?: RequestOptions) { return this.operations.apiContextGet(options); }
  listPipelines(options?: RequestOptions) { return this.operations.apiPipelinesGet(options); }
  /** Returns only workflows assigned directly to the caller or through their teams, ordered by priority. */
  listMemberWorkflows(options?: RequestOptions) { return this.operations.apiMemberWorkflowsGet(options); }
  /** Updates workflow name, priority, guidance, quota, flags, actions, and creation policy with optimistic locking. */
  updatePipeline(id: Identifier, data: O.ApiUpdatePipelinePatchInput, options?: RequestOptions<O.ApiUpdatePipelinePatchInput>) { return this.operations.apiUpdatePipelinePatch(id, data, options); }
  /** Returns authoritative per-workflow quota, completed-today, extra-task, and all-done values for the caller. */
  getDailyStats(options?: RequestOptions) { return this.operations.apiDailyStatsGet(options); }
  /** Returns server-calculated total, active, and inactive lead counts by workflow. */
  getLeadStats(options?: RequestOptions) { return this.operations.apiLeadStatsGet(options); }
  listTeams(options?: RequestOptions) { return this.operations.apiTeamsGet(options); }
  createTeam(data: O.ApiCreateTeamPostInput, options?: RequestOptions<O.ApiCreateTeamPostInput>) { return this.operations.apiCreateTeamPost(data, options); }
  getTeam(id: Identifier, options?: RequestOptions) { return this.operations.apiTeamGet(id, options); }
  addTeamMember(teamId: Identifier, data: O.ApiAddTeamMemberPostInput, options?: RequestOptions<O.ApiAddTeamMemberPostInput>) { return this.operations.apiAddTeamMemberPost(teamId, data, options); }
  /** Soft-deletes a team after optimistic version validation and detaches its active records. Requires `crm:team:delete`. */
  deleteTeam(id: Identifier, data: O.ApiDeleteTeamDeleteInput, options?: RequestOptions<O.ApiDeleteTeamDeleteInput>) { return this.operations.apiDeleteTeamDelete(id, data, options); }
  /** Deactivates a current team membership. Requires `crm:team:manage_members`. */
  removeTeamMember(teamId: Identifier, memberId: Identifier, options?: RequestOptions) { return this.operations.apiRemoveTeamMemberDelete(teamId, memberId, options); }

  /** Lists leads currently marked for SOS handling. Requires `crm:sos:read`. */
  listSosLeads(options?: RequestOptions) { return this.operations.apiListSosLeadsGet(options); }
  /** Marks a lead for SOS handling. Requires `crm:sos:create`. */
  addLeadToSos(leadId: Identifier, options?: RequestOptions) { return this.operations.apiAddLeadToSosPost(leadId, options); }
  /** Removes a lead from SOS without deleting the lead. Requires `crm:sos:delete`. */
  removeLeadFromSos(leadId: Identifier, options?: RequestOptions) { return this.operations.apiRemoveLeadFromSosDelete(leadId, options); }

  /** Lists team and user assignments for a workflow. Requires `crm:workflow_assignment:read`. */
  listWorkflowAssignments(workflowId: Identifier, options?: RequestOptions) { return this.operations.apiListWorkflowAssignmentsGet(workflowId, options); }
  /** Assigns exactly one team or user to a workflow. Requires `crm:workflow_assignment:manage`. */
  createWorkflowAssignment(workflowId: Identifier, data: O.ApiCreateWorkflowAssignmentPostInput, options?: RequestOptions<O.ApiCreateWorkflowAssignmentPostInput>) { return this.operations.apiCreateWorkflowAssignmentPost(workflowId, data, options); }
  assignTeamToWorkflow(workflowId: Identifier, teamId: Identifier, options?: RequestOptions<O.ApiCreateWorkflowAssignmentPostInput>) { return this.createWorkflowAssignment(workflowId, { team_id: String(teamId) }, options); }
  assignUserToWorkflow(workflowId: Identifier, userId: Identifier, options?: RequestOptions<O.ApiCreateWorkflowAssignmentPostInput>) { return this.createWorkflowAssignment(workflowId, { user_id: String(userId) }, options); }
  /** Removes a workflow assignment. Requires `crm:workflow_assignment:manage`. */
  deleteWorkflowAssignment(workflowId: Identifier, assignmentId: Identifier, options?: RequestOptions) { return this.operations.apiDeleteWorkflowAssignmentDelete(workflowId, assignmentId, options); }

  listCompanies(params?: O.ApiCompaniesGetQuery, options?: RequestOptions) { return this.operations.apiCompaniesGet(params, options); }
  createCompany(data: O.ApiCreateCompanyPostInput, options?: RequestOptions<O.ApiCreateCompanyPostInput>) { return this.operations.apiCreateCompanyPost(data, options); }
  getCompany(id: Identifier, options?: RequestOptions) { return this.operations.apiCompanyGet(id, options); }
  updateCompany(id: Identifier, data: O.ApiUpdateCompanyPatchInput, options?: RequestOptions<O.ApiUpdateCompanyPatchInput>) { return this.operations.apiUpdateCompanyPatch(id, data, options); }

  listContacts(params?: O.ApiContactsGetQuery, options?: RequestOptions) { return this.operations.apiContactsGet(params, options); }
  createContact(data: O.ApiCreateContactPostInput, options?: RequestOptions<O.ApiCreateContactPostInput>) { return this.operations.apiCreateContactPost(data, options); }
  getContact(id: Identifier, options?: RequestOptions) { return this.operations.apiContactGet(id, options); }
  updateContact(id: Identifier, data: O.ApiUpdateContactPatchInput, options?: RequestOptions<O.ApiUpdateContactPatchInput>) { return this.operations.apiUpdateContactPatch(id, data, options); }

  listLeads(params?: O.ApiLeadsGetQuery, options?: RequestOptions) { return this.operations.apiLeadsGet(params, options); }
  /** Lightweight cursor-paginated lead listing with profile, status-set, active-date, and priority sorting filters. */
  listLightLeads(params?: O.ApiLightLeadsGetQuery, options?: RequestOptions) { return this.operations.apiLightLeadsGet(params, options); }
  createLead(data: O.ApiCreateLeadPostInput, options?: RequestOptions<O.ApiCreateLeadPostInput>) { return this.operations.apiCreateLeadPost(data, options); }
  getLead(id: Identifier, options?: RequestOptions) { return this.operations.apiLeadGet(id, options); }
  updateLead(id: Identifier, data: O.ApiUpdateLeadPatchInput, options?: RequestOptions<O.ApiUpdateLeadPatchInput>) { return this.operations.apiUpdateLeadPatch(id, data, options); }
  moveLeadStage(id: Identifier, data: O.ApiMoveLeadStagePatchInput, options?: RequestOptions<O.ApiMoveLeadStagePatchInput>) { return this.operations.apiMoveLeadStagePatch(id, data, options); }
  assignLead(id: Identifier, data: O.ApiAssignLeadPatchInput, options?: RequestOptions<O.ApiAssignLeadPatchInput>) { return this.operations.apiAssignLeadPatch(id, data, options); }
  /** Returns the immutable combined activity and audited transition history for a lead. */
  getLeadHistory(id: Identifier, options?: RequestOptions) { return this.operations.apiLeadHistoryGet(id, options); }
  /** Removes all current reminder tasks linked to a lead. */
  deleteLeadReminders(id: Identifier, options?: RequestOptions) { return this.operations.apiDeleteLeadRemindersDelete(id, options); }

  listDeals(params?: O.ApiDealsGetQuery, options?: RequestOptions) { return this.operations.apiDealsGet(params, options); }
  createDeal(data: O.ApiCreateDealPostInput, options?: RequestOptions<O.ApiCreateDealPostInput>) { return this.operations.apiCreateDealPost(data, options); }
  getDeal(id: Identifier, options?: RequestOptions) { return this.operations.apiDealGet(id, options); }
  updateDeal(id: Identifier, data: O.ApiUpdateDealPatchInput, options?: RequestOptions<O.ApiUpdateDealPatchInput>) { return this.operations.apiUpdateDealPatch(id, data, options); }
  moveDealStage(id: Identifier, data: O.ApiMoveDealStagePatchInput, options?: RequestOptions<O.ApiMoveDealStagePatchInput>) { return this.operations.apiMoveDealStagePatch(id, data, options); }
  assignDeal(id: Identifier, data: O.ApiAssignDealPatchInput, options?: RequestOptions<O.ApiAssignDealPatchInput>) { return this.operations.apiAssignDealPatch(id, data, options); }

  getBoard(entityType: "lead" | "deal", pipelineId: Identifier, options?: RequestOptions) { return this.operations.apiBoardGet(entityType, pipelineId, options); }
  listTasks(params?: O.ApiTasksGetQuery, options?: RequestOptions) { return this.operations.apiTasksGet(params, options); }
  createTask(data: O.ApiCreateTaskPostInput, options?: RequestOptions<O.ApiCreateTaskPostInput>) { return this.operations.apiCreateTaskPost(data, options); }
  updateTaskStatus(id: Identifier, data: O.ApiUpdateTaskStatusPatchInput, options?: RequestOptions<O.ApiUpdateTaskStatusPatchInput>) { return this.operations.apiUpdateTaskStatusPatch(id, data, options); }
  deleteTask(id: Identifier, options?: RequestOptions) { return this.operations.apiDeleteTaskDelete(id, options); }
  listActivities(params?: O.ApiActivitiesGetQuery, options?: RequestOptions) { return this.operations.apiActivitiesGet(params, options); }
  createActivity(data: O.ApiCreateActivityPostInput, options?: RequestOptions<O.ApiCreateActivityPostInput>) { return this.operations.apiCreateActivityPost(data, options); }
  /** Atomically creates an activity/worklog and its reminder task under one idempotency key. */
  createActivityWithReminder(data: O.ApiCreateActivityWithReminderPostInput, options?: RequestOptions<O.ApiCreateActivityWithReminderPostInput>) { return this.operations.apiCreateActivityWithReminderPost(data, options); }
  listSources(options?: RequestOptions) { return this.operations.apiSourcesGet(options); }
  createSource(data: O.ApiCreateSourcePostInput, options?: RequestOptions<O.ApiCreateSourcePostInput>) { return this.operations.apiCreateSourcePost(data, options); }
  listCampaigns(options?: RequestOptions) { return this.operations.apiCampaignsGet(options); }
  createCampaign(data: O.ApiCreateCampaignPostInput, options?: RequestOptions<O.ApiCreateCampaignPostInput>) { return this.operations.apiCreateCampaignPost(data, options); }
  updateWorkspace(data: O.ApiUpdateWorkspacePatchInput, options?: RequestOptions<O.ApiUpdateWorkspacePatchInput>) { return this.operations.apiUpdateWorkspacePatch(data, options); }

  getOverview(params?: O.ApiOverviewGetQuery, options?: RequestOptions) { return this.operations.apiOverviewGet(params, options); }
  refreshReports(params?: O.ApiRefreshReportsPostQuery, options?: RequestOptions) { return this.operations.apiRefreshReportsPost(params, options); }
  getReportCatalog(options?: RequestOptions) { return this.operations.apiReportCatalogGet(options); }
  getReportRun(id: Identifier, options?: RequestOptions) { return this.operations.apiReportRunGet(id, options); }
  requestAgenticInsight(id: Identifier, options?: RequestOptions) { return this.operations.apiRequestAgenticInsightPost(id, options); }
  listAutomationJobs(params?: O.ApiAutomationJobsGetQuery, options?: RequestOptions) { return this.operations.apiAutomationJobsGet(params, options); }
  listAutomationWebhooks(options?: RequestOptions) { return this.operations.apiAutomationWebhooksGet(options); }
}

export * from "./types.js";
export * from "./operations.js";
export * from "./operations.types.js";
export * from "@faiber/sdk-core";
