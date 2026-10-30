import assert from 'node:assert/strict';
import test from 'node:test';
import {FaiberClient} from '../packages/core/dist/index.js';
import {TaskApi} from '../packages/task/dist/index.js';
test('offline commands retain original time, stable ID, full response and cancellation',async()=>{
 const calls=[],payload={data:{id:'stable-id',outcome:'superseded'}};
 const api=new TaskApi(new FaiberClient('task',{domains:{task:'https://task.example.invalid'},axios:{adapter:async config=>{calls.push(config);return{data:payload,status:200,statusText:'OK',headers:{'x-request-id':'test'},config}}}}));
 const signal=new AbortController().signal;
 await api.offline.capabilities({signal});
 const input={id:'stable-id',target:'task-id',changed_at:'2026-10-30T10:00:00.001Z',kind:'checklist',payload:{items:[{id:'step-id',title:'A step',done:true}]}};
 const response=await api.offline.apply(input,{signal});assert.equal(calls[0].url,'/api/v1/offline-sync');assert.equal(calls[1].url,calls[0].url);assert.deepEqual(JSON.parse(calls[1].data),input);assert.equal(calls[1].signal,signal);assert.equal(response.data,payload);assert.equal(response.status,200);
});
