import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class AssetOperations extends ServiceApi {
  /** GET /; permission: public/session-derived. */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /** GET /api/openapi.json; permission: public/session-derived. */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /** GET /api/v1/actions; permission: admin:action:read. */
  actionActionsIndexGet(params?: T.ActionActionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ActionActionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/actions`, params });
  }
  /** POST /api/v1/actions; permission: admin:action:create. */
  actionActionsCreatePost(data: T.ActionActionsCreatePostInput, options?: RequestOptions<T.ActionActionsCreatePostInput>) {
    return this.client.request<T.ActionActionsCreatePostResponse, T.ActionActionsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/actions`, data: data });
  }
  /** DELETE /api/v1/actions/{id}; permission: admin:action:delete. */
  actionActionsDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ActionActionsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/actions/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/actions/{id}; permission: admin:action:read. */
  actionActionsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ActionActionsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/actions/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/actions/{id}; permission: admin:action:update. */
  actionActionsUpdatePatch(id: Identifier, data: T.ActionActionsUpdatePatchInput, options?: RequestOptions<T.ActionActionsUpdatePatchInput>) {
    return this.client.request<T.ActionActionsUpdatePatchResponse, T.ActionActionsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/actions/${encodeURIComponent(id)}`, data: data });
  }
  /** POST /api/v1/actions/complete; permission: admin:action:complete. */
  actionActionsCompletePost(data: T.ActionActionsCompletePostInput, options?: RequestOptions<T.ActionActionsCompletePostInput>) {
    return this.client.request<T.ActionActionsCompletePostResponse, T.ActionActionsCompletePostInput>({ ...options, method: "POST", url: `/api/v1/actions/complete`, data: data });
  }
  /** GET /api/v1/admin/plan-products; permission: admin:charge:read. */
  walletBillingAdminPlanProductsIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminPlanProductsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/plan-products` });
  }
  /** PUT /api/v1/admin/plan-products; permission: admin:charge:update. */
  walletBillingAdminPlanProductsUpdatePut(data: T.WalletBillingAdminPlanProductsUpdatePutInput, options?: RequestOptions<T.WalletBillingAdminPlanProductsUpdatePutInput>) {
    return this.client.request<T.WalletBillingAdminPlanProductsUpdatePutResponse, T.WalletBillingAdminPlanProductsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/plan-products`, data: data });
  }
  /** GET /api/v1/admin/resource-unit-prices; permission: admin:charge:read. */
  sandboxBillingAdminPricesGet(options?: RequestOptions) {
    return this.client.request<T.SandboxBillingAdminPricesGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/resource-unit-prices` });
  }
  /** PUT /api/v1/admin/resource-unit-prices; permission: admin:charge:update. */
  sandboxBillingAdminPricesUpdatePut(data: T.SandboxBillingAdminPricesUpdatePutInput, options?: RequestOptions<T.SandboxBillingAdminPricesUpdatePutInput>) {
    return this.client.request<T.SandboxBillingAdminPricesUpdatePutResponse, T.SandboxBillingAdminPricesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/resource-unit-prices`, data: data });
  }
  /** GET /api/v1/admin/subscriptions; permission: admin:charge:read. */
  walletBillingAdminSubscriptionsIndexGet(params?: T.WalletBillingAdminSubscriptionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminSubscriptionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/subscriptions`, params });
  }
  /** GET /api/v1/admin/user-plans; permission: admin:charge:read. */
  walletBillingAdminUserPlansIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminUserPlansIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/user-plans` });
  }
  /** DELETE /api/v1/admin/user-plans/{profile_id}; permission: admin:charge:update. */
  walletBillingAdminUserPlanDeleteDelete(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminUserPlanDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/admin/user-plans/${encodeURIComponent(profileId)}` });
  }
  /** PUT /api/v1/admin/user-plans/{profile_id}; permission: admin:charge:update. */
  walletBillingAdminUserPlanUpdatePut(profileId: Identifier, data: T.WalletBillingAdminUserPlanUpdatePutInput, options?: RequestOptions<T.WalletBillingAdminUserPlanUpdatePutInput>) {
    return this.client.request<T.WalletBillingAdminUserPlanUpdatePutResponse, T.WalletBillingAdminUserPlanUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/user-plans/${encodeURIComponent(profileId)}`, data: data });
  }
  /** PUT /api/v1/admin/user-plans/{profile_id}/disable; permission: admin:charge:update. */
  walletBillingAdminUserPlanDisablePut(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminUserPlanDisablePutResponse>({ ...options, method: "PUT", url: `/api/v1/admin/user-plans/${encodeURIComponent(profileId)}/disable` });
  }
  /** GET /api/v1/assets; permission: admin:asset:read. */
  catalogAssetsIndexGet(params?: T.CatalogAssetsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.CatalogAssetsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/assets`, params });
  }
  /** POST /api/v1/assets; permission: admin:asset:create. */
  catalogAssetsCreatePost(data: T.CatalogAssetsCreatePostInput, options?: RequestOptions<T.CatalogAssetsCreatePostInput>) {
    return this.client.request<T.CatalogAssetsCreatePostResponse, T.CatalogAssetsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/assets`, data: data });
  }
  /** DELETE /api/v1/assets/{id}; permission: admin:asset:delete. */
  catalogAssetsDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CatalogAssetsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/assets/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/assets/{id}; permission: admin:asset:read. */
  catalogAssetsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CatalogAssetsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/assets/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/assets/{id}; permission: admin:asset:update. */
  catalogAssetsUpdatePatch(id: Identifier, data: T.CatalogAssetsUpdatePatchInput, options?: RequestOptions<T.CatalogAssetsUpdatePatchInput>) {
    return this.client.request<T.CatalogAssetsUpdatePatchResponse, T.CatalogAssetsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/assets/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/bank-summary; permission: admin:bank_transaction:read. */
  bankBankSummaryShowGet(options?: RequestOptions) {
    return this.client.request<T.BankBankSummaryShowGetResponse>({ ...options, method: "GET", url: `/api/v1/bank-summary` });
  }
  /** GET /api/v1/bank-transactions; permission: admin:bank_transaction:read. */
  bankBankTransactionsIndexGet(params?: T.BankBankTransactionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.BankBankTransactionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/bank-transactions`, params });
  }
  /** POST /api/v1/bank-transactions; permission: admin:bank_transaction:create. */
  bankBankTransactionsCreatePost(data: T.BankBankTransactionsCreatePostInput, options?: RequestOptions<T.BankBankTransactionsCreatePostInput>) {
    return this.client.request<T.BankBankTransactionsCreatePostResponse, T.BankBankTransactionsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/bank-transactions`, data: data });
  }
  /** GET /api/v1/charge/settings; permission: admin:charge:read. */
  chargeChargeSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.ChargeChargeSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/charge/settings` });
  }
  /** PATCH /api/v1/charge/settings; permission: admin:charge:update. */
  chargeChargeSettingsUpdatePatch(data: T.ChargeChargeSettingsUpdatePatchInput, options?: RequestOptions<T.ChargeChargeSettingsUpdatePatchInput>) {
    return this.client.request<T.ChargeChargeSettingsUpdatePatchResponse, T.ChargeChargeSettingsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/charge/settings`, data: data });
  }
  /** GET /api/v1/coin-settings; permission: admin:coin_settings:read. */
  bankCoinSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.BankCoinSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/coin-settings` });
  }
  /** PATCH /api/v1/coin-settings; permission: admin:coin_settings:update. */
  bankCoinSettingsUpdatePatch(data: T.BankCoinSettingsUpdatePatchInput, options?: RequestOptions<T.BankCoinSettingsUpdatePatchInput>) {
    return this.client.request<T.BankCoinSettingsUpdatePatchResponse, T.BankCoinSettingsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/coin-settings`, data: data });
  }
  /** GET /api/v1/dashboard; permission: admin:dashboard:read. */
  dashboardDashboardShowGet(params?: T.DashboardDashboardShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.DashboardDashboardShowGetResponse>({ ...options, method: "GET", url: `/api/v1/dashboard`, params });
  }
  /** GET /api/v1/integration/docs; permission: admin:integration:read. */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /** GET /api/v1/integration/flow; permission: public/session-derived. */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /** GET /api/v1/integration/rabbitmq; permission: admin:integration:read. */
  integrationRabbitmqIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationRabbitmqIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/rabbitmq` });
  }
  /** GET /api/v1/llm-pricing/plans; permission: admin:charge:read. */
  llmUsagePlansIndexGet(options?: RequestOptions) {
    return this.client.request<T.LlmUsagePlansIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/llm-pricing/plans` });
  }
  /** GET /api/v1/llm-pricing/plans/{profile_id}; permission: admin:charge:read. */
  llmUsagePlanShowGet(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LlmUsagePlanShowGetResponse>({ ...options, method: "GET", url: `/api/v1/llm-pricing/plans/${encodeURIComponent(profileId)}` });
  }
  /** PUT /api/v1/llm-pricing/plans/{profile_id}; permission: admin:charge:update. */
  llmUsagePlanSetPut(profileId: Identifier, data: T.LlmUsagePlanSetPutInput, options?: RequestOptions<T.LlmUsagePlanSetPutInput>) {
    return this.client.request<T.LlmUsagePlanSetPutResponse, T.LlmUsagePlanSetPutInput>({ ...options, method: "PUT", url: `/api/v1/llm-pricing/plans/${encodeURIComponent(profileId)}`, data: data });
  }
  /** GET /api/v1/me/assets; permission: admin:wallet:read_own. */
  walletMeAssetsShowGet(options?: RequestOptions) {
    return this.client.request<T.WalletMeAssetsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/me/assets` });
  }
  /** GET /api/v1/me/badges; permission: public/session-derived. */
  walletMeBadgesShowGet(params?: T.WalletMeBadgesShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeBadgesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/me/badges`, params });
  }
  /** GET /api/v1/me/llm-usage; permission: admin:wallet:read_own. */
  walletMeLlmUsageGet(params?: T.WalletMeLlmUsageGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeLlmUsageGetResponse>({ ...options, method: "GET", url: `/api/v1/me/llm-usage`, params });
  }
  /** GET /api/v1/me/transactions; permission: admin:wallet:read_own. */
  walletMeTransactionsGet(params?: T.WalletMeTransactionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeTransactionsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/transactions`, params });
  }
  /** GET /api/v1/plans; permission: public/session-derived. */
  walletBillingPlansIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingPlansIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/plans` });
  }
  /** GET /api/v1/plans/current; permission: public/session-derived. */
  walletBillingCurrentPlanGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingCurrentPlanGetResponse>({ ...options, method: "GET", url: `/api/v1/plans/current` });
  }
  /** POST /api/v1/plans/purchase; permission: public/session-derived. */
  walletBillingPlansPurchasePost(data: T.WalletBillingPlansPurchasePostInput, options?: RequestOptions<T.WalletBillingPlansPurchasePostInput>) {
    return this.client.request<T.WalletBillingPlansPurchasePostResponse, T.WalletBillingPlansPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/plans/purchase`, data: data });
  }
  /** GET /api/v1/points-packs; permission: public/session-derived. */
  walletBillingPointsPacksIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingPointsPacksIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/points-packs` });
  }
  /** POST /api/v1/points-packs/purchase; permission: public/session-derived. */
  walletBillingPointsPacksPurchasePost(data: T.WalletBillingPointsPacksPurchasePostInput, options?: RequestOptions<T.WalletBillingPointsPacksPurchasePostInput>) {
    return this.client.request<T.WalletBillingPointsPacksPurchasePostResponse, T.WalletBillingPointsPacksPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/points-packs/purchase`, data: data });
  }
  /** GET /api/v1/ranks; permission: admin:rank:read. */
  rankRanksIndexGet(params?: T.RankRanksIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RankRanksIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/ranks`, params });
  }
  /** POST /api/v1/ranks; permission: admin:rank:create. */
  rankRanksCreatePost(data: T.RankRanksCreatePostInput, options?: RequestOptions<T.RankRanksCreatePostInput>) {
    return this.client.request<T.RankRanksCreatePostResponse, T.RankRanksCreatePostInput>({ ...options, method: "POST", url: `/api/v1/ranks`, data: data });
  }
  /** DELETE /api/v1/ranks/{id}; permission: admin:rank:delete. */
  rankRanksDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RankRanksDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/ranks/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/ranks/{id}; permission: admin:rank:read. */
  rankRanksShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RankRanksShowGetResponse>({ ...options, method: "GET", url: `/api/v1/ranks/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/ranks/{id}; permission: admin:rank:update. */
  rankRanksUpdatePatch(id: Identifier, data: T.RankRanksUpdatePatchInput, options?: RequestOptions<T.RankRanksUpdatePatchInput>) {
    return this.client.request<T.RankRanksUpdatePatchResponse, T.RankRanksUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/ranks/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/sandbox-resources/{project}; permission: public/session-derived. */
  sandboxBillingPurgeDelete(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingPurgeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}` });
  }
  /** GET /api/v1/sandbox-resources/{project}; permission: public/session-derived. */
  sandboxBillingShowGet(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingShowGetResponse>({ ...options, method: "GET", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}` });
  }
  /** PUT /api/v1/sandbox-resources/{project}; permission: public/session-derived. */
  sandboxBillingUpdatePut(project: Identifier, data: T.SandboxBillingUpdatePutInput, options?: RequestOptions<T.SandboxBillingUpdatePutInput>) {
    return this.client.request<T.SandboxBillingUpdatePutResponse, T.SandboxBillingUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}`, data: data });
  }
  /** POST /api/v1/sandbox-resources/{project}/pause; permission: public/session-derived. */
  sandboxBillingPausePost(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingPausePostResponse>({ ...options, method: "POST", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}/pause` });
  }
  /** POST /api/v1/sandbox-resources/{project}/resume; permission: public/session-derived. */
  sandboxBillingResumePost(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingResumePostResponse>({ ...options, method: "POST", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}/resume` });
  }
  /** GET /api/v1/subscriptions; permission: public/session-derived. */
  walletBillingSubscriptionsIndexGet(params?: T.WalletBillingSubscriptionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletBillingSubscriptionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/subscriptions`, params });
  }
  /** POST /api/v1/subscriptions/{id}/cancel; permission: public/session-derived. */
  walletBillingSubscriptionsCancelPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingSubscriptionsCancelPostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(id)}/cancel` });
  }
  /** DELETE /api/v1/subscriptions/{project}/{service}/data; permission: public/session-derived. */
  serviceLifecycleDeletePermanentlyDelete(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecycleDeletePermanentlyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/data` });
  }
  /** POST /api/v1/subscriptions/{project}/{service}/pause; permission: public/session-derived. */
  serviceLifecyclePausePost(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecyclePausePostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/pause` });
  }
  /** POST /api/v1/subscriptions/{project}/{service}/remove; permission: public/session-derived. */
  serviceLifecycleRemovePost(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecycleRemovePostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/remove` });
  }
  /** POST /api/v1/subscriptions/{project}/{service}/resume; permission: public/session-derived. */
  serviceLifecycleResumePost(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecycleResumePostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/resume` });
  }
  /** POST /api/v1/subscriptions/purchase; permission: public/session-derived. */
  walletBillingSubscriptionsPurchasePost(data: T.WalletBillingSubscriptionsPurchasePostInput, options?: RequestOptions<T.WalletBillingSubscriptionsPurchasePostInput>) {
    return this.client.request<T.WalletBillingSubscriptionsPurchasePostResponse, T.WalletBillingSubscriptionsPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/subscriptions/purchase`, data: data });
  }
  /** GET /api/v1/user-action-logs; permission: admin:user_action_log:read. */
  logsUserActionLogsIndexGet(params?: T.LogsUserActionLogsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.LogsUserActionLogsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/user-action-logs`, params });
  }
  /** GET /api/v1/user-asset-logs; permission: admin:user_asset_log:read. */
  logsUserAssetLogsIndexGet(params?: T.LogsUserAssetLogsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.LogsUserAssetLogsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/user-asset-logs`, params });
  }
  /** GET /api/v1/wallet; permission: public/session-derived. */
  walletBillingWalletShowGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingWalletShowGetResponse>({ ...options, method: "GET", url: `/api/v1/wallet` });
  }
  /** POST /api/v1/wallet/topup; permission: public/session-derived. */
  walletBillingWalletTopupPost(data: T.WalletBillingWalletTopupPostInput, options?: RequestOptions<T.WalletBillingWalletTopupPostInput>) {
    return this.client.request<T.WalletBillingWalletTopupPostResponse, T.WalletBillingWalletTopupPostInput>({ ...options, method: "POST", url: `/api/v1/wallet/topup`, data: data });
  }
}

