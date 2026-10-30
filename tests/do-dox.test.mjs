import test from 'node:test';
import assert from 'node:assert/strict';
import {FaiberClient,MemoryTokenProvider} from '../packages/core/dist/index.js';
import {TaskApi} from '../packages/task/dist/index.js';
import {SocialApi} from '../packages/social/dist/index.js';
import {AssetApi} from '../packages/asset/dist/index.js';
import {PaymentApi} from '../packages/payment/dist/index.js';
import {IdpApi} from '../packages/idp/dist/index.js';

test('campaign and reward methods preserve authenticated transport, replay IDs and full responses',async()=>{
 const calls=[],payload={data:{id:'operation'}};
 const client=service=>new FaiberClient(service,{domains:{[service]:`https://${service}.example.invalid`},tokenProvider:new MemoryTokenProvider({accessToken:'trusted-backend'}),axios:{adapter:async config=>{calls.push(config);return{data:payload,status:202,statusText:'Accepted',headers:{'x-request-id':'trace'},config}}}});
 const signal=new AbortController().signal, social=new SocialApi(client('social')),task=new TaskApi(client('task'));
 const response=await social.campaigns.startJob('job/id',{request_id:'stable',action:'start'},{signal});
 await social.campaigns.review('claim/id',{request_id:'review-stable',version:3,decision:'approve',reason:'Verified external evidence'},{signal});
 await task.rewards.taskDoxState('task/id',{signal});
 await task.rewards.redeem({request_id:'redeem-stable',item_id:'month'},{signal});
 await new AssetApi(client('asset')).doEconomy.policy({signal});
 await new PaymentApi(client('payment')).rewardCheckouts.receipt('product/id','payment/id',{signal});
 await new IdpApi(client('idp')).contactVerification.facts('user/id',{signal});
 assert.equal(response.status,202);assert.equal(response.data,payload);assert.equal(response.headers['x-request-id'],'trace');
 assert.ok(calls.every(c=>c.headers.get('Authorization')==='Bearer trusted-backend'&&c.signal===signal));
 assert.deepEqual(JSON.parse(calls[0].data),{request_id:'stable',action:'start'});
 assert.deepEqual(calls.map(c=>[c.method,c.url]),[
  ['post','/api/v1/campaign-jobs/job%2Fid/start'],['post','/api/v1/campaign-assignments/claim%2Fid/review'],
  ['get','/api/v1/work-items/task%2Fid/dox'],['post','/api/v1/rewards/redeem'],['get','/api/v1/do/policy'],
  ['get','/api/v1/internal/reward-checkouts/product%2Fid/transactions/payment%2Fid'],['get','/api/v1/internal/verification/user%2Fid']
 ]);
});
