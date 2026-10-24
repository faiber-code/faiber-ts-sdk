import test from 'node:test';
import assert from 'node:assert/strict';
import {summarizeCapabilityFindings} from '../scripts/capability-findings-report.mjs';

test('reports evidence gaps without claiming confirmed defects or removing failures', () => {
  const result={stage:'sdk',status:'blocked',failures:['idp GET /x: semantic review missing or stale','idp GET /x: semantic review missing or stale']};
  const before=structuredClone(result);
  const report=summarizeCapabilityFindings(result,{services:{idp:{scope:'business'}}},{idp:{operations:[{id:'GET /x',source_checksum:'new',review:{status:'pending'}}]}});
  assert.equal(report.outstandingRequirementCount,2);
  assert.equal(report.uniqueFindingCount,1);
  assert.equal(report.duplicateFindingCount,1);
  assert.equal(report.confirmedDefectCount,null);
  assert.equal(report.consumerBoundariesNotEvaluated,1);
  assert.deepEqual(result,before);
});
test('separates platform scope without silently exempting its operations',()=>{
  const report=summarizeCapabilityFindings({stage:'sdk',failures:[]},{services:{idp:{scope:'business'},control:{scope:'infrastructure'}}},{idp:{operations:[{source_checksum:'a',review:{status:'verified',source_checksum:'a'}}]},control:{operations:[{source_checksum:'b',review:{status:'verified',source_checksum:'old'}}]}});
  assert.equal(report.scopes.business.operations,1);
  assert.equal(report.scopes.business.missingOrStaleSemanticReviews,0);
  assert.equal(report.scopes.infrastructure.missingOrStaleSemanticReviews,1);
  assert.equal(report.consumerBoundariesNotEvaluated,1);
});
test('discovery does not count skipped consumer requirements',()=>{
  const report=summarizeCapabilityFindings({stage:'discovery',failures:[]},{services:{idp:{}}},{idp:{operations:[{}]}});
  assert.equal(report.consumerBoundariesNotEvaluated,0);
});
