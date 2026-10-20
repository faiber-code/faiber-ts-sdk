import assert from 'node:assert/strict';
import test from 'node:test';
import {AxiosError,AxiosHeaders} from 'axios';
import {FaiberSDK} from '../packages/sdk/dist/index.js';
const operation='cf1b746e-98bd-4da4-9be1-ceae4b395d85';
function fixture({failWrites=false}={}){
 const seen=[];
 const sdk=new FaiberSDK({domains:{},defaultDomain:'https://owned.test',authMode:'cookie',axios:{adapter:async config=>{
  seen.push(config);
  const response={status:failWrites&&config.method!=='get'?409:200,statusText:'Owned transport',headers:new AxiosHeaders({'x-request-id':'owned'}),config,
   data:{data:{id:'assistant',version:7,expected_knowledge_policy_revision:3,assistant_id:'assistant',expected_policy_revision:3}}};
  if(response.status===409)throw new AxiosError('Owned conflict','409',config,null,response);
  return response;
 }}});
 return {sdk,seen};
}
const input=r=>typeof r.data==='string'?JSON.parse(r.data):r.data;
test('Knowledge configure sends the captured revision and UUID once without fetching a replacement',async()=>{
 const f=fixture({failWrites:true});
 await f.sdk.knowledge.assistantConfiguration('a/b');
 const body={configuration_id:operation,expected_policy_revision:2,short_memory_enabled:false};
 await assert.rejects(f.sdk.knowledge.configureAssistant('a/b',body),e=>e.response?.status===409);
 assert.equal(f.seen.length,2);assert.equal(f.seen[0].method,'get');
 assert.deepEqual(input(f.seen[1]),body);assert.equal(f.seen[1].url,'/api/v1/runtime/assistants/a%2Fb/configure');
});
test('Knowledge rejects missing captured revision and nil operation before transport',()=>{
 const f=fixture();
 assert.throws(()=>f.sdk.knowledge.configureAssistant('a',{configuration_id:operation}),TypeError);
 assert.throws(()=>f.sdk.knowledge.configureAssistant('a',{configuration_id:'00000000-0000-0000-0000-000000000000',expected_policy_revision:1}),TypeError);
 assert.equal(f.seen.length,0);
});
test('Chat update preserves both editor revisions and operation on409 without rebasing',async()=>{
 const f=fixture({failWrites:true});
 await f.sdk.chat.managedAssistant('a/b');
 const body={configuration_id:operation,expected_version:7,expected_knowledge_policy_revision:3,name:'Retained draft'};
 await assert.rejects(f.sdk.chat.updateAssistant('a/b',body),e=>e.response?.status===409);
 assert.equal(f.seen.length,2);assert.deepEqual(input(f.seen[1]),body);
 assert.equal(f.seen[1].url,'/api/v1/admin/assistants/a%2Fb');
 assert.throws(()=>f.sdk.chat.updateAssistant('a',{configuration_id:operation,expected_version:7}),TypeError);
 assert.throws(()=>f.sdk.chat.createAssistant({name:'Missing operation'}),TypeError);
 assert.equal(f.seen.length,2);
});
test('authoritative outcome and explicit recover/cancel use canonical scoped paths and cancellation',async()=>{
 const f=fixture(),abort=new AbortController();
 await f.sdk.knowledge.assistantConfigurationOperation('a/b',operation,{signal:abort.signal});
 await f.sdk.knowledge.cancelAssistantConfiguration('a/b',operation,{reason:'Reviewed cancellation'});
 await f.sdk.chat.assistantPolicyOperation(operation);
 await f.sdk.chat.reconcileAssistantPolicy(operation,{action:'recover'});
 await f.sdk.chat.reconcileAssistantPolicy(operation,{action:'cancel'});
 assert.equal(f.seen[0].signal,abort.signal);
 assert.equal(f.seen[0].url,'/api/v1/runtime/assistants/a%2Fb/configuration-operations/'+operation);
 assert.deepEqual(input(f.seen[1]),{reason:'Reviewed cancellation'});
 assert.equal(f.seen[2].url,'/api/v1/admin/assistant-policy-operations/'+operation);
 assert.deepEqual(input(f.seen[3]),{action:'recover'});assert.deepEqual(input(f.seen[4]),{action:'cancel'});
 assert.deepEqual(f.seen.map(r=>r.method),['get','post','get','post','post']);
});
