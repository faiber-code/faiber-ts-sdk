import test from 'node:test';
import assert from 'node:assert/strict';
import {AxiosHeaders} from 'axios';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
import {ProfileApi} from '../packages/profile/dist/index.js';
import {LmsApi} from '../packages/lms/dist/index.js';
function fixture(){
 const calls=[];
 const client=new FaiberClient('profile',{
  domains:{profile:'https://profile.example.test'},
  tokenProvider:new MemoryTokenProvider({accessToken:'caller'}),
  axios:{adapter:async config=>{
   calls.push(config);
   return {config,data:{status:'success',message:'ok',data:{freshness:'stale',summary:{result:{metrics:[{key:'debt',value:'12345678901234567890.12'}]}}}},status:config.method==='post'?202:200,statusText:'OK',headers:new AxiosHeaders({'x-request-id':'receipt'})};
  }}
 });
 return {api:new ProfileApi(client),calls};
}
test('Profile summaries preserve authentication, independent state, precision and transport options',async()=>{
 const {api,calls}=fixture();const signal=new AbortController().signal;
 const response=await api.summaries.latest({role_id:'canonical-role'},{signal});
 assert.equal(response.headers.get('x-request-id'),'receipt');assert.equal(calls[0].headers.get('Authorization'),'Bearer caller');assert.deepEqual(calls[0].params,{role_id:'canonical-role'});assert.equal(calls[0].signal,signal);assert.equal(response.data.data.summary.result.metrics[0].value,'12345678901234567890.12');
 await api.summaries.preview('draft/a',{user_id:'subject'},{signal});assert.equal(calls[1].url,'/api/v1/ai-summaries/configurations/draft%2Fa/preview');assert.equal(calls[1].method,'post');assert.deepEqual(JSON.parse(calls[1].data),{user_id:'subject'});
 const refresh=await api.operations.aiSummaryRefreshPost({subjects:[{user_id:'subject',role_id:'canonical-role'}]});assert.equal(refresh.status,202);assert.equal(calls[2].url,'/api/v1/ai-summaries/refresh');
 assert.equal(typeof LmsApi.prototype.latestAiSummary,'undefined');assert.equal(typeof LmsApi.prototype.aiSummarySettings,'undefined');
});
