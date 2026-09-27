import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { ChatApi } from '../packages/chat/dist/index.js';

test('private attachment download uses authenticated Chat transport and raw bytes', async () => {
  const tokens = new MemoryTokenProvider();
  await tokens.setTokens({ accessToken: 'test-token' });
  const requests = [];
  const bytes = new Uint8Array([1, 2, 3]).buffer;
  const api = new ChatApi(new FaiberClient('chat', {
    domains: { chat: 'https://chat.example' }, tokenProvider: tokens,
    axios: { withCredentials: true, adapter: async config => {
      requests.push(config);
      return { status: 200, statusText: 'OK', data: bytes,
        headers: { 'content-type': 'image/png', 'cache-control': 'private, no-store' }, config };
    } },
  }));
  const controller = new AbortController();
  const response = await api.downloadAttachment('file/1', { signal: controller.signal });
  assert.equal(response.data, bytes);
  assert.equal(response.status, 200);
  assert.equal(response.headers['cache-control'], 'private, no-store');
  assert.equal(requests[0].url, '/api/v1/attachments/file%2F1/content');
  assert.equal(requests[0].headers.get('Authorization'), 'Bearer test-token');
  assert.equal(requests[0].withCredentials, true);
  assert.equal(requests[0].responseType, 'arraybuffer');
  assert.equal(requests[0].signal, controller.signal);
  await api.operations.routesDownloadAttachmentGet('file/2');
  assert.equal(requests[1].url, '/api/v1/attachments/file%2F2/content');
});
