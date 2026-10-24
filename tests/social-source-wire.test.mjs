import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
import {SocialApi} from '../packages/social/dist/index.js';
import {socialReviewedOperationContracts} from '../scripts/social-reviewed-operation-contracts.mjs';

function fixture(data,status=200){
 const requests=[];
 const api=new SocialApi(new FaiberClient('social',{
  domains:{social:'https://social.example'},tokenProvider:new MemoryTokenProvider({accessToken:'social-source-fixture'}),
  axios:{withCredentials:true,adapter:async config=>{requests.push(config);return {data,status,statusText:'Fixture',headers:{'x-request-id':'social-source-receipt','cache-control':'no-store'},config};}},
 }));
 return {api,requests};
}

test('Social immutable source review covers every mounted operation with named models',()=>{
 const routes=JSON.parse(readFileSync(new URL('../service-contracts.json',import.meta.url))).social;
 assert.equal(routes.length,112);
 assert.deepEqual(Object.keys(socialReviewedOperationContracts).sort(),routes.map(e=>`social:${e.method} ${e.path}`).sort());
 for(const e of routes){const c=socialReviewedOperationContracts[`social:${e.method} ${e.path}`];assert.ok(c.auth);assert.ok(c.purpose);assert.ok(c.response);if(e.body)assert.ok(c.input);if(e.query)assert.ok(c.query);}
 const types=readFileSync(new URL('../packages/social/src/operations.types.ts',import.meta.url),'utf8');
 assert.doesNotMatch(types,/extends ApiEnvelope<JsonValue>|extends JsonObject|BackendJson</);
 assert.match(types,/SocialClaimDetailResponse/);assert.match(types,/SocialFundingEventResponse/);
});

test('Social authenticated media downloads raw bytes through the shared authorized transport',async()=>{
 const bytes=new Uint8Array([255,216,255]).buffer;
 const {api,requests}=fixture(bytes);const signal=new AbortController().signal;
 const response=await api.operations.apiGetMediaGet('media/id',{signal,timeout:4321});
 assert.equal(response.data,bytes);assert.equal(response.headers['x-request-id'],'social-source-receipt');
 assert.equal(requests[0].url,'/api/v1/media/media%2Fid');assert.equal(requests[0].responseType,'arraybuffer');
 assert.equal(requests[0].headers.get('Authorization'),'Bearer social-source-fixture');assert.equal(requests[0].withCredentials,true);assert.equal(requests[0].signal,signal);assert.equal(requests[0].timeout,4321);
});

test('Social request-key, nullable Option input and flat claim pagination pass through unchanged',async()=>{
 const {api,requests}=fixture({status:'success',data:[],meta:{total:0,page:2,limit:10}});
 await api.operations.apiCreatePostPost({request_key:'request-uuid',body:'Request',category_id:null,capabilities:null});
 assert.deepEqual(JSON.parse(requests[0].data),{request_key:'request-uuid',body:'Request',category_id:null,capabilities:null});
 await api.operations.apiUpdatePostPatch('post/id',{title:null,category_id:null,kind:null});
 assert.deepEqual(JSON.parse(requests[1].data),{title:null,category_id:null,kind:null});
 const response=await api.operations.apiMyPostClaimsGet('post/id',{page:2,limit:10});
 assert.deepEqual(requests[2].params,{page:2,limit:10});assert.equal(requests[2].url,'/api/v1/me/posts/post%2Fid/claims');assert.equal(response.data.meta.total,0);
});

test('Social concrete claim, consent, funding and moderation envelopes are retained without reshaping',async()=>{
 const funding={status:'success',data:{post_id:'post',duplicate:true}};
 const {api,requests}=fixture(funding);
 const result=await api.operations.apiReceiveFundingEventPost({external_event_id:'provider-event',post_id:'post',external_reference:'reference',status:'funded',unit:'money',code:'USD',amount:'2.00'});
 assert.equal(result.data,funding);assert.equal('status' in result.data.data,false);
 await api.operations.apiCreateClaimPost('post',{message:'I can help',evidence:{photo:'asset'}});
 await api.operations.apiSetContactConsentPut('claim',{consented:false});
 assert.equal(requests[1].url,'/api/v1/posts/post/claims');assert.deepEqual(JSON.parse(requests[2].data),{consented:false});
 const receipt={status:'success',data:{target_type:'post',target_id:'post',action:'approve',status:'published'}};
 const mod=fixture(receipt);assert.deepEqual((await mod.api.moderate({target_type:'post',target_id:'post',action:'approve'})).data,receipt);
});

test('Social graph and worker operations retain shared server credentials and 204 responses',async()=>{
 const {api,requests}=fixture(undefined,204);
 const response=await api.operations.discoveryFollowPut('place','place/id');
 await api.operations.discoveryAckPut('event',{headers:{'x-user-id':'actor','x-user-permissions':'social:integrations:write'}});
 assert.equal(response.status,204);assert.equal(requests[0].method,'put');assert.equal(requests[0].url,'/api/v1/follow/place/place%2Fid');
 assert.equal(requests[1].headers.get('Authorization'),'Bearer social-source-fixture');assert.equal(requests[1].headers.get('x-user-permissions'),'social:integrations:write');
});
