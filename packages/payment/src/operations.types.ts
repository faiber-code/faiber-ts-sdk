import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: HealthResponse. */
export type RouterRootStatusGetResponse = import("./types.js").PaymentHealthResponse;

/** Backend response type: utoipa::openapi::OpenApi. */
export type RouterOpenapiJsonGetResponse = import("@faiber/sdk-core").ServiceOpenApiDocument;

/** Backend response type: SessionResponse. */
export type SessionGetSelfGetResponse = import("./types.js").PaymentSessionResponse;

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
export type IntegrationIntegrationDocsShowGetResponse = import("./types.js").PaymentIntegrationDocsResponse;

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export type IntegrationFlowIntegrationShowGetResponse = import("./types.js").PaymentFlowIntegrationResponse;

/** Backend response type: Value. */
export type ProductPlansAvailabilityGetResponse = import("./contracts.types.js").ProductPaymentAvailabilityResponse;

/** Backend request type: crate::payment::models::CreatePaymentRequest. */
export type ProductPlansCreatePostInput = import("./types.js").CreatePaymentInput;
/** Backend response type: crate::payment::models::CreatePaymentResponse. */
export type ProductPlansCreatePostResponse = import("./types.js").CreatePaymentResponse;

/** Backend response type: Value. */
export type ProductPlansReceiptGetResponse = import("./contracts.types.js").ProductPaymentReceiptResponse;

/** Backend response type: Value. */
export type AssetCheckoutReceiptGetResponse = import("./contracts.types.js").VerifiedAssetPurchaseResponse;

/** Backend request type: crate::payment::models::CreatePaymentRequest. */
export type FitnessCreatePostInput = import("./types.js").CreatePaymentInput;
/** Backend response type: crate::payment::models::CreatePaymentResponse. */
export type FitnessCreatePostResponse = import("./types.js").CreatePaymentResponse;

/** Backend response type: Value. */
export type FitnessReceiptGetResponse = import("./contracts.types.js").ProductPaymentReceiptResponse;

/** Backend response type: crate::payment::models::CreatePaymentResponse. */
export type FitnessRetryPostResponse = import("./types.js").CreatePaymentResponse;

/** Backend request type: crate::payment::models::CreatePaymentRequest. */
export type ShopCheckoutCreatePostInput = import("./types.js").CreatePaymentInput;
/** Backend response type: crate::payment::models::CreatePaymentResponse. */
export type ShopCheckoutCreatePostResponse = import("./types.js").CreatePaymentResponse;

/** Backend response type: Value. */
export type ShopCheckoutReadinessGetResponse = import("./contracts.types.js").ShopPaymentReadiness;

/** Backend response type: Value. */
export type ShopCheckoutReceiptGetResponse = import("./contracts.types.js").ShopPaymentReceiptResponse;

/** Backend request type: models::CreatePaymentRequest. */
export type PaymentCreatePaymentPostInput = import("./types.js").CreatePaymentInput;
/** Backend response type: models::CreatePaymentResponse. */
export type PaymentCreatePaymentPostResponse = import("./types.js").CreatePaymentResponse;

/** Backend response type: models::PaymentSettingsResponse. */
export type SettingsShowGetResponse = import("./types.js").PaymentSettingsResponse;

/** Backend request type: models::UpdatePaymentSettingsRequest. */
export type SettingsUpdatePatchInput = import("./types.js").UpdatePaymentSettingsInput;
/** Backend response type: models::PaymentSettingsResponse. */
export type SettingsUpdatePatchResponse = import("./types.js").PaymentSettingsResponse;

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
export type RouterStatusRouteGetResponse = import("./types.js").PaymentHealthResponse;

/** Backend response type: api. */
export type PaymentWebRedirectGetResponse = import("./types.js").PaymentHtmlResponse;

/** Backend query type: CallbackQuery. */
export type PaymentWebCallbackGetQuery = import("./types.js").PaymentCallbackQuery;
/** Backend response type: raw-response. */
export type PaymentWebCallbackGetResponse = import("./types.js").PaymentHtmlResponse;

/** Backend query type: CallbackQuery. */
export type PaymentWebCallbackPostQuery = import("./types.js").PaymentCallbackQuery;
/** Backend response type: raw-response. */
export type PaymentWebCallbackPostResponse = import("./types.js").PaymentHtmlResponse;

/** Backend response type: HealthResponse. */
export type RouterUpGetResponse = import("./types.js").PaymentHealthResponse;
