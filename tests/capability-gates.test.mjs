import assert from 'node:assert/strict';
import test from 'node:test';
import { evaluateCapabilityGate, verifyRunArtifacts } from '../scripts/capability-gates.mjs';
import { mkdtempSync,writeFileSync,rmSync,symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';

function reviewedFixture(){
  const aspect={status:'verified',source_refs:['infera-example/src/routes.rs:5']};
  return {
    universe:{services:{example:{scope:'business'}}},
    services:{example:{source_decision:{status:'verified',revision:'abc',reason:'Fixture runtime'},relationship_review:aspect,operations:[{
      id:'GET /api/v1/items',source_checksum:'hash',handler:{path:'src/routes.rs',line:1},
      review:{status:'verified',source_checksum:'hash',meaning:{en:'List owned items',fa:'فهرست موارد شخصی'},scope:'owner',classification:'public_authenticated',
        permissions:aspect,filters:aspect,inputs_outputs:aspect,lifecycle:aspect,relationships:aspect,test_evidence:['owned-items']},
    }]}},
    runs:{'owned-items':{status:'passed',exit_code:0,command:'node --test fixture',artifact_verified:true,artifact_sha256:'1'.repeat(64),source_revisions:{example:'abc'},tests_executed:3}},
  };
}

test('route counts and unreviewed generated operation metadata cannot satisfy discovery',()=>{
  const fixture=reviewedFixture();fixture.services.example.operations[0].review={status:'pending'};
  assert.equal(evaluateCapabilityGate(fixture.universe,fixture.services,[],fixture.runs).status,'blocked');
});
test('a review becomes invalid when the handler or wire evidence changes',()=>{
  const fixture=reviewedFixture();fixture.services.example.operations[0].source_checksum='changed';
  assert.match(evaluateCapabilityGate(fixture.universe,fixture.services,[],fixture.runs).failures.join('\n'),/stale/);
});
test('verification cannot be satisfied by a zero-test command or failed run',()=>{
  const fixture=reviewedFixture();fixture.runs['owned-items'].tests_executed=0;
  assert.equal(evaluateCapabilityGate(fixture.universe,fixture.services,[],fixture.runs).status,'blocked');
  fixture.runs['owned-items'].tests_executed=3;fixture.runs['owned-items'].status='failed';
  assert.equal(evaluateCapabilityGate(fixture.universe,fixture.services,[],fixture.runs).status,'blocked');
});

test('characterizing a known defect never certifies its correctness',()=>{
  const f=reviewedFixture();f.runs['owned-items'].kind='characterization_not_certification';
  assert.equal(evaluateCapabilityGate(f.universe,f.services,[],f.runs).status,'blocked');
});

test('artifact integrity is recomputed and stale, missing or outside files cannot certify a run',()=>{
  const root=mkdtempSync(join(tmpdir(),'capability-artifact-'));
  const outside=mkdtempSync(join(tmpdir(),'capability-outside-'));
  try {
    writeFileSync(join(root,'test.log'),'actual test output');
    const run={artifact_path:'test.log',artifact_sha256:createHash('sha256').update('actual test output').digest('hex'),artifact_verified:true};
    assert.equal(verifyRunArtifacts({run},root).run.artifact_verified,true);
    writeFileSync(join(outside,'test.log'),'actual test output');
    symlinkSync(join(outside,'test.log'),join(root,'external.log'));
    assert.equal(verifyRunArtifacts({run:{...run,artifact_path:'external.log'}},root).run.artifact_verified,false);
    writeFileSync(join(root,'test.log'),'changed output');
    assert.equal(verifyRunArtifacts({run},root).run.artifact_verified,false);
    for(const artifact_path of ['missing.log','../outside.log','/tmp/outside.log']) {
      assert.equal(verifyRunArtifacts({run:{...run,artifact_path}},root).run.artifact_verified,false);
    }
  } finally { rmSync(root,{recursive:true,force:true});rmSync(outside,{recursive:true,force:true}); }
});
test('reviewed source-bound fixture passes and an unresolved extra service blocks it',()=>{
  const fixture=reviewedFixture();
  assert.equal(evaluateCapabilityGate(fixture.universe,fixture.services,[],fixture.runs).status,'passed');
  fixture.universe.services.extra={scope:'business'};
  assert.equal(evaluateCapabilityGate(fixture.universe,fixture.services,[],fixture.runs).status,'blocked');
});

test('a previously passing test run against another source revision cannot close a review',()=>{
  const fixture=reviewedFixture();fixture.runs['owned-items'].source_revisions.example='older';
  assert.match(evaluateCapabilityGate(fixture.universe,fixture.services,[],fixture.runs).failures.join('\n'),/different service source/);
});

test('discovery defers downstream SDK/panel gaps without concealing backend gaps or allowing completion',()=>{
  const f=reviewedFixture();
  const gaps=[{id:'sdk-gap',owner:'sdk',required:true,status:'discovered'},{id:'panel-gap',owner:'manage',required:true,status:'discovered'}];
  const discovery=evaluateCapabilityGate(f.universe,f.services,[],f.runs,gaps,{stage:'discovery'});
  assert.equal(discovery.status,'passed');
  assert.deepEqual(discovery.downstream_gaps,['sdk-gap','panel-gap']);
  assert.equal(evaluateCapabilityGate(f.universe,f.services,[],f.runs,gaps).status,'blocked');
  const memoryGap={id:'project-scope',owner:'example',required:true,status:'discovered',implementation_phase:'memory_after_sdk_manage'};
  assert.deepEqual(evaluateCapabilityGate(f.universe,f.services,[],f.runs,[memoryGap],{stage:'manage'}).downstream_gaps,['project-scope']);
  assert.equal(evaluateCapabilityGate(f.universe,f.services,[],f.runs,[memoryGap]).status,'blocked');
  gaps.push({id:'backend-gap',owner:'example',required:true,status:'discovered'});
  assert.match(evaluateCapabilityGate(f.universe,f.services,[],f.runs,gaps,{stage:'discovery'}).failures.join('\n'),/backend-gap/);
});

test('workflow evidence must bind both participating source revisions',()=>{
  const f=reviewedFixture();f.universe.services.other={scope:'business'};
  f.services.other=structuredClone(f.services.example);f.services.other.source_decision.revision='def';
  f.runs['owned-items'].source_revisions.other='def';
  const edge={id:'example-other',from_service:'example',to_service:'other',status:'verified',source_refs:['source'],lookup:'GET /lookup',scope:'project',id_type:'uuid',cardinality:'many-to-one',test_evidence:['owned-items']};
  assert.equal(evaluateCapabilityGate(f.universe,f.services,[edge],f.runs).status,'passed');
  f.runs['owned-items'].source_revisions.other='old';
  assert.match(evaluateCapabilityGate(f.universe,f.services,[edge],f.runs).failures.join('\n'),/example-other other.*different/);
});

test('resolved dependency locks must have retained matching bytes before evidence can certify', () => {
  const root = mkdtempSync(join(tmpdir(), 'capability-lock-'));
  const digest = value => createHash('sha256').update(value).digest('hex');
  try {
    writeFileSync(join(root, 'test.log'), 'actual output');
    writeFileSync(join(root, 'resolved.lock'), 'tested dependencies');
    const run = {artifact_path:'test.log', artifact_sha256:digest('actual output'),
      resolved_cargo_lock_sha256:digest('tested dependencies'), resolved_cargo_lock_artifact_path:'resolved.lock'};
    assert.equal(verifyRunArtifacts({run}, root).run.artifact_verified, true);
    writeFileSync(join(root, 'resolved.lock'), 'restored checkout dependencies');
    assert.equal(verifyRunArtifacts({run}, root).run.artifact_verified, false);
    assert.equal(verifyRunArtifacts({run:{...run, resolved_cargo_lock_artifact_path:undefined}}, root).run.artifact_verified, false);
    assert.equal(verifyRunArtifacts({run:{...run, resolved_cargo_lock_sha256:undefined}}, root).run.artifact_verified, false);
    assert.equal(verifyRunArtifacts({run:{...run, resolved_cargo_lock_artifact_path:'../outside.lock'}}, root).run.artifact_verified, false);
  } finally { rmSync(root, {recursive:true, force:true}); }
});

test('unresolved compiler inputs prevent source completion even with otherwise verified operations',()=>{
 const f=reviewedFixture();f.services.example.embedded_source_gaps={canonical:[{reason:'missing script'}],working:[]};
 assert.match(evaluateCapabilityGate(f.universe,f.services,[],f.runs).failures.join('\n'),/compiler-embedded source/);
});
