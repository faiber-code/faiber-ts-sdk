import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
import {TaskApi} from '../packages/task/dist/index.js';
import {taskReviewedOperationContracts} from '../scripts/task-reviewed-operation-contracts.mjs';
// Owned transport fixtures prove SDK serialization and credential forwarding only.
function fixture(data,status=200,authMode='bearer'){
 const requests=[];
 const api=new TaskApi(new FaiberClient('task',{domains:{task:'https://task.example.invalid'},authMode,tokenProvider:new MemoryTokenProvider({accessToken:'task-owned-token'}),axios:{adapter:async config=>{requests.push(config);return {data,status,statusText:'fixture',headers:{etag:'"3"','x-request-id':'owned-task-fixture'},config};}}}));
 return {api,requests};
}
test('Task review covers every pinned mounted HTTP operation exactly once',()=>{
 const inventory=JSON.parse(readFileSync(new URL('../contracts/service-capabilities/task.json',import.meta.url)));
 assert.equal(inventory.sdk_source_revision,'b8ed5921e4f6bd2d7f4ef675f0cb8b3fbbb1e23d');
 assert.equal(inventory.operations.length,128);
 assert.deepEqual(Object.keys(taskReviewedOperationContracts).sort(),inventory.operations.map(o=>'task:'+o.id).sort());
 const types=readFileSync(new URL('../packages/task/src/operations.types.ts',import.meta.url),'utf8');
 assert.doesNotMatch(types,/ApiEnvelope<JsonValue(?:\[\])?>/);
});
test('governed proposal preserves discriminated payloads, revision and cancellation',async()=>{
 const payload={status:'ok',message:'ok',data:{revision:3,preview:[]}};const {api,requests}=fixture(payload);const signal=new AbortController().signal;
 const data={conversation_id:'conversation',project_id:null,operations:[{kind:'reminder',id:'item',expected_version:2,reminder:{anchor_at:'2027-01-01T12:00:00Z',timezone:'UTC',triggers:[{kind:'relative',minutes_before:10},{kind:'same_day',time:'09:00'}]}}]};
 const response=await api.workspaceAssistant.propose(data,{signal});
 assert.deepEqual(JSON.parse(requests[0].data),data);assert.equal(requests[0].signal,signal);assert.equal(response.data,payload);assert.equal(requests[0].headers.get('Authorization'),'Bearer task-owned-token');
 await api.workspaceAssistant.apply('proposal',3);assert.equal(requests[1].headers.get('If-Match'),'3');assert.equal(requests[1].url,'/api/v1/review-proposals/proposal/apply');
});
test('team assignment and nullable clears survive Task convenience updates',async()=>{
 const {api,requests}=fixture({status:'ok',message:'ok',data:{team_id:null}});
 await api.listWorkItems({team_id:'team',limit:20});assert.deepEqual(requests[0].params,{team_id:'team',limit:20});
 await api.updateWorkItem('item',2,{team_id:null,estimate:null,due_at:null});assert.deepEqual(JSON.parse(requests[1].data),{team_id:null,estimate:null,due_at:null});assert.equal(requests[1].headers.get('If-Match'),'2');
});
test('feedback preconditions, idempotency and raw MIME bytes are preserved',async()=>{
 const {api,requests}=fixture({status:'ok',message:'ok',data:{id:'report'}});
 const data={request_type:'bug',reporting_role:'reviewer',title:'A bug',description:'Observed',expected_behavior:'Expected',source_client:'web',context:{schema_version:1,application:{version:'1',locale:'en',timezone:'UTC',platform:'web'},navigation:{route:'/page',page_title:'Page',feature:'page'},capture:{captured_at:'2026-10-21T00:00:00Z',status:'unavailable'}}};
 await api.feedback.submit(data,'stable-key',{headers:{'X-Feedback-Reporter-Id':'reporter'}});
 assert.equal(requests[0].headers.get('Idempotency-Key'),'stable-key');assert.equal(requests[0].headers.get('X-Feedback-Reporter-Id'),'reporter');
 const bytes=new Blob(['fixture'],{type:'image/png'});await api.operations.feedbackUploadPut('attachment',bytes,{headers:{'X-Feedback-Reporter-Id':'reporter'}});assert.equal(requests[1].data,bytes);assert.equal(requests[1].headers.get('Content-Type'),'image/png');
 await api.operations.feedbackContentGet('report','attachment');assert.equal(requests[2].responseType,'arraybuffer');
});
test('raw realtime signature and metrics retain unwrapped response data',async()=>{
 const signature={auth:'app:signature'};const {api,requests}=fixture(signature);
 const response=await api.operations.routesAuthorizePost('note',{socket_id:'1.2',channel_name:'private-note-note'});assert.equal(response.data,signature);assert.equal(requests[0].url,'/api/v1/notes/note/realtime/auth');
 await api.operations.routesCatalogGetApiV1NotesDataCatalog({project_id:'project'});assert.deepEqual(requests[1].params,{project_id:'project'});
 const metrics=fixture('infera_task_up 1\n');assert.equal((await metrics.api.operations.routesMetricsGet()).data,'infera_task_up 1\n');assert.equal(metrics.requests[0].responseType,'text');
});
test('generated SSE selects fetch by default and preserves explicit adapters',async()=>{
 const {api,requests}=fixture('event: invalidate\ndata: changed\n\n');
 // An explicit fixture adapter allows transport inspection without a network request.
 const adapter=async config=>{requests.push(config);return {data:'frame',status:200,statusText:'OK',headers:{},config};};
 await api.operations.routesEventsGet({adapter});assert.equal(requests.at(-1).adapter,adapter);assert.equal(requests.at(-1).responseType,'stream');
 const source=readFileSync(new URL('../packages/task/src/operations.ts',import.meta.url),'utf8');const body=source.slice(source.indexOf('  routesEventsGet('),source.indexOf('  routesEventsGet(')+650);assert.match(body,/adapter: options\?\.adapter \?\? "fetch"/);
});
test('204 deletion retains empty body and cookie authorization config',async()=>{
 const {api,requests}=fixture(undefined,204,'cookie');const response=await api.operations.routesRemoveWorkItemDelete('item',{headers:{'If-Match':'3'}});
 assert.equal(response.status,204);assert.equal(response.data,undefined);assert.equal(requests[0].withCredentials,true);assert.equal(requests[0].headers.get('If-Match'),'3');
});
