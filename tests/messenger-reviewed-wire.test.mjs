import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { FaiberClient } from '../packages/core/dist/index.js';
import { MessengerApi } from '../packages/messenger/dist/index.js';
import { messengerReviewedOperationContracts } from '../scripts/messenger-reviewed-operation-contracts.mjs';
const cases = JSON.parse(await readFile(new URL('./messenger-reviewed-operation-cases.json', import.meta.url)));
const inventory = JSON.parse(await readFile(new URL('../contracts/service-capabilities/messenger.json', import.meta.url)));
// Adapter regressions verify SDK wire construction/response preservation, not native runtime behavior.
test('Messenger reviewed ledger and adapter matrix cover all 47 mounted operations', () => {
 assert.equal(cases.length, 47);
 assert.deepEqual(cases.map(c => c.operation).sort(), inventory.operations.map(o => o.id).sort());
 assert.deepEqual(Object.keys(messengerReviewedOperationContracts).sort(), cases.map(c => `messenger:${c.operation}`).sort());
});
for (const item of cases) test(`Messenger reviewed adapter: ${item.operation}`, async () => {
 const seen = [];
 const api = new MessengerApi(new FaiberClient('messenger', {
  domains: { messenger: 'https://owned.invalid' }, getAuthorization: () => 'Bearer owned-test',
  axios: { withCredentials: true, adapter: async config => {
   seen.push(config);
   return { config, status: 200, statusText: 'OK', headers: { 'x-request-id': 'owned-fixture' }, data: item.response };
  } },
 }));
 const signal = new AbortController().signal;
 const options = { signal, timeout: 1700, headers: { 'x-fixture': 'owned', ...(item.name === 'serviceReadinessPost' ? { 'x-website-otp-token': 'owned-fixture-token' } : {}) } };
 const result = await api.operations[item.name](...item.args, options);
 assert.equal(seen.length, 1);
 const request = seen[0];
 assert.equal(request.method.toUpperCase(), item.method);
 assert.equal(request.url, item.path);
 assert.deepEqual(request.params, item.query ?? undefined);
 if (item.body !== null) assert.deepEqual(JSON.parse(request.data), item.body);
 else assert.equal(request.data, undefined);
 assert.equal(request.signal, signal);
 assert.equal(request.timeout, 1700);
 assert.equal(request.withCredentials, true);
 assert.equal(request.headers.get('authorization'), 'Bearer owned-test');
 assert.equal(request.headers.get('x-fixture'), 'owned');
 assert.deepEqual(result.data, item.response);
 assert.equal(result.status, 200);
 assert.equal(result.headers['x-request-id'], 'owned-fixture');
});
test('Messenger convenience creates and deletes preserve their distinct native result shapes', async () => {
 const seen = [];
 const api = new MessengerApi(new FaiberClient('messenger', { domains: { messenger: 'https://owned.invalid' }, getAuthorization: () => 'Bearer owned-test', axios: { adapter: async config => {
  seen.push(config);
  const data = config.method === 'post' ? { notification_ids: [2] } : {};
  return { config, status: 200, statusText: 'OK', headers: {}, data: { status: 'success', message: 'ok', data } };
 } } }));
 const input = { channel: 'email', template_name: 'welcome', recipient: 'user@example.invalid' };
 assert.deepEqual((await api.notifications.create(input)).data.data, { notification_ids: [2] });
 assert.deepEqual((await api.send(input)).data.data, { notification_ids: [2] });
 for (const resource of [api.channels, api.templates, api.providers]) assert.deepEqual((await resource.delete(2)).data.data, {});
 assert.equal(seen.length, 5);
 for (const req of seen) assert.equal(req.headers.get('authorization'), 'Bearer owned-test');
});
