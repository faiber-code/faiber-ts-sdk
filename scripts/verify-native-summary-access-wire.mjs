// Actual packed-package consumer for explicitly owned Chat/Session native fixtures.
// Never point this probe at a live service: it mutates a disposable observer policy.
import assert from 'node:assert/strict';
import {FaiberClient} from '@faiber/sdk-core';
import {ChatApi} from '@faiber/faiber-chat';
import {SessionApi} from '@faiber/faiber-session';

const service=process.env.FAIBER_NATIVE_SUMMARY_SERVICE;
const phase=process.env.FAIBER_NATIVE_SUMMARY_PHASE;
const base=new URL(process.env.FAIBER_NATIVE_SUMMARY_BASE);
assert.ok(['chat','session'].includes(service));
assert.ok(['enabled','denied'].includes(phase));
assert.equal(base.protocol,'http:');assert.equal(base.hostname,'127.0.0.1');
assert.equal(base.pathname,'/');assert.equal(base.search,'');assert.equal(base.username,'');
const Api=service==='chat'?ChatApi:SessionApi;
const client=new FaiberClient(service,{domains:{[service]:base.origin},tokenProvider:{getTokens:()=>({accessToken:'disposable-admin-token'}),setTokens:()=>{}},axios:{timeout:15000}});
const api=new Api(client).operations;
let assertions=0;
const equal=(a,b)=>{assert.deepEqual(a,b);assertions++;};
const check=a=>{assert.ok(a);assertions++;};
const denied=async(promise,status)=>{await assert.rejects(promise,error=>error.response?.status===status);assertions++;};
if(phase==='denied') {
  await denied(api.nativeSummaryAccessStatus(),403);
  await denied(api.saveNativeSummaryAccessPolicy({enabled:false,expected_revision:0,reason:'Denied disposable writer'}),403);
  await denied(api.revokeNativeSummaryObject({object_id:'00000000-0000-0000-0000-000000000099',reason:'Denied disposable revoke'}),403);
  await denied(api.restoreNativeSummaryObject('00000000-0000-0000-0000-000000000099',{reason:'Denied disposable restore'}),403);
} else {
  const before=await api.nativeSummaryAccessStatus();
  equal(before.status,200);equal(before.data.status,'success');
  equal(before.config.headers.get('Authorization'),'Bearer disposable-admin-token');
  const initial=before.data.data;
  check(initial.policy?.enabled);check(Number.isSafeInteger(initial.policy.revision));
  const object='00000000-0000-0000-0000-000000000099';
  const revoked=await api.revokeNativeSummaryObject({object_id:object,reason:'Packed SDK owned object exclusion'});
  equal(revoked.status,200);equal(revoked.data.data.revocations,initial.revocations+1);
  equal(revoked.data.data.active_grants,initial.active_grants-1);
  const restored=await api.restoreNativeSummaryObject(object,{reason:'Packed SDK reviewed object restoration'});
  equal(restored.status,200);equal(restored.data.data.revocations,initial.revocations);
  equal(restored.data.data.active_grants,initial.active_grants);
  equal(JSON.parse(restored.config.data).reason,'Packed SDK reviewed object restoration');
  const off=await api.saveNativeSummaryAccessPolicy({enabled:false,expected_revision:initial.policy.revision,reason:'Packed SDK pause'});
  equal(off.status,200);equal(off.data.data.policy.enabled,false);
  equal(off.data.data.policy.revision,initial.policy.revision+1);
  await denied(api.saveNativeSummaryAccessPolicy({enabled:true,expected_revision:initial.policy.revision,reason:'Stale packed SDK update'}),409);
  await denied(api.saveNativeSummaryAccessPolicy({enabled:true,expected_revision:off.data.data.policy.revision,reason:' '}),422);
  equal((await api.nativeSummaryAccessStatus()).data.data.policy,off.data.data.policy);
  const on=await api.saveNativeSummaryAccessPolicy({enabled:true,expected_revision:off.data.data.policy.revision,reason:'Packed SDK restore initial enabled state'});
  equal(on.status,200);equal(on.data.data.policy.enabled,true);
  equal(on.data.data.policy.revision,initial.policy.revision+2);
  const unauthenticated=new Api(new FaiberClient(service,{domains:{[service]:base.origin},axios:{timeout:15000}}));
  await denied(unauthenticated.operations.nativeSummaryAccessStatus(),401);
}
console.log(JSON.stringify({status:'passed',id:`${service}-native-summary-packed-sdk`,phase,assertions,scope:'Actual packed SDK through the production application factory on owned migrated PostgreSQL and current-IDP HTTP fixture; no deployed identity, model or billing assertion.'}));
