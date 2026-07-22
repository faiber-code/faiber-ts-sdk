import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class SocialOperations extends ServiceApi {
  /** POST /api/v1/admin/import/modules; permission: social:admin. */
  apiImportModulesPost(data: T.ApiImportModulesPostInput, options?: RequestOptions<T.ApiImportModulesPostInput>) {
    return this.client.request<T.ApiImportModulesPostResponse, T.ApiImportModulesPostInput>({ ...options, method: "POST", url: `/api/v1/admin/import/modules`, data: data });
  }
  /** GET /api/v1/categories; permission: social:read. */
  apiListCategoriesGet(options?: RequestOptions) {
    return this.client.request<T.ApiListCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/categories` });
  }
  /** POST /api/v1/categories; permission: social:category:manage. */
  apiCreateCategoryPost(data: T.ApiCreateCategoryPostInput, options?: RequestOptions<T.ApiCreateCategoryPostInput>) {
    return this.client.request<T.ApiCreateCategoryPostResponse, T.ApiCreateCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/categories`, data: data });
  }
  /** DELETE /api/v1/categories/{id}; permission: social:category:manage. */
  apiDeleteCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/categories/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/categories/{id}; permission: social:category:manage. */
  apiUpdateCategoryPatch(id: Identifier, data: T.ApiUpdateCategoryPatchInput, options?: RequestOptions<T.ApiUpdateCategoryPatchInput>) {
    return this.client.request<T.ApiUpdateCategoryPatchResponse, T.ApiUpdateCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/categories/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/comments/{id}; permission: social:comment:delete_own. */
  apiDeleteCommentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteCommentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/comments/{id}; permission: social:comment:update_own. */
  apiUpdateCommentPatch(id: Identifier, data: T.ApiUpdateCommentPatchInput, options?: RequestOptions<T.ApiUpdateCommentPatchInput>) {
    return this.client.request<T.ApiUpdateCommentPatchResponse, T.ApiUpdateCommentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/comments/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/comments/{id}/like; permission: social:reaction:write. */
  apiRemoveCommentReactionDeleteApiV1CommentsIdLike(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemoveCommentReactionDeleteApiV1CommentsIdLikeResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}/like` });
  }
  /** PUT /api/v1/comments/{id}/like; permission: social:reaction:write. */
  apiLikeCommentPut(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiLikeCommentPutResponse>({ ...options, method: "PUT", url: `/api/v1/comments/${encodeURIComponent(id)}/like` });
  }
  /** DELETE /api/v1/comments/{id}/reaction; permission: social:reaction:write. */
  apiRemoveCommentReactionDeleteApiV1CommentsIdReaction(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemoveCommentReactionDeleteApiV1CommentsIdReactionResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}/reaction` });
  }
  /** GET /api/v1/comments/{id}/reaction; permission: social:read. */
  apiCommentReactionsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiCommentReactionsGetResponse>({ ...options, method: "GET", url: `/api/v1/comments/${encodeURIComponent(id)}/reaction` });
  }
  /** PUT /api/v1/comments/{id}/reaction; permission: social:reaction:write. */
  apiSetCommentReactionPut(id: Identifier, data: T.ApiSetCommentReactionPutInput, options?: RequestOptions<T.ApiSetCommentReactionPutInput>) {
    return this.client.request<T.ApiSetCommentReactionPutResponse, T.ApiSetCommentReactionPutInput>({ ...options, method: "PUT", url: `/api/v1/comments/${encodeURIComponent(id)}/reaction`, data: data });
  }
  /** GET /api/v1/comments/post/{id}; permission: social:read. */
  apiListPostCommentsGetApiV1CommentsPostId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiListPostCommentsGetApiV1CommentsPostIdResponse>({ ...options, method: "GET", url: `/api/v1/comments/post/${encodeURIComponent(id)}` });
  }
  /** POST /api/v1/comments/post/{id}; permission: social:comment:create. */
  apiCreatePostCommentPostApiV1CommentsPostId(id: Identifier, data: T.ApiCreatePostCommentPostApiV1CommentsPostIdInput, options?: RequestOptions<T.ApiCreatePostCommentPostApiV1CommentsPostIdInput>) {
    return this.client.request<T.ApiCreatePostCommentPostApiV1CommentsPostIdResponse, T.ApiCreatePostCommentPostApiV1CommentsPostIdInput>({ ...options, method: "POST", url: `/api/v1/comments/post/${encodeURIComponent(id)}`, data: data });
  }
  /** POST /api/v1/moderation/actions; permission: social:moderate. */
  apiModeratePost(data: T.ApiModeratePostInput, options?: RequestOptions<T.ApiModeratePostInput>) {
    return this.client.request<T.ApiModeratePostResponse, T.ApiModeratePostInput>({ ...options, method: "POST", url: `/api/v1/moderation/actions`, data: data });
  }
  /** GET /api/v1/moderation/queue; permission: social:moderate. */
  apiModerationQueueGet(options?: RequestOptions) {
    return this.client.request<T.ApiModerationQueueGetResponse>({ ...options, method: "GET", url: `/api/v1/moderation/queue` });
  }
  /** GET /api/v1/posts; permission: social:read. */
  apiListPostsGet(params?: T.ApiListPostsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiListPostsGetResponse>({ ...options, method: "GET", url: `/api/v1/posts`, params });
  }
  /** POST /api/v1/posts; permission: social:post:create. */
  apiCreatePostPost(data: T.ApiCreatePostPostInput, options?: RequestOptions<T.ApiCreatePostPostInput>) {
    return this.client.request<T.ApiCreatePostPostResponse, T.ApiCreatePostPostInput>({ ...options, method: "POST", url: `/api/v1/posts`, data: data });
  }
  /** DELETE /api/v1/posts/{id}; permission: social:post:delete_own. */
  apiDeletePostDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeletePostDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/posts/{id}; permission: social:read. */
  apiGetPostGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiGetPostGetResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/posts/{id}; permission: social:post:update_own. */
  apiUpdatePostPatch(id: Identifier, data: T.ApiUpdatePostPatchInput, options?: RequestOptions<T.ApiUpdatePostPatchInput>) {
    return this.client.request<T.ApiUpdatePostPatchResponse, T.ApiUpdatePostPatchInput>({ ...options, method: "PATCH", url: `/api/v1/posts/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/posts/{id}/comments; permission: social:read. */
  apiListPostCommentsGetApiV1PostsIdComments(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiListPostCommentsGetApiV1PostsIdCommentsResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}/comments` });
  }
  /** POST /api/v1/posts/{id}/comments; permission: social:comment:create. */
  apiCreatePostCommentPostApiV1PostsIdComments(id: Identifier, data: T.ApiCreatePostCommentPostApiV1PostsIdCommentsInput, options?: RequestOptions<T.ApiCreatePostCommentPostApiV1PostsIdCommentsInput>) {
    return this.client.request<T.ApiCreatePostCommentPostApiV1PostsIdCommentsResponse, T.ApiCreatePostCommentPostApiV1PostsIdCommentsInput>({ ...options, method: "POST", url: `/api/v1/posts/${encodeURIComponent(id)}/comments`, data: data });
  }
  /** DELETE /api/v1/posts/{id}/like; permission: social:reaction:write. */
  apiRemovePostReactionDeleteApiV1PostsIdLike(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemovePostReactionDeleteApiV1PostsIdLikeResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}/like` });
  }
  /** PUT /api/v1/posts/{id}/like; permission: social:reaction:write. */
  apiLikePostPut(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiLikePostPutResponse>({ ...options, method: "PUT", url: `/api/v1/posts/${encodeURIComponent(id)}/like` });
  }
  /** DELETE /api/v1/posts/{id}/reaction; permission: social:reaction:write. */
  apiRemovePostReactionDeleteApiV1PostsIdReaction(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemovePostReactionDeleteApiV1PostsIdReactionResponse>({ ...options, method: "DELETE", url: `/api/v1/posts/${encodeURIComponent(id)}/reaction` });
  }
  /** GET /api/v1/posts/{id}/reaction; permission: social:read. */
  apiPostReactionsGetApiV1PostsIdReaction(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiPostReactionsGetApiV1PostsIdReactionResponse>({ ...options, method: "GET", url: `/api/v1/posts/${encodeURIComponent(id)}/reaction` });
  }
  /** PUT /api/v1/posts/{id}/reaction; permission: social:reaction:write. */
  apiSetPostReactionPut(id: Identifier, data: T.ApiSetPostReactionPutInput, options?: RequestOptions<T.ApiSetPostReactionPutInput>) {
    return this.client.request<T.ApiSetPostReactionPutResponse, T.ApiSetPostReactionPutInput>({ ...options, method: "PUT", url: `/api/v1/posts/${encodeURIComponent(id)}/reaction`, data: data });
  }
  /** DELETE /api/v1/reactions/post/{id}; permission: social:reaction:write. */
  apiRemovePostReactionDeleteApiV1ReactionsPostId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemovePostReactionDeleteApiV1ReactionsPostIdResponse>({ ...options, method: "DELETE", url: `/api/v1/reactions/post/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/reactions/post/{id}; permission: social:read. */
  apiPostReactionsGetApiV1ReactionsPostId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiPostReactionsGetApiV1ReactionsPostIdResponse>({ ...options, method: "GET", url: `/api/v1/reactions/post/${encodeURIComponent(id)}` });
  }
  /** POST /api/v1/reactions/post/{id}; permission: social:reaction:write. */
  apiSetPostReactionPost(id: Identifier, data: T.ApiSetPostReactionPostInput, options?: RequestOptions<T.ApiSetPostReactionPostInput>) {
    return this.client.request<T.ApiSetPostReactionPostResponse, T.ApiSetPostReactionPostInput>({ ...options, method: "POST", url: `/api/v1/reactions/post/${encodeURIComponent(id)}`, data: data });
  }
  /** POST /api/v1/reports; permission: social:report:create. */
  apiCreateReportPost(data: T.ApiCreateReportPostInput, options?: RequestOptions<T.ApiCreateReportPostInput>) {
    return this.client.request<T.ApiCreateReportPostResponse, T.ApiCreateReportPostInput>({ ...options, method: "POST", url: `/api/v1/reports`, data: data });
  }
}

