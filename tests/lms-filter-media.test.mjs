import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { LmsApi } from '../packages/lms/dist/index.js';
import { DrmApi } from '../packages/drm/dist/index.js';

function fixture() {
  const requests = [];
  const config = {
    domains: { lms: 'https://lms.example.test', session: 'https://session.example.test', drm: 'https://drm.example.test' },
    tokenProvider: new MemoryTokenProvider({ accessToken: 'staff-token' }),
    axios: { adapter: async request => {
      requests.push(request);
      return { status: 200, statusText: 'OK', headers: { 'x-request-id': 'preview' }, config: request,
        data: { id: 'manifest', mixed_media_id: 'composition', version: 3, document: { parts: [] }, created_at: '2026-11-02T00:00:00Z' } };
    } },
  };
  return { requests, lms: new LmsApi(new FaiberClient('lms', config)), drm: new DrmApi(new FaiberClient('drm', config)) };
}

test('certificate filters retain false values, date bounds and profile text in both SDK surfaces', async () => {
  const { lms, requests } = fixture();
  const query = { user_id: 'student', certificate_template_id: 'type', profile_search: 'علی', status: 'issued',
    classroom_id: 'class', course_id: 'course', issued_by: 'issuer', grade_id: 'grade',
    issued_from: '2026-01-01T00:00:00+03:30', issued_to: '2026-12-31T23:59:59+03:30',
    has_media: false, revoked: false, 'page[number]': 2, 'page[size]': 10 };
  await lms.certificates.list(query);
  await lms.operations.certificateIndexCertificateGet(query);
  for (const request of requests) {
    assert.equal(request.url, '/api/v1/certificates');
    assert.deepEqual(request.params, query);
    assert.equal(request.headers.get('Authorization'), 'Bearer staff-token');
  }
});

test('table links expose composition without a room, independent of session type or lock', () => {
  const { lms } = fixture();
  const reference = { session_room_id: null, session_type: { code: 'in-person' }, locked: true,
    media: { drm_mixed_media_id: 'composition/id' } };
  assert.deepEqual(lms.classroomSessionMediaLinks(reference), {
    room: null, recording: null, recordingsApi: null, playback: null,
    compositionManifest: 'https://drm.example.test/api/v1/mixed-media/composition%2Fid/manifest',
  });
  reference.session_room_id = 'room/id';
  const links = lms.classroomSessionMediaLinks(reference);
  assert.equal(links.recording, 'https://session.example.test/view/recording/room%2Fid');
  assert.equal(links.recordingsApi, 'https://session.example.test/api/v1/rooms/room%2Fid/recordings');
  assert.equal(links.playback, 'https://session.example.test/view/playback/room%2Fid');
  assert.equal(lms.classroomSessionMediaLinks({ session_room_id: null }).compositionManifest, null);
});

test('composition preview uses authenticated DRM transport and preserves response and cancellation', async () => {
  const { drm, requests } = fixture();
  const controller = new AbortController();
  const response = await drm.classroomSessionComposition({ media: { drm_mixed_media_id: 'composition/id' } }, { signal: controller.signal });
  assert.equal(requests[0].baseURL, 'https://drm.example.test');
  assert.equal(requests[0].url, '/api/v1/mixed-media/composition%2Fid/manifest');
  assert.equal(requests[0].headers.get('Authorization'), 'Bearer staff-token');
  assert.equal(requests[0].signal, controller.signal);
  assert.equal(response.data.version, 3);
  assert.equal(response.headers['x-request-id'], 'preview');
  await drm.classroomSessionComposition({ course_session: { drm_mixed_media_id: 'fallback' } });
  assert.equal(requests[1].url, '/api/v1/mixed-media/fallback/manifest');
  assert.throws(() => drm.classroomSessionComposition({}), /no linked DRM composition/);
  assert.equal(requests.length, 2);
  controller.abort();
  await assert.rejects(() => drm.compositionManifest('composition', { signal: controller.signal }), { code: 'ERR_CANCELED' });
});
