import test from 'node:test';
import assert from 'node:assert/strict';
import {AxiosError,AxiosHeaders} from 'axios';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
import {LmsApi} from '../packages/lms/dist/index.js';
import {AssetApi} from '../packages/asset/dist/index.js';
const id='11111111-1111-4111-8111-111111111111';
function setup(service,status,body){const seen=[];const client=new FaiberClient(service,{domains:{[service]:'https://owned.test'},tokenProvider:new MemoryTokenProvider({accessToken:'fixture'}),axios:{adapter:async c=>{seen.push(c);const r={data:body,status,statusText:'fixture',headers:new AxiosHeaders({'x-request-id':'owned'}),config:c};if(status>=400)throw new AxiosError('fixture',String(status),c,null,r);return r;}}});return {api:service==='lms'?new LmsApi(client):new AssetApi(client),seen};}
test('Academy completion and grading preserve UUID response and exact request body',async()=>{
 const f=setup('lms',200,{status:'success',data:{session_id:id,completed:true}});
 const result=await f.api.completeAcademySession(id,id,{idempotency_key:'same-operation'});
 assert.equal(result.data.data.session_id,id);assert.equal(result.headers.get('x-request-id'),'owned');
 assert.deepEqual(JSON.parse(f.seen[0].data),{idempotency_key:'same-operation'});
 assert.equal(f.seen[0].headers.get('Authorization'),'Bearer fixture');
 const g=setup('lms',200,{status:'success',data:{score:100,passing_mark:70,passed:true}});
 await g.api.submitAcademyExam(id,{answers:{[id]:'answer'}});
 assert.equal(g.seen[0].url,`/api/v1/academy/attempts/${id}/submit`);
 assert.deepEqual(JSON.parse(g.seen[0].data),{answers:{[id]:'answer'}});
});
for(const status of [401,403,404,409,422,500])test(`completion status ${status} remains observable without replay`,async()=>{
 const f=setup('lms',status,{message:'server-decision'});
 await assert.rejects(f.api.submitAcademyExam(id,{answers:{}}),e=>e.response.status===status&&e.response.data.message==='server-decision');
 assert.equal(f.seen.length,1);
});
test('Asset completion retains event identity, decimal value and server authority errors',async()=>{
 const input={action_name:'reviewed-action',profile_id:id,event_id:id,value:'9007199254740993',metadata:{origin:'fixture'}};
 const f=setup('asset',403,{message:'forbidden'});
 await assert.rejects(f.api.operations.actionActionsCompletePost(input),e=>e.response.status===403);
 assert.equal(f.seen.length,1);assert.equal(f.seen[0].url,'/api/v1/actions/complete');
 assert.deepEqual(JSON.parse(f.seen[0].data),input);assert.equal(f.seen[0].headers.get('Authorization'),'Bearer fixture');
});
