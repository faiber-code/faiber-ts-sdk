import type { ApiEnvelope, JsonObject, OperationResponse, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
export interface CrmEntity extends JsonObject {
    id: string;
    name?: string;
    status?: string;
}
export interface Lead extends CrmEntity {
    name: string;
    email?: string;
    phone?: string;
    assignee_id?: string;
}
export interface Workflow extends CrmEntity {
    name: string;
}
export interface WorkflowNode extends CrmEntity {
    workflow_id?: string;
    type?: string;
}
export interface WorkflowMember extends CrmEntity {
    workflow_id?: string;
    user_id?: string;
}
export interface Team extends CrmEntity {
    name: string;
}
export interface TeamUser extends CrmEntity {
    team_id?: string;
    user_id?: string;
}
export interface Worklog extends CrmEntity {
    lead_id?: string;
    content?: string;
}
export interface Reminder extends CrmEntity {
    lead_id?: string;
    remind_at?: string;
}
export interface Escalation extends CrmEntity {
    lead_id?: string;
    reason?: string;
}
export interface CreateCrmEntityInput extends JsonObject {
    name?: string;
    status?: string;
}
export interface UpdateCrmEntityInput extends Partial<CreateCrmEntityInput> {
}
export interface CreateLeadInput extends CreateCrmEntityInput {
    name: string;
    email?: string;
    phone?: string;
    assignee_id?: string;
}
export interface UpdateLeadInput extends Partial<CreateLeadInput> {
}
export interface CreateWorkflowInput extends CreateCrmEntityInput {
    name: string;
}
export interface UpdateWorkflowInput extends Partial<CreateWorkflowInput> {
}
export interface CreateWorkflowNodeInput extends CreateCrmEntityInput {
    workflow_id: string;
    type: string;
}
export interface UpdateWorkflowNodeInput extends Partial<CreateWorkflowNodeInput> {
}
export interface CreateWorkflowMemberInput extends CreateCrmEntityInput {
    workflow_id: string;
    user_id: string;
}
export interface UpdateWorkflowMemberInput extends Partial<CreateWorkflowMemberInput> {
}
export interface CreateTeamInput extends CreateCrmEntityInput {
    name: string;
}
export interface UpdateTeamInput extends Partial<CreateTeamInput> {
}
export interface CreateTeamUserInput extends CreateCrmEntityInput {
    team_id: string;
    user_id: string;
}
export interface UpdateTeamUserInput extends Partial<CreateTeamUserInput> {
}
export interface CreateWorklogInput extends CreateCrmEntityInput {
    lead_id: string;
    content: string;
}
export interface UpdateWorklogInput extends Partial<CreateWorklogInput> {
}
export interface CreateReminderInput extends CreateCrmEntityInput {
    lead_id: string;
    remind_at: string;
}
export interface UpdateReminderInput extends Partial<CreateReminderInput> {
}
export interface CreateEscalationInput extends CreateCrmEntityInput {
    lead_id: string;
    reason: string;
}
export interface UpdateEscalationInput extends Partial<CreateEscalationInput> {
}
export interface LeadLogInput extends JsonObject {
    content: string;
    type?: string;
}
export interface LeadTouchInput extends JsonObject {
    channel: string;
    notes?: string;
    touched_at?: string;
}
export interface LeadStats extends JsonObject {
    total: number;
    open: number;
    won: number;
    lost: number;
}
export interface DailyStats extends JsonObject {
    date: string;
    leads: number;
    activities: number;
}
export interface CrmListResponse<T extends CrmEntity> extends ResourceListResponse<T> {
}
export interface CrmResponse<T extends CrmEntity> extends ResourceResponse<T> {
}
export interface LeadListResponse extends CrmListResponse<Lead> {
}
export interface LeadResponse extends CrmResponse<Lead> {
}
export interface WorkflowListResponse extends CrmListResponse<Workflow> {
}
export interface WorkflowResponse extends CrmResponse<Workflow> {
}
export interface WorkflowNodeListResponse extends CrmListResponse<WorkflowNode> {
}
export interface WorkflowNodeResponse extends CrmResponse<WorkflowNode> {
}
export interface WorkflowMemberListResponse extends CrmListResponse<WorkflowMember> {
}
export interface WorkflowMemberResponse extends CrmResponse<WorkflowMember> {
}
export interface TeamListResponse extends CrmListResponse<Team> {
}
export interface TeamResponse extends CrmResponse<Team> {
}
export interface TeamUserListResponse extends CrmListResponse<TeamUser> {
}
export interface TeamUserResponse extends CrmResponse<TeamUser> {
}
export interface WorklogListResponse extends CrmListResponse<Worklog> {
}
export interface WorklogResponse extends CrmResponse<Worklog> {
}
export interface ReminderListResponse extends CrmListResponse<Reminder> {
}
export interface ReminderResponse extends CrmResponse<Reminder> {
}
export interface EscalationListResponse extends CrmListResponse<Escalation> {
}
export interface EscalationResponse extends CrmResponse<Escalation> {
}
export interface LeadStatsResponse extends ApiEnvelope<LeadStats> {
}
export interface DailyStatsResponse extends ApiEnvelope<DailyStats[]> {
}
export interface MarkLeadDoneResponse extends OperationResponse {
}
export interface LeadLogResponse extends ApiEnvelope<Worklog> {
}
export interface LeadTouchResponse extends ApiEnvelope<Worklog> {
}
