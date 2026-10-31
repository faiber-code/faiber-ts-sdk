import test from 'node:test';
import assert from 'node:assert/strict';
import { AxiosError } from 'axios';
import { FaiberSDK, MemoryTokenProvider } from '../packages/sdk/dist/index.js';

test('classroom update preserves consent, auth, cancellation and conflicts without automatic retry', async () => {
  const tokens = new MemoryTokenProvider();
  await tokens.setTokens({ accessToken: 'classroom-test-token' });
  const calls = [];
  let conflict = true;
  const sdk = new FaiberSDK({ domains: { lms: 'https://lms.example' }, tokenProvider: tokens,
    axios: { adapter: async config => {
      calls.push(config);
      const response = { config, status: conflict ? 409 : 200, statusText: '', headers: { 'x-request-id': 'classroom-test' },
        data: conflict ? { error: 'classroom_session_changes_confirmation_required' } : { status: 'success', message: 'updated', data: { id: 'classroom' } } };
      if (conflict) throw new AxiosError('Conflict', 'ERR_BAD_REQUEST', config, undefined, response);
      return response;
    } } });
  const signal = new AbortController().signal;
  const proposed = { course_id: 'destination' };
  await assert.rejects(sdk.lms.operations.classroomUpdateClassroomPatch('classroom', proposed, { signal }), error => {
    assert.equal(error.response.status, 409);
    assert.equal(error.response.data.error, 'classroom_session_changes_confirmation_required');
    return true;
  });
  assert.equal(calls.length, 1);
  assert.deepEqual(JSON.parse(calls[0].data), proposed);
  assert.deepEqual(proposed, { course_id: 'destination' });
  conflict = false;
  const confirmed = { ...proposed, confirm_session_changes: true, confirm_recording_reset: true };
  for (const save of [sdk.lms.operations.classroomUpdateClassroomPatch.bind(sdk.lms.operations), sdk.lms.classrooms.update.bind(sdk.lms.classrooms)]) {
    const response = await save('classroom', confirmed, { signal });
    assert.equal(response.status, 200);
    assert.equal(response.headers['x-request-id'], 'classroom-test');
    const config = calls.at(-1);
    assert.equal(config.method, 'patch');
    assert.equal(config.url, '/api/v1/classrooms/classroom');
    assert.equal(config.headers.get('Authorization'), 'Bearer classroom-test-token');
    assert.equal(config.signal, signal);
    assert.deepEqual(JSON.parse(config.data), confirmed);
  }
});
