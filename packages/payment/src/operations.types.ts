import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: response without a declared JSON model. */
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
  "status"?: string;
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::GatewayResponse>. */
export interface GatewayIndexGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "options"?: JsonValue;
  "priority": number;
  "status"?: string;
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
  "priority"?: number;
  "status"?: string;
  "options"?: JsonValue;
}
/** Backend response type: models::GatewayResponse. */
export interface GatewayStorePostResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "options"?: JsonValue;
  "priority": number;
  "status"?: string;
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
  "options"?: JsonValue;
  "priority": number;
  "status"?: string;
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
  "options"?: JsonValue;
  "priority": number;
  "status"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface GatewayShowGetResponse extends ApiEnvelope<GatewayShowGetResponseData> {
}

/** Backend request type: models::UpdateGatewayRequest. */
export interface GatewayUpdatePatchInput extends JsonObject {
  "name"?: string;
  "provider"?: string;
  "priority"?: number;
  "status"?: string;
  "options"?: JsonValue;
}
/** Backend response type: models::GatewayResponse. */
export interface GatewayUpdatePatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "options"?: JsonValue;
  "priority": number;
  "status"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface GatewayUpdatePatchResponse extends ApiEnvelope<GatewayUpdatePatchResponseData> {
}

/** Backend response type: models::GatewayOptionsResponse. */
export interface GatewayOptionsGetResponseData extends JsonObject {
  "providers": JsonValue[];
  "statuses": JsonValue[];
}
export interface GatewayOptionsGetResponse extends ApiEnvelope<GatewayOptionsGetResponseData> {
}

/** Backend response type: crate::integration::models::IntegrationDocsResponse. */
export interface IntegrationIntegrationDocsShowGetResponseData extends JsonObject {
  "direct": JsonValue;
  "sdk": JsonValue[];
}
export interface IntegrationIntegrationDocsShowGetResponse extends ApiEnvelope<IntegrationIntegrationDocsShowGetResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::CreatePaymentRequest. */
export interface PaymentCreatePaymentPostInput extends JsonObject {
  "amount": number;
  "service_name": string;
  "description"?: string;
  "callback_url"?: string;
  "service_model": string;
  "service_id": string;
  "queue_name": string;
}
/** Backend response type: models::CreatePaymentResponse. */
export interface PaymentCreatePaymentPostResponseData extends JsonObject {
  "transaction": JsonValue;
  "redirect_url": string;
}
export interface PaymentCreatePaymentPostResponse extends ApiEnvelope<PaymentCreatePaymentPostResponseData> {
}

/** Backend query type: models::TransactionListQuery. */
export interface TransactionIndexGetQuery extends QueryParams {
  "status"?: string;
  "service_name"?: string;
  "gateway_id"?: number;
  "tracking_code"?: string;
  "masked_card_number"?: string;
  "from_date"?: string;
  "to_date"?: string;
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: models::TransactionListData. */
export interface TransactionIndexGetResponseData extends JsonObject {
  "transactions": JsonValue;
  "summaries": JsonValue;
  "service_names": string[];
  "gateways": JsonValue[];
}
export interface TransactionIndexGetResponse extends ApiEnvelope<TransactionIndexGetResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterShowStatusGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::DailyIncomeQuery. */
export interface TransactionDailyIncomeGetQuery extends QueryParams {
  "days"?: number;
}
/** Backend response type: Vec<models::DailyIncomePoint>. */
export interface TransactionDailyIncomeGetResponseItem extends JsonObject {
  "date": string;
  "amount": number;
}
export interface TransactionDailyIncomeGetResponse extends ApiEnvelope<TransactionDailyIncomeGetResponseItem[]> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface PaymentWebRedirectGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: CallbackQuery. */
export interface PaymentWebCallbackGetQuery extends QueryParams {
  "Authority"?: string;
  "transid"?: string;
  "paymentNumber"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface PaymentWebCallbackGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: CallbackQuery. */
export interface PaymentWebCallbackPostQuery extends QueryParams {
  "Authority"?: string;
  "transid"?: string;
  "paymentNumber"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface PaymentWebCallbackPostResponse extends ApiEnvelope<JsonValue> {
}

