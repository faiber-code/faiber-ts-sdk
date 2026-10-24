import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class PaymentOperations extends ServiceApi {
  /**
   * Read process version with required status/message/data at HTTP 200. Does not probe database, broker or provider readiness.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; configured credentials still use shared FaiberClient. Production ingress authority is separately verified.
   */
  routerRootStatusGet(options?: RequestOptions) {
    return this.client.request<T.RouterRootStatusGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Read raw Utoipa OpenAPI JSON at HTTP 200, without envelope. Annotations omit mounted routes and do not establish complete endpoint coverage.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; configured credentials still use shared FaiberClient. Production ingress authority is separately verified.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Read ingress-derived user UUID, roles and permissions at HTTP 200. Requires a non-nil authenticated user; missing identity returns 401.
   * Calls `GET /api/v1/auth/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; authenticated session; no additional permission (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  sessionGetSelfGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /**
   * List gateways ordered by ascending priority. Exact active/inactive status filter; invalid status is ignored. Bracket pagination defaults 1/20, page floors at 1 and size clamps 1..100. Returns a nested page at HTTP 200.
   * Calls `GET /api/v1/gateways` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:gateway:read (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  gatewayIndexGet(params?: T.GatewayIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.GatewayIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/gateways`, params });
  }
  /**
   * Create gateway at HTTP 200. provider must be zarinpal/parsian/aqayepardakht/mock (422 otherwise); priority is i16, default 0. Absent/null/invalid status becomes inactive. Options are encrypted; explicit sandbox is stored in options. Non-Zarinpal sandbox response is null.
   * Calls `POST /api/v1/gateways` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:gateway:create (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  gatewayStorePost(data: T.GatewayStorePostInput, options?: RequestOptions<T.GatewayStorePostInput>) {
    return this.client.request<T.GatewayStorePostResponse, T.GatewayStorePostInput>({ ...options, method: "POST", url: `/api/v1/gateways`, data: data });
  }
  /**
   * Hard-delete integer gateway ID and return the removed gateway record at HTTP 200; missing ID returns 404. This is a record envelope, not a boolean or empty response.
   * Calls `DELETE /api/v1/gateways/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:gateway:delete (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  gatewayDestroyDelete(id: number, options?: RequestOptions) {
    return this.client.request<T.GatewayDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/gateways/${encodeURIComponent(id)}` });
  }
  /**
   * Read integer gateway ID; missing ID returns 404. Response options may contain encrypted values; do not copy them into credential editing fields.
   * Calls `GET /api/v1/gateways/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:gateway:read (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  gatewayShowGet(id: number, options?: RequestOptions) {
    return this.client.request<T.GatewayShowGetResponse>({ ...options, method: "GET", url: `/api/v1/gateways/${encodeURIComponent(id)}` });
  }
  /**
   * Update integer gateway ID at HTTP 200; missing ID returns 404, invalid provider returns 422. Absent/null fields preserve existing values, invalid status is ignored; options replace supplied map and sandbox merges into it.
   * Calls `PATCH /api/v1/gateways/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:gateway:update (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  gatewayUpdatePatch(id: number, data: T.GatewayUpdatePatchInput, options?: RequestOptions<T.GatewayUpdatePatchInput>) {
    return this.client.request<T.GatewayUpdatePatchResponse, T.GatewayUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/gateways/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read provider/status label-value arrays at HTTP 200; no pagination.
   * Calls `GET /api/v1/gateways/options` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:gateway:read (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  gatewayOptionsGet(options?: RequestOptions) {
    return this.client.request<T.GatewayOptionsGetResponse>({ ...options, method: "GET", url: `/api/v1/gateways/options` });
  }
  /**
   * Inspect active production gateway credentials at HTTP 200 without creating a purchase. May call Zarinpal credential verification; configured differs from providerVerified and non-Zarinpal providers require manual verification. Database/provider-client setup failure returns 500.
   * Calls `POST /api/v1/gateways/setup-check` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:gateway:read (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  gatewaySetupCheckPost(options?: RequestOptions) {
    return this.client.request<T.GatewaySetupCheckPostResponse>({ ...options, method: "POST", url: `/api/v1/gateways/setup-check` });
  }
  /**
   * Read HTTP integration queue/base URL hints, event fields and SDK code snippets. Absent optional direct metadata members are omitted (never null). HTTP 200 does not verify broker/provider connectivity.
   * Calls `GET /api/v1/integration/docs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP permission admin:integration:read; no native auth/permission gate in this handler. Production ingress enforcement must be verified.
   */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /**
   * Read concrete flow integration queue and event payload field metadata at HTTP 200; no broker readiness probe.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; configured credentials still use shared FaiberClient. Production ingress authority is separately verified.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Read available/sandbox booleans for configured 2Done callback routing at HTTP 200. Availability is routing availability, not successful settlement or live-provider proof.
   * Calls `GET /api/v1/internal/2done/availability` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server Bearer token matching PRODUCT_PAYMENT_SERVICE_TOKEN (minimum configured length 32); 401 mismatch, 503 missing configuration.
   */
  productPlansAvailabilityGet(options?: RequestOptions) {
    return this.client.request<T.ProductPlansAvailabilityGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/2done/availability` });
  }
  /**
   * Create trusted 2Done subscription link at HTTP 200. service_name=2done, service_model=2done_subscription, UUID service_id, idempotency_key=2done:{order}, configured origin callback /app/plans?order={order}; amount 10..20000000 divisible by 10. Invalid order returns 422; mismatched contract returns 403; idempotency conflict returns 409.
   * Calls `POST /api/v1/internal/2done/payment` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server Bearer PRODUCT_PAYMENT_SERVICE_TOKEN; 401 mismatch, 503 missing configuration.
   */
  productPlansCreatePost(data: T.ProductPlansCreatePostInput, options?: RequestOptions<T.ProductPlansCreatePostInput>) {
    return this.client.request<T.ProductPlansCreatePostResponse, T.ProductPlansCreatePostInput>({ ...options, method: "POST", url: `/api/v1/internal/2done/payment`, data: data });
  }
  /**
   * Read transaction receipt by UUID at HTTP 200; requires stored 2done/2done_subscription ownership. Missing transaction returns 404, different product returns 403. Retains nullable database fields; receipt alone does not verify current provider settlement.
   * Calls `GET /api/v1/internal/2done/transactions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server Bearer PRODUCT_PAYMENT_SERVICE_TOKEN; 401 mismatch, 503 missing configuration.
   */
  productPlansReceiptGet(id: string, options?: RequestOptions) {
    return this.client.request<T.ProductPlansReceiptGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/2done/transactions/${encodeURIComponent(id)}` });
  }
  /**
   * Read raw IRR purchase receipt by purchase UUID (not transaction UUID), using asset:purchase:{id}. Requires asset and topup/subscription/plan/points_pack; wrong ownership/model or nonlive provider returns 409, missing receipt 404, unavailable verification 503. May call provider.verify; status is pending/accepted/rejected and providerVerified is false while pending.
   * Calls `GET /api/v1/internal/asset/purchases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server x-asset-payment-token matching ASSET_PAYMENT_TOKEN; 401 mismatch, 503 missing configuration.
   */
  assetCheckoutReceiptGet(id: string, options?: RequestOptions) {
    return this.client.request<T.AssetCheckoutReceiptGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/asset/purchases/${encodeURIComponent(id)}` });
  }
  /**
   * Create trusted fitness link at HTTP 200 with positive amount, UUID service_id, configured project service_name, service_model=fitness_order and idempotency_key=fitness:{order}. Advisory lock serializes order creation; gateway must meet live or project-scoped sandbox opt-in policy. Invalid order/amount returns 422; contract mismatch 403; unsuitable provider 503.
   * Calls `POST /api/v1/internal/fitness/payment` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server Bearer FITNESS_PROFILE_SERVICE_TOKEN; 401 mismatch, 503 missing configuration.
   */
  fitnessCreatePost(data: T.FitnessCreatePostInput, options?: RequestOptions<T.FitnessCreatePostInput>) {
    return this.client.request<T.FitnessCreatePostResponse, T.FitnessCreatePostInput>({ ...options, method: "POST", url: `/api/v1/internal/fitness/payment`, data: data });
  }
  /**
   * Read configured fitness project receipt by transaction UUID at HTTP 200. Missing transaction returns 404, wrong project/model 403; gateway must satisfy live or explicit sandbox policy (503 otherwise). Nullable transaction fields remain present.
   * Calls `GET /api/v1/internal/fitness/transactions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server Bearer FITNESS_PROFILE_SERVICE_TOKEN; 401 mismatch, 503 missing configuration.
   */
  fitnessReceiptGet(id: string, options?: RequestOptions) {
    return this.client.request<T.FitnessReceiptGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/fitness/transactions/${encodeURIComponent(id)}` });
  }
  /**
   * Retry a stored rejected fitness transaction UUID using its persisted amount and metadata; idempotency_key=fitness-retry:{id}. Other state/project/model returns 409; missing transaction 404. Returns link at HTTP 200; no body is read.
   * Calls `POST /api/v1/internal/fitness/transactions/{id}/retry` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server Bearer FITNESS_PROFILE_SERVICE_TOKEN; 401 mismatch, 503 missing configuration.
   */
  fitnessRetryPost(id: string, options?: RequestOptions) {
    return this.client.request<T.FitnessRetryPostResponse>({ ...options, method: "POST", url: `/api/v1/internal/fitness/transactions/${encodeURIComponent(id)}/retry` });
  }
  /**
   * Create trusted storefront link at HTTP 200: non-nil UUID service_id, configured site service_name, service_model=storefront_order, queue_name=modules_queue, idempotency_key=shop:{id}, callback exactly SHOP_RETURN_URL?checkout={id} with HTTPS return URL. Invalid UUID/amount returns 422, mismatch 403; requires live Zarinpal proof cached within 20 minutes (503 otherwise).
   * Calls `POST /api/v1/internal/shop/payment` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server Bearer SHOP_PAYMENT_TOKEN and configured SHOP_SITE_SLUG; 401 mismatch, 503 missing configuration.
   */
  shopCheckoutCreatePost(data: T.ShopCheckoutCreatePostInput, options?: RequestOptions<T.ShopCheckoutCreatePostInput>) {
    return this.client.request<T.ShopCheckoutCreatePostResponse, T.ShopCheckoutCreatePostInput>({ ...options, method: "POST", url: `/api/v1/internal/shop/payment`, data: data });
  }
  /**
   * Read raw configured boolean at HTTP 200. May call credential verification and cache live Zarinpal proof in database; this GET is not a pure liveness check. Missing setup or gateway can fail with 503/404.
   * Calls `GET /api/v1/internal/shop/readiness` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server Bearer SHOP_PAYMENT_TOKEN and configured SHOP_SITE_SLUG; 401 mismatch, 503 missing configuration.
   */
  shopCheckoutReadinessGet(options?: RequestOptions) {
    return this.client.request<T.ShopCheckoutReadinessGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/shop/readiness` });
  }
  /**
   * Read site-owned storefront transaction UUID receipt at HTTP 200. Missing/wrong-site row returns 404; proof/gateway mismatch returns 409. May perform pending provider verification and persist settlement. providerVerified:true describes the proof path and is also returned for pending receipts; inspect status.
   * Calls `GET /api/v1/internal/shop/transactions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted server Bearer SHOP_PAYMENT_TOKEN and configured SHOP_SITE_SLUG; 401 mismatch, 503 missing configuration.
   */
  shopCheckoutReceiptGet(id: string, options?: RequestOptions) {
    return this.client.request<T.ShopCheckoutReceiptGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/shop/transactions/${encodeURIComponent(id)}` });
  }
  /**
   * Create generic positive integer payment link at HTTP 200. Body idempotency_key reuses matching amount/service/model/id and returns 409 on mismatch. Dedicated 2Done/fitness/storefront reservations are rejected with 403. Asset protected requests require x-asset-payment-token when configured. Missing active gateway returns 404, invalid amount 422, provider pay failure 502. Backend declares no currency field; callers must follow their service currency contract.
   * Calls `POST /api/v1/payment` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; configured credentials still use shared FaiberClient. Production ingress authority is separately verified; conditional Asset trusted header enforcement.
   */
  paymentCreatePaymentPost(data: T.PaymentCreatePaymentPostInput, options?: RequestOptions<T.PaymentCreatePaymentPostInput>) {
    return this.client.request<T.PaymentCreatePaymentPostResponse, T.PaymentCreatePaymentPostInput>({ ...options, method: "POST", url: `/api/v1/payment`, data: data });
  }
  /**
   * Read configured safe fallback URL or https://faiber.ir default at HTTP 200.
   * Calls `GET /api/v1/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:gateway:read (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  settingsShowGet(options?: RequestOptions) {
    return this.client.request<T.SettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/settings` });
  }
  /**
   * Save safe fallback URL at HTTP 200. Trim and normalize absolute HTTP/HTTPS URL, require host and reject embedded credentials; invalid URL returns 422.
   * Calls `PATCH /api/v1/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:gateway:update (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  settingsUpdatePatch(data: T.SettingsUpdatePatchInput, options?: RequestOptions<T.SettingsUpdatePatchInput>) {
    return this.client.request<T.SettingsUpdatePatchResponse, T.SettingsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/settings`, data: data });
  }
  /**
   * List newest-first transactions with gateway summaries, nested page, filtered monetary status/service-model totals, all service names and gateway options. Exact status/service/gateway filters; tracking/card substring filters; UTC YYYY-MM-DD dates inclusive (invalid dates/status ignored). Bracket page defaults 1/20 and size clamps 1..100. Summary fields are sums, not counts.
   * Calls `GET /api/v1/transactions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:transaction:read (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  transactionIndexGet(params?: T.TransactionIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TransactionIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions`, params });
  }
  /**
   * Read status only by transaction UUID at HTTP 200 (null stored status becomes pending); no transaction detail record is returned. Missing transaction returns 404.
   * Calls `GET /api/v1/transactions/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; configured credentials still use shared FaiberClient. Production ingress authority is separately verified.
   */
  routerShowStatusGet(uuid: string, options?: RequestOptions) {
    return this.client.request<T.RouterShowStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions/${encodeURIComponent(uuid)}` });
  }
  /**
   * Reject only pending UUID transaction and record authenticated verifier and unsuccessful verification; emit result. Returns both records at HTTP 200; nonpending state returns 409, missing row 404. No request body.
   * Calls `POST /api/v1/transactions/{uuid}/reject` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:transaction:verify (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  transactionRejectPaymentPost(uuid: string, options?: RequestOptions) {
    return this.client.request<T.TransactionRejectPaymentPostResponse>({ ...options, method: "POST", url: `/api/v1/transactions/${encodeURIComponent(uuid)}/reject` });
  }
  /**
   * Read verification log array newest-first by created_at for transaction UUID at HTTP 200; empty history is [], missing transaction returns 404.
   * Calls `GET /api/v1/transactions/{uuid}/verifications` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:transaction:read (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  transactionVerificationLogsGet(uuid: string, options?: RequestOptions) {
    return this.client.request<T.TransactionVerificationLogsGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions/${encodeURIComponent(uuid)}/verifications` });
  }
  /**
   * Verify UUID using stored gateway/authority and persist verifier log; accepted transactions retain success without provider call. Provider failure is represented by HTTP 200 with verification.successful=false and rejected resulting status. May dispatch payment result; missing transaction/gateway returns 404. No request body.
   * Calls `POST /api/v1/transactions/{uuid}/verify` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:transaction:verify (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  transactionVerifyPaymentPost(uuid: string, options?: RequestOptions) {
    return this.client.request<T.TransactionVerifyPaymentPostResponse>({ ...options, method: "POST", url: `/api/v1/transactions/${encodeURIComponent(uuid)}/verify` });
  }
  /**
   * Read accepted income by UTC date with zeros for missing dates. days is unsigned u32, defaults 30 and clamps 1..90; returns date/amount points at HTTP 200, no count.
   * Calls `GET /api/v1/transactions/daily-income` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil IDP user; admin:transaction:read (payment: prefix, * and payment:* accepted). Bearer/secure cookies use shared FaiberClient; ingress must authenticate and strip forwarded identity headers.
   */
  transactionDailyIncomeGet(params?: T.TransactionDailyIncomeGetQuery, options?: RequestOptions) {
    return this.client.request<T.TransactionDailyIncomeGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions/daily-income`, params });
  }
  /**
   * Read process version with required status/message/data at HTTP 200. Does not probe database, broker or provider readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; configured credentials still use shared FaiberClient. Production ingress authority is separately verified.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Return raw provider navigation HTML at HTTP 200 for transaction UUID, optionally recording forwarded IP. Missing transaction/gateway returns 404, missing authority or invalid IP 400, unavailable provider 503; resolved storefront or changed proof returns 409. This endpoint is not JSON.
   * Calls `GET /payments/{uuid}/redirect` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; configured credentials still use shared FaiberClient. Production ingress authority is separately verified.
   */
  paymentWebRedirectGet(uuid: string, options?: RequestOptions) {
    return this.client.request<T.PaymentWebRedirectGetResponse>({ ...options, method: "GET", url: `/payments/${encodeURIComponent(uuid)}/redirect`, responseType: "text" });
  }
  /**
   * Process provider callback using query Authority, then transid, then paymentNumber; POST body is ignored. Missing authority returns 422, wrong provider 400, missing transaction 404, transient verification 503. May contact provider, persist state and emit result. Returns raw HTML 200 even for declined payments, or empty 303 with Location for allowed HTTPS callback origin. In Node use maxRedirects:0 and accept 303 to inspect redirect.
   * Calls `GET /payments/callbacks/{provider}` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; configured credentials still use shared FaiberClient. Production ingress authority is separately verified.
   */
  paymentWebCallbackGet(provider: string, params?: T.PaymentWebCallbackGetQuery, options?: RequestOptions) {
    return this.client.request<T.PaymentWebCallbackGetResponse>({ ...options, method: "GET", url: `/payments/callbacks/${encodeURIComponent(provider)}`, params, responseType: "text" });
  }
  /**
   * Process provider callback using query Authority, then transid, then paymentNumber; POST body is ignored. Missing authority returns 422, wrong provider 400, missing transaction 404, transient verification 503. May contact provider, persist state and emit result. Returns raw HTML 200 even for declined payments, or empty 303 with Location for allowed HTTPS callback origin. In Node use maxRedirects:0 and accept 303 to inspect redirect.
   * Calls `POST /payments/callbacks/{provider}` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; configured credentials still use shared FaiberClient. Production ingress authority is separately verified.
   */
  paymentWebCallbackPost(provider: string, params?: T.PaymentWebCallbackPostQuery, options?: RequestOptions) {
    return this.client.request<T.PaymentWebCallbackPostResponse>({ ...options, method: "POST", url: `/payments/callbacks/${encodeURIComponent(provider)}`, params, responseType: "text" });
  }
  /**
   * Read process version with required status/message/data at HTTP 200. Does not probe database, broker or provider readiness.
   * Calls `GET /up` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler permission check; configured credentials still use shared FaiberClient. Production ingress authority is separately verified.
   */
  routerUpGet(options?: RequestOptions) {
    return this.client.request<T.RouterUpGetResponse>({ ...options, method: "GET", url: `/up` });
  }
}
