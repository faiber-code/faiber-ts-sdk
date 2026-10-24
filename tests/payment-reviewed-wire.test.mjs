import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { FaiberClient } from '../packages/core/dist/index.js';
import { PaymentApi } from '../packages/payment/dist/index.js';
import { paymentReviewedOperationContracts } from '../scripts/payment-reviewed-operation-contracts.mjs';
const cases = JSON.parse(await readFile(new URL('./payment-reviewed-operation-cases.json', import.meta.url)));
const inventory = JSON.parse(await readFile(new URL('../contracts/service-capabilities/payment.json', import.meta.url)));
// Owned adapters validate transport preservation only. Native/provider acceptance is separately gated.
test('Payment source ledger and adapter cases cover all 36 mounted operations', () => {
 assert.equal(cases.length, 36);
 assert.deepEqual(cases.map(c => c.operation).sort(), inventory.operations.map(o => o.id).sort());
 assert.deepEqual(Object.keys(paymentReviewedOperationContracts).sort(), cases.map(c => `payment:${c.operation}`).sort());
});
for (const item of cases) test(`Payment reviewed adapter: ${item.operation}`, async () => {
 const seen = [];
 const api = new PaymentApi(new FaiberClient('payment', {
  domains: { payment: 'https://owned.invalid' }, getAuthorization: () => 'Bearer owned-fixture',
  axios: { withCredentials: true, adapter: async config => {
   seen.push(config);
   return { config, status: 200, statusText: 'OK', headers: { 'x-request-id': 'owned-fixture' }, data: item.response };
  } },
 }));
 const signal = new AbortController().signal;
 const options = { signal, timeout: 1700, headers: { 'x-fixture': 'owned', 'x-asset-payment-token': 'owned-fixture-token' } };
 const result = await api.operations[item.name](...item.args, options);
 assert.equal(seen.length, 1);
 const request = seen[0];
 assert.equal(request.method.toUpperCase(), item.method);
 assert.equal(request.url, item.path);
 assert.deepEqual(request.params, item.query ?? undefined);
 assert.deepEqual(item.body === null ? request.data : JSON.parse(request.data), item.body === null ? undefined : item.body);
 assert.equal(request.responseType, item.text ? 'text' : undefined);
 assert.equal(request.signal, signal);
 assert.equal(request.timeout, 1700);
 assert.equal(request.withCredentials, true);
 assert.equal(request.headers.get('authorization'), 'Bearer owned-fixture');
 assert.equal(request.headers.get('x-asset-payment-token'), 'owned-fixture-token');
 assert.deepEqual(result.data, item.response);
 assert.equal(result.status, 200);
 assert.equal(result.headers['x-request-id'], 'owned-fixture');
});
test('Payment convenience detail and transaction calls preserve request options without phantom queries', async () => {
 const seen = [];
 const api = new PaymentApi(new FaiberClient('payment', { domains: { payment: 'https://owned.invalid' }, getAuthorization: () => 'Bearer owned', axios: { adapter: async config => {
  seen.push(config); return { config, status: 200, statusText: 'OK', headers: {}, data: { status: 'success', message: 'ok', data: { status: 'pending' } } };
 } } }));
 const signal = new AbortController().signal;
 await api.gateways.show(7, { signal, timeout: 1200 });
 const response = await api.transactions.show('00000000-0000-4000-8000-000000000007', { signal, timeout: 1200 });
 assert.equal(response.data.data.status, 'pending');
 for (const req of seen) { assert.equal(req.params, undefined); assert.equal(req.signal, signal); assert.equal(req.timeout, 1200); }
});
test('Payment raw callback redirects preserve status, Location and empty text body', async () => {
 const api = new PaymentApi(new FaiberClient('payment', { domains: { payment: 'https://owned.invalid' }, axios: { adapter: async config => ({ config, status: 303, statusText: 'See Other', headers: { location: 'https://merchant.invalid/result' }, data: '' }) } }));
 const response = await api.operations.paymentWebCallbackPost('mock', { Authority: 'owned-fixture' }, { maxRedirects: 0, validateStatus: status => status === 303 });
 assert.equal(response.status, 303);
 assert.equal(response.headers.location, 'https://merchant.invalid/result');
 assert.equal(response.data, '');
});
