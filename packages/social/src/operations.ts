import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class SocialOperations extends ServiceApi {
  /**
   * Import legacy Modules social records within the current organization; dry_run defaults true. Returns counters and the explicit legacy reaction mapping; requires social:admin.
   * Calls `POST /api/v1/admin/import/modules` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:admin; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiImportModulesPost(data: T.ApiImportModulesPostInput, options?: RequestOptions<T.ApiImportModulesPostInput>) {
    return this.client.request<T.ApiImportModulesPostResponse, T.ApiImportModulesPostInput>({ ...options, method: "POST", url: `/api/v1/admin/import/modules`, data: data });
  }
  /**
   * Page actors by latest post time; q optionally filters an actor UUID. Invalid q is currently ignored; meta.total is current-page length.
   * Calls `GET /api/v1/admin/social/actors` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:content:read; current trusted organization/actor context required.
   */
  adminActorDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminActorDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/actors/${encodeURIComponent(id)}` });
  }
  /**
   * Read organization-scoped counts by status and navigation grant events; includes deleted posts in status totals.
   * Calls `GET /api/v1/admin/social/analytics` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:funding:review; current trusted organization/actor context required.
   */
  adminBountyDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminBountyDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/bounties/${encodeURIComponent(id)}` });
  }
  /**
   * List category capability policies ordered by category UUID and descending version, including draft/retired.
   * Calls `GET /api/v1/admin/social/capability-policies` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:capabilities:manage; current trusted organization/actor context required.
   */
  adminPublishPolicyPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AdminPublishPolicyPostResponse>({ ...options, method: "POST", url: `/api/v1/admin/social/capability-policies/${encodeURIComponent(id)}/publish` });
  }
  /**
   * List non-deleted categories, including hidden/archived status; no pagination.
   * Calls `GET /api/v1/admin/social/categories` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:content:read; current trusted organization/actor context required.
   */
  adminMediaGet(params?: T.AdminMediaGetQuery, options?: RequestOptions) {
    return this.client.request<T.AdminMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/media`, params });
  }
  /**
   * Read pending non-deleted posts/comments and open/reviewing reports. Awaiting-funding posts are excluded; queue is unpaginated.
   * Calls `GET /api/v1/admin/social/moderation/queue` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:moderation:review; current trusted organization/actor context required.
   */
  adminModerationQueueGet(options?: RequestOptions) {
    return this.client.request<T.AdminModerationQueueGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/moderation/queue` });
  }
  /**
   * Read organization-scoped operator totals.
   * Calls `GET /api/v1/admin/social/overview` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:actors:restrict; current trusted organization/actor context required.
   */
  adminRevokeRestrictionPost(id: Identifier, data: T.AdminRevokeRestrictionPostInput, options?: RequestOptions<T.AdminRevokeRestrictionPostInput>) {
    return this.client.request<T.AdminRevokeRestrictionPostResponse, T.AdminRevokeRestrictionPostInput>({ ...options, method: "POST", url: `/api/v1/admin/social/restrictions/${encodeURIComponent(id)}/revoke`, data: data });
  }
  /**
   * Read configuration-presence flags and capability contract version. This does not disclose secrets or prove they are valid.
   * Calls `GET /api/v1/admin/social/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:settings:manage; current trusted organization/actor context required.
   */
  adminSettingsGet(options?: RequestOptions) {
    return this.client.request<T.AdminSettingsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/social/settings` });
  }
  /**
   * Read the middleware-derived current user UUID, roles and permissions.
   * Calls `GET /api/v1/auth/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: middleware-derived IDP identity.
   */
  apiSelfIdentityGet(options?: RequestOptions) {
    return this.client.request<T.ApiSelfIdentityGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /**
   * Remove the current actor block edge; idempotent204.
   * Calls `DELETE /api/v1/block/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoveryBlockPut(id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryBlockPutResponse>({ ...options, method: "PUT", url: `/api/v1/block/${encodeURIComponent(id)}` });
  }
  /**
   * List organization-scoped, non-deleted categories ordered by sort_order and slug; hidden/archived categories are included.
   * Calls `GET /api/v1/categories` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiListCategoriesGet(options?: RequestOptions) {
    return this.client.request<T.ApiListCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/categories` });
  }
  /**
   * Create a category (201). Slug normalizes to lowercase ASCII letters/digits/hyphens/underscores, 1–100 bytes. Localized labels, description and metadata remain application JSON.
   * Calls `POST /api/v1/categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:category:manage; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiCreateCategoryPost(data: T.ApiCreateCategoryPostInput, options?: RequestOptions<T.ApiCreateCategoryPostInput>) {
    return this.client.request<T.ApiCreateCategoryPostResponse, T.ApiCreateCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/categories`, data: data });
  }
  /**
   * Soft-delete the category; returns 204 with no body.
   * Calls `DELETE /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:category:manage; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiDeleteCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Patch supplied category fields. Null and absent Option fields leave stored values unchanged; slug/status validation matches creation.
   * Calls `PATCH /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:category:manage; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiUpdateCategoryPatch(id: Identifier, data: T.ApiUpdateCategoryPatchInput, options?: RequestOptions<T.ApiUpdateCategoryPatchInput>) {
    return this.client.request<T.ApiUpdateCategoryPatchResponse, T.ApiUpdateCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read the published category policy projection (404 when absent), including configurable JSON sections and published_at.
   * Calls `GET /api/v1/categories/{id}/capability-policy` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiCategoryCapabilityPolicyGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiCategoryCapabilityPolicyGetResponse>({ ...options, method: "GET", url: `/api/v1/categories/${encodeURIComponent(id)}/capability-policy` });
  }
  /**
   * Read a private claim for its claimant, post author or claims manager; returns mutual contact consent and nullable resolution. Nonparticipants return 403.
   * Calls `GET /api/v1/claims/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiClaimDetailGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiClaimDetailGetResponse>({ ...options, method: "GET", url: `/api/v1/claims/${encodeURIComponent(id)}` });
  }
  /**
   * Set consent for a claim participant; mutual_consent reflects both participant grants. Requires an authenticated participant.
   * Calls `PUT /api/v1/claims/{id}/contact-consent` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claim:consent; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiSetContactConsentPut(id: Identifier, data: T.ApiSetContactConsentPutInput, options?: RequestOptions<T.ApiSetContactConsentPutInput>) {
    return this.client.request<T.ApiSetContactConsentPutResponse, T.ApiSetContactConsentPutInput>({ ...options, method: "PUT", url: `/api/v1/claims/${encodeURIComponent(id)}/contact-consent`, data: data });
  }
  /**
   * Select a submitted claim as the post author in a transaction and create pending resolution. Another selected claim returns 409; returns claim_id/post_id/status/author_approved.
   * Calls `POST /api/v1/claims/{id}/select` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claim:select_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiSelectClaimPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiSelectClaimPostResponse>({ ...options, method: "POST", url: `/api/v1/claims/${encodeURIComponent(id)}/select` });
  }
  /**
   * Withdraw only the current claimant submitted claim; other states or ownership return 409. Returns id/status.
   * Calls `POST /api/v1/claims/{id}/withdraw` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claim:update_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiWithdrawClaimPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiWithdrawClaimPostResponse>({ ...options, method: "POST", url: `/api/v1/claims/${encodeURIComponent(id)}/withdraw` });
  }
  /**
   * Soft-delete author-owned comment, or a moderator-authorized comment, and refresh counts; returns 204.
   * Calls `DELETE /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:comment:delete_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiDeleteCommentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteCommentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}` });
  }
  /**
   * Update author-owned comment body (1–10000 trimmed characters). Category moderation can require review.
   * Calls `PATCH /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:comment:update_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiUpdateCommentPatch(id: Identifier, data: T.ApiUpdateCommentPatchInput, options?: RequestOptions<T.ApiUpdateCommentPatchInput>) {
    return this.client.request<T.ApiUpdateCommentPatchResponse, T.ApiUpdateCommentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/comments/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Remove current user comment reaction and refresh counts; returns 204.
   * Calls `DELETE /api/v1/comments/{id}/like` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiRemoveCommentReactionDeleteApiV1CommentsIdLike(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemoveCommentReactionDeleteApiV1CommentsIdLikeResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}/like` });
  }
  /**
   * Set the current user comment reaction to like, returning the reaction record.
   * Calls `PUT /api/v1/comments/{id}/like` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiLikeCommentPut(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiLikeCommentPutResponse>({ ...options, method: "PUT", url: `/api/v1/comments/${encodeURIComponent(id)}/like` });
  }
  /**
   * Remove current user comment reaction and refresh counts; returns 204.
   * Calls `DELETE /api/v1/comments/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiRemoveCommentReactionDeleteApiV1CommentsIdReaction(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemoveCommentReactionDeleteApiV1CommentsIdReactionResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}/reaction` });
  }
  /**
   * Read comment reaction totals, counts by reaction type and nullable viewer_reaction after verifying target visibility.
   * Calls `GET /api/v1/comments/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiCommentReactionsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiCommentReactionsGetResponse>({ ...options, method: "GET", url: `/api/v1/comments/${encodeURIComponent(id)}/reaction` });
  }
  /**
   * Upsert current user comment reaction after visibility and restriction checks; type is one of like/love/care/haha/wow/sad/angry.
   * Calls `PUT /api/v1/comments/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiSetCommentReactionPut(id: Identifier, data: T.ApiSetCommentReactionPutInput, options?: RequestOptions<T.ApiSetCommentReactionPutInput>) {
    return this.client.request<T.ApiSetCommentReactionPutResponse, T.ApiSetCommentReactionPutInput>({ ...options, method: "PUT", url: `/api/v1/comments/${encodeURIComponent(id)}/reaction`, data: data });
  }
  /**
   * Read published non-deleted comments oldest-first after checking parent visibility; no pagination query is consumed.
   * Calls `GET /api/v1/comments/post/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiListPostCommentsGetApiV1CommentsPostId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiListPostCommentsGetApiV1CommentsPostIdResponse>({ ...options, method: "GET", url: `/api/v1/comments/post/${encodeURIComponent(id)}` });
  }
  /**
   * Create a post comment (201), checking parent post and optional same-post non-deleted parent comment. Body is trimmed, 1–10000 characters; category moderation/restrictions apply.
   * Calls `POST /api/v1/comments/post/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:comment:create; authenticated IDP context via shared FaiberClient; trusted organization context.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoveryRelationshipGet(kind: import("./discovery.types.js").SocialFollowTargetKind, id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryRelationshipGetResponse>({ ...options, method: "GET", url: `/api/v1/follow/${encodeURIComponent(kind)}/${encodeURIComponent(id)}` });
  }
  /**
   * Idempotently follow a user/place. Self-follow400 and blocked user403. Returns204; the migration 6 database trigger may enqueue an opted-in user-follow notification for a new edge.
   * Calls `PUT /api/v1/follow/{kind}/{id}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoveryFollowPut(kind: import("./discovery.types.js").SocialFollowTargetKind, id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryFollowPutResponse>({ ...options, method: "PUT", url: `/api/v1/follow/${encodeURIComponent(kind)}/${encodeURIComponent(id)}` });
  }
  /**
   * Apply a durable provider funding event after matching bounty unit/code/decimal amount. Event/reference are 1–255 trimmed characters. Duplicate external_event_id returns duplicate:true without status; new event returns duplicate:false/status. A funded result advances category moderation lifecycle transactionally.
   * Calls `POST /api/v1/integrations/funding-events` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:integrations:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiReceiveFundingEventPost(data: T.ApiReceiveFundingEventPostInput, options?: RequestOptions<T.ApiReceiveFundingEventPostInput>) {
    return this.client.request<T.ApiReceiveFundingEventPostResponse, T.ApiReceiveFundingEventPostInput>({ ...options, method: "POST", url: `/api/v1/integrations/funding-events`, data: data });
  }
  /**
   * Read oldest50 undelivered notification events for the configured organization. No lease or claim is acquired; consumers must deduplicate.
   * Calls `GET /api/v1/internal/notification-outbox` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted BFF actor plus exact social:integrations:write permission.
   */
  discoveryPlaceEventPost(data: T.DiscoveryPlaceEventPostInput, options?: RequestOptions<T.DiscoveryPlaceEventPostInput>) {
    return this.client.request<T.DiscoveryPlaceEventPostResponse, T.DiscoveryPlaceEventPostInput>({ ...options, method: "POST", url: `/api/v1/internal/place-events`, data: data });
  }
  /**
   * Read current author analytics over inclusive YYYY-MM-DD from/to dates, at most 366 days; defaults to today and preceding 29 days. Returns totals/posts/trend.
   * Calls `GET /api/v1/me/analytics` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:analytics:read_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiMyAnalyticsGet(params?: T.ApiMyAnalyticsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiMyAnalyticsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/analytics`, params });
  }
  /**
   * List bookmarked post UUIDs for the authenticated organization/user; this is not a post projection.
   * Calls `GET /api/v1/me/bookmarks` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiMyBookmarksGet(options?: RequestOptions) {
    return this.client.request<T.ApiMyBookmarksGetResponse>({ ...options, method: "GET", url: `/api/v1/me/bookmarks` });
  }
  /**
   * Page current claimant claims with required total/page/limit meta, message/evidence/status and mutual_contact_consent; defaults page=1/limit=30, limit 1–100.
   * Calls `GET /api/v1/me/claims` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiMyClaimsGet(params?: T.ApiMyClaimsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiMyClaimsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/claims`, params });
  }
  /**
   * Clear the authenticated user location preference idempotently; returns 204.
   * Calls `DELETE /api/v1/me/feed-location` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiClearFeedLocationDelete(options?: RequestOptions) {
    return this.client.request<T.ApiClearFeedLocationDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/me/feed-location` });
  }
  /**
   * Read the authenticated user location preference, returning data:null when unset.
   * Calls `GET /api/v1/me/feed-location` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiGetFeedLocationGet(options?: RequestOptions) {
    return this.client.request<T.ApiGetFeedLocationGetResponse>({ ...options, method: "GET", url: `/api/v1/me/feed-location` });
  }
  /**
   * Save current user location preference. Coordinates must be finite and within latitude ±90/longitude ±180; range_km must be >0 and <=500. Returns the saved non-null preference.
   * Calls `PUT /api/v1/me/feed-location` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiSetFeedLocationPut(data: T.ApiSetFeedLocationPutInput, options?: RequestOptions<T.ApiSetFeedLocationPutInput>) {
    return this.client.request<T.ApiSetFeedLocationPutResponse, T.ApiSetFeedLocationPutInput>({ ...options, method: "PUT", url: `/api/v1/me/feed-location`, data: data });
  }
  /**
   * Read follow/comment/place/quest notification preferences, defaulting to enabled.
   * Calls `GET /api/v1/me/notification-preferences` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted server BFF_SERVICE_KEY bearer plus actor UUID.
   */
  discoverySetPreferencesPut(data: T.DiscoverySetPreferencesPutInput, options?: RequestOptions<T.DiscoverySetPreferencesPutInput>) {
    return this.client.request<T.DiscoverySetPreferencesPutResponse, T.DiscoverySetPreferencesPutInput>({ ...options, method: "PUT", url: `/api/v1/me/notification-preferences`, data: data });
  }
  /**
   * Page current actor posts using feed filters and required pagination meta. author_id is overwritten by the authenticated user UUID.
   * Calls `GET /api/v1/me/posts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiListMyPostsGet(params?: T.ApiListMyPostsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiListMyPostsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/posts`, params });
  }
  /**
   * Page claims for a post owned by the current user; other actors return 403. Returns required total/page/limit meta and mutual_contact_consent.
   * Calls `GET /api/v1/me/posts/{id}/claims` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiMyPostClaimsGet(id: Identifier, params?: T.ApiMyPostClaimsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiMyPostClaimsGetResponse>({ ...options, method: "GET", url: `/api/v1/me/posts/${encodeURIComponent(id)}/claims`, params });
  }
  /**
   * Download organization media after uploader/parent visibility checks. Returns bytes with Content-Type and private,max-age=300; storage/configuration failures return 500.
   * Calls `GET /api/v1/media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiGetMediaGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiGetMediaGetResponse>({ ...options, method: "GET", url: `/api/v1/media/${encodeURIComponent(id)}`, responseType: "arraybuffer" });
  }
  /**
   * Upload the first multipart field as JPEG, PNG or WebP (1 byte–12 MiB); full multipart body limit 13 MiB. Returns 201 with UUID, authenticated media URL and content type. Storage must be configured.
   * Calls `POST /api/v1/media/uploads` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:create; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiUploadMediaPost(data: T.ApiUploadMediaPostInput, options?: RequestOptions<T.ApiUploadMediaPostInput>) {
    return this.client.request<T.ApiUploadMediaPostResponse, T.ApiUploadMediaPostInput>({ ...options, method: "POST", url: `/api/v1/media/uploads`, data: data });
  }
  /**
   * Moderate a post/comment/report. Reject/hide require a nonblank reason; resolve/dismiss target reports. Awaiting-funding posts return 409. Returns target_type,target_id,status,action; audit stores previous_status separately. Requires either social:moderate or social:moderation:review.
   * Calls `POST /api/v1/moderation/actions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:moderate OR social:moderation:review; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiModeratePost(data: T.ApiModeratePostInput, options?: RequestOptions<T.ApiModeratePostInput>) {
    return this.client.request<T.ApiModeratePostResponse, T.ApiModeratePostInput>({ ...options, method: "POST", url: `/api/v1/moderation/actions`, data: data });
  }
  /**
   * Page organization moderation history with optional target_type/action filters; defaults page=1/limit=30 with page>=1 and limit 1–100. Requires either social:moderate or social:moderation:review.
   * Calls `GET /api/v1/moderation/audit` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:moderate OR social:moderation:review; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiModerationAuditGet(params?: T.ApiModerationAuditGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiModerationAuditGetResponse>({ ...options, method: "GET", url: `/api/v1/moderation/audit`, params });
  }
  /**
   * Read pending non-deleted posts/comments and open/reviewing reports; awaiting-funding posts are excluded. Requires either social:moderate or social:moderation:review.
   * Calls `GET /api/v1/moderation/queue` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:moderate OR social:moderation:review; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiModerationQueueGet(options?: RequestOptions) {
    return this.client.request<T.ApiModerationQueueGetResponse>({ ...options, method: "GET", url: `/api/v1/moderation/queue` });
  }
  /**
   * Page visible organization posts with q title/body search, author/category UUID and validated kind filters. Defaults page=1/limit=30, page>=1 and limit 1–100. Saved location ranks nearby posts then posts without decryptable coordinates. Returns data plus required total/page/limit meta.
   * Calls `GET /api/v1/posts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiListPostsGet(params?: T.ApiListPostsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiListPostsGetResponse>({ ...options, method: "GET", url: `/api/v1/posts`, params });
  }
  /**
   * Create a post (201), or return the completed identical request_key replay (200). Body is trimmed, 1–50000 characters; creation title truncates to 500 characters. Media array entries must reference owned uploaded IDs. Category entitlements/restrictions and published capability policy apply. Reusing a key for changed content or an unconfirmed request returns 409; retry the same request key.
   * Calls `POST /api/v1/posts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:create; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiCreatePostPost(data: T.ApiCreatePostPostInput, options?: RequestOptions<T.ApiCreatePostPostInput>) {
    return this.client.request<T.ApiCreatePostPostResponse, T.ApiCreatePostPostInput>({ ...options, method: "POST", url: `/api/v1/posts`, data: data });
  }
  /**
   * Soft-delete an author-owned post, or a moderator-authorized post; returns 204.
   * Calls `DELETE /api/v1/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:delete_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiDeletePostDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeletePostDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}` });
  }
  /**
   * Read a non-deleted organization-scoped post visible to its author, moderators or readers of published non-private posts. Bidirectional user blocks hide it with 404.
   * Calls `GET /api/v1/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiGetPostGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiGetPostGetResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}` });
  }
  /**
   * Update author-owned content; Option nulls leave fields unchanged. Body is 1–50000 characters and supplied title is 1–500. Existing/new category entitlement and media ownership are enforced. Rejected or moderated content returns to review; awaiting-funding lifecycle is preserved.
   * Calls `PATCH /api/v1/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:update_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiUpdatePostPatch(id: Identifier, data: T.ApiUpdatePostPatchInput, options?: RequestOptions<T.ApiUpdatePostPatchInput>) {
    return this.client.request<T.ApiUpdatePostPatchResponse, T.ApiUpdatePostPatchInput>({ ...options, method: "PATCH", url: `/api/v1/posts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read author-only post analytics over inclusive YYYY-MM-DD from/to dates. Defaults to today and preceding 29 days; from<=to and at most 366 days. Returns totals/posts/trend.
   * Calls `GET /api/v1/posts/{id}/analytics` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:analytics:read_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiPostAnalyticsGet(id: Identifier, params?: T.ApiPostAnalyticsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiPostAnalyticsGetResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}/analytics`, params });
  }
  /**
   * Remove current user bookmark; returns 204.
   * Calls `DELETE /api/v1/posts/{id}/bookmark` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:bookmark:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiUnbookmarkPostDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiUnbookmarkPostDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}/bookmark` });
  }
  /**
   * Idempotently bookmark a visible post for current user; returns 204.
   * Calls `PUT /api/v1/posts/{id}/bookmark` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:bookmark:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiBookmarkPostPut(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiBookmarkPostPutResponse>({ ...options, method: "PUT", url: `/api/v1/posts/${encodeURIComponent(id)}/bookmark` });
  }
  /**
   * Cancel an author-owned post unless already resolved/cancelled/expired (409); hide content and queue bounty refund where relevant. Returns post_id/lifecycle_status.
   * Calls `POST /api/v1/posts/{id}/cancel` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:update_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiCancelCapabilityPostPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiCancelCapabilityPostPostResponse>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/cancel` });
  }
  /**
   * Read a visible post capability projection with nullable subject/location/bounty, linked actions and lifecycle. Exact coordinates are excluded.
   * Calls `GET /api/v1/posts/{id}/capabilities` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiPostCapabilitiesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiPostCapabilitiesGetResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}/capabilities` });
  }
  /**
   * Submit one claim per user/post (201). Authors cannot claim own posts; lifecycle must be published and policy must enable claims. Message 1–5000 trimmed characters, evidence defaults null; conflicts return 409.
   * Calls `POST /api/v1/posts/{id}/claims` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:claim:create; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiCreateClaimPost(id: Identifier, data: T.ApiCreateClaimPostInput, options?: RequestOptions<T.ApiCreateClaimPostInput>) {
    return this.client.request<T.ApiCreateClaimPostResponse, T.ApiCreateClaimPostInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/claims`, data: data });
  }
  /**
   * Read published non-deleted comments oldest-first after checking parent visibility; no pagination query is consumed.
   * Calls `GET /api/v1/posts/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiListPostCommentsGetApiV1PostsIdComments(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiListPostCommentsGetApiV1PostsIdCommentsResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}/comments` });
  }
  /**
   * Create a post comment (201), checking parent post and optional same-post non-deleted parent comment. Body is trimmed, 1–10000 characters; category moderation/restrictions apply.
   * Calls `POST /api/v1/posts/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:comment:create; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiCreatePostCommentPostApiV1PostsIdComments(id: Identifier, data: T.ApiCreatePostCommentPostApiV1PostsIdCommentsInput, options?: RequestOptions<T.ApiCreatePostCommentPostApiV1PostsIdCommentsInput>) {
    return this.client.request<T.ApiCreatePostCommentPostApiV1PostsIdCommentsResponse, T.ApiCreatePostCommentPostApiV1PostsIdCommentsInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/comments`, data: data });
  }
  /**
   * Remove current user post reaction and refresh counts; returns 204.
   * Calls `DELETE /api/v1/posts/{id}/like` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiRemovePostReactionDeleteApiV1PostsIdLike(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemovePostReactionDeleteApiV1PostsIdLikeResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}/like` });
  }
  /**
   * Set the current user post reaction to like, returning the reaction record.
   * Calls `PUT /api/v1/posts/{id}/like` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiLikePostPut(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiLikePostPutResponse>({ ...options, method: "PUT", url: `/api/v1/posts/${encodeURIComponent(id)}/like` });
  }
  /**
   * Request short-lived exact coordinates with optional reason. Requires authenticated user, navigation permission and location access policy; returns no-store coordinates expiring in 60 seconds.
   * Calls `POST /api/v1/posts/{id}/navigation-access` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:location:navigate; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiNavigationAccessPost(id: Identifier, data: T.ApiNavigationAccessPostInput, options?: RequestOptions<T.ApiNavigationAccessPostInput>) {
    return this.client.request<T.ApiNavigationAccessPostResponse, T.ApiNavigationAccessPostInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/navigation-access`, data: data });
  }
  /**
   * Remove current user post reaction and refresh counts; returns 204.
   * Calls `DELETE /api/v1/posts/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiRemovePostReactionDeleteApiV1PostsIdReaction(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemovePostReactionDeleteApiV1PostsIdReactionResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}/reaction` });
  }
  /**
   * Read post reaction totals, counts by reaction type and nullable viewer_reaction after verifying visibility.
   * Calls `GET /api/v1/posts/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiPostReactionsGetApiV1PostsIdReaction(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiPostReactionsGetApiV1PostsIdReactionResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}/reaction` });
  }
  /**
   * Upsert current user post reaction after visibility and restriction checks; type is one of like/love/care/haha/wow/sad/angry.
   * Calls `PUT /api/v1/posts/{id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiSetPostReactionPut(id: Identifier, data: T.ApiSetPostReactionPutInput, options?: RequestOptions<T.ApiSetPostReactionPutInput>) {
    return this.client.request<T.ApiSetPostReactionPutResponse, T.ApiSetPostReactionPutInput>({ ...options, method: "PUT", url: `/api/v1/posts/${encodeURIComponent(id)}/reaction`, data: data });
  }
  /**
   * Resubmit author-owned content to the category moderation state; returns the updated post.
   * Calls `POST /api/v1/posts/{id}/resubmit` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:post:update_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiResubmitPostPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiResubmitPostPostResponse>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/resubmit` });
  }
  /**
   * Record a visible post share with channel default system and optional idempotency_key; returns 204. Idempotency keys are scoped to organization/user across posts, truncate to 128 characters, and suppress duplicates; channel is trimmed to 1–32 characters.
   * Calls `POST /api/v1/posts/{id}/share-events` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:share:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiRecordShareEventPost(id: Identifier, data: T.ApiRecordShareEventPostInput, options?: RequestOptions<T.ApiRecordShareEventPostInput>) {
    return this.client.request<T.ApiRecordShareEventPostResponse, T.ApiRecordShareEventPostInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/share-events`, data: data });
  }
  /**
   * Record a visible post view when visible_ms>=1000; lower values return 400. counted is false for author views or a duplicate user/post/day view.
   * Calls `POST /api/v1/posts/{id}/views` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:view:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiRecordPostViewPost(id: Identifier, data: T.ApiRecordPostViewPostInput, options?: RequestOptions<T.ApiRecordPostViewPostInput>) {
    return this.client.request<T.ApiRecordPostViewPostResponse, T.ApiRecordPostViewPostInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/views`, data: data });
  }
  /**
   * Download published media bytes after parent visibility and blocking checks. Response has private,no-cache. Unpublished media404, unavailable object storage500.
   * Calls `GET /api/v1/public/media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
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
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public projection.
   */
  discoveryCommentsGet(id: string, options?: RequestOptions) {
    return this.client.request<T.DiscoveryCommentsGetResponse>({ ...options, method: "GET", url: `/api/v1/public/posts/${encodeURIComponent(id)}/comments` });
  }
  /**
   * Remove current user post reaction and refresh counts; returns 204.
   * Calls `DELETE /api/v1/reactions/post/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiRemovePostReactionDeleteApiV1ReactionsPostId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemovePostReactionDeleteApiV1ReactionsPostIdResponse>({ ...options, method: "DELETE", url: `/api/v1/reactions/post/${encodeURIComponent(id)}` });
  }
  /**
   * Read post reaction totals, counts by reaction type and nullable viewer_reaction after verifying visibility.
   * Calls `GET /api/v1/reactions/post/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiPostReactionsGetApiV1ReactionsPostId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiPostReactionsGetApiV1ReactionsPostIdResponse>({ ...options, method: "GET", url: `/api/v1/reactions/post/${encodeURIComponent(id)}` });
  }
  /**
   * Upsert current user post reaction after visibility and restriction checks; type is one of like/love/care/haha/wow/sad/angry.
   * Calls `POST /api/v1/reactions/post/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiSetPostReactionPost(id: Identifier, data: T.ApiSetPostReactionPostInput, options?: RequestOptions<T.ApiSetPostReactionPostInput>) {
    return this.client.request<T.ApiSetPostReactionPostResponse, T.ApiSetPostReactionPostInput>({ ...options, method: "POST", url: `/api/v1/reactions/post/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Report a visible post/comment or another user (201). Self user reports return 400; reason is trimmed, 1–64 characters. Returns the complete report record with nullable resolution fields.
   * Calls `POST /api/v1/reports` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: social:report:create; authenticated IDP context via shared FaiberClient; trusted organization context.
   */
  apiCreateReportPost(data: T.ApiCreateReportPostInput, options?: RequestOptions<T.ApiCreateReportPostInput>) {
    return this.client.request<T.ApiCreateReportPostResponse, T.ApiCreateReportPostInput>({ ...options, method: "POST", url: `/api/v1/reports`, data: data });
  }
  /**
   * Read process liveness and package version; this is not a dependency readiness probe.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public liveness route.
   */
  mainHealthGet(options?: RequestOptions) {
    return this.client.request<T.MainHealthGetResponse>({ ...options, method: "GET", url: `/health` });
  }
}
