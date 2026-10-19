import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class SocialOperations extends ServiceApi {
  /**
   * Performs the import modules operation for the api capability.
   * Calls `POST /api/v1/admin/import/modules` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:admin.
   */
  apiImportModulesPost(data: T.ApiImportModulesPostInput, options?: RequestOptions<T.ApiImportModulesPostInput>) {
    return this.client.request<T.ApiImportModulesPostResponse, T.ApiImportModulesPostInput>({ ...options, method: "POST", url: `/api/v1/admin/import/modules`, data: data });
  }
  /**
   * Page actors by latest post time; q optionally filters an actor UUID. Invalid q is currently ignored; meta.total is current-page length.
   * Calls `GET /api/v1/admin/social/actors` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:content:read; current trusted organization/actor context required.
   */
  adminActorsGet(params?: T.AdminActorsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminActorsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/actors`, params });
  }
  /**
   * Read actor activity counts and restriction rows in the organization; a UUID with no activity returns zero counts.
   * Calls `GET /api/v1/admin/social/actors/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:content:read; current trusted organization/actor context required.
   */
  adminActorDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminActorDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/actors/${encodeURIComponent(id)}` });
  }
  /**
   * Read organization-scoped counts by status and navigation grant events; includes deleted posts in status totals.
   * Calls `GET /api/v1/admin/social/analytics` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:analytics:read; current trusted organization/actor context required.
   */
  adminAnalyticsGet(options?: RequestOptions) {
    return this.client.request<T.AdminAnalyticsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/analytics` });
  }
  /**
   * Page organization-scoped audit rows. status filters exact audit action, not a lifecycle state.
   * Calls `GET /api/v1/admin/social/audit` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:audit:read; current trusted organization/actor context required.
   */
  adminAuditGet(params?: T.AdminAuditGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminAuditGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/audit`, params });
  }
  /**
   * Page organization-scoped bounties with exact status filter and newest-update ordering. Admin amount uses a JSON number.
   * Calls `GET /api/v1/admin/social/bounties` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:funding:review; current trusted organization/actor context required.
   */
  adminBountiesGet(params?: T.AdminBountiesGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminBountiesGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/bounties`, params });
  }
  /**
   * Read a bounty UUID in the organization; missing records return404.
   * Calls `GET /api/v1/admin/social/bounties/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:funding:review; current trusted organization/actor context required.
   */
  adminBountyDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminBountyDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/bounties/${encodeURIComponent(id)}` });
  }
  /**
   * List category capability policies ordered by category UUID and descending version, including draft/retired.
   * Calls `GET /api/v1/admin/social/capability-policies` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:panel:view; current trusted organization/actor context required.
   */
  adminPoliciesGet(options?: RequestOptions) {
    return this.client.request<T.AdminPoliciesGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/capability-policies` });
  }
  /**
   * Create a new draft policy version for a category; authenticated operator required; returns201. Only seven supported config section names are accepted.
   * Calls `POST /api/v1/admin/social/capability-policies` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:capabilities:manage; current trusted organization/actor context required.
   */
  adminCreatePolicyPost(data: T.AdminCreatePolicyPostInput, options?: RequestOptions<T.AdminCreatePolicyPostInput>) {
    return this.client.request<T.AdminCreatePolicyPostResponse, T.AdminCreatePolicyPostInput>({ ...options, method: "POST", url: `/api/v1/admin/social/capability-policies`, data: data });
  }
  /**
   * Read an organization-scoped capability policy UUID; missing records return404.
   * Calls `GET /api/v1/admin/social/capability-policies/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:panel:view; current trusted organization/actor context required.
   */
  adminPolicyDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminPolicyDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/capability-policies/${encodeURIComponent(id)}` });
  }
  /**
   * Replace draft config for the matching category; non-draft, missing or mismatched category returns409.
   * Calls `PATCH /api/v1/admin/social/capability-policies/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:capabilities:manage; current trusted organization/actor context required.
   */
  adminUpdatePolicyPatch(id: Identifier, data: T.AdminUpdatePolicyPatchInput, options?: RequestOptions<T.AdminUpdatePolicyPatchInput>) {
    return this.client.request<T.AdminUpdatePolicyPatchResponse, T.AdminUpdatePolicyPatchInput>({ ...options, method: "PATCH", url: `/api/v1/admin/social/capability-policies/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Publish a draft and retire the previously published category policy in one transaction. Authenticated operator required; non-draft returns409.
   * Calls `POST /api/v1/admin/social/capability-policies/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:capabilities:manage; current trusted organization/actor context required.
   */
  adminPublishPolicyPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminPublishPolicyPostResponse>({ ...options, method: "POST", url: `/api/v1/admin/social/capability-policies/${encodeURIComponent(id)}/publish` });
  }
  /**
   * List non-deleted categories, including hidden/archived status; no pagination.
   * Calls `GET /api/v1/admin/social/categories` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:panel:view; current trusted organization/actor context required.
   */
  adminCategoriesGet(options?: RequestOptions) {
    return this.client.request<T.AdminCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/categories` });
  }
  /**
   * Create a validated category; returns201. Localized name/description and metadata use backend JSON values.
   * Calls `POST /api/v1/admin/social/categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:categories:manage; current trusted organization/actor context required.
   */
  adminCreateCategoryPost(data: T.AdminCreateCategoryPostInput, options?: RequestOptions<T.AdminCreateCategoryPostInput>) {
    return this.client.request<T.AdminCreateCategoryPostResponse, T.AdminCreateCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/admin/social/categories`, data: data });
  }
  /**
   * Soft-delete a category; returns204 without a response body.
   * Calls `DELETE /api/v1/admin/social/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:categories:manage; current trusted organization/actor context required.
   */
  adminArchiveCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminArchiveCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/admin/social/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Read a non-deleted category UUID from the organization-scoped category list.
   * Calls `GET /api/v1/admin/social/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:panel:view; current trusted organization/actor context required.
   */
  adminCategoryDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminCategoryDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Patch a category using supplied fields; absent and null optional fields follow backend Option semantics.
   * Calls `PATCH /api/v1/admin/social/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:categories:manage; current trusted organization/actor context required.
   */
  adminUpdateCategoryPatch(id: Identifier, data: T.AdminUpdateCategoryPatchInput, options?: RequestOptions<T.AdminUpdateCategoryPatchInput>) {
    return this.client.request<T.AdminUpdateCategoryPatchResponse, T.AdminUpdateCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/admin/social/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Page organization-scoped claims with exact status filtering.
   * Calls `GET /api/v1/admin/social/claims` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claims:manage; current trusted organization/actor context required.
   */
  adminClaimsGet(params?: T.AdminClaimsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminClaimsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/claims`, params });
  }
  /**
   * Read a claim UUID in the organization; missing records return404.
   * Calls `GET /api/v1/admin/social/claims/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claims:manage; current trusted organization/actor context required.
   */
  adminClaimDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminClaimDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/claims/${encodeURIComponent(id)}` });
  }
  /**
   * Resolve an author-selected and author-approved claim in a transaction, update post lifecycle and audit. Authenticated operator required; unmet selection prerequisites return409.
   * Calls `POST /api/v1/admin/social/claims/{id}/approve` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claims:manage; current trusted organization/actor context required.
   */
  adminApproveClaimPost(id: Identifier, data: T.AdminApproveClaimPostInput, options?: RequestOptions<T.AdminApproveClaimPostInput>) {
    return this.client.request<T.AdminApproveClaimPostResponse, T.AdminApproveClaimPostInput>({ ...options, method: "POST", url: `/api/v1/admin/social/claims/${encodeURIComponent(id)}/approve`, data: data });
  }
  /**
   * Reject a submitted/selected claim and audit the decision. Nonempty reason and authenticated operator required. Terminal claims return409; the claim row is locked while applying the decision.
   * Calls `POST /api/v1/admin/social/claims/{id}/reject` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claims:manage; current trusted organization/actor context required.
   */
  adminRejectClaimPost(id: Identifier, data: T.AdminRejectClaimPostInput, options?: RequestOptions<T.AdminRejectClaimPostInput>) {
    return this.client.request<T.AdminRejectClaimPostResponse, T.AdminRejectClaimPostInput>({ ...options, method: "POST", url: `/api/v1/admin/social/claims/${encodeURIComponent(id)}/reject`, data: data });
  }
  /**
   * Page comments including deleted records; status filters moderation_status. q/category_id are ignored.
   * Calls `GET /api/v1/admin/social/comments` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:content:read; current trusted organization/actor context required.
   */
  adminCommentsGet(params?: T.AdminCommentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminCommentsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/comments`, params });
  }
  /**
   * Read an organization-scoped comment UUID, including deleted rows; missing records return404.
   * Calls `GET /api/v1/admin/social/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:content:read; current trusted organization/actor context required.
   */
  adminCommentDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminCommentDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/comments/${encodeURIComponent(id)}` });
  }
  /**
   * Page organization-scoped durable integration events with exact status filter and newest-update ordering.
   * Calls `GET /api/v1/admin/social/integrations` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:integrations:manage; current trusted organization/actor context required.
   */
  adminIntegrationsGet(params?: T.AdminIntegrationsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminIntegrationsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/integrations`, params });
  }
  /**
   * Read an organization-scoped durable event UUID, including its payload; missing returns404.
   * Calls `GET /api/v1/admin/social/integrations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:integrations:manage; current trusted organization/actor context required.
   */
  adminIntegrationDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminIntegrationDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/integrations/${encodeURIComponent(id)}` });
  }
  /**
   * Reset failed/dead_letter events to pending and audit a replay request. Authenticated operator and nonempty reason required; other statuses return409. Receipt is queued, not delivered; the outbox reset and audit insert commit in one transaction.
   * Calls `POST /api/v1/admin/social/integrations/{id}/replay` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:integrations:manage; current trusted organization/actor context required.
   */
  adminReplayIntegrationPost(id: Identifier, data: T.AdminReplayIntegrationPostInput, options?: RequestOptions<T.AdminReplayIntegrationPostInput>) {
    return this.client.request<T.AdminReplayIntegrationPostResponse, T.AdminReplayIntegrationPostInput>({ ...options, method: "POST", url: `/api/v1/admin/social/integrations/${encodeURIComponent(id)}/replay`, data: data });
  }
  /**
   * Reveal decrypted coordinates with a mandatory nonempty operator reason and audit event. Response is no-store/no-cache; expire the result after60seconds.
   * Calls `POST /api/v1/admin/social/locations/{post_id}/reveal` through the shared IDP-aware Faiber client.
   * @param postId Backend path identifier `post_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:location:reveal; current trusted organization/actor context required.
   */
  adminRevealLocationPost(postId: Identifier, data: T.AdminRevealLocationPostInput, options?: RequestOptions<T.AdminRevealLocationPostInput>) {
    return this.client.request<T.AdminRevealLocationPostResponse, T.AdminRevealLocationPostInput>({ ...options, method: "POST", url: `/api/v1/admin/social/locations/${encodeURIComponent(postId)}/reveal`, data: data });
  }
  /**
   * Page uploaded media. status filters exact content_type, not lifecycle status.
   * Calls `GET /api/v1/admin/social/media` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:content:read; current trusted organization/actor context required.
   */
  adminMediaGet(params?: T.AdminMediaGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/media`, params });
  }
  /**
   * Read pending non-deleted posts/comments and open/reviewing reports. Awaiting-funding posts are excluded; queue is unpaginated.
   * Calls `GET /api/v1/admin/social/moderation/queue` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:moderation:review; current trusted organization/actor context required.
   */
  adminModerationQueueGet(options?: RequestOptions) {
    return this.client.request<T.AdminModerationQueueGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/moderation/queue` });
  }
  /**
   * Read organization-scoped operator totals.
   * Calls `GET /api/v1/admin/social/overview` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:panel:view; current trusted organization/actor context required.
   */
  adminOverviewGet(options?: RequestOptions) {
    return this.client.request<T.AdminOverviewGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/overview` });
  }
  /**
   * Page non-deleted posts, filtering moderation status, category UUID and trimmed title/body search.
   * Calls `GET /api/v1/admin/social/posts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:content:read; current trusted organization/actor context required.
   */
  adminPostsGet(params?: T.AdminPostsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminPostsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/posts`, params });
  }
  /**
   * Read a post, metadata, report rows, activity counts and public capability projection. Missing or deleted post projection returns404.
   * Calls `GET /api/v1/admin/social/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:content:read; current trusted organization/actor context required.
   */
  adminPostDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminPostDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/posts/${encodeURIComponent(id)}` });
  }
  /**
   * Page organization-scoped reports with exact status filtering.
   * Calls `GET /api/v1/admin/social/reports` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reports:manage; current trusted organization/actor context required.
   */
  adminReportsGet(params?: T.AdminReportsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminReportsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/reports`, params });
  }
  /**
   * Read a report UUID in the organization; missing records return404.
   * Calls `GET /api/v1/admin/social/reports/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reports:manage; current trusted organization/actor context required.
   */
  adminReportDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminReportDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/reports/${encodeURIComponent(id)}` });
  }
  /**
   * Page organization-scoped restrictions with exact status filter.
   * Calls `GET /api/v1/admin/social/restrictions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:actors:restrict; current trusted organization/actor context required.
   */
  adminRestrictionsGet(params?: T.AdminRestrictionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminRestrictionsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/restrictions`, params });
  }
  /**
   * Create an active restriction; authenticated operator, valid scope, nonempty reason and end later than start required; returns201.
   * Calls `POST /api/v1/admin/social/restrictions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:actors:restrict; current trusted organization/actor context required.
   */
  adminCreateRestrictionPost(data: T.AdminCreateRestrictionPostInput, options?: RequestOptions<T.AdminCreateRestrictionPostInput>) {
    return this.client.request<T.AdminCreateRestrictionPostResponse, T.AdminCreateRestrictionPostInput>({ ...options, method: "POST", url: `/api/v1/admin/social/restrictions`, data: data });
  }
  /**
   * Revoke an active restriction with an authenticated operator and nonempty reason; non-active/missing returns409.
   * Calls `POST /api/v1/admin/social/restrictions/{id}/revoke` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:actors:restrict; current trusted organization/actor context required.
   */
  adminRevokeRestrictionPost(id: Identifier, data: T.AdminRevokeRestrictionPostInput, options?: RequestOptions<T.AdminRevokeRestrictionPostInput>) {
    return this.client.request<T.AdminRevokeRestrictionPostResponse, T.AdminRevokeRestrictionPostInput>({ ...options, method: "POST", url: `/api/v1/admin/social/restrictions/${encodeURIComponent(id)}/revoke`, data: data });
  }
  /**
   * Read configuration-presence flags and capability contract version. This does not disclose secrets or prove they are valid.
   * Calls `GET /api/v1/admin/social/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:settings:manage; current trusted organization/actor context required.
   */
  adminSettingsGet(options?: RequestOptions) {
    return this.client.request<T.AdminSettingsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/settings` });
  }
  /**
   * Performs the self identity operation for the api capability.
   * Calls `GET /api/v1/auth/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  apiSelfIdentityGet(options?: RequestOptions) {
    return this.client.request<T.ApiSelfIdentityGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /**
   * Remove the current actor block edge; idempotent204.
   * Calls `DELETE /api/v1/block/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoveryUnblockDelete(id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryUnblockDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/block/${encodeURIComponent(id)}` });
  }
  /**
   * Block a user and remove user-follow edges in both directions; self-block400, success204. Current handler uses separate statements.
   * Calls `PUT /api/v1/block/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoveryBlockPut(id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryBlockPutResponse>({ ...options, method: "PUT", url: `/api/v1/block/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the list categories operation for the api capability.
   * Calls `GET /api/v1/categories` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiListCategoriesGet(options?: RequestOptions) {
    return this.client.request<T.ApiListCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/categories` });
  }
  /**
   * Performs the create category operation for the api capability.
   * Calls `POST /api/v1/categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:category:manage.
   */
  apiCreateCategoryPost(data: T.ApiCreateCategoryPostInput, options?: RequestOptions<T.ApiCreateCategoryPostInput>) {
    return this.client.request<T.ApiCreateCategoryPostResponse, T.ApiCreateCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/categories`, data: data });
  }
  /**
   * Performs the delete category operation for the api capability.
   * Calls `DELETE /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:category:manage.
   */
  apiDeleteCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update category operation for the api capability.
   * Calls `PATCH /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:category:manage.
   */
  apiUpdateCategoryPatch(id: Identifier, data: T.ApiUpdateCategoryPatchInput, options?: RequestOptions<T.ApiUpdateCategoryPatchInput>) {
    return this.client.request<T.ApiUpdateCategoryPatchResponse, T.ApiUpdateCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the category capability policy operation for the api capability.
   * Calls `GET /api/v1/categories/{id}/capability-policy` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiCategoryCapabilityPolicyGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiCategoryCapabilityPolicyGetResponse>({ ...options, method: "GET", url: `/api/v1/categories/${encodeURIComponent(id)}/capability-policy` });
  }
  /**
   * Performs the claim detail operation for the api capability.
   * Calls `GET /api/v1/claims/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiClaimDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiClaimDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/claims/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the set contact consent operation for the api capability.
   * Calls `PUT /api/v1/claims/{id}/contact-consent` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claim:consent.
   */
  apiSetContactConsentPut(id: Identifier, data: T.ApiSetContactConsentPutInput, options?: RequestOptions<T.ApiSetContactConsentPutInput>) {
    return this.client.request<T.ApiSetContactConsentPutResponse, T.ApiSetContactConsentPutInput>({ ...options, method: "PUT", url: `/api/v1/claims/${encodeURIComponent(id)}/contact-consent`, data: data });
  }
  /**
   * Performs the select claim operation for the api capability.
   * Calls `POST /api/v1/claims/{id}/select` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claim:select_own.
   */
  apiSelectClaimPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiSelectClaimPostResponse>({ ...options, method: "POST", url: `/api/v1/claims/${encodeURIComponent(id)}/select` });
  }
  /**
   * Performs the withdraw claim operation for the api capability.
   * Calls `POST /api/v1/claims/{id}/withdraw` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claim:update_own.
   */
  apiWithdrawClaimPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiWithdrawClaimPostResponse>({ ...options, method: "POST", url: `/api/v1/claims/${encodeURIComponent(id)}/withdraw` });
  }
  /**
   * Performs the delete comment operation for the api capability.
   * Calls `DELETE /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:comment:delete_own.
   */
  apiDeleteCommentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteCommentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update comment operation for the api capability.
   * Calls `PATCH /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:comment:update_own.
   */
  apiUpdateCommentPatch(id: Identifier, data: T.ApiUpdateCommentPatchInput, options?: RequestOptions<T.ApiUpdateCommentPatchInput>) {
    return this.client.request<T.ApiUpdateCommentPatchResponse, T.ApiUpdateCommentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/comments/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the remove comment reaction operation for the api capability.
   * Calls `DELETE /api/v1/comments/{id}/like` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write.
   */
  apiRemoveCommentReactionDeleteApiV1CommentsIdLike(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemoveCommentReactionDeleteApiV1CommentsIdLikeResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}/like` });
  }
  /**
   * Performs the like comment operation for the api capability.
   * Calls `PUT /api/v1/comments/{id}/like` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write.
   */
  apiLikeCommentPut(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiLikeCommentPutResponse>({ ...options, method: "PUT", url: `/api/v1/comments/${encodeURIComponent(id)}/like` });
  }
  /**
   * Performs the remove comment reaction operation for the api capability.
   * Calls `DELETE /api/v1/comments/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write.
   */
  apiRemoveCommentReactionDeleteApiV1CommentsIdReaction(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemoveCommentReactionDeleteApiV1CommentsIdReactionResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}/reaction` });
  }
  /**
   * Performs the comment reactions operation for the api capability.
   * Calls `GET /api/v1/comments/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiCommentReactionsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiCommentReactionsGetResponse>({ ...options, method: "GET", url: `/api/v1/comments/${encodeURIComponent(id)}/reaction` });
  }
  /**
   * Performs the set comment reaction operation for the api capability.
   * Calls `PUT /api/v1/comments/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write.
   */
  apiSetCommentReactionPut(id: Identifier, data: T.ApiSetCommentReactionPutInput, options?: RequestOptions<T.ApiSetCommentReactionPutInput>) {
    return this.client.request<T.ApiSetCommentReactionPutResponse, T.ApiSetCommentReactionPutInput>({ ...options, method: "PUT", url: `/api/v1/comments/${encodeURIComponent(id)}/reaction`, data: data });
  }
  /**
   * Performs the list post comments operation for the api capability.
   * Calls `GET /api/v1/comments/post/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiListPostCommentsGetApiV1CommentsPostId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiListPostCommentsGetApiV1CommentsPostIdResponse>({ ...options, method: "GET", url: `/api/v1/comments/post/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the create post comment operation for the api capability.
   * Calls `POST /api/v1/comments/post/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:comment:create.
   */
  apiCreatePostCommentPostApiV1CommentsPostId(id: Identifier, data: T.ApiCreatePostCommentPostApiV1CommentsPostIdInput, options?: RequestOptions<T.ApiCreatePostCommentPostApiV1CommentsPostIdInput>) {
    return this.client.request<T.ApiCreatePostCommentPostApiV1CommentsPostIdResponse, T.ApiCreatePostCommentPostApiV1CommentsPostIdInput>({ ...options, method: "POST", url: `/api/v1/comments/post/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Remove the current actor follow edge; returns204 even when no edge existed.
   * Calls `DELETE /api/v1/follow/{kind}/{id}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoveryUnfollowDelete(kind: import("./discovery.types.js").SocialFollowTargetKind, id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryUnfollowDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/follow/${encodeURIComponent(kind)}/${encodeURIComponent(id)}` });
  }
  /**
   * Read whether the current BFF actor follows or blocks a user/place target. kind is place or user.
   * Calls `GET /api/v1/follow/{kind}/{id}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoveryRelationshipGet(kind: import("./discovery.types.js").SocialFollowTargetKind, id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryRelationshipGetResponse>({ ...options, method: "GET", url: `/api/v1/follow/${encodeURIComponent(kind)}/${encodeURIComponent(id)}` });
  }
  /**
   * Idempotently follow a user/place. Self-follow400 and blocked user403. Returns204; may emit a durable follow notification.
   * Calls `PUT /api/v1/follow/{kind}/{id}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoveryFollowPut(kind: import("./discovery.types.js").SocialFollowTargetKind, id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryFollowPutResponse>({ ...options, method: "PUT", url: `/api/v1/follow/${encodeURIComponent(kind)}/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the receive funding event operation for the api capability.
   * Calls `POST /api/v1/integrations/funding-events` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:integrations:write.
   */
  apiReceiveFundingEventPost(data: T.ApiReceiveFundingEventPostInput, options?: RequestOptions<T.ApiReceiveFundingEventPostInput>) {
    return this.client.request<T.ApiReceiveFundingEventPostResponse, T.ApiReceiveFundingEventPostInput>({ ...options, method: "POST", url: `/api/v1/integrations/funding-events`, data: data });
  }
  /**
   * Read oldest50 undelivered notification events for the configured organization. No lease or claim is acquired; consumers must deduplicate.
   * Calls `GET /api/v1/internal/notification-outbox` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted BFF actor plus exact social:integrations:write permission.
   */
  discoveryOutboxGet(options?: RequestOptions) {
    return this.client.request<T.DiscoveryOutboxGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/notification-outbox` });
  }
  /**
   * Mark an organization-scoped notification as delivered; returns204 even for missing/already-acknowledged rows. Ack is not a downstream business-effect receipt.
   * Calls `PUT /api/v1/internal/notification-outbox/{id}/ack` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted BFF actor plus exact social:integrations:write permission.
   */
  discoveryAckPut(id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryAckPutResponse>({ ...options, method: "PUT", url: `/api/v1/internal/notification-outbox/${encodeURIComponent(id)}/ack` });
  }
  /**
   * Record a unique organization/event UUID and queue place.updated notifications for followers who did not disable place notifications, in one transaction. Repeated ID has no new effect; returns204.
   * Calls `POST /api/v1/internal/place-events` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted BFF actor plus exact social:integrations:write permission.
   */
  discoveryPlaceEventPost(data: T.DiscoveryPlaceEventPostInput, options?: RequestOptions<T.DiscoveryPlaceEventPostInput>) {
    return this.client.request<T.DiscoveryPlaceEventPostResponse, T.DiscoveryPlaceEventPostInput>({ ...options, method: "POST", url: `/api/v1/internal/place-events`, data: data });
  }
  /**
   * Performs the my analytics operation for the api capability.
   * Calls `GET /api/v1/me/analytics` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:analytics:read_own.
   */
  apiMyAnalyticsGet(params?: T.ApiMyAnalyticsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiMyAnalyticsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/analytics`, params });
  }
  /**
   * Performs the my bookmarks operation for the api capability.
   * Calls `GET /api/v1/me/bookmarks` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiMyBookmarksGet(options?: RequestOptions) {
    return this.client.request<T.ApiMyBookmarksGetResponse>({ ...options, method: "GET", url: `/api/v1/me/bookmarks` });
  }
  /**
   * Performs the my claims operation for the api capability.
   * Calls `GET /api/v1/me/claims` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiMyClaimsGet(params?: T.ApiMyClaimsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiMyClaimsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/claims`, params });
  }
  /**
   * Performs the clear feed location operation for the api capability.
   * Calls `DELETE /api/v1/me/feed-location` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiClearFeedLocationDelete(options?: RequestOptions) {
    return this.client.request<T.ApiClearFeedLocationDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/me/feed-location` });
  }
  /**
   * Performs the get feed location operation for the api capability.
   * Calls `GET /api/v1/me/feed-location` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiGetFeedLocationGet(options?: RequestOptions) {
    return this.client.request<T.ApiGetFeedLocationGetResponse>({ ...options, method: "GET", url: `/api/v1/me/feed-location` });
  }
  /**
   * Performs the set feed location operation for the api capability.
   * Calls `PUT /api/v1/me/feed-location` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiSetFeedLocationPut(data: T.ApiSetFeedLocationPutInput, options?: RequestOptions<T.ApiSetFeedLocationPutInput>) {
    return this.client.request<T.ApiSetFeedLocationPutResponse, T.ApiSetFeedLocationPutInput>({ ...options, method: "PUT", url: `/api/v1/me/feed-location`, data: data });
  }
  /**
   * Read follow/comment/place/quest notification preferences, defaulting to enabled.
   * Calls `GET /api/v1/me/notification-preferences` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoveryPreferencesGet(options?: RequestOptions) {
    return this.client.request<T.DiscoveryPreferencesGetResponse>({ ...options, method: "GET", url: `/api/v1/me/notification-preferences` });
  }
  /**
   * Update supplied boolean preferences; absent fields stay unchanged. Current handler writes supplied preferences separately.
   * Calls `PUT /api/v1/me/notification-preferences` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoverySetPreferencesPut(data: T.DiscoverySetPreferencesPutInput, options?: RequestOptions<T.DiscoverySetPreferencesPutInput>) {
    return this.client.request<T.DiscoverySetPreferencesPutResponse, T.DiscoverySetPreferencesPutInput>({ ...options, method: "PUT", url: `/api/v1/me/notification-preferences`, data: data });
  }
  /**
   * Performs the list my posts operation for the api capability.
   * Calls `GET /api/v1/me/posts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiListMyPostsGet(params?: T.ApiListMyPostsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiListMyPostsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/posts`, params });
  }
  /**
   * Performs the my post claims operation for the api capability.
   * Calls `GET /api/v1/me/posts/{id}/claims` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiMyPostClaimsGet(id: Identifier, params?: T.ApiMyPostClaimsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiMyPostClaimsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/posts/${encodeURIComponent(id)}/claims`, params });
  }
  /**
   * Performs the get media operation for the api capability.
   * Calls `GET /api/v1/media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiGetMediaGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiGetMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the upload media operation for the api capability.
   * Calls `POST /api/v1/media/uploads` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:create.
   */
  apiUploadMediaPost(data: T.ApiUploadMediaPostInput, options?: RequestOptions<T.ApiUploadMediaPostInput>) {
    return this.client.request<T.ApiUploadMediaPostResponse, T.ApiUploadMediaPostInput>({ ...options, method: "POST", url: `/api/v1/media/uploads`, data: data });
  }
  /**
   * Performs the moderate operation for the api capability.
   * Calls `POST /api/v1/moderation/actions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:moderate, social:moderation:review.
   */
  apiModeratePost(data: T.ApiModeratePostInput, options?: RequestOptions<T.ApiModeratePostInput>) {
    return this.client.request<T.ApiModeratePostResponse, T.ApiModeratePostInput>({ ...options, method: "POST", url: `/api/v1/moderation/actions`, data: data });
  }
  /**
   * Performs the moderation audit operation for the api capability.
   * Calls `GET /api/v1/moderation/audit` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:moderate, social:moderation:review.
   */
  apiModerationAuditGet(params?: T.ApiModerationAuditGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiModerationAuditGetResponse>({ ...options, method: "GET", url: `/api/v1/moderation/audit`, params });
  }
  /**
   * Performs the moderation queue operation for the api capability.
   * Calls `GET /api/v1/moderation/queue` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:moderate, social:moderation:review.
   */
  apiModerationQueueGet(options?: RequestOptions) {
    return this.client.request<T.ApiModerationQueueGetResponse>({ ...options, method: "GET", url: `/api/v1/moderation/queue` });
  }
  /**
   * Performs the list posts operation for the api capability.
   * Calls `GET /api/v1/posts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiListPostsGet(params?: T.ApiListPostsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiListPostsGetResponse>({ ...options, method: "GET", url: `/api/v1/posts`, params });
  }
  /**
   * Performs the create post operation for the api capability.
   * Calls `POST /api/v1/posts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:create.
   */
  apiCreatePostPost(data: T.ApiCreatePostPostInput, options?: RequestOptions<T.ApiCreatePostPostInput>) {
    return this.client.request<T.ApiCreatePostPostResponse, T.ApiCreatePostPostInput>({ ...options, method: "POST", url: `/api/v1/posts`, data: data });
  }
  /**
   * Performs the delete post operation for the api capability.
   * Calls `DELETE /api/v1/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:delete_own.
   */
  apiDeletePostDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeletePostDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get post operation for the api capability.
   * Calls `GET /api/v1/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiGetPostGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiGetPostGetResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update post operation for the api capability.
   * Calls `PATCH /api/v1/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:update_own.
   */
  apiUpdatePostPatch(id: Identifier, data: T.ApiUpdatePostPatchInput, options?: RequestOptions<T.ApiUpdatePostPatchInput>) {
    return this.client.request<T.ApiUpdatePostPatchResponse, T.ApiUpdatePostPatchInput>({ ...options, method: "PATCH", url: `/api/v1/posts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the post analytics operation for the api capability.
   * Calls `GET /api/v1/posts/{id}/analytics` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:analytics:read_own.
   */
  apiPostAnalyticsGet(id: Identifier, params?: T.ApiPostAnalyticsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiPostAnalyticsGetResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}/analytics`, params });
  }
  /**
   * Performs the unbookmark post operation for the api capability.
   * Calls `DELETE /api/v1/posts/{id}/bookmark` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:bookmark:write.
   */
  apiUnbookmarkPostDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiUnbookmarkPostDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}/bookmark` });
  }
  /**
   * Performs the bookmark post operation for the api capability.
   * Calls `PUT /api/v1/posts/{id}/bookmark` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:bookmark:write.
   */
  apiBookmarkPostPut(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiBookmarkPostPutResponse>({ ...options, method: "PUT", url: `/api/v1/posts/${encodeURIComponent(id)}/bookmark` });
  }
  /**
   * Performs the cancel capability post operation for the api capability.
   * Calls `POST /api/v1/posts/{id}/cancel` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:update_own.
   */
  apiCancelCapabilityPostPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiCancelCapabilityPostPostResponse>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/cancel` });
  }
  /**
   * Performs the post capabilities operation for the api capability.
   * Calls `GET /api/v1/posts/{id}/capabilities` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiPostCapabilitiesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiPostCapabilitiesGetResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}/capabilities` });
  }
  /**
   * Performs the create claim operation for the api capability.
   * Calls `POST /api/v1/posts/{id}/claims` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claim:create.
   */
  apiCreateClaimPost(id: Identifier, data: T.ApiCreateClaimPostInput, options?: RequestOptions<T.ApiCreateClaimPostInput>) {
    return this.client.request<T.ApiCreateClaimPostResponse, T.ApiCreateClaimPostInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/claims`, data: data });
  }
  /**
   * Performs the list post comments operation for the api capability.
   * Calls `GET /api/v1/posts/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiListPostCommentsGetApiV1PostsIdComments(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiListPostCommentsGetApiV1PostsIdCommentsResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}/comments` });
  }
  /**
   * Performs the create post comment operation for the api capability.
   * Calls `POST /api/v1/posts/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:comment:create.
   */
  apiCreatePostCommentPostApiV1PostsIdComments(id: Identifier, data: T.ApiCreatePostCommentPostApiV1PostsIdCommentsInput, options?: RequestOptions<T.ApiCreatePostCommentPostApiV1PostsIdCommentsInput>) {
    return this.client.request<T.ApiCreatePostCommentPostApiV1PostsIdCommentsResponse, T.ApiCreatePostCommentPostApiV1PostsIdCommentsInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/comments`, data: data });
  }
  /**
   * Performs the remove post reaction operation for the api capability.
   * Calls `DELETE /api/v1/posts/{id}/like` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write.
   */
  apiRemovePostReactionDeleteApiV1PostsIdLike(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemovePostReactionDeleteApiV1PostsIdLikeResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}/like` });
  }
  /**
   * Performs the like post operation for the api capability.
   * Calls `PUT /api/v1/posts/{id}/like` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write.
   */
  apiLikePostPut(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiLikePostPutResponse>({ ...options, method: "PUT", url: `/api/v1/posts/${encodeURIComponent(id)}/like` });
  }
  /**
   * Performs the navigation access operation for the api capability.
   * Calls `POST /api/v1/posts/{id}/navigation-access` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:location:navigate.
   */
  apiNavigationAccessPost(id: Identifier, data: T.ApiNavigationAccessPostInput, options?: RequestOptions<T.ApiNavigationAccessPostInput>) {
    return this.client.request<T.ApiNavigationAccessPostResponse, T.ApiNavigationAccessPostInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/navigation-access`, data: data });
  }
  /**
   * Performs the remove post reaction operation for the api capability.
   * Calls `DELETE /api/v1/posts/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write.
   */
  apiRemovePostReactionDeleteApiV1PostsIdReaction(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemovePostReactionDeleteApiV1PostsIdReactionResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}/reaction` });
  }
  /**
   * Performs the post reactions operation for the api capability.
   * Calls `GET /api/v1/posts/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiPostReactionsGetApiV1PostsIdReaction(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiPostReactionsGetApiV1PostsIdReactionResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}/reaction` });
  }
  /**
   * Performs the set post reaction operation for the api capability.
   * Calls `PUT /api/v1/posts/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write.
   */
  apiSetPostReactionPut(id: Identifier, data: T.ApiSetPostReactionPutInput, options?: RequestOptions<T.ApiSetPostReactionPutInput>) {
    return this.client.request<T.ApiSetPostReactionPutResponse, T.ApiSetPostReactionPutInput>({ ...options, method: "PUT", url: `/api/v1/posts/${encodeURIComponent(id)}/reaction`, data: data });
  }
  /**
   * Performs the resubmit post operation for the api capability.
   * Calls `POST /api/v1/posts/{id}/resubmit` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:update_own.
   */
  apiResubmitPostPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiResubmitPostPostResponse>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/resubmit` });
  }
  /**
   * Performs the record share event operation for the api capability.
   * Calls `POST /api/v1/posts/{id}/share-events` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:share:write.
   */
  apiRecordShareEventPost(id: Identifier, data: T.ApiRecordShareEventPostInput, options?: RequestOptions<T.ApiRecordShareEventPostInput>) {
    return this.client.request<T.ApiRecordShareEventPostResponse, T.ApiRecordShareEventPostInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/share-events`, data: data });
  }
  /**
   * Performs the record post view operation for the api capability.
   * Calls `POST /api/v1/posts/{id}/views` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:view:write.
   */
  apiRecordPostViewPost(id: Identifier, data: T.ApiRecordPostViewPostInput, options?: RequestOptions<T.ApiRecordPostViewPostInput>) {
    return this.client.request<T.ApiRecordPostViewPostResponse, T.ApiRecordPostViewPostInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/views`, data: data });
  }
  /**
   * Download published media bytes after parent visibility and blocking checks. Response has private,no-cache. Unpublished media404, unavailable object storage500.
   * Calls `GET /api/v1/public/media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public projection.
   */
  discoveryMediaGet(id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/public/media/${encodeURIComponent(id)}`, responseType: "arraybuffer" });
  }
  /**
   * Public projection; runtime-configured organization/category, only public published non-deleted posts and non-expired24hour stories. Valid trusted actor enables following/liked/bookmarked and bidirectional blocking. Page1..10000/limit1..100; subject pair, comma-separated place references, author UUID and normalized text filters.
   * Calls `GET /api/v1/public/posts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public; following=true requires a trusted BFF actor.
   */
  discoveryFeedGet(params?: T.DiscoveryFeedGetQuery, options?: RequestOptions) {
    return this.client.request<T.DiscoveryFeedGetResponse>({ ...options, method: "GET", url: `/api/v1/public/posts`, params });
  }
  /**
   * Read the same public, unexpired and non-blocked post projection; hidden, private, wrong-category or blocked records return404.
   * Calls `GET /api/v1/public/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public projection.
   */
  discoveryPostDetailGet(id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryPostDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/public/posts/${encodeURIComponent(id)}` });
  }
  /**
   * Read at most100 published non-deleted comments, oldest first, after verifying parent post visibility and bidirectional actor blocks.
   * Calls `GET /api/v1/public/posts/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public projection.
   */
  discoveryCommentsGet(id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryCommentsGetResponse>({ ...options, method: "GET", url: `/api/v1/public/posts/${encodeURIComponent(id)}/comments` });
  }
  /**
   * Performs the remove post reaction operation for the api capability.
   * Calls `DELETE /api/v1/reactions/post/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write.
   */
  apiRemovePostReactionDeleteApiV1ReactionsPostId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemovePostReactionDeleteApiV1ReactionsPostIdResponse>({ ...options, method: "DELETE", url: `/api/v1/reactions/post/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the post reactions operation for the api capability.
   * Calls `GET /api/v1/reactions/post/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read.
   */
  apiPostReactionsGetApiV1ReactionsPostId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiPostReactionsGetApiV1ReactionsPostIdResponse>({ ...options, method: "GET", url: `/api/v1/reactions/post/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the set post reaction operation for the api capability.
   * Calls `POST /api/v1/reactions/post/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write.
   */
  apiSetPostReactionPost(id: Identifier, data: T.ApiSetPostReactionPostInput, options?: RequestOptions<T.ApiSetPostReactionPostInput>) {
    return this.client.request<T.ApiSetPostReactionPostResponse, T.ApiSetPostReactionPostInput>({ ...options, method: "POST", url: `/api/v1/reactions/post/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the create report operation for the api capability.
   * Calls `POST /api/v1/reports` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:report:create.
   */
  apiCreateReportPost(data: T.ApiCreateReportPostInput, options?: RequestOptions<T.ApiCreateReportPostInput>) {
    return this.client.request<T.ApiCreateReportPostResponse, T.ApiCreateReportPostInput>({ ...options, method: "POST", url: `/api/v1/reports`, data: data });
  }
  /**
   * Performs the health operation for the main capability.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  mainHealthGet(options?: RequestOptions) {
    return this.client.request<T.MainHealthGetResponse>({ ...options, method: "GET", url: `/health` });
  }
}
