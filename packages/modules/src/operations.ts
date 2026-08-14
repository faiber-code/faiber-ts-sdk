import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ModulesOperations extends ServiceApi {
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
   * Performs the beautified openapi operation for the router capability.
   * Calls `GET /api-doc/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerBeautifiedOpenapiGet(options?: RequestOptions) {
    return this.client.request<T.RouterBeautifiedOpenapiGetResponse>({ ...options, method: "GET", url: `/api-doc/openapi.json` });
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
   * Performs the list on target operation for the access capability.
   * Calls `GET /api/v1/access/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  accessListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AccessListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Performs the grant on target operation for the access capability.
   * Calls `POST /api/v1/access/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  accessGrantOnTargetPost(host: Identifier, targetId: Identifier, data: T.AccessGrantOnTargetPostInput, options?: RequestOptions<T.AccessGrantOnTargetPostInput>) {
    return this.client.request<T.AccessGrantOnTargetPostResponse, T.AccessGrantOnTargetPostInput>({ ...options, method: "POST", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Performs the revoke on target operation for the access capability.
   * Calls `DELETE /api/v1/access/{host}/{target_id}/{access_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param accessId Backend path identifier `access_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  accessRevokeOnTargetDelete(host: Identifier, targetId: Identifier, accessId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AccessRevokeOnTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}/${encodeURIComponent(accessId)}` });
  }
  /**
   * Performs the update on target operation for the access capability.
   * Calls `PUT /api/v1/access/{host}/{target_id}/{access_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param accessId Backend path identifier `access_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  accessUpdateOnTargetPut(host: Identifier, targetId: Identifier, accessId: Identifier, data: T.AccessUpdateOnTargetPutInput, options?: RequestOptions<T.AccessUpdateOnTargetPutInput>) {
    return this.client.request<T.AccessUpdateOnTargetPutResponse, T.AccessUpdateOnTargetPutInput>({ ...options, method: "PUT", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}/${encodeURIComponent(accessId)}`, data: data });
  }
  /**
   * Performs the list on target operation for the audit log capability.
   * Calls `GET /api/v1/audit-logs/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  auditLogListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuditLogListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/audit-logs/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
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
   * Performs the list authors operation for the author capability.
   * Calls `GET /api/v1/authors` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authorListAuthorsGet(params?: T.AuthorListAuthorsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthorListAuthorsGetResponse>({ ...options, method: "GET", url: `/api/v1/authors`, params });
  }
  /**
   * Performs the create author operation for the author capability.
   * Calls `POST /api/v1/authors` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authorCreateAuthorPost(data: T.AuthorCreateAuthorPostInput, options?: RequestOptions<T.AuthorCreateAuthorPostInput>) {
    return this.client.request<T.AuthorCreateAuthorPostResponse, T.AuthorCreateAuthorPostInput>({ ...options, method: "POST", url: `/api/v1/authors`, data: data });
  }
  /**
   * Performs the delete author operation for the author capability.
   * Calls `DELETE /api/v1/authors/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authorDeleteAuthorDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthorDeleteAuthorDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/authors/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show author operation for the author capability.
   * Calls `GET /api/v1/authors/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authorShowAuthorGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthorShowAuthorGetResponse>({ ...options, method: "GET", url: `/api/v1/authors/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update author operation for the author capability.
   * Calls `PATCH /api/v1/authors/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authorUpdateAuthorPatch(id: Identifier, data: T.AuthorUpdateAuthorPatchInput, options?: RequestOptions<T.AuthorUpdateAuthorPatchInput>) {
    return this.client.request<T.AuthorUpdateAuthorPatchResponse, T.AuthorUpdateAuthorPatchInput>({ ...options, method: "PATCH", url: `/api/v1/authors/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update author operation for the author capability.
   * Calls `PUT /api/v1/authors/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  authorUpdateAuthorPut(id: Identifier, data: T.AuthorUpdateAuthorPutInput, options?: RequestOptions<T.AuthorUpdateAuthorPutInput>) {
    return this.client.request<T.AuthorUpdateAuthorPutResponse, T.AuthorUpdateAuthorPutInput>({ ...options, method: "PUT", url: `/api/v1/authors/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list posts operation for the blog capability.
   * Calls `GET /api/v1/blog/posts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  blogListPostsGet(params?: T.BlogListPostsGetQuery, options?: RequestOptions) {
    return this.client.request<T.BlogListPostsGetResponse>({ ...options, method: "GET", url: `/api/v1/blog/posts`, params });
  }
  /**
   * Performs the create post operation for the blog capability.
   * Calls `POST /api/v1/blog/posts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  blogCreatePostPost(data: T.BlogCreatePostPostInput, options?: RequestOptions<T.BlogCreatePostPostInput>) {
    return this.client.request<T.BlogCreatePostPostResponse, T.BlogCreatePostPostInput>({ ...options, method: "POST", url: `/api/v1/blog/posts`, data: data });
  }
  /**
   * Performs the delete post operation for the blog capability.
   * Calls `DELETE /api/v1/blog/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  blogDeletePostDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.BlogDeletePostDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/blog/posts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show post operation for the blog capability.
   * Calls `GET /api/v1/blog/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  blogShowPostGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.BlogShowPostGetResponse>({ ...options, method: "GET", url: `/api/v1/blog/posts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update post operation for the blog capability.
   * Calls `PATCH /api/v1/blog/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  blogUpdatePostPatch(id: Identifier, data: T.BlogUpdatePostPatchInput, options?: RequestOptions<T.BlogUpdatePostPatchInput>) {
    return this.client.request<T.BlogUpdatePostPatchResponse, T.BlogUpdatePostPatchInput>({ ...options, method: "PATCH", url: `/api/v1/blog/posts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update post operation for the blog capability.
   * Calls `PUT /api/v1/blog/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  blogUpdatePostPut(id: Identifier, data: T.BlogUpdatePostPutInput, options?: RequestOptions<T.BlogUpdatePostPutInput>) {
    return this.client.request<T.BlogUpdatePostPutResponse, T.BlogUpdatePostPutInput>({ ...options, method: "PUT", url: `/api/v1/blog/posts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list categories operation for the category capability.
   * Calls `GET /api/v1/categories` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  categoryListCategoriesGet(params?: T.CategoryListCategoriesGetQuery, options?: RequestOptions) {
    return this.client.request<T.CategoryListCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/categories`, params });
  }
  /**
   * Performs the create category operation for the category capability.
   * Calls `POST /api/v1/categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  categoryCreateCategoryPost(data: T.CategoryCreateCategoryPostInput, options?: RequestOptions<T.CategoryCreateCategoryPostInput>) {
    return this.client.request<T.CategoryCreateCategoryPostResponse, T.CategoryCreateCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/categories`, data: data });
  }
  /**
   * Performs the detach from target operation for the category capability.
   * Calls `DELETE /api/v1/categories/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  categoryDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.CategoryDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.CategoryDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/categories/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * Performs the list on target operation for the category capability.
   * Calls `GET /api/v1/categories/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  categoryListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.CategoryListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/categories/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Performs the attach to target operation for the category capability.
   * Calls `POST /api/v1/categories/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  categoryAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.CategoryAttachToTargetPostInput, options?: RequestOptions<T.CategoryAttachToTargetPostInput>) {
    return this.client.request<T.CategoryAttachToTargetPostResponse, T.CategoryAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/categories/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Performs the delete category operation for the category capability.
   * Calls `DELETE /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  categoryDeleteCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CategoryDeleteCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show category operation for the category capability.
   * Calls `GET /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  categoryShowCategoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CategoryShowCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update category operation for the category capability.
   * Calls `PATCH /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  categoryUpdateCategoryPatch(id: Identifier, data: T.CategoryUpdateCategoryPatchInput, options?: RequestOptions<T.CategoryUpdateCategoryPatchInput>) {
    return this.client.request<T.CategoryUpdateCategoryPatchResponse, T.CategoryUpdateCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update category operation for the category capability.
   * Calls `PUT /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  categoryUpdateCategoryPut(id: Identifier, data: T.CategoryUpdateCategoryPutInput, options?: RequestOptions<T.CategoryUpdateCategoryPutInput>) {
    return this.client.request<T.CategoryUpdateCategoryPutResponse, T.CategoryUpdateCategoryPutInput>({ ...options, method: "PUT", url: `/api/v1/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list comments operation for the comment capability.
   * Calls `GET /api/v1/comments` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  commentListCommentsGet(params?: T.CommentListCommentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.CommentListCommentsGetResponse>({ ...options, method: "GET", url: `/api/v1/comments`, params });
  }
  /**
   * Performs the create comment operation for the comment capability.
   * Calls `POST /api/v1/comments` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  commentCreateCommentPost(data: T.CommentCreateCommentPostInput, options?: RequestOptions<T.CommentCreateCommentPostInput>) {
    return this.client.request<T.CommentCreateCommentPostResponse, T.CommentCreateCommentPostInput>({ ...options, method: "POST", url: `/api/v1/comments`, data: data });
  }
  /**
   * Performs the list on target operation for the comment capability.
   * Calls `GET /api/v1/comments/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  commentListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommentListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/comments/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Performs the create on target operation for the comment capability.
   * Calls `POST /api/v1/comments/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  commentCreateOnTargetPost(host: Identifier, targetId: Identifier, data: T.CommentCreateOnTargetPostInput, options?: RequestOptions<T.CommentCreateOnTargetPostInput>) {
    return this.client.request<T.CommentCreateOnTargetPostResponse, T.CommentCreateOnTargetPostInput>({ ...options, method: "POST", url: `/api/v1/comments/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Performs the delete comment operation for the comment capability.
   * Calls `DELETE /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  commentDeleteCommentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommentDeleteCommentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show comment operation for the comment capability.
   * Calls `GET /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  commentShowCommentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommentShowCommentGetResponse>({ ...options, method: "GET", url: `/api/v1/comments/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update comment operation for the comment capability.
   * Calls `PATCH /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  commentUpdateCommentPatch(id: Identifier, data: T.CommentUpdateCommentPatchInput, options?: RequestOptions<T.CommentUpdateCommentPatchInput>) {
    return this.client.request<T.CommentUpdateCommentPatchResponse, T.CommentUpdateCommentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/comments/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update comment operation for the comment capability.
   * Calls `PUT /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  commentUpdateCommentPut(id: Identifier, data: T.CommentUpdateCommentPutInput, options?: RequestOptions<T.CommentUpdateCommentPutInput>) {
    return this.client.request<T.CommentUpdateCommentPutResponse, T.CommentUpdateCommentPutInput>({ ...options, method: "PUT", url: `/api/v1/comments/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list contents operation for the content capability.
   * Calls `GET /api/v1/contents` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  contentListContentsGet(params?: T.ContentListContentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ContentListContentsGetResponse>({ ...options, method: "GET", url: `/api/v1/contents`, params });
  }
  /**
   * Performs the create content operation for the content capability.
   * Calls `POST /api/v1/contents` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  contentCreateContentPost(data: T.ContentCreateContentPostInput, options?: RequestOptions<T.ContentCreateContentPostInput>) {
    return this.client.request<T.ContentCreateContentPostResponse, T.ContentCreateContentPostInput>({ ...options, method: "POST", url: `/api/v1/contents`, data: data });
  }
  /**
   * Performs the detach from target operation for the content capability.
   * Calls `DELETE /api/v1/contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  contentDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.ContentDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.ContentDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * Performs the list on target operation for the content capability.
   * Calls `GET /api/v1/contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  contentListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ContentListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Performs the attach to target operation for the content capability.
   * Calls `POST /api/v1/contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  contentAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.ContentAttachToTargetPostInput, options?: RequestOptions<T.ContentAttachToTargetPostInput>) {
    return this.client.request<T.ContentAttachToTargetPostResponse, T.ContentAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Performs the delete content operation for the content capability.
   * Calls `DELETE /api/v1/contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  contentDeleteContentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ContentDeleteContentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/contents/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show content operation for the content capability.
   * Calls `GET /api/v1/contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  contentShowContentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ContentShowContentGetResponse>({ ...options, method: "GET", url: `/api/v1/contents/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update content operation for the content capability.
   * Calls `PATCH /api/v1/contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  contentUpdateContentPatch(id: Identifier, data: T.ContentUpdateContentPatchInput, params?: T.ContentUpdateContentPatchQuery, options?: RequestOptions<T.ContentUpdateContentPatchInput>) {
    return this.client.request<T.ContentUpdateContentPatchResponse, T.ContentUpdateContentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/contents/${encodeURIComponent(id)}`, data: data, params });
  }
  /**
   * Performs the update content operation for the content capability.
   * Calls `PUT /api/v1/contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  contentUpdateContentPut(id: Identifier, data: T.ContentUpdateContentPutInput, params?: T.ContentUpdateContentPutQuery, options?: RequestOptions<T.ContentUpdateContentPutInput>) {
    return this.client.request<T.ContentUpdateContentPutResponse, T.ContentUpdateContentPutInput>({ ...options, method: "PUT", url: `/api/v1/contents/${encodeURIComponent(id)}`, data: data, params });
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
   * Performs the list inventories operation for the inventory capability.
   * Calls `GET /api/v1/inventory/inventories` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryListInventoriesGet(params?: T.InventoryListInventoriesGetQuery, options?: RequestOptions) {
    return this.client.request<T.InventoryListInventoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/inventories`, params });
  }
  /**
   * Performs the create inventory operation for the inventory capability.
   * Calls `POST /api/v1/inventory/inventories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryCreateInventoryPost(data: T.InventoryCreateInventoryPostInput, options?: RequestOptions<T.InventoryCreateInventoryPostInput>) {
    return this.client.request<T.InventoryCreateInventoryPostResponse, T.InventoryCreateInventoryPostInput>({ ...options, method: "POST", url: `/api/v1/inventory/inventories`, data: data });
  }
  /**
   * Performs the delete inventory operation for the inventory capability.
   * Calls `DELETE /api/v1/inventory/inventories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryDeleteInventoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryDeleteInventoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show inventory operation for the inventory capability.
   * Calls `GET /api/v1/inventory/inventories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryShowInventoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryShowInventoryGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update inventory operation for the inventory capability.
   * Calls `PATCH /api/v1/inventory/inventories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryUpdateInventoryPatch(id: Identifier, data: T.InventoryUpdateInventoryPatchInput, options?: RequestOptions<T.InventoryUpdateInventoryPatchInput>) {
    return this.client.request<T.InventoryUpdateInventoryPatchResponse, T.InventoryUpdateInventoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update inventory operation for the inventory capability.
   * Calls `PUT /api/v1/inventory/inventories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryUpdateInventoryPut(id: Identifier, data: T.InventoryUpdateInventoryPutInput, options?: RequestOptions<T.InventoryUpdateInventoryPutInput>) {
    return this.client.request<T.InventoryUpdateInventoryPutResponse, T.InventoryUpdateInventoryPutInput>({ ...options, method: "PUT", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list stock movements operation for the stock movement capability.
   * Calls `GET /api/v1/inventory/stock-movements` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  stockMovementListStockMovementsGet(params?: T.StockMovementListStockMovementsGetQuery, options?: RequestOptions) {
    return this.client.request<T.StockMovementListStockMovementsGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/stock-movements`, params });
  }
  /**
   * Performs the create stock movement operation for the stock movement capability.
   * Calls `POST /api/v1/inventory/stock-movements` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  stockMovementCreateStockMovementPost(data: T.StockMovementCreateStockMovementPostInput, options?: RequestOptions<T.StockMovementCreateStockMovementPostInput>) {
    return this.client.request<T.StockMovementCreateStockMovementPostResponse, T.StockMovementCreateStockMovementPostInput>({ ...options, method: "POST", url: `/api/v1/inventory/stock-movements`, data: data });
  }
  /**
   * Performs the list warehouses operation for the inventory capability.
   * Calls `GET /api/v1/inventory/warehouses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryListWarehousesGet(params?: T.InventoryListWarehousesGetQuery, options?: RequestOptions) {
    return this.client.request<T.InventoryListWarehousesGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/warehouses`, params });
  }
  /**
   * Performs the create warehouse operation for the inventory capability.
   * Calls `POST /api/v1/inventory/warehouses` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryCreateWarehousePost(data: T.InventoryCreateWarehousePostInput, options?: RequestOptions<T.InventoryCreateWarehousePostInput>) {
    return this.client.request<T.InventoryCreateWarehousePostResponse, T.InventoryCreateWarehousePostInput>({ ...options, method: "POST", url: `/api/v1/inventory/warehouses`, data: data });
  }
  /**
   * Performs the delete warehouse operation for the inventory capability.
   * Calls `DELETE /api/v1/inventory/warehouses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryDeleteWarehouseDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryDeleteWarehouseDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show warehouse operation for the inventory capability.
   * Calls `GET /api/v1/inventory/warehouses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryShowWarehouseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryShowWarehouseGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update warehouse operation for the inventory capability.
   * Calls `PATCH /api/v1/inventory/warehouses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryUpdateWarehousePatch(id: Identifier, data: T.InventoryUpdateWarehousePatchInput, options?: RequestOptions<T.InventoryUpdateWarehousePatchInput>) {
    return this.client.request<T.InventoryUpdateWarehousePatchResponse, T.InventoryUpdateWarehousePatchInput>({ ...options, method: "PATCH", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update warehouse operation for the inventory capability.
   * Calls `PUT /api/v1/inventory/warehouses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  inventoryUpdateWarehousePut(id: Identifier, data: T.InventoryUpdateWarehousePutInput, options?: RequestOptions<T.InventoryUpdateWarehousePutInput>) {
    return this.client.request<T.InventoryUpdateWarehousePutResponse, T.InventoryUpdateWarehousePutInput>({ ...options, method: "PUT", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the agent models operation for the management api capability.
   * Calls `GET /api/v1/manage/agents/models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiAgentModelsGet(options?: RequestOptions) {
    return this.client.request<T.ManagementApiAgentModelsGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/agents/models` });
  }
  /**
   * Performs the list proposals operation for the management api capability.
   * Calls `GET /api/v1/manage/agents/proposals` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiListProposalsGet(options?: RequestOptions) {
    return this.client.request<T.ManagementApiListProposalsGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/agents/proposals` });
  }
  /**
   * Performs the get proposal operation for the management api capability.
   * Calls `GET /api/v1/manage/agents/proposals/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiGetProposalGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiGetProposalGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/agents/proposals/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the approve proposal operation for the management api capability.
   * Calls `POST /api/v1/manage/agents/proposals/{id}/approve` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiApproveProposalPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiApproveProposalPostResponse>({ ...options, method: "POST", url: `/api/v1/manage/agents/proposals/${encodeURIComponent(id)}/approve` });
  }
  /**
   * Performs the reject proposal operation for the management api capability.
   * Calls `POST /api/v1/manage/agents/proposals/{id}/reject` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiRejectProposalPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiRejectProposalPostResponse>({ ...options, method: "POST", url: `/api/v1/manage/agents/proposals/${encodeURIComponent(id)}/reject` });
  }
  /**
   * Performs the run agent operation for the management api capability.
   * Calls `POST /api/v1/manage/agents/runs` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiRunAgentPost(data: T.ManagementApiRunAgentPostInput, options?: RequestOptions<T.ManagementApiRunAgentPostInput>) {
    return this.client.request<T.ManagementApiRunAgentPostResponse, T.ManagementApiRunAgentPostInput>({ ...options, method: "POST", url: `/api/v1/manage/agents/runs`, data: data });
  }
  /**
   * Performs the list content operation for the management api capability.
   * Calls `GET /api/v1/manage/content` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiListContentGet(params?: T.ManagementApiListContentGetQuery, options?: RequestOptions) {
    return this.client.request<T.ManagementApiListContentGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/content`, params });
  }
  /**
   * Performs the create content operation for the management api capability.
   * Calls `POST /api/v1/manage/content` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiCreateContentPost(data: T.ManagementApiCreateContentPostInput, options?: RequestOptions<T.ManagementApiCreateContentPostInput>) {
    return this.client.request<T.ManagementApiCreateContentPostResponse, T.ManagementApiCreateContentPostInput>({ ...options, method: "POST", url: `/api/v1/manage/content`, data: data });
  }
  /**
   * Performs the get content operation for the management api capability.
   * Calls `GET /api/v1/manage/content/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiGetContentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiGetContentGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/content/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update content operation for the management api capability.
   * Calls `PUT /api/v1/manage/content/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiUpdateContentPut(id: Identifier, data: T.ManagementApiUpdateContentPutInput, options?: RequestOptions<T.ManagementApiUpdateContentPutInput>) {
    return this.client.request<T.ManagementApiUpdateContentPutResponse, T.ManagementApiUpdateContentPutInput>({ ...options, method: "PUT", url: `/api/v1/manage/content/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the publish content operation for the management api capability.
   * Calls `POST /api/v1/manage/content/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiPublishContentPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiPublishContentPostResponse>({ ...options, method: "POST", url: `/api/v1/manage/content/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Performs the list content revisions operation for the management api capability.
   * Calls `GET /api/v1/manage/content/{id}/revisions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiListContentRevisionsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiListContentRevisionsGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/content/${encodeURIComponent(id)}/revisions` });
  }
  /**
   * Performs the restore content revision operation for the management api capability.
   * Calls `POST /api/v1/manage/content/{id}/revisions/{revision}/restore` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param revision Backend path identifier `revision`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiRestoreContentRevisionPost(id: Identifier, revision: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiRestoreContentRevisionPostResponse>({ ...options, method: "POST", url: `/api/v1/manage/content/${encodeURIComponent(id)}/revisions/${encodeURIComponent(revision)}/restore` });
  }
  /**
   * Performs the get settings operation for the management api capability.
   * Calls `GET /api/v1/manage/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiGetSettingsGet(options?: RequestOptions) {
    return this.client.request<T.ManagementApiGetSettingsGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/settings` });
  }
  /**
   * Performs the update settings operation for the management api capability.
   * Calls `PUT /api/v1/manage/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiUpdateSettingsPut(data: T.ManagementApiUpdateSettingsPutInput, options?: RequestOptions<T.ManagementApiUpdateSettingsPutInput>) {
    return this.client.request<T.ManagementApiUpdateSettingsPutResponse, T.ManagementApiUpdateSettingsPutInput>({ ...options, method: "PUT", url: `/api/v1/manage/settings`, data: data });
  }
  /**
   * Performs the get file operation for the media capability.
   * Calls `GET /api/v1/media/files/{*key}` through the shared IDP-aware Faiber client.
   * @param key Backend path identifier `*key`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  mediaGetFileGet(key: Identifier, options?: RequestOptions) {
    return this.client.request<T.MediaGetFileGetResponse>({ ...options, method: "GET", url: `/api/v1/media/files/${encodeURIComponent(key)}` });
  }
  /**
   * Performs the upload image operation for the media capability.
   * Calls `POST /api/v1/media/images` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  mediaUploadImagePost(data: T.MediaUploadImagePostInput, options?: RequestOptions<T.MediaUploadImagePostInput>) {
    return this.client.request<T.MediaUploadImagePostResponse, T.MediaUploadImagePostInput>({ ...options, method: "POST", url: `/api/v1/media/images`, data: data });
  }
  /**
   * Performs the list operation for the podcast capability.
   * Calls `GET /api/v1/podcasts` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  podcastListGet(options?: RequestOptions) {
    return this.client.request<T.PodcastListGetResponse>({ ...options, method: "GET", url: `/api/v1/podcasts` });
  }
  /**
   * Performs the create operation for the podcast capability.
   * Calls `POST /api/v1/podcasts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  podcastCreatePost(data: T.PodcastCreatePostInput, options?: RequestOptions<T.PodcastCreatePostInput>) {
    return this.client.request<T.PodcastCreatePostResponse, T.PodcastCreatePostInput>({ ...options, method: "POST", url: `/api/v1/podcasts`, data: data });
  }
  /**
   * Performs the remove operation for the podcast capability.
   * Calls `DELETE /api/v1/podcasts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  podcastRemoveDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PodcastRemoveDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/podcasts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the podcast capability.
   * Calls `GET /api/v1/podcasts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  podcastShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PodcastShowGetResponse>({ ...options, method: "GET", url: `/api/v1/podcasts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the podcast capability.
   * Calls `PATCH /api/v1/podcasts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  podcastUpdatePatch(id: Identifier, data: T.PodcastUpdatePatchInput, options?: RequestOptions<T.PodcastUpdatePatchInput>) {
    return this.client.request<T.PodcastUpdatePatchResponse, T.PodcastUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/podcasts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the create episode operation for the podcast capability.
   * Calls `POST /api/v1/podcasts/{id}/episodes` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  podcastCreateEpisodePost(id: Identifier, data: T.PodcastCreateEpisodePostInput, options?: RequestOptions<T.PodcastCreateEpisodePostInput>) {
    return this.client.request<T.PodcastCreateEpisodePostResponse, T.PodcastCreateEpisodePostInput>({ ...options, method: "POST", url: `/api/v1/podcasts/${encodeURIComponent(id)}/episodes`, data: data });
  }
  /**
   * Performs the remove episode operation for the podcast capability.
   * Calls `DELETE /api/v1/podcasts/{podcast_id}/episodes/{id}` through the shared IDP-aware Faiber client.
   * @param podcastId Backend path identifier `podcast_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  podcastRemoveEpisodeDelete(podcastId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PodcastRemoveEpisodeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/podcasts/${encodeURIComponent(podcastId)}/episodes/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update episode operation for the podcast capability.
   * Calls `PATCH /api/v1/podcasts/{podcast_id}/episodes/{id}` through the shared IDP-aware Faiber client.
   * @param podcastId Backend path identifier `podcast_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  podcastUpdateEpisodePatch(podcastId: Identifier, id: Identifier, data: T.PodcastUpdateEpisodePatchInput, options?: RequestOptions<T.PodcastUpdateEpisodePatchInput>) {
    return this.client.request<T.PodcastUpdateEpisodePatchResponse, T.PodcastUpdateEpisodePatchInput>({ ...options, method: "PATCH", url: `/api/v1/podcasts/${encodeURIComponent(podcastId)}/episodes/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list pricing operation for the service pricing capability.
   * Calls `GET /api/v1/pricing` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  servicePricingListPricingGet(params?: T.ServicePricingListPricingGetQuery, options?: RequestOptions) {
    return this.client.request<T.ServicePricingListPricingGetResponse>({ ...options, method: "GET", url: `/api/v1/pricing`, params });
  }
  /**
   * Performs the create pricing operation for the service pricing capability.
   * Calls `POST /api/v1/pricing` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  servicePricingCreatePricingPost(data: T.ServicePricingCreatePricingPostInput, options?: RequestOptions<T.ServicePricingCreatePricingPostInput>) {
    return this.client.request<T.ServicePricingCreatePricingPostResponse, T.ServicePricingCreatePricingPostInput>({ ...options, method: "POST", url: `/api/v1/pricing`, data: data });
  }
  /**
   * Performs the delete pricing operation for the service pricing capability.
   * Calls `DELETE /api/v1/pricing/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  servicePricingDeletePricingDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServicePricingDeletePricingDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/pricing/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show pricing operation for the service pricing capability.
   * Calls `GET /api/v1/pricing/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  servicePricingShowPricingGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServicePricingShowPricingGetResponse>({ ...options, method: "GET", url: `/api/v1/pricing/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update pricing operation for the service pricing capability.
   * Calls `PATCH /api/v1/pricing/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  servicePricingUpdatePricingPatch(id: Identifier, data: T.ServicePricingUpdatePricingPatchInput, options?: RequestOptions<T.ServicePricingUpdatePricingPatchInput>) {
    return this.client.request<T.ServicePricingUpdatePricingPatchResponse, T.ServicePricingUpdatePricingPatchInput>({ ...options, method: "PATCH", url: `/api/v1/pricing/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update pricing operation for the service pricing capability.
   * Calls `PUT /api/v1/pricing/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  servicePricingUpdatePricingPut(id: Identifier, data: T.ServicePricingUpdatePricingPutInput, options?: RequestOptions<T.ServicePricingUpdatePricingPutInput>) {
    return this.client.request<T.ServicePricingUpdatePricingPutResponse, T.ServicePricingUpdatePricingPutInput>({ ...options, method: "PUT", url: `/api/v1/pricing/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the public content operation for the management api capability.
   * Calls `GET /api/v1/public/content/{kind}/{locale}/{slug}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param locale Backend path identifier `locale`.
   * @param slug Backend path identifier `slug`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiPublicContentGet(kind: Identifier, locale: Identifier, slug: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiPublicContentGetResponse>({ ...options, method: "GET", url: `/api/v1/public/content/${encodeURIComponent(kind)}/${encodeURIComponent(locale)}/${encodeURIComponent(slug)}` });
  }
  /**
   * Performs the public routes operation for the management api capability.
   * Calls `GET /api/v1/public/routes` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  managementApiPublicRoutesGet(options?: RequestOptions) {
    return this.client.request<T.ManagementApiPublicRoutesGetResponse>({ ...options, method: "GET", url: `/api/v1/public/routes` });
  }
  /**
   * Performs the delete on target operation for the reaction capability.
   * Calls `DELETE /api/v1/reactions/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reactionDeleteOnTargetDelete(host: Identifier, targetId: Identifier, params?: T.ReactionDeleteOnTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.ReactionDeleteOnTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/reactions/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * Performs the list on target operation for the reaction capability.
   * Calls `GET /api/v1/reactions/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reactionListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReactionListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/reactions/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Performs the create on target operation for the reaction capability.
   * Calls `POST /api/v1/reactions/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reactionCreateOnTargetPost(host: Identifier, targetId: Identifier, data: T.ReactionCreateOnTargetPostInput, options?: RequestOptions<T.ReactionCreateOnTargetPostInput>) {
    return this.client.request<T.ReactionCreateOnTargetPostResponse, T.ReactionCreateOnTargetPostInput>({ ...options, method: "POST", url: `/api/v1/reactions/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Performs the list requests operation for the request capability.
   * Calls `GET /api/v1/requests` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestListRequestsGet(params?: T.RequestListRequestsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RequestListRequestsGetResponse>({ ...options, method: "GET", url: `/api/v1/requests`, params });
  }
  /**
   * Performs the create request operation for the request capability.
   * Calls `POST /api/v1/requests` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestCreateRequestPost(data: T.RequestCreateRequestPostInput, options?: RequestOptions<T.RequestCreateRequestPostInput>) {
    return this.client.request<T.RequestCreateRequestPostResponse, T.RequestCreateRequestPostInput>({ ...options, method: "POST", url: `/api/v1/requests`, data: data });
  }
  /**
   * Performs the detach from target operation for the request capability.
   * Calls `DELETE /api/v1/requests/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.RequestDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.RequestDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/requests/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * Performs the list on target operation for the request capability.
   * Calls `GET /api/v1/requests/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Performs the attach to target operation for the request capability.
   * Calls `POST /api/v1/requests/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.RequestAttachToTargetPostInput, options?: RequestOptions<T.RequestAttachToTargetPostInput>) {
    return this.client.request<T.RequestAttachToTargetPostResponse, T.RequestAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/requests/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Performs the delete request operation for the request capability.
   * Calls `DELETE /api/v1/requests/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestDeleteRequestDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestDeleteRequestDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/requests/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show request operation for the request capability.
   * Calls `GET /api/v1/requests/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestShowRequestGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestShowRequestGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update request operation for the request capability.
   * Calls `PATCH /api/v1/requests/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestUpdateRequestPatch(id: Identifier, data: T.RequestUpdateRequestPatchInput, options?: RequestOptions<T.RequestUpdateRequestPatchInput>) {
    return this.client.request<T.RequestUpdateRequestPatchResponse, T.RequestUpdateRequestPatchInput>({ ...options, method: "PATCH", url: `/api/v1/requests/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update request operation for the request capability.
   * Calls `PUT /api/v1/requests/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestUpdateRequestPut(id: Identifier, data: T.RequestUpdateRequestPutInput, options?: RequestOptions<T.RequestUpdateRequestPutInput>) {
    return this.client.request<T.RequestUpdateRequestPutResponse, T.RequestUpdateRequestPutInput>({ ...options, method: "PUT", url: `/api/v1/requests/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list logs for request operation for the request capability.
   * Calls `GET /api/v1/requests/{request_id}/logs` through the shared IDP-aware Faiber client.
   * @param requestId Backend path identifier `request_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestListLogsForRequestGet(requestId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestListLogsForRequestGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/${encodeURIComponent(requestId)}/logs` });
  }
  /**
   * Performs the submit operation for the request capability.
   * Calls `POST /api/v1/requests/{request_id}/logs` through the shared IDP-aware Faiber client.
   * @param requestId Backend path identifier `request_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestSubmitPost(requestId: Identifier, data: T.RequestSubmitPostInput, options?: RequestOptions<T.RequestSubmitPostInput>) {
    return this.client.request<T.RequestSubmitPostResponse, T.RequestSubmitPostInput>({ ...options, method: "POST", url: `/api/v1/requests/${encodeURIComponent(requestId)}/logs`, data: data });
  }
  /**
   * Performs the list logs for category operation for the request capability.
   * Calls `GET /api/v1/requests/category/{category_id}/logs` through the shared IDP-aware Faiber client.
   * @param categoryId Backend path identifier `category_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  requestListLogsForCategoryGet(categoryId: Identifier, params?: T.RequestListLogsForCategoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.RequestListLogsForCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/category/${encodeURIComponent(categoryId)}/logs`, params });
  }
  /**
   * Performs the list samples operation for the user sample capability.
   * Calls `GET /api/v1/samples` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleListSamplesGet(params?: T.UserSampleListSamplesGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserSampleListSamplesGetResponse>({ ...options, method: "GET", url: `/api/v1/samples`, params });
  }
  /**
   * Performs the create sample operation for the user sample capability.
   * Calls `POST /api/v1/samples` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleCreateSamplePost(data: T.UserSampleCreateSamplePostInput, options?: RequestOptions<T.UserSampleCreateSamplePostInput>) {
    return this.client.request<T.UserSampleCreateSamplePostResponse, T.UserSampleCreateSamplePostInput>({ ...options, method: "POST", url: `/api/v1/samples`, data: data });
  }
  /**
   * Performs the delete sample operation for the user sample capability.
   * Calls `DELETE /api/v1/samples/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleDeleteSampleDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleDeleteSampleDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/samples/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show sample operation for the user sample capability.
   * Calls `GET /api/v1/samples/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleShowSampleGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleShowSampleGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update sample operation for the user sample capability.
   * Calls `PATCH /api/v1/samples/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleUpdateSamplePatch(id: Identifier, data: T.UserSampleUpdateSamplePatchInput, options?: RequestOptions<T.UserSampleUpdateSamplePatchInput>) {
    return this.client.request<T.UserSampleUpdateSamplePatchResponse, T.UserSampleUpdateSamplePatchInput>({ ...options, method: "PATCH", url: `/api/v1/samples/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update sample operation for the user sample capability.
   * Calls `PUT /api/v1/samples/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleUpdateSamplePut(id: Identifier, data: T.UserSampleUpdateSamplePutInput, options?: RequestOptions<T.UserSampleUpdateSamplePutInput>) {
    return this.client.request<T.UserSampleUpdateSamplePutResponse, T.UserSampleUpdateSamplePutInput>({ ...options, method: "PUT", url: `/api/v1/samples/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list sample variables operation for the user sample capability.
   * Calls `GET /api/v1/samples/{sample_id}/variables` through the shared IDP-aware Faiber client.
   * @param sampleId Backend path identifier `sample_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleListSampleVariablesGet(sampleId: Identifier, params?: T.UserSampleListSampleVariablesGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserSampleListSampleVariablesGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/${encodeURIComponent(sampleId)}/variables`, params });
  }
  /**
   * Performs the create sample variable operation for the user sample capability.
   * Calls `POST /api/v1/samples/{sample_id}/variables` through the shared IDP-aware Faiber client.
   * @param sampleId Backend path identifier `sample_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleCreateSampleVariablePost(sampleId: Identifier, data: T.UserSampleCreateSampleVariablePostInput, options?: RequestOptions<T.UserSampleCreateSampleVariablePostInput>) {
    return this.client.request<T.UserSampleCreateSampleVariablePostResponse, T.UserSampleCreateSampleVariablePostInput>({ ...options, method: "POST", url: `/api/v1/samples/${encodeURIComponent(sampleId)}/variables`, data: data });
  }
  /**
   * Performs the variables map by slug operation for the user sample capability.
   * Calls `GET /api/v1/samples/by-slug/{slug}/variables-map` through the shared IDP-aware Faiber client.
   * @param slug Backend path identifier `slug`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleVariablesMapBySlugGet(slug: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleVariablesMapBySlugGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/by-slug/${encodeURIComponent(slug)}/variables-map` });
  }
  /**
   * Performs the list all variables operation for the user sample capability.
   * Calls `GET /api/v1/samples/variables` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleListAllVariablesGet(params?: T.UserSampleListAllVariablesGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserSampleListAllVariablesGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/variables`, params });
  }
  /**
   * Performs the delete variable operation for the user sample capability.
   * Calls `DELETE /api/v1/samples/variables/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleDeleteVariableDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleDeleteVariableDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/samples/variables/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show variable operation for the user sample capability.
   * Calls `GET /api/v1/samples/variables/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleShowVariableGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleShowVariableGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/variables/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update variable operation for the user sample capability.
   * Calls `PATCH /api/v1/samples/variables/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleUpdateVariablePatch(id: Identifier, data: T.UserSampleUpdateVariablePatchInput, options?: RequestOptions<T.UserSampleUpdateVariablePatchInput>) {
    return this.client.request<T.UserSampleUpdateVariablePatchResponse, T.UserSampleUpdateVariablePatchInput>({ ...options, method: "PATCH", url: `/api/v1/samples/variables/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update variable operation for the user sample capability.
   * Calls `PUT /api/v1/samples/variables/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  userSampleUpdateVariablePut(id: Identifier, data: T.UserSampleUpdateVariablePutInput, options?: RequestOptions<T.UserSampleUpdateVariablePutInput>) {
    return this.client.request<T.UserSampleUpdateVariablePutResponse, T.UserSampleUpdateVariablePutInput>({ ...options, method: "PUT", url: `/api/v1/samples/variables/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list seo contents operation for the seo content capability.
   * Calls `GET /api/v1/seo-contents` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  seoContentListSeoContentsGet(params?: T.SeoContentListSeoContentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.SeoContentListSeoContentsGetResponse>({ ...options, method: "GET", url: `/api/v1/seo-contents`, params });
  }
  /**
   * Performs the create seo content operation for the seo content capability.
   * Calls `POST /api/v1/seo-contents` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  seoContentCreateSeoContentPost(data: T.SeoContentCreateSeoContentPostInput, options?: RequestOptions<T.SeoContentCreateSeoContentPostInput>) {
    return this.client.request<T.SeoContentCreateSeoContentPostResponse, T.SeoContentCreateSeoContentPostInput>({ ...options, method: "POST", url: `/api/v1/seo-contents`, data: data });
  }
  /**
   * Performs the detach from target operation for the seo content capability.
   * Calls `DELETE /api/v1/seo-contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  seoContentDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.SeoContentDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.SeoContentDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/seo-contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * Performs the list on target operation for the seo content capability.
   * Calls `GET /api/v1/seo-contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  seoContentListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SeoContentListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/seo-contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Performs the attach to target operation for the seo content capability.
   * Calls `POST /api/v1/seo-contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  seoContentAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.SeoContentAttachToTargetPostInput, options?: RequestOptions<T.SeoContentAttachToTargetPostInput>) {
    return this.client.request<T.SeoContentAttachToTargetPostResponse, T.SeoContentAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/seo-contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Performs the delete seo content operation for the seo content capability.
   * Calls `DELETE /api/v1/seo-contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  seoContentDeleteSeoContentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SeoContentDeleteSeoContentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/seo-contents/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show seo content operation for the seo content capability.
   * Calls `GET /api/v1/seo-contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  seoContentShowSeoContentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SeoContentShowSeoContentGetResponse>({ ...options, method: "GET", url: `/api/v1/seo-contents/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update seo content operation for the seo content capability.
   * Calls `PATCH /api/v1/seo-contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  seoContentUpdateSeoContentPatch(id: Identifier, data: T.SeoContentUpdateSeoContentPatchInput, options?: RequestOptions<T.SeoContentUpdateSeoContentPatchInput>) {
    return this.client.request<T.SeoContentUpdateSeoContentPatchResponse, T.SeoContentUpdateSeoContentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/seo-contents/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update seo content operation for the seo content capability.
   * Calls `PUT /api/v1/seo-contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  seoContentUpdateSeoContentPut(id: Identifier, data: T.SeoContentUpdateSeoContentPutInput, options?: RequestOptions<T.SeoContentUpdateSeoContentPutInput>) {
    return this.client.request<T.SeoContentUpdateSeoContentPutResponse, T.SeoContentUpdateSeoContentPutInput>({ ...options, method: "PUT", url: `/api/v1/seo-contents/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the show operation for the cart capability.
   * Calls `GET /api/v1/shop/cart` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  cartShowGet(options?: RequestOptions) {
    return this.client.request<T.CartShowGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/cart` });
  }
  /**
   * Performs the replace operation for the cart capability.
   * Calls `PUT /api/v1/shop/cart` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  cartReplacePut(data: T.CartReplacePutInput, options?: RequestOptions<T.CartReplacePutInput>) {
    return this.client.request<T.CartReplacePutResponse, T.CartReplacePutInput>({ ...options, method: "PUT", url: `/api/v1/shop/cart`, data: data });
  }
  /**
   * Performs the list orders operation for the order capability.
   * Calls `GET /api/v1/shop/orders` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  orderListOrdersGet(params?: T.OrderListOrdersGetQuery, options?: RequestOptions) {
    return this.client.request<T.OrderListOrdersGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/orders`, params });
  }
  /**
   * Performs the create order operation for the order capability.
   * Calls `POST /api/v1/shop/orders` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  orderCreateOrderPost(data: T.OrderCreateOrderPostInput, options?: RequestOptions<T.OrderCreateOrderPostInput>) {
    return this.client.request<T.OrderCreateOrderPostResponse, T.OrderCreateOrderPostInput>({ ...options, method: "POST", url: `/api/v1/shop/orders`, data: data });
  }
  /**
   * Performs the delete order operation for the order capability.
   * Calls `DELETE /api/v1/shop/orders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  orderDeleteOrderDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderDeleteOrderDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/shop/orders/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show order operation for the order capability.
   * Calls `GET /api/v1/shop/orders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  orderShowOrderGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderShowOrderGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/orders/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update order operation for the order capability.
   * Calls `PATCH /api/v1/shop/orders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  orderUpdateOrderPatch(id: Identifier, data: T.OrderUpdateOrderPatchInput, options?: RequestOptions<T.OrderUpdateOrderPatchInput>) {
    return this.client.request<T.OrderUpdateOrderPatchResponse, T.OrderUpdateOrderPatchInput>({ ...options, method: "PATCH", url: `/api/v1/shop/orders/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update order operation for the order capability.
   * Calls `PUT /api/v1/shop/orders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  orderUpdateOrderPut(id: Identifier, data: T.OrderUpdateOrderPutInput, options?: RequestOptions<T.OrderUpdateOrderPutInput>) {
    return this.client.request<T.OrderUpdateOrderPutResponse, T.OrderUpdateOrderPutInput>({ ...options, method: "PUT", url: `/api/v1/shop/orders/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list order items operation for the order capability.
   * Calls `GET /api/v1/shop/orders/{order_id}/items` through the shared IDP-aware Faiber client.
   * @param orderId Backend path identifier `order_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  orderListOrderItemsGet(orderId: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderListOrderItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/orders/${encodeURIComponent(orderId)}/items` });
  }
  /**
   * Performs the add order item operation for the order capability.
   * Calls `POST /api/v1/shop/orders/{order_id}/items` through the shared IDP-aware Faiber client.
   * @param orderId Backend path identifier `order_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  orderAddOrderItemPost(orderId: Identifier, data: T.OrderAddOrderItemPostInput, options?: RequestOptions<T.OrderAddOrderItemPostInput>) {
    return this.client.request<T.OrderAddOrderItemPostResponse, T.OrderAddOrderItemPostInput>({ ...options, method: "POST", url: `/api/v1/shop/orders/${encodeURIComponent(orderId)}/items`, data: data });
  }
  /**
   * Performs the list products operation for the product capability.
   * Calls `GET /api/v1/shop/products` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productListProductsGet(params?: T.ProductListProductsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProductListProductsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/products`, params });
  }
  /**
   * Performs the create product operation for the product capability.
   * Calls `POST /api/v1/shop/products` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productCreateProductPost(data: T.ProductCreateProductPostInput, options?: RequestOptions<T.ProductCreateProductPostInput>) {
    return this.client.request<T.ProductCreateProductPostResponse, T.ProductCreateProductPostInput>({ ...options, method: "POST", url: `/api/v1/shop/products`, data: data });
  }
  /**
   * Performs the delete product operation for the product capability.
   * Calls `DELETE /api/v1/shop/products/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productDeleteProductDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductDeleteProductDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/shop/products/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show product operation for the product capability.
   * Calls `GET /api/v1/shop/products/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productShowProductGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductShowProductGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/products/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update product operation for the product capability.
   * Calls `PATCH /api/v1/shop/products/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productUpdateProductPatch(id: Identifier, data: T.ProductUpdateProductPatchInput, options?: RequestOptions<T.ProductUpdateProductPatchInput>) {
    return this.client.request<T.ProductUpdateProductPatchResponse, T.ProductUpdateProductPatchInput>({ ...options, method: "PATCH", url: `/api/v1/shop/products/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update product operation for the product capability.
   * Calls `PUT /api/v1/shop/products/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productUpdateProductPut(id: Identifier, data: T.ProductUpdateProductPutInput, options?: RequestOptions<T.ProductUpdateProductPutInput>) {
    return this.client.request<T.ProductUpdateProductPutResponse, T.ProductUpdateProductPutInput>({ ...options, method: "PUT", url: `/api/v1/shop/products/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list product variants operation for the product capability.
   * Calls `GET /api/v1/shop/products/{product_id}/variants` through the shared IDP-aware Faiber client.
   * @param productId Backend path identifier `product_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productListProductVariantsGet(productId: Identifier, params?: T.ProductListProductVariantsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProductListProductVariantsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, params });
  }
  /**
   * Performs the create variant operation for the product capability.
   * Calls `POST /api/v1/shop/products/{product_id}/variants` through the shared IDP-aware Faiber client.
   * @param productId Backend path identifier `product_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productCreateVariantPost(productId: Identifier, data: T.ProductCreateVariantPostInput, options?: RequestOptions<T.ProductCreateVariantPostInput>) {
    return this.client.request<T.ProductCreateVariantPostResponse, T.ProductCreateVariantPostInput>({ ...options, method: "POST", url: `/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, data: data });
  }
  /**
   * Performs the list variants operation for the product capability.
   * Calls `GET /api/v1/shop/variants` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productListVariantsGet(params?: T.ProductListVariantsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProductListVariantsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/variants`, params });
  }
  /**
   * Performs the delete variant operation for the product capability.
   * Calls `DELETE /api/v1/shop/variants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productDeleteVariantDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductDeleteVariantDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/shop/variants/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show variant operation for the product capability.
   * Calls `GET /api/v1/shop/variants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productShowVariantGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductShowVariantGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/variants/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update variant operation for the product capability.
   * Calls `PATCH /api/v1/shop/variants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productUpdateVariantPatch(id: Identifier, data: T.ProductUpdateVariantPatchInput, options?: RequestOptions<T.ProductUpdateVariantPatchInput>) {
    return this.client.request<T.ProductUpdateVariantPatchResponse, T.ProductUpdateVariantPatchInput>({ ...options, method: "PATCH", url: `/api/v1/shop/variants/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update variant operation for the product capability.
   * Calls `PUT /api/v1/shop/variants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  productUpdateVariantPut(id: Identifier, data: T.ProductUpdateVariantPutInput, options?: RequestOptions<T.ProductUpdateVariantPutInput>) {
    return this.client.request<T.ProductUpdateVariantPutResponse, T.ProductUpdateVariantPutInput>({ ...options, method: "PUT", url: `/api/v1/shop/variants/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list tags operation for the tag capability.
   * Calls `GET /api/v1/tags` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  tagListTagsGet(params?: T.TagListTagsGetQuery, options?: RequestOptions) {
    return this.client.request<T.TagListTagsGetResponse>({ ...options, method: "GET", url: `/api/v1/tags`, params });
  }
  /**
   * Performs the create tag operation for the tag capability.
   * Calls `POST /api/v1/tags` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  tagCreateTagPost(data: T.TagCreateTagPostInput, options?: RequestOptions<T.TagCreateTagPostInput>) {
    return this.client.request<T.TagCreateTagPostResponse, T.TagCreateTagPostInput>({ ...options, method: "POST", url: `/api/v1/tags`, data: data });
  }
  /**
   * Performs the detach from target operation for the tag capability.
   * Calls `DELETE /api/v1/tags/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  tagDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.TagDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.TagDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/tags/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * Performs the list on target operation for the tag capability.
   * Calls `GET /api/v1/tags/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  tagListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.TagListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/tags/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Performs the attach to target operation for the tag capability.
   * Calls `POST /api/v1/tags/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  tagAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.TagAttachToTargetPostInput, options?: RequestOptions<T.TagAttachToTargetPostInput>) {
    return this.client.request<T.TagAttachToTargetPostResponse, T.TagAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/tags/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Performs the delete tag operation for the tag capability.
   * Calls `DELETE /api/v1/tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  tagDeleteTagDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TagDeleteTagDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/tags/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show tag operation for the tag capability.
   * Calls `GET /api/v1/tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  tagShowTagGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TagShowTagGetResponse>({ ...options, method: "GET", url: `/api/v1/tags/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update tag operation for the tag capability.
   * Calls `PATCH /api/v1/tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  tagUpdateTagPatch(id: Identifier, data: T.TagUpdateTagPatchInput, options?: RequestOptions<T.TagUpdateTagPatchInput>) {
    return this.client.request<T.TagUpdateTagPatchResponse, T.TagUpdateTagPatchInput>({ ...options, method: "PATCH", url: `/api/v1/tags/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update tag operation for the tag capability.
   * Calls `PUT /api/v1/tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  tagUpdateTagPut(id: Identifier, data: T.TagUpdateTagPutInput, options?: RequestOptions<T.TagUpdateTagPutInput>) {
    return this.client.request<T.TagUpdateTagPutResponse, T.TagUpdateTagPutInput>({ ...options, method: "PUT", url: `/api/v1/tags/${encodeURIComponent(id)}`, data: data });
  }
}

