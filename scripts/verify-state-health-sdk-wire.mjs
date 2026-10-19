import assert from 'node:assert/strict';
import {FaiberClient} from '../packages/core/dist/index.js';
import {StateApi} from '../packages/state/dist/index.js';
let assertions=0;
const check=value=>{assert.ok(value);assertions++;};
try{
 const base=process.env.INFERA_STATE_HEALTH_SDK_BASE;
 assert.ok(/^http:\/\/127\.0\.0\.1:\d+$/.test(base));
 const client=new FaiberClient('state',{domains:{state:base},axios:{proxy:false,timeout:3000}});
 const api=new StateApi(client);const r=await api.operations.mainProcessHealthGet();
 check(r.status===200);check(r.config.method==='get');
 assert.deepEqual(r.data,{data:{service:'infera-state',status:'healthy',transports:['websocket'],rulesets:['kheradgah.v1'],wasm:true}});assertions++;
 check(r.headers.get('content-type').includes('application/json'));check(typeof r.headers.get==='function');
 const post=await client.post('/health',undefined,{validateStatus:()=>true});check(post.status===405);
 const head=await client.request({url:'/health',method:'HEAD'});check(head.status===200);check(head.data==='');
 const controller=new AbortController();controller.abort();
 await assert.rejects(api.operations.mainProcessHealthGet({signal:controller.signal}),error=>error.code==='ERR_CANCELED');assertions++;
 console.log(JSON.stringify({status:'passed',assertions,scope:'actual production State health subrouter over loopback HTTP; static advertisement, not whole-app startup, persistence or gameplay readiness'}));
}catch(error){console.error(JSON.stringify({status:'failed',assertions,name:error.name,code:error.code,statusCode:error.response?.status,message:error instanceof assert.AssertionError?'assertion failed':'probe failed'}));process.exitCode=1;}
