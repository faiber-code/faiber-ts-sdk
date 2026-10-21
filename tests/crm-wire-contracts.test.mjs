import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CrmApi } from '../packages/crm/dist/index.js';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';

// Compiled SDK transport fixtures. They do not run or certify the Rust backend.
function fixture() {
  const seen = []; const replies = new Map();
  const client = new FaiberClient('crm', {
    domains: { crm: 'https://crm.test' },
    tokenProvider: new MemoryTokenProvider({ accessToken: 'crm-wire-token' }),
    axios: { withCredentials: true, adapter: async config => {
      seen.push(config);
      return { data: replies.get(config.url) ?? { data: null, meta: { request_id: 'crm-fixture' } },
        status: 200, statusText: 'OK', headers: { 'x-request-id': 'crm-fixture' }, config };
    } },
  });
  return { api: new CrmApi(client), seen, replies };
}

test('CRM preserves JSON DELETE/version and compatibility deletion payload differences', async () => {
  const { api, seen, replies } = fixture();
  const headers = { 'Idempotency-Key': 'delete-team-1' }; const signal = new AbortController().signal;
  replies.set('/api/v1/teams/team%2Fid', { data: { id: 'team/id', deleted: true }, meta: { request_id: 'r1' } });
  const deleted = await api.deleteTeam('team/id', { version: 4 }, { headers, signal });
  assert.equal(seen[0].method, 'delete'); assert.equal(seen[0].url, '/api/v1/teams/team%2Fid');
  assert.deepEqual(JSON.parse(seen[0].data), { version: 4 });
  assert.equal(seen[0].headers.get('Idempotency-Key'), 'delete-team-1'); assert.equal(seen[0].signal, signal);
  assert.deepEqual(deleted.data.data, { id: 'team/id', deleted: true });
  replies.set('/api/v1/workflow-node/node', { data: true, meta: { request_id: 'r2' } });
  assert.equal((await api.deleteWorkflowNode('node')).data.data, true);
  replies.set('/api/v1/leads/lead/reminders', { data: { lead_id: 'lead', deleted: 3 }, meta: { request_id: 'r3' } });
  assert.equal((await api.deleteLeadReminders('lead')).data.data.deleted, 3);
  assert.ok(seen.every(config => config.headers.get('Authorization') === 'Bearer crm-wire-token' && config.withCredentials));
});

test('CRM keeps lead scalar filters and report period query on bodyless POST', async () => {
  const { api, seen } = fixture();
  const query = { statuses: 'new,working', profile_id: 'profile', active_from: '2026-10-01T00:00:00Z', sort: 'created_at_desc', limit: 10 };
  await api.listLightLeads(query);
  assert.deepEqual(seen[0].params, query);
  const period = { period_start: '2026-10-01T00:00:00Z', period_end: '2026-10-21T00:00:00Z' };
  await api.refreshReports(period, { headers: { 'Idempotency-Key': 'report-refresh-1' } });
  assert.equal(seen[1].method, 'post'); assert.deepEqual(seen[1].params, period); assert.equal(seen[1].data, undefined);
});

test('CRM null patch fields and nested reminder body retain wire semantics', async () => {
  const { api, seen } = fixture();
  await api.updateWorkflow('workflow', { team_id: null, hint: null, actions: null });
  assert.deepEqual(JSON.parse(seen[0].data), { team_id: null, hint: null, actions: null });
  await api.updateWorkflowNode('workflow', 'node', { sla_minutes: null, actions: null });
  assert.deepEqual(JSON.parse(seen[1].data), { sla_minutes: null, actions: null });
  const body = { activity: { activity_type: 'call', metadata: { nested: ['value'] } }, reminder: { title: 'Follow up', priority: 'high' } };
  await api.createActivityWithReminder(body, { headers: { 'Idempotency-Key': 'reminder-1' } });
  assert.deepEqual(JSON.parse(seen[2].data), body);
});

test('CRM raw health and nullable Office legacy payloads remain unwrapped', async () => {
  const { api, seen, replies } = fixture();
  const health = { status: 'success', message: 'Service running', data: { version: '1' } };
  replies.set('/health', health);
  assert.deepEqual((await api.operations.routerStatusRouteGetHealth()).data, health);
  const office = { status: 'success', message: 'Office lead lookup completed', data: null };
  replies.set('/api/v1/integration/office/leads/find', office);
  assert.deepEqual((await api.findOfficeLead({ profile_id: 'profile', foreign_key: 'external', flags: 'a,b' })).data, office);
  assert.deepEqual(seen[1].params, { profile_id: 'profile', foreign_key: 'external', flags: 'a,b' });
});
