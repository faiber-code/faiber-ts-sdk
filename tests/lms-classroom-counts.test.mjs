import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { LmsApi } from '../packages/lms/dist/index.js';
import { FaiberSDK } from '../packages/sdk/dist/index.js';

test('all classroom listing entry points preserve counts, capacity, pagination, auth and cancellation', async () => {
  const tokens = new MemoryTokenProvider();
  await tokens.setTokens({ accessToken: 'counts-token' });
  const seen = [];
  const payload = { status: 'success', data: { data: [
    { id: 'full', student_count: 18, capacity: 25 },
    { id: 'empty', student_count: 0, capacity: null },
    { id: 'zero-limit', student_count: 1, capacity: 0 },
  ], meta: { page: 2, page_size: 3, total_items: 6, total_pages: 2 } } };
  const config = {
    domains: { lms: 'https://lms.example' }, tokenProvider: tokens,
    axios: { adapter: async request => {
      seen.push(request);
      return { status: 200, statusText: 'OK', headers: { 'x-request-id': 'count-request' }, config: request, data: payload };
    } },
  };
  const api = new LmsApi(new FaiberClient('lms', config));
  const sdk = new FaiberSDK(config);
  const controller = new AbortController();
  const query = { 'page[number]': 2, 'page[size]': 3, status: 'active' };
  for (const list of [api.listClassrooms.bind(api), api.operations.classroomIndexClassroomGet.bind(api.operations), api.classrooms.list.bind(api.classrooms), sdk.lms.listClassrooms.bind(sdk.lms)]) {
    const response = await list(query, { signal: controller.signal });
    assert.deepEqual(response.data, payload);
    assert.equal(response.headers['x-request-id'], 'count-request');
    assert.equal(response.status, 200);
  }
  assert.equal(seen.length, 4); // exactly one request per list; no per-classroom enrollment calls
  for (const request of seen) {
    assert.equal(request.url, '/api/v1/classrooms');
    assert.equal(request.headers.get('Authorization'), 'Bearer counts-token');
    assert.equal(request.signal, controller.signal);
    assert.deepEqual(request.params, query);
  }
});
