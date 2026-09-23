import {test} from 'node:test';
import assert from 'node:assert/strict';
import {FaiberClient} from '../packages/core/dist/index.js';
import {ChatApi} from '../packages/chat/dist/index.js';
test('Learning transcript and questions preserve scoped routes, transport and cancellation',async()=>{
 const requests=[];const controller=new AbortController();
 const api=new ChatApi(new FaiberClient('chat',{domains:{chat:'https://chat.example'},axios:{adapter:async config=>{requests.push(config);return {status:200,statusText:'OK',data:{status:'success',data:[],meta:null},headers:{'x-request-id':'verified'},config};}}}));
 const response=await api.learning.history('run/1',{signal:controller.signal});assert.equal(response.status,200);assert.equal(response.headers['x-request-id'],'verified');assert.equal(requests[0].url,'/api/v1/learning/runs/run%2F1/messages');assert.equal(requests[0].signal,controller.signal);
 await api.learning.ask('run/1',{question:'راهنمایی',idempotency_key:'same-key'});assert.equal(requests[1].url,'/api/v1/learning/runs/run%2F1/questions');assert.deepEqual(JSON.parse(requests[1].data),{question:'راهنمایی',idempotency_key:'same-key'});
});
