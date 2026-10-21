import assert from 'node:assert/strict';
import test from 'node:test';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';
import { ModulesApi } from '../packages/modules/dist/index.js';

// Owned Axios transport fixtures only: these do not execute the Modules backend.
function fixture(payload, contentType='application/json') {
 const requests=[];
 const api=new ModulesApi(new FaiberClient('modules', {domains:{modules:'https://modules.example.invalid'},authMode:'bearer',tokenProvider:new MemoryTokenProvider({accessToken:'modules-owned-token'}),axios:{adapter:async config=>{requests.push(config);return {data:payload,status:200,statusText:'OK',headers:{'content-type':contentType,etag:'"revision"','x-request-id':'modules-owned-wire'},config};}}}));
 return {api,requests};
}
const record={id:'doc',kind:'post',locale:'en',legacy_host:null,legacy_id:null,publish_at:null,published_at:null};
test('raw content/settings operations preserve payload, ETag precondition and auth',async()=>{
 const {api,requests}=fixture(record);const options={headers:{'If-Match':'"revision"'},signal:new AbortController().signal};
 for(const call of [()=>api.operations.managementApiGetContentGet('doc'),()=>api.operations.managementApiPublicContentGet('post','en','slug'),()=>api.updateContentDocument('doc','"revision"',{kind:'post',slug:'slug',title:'Title'},options)]){
  const response=await call();assert.equal(response.data,record);assert.equal(response.headers.etag,'"revision"');assert.equal(requests.at(-1).headers.get('Authorization'),'Bearer modules-owned-token');
 }
 assert.equal(requests.at(-1).headers.get('If-Match'),'"revision"');assert.equal(requests.at(-1).signal,options.signal);
});
test('agent runs preserve SSE text and idempotency headers',async()=>{
 const event='event: complete\ndata: {"replayed":true}\n\n';const {api,requests}=fixture(event,'text/event-stream');
 const response=await api.operations.managementApiRunAgentPost({operation:'draft',message:'Draft a post',specialist:'content',target_type:'content'}, {headers:{'Idempotency-Key':'replay-key'}});
 assert.equal(response.data,event);assert.equal(requests[0].responseType,'text');assert.equal(requests[0].headers.get('Idempotency-Key'),'replay-key');
 assert.equal(requests[0].headers.get('Authorization'),'Bearer modules-owned-token');
});
test('media downloads request bytes and preserve raw key segments',async()=>{
 const bytes=new Uint8Array([1,2,3]);const {api,requests}=fixture(bytes,'image/png');
 const response=await api.operations.mediaGetFileGet('modules/post/2026/10/a.png');
 assert.equal(response.data,bytes);assert.equal(requests[0].responseType,'arraybuffer');assert.equal(requests[0].url,'/api/v1/media/files/modules/post/2026/10/a.png');
});
test('curated lists and deletes retain actual named collection and status/message envelopes',async()=>{
 const payload={status:'success',message:'orders',data:{orders:[],page_number:2,page_size:7,total_items:0}};const {api,requests}=fixture(payload);
 const response=await api.orders.list({page_number:2,page_size:7});assert.equal(response.data,payload);assert.deepEqual(requests[0].params,{page_number:2,page_size:7});
 const deletion={status:'success',message:'deleted'};const deleted=fixture(deletion);assert.equal((await deleted.api.products.delete('id')).data,deletion);assert.equal(deleted.requests[0].method,'delete');
});
test('autocomplete carries required query and its validated enum without client rewriting',async()=>{
 const {api,requests}=fixture({query:'fa',scope:'mixed',items:[]});await api.operations.searchAutocompleteGet({q:'fa',scope:'mixed',limit:20});
 assert.deepEqual(requests[0].params,{q:'fa',scope:'mixed',limit:20});
});
test('cart and current-session convenience retain backend envelopes and dynamic JSON items',async()=>{
 const cart={status:'success',message:'cart',data:{id:null,user_id:'user',items:[{custom:{variant_id:'v'}}]}};const {api,requests}=fixture(cart);
 assert.equal((await api.cart()).data,cart);await api.replaceCart({items:cart.data.items});assert.deepEqual(JSON.parse(requests[1].data),{items:cart.data.items});
 const session={status:'success',message:'self',data:{user_id:'u',roles:[],permissions:[]}};assert.equal((await fixture(session).api.authSelf()).data,session);
});
