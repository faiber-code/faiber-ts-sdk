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
export interface TransactionStatusData { status: PaymentTransactionStatus; }
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

/** HTML payment navigation body; callbacks can instead return 303 with an empty body and Location. */
export type PaymentHtmlResponse = string;

/** Process liveness only; does not probe database, broker or payment providers. */
export interface PaymentHealth { version: string; }
export type PaymentHealthResponse = PaymentEnvelope<PaymentHealth>;
/** Session identity from trusted ingress headers; requires an authenticated non-nil user. */
export interface PaymentSession { user_id: string; roles: string[]; permissions: string[]; }
export type PaymentSessionResponse = PaymentEnvelope<PaymentSession>;
export interface PaymentSettings { safe_fallback_url: string; }
/** Absolute HTTP(S) URL without embedded credentials; backend trims and normalizes it. */
export interface UpdatePaymentSettingsInput { safe_fallback_url: string; }
export type PaymentSettingsResponse = PaymentEnvelope<PaymentSettings>;
export interface PaymentIntegrationField { name: string; field_type: string; required: boolean; description: string; }
export interface PaymentIntegrationEvent { event_name: string; payload_fields: PaymentIntegrationField[]; }
/** Rust skips absent optional metadata members; it never serializes those members as null. */
export interface PaymentDirectIntegration {
  transport: string;
  queue?: string;
  base_url?: string;
  broker_url_hint?: string;
  sample_profile_id?: string;
  events: PaymentIntegrationEvent[];
}
export interface PaymentIntegrationSnippet { event_name: string; method: string; language: string; cargo_dep: string; code: string; }
export interface PaymentIntegrationDocs { direct: PaymentDirectIntegration; sdk: PaymentIntegrationSnippet[]; }
export type PaymentIntegrationDocsResponse = PaymentEnvelope<PaymentIntegrationDocs>;
/** Concrete infera-flow-sdk wire model at backend dependency revision 291c81a. */
export interface PaymentFlowIntegration { queue: string; events: PaymentIntegrationEvent[]; }
export type PaymentFlowIntegrationResponse = PaymentEnvelope<PaymentFlowIntegration>;
/** Both callback HTTP verbs read only URL query values, in this precedence order. */
export interface PaymentCallbackQuery extends QueryParams { Authority?: string | null; transid?: string | null; paymentNumber?: string | null; }
/** AppError returns this error object; extractor rejections may instead return text. */
export interface PaymentErrorResponse { error: string; }
