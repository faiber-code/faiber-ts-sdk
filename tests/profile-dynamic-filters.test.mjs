import { test } from 'node:test';
import assert from 'node:assert/strict';
import axios from 'axios';
import { FaiberSDK, MemoryTokenProvider } from '../packages/sdk/dist/index.js';

test('generic profile filters preserve JSON clauses, arbitrary roles, authorization and cancellation', async () => {
  const seen = [];
  const sdk = new FaiberSDK({ domains: { profile: 'https://profile.test' },
    tokenProvider: new MemoryTokenProvider({ accessToken: 'filter-token' }),
    axios: { adapter: async config => { seen.push(config); return { data: { data: { profiles: [] }, meta: { total: 0 } }, status: 200, statusText: 'OK', headers: {}, config }; } } });
  const signal = new AbortController().signal;
  const filters = [
    { path: 'role', op: 'in', value: ['student', 'customer'] },
    { path: 'core.role', op: 'neq', value: 'teacher' },
    { path: 'core.account_balance', op: 'lt', value: 0 },
    { path: 'properties.double_debt', op: 'eq', value: true },
    { path: 'services.office.sync-user.enrollments.education_status_id', op: 'in', value: [2, 3] },
  ];
  const response = await sdk.profile.filterProfiles({ role: 'customer', filters, sort: [{ path: 'core.created_at', dir: 'desc' }], page: 2 }, { signal });
  assert.equal(response.status, 200);
  assert.equal(seen[0].url, '/api/v1/profile');
  assert.equal(seen[0].params['filter[role]'], 'customer');
  assert.deepEqual(JSON.parse(seen[0].params.filters), filters);
  assert.equal(seen[0].params.sort, '-core.created_at');
  assert.equal(seen[0].headers.get('Authorization'), 'Bearer filter-token');
  assert.equal(seen[0].signal, signal);
  await sdk.profile.operations.profileStudentIndexGet({ 'filter[birthday][]': ['2000-01-01', '2010-12-31'], sort: '-created_at' });
  const url = new URL(axios.getUri(seen[1]), 'https://profile.test');
  assert.deepEqual(url.searchParams.getAll('filter[birthday][]'), ['2000-01-01', '2010-12-31']);
});
