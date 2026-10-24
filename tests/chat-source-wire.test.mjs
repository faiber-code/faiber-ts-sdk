import {test} from 'node:test';
import assert from 'node:assert/strict';
import {FaiberClient, MemoryTokenProvider} from '../packages/core/dist/index.js';
import {ChatApi} from '../packages/chat/dist/index.js';

async function fixture(data = {status:'success',data:null,meta:null}) {
 const tokens = new MemoryTokenProvider();
 await tokens.setTokens({accessToken:'chat-source-test-token'});
 const requests=[];
 const api=new ChatApi(new FaiberClient('chat',{
  domains:{chat:'https://chat.example'},tokenProvider:tokens,
  axios:{withCredentials:true,adapter:async config=>{
   requests.push(config);
   return {status:200,statusText:'OK',headers:{'x-request-id':'chat-wire'},data,config};
  }},
 }));
 return {api,requests};
}

test('Chat TTS generated operation preserves lowercase format and raw response bytes',async()=>{
 const bytes=new Uint8Array([82,73,70,70]).buffer;
 const {api,requests}=await fixture(bytes);
 const signal=new AbortController().signal;
 const response=await api.operations.routesSynthesizePost({text:'Read this',language:'en',format:'wav'},{signal});
 assert.equal(response.data,bytes);
 assert.equal(response.headers['x-request-id'],'chat-wire');
 assert.equal(requests[0].responseType,'arraybuffer');
 assert.equal(JSON.parse(requests[0].data).format,'wav');
 assert.equal(requests[0].headers.get('Authorization'),'Bearer chat-source-test-token');
 assert.equal(requests[0].withCredentials,true);
 assert.equal(requests[0].signal,signal);
});

test('Chat transcription infers Blob audio MIME and retains explicit MIME for raw bytes',async()=>{
 const {api,requests}=await fixture({status:'success',data:{text:'Hello',engine:'cloud-stt',model_ref:'model'},meta:null});
 const recording=new Blob([new Uint8Array([1,2,3])],{type:'audio/webm'});
 await api.operations.routesTranscribePost(recording,{language:'en'});
 assert.equal(requests[0].headers.get('Content-Type'),'audio/webm');
 assert.equal(requests[0].data,recording);
 assert.deepEqual(requests[0].params,{language:'en'});
 await api.operations.routesTranscribePost(new Uint8Array([1,2,3]),{language:'auto'},{headers:{'Content-Type':'audio/wav'}});
 assert.equal(requests[1].headers.get('Content-Type'),'audio/wav');
 assert.equal(requests[1].headers.get('Authorization'),'Bearer chat-source-test-token');
});

test('Chat reaction returns a reaction record and realtime auth keeps distinct form/JSON encodings',async()=>{
 const reaction={id:'reaction',message_id:'message',user_id:'user',emoji:'👍',created_at:'2026-10-21T00:00:00Z'};
 const {api,requests}=await fixture({status:'success',data:reaction,meta:null});
 const response=await api.react('message/1',{emoji:'👍'});
 assert.equal(response.data.data.message_id,'message');
 assert.equal(requests[0].url,'/api/v1/messages/message%2F1/reactions');
 await api.operations.routesRealtimeAuthPost('room/1',{socket_id:'1.2',channel_name:'private-room'});
 assert.equal(requests[1].headers.get('Content-Type'),'application/x-www-form-urlencoded');
 assert.equal(new URLSearchParams(requests[1].data).get('socket_id'),'1.2');
 await api.personal.realtimeAuth({socket_id:'1.2',channel_name:'private-user'});
 assert.equal(requests[2].headers.get('Content-Type'),'application/json');
 assert.equal(JSON.parse(requests[2].data).channel_name,'private-user');
});
