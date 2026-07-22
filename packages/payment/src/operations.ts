import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class PaymentOperations extends ServiceApi {
  /** GET /api/openapi.json; permission: public/session-derived. */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /** GET /api/v1/auth/self; permission: public/session-derived. */
  sessionGetSelfGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /** GET /api/v1/gateways; permission: admin:gateway:read. */
  gatewayIndexGet(params?: T.GatewayIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.GatewayIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/gateways`, params });
  }
  /** POST /api/v1/gateways; permission: admin:gateway:create. */
  gatewayStorePost(data: T.GatewayStorePostInput, options?: RequestOptions<T.GatewayStorePostInput>) {
    return this.client.request<T.GatewayStorePostResponse, T.GatewayStorePostInput>({ ...options, method: "POST", url: `/api/v1/gateways`, data: data });
  }
  /** DELETE /api/v1/gateways/{id}; permission: admin:gateway:delete. */
  gatewayDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.GatewayDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/gateways/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/gateways/{id}; permission: admin:gateway:read. */
  gatewayShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.GatewayShowGetResponse>({ ...options, method: "GET", url: `/api/v1/gateways/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/gateways/{id}; permission: admin:gateway:update. */
  gatewayUpdatePatch(id: Identifier, data: T.GatewayUpdatePatchInput, options?: RequestOptions<T.GatewayUpdatePatchInput>) {
    return this.client.request<T.GatewayUpdatePatchResponse, T.GatewayUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/gateways/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/gateways/options; permission: admin:gateway:read. */
  gatewayOptionsGet(options?: RequestOptions) {
    return this.client.request<T.GatewayOptionsGetResponse>({ ...options, method: "GET", url: `/api/v1/gateways/options` });
  }
  /** GET /api/v1/integration/docs; permission: admin:integration:read. */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /** GET /api/v1/integration/flow; permission: public/session-derived. */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /** POST /api/v1/payment; permission: public/session-derived. */
  paymentCreatePaymentPost(data: T.PaymentCreatePaymentPostInput, options?: RequestOptions<T.PaymentCreatePaymentPostInput>) {
    return this.client.request<T.PaymentCreatePaymentPostResponse, T.PaymentCreatePaymentPostInput>({ ...options, method: "POST", url: `/api/v1/payment`, data: data });
  }
  /** GET /api/v1/transactions; permission: admin:transaction:read. */
  transactionIndexGet(params?: T.TransactionIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TransactionIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions`, params });
  }
  /** GET /api/v1/transactions/{uuid}; permission: public/session-derived. */
  routerShowStatusGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterShowStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions/${encodeURIComponent(uuid)}` });
  }
  /** GET /api/v1/transactions/daily-income; permission: admin:transaction:read. */
  transactionDailyIncomeGet(params?: T.TransactionDailyIncomeGetQuery, options?: RequestOptions) {
    return this.client.request<T.TransactionDailyIncomeGetResponse>({ ...options, method: "GET", url: `/api/v1/transactions/daily-income`, params });
  }
  /** GET /health; permission: public/session-derived. */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/health` });
  }
  /** GET /payments/{uuid}/redirect; permission: public/session-derived. */
  paymentWebRedirectGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.PaymentWebRedirectGetResponse>({ ...options, method: "GET", url: `/payments/${encodeURIComponent(uuid)}/redirect` });
  }
  /** GET /payments/callbacks/{provider}; permission: public/session-derived. */
  paymentWebCallbackGet(provider: Identifier, params?: T.PaymentWebCallbackGetQuery, options?: RequestOptions) {
    return this.client.request<T.PaymentWebCallbackGetResponse>({ ...options, method: "GET", url: `/payments/callbacks/${encodeURIComponent(provider)}`, params });
  }
  /** POST /payments/callbacks/{provider}; permission: public/session-derived. */
  paymentWebCallbackPost(provider: Identifier, params?: T.PaymentWebCallbackPostQuery, options?: RequestOptions) {
    return this.client.request<T.PaymentWebCallbackPostResponse>({ ...options, method: "POST", url: `/payments/callbacks/${encodeURIComponent(provider)}`, params });
  }
}

