import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class PaymentOperations extends ServiceApi {
  /**
   * Performs the openapi json operation for the router capability.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Performs the get self operation for the session capability.
   * Calls `GET /api/v1/auth/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sessionGetSelfGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /**
   * Performs the index operation for the gateway capability.
   * Calls `GET /api/v1/gateways` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:gateway:read.
   */
  gatewayIndexGet(params?: T.GatewayIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.GatewayIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/gateways`, params });
  }
  /**
   * Performs the store operation for the gateway capability.
   * Calls `POST /api/v1/gateways` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:gateway:create.
   */
  gatewayStorePost(data: T.GatewayStorePostInput, options?: RequestOptions<T.GatewayStorePostInput>) {
    return this.client.request<T.GatewayStorePostResponse, T.GatewayStorePostInput>({ ...options, method: "POST", url: `/api/v1/gateways`, data: data });
  }
  /**
   * Performs the destroy operation for the gateway capability.
   * Calls `DELETE /api/v1/gateways/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:gateway:delete.
   */
  gatewayDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.GatewayDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/gateways/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the gateway capability.
   * Calls `GET /api/v1/gateways/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:gateway:read.
   */
  gatewayShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.GatewayShowGetResponse>({ ...options, method: "GET", url: `/api/v1/gateways/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the gateway capability.
   * Calls `PATCH /api/v1/gateways/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:gateway:update.
   */
  gatewayUpdatePatch(id: Identifier, data: T.GatewayUpdatePatchInput, options?: RequestOptions<T.GatewayUpdatePatchInput>) {
    return this.client.request<T.GatewayUpdatePatchResponse, T.GatewayUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/gateways/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the options operation for the gateway capability.
   * Calls `GET /api/v1/gateways/options` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:gateway:read.
   */
  gatewayOptionsGet(options?: RequestOptions) {
    return this.client.request<T.GatewayOptionsGetResponse>({ ...options, method: "GET", url: `/api/v1/gateways/options` });
  }
  /**
   * Verify live gateway configuration with a read-only provider check. Does not expose merchant secrets.
   * Calls `POST /api/v1/gateways/setup-check` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:gateway:read.
   */
  gatewaySetupCheckPost(options?: RequestOptions) {
    return this.client.request<T.GatewaySetupCheckPostResponse>({ ...options, method: "POST", url: `/api/v1/gateways/setup-check` });
  }
  /**
   * Performs the integration docs show operation for the integration capability.
   * Calls `GET /api/v1/integration/docs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:integration:read.
   */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /**
   * Performs the flow integration show operation for the integration capability.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Performs the availability operation for the product plans capability.
   * Calls `GET /api/v1/internal/2done/availability` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only PRODUCT_PAYMENT_TOKEN bearer credential.
   */
  productPlansAvailabilityGet(options?: RequestOptions) {
    return this.client.request<T.ProductPlansAvailabilityGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/2done/availability` });
  }
  /**
   * Performs the create operation for the product plans capability.
   * Calls `POST /api/v1/internal/2done/payment` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  productPlansCreatePost(data: T.ProductPlansCreatePostInput, options?: RequestOptions<T.ProductPlansCreatePostInput>) {
    return this.client.request<T.ProductPlansCreatePostResponse, T.ProductPlansCreatePostInput>({ ...options, method: "POST", url: `/api/v1/internal/2done/payment`, data: data });
  }
  /**
   * Performs the receipt operation for the product plans capability.
   * Calls `GET /api/v1/internal/2done/transactions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only product payment bearer credential; restricted service and transaction ownership.
   */
  productPlansReceiptGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductPlansReceiptGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/2done/transactions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the receipt operation for the asset checkout capability.
   * Calls `GET /api/v1/internal/asset/purchases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only Asset payment bearer credential; validates checkout allocation and provider proof.
   */
  assetCheckoutReceiptGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AssetCheckoutReceiptGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/asset/purchases/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the create operation for the fitness capability.
   * Calls `POST /api/v1/internal/fitness/payment` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  fitnessCreatePost(data: T.FitnessCreatePostInput, options?: RequestOptions<T.FitnessCreatePostInput>) {
    return this.client.request<T.FitnessCreatePostResponse, T.FitnessCreatePostInput>({ ...options, method: "POST", url: `/api/v1/internal/fitness/payment`, data: data });
  }
  /**
   * Performs the receipt operation for the fitness capability.
   * Calls `GET /api/v1/internal/fitness/transactions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only product payment bearer credential; restricted service and transaction ownership.
   */
  fitnessReceiptGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FitnessReceiptGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/fitness/transactions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the retry operation for the fitness capability.
   * Calls `POST /api/v1/internal/fitness/transactions/{id}/retry` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  fitnessRetryPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FitnessRetryPostResponse>({ ...options, method: "POST", url: `/api/v1/internal/fitness/transactions/${encodeURIComponent(id)}/retry` });
  }
  /**
   * Performs the create operation for the shop checkout capability.
   * Calls `POST /api/v1/internal/shop/payment` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  shopCheckoutCreatePost(data: T.ShopCheckoutCreatePostInput, options?: RequestOptions<T.ShopCheckoutCreatePostInput>) {
    return this.client.request<T.ShopCheckoutCreatePostResponse, T.ShopCheckoutCreatePostInput>({ ...options, method: "POST", url: `/api/v1/internal/shop/payment`, data: data });
  }
  /**
   * Performs the readiness operation for the shop checkout capability.
   * Calls `GET /api/v1/internal/shop/readiness` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only shop payment bearer credential and website scope.
   */
  shopCheckoutReadinessGet(options?: RequestOptions) {
    return this.client.request<T.ShopCheckoutReadinessGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/shop/readiness` });
  }
  /**
   * Performs the receipt operation for the shop checkout capability.
   * Calls `GET /api/v1/internal/shop/transactions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only shop payment bearer credential and website scope.
   */
  shopCheckoutReceiptGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ShopCheckoutReceiptGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/shop/transactions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the create payment operation for the payment capability.
   * Calls `POST /api/v1/payment` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  paymentCreatePaymentPost(data: T.PaymentCreatePaymentPostInput, options?: RequestOptions<T.PaymentCreatePaymentPostInput>) {
    return this.client.request<T.PaymentCreatePaymentPostResponse, T.PaymentCreatePaymentPostInput>({ ...options, method: "POST", url: `/api/v1/payment`, data: data });
  }
  /**
   * Performs the show operation for the settings capability.
   * Calls `GET /api/v1/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:gateway:read.
   */
  settingsShowGet(options?: RequestOptions) {
    return this.client.request<T.SettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/settings` });
  }
  /**
   * Performs the update operation for the settings capability.
   * Calls `PATCH /api/v1/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:gateway:update.
   */
  settingsUpdatePatch(data: T.SettingsUpdatePatchInput, options?: RequestOptions<T.SettingsUpdatePatchInput>) {
    return this.client.request<T.SettingsUpdatePatchResponse, T.SettingsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/settings`, data: data });
  }
  /**
   * Performs the index operation for the transaction capability.
   * Calls `GET /api/v1/transactions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:transaction:read.
   */
  transactionIndexGet(params?: T.TransactionIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TransactionIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions`, params });
  }
  /**
   * Performs the show status operation for the router capability.
   * Calls `GET /api/v1/transactions/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerShowStatusGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterShowStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions/${encodeURIComponent(uuid)}` });
  }
  /**
   * Performs the reject payment operation for the transaction capability.
   * Calls `POST /api/v1/transactions/{uuid}/reject` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:transaction:verify.
   */
  transactionRejectPaymentPost(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.TransactionRejectPaymentPostResponse>({ ...options, method: "POST", url: `/api/v1/transactions/${encodeURIComponent(uuid)}/reject` });
  }
  /**
   * Performs the verification logs operation for the transaction capability.
   * Calls `GET /api/v1/transactions/{uuid}/verifications` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:transaction:read.
   */
  transactionVerificationLogsGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.TransactionVerificationLogsGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions/${encodeURIComponent(uuid)}/verifications` });
  }
  /**
   * Performs the verify payment operation for the transaction capability.
   * Calls `POST /api/v1/transactions/{uuid}/verify` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:transaction:verify.
   */
  transactionVerifyPaymentPost(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.TransactionVerifyPaymentPostResponse>({ ...options, method: "POST", url: `/api/v1/transactions/${encodeURIComponent(uuid)}/verify` });
  }
  /**
   * Performs the daily income operation for the transaction capability.
   * Calls `GET /api/v1/transactions/daily-income` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:transaction:read.
   */
  transactionDailyIncomeGet(params?: T.TransactionDailyIncomeGetQuery, options?: RequestOptions) {
    return this.client.request<T.TransactionDailyIncomeGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions/daily-income`, params });
  }
  /**
   * Performs the status route operation for the router capability.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Performs the redirect operation for the payment web capability.
   * Calls `GET /payments/{uuid}/redirect` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  paymentWebRedirectGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.PaymentWebRedirectGetResponse>({ ...options, method: "GET", url: `/payments/${encodeURIComponent(uuid)}/redirect` });
  }
  /**
   * Performs the callback operation for the payment web capability.
   * Calls `GET /payments/callbacks/{provider}` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  paymentWebCallbackGet(provider: Identifier, params?: T.PaymentWebCallbackGetQuery, options?: RequestOptions) {
    return this.client.request<T.PaymentWebCallbackGetResponse>({ ...options, method: "GET", url: `/payments/callbacks/${encodeURIComponent(provider)}`, params });
  }
  /**
   * Performs the callback operation for the payment web capability.
   * Calls `POST /payments/callbacks/{provider}` through the shared IDP-aware Faiber client.
   * @param provider Backend path identifier `provider`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  paymentWebCallbackPost(provider: Identifier, params?: T.PaymentWebCallbackPostQuery, options?: RequestOptions) {
    return this.client.request<T.PaymentWebCallbackPostResponse>({ ...options, method: "POST", url: `/payments/callbacks/${encodeURIComponent(provider)}`, params });
  }
}
