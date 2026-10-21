import { test } from 'node:test';
import assert from 'node:assert/strict';
import { AssetApi } from '../packages/asset/dist/index.js';
import { FaiberClient, MemoryTokenProvider } from '../packages/core/dist/index.js';

// These are SDK wire/transport fixtures, not a backend-native acceptance claim.
function fixture(){
 const seen=[];const replies=new Map();
 const api=new AssetApi(new FaiberClient('asset',{domains:{asset:'https://asset.test'},tokenProvider:new MemoryTokenProvider({accessToken:'asset-wire-token'}),axios:{adapter:async config=>{seen.push(config);return {data:replies.get(config.url)??{status:'success',message:'ok',data:null},status:200,statusText:'OK',headers:{'x-request-id':'asset-source-fixture'},config};}}}));
 return {api,seen,replies};
}
test('Asset typed convenience CRUD carries required wire fields and null delete envelopes',async()=>{
 const {api,seen}=fixture();const signal=new AbortController().signal;
 await api.assets.create({name:'xp',asset_type:'XP',max_quantity:'100'});
 await api.ranks.create({name:'silver',min_xp:'100'});
 await api.setAiPlan('profile/id',{tier:'pro'});
 const response=await api.assets.delete('asset/id',{signal});
 assert.deepEqual(JSON.parse(seen[0].data),{name:'xp',asset_type:'XP',max_quantity:'100'});
 assert.deepEqual(JSON.parse(seen[1].data),{name:'silver',min_xp:'100'});
 assert.deepEqual(JSON.parse(seen[2].data),{tier:'pro'});
 assert.equal(seen[3].url,'/api/v1/assets/asset%2Fid');assert.equal(response.data.data,null);assert.equal(seen[3].signal,signal);
 assert.equal(response.headers['x-request-id'],'asset-source-fixture');assert.ok(seen.every(x=>x.headers.get('Authorization')==='Bearer asset-wire-token'));
});
test('Asset preserves tagged Charge rules, decimal strings, escrow credentials and journal cursors',async()=>{
 const {api,seen,replies}=fixture();
 const rules={mapping_rules:{rules:[{condition:{type:'xp_balance',operator:'gte',value:'100'},values:{max_charge:'10',recharge_period:'60',recharge_amount:'1'}}]}};
 await api.operations.chargeChargeSettingsUpdatePatch(rules);
 assert.deepEqual(JSON.parse(seen[0].data),rules);
 await api.economyJournal({after:10,before:20,descending:true,limit:5});
 assert.deepEqual(seen[1].params,{after:10,before:20,descending:true,limit:5});
 const escrow={data:{matchId:'match-id',status:'funded',totalCoins:'20',payoutCoins:'0',burnedCoins:'0'}};
 replies.set('/api/v1/games/escrows/match-id',escrow);
 const result=await api.operations.gameEscrowShowGet('match-id',{headers:{'x-game-service-token':'test-service-token'}});
 assert.deepEqual(result.data,escrow);assert.equal(seen[2].headers.get('x-game-service-token'),'test-service-token');
 const subscriptions={status:'success',message:'ok',data:{subscriptions:[]}};
 replies.set('/api/v1/subscriptions',subscriptions);
 assert.deepEqual((await api.subscriptions({project:'demo'})).data,subscriptions);
});
