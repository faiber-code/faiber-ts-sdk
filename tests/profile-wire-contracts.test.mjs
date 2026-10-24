import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ProfileApi } from '../packages/profile/dist/index.js';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';

test('Profile media operations request raw bytes and retain auth, headers and cancellation', async () => {
  const seen = [];
  const bytes = new Uint8Array([137, 80, 78, 71]).buffer;
  const api = new ProfileApi(new FaiberClient('profile', {
    domains: { profile: 'https://profile.test' },
    tokenProvider: new MemoryTokenProvider({ accessToken: 'profile-wire-token' }),
    axios: { adapter: async config => {
      seen.push(config);
      return { data: bytes, status: 200, statusText: 'OK', headers: { 'content-type': 'image/png' }, config };
    } },
  }));
  const signal = new AbortController().signal;
  const options = { signal, responseType: 'json' };
  const operations = [
    ['profileAvatarShowGetApiV1ProfileMediaUuidAvatar', '/api/v1/profile-media/owner%2Fid/avatar'],
    ['profileAvatarShowGetApiV1ProfileUuidAvatar', '/api/v1/profile/owner%2Fid/avatar'],
    ['profileImageShowGet', '/api/v1/profile-media/owner%2Fid/images'],
    ['profileMediaShowGet', '/api/v1/profile/owner%2Fid/media'],
  ];
  for (const [method, url] of operations) {
    const response = await api.operations[method]('owner/id', { key: 'profiles/owner/id/avatar/test.png' }, options);
    assert.equal(response.data, bytes);
    assert.equal(response.headers['content-type'], 'image/png');
    const request = seen.at(-1);
    assert.equal(request.url, url);
    assert.equal(request.responseType, 'arraybuffer');
    assert.equal(request.signal, signal);
    assert.equal(request.headers.get('Authorization'), 'Bearer profile-wire-token');
  }
});
