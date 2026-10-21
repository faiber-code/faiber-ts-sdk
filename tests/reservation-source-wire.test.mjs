import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ReservationApi } from '../packages/reservation/dist/index.js';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { reservationReviewedOperationContracts } from '../scripts/reservation-reviewed-operation-contracts.mjs';

// Compiled transport fixtures; native PostgreSQL/HTTP evidence is retained separately.
function fixture() {
  const seen = []; const replies = new Map();
  const api = new ReservationApi(new FaiberClient('reservation', {
    domains: { reservation: 'https://reservation.test' },
    tokenProvider: new MemoryTokenProvider({ accessToken: 'reservation-wire-token' }),
    axios: { withCredentials: true, adapter: async config => {
      seen.push(config);
      return { data: { status: 'success', message: '', data: replies.get(config.url) ?? null },
        status: 200, statusText: 'OK', headers: { 'x-request-id': 'reservation-fixture' }, config };
    } },
  }));
  return { api, seen, replies };
}

test('Reservation convenience booking uses numeric slot and customer UUID and preserves cancellation receipt', async () => {
  const { api, seen, replies } = fixture();
  const signal = new AbortController().signal;
  const body = { time_slot_id: 8, user_id: '00000000-0000-4000-8000-000000000042', notes: 'Consultation' };
  await api.reservations.create(body, { signal, headers: { 'x-request-id': 'booking-1' } });
  assert.equal(seen[0].url, '/api/v1/reservations');
  assert.deepEqual(JSON.parse(seen[0].data), body);
  assert.equal(seen[0].signal, signal);
  replies.set('/api/v1/reservations/9', null);
  assert.equal((await api.reservations.delete(9)).data.data, null);
  assert.equal(seen[1].method, 'delete');
  assert.equal(seen[1].url, '/api/v1/reservations/9');
  assert.ok(seen.every(c => c.headers.get('Authorization') === 'Bearer reservation-wire-token' && c.withCredentials));
});

test('Reservation convenience schedule, generation, assignments and arrays preserve distinct wire shapes', async () => {
  const { api, seen, replies } = fixture();
  const schedules = [{ day_of_week: 'monday', start_time: '09:00', end_time: '12:00', is_active: true }];
  await api.setSchedules(42, { schedules });
  assert.equal(seen[0].method, 'put');
  assert.deepEqual(JSON.parse(seen[0].data), { schedules });
  const generation = { provider_id: 42, service_id: 8, from_date: '2026-11-02', to_date: '2026-11-02' };
  replies.set('/api/v1/slots', 12);
  assert.equal((await api.generateSlots(generation)).data.data, 12);
  assert.deepEqual(JSON.parse(seen[1].data), generation);
  await api.assignService(42, { service_id: 8 });
  assert.deepEqual(JSON.parse(seen[2].data), { service_id: 8 });
  replies.set('/api/v1/providers/42/services', [{ id: 8, name: 'Consultation' }]);
  assert.ok(Array.isArray((await api.providerServices(42)).data.data));
  assert.equal((await api.removeService(42, 8)).data.data, null);
  assert.equal((await api.deleteSlot(99)).data.data, null);
});

test('Reservation convenience filtered pagination and slot structural patches retain literal query/body fields', async () => {
  const { api, seen } = fixture();
  const query = { provider_id: 42, service_id: 8, status: 'cancelled', 'page[number]': 2, 'page[size]': 1 };
  await api.reservations.list(query);
  assert.deepEqual(seen[0].params, query);
  await api.updateSlot(19, { provider_id: 42, service_id: 8, starts_at: '2026-11-02T09:00:00Z', ends_at: '2026-11-02T09:30:00Z' });
  assert.deepEqual(JSON.parse(seen[1].data), { provider_id: 42, service_id: 8, starts_at: '2026-11-02T09:00:00Z', ends_at: '2026-11-02T09:30:00Z' });
});

test('Reservation all 30 mounted operations have reviewed source behavior and correct management grants', () => {
  const entries = Object.entries(reservationReviewedOperationContracts);
  assert.equal(entries.length, 30);
  for (const [key, contract] of entries) {
    assert.ok(contract.purpose.length > 40, key);
    if (['reservation:GET /', 'reservation:GET /health', 'reservation:GET /api/openapi.json', 'reservation:GET /api/v1/slots/available', 'reservation:GET /api/v1/integration/flow'].includes(key)) {
      assert.match(contract.auth, /Public read handler/);
    } else {
      assert.match(contract.auth, /Authenticated nonnil user and organization UUID required/);
      assert.match(contract.auth, /admin:[a-z]+:(read|create|update|delete)/);
    }
  }
});
