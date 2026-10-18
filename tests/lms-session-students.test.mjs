import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { LmsApi } from '../packages/lms/dist/index.js';

test('session creation APIs send selected students with authentication and cancellation', async () => {
  const tokens = new MemoryTokenProvider();
  await tokens.setTokens({ accessToken: 'session-token' });
  const seen = [];
  const api = new LmsApi(new FaiberClient('lms', {
    domains: { lms: 'https://lms.example' }, tokenProvider: tokens,
    axios: { adapter: async config => {
      seen.push(config);
      return { status: 200, statusText: 'OK', headers: {}, config, data: { status: 'success', data: { student_user_ids: ['student-a', 'student-b'] } } };
    } },
  }));
  const payload = { classroom_id: 'classroom', student_user_ids: ['student-a', 'student-b'], status: 'active' };
  const controller = new AbortController();
  const response = await api.classroomSessions.create(payload, { signal: controller.signal });
  await api.operations.classroomStoreSessionPost(payload, { signal: controller.signal });
  assert.equal(response.status, 200);
  assert.deepEqual(response.data.data.student_user_ids, payload.student_user_ids);
  for (const config of seen) {
    assert.equal(config.url, '/api/v1/classrooms/sessions');
    assert.equal(config.headers.get('Authorization'), 'Bearer session-token');
    assert.equal(config.signal, controller.signal);
    assert.deepEqual(JSON.parse(config.data), payload);
  }
  await api.classroomSessions.create({ classroom_id: 'classroom', status: 'active' });
  assert.equal('student_user_ids' in JSON.parse(seen[2].data), false);
});
