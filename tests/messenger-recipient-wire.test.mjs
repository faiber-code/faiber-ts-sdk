import assert from 'node:assert/strict';
import test from 'node:test';
import {FaiberClient} from '../packages/core/dist/index.js';
import {MessengerApi} from '../packages/messenger/dist/index.js';
test('recipient inbox helpers keep bracket pagination, current credentials and cancellation',async()=>{
 const seen=[];const api=new MessengerApi(new FaiberClient('messenger',{domains:{messenger:'https://owned.invalid'},getAuthorization:()=> 'Bearer owned-fixture',axios:{adapter:async config=>{seen.push(config);return{config,status:200,statusText:'OK',headers:{'x-request-id':'owned'},data:{status:'success',data:{data:[],meta:{page:2,page_size:30,total_items:31,total_pages:2}}}};}}}));
 const signal=new AbortController().signal;const query={'page[number]':2,'page[size]':30};
 const typed=await api.myInboxPage(query,{signal,timeout:1500});
 const compatible=await api.myInbox({params:query,signal,timeout:1500});
 for(const req of seen){assert.deepEqual(req.params,query);assert.equal(req.url,'/api/v1/notifications/me');assert.equal(req.signal,signal);assert.equal(req.timeout,1500);assert.equal(req.headers.get('authorization'),'Bearer owned-fixture');}
 assert.equal(typed.data.data.meta.page,2);assert.equal(compatible.headers['x-request-id'],'owned');assert.equal(seen.length,2);
});
test('importance and unread updates preserve independent state and server-side filters',async()=>{
 const calls=[];const api=new MessengerApi(new FaiberClient('messenger',{domains:{messenger:'https://owned.invalid'},axios:{adapter:async config=>{calls.push(config);return{config,status:200,statusText:'OK',headers:{},data:{status:'success',data:{id:7,important:true,read:false}}};}}}));
 const signal=new AbortController().signal;
 await api.myInboxPage({'page[number]':2,'page[size]':10,important:true},{signal});
 assert.deepEqual(calls.at(-1).params,{'page[number]':2,'page[size]':10,important:true});
 await api.setMyNotificationState(7,{important:true},{signal});assert.deepEqual(JSON.parse(calls.at(-1).data),{important:true});
 await api.setMyNotificationState(7,{read:false},{signal});assert.deepEqual(JSON.parse(calls.at(-1).data),{read:false});
 assert.equal(calls.at(-1).url,'/api/v1/notifications/me/7/read');assert.equal(calls.at(-1).signal,signal);
 await api.markMyNotificationRead(7);assert.equal(calls.at(-1).data,undefined);
});
