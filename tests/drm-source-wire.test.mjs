import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DrmApi } from '../packages/drm/dist/index.js';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';

// Prepared transport fixtures: these do not run or certify the native backend/gateway.
const matrix = JSON.parse(readFileSync(new URL('./fixtures/drm-source-operation-matrix.json', import.meta.url), 'utf8'));
function fixture() {
  const seen = [];
  const reply = { value: { raw: true }, status: 200 };
  const api = new DrmApi(new FaiberClient('drm', {
    domains: { drm: 'https://drm.example.test' },
    tokenProvider: new MemoryTokenProvider({ accessToken: 'drm-test-token' }),
    axios: { adapter: async config => {
      seen.push(config);
      return { data: reply.value, status: reply.status, statusText: 'fixture', headers: { 'x-request-id': 'drm-fixture', 'content-range': 'bytes 0-2/20' }, config };
    } },
  }));
  return { api, seen, reply };
}

test('DRM all 96 mounted operations preserve method, path, input/query, identity and Axios response', async () => {
  assert.equal(matrix.length, 96);
  assert.equal(new Set(matrix.map(x => x.operation)).size, 96);
  for (const row of matrix) {
    const { api, seen, reply } = fixture();
    const args = row.pathArgs.map(id => id === 'part_number' ? 2 : id === 'path' ? 'video/segment 1.m4s' : 'record/id');
    const body = row.binary ? new Uint8Array([1, 2, 3]) : row.multipart ? new FormData() : {};
    if (row.hasBody) args.push(body);
    const query = row.hasQuery ? { ids: 'media-1,media-2', package_id: 'package-1', page: 2, size: 5 } : undefined;
    if (row.hasQuery) args.push(query);
    const signal = new AbortController().signal;
    args.push({ signal, timeout: 12345, withCredentials: true, headers: { 'x-request-id': 'drm-call' } });
    reply.value = row.noContent ? undefined : row.binaryDownload ? new ArrayBuffer(3) : { source: row.operation };
    reply.status = row.noContent ? 204 : row.binaryDownload ? 206 : 200;
    const result = await api.operations[row.methodName](...args);
    assert.equal(seen.length, 1, row.operation);
    const sent = seen[0];
    assert.equal(sent.method.toUpperCase(), row.method, row.operation);
    const expectedPath = row.path.replace(/\{\*?(\w+)\}/g, (_, id) => id === 'path' ? 'video/segment%201.m4s' : id === 'part_number' ? '2' : 'record%2Fid');
    assert.equal(sent.url, expectedPath, row.operation);
    assert.equal(sent.headers.get('Authorization'), 'Bearer drm-test-token', row.operation);
    assert.equal(sent.headers.get('x-request-id'), 'drm-call');
    assert.equal(sent.signal, signal);
    assert.equal(sent.timeout, 12345);
    assert.equal(sent.withCredentials, true);
    if (row.hasQuery) assert.deepEqual(sent.params, query, row.operation);
    if (row.hasBody && !row.binary && !row.multipart) assert.deepEqual(JSON.parse(sent.data), body, row.operation);
    if (row.binary) assert.equal(sent.headers.get('Content-Type'), 'application/octet-stream');
    if (row.binaryDownload) assert.equal(sent.responseType, 'arraybuffer');
    assert.equal(result.data, reply.value, row.operation);
    assert.equal(result.status, reply.status);
    assert.equal(result.headers['x-request-id'], 'drm-fixture');
  }
});

test('DRM convenience uploads image multipart metadata and typed binary session chunks', async () => {
  const { api, seen } = fixture();
  await api.uploadMedia({ file: new Blob(['image'], { type: 'image/png' }), filename: 'cover.png', name: 'Cover', folder_id: null, tag_ids: ['tag-1'] });
  assert.ok(seen[0].data instanceof FormData);
  assert.equal(seen[0].data.get('file').name, 'cover.png');
  assert.equal(seen[0].data.get('file').type, 'image/png');
  assert.equal(seen[0].data.get('folder_id'), '');
  assert.equal(seen[0].data.get('tag_ids'), '["tag-1"]');
  await api.uploadPart('session/id', 2, new Uint8Array([0, 1]));
  assert.equal(seen[1].url, '/api/v1/upload-sessions/session%2Fid/parts/2');
  assert.equal(seen[1].headers.get('Content-Type'), 'application/octet-stream');
});

test('DRM required query values, nullable/default bodies, ranges and no-content deletes remain exact', async () => {
  const { api, seen, reply } = fixture();
  await api.drmStatuses({ ids: 'one,two' });
  await api.clearKeyLicense({ package_id: 'package-id' });
  await api.regenerateMediaPackages('media-id', null);
  await api.retryPackageJob('job-id', undefined);
  await api.startMixedMediaAnalysis('mixed-id', undefined);
  await api.updateMedia('media-id', { folder_id: null });
  assert.deepEqual(seen[0].params, { ids: 'one,two' });
  assert.deepEqual(seen[1].params, { package_id: 'package-id' });
  assert.equal(seen[2].data, 'null');
  assert.equal(seen[3].data, undefined);
  assert.equal(seen[4].data, undefined);
  assert.deepEqual(JSON.parse(seen[5].data), { folder_id: null });
  reply.value = new ArrayBuffer(3); reply.status = 206;
  const bytes = await api.packageFile('package/id', 'video/segment 1.m4s', { headers: { Range: 'bytes=0-2' } });
  assert.equal(bytes.data.byteLength, 3);
  assert.equal(bytes.status, 206);
  assert.equal(bytes.headers['content-range'], 'bytes 0-2/20');
  assert.equal(seen.at(-1).headers.get('Range'), 'bytes=0-2');
  reply.value = undefined; reply.status = 204;
  const deleted = await api.deleteMedia('media-id');
  assert.equal(deleted.data, undefined);
  assert.equal(deleted.status, 204);
});

test('DRM wildcard traversal is rejected and cancellation prevents transport', async () => {
  const { api, seen } = fixture();
  for (const bad of ['../segment', 'video//segment', 'video/%2e%2e', 'video\\segment', 'video/segment?x=1', '']) {
    assert.throws(() => api.packageFile('package', bad), TypeError);
  }
  const controller = new AbortController(); controller.abort();
  await assert.rejects(api.media(undefined, { signal: controller.signal }), error => error.code === 'ERR_CANCELED');
  assert.equal(seen.length, 0);
});
