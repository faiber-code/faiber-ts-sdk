import test from 'node:test';
import assert from 'node:assert/strict';
import {startDeviceDelivery,MessengerDeliveryApi} from '../packages/messenger/dist/index.js';
import {FaiberClient} from '../packages/core/dist/index.js';
const item={delivery_id:'delivery',receipt_token:'capability',notification_id:'7',recipient_id:'user',title:'Hello',body:'Message',path:null,destination:null};
const envelope=data=>({data:{data}});
const settle=()=>new Promise(resolve=>setTimeout(resolve,20));
test('socket hints serialize with polling and display precedes receipt',async()=>{
 const calls=[];let active=0,max=0,pending=true;
 const api={presence:async()=>envelope({lease_seconds:60}),pending:async()=>{active++;max=Math.max(max,active);await settle();active--;return envelope({items:pending?[item]:[],has_more:false});},acknowledge:async input=>{calls.push(['receipt',input.transport]);pending=false;return envelope({acknowledged:true});}};
 const runtime=startDeviceDelivery({api,deviceId:'device',userId:'user',deliver:async(_,transport)=>{calls.push(['display',transport]);return true;}});
 try{runtime.setSocketConnected(true);for(let i=0;i<10;i++)runtime.notify();await new Promise(resolve=>setTimeout(resolve,160));assert.equal(max,1);assert.deepEqual(calls,[['display','socket'],['receipt','socket']]);}finally{runtime.stop();}
});
test('failed display and recipient mismatch never acknowledge',async()=>{
 let receipts=0,display=0;
 const api={presence:async()=>envelope({lease_seconds:60}),pending:async()=>envelope({items:[item,{...item,recipient_id:'other'}],has_more:true}),acknowledge:async()=>{receipts++;}};
 const runtime=startDeviceDelivery({api,deviceId:'device',userId:'user',deliver:async()=>{display++;return false;}});
 try{await settle();assert.equal(display,1);assert.equal(receipts,0);}finally{runtime.stop();}
});
test('logout during display cancels acknowledgement',async()=>{
 let finish,receipts=0,started;const entered=new Promise(r=>started=r);
 const api={presence:async()=>envelope({lease_seconds:60}),pending:async()=>envelope({items:[item],has_more:false}),acknowledge:async()=>{receipts++;}};
 const runtime=startDeviceDelivery({api,deviceId:'device',userId:'user',deliver:async()=>{started();return new Promise(r=>finish=r);}});
 await entered;runtime.stop();finish(true);await settle();assert.equal(receipts,0);
});
test('device routes preserve credentials, cancellation and capability bodies',async()=>{
 const requests=[];const api=new MessengerDeliveryApi(new FaiberClient('messenger',{domains:{messenger:'https://owned.invalid'},getAuthorization:()=> 'Bearer session',axios:{adapter:async config=>{requests.push(config);return{config,status:200,statusText:'OK',headers:{},data:{data:{}}};}}}));
 const signal=new AbortController().signal;
 await api.presence('a/b',{socket_connected:true},{signal});await api.pending('a/b',{signal});await api.acknowledge({delivery_id:'d',receipt_token:'r',transport:'pull'},{signal});await api.deliveryStatus(7,{signal});
 assert.deepEqual(requests.map(r=>r.url),['/api/v1/push/devices/a%2Fb/presence','/api/v1/push/devices/a%2Fb/pending','/api/v1/push/receipts','/api/v1/notifications/me/7/delivery']);
 for(const r of requests){assert.equal(r.signal,signal);assert.equal(r.headers.get('authorization'),'Bearer session');}
 assert.equal(JSON.parse(requests[2].data).receipt_token,'r');
});
