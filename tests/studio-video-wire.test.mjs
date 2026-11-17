import assert from 'node:assert/strict';
import test from 'node:test';
import {FaiberClient} from '../packages/core/dist/index.js';
import {ChatApi} from '../packages/chat/dist/index.js';
test('video jobs preserve authorization, request identity and binary download options',async()=>{
 const seen=[];const api=new ChatApi(new FaiberClient('chat',{domains:{chat:'https://owned.invalid'},getAuthorization:()=> 'Bearer fixture',axios:{adapter:async config=>{seen.push(config);return{config,status:200,statusText:'OK',headers:{'x-request-id':'fixture'},data:{data:{id:'run'}}}}}}));
 const signal=new AbortController().signal,input={request_id:'3fe66b8a-2056-4a0c-8a58-07a7b1c29231',prompt:'Ocean',model_id:'avalai:veo-3.1-fast-generate-001',seconds:4,size:'1280x720'};
 await api.studio.videoModels({signal});await api.studio.generateVideo(input,{signal});await api.studio.videoRun('run/id',{signal});const result=await api.studio.videoContent('run/id',{signal});
 assert.deepEqual(seen.map(c=>[c.method,c.url]),[['get','/api/v1/studio/video-models'],['post','/api/v1/studio/videos'],['get','/api/v1/studio/videos/run%2Fid'],['get','/api/v1/studio/videos/run%2Fid/content']]);
 for(const request of seen){assert.equal(request.headers.get('authorization'),'Bearer fixture');assert.equal(request.signal,signal)}
 assert.deepEqual(JSON.parse(seen[1].data),input);assert.equal(seen[3].responseType,'blob');assert.equal(seen[3].timeout,180000);assert.equal(result.headers['x-request-id'],'fixture');
});
