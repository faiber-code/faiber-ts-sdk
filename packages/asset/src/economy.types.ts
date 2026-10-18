import type { ApiEnvelope, JsonValue, QueryParams } from '@faiber/sdk-core';
/** Decimal values use the backend's exact serialized decimal strings. */
export type EconomyDecimal = string;
export interface EconomyInteractionPolicy { cost: EconomyDecimal; cooldown_seconds: number; burst_limit: number | null; burst_window_seconds: number | null; burst_pause_seconds: number | null }
export interface EconomyChargePolicy { asset_name: string; credit_asset: string; capacity: EconomyDecimal; initial: EconomyDecimal; refill_amount: EconomyDecimal; refill_seconds: number; interactions: Record<string, EconomyInteractionPolicy> }
export interface EconomyCatalogItem { enabled: boolean; output_asset: string; output_quantity: EconomyDecimal; coin_price: EconomyDecimal; cash_enabled: boolean; quote_seconds: number; ingredients: Record<string, EconomyDecimal>; settlement_cost: EconomyDecimal }
export interface EconomyPolicy { version: number; enabled: boolean; launch_at: string; currency: string; coin_asset: string; initial_supply: EconomyDecimal; timezone: string; manual_fraction: EconomyDecimal; manual_roles:string[]; charge: EconomyChargePolicy; catalog: Record<string, EconomyCatalogItem> }
export interface EconomyActivityPolicy { version: number; source_group:string|null; role: string; xp_asset: string; xp: EconomyDecimal; coin: EconomyDecimal; gem_asset: string | null; gem_limit: EconomyDecimal | null; overflow_asset: string | null; daily_coin_limit: EconomyDecimal | null; weekly_coin_limit: EconomyDecimal | null; action_limit: number | null; action_period: string | null; replay_multiplier: EconomyDecimal; replay_limit: number; replay_xp_multiplier: EconomyDecimal; live_leaderboard: boolean; verified: boolean; reviewer_required: boolean; manual: boolean; post_close_xp:boolean }
export interface EconomyBank { backing: EconomyDecimal; available: EconomyDecimal; outstanding: EconomyDecimal; settled: EconomyDecimal; burned: EconomyDecimal; shortfall: EconomyDecimal }
export interface EconomyScope { topic_id:string|null; scope_id: string; period_id: string; starts_at: string; ends_at: string; assignments: Record<string,string>; closed: boolean; updated_at:string|null }
export interface EconomyAllocation { scope_id: string; enrollment_id: string; role: string; profile_id: string | null; funded: EconomyDecimal; remaining: EconomyDecimal; issued: EconomyDecimal; manual_spent: EconomyDecimal; closed: boolean }
export interface EconomyFunding { transaction_id: string; revision: number; scope_id: string; enrollment_id: string; budget: EconomyDecimal; refunded: EconomyDecimal; allocations: string[] }
export interface EconomyWallet { profile_id: string; balances: Record<string,EconomyDecimal>; recovery: EconomyDecimal }
export interface EconomyCoinLot { profile_id: string; scope_id: string; allocation_key: string; funding_id: string; issued_coin: EconomyDecimal; unspent_coin: EconomyDecimal; unit_value: EconomyDecimal; reversed_coin: EconomyDecimal }
export interface EconomyEntitlement { profile_id: string; scope_id: string; enrollment_id: string; asset_name: string; revision: number; remaining: EconomyDecimal; reserved: EconomyDecimal; paid: boolean }
export interface EconomyBurst { started_at: string; count: number; blocked_until: string | null }
export interface EconomySession { activity_at:string|null; profile_id: string; scope_id: string; session_id: string; balance: EconomyDecimal; active: boolean; refilled_at: string; last_actions: Record<string,string>; burst: Record<string,EconomyBurst> }
export interface EconomyReservation { profile_id: string; scope_id: string; session_id: string; kind: 'admission' | 'interaction'; object_key: string; quantity: EconomyDecimal; status: 'reserved' | 'committed' | 'released' | 'paid'; expires_at: string }
export interface EconomyPurchase { profile_id: string; item_id: string; amount: EconomyDecimal; currency: string; output_asset: string; output_quantity: EconomyDecimal; expires_at: string; status: 'pending' | 'paid' | 'failed'; payment_id:string|null; redirect_url:string|null; error:string|null }
export interface EconomyObjectMap { bank: EconomyBank; scope: EconomyScope; allocation: EconomyAllocation; funding: EconomyFunding; wallet: EconomyWallet; lot: EconomyCoinLot; entitlement: EconomyEntitlement; session: EconomySession; reservation: EconomyReservation; purchase: EconomyPurchase; leaderboard: EconomyDecimal; pending_refund:EconomyPendingFunding; pending_entitlement:EconomyPendingEntitlement }
export type EconomyObjectKind = keyof EconomyObjectMap;
export type EconomyObjectRecord<K extends EconomyObjectKind = EconomyObjectKind> = { [P in K]: {kind:P; object_key:string; data:EconomyObjectMap[P]} }[K];
export interface EconomyObjectQuery extends QueryParams { object_key?:string; profile_id?: string; scope_id?: string; limit?: number; offset?: number }
export interface EconomyJournalQuery extends QueryParams { after?: number; limit?: number }
export type EconomyPaymentMethod = 'coin' | 'money' | 'craft';
export interface EconomyPurchaseInput { event_id:string; item_id:string; payment:EconomyPaymentMethod }
export interface EconomyCreditInput { event_id:string }
export interface EconomyRewardCommand { type:'reward'; action_name:string; profile_id:string; role:string; scope_id:string; source_id:string; session_id:string|null; replay:boolean; verified:boolean; actor_id:string|null; reason:string|null; rule_version?:number|null; evidence?:Record<string,JsonValue> }
export interface EconomyScopeCloseCommand { type:'scope_close'; scope_id:string }
/** Operator HTTP commands. Funding and interaction authority commands are exclusively broker-delivered. */
export type EconomyOperatorCommand = (EconomyRewardCommand | EconomyScopeCloseCommand) & {event_id:string; occurred_at:string};
export interface EconomyRewardReceipt { xp:EconomyDecimal; coin:EconomyDecimal; gem:string|null; recovered:EconomyDecimal; unit_value:EconomyDecimal; rule_version:number; coin_clamped:boolean }
export interface EconomyPackReceipt { item_id:string; credited:EconomyDecimal; unit_value:EconomyDecimal }
export interface EconomyMoneyQuoteReceipt { purchase_id:string; quote:EconomyPurchase }
export interface EconomyCreditReceipt { applied:EconomyDecimal; charge:EconomyDecimal; credit_remaining:EconomyDecimal }
export interface EconomyClosureReceipt { released:EconomyDecimal; scope_id:string }
export interface EconomyDuplicateReceipt { duplicate_source?:boolean; action_limit?:boolean; replay_limit?:boolean }
export interface EconomyCommandResult<T = EconomyRewardReceipt | EconomyPackReceipt | EconomyMoneyQuoteReceipt | EconomyCreditReceipt | EconomyClosureReceipt | EconomyDuplicateReceipt | {crafted:string}> { event_id:string; duplicate:boolean; data:T }
/** Journal JSON preserves the immutable original broker/operator command and state changes for auditing. */
export interface EconomyJournalEntry { sequence:number; event_id:string; command:Record<string,JsonValue>; result:Record<string,JsonValue>; changes:EconomyJournalChange[]; occurred_at:string; created_at:string }
export type EconomyPolicyResponse = ApiEnvelope<EconomyPolicy|null>;
export type EconomyObjectsResponse<K extends EconomyObjectKind = EconomyObjectKind> = ApiEnvelope<EconomyObjectRecord<K>[]>;
export type EconomyJournalResponse = ApiEnvelope<EconomyJournalEntry[]>;
export type EconomyCommandResponse<T = EconomyCommandResult['data']> = ApiEnvelope<EconomyCommandResult<T>>;

/** Internal journal projections are extensible JSON; public balances have concrete types above. */
export interface EconomyJournalChange {kind:string;object_key:string;data:JsonValue}
export interface EconomyValuation {currency:string;unit_value:EconomyDecimal;bank:EconomyBank}
export type EconomyValuationResponse=ApiEnvelope<EconomyValuation>;
export interface EconomyPreviewInput {action_name:string;role:string;scope_id:string;source_id:string;session_id:string|null;replay:boolean}
export interface EconomyHistoryEntry {sequence:number;event_id:string;occurred_at:string;created_at:string;changes:EconomyJournalChange[]}
export type EconomyHistoryResponse=ApiEnvelope<EconomyHistoryEntry[]>;
export interface EconomyLeaderboardQuery extends QueryParams {role:string;period_id:string;limit?:number}
export interface EconomyLeaderboardEntry {profile_id:string;role:string;period_id:string;xp:EconomyDecimal}
export type EconomyLeaderboardResponse=ApiEnvelope<EconomyLeaderboardEntry[]>;

export interface EconomyCapabilities {policy_update:boolean;reward_review:boolean}
export type EconomyCapabilitiesResponse=ApiEnvelope<EconomyCapabilities>;

/** Owning services deliver these contracts through RabbitMQ, using correlation IDs and durable outboxes. */
export interface EconomyFundingShare {role:string;fraction:EconomyDecimal}
export interface EconomyFundingCommand {type:'funding';transaction_id:string;revision:number;scope_id:string;enrollment_id:string;student_id:string;currency:string;verified_amount:EconomyDecimal;budget_amount:EconomyDecimal;allocations:EconomyFundingShare[];verified:boolean}
export interface EconomyRefundCommand {type:'refund';transaction_id:string;revision:number;amount:EconomyDecimal}
export interface EconomyScopeUpsertCommand {type:'scope_upsert';scope_id:string;period_id:string;starts_at:string;ends_at:string;assignments:Record<string,string>;topic_id?:string|null}
export interface EconomyEntitlementSetCommand {type:'entitlement_set';profile_id:string;scope_id:string;enrollment_id:string;asset_name:string;revision:number;remaining:EconomyDecimal;paid:boolean}
export interface EconomyEntitlementAdjustCommand {type:'entitlement_adjust';profile_id:string;scope_id:string;enrollment_id:string;asset_name:string;revision:number;delta:EconomyDecimal;paid:boolean}
export interface EconomyAdmissionPrepareCommand {type:'admission_prepare';profile_id:string;session_id:string}
export interface EconomyAdmissionReserveCommand {type:'admission_reserve';profile_id:string;scope_id:string;enrollment_id:string;session_id:string;asset_name:string;paid:boolean}
export interface EconomyReservationCommand {type:'admission_commit'|'admission_release'|'interaction_commit'|'interaction_release';reservation_id:string}
export interface EconomySessionBindCommand {type:'session_bind';scope_id:string;session_id:string}
export interface EconomySessionLifecycleCommand {type:'session_close'|'session_cancel';session_id:string}
export interface EconomySessionOpenCommand {type:'session_open';profile_id:string;scope_id:string;session_id:string}
export interface EconomySessionActivityCommand {type:'session_activity';profile_id:string;session_id:string;active:boolean}
export interface EconomyInteractionReserveCommand {type:'interaction_reserve';profile_id:string;session_id:string;interaction:string}
export interface EconomyPaymentLinkedCommand {type:'payment_linked';purchase_id:string;payment_id:string|null;redirect_url:string|null;error:string|null}
export interface EconomyPaymentVerifiedCommand {type:'payment_verified';purchase_id:string;payment_id:string;amount:EconomyDecimal;currency:string;success:boolean}
export interface EconomyInternalPurchaseCommand {type:'purchase';profile_id:string;item_id:string;payment:EconomyPaymentMethod}
export interface EconomyInternalCreditCommand {type:'apply_credit';profile_id:string;session_id:string}
export type EconomyBrokerCommand=(EconomyFundingCommand|EconomyRefundCommand|EconomyScopeUpsertCommand|EconomyScopeCloseCommand|EconomyRewardCommand|EconomyEntitlementSetCommand|EconomyEntitlementAdjustCommand|EconomyAdmissionPrepareCommand|EconomyAdmissionReserveCommand|EconomyReservationCommand|EconomySessionBindCommand|EconomySessionLifecycleCommand|EconomySessionOpenCommand|EconomySessionActivityCommand|EconomyInteractionReserveCommand|EconomyPaymentLinkedCommand|EconomyPaymentVerifiedCommand|EconomyInternalPurchaseCommand|EconomyInternalCreditCommand)&{event_id:string;occurred_at:string};
export interface EconomyPendingFunding {command:EconomyBrokerCommand;resolved:boolean}
export interface EconomyPendingEntitlement {object_key:string;command:EconomyBrokerCommand;resolved:boolean}

export type EconomyCreditResponse=EconomyCommandResponse<EconomyCreditReceipt>;
