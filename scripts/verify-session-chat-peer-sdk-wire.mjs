/** Actual Session + Chat HTTP; forwarded principals are explicit gateway fixtures. */
import assert from 'node:assert/strict';
import {writeFile,access} from 'node:fs/promises';
import {setTimeout as delay} from 'node:timers/promises';
import {createHmac} from 'node:crypto';
import {FaiberClient} from '../packages/core/dist/index.js';
import {SessionApi} from '../packages/session/dist/index.js';
const e=process.env;for(const base of [e.INFERA_SESSION_PEER_BASE,e.INFERA_CHAT_SDK_BASE])assert.match(base??'',/^http:\/\/127\.0\.0\.1:\d+$/);
const user=e.INFERA_CHAT_SDK_USER,org=e.INFERA_CHAT_SDK_ORG,other=e.INFERA_CHAT_SDK_OTHER_USER;
const api=(actor=user,organization=org,permissions='chat:read')=>new SessionApi(new FaiberClient('session',{domains:{session:e.INFERA_SESSION_PEER_BASE},axios:{proxy:false,timeout:10000,headers:{...(actor?{'x-user-id':actor}:{}),...(organization?{'x-organization-id':organization}:{}),'x-user-permissions':permissions}}}));
let assertions=0;const ok=(value)=>{assert.ok(value);assertions++;};
const denied=async(fn,status)=>{await assert.rejects(fn,error=>error.response?.status===status);assertions++;};
const decode=response=>JSON.parse(Buffer.from(response.data).toString('utf8'));
const get=async(client,path,params)=>decode(await client.operations.routerProxyViewServiceAny('chat',path,'GET',undefined,params));
try{
 const sdk=api();
 for(const peer of ['chat','drm','lms'])await denied(()=>sdk.operations.routerProxyViewServiceAny(peer,'conversations','GET',undefined),502);
 await denied(()=>sdk.operations.routerProxyViewServiceAny('unsupported-peer','anything','GET',undefined),404);
 await writeFile(e.INFERA_SESSION_PEER_COORDINATE,e.INFERA_CHAT_SDK_BASE,{flag:'wx'});
 let ready=false;for(let i=0;i<100;i++){try{await access(e.INFERA_SESSION_PEER_COORDINATE+'.ready');ready=true;break;}catch{await delay(25);}}ok(ready);
 const page=await get(sdk,'me/conversations',{limit:1});ok(page.data.items.length===1&&page.data.items[0].id===e.INFERA_CHAT_SDK_CONVERSATION&&page.data.items[0].unread_count===1&&page.data.next_cursor===null);
 const unread=await get(sdk,'me/unread-count');ok(unread.data.unread_count===1);
 const initial=await get(sdk,'me/events',{wait_seconds:0});ok(initial.data.events.length===0&&initial.data.cursor>=1);
 const replay=await get(sdk,'me/events',{cursor:0,wait_seconds:0});ok(replay.data.events.length>=1&&replay.data.cursor===initial.data.cursor&&replay.data.events.every(x=>x.conversation_id===e.INFERA_CHAT_SDK_CONVERSATION)&&!JSON.stringify(replay).includes('must-not-leak'));
 ok(JSON.stringify(await get(sdk,'me/events',{cursor:0,wait_seconds:0}))===JSON.stringify(replay));
 await denied(()=>get(sdk,'me/events',{cursor:initial.data.cursor+100,wait_seconds:0}),400);
 await denied(()=>get(sdk,'me/conversations',{cursor:'not-a-uuid'}),400);
 const foreign=await get(api(user,e.INFERA_CHAT_SDK_OTHER_ORG),'me/conversations');ok(!foreign.data.items.some(x=>x.id===e.INFERA_CHAT_SDK_CONVERSATION));
 const stranger=await get(api(other),'me/conversations');ok(!stranger.data.items.some(x=>x.id===e.INFERA_CHAT_SDK_CONVERSATION));
 const config=await get(sdk,'me/realtime/config');const channel=`private-chat.user.${org}.${user}`;ok(config.data.channel===channel&&config.data.app_key==='owned-public-key'&&!JSON.stringify(config).includes('owned-private-chat-signing-fixture'));
 const post=(client,data)=>client.operations.routerProxyViewServiceAny('chat','me/realtime/auth','POST',JSON.stringify(data),undefined,{headers:{'Content-Type':'application/json',Cookie:'session=owned-browser-cookie'}});
 const auth=decode(await post(sdk,{socket_id:'123.456',channel_name:channel}));ok(auth.auth==='owned-public-key:'+createHmac('sha256','owned-private-chat-signing-fixture').update(`123.456:${channel}`).digest('hex'));
 await denied(()=>post(sdk,{socket_id:'123.456',channel_name:`private-chat.user.${org}.${other}`}),403);
 const noRights=api(user,org,'');for(const path of ['me/conversations','me/unread-count','me/events','me/realtime/config'])await denied(()=>get(noRights,path),403);
 await denied(()=>post(noRights,{socket_id:'123.456',channel_name:channel}),403);
 await denied(()=>get(api(null,null,''),'me/conversations'),401);
 // The proxy intentionally does not forward internal-service credentials.
 await denied(()=>sdk.operations.routerProxyViewServiceAny('chat',`integrations/lms/messages/${e.INFERA_CHAT_SDK_MESSAGE}/notification-context`,'GET',undefined,undefined,{headers:{'x-infera-lms-token':'owned-lms-context-fixture'}}),403);
 await denied(()=>sdk.operations.routerProxyViewServiceAny('chat','conversations','POST',new Uint8Array(2*1024*1024+1),undefined,{headers:{'Content-Type':'application/octet-stream'}}),413);
 const controller=new AbortController();controller.abort();await assert.rejects(()=>sdk.operations.routerProxyViewServiceAny('chat','me/events','GET',undefined,undefined,{signal:controller.signal}),error=>error.code==='ERR_CANCELED');assertions++;
 console.log(JSON.stringify({status:'passed',id:'session-chat-actual-sdk',assertions,operations:5,scope:'Actual selected Session production router to repaired Chat router and compiled SDK, real separate PostgreSQL databases/RabbitMQ. Personal Chat membership/organization/current forwarded permissions, query/body/status preservation, private realtime HMAC, no internal credential forwarding, missing config/body limits/cancellation. Trusted gateway identity fixture; not live IDP/gateway stripping, room-scoped group/AI, DRM/Asset/Profile/LMS success, SSE or Sockudo delivery certification.'}));
}catch(error){console.error(JSON.stringify({status:'failed',id:'session-chat-actual-sdk',assertions,name:error.name,message:error.message,status_code:error.response?.status,code:error.code}));process.exitCode=1;}
