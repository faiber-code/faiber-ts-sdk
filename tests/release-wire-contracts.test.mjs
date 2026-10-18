import assert from 'node:assert/strict';
import test from 'node:test';
import { AxiosHeaders } from 'axios';
import { FaiberSDK, MemoryTokenProvider } from '../packages/sdk/dist/index.js';

function connection(authMode = 'bearer') {
  const seen = [];
  const responseData = new Map();
  const sdk = new FaiberSDK({
    defaultDomain: 'https://sandbox.test', domains: { state: 'https://state.test' }, authMode,
    tokenProvider: new MemoryTokenProvider({ accessToken: 'sdk-token' }),
    axios: { adapter: async config => {
      seen.push(config);
      return { status: 200, statusText: 'OK', headers: new AxiosHeaders({ 'x-request-id': 'wire-fixture' }), config, data: responseData.get(config.url) ?? { data: {} } };
    } },
  });
  return { sdk, seen, responseData };
}

test('checkout uses the mounted shop path, camelCase shipping and raw checkout response', async () => {
  const { sdk, seen, responseData } = connection();
  const receipt = { id: 'checkout', total: 45000, state: 'quoted', shipping: { fullName: 'Test Buyer' }, items: [['variant', 2, '20000']] };
  responseData.set('/api/v1/shop/checkout/quote', receipt);
  const input = { id: 'checkout', items: [{ variant_id: 'variant', quantity: 2 }], shipping: { fullName: 'Test Buyer', phone: '+989000000000', city: 'Rasht', address: 'Test address', postalCode: '1234567890' } };
  const controller = new AbortController();
  const result = await sdk.modules.operations.orderQuotePost(input, { signal: controller.signal, headers: { Origin: 'https://shop.test' } });
  assert.deepEqual(result.data, receipt);
  assert.equal(result.headers['x-request-id'], 'wire-fixture');
  assert.deepEqual(JSON.parse(seen[0].data), input);
  assert.equal(seen[0].signal, controller.signal);
  assert.equal(seen[0].headers.get('Authorization'), 'Bearer sdk-token');
  assert.equal(seen[0].headers.get('Origin'), 'https://shop.test');
  await sdk.modules.operations.orderPayPost('checkout/a', { max_total: 45000 });
  assert.equal(seen[1].url, '/api/v1/shop/checkout/checkout%2Fa/pay');
});

test('game session creation binds the path identity and preserves versioned commands', async () => {
  const { sdk, seen, responseData } = connection();
  responseData.set('/api/v2/games/game%2Fa/sessions', { data: { id: 'session', version: 3 } });
  const result = await sdk.state.operations.gamesRoutesCreateSessionPost('game/a', { difficulty: '11-14', paid: false, gameId: 'ignored-body-id' });
  assert.deepEqual(JSON.parse(seen[0].data), { difficulty: '11-14', paid: false, gameId: 'game/a' });
  assert.equal(result.data.data.version, 3);
  await sdk.state.operations.gamesRoutesCommandPost('session/a', { commandId: 'command', expectedVersion: 3, answer: 7, usedHint: false });
  assert.equal(seen[1].url, '/api/v2/game-sessions/session%2Fa/commands');
  assert.deepEqual(JSON.parse(seen[1].data), { commandId: 'command', expectedVersion: 3, answer: 7, usedHint: false });
});

test('handoff, OTP forms, password and fitness updates retain their distinct wire models', async () => {
  const { sdk, seen } = connection('cookie');
  await sdk.idp.operations.authExchangeHandoffTokenPost({ token: 'handoff_example', client_id: 'website' });
  await sdk.idp.operations.authOtpLoginPost({ grant_type: 'otp', client_id: 'website', client_secret: '', username: 'user+test', otp_code: '012345' });
  const otp = new URLSearchParams(seen[1].data);
  assert.equal(otp.get('username'), 'user+test');
  assert.match(seen[1].headers.get('Content-Type'), /application\/x-www-form-urlencoded/);
  await sdk.idp.operations.userSavePut({ password: 'new-long-password' });
  await sdk.profile.operations.fitnessSaveSettingsPut({ model_ref: 'model', stt_model_ref: 'stt', tts_model_ref: 'tts', expected_version: 4 });
  assert.deepEqual(JSON.parse(seen[3].data), { model_ref: 'model', stt_model_ref: 'stt', tts_model_ref: 'tts', expected_version: 4 });
  assert.ok(seen.every(config => config.withCredentials && !config.headers.has('Authorization')));
});

test('internal receipts and readiness keep raw responses and server credential headers', async () => {
  const { sdk, seen, responseData } = connection();
  const receipt = { purchaseId: 'p', transaction: 't', amount: 100000, currency: 'IRR', kind: 'topup', providerVerified: true, status: 'accepted' };
  responseData.set('/api/v1/internal/asset/purchases/p', receipt);
  const result = await sdk.payment.operations.assetCheckoutReceiptGet('p', { headers: { 'x-asset-payment-token': 'server-only-fixture' } });
  assert.deepEqual(result.data, receipt);
  assert.equal(seen[0].headers.get('x-asset-payment-token'), 'server-only-fixture');
  await sdk.messenger.operations.serviceReadinessPost({ headers: { 'x-website-otp-token': 'server-only-fixture' } });
  assert.equal(seen[1].headers.get('x-website-otp-token'), 'server-only-fixture');
});

class FakeSocket extends EventTarget {
  static instances = [];
  sent = [];
  readyState = 0;
  constructor(url) { super(); this.url = url; FakeSocket.instances.push(this); }
  send(data) { this.sent.push(JSON.parse(data)); }
  close() { this.readyState = 3; this.dispatchEvent(new Event('close')); }
  open() { this.readyState = 1; this.dispatchEvent(new Event('open')); }
}

test('v2 realtime sends scoped tickets in the hello frame and supports cancellation', async () => {
  const { sdk } = connection();
  const controller = new AbortController();
  const ticket = { matchId: 'match', ticket: 'short-lived', websocketUrl: 'https://state.test/api/v2/realtime', expiresAt: new Date(Date.now() + 30000).toISOString() };
  const pending = sdk.state.operations.connectMatchRealtime(ticket, { WebSocket: FakeSocket, signal: controller.signal });
  const socket = FakeSocket.instances.at(-1);
  assert.equal(socket.url, 'wss://state.test/api/v2/realtime');
  assert.ok(!socket.url.includes(ticket.ticket));
  socket.open();
  assert.equal(await pending, socket);
  assert.deepEqual(socket.sent, [{ type: 'hello', ticket: 'short-lived' }]);
  controller.abort();
  assert.equal(socket.readyState, 3);
  await assert.rejects(sdk.state.operations.connectMatchRealtime({ ...ticket, websocketUrl: 'https://untrusted.test/api/v2/realtime' }, { WebSocket: FakeSocket }), /configured State/);
  await assert.rejects(sdk.state.operations.connectMatchRealtime({ ...ticket, expiresAt: 'invalid' }, { WebSocket: FakeSocket }), /expired/);
});
