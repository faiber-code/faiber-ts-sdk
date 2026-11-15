import assert from 'node:assert/strict';
import test from 'node:test';
import {FaiberClient} from '../packages/core/dist/index.js';
import {ChatApi} from '../packages/chat/dist/index.js';
test('Studio operations preserve authenticated transport, cancellation and response metadata',async()=>{
 const seen=[];const api=new ChatApi(new FaiberClient('chat',{domains:{chat:'https://owned.invalid'},getAuthorization:()=> 'Bearer fixture',axios:{adapter:async config=>{seen.push(config);return{config,status:200,statusText:'OK',headers:{'x-request-id':'fixture'},data:{data:{id:'run'}}}}}}));
 const signal=new AbortController().signal;
 const input={request_id:'3fe66b8a-2056-4a0c-8a58-07a7b1c29231',prompt:'ceramic cube',model_id:'faiber_cloud:studio-image-default',confirmed_cost:1,currency:'USD',size:'1024x1024',images:[]};
 await api.studio.models({signal});await api.studio.generate(input,{signal});await api.studio.run('run/id',{signal});const result=await api.studio.image('run/id',{signal});await api.studio.cancel('run/id',{signal});
 assert.deepEqual(seen.map(c=>[c.method,c.url]),[['get','/api/v1/studio/image-models'],['post','/api/v1/studio/images'],['get','/api/v1/studio/images/run%2Fid'],['get','/api/v1/studio/images/run%2Fid/content'],['post','/api/v1/studio/images/run%2Fid/cancel']]);
 for(const request of seen){assert.equal(request.headers.get('authorization'),'Bearer fixture');assert.equal(request.signal,signal)}
 assert.deepEqual(JSON.parse(seen[1].data),input);assert.equal(result.headers['x-request-id'],'fixture');assert.equal(result.status,200);
});
