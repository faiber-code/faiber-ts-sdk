import type { JsonObject, JsonValue, QueryParams } from "@faiber/sdk-core";

/** Required Rust APIResponse fields; transport failures use AxiosError. */
export interface PaymentEnvelope<T> { status: string; message: string; data: T; }
export type GatewayProvider = "zarinpal" | "parsian" | "aqayepardakht" | "mock";
export type GatewayStatus = "active" | "inactive";
export type PaymentTransactionStatus = "pending" | "accepted" | "rejected" | "cancelled";
/** Opaque encrypted/provider-defined options; never use this field as editable credentials. */
export interface Gateway {
  id: number;
  name: string;
  provider: GatewayProvider;
  options: JsonValue | null;
  sandbox: boolean | null;
  priority: number;
  status: GatewayStatus | null;
  created_at: string;
  updated_at: string;
}
export interface CreateGatewayInput {
  name: string;
  provider: GatewayProvider;
  status?: GatewayStatus | null;
  priority?: number | null;
  options?: JsonObject | null;
  sandbox?: boolean | null;
}
export interface UpdateGatewayInput {
  name?: string | null;
  provider?: GatewayProvider | null;
  status?: GatewayStatus | null;
  priority?: number | null;
  options?: JsonObject | null;
  sandbox?: boolean | null;
}
export interface PaymentPageMeta { page: number; page_size: number; total_items: number; total_pages: number; }
export interface PaymentPage<T> { data: T[]; meta: PaymentPageMeta; }
export interface GatewayListQuery extends QueryParams {
  status?: GatewayStatus | null;
  "page[number]"?: number | null;
  "page[size]"?: number | null;
}
export interface GatewayOption { id: number; name: string; provider: GatewayProvider; }
export interface Transaction {
  uuid: string;
  amount: number;
  gateway_id: number;
  gateway: GatewayOption | null;
  description: string | null;
  status: PaymentTransactionStatus | null;
  service_name: string;
  service_model_type: string | null;
  service_model_id: string | null;
  callback_url: string | null;
  authority: string | null;
  user_ip: string | null;
  queue_name: string | null;
  tracking_code: string | null;
  masked_card_number: string | null;
  created_at: string;
  updated_at: string;
}
export interface TransactionListQuery extends QueryParams {
  status?: PaymentTransactionStatus | null;
  service_name?: string | null;
  gateway_id?: number | null;
  tracking_code?: string | null;
  masked_card_number?: string | null;
  from_date?: string | null;
  to_date?: string | null;
  "page[number]"?: number | null;
  "page[size]"?: number | null;
}
export interface PaymentServiceSummary { name: string; amount: number; }
export interface PaymentStatusSummary { accepted: number; pending: number; rejected: number; }
export interface TransactionSummaries { status: PaymentStatusSummary; services: PaymentServiceSummary[]; }
export interface TransactionListData {
  transactions: PaymentPage<Transaction>;
  summaries: TransactionSummaries;
  service_names: string[];
  gateways: GatewayOption[];
}
export interface TransactionStatusData { status: string; }
/** Positive integer amount in configured service units; this contract declares no currency field. */
export interface CreatePaymentInput {
  amount: number;
  service_name: string;
  description?: string | null;
  callback_url?: string | null;
  service_model: string;
  service_id: string;
  queue_name: string;
  idempotency_key?: string | null;
}
export interface PaymentResult { transaction: string; redirect_url: string; }
export interface PaymentLabelValue { value: string; label: string; }
export interface GatewayOptions { providers: PaymentLabelValue[]; statuses: PaymentLabelValue[]; }
export interface DailyIncome { date: string; amount: number; }
export interface DailyIncomeQuery extends QueryParams { days?: number | null; }
export interface PaymentVerification {
  id: string;
  transaction_uuid: string;
  verifier_user_id: string;
  successful: boolean;
  previous_status: string | null;
  resulting_status: string | null;
  tracking_code: string | null;
  message: string | null;
  created_at: string;
}
export interface VerifyPaymentResult { transaction: Transaction; verification: PaymentVerification; }
export type GatewayListResponse = PaymentEnvelope<PaymentPage<Gateway>>;
export type GatewayResponse = PaymentEnvelope<Gateway>;
export type TransactionListResponse = PaymentEnvelope<TransactionListData>;
/** GET /transactions/{uuid} returns status only, not a transaction detail record. */
export type TransactionResponse = PaymentEnvelope<TransactionStatusData>;
export type CreatePaymentResponse = PaymentEnvelope<PaymentResult>;
export type GatewayOptionsResponse = PaymentEnvelope<GatewayOptions>;
export type DailyIncomeResponse = PaymentEnvelope<DailyIncome[]>;
export type VerifyPaymentResponse = PaymentEnvelope<VerifyPaymentResult>;
export type PaymentVerificationLogsResponse = PaymentEnvelope<PaymentVerification[]>;
