import test from 'node:test';
import assert from 'node:assert/strict';
import { AxiosError, CanceledError } from 'axios';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { LmsApi } from '../packages/lms/dist/index.js';
import { FaiberSDK } from '../packages/sdk/dist/index.js';

const data = { status: 'success', message: 'ok', data: {
  range: { from: '2026-10-24T20:30:00Z', to: '2026-10-25T20:30:00Z', timezone: 'Asia/Tehran', local_from: '2026-10-25', local_to: '2026-10-26' },
  sessions: [{ id: 'zero', student_count: 0, classroom_student_count: 18, classroom_capacity: 0, teacher_profile: null, support_profile: { user_id: 'support' } }],
  summary: { session_count: 1, student_seat_count: 0 }, total_before_type_filters: 9,
  type_counts: [{ category: 'online', count: 9 }, { category: 'supplementary', count: 0 }],
} };

test('daily and weekly calendar entry points make exactly one authenticated request with no enrichment', async () => {
  const tokenProvider = new MemoryTokenProvider();
  await tokenProvider.setTokens({ accessToken: 'calendar-test-token' });
  const requests = [];
  const config = { domains: { lms: 'https://lms.example' }, tokenProvider,
    axios: { adapter: async config => {
      requests.push(config);
      return { config, status: 200, statusText: 'OK', headers: { 'x-request-id': 'calendar-request' }, data };
    } },
  };
  const api = new LmsApi(new FaiberClient('lms', config));
  const sdk = new FaiberSDK(config);
  const controller = new AbortController();
  const options = { signal: controller.signal, timeout: 17000, headers: { 'X-Calendar-Test': 'one-call' } };
  const date = { date: '2026-10-25', timezone: 'Asia/Tehran' };
  const week = { from: '2026-10-25T00:00:00+03:30', to: '2026-11-01T00:00:00+03:30', timezone: 'Asia/Tehran' };
  for (const [call, query, expected] of [
    [api.classroomCalendar.bind(api), { ...date, teacher_ids: ['t1', 't2'], session_types: ['online', 'supplementary'] }, { ...date, teacher_ids: 't1,t2', session_types: 'online,supplementary' }],
    [sdk.lms.classroomCalendar.bind(sdk.lms), { ...week, classroom_id: 'c', session_type_ids: ['type1','type2'] }, { ...week, classroom_id: 'c', session_type_ids: 'type1,type2' }],
    [api.operations.classroomCalendarGet.bind(api.operations), { ...date, teacher_ids: 't1,t2' }, { ...date, teacher_ids: 't1,t2' }],
    [api.classroomCalendar.bind(api), { ...date, teacher_ids: [], session_types: [], session_type_ids: [] }, date],
  ]) {
    const before = requests.length;
    const response = await call(query, options);
    assert.equal(requests.length, before + 1);
    assert.deepEqual(response.data, data);
    assert.equal(response.headers['x-request-id'], 'calendar-request');
    const request = requests.at(-1);
    assert.equal(request.url, '/api/v1/classrooms/sessions/calendar');
    assert.equal(request.method, 'get');
    assert.deepEqual(request.params, expected);
    assert.equal(request.headers.get('Authorization'), 'Bearer calendar-test-token');
    assert.equal(request.headers.get('X-Calendar-Test'), 'one-call');
    assert.equal(request.signal, controller.signal);
    assert.equal(request.timeout, 17000);
    assert.equal(response.data.data.sessions[0].student_count, 0);
    assert.equal(response.data.data.sessions[0].classroom_capacity, 0);
    assert.equal(response.data.data.sessions[0].teacher_profile, null);
  }
});

test('calendar forwards cookie auth, cancellation and 422/502 errors without hidden fallback calls', async () => {
  let calls = 0;
  const api = new LmsApi(new FaiberClient('lms', { domains: { lms: 'https://lms.example' }, axios: {
    withCredentials: true, adapter: async config => {
      calls++;
      assert.equal(config.withCredentials, true);
      const status = config.params.date === 'bad' ? 422 : 502;
      throw new AxiosError('calendar failure', 'ERR_BAD_RESPONSE', config, undefined,
        { config, status, statusText: 'error', headers: {}, data: { error: 'calendar-error' } });
    },
  } }));
  for (const [date, status] of [['bad',422],['2026-10-25',502]]) {
    const before = calls;
    await assert.rejects(api.classroomCalendar({ date, timezone: 'Asia/Tehran' }), error => error.response.status === status);
    assert.equal(calls, before + 1);
  }
  const abort = new AbortController(); abort.abort();
  const before = calls;
  await assert.rejects(api.classroomCalendar({ date: '2026-10-25', timezone: 'Asia/Tehran' }, { signal: abort.signal }), CanceledError);
  assert.equal(calls, before);
});
