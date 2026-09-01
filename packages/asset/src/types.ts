import type { ApiEnvelope, JsonObject, JsonValue, PaginatedResult, QueryParams, ResourceListResponse, ResourceResponse, } from "@faiber/sdk-core";
export interface Asset {
    id: string;
    name: string;
    slug?: string;
    symbol?: string;
    status?: string | number | boolean;
    metadata?: JsonValue;
}
export interface CreateAssetInput {
    name: string;
    slug?: string;
    symbol?: string;
    status?: string | number | boolean;
    metadata?: JsonValue;
}
export interface UpdateAssetInput extends Partial<CreateAssetInput> {
}
export interface Tariff {
    tier: string;
    name: string;
    description?: string | null;
    price: number;
    currency: string;
    duration_days: number;
    points: number;
    storage_gb: number;
    status: number;
    product_id?: string | null;
    metadata: JsonValue;
}
export interface CreateTariffInput {
    tier: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    duration_days: number;
    points?: number;
    storage_gb?: number;
    status?: number;
    product_id?: string | null;
    metadata?: JsonValue;
}
export interface UpdateTariffInput extends Partial<CreateTariffInput> {}
export interface TariffListResponse extends ApiEnvelope<Tariff[]> {}
export interface TariffResponse extends ApiEnvelope<Tariff> {}
export interface Rank {
    id: string;
    name: string;
    minimum?: number;
    maximum?: number;
    status?: string | number | boolean;
}
export interface CreateRankInput extends Omit<Rank, "id"> {
}
export interface UpdateRankInput extends Partial<CreateRankInput> {
}
export interface AssetAction {
    id: string;
    name: string;
    slug?: string;
    amount?: number;
    status?: string | number | boolean;
}
export interface CreateAssetActionInput extends Omit<AssetAction, "id"> {
}
export interface UpdateAssetActionInput extends Partial<CreateAssetActionInput> {
}
export interface AssetDashboard {
    total_assets?: number;
    total_transactions?: number;
    total_subscriptions?: number;
    balances?: Record<string, number>;
}
export interface Wallet {
    id?: string;
    user_id?: string;
    /** Billing principal used by the Asset service. */
    profile_id?: string;
    balance: number;
    currency?: string;
    assets?: Asset[];
}
/** Input used to begin a self-service wallet top-up. */
export interface WalletTopUpInput extends JsonObject {
    amount: number;
    currency?: string | null;
}
/** Payment handoff created for a wallet top-up. */
export interface WalletTopUp extends JsonObject {
    purchase_id: string;
    payment_url: string;
}
export interface WalletTopUpResponse extends ApiEnvelope<WalletTopUp> {
}
/** One completed local day's metered Faiber usage. */
export interface DailyCostSummary extends JsonObject {
    date: string;
    resourceCost: number;
    llmCost: number;
    totalCost: number;
    transactionCount: number;
    currency: string;
}
/** Filters and pagination for daily metered costs. */
export interface DailyCostQuery extends QueryParams {
    page?: number;
    page_size?: number;
    from?: string;
    to?: string;
    tz_offset_minutes?: number;
}
export interface DailyCostPage extends JsonObject {
    items: DailyCostSummary[];
    total: number;
    page: number;
    pageSize: number;
}
export interface DailyCostPageResponse extends ApiEnvelope<DailyCostPage> {
}
/** Administrator input for moving a sandbox project's billing ownership. */
export interface SandboxFinancialOwnerInput extends JsonObject {
    current_profile_id: string;
    financial_owner_user_id: string;
}
/** Administrator input for a project's fixed monthly price. */
export interface SandboxFixedPriceInput extends JsonObject {
    monthly_price_override?: number | null;
}
export interface Subscription {
    id: string;
    user_id?: string;
    product_id?: string;
    status?: string;
    starts_at?: string;
    expires_at?: string;
}
export interface BillingPlan {
    id: string;
    name: string;
    price?: number;
    currency?: string;
    features?: JsonValue;
}
export interface BankSummary {
    balance?: number;
    income?: number;
    expense?: number;
    currency?: string;
}
export interface BankTransaction {
    id: string;
    amount: number;
    type?: string;
    status?: string;
    reference?: string;
    created_at?: string;
}
export interface AiUsagePlan {
    profile_id: string;
    plan_id?: string;
    limits?: JsonValue;
    usage?: JsonValue;
}
export interface SetAiPlanInput {
    plan_id?: string;
    limits?: JsonValue;
}
export interface AssetDashboardResponse extends ApiEnvelope<AssetDashboard> {
}
export interface WalletResponse extends ApiEnvelope<Wallet> {
}
export interface SubscriptionListResponse extends ApiEnvelope<PaginatedResult<Subscription>> {
}
export interface BillingPlanListResponse extends ApiEnvelope<BillingPlan[]> {
}
export interface BankSummaryResponse extends ApiEnvelope<BankSummary> {
}
export interface BankTransactionListResponse extends ApiEnvelope<PaginatedResult<BankTransaction>> {
}
export interface AiUsagePlanResponse extends ApiEnvelope<AiUsagePlan> {
}
export interface AssetListResponse extends ResourceListResponse<Asset> {
}
export interface AssetResponse extends ResourceResponse<Asset> {
}
export interface RankListResponse extends ResourceListResponse<Rank> {
}
export interface RankResponse extends ResourceResponse<Rank> {
}
export interface AssetActionListResponse extends ResourceListResponse<AssetAction> {
}
export interface AssetActionResponse extends ResourceResponse<AssetAction> {
}
