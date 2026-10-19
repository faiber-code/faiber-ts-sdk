import assert from 'node:assert/strict';
import test from 'node:test';
import {AxiosHeaders} from 'axios';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
import {SessionApi} from '../packages/session/dist/index.js';
import {CrmApi} from '../packages/crm/dist/index.js';

// Transport regressions only: these adapters do not certify a service response.
function fixture(service,Api){
 const requests=[];const api=new Api(new FaiberClient(service,{domains:{[service]:'https://owned.invalid'},tokenProvider:new MemoryTokenProvider({accessToken:'owned-fixture'}),axios:{adapter:async config=>{
 requests.push(config);return {data:new ArrayBuffer(0),status:200,statusText:'OK',headers:new AxiosHeaders(),config};
 }}}));return {api,requests};
}
test('Session dynamic transport uses the requested verb, shared credentials, binary body and segment-preserving path',async()=>{
 const {api,requests}=fixture('session',SessionApi);const bytes=new Uint8Array([1,2,3]);
 await api.operations.routerProxyViewServiceAny('chat','conversations/نام با فاصله/messages','POST',bytes,{limit:5},{signal:AbortSignal.timeout(5000),headers:{'Content-Type':'application/octet-stream'}});
 assert.equal(requests.length,1);const r=requests[0];assert.equal(r.method,'post');assert.equal(r.url,'/api/v1/view/chat/conversations/'+encodeURIComponent('نام با فاصله')+'/messages');assert.equal(r.headers.get('Authorization'),'Bearer owned-fixture');assert.equal(r.responseType,'arraybuffer');assert.deepEqual(new Uint8Array(r.data),bytes);assert.deepEqual(r.params,{limit:5});
});
test('wildcard paths and unsupported verbs fail before transport can normalize or reroute them',()=>{
 const {api,requests}=fixture('session',SessionApi);
 for(const path of ['../users','a/../users','/users','users/','users//one','%2e%2e/users','users?admin=1','users#fragment','users\\admin']){
 assert.throws(()=>api.operations.routerProxyViewServiceAny('chat',path,'GET',undefined),/Wildcard paths/);
 }
 assert.throws(()=>api.operations.routerProxyViewServiceAny('chat','users','ANY',undefined),/Invalid HTTP method/);assert.equal(requests.length,0);
});
test('CRM fallback operations preserve the supplied verb and retain nested path separators',async()=>{
 const {api,requests}=fixture('crm',CrmApi);
 await api.operations.routerApiNotFoundAny('DELETE');await api.operations.routerApiPathNotFoundAny('old/items','HEAD');
 assert.deepEqual(requests.map(r=>[r.method,r.url]),[['delete','/api'],['head','/api/old/items']]);
});
