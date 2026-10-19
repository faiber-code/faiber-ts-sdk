import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { TaskApi } from '../packages/task/dist/index.js';
import { MessengerApi } from '../packages/messenger/dist/index.js';
import { ChatApi } from '../packages/chat/dist/index.js';

test('feedback and durable streams keep sandbox auth, idempotency, cursors and cancellation', async () => {
  const tokens = new MemoryTokenProvider();
  await tokens.setTokens({ accessToken: 'integration-token' });
  const seen = [];
  const client = service => new FaiberClient(service, {
    domains: { [service]: `https://${service}.example` }, tokenProvider: tokens,
    axios: { adapter: async config => { seen.push(config); return { status: 200, statusText: 'OK', headers: {}, config, data: { status: 'success', data: { events: [], cursor: 8, has_more: false } } }; } },
  });
  const task = new TaskApi(client('task'));
  const messenger = new MessengerApi(client('messenger'));
  const chat = new ChatApi(client('chat'));
  const controller = new AbortController();
  await task.feedback.decide('request', { expected_version: 2, decision: 'reject', description: 'Reason' }, 'retry-key', { signal: controller.signal, headers: { 'X-Feedback-Reporter-Id': '11111111-1111-4111-8111-111111111111' } });
  await messenger.delivery.events({ cursor: 7 }, { signal: controller.signal });
  await chat.personal.events({ cursor: 6 }, { signal: controller.signal });
  assert.equal(seen[0].headers.get('Idempotency-Key'), 'retry-key');
  assert.equal(seen[0].headers.get('X-Feedback-Reporter-Id'), '11111111-1111-4111-8111-111111111111');
  assert.equal(JSON.parse(seen[0].data).expected_version, 2);
  for (const request of seen) { assert.equal(request.headers.get('Authorization'), 'Bearer integration-token'); assert.equal(request.signal, controller.signal); }
  assert.equal(seen[1].timeout, 35000); assert.equal(seen[1].params.cursor, 7);
  assert.equal(seen[2].timeout, 35000); assert.equal(seen[2].params.cursor, 6);
  assert.equal(seen[1].url, '/api/v1/notifications/me/events');
  assert.equal(seen[2].url, '/api/v1/me/events');
});
