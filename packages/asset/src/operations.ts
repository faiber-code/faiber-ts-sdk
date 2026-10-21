import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class AssetOperations extends ServiceApi {
  /**
   * Read process liveness and the static service version; this endpoint does not probe database or broker readiness.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Read the raw OpenAPI document. This document contains annotated routes only; complete mounted operations are available through the SDK.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Page nondeleted action definitions ordered by name; search matches name/title/description. Pagination defaults to page 1, size 20, clamped to 1–100.
   * Calls `GET /api/v1/actions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:read.
   */
  actionActionsIndexGet(params?: T.ActionActionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ActionActionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/actions`, params });
  }
  /**
   * Create an audited action with validated criteria and achievement rules; funded rules validate referenced assets and write rule history/outbox transactionally. Returns HTTP 200.
   * Calls `POST /api/v1/actions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:create.
   */
  actionActionsCreatePost(data: T.ActionActionsCreatePostInput, options?: RequestOptions<T.ActionActionsCreatePostInput>) {
    return this.client.request<T.ActionActionsCreatePostResponse, T.ActionActionsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/actions`, data: data });
  }
  /**
   * Soft-delete an audited action and record its funded-rule archival transactionally; returns HTTP 200 with data:null, or 404 when absent.
   * Calls `DELETE /api/v1/actions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:delete.
   */
  actionActionsDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ActionActionsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/actions/${encodeURIComponent(id)}` });
  }
  /**
   * Read one nondeleted action definition by UUID; a missing or archived action returns 404.
   * Calls `GET /api/v1/actions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:read.
   */
  actionActionsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ActionActionsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/actions/${encodeURIComponent(id)}` });
  }
  /**
   * Patch an audited action; null optional fields preserve values. Funded rule changes require a higher version and keep action identifiers immutable; invalid definitions fail before commit.
   * Calls `PATCH /api/v1/actions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:update.
   */
  actionActionsUpdatePatch(id: Identifier, data: T.ActionActionsUpdatePatchInput, options?: RequestOptions<T.ActionActionsUpdatePatchInput>) {
    return this.client.request<T.ActionActionsUpdatePatchResponse, T.ActionActionsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/actions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Complete a legacy action for the supplied profile UUID with optional stable event_id, occurrence timestamp and subject. Criteria, frequency, caps and badge rules govern rewards; scoped economy rewards use verified domain evidence instead.
   * Calls `POST /api/v1/actions/complete` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:complete.
   */
  actionActionsCompletePost(data: T.ActionActionsCompletePostInput, options?: RequestOptions<T.ActionActionsCompletePostInput>) {
    return this.client.request<T.ActionActionsCompletePostResponse, T.ActionActionsCompletePostInput>({ ...options, method: "POST", url: `/api/v1/actions/complete`, data: data });
  }
  /**
   * List all nondeleted plan products including disabled entries, ordered by price; reading may initialize project creation allowance metadata.
   * Calls `GET /api/v1/admin/plan-products` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  walletBillingAdminPlanProductsIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminPlanProductsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/plan-products` });
  }
  /**
   * Upsert a validated plan product, excluding reserved fitness tiers. Optional Modules product UUID is validated upstream; upstream unavailability returns 503/502 and inaccessible products 422. Returns HTTP 200.
   * Calls `PUT /api/v1/admin/plan-products` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminPlanProductsUpdatePut(data: T.WalletBillingAdminPlanProductsUpdatePutInput, options?: RequestOptions<T.WalletBillingAdminPlanProductsUpdatePutInput>) {
    return this.client.request<T.WalletBillingAdminPlanProductsUpdatePutResponse, T.WalletBillingAdminPlanProductsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/plan-products`, data: data });
  }
  /**
   * Soft-delete a nonfitness plan product by tier and set status zero. Missing tiers return 404; fitness tiers return 403. Returns raw status/message.
   * Calls `DELETE /api/v1/admin/plan-products/{tier}` through the shared IDP-aware Faiber client.
   * @param tier Backend path identifier `tier`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminPlanProductsDeleteDelete(tier: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminPlanProductsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/admin/plan-products/${encodeURIComponent(tier)}` });
  }
  /**
   * Read configured CPU/RAM/disk unit prices as exact decimal strings; missing configuration fails with 500.
   * Calls `GET /api/v1/admin/resource-unit-prices` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  sandboxBillingAdminPricesGet(options?: RequestOptions) {
    return this.client.request<T.SandboxBillingAdminPricesGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/resource-unit-prices` });
  }
  /**
   * Update nonnegative CPU/RAM/disk unit prices and currency; negative prices return 422.
   * Calls `PUT /api/v1/admin/resource-unit-prices` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  sandboxBillingAdminPricesUpdatePut(data: T.SandboxBillingAdminPricesUpdatePutInput, options?: RequestOptions<T.SandboxBillingAdminPricesUpdatePutInput>) {
    return this.client.request<T.SandboxBillingAdminPricesUpdatePutResponse, T.SandboxBillingAdminPricesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/resource-unit-prices`, data: data });
  }
  /**
   * Set or clear an exact monthly resource override for the supplied profile/project. Negative values return 422; absent allocation is initialized and bundle_id is cleared.
   * Calls `PUT /api/v1/admin/sandbox-projects/{profile_id}/{project}/pricing-override` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param project Backend path identifier `project`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  sandboxBillingAdminProjectPricingOverridePut(profileId: Identifier, project: Identifier, data: T.SandboxBillingAdminProjectPricingOverridePutInput, options?: RequestOptions<T.SandboxBillingAdminProjectPricingOverridePutInput>) {
    return this.client.request<T.SandboxBillingAdminProjectPricingOverridePutResponse, T.SandboxBillingAdminProjectPricingOverridePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/sandbox-projects/${encodeURIComponent(profileId)}/${encodeURIComponent(project)}/pricing-override`, data: data });
  }
  /**
   * Move project allocation and subscription billing rows from current_profile_id to financial_owner_user_id in a transaction; an existing target allocation is replaced. Equal identities return unchanged.
   * Calls `PUT /api/v1/admin/sandbox-projects/{project}/financial-owner` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  sandboxBillingAdminProjectFinancialOwnerPut(project: Identifier, data: T.SandboxBillingAdminProjectFinancialOwnerPutInput, options?: RequestOptions<T.SandboxBillingAdminProjectFinancialOwnerPutInput>) {
    return this.client.request<T.SandboxBillingAdminProjectFinancialOwnerPutResponse, T.SandboxBillingAdminProjectFinancialOwnerPutInput>({ ...options, method: "PUT", url: `/api/v1/admin/sandbox-projects/${encodeURIComponent(project)}/financial-owner`, data: data });
  }
  /**
   * Page all subscription rows newest first with optional project/profile filters and project/service/status search. Bracket pagination defaults to page 1 and size 20, clamped to 1–100.
   * Calls `GET /api/v1/admin/subscriptions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  walletBillingAdminSubscriptionsIndexGet(params?: T.WalletBillingAdminSubscriptionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminSubscriptionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/subscriptions`, params });
  }
  /**
   * Proxy product-owned gift list JSON with optional page/per_page/search (max 120 characters); annotate any item with can_copy. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp.
   * Calls `GET /api/v1/admin/trial-gifts/{product}` through the shared IDP-aware Faiber client.
   * @param product Backend path identifier `product`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read and asset:charge:read.
   */
  trialGiftsListGet(product: Identifier, params?: T.TrialGiftsListGetQuery, options?: RequestOptions) {
    return this.client.request<T.TrialGiftsListGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/trial-gifts/${encodeURIComponent(product)}`, params });
  }
  /**
   * Create a product-owned gift with nonnil stable request_id; require label up to 120 characters, active/inactive status, max_uses 1–1000000, RFC3339 expiry and object limits up to 2048 encoded bytes. Store token in the configured vault and return product JSON with can_copy. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp.
   * Calls `POST /api/v1/admin/trial-gifts/{product}` through the shared IDP-aware Faiber client.
   * @param product Backend path identifier `product`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update and asset:charge:update.
   */
  trialGiftsCreatePost(product: Identifier, data: T.TrialGiftsCreatePostInput, options?: RequestOptions<T.TrialGiftsCreatePostInput>) {
    return this.client.request<T.TrialGiftsCreatePostResponse, T.TrialGiftsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/admin/trial-gifts/${encodeURIComponent(product)}`, data: data });
  }
  /**
   * Proxy one product-owned gift JSON object and annotate can_copy based on vault availability and remaining uses. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp.
   * Calls `GET /api/v1/admin/trial-gifts/{product}/{id}` through the shared IDP-aware Faiber client.
   * @param product Backend path identifier `product`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read and asset:charge:read.
   */
  trialGiftsShowGet(product: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrialGiftsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/trial-gifts/${encodeURIComponent(product)}/${encodeURIComponent(id)}` });
  }
  /**
   * Update a product-owned gift with optional rotate_token and full required write fields; request_id is ignored on update. Return delegated product JSON annotated with can_copy. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp.
   * Calls `PUT /api/v1/admin/trial-gifts/{product}/{id}` through the shared IDP-aware Faiber client.
   * @param product Backend path identifier `product`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update and asset:charge:update.
   */
  trialGiftsUpdatePut(product: Identifier, id: Identifier, data: T.TrialGiftsUpdatePutInput, options?: RequestOptions<T.TrialGiftsUpdatePutInput>) {
    return this.client.request<T.TrialGiftsUpdatePutResponse, T.TrialGiftsUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/trial-gifts/${encodeURIComponent(product)}/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read an unused gift token from the configured vault; exhausted gift conflicts with 409, unavailable vault returns 503, and missing stored token returns 404. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp.
   * Calls `GET /api/v1/admin/trial-gifts/{product}/{id}/token` through the shared IDP-aware Faiber client.
   * @param product Backend path identifier `product`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update and asset:charge:update.
   */
  trialGiftsCopyTokenGet(product: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrialGiftsCopyTokenGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/trial-gifts/${encodeURIComponent(product)}/${encodeURIComponent(id)}/token` });
  }
  /**
   * List configured product gift adapters with available/can_manage flags. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp.
   * Calls `GET /api/v1/admin/trial-gifts/products` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read and asset:charge:read.
   */
  trialGiftsProductsGet(options?: RequestOptions) {
    return this.client.request<T.TrialGiftsProductsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/trial-gifts/products` });
  }
  /**
   * List user plans ordered by last update with camelCase profileId/expiresAt/daysRemaining and effective enabled flag; no pagination.
   * Calls `GET /api/v1/admin/user-plans` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  walletBillingAdminUserPlansIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminUserPlansIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/user-plans` });
  }
  /**
   * Delete plan rows for a profile, including when absent; returns raw status/message.
   * Calls `DELETE /api/v1/admin/user-plans/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminUserPlanDeleteDelete(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminUserPlanDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/admin/user-plans/${encodeURIComponent(profileId)}` });
  }
  /**
   * Set an enabled paid plan for a profile with days defaulting to 30 and restricted to 1–3650. Tier must name an active product and cannot be free; returns camelCase effective plan data.
   * Calls `PUT /api/v1/admin/user-plans/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminUserPlanUpdatePut(profileId: Identifier, data: T.WalletBillingAdminUserPlanUpdatePutInput, options?: RequestOptions<T.WalletBillingAdminUserPlanUpdatePutInput>) {
    return this.client.request<T.WalletBillingAdminUserPlanUpdatePutResponse, T.WalletBillingAdminUserPlanUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/user-plans/${encodeURIComponent(profileId)}`, data: data });
  }
  /**
   * Disable a profile plan by setting free, clearing expiry and zeroing plan points; create a free row if absent. Returns camelCase effective plan data.
   * Calls `PUT /api/v1/admin/user-plans/{profile_id}/disable` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminUserPlanDisablePut(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminUserPlanDisablePutResponse>({ ...options, method: "PUT", url: `/api/v1/admin/user-plans/${encodeURIComponent(profileId)}/disable` });
  }
  /**
   * Read or initialize one nonnil profile wallet and recent ledger entries. limit defaults to 25 and clamps to 1–100; all amounts are exact decimal strings.
   * Calls `GET /api/v1/admin/users/{profile_id}/wallet` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  walletBillingAdminUserWalletShowGet(profileId: Identifier, params?: T.WalletBillingAdminUserWalletShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletBillingAdminUserWalletShowGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/users/${encodeURIComponent(profileId)}/wallet`, params });
  }
  /**
   * Credit or debit a nonnil profile wallet with positive amount and trimmed 1–200 character reason; record current actor as ledger reference. Invalid direction returns 422 and insufficient debit balance 402.
   * Calls `POST /api/v1/admin/users/{profile_id}/wallet/adjustments` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  walletBillingAdminUserWalletAdjustPost(profileId: Identifier, data: T.WalletBillingAdminUserWalletAdjustPostInput, options?: RequestOptions<T.WalletBillingAdminUserWalletAdjustPostInput>) {
    return this.client.request<T.WalletBillingAdminUserWalletAdjustPostResponse, T.WalletBillingAdminUserWalletAdjustPostInput>({ ...options, method: "POST", url: `/api/v1/admin/users/${encodeURIComponent(profileId)}/wallet/adjustments`, data: data });
  }
  /**
   * Reserve a positive IRR amount for the current profile using an external_id. Identical owner/kind/model/amount/currency replay returns the same reservation; conflicting reuse returns 409.
   * Calls `POST /api/v1/ai-reservations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aiBillingReservePost(data: T.AiBillingReservePostInput, options?: RequestOptions<T.AiBillingReservePostInput>) {
    return this.client.request<T.AiBillingReservePostResponse, T.AiBillingReservePostInput>({ ...options, method: "POST", url: `/api/v1/ai-reservations`, data: data });
  }
  /**
   * Release an owner-scoped reserved amount back to the wallet. Releasing twice is idempotent; settled reservations conflict with 409; missing/foreign IDs return 404.
   * Calls `POST /api/v1/ai-reservations/{id}/release` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aiBillingReleasePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AiBillingReleasePostResponse>({ ...options, method: "POST", url: `/api/v1/ai-reservations/${encodeURIComponent(id)}/release` });
  }
  /**
   * Settle an owner-scoped reservation with a nonnegative actual IRR amount. Equal settlement replay succeeds; changed amount, currency or released state conflicts. Missing/foreign reservation returns 404.
   * Calls `POST /api/v1/ai-reservations/{id}/settle` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  aiBillingSettlePost(id: Identifier, data: T.AiBillingSettlePostInput, options?: RequestOptions<T.AiBillingSettlePostInput>) {
    return this.client.request<T.AiBillingSettlePostResponse, T.AiBillingSettlePostInput>({ ...options, method: "POST", url: `/api/v1/ai-reservations/${encodeURIComponent(id)}/settle`, data: data });
  }
  /**
   * Page nondeleted asset definitions ordered by name. Optional asset_type is matched case-insensitively; an unrecognized type applies no type filter. Search matches name/title/description.
   * Calls `GET /api/v1/assets` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:asset:read.
   */
  catalogAssetsIndexGet(params?: T.CatalogAssetsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.CatalogAssetsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/assets`, params });
  }
  /**
   * Create an asset with required name and case-sensitive asset_type enum; validate badge metadata when present. subject_type defaults to profile, max_quantity to zero, status to 1. Returns HTTP 200.
   * Calls `POST /api/v1/assets` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:asset:create.
   */
  catalogAssetsCreatePost(data: T.CatalogAssetsCreatePostInput, options?: RequestOptions<T.CatalogAssetsCreatePostInput>) {
    return this.client.request<T.CatalogAssetsCreatePostResponse, T.CatalogAssetsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/assets`, data: data });
  }
  /**
   * Soft-delete an asset by UUID; returns HTTP 200 with data:null, or 404 when absent.
   * Calls `DELETE /api/v1/assets/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:asset:delete.
   */
  catalogAssetsDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CatalogAssetsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/assets/${encodeURIComponent(id)}` });
  }
  /**
   * Read one nondeleted asset definition by UUID; missing or deleted assets return 404.
   * Calls `GET /api/v1/assets/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:asset:read.
   */
  catalogAssetsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CatalogAssetsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/assets/${encodeURIComponent(id)}` });
  }
  /**
   * Patch an asset without changing asset_type; null optional values preserve existing data. Badge metadata is validated; missing asset returns 404.
   * Calls `PATCH /api/v1/assets/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:asset:update.
   */
  catalogAssetsUpdatePatch(id: Identifier, data: T.CatalogAssetsUpdatePatchInput, options?: RequestOptions<T.CatalogAssetsUpdatePatchInput>) {
    return this.client.request<T.CatalogAssetsUpdatePatchResponse, T.CatalogAssetsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/assets/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read bank_value_sum as an exact decimal string; default Coin settings may be initialized when absent.
   * Calls `GET /api/v1/bank-summary` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:bank_transaction:read.
   */
  bankBankSummaryShowGet(options?: RequestOptions) {
    return this.client.request<T.BankBankSummaryShowGetResponse>({ ...options, method: "GET", url: `/api/v1/bank-summary` });
  }
  /**
   * Page nondeleted bank transactions newest first, optionally filtering profile_id/type and searching profile UUID or amount; include profile deposit totals and best-effort profile names.
   * Calls `GET /api/v1/bank-transactions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:bank_transaction:read.
   */
  bankBankTransactionsIndexGet(params?: T.BankBankTransactionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.BankBankTransactionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/bank-transactions`, params });
  }
  /**
   * Record a positive legacy bank deposit for the supplied profile UUID; omitted bank_id selects the default bank. Scoped economy rejects this path with 422 and requires verified broker funding. Returns HTTP 200.
   * Calls `POST /api/v1/bank-transactions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:bank_transaction:create.
   */
  bankBankTransactionsCreatePost(data: T.BankBankTransactionsCreatePostInput, options?: RequestOptions<T.BankBankTransactionsCreatePostInput>) {
    return this.client.request<T.BankBankTransactionsCreatePostResponse, T.BankBankTransactionsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/bank-transactions`, data: data });
  }
  /**
   * Read Charge mapping rules; initialize empty first-match defaults if no settings exist. Conditions are tagged objects, and decimal values serialize as strings.
   * Calls `GET /api/v1/charge/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  chargeChargeSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.ChargeChargeSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/charge/settings` });
  }
  /**
   * Replace Charge mapping rules and optionally status; conditions require their type discriminator and variant-specific fields. Returns persisted rules with defaults materialized.
   * Calls `PATCH /api/v1/charge/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  chargeChargeSettingsUpdatePatch(data: T.ChargeChargeSettingsUpdatePatchInput, options?: RequestOptions<T.ChargeChargeSettingsUpdatePatchInput>) {
    return this.client.request<T.ChargeChargeSettingsUpdatePatchResponse, T.ChargeChargeSettingsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/charge/settings`, data: data });
  }
  /**
   * Read legacy Coin counters and derived unit value; initialize default settings if absent.
   * Calls `GET /api/v1/coin-settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:coin_settings:read.
   */
  bankCoinSettingsShowGet(options?: RequestOptions) {
    return this.client.request<T.BankCoinSettingsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/coin-settings` });
  }
  /**
   * Patch legacy total supply/allocation percentage; configured scoped economy rejects changes with 409 and requires versioned economy policy instead.
   * Calls `PATCH /api/v1/coin-settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:coin_settings:update.
   */
  bankCoinSettingsUpdatePatch(data: T.BankCoinSettingsUpdatePatchInput, options?: RequestOptions<T.BankCoinSettingsUpdatePatchInput>) {
    return this.client.request<T.BankCoinSettingsUpdatePatchResponse, T.BankCoinSettingsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/coin-settings`, data: data });
  }
  /**
   * Read monthly global legacy Coin, bank and action totals. month uses YYYY-MM and defaults to server local current month; invalid month returns 400.
   * Calls `GET /api/v1/dashboard` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:dashboard:read.
   */
  dashboardDashboardShowGet(params?: T.DashboardDashboardShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.DashboardDashboardShowGetResponse>({ ...options, method: "GET", url: `/api/v1/dashboard`, params });
  }
  /**
   * Read literal permission flags for policy updates, reward review, rule updates and rule creation. The endpoint declares admin:wallet:read_own with admin:coin_settings:read as an alias.
   * Calls `GET /api/v1/economy/capabilities` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  economyCapabilitiesGet(options?: RequestOptions) {
    return this.client.request<T.EconomyCapabilitiesGetResponse>({ ...options, method: "GET", url: `/api/v1/economy/capabilities` });
  }
  /**
   * Execute only audited operator reward or scope_close commands. Reward actor_id is overwritten from current identity and a nonempty reason is required; automatic/broker authority commands are rejected. Stable event_id retries must carry the same command.
   * Calls `POST /api/v1/economy/commands` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:action:complete.
   */
  economyCommandPost(data: T.EconomyCommandPostInput, options?: RequestOptions<T.EconomyCommandPostInput>) {
    return this.client.request<T.EconomyCommandPostResponse, T.EconomyCommandPostInput>({ ...options, method: "POST", url: `/api/v1/economy/commands`, data: data });
  }
  /**
   * Read immutable raw command/results and state changes with exclusive after/before sequence bounds and optional descending order. limit defaults to 100 and caps at 500.
   * Calls `GET /api/v1/economy/journal` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:user_asset_log:read.
   */
  economyJournalGet(params?: T.EconomyJournalGetQuery, options?: RequestOptions) {
    return this.client.request<T.EconomyJournalGetResponse>({ ...options, method: "GET", url: `/api/v1/economy/journal`, params });
  }
  /**
   * Read role/period XP rankings ordered by XP then object key. role and period_id cannot contain colons; limit defaults to 100 and caps at 500. Replay rewards do not change live rankings.
   * Calls `GET /api/v1/economy/leaderboards` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  economyLeaderboardsGet(params?: T.EconomyLeaderboardsGetQuery, options?: RequestOptions) {
    return this.client.request<T.EconomyLeaderboardsGetResponse>({ ...options, method: "GET", url: `/api/v1/economy/leaderboards`, params });
  }
  /**
   * Read current profile wallet, allocations, entitlements, sessions and purchases. Session refill is a read projection; it does not persist consumption or a journal entry.
   * Calls `GET /api/v1/economy/me` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  economyMeGet(options?: RequestOptions) {
    return this.client.request<T.EconomyMeGetResponse>({ ...options, method: "GET", url: `/api/v1/economy/me` });
  }
  /**
   * Read immutable journal changes belonging to the current profile using exclusive after and limit. Other profiles and original commands/results are omitted; before and descending are ignored by this handler.
   * Calls `GET /api/v1/economy/me/history` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  economyMyHistoryGet(params?: T.EconomyMyHistoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.EconomyMyHistoryGetResponse>({ ...options, method: "GET", url: `/api/v1/economy/me/history`, params });
  }
  /**
   * Purchase configured catalog credit with Coin, money or crafting. Reuse event_id for retries; money returns an expiring quote and provider handoff appears on the purchase projection.
   * Calls `POST /api/v1/economy/me/purchases` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  economyPurchasePost(data: T.EconomyPurchasePostInput, options?: RequestOptions<T.EconomyPurchasePostInput>) {
    return this.client.request<T.EconomyPurchasePostResponse, T.EconomyPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/economy/me/purchases`, data: data });
  }
  /**
   * Simulate a reward for the current profile and roll back every mutation. Input verified evidence is not accepted; completion remains subject to the owning producer/operator authority rules.
   * Calls `POST /api/v1/economy/me/rewards/preview` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  economyPreviewPost(data: T.EconomyPreviewPostInput, options?: RequestOptions<T.EconomyPreviewPostInput>) {
    return this.client.request<T.EconomyPreviewPostResponse, T.EconomyPreviewPostInput>({ ...options, method: "POST", url: `/api/v1/economy/me/rewards/preview`, data: data });
  }
  /**
   * Apply only available credit that fits below a current profile session Charge maximum; preserve excess credit. Reuse event_id for retries.
   * Calls `POST /api/v1/economy/me/sessions/{session_id}/credit` through the shared IDP-aware Faiber client.
   * @param sessionId Backend path identifier `session_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  economyCreditPost(sessionId: Identifier, data: T.EconomyCreditPostInput, options?: RequestOptions<T.EconomyCreditPostInput>) {
    return this.client.request<T.EconomyCreditPostResponse, T.EconomyCreditPostInput>({ ...options, method: "POST", url: `/api/v1/economy/me/sessions/${encodeURIComponent(sessionId)}/credit`, data: data });
  }
  /**
   * Read supported economy object projections by kind, optional exact object_key/profile_id/scope_id and offset. limit defaults to 100 and caps at 500; configuration_projection exposes producer acknowledgement revisions.
   * Calls `GET /api/v1/economy/objects/{kind}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:bank_transaction:read.
   */
  economyObjectsGet(kind: Identifier, params?: T.EconomyObjectsGetQuery, options?: RequestOptions) {
    return this.client.request<T.EconomyObjectsGetResponse>({ ...options, method: "GET", url: `/api/v1/economy/objects/${encodeURIComponent(kind)}`, params });
  }
  /**
   * Read current economy policy or null before configuration, including latest configuration_revision when present. Decimal quantities remain exact strings.
   * Calls `GET /api/v1/economy/policy` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:coin_settings:read.
   */
  economyPolicyGetGet(options?: RequestOptions) {
    return this.client.request<T.EconomyPolicyGetGetResponse>({ ...options, method: "GET", url: `/api/v1/economy/policy` });
  }
  /**
   * Validate and replace economy policy with a higher version under the financial lock. Launch, initial supply, currency and coin asset remain immutable; referenced assets, funding shares and evidence bindings are validated and published transactionally.
   * Calls `PUT /api/v1/economy/policy` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:coin_settings:update.
   */
  economyPolicyPutPut(data: T.EconomyPolicyPutPutInput, options?: RequestOptions<T.EconomyPolicyPutPutInput>) {
    return this.client.request<T.EconomyPolicyPutPutResponse, T.EconomyPolicyPutPutInput>({ ...options, method: "PUT", url: `/api/v1/economy/policy`, data: data });
  }
  /**
   * Read configured currency, live Coin unit value and bank counters; unconfigured economy returns 422.
   * Calls `GET /api/v1/economy/valuation` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  economyValuationGet(options?: RequestOptions) {
    return this.client.request<T.EconomyValuationGetResponse>({ ...options, method: "GET", url: `/api/v1/economy/valuation` });
  }
  /**
   * Read one escrow using the server-only x-game-service-token header. Returns {data:receipt} with camelCase decimal strings and no status/message fields; absent match returns 404.
   * Calls `GET /api/v1/games/escrows/{match_id}` through the shared IDP-aware Faiber client.
   * @param matchId Backend path identifier `match_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  gameEscrowShowGet(matchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.GameEscrowShowGetResponse>({ ...options, method: "GET", url: `/api/v1/games/escrows/${encodeURIComponent(matchId)}` });
  }
  /**
   * Refund a funded legacy escrow using server-only x-game-service-token; refunded replay succeeds. Other states and scoped economy conflict with 409. Returns {data:receipt}.
   * Calls `POST /api/v1/games/escrows/{match_id}/refund` through the shared IDP-aware Faiber client.
   * @param matchId Backend path identifier `match_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  gameEscrowRefundPost(matchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.GameEscrowRefundPostResponse>({ ...options, method: "POST", url: `/api/v1/games/escrows/${encodeURIComponent(matchId)}/refund` });
  }
  /**
   * Settle a funded legacy escrow using server-only x-game-service-token. winnerIds must be unique nonempty participants; burnBasisPoints defaults to 1000 and allows 0–10000. Settled replay succeeds; incompatible state or scoped economy returns 409.
   * Calls `POST /api/v1/games/escrows/{match_id}/settle` through the shared IDP-aware Faiber client.
   * @param matchId Backend path identifier `match_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  gameEscrowSettlePost(matchId: Identifier, data: T.GameEscrowSettlePostInput, options?: RequestOptions<T.GameEscrowSettlePostInput>) {
    return this.client.request<T.GameEscrowSettlePostResponse, T.GameEscrowSettlePostInput>({ ...options, method: "POST", url: `/api/v1/games/escrows/${encodeURIComponent(matchId)}/settle`, data: data });
  }
  /**
   * Fund a legacy escrow using server-only x-game-service-token. Require two or more unique positive entries; identical match/entries replay succeeds, changed entries conflict. Scoped economy rejects this path with 409. Returns {data:receipt}.
   * Calls `POST /api/v1/games/escrows/fund` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  gameEscrowFundPost(data: T.GameEscrowFundPostInput, options?: RequestOptions<T.GameEscrowFundPostInput>) {
    return this.client.request<T.GameEscrowFundPostResponse, T.GameEscrowFundPostInput>({ ...options, method: "POST", url: `/api/v1/games/escrows/fund`, data: data });
  }
  /**
   * Read concrete direct-broker metadata and Rust SDK integration snippets for published legacy events.
   * Calls `GET /api/v1/integration/docs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:integration:read.
   */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /**
   * Read concrete Flow queue and event metadata supplied by the Cargo.lock-pinned infera-flow-sdk; no handler-local ACL is enforced.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Read configured RabbitMQ queue and concrete event/payload-field metadata; broker_url_hint is documentation rather than a live credential.
   * Calls `GET /api/v1/integration/rabbitmq` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:integration:read.
   */
  integrationRabbitmqIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationRabbitmqIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/rabbitmq` });
  }
  /**
   * Publish an immutable fitness product using server-only FITNESS_PROFILE_SERVICE_TOKEN as Bearer authorization. Require fitness: tier, gym metadata, IRR price 1000–1000000000, zero points/storage and no linked product. Changed existing versions return 409.
   * Calls `PUT /api/v1/internal/fitness/products` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only FITNESS_PROFILE_SERVICE_TOKEN bearer credential.
   */
  fitnessPublishPut(data: T.FitnessPublishPutInput, options?: RequestOptions<T.FitnessPublishPutInput>) {
    return this.client.request<T.FitnessPublishPutResponse, T.FitnessPublishPutInput>({ ...options, method: "PUT", url: `/api/v1/internal/fitness/products`, data: data });
  }
  /**
   * Read Coin/Gem rankings and current profile neighbors. profile_ids is a comma-separated cohort; invalid UUIDs are ignored and the current profile always participates. top/neighbors default to 3 and clamp to 1–10.
   * Calls `GET /api/v1/leaderboard` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  leaderboardLeaderboardIndexGet(params?: T.LeaderboardLeaderboardIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.LeaderboardLeaderboardIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/leaderboard`, params });
  }
  /**
   * Page user plan rows newest updated first with tier/profile UUID search. This list returns stored tiers; the single-profile read separately resolves expired tiers.
   * Calls `GET /api/v1/llm-pricing/plans` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  llmUsagePlansIndexGet(params?: T.LlmUsagePlansIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.LlmUsagePlansIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/llm-pricing/plans`, params });
  }
  /**
   * Delete the plan row for a profile, including when absent; returns HTTP 200 with data:null.
   * Calls `DELETE /api/v1/llm-pricing/plans/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  llmUsagePlanDeleteDelete(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LlmUsagePlanDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/llm-pricing/plans/${encodeURIComponent(profileId)}` });
  }
  /**
   * Read a profile plan with expired/missing plans projected as free; a missing row returns a synthetic free response with zero points rather than 404.
   * Calls `GET /api/v1/llm-pricing/plans/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:read.
   */
  llmUsagePlanShowGet(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LlmUsagePlanShowGetResponse>({ ...options, method: "GET", url: `/api/v1/llm-pricing/plans/${encodeURIComponent(profileId)}` });
  }
  /**
   * Set a profile plan tier to free/pro/max/enterprise; invalid tiers return 400. Paid tiers expire after 30 days; free clears expiry. Returns HTTP 200.
   * Calls `PUT /api/v1/llm-pricing/plans/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:charge:update.
   */
  llmUsagePlanSetPut(profileId: Identifier, data: T.LlmUsagePlanSetPutInput, options?: RequestOptions<T.LlmUsagePlanSetPutInput>) {
    return this.client.request<T.LlmUsagePlanSetPutResponse, T.LlmUsagePlanSetPutInput>({ ...options, method: "PUT", url: `/api/v1/llm-pricing/plans/${encodeURIComponent(profileId)}`, data: data });
  }
  /**
   * Page the current profile asset history with bracket pagination, optional asset kind/name and earned_only. Aliases wallet:read_own and customer:wallet:read_own are declared alongside admin:wallet:read_own.
   * Calls `GET /api/v1/me/asset-history` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  walletMeAssetHistoryGet(params?: T.WalletMeAssetHistoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeAssetHistoryGetResponse>({ ...options, method: "GET", url: `/api/v1/me/asset-history`, params });
  }
  /**
   * Read and enrich the current profile wallet: exact Coin/XP/Charge/Gem balances, positive badges and optional Charge/rank projections. A nonnil profile identity is required.
   * Calls `GET /api/v1/me/assets` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletMeAssetsShowGet(options?: RequestOptions) {
    return this.client.request<T.WalletMeAssetsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/me/assets` });
  }
  /**
   * Read badge definitions and balances scoped to the current profile and optional subject_type/subject_id; absent subject_type defaults to profile. A nonnil profile identity is required.
   * Calls `GET /api/v1/me/badges` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletMeBadgesShowGet(params?: T.WalletMeBadgesShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeBadgesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/me/badges`, params });
  }
  /**
   * Read the current profile badge level requirements and progress for an optional subject scope; absent subject_type defaults to profile.
   * Calls `GET /api/v1/me/badges/todos` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  walletMeBadgeTodosShowGet(params?: T.WalletMeBadgeTodosShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeBadgeTodosShowGetResponse>({ ...options, method: "GET", url: `/api/v1/me/badges/todos`, params });
  }
  /**
   * Read current profile metered LLM buckets and totals. range accepts 24h/week/month/year; absent or unrecognized values become 24h. Decimal points remain strings.
   * Calls `GET /api/v1/me/llm-usage` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  walletMeLlmUsageGet(params?: T.WalletMeLlmUsageGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeLlmUsageGetResponse>({ ...options, method: "GET", url: `/api/v1/me/llm-usage`, params });
  }
  /**
   * Page current profile ledger entries newest first, with reference/date filters and optional completed-local-day usage rollup. page/page_size default to 1/20, size clamps to 1–100; timezone clamps to ±840 minutes. Rollup omits the open local day.
   * Calls `GET /api/v1/me/transactions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletMeTransactionsGet(params?: T.WalletMeTransactionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeTransactionsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/transactions`, params });
  }
  /**
   * Read a single ledger entry by UUID scoped to the current profile; a missing or foreign entry returns 404.
   * Calls `GET /api/v1/me/transactions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  walletMeTransactionShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletMeTransactionShowGetResponse>({ ...options, method: "GET", url: `/api/v1/me/transactions/${encodeURIComponent(id)}` });
  }
  /**
   * Page current profile metered debit totals by local day, newest first, with inclusive date bounds and timezone offset. Page defaults to 1/20, size clamps to 1–100; values use camelCase and exact decimal strings.
   * Calls `GET /api/v1/me/transactions/days` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  walletMeTransactionDaysGet(params?: T.WalletMeTransactionDaysGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeTransactionDaysGetResponse>({ ...options, method: "GET", url: `/api/v1/me/transactions/days`, params });
  }
  /**
   * Read current profile resource and LLM usage for one local day; invalid date returns 400. Ledger totals are authoritative and may differ from fine-grained record sums due to decimal precision.
   * Calls `GET /api/v1/me/transactions/days/{day}` through the shared IDP-aware Faiber client.
   * @param day Backend path identifier `day`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:wallet:read_own.
   */
  walletMeTransactionDayGet(day: Identifier, params?: T.WalletMeTransactionDayGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletMeTransactionDayGetResponse>({ ...options, method: "GET", url: `/api/v1/me/transactions/days/${encodeURIComponent(day)}`, params });
  }
  /**
   * List active nondeleted plan products ordered by price. Reading may initialize missing project_creation_attempts_monthly metadata; monetary values are decimal strings.
   * Calls `GET /api/v1/plans` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingPlansIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingPlansIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/plans` });
  }
  /**
   * Read the current profile effective plan; absent or expired plans project as free. Paid plan renewal opens during the final seven days. Response keys use camelCase.
   * Calls `GET /api/v1/plans/current` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingCurrentPlanGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingCurrentPlanGetResponse>({ ...options, method: "GET", url: `/api/v1/plans/current` });
  }
  /**
   * Start a configured plan checkout; fitness tiers require their owning checkout. Same-tier renewal before the final seven days conflicts; eligible Pro-to-Max upgrade uses the configured price difference.
   * Calls `POST /api/v1/plans/purchase` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingPlansPurchasePost(data: T.WalletBillingPlansPurchasePostInput, options?: RequestOptions<T.WalletBillingPlansPurchasePostInput>) {
    return this.client.request<T.WalletBillingPlansPurchasePostResponse, T.WalletBillingPlansPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/plans/purchase`, data: data });
  }
  /**
   * Read configured built-in points packs s/m/l with decimal-string price and points; no pagination.
   * Calls `GET /api/v1/points-packs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingPointsPacksIndexGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingPointsPacksIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/points-packs` });
  }
  /**
   * Start a points checkout using a nonempty pack_id or whole custom points between 10000 and 100000000. pack_id takes precedence; missing selection returns 422.
   * Calls `POST /api/v1/points-packs/purchase` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingPointsPacksPurchasePost(data: T.WalletBillingPointsPacksPurchasePostInput, options?: RequestOptions<T.WalletBillingPointsPacksPurchasePostInput>) {
    return this.client.request<T.WalletBillingPointsPacksPurchasePostResponse, T.WalletBillingPointsPacksPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/points-packs/purchase`, data: data });
  }
  /**
   * Page nondeleted ranks ordered by min_xp; search matches name/title/description. Pagination defaults to page 1, size 20, clamped to 1–100.
   * Calls `GET /api/v1/ranks` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:rank:read.
   */
  rankRanksIndexGet(params?: T.RankRanksIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RankRanksIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/ranks`, params });
  }
  /**
   * Create an XP rank with required name and min_xp. A negative threshold returns 400 and a duplicate active threshold returns 409; success returns HTTP 200.
   * Calls `POST /api/v1/ranks` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:rank:create.
   */
  rankRanksCreatePost(data: T.RankRanksCreatePostInput, options?: RequestOptions<T.RankRanksCreatePostInput>) {
    return this.client.request<T.RankRanksCreatePostResponse, T.RankRanksCreatePostInput>({ ...options, method: "POST", url: `/api/v1/ranks`, data: data });
  }
  /**
   * Soft-delete one rank; returns HTTP 200 with data:null, or 404 when absent.
   * Calls `DELETE /api/v1/ranks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:rank:delete.
   */
  rankRanksDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RankRanksDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/ranks/${encodeURIComponent(id)}` });
  }
  /**
   * Read one nondeleted XP rank by UUID; absent ranks return 404.
   * Calls `GET /api/v1/ranks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:rank:read.
   */
  rankRanksShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RankRanksShowGetResponse>({ ...options, method: "GET", url: `/api/v1/ranks/${encodeURIComponent(id)}` });
  }
  /**
   * Patch an XP rank; null fields preserve existing values. Changed min_xp must be nonnegative and unique among nondeleted ranks; missing rank returns 404.
   * Calls `PATCH /api/v1/ranks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:rank:update.
   */
  rankRanksUpdatePatch(id: Identifier, data: T.RankRanksUpdatePatchInput, options?: RequestOptions<T.RankRanksUpdatePatchInput>) {
    return this.client.request<T.RankRanksUpdatePatchResponse, T.RankRanksUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/ranks/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Permanently delete current-profile sandbox data upstream and preserve the local billing/configuration record in purged state. Upstream failure returns 502; returns a raw status/message object.
   * Calls `DELETE /api/v1/sandbox-resources/{project}` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingPurgeDelete(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingPurgeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}` });
  }
  /**
   * Read an existing current-profile project allocation and effective pricing; absent allocation returns 404 and is not created.
   * Calls `GET /api/v1/sandbox-resources/{project}` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingShowGet(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingShowGetResponse>({ ...options, method: "GET", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}` });
  }
  /**
   * Apply validated current-profile resources through the sandbox service and persist the allocation. Optional max_hourly_amount and accepted_currency detect quote changes with 409. app_storage_mb is ignored and persisted as zero; upstream failure returns 502.
   * Calls `PUT /api/v1/sandbox-resources/{project}` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingUpdatePut(project: Identifier, data: T.SandboxBillingUpdatePutInput, options?: RequestOptions<T.SandboxBillingUpdatePutInput>) {
    return this.client.request<T.SandboxBillingUpdatePutResponse, T.SandboxBillingUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}`, data: data });
  }
  /**
   * Pause a current-profile sandbox and schedule seven-day retention; absent allocation may be initialized. The local state is saved before the upstream pause call; upstream failure returns 502.
   * Calls `POST /api/v1/sandbox-resources/{project}/pause` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingPausePost(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingPausePostResponse>({ ...options, method: "POST", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}/pause` });
  }
  /**
   * Read existing current-profile project effective pricing without allocation creation; missing project returns 404. Monetary fields are exact decimal strings.
   * Calls `GET /api/v1/sandbox-resources/{project}/pricing` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingShowPricingGet(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingShowPricingGetResponse>({ ...options, method: "GET", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}/pricing` });
  }
  /**
   * Resume a current-profile sandbox after checking one hourly charge against the wallet; insufficient funds returns 402 and upstream failure 502. Successful resume clears retention and resets the charging clock.
   * Calls `POST /api/v1/sandbox-resources/{project}/resume` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sandboxBillingResumePost(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.SandboxBillingResumePostResponse>({ ...options, method: "POST", url: `/api/v1/sandbox-resources/${encodeURIComponent(project)}/resume` });
  }
  /**
   * Validate and quote resources without allocation or wallet mutation. Return decimal CPU/RAM/disk/total/monthly values and all defaulted allocation fields. Bundles require exact sizes; advanced volumes must be at least 64 MiB and sum to database storage.
   * Calls `POST /api/v1/sandbox-resources/quote` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated user.
   */
  sandboxBillingQuoteResourcesPost(data: T.SandboxBillingQuoteResourcesPostInput, options?: RequestOptions<T.SandboxBillingQuoteResourcesPostInput>) {
    return this.client.request<T.SandboxBillingQuoteResourcesPostResponse, T.SandboxBillingQuoteResourcesPostInput>({ ...options, method: "POST", url: `/api/v1/sandbox-resources/quote`, data: data });
  }
  /**
   * List current-profile subscriptions with optional exact project filter; returns {data:{subscriptions:[...]}} without pagination.
   * Calls `GET /api/v1/subscriptions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingSubscriptionsIndexGet(params?: T.WalletBillingSubscriptionsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WalletBillingSubscriptionsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/subscriptions`, params });
  }
  /**
   * Cancel an owned subscription and clear next_charge_at. Missing IDs return 404 and foreign IDs 403; returns raw status/message.
   * Calls `POST /api/v1/subscriptions/{id}/cancel` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingSubscriptionsCancelPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingSubscriptionsCancelPostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(id)}/cancel` });
  }
  /**
   * Permanently delete an owned project/service upstream and remove local subscription/retention rows. Upstream failure returns 503; local cleanup errors are ignored. Returns raw status/message.
   * Calls `DELETE /api/v1/subscriptions/{project}/{service}/data` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param service Backend path identifier `service`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceLifecycleDeletePermanentlyDelete(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecycleDeletePermanentlyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/data` });
  }
  /**
   * Suspend a current-profile project/service subscription and record paused state; no purge deadline is set. Upstream scale-to-zero failure is ignored. Returns the raw lifecycle object.
   * Calls `POST /api/v1/subscriptions/{project}/{service}/pause` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param service Backend path identifier `service`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceLifecyclePausePost(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecyclePausePostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/pause` });
  }
  /**
   * Suspend an owned project/service subscription and schedule permanent deletion after seven days; upstream scale-to-zero failure is ignored. Returns the raw lifecycle object.
   * Calls `POST /api/v1/subscriptions/{project}/{service}/remove` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param service Backend path identifier `service`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceLifecycleRemovePost(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecycleRemovePostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/remove` });
  }
  /**
   * Resume an owned project/service subscription after wallet and upstream checks. Insufficient funds returns 402; upstream failure returns 503. Returns the raw lifecycle object.
   * Calls `POST /api/v1/subscriptions/{project}/{service}/resume` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param service Backend path identifier `service`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceLifecycleResumePost(project: Identifier, service: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceLifecycleResumePostResponse>({ ...options, method: "POST", url: `/api/v1/subscriptions/${encodeURIComponent(project)}/${encodeURIComponent(service)}/resume` });
  }
  /**
   * Start an external-payment deployment subscription purchase for nonempty service/period items. Period accepts hourly/monthly/annual; fetch pricing, create pending subscription rows and return payment handoff.
   * Calls `POST /api/v1/subscriptions/purchase` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingSubscriptionsPurchasePost(data: T.WalletBillingSubscriptionsPurchasePostInput, options?: RequestOptions<T.WalletBillingSubscriptionsPurchasePostInput>) {
    return this.client.request<T.WalletBillingSubscriptionsPurchasePostResponse, T.WalletBillingSubscriptionsPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/subscriptions/purchase`, data: data });
  }
  /**
   * Page nondeleted action logs newest first, filtering profile/action and inclusive from/to timestamps. Search joins action and profile data; asset filters and earned_only are ignored by this handler.
   * Calls `GET /api/v1/user-action-logs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:user_action_log:read.
   */
  logsUserActionLogsIndexGet(params?: T.LogsUserActionLogsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.LogsUserActionLogsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/user-action-logs`, params });
  }
  /**
   * Page nondeleted asset logs newest first, filtering profile/action/asset identifiers, inclusive timestamps and optional positive earned quantities. Search joins action, asset and profile data.
   * Calls `GET /api/v1/user-asset-logs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:user_asset_log:read.
   */
  logsUserAssetLogsIndexGet(params?: T.LogsUserAssetLogsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.LogsUserAssetLogsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/user-asset-logs`, params });
  }
  /**
   * Read or initialize the current nonnil profile billing wallet; returns exact decimal balance and currency.
   * Calls `GET /api/v1/wallet` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingWalletShowGet(options?: RequestOptions) {
    return this.client.request<T.WalletBillingWalletShowGetResponse>({ ...options, method: "GET", url: `/api/v1/wallet` });
  }
  /**
   * Read an owner-scoped wallet purchase receipt. Verified-checkout mode may refresh pending/failed provider state and apply a verified result; missing or foreign IDs return 404.
   * Calls `GET /api/v1/wallet/purchases/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated purchase owner.
   */
  walletBillingWalletPurchaseShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WalletBillingWalletPurchaseShowGetResponse>({ ...options, method: "GET", url: `/api/v1/wallet/purchases/${encodeURIComponent(id)}` });
  }
  /**
   * Atomically debit the current wallet and activate subscriptions using nonnil request_id, exact currency and max_amount. Reject duplicate service items/invalid periods, changed intents or prices with 409 and insufficient funds with 402; replay returns the committed fulfilled receipt.
   * Calls `POST /api/v1/wallet/subscriptions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated wallet owner.
   */
  walletBillingWalletSubscriptionsPost(data: T.WalletBillingWalletSubscriptionsPostInput, options?: RequestOptions<T.WalletBillingWalletSubscriptionsPostInput>) {
    return this.client.request<T.WalletBillingWalletSubscriptionsPostResponse, T.WalletBillingWalletSubscriptionsPostInput>({ ...options, method: "POST", url: `/api/v1/wallet/subscriptions`, data: data });
  }
  /**
   * Start a positive wallet top-up. Reuse request_id for account-scoped retries; mismatched amount/currency/owner or completed checkout conflicts with 409. Returns purchase_id/payment_url; payment initiation failure returns 502.
   * Calls `POST /api/v1/wallet/topup` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  walletBillingWalletTopupPost(data: T.WalletBillingWalletTopupPostInput, options?: RequestOptions<T.WalletBillingWalletTopupPostInput>) {
    return this.client.request<T.WalletBillingWalletTopupPostResponse, T.WalletBillingWalletTopupPostInput>({ ...options, method: "POST", url: `/api/v1/wallet/topup`, data: data });
  }
  /**
   * Read process liveness and the static service version; this endpoint does not probe database or broker readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerHealthGet(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetResponse>({ ...options, method: "GET", url: `/health` });
  }
}
