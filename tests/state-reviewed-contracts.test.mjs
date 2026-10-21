import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { FaiberClient } from '../packages/core/dist/index.js';
import { StateApi, StateRealtimeClient, MatchRealtimeClient } from '../packages/state/dist/index.js';
import { stateReviewedOperationContracts } from '../scripts/state-reviewed-operation-contracts.mjs';

test('State source review inventories every mounted operation, including two upgrades', () => {
  const routes = JSON.parse(readFileSync(new URL('../service-contracts.json', import.meta.url))).state;
  assert.equal(routes.length, 45);
  assert.deepEqual(Object.keys(stateReviewedOperationContracts).sort(), routes.map(route => `state:${route.method} ${route.path}`).sort());
  assert.equal(Object.values(stateReviewedOperationContracts).filter(value => value.websocket).length, 2);
  for (const contract of Object.values(stateReviewedOperationContracts)) {
    assert.ok(contract.auth);
    assert.ok(contract.purpose.length > 45);
  }
});

test('State game operations preserve snake_case queries, body and authenticated Axios transport', async () => {
  const seen = [];
  const client = new FaiberClient('state', {
    domains: { state: 'https://state.example.test' },
    tokenProvider: { getTokens: () => ({ accessToken: 'memory-token' }), setTokens() {} },
    axios: { adapter: async config => {
      seen.push(config);
      return { data: { data: { items: [], page: 1, pageSize: 25, pages: 0, total: 0 } }, status: 200, statusText: 'OK', headers: { 'x-request-id': 'state-test' }, config };
    } },
  });
  const api = new StateApi(client);
  const controller = new AbortController();
  const response = await api.operations.routesGameOperationSessionsGet({ page_size: 25, paid: false, settlement_status: 'pending' }, { headers: { 'x-organization-id': 'org' }, signal: controller.signal });
  assert.equal(response.status, 200);
  assert.equal(response.headers['x-request-id'], 'state-test');
  assert.equal(seen[0].headers.get('Authorization'), 'Bearer memory-token');
  assert.equal(seen[0].params.page_size, 25);
  assert.equal(seen[0].params.paid, false);
  assert.equal(seen[0].params.settlement_status, 'pending');
  assert.equal(seen[0].signal, controller.signal);
  await api.operations.routesUpdateGameOperationEconomyPatch('game/id', { entryCoins: 0, burnPercent: 10.25, enabled: false });
  assert.equal(seen[1].url, '/api/v1/game-operations/worlds/game%2Fid/economy');
  assert.deepEqual(JSON.parse(seen[1].data), { entryCoins: 0, burnPercent: 10.25, enabled: false });
});

class Socket {
  static OPEN = 1;
  static instances = [];
  readyState = 1;
  sent = [];
  constructor(url) { this.url = String(url); Socket.instances.push(this); }
  send(value) { this.sent.push(JSON.parse(value)); }
  close() { this.onclose?.({ code: 1000 }); }
}
const roomTicket = () => ({ room_id: 'room', player_id: 'player', ticket: 'scoped', websocket_url: 'wss://state.example.test/api/v1/realtime', udp_address: 'localhost:9079', expires_at: new Date(Date.now() + 60_000).toISOString() });

test('room replication exposes pong, ack and exact ticket-bound frames', async () => {
  const client = new StateRealtimeClient(roomTicket(), { WebSocket: Socket, reconnect: false });
  const opened = client.connect();
  const socket = Socket.instances.at(-1);
  socket.onopen(); await opened;
  const url = new URL(socket.url);
  assert.equal(url.searchParams.get('ticket'), 'scoped');
  assert.equal(url.searchParams.get('room_id'), 'room');
  let pong;
  client.on('pong', event => { pong = event; });
  socket.onmessage({ data: JSON.stringify({ type: 'pong', tick: 17 }) });
  assert.deepEqual(pong, { type: 'pong', tick: 17 });
  client.ping(); client.acknowledge(5); client.sendInput({ move_x: 1 });
  assert.deepEqual(socket.sent[0], { type: 'ping' });
  assert.deepEqual(socket.sent[1], { type: 'ack', sequence: 5 });
  assert.deepEqual(socket.sent[2], { type: 'input', frame: { room_id: 'room', player_id: 'player', ticket: 'scoped', sequence: 1, delivery: 'unreliable', values: { move_x: 1 } } });
  client.close();
  await assert.rejects(client.connect(), /closed/);
});

test('room connection rejects an expired ticket and a socket closed before opening', async () => {
  const expired = new StateRealtimeClient({ ...roomTicket(), expires_at: '2000-01-01T00:00:00Z' }, { WebSocket: Socket });
  await assert.rejects(expired.connect(), /expired/);
  const client = new StateRealtimeClient(roomTicket(), { WebSocket: Socket, reconnect: false });
  const pending = client.connect();
  Socket.instances.at(-1).close();
  await assert.rejects(pending, /closed before opening/);
  client.close();
});

test('match connection sends ticket in hello and never retries consumed tickets without refresh', async () => {
  const client = new MatchRealtimeClient({ matchId: 'm', ticket: 'one-use', websocketUrl: 'wss://state.example.test/api/v2/realtime', expiresAt: new Date(Date.now() + 30_000).toISOString() }, { WebSocket: Socket });
  const pending = client.connect();
  const socket = Socket.instances.at(-1);
  socket.onopen(); await pending;
  assert.equal(new URL(socket.url).search, '');
  assert.deepEqual(socket.sent, [{ type: 'hello', ticket: 'one-use' }]);
  const count = Socket.instances.length;
  socket.close();
  await new Promise(resolve => setTimeout(resolve, 600));
  assert.equal(Socket.instances.length, count);
  client.close();
});
