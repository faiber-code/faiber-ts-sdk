import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";
function wildcardPath(path: Identifier): string {
  const parts = String(path).split("/");
  if (parts.some(part => !part || part === "." || part === ".." || /[%?#\\]/.test(part))) throw new TypeError("Wildcard paths require nonempty raw segments without dot traversal, percent escapes, query, fragment or backslash");
  return parts.map(part => encodeURIComponent(part)).join("/");
}

export class ModulesOperations extends ServiceApi {
  /**
   * Read process liveness and static package version in status/message/data; does not probe dependency readiness.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Read the raw OpenAPI document. Its annotations omit mounted operations and are not a completeness guarantee.
   * Calls `GET /api-doc/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  routerBeautifiedOpenapiGet(options?: RequestOptions) {
    return this.client.request<T.RouterBeautifiedOpenapiGetResponse>({ ...options, method: "GET", url: `/api-doc/openapi.json` });
  }
  /**
   * Read the raw OpenAPI document. Its annotations omit mounted operations and are not a completeness guarantee.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * List on target using the mounted access handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `GET /api/v1/access/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  accessListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AccessListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Grant on target using the mounted access handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `POST /api/v1/access/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  accessGrantOnTargetPost(host: Identifier, targetId: Identifier, data: T.AccessGrantOnTargetPostInput, options?: RequestOptions<T.AccessGrantOnTargetPostInput>) {
    return this.client.request<T.AccessGrantOnTargetPostResponse, T.AccessGrantOnTargetPostInput>({ ...options, method: "POST", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Revoke on target using the mounted access handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.
   * Calls `DELETE /api/v1/access/{host}/{target_id}/{access_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param accessId Backend path identifier `access_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  accessRevokeOnTargetDelete(host: Identifier, targetId: Identifier, accessId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AccessRevokeOnTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}/${encodeURIComponent(accessId)}` });
  }
  /**
   * Update on target using the mounted access handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `PUT /api/v1/access/{host}/{target_id}/{access_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param accessId Backend path identifier `access_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  accessUpdateOnTargetPut(host: Identifier, targetId: Identifier, accessId: Identifier, data: T.AccessUpdateOnTargetPutInput, options?: RequestOptions<T.AccessUpdateOnTargetPutInput>) {
    return this.client.request<T.AccessUpdateOnTargetPutResponse, T.AccessUpdateOnTargetPutInput>({ ...options, method: "PUT", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}/${encodeURIComponent(accessId)}`, data: data });
  }
  /**
   * List on target using the mounted audit log handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `GET /api/v1/audit-logs/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  auditLogListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuditLogListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/audit-logs/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Get self using the mounted session handler.
   * Calls `GET /api/v1/auth/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  sessionGetSelfGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /**
   * List authors using the mounted author handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/authors` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  authorListAuthorsGet(params?: T.AuthorListAuthorsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthorListAuthorsGetResponse>({ ...options, method: "GET", url: `/api/v1/authors`, params });
  }
  /**
   * Create author using the mounted author handler.
   * Calls `POST /api/v1/authors` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  authorCreateAuthorPost(data: T.AuthorCreateAuthorPostInput, options?: RequestOptions<T.AuthorCreateAuthorPostInput>) {
    return this.client.request<T.AuthorCreateAuthorPostResponse, T.AuthorCreateAuthorPostInput>({ ...options, method: "POST", url: `/api/v1/authors`, data: data });
  }
  /**
   * Delete author using the mounted author handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/authors/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  authorDeleteAuthorDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthorDeleteAuthorDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/authors/${encodeURIComponent(id)}` });
  }
  /**
   * Show author using the mounted author handler.
   * Calls `GET /api/v1/authors/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  authorShowAuthorGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthorShowAuthorGetResponse>({ ...options, method: "GET", url: `/api/v1/authors/${encodeURIComponent(id)}` });
  }
  /**
   * Update author using the mounted author handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/authors/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  authorUpdateAuthorPatch(id: Identifier, data: T.AuthorUpdateAuthorPatchInput, options?: RequestOptions<T.AuthorUpdateAuthorPatchInput>) {
    return this.client.request<T.AuthorUpdateAuthorPatchResponse, T.AuthorUpdateAuthorPatchInput>({ ...options, method: "PATCH", url: `/api/v1/authors/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update author using the mounted author handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/authors/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  authorUpdateAuthorPut(id: Identifier, data: T.AuthorUpdateAuthorPutInput, options?: RequestOptions<T.AuthorUpdateAuthorPutInput>) {
    return this.client.request<T.AuthorUpdateAuthorPutResponse, T.AuthorUpdateAuthorPutInput>({ ...options, method: "PUT", url: `/api/v1/authors/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List posts using the mounted blog handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/blog/posts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  blogListPostsGet(params?: T.BlogListPostsGetQuery, options?: RequestOptions) {
    return this.client.request<T.BlogListPostsGetResponse>({ ...options, method: "GET", url: `/api/v1/blog/posts`, params });
  }
  /**
   * Create post using the mounted blog handler.
   * Calls `POST /api/v1/blog/posts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  blogCreatePostPost(data: T.BlogCreatePostPostInput, options?: RequestOptions<T.BlogCreatePostPostInput>) {
    return this.client.request<T.BlogCreatePostPostResponse, T.BlogCreatePostPostInput>({ ...options, method: "POST", url: `/api/v1/blog/posts`, data: data });
  }
  /**
   * Delete post using the mounted blog handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/blog/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  blogDeletePostDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.BlogDeletePostDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/blog/posts/${encodeURIComponent(id)}` });
  }
  /**
   * Show post using the mounted blog handler.
   * Calls `GET /api/v1/blog/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  blogShowPostGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.BlogShowPostGetResponse>({ ...options, method: "GET", url: `/api/v1/blog/posts/${encodeURIComponent(id)}` });
  }
  /**
   * Update post using the mounted blog handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/blog/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  blogUpdatePostPatch(id: Identifier, data: T.BlogUpdatePostPatchInput, options?: RequestOptions<T.BlogUpdatePostPatchInput>) {
    return this.client.request<T.BlogUpdatePostPatchResponse, T.BlogUpdatePostPatchInput>({ ...options, method: "PATCH", url: `/api/v1/blog/posts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update post using the mounted blog handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/blog/posts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  blogUpdatePostPut(id: Identifier, data: T.BlogUpdatePostPutInput, options?: RequestOptions<T.BlogUpdatePostPutInput>) {
    return this.client.request<T.BlogUpdatePostPutResponse, T.BlogUpdatePostPutInput>({ ...options, method: "PUT", url: `/api/v1/blog/posts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List categories using the mounted category handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key. Search trims a literal case-insensitive substring, allows at most 128 Unicode characters and no NUL, and returns normalized search or null.
   * Calls `GET /api/v1/categories` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  categoryListCategoriesGet(params?: T.CategoryListCategoriesGetQuery, options?: RequestOptions) {
    return this.client.request<T.CategoryListCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/categories`, params });
  }
  /**
   * Create category using the mounted category handler.
   * Calls `POST /api/v1/categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  categoryCreateCategoryPost(data: T.CategoryCreateCategoryPostInput, options?: RequestOptions<T.CategoryCreateCategoryPostInput>) {
    return this.client.request<T.CategoryCreateCategoryPostResponse, T.CategoryCreateCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/categories`, data: data });
  }
  /**
   * Detach from target using the mounted category handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.
   * Calls `DELETE /api/v1/categories/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  categoryDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.CategoryDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.CategoryDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/categories/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * List on target using the mounted category handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `GET /api/v1/categories/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  categoryListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.CategoryListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/categories/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Attach to target using the mounted category handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `POST /api/v1/categories/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  categoryAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.CategoryAttachToTargetPostInput, options?: RequestOptions<T.CategoryAttachToTargetPostInput>) {
    return this.client.request<T.CategoryAttachToTargetPostResponse, T.CategoryAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/categories/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Delete category using the mounted category handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  categoryDeleteCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CategoryDeleteCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Show category using the mounted category handler.
   * Calls `GET /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  categoryShowCategoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CategoryShowCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Update category using the mounted category handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  categoryUpdateCategoryPatch(id: Identifier, data: T.CategoryUpdateCategoryPatchInput, options?: RequestOptions<T.CategoryUpdateCategoryPatchInput>) {
    return this.client.request<T.CategoryUpdateCategoryPatchResponse, T.CategoryUpdateCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update category using the mounted category handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  categoryUpdateCategoryPut(id: Identifier, data: T.CategoryUpdateCategoryPutInput, options?: RequestOptions<T.CategoryUpdateCategoryPutInput>) {
    return this.client.request<T.CategoryUpdateCategoryPutResponse, T.CategoryUpdateCategoryPutInput>({ ...options, method: "PUT", url: `/api/v1/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List comments using the mounted comment handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/comments` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  commentListCommentsGet(params?: T.CommentListCommentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.CommentListCommentsGetResponse>({ ...options, method: "GET", url: `/api/v1/comments`, params });
  }
  /**
   * Create comment using the mounted comment handler.
   * Calls `POST /api/v1/comments` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  commentCreateCommentPost(data: T.CommentCreateCommentPostInput, options?: RequestOptions<T.CommentCreateCommentPostInput>) {
    return this.client.request<T.CommentCreateCommentPostResponse, T.CommentCreateCommentPostInput>({ ...options, method: "POST", url: `/api/v1/comments`, data: data });
  }
  /**
   * List on target using the mounted comment handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `GET /api/v1/comments/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  commentListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommentListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/comments/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Create on target using the mounted comment handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `POST /api/v1/comments/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  commentCreateOnTargetPost(host: Identifier, targetId: Identifier, data: T.CommentCreateOnTargetPostInput, options?: RequestOptions<T.CommentCreateOnTargetPostInput>) {
    return this.client.request<T.CommentCreateOnTargetPostResponse, T.CommentCreateOnTargetPostInput>({ ...options, method: "POST", url: `/api/v1/comments/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Delete comment using the mounted comment handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  commentDeleteCommentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommentDeleteCommentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}` });
  }
  /**
   * Show comment using the mounted comment handler.
   * Calls `GET /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  commentShowCommentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommentShowCommentGetResponse>({ ...options, method: "GET", url: `/api/v1/comments/${encodeURIComponent(id)}` });
  }
  /**
   * Update comment using the mounted comment handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  commentUpdateCommentPatch(id: Identifier, data: T.CommentUpdateCommentPatchInput, options?: RequestOptions<T.CommentUpdateCommentPatchInput>) {
    return this.client.request<T.CommentUpdateCommentPatchResponse, T.CommentUpdateCommentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/comments/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update comment using the mounted comment handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/comments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  commentUpdateCommentPut(id: Identifier, data: T.CommentUpdateCommentPutInput, options?: RequestOptions<T.CommentUpdateCommentPutInput>) {
    return this.client.request<T.CommentUpdateCommentPutResponse, T.CommentUpdateCommentPutInput>({ ...options, method: "PUT", url: `/api/v1/comments/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List contents using the mounted content handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/contents` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  contentListContentsGet(params?: T.ContentListContentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ContentListContentsGetResponse>({ ...options, method: "GET", url: `/api/v1/contents`, params });
  }
  /**
   * Create content using the mounted content handler.
   * Calls `POST /api/v1/contents` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  contentCreateContentPost(data: T.ContentCreateContentPostInput, options?: RequestOptions<T.ContentCreateContentPostInput>) {
    return this.client.request<T.ContentCreateContentPostResponse, T.ContentCreateContentPostInput>({ ...options, method: "POST", url: `/api/v1/contents`, data: data });
  }
  /**
   * Detach from target using the mounted content handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.
   * Calls `DELETE /api/v1/contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  contentDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.ContentDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.ContentDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * List on target using the mounted content handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `GET /api/v1/contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  contentListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ContentListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Attach to target using the mounted content handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `POST /api/v1/contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  contentAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.ContentAttachToTargetPostInput, options?: RequestOptions<T.ContentAttachToTargetPostInput>) {
    return this.client.request<T.ContentAttachToTargetPostResponse, T.ContentAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Delete content using the mounted content handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  contentDeleteContentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ContentDeleteContentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/contents/${encodeURIComponent(id)}` });
  }
  /**
   * Show content using the mounted content handler.
   * Calls `GET /api/v1/contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  contentShowContentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ContentShowContentGetResponse>({ ...options, method: "GET", url: `/api/v1/contents/${encodeURIComponent(id)}` });
  }
  /**
   * Update content using the mounted content handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted. autosave=true writes only auto_saved_content; otherwise content is written. When both host and target_id are supplied, non-autosave updates require Editor/Maintainer junction access; omitting either skips that local access check.
   * Calls `PATCH /api/v1/contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP/gateway deployment policy; non-autosave update with both host and target_id additionally requires Editor/Maintainer access on that target.
   */
  contentUpdateContentPatch(id: Identifier, data: T.ContentUpdateContentPatchInput, params?: T.ContentUpdateContentPatchQuery, options?: RequestOptions<T.ContentUpdateContentPatchInput>) {
    return this.client.request<T.ContentUpdateContentPatchResponse, T.ContentUpdateContentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/contents/${encodeURIComponent(id)}`, data: data, params });
  }
  /**
   * Update content using the mounted content handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted. autosave=true writes only auto_saved_content; otherwise content is written. When both host and target_id are supplied, non-autosave updates require Editor/Maintainer junction access; omitting either skips that local access check.
   * Calls `PUT /api/v1/contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP/gateway deployment policy; non-autosave update with both host and target_id additionally requires Editor/Maintainer access on that target.
   */
  contentUpdateContentPut(id: Identifier, data: T.ContentUpdateContentPutInput, params?: T.ContentUpdateContentPutQuery, options?: RequestOptions<T.ContentUpdateContentPutInput>) {
    return this.client.request<T.ContentUpdateContentPutResponse, T.ContentUpdateContentPutInput>({ ...options, method: "PUT", url: `/api/v1/contents/${encodeURIComponent(id)}`, data: data, params });
  }
  /**
   * List inventories using the mounted inventory handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/inventory/inventories` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryListInventoriesGet(params?: T.InventoryListInventoriesGetQuery, options?: RequestOptions) {
    return this.client.request<T.InventoryListInventoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/inventories`, params });
  }
  /**
   * Create inventory using the mounted inventory handler.
   * Calls `POST /api/v1/inventory/inventories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryCreateInventoryPost(data: T.InventoryCreateInventoryPostInput, options?: RequestOptions<T.InventoryCreateInventoryPostInput>) {
    return this.client.request<T.InventoryCreateInventoryPostResponse, T.InventoryCreateInventoryPostInput>({ ...options, method: "POST", url: `/api/v1/inventory/inventories`, data: data });
  }
  /**
   * Delete inventory using the mounted inventory handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/inventory/inventories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryDeleteInventoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryDeleteInventoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}` });
  }
  /**
   * Show inventory using the mounted inventory handler.
   * Calls `GET /api/v1/inventory/inventories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryShowInventoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryShowInventoryGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}` });
  }
  /**
   * Update inventory using the mounted inventory handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/inventory/inventories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryUpdateInventoryPatch(id: Identifier, data: T.InventoryUpdateInventoryPatchInput, options?: RequestOptions<T.InventoryUpdateInventoryPatchInput>) {
    return this.client.request<T.InventoryUpdateInventoryPatchResponse, T.InventoryUpdateInventoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update inventory using the mounted inventory handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/inventory/inventories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryUpdateInventoryPut(id: Identifier, data: T.InventoryUpdateInventoryPutInput, options?: RequestOptions<T.InventoryUpdateInventoryPutInput>) {
    return this.client.request<T.InventoryUpdateInventoryPutResponse, T.InventoryUpdateInventoryPutInput>({ ...options, method: "PUT", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List stock movements using the mounted stock movement handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/inventory/stock-movements` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  stockMovementListStockMovementsGet(params?: T.StockMovementListStockMovementsGetQuery, options?: RequestOptions) {
    return this.client.request<T.StockMovementListStockMovementsGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/stock-movements`, params });
  }
  /**
   * Apply an IN, OUT or ADJUST movement (case-insensitive input) transactionally to existing variant/warehouse inventory. OUT rejects insufficient unreserved stock; unknown movement type returns 400. Returns the concrete movement record in the success envelope.
   * Calls `POST /api/v1/inventory/stock-movements` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  stockMovementCreateStockMovementPost(data: T.StockMovementCreateStockMovementPostInput, options?: RequestOptions<T.StockMovementCreateStockMovementPostInput>) {
    return this.client.request<T.StockMovementCreateStockMovementPostResponse, T.StockMovementCreateStockMovementPostInput>({ ...options, method: "POST", url: `/api/v1/inventory/stock-movements`, data: data });
  }
  /**
   * List warehouses using the mounted inventory handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/inventory/warehouses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryListWarehousesGet(params?: T.InventoryListWarehousesGetQuery, options?: RequestOptions) {
    return this.client.request<T.InventoryListWarehousesGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/warehouses`, params });
  }
  /**
   * Create warehouse using the mounted inventory handler.
   * Calls `POST /api/v1/inventory/warehouses` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryCreateWarehousePost(data: T.InventoryCreateWarehousePostInput, options?: RequestOptions<T.InventoryCreateWarehousePostInput>) {
    return this.client.request<T.InventoryCreateWarehousePostResponse, T.InventoryCreateWarehousePostInput>({ ...options, method: "POST", url: `/api/v1/inventory/warehouses`, data: data });
  }
  /**
   * Delete warehouse using the mounted inventory handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/inventory/warehouses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryDeleteWarehouseDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryDeleteWarehouseDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}` });
  }
  /**
   * Show warehouse using the mounted inventory handler.
   * Calls `GET /api/v1/inventory/warehouses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryShowWarehouseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryShowWarehouseGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}` });
  }
  /**
   * Update warehouse using the mounted inventory handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/inventory/warehouses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryUpdateWarehousePatch(id: Identifier, data: T.InventoryUpdateWarehousePatchInput, options?: RequestOptions<T.InventoryUpdateWarehousePatchInput>) {
    return this.client.request<T.InventoryUpdateWarehousePatchResponse, T.InventoryUpdateWarehousePatchInput>({ ...options, method: "PATCH", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update warehouse using the mounted inventory handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/inventory/warehouses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  inventoryUpdateWarehousePut(id: Identifier, data: T.InventoryUpdateWarehousePutInput, options?: RequestOptions<T.InventoryUpdateWarehousePutInput>) {
    return this.client.request<T.InventoryUpdateWarehousePutResponse, T.InventoryUpdateWarehousePutInput>({ ...options, method: "PUT", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read the trusted Agentic model catalog, preserving provider and billing-authority fields; upstream configuration/unavailability returns 503/502.
   * Calls `GET /api/v1/manage/agents/models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: agent:run with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiAgentModelsGet(options?: RequestOptions) {
    return this.client.request<T.ManagementApiAgentModelsGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/agents/models` });
  }
  /**
   * List proposals using the mounted management api handler.
   * Calls `GET /api/v1/manage/agents/proposals` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: agent:audit with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiListProposalsGet(options?: RequestOptions) {
    return this.client.request<T.ManagementApiListProposalsGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/agents/proposals` });
  }
  /**
   * Get proposal using the mounted management api handler.
   * Calls `GET /api/v1/manage/agents/proposals/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: agent:audit with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiGetProposalGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiGetProposalGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/agents/proposals/${encodeURIComponent(id)}` });
  }
  /**
   * Approve proposal using the mounted management api handler.
   * Calls `POST /api/v1/manage/agents/proposals/{id}/approve` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: agent:apply with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted; risky proposals additionally require agent:approve-risky.
   */
  managementApiApproveProposalPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiApproveProposalPostResponse>({ ...options, method: "POST", url: `/api/v1/manage/agents/proposals/${encodeURIComponent(id)}/approve` });
  }
  /**
   * Reject proposal using the mounted management api handler.
   * Calls `POST /api/v1/manage/agents/proposals/{id}/reject` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: agent:apply with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiRejectProposalPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiRejectProposalPostResponse>({ ...options, method: "POST", url: `/api/v1/manage/agents/proposals/${encodeURIComponent(id)}/reject` });
  }
  /**
   * Start or replay an agent proposal with a required nonblank Idempotency-Key (at most 128 bytes) supplied in options.headers. Returns text/event-stream, including error events and 15-second keep-alives; this is SSE text, not a JSON envelope.
   * Calls `POST /api/v1/manage/agents/runs` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: agent:run with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiRunAgentPost(data: T.ManagementApiRunAgentPostInput, options?: RequestOptions<T.ManagementApiRunAgentPostInput>) {
    return this.client.request<T.ManagementApiRunAgentPostResponse, T.ManagementApiRunAgentPostInput>({ ...options, method: "POST", url: `/api/v1/manage/agents/runs`, data: data, responseType: "text" });
  }
  /**
   * List content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes.
   * Calls `GET /api/v1/manage/content` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: content:read with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiListContentGet(params?: T.ManagementApiListContentGetQuery, options?: RequestOptions) {
    return this.client.request<T.ManagementApiListContentGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/content`, params });
  }
  /**
   * Create content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes. Slug is 1–255 alphanumeric/dash/underscore characters, locale 1–16 bytes and title 1–500 characters; HTML is sanitized server-side.
   * Calls `POST /api/v1/manage/content` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: content:write with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiCreateContentPost(data: T.ManagementApiCreateContentPostInput, options?: RequestOptions<T.ManagementApiCreateContentPostInput>) {
    return this.client.request<T.ManagementApiCreateContentPostResponse, T.ManagementApiCreateContentPostInput>({ ...options, method: "POST", url: `/api/v1/manage/content`, data: data });
  }
  /**
   * Get content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes.
   * Calls `GET /api/v1/manage/content/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: content:read with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiGetContentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiGetContentGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/content/${encodeURIComponent(id)}` });
  }
  /**
   * Update content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes. Supply If-Match with the current UUID ETag in options.headers; absent header returns 428 and stale ETag returns 412. Slug is 1–255 alphanumeric/dash/underscore characters, locale 1–16 bytes and title 1–500 characters; HTML is sanitized server-side.
   * Calls `PUT /api/v1/manage/content/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: content:write with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiUpdateContentPut(id: Identifier, data: T.ManagementApiUpdateContentPutInput, options?: RequestOptions<T.ManagementApiUpdateContentPutInput>) {
    return this.client.request<T.ManagementApiUpdateContentPutResponse, T.ManagementApiUpdateContentPutInput>({ ...options, method: "PUT", url: `/api/v1/manage/content/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Publish content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes. Supply If-Match with the current UUID ETag in options.headers; absent header returns 428 and stale ETag returns 412.
   * Calls `POST /api/v1/manage/content/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: content:publish with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiPublishContentPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiPublishContentPostResponse>({ ...options, method: "POST", url: `/api/v1/manage/content/${encodeURIComponent(id)}/publish` });
  }
  /**
   * List content revisions using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes.
   * Calls `GET /api/v1/manage/content/{id}/revisions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: content:read with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiListContentRevisionsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiListContentRevisionsGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/content/${encodeURIComponent(id)}/revisions` });
  }
  /**
   * Restore content revision using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes. Supply If-Match with the current UUID ETag in options.headers; absent header returns 428 and stale ETag returns 412.
   * Calls `POST /api/v1/manage/content/{id}/revisions/{revision}/restore` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param revision Backend path identifier `revision`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: content:write with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiRestoreContentRevisionPost(id: Identifier, revision: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiRestoreContentRevisionPostResponse>({ ...options, method: "POST", url: `/api/v1/manage/content/${encodeURIComponent(id)}/revisions/${encodeURIComponent(revision)}/restore` });
  }
  /**
   * Upsert category using the mounted content transfer handler.
   * Calls `PUT /api/v1/manage/import/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: content:write with authenticated actor; published content additionally requires content:publish.
   */
  contentTransferUpsertCategoryPut(id: Identifier, data: T.ContentTransferUpsertCategoryPutInput, options?: RequestOptions<T.ContentTransferUpsertCategoryPutInput>) {
    return this.client.request<T.ContentTransferUpsertCategoryPutResponse, T.ContentTransferUpsertCategoryPutInput>({ ...options, method: "PUT", url: `/api/v1/manage/import/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Upsert content using the mounted content transfer handler.
   * Calls `PUT /api/v1/manage/import/content/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: content:write with authenticated actor; published content additionally requires content:publish.
   */
  contentTransferUpsertContentPut(id: Identifier, data: T.ContentTransferUpsertContentPutInput, options?: RequestOptions<T.ContentTransferUpsertContentPutInput>) {
    return this.client.request<T.ContentTransferUpsertContentPutResponse, T.ContentTransferUpsertContentPutInput>({ ...options, method: "PUT", url: `/api/v1/manage/import/content/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Get settings using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes.
   * Calls `GET /api/v1/manage/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: settings:read with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiGetSettingsGet(options?: RequestOptions) {
    return this.client.request<T.ManagementApiGetSettingsGetResponse>({ ...options, method: "GET", url: `/api/v1/manage/settings` });
  }
  /**
   * Update settings using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes. Supply If-Match with the current UUID ETag in options.headers; absent header returns 428 and stale ETag returns 412.
   * Calls `PUT /api/v1/manage/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: settings:write with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted.
   */
  managementApiUpdateSettingsPut(data: T.ManagementApiUpdateSettingsPutInput, options?: RequestOptions<T.ManagementApiUpdateSettingsPutInput>) {
    return this.client.request<T.ManagementApiUpdateSettingsPutResponse, T.ManagementApiUpdateSettingsPutInput>({ ...options, method: "PUT", url: `/api/v1/manage/settings`, data: data });
  }
  /**
   * Upload multipart fields kind and file. Images accept JPEG/PNG/WebP/GIF/AVIF up to 10 MiB; assets also accept MP4/WebM/QuickTime up to 250 MiB. Empty/oversized files return 413, unsupported formats 415; purpose must be a supported Modules media kind.
   * Calls `POST /api/v1/media/assets` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated UUID identity in x-user-id, normally resolved from configured Bearer/cookie credentials.
   */
  mediaUploadAssetPost(data: T.MediaUploadAssetPostInput, options?: RequestOptions<T.MediaUploadAssetPostInput>) {
    return this.client.request<T.MediaUploadAssetPostResponse, T.MediaUploadAssetPostInput>({ ...options, method: "POST", url: `/api/v1/media/assets`, data: data });
  }
  /**
   * Download object bytes by a raw modules/ storage key. Keys containing .. are rejected; missing objects return 404. Successful responses preserve content type and immutable cache headers.
   * Calls `GET /api/v1/media/files/{*key}` through the shared IDP-aware Faiber client.
   * @param key Backend path identifier `*key`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  mediaGetFileGet(key: Identifier, options?: RequestOptions) {
    return this.client.request<T.MediaGetFileGetResponse>({ ...options, method: "GET", url: `/api/v1/media/files/${wildcardPath(key)}`, responseType: "arraybuffer" });
  }
  /**
   * Upload multipart fields kind and file. Images accept JPEG/PNG/WebP/GIF/AVIF up to 10 MiB; assets also accept MP4/WebM/QuickTime up to 250 MiB. Empty/oversized files return 413, unsupported formats 415; purpose must be a supported Modules media kind.
   * Calls `POST /api/v1/media/images` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated UUID identity in x-user-id, normally resolved from configured Bearer/cookie credentials.
   */
  mediaUploadImagePost(data: T.MediaUploadImagePostInput, options?: RequestOptions<T.MediaUploadImagePostInput>) {
    return this.client.request<T.MediaUploadImagePostResponse, T.MediaUploadImagePostInput>({ ...options, method: "POST", url: `/api/v1/media/images`, data: data });
  }
  /**
   * List using the mounted podcast handler. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.
   * Calls `GET /api/v1/podcasts` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  podcastListGet(options?: RequestOptions) {
    return this.client.request<T.PodcastListGetResponse>({ ...options, method: "GET", url: `/api/v1/podcasts` });
  }
  /**
   * Create using the mounted podcast handler. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.
   * Calls `POST /api/v1/podcasts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  podcastCreatePost(data: T.PodcastCreatePostInput, options?: RequestOptions<T.PodcastCreatePostInput>) {
    return this.client.request<T.PodcastCreatePostResponse, T.PodcastCreatePostInput>({ ...options, method: "POST", url: `/api/v1/podcasts`, data: data });
  }
  /**
   * Remove using the mounted podcast handler. Returns HTTP 200 with status/message and no data member. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.
   * Calls `DELETE /api/v1/podcasts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  podcastRemoveDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PodcastRemoveDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/podcasts/${encodeURIComponent(id)}` });
  }
  /**
   * Show using the mounted podcast handler. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.
   * Calls `GET /api/v1/podcasts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  podcastShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PodcastShowGetResponse>({ ...options, method: "GET", url: `/api/v1/podcasts/${encodeURIComponent(id)}` });
  }
  /**
   * Update using the mounted podcast handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.
   * Calls `PATCH /api/v1/podcasts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  podcastUpdatePatch(id: Identifier, data: T.PodcastUpdatePatchInput, options?: RequestOptions<T.PodcastUpdatePatchInput>) {
    return this.client.request<T.PodcastUpdatePatchResponse, T.PodcastUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/podcasts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Create episode using the mounted podcast handler. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.
   * Calls `POST /api/v1/podcasts/{id}/episodes` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  podcastCreateEpisodePost(id: Identifier, data: T.PodcastCreateEpisodePostInput, options?: RequestOptions<T.PodcastCreateEpisodePostInput>) {
    return this.client.request<T.PodcastCreateEpisodePostResponse, T.PodcastCreateEpisodePostInput>({ ...options, method: "POST", url: `/api/v1/podcasts/${encodeURIComponent(id)}/episodes`, data: data });
  }
  /**
   * Remove episode using the mounted podcast handler. Returns HTTP 200 with status/message and no data member. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.
   * Calls `DELETE /api/v1/podcasts/{podcast_id}/episodes/{id}` through the shared IDP-aware Faiber client.
   * @param podcastId Backend path identifier `podcast_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  podcastRemoveEpisodeDelete(podcastId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PodcastRemoveEpisodeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/podcasts/${encodeURIComponent(podcastId)}/episodes/${encodeURIComponent(id)}` });
  }
  /**
   * Update episode using the mounted podcast handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.
   * Calls `PATCH /api/v1/podcasts/{podcast_id}/episodes/{id}` through the shared IDP-aware Faiber client.
   * @param podcastId Backend path identifier `podcast_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  podcastUpdateEpisodePatch(podcastId: Identifier, id: Identifier, data: T.PodcastUpdateEpisodePatchInput, options?: RequestOptions<T.PodcastUpdateEpisodePatchInput>) {
    return this.client.request<T.PodcastUpdateEpisodePatchResponse, T.PodcastUpdateEpisodePatchInput>({ ...options, method: "PATCH", url: `/api/v1/podcasts/${encodeURIComponent(podcastId)}/episodes/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List pricing using the mounted service pricing handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/pricing` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  servicePricingListPricingGet(params?: T.ServicePricingListPricingGetQuery, options?: RequestOptions) {
    return this.client.request<T.ServicePricingListPricingGetResponse>({ ...options, method: "GET", url: `/api/v1/pricing`, params });
  }
  /**
   * Create pricing using the mounted service pricing handler.
   * Calls `POST /api/v1/pricing` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  servicePricingCreatePricingPost(data: T.ServicePricingCreatePricingPostInput, options?: RequestOptions<T.ServicePricingCreatePricingPostInput>) {
    return this.client.request<T.ServicePricingCreatePricingPostResponse, T.ServicePricingCreatePricingPostInput>({ ...options, method: "POST", url: `/api/v1/pricing`, data: data });
  }
  /**
   * Delete pricing using the mounted service pricing handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/pricing/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  servicePricingDeletePricingDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServicePricingDeletePricingDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/pricing/${encodeURIComponent(id)}` });
  }
  /**
   * Show pricing using the mounted service pricing handler.
   * Calls `GET /api/v1/pricing/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  servicePricingShowPricingGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServicePricingShowPricingGetResponse>({ ...options, method: "GET", url: `/api/v1/pricing/${encodeURIComponent(id)}` });
  }
  /**
   * Update pricing using the mounted service pricing handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/pricing/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  servicePricingUpdatePricingPatch(id: Identifier, data: T.ServicePricingUpdatePricingPatchInput, options?: RequestOptions<T.ServicePricingUpdatePricingPatchInput>) {
    return this.client.request<T.ServicePricingUpdatePricingPatchResponse, T.ServicePricingUpdatePricingPatchInput>({ ...options, method: "PATCH", url: `/api/v1/pricing/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update pricing using the mounted service pricing handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/pricing/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  servicePricingUpdatePricingPut(id: Identifier, data: T.ServicePricingUpdatePricingPutInput, options?: RequestOptions<T.ServicePricingUpdatePricingPutInput>) {
    return this.client.request<T.ServicePricingUpdatePricingPutResponse, T.ServicePricingUpdatePricingPutInput>({ ...options, method: "PUT", url: `/api/v1/pricing/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List active nondeleted categories by scope and locale; returns raw records with nullable parent and legacy references.
   * Calls `GET /api/v1/public/categories/{scope}/{locale}` through the shared IDP-aware Faiber client.
   * @param scope Backend path identifier `scope`.
   * @param locale Backend path identifier `locale`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  contentTransferListPublicCategoriesGet(scope: Identifier, locale: Identifier, options?: RequestOptions) {
    return this.client.request<T.ContentTransferListPublicCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/public/categories/${encodeURIComponent(scope)}/${encodeURIComponent(locale)}` });
  }
  /**
   * List published documents by kind/locale with optional active category slug. Published timestamps must be null or due; page defaults to 1, size to 12 (1–100), ordered newest first with UUID tie-break.
   * Calls `GET /api/v1/public/content/{kind}/{locale}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param locale Backend path identifier `locale`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  contentTransferListPublicContentGet(kind: Identifier, locale: Identifier, params?: T.ContentTransferListPublicContentGetQuery, options?: RequestOptions) {
    return this.client.request<T.ContentTransferListPublicContentGetResponse>({ ...options, method: "GET", url: `/api/v1/public/content/${encodeURIComponent(kind)}/${encodeURIComponent(locale)}`, params });
  }
  /**
   * Public content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes.
   * Calls `GET /api/v1/public/content/{kind}/{locale}/{slug}` through the shared IDP-aware Faiber client.
   * @param kind Backend path identifier `kind`.
   * @param locale Backend path identifier `locale`.
   * @param slug Backend path identifier `slug`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  managementApiPublicContentGet(kind: Identifier, locale: Identifier, slug: Identifier, options?: RequestOptions) {
    return this.client.request<T.ManagementApiPublicContentGetResponse>({ ...options, method: "GET", url: `/api/v1/public/content/${encodeURIComponent(kind)}/${encodeURIComponent(locale)}/${encodeURIComponent(slug)}` });
  }
  /**
   * Submit a configured website_contact, website_newsletter or website_waitlist form with a non-nil replay UUID, valid email and blank website honeypot. Request body is limited to 20 KiB; invalid input returns 422, missing forms 404, rate limits 429 and changed replay payloads 409.
   * Calls `POST /api/v1/public/requests/{key}` through the shared IDP-aware Faiber client.
   * @param key Backend path identifier `key`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestSubmitPostApiV1PublicRequestsKey(key: Identifier, data: T.RequestSubmitPostApiV1PublicRequestsKeyInput, options?: RequestOptions<T.RequestSubmitPostApiV1PublicRequestsKeyInput>) {
    return this.client.request<T.RequestSubmitPostApiV1PublicRequestsKeyResponse, T.RequestSubmitPostApiV1PublicRequestsKeyInput>({ ...options, method: "POST", url: `/api/v1/public/requests/${encodeURIComponent(key)}`, data: data });
  }
  /**
   * Public routes using the mounted management api handler.
   * Calls `GET /api/v1/public/routes` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  managementApiPublicRoutesGet(options?: RequestOptions) {
    return this.client.request<T.ManagementApiPublicRoutesGetResponse>({ ...options, method: "GET", url: `/api/v1/public/routes` });
  }
  /**
   * Search published posts and nonzero-status products after Persian/Arabic normalization. Fewer than two normalized characters return an empty list; over 120 characters or a locale over 16 bytes return 400. Scope is posts/products/mixed; limit defaults to 8 and clamps to 1–20. Returns raw ranked suggestions with nullable metadata.
   * Calls `GET /api/v1/public/search/autocomplete` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  searchAutocompleteGet(params: T.SearchAutocompleteGetQuery, options?: RequestOptions) {
    return this.client.request<T.SearchAutocompleteGetResponse>({ ...options, method: "GET", url: `/api/v1/public/search/autocomplete`, params });
  }
  /**
   * Page published active variants and products without supplier/cost/owner fields; page clamps to 1–10000, 100 items per page plus hasMore. Stock is computed from available inventory.
   * Calls `GET /api/v1/public/shop/products` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  routerListGet(params?: T.RouterListGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListGetResponse>({ ...options, method: "GET", url: `/api/v1/public/shop/products`, params });
  }
  /**
   * Delete on target using the mounted reaction handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.
   * Calls `DELETE /api/v1/reactions/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  reactionDeleteOnTargetDelete(host: Identifier, targetId: Identifier, params?: T.ReactionDeleteOnTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.ReactionDeleteOnTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/reactions/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * List on target using the mounted reaction handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `GET /api/v1/reactions/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  reactionListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReactionListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/reactions/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Create on target using the mounted reaction handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `POST /api/v1/reactions/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  reactionCreateOnTargetPost(host: Identifier, targetId: Identifier, data: T.ReactionCreateOnTargetPostInput, options?: RequestOptions<T.ReactionCreateOnTargetPostInput>) {
    return this.client.request<T.ReactionCreateOnTargetPostResponse, T.ReactionCreateOnTargetPostInput>({ ...options, method: "POST", url: `/api/v1/reactions/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * List requests using the mounted request handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/requests` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestListRequestsGet(params?: T.RequestListRequestsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RequestListRequestsGetResponse>({ ...options, method: "GET", url: `/api/v1/requests`, params });
  }
  /**
   * Create request using the mounted request handler.
   * Calls `POST /api/v1/requests` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestCreateRequestPost(data: T.RequestCreateRequestPostInput, options?: RequestOptions<T.RequestCreateRequestPostInput>) {
    return this.client.request<T.RequestCreateRequestPostResponse, T.RequestCreateRequestPostInput>({ ...options, method: "POST", url: `/api/v1/requests`, data: data });
  }
  /**
   * Detach from target using the mounted request handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.
   * Calls `DELETE /api/v1/requests/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.RequestDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.RequestDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/requests/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * List on target using the mounted request handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `GET /api/v1/requests/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Attach to target using the mounted request handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `POST /api/v1/requests/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.RequestAttachToTargetPostInput, options?: RequestOptions<T.RequestAttachToTargetPostInput>) {
    return this.client.request<T.RequestAttachToTargetPostResponse, T.RequestAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/requests/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Delete request using the mounted request handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/requests/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestDeleteRequestDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestDeleteRequestDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/requests/${encodeURIComponent(id)}` });
  }
  /**
   * Show request using the mounted request handler.
   * Calls `GET /api/v1/requests/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestShowRequestGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestShowRequestGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/${encodeURIComponent(id)}` });
  }
  /**
   * Update request using the mounted request handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/requests/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestUpdateRequestPatch(id: Identifier, data: T.RequestUpdateRequestPatchInput, options?: RequestOptions<T.RequestUpdateRequestPatchInput>) {
    return this.client.request<T.RequestUpdateRequestPatchResponse, T.RequestUpdateRequestPatchInput>({ ...options, method: "PATCH", url: `/api/v1/requests/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update request using the mounted request handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/requests/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestUpdateRequestPut(id: Identifier, data: T.RequestUpdateRequestPutInput, options?: RequestOptions<T.RequestUpdateRequestPutInput>) {
    return this.client.request<T.RequestUpdateRequestPutResponse, T.RequestUpdateRequestPutInput>({ ...options, method: "PUT", url: `/api/v1/requests/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List logs for request using the mounted request handler.
   * Calls `GET /api/v1/requests/{request_id}/logs` through the shared IDP-aware Faiber client.
   * @param requestId Backend path identifier `request_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestListLogsForRequestGet(requestId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestListLogsForRequestGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/${encodeURIComponent(requestId)}/logs` });
  }
  /**
   * Submit using the mounted request handler.
   * Calls `POST /api/v1/requests/{request_id}/logs` through the shared IDP-aware Faiber client.
   * @param requestId Backend path identifier `request_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestSubmitPost(requestId: Identifier, data: T.RequestSubmitPostInput, options?: RequestOptions<T.RequestSubmitPostInput>) {
    return this.client.request<T.RequestSubmitPostResponse, T.RequestSubmitPostInput>({ ...options, method: "POST", url: `/api/v1/requests/${encodeURIComponent(requestId)}/logs`, data: data });
  }
  /**
   * List logs for category using the mounted request handler.
   * Calls `GET /api/v1/requests/category/{category_id}/logs` through the shared IDP-aware Faiber client.
   * @param categoryId Backend path identifier `category_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  requestListLogsForCategoryGet(categoryId: Identifier, params?: T.RequestListLogsForCategoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.RequestListLogsForCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/category/${encodeURIComponent(categoryId)}/logs`, params });
  }
  /**
   * Initialize the three website form definitions idempotently; requires authenticated admin role or modules:request:create and returns raw {ready:true}.
   * Calls `POST /api/v1/requests/website-defaults` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil identity with admin role or modules:request:create permission.
   */
  routerInitializePost(options?: RequestOptions) {
    return this.client.request<T.RouterInitializePostResponse>({ ...options, method: "POST", url: `/api/v1/requests/website-defaults` });
  }
  /**
   * List samples using the mounted user sample handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/samples` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleListSamplesGet(params?: T.UserSampleListSamplesGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserSampleListSamplesGetResponse>({ ...options, method: "GET", url: `/api/v1/samples`, params });
  }
  /**
   * Create sample using the mounted user sample handler.
   * Calls `POST /api/v1/samples` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleCreateSamplePost(data: T.UserSampleCreateSamplePostInput, options?: RequestOptions<T.UserSampleCreateSamplePostInput>) {
    return this.client.request<T.UserSampleCreateSamplePostResponse, T.UserSampleCreateSamplePostInput>({ ...options, method: "POST", url: `/api/v1/samples`, data: data });
  }
  /**
   * Delete sample using the mounted user sample handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/samples/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleDeleteSampleDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleDeleteSampleDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/samples/${encodeURIComponent(id)}` });
  }
  /**
   * Show sample using the mounted user sample handler.
   * Calls `GET /api/v1/samples/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleShowSampleGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleShowSampleGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/${encodeURIComponent(id)}` });
  }
  /**
   * Update sample using the mounted user sample handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/samples/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleUpdateSamplePatch(id: Identifier, data: T.UserSampleUpdateSamplePatchInput, options?: RequestOptions<T.UserSampleUpdateSamplePatchInput>) {
    return this.client.request<T.UserSampleUpdateSamplePatchResponse, T.UserSampleUpdateSamplePatchInput>({ ...options, method: "PATCH", url: `/api/v1/samples/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update sample using the mounted user sample handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/samples/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleUpdateSamplePut(id: Identifier, data: T.UserSampleUpdateSamplePutInput, options?: RequestOptions<T.UserSampleUpdateSamplePutInput>) {
    return this.client.request<T.UserSampleUpdateSamplePutResponse, T.UserSampleUpdateSamplePutInput>({ ...options, method: "PUT", url: `/api/v1/samples/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List sample variables using the mounted user sample handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/samples/{sample_id}/variables` through the shared IDP-aware Faiber client.
   * @param sampleId Backend path identifier `sample_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleListSampleVariablesGet(sampleId: Identifier, params?: T.UserSampleListSampleVariablesGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserSampleListSampleVariablesGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/${encodeURIComponent(sampleId)}/variables`, params });
  }
  /**
   * Create sample variable using the mounted user sample handler.
   * Calls `POST /api/v1/samples/{sample_id}/variables` through the shared IDP-aware Faiber client.
   * @param sampleId Backend path identifier `sample_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleCreateSampleVariablePost(sampleId: Identifier, data: T.UserSampleCreateSampleVariablePostInput, options?: RequestOptions<T.UserSampleCreateSampleVariablePostInput>) {
    return this.client.request<T.UserSampleCreateSampleVariablePostResponse, T.UserSampleCreateSampleVariablePostInput>({ ...options, method: "POST", url: `/api/v1/samples/${encodeURIComponent(sampleId)}/variables`, data: data });
  }
  /**
   * Variables map by slug using the mounted user sample handler.
   * Calls `GET /api/v1/samples/by-slug/{slug}/variables-map` through the shared IDP-aware Faiber client.
   * @param slug Backend path identifier `slug`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleVariablesMapBySlugGet(slug: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleVariablesMapBySlugGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/by-slug/${encodeURIComponent(slug)}/variables-map` });
  }
  /**
   * List all variables using the mounted user sample handler.
   * Calls `GET /api/v1/samples/variables` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleListAllVariablesGet(params?: T.UserSampleListAllVariablesGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserSampleListAllVariablesGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/variables`, params });
  }
  /**
   * Delete variable using the mounted user sample handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/samples/variables/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleDeleteVariableDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleDeleteVariableDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/samples/variables/${encodeURIComponent(id)}` });
  }
  /**
   * Show variable using the mounted user sample handler.
   * Calls `GET /api/v1/samples/variables/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleShowVariableGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleShowVariableGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/variables/${encodeURIComponent(id)}` });
  }
  /**
   * Update variable using the mounted user sample handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/samples/variables/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleUpdateVariablePatch(id: Identifier, data: T.UserSampleUpdateVariablePatchInput, options?: RequestOptions<T.UserSampleUpdateVariablePatchInput>) {
    return this.client.request<T.UserSampleUpdateVariablePatchResponse, T.UserSampleUpdateVariablePatchInput>({ ...options, method: "PATCH", url: `/api/v1/samples/variables/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update variable using the mounted user sample handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/samples/variables/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  userSampleUpdateVariablePut(id: Identifier, data: T.UserSampleUpdateVariablePutInput, options?: RequestOptions<T.UserSampleUpdateVariablePutInput>) {
    return this.client.request<T.UserSampleUpdateVariablePutResponse, T.UserSampleUpdateVariablePutInput>({ ...options, method: "PUT", url: `/api/v1/samples/variables/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List seo contents using the mounted seo content handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key. Search trims a literal case-insensitive substring, allows at most 128 Unicode characters and no NUL, and returns normalized search or null.
   * Calls `GET /api/v1/seo-contents` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  seoContentListSeoContentsGet(params?: T.SeoContentListSeoContentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.SeoContentListSeoContentsGetResponse>({ ...options, method: "GET", url: `/api/v1/seo-contents`, params });
  }
  /**
   * Create seo content using the mounted seo content handler.
   * Calls `POST /api/v1/seo-contents` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  seoContentCreateSeoContentPost(data: T.SeoContentCreateSeoContentPostInput, options?: RequestOptions<T.SeoContentCreateSeoContentPostInput>) {
    return this.client.request<T.SeoContentCreateSeoContentPostResponse, T.SeoContentCreateSeoContentPostInput>({ ...options, method: "POST", url: `/api/v1/seo-contents`, data: data });
  }
  /**
   * Detach from target using the mounted seo content handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.
   * Calls `DELETE /api/v1/seo-contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  seoContentDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.SeoContentDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.SeoContentDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/seo-contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * List on target using the mounted seo content handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `GET /api/v1/seo-contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  seoContentListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SeoContentListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/seo-contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Attach to target using the mounted seo content handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `POST /api/v1/seo-contents/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  seoContentAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.SeoContentAttachToTargetPostInput, options?: RequestOptions<T.SeoContentAttachToTargetPostInput>) {
    return this.client.request<T.SeoContentAttachToTargetPostResponse, T.SeoContentAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/seo-contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Delete seo content using the mounted seo content handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/seo-contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  seoContentDeleteSeoContentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SeoContentDeleteSeoContentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/seo-contents/${encodeURIComponent(id)}` });
  }
  /**
   * Show seo content using the mounted seo content handler.
   * Calls `GET /api/v1/seo-contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  seoContentShowSeoContentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SeoContentShowSeoContentGetResponse>({ ...options, method: "GET", url: `/api/v1/seo-contents/${encodeURIComponent(id)}` });
  }
  /**
   * Update seo content using the mounted seo content handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/seo-contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  seoContentUpdateSeoContentPatch(id: Identifier, data: T.SeoContentUpdateSeoContentPatchInput, options?: RequestOptions<T.SeoContentUpdateSeoContentPatchInput>) {
    return this.client.request<T.SeoContentUpdateSeoContentPatchResponse, T.SeoContentUpdateSeoContentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/seo-contents/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update seo content using the mounted seo content handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/seo-contents/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  seoContentUpdateSeoContentPut(id: Identifier, data: T.SeoContentUpdateSeoContentPutInput, options?: RequestOptions<T.SeoContentUpdateSeoContentPutInput>) {
    return this.client.request<T.SeoContentUpdateSeoContentPutResponse, T.SeoContentUpdateSeoContentPutInput>({ ...options, method: "PUT", url: `/api/v1/seo-contents/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Show using the mounted cart handler.
   * Calls `GET /api/v1/shop/cart` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  cartShowGet(options?: RequestOptions) {
    return this.client.request<T.CartShowGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/cart` });
  }
  /**
   * Replace using the mounted cart handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/shop/cart` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  cartReplacePut(data: T.CartReplacePutInput, options?: RequestOptions<T.CartReplacePutInput>) {
    return this.client.request<T.CartReplacePutResponse, T.CartReplacePutInput>({ ...options, method: "PUT", url: `/api/v1/shop/cart`, data: data });
  }
  /**
   * Read using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `GET /api/v1/shop/checkout/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderReadGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderReadGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/checkout/${encodeURIComponent(id)}` });
  }
  /**
   * Cancel using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `POST /api/v1/shop/checkout/{id}/cancel` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderCancelPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderCancelPostResponse>({ ...options, method: "POST", url: `/api/v1/shop/checkout/${encodeURIComponent(id)}/cancel` });
  }
  /**
   * Pay using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `POST /api/v1/shop/checkout/{id}/pay` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderPayPost(id: Identifier, data: T.OrderPayPostInput, options?: RequestOptions<T.OrderPayPostInput>) {
    return this.client.request<T.OrderPayPostResponse, T.OrderPayPostInput>({ ...options, method: "POST", url: `/api/v1/shop/checkout/${encodeURIComponent(id)}/pay`, data: data });
  }
  /**
   * Quote using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `POST /api/v1/shop/checkout/quote` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderQuotePost(data: T.OrderQuotePostInput, options?: RequestOptions<T.OrderQuotePostInput>) {
    return this.client.request<T.OrderQuotePostResponse, T.OrderQuotePostInput>({ ...options, method: "POST", url: `/api/v1/shop/checkout/quote`, data: data });
  }
  /**
   * List orders using the mounted order handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `GET /api/v1/shop/orders` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderListOrdersGet(params?: T.OrderListOrdersGetQuery, options?: RequestOptions) {
    return this.client.request<T.OrderListOrdersGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/orders`, params });
  }
  /**
   * Create order using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `POST /api/v1/shop/orders` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderCreateOrderPost(data: T.OrderCreateOrderPostInput, options?: RequestOptions<T.OrderCreateOrderPostInput>) {
    return this.client.request<T.OrderCreateOrderPostResponse, T.OrderCreateOrderPostInput>({ ...options, method: "POST", url: `/api/v1/shop/orders`, data: data });
  }
  /**
   * Delete order using the mounted order handler. Returns HTTP 200 with status/message and no data member. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `DELETE /api/v1/shop/orders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderDeleteOrderDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderDeleteOrderDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/shop/orders/${encodeURIComponent(id)}` });
  }
  /**
   * Show order using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `GET /api/v1/shop/orders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderShowOrderGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderShowOrderGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/orders/${encodeURIComponent(id)}` });
  }
  /**
   * Update order using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `PATCH /api/v1/shop/orders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderUpdateOrderPatch(id: Identifier, data: T.OrderUpdateOrderPatchInput, options?: RequestOptions<T.OrderUpdateOrderPatchInput>) {
    return this.client.request<T.OrderUpdateOrderPatchResponse, T.OrderUpdateOrderPatchInput>({ ...options, method: "PATCH", url: `/api/v1/shop/orders/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update order using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `PUT /api/v1/shop/orders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderUpdateOrderPut(id: Identifier, data: T.OrderUpdateOrderPutInput, options?: RequestOptions<T.OrderUpdateOrderPutInput>) {
    return this.client.request<T.OrderUpdateOrderPutResponse, T.OrderUpdateOrderPutInput>({ ...options, method: "PUT", url: `/api/v1/shop/orders/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List order items using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `GET /api/v1/shop/orders/{order_id}/items` through the shared IDP-aware Faiber client.
   * @param orderId Backend path identifier `order_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderListOrderItemsGet(orderId: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderListOrderItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/orders/${encodeURIComponent(orderId)}/items` });
  }
  /**
   * Add order item using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1–10000 across 1–100 unique variants. Checkout transitions enforce stock and payment state.
   * Calls `POST /api/v1/shop/orders/{order_id}/items` through the shared IDP-aware Faiber client.
   * @param orderId Backend path identifier `order_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated non-nil order owner or admin role; foreign/missing orders return 404.
   */
  orderAddOrderItemPost(orderId: Identifier, data: T.OrderAddOrderItemPostInput, options?: RequestOptions<T.OrderAddOrderItemPostInput>) {
    return this.client.request<T.OrderAddOrderItemPostResponse, T.OrderAddOrderItemPostInput>({ ...options, method: "POST", url: `/api/v1/shop/orders/${encodeURIComponent(orderId)}/items`, data: data });
  }
  /**
   * List products using the mounted product handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key. Filters support category UUID/slug, scope, search and country/province/city IDs; these product filters are separate from hosted literal search.
   * Calls `GET /api/v1/shop/products` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productListProductsGet(params?: T.ProductListProductsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProductListProductsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/products`, params });
  }
  /**
   * Create product using the mounted product handler.
   * Calls `POST /api/v1/shop/products` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productCreateProductPost(data: T.ProductCreateProductPostInput, options?: RequestOptions<T.ProductCreateProductPostInput>) {
    return this.client.request<T.ProductCreateProductPostResponse, T.ProductCreateProductPostInput>({ ...options, method: "POST", url: `/api/v1/shop/products`, data: data });
  }
  /**
   * Delete product using the mounted product handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/shop/products/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productDeleteProductDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductDeleteProductDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/shop/products/${encodeURIComponent(id)}` });
  }
  /**
   * Show product using the mounted product handler.
   * Calls `GET /api/v1/shop/products/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productShowProductGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductShowProductGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/products/${encodeURIComponent(id)}` });
  }
  /**
   * Update product using the mounted product handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/shop/products/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productUpdateProductPatch(id: Identifier, data: T.ProductUpdateProductPatchInput, options?: RequestOptions<T.ProductUpdateProductPatchInput>) {
    return this.client.request<T.ProductUpdateProductPatchResponse, T.ProductUpdateProductPatchInput>({ ...options, method: "PATCH", url: `/api/v1/shop/products/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update product using the mounted product handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/shop/products/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productUpdateProductPut(id: Identifier, data: T.ProductUpdateProductPutInput, options?: RequestOptions<T.ProductUpdateProductPutInput>) {
    return this.client.request<T.ProductUpdateProductPutResponse, T.ProductUpdateProductPutInput>({ ...options, method: "PUT", url: `/api/v1/shop/products/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List product variants using the mounted product handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/shop/products/{product_id}/variants` through the shared IDP-aware Faiber client.
   * @param productId Backend path identifier `product_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productListProductVariantsGet(productId: Identifier, params?: T.ProductListProductVariantsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProductListProductVariantsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, params });
  }
  /**
   * Create variant using the mounted product handler.
   * Calls `POST /api/v1/shop/products/{product_id}/variants` through the shared IDP-aware Faiber client.
   * @param productId Backend path identifier `product_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productCreateVariantPost(productId: Identifier, data: T.ProductCreateVariantPostInput, options?: RequestOptions<T.ProductCreateVariantPostInput>) {
    return this.client.request<T.ProductCreateVariantPostResponse, T.ProductCreateVariantPostInput>({ ...options, method: "POST", url: `/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, data: data });
  }
  /**
   * List variants using the mounted product handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key.
   * Calls `GET /api/v1/shop/variants` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productListVariantsGet(params?: T.ProductListVariantsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProductListVariantsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/variants`, params });
  }
  /**
   * Delete variant using the mounted product handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/shop/variants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productDeleteVariantDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductDeleteVariantDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/shop/variants/${encodeURIComponent(id)}` });
  }
  /**
   * Show variant using the mounted product handler.
   * Calls `GET /api/v1/shop/variants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productShowVariantGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductShowVariantGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/variants/${encodeURIComponent(id)}` });
  }
  /**
   * Update variant using the mounted product handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/shop/variants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productUpdateVariantPatch(id: Identifier, data: T.ProductUpdateVariantPatchInput, options?: RequestOptions<T.ProductUpdateVariantPatchInput>) {
    return this.client.request<T.ProductUpdateVariantPatchResponse, T.ProductUpdateVariantPatchInput>({ ...options, method: "PATCH", url: `/api/v1/shop/variants/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update variant using the mounted product handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/shop/variants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  productUpdateVariantPut(id: Identifier, data: T.ProductUpdateVariantPutInput, options?: RequestOptions<T.ProductUpdateVariantPutInput>) {
    return this.client.request<T.ProductUpdateVariantPutResponse, T.ProductUpdateVariantPutInput>({ ...options, method: "PUT", url: `/api/v1/shop/variants/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List tags using the mounted tag handler. Pagination starts at 1, defaults to size 10 and clamps size to 1–100; list data retains its named collection key. Search trims a literal case-insensitive substring, allows at most 128 Unicode characters and no NUL, and returns normalized search or null.
   * Calls `GET /api/v1/tags` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  tagListTagsGet(params?: T.TagListTagsGetQuery, options?: RequestOptions) {
    return this.client.request<T.TagListTagsGetResponse>({ ...options, method: "GET", url: `/api/v1/tags`, params });
  }
  /**
   * Create tag using the mounted tag handler.
   * Calls `POST /api/v1/tags` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  tagCreateTagPost(data: T.TagCreateTagPostInput, options?: RequestOptions<T.TagCreateTagPostInput>) {
    return this.client.request<T.TagCreateTagPostResponse, T.TagCreateTagPostInput>({ ...options, method: "POST", url: `/api/v1/tags`, data: data });
  }
  /**
   * Detach from target using the mounted tag handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.
   * Calls `DELETE /api/v1/tags/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  tagDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.TagDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.TagDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/tags/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /**
   * List on target using the mounted tag handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `GET /api/v1/tags/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  tagListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.TagListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/tags/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /**
   * Attach to target using the mounted tag handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.
   * Calls `POST /api/v1/tags/{host}/{target_id}` through the shared IDP-aware Faiber client.
   * @param host Backend path identifier `host`.
   * @param targetId Backend path identifier `target_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  tagAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.TagAttachToTargetPostInput, options?: RequestOptions<T.TagAttachToTargetPostInput>) {
    return this.client.request<T.TagAttachToTargetPostResponse, T.TagAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/tags/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /**
   * Delete tag using the mounted tag handler. Returns HTTP 200 with status/message and no data member.
   * Calls `DELETE /api/v1/tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  tagDeleteTagDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TagDeleteTagDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/tags/${encodeURIComponent(id)}` });
  }
  /**
   * Show tag using the mounted tag handler.
   * Calls `GET /api/v1/tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  tagShowTagGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TagShowTagGetResponse>({ ...options, method: "GET", url: `/api/v1/tags/${encodeURIComponent(id)}` });
  }
  /**
   * Update tag using the mounted tag handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PATCH /api/v1/tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  tagUpdateTagPatch(id: Identifier, data: T.TagUpdateTagPatchInput, options?: RequestOptions<T.TagUpdateTagPatchInput>) {
    return this.client.request<T.TagUpdateTagPatchResponse, T.TagUpdateTagPatchInput>({ ...options, method: "PATCH", url: `/api/v1/tags/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update tag using the mounted tag handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.
   * Calls `PUT /api/v1/tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  tagUpdateTagPut(id: Identifier, data: T.TagUpdateTagPutInput, options?: RequestOptions<T.TagUpdateTagPutInput>) {
    return this.client.request<T.TagUpdateTagPutResponse, T.TagUpdateTagPutInput>({ ...options, method: "PUT", url: `/api/v1/tags/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read process liveness and static package version in status/message/data; does not probe dependency readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  routerHealthGet(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Read Flow queue integration metadata in the Modules success envelope; this service currently advertises an empty event list.
   * Calls `GET /integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/integration/flow` });
  }
}
