import {test} from 'node:test';
import assert from 'node:assert/strict';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
import {TaskApi,CommunityApi as TaskCommunity} from '../packages/task/dist/index.js';
import {SocialApi,CommunityApi} from '../packages/social/dist/index.js';
import {DoEconomyApi} from '../packages/asset/dist/index.js';
function fixture(service){const requests=[];const client=new FaiberClient(service,{domains:{[service]:`https://${service}.example.test`},tokenProvider:new MemoryTokenProvider({accessToken:'test-token'}),axios:{adapter:async config=>{requests.push(config);return {status:200,statusText:'OK',config,headers:{'x-request-id':'preserved'},data:{data:{version:7,public:false}}};}}});return {requests,client};}
for(const service of ['task','social'])test(`${service} community routes preserve credentials, scope IDs, inputs and cancellation`,async()=>{
 const {requests,client}=fixture(service),root=service==='task'?new TaskApi(client):new SocialApi(client),api=root.community;
 assert.ok(api instanceof CommunityApi);assert.equal(TaskCommunity,CommunityApi);
 const signal=new AbortController().signal,options={signal,timeout:120000};
 const calls=[
  ['GET','/me',()=>api.self(options)],
  ['POST','/me/analyze',()=>api.analyze({request_id:'retry-id',version:2,locale:'fa',display_name:'Test',answers:{occupation:'Designer'}},options)],
  ['POST','/me/publish',()=>api.publish({public:false,version:2},options)],
  ['GET','/people',()=>api.people({q:'سارا',page:2,view:'interests'},options)],
  ['GET','/people/contact%2Fid',()=>api.person('contact/id',options)],
  ['POST','/people/contact%2Fid/interest',()=>api.interest('contact/id',false,options)],
  ['POST','/people/contact%2Fid/block',()=>api.block('contact/id',true,options)],
  ['POST','/people/contact%2Fid/ask',()=>api.ask('contact/id',{question:'What goals do we share?',locale:'en'},options)],
  ['GET','/messages',()=>api.inbox(options)],
  ['GET','/people/contact%2Fid/messages',()=>api.messages('contact/id','cursor',options)],
  ['POST','/people/contact%2Fid/messages',()=>api.send('contact/id',{request_id:'message-id',body:'hello'},options)],
  ['GET','/gifts',()=>api.gifts(options)],
  ['POST','/people/contact%2Fid/gifts',()=>api.gift('contact/id',{request_id:'gift-id',gift_id:'flower'},options)],
 ];
 for(const [method,path,call] of calls){const response=await call();const request=requests.at(-1);assert.equal(request.method,method.toLowerCase());assert.equal(request.url,'/api/v1/community'+path);assert.equal(request.headers.get('Authorization'),'Bearer test-token');assert.equal(request.signal,signal);assert.equal(request.timeout,120000);assert.equal(response.headers['x-request-id'],'preserved');}
 assert.deepEqual(JSON.parse(requests[5].data),{enabled:false});assert.deepEqual(requests[3].params,{q:'سارا',page:2,view:'interests'});assert.deepEqual(requests[9].params,{before:'cursor'});assert.deepEqual(JSON.parse(requests[12].data),{request_id:'gift-id',gift_id:'flower'});
});
test('admin policy preserves the audited version and no credentials are embedded',async()=>{
 const {requests,client}=fixture('asset'),api=new DoEconomyApi(client),signal=new AbortController().signal;
 await api.policy({signal});await api.savePolicy({version:7,reason:'Update campaign rules',policy:{personalization_reward:10,daily_checkin_rewards:[1,1,1,2,2,2,3],public_campaign_minimum:100,campaign_max_resubmissions:5}},{signal});
 assert.equal(requests[0].url,'/api/v1/do/policy');assert.equal(requests[1].method,'put');assert.equal(JSON.parse(requests[1].data).version,7);assert.equal(requests[1].signal,signal);assert.equal(requests[1].headers.get('Authorization'),'Bearer test-token');assert.equal(requests[1].headers.get('x-do-service-token'),undefined);
});
for(const service of ['social','task'])test(`${service} generated community operations expose the reviewed methods`,async()=>{
 const {client,requests}=fixture(service),api=service==='task'?new TaskApi(client):new SocialApi(client);
 await api.operations.communityMeGet();await api.operations.communityInterestPost('contact/id',{enabled:false});await api.operations.communityGiftPost('contact/id',{request_id:'stable',gift_id:'heart'});
 assert.equal(requests[0].url,'/api/v1/community/me');assert.equal(requests[1].url,'/api/v1/community/people/contact%2Fid/interest');assert.equal(requests[2].url,'/api/v1/community/people/contact%2Fid/gifts');
});
