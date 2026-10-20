import assert from 'node:assert/strict';
import test from 'node:test';
import {AxiosError,AxiosHeaders} from 'axios';
import {FaiberSDK} from '../packages/sdk/dist/index.js';
const revision='a'.repeat(64);
function fixture(wire={data:[]},failStatus){
 const seen=[];
 const sdk=new FaiberSDK({domains:{},defaultDomain:'https://owned.test',authMode:'cookie',axios:{adapter:async config=>{
  seen.push(config);const response={status:failStatus??200,statusText:'Owned',headers:new AxiosHeaders({'x-request-id':'owned'}),config,data:wire};
  if(failStatus)throw new AxiosError('Owned status',String(failStatus),config,null,response);
  return response;
 }}});
 return {sdk,seen};
}
const data=config=>typeof config.data==='string'?JSON.parse(config.data):config.data;
test('memory subject list preserves actual filters, metadata and cancellation',async()=>{
 const wire={data:[],meta:{total:17,page:2,limit:10}},f=fixture(wire),abort=new AbortController();
 const params={q:'Person',assistant_id:'assistant',memory_type:'long',status:'disabled',enabled:false,page:2,limit:10};
 const result=await f.sdk.knowledge.memorySubjects(params,{signal:abort.signal});
 assert.deepEqual(result.data,wire);assert.deepEqual(f.seen[0].params,params);assert.equal(f.seen[0].signal,abort.signal);assert.equal(f.seen[0].url,'/api/v1/memory-subjects');
});
test('subject, record and audit reads preserve both encoded scope identifiers',async()=>{
 const f=fixture();
 await f.sdk.knowledge.memorySubject('s/a');await f.sdk.knowledge.memories('s/a',{page:3,status:'expired'});
 await f.sdk.knowledge.memory('s/a','m/a');await f.sdk.knowledge.memoryAudit('s/a',{page:2,limit:50});
 assert.deepEqual(f.seen.map(r=>r.url),['/api/v1/memory-subjects/s%2Fa','/api/v1/memory-subjects/s%2Fa/memories','/api/v1/memory-subjects/s%2Fa/memories/m%2Fa','/api/v1/memory-subjects/s%2Fa/audit-events']);
 assert.equal(f.seen[1].params.status,'expired');assert.equal(f.seen[3].params.page,2);
});
test('policy writes require captured revision and409 is surfaced once without rebasing',async()=>{
 const f=fixture({status:'error'},409);
 assert.throws(()=>f.sdk.knowledge.setMemoryOverride('s',{short_memory_enabled:false}),TypeError);assert.equal(f.seen.length,0);
 const input={expected_revision:revision,short_memory_enabled:null,long_memory_enabled:false,reason:'Reviewed'};
 await assert.rejects(f.sdk.knowledge.setMemoryOverride('s',input),e=>e.response?.status===409);
 assert.equal(f.seen.length,1);assert.deepEqual(data(f.seen[0]),input);assert.equal(f.seen[0].method,'put');
});
test('source controls send desired state and captured version without blind toggle',async()=>{
 const f=fixture({data:{id:'source',status:'paused',version:8}});
 assert.throws(()=>f.sdk.knowledge.setSourceState('source',{desired_state:'paused',expected_version:0}),TypeError);
 const input={desired_state:'paused',expected_version:7};
 const result=await f.sdk.knowledge.setSourceState('s/a',input);
 assert.deepEqual(data(f.seen[0]),input);assert.equal(f.seen[0].url,'/api/v1/sources/s%2Fa/pause');assert.equal(result.data.data.version,8);
});
test('correction sends explicit reviewed target set and keeps provider response context',async()=>{
 const f=fixture({data:{applied:true,replayed:false}});const input={correction_id:'correction',expected_memory_ids:['one','two'],user_statement:'My name is Correct',reason:'User request'};
 const result=await f.sdk.knowledge.correctMemory('subject',input,{timeout:5000});
 assert.deepEqual(data(f.seen[0]),input);assert.equal(f.seen[0].timeout,5000);assert.equal(result.headers.get('x-request-id'),'owned');
});
test('selective forgetting keeps reason and type in the canonical query',async()=>{
 const f=fixture();await f.sdk.knowledge.forgetMemory('s/a','m/a',{memory_type:'short',reason:'Owned'});await f.sdk.knowledge.clearSubjectMemory('s/a',{reason:'Scope clear'});
 assert.equal(f.seen[0].method,'delete');assert.deepEqual(f.seen[0].params,{memory_type:'short',reason:'Owned'});assert.equal(f.seen[1].params.reason,'Scope clear');
});
test('MCP forgetting represents committed scope fencing even with zero rows changed',async()=>{
 const result={scope_fenced:true,cleared:true,rows_changed:0,subject_id:null};
 const f=fixture({jsonrpc:'2.0',id:'memory-forget',result:{content:[{type:'text',text:JSON.stringify(result)}],structuredContent:result,isError:false}});
 const response=await f.sdk.knowledge.forgetAssistantScope('assistant',{user_id:'user',memory_type:'short',reason:'Owned'});
 assert.equal(f.seen[0].url,'/api/v1/runtime/mcp');assert.equal(data(f.seen[0]).params.name,'memory_forget');assert.equal(data(f.seen[0]).params.arguments.assistant_id,'assistant');assert.deepEqual(response.data.result.structuredContent,result);
});
