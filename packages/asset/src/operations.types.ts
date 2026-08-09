import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ActionListQuery. */
export interface ActionActionsIndexGetQuery extends QueryParams {
  "page[number]"?: number | null;
  "page[size]"?: number | null;
  "search"?: string | null;
}
/** Backend response type: PagedResult<ActionResponse>. */
export interface ActionActionsIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public": boolean;
  "criteria": BackendJson<"Json">;
  "achievement_assets": BackendJson<"Json">;
  "status": number;
}
export interface ActionActionsIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ActionActionsIndexGetResponseData extends JsonObject {
  "data": ActionActionsIndexGetResponseItem[];
  "meta": ActionActionsIndexGetResponsePageMeta;
}
export interface ActionActionsIndexGetResponse extends ApiEnvelope<ActionActionsIndexGetResponseData> {
}

/** Backend request type: CreateActionRequest. */
export interface ActionActionsCreatePostInput extends JsonObject {
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public"?: boolean | null;
  "criteria"?: BackendJson<"Json"> | null;
  "achievement_assets"?: BackendJson<"Json"> | null;
  "status"?: number | null;
}
/** Backend response type: ActionResponse. */
export interface ActionActionsCreatePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public": boolean;
  "criteria": BackendJson<"Json">;
  "achievement_assets": BackendJson<"Json">;
  "status": number;
}
export interface ActionActionsCreatePostResponse extends ApiEnvelope<ActionActionsCreatePostResponseData> {
}

/** Backend response type: (). */
export interface ActionActionsDeleteDeleteResponse extends ApiEnvelope<JsonObject> {
}

/** Backend response type: ActionResponse. */
export interface ActionActionsShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public": boolean;
  "criteria": BackendJson<"Json">;
  "achievement_assets": BackendJson<"Json">;
  "status": number;
}
export interface ActionActionsShowGetResponse extends ApiEnvelope<ActionActionsShowGetResponseData> {
}

/** Backend request type: UpdateActionRequest. */
export interface ActionActionsUpdatePatchInput extends JsonObject {
  "name"?: string | null;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public"?: boolean | null;
  "criteria"?: BackendJson<"Json"> | null;
  "achievement_assets"?: BackendJson<"Json"> | null;
  "status"?: number | null;
}
/** Backend response type: ActionResponse. */
export interface ActionActionsUpdatePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public": boolean;
  "criteria": BackendJson<"Json">;
  "achievement_assets": BackendJson<"Json">;
  "status": number;
}
export interface ActionActionsUpdatePatchResponse extends ApiEnvelope<ActionActionsUpdatePatchResponseData> {
}

/** Backend request type: CompleteActionRequest. */
export interface ActionActionsCompletePostInput extends JsonObject {
  "action_name": string;
  "profile_id": string;
}
/** Backend response type: crate::reward::engine::CompleteActionResult. */
export interface ActionActionsCompletePostResponseData extends JsonObject {
  "action_log_id": string;
  "action_count": number;
  "grants": BackendJson<"RewardGrant">[];
}
export interface ActionActionsCompletePostResponse extends ApiEnvelope<ActionActionsCompletePostResponseData> {
}

/** Backend response type: Vec<methods::PlanProduct>. */
export interface WalletBillingAdminPlanProductsIndexGetResponseItem extends JsonObject {
  "tier": string;
  "name": string;
  "description"?: string | null;
  "price": number;
  "currency": string;
  "duration_days": number;
  "points": number;
  "storage_gb": number;
  "product_id"?: string | null;
  "metadata": JsonValue;
  "status": number;
}
export interface WalletBillingAdminPlanProductsIndexGetResponse extends ApiEnvelope<WalletBillingAdminPlanProductsIndexGetResponseItem[]> {
}

/** Backend request type: AdminPlanProductBody. */
export interface WalletBillingAdminPlanProductsUpdatePutInput extends JsonObject {
  "tier": string;
  "name": string;
  "description"?: string | null;
  "price": number;
  "currency"?: string;
  "duration_days": number;
  "points": number;
  "storage_gb": number;
  "product_id"?: string | null;
  "metadata"?: JsonValue;
  "status"?: number;
}
/** Backend response type: methods::PlanProduct. */
export interface WalletBillingAdminPlanProductsUpdatePutResponseData extends JsonObject {
  "tier": string;
  "name": string;
  "description"?: string | null;
  "price": number;
  "currency": string;
  "duration_days": number;
  "points": number;
  "storage_gb": number;
  "product_id"?: string | null;
  "metadata": JsonValue;
  "status": number;
}
export interface WalletBillingAdminPlanProductsUpdatePutResponse extends ApiEnvelope<WalletBillingAdminPlanProductsUpdatePutResponseData> {
}

/** Backend response type: APIEmptyResponse. */
export interface WalletBillingAdminPlanProductsDeleteDeleteResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type WalletBillingAdminPlanProductsDeleteDeleteResponse = WalletBillingAdminPlanProductsDeleteDeleteResponseData;

/** Backend response type: UnitPrices. */
export interface SandboxBillingAdminPricesGetResponseData extends JsonObject {
  "cpu_millicore_hour": number;
  "ram_mb_hour": number;
  "disk_mb_hour": number;
  "currency": string;
}
export interface SandboxBillingAdminPricesGetResponse extends ApiEnvelope<SandboxBillingAdminPricesGetResponseData> {
}

/** Backend request type: UnitPrices. */
export interface SandboxBillingAdminPricesUpdatePutInput extends JsonObject {
  "cpu_millicore_hour": number;
  "ram_mb_hour": number;
  "disk_mb_hour": number;
  "currency": string;
}
/** Backend response type: UnitPrices. */
export interface SandboxBillingAdminPricesUpdatePutResponseData extends JsonObject {
  "cpu_millicore_hour": number;
  "ram_mb_hour": number;
  "disk_mb_hour": number;
  "currency": string;
}
export interface SandboxBillingAdminPricesUpdatePutResponse extends ApiEnvelope<SandboxBillingAdminPricesUpdatePutResponseData> {
}

/** Backend query type: AdminSubscriptionListQuery. */
export interface WalletBillingAdminSubscriptionsIndexGetQuery extends QueryParams {
  "project"?: string | null;
  "profile_id"?: string | null;
}
/** Backend response type: SubscriptionListResponse. */
export interface WalletBillingAdminSubscriptionsIndexGetResponseData extends JsonObject {
  "subscriptions": BackendJson<"SubscriptionDTO">[];
}
export interface WalletBillingAdminSubscriptionsIndexGetResponse extends ApiEnvelope<WalletBillingAdminSubscriptionsIndexGetResponseData> {
}

/** Backend response type: Vec<methods::AdminUserPlan>. */
export interface WalletBillingAdminUserPlansIndexGetResponseItem extends JsonObject {
  "profile_id": string;
  "tier": string;
  "expires_at"?: string | null;
  "days_remaining": number;
  "enabled": boolean;
}
export interface WalletBillingAdminUserPlansIndexGetResponse extends ApiEnvelope<WalletBillingAdminUserPlansIndexGetResponseItem[]> {
}

/** Backend response type: APIEmptyResponse. */
export interface WalletBillingAdminUserPlanDeleteDeleteResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type WalletBillingAdminUserPlanDeleteDeleteResponse = WalletBillingAdminUserPlanDeleteDeleteResponseData;

/** Backend request type: AdminUserPlanBody. */
export interface WalletBillingAdminUserPlanUpdatePutInput extends JsonObject {
  "tier": string;
  "days"?: number;
}
/** Backend response type: methods::AdminUserPlan. */
export interface WalletBillingAdminUserPlanUpdatePutResponseData extends JsonObject {
  "profile_id": string;
  "tier": string;
  "expires_at"?: string | null;
  "days_remaining": number;
  "enabled": boolean;
}
export interface WalletBillingAdminUserPlanUpdatePutResponse extends ApiEnvelope<WalletBillingAdminUserPlanUpdatePutResponseData> {
}

/** Backend response type: methods::AdminUserPlan. */
export interface WalletBillingAdminUserPlanDisablePutResponseData extends JsonObject {
  "profile_id": string;
  "tier": string;
  "expires_at"?: string | null;
  "days_remaining": number;
  "enabled": boolean;
}
export interface WalletBillingAdminUserPlanDisablePutResponse extends ApiEnvelope<WalletBillingAdminUserPlanDisablePutResponseData> {
}

/** Backend query type: AssetListQuery. */
export interface CatalogAssetsIndexGetQuery extends QueryParams {
  "page[number]"?: number | null;
  "page[size]"?: number | null;
  "asset_type"?: string | null;
  "search"?: string | null;
}
/** Backend response type: PagedResult<AssetResponse>. */
export interface CatalogAssetsIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "subject_type": string;
  "metadata": JsonValue;
  "asset_type": BackendJson<"AssetType">;
  "max_quantity": number;
  "status": number;
}
export interface CatalogAssetsIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface CatalogAssetsIndexGetResponseData extends JsonObject {
  "data": CatalogAssetsIndexGetResponseItem[];
  "meta": CatalogAssetsIndexGetResponsePageMeta;
}
export interface CatalogAssetsIndexGetResponse extends ApiEnvelope<CatalogAssetsIndexGetResponseData> {
}

/** Backend request type: CreateAssetRequest. */
export interface CatalogAssetsCreatePostInput extends JsonObject {
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "subject_type"?: string | null;
  "metadata"?: JsonValue | null;
  "asset_type": BackendJson<"AssetType">;
  "max_quantity"?: number | null;
  "status"?: number | null;
}
/** Backend response type: AssetResponse. */
export interface CatalogAssetsCreatePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "subject_type": string;
  "metadata": JsonValue;
  "asset_type": BackendJson<"AssetType">;
  "max_quantity": number;
  "status": number;
}
export interface CatalogAssetsCreatePostResponse extends ApiEnvelope<CatalogAssetsCreatePostResponseData> {
}

/** Backend response type: (). */
export interface CatalogAssetsDeleteDeleteResponse extends ApiEnvelope<JsonObject> {
}

/** Backend response type: AssetResponse. */
export interface CatalogAssetsShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "subject_type": string;
  "metadata": JsonValue;
  "asset_type": BackendJson<"AssetType">;
  "max_quantity": number;
  "status": number;
}
export interface CatalogAssetsShowGetResponse extends ApiEnvelope<CatalogAssetsShowGetResponseData> {
}

/** Backend request type: UpdateAssetRequest. */
export interface CatalogAssetsUpdatePatchInput extends JsonObject {
  "name"?: string | null;
  "title"?: string | null;
  "description"?: string | null;
  "subject_type"?: string | null;
  "metadata"?: JsonValue | null;
  "max_quantity"?: number | null;
  "status"?: number | null;
}
/** Backend response type: AssetResponse. */
export interface CatalogAssetsUpdatePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "subject_type": string;
  "metadata": JsonValue;
  "asset_type": BackendJson<"AssetType">;
  "max_quantity": number;
  "status": number;
}
export interface CatalogAssetsUpdatePatchResponse extends ApiEnvelope<CatalogAssetsUpdatePatchResponseData> {
}

/** Backend response type: BankSummaryResponse. */
export interface BankBankSummaryShowGetResponseData extends JsonObject {
  "bank_value_sum": number;
}
export interface BankBankSummaryShowGetResponse extends ApiEnvelope<BankBankSummaryShowGetResponseData> {
}

/** Backend query type: BankTransactionListQuery. */
export interface BankBankTransactionsIndexGetQuery extends QueryParams {
  "page[number]"?: number | null;
  "page[size]"?: number | null;
  "profile_id"?: string | null;
  "bank_transaction_type"?: QueryValue | null;
  "search"?: string | null;
}
/** Backend response type: PagedResult<BankTransactionResponse>. */
export interface BankBankTransactionsIndexGetResponseItem extends JsonObject {
  "id": string;
  "profile_id": string;
  "profile_name"?: string | null;
  "bank_id": string;
  "bank_transaction_type": BackendJson<"BankTransctionType">;
  "amount": number;
  "metadata": BackendJson<"Json">;
  "status": number;
  "created_at": string;
  "profile_deposit_total": number;
}
export interface BankBankTransactionsIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface BankBankTransactionsIndexGetResponseData extends JsonObject {
  "data": BankBankTransactionsIndexGetResponseItem[];
  "meta": BankBankTransactionsIndexGetResponsePageMeta;
}
export interface BankBankTransactionsIndexGetResponse extends ApiEnvelope<BankBankTransactionsIndexGetResponseData> {
}

/** Backend request type: CreateBankTransactionRequest. */
export interface BankBankTransactionsCreatePostInput extends JsonObject {
  "amount": number;
  "profile_id": string;
  "bank_id"?: string | null;
  "metadata"?: BackendJson<"Json"> | null;
}
/** Backend response type: entity::bank_transaction::Model. */
export interface BankBankTransactionsCreatePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public": boolean;
  "criteria"?: BackendJson<"Json"> | null;
  "achievement_assets"?: BackendJson<"Json"> | null;
  "status": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface BankBankTransactionsCreatePostResponse extends ApiEnvelope<BankBankTransactionsCreatePostResponseData> {
}

/** Backend response type: crate::charge::models::ChargeSettingsResponse. */
export interface ChargeChargeSettingsShowGetResponseData extends JsonObject {
  "id": BackendJson<"uuid::Uuid">;
  "mapping_rules": BackendJson<"ChargeMappingRules">;
  "status": number;
}
export interface ChargeChargeSettingsShowGetResponse extends ApiEnvelope<ChargeChargeSettingsShowGetResponseData> {
}

/** Backend request type: UpdateChargeSettingsRequest. */
export interface ChargeChargeSettingsUpdatePatchInput extends JsonObject {
  "mapping_rules": BackendJson<"ChargeMappingRules">;
  "status"?: number | null;
}
/** Backend response type: crate::charge::models::ChargeSettingsResponse. */
export interface ChargeChargeSettingsUpdatePatchResponseData extends JsonObject {
  "id": BackendJson<"uuid::Uuid">;
  "mapping_rules": BackendJson<"ChargeMappingRules">;
  "status": number;
}
export interface ChargeChargeSettingsUpdatePatchResponse extends ApiEnvelope<ChargeChargeSettingsUpdatePatchResponseData> {
}

/** Backend response type: CoinSettingsResponse. */
export interface BankCoinSettingsShowGetResponseData extends JsonObject {
  "id": string;
  "total_coins": number;
  "coins_remaining": number;
  "allocation_percent": number;
  "bank_value_sum": number;
  "coin_unit_value": number;
  "allocated_coins": number;
}
export interface BankCoinSettingsShowGetResponse extends ApiEnvelope<BankCoinSettingsShowGetResponseData> {
}

/** Backend request type: UpdateCoinSettingsRequest. */
export interface BankCoinSettingsUpdatePatchInput extends JsonObject {
  "total_coins"?: number | null;
  "allocation_percent"?: number | null;
}
/** Backend response type: CoinSettingsResponse. */
export interface BankCoinSettingsUpdatePatchResponseData extends JsonObject {
  "id": string;
  "total_coins": number;
  "coins_remaining": number;
  "allocation_percent": number;
  "bank_value_sum": number;
  "coin_unit_value": number;
  "allocated_coins": number;
}
export interface BankCoinSettingsUpdatePatchResponse extends ApiEnvelope<BankCoinSettingsUpdatePatchResponseData> {
}

/** Backend query type: DashboardQuery. */
export interface DashboardDashboardShowGetQuery extends QueryParams {
  "month"?: string | null;
}
/** Backend response type: DashboardResponse. */
export interface DashboardDashboardShowGetResponseData extends JsonObject {
  "month": string;
  "coins_available": number;
  "coins_owned_by_users": number;
  "total_coins": number;
  "bank_value_sum": number;
  "coin_unit_price": number;
  "month_budget_balance": number;
  "month_bank_transactions_count": number;
  "month_actions_count": number;
}
export interface DashboardDashboardShowGetResponse extends ApiEnvelope<DashboardDashboardShowGetResponseData> {
}

/** Backend response type: crate::integration::models::IntegrationDocsResponse. */
export interface IntegrationIntegrationDocsShowGetResponseData extends JsonObject {
  "direct": BackendJson<"DirectIntegrationMeta">;
  "sdk": BackendJson<"SdkIntegrationSnippet">[];
}
export interface IntegrationIntegrationDocsShowGetResponse extends ApiEnvelope<IntegrationIntegrationDocsShowGetResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<BackendJson<"infera_flow_sdk::FlowIntegrationResponse">> {
}

/** Backend response type: crate::integration::models::RabbitMqIntegrationResponse. */
export interface IntegrationRabbitmqIntegrationShowGetResponseData extends JsonObject {
  "queue": string;
  "broker_url_hint": string;
  "sample_profile_id": string;
  "events": BackendJson<"IntegrationEventMeta">[];
}
export interface IntegrationRabbitmqIntegrationShowGetResponse extends ApiEnvelope<IntegrationRabbitmqIntegrationShowGetResponseData> {
}

/** Backend response type: PlanListResponse. */
export interface LlmUsagePlansIndexGetResponseData extends JsonObject {
  "plans": BackendJson<"PlanResponse">[];
}
export interface LlmUsagePlansIndexGetResponse extends ApiEnvelope<LlmUsagePlansIndexGetResponseData> {
}

/** Backend response type: PlanResponse. */
export interface LlmUsagePlanShowGetResponseData extends JsonObject {
  "profile_id": string;
  "tier": string;
  "expires_at"?: string | null;
  "plan_points": number;
  "created_at": string;
  "updated_at": string;
}
export interface LlmUsagePlanShowGetResponse extends ApiEnvelope<LlmUsagePlanShowGetResponseData> {
}

/** Backend request type: SetPlanRequest. */
export interface LlmUsagePlanSetPutInput extends JsonObject {
  "tier": string;
}
/** Backend response type: PlanResponse. */
export interface LlmUsagePlanSetPutResponseData extends JsonObject {
  "profile_id": string;
  "tier": string;
  "expires_at"?: string | null;
  "plan_points": number;
  "created_at": string;
  "updated_at": string;
}
export interface LlmUsagePlanSetPutResponse extends ApiEnvelope<LlmUsagePlanSetPutResponseData> {
}

/** Backend response type: crate::wallet::models::UserWalletResponse. */
export interface WalletMeAssetsShowGetResponseData extends JsonObject {
  "profile_id": string;
  "coin": BackendJson<"WalletAssetBalance">;
  "xp": BackendJson<"WalletAssetBalance">;
  "charge": BackendJson<"WalletAssetBalance">;
  "gems": BackendJson<"WalletAssetBalance">[];
  "badges": BackendJson<"WalletBadgeBalance">[];
  "max_charge"?: number | null;
  "recharge_period"?: number | null;
  "xp_to_next_rank"?: number | null;
}
export interface WalletMeAssetsShowGetResponse extends ApiEnvelope<WalletMeAssetsShowGetResponseData> {
}

/** Backend query type: SubjectBadgeQuery. */
export interface WalletMeBadgesShowGetQuery extends QueryParams {
  "subject_type"?: string | null;
  "subject_id"?: string | null;
}
/** Backend response type: crate::wallet::models::SubjectBadgesResponse. */
export interface WalletMeBadgesShowGetResponseData extends JsonObject {
  "profile_id": string;
  "subject_type": string;
  "subject_id"?: string | null;
  "badges": BackendJson<"WalletBadgeBalance">[];
}
export interface WalletMeBadgesShowGetResponse extends ApiEnvelope<WalletMeBadgesShowGetResponseData> {
}

/** Backend query type: UsageQuery. */
export interface WalletMeLlmUsageGetQuery extends QueryParams {
  "range"?: string | null;
}
/** Backend response type: crate::llm_usage::models::UsageSummary. */
export interface WalletMeLlmUsageGetResponseData extends JsonObject {
  "currency": string;
  "range": string;
  "chart": BackendJson<"UsageBucket">[];
  "buckets": BackendJson<"UsageBucket">[];
  "last_24_hours": BackendJson<"UsageTotals">;
  "range_totals": BackendJson<"UsageTotals">;
}
export interface WalletMeLlmUsageGetResponse extends ApiEnvelope<WalletMeLlmUsageGetResponseData> {
}

/** Backend query type: TxQuery. */
export interface WalletMeTransactionsGetQuery extends QueryParams {
  "ref_type"?: string | null;
  "exclude_ref_type"?: string | null;
  "page"?: number | null;
  "page_size"?: number | null;
  "from"?: string | null;
  "to"?: string | null;
  "rollup_usage_daily"?: boolean | null;
  "tz_offset_minutes"?: number | null;
}
/** Backend response type: TxPage. */
export interface WalletMeTransactionsGetResponseData extends JsonObject {
  "items": BackendJson<"entity::wallet_transaction::Model">[];
  "total": number;
  "page": number;
  "page_size": number;
}
export interface WalletMeTransactionsGetResponse extends ApiEnvelope<WalletMeTransactionsGetResponseData> {
}

/** Backend response type: entity::wallet_transaction::Model. */
export interface WalletMeTransactionShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public": boolean;
  "criteria"?: BackendJson<"Json"> | null;
  "achievement_assets"?: BackendJson<"Json"> | null;
  "status": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface WalletMeTransactionShowGetResponse extends ApiEnvelope<WalletMeTransactionShowGetResponseData> {
}

/** Backend query type: UsageDaysQuery. */
export interface WalletMeTransactionDaysGetQuery extends QueryParams {
  "page"?: number | null;
  "page_size"?: number | null;
  "from"?: string | null;
  "to"?: string | null;
  "tz_offset_minutes"?: number | null;
}
/** Backend response type: UsageDaysPage. */
export interface WalletMeTransactionDaysGetResponseData extends JsonObject {
  "items": BackendJson<"UsageDaySummary">[];
  "total": number;
  "page": number;
  "page_size": number;
}
export interface WalletMeTransactionDaysGetResponse extends ApiEnvelope<WalletMeTransactionDaysGetResponseData> {
}

/** Backend query type: UsageDayQuery. */
export interface WalletMeTransactionDayGetQuery extends QueryParams {
  "tz_offset_minutes"?: number | null;
}
/** Backend response type: UsageDayDetail. */
export interface WalletMeTransactionDayGetResponseData extends JsonObject {
  "date": string;
  "currency": string;
  "resource_cost": number;
  "llm_cost": number;
  "total_cost": number;
  "resources": BackendJson<"ResourceUsageGroup">[];
  "llm": BackendJson<"LlmUsageLine">[];
}
export interface WalletMeTransactionDayGetResponse extends ApiEnvelope<WalletMeTransactionDayGetResponseData> {
}

/** Backend response type: Vec<methods::PlanProduct>. */
export interface WalletBillingPlansIndexGetResponseItem extends JsonObject {
  "tier": string;
  "name": string;
  "description"?: string | null;
  "price": number;
  "currency": string;
  "duration_days": number;
  "points": number;
  "storage_gb": number;
  "product_id"?: string | null;
  "metadata": JsonValue;
  "status": number;
}
export interface WalletBillingPlansIndexGetResponse extends ApiEnvelope<WalletBillingPlansIndexGetResponseItem[]> {
}

/** Backend response type: methods::CurrentPlan. */
export interface WalletBillingCurrentPlanGetResponseData extends JsonObject {
  "tier": string;
  "expires_at"?: string | null;
  "days_remaining": number;
  "renewal_allowed": boolean;
}
export interface WalletBillingCurrentPlanGetResponse extends ApiEnvelope<WalletBillingCurrentPlanGetResponseData> {
}

/** Backend request type: PlanPurchaseBody. */
export interface WalletBillingPlansPurchasePostInput extends JsonObject {
  "tier": string;
}
/** Backend response type: PurchaseInitResponse. */
export interface WalletBillingPlansPurchasePostResponseData extends JsonObject {
  "purchase_id": string;
  "payment_url": string;
}
export interface WalletBillingPlansPurchasePostResponse extends ApiEnvelope<WalletBillingPlansPurchasePostResponseData> {
}

/** Backend response type: Vec<methods::PointsPack>. */
export interface WalletBillingPointsPacksIndexGetResponseItem extends JsonObject {
  "id": string;
  "price": number;
  "points": number;
}
export interface WalletBillingPointsPacksIndexGetResponse extends ApiEnvelope<WalletBillingPointsPacksIndexGetResponseItem[]> {
}

/** Backend request type: PackPurchaseBody. */
export interface WalletBillingPointsPacksPurchasePostInput extends JsonObject {
  "pack_id"?: string | null;
  "points"?: number | null;
}
/** Backend response type: PurchaseInitResponse. */
export interface WalletBillingPointsPacksPurchasePostResponseData extends JsonObject {
  "purchase_id": string;
  "payment_url": string;
}
export interface WalletBillingPointsPacksPurchasePostResponse extends ApiEnvelope<WalletBillingPointsPacksPurchasePostResponseData> {
}

/** Backend query type: RankListQuery. */
export interface RankRanksIndexGetQuery extends QueryParams {
  "page[number]"?: number | null;
  "page[size]"?: number | null;
  "search"?: string | null;
}
/** Backend response type: PagedResult<RankResponse>. */
export interface RankRanksIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "min_xp": number;
  "status": number;
}
export interface RankRanksIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface RankRanksIndexGetResponseData extends JsonObject {
  "data": RankRanksIndexGetResponseItem[];
  "meta": RankRanksIndexGetResponsePageMeta;
}
export interface RankRanksIndexGetResponse extends ApiEnvelope<RankRanksIndexGetResponseData> {
}

/** Backend request type: CreateRankRequest. */
export interface RankRanksCreatePostInput extends JsonObject {
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "min_xp": number;
  "status"?: number | null;
}
/** Backend response type: RankResponse. */
export interface RankRanksCreatePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "min_xp": number;
  "status": number;
}
export interface RankRanksCreatePostResponse extends ApiEnvelope<RankRanksCreatePostResponseData> {
}

/** Backend response type: (). */
export interface RankRanksDeleteDeleteResponse extends ApiEnvelope<JsonObject> {
}

/** Backend response type: RankResponse. */
export interface RankRanksShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "min_xp": number;
  "status": number;
}
export interface RankRanksShowGetResponse extends ApiEnvelope<RankRanksShowGetResponseData> {
}

/** Backend request type: UpdateRankRequest. */
export interface RankRanksUpdatePatchInput extends JsonObject {
  "name"?: string | null;
  "title"?: string | null;
  "description"?: string | null;
  "min_xp"?: number | null;
  "status"?: number | null;
}
/** Backend response type: RankResponse. */
export interface RankRanksUpdatePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "min_xp": number;
  "status": number;
}
export interface RankRanksUpdatePatchResponse extends ApiEnvelope<RankRanksUpdatePatchResponseData> {
}

/** Backend response type: APIEmptyResponse. */
export interface SandboxBillingPurgeDeleteResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type SandboxBillingPurgeDeleteResponse = SandboxBillingPurgeDeleteResponseData;

/** Backend response type: AllocationView. */
export interface SandboxBillingShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public": boolean;
  "criteria"?: BackendJson<"Json"> | null;
  "achievement_assets"?: BackendJson<"Json"> | null;
  "status": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
  "price": BackendJson<"PriceBreakdown">;
  "unit_prices": BackendJson<"UnitPrices">;
  "currency": string;
  "hourly_price": number;
  "daily_estimate": number;
  "monthly_estimate": number;
  "next_charge_at": string;
}
export interface SandboxBillingShowGetResponse extends ApiEnvelope<SandboxBillingShowGetResponseData> {
}

/** Backend request type: AllocationInput. */
export interface SandboxBillingUpdatePutInput extends JsonObject {
  "bundle_id"?: string | null;
  "cpu_millicores": number;
  "ram_mb": number;
  "database_storage_mb": number;
  "minio_storage_mb": number;
  "app_storage_mb": number;
}
/** Backend response type: AllocationView. */
export interface SandboxBillingUpdatePutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public": boolean;
  "criteria"?: BackendJson<"Json"> | null;
  "achievement_assets"?: BackendJson<"Json"> | null;
  "status": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
  "price": BackendJson<"PriceBreakdown">;
  "unit_prices": BackendJson<"UnitPrices">;
  "currency": string;
  "hourly_price": number;
  "daily_estimate": number;
  "monthly_estimate": number;
  "next_charge_at": string;
}
export interface SandboxBillingUpdatePutResponse extends ApiEnvelope<SandboxBillingUpdatePutResponseData> {
}

/** Backend response type: AllocationView. */
export interface SandboxBillingPausePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public": boolean;
  "criteria"?: BackendJson<"Json"> | null;
  "achievement_assets"?: BackendJson<"Json"> | null;
  "status": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
  "price": BackendJson<"PriceBreakdown">;
  "unit_prices": BackendJson<"UnitPrices">;
  "currency": string;
  "hourly_price": number;
  "daily_estimate": number;
  "monthly_estimate": number;
  "next_charge_at": string;
}
export interface SandboxBillingPausePostResponse extends ApiEnvelope<SandboxBillingPausePostResponseData> {
}

/** Backend response type: AllocationView. */
export interface SandboxBillingResumePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "season_id"?: string | null;
  "public": boolean;
  "criteria"?: BackendJson<"Json"> | null;
  "achievement_assets"?: BackendJson<"Json"> | null;
  "status": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
  "price": BackendJson<"PriceBreakdown">;
  "unit_prices": BackendJson<"UnitPrices">;
  "currency": string;
  "hourly_price": number;
  "daily_estimate": number;
  "monthly_estimate": number;
  "next_charge_at": string;
}
export interface SandboxBillingResumePostResponse extends ApiEnvelope<SandboxBillingResumePostResponseData> {
}

/** Backend query type: SubscriptionListQuery. */
export interface WalletBillingSubscriptionsIndexGetQuery extends QueryParams {
  "project"?: string | null;
}
/** Backend response type: SubscriptionListResponse. */
export interface WalletBillingSubscriptionsIndexGetResponseData extends JsonObject {
  "subscriptions": BackendJson<"SubscriptionDTO">[];
}
export interface WalletBillingSubscriptionsIndexGetResponse extends ApiEnvelope<WalletBillingSubscriptionsIndexGetResponseData> {
}

/** Backend response type: APIEmptyResponse. */
export interface WalletBillingSubscriptionsCancelPostResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type WalletBillingSubscriptionsCancelPostResponse = WalletBillingSubscriptionsCancelPostResponseData;

/** Backend response type: APIEmptyResponse. */
export interface ServiceLifecycleDeletePermanentlyDeleteResponseData extends JsonObject {
  "status": string;
  "message": string;
}
export type ServiceLifecycleDeletePermanentlyDeleteResponse = ServiceLifecycleDeletePermanentlyDeleteResponseData;

/** Backend response type: ServiceLifecycleView. */
export interface ServiceLifecyclePausePostResponseData extends JsonObject {
  "service_name": string;
  "status": string;
  "paused_at"?: string | null;
  "purge_at"?: string | null;
}
export type ServiceLifecyclePausePostResponse = ServiceLifecyclePausePostResponseData;

/** Backend response type: ServiceLifecycleView. */
export interface ServiceLifecycleRemovePostResponseData extends JsonObject {
  "service_name": string;
  "status": string;
  "paused_at"?: string | null;
  "purge_at"?: string | null;
}
export type ServiceLifecycleRemovePostResponse = ServiceLifecycleRemovePostResponseData;

/** Backend response type: ServiceLifecycleView. */
export interface ServiceLifecycleResumePostResponseData extends JsonObject {
  "service_name": string;
  "status": string;
  "paused_at"?: string | null;
  "purge_at"?: string | null;
}
export type ServiceLifecycleResumePostResponse = ServiceLifecycleResumePostResponseData;

/** Backend request type: SubscriptionPurchaseRequest. */
export interface WalletBillingSubscriptionsPurchasePostInput extends JsonObject {
  "project": string;
  "items": BackendJson<"SubscriptionItemRequest">[];
  "currency"?: string | null;
}
/** Backend response type: PurchaseInitResponse. */
export interface WalletBillingSubscriptionsPurchasePostResponseData extends JsonObject {
  "purchase_id": string;
  "payment_url": string;
}
export interface WalletBillingSubscriptionsPurchasePostResponse extends ApiEnvelope<WalletBillingSubscriptionsPurchasePostResponseData> {
}

/** Backend query type: LogListQuery. */
export interface LogsUserActionLogsIndexGetQuery extends QueryParams {
  "page[number]"?: number | null;
  "page[size]"?: number | null;
  "profile_id"?: string | null;
  "action_id"?: string | null;
  "asset_id"?: string | null;
  "from"?: string | null;
  "to"?: string | null;
  "search"?: string | null;
}
/** Backend response type: crate::models::PagedResult<crate::logs::models::UserActionLogResponse>. */
export interface LogsUserActionLogsIndexGetResponseItem extends JsonObject {
  "id": string;
  "profile_id": string;
  "action_id": string;
  "action_name"?: string | null;
  "status": number;
  "created_at": string;
}
export interface LogsUserActionLogsIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface LogsUserActionLogsIndexGetResponseData extends JsonObject {
  "data": LogsUserActionLogsIndexGetResponseItem[];
  "meta": LogsUserActionLogsIndexGetResponsePageMeta;
}
export interface LogsUserActionLogsIndexGetResponse extends ApiEnvelope<LogsUserActionLogsIndexGetResponseData> {
}

/** Backend query type: LogListQuery. */
export interface LogsUserAssetLogsIndexGetQuery extends QueryParams {
  "page[number]"?: number | null;
  "page[size]"?: number | null;
  "profile_id"?: string | null;
  "action_id"?: string | null;
  "asset_id"?: string | null;
  "from"?: string | null;
  "to"?: string | null;
  "search"?: string | null;
}
/** Backend response type: crate::models::PagedResult<crate::logs::models::UserAssetLogResponse>. */
export interface LogsUserAssetLogsIndexGetResponseItem extends JsonObject {
  "id": string;
  "profile_id": string;
  "action_id": string;
  "asset_id": string;
  "action_name"?: string | null;
  "asset_name"?: string | null;
  "quantity": number;
  "transaction_type": string;
  "created_at": string;
}
export interface LogsUserAssetLogsIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface LogsUserAssetLogsIndexGetResponseData extends JsonObject {
  "data": LogsUserAssetLogsIndexGetResponseItem[];
  "meta": LogsUserAssetLogsIndexGetResponsePageMeta;
}
export interface LogsUserAssetLogsIndexGetResponse extends ApiEnvelope<LogsUserAssetLogsIndexGetResponseData> {
}

/** Backend response type: WalletResponse. */
export interface WalletBillingWalletShowGetResponseData extends JsonObject {
  "profile_id": string;
  "balance": number;
  "currency": string;
}
export interface WalletBillingWalletShowGetResponse extends ApiEnvelope<WalletBillingWalletShowGetResponseData> {
}

/** Backend request type: TopupRequest. */
export interface WalletBillingWalletTopupPostInput extends JsonObject {
  "amount": number;
  "currency"?: string | null;
}
/** Backend response type: PurchaseInitResponse. */
export interface WalletBillingWalletTopupPostResponseData extends JsonObject {
  "purchase_id": string;
  "payment_url": string;
}
export interface WalletBillingWalletTopupPostResponse extends ApiEnvelope<WalletBillingWalletTopupPostResponseData> {
}

