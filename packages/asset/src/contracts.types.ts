/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope, JsonObject } from '@faiber/sdk-core';
/** Product-specific gift limits are forwarded to the owning entitlement service. */
export interface ProductGiftLimits extends JsonObject { responses?: number; plans?: number }
/** Product-owned JSON is forwarded unchanged. Asset guarantees only can_copy on detail/create/update;
 * other keys belong to the configured product adapter and are deliberately not asserted here. */
export interface ProductTrialGift extends JsonObject { can_copy:boolean }
/** Product-owned list JSON is forwarded unchanged; Asset annotates any items with can_copy. */
export type ProductTrialGiftPage = JsonObject;
export interface ProductGiftAdapter { id: string; available: true; can_manage: boolean }
export type ProductTrialGiftResponse = ApiEnvelope<ProductTrialGift>;
export type ProductTrialGiftPageResponse = ApiEnvelope<ProductTrialGiftPage>;
export type ProductGiftAdaptersResponse = ApiEnvelope<ProductGiftAdapter[]>;
export interface ProductGiftToken { token: string }
export type ProductGiftTokenResponse = ApiEnvelope<ProductGiftToken>;
export interface WalletPurchaseReceipt { id: string; kind: string; status: string; amount: string; currency: string }
export interface WalletSubscriptionReceipt { id: string; amount: string; currency: string; status: 'fulfilled' }
export type WalletPurchaseReceiptResponse = ApiEnvelope<WalletPurchaseReceipt>;
export type WalletSubscriptionReceiptResponse = ApiEnvelope<WalletSubscriptionReceipt>;
export interface ResourceQuote { cpu: string; ram: string; disk: string; total: string; currency: string; period: 'hourly'; monthly_estimate: string; allocation: ResourceQuoteAllocation }
export type ResourceQuoteResponse = ApiEnvelope<ResourceQuote>;

export interface ProductTrialGiftWriteInput { max_uses?:number;request_id?:string|null;label:string;status:'active'|'inactive';expires_at:string;limits:ProductGiftLimits;rotate_token?:boolean }
export interface FitnessAssetProductInput { tier:string;name:string;description?:string|null;price:string|number;currency:'IRR';duration_days:number;points:string|number;storage_gb:number;product_id?:string|null;metadata:FitnessAssetProductMetadata;status:number }
/** Required gym identity plus product-specific, JSON-safe entitlement metadata. */
export interface FitnessAssetProductMetadata extends JsonObject { fitness_gym_id:string;fitness_product?:string;fitness_coach_id?:string;fitness_tariff_id?:string;includes_meals?:boolean;chat_limit?:number }
export interface FitnessAssetProduct { tier:string;name:string;description:string|null;price:string;currency:'IRR';duration_days:number;points:string;storage_gb:number;product_id:string|null;metadata:FitnessAssetProductMetadata;status:number }
export type FitnessAssetProductResponse = ApiEnvelope<FitnessAssetProduct>;


/** Successful quote serializes all defaulted allocation fields. */
export interface ResourceQuoteAllocation {max_hourly_amount:string|null;accepted_currency:string|null;bundle_id:string|null;cpu_millicores:number;ram_mb:number;database_storage_mb:number;minio_storage_mb:number;app_storage_mb:number;volume_storage_mb:Record<string,number>}
/** Create requires a nonnil idempotency UUID; update does not use this field. */
export interface ProductTrialGiftCreateInput extends ProductTrialGiftWriteInput {request_id:string}
/** Rust unit serializes as JSON null. */
export type AssetEmptyDataResponse = ApiEnvelope<null>;
/** All escrow responses omit status/message and use camelCase inside data. */
export interface AssetEscrowReceipt {matchId:string;status:string;totalCoins:string;payoutCoins:string;burnedCoins:string}
export interface AssetEscrowResponse {data:AssetEscrowReceipt}
/** Flow metadata is concrete in the Cargo.lock-pinned infera-flow-sdk. */
export interface AssetFlowIntegrationField {name:string;field_type:string;required:boolean;description:string}
export interface AssetFlowIntegrationEvent {event_name:string;payload_fields:AssetFlowIntegrationField[]}
export interface AssetFlowIntegration {queue:string;events:AssetFlowIntegrationEvent[]}
export type AssetFlowIntegrationResponse = ApiEnvelope<AssetFlowIntegration>;

/** Comparison operators accepted by reward and Charge rules. */
export type AssetCompareOperator = 'eq'|'gt'|'gte'|'lt'|'lte';
export type AssetDecimalInput = string|number;
export interface AssetFrequencyPolicy {period:string;days?:number|null;timezone?:string}
export interface AssetRewardCapPolicy {asset_name:string;limit:AssetDecimalInput;group?:string;period?:string;days?:number|null;timezone?:string}
/** Named verification policies remain extensible; metadata verification retains arbitrary expected JSON. */
export type AssetVerificationPolicy = string|{metadata_key:string;expected_value:import('@faiber/sdk-core').JsonValue};
/** Stored criteria retain caller JSON and do not materialize deserialization defaults. */
export interface AssetActionCriteria {
  idempotency_required?:boolean;subject_type?:string|null;verification?:AssetVerificationPolicy|null;
  frequency?:AssetFrequencyPolicy|null;daily_cap?:AssetRewardCapPolicy|null;reward_caps?:AssetRewardCapPolicy[];
  minimum_balance_to_spend?:AssetDecimalInput|null;economy?:import('./economy.types.js').EconomyActivityPolicy;
  /** Additional domain-specific criteria are stored unchanged. */
  [key:string]:import('@faiber/sdk-core').JsonValue|AssetFrequencyPolicy|AssetRewardCapPolicy|AssetRewardCapPolicy[]|import('./economy.types.js').EconomyActivityPolicy|undefined;
}
export type AssetRewardCondition = {type:'always'|'first_action'}|{type:'action_count'|'consecutive_days';operator:AssetCompareOperator;value:number}|{type:'event_value';operator:AssetCompareOperator;value:AssetDecimalInput};
export interface AssetRewardMultiplier {type:'event_value';unit:AssetDecimalInput;rounding?:'floor'|'ceil'|'round'}
export interface AssetRuleReward {asset_name:string;quantity:AssetDecimalInput;multiplier?:AssetRewardMultiplier|null}
export interface AssetRewardRule {label?:string|null;condition:AssetRewardCondition;rewards?:AssetRuleReward[]}
/** The handler stores the submitted rule JSON; optional fields may stay absent in responses. */
export interface AssetAchievementRules {rules?:AssetRewardRule[];match?:string}
export interface AssetActionRecord {id:string;name:string;title:string|null;description:string|null;season_id:string|null;public:boolean;criteria:AssetActionCriteria;achievement_assets:AssetAchievementRules;status:number}
export interface AssetActionCreateInput {name:string;title?:string|null;description?:string|null;season_id?:string|null;public?:boolean|null;criteria?:AssetActionCriteria|null;achievement_assets?:AssetAchievementRules|null;status?:number|null}
export type AssetActionUpdateInput = Partial<AssetActionCreateInput>;
export type AssetActionRecordResponse = ApiEnvelope<AssetActionRecord>;
export interface AssetPaginationMeta {page:number;page_size:number;total_items:number;total_pages:number}
export interface AssetActionPage {data:AssetActionRecord[];meta:AssetPaginationMeta}
export type AssetActionPageResponse = ApiEnvelope<AssetActionPage>;
/** Serde internally tagged union: the wire condition is an object with a type discriminator. */
export type AssetChargeCondition<D = string> = {type:'always'}|{type:'xp_balance'|'coin_balance';operator:AssetCompareOperator;value:D}|{type:'xp_rank';rank_name:string}|{type:'action_count';action_name:string;operator:AssetCompareOperator;value:number};
export interface AssetChargeValues<D=string> {max_charge:D;recharge_period:D;recharge_amount:D}
export interface AssetChargeRule<D=string> {label:string|null;condition:AssetChargeCondition<D>;values:AssetChargeValues<D>}
export interface AssetChargeMapping {rules:AssetChargeRule[];match:string}
export interface AssetChargeRuleInput {label?:string|null;condition:AssetChargeCondition<AssetDecimalInput>;values:AssetChargeValues<AssetDecimalInput>}
export interface AssetChargeMappingInput {rules?:AssetChargeRuleInput[];match?:string}
export interface AssetChargeSettings {id:string;mapping_rules:AssetChargeMapping;status:number}
export interface AssetChargeSettingsInput {mapping_rules:AssetChargeMappingInput;status?:number|null}
export type AssetChargeSettingsResponse = ApiEnvelope<AssetChargeSettings>;

/** Allocation state. Volume sizes are stored from validated BTreeMap<String, i64> input. */
export interface AssetSandboxPriceBreakdown extends JsonObject {
  "cpu": string;
  "ram": string;
  "database_storage": string;
  "minio_storage": string;
  "app_storage": string;
  "disk": string;
  "services": string;
  "resource_total": string;
  "total": string;
  "currency": string;
}
export interface AssetSandboxUnitPrices extends JsonObject {
  "cpu_millicore_hour": string;
  "ram_mb_hour": string;
  "disk_mb_hour": string;
  "currency": string;
}
export interface AssetSandboxAllocation extends JsonObject {
  "id": string;
  "profile_id": string;
  "project": string;
  "cpu_millicores": number;
  "ram_mb": number;
  "database_storage_mb": number;
  "minio_storage_mb": number;
  "app_storage_mb": number;
  "volume_storage_mb": Record<string, number>;
  "bundle_id": string | null;
  "monthly_price_override": string | null;
  "status": string;
  "paused_at": string | null;
  "purge_at": string | null;
  "last_charged_at": string | null;
  "applied_at": string | null;
  "created_at": string;
  "updated_at": string;
  "price": AssetSandboxPriceBreakdown;
  "unit_prices": AssetSandboxUnitPrices;
  "currency": string;
  "hourly_price": string;
  "daily_estimate": string;
  "monthly_estimate": string;
  "next_charge_at": string;
}
export type AssetSandboxAllocationResponse = ApiEnvelope<AssetSandboxAllocation>;
