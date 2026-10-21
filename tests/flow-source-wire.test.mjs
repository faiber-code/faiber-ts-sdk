import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { FlowApi } from '../packages/flow/dist/index.js';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { flowReviewedOperationContracts } from '../scripts/flow-reviewed-operation-contracts.mjs';
const matrix = JSON.parse(readFileSync(new URL('./fixtures/flow-source-operation-matrix.json', import.meta.url), 'utf8'));
function fixture() {
  const seen = [];
  const reply = { value: { status: 'success', message: 'ok', data: {} }, status: 200 };
  const api = new FlowApi(new FaiberClient('flow', {
    domains: { flow: 'https://flow.example.test' },
    tokenProvider: new MemoryTokenProvider({ accessToken: 'flow-test-token' }),
    axios: { adapter: async config => {
      seen.push(config);
      return { data: reply.value, status: reply.status, statusText: 'fixture', headers: { 'x-request-id': 'flow-fixture' }, config };
    } },
  }));
  return { api, seen, reply };
}
// Prepared adapter fixtures only: no native/gateway behavior is certified by this suite.
test('Flow all 18 mounted operations preserve exact method/path/body/query and shared authenticated Axios transport', async () => {
  assert.equal(matrix.length, 18);
  assert.equal(new Set(matrix.map(row => row.operation)).size, 18);
  assert.deepEqual(new Set(matrix.map(row => `flow:${row.operation}`)), new Set(Object.keys(flowReviewedOperationContracts)));
  for (const row of matrix) {
    const { api, seen, reply } = fixture();
    const args = row.pathArgs.map(() => 'record/id');
    const body = row.inputType === 'CreateFlowInput' ? { name: 'Checkout', trigger_key: 'event.checkout.completed' }
      : row.inputType === 'ImportFlowsInput' ? { dry_run: true, event_bridges: [{ name: 'Ledger', event_key: 'checkout.completed', target_service: 'ledger', target_event: 'ledger.credit', payload: {} }] }
      : row.inputType === 'UpdateFlowInput' ? { enabled: true, slug: null } : { total: 12, tags: ['paid'] };
    if (row.hasBody) args.push(body);
    const query = row.queryType === 'FlowRunsQuery' ? { limit: 0 } : { service: 'lms' };
    if (row.hasQuery) args.push(query);
    const signal = new AbortController().signal;
    args.push({ signal, timeout: 1729, withCredentials: true, headers: { 'x-request-id': 'flow-call' } });
    reply.value = { status: 'success', message: 'ok', data: { operation: row.operation } };
    const result = await api.operations[row.methodName](...args);
    assert.equal(seen.length, 1, row.operation);
    const sent = seen[0];
    assert.equal(sent.method.toUpperCase(), row.method, row.operation);
    assert.equal(sent.url, row.path.replace(/\{\w+\}/g, 'record%2Fid'), row.operation);
    assert.equal(sent.headers.get('Authorization'), 'Bearer flow-test-token');
    assert.equal(sent.headers.get('x-request-id'), 'flow-call');
    assert.equal(sent.signal, signal);
    assert.equal(sent.timeout, 1729);
    assert.equal(sent.withCredentials, true);
    if (row.hasBody) assert.deepEqual(JSON.parse(sent.data), body, row.operation);
    if (row.hasQuery) assert.deepEqual(sent.params, query, row.operation);
    assert.equal(result.data, reply.value);
    assert.equal(result.status, 200);
    assert.equal(result.headers['x-request-id'], 'flow-fixture');
  }
});

test('Flow convenience methods use concrete registry/run/delete/validation/sync/import envelopes', async () => {
  const { api, seen, reply } = fixture();
  reply.value = { status: 'success', message: 'ok', data: { version: 9, triggers: [{ trigger_key: 'endpoint.lms.GET.api.v1.courses', capture_fields: ['event.user_id'] }] } };
  const registry = await api.activeTriggers({ service: 'lms' });
  assert.equal(registry.data.data.version, 9);
  assert.deepEqual(seen[0].params, { service: 'lms' });
  reply.value = { status: 'success', message: 'ok', data: { id: 'run', flow_id: 'flow', trigger_event_id: 'event', status: 'failed', error: 'publish failed', started_at: '2026-10-21T00:00:00Z', finished_at: null, context: null, steps: [{ id: 'step', node_id: 'emit', condition_passed: true, emitted_event: null, payload: null, created_at: '2026-10-21T00:00:00Z' }] } };
  const run = await api.runs.show('run/id');
  assert.equal(run.data.data.id, 'run');
  assert.equal(run.data.data.context, null);
  assert.equal(run.data.data.steps[0].payload, null);
  assert.equal(seen[1].url, '/api/v1/runs/run%2Fid');
  await api.runs.list({ limit: 1 });
  assert.deepEqual(seen[2].params, { limit: 1 });
  reply.value = { status: 'success', message: 'ok', data: { deleted: true } };
  assert.equal((await api.flows.delete('flow/id')).data.data.deleted, true);
  reply.value = { status: 'success', message: 'ok', data: { valid: false, errors: ['graph must have a trigger node'] } };
  assert.equal((await api.validate('flow')).data.data.valid, false);
  reply.value = { status: 'success', message: 'ok', data: { triggers: 2, actions: 1, succeeded_services: [], failed_services: [{ service: 'ledger', source: 'actions', error: 'HTTP 503' }] } };
  assert.equal((await api.syncCatalog()).data.data.failed_services[0].service, 'ledger');
  await api.importFlows({ dry_run: true, flows: [] });
  assert.deepEqual(JSON.parse(seen.at(-1).data), { dry_run: true, flows: [] });
  await api.flows.update('flow', { enabled: false, name: null });
  assert.equal(seen.at(-1).method, 'put');
  assert.deepEqual(JSON.parse(seen.at(-1).data), { enabled: false, name: null });
  assert.throws(() => api.runs.create({}), /not registered/);
});

test('Flow event JSON null is encoded and accepted HTTP200 stays distinct from execution success', async () => {
  const { api, seen, reply } = fixture();
  reply.value = { status: 'success', message: 'ok', data: { accepted: true, event_id: 'event', trigger_key: 'event.checkout.completed' } };
  const emitted = await api.emitEvent('checkout.completed', null);
  assert.equal(seen[0].data, 'null');
  assert.equal(emitted.status, 200);
  assert.equal(emitted.data.data.accepted, true);
  await api.operations.eventEmitPost('checkout.completed', null);
  assert.equal(seen[1].data, 'null');
  await api.emitEvent('checkout.completed', 'paid');
  assert.equal(seen[2].data, '"paid"');
  await api.operations.eventEmitPost('checkout.completed', 42);
  assert.equal(seen[3].data, '42');
  assert.equal(seen[3].headers.get('Content-Type'), 'application/json');
});

test('Flow cookie-only clients preserve authorization transport and cancellation', async () => {
  const seen = [];
  const api = new FlowApi(new FaiberClient('flow', { domains: { flow: 'https://flow.example.test' }, axios: { withCredentials: true, adapter: async config => { seen.push(config); return { data: { status: 'success', message: 'ok', data: [] }, status: 200, statusText: 'OK', headers: {}, config }; } } }));
  const controller = new AbortController();
  await api.flows.list(undefined, { signal: controller.signal });
  assert.equal(seen[0].withCredentials, true);
  assert.equal(seen[0].signal, controller.signal);
  controller.abort();
  await assert.rejects(api.operations.runIndexGet(undefined, { signal: controller.signal }), error => error.code === 'ERR_CANCELED');
  assert.equal(seen.length, 1);
});
