import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class AssetOperations extends ServiceApi {
  /**
   * Performs the status route operation for the router capability.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
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
   * Performs the actions index operation for the action capability.
   * Calls `GET /api/v1/actions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:read.
   */
  actionActionsIndexGet(params?: T.ActionActionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ActionActionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/actions`, params });
  }
  /**
   * Performs the actions create operation for the action capability.
   * Calls `POST /api/v1/actions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:create.
   */
  actionActionsCreatePost(data: T.ActionActionsCreatePostInput, options?: RequestOptions<T.ActionActionsCreatePostInput>) {
    return this.client.request<T.ActionActionsCreatePostResponse, T.ActionActionsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/actions`, data: data });
  }
  /**
   * Performs the actions delete operation for the action capability.
   * Calls `DELETE /api/v1/actions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:delete.
   */
  actionActionsDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ActionActionsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/actions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the actions show operation for the action capability.
   * Calls `GET /api/v1/actions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:read.
   */
  actionActionsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ActionActionsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/actions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the actions update operation for the action capability.
   * Calls `PATCH /api/v1/actions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:update.
   */
  actionActionsUpdatePatch(id: Identifier, data: T.ActionActionsUpdatePatchInput, options?: RequestOptions<T.ActionActionsUpdatePatchInput>) {
    return this.client.request<T.ActionActionsUpdatePatchResponse, T.ActionActionsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/actions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the actions complete operation for the action capability.
   * Calls `POST /api/v1/actions/complete` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:complete.
   */
  actionActionsCompletePost(data: T.ActionActionsCompletePostInput, options?: RequestOptions<T.ActionActionsCompletePostInput>) {
    return this.client.request<T.ActionActionsCompletePostResponse, T.ActionActionsCompletePostInput>({ ...options, method: "POST", url: `/api/v1/actions/complete`, data: data });
  }
  /**
   * Performs the admin plan products index operation for the wallet billing capability.
   * Calls `GET /api/v1/admin/plan-products` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  walletBillingAdminPlanProductsIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminPlanProductsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/plan-products` });
  }
  /**
   * Performs the admin plan products update operation for the wallet billing capability.
   * Calls `PUT /api/v1/admin/plan-products` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminPlanProductsUpdatePut(data: T.WalletBillingAdminPlanProductsUpdatePutInput, options?: RequestOptions<T.WalletBillingAdminPlanProductsUpdatePutInput>) {
    return this.client.request<T.WalletBillingAdminPlanProductsUpdatePutResponse, T.WalletBillingAdminPlanProductsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/plan-products`, data: data });
  }
  /**
   * Performs the admin plan products delete operation for the wallet billing capability.
   * Calls `DELETE /api/v1/admin/plan-products/{tier}` through the shared IDP-aware Faiber client.
   * @param tier Backend path identifier `tier`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminPlanProductsDeleteDelete(tier: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminPlanProductsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/admin/plan-products/${encodeURIComponent(tier)}` });
  }
  /**
   * Performs the admin prices operation for the sandbox billing capability.
   * Calls `GET /api/v1/admin/resource-unit-prices` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  sandboxBillingAdminPricesGet(options?: RequestOptions) {
    return this.client.request<T.SandboxBillingAdminPricesGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/resource-unit-prices` });
  }
  /**
   * Performs the admin prices update operation for the sandbox billing capability.
   * Calls `PUT /api/v1/admin/resource-unit-prices` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  sandboxBillingAdminPricesUpdatePut(data: T.SandboxBillingAdminPricesUpdatePutInput, options?: RequestOptions<T.SandboxBillingAdminPricesUpdatePutInput>) {
    return this.client.request<T.SandboxBillingAdminPricesUpdatePutResponse, T.SandboxBillingAdminPricesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/resource-unit-prices`, data: data });
  }
  /**
   * Performs the admin subscriptions index operation for the wallet billing capability.
   * Calls `GET /api/v1/admin/subscriptions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  walletBillingAdminSubscriptionsIndexGet(params?: T.WalletBillingAdminSubscriptionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminSubscriptionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/subscriptions`, params });
  }
  /**
   * Performs the admin user plans index operation for the wallet billing capability.
   * Calls `GET /api/v1/admin/user-plans` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  walletBillingAdminUserPlansIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminUserPlansIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/user-plans` });
  }
  /**
   * Performs the admin user plan delete operation for the wallet billing capability.
   * Calls `DELETE /api/v1/admin/user-plans/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminUserPlanDeleteDelete(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminUserPlanDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/admin/user-plans/${encodeURIComponent(profileId)}` });
  }
  /**
   * Performs the admin user plan update operation for the wallet billing capability.
   * Calls `PUT /api/v1/admin/user-plans/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminUserPlanUpdatePut(profileId: Identifier, data: T.WalletBillingAdminUserPlanUpdatePutInput, options?: RequestOptions<T.WalletBillingAdminUserPlanUpdatePutInput>) {
    return this.client.request<T.WalletBillingAdminUserPlanUpdatePutResponse, T.WalletBillingAdminUserPlanUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/user-plans/${encodeURIComponent(profileId)}`, data: data });
  }
  /**
   * Performs the admin user plan disable operation for the wallet billing capability.
   * Calls `PUT /api/v1/admin/user-plans/{profile_id}/disable` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminUserPlanDisablePut(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminUserPlanDisablePutResponse>({ ...options, method: "PUT", url: `/api/v1/admin/user-plans/${encodeURIComponent(profileId)}/disable` });
  }
  /**
   * Performs the assets index operation for the catalog capability.
   * Calls `GET /api/v1/assets` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:asset:read.
   */
  catalogAssetsIndexGet(params?: T.CatalogAssetsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.CatalogAssetsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/assets`, params });
  }
  /**
   * Performs the assets create operation for the catalog capability.
   * Calls `POST /api/v1/assets` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:asset:create.
   */
  catalogAssetsCreatePost(data: T.CatalogAssetsCreatePostInput, options?: RequestOptions<T.CatalogAssetsCreatePostInput>) {
    return this.client.request<T.CatalogAssetsCreatePostResponse, T.CatalogAssetsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/assets`, data: data });
  }
  /**
   * Performs the assets delete operation for the catalog capability.
   * Calls `DELETE /api/v1/assets/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:asset:delete.
   */
  catalogAssetsDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CatalogAssetsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/assets/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the assets show operation for the catalog capability.
   * Calls `GET /api/v1/assets/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:asset:read.
   */
  catalogAssetsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CatalogAssetsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/assets/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the assets update operation for the catalog capability.
   * Calls `PATCH /api/v1/assets/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:asset:update.
   */
  catalogAssetsUpdatePatch(id: Identifier, data: T.CatalogAssetsUpdatePatchInput, options?: RequestOptions<T.CatalogAssetsUpdatePatchInput>) {
    return this.client.request<T.CatalogAssetsUpdatePatchResponse, T.CatalogAssetsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/assets/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the bank summary show operation for the bank capability.
   * Calls `GET /api/v1/bank-summary` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:bank_transaction:read.
   */
  bankBankSummaryShowGet(options?: RequestOptions) {
    return this.client.request<T.BankBankSummaryShowGetResponse>({ ...options, method: "GET", url: `/api/v1/bank-summary` });
  }
  /**
   * Performs the bank transactions index operation for the bank capability.
   * Calls `GET /api/v1/bank-transactions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:bank_transaction:read.
   */
  bankBankTransactionsIndexGet(params?: T.BankBankTransactionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.BankBankTransactionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/bank-transactions`, params });
  }
  /**
   * Performs the bank transactions create operation for the bank capability.
   * Calls `POST /api/v1/bank-transactions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:bank_transaction:create.
   */
  bankBankTransactionsCreatePost(data: T.BankBankTransactionsCreatePostInput, options?: RequestOptions<T.BankBankTransactionsCreatePostInput>) {
    return this.client.request<T.BankBankTransactionsCreatePostResponse, T.BankBankTransactionsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/bank-transactions`, data: data });
  }
  /**
   * Performs the charge settings show operation for the charge capability.
   * Calls `GET /api/v1/charge/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  chargeChargeSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.ChargeChargeSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/charge/settings` });
  }
  /**
   * Performs the charge settings update operation for the charge capability.
   * Calls `PATCH /api/v1/charge/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  chargeChargeSettingsUpdatePatch(data: T.ChargeChargeSettingsUpdatePatchInput, options?: RequestOptions<T.ChargeChargeSettingsUpdatePatchInput>) {
    return this.client.request<T.ChargeChargeSettingsUpdatePatchResponse, T.ChargeChargeSettingsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/charge/settings`, data: data });
  }
  /**
   * Performs the coin settings show operation for the bank capability.
   * Calls `GET /api/v1/coin-settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:coin_settings:read.
   */
  bankCoinSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.BankCoinSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/coin-settings` });
  }
  /**
   * Performs the coin settings update operation for the bank capability.
   * Calls `PATCH /api/v1/coin-settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:coin_settings:update.
   */
  bankCoinSettingsUpdatePatch(data: T.BankCoinSettingsUpdatePatchInput, options?: RequestOptions<T.BankCoinSettingsUpdatePatchInput>) {
    return this.client.request<T.BankCoinSettingsUpdatePatchResponse, T.BankCoinSettingsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/coin-settings`, data: data });
  }
  /**
   * Performs the dashboard show operation for the dashboard capability.
   * Calls `GET /api/v1/dashboard` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:dashboard:read.
   */
  dashboardDashboardShowGet(params?: T.DashboardDashboardShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.DashboardDashboardShowGetResponse>({ ...options, method: "GET", url: `/api/v1/dashboard`, params });
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
   * Performs the rabbitmq integration show operation for the integration capability.
   * Calls `GET /api/v1/integration/rabbitmq` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:integration:read.
   */
  integrationRabbitmqIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationRabbitmqIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/rabbitmq` });
  }
  /**
   * Performs the plans index operation for the llm usage capability.
   * Calls `GET /api/v1/llm-pricing/plans` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  llmUsagePlansIndexGet(options?: RequestOptions) {
    return this.client.request<T.LlmUsagePlansIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/llm-pricing/plans` });
  }
  /**
   * Performs the plan show operation for the llm usage capability.
   * Calls `GET /api/v1/llm-pricing/plans/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  llmUsagePlanShowGet(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LlmUsagePlanShowGetResponse>({ ...options, method: "GET", url: `/api/v1/llm-pricing/plans/${encodeURIComponent(profileId)}` });
  }
  /**
   * Performs the plan set operation for the llm usage capability.
   * Calls `PUT /api/v1/llm-pricing/plans/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  llmUsagePlanSetPut(profileId: Identifier, data: T.LlmUsagePlanSetPutInput, options?: RequestOptions<T.LlmUsagePlanSetPutInput>) {
    return this.client.request<T.LlmUsagePlanSetPutResponse, T.LlmUsagePlanSetPutInput>({ ...options, method: "PUT", url: `/api/v1/llm-pricing/plans/${encodeURIComponent(profileId)}`, data: data });
  }
  /**
   * Performs the me assets show operation for the wallet capability.
   * Calls `GET /api/v1/me/assets` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  walletMeAssetsShowGet(options?: RequestOptions) {
    return this.client.request<T.WalletMeAssetsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/me/assets` });
  }
  /**
   * Performs the me badges show operation for the wallet capability.
   * Calls `GET /api/v1/me/badges` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletMeBadgesShowGet(params?: T.WalletMeBadgesShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeBadgesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/me/badges`, params });
  }
  /**
   * Performs the me llm usage operation for the wallet capability.
   * Calls `GET /api/v1/me/llm-usage` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  walletMeLlmUsageGet(params?: T.WalletMeLlmUsageGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeLlmUsageGetResponse>({ ...options, method: "GET", url: `/api/v1/me/llm-usage`, params });
  }
  /**
   * Performs the me transactions operation for the wallet capability.
   * Calls `GET /api/v1/me/transactions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  walletMeTransactionsGet(params?: T.WalletMeTransactionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeTransactionsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/transactions`, params });
  }
  /**
   * Performs the plans index operation for the wallet billing capability.
   * Calls `GET /api/v1/plans` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingPlansIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingPlansIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/plans` });
  }
  /**
   * Performs the current plan operation for the wallet billing capability.
   * Calls `GET /api/v1/plans/current` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingCurrentPlanGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingCurrentPlanGetResponse>({ ...options, method: "GET", url: `/api/v1/plans/current` });
  }
  /**
   * Performs the plans purchase operation for the wallet billing capability.
   * Calls `POST /api/v1/plans/purchase` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingPlansPurchasePost(data: T.WalletBillingPlansPurchasePostInput, options?: RequestOptions<T.WalletBillingPlansPurchasePostInput>) {
    return this.client.request<T.WalletBillingPlansPurchasePostResponse, T.WalletBillingPlansPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/plans/purchase`, data: data });
  }
  /**
   * Performs the points packs index operation for the wallet billing capability.
   * Calls `GET /api/v1/points-packs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingPointsPacksIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingPointsPacksIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/points-packs` });
  }
  /**
   * Performs the points packs purchase operation for the wallet billing capability.
   * Calls `POST /api/v1/points-packs/purchase` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingPointsPacksPurchasePost(data: T.WalletBillingPointsPacksPurchasePostInput, options?: RequestOptions<T.WalletBillingPointsPacksPurchasePostInput>) {
    return this.client.request<T.WalletBillingPointsPacksPurchasePostResponse, T.WalletBillingPointsPacksPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/points-packs/purchase`, data: data });
  }
  /**
   * Performs the ranks index operation for the rank capability.
   * Calls `GET /api/v1/ranks` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:rank:read.
   */
  rankRanksIndexGet(params?: T.RankRanksIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RankRanksIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/ranks`, params });
  }
  /**
   * Performs the ranks create operation for the rank capability.
   * Calls `POST /api/v1/ranks` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:rank:create.
   */
  rankRanksCreatePost(data: T.RankRanksCreatePostInput, options?: RequestOptions<T.RankRanksCreatePostInput>) {
    return this.client.request<T.RankRanksCreatePostResponse, T.RankRanksCreatePostInput>({ ...options, method: "POST", url: `/api/v1/ranks`, data: data });
  }
  /**
   * Performs the ranks delete operation for the rank capability.
   * Calls `DELETE /api/v1/ranks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:rank:delete.
   */
  rankRanksDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RankRanksDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/ranks/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the ranks show operation for the rank capability.
   * Calls `GET /api/v1/ranks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:rank:read.
   */
  rankRanksShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RankRanksShowGetResponse>({ ...options, method: "GET", url: `/api/v1/ranks/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the ranks update operation for the rank capability.
   * Calls `PATCH /api/v1/ranks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:rank:update.
   */
  rankRanksUpdatePatch(id: Identifier, data: T.RankRanksUpdatePatchInput, options?: RequestOptions<T.RankRanksUpdatePatchInput>) {
    return this.client.request<T.RankRanksUpdatePatchResponse, T.RankRanksUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/ranks/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the purge operation for the sandbox billing capability.
   * Calls `DELETE /api/v1/sandbox-resources/{project}` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingPurgeDelete(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingPurgeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}` });
  }
  /**
   * Performs the show operation for the sandbox billing capability.
   * Calls `GET /api/v1/sandbox-resources/{project}` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingShowGet(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingShowGetResponse>({ ...options, method: "GET", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}` });
  }
  /**
   * Performs the update operation for the sandbox billing capability.
   * Calls `PUT /api/v1/sandbox-resources/{project}` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingUpdatePut(project: Identifier, data: T.SandboxBillingUpdatePutInput, options?: RequestOptions<T.SandboxBillingUpdatePutInput>) {
    return this.client.request<T.SandboxBillingUpdatePutResponse, T.SandboxBillingUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}`, data: data });
  }
  /**
   * Performs the pause operation for the sandbox billing capability.
   * Calls `POST /api/v1/sandbox-resources/{project}/pause` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingPausePost(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingPausePostResponse>({ ...options, method: "POST", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}/pause` });
  }
  /**
   * Performs the resume operation for the sandbox billing capability.
   * Calls `POST /api/v1/sandbox-resources/{project}/resume` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingResumePost(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingResumePostResponse>({ ...options, method: "POST", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}/resume` });
  }
  /**
   * Performs the subscriptions index operation for the wallet billing capability.
   * Calls `GET /api/v1/subscriptions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingSubscriptionsIndexGet(params?: T.WalletBillingSubscriptionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletBillingSubscriptionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/subscriptions`, params });
  }
  /**
   * Performs the subscriptions cancel operation for the wallet billing capability.
   * Calls `POST /api/v1/subscriptions/{id}/cancel` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingSubscriptionsCancelPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingSubscriptionsCancelPostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(id)}/cancel` });
  }
  /**
   * Performs the delete permanently operation for the service lifecycle capability.
   * Calls `DELETE /api/v1/subscriptions/{project}/{service}/data` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param service Backend path identifier `service`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceLifecycleDeletePermanentlyDelete(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecycleDeletePermanentlyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/data` });
  }
  /**
   * Performs the pause operation for the service lifecycle capability.
   * Calls `POST /api/v1/subscriptions/{project}/{service}/pause` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param service Backend path identifier `service`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceLifecyclePausePost(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecyclePausePostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/pause` });
  }
  /**
   * Performs the remove operation for the service lifecycle capability.
   * Calls `POST /api/v1/subscriptions/{project}/{service}/remove` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param service Backend path identifier `service`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceLifecycleRemovePost(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecycleRemovePostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/remove` });
  }
  /**
   * Performs the resume operation for the service lifecycle capability.
   * Calls `POST /api/v1/subscriptions/{project}/{service}/resume` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param service Backend path identifier `service`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceLifecycleResumePost(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecycleResumePostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/resume` });
  }
  /**
   * Performs the subscriptions purchase operation for the wallet billing capability.
   * Calls `POST /api/v1/subscriptions/purchase` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingSubscriptionsPurchasePost(data: T.WalletBillingSubscriptionsPurchasePostInput, options?: RequestOptions<T.WalletBillingSubscriptionsPurchasePostInput>) {
    return this.client.request<T.WalletBillingSubscriptionsPurchasePostResponse, T.WalletBillingSubscriptionsPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/subscriptions/purchase`, data: data });
  }
  /**
   * Performs the user action logs index operation for the logs capability.
   * Calls `GET /api/v1/user-action-logs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:user_action_log:read.
   */
  logsUserActionLogsIndexGet(params?: T.LogsUserActionLogsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.LogsUserActionLogsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/user-action-logs`, params });
  }
  /**
   * Performs the user asset logs index operation for the logs capability.
   * Calls `GET /api/v1/user-asset-logs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:user_asset_log:read.
   */
  logsUserAssetLogsIndexGet(params?: T.LogsUserAssetLogsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.LogsUserAssetLogsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/user-asset-logs`, params });
  }
  /**
   * Performs the wallet show operation for the wallet billing capability.
   * Calls `GET /api/v1/wallet` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingWalletShowGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingWalletShowGetResponse>({ ...options, method: "GET", url: `/api/v1/wallet` });
  }
  /**
   * Performs the wallet topup operation for the wallet billing capability.
   * Calls `POST /api/v1/wallet/topup` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingWalletTopupPost(data: T.WalletBillingWalletTopupPostInput, options?: RequestOptions<T.WalletBillingWalletTopupPostInput>) {
    return this.client.request<T.WalletBillingWalletTopupPostResponse, T.WalletBillingWalletTopupPostInput>({ ...options, method: "POST", url: `/api/v1/wallet/topup`, data: data });
  }
}

