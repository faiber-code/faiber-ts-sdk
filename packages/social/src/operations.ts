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
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
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
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  apiModerationAuditGet(params?: T.ApiModerationAuditGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiModerationAuditGetResponse>({ ...options, method: "GET", url: `/api/v1/moderation/audit`, params });
  }
  /**
   * Performs the moderation queue operation for the api capability.
   * Calls `GET /api/v1/moderation/queue` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
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

