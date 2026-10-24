import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { AxiosHeaders } from 'axios';
import { FaiberClient } from '../packages/core/dist/index.js';
import { GisApi } from '../packages/gis/dist/index.js';
import { gisReviewedOperationContracts } from '../scripts/gis-reviewed-operation-contracts.mjs';
const cases = JSON.parse(readFileSync(new URL('./gis-final-pin-cases.json', import.meta.url)));

test('GIS final pin retains all 48 individually reviewed contracts and scoped evidence', () => {
  const audit = JSON.parse(readFileSync(new URL('../contracts/service-capabilities/evidence/gis-final-source-audit-20261021/audit.json', import.meta.url)));
  assert.equal(audit.immutable_revision, '0bc8423a51887450b928e7b372153014cd47e582');
  assert.equal(cases.length, 48);
  assert.deepEqual(cases.map(x => 'gis:' + x.id).sort(), Object.keys(gisReviewedOperationContracts).sort());
  assert.deepEqual(audit.operations.map(x => x.id).sort(), cases.map(x => x.id).sort());
  for (const row of audit.operations) {
    assert.equal(row.source_review, 'verified', row.id);
    assert.ok(row.wire_semantics && row.authorization && row.lifecycle && row.relationships, row.id);
    assert.ok(row.prior_test_evidence.length > 0, row.id);
  }
});

for (const row of cases) test('GIS final source wire: ' + row.id, async () => {
  const requests = [];
  const data = row.binary ? new Uint8Array([0, 255, 128]).buffer : { fixture: row.id };
  const api = new GisApi(new FaiberClient('gis', {
    domains: { gis: 'https://gis.fixture.test' },
    getAuthorization: () => 'Bearer owned-fixture',
    axios: { adapter: async config => {
      requests.push(config);
      return { config, data, status: 200, statusText: 'OK', headers: new AxiosHeaders({ 'x-gis-revision': '7' }) };
    } },
  }));
  const signal = new AbortController().signal;
  const options = { signal, timeout: 2300, withCredentials: true };
  const args = [...row.path_values];
  if (row.body) args.push(row.body);
  if (row.query) args.push(row.query);
  args.push(options);
  const response = await api.operations[row.sdk_method](...args);
  assert.equal(requests.length, 1);
  const request = requests[0];
  let index = 0;
  const expectedPath = row.path.replace(/\{[^}]+\}/g, () => encodeURIComponent(row.path_values[index++]));
  assert.equal(request.url, expectedPath);
  assert.equal(request.method.toUpperCase(), row.method);
  assert.equal(request.headers.get('Authorization'), 'Bearer owned-fixture');
  assert.equal(request.signal, signal);
  assert.equal(request.timeout, 2300);
  assert.equal(request.withCredentials, true);
  assert.deepEqual(request.params, row.query ?? undefined);
  if (row.body) assert.deepEqual(JSON.parse(request.data), row.body);
  else assert.equal(request.data, undefined);
  if (row.binary) assert.equal(request.responseType, 'arraybuffer');
  assert.equal(response.data, data);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('x-gis-revision'), '7');
});
