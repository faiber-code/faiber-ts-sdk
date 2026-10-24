import type { CrmApi, CrmLeadRecord, CrmHealthResponse, CrmOfficeLeadResponse, CrmBoardResponse, CrmReportCatalogResponse, CrmActivityReminderCreateInput, CrmTaskStatusInput, CrmTaskCreateInput } from '@faiber/faiber-crm';
declare const api: CrmApi;
declare const lead: CrmLeadRecord;
const title: string = lead.title;
declare const health: CrmHealthResponse;
const version: string = health.data.version;
// @ts-expect-error Health uses the raw legacy status/message/data envelope.
health.meta;
declare const office: CrmOfficeLeadResponse;
const officeTitle: string | null | undefined = office.data?.title;
declare const board: CrmBoardResponse;
const probability: number = board.data.columns[0]!.stage.probability;
const entity: string = board.data.pipeline.entity_type;
declare const catalog: CrmReportCatalogResponse;
const metricVersion: number = catalog.data.metrics[0]!.version;
const keys: string[] = catalog.data.reports[0]!.metric_keys;
const valid: CrmActivityReminderCreateInput = { activity: { activity_type: 'call' }, reminder: { title: 'Call again', priority: 'high' } };
// @ts-expect-error Handler accepts only the documented priority values.
const invalidPriority: CrmTaskCreateInput = { title: 'Task', priority: 'highest' };
// @ts-expect-error Handler accepts completed, not done.
const invalidStatus: CrmTaskStatusInput = { version: 1, status: 'done' };
async function consume() {
  const response = await api.listLeads();
  const record: CrmLeadRecord | undefined = response.data.data.items[0];
  const deleted = await api.deleteLeadReminders('lead');
  const count: number = deleted.data.data.deleted;
  return { record, count };
}
void [title, version, officeTitle, probability, entity, metricVersion, keys, valid, invalidPriority, invalidStatus, consume];
async function stats() {
  const daily = await api.getDailyStats();
  const count: number | undefined = daily.data.data.workflows[0]?.lead_count;
  const leads = await api.getLeadStats();
  const total: number | undefined = leads.data.data.workflows[0]?.total;
  return { count, total };
}
void stats;
