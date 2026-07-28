import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: handler-defined response. */
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
  "options"?: JsonValue | null;
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
  "options"?: JsonValue | null;
}
/** Backend response type: models::GatewayResponse. */
export interface GatewayStorePostResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "options"?: JsonValue | null;
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
  "options"?: JsonValue | null;
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
  "options"?: JsonValue | null;
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
  "options"?: JsonValue | null;
}
/** Backend response type: models::GatewayResponse. */
export interface GatewayUpdatePatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "options"?: JsonValue | null;
  "priority": number;
  "status"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface GatewayUpdatePatchResponse extends ApiEnvelope<GatewayUpdatePatchResponseData> {
}

/** Backend response type: models::GatewayOptionsResponse. */
export interface GatewayOptionsGetResponseDataProviders extends JsonObject {
  "value": string;
  "label": string;
}
export interface GatewayOptionsGetResponseDataStatuses extends JsonObject {
  "value": string;
  "label": string;
}
export interface GatewayOptionsGetResponseData extends JsonObject {
  "providers": GatewayOptionsGetResponseDataProviders[];
  "statuses": GatewayOptionsGetResponseDataStatuses[];
}
export interface GatewayOptionsGetResponse extends ApiEnvelope<GatewayOptionsGetResponseData> {
}

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
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
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
  "transaction": JsonValue;
  "redirect_url": string;
}
export interface PaymentCreatePaymentPostResponse extends ApiEnvelope<PaymentCreatePaymentPostResponseData> {
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
export interface TransactionIndexGetResponseDataSummariesStatus extends JsonObject {
  "accepted": number;
  "pending": number;
  "rejected": number;
}
export interface TransactionIndexGetResponseDataSummariesServices extends JsonObject {
  "name": string;
  "amount": number;
}
export interface TransactionIndexGetResponseDataSummaries extends JsonObject {
  "status": TransactionIndexGetResponseDataSummariesStatus;
  "services": TransactionIndexGetResponseDataSummariesServices[];
}
export interface TransactionIndexGetResponseDataGateways extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
}
export interface TransactionIndexGetResponseData extends JsonObject {
  "transactions": JsonValue;
  "summaries": TransactionIndexGetResponseDataSummaries;
  "service_names": string[];
  "gateways": TransactionIndexGetResponseDataGateways[];
}
export interface TransactionIndexGetResponse extends ApiEnvelope<TransactionIndexGetResponseData> {
}

/** Backend response type: handler-defined response. */
export interface RouterShowStatusGetResponse extends ApiEnvelope<JsonValue> {
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
export interface TransactionVerifyPaymentPostResponseDataTransactionGateway extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
}
export interface TransactionVerifyPaymentPostResponseDataTransaction extends JsonObject {
  "uuid": string;
  "amount": number;
  "gateway_id": number;
  "gateway"?: TransactionVerifyPaymentPostResponseDataTransactionGateway | null;
  "description"?: string | null;
  "status"?: string | null;
  "service_name": string;
  "service_model_type"?: string | null;
  "service_model_id"?: string | null;
  "callback_url"?: string | null;
  "authority"?: string | null;
  "user_ip"?: string | null;
  "queue_name"?: string | null;
  "tracking_code"?: string | null;
  "masked_card_number"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface TransactionVerifyPaymentPostResponseDataVerification extends JsonObject {
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
export interface TransactionVerifyPaymentPostResponseData extends JsonObject {
  "transaction": TransactionVerifyPaymentPostResponseDataTransaction;
  "verification": TransactionVerifyPaymentPostResponseDataVerification;
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

/** Backend response type: handler-defined response. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface PaymentWebRedirectGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: CallbackQuery. */
export interface PaymentWebCallbackGetQuery extends QueryParams {
  "Authority"?: string | null;
  "transid"?: string | null;
  "paymentNumber"?: string | null;
}
/** Backend response type: handler-defined response. */
export interface PaymentWebCallbackGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: CallbackQuery. */
export interface PaymentWebCallbackPostQuery extends QueryParams {
  "Authority"?: string | null;
  "transid"?: string | null;
  "paymentNumber"?: string | null;
}
/** Backend response type: handler-defined response. */
export interface PaymentWebCallbackPostResponse extends ApiEnvelope<JsonValue> {
}

