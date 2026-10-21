import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { SessionApi } from '../packages/session/dist/index.js';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';

// Prepared SDK adapter fixtures only; no native/gateway authorization claim.
const matrix = JSON.parse(readFileSync(new URL('./fixtures/session-source-operation-matrix.json', import.meta.url), 'utf8'));
function fixture() {
  const seen = [];
  const api = new SessionApi(new FaiberClient('session', {
    domains: { session: 'https://session.example.test' },
    tokenProvider: new MemoryTokenProvider({ accessToken: 'session-test-token' }),
    axios: { adapter: async config => {
      seen.push(config);
      return { data: { status: 'success', message: 'fixture', data: { marker: true } }, status: 200, statusText: 'OK', headers: { 'x-request-id': 'session-fixture' }, config };
    } },
  }));
  return { api, seen };
}

test('Session all 45 mounted operations preserve method, path, query/body, token and Axios context', async () => {
  assert.equal(matrix.length, 45);
  assert.equal(new Set(matrix.map(row => row.operation)).size, 45);
  for (const row of matrix) {
    const { api, seen } = fixture();
    assert.ok(row.methodName, row.operation);
    const args = row.pathArgs.map(id => id === 'service' ? 'chat' : id === 'path' ? 'conversations/room 1/messages' : 'record/id');
    if (row.dynamicMethod) args.push('GET');
    const body = row.multipart ? new FormData() : row.binary ? new Uint8Array([1, 2, 3]) : row.dynamicMethod ? undefined : { marker: 'body' };
    if (row.hasBody) args.push(body);
    const query = { page_number: 2, page_size: 5, search: 'یادگیری', custom_only: true, q: 'room', limit: 7 };
    if (row.hasQuery) args.push(query);
    const signal = new AbortController().signal;
    args.push({ signal, timeout: 12345, withCredentials: true, headers: { 'x-request-id': 'session-call' } });
    const result = await api.operations[row.methodName](...args);
    assert.equal(seen.length, 1, row.operation);
    const sent = seen[0];
    const expectedPath = row.path.replace(/\{\*?(\w+)\}/g, (_, id) => id === 'service' ? 'chat' : id === 'path' ? 'conversations/room%201/messages' : 'record%2Fid');
    assert.equal(sent.url, expectedPath, row.operation);
    assert.equal(sent.method.toUpperCase(), row.method, row.operation);
    assert.equal(sent.headers.get('Authorization'), 'Bearer session-test-token', row.operation);
    assert.equal(sent.headers.get('x-request-id'), 'session-call', row.operation);
    assert.equal(sent.signal, signal);
    assert.equal(sent.timeout, 12345);
    assert.equal(sent.withCredentials, true);
    if (row.hasQuery) assert.deepEqual(sent.params, query, row.operation);
    if (row.hasBody && !row.multipart && !row.binary && !row.dynamicMethod) assert.deepEqual(JSON.parse(sent.data), body, row.operation);
    if (row.multipart) assert.equal(sent.data, body);
    if (row.binary) assert.deepEqual(Array.from(new Uint8Array(sent.data)), [1, 2, 3], row.operation);
    if (row.binaryDownload || row.dynamicMethod) assert.equal(sent.responseType, 'arraybuffer');
    assert.equal(result.status, 200);
    assert.equal(result.headers.get('x-request-id'), 'session-fixture');
    assert.deepEqual(result.data.data, { marker: true });
  }
});

test('Session convenience room resource uses native query, create input and deleted-room envelope', async () => {
  const { api, seen } = fixture();
  const response = await api.rooms.list({ page_number: 1, page_size: 10, custom_only: false });
  assert.deepEqual(seen[0].params, { page_number: 1, page_size: 10, custom_only: false });
  assert.equal(response.status, 200);
  await api.rooms.create({ name: 'Weekly class', capacity: 20, starts_at: '2026-10-21T12:00:00' });
  assert.deepEqual(JSON.parse(seen[1].data), { name: 'Weekly class', capacity: 20, starts_at: '2026-10-21T12:00:00' });
  const deleted = await api.rooms.delete('room/id');
  assert.equal(seen[2].url, '/api/v1/rooms/room%2Fid');
  assert.deepEqual(deleted.data.data, { marker: true });
});
