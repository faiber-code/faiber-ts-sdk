import { FlowApi, type CreateFlowInput, type Flow, type FlowGraph, type FlowRunDetail, type FlowRunResponse, type ImportFlowsInput, type ActiveTriggersResponse, type FlowDeleteResponse, type FlowValidationResponse, type CatalogSyncResponse, type EmitFlowEventInput, type EmitFlowEventResponse, type FlowIntegrationResponse } from '@faiber/faiber-flow';
declare const api: FlowApi;
const graph: FlowGraph = { nodes: [{ id: 'trigger', type: 'trigger', data: { capture_fields: ['event.user_id'] } }], edges: [] };
const create: CreateFlowInput = { name: 'Checkout', trigger_key: 'event.checkout.completed', enabled: false, graph };
const imported: ImportFlowsInput = { dry_run: true, event_bridge_groups: [{ event_keys: ['checkout.completed'], target_service: 'ledger', target_event: 'ledger.credit', payload: { customer_id: { kind: 'expr', value: '{{event.user_id}}' } }, condition: { op: 'always' } }] };
const event: EmitFlowEventInput = null;
// @ts-expect-error concrete create request requires trigger_key
const missingTrigger: CreateFlowInput = { name: 'Checkout' };
// @ts-expect-error legacy invented actions property is not a Flow create wire field
const legacy: CreateFlowInput = { name: 'Checkout', trigger_key: 'event.checkout', actions: [] };
declare const row: Flow;
const fields: string[] = row.capture_fields;
const position = row.graph.nodes[0]?.position;
declare const detail: FlowRunDetail;
const error: string | null = detail.error;
const finished: string | null = detail.finished_at;
const emitted: string | null | undefined = detail.steps[0]?.emitted_event;
async function consume() {
  const created: Flow = (await api.flows.create(create)).data.data;
  const deletion: FlowDeleteResponse = (await api.flows.delete('id')).data;
  const run: FlowRunResponse = (await api.runs.show('id')).data;
  const registry: ActiveTriggersResponse = (await api.activeTriggers({ service: 'lms' })).data;
  const validation: FlowValidationResponse = (await api.validate('id')).data;
  const sync: CatalogSyncResponse = (await api.syncCatalog()).data;
  const sent: EmitFlowEventResponse = (await api.emitEvent('checkout.completed', event)).data;
  const metadata: FlowIntegrationResponse = (await api.integration()).data;
  await api.importFlows(imported);
  await api.flows.update('id', { trigger_key: null, enabled: true });
  await api.runs.list({ limit: 0 });
  const operationRun: FlowRunResponse = (await api.operations.runShowGet('id')).data;
  const operationDelete: FlowDeleteResponse = (await api.operations.flowDestroyDelete('id')).data;
  // @ts-expect-error run list limit is numeric
  await api.runs.list({ limit: '50' });
  // @ts-expect-error event input is required
  await api.emitEvent('checkout.completed');
  return [created, deletion, run, registry, validation, sync, sent, metadata, operationRun, operationDelete];
}
void [create, imported, event, missingTrigger, legacy, fields, position, error, finished, emitted, consume];
