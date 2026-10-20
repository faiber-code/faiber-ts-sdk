import test from 'node:test';
import assert from 'node:assert/strict';
import {capabilityInventoryRevision,retainCapabilitySourceDecision,retainCapabilityConsumerReview} from '../scripts/capability-source-selection.mjs';
const main='a'.repeat(40), selected='b'.repeat(40), checksum='c'.repeat(64);
test('selected evidence keeps fresh canonical main distinct and requires explicit SDK mode',()=>{
 assert.equal(capabilityInventoryRevision('canonical',main,selected),main);
 assert.equal(capabilityInventoryRevision('sdk',main,selected),selected);
 assert.equal(capabilityInventoryRevision('sdk',main,undefined),main);
 assert.throws(()=>capabilityInventoryRevision('sdk','missing',selected));
 assert.throws(()=>capabilityInventoryRevision('sdk',main,'short'));
 assert.throws(()=>capabilityInventoryRevision('guessed',main,selected));
});
test('a verified decision is retained only for its exact reviewed source and compiler inputs',()=>{
 const decision={status:'verified',revision:selected,source_tree_checksum:checksum,reason:'Independent review'};
 assert.equal(retainCapabilitySourceDecision(decision,selected,checksum),decision);
 assert.equal(retainCapabilitySourceDecision(decision,main,checksum).status,'stale');
 assert.equal(retainCapabilitySourceDecision(decision,selected,'d'.repeat(64)).status,'stale');
 assert.equal(retainCapabilitySourceDecision({...decision,source_tree_checksum:undefined},selected,checksum).status,'stale');
 assert.equal(retainCapabilitySourceDecision(null,selected,checksum),null);
});

test('rediscovery retains source-bound SDK and Manage reviews without promoting missing or changed evidence',()=>{
 const record={status:'verified',source_checksum:checksum,test_evidence:['real-sdk-run'],package:'@faiber/faiber-version'};
 assert.equal(retainCapabilityConsumerReview(record,checksum,'requires_wire_verification'),record);
 const changed=retainCapabilityConsumerReview(record,'d'.repeat(64),'requires_wire_verification');
 assert.equal(changed.status,'stale');assert.deepEqual(changed.test_evidence,['real-sdk-run']);assert.equal(record.status,'verified');
 assert.equal(retainCapabilityConsumerReview({...record,source_checksum:undefined},checksum,'requires_wire_verification').status,'stale');
 assert.equal(retainCapabilityConsumerReview({...record,source_checksum:''},'','requires_wire_verification').status,'stale');
 assert.deepEqual(retainCapabilityConsumerReview(undefined,checksum,'requires_workflow_verification'),{status:'requires_workflow_verification'});
 const pending={status:'requires_wire_verification',source_checksum:checksum};
 assert.equal(retainCapabilityConsumerReview(pending,checksum,'requires_wire_verification').status,'requires_wire_verification');
});
