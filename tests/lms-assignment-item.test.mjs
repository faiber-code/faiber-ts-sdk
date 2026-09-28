import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { LmsApi } from '../packages/lms/dist/index.js';

test('assignment creation uses exercise id rather than its parent bank id', async () => {
  const tokens = new MemoryTokenProvider(); await tokens.setTokens({ accessToken: 'assignment-token' });
  const seen = [];
  const api = new LmsApi(new FaiberClient('lms', {
    domains: { lms: 'https://lms.example' }, tokenProvider: tokens,
    axios: { adapter: async config => {
      seen.push(config);
      return { status: 200, statusText: 'OK', headers: {}, config, data: { status: 'success', data: {} } };
    } },
  }));
  const item = { id: 'exercise-uuid', homework_id: 'parent-bank-uuid', question_text: 'Build traffic lights', status: 'active' };
  const controller = new AbortController();
  await api.homeworkAssignments.createForItem(item, { user_id: 'learner-uuid', status: 'pending', classroom_id: 'classroom-uuid' }, { signal: controller.signal });
  assert.equal(seen[0].url, '/api/v1/homeworks/assignments');
  assert.equal(seen[0].headers.get('Authorization'), 'Bearer assignment-token');
  assert.equal(seen[0].signal, controller.signal);
  assert.deepEqual(JSON.parse(seen[0].data), { user_id: 'learner-uuid', status: 'pending', classroom_id: 'classroom-uuid', homework_id: 'exercise-uuid' });
  assert.throws(() => api.homeworkAssignments.createForItem({ id: 'bank-uuid', status: 'active' }, { user_id: 'learner-uuid', status: 'pending' }), TypeError);
  assert.throws(() => api.homeworkAssignments.createForItem(item, { user_id: '', status: 'pending' }), TypeError);
  assert.equal(seen.length, 1);
});
