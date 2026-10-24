import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { LmsApi } from '../packages/lms/dist/index.js';

async function fixture(data = { status: 'success', message: 'ok', data: {} }) {
  const requests = [];
  const tokens = new MemoryTokenProvider();
  await tokens.setTokens({ accessToken: 'lms-audit-token' });
  const api = new LmsApi(new FaiberClient('lms', {
    domains: { lms: 'https://lms.example.invalid' }, tokenProvider: tokens,
    axios: { adapter: async config => {
      requests.push(config);
      return { status: 200, statusText: 'OK', headers: { 'x-request-id': 'lms-source-review' }, config, data };
    } },
  }));
  return { api, requests };
}

test('LMS raw image downloads select bytes and preserve the authenticated Axios response', async () => {
  const bytes = new Uint8Array([0, 255, 1]);
  const { api, requests } = await fixture(bytes);
  const response = await api.operations.mediaDownloadImageGet('image.png');
  assert.equal(requests[0].responseType, 'arraybuffer');
  assert.equal(requests[0].headers.get('Authorization'), 'Bearer lms-audit-token');
  assert.equal(response.data, bytes);
  assert.equal(response.headers['x-request-id'], 'lms-source-review');
  await api.operations.brandingAssetGet('logo.webp');
  assert.equal(requests[1].responseType, 'arraybuffer');
});

test('LMS SVG downloads select text and preserve the public code path', async () => {
  const { api, requests } = await fixture('<svg/>');
  const response = await api.certificateSvg('legacy/code');
  assert.equal(requests[0].url, '/api/v1/public/certificates/legacy%2Fcode/image.svg');
  assert.equal(requests[0].responseType, 'text');
  assert.equal(response.data, '<svg/>');
});

test('LMS unmounted legacy resources reject locally, while mounted course deletes return the backend envelope', async () => {
  const { api, requests } = await fixture();
  for (const resource of [api.videoSections, api.events, api.textTemplates, api.interactiveContent]) {
    await assert.rejects(async () => resource.list());
    await assert.rejects(async () => resource.create({}));
  }
  assert.equal(requests.length, 0);
  const response = await api.courses.delete('course-id');
  assert.equal(requests[0].method, 'delete');
  assert.equal(requests[0].url, '/api/v1/courses/course-id');
  assert.deepEqual(response.data.data, {});
  await api.courseCategories.delete('category-id');
  assert.equal(requests[1].url, '/api/v1/courses/categories/category-id');
});

test('LMS exam session PATCH retains explicit null and filters retain comma-separated statuses', async () => {
  const { api, requests } = await fixture();
  await api.examSessions.update('session-id', { classroom_id: null, teacher_user_id: null, questions_count: null });
  assert.deepEqual(JSON.parse(requests[0].data), { classroom_id: null, teacher_user_id: null, questions_count: null });
  await api.listAssignments({ course_id: 'course-id', statuses: ['assigned', 'submitted'] });
  assert.deepEqual(requests[1].params, { course_id: 'course-id', status: 'assigned,submitted' });
});
