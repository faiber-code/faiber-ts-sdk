import assert from 'node:assert/strict';
import http from 'node:http';
import {AxiosHeaders} from 'axios';
import {FaiberClient} from '../packages/core/dist/index.js';
import {CrmApi} from '../packages/crm/dist/index.js';
let assertions=0;const check=value=>{assert.ok(value);assertions++;};
try{
 const base=process.env.INFERA_CRM_FALLBACK_SDK_BASE;assert.ok(/^http:\/\/127\.0\.0\.1:\d+$/.test(base));
 const api=new CrmApi(new FaiberClient('crm',{domains:{crm:base},axios:{proxy:false,timeout:3000}}));
 // Test-only transport uses a real Node HTTP connection and the server's actual bytes.
 // Node emits CONNECT responses on its connect event, which Axios's default adapter lacks.
 const connectAdapter=config=>new Promise((resolve,reject)=>{
  const url=new URL(config.url,config.baseURL);let done=false;
  const req=http.request({hostname:url.hostname,port:url.port,path:url.pathname+url.search,method:'CONNECT',headers:AxiosHeaders.from(config.headers).toJSON()});
  req.on('connect',(res,socket,head)=>{
   const chunks=[head];const length=Number(res.headers['content-length']??0);let size=head.length;
   const finish=()=>{if(done)return;done=true;socket.destroy();resolve({status:res.statusCode,statusText:res.statusMessage,headers:new AxiosHeaders(res.headers),data:Buffer.concat(chunks).toString('utf8'),config});};
   socket.on('data',part=>{chunks.push(part);size+=part.length;if(size>=length)finish();});socket.on('end',finish);socket.on('error',reject);
   if(size>=length)finish();
  });
  req.on('error',reject);req.setTimeout(3000,()=>{req.destroy();reject(new Error('owned CONNECT timeout'));});req.end();
 });
 const options={validateStatus:()=>true};const observations=[];
 for(const method of ['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS','TRACE','CONNECT']){
  for(const path of [null,'obsolete/items']){
   const transport=method==='CONNECT'?{...options,adapter:connectAdapter}:options;
   const r=path===null?await api.operations.routerApiNotFoundAny(method,transport):await api.operations.routerApiPathNotFoundAny(path,method,transport);
   observations.push({method,path,status:r.status,body:r.data});
   if(method==='OPTIONS'){check(r.status===200);check(r.data==='');}
   else {check(r.status===404);if(method==='HEAD')check(r.data==='');else{check(r.data.error.code==='api_route_not_found');check(typeof r.data.error.message==='string');}}
  }
 }
 const preflight=await api.operations.routerApiPathNotFoundAny('obsolete/items','OPTIONS',{...options,headers:{Origin:'http://localhost:3000','Access-Control-Request-Method':'POST','Access-Control-Request-Headers':'authorization'}});
 check(preflight.status===200);check(preflight.data==='');check(preflight.headers.get('access-control-allow-origin')==='http://localhost:3000');check(preflight.headers.get('access-control-allow-credentials')==='true');
 await assert.rejects(api.operations.routerApiNotFoundAny('GET'),e=>e.response?.status===404&&e.response?.data?.error?.code==='api_route_not_found');assertions++;
 assert.throws(()=>api.operations.routerApiNotFoundAny('CONNECT'),/explicit tunnel-capable Axios adapter/);assertions++;
 console.log(JSON.stringify({status:'passed',assertions,observations,scope:'actual production CRM legacy fallback subrouter and production CORS; CONNECT uses a test-only real Node HTTP tunnel-capable adapter, not a response mock; not native CRM data/permission or whole-main API normalization acceptance'}));
}catch(error){console.error(JSON.stringify({status:'failed',assertions,name:error.name,code:error.code,statusCode:error.response?.status,message:error instanceof assert.AssertionError?'assertion failed':'probe failed'}));process.exitCode=1;}
