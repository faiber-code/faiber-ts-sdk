import { AssetApi, type CreateAssetInput, type CreateRankInput, type SetAiPlanInput, type Wallet, type DailyCostSummary, type AssetChargeSettingsInput, type AssetEscrowResponse, type EconomyCapabilities, type EconomyPolicySnapshot, type ProductTrialGiftCreateInput } from '@faiber/faiber-asset';
const asset:CreateAssetInput={name:'points',asset_type:'xp',max_quantity:'100'};
// @ts-expect-error asset_type is required by the backend
const invalidAsset:CreateAssetInput={name:'points'};
const rank:CreateRankInput={name:'silver',min_xp:'100'};
// @ts-expect-error min_xp is required; minimum was a fabricated field
const invalidRank:CreateRankInput={name:'silver',minimum:100};
const plan:SetAiPlanInput={tier:'pro'};
declare const wallet:Wallet;
const balance:string=wallet.balance;
declare const costs:DailyCostSummary;
const dailyTotal:string=costs.totalCost;
const charge:AssetChargeSettingsInput={mapping_rules:{rules:[{condition:{type:'xp_balance',operator:'gte',value:'100'},values:{max_charge:'10',recharge_period:'60',recharge_amount:'1'}}]}};
// @ts-expect-error tagged conditions are objects, not strings
const invalidCharge:AssetChargeSettingsInput={mapping_rules:{rules:[{condition:'always',values:{max_charge:'10',recharge_period:'60',recharge_amount:'1'}}]}};
declare const api:AssetApi;
async function consume(){
 const response=await api.assets.delete('asset-id');
 const deleted:null=response.data.data;
 // @ts-expect-error successful Asset deletes return data:null
 response.data.data.deleted;
 return deleted;
}
declare const escrow:AssetEscrowResponse;
const escrowTotal:string=escrow.data.totalCoins;
declare const capabilities:EconomyCapabilities;
const canCreate:boolean=capabilities.rule_create;
declare const policy:EconomyPolicySnapshot;
const revision:number=policy.configuration_revision;
// @ts-expect-error create requires a nonnil stable request_id
const invalidGift:ProductTrialGiftCreateInput={label:'trial',status:'active',expires_at:'2026-12-01T00:00:00Z',limits:{}};
void [asset,invalidAsset,rank,invalidRank,plan,balance,dailyTotal,charge,invalidCharge,consume,escrowTotal,canCreate,revision,invalidGift];

declare const allocation: import("@faiber/faiber-asset").AssetSandboxAllocation;
const volumeSize: number | undefined = allocation.volume_storage_mb.database;
void volumeSize;
