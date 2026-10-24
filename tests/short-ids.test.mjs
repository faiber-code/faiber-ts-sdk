import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { shortIdFromUuid, FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { LmsApi } from '../packages/lms/dist/index.js';
import { ProfileApi } from '../packages/profile/dist/index.js';
import { FaiberSDK, shortIdFromUuid as facadeShortId } from '../packages/sdk/dist/index.js';

const vectors = [["00000000-0000-0000-0000-000000000000", "NQL8A7"], ["00000000-0000-0000-0000-000000000001", "N8L7VL"], ["ffffffff-ffff-ffff-ffff-ffffffffffff", "V2GYHP"], ["550e8400-e29b-41d4-a716-446655440000", "GDCN7L"], ["019a1234-5678-7abc-8123-456789abcdef", "PJRUCW"]];
test('stable UUID-derived codes are six unambiguous characters in all public exports', () => {
  for (const [id, code] of vectors) {
    assert.equal(shortIdFromUuid(id), code);
    assert.equal(facadeShortId(id), code);
    assert.equal(shortIdFromUuid(id.toUpperCase()), code);
    assert.equal(shortIdFromUuid(id.replaceAll('-', '')), code);
    assert.match(code, /^[2-9A-HJ-NP-Z]{6}$/);
  }
  for (const invalid of ['', 'hello', 'GDCN7L', '550e8400--e29b41d4-a716-446655440000', '550e8400-e29b-41d4-a716-44665544000g', null, 7]) {
    assert.throws(() => shortIdFromUuid(invalid), TypeError);
  }
});

test('collision fixture remains non-unique across runtimes', () => {
  const [a, b, code] = ["666b931f-ad22-5b7f-a299-52122b3ea69d", "fac3955e-4ddc-5db3-a525-bf9d83196585", "XWGZF2"];
  assert.notEqual(a, b);
  assert.equal(shortIdFromUuid(a), code);
  assert.equal(shortIdFromUuid(b), code);
});

test('Rust and SQL v1 algorithms stay identical between independently deployed services', { skip: !existsSync(new URL('../../Service/infera-lms/src/short_id.rs', import.meta.url)) || !existsSync(new URL('../../Service/infera-profile/src/short_id.rs', import.meta.url)) }, () => {
  const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
  assert.equal(read('../../Service/infera-lms/src/short_id.rs'), read('../../Service/infera-profile/src/short_id.rs'));
  const sql = path => read(path).split('CREATE INDEX')[0];
  assert.equal(sql('../../Service/infera-lms/migration/src/m20261024_000051_short_ids.sql'), sql('../../Service/infera-profile/migration/src/m20261024_000022_short_ids.sql'));
});

test('search helpers preserve identifiers, auth, filters, options, pagination and all collisions', async () => {
  const tokens = new MemoryTokenProvider();
  await tokens.setTokens({ accessToken: 'short-id-test-token' });
  const seen = [];
  const [first, second, code] = ["666b931f-ad22-5b7f-a299-52122b3ea69d", "fac3955e-4ddc-5db3-a525-bf9d83196585", "XWGZF2"];
  const config = { domains: { lms: 'https://lms.example', profile: 'https://profile.example' }, tokenProvider: tokens,
    axios: { adapter: async request => {
      seen.push(request);
      const rows = [first, second].map(id => ({ id, user_id: id, short_id: code }));
      const body = request.url === '/api/v1/classrooms'
        ? { data: { data: rows, meta: { page: 1, page_size: 20, total_items: 2, total_pages: 1 } } }
        : { data: { profiles: rows }, meta: { current_page: 1, per_page: 20, total: 2, last_page: 1 } };
      return { status: 200, statusText: 'OK', headers: { 'x-request-id': 'short-id-request' }, config: request, data: body };
    } },
  };
  const lms = new LmsApi(new FaiberClient('lms', config));
  const profile = new ProfileApi(new FaiberClient('profile', config));
  const sdk = new FaiberSDK(config);
  const controller = new AbortController();
  const options = { signal: controller.signal, timeout: 1234 };
  for (const api of [lms, sdk.lms]) {
    const response = await api.searchClassrooms({ search: code.toLowerCase(), course_id: first, 'page[size]': 20 }, options);
    assert.equal(response.data.data.data.length, 2);
    assert.equal(response.data.data.data[1].id, second);
    assert.equal(response.data.data.data[0].short_id, code);
    assert.equal(response.headers['x-request-id'], 'short-id-request');
  }
  for (const api of [profile, sdk.profile]) {
    const response = await api.searchProfiles({ search: code.toLowerCase(), role: 'student', page: 1, per_page: 20 }, options);
    assert.equal(response.data.data.profiles.length, 2);
    assert.equal(response.data.meta.total, 2);
    assert.equal(response.data.data.profiles[1].short_id, code);
  }
  assert.equal(seen.length, 4);
  for (const request of seen) {
    assert.equal(request.headers.get('Authorization'), 'Bearer short-id-test-token');
    assert.equal(request.signal, controller.signal);
    assert.equal(request.timeout, 1234);
    if (request.url === '/api/v1/classrooms') {
      assert.deepEqual(request.params, { search: code.toLowerCase(), course_id: first, 'page[size]': 20 });
    } else {
      assert.equal(request.url, '/api/v1/profile');
      assert.deepEqual(request.params, { 'filter[search]': code.toLowerCase(), 'filter[role]': 'student', page: 1, per_page: 20, filters: '[]' });
    }
  }
});
