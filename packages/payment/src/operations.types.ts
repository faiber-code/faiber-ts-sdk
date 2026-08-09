import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: SessionResponse. */
export interface SessionGetSelfGetResponseData extends JsonObject {
  "user_id": string;
  "roles": string[];
  "permissions": string[];
}
export interface SessionGetSelfGetResponse extends ApiEnvelope<SessionGetSelfGetResponseData> {
}

/** Backend query type: GatewayListQuery. */
export interface GatewayIndexGetQuery extends QueryParams {
  "status"?: string | null;
  "page[number]"?: number | null;
  "page[size]"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::GatewayResponse>. */
export interface GatewayIndexGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "options"?: BackendJson<"Json"> | null;
  "sandbox"?: boolean | null;
  "priority": number;
  "status"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface GatewayIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface GatewayIndexGetResponseData extends JsonObject {
  "data": GatewayIndexGetResponseItem[];
  "meta": GatewayIndexGetResponsePageMeta;
}
export interface GatewayIndexGetResponse extends ApiEnvelope<GatewayIndexGetResponseData> {
}

/** Backend request type: models::CreateGatewayRequest. */
export interface GatewayStorePostInput extends JsonObject {
  "name": string;
  "provider": string;
  "priority"?: number | null;
  "status"?: string | null;
  "options"?: BackendJson<"serde_json::Map<String, serde_json::Value>"> | null;
  "sandbox"?: boolean | null;
}
/** Backend response type: models::GatewayResponse. */
export interface GatewayStorePostResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "options"?: BackendJson<"Json"> | null;
  "sandbox"?: boolean | null;
  "priority": number;
  "status"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface GatewayStorePostResponse extends ApiEnvelope<GatewayStorePostResponseData> {
}

/** Backend response type: models::GatewayResponse. */
export interface GatewayDestroyDeleteResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "options"?: BackendJson<"Json"> | null;
  "sandbox"?: boolean | null;
  "priority": number;
  "status"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface GatewayDestroyDeleteResponse extends ApiEnvelope<GatewayDestroyDeleteResponseData> {
}

/** Backend response type: models::GatewayResponse. */
export interface GatewayShowGetResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "options"?: BackendJson<"Json"> | null;
  "sandbox"?: boolean | null;
  "priority": number;
  "status"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface GatewayShowGetResponse extends ApiEnvelope<GatewayShowGetResponseData> {
}

/** Backend request type: models::UpdateGatewayRequest. */
export interface GatewayUpdatePatchInput extends JsonObject {
  "name"?: string | null;
  "provider"?: string | null;
  "priority"?: number | null;
  "status"?: string | null;
  "options"?: BackendJson<"serde_json::Map<String, serde_json::Value>"> | null;
  "sandbox"?: boolean | null;
}
/** Backend response type: models::GatewayResponse. */
export interface GatewayUpdatePatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "options"?: BackendJson<"Json"> | null;
  "sandbox"?: boolean | null;
  "priority": number;
  "status"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface GatewayUpdatePatchResponse extends ApiEnvelope<GatewayUpdatePatchResponseData> {
}

/** Backend response type: models::GatewayOptionsResponse. */
export interface GatewayOptionsGetResponseData extends JsonObject {
  "providers": BackendJson<"LabelValue">[];
  "statuses": BackendJson<"LabelValue">[];
}
export interface GatewayOptionsGetResponse extends ApiEnvelope<GatewayOptionsGetResponseData> {
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

/** Backend request type: models::CreatePaymentRequest. */
export interface PaymentCreatePaymentPostInput extends JsonObject {
  "amount": number;
  "service_name": string;
  "description"?: string | null;
  "callback_url"?: string | null;
  "service_model": string;
  "service_id": string;
  "queue_name": string;
}
/** Backend response type: models::CreatePaymentResponse. */
export interface PaymentCreatePaymentPostResponseData extends JsonObject {
  "transaction": BackendJson<"uuid::Uuid">;
  "redirect_url": string;
}
export interface PaymentCreatePaymentPostResponse extends ApiEnvelope<PaymentCreatePaymentPostResponseData> {
}

/** Backend response type: models::PaymentSettingsResponse. */
export interface SettingsShowGetResponseData extends JsonObject {
  "safe_fallback_url": string;
}
export interface SettingsShowGetResponse extends ApiEnvelope<SettingsShowGetResponseData> {
}

/** Backend request type: models::UpdatePaymentSettingsRequest. */
export interface SettingsUpdatePatchInput extends JsonObject {
  "safe_fallback_url": string;
}
/** Backend response type: models::PaymentSettingsResponse. */
export interface SettingsUpdatePatchResponseData extends JsonObject {
  "safe_fallback_url": string;
}
export interface SettingsUpdatePatchResponse extends ApiEnvelope<SettingsUpdatePatchResponseData> {
}

/** Backend query type: models::TransactionListQuery. */
export interface TransactionIndexGetQuery extends QueryParams {
  "status"?: string | null;
  "service_name"?: string | null;
  "gateway_id"?: number | null;
  "tracking_code"?: string | null;
  "masked_card_number"?: string | null;
  "from_date"?: string | null;
  "to_date"?: string | null;
  "page[number]"?: number | null;
  "page[size]"?: number | null;
}
/** Backend response type: models::TransactionListData. */
export interface TransactionIndexGetResponseData extends JsonObject {
  "transactions": BackendJson<"crate::models::PagedResult<TransactionResponse>">;
  "summaries": BackendJson<"TransactionSummaries">;
  "service_names": string[];
  "gateways": BackendJson<"GatewaySummary">[];
}
export interface TransactionIndexGetResponse extends ApiEnvelope<TransactionIndexGetResponseData> {
}

/** Backend response type: models::TransactionStatusResponse. */
export interface RouterShowStatusGetResponseData extends JsonObject {
  "status": string;
}
export interface RouterShowStatusGetResponse extends ApiEnvelope<RouterShowStatusGetResponseData> {
}

/** Backend response type: models::VerifyPaymentResponse. */
export interface TransactionRejectPaymentPostResponseData extends JsonObject {
  "transaction": BackendJson<"TransactionResponse">;
  "verification": BackendJson<"PaymentVerificationResponse">;
}
export interface TransactionRejectPaymentPostResponse extends ApiEnvelope<TransactionRejectPaymentPostResponseData> {
}

/** Backend response type: Vec<models::PaymentVerificationResponse>. */
export interface TransactionVerificationLogsGetResponseItem extends JsonObject {
  "id": string;
  "transaction_uuid": string;
  "verifier_user_id": string;
  "successful": boolean;
  "previous_status"?: string | null;
  "resulting_status"?: string | null;
  "tracking_code"?: string | null;
  "message"?: string | null;
  "created_at": string;
}
export interface TransactionVerificationLogsGetResponse extends ApiEnvelope<TransactionVerificationLogsGetResponseItem[]> {
}

/** Backend response type: models::VerifyPaymentResponse. */
export interface TransactionVerifyPaymentPostResponseData extends JsonObject {
  "transaction": BackendJson<"TransactionResponse">;
  "verification": BackendJson<"PaymentVerificationResponse">;
}
export interface TransactionVerifyPaymentPostResponse extends ApiEnvelope<TransactionVerifyPaymentPostResponseData> {
}

/** Backend query type: models::DailyIncomeQuery. */
export interface TransactionDailyIncomeGetQuery extends QueryParams {
  "days"?: number | null;
}
/** Backend response type: Vec<models::DailyIncomePoint>. */
export interface TransactionDailyIncomeGetResponseItem extends JsonObject {
  "date": string;
  "amount": number;
}
export interface TransactionDailyIncomeGetResponse extends ApiEnvelope<TransactionDailyIncomeGetResponseItem[]> {
}

/** Backend response type: api. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface PaymentWebRedirectGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: CallbackQuery. */
export interface PaymentWebCallbackGetQuery extends QueryParams {
  "Authority"?: string | null;
  "transid"?: string | null;
  "paymentNumber"?: string | null;
}
/** Backend response type: raw-response. */
export interface PaymentWebCallbackGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: CallbackQuery. */
export interface PaymentWebCallbackPostQuery extends QueryParams {
  "Authority"?: string | null;
  "transid"?: string | null;
  "paymentNumber"?: string | null;
}
/** Backend response type: raw-response. */
export interface PaymentWebCallbackPostResponse extends ApiEnvelope<JsonValue> {
}

