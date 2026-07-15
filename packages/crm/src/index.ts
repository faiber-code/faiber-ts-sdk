import { RestResource, ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
type R<E extends T.CrmEntity, C, U, L, S> = RestResource<E, C, U, L, S>;
export class CrmApi extends ServiceApi {
    readonly leads: R<T.Lead, T.CreateLeadInput, T.UpdateLeadInput, T.LeadListResponse, T.LeadResponse> = new RestResource(this.client, "/api/v1/lead");
    readonly workflows: R<T.Workflow, T.CreateWorkflowInput, T.UpdateWorkflowInput, T.WorkflowListResponse, T.WorkflowResponse> = new RestResource(this.client, "/api/v1/workflow");
    readonly workflowNodes: R<T.WorkflowNode, T.CreateWorkflowNodeInput, T.UpdateWorkflowNodeInput, T.WorkflowNodeListResponse, T.WorkflowNodeResponse> = new RestResource(this.client, "/api/v1/workflow-node");
    readonly workflowMembers: R<T.WorkflowMember, T.CreateWorkflowMemberInput, T.UpdateWorkflowMemberInput, T.WorkflowMemberListResponse, T.WorkflowMemberResponse> = new RestResource(this.client, "/api/v1/workflow-members");
    readonly teams: R<T.Team, T.CreateTeamInput, T.UpdateTeamInput, T.TeamListResponse, T.TeamResponse> = new RestResource(this.client, "/api/v1/team");
    readonly teamUsers: R<T.TeamUser, T.CreateTeamUserInput, T.UpdateTeamUserInput, T.TeamUserListResponse, T.TeamUserResponse> = new RestResource(this.client, "/api/v1/team-users");
    readonly worklogs: R<T.Worklog, T.CreateWorklogInput, T.UpdateWorklogInput, T.WorklogListResponse, T.WorklogResponse> = new RestResource(this.client, "/api/v1/worklog");
    readonly reminders: R<T.Reminder, T.CreateReminderInput, T.UpdateReminderInput, T.ReminderListResponse, T.ReminderResponse> = new RestResource(this.client, "/api/v1/reminder");
    readonly escalations: R<T.Escalation, T.CreateEscalationInput, T.UpdateEscalationInput, T.EscalationListResponse, T.EscalationResponse> = new RestResource(this.client, "/api/v1/sos");
    leadStats(options?: RequestOptions) { return this.client.get<T.LeadStatsResponse>("/api/v1/stats/lead", undefined, options); }
    dailyStats(options?: RequestOptions) { return this.client.get<T.DailyStatsResponse>("/api/v1/stats/daily", undefined, options); }
    markLeadDone(id: Identifier, options?: RequestOptions) { return this.client.put<T.MarkLeadDoneResponse>(`/api/v1/lead/${encodeURIComponent(id)}/move-to-done`, undefined, options); }
    addLeadLog(id: Identifier, data: T.LeadLogInput, options?: RequestOptions<T.LeadLogInput>) { return this.client.post<T.LeadLogResponse, T.LeadLogInput>(`/api/v1/lead/${encodeURIComponent(id)}/log`, data, options); }
    addLeadTouch(id: Identifier, data: T.LeadTouchInput, options?: RequestOptions<T.LeadTouchInput>) { return this.client.post<T.LeadTouchResponse, T.LeadTouchInput>(`/api/v1/lead/${encodeURIComponent(id)}/touch`, data, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
