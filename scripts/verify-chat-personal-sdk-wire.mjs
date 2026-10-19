/** Actual Chat router + real PostgreSQL. Gateway headers are a trusted-context fixture, not deployed auth proof. */
import assert from 'node:assert/strict';
import {createHmac} from 'node:crypto';
import {FaiberClient} from '../packages/core/dist/index.js';
import {ChatApi} from '../packages/chat/dist/index.js';
const env=process.env,base=env.INFERA_CHAT_SDK_BASE;assert.match(base??'',/^http:\/\/127\.0\.0\.1:\d+$/);
const org=env.INFERA_CHAT_SDK_ORG,user=env.INFERA_CHAT_SDK_USER,other=env.INFERA_CHAT_SDK_OTHER_USER;
const client=(actor=user,organization=org,permissions='chat:read')=>new ChatApi(new FaiberClient('chat',{domains:{chat:base},axios:{timeout:10000,headers:{'x-organization-id':organization,'x-user-id':actor,'x-user-permissions':permissions}}}));
const api=client();let assertions=0;
const denied=async(action,status)=>{await assert.rejects(action,e=>e.response?.status===status);assertions++;};
try {
 const page=await api.personal.conversations({limit:1});assert.equal(page.data.data.items.length,1);assert.equal(page.data.data.items[0].id,env.INFERA_CHAT_SDK_CONVERSATION);assert.equal(page.data.data.items[0].unread_count,1);assert.equal(page.data.data.next_cursor,null);assertions++;
 const unread=await api.personal.unreadCount();assert.equal(unread.data.data.unread_count,1);assertions++;
 const initial=await api.personal.events({wait_seconds:0});assert.deepEqual(initial.data.data.events,[]);assert.ok(initial.data.data.cursor>=1);assertions++;
 const replay=await api.personal.events({cursor:0,wait_seconds:0});assert.ok(replay.data.data.events.length>=1);assert.equal(replay.data.data.cursor,initial.data.data.cursor);assert.ok(replay.data.data.events.every(e=>e.conversation_id===env.INFERA_CHAT_SDK_CONVERSATION));assert.ok(!JSON.stringify(replay.data).includes('must-not-leak'));assertions++;
 const repeated=await api.personal.events({cursor:0,wait_seconds:0});assert.deepEqual(repeated.data,replay.data);assertions++;
 await denied(()=>api.personal.events({cursor:initial.data.data.cursor+100,wait_seconds:0}),400);
 await denied(()=>api.personal.conversations({cursor:'not-a-uuid'}),400);
 const foreign=await client(user,env.INFERA_CHAT_SDK_OTHER_ORG).personal.conversations();assert.ok(!foreign.data.data.items.some(x=>x.id===env.INFERA_CHAT_SDK_CONVERSATION));assertions++;
 const stranger=await client(other).personal.conversations();assert.ok(!stranger.data.data.items.some(x=>x.id===env.INFERA_CHAT_SDK_CONVERSATION));assertions++;
 const config=await api.personal.realtimeConfig();const channel=`private-chat.user.${org}.${user}`;assert.equal(config.data.data.channel,channel);assert.equal(config.data.data.app_key,'owned-public-key');assert.equal(config.data.data.event,'chat.changed');assert.ok(!JSON.stringify(config.data).includes('owned-private-chat-signing-fixture'));assertions++;
 const auth=await api.personal.realtimeAuth({socket_id:'123.456',channel_name:channel});assert.equal(auth.data.auth,'owned-public-key:'+createHmac('sha256','owned-private-chat-signing-fixture').update(`123.456:${channel}`).digest('hex'));assertions++;
 await denied(()=>api.personal.realtimeAuth({socket_id:'123.456',channel_name:`private-chat.user.${org}.${other}`}),403);
 const noRights=client(user,org,'');
 for(const call of [()=>noRights.personal.conversations(),()=>noRights.personal.unreadCount(),()=>noRights.personal.events({wait_seconds:0}),()=>noRights.personal.realtimeConfig(),()=>noRights.personal.realtimeAuth({socket_id:'123.456',channel_name:channel})])await denied(call,403);
 const missing=new ChatApi(new FaiberClient('chat',{domains:{chat:base}}));await denied(()=>missing.personal.conversations(),401);
 const aborted=new AbortController();aborted.abort();await assert.rejects(()=>api.personal.events({cursor:0,wait_seconds:0},{signal:aborted.signal}),e=>e.code==='ERR_CANCELED');assertions++;
 console.log(JSON.stringify({status:'passed',assertions,scope:'All5 actual mounted personal Chat HTTP operations, real PostgreSQL unread/member/organization filters, durable cursor replay, private channel HMAC, permission denials and cancellation. No live gateway header-stripping or Sockudo/WebSocket delivery certification.'}));
}catch(error){console.error(JSON.stringify({status:'failed',assertions,name:error.name,message:error.message,status_code:error.response?.status,code:error.code}));process.exitCode=1;}
