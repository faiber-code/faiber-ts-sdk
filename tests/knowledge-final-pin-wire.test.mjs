// Wire-only tests against an Axios adapter. These are not native authorization evidence.
import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {AxiosHeaders} from 'axios';
import {FaiberSDK,MemoryTokenProvider} from '../packages/sdk/dist/index.js';
const cases=JSON.parse(readFileSync(new URL('./fixtures/knowledge-final-pin-wire-cases.json',import.meta.url),'utf8'));
const wire={status:'success',data:{marker:'unchanged-owned-envelope'},meta:null};
const scope='scope /?#';

test('Knowledge pinned inventory has 84 unique callable wire cases',()=>{
 assert.equal(cases.length,84);assert.equal(new Set(cases.map(c=>c.operation)).size,84);
});
for(const authMode of ['bearer','cookie']){
 for(const entry of cases){
  test(`Knowledge ${authMode} wire: ${entry.operation}`,async()=>{
   const seen=[];
   const sdk=new FaiberSDK({domains:{},defaultDomain:'https://owned.test',
    ...(authMode==='cookie'?{authMode:'cookie'}:{tokenProvider:new MemoryTokenProvider({accessToken:'owned-token'})}),
    axios:{adapter:async config=>{seen.push(config);return{status:200,statusText:'Owned',headers:new AxiosHeaders({'x-request-id':'owned-pin'}),config,data:wire};}}});
   const signal=new AbortController().signal;
   const headers={'x-organization-id':'owned-org',...(entry.internal?{'x-task-projection-token':'owned-internal-placeholder'}:{})};
   const binary=entry.operation==='POST /internal/task-conversions';
   const args=entry.args.map(arg=>binary&&arg.kind==='data'?new Uint8Array([1,2,3]):arg.value);
   const result=await sdk.knowledge.operations[entry.methodName](...args,{signal,timeout:2345,headers});
   assert.equal(seen.length,1);
   const config=seen[0];
   assert.equal(config.method,entry.method.toLowerCase());
   assert.equal(config.url,entry.path.replace(/\{[^}]+\}/g,encodeURIComponent(scope)));
   assert.equal(config.signal,signal);assert.equal(config.timeout,2345);
   assert.equal(config.headers.get('x-organization-id'),'owned-org');
   if(authMode==='bearer')assert.equal(config.headers.get('Authorization'),'Bearer owned-token');
   else assert.equal(config.withCredentials,true);
   if(entry.internal)assert.equal(config.headers.get('x-task-projection-token'),'owned-internal-placeholder');
   const query=entry.args.find(a=>a.kind==='params');
   if(query)assert.deepEqual(config.params,query.value);
   const body=entry.args.find(a=>a.kind==='data');
   if(body&&!binary)assert.deepEqual(typeof config.data==='string'?JSON.parse(config.data):config.data,body.value);
   if(binary){assert.equal(config.headers.get('Content-Type'),'application/octet-stream');assert.equal(config.data.byteLength,3);}
   assert.deepEqual(result.data,wire);assert.equal(result.headers.get('x-request-id'),'owned-pin');
  });
 }
}
