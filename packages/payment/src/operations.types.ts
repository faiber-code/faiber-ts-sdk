import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: HealthResponse. */
export type RouterRootStatusGetResponse = import("@faiber/sdk-core").ServiceHealthResponse;

/** Backend response type: utoipa::openapi::OpenApi. */
export type RouterOpenapiJsonGetResponse = import("@faiber/sdk-core").ServiceOpenApiDocument;

/** Backend response type: SessionResponse. */
export interface SessionGetSelfGetResponseData extends JsonObject {
  "user_id": string;
  "roles": string[];
  "permissions": string[];
}
export interface SessionGetSelfGetResponse extends ApiEnvelope<SessionGetSelfGetResponseData> {
}

/** Backend query type: GatewayListQuery. */
export type GatewayIndexGetQuery = import("./types.js").GatewayListQuery;
/** Backend response type: crate::models::PagedResult<models::GatewayResponse>. */
export type GatewayIndexGetResponse = import("./types.js").GatewayListResponse;

/** Backend request type: models::CreateGatewayRequest. */
export type GatewayStorePostInput = import("./types.js").CreateGatewayInput;
/** Backend response type: models::GatewayResponse. */
export type GatewayStorePostResponse = import("./types.js").GatewayResponse;

/** Backend response type: models::GatewayResponse. */
export type GatewayDestroyDeleteResponse = import("./types.js").GatewayResponse;

/** Backend response type: models::GatewayResponse. */
export type GatewayShowGetResponse = import("./types.js").GatewayResponse;

/** Backend request type: models::UpdateGatewayRequest. */
export type GatewayUpdatePatchInput = import("./types.js").UpdateGatewayInput;
/** Backend response type: models::GatewayResponse. */
export type GatewayUpdatePatchResponse = import("./types.js").GatewayResponse;

/** Backend response type: models::GatewayOptionsResponse. */
export type GatewayOptionsGetResponse = import("./types.js").GatewayOptionsResponse;

/** Backend response type: serde_json::Value. */
export type GatewaySetupCheckPostResponse = import("./contracts.types.js").PaymentSetupResponse;

/** Backend response type: crate::integration::models::IntegrationDocsResponse. */
export interface IntegrationIntegrationDocsShowGetResponseDataDirectEventsPayloadFields extends JsonObject {
  "name": string;
  "field_type": string;
  "required": boolean;
  "description": string;
}
export interface IntegrationIntegrationDocsShowGetResponseDataDirectEvents extends JsonObject {
  "event_name": string;
  "payload_fields": IntegrationIntegrationDocsShowGetResponseDataDirectEventsPayloadFields[];
}
export interface IntegrationIntegrationDocsShowGetResponseDataDirect extends JsonObject {
  "transport": string;
  "queue"?: string | null;
  "base_url"?: string | null;
  "broker_url_hint"?: string | null;
  "sample_profile_id"?: string | null;
  "events": IntegrationIntegrationDocsShowGetResponseDataDirectEvents[];
}
export interface IntegrationIntegrationDocsShowGetResponseDataSdk extends JsonObject {
  "event_name": string;
  "method": string;
  "language": string;
  "cargo_dep": string;
  "code": string;
}
export interface IntegrationIntegrationDocsShowGetResponseData extends JsonObject {
  "direct": IntegrationIntegrationDocsShowGetResponseDataDirect;
  "sdk": IntegrationIntegrationDocsShowGetResponseDataSdk[];
}
export interface IntegrationIntegrationDocsShowGetResponse extends ApiEnvelope<IntegrationIntegrationDocsShowGetResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<BackendJson<"infera_flow_sdk::FlowIntegrationResponse">> {
}

/** Backend response type: Value. */
export type ProductPlansAvailabilityGetResponse = import("./contracts.types.js").ProductPaymentAvailabilityResponse;

/** Backend request type: crate::payment::models::CreatePaymentRequest. */
export interface ProductPlansCreatePostInput extends JsonObject {
  "amount": number;
  "service_name": string;
  "description"?: string | null;
  "callback_url"?: string | null;
  "service_model": string;
  "service_id": string;
  "queue_name": string;
  "idempotency_key"?: string | null;
}
/** Backend response type: crate::payment::models::CreatePaymentResponse. */
export interface ProductPlansCreatePostResponseData extends JsonObject {
  "transaction": string;
  "redirect_url": string;
}
export interface ProductPlansCreatePostResponse extends ApiEnvelope<ProductPlansCreatePostResponseData> {
}

/** Backend response type: Value. */
export type ProductPlansReceiptGetResponse = import("./contracts.types.js").ProductPaymentReceiptResponse;

/** Backend response type: Value. */
export type AssetCheckoutReceiptGetResponse = import("./contracts.types.js").VerifiedAssetPurchaseResponse;

/** Backend request type: crate::payment::models::CreatePaymentRequest. */
export interface FitnessCreatePostInput extends JsonObject {
  "amount": number;
  "service_name": string;
  "description"?: string | null;
  "callback_url"?: string | null;
  "service_model": string;
  "service_id": string;
  "queue_name": string;
  "idempotency_key"?: string | null;
}
/** Backend response type: crate::payment::models::CreatePaymentResponse. */
export interface FitnessCreatePostResponseData extends JsonObject {
  "transaction": string;
  "redirect_url": string;
}
export interface FitnessCreatePostResponse extends ApiEnvelope<FitnessCreatePostResponseData> {
}

/** Backend response type: Value. */
export type FitnessReceiptGetResponse = import("./contracts.types.js").ProductPaymentReceiptResponse;

/** Backend response type: crate::payment::models::CreatePaymentResponse. */
export interface FitnessRetryPostResponseData extends JsonObject {
  "transaction": string;
  "redirect_url": string;
}
export interface FitnessRetryPostResponse extends ApiEnvelope<FitnessRetryPostResponseData> {
}

/** Backend request type: crate::payment::models::CreatePaymentRequest. */
export interface ShopCheckoutCreatePostInput extends JsonObject {
  "amount": number;
  "service_name": string;
  "description"?: string | null;
  "callback_url"?: string | null;
  "service_model": string;
  "service_id": string;
  "queue_name": string;
  "idempotency_key"?: string | null;
}
/** Backend response type: crate::payment::models::CreatePaymentResponse. */
export interface ShopCheckoutCreatePostResponseData extends JsonObject {
  "transaction": string;
  "redirect_url": string;
}
export interface ShopCheckoutCreatePostResponse extends ApiEnvelope<ShopCheckoutCreatePostResponseData> {
}

/** Backend response type: Value. */
export type ShopCheckoutReadinessGetResponse = import("./contracts.types.js").ShopPaymentReadiness;

/** Backend response type: Value. */
export type ShopCheckoutReceiptGetResponse = import("./contracts.types.js").ShopPaymentReceiptResponse;

/** Backend request type: models::CreatePaymentRequest. */
export type PaymentCreatePaymentPostInput = import("./types.js").CreatePaymentInput;
/** Backend response type: models::CreatePaymentResponse. */
export type PaymentCreatePaymentPostResponse = import("./types.js").CreatePaymentResponse;

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
export type TransactionIndexGetQuery = import("./types.js").TransactionListQuery;
/** Backend response type: models::TransactionListData. */
export type TransactionIndexGetResponse = import("./types.js").TransactionListResponse;

/** Backend response type: models::TransactionStatusResponse. */
export type RouterShowStatusGetResponse = import("./types.js").TransactionResponse;

/** Backend response type: models::VerifyPaymentResponse. */
export type TransactionRejectPaymentPostResponse = import("./types.js").VerifyPaymentResponse;

/** Backend response type: Vec<models::PaymentVerificationResponse>. */
export type TransactionVerificationLogsGetResponse = import("./types.js").PaymentVerificationLogsResponse;

/** Backend response type: models::VerifyPaymentResponse. */
export type TransactionVerifyPaymentPostResponse = import("./types.js").VerifyPaymentResponse;

/** Backend query type: models::DailyIncomeQuery. */
export type TransactionDailyIncomeGetQuery = import("./types.js").DailyIncomeQuery;
/** Backend response type: Vec<models::DailyIncomePoint>. */
export type TransactionDailyIncomeGetResponse = import("./types.js").DailyIncomeResponse;

/** Backend response type: HealthResponse. */
export type RouterStatusRouteGetResponse = import("@faiber/sdk-core").ServiceHealthResponse;

/** Backend response type: api. */
export type PaymentWebRedirectGetResponse = import("./types.js").PaymentHtmlResponse;

/** Backend query type: CallbackQuery. */
export interface PaymentWebCallbackGetQuery extends QueryParams {
  "Authority"?: string | null;
  "transid"?: string | null;
  "paymentNumber"?: string | null;
}
/** Backend response type: raw-response. */
export type PaymentWebCallbackGetResponse = import("./types.js").PaymentHtmlResponse;

/** Backend query type: CallbackQuery. */
export interface PaymentWebCallbackPostQuery extends QueryParams {
  "Authority"?: string | null;
  "transid"?: string | null;
  "paymentNumber"?: string | null;
}
/** Backend response type: raw-response. */
export type PaymentWebCallbackPostResponse = import("./types.js").PaymentHtmlResponse;

/** Backend response type: HealthResponse. */
export type RouterUpGetResponse = import("@faiber/sdk-core").ServiceHealthResponse;
