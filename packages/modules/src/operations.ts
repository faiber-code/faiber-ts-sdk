import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ModulesOperations extends ServiceApi {
  /** GET /; permission: public/session-derived. */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /** GET /api-doc/openapi.json; permission: public/session-derived. */
  routerBeautifiedOpenapiGet(options?: RequestOptions) {
    return this.client.request<T.RouterBeautifiedOpenapiGetResponse>({ ...options, method: "GET", url: `/api-doc/openapi.json` });
  }
  /** GET /api/openapi.json; permission: public/session-derived. */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /** GET /api/v1/access/{host}/{target_id}; permission: public/session-derived. */
  accessListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AccessListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /** POST /api/v1/access/{host}/{target_id}; permission: public/session-derived. */
  accessGrantOnTargetPost(host: Identifier, targetId: Identifier, data: T.AccessGrantOnTargetPostInput, options?: RequestOptions<T.AccessGrantOnTargetPostInput>) {
    return this.client.request<T.AccessGrantOnTargetPostResponse, T.AccessGrantOnTargetPostInput>({ ...options, method: "POST", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /** DELETE /api/v1/access/{host}/{target_id}/{access_id}; permission: public/session-derived. */
  accessRevokeOnTargetDelete(host: Identifier, targetId: Identifier, accessId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AccessRevokeOnTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}/${encodeURIComponent(accessId)}` });
  }
  /** PUT /api/v1/access/{host}/{target_id}/{access_id}; permission: public/session-derived. */
  accessUpdateOnTargetPut(host: Identifier, targetId: Identifier, accessId: Identifier, data: T.AccessUpdateOnTargetPutInput, options?: RequestOptions<T.AccessUpdateOnTargetPutInput>) {
    return this.client.request<T.AccessUpdateOnTargetPutResponse, T.AccessUpdateOnTargetPutInput>({ ...options, method: "PUT", url: `/api/v1/access/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}/${encodeURIComponent(accessId)}`, data: data });
  }
  /** GET /api/v1/audit-logs/{host}/{target_id}; permission: public/session-derived. */
  auditLogListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuditLogListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/audit-logs/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /** GET /api/v1/auth/self; permission: public/session-derived. */
  sessionGetSelfGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /** GET /api/v1/authors; permission: public/session-derived. */
  authorListAuthorsGet(params?: T.AuthorListAuthorsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AuthorListAuthorsGetResponse>({ ...options, method: "GET", url: `/api/v1/authors`, params });
  }
  /** POST /api/v1/authors; permission: public/session-derived. */
  authorCreateAuthorPost(data: T.AuthorCreateAuthorPostInput, options?: RequestOptions<T.AuthorCreateAuthorPostInput>) {
    return this.client.request<T.AuthorCreateAuthorPostResponse, T.AuthorCreateAuthorPostInput>({ ...options, method: "POST", url: `/api/v1/authors`, data: data });
  }
  /** DELETE /api/v1/authors/{id}; permission: public/session-derived. */
  authorDeleteAuthorDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthorDeleteAuthorDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/authors/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/authors/{id}; permission: public/session-derived. */
  authorShowAuthorGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AuthorShowAuthorGetResponse>({ ...options, method: "GET", url: `/api/v1/authors/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/authors/{id}; permission: public/session-derived. */
  authorUpdateAuthorPatch(id: Identifier, data: T.AuthorUpdateAuthorPatchInput, options?: RequestOptions<T.AuthorUpdateAuthorPatchInput>) {
    return this.client.request<T.AuthorUpdateAuthorPatchResponse, T.AuthorUpdateAuthorPatchInput>({ ...options, method: "PATCH", url: `/api/v1/authors/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/authors/{id}; permission: public/session-derived. */
  authorUpdateAuthorPut(id: Identifier, data: T.AuthorUpdateAuthorPutInput, options?: RequestOptions<T.AuthorUpdateAuthorPutInput>) {
    return this.client.request<T.AuthorUpdateAuthorPutResponse, T.AuthorUpdateAuthorPutInput>({ ...options, method: "PUT", url: `/api/v1/authors/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/blog/posts; permission: public/session-derived. */
  blogListPostsGet(params?: T.BlogListPostsGetQuery, options?: RequestOptions) {
    return this.client.request<T.BlogListPostsGetResponse>({ ...options, method: "GET", url: `/api/v1/blog/posts`, params });
  }
  /** POST /api/v1/blog/posts; permission: public/session-derived. */
  blogCreatePostPost(data: T.BlogCreatePostPostInput, options?: RequestOptions<T.BlogCreatePostPostInput>) {
    return this.client.request<T.BlogCreatePostPostResponse, T.BlogCreatePostPostInput>({ ...options, method: "POST", url: `/api/v1/blog/posts`, data: data });
  }
  /** DELETE /api/v1/blog/posts/{id}; permission: public/session-derived. */
  blogDeletePostDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.BlogDeletePostDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/blog/posts/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/blog/posts/{id}; permission: public/session-derived. */
  blogShowPostGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.BlogShowPostGetResponse>({ ...options, method: "GET", url: `/api/v1/blog/posts/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/blog/posts/{id}; permission: public/session-derived. */
  blogUpdatePostPatch(id: Identifier, data: T.BlogUpdatePostPatchInput, options?: RequestOptions<T.BlogUpdatePostPatchInput>) {
    return this.client.request<T.BlogUpdatePostPatchResponse, T.BlogUpdatePostPatchInput>({ ...options, method: "PATCH", url: `/api/v1/blog/posts/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/blog/posts/{id}; permission: public/session-derived. */
  blogUpdatePostPut(id: Identifier, data: T.BlogUpdatePostPutInput, options?: RequestOptions<T.BlogUpdatePostPutInput>) {
    return this.client.request<T.BlogUpdatePostPutResponse, T.BlogUpdatePostPutInput>({ ...options, method: "PUT", url: `/api/v1/blog/posts/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/categories; permission: public/session-derived. */
  categoryListCategoriesGet(params?: T.CategoryListCategoriesGetQuery, options?: RequestOptions) {
    return this.client.request<T.CategoryListCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/categories`, params });
  }
  /** POST /api/v1/categories; permission: public/session-derived. */
  categoryCreateCategoryPost(data: T.CategoryCreateCategoryPostInput, options?: RequestOptions<T.CategoryCreateCategoryPostInput>) {
    return this.client.request<T.CategoryCreateCategoryPostResponse, T.CategoryCreateCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/categories`, data: data });
  }
  /** DELETE /api/v1/categories/{host}/{target_id}; permission: public/session-derived. */
  categoryDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.CategoryDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.CategoryDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/categories/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /** GET /api/v1/categories/{host}/{target_id}; permission: public/session-derived. */
  categoryListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.CategoryListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/categories/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /** POST /api/v1/categories/{host}/{target_id}; permission: public/session-derived. */
  categoryAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.CategoryAttachToTargetPostInput, options?: RequestOptions<T.CategoryAttachToTargetPostInput>) {
    return this.client.request<T.CategoryAttachToTargetPostResponse, T.CategoryAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/categories/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /** DELETE /api/v1/categories/{id}; permission: public/session-derived. */
  categoryDeleteCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CategoryDeleteCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/categories/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/categories/{id}; permission: public/session-derived. */
  categoryShowCategoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CategoryShowCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/categories/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/categories/{id}; permission: public/session-derived. */
  categoryUpdateCategoryPatch(id: Identifier, data: T.CategoryUpdateCategoryPatchInput, options?: RequestOptions<T.CategoryUpdateCategoryPatchInput>) {
    return this.client.request<T.CategoryUpdateCategoryPatchResponse, T.CategoryUpdateCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/categories/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/categories/{id}; permission: public/session-derived. */
  categoryUpdateCategoryPut(id: Identifier, data: T.CategoryUpdateCategoryPutInput, options?: RequestOptions<T.CategoryUpdateCategoryPutInput>) {
    return this.client.request<T.CategoryUpdateCategoryPutResponse, T.CategoryUpdateCategoryPutInput>({ ...options, method: "PUT", url: `/api/v1/categories/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/comments; permission: public/session-derived. */
  commentListCommentsGet(params?: T.CommentListCommentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.CommentListCommentsGetResponse>({ ...options, method: "GET", url: `/api/v1/comments`, params });
  }
  /** POST /api/v1/comments; permission: public/session-derived. */
  commentCreateCommentPost(data: T.CommentCreateCommentPostInput, options?: RequestOptions<T.CommentCreateCommentPostInput>) {
    return this.client.request<T.CommentCreateCommentPostResponse, T.CommentCreateCommentPostInput>({ ...options, method: "POST", url: `/api/v1/comments`, data: data });
  }
  /** GET /api/v1/comments/{host}/{target_id}; permission: public/session-derived. */
  commentListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommentListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/comments/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /** POST /api/v1/comments/{host}/{target_id}; permission: public/session-derived. */
  commentCreateOnTargetPost(host: Identifier, targetId: Identifier, data: T.CommentCreateOnTargetPostInput, options?: RequestOptions<T.CommentCreateOnTargetPostInput>) {
    return this.client.request<T.CommentCreateOnTargetPostResponse, T.CommentCreateOnTargetPostInput>({ ...options, method: "POST", url: `/api/v1/comments/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /** DELETE /api/v1/comments/{id}; permission: public/session-derived. */
  commentDeleteCommentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommentDeleteCommentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/comments/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/comments/{id}; permission: public/session-derived. */
  commentShowCommentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommentShowCommentGetResponse>({ ...options, method: "GET", url: `/api/v1/comments/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/comments/{id}; permission: public/session-derived. */
  commentUpdateCommentPatch(id: Identifier, data: T.CommentUpdateCommentPatchInput, options?: RequestOptions<T.CommentUpdateCommentPatchInput>) {
    return this.client.request<T.CommentUpdateCommentPatchResponse, T.CommentUpdateCommentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/comments/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/comments/{id}; permission: public/session-derived. */
  commentUpdateCommentPut(id: Identifier, data: T.CommentUpdateCommentPutInput, options?: RequestOptions<T.CommentUpdateCommentPutInput>) {
    return this.client.request<T.CommentUpdateCommentPutResponse, T.CommentUpdateCommentPutInput>({ ...options, method: "PUT", url: `/api/v1/comments/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/contents; permission: public/session-derived. */
  contentListContentsGet(params?: T.ContentListContentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ContentListContentsGetResponse>({ ...options, method: "GET", url: `/api/v1/contents`, params });
  }
  /** POST /api/v1/contents; permission: public/session-derived. */
  contentCreateContentPost(data: T.ContentCreateContentPostInput, options?: RequestOptions<T.ContentCreateContentPostInput>) {
    return this.client.request<T.ContentCreateContentPostResponse, T.ContentCreateContentPostInput>({ ...options, method: "POST", url: `/api/v1/contents`, data: data });
  }
  /** DELETE /api/v1/contents/{host}/{target_id}; permission: public/session-derived. */
  contentDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.ContentDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.ContentDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /** GET /api/v1/contents/{host}/{target_id}; permission: public/session-derived. */
  contentListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ContentListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /** POST /api/v1/contents/{host}/{target_id}; permission: public/session-derived. */
  contentAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.ContentAttachToTargetPostInput, options?: RequestOptions<T.ContentAttachToTargetPostInput>) {
    return this.client.request<T.ContentAttachToTargetPostResponse, T.ContentAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /** DELETE /api/v1/contents/{id}; permission: public/session-derived. */
  contentDeleteContentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ContentDeleteContentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/contents/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/contents/{id}; permission: public/session-derived. */
  contentShowContentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ContentShowContentGetResponse>({ ...options, method: "GET", url: `/api/v1/contents/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/contents/{id}; permission: public/session-derived. */
  contentUpdateContentPatch(id: Identifier, data: T.ContentUpdateContentPatchInput, params?: T.ContentUpdateContentPatchQuery, options?: RequestOptions<T.ContentUpdateContentPatchInput>) {
    return this.client.request<T.ContentUpdateContentPatchResponse, T.ContentUpdateContentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/contents/${encodeURIComponent(id)}`, data: data, params });
  }
  /** PUT /api/v1/contents/{id}; permission: public/session-derived. */
  contentUpdateContentPut(id: Identifier, data: T.ContentUpdateContentPutInput, params?: T.ContentUpdateContentPutQuery, options?: RequestOptions<T.ContentUpdateContentPutInput>) {
    return this.client.request<T.ContentUpdateContentPutResponse, T.ContentUpdateContentPutInput>({ ...options, method: "PUT", url: `/api/v1/contents/${encodeURIComponent(id)}`, data: data, params });
  }
  /** GET /api/v1/integration/flow; permission: public/session-derived. */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /** GET /api/v1/inventory/inventories; permission: public/session-derived. */
  inventoryListInventoriesGet(params?: T.InventoryListInventoriesGetQuery, options?: RequestOptions) {
    return this.client.request<T.InventoryListInventoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/inventories`, params });
  }
  /** POST /api/v1/inventory/inventories; permission: public/session-derived. */
  inventoryCreateInventoryPost(data: T.InventoryCreateInventoryPostInput, options?: RequestOptions<T.InventoryCreateInventoryPostInput>) {
    return this.client.request<T.InventoryCreateInventoryPostResponse, T.InventoryCreateInventoryPostInput>({ ...options, method: "POST", url: `/api/v1/inventory/inventories`, data: data });
  }
  /** DELETE /api/v1/inventory/inventories/{id}; permission: public/session-derived. */
  inventoryDeleteInventoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryDeleteInventoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/inventory/inventories/{id}; permission: public/session-derived. */
  inventoryShowInventoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryShowInventoryGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/inventory/inventories/{id}; permission: public/session-derived. */
  inventoryUpdateInventoryPatch(id: Identifier, data: T.InventoryUpdateInventoryPatchInput, options?: RequestOptions<T.InventoryUpdateInventoryPatchInput>) {
    return this.client.request<T.InventoryUpdateInventoryPatchResponse, T.InventoryUpdateInventoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/inventory/inventories/{id}; permission: public/session-derived. */
  inventoryUpdateInventoryPut(id: Identifier, data: T.InventoryUpdateInventoryPutInput, options?: RequestOptions<T.InventoryUpdateInventoryPutInput>) {
    return this.client.request<T.InventoryUpdateInventoryPutResponse, T.InventoryUpdateInventoryPutInput>({ ...options, method: "PUT", url: `/api/v1/inventory/inventories/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/inventory/stock-movements; permission: public/session-derived. */
  stockMovementListStockMovementsGet(params?: T.StockMovementListStockMovementsGetQuery, options?: RequestOptions) {
    return this.client.request<T.StockMovementListStockMovementsGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/stock-movements`, params });
  }
  /** POST /api/v1/inventory/stock-movements; permission: public/session-derived. */
  stockMovementCreateStockMovementPost(data: T.StockMovementCreateStockMovementPostInput, options?: RequestOptions<T.StockMovementCreateStockMovementPostInput>) {
    return this.client.request<T.StockMovementCreateStockMovementPostResponse, T.StockMovementCreateStockMovementPostInput>({ ...options, method: "POST", url: `/api/v1/inventory/stock-movements`, data: data });
  }
  /** GET /api/v1/inventory/warehouses; permission: public/session-derived. */
  inventoryListWarehousesGet(params?: T.InventoryListWarehousesGetQuery, options?: RequestOptions) {
    return this.client.request<T.InventoryListWarehousesGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/warehouses`, params });
  }
  /** POST /api/v1/inventory/warehouses; permission: public/session-derived. */
  inventoryCreateWarehousePost(data: T.InventoryCreateWarehousePostInput, options?: RequestOptions<T.InventoryCreateWarehousePostInput>) {
    return this.client.request<T.InventoryCreateWarehousePostResponse, T.InventoryCreateWarehousePostInput>({ ...options, method: "POST", url: `/api/v1/inventory/warehouses`, data: data });
  }
  /** DELETE /api/v1/inventory/warehouses/{id}; permission: public/session-derived. */
  inventoryDeleteWarehouseDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryDeleteWarehouseDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/inventory/warehouses/{id}; permission: public/session-derived. */
  inventoryShowWarehouseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InventoryShowWarehouseGetResponse>({ ...options, method: "GET", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/inventory/warehouses/{id}; permission: public/session-derived. */
  inventoryUpdateWarehousePatch(id: Identifier, data: T.InventoryUpdateWarehousePatchInput, options?: RequestOptions<T.InventoryUpdateWarehousePatchInput>) {
    return this.client.request<T.InventoryUpdateWarehousePatchResponse, T.InventoryUpdateWarehousePatchInput>({ ...options, method: "PATCH", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/inventory/warehouses/{id}; permission: public/session-derived. */
  inventoryUpdateWarehousePut(id: Identifier, data: T.InventoryUpdateWarehousePutInput, options?: RequestOptions<T.InventoryUpdateWarehousePutInput>) {
    return this.client.request<T.InventoryUpdateWarehousePutResponse, T.InventoryUpdateWarehousePutInput>({ ...options, method: "PUT", url: `/api/v1/inventory/warehouses/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/pricing; permission: public/session-derived. */
  servicePricingListPricingGet(params?: T.ServicePricingListPricingGetQuery, options?: RequestOptions) {
    return this.client.request<T.ServicePricingListPricingGetResponse>({ ...options, method: "GET", url: `/api/v1/pricing`, params });
  }
  /** POST /api/v1/pricing; permission: public/session-derived. */
  servicePricingCreatePricingPost(data: T.ServicePricingCreatePricingPostInput, options?: RequestOptions<T.ServicePricingCreatePricingPostInput>) {
    return this.client.request<T.ServicePricingCreatePricingPostResponse, T.ServicePricingCreatePricingPostInput>({ ...options, method: "POST", url: `/api/v1/pricing`, data: data });
  }
  /** DELETE /api/v1/pricing/{id}; permission: public/session-derived. */
  servicePricingDeletePricingDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServicePricingDeletePricingDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/pricing/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/pricing/{id}; permission: public/session-derived. */
  servicePricingShowPricingGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServicePricingShowPricingGetResponse>({ ...options, method: "GET", url: `/api/v1/pricing/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/pricing/{id}; permission: public/session-derived. */
  servicePricingUpdatePricingPatch(id: Identifier, data: T.ServicePricingUpdatePricingPatchInput, options?: RequestOptions<T.ServicePricingUpdatePricingPatchInput>) {
    return this.client.request<T.ServicePricingUpdatePricingPatchResponse, T.ServicePricingUpdatePricingPatchInput>({ ...options, method: "PATCH", url: `/api/v1/pricing/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/pricing/{id}; permission: public/session-derived. */
  servicePricingUpdatePricingPut(id: Identifier, data: T.ServicePricingUpdatePricingPutInput, options?: RequestOptions<T.ServicePricingUpdatePricingPutInput>) {
    return this.client.request<T.ServicePricingUpdatePricingPutResponse, T.ServicePricingUpdatePricingPutInput>({ ...options, method: "PUT", url: `/api/v1/pricing/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/reactions/{host}/{target_id}; permission: public/session-derived. */
  reactionDeleteOnTargetDelete(host: Identifier, targetId: Identifier, params?: T.ReactionDeleteOnTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.ReactionDeleteOnTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/reactions/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /** GET /api/v1/reactions/{host}/{target_id}; permission: public/session-derived. */
  reactionListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReactionListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/reactions/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /** POST /api/v1/reactions/{host}/{target_id}; permission: public/session-derived. */
  reactionCreateOnTargetPost(host: Identifier, targetId: Identifier, data: T.ReactionCreateOnTargetPostInput, options?: RequestOptions<T.ReactionCreateOnTargetPostInput>) {
    return this.client.request<T.ReactionCreateOnTargetPostResponse, T.ReactionCreateOnTargetPostInput>({ ...options, method: "POST", url: `/api/v1/reactions/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /** GET /api/v1/requests; permission: public/session-derived. */
  requestListRequestsGet(params?: T.RequestListRequestsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RequestListRequestsGetResponse>({ ...options, method: "GET", url: `/api/v1/requests`, params });
  }
  /** POST /api/v1/requests; permission: public/session-derived. */
  requestCreateRequestPost(data: T.RequestCreateRequestPostInput, options?: RequestOptions<T.RequestCreateRequestPostInput>) {
    return this.client.request<T.RequestCreateRequestPostResponse, T.RequestCreateRequestPostInput>({ ...options, method: "POST", url: `/api/v1/requests`, data: data });
  }
  /** DELETE /api/v1/requests/{host}/{target_id}; permission: public/session-derived. */
  requestDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.RequestDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.RequestDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/requests/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /** GET /api/v1/requests/{host}/{target_id}; permission: public/session-derived. */
  requestListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /** POST /api/v1/requests/{host}/{target_id}; permission: public/session-derived. */
  requestAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.RequestAttachToTargetPostInput, options?: RequestOptions<T.RequestAttachToTargetPostInput>) {
    return this.client.request<T.RequestAttachToTargetPostResponse, T.RequestAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/requests/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /** DELETE /api/v1/requests/{id}; permission: public/session-derived. */
  requestDeleteRequestDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestDeleteRequestDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/requests/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/requests/{id}; permission: public/session-derived. */
  requestShowRequestGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestShowRequestGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/requests/{id}; permission: public/session-derived. */
  requestUpdateRequestPatch(id: Identifier, data: T.RequestUpdateRequestPatchInput, options?: RequestOptions<T.RequestUpdateRequestPatchInput>) {
    return this.client.request<T.RequestUpdateRequestPatchResponse, T.RequestUpdateRequestPatchInput>({ ...options, method: "PATCH", url: `/api/v1/requests/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/requests/{id}; permission: public/session-derived. */
  requestUpdateRequestPut(id: Identifier, data: T.RequestUpdateRequestPutInput, options?: RequestOptions<T.RequestUpdateRequestPutInput>) {
    return this.client.request<T.RequestUpdateRequestPutResponse, T.RequestUpdateRequestPutInput>({ ...options, method: "PUT", url: `/api/v1/requests/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/requests/{request_id}/logs; permission: public/session-derived. */
  requestListLogsForRequestGet(requestId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RequestListLogsForRequestGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/${encodeURIComponent(requestId)}/logs` });
  }
  /** POST /api/v1/requests/{request_id}/logs; permission: public/session-derived. */
  requestSubmitPost(requestId: Identifier, data: T.RequestSubmitPostInput, options?: RequestOptions<T.RequestSubmitPostInput>) {
    return this.client.request<T.RequestSubmitPostResponse, T.RequestSubmitPostInput>({ ...options, method: "POST", url: `/api/v1/requests/${encodeURIComponent(requestId)}/logs`, data: data });
  }
  /** GET /api/v1/requests/category/{category_id}/logs; permission: public/session-derived. */
  requestListLogsForCategoryGet(categoryId: Identifier, params?: T.RequestListLogsForCategoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.RequestListLogsForCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/requests/category/${encodeURIComponent(categoryId)}/logs`, params });
  }
  /** GET /api/v1/samples; permission: public/session-derived. */
  userSampleListSamplesGet(params?: T.UserSampleListSamplesGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserSampleListSamplesGetResponse>({ ...options, method: "GET", url: `/api/v1/samples`, params });
  }
  /** POST /api/v1/samples; permission: public/session-derived. */
  userSampleCreateSamplePost(data: T.UserSampleCreateSamplePostInput, options?: RequestOptions<T.UserSampleCreateSamplePostInput>) {
    return this.client.request<T.UserSampleCreateSamplePostResponse, T.UserSampleCreateSamplePostInput>({ ...options, method: "POST", url: `/api/v1/samples`, data: data });
  }
  /** DELETE /api/v1/samples/{id}; permission: public/session-derived. */
  userSampleDeleteSampleDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleDeleteSampleDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/samples/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/samples/{id}; permission: public/session-derived. */
  userSampleShowSampleGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleShowSampleGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/samples/{id}; permission: public/session-derived. */
  userSampleUpdateSamplePatch(id: Identifier, data: T.UserSampleUpdateSamplePatchInput, options?: RequestOptions<T.UserSampleUpdateSamplePatchInput>) {
    return this.client.request<T.UserSampleUpdateSamplePatchResponse, T.UserSampleUpdateSamplePatchInput>({ ...options, method: "PATCH", url: `/api/v1/samples/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/samples/{id}; permission: public/session-derived. */
  userSampleUpdateSamplePut(id: Identifier, data: T.UserSampleUpdateSamplePutInput, options?: RequestOptions<T.UserSampleUpdateSamplePutInput>) {
    return this.client.request<T.UserSampleUpdateSamplePutResponse, T.UserSampleUpdateSamplePutInput>({ ...options, method: "PUT", url: `/api/v1/samples/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/samples/{sample_id}/variables; permission: public/session-derived. */
  userSampleListSampleVariablesGet(sampleId: Identifier, params?: T.UserSampleListSampleVariablesGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserSampleListSampleVariablesGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/${encodeURIComponent(sampleId)}/variables`, params });
  }
  /** POST /api/v1/samples/{sample_id}/variables; permission: public/session-derived. */
  userSampleCreateSampleVariablePost(sampleId: Identifier, data: T.UserSampleCreateSampleVariablePostInput, options?: RequestOptions<T.UserSampleCreateSampleVariablePostInput>) {
    return this.client.request<T.UserSampleCreateSampleVariablePostResponse, T.UserSampleCreateSampleVariablePostInput>({ ...options, method: "POST", url: `/api/v1/samples/${encodeURIComponent(sampleId)}/variables`, data: data });
  }
  /** GET /api/v1/samples/by-slug/{slug}/variables-map; permission: public/session-derived. */
  userSampleVariablesMapBySlugGet(slug: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleVariablesMapBySlugGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/by-slug/${encodeURIComponent(slug)}/variables-map` });
  }
  /** GET /api/v1/samples/variables; permission: public/session-derived. */
  userSampleListAllVariablesGet(params?: T.UserSampleListAllVariablesGetQuery, options?: RequestOptions) {
    return this.client.request<T.UserSampleListAllVariablesGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/variables`, params });
  }
  /** DELETE /api/v1/samples/variables/{id}; permission: public/session-derived. */
  userSampleDeleteVariableDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleDeleteVariableDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/samples/variables/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/samples/variables/{id}; permission: public/session-derived. */
  userSampleShowVariableGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UserSampleShowVariableGetResponse>({ ...options, method: "GET", url: `/api/v1/samples/variables/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/samples/variables/{id}; permission: public/session-derived. */
  userSampleUpdateVariablePatch(id: Identifier, data: T.UserSampleUpdateVariablePatchInput, options?: RequestOptions<T.UserSampleUpdateVariablePatchInput>) {
    return this.client.request<T.UserSampleUpdateVariablePatchResponse, T.UserSampleUpdateVariablePatchInput>({ ...options, method: "PATCH", url: `/api/v1/samples/variables/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/samples/variables/{id}; permission: public/session-derived. */
  userSampleUpdateVariablePut(id: Identifier, data: T.UserSampleUpdateVariablePutInput, options?: RequestOptions<T.UserSampleUpdateVariablePutInput>) {
    return this.client.request<T.UserSampleUpdateVariablePutResponse, T.UserSampleUpdateVariablePutInput>({ ...options, method: "PUT", url: `/api/v1/samples/variables/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/seo-contents; permission: public/session-derived. */
  seoContentListSeoContentsGet(params?: T.SeoContentListSeoContentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.SeoContentListSeoContentsGetResponse>({ ...options, method: "GET", url: `/api/v1/seo-contents`, params });
  }
  /** POST /api/v1/seo-contents; permission: public/session-derived. */
  seoContentCreateSeoContentPost(data: T.SeoContentCreateSeoContentPostInput, options?: RequestOptions<T.SeoContentCreateSeoContentPostInput>) {
    return this.client.request<T.SeoContentCreateSeoContentPostResponse, T.SeoContentCreateSeoContentPostInput>({ ...options, method: "POST", url: `/api/v1/seo-contents`, data: data });
  }
  /** DELETE /api/v1/seo-contents/{host}/{target_id}; permission: public/session-derived. */
  seoContentDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.SeoContentDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.SeoContentDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/seo-contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /** GET /api/v1/seo-contents/{host}/{target_id}; permission: public/session-derived. */
  seoContentListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SeoContentListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/seo-contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /** POST /api/v1/seo-contents/{host}/{target_id}; permission: public/session-derived. */
  seoContentAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.SeoContentAttachToTargetPostInput, options?: RequestOptions<T.SeoContentAttachToTargetPostInput>) {
    return this.client.request<T.SeoContentAttachToTargetPostResponse, T.SeoContentAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/seo-contents/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /** DELETE /api/v1/seo-contents/{id}; permission: public/session-derived. */
  seoContentDeleteSeoContentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SeoContentDeleteSeoContentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/seo-contents/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/seo-contents/{id}; permission: public/session-derived. */
  seoContentShowSeoContentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SeoContentShowSeoContentGetResponse>({ ...options, method: "GET", url: `/api/v1/seo-contents/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/seo-contents/{id}; permission: public/session-derived. */
  seoContentUpdateSeoContentPatch(id: Identifier, data: T.SeoContentUpdateSeoContentPatchInput, options?: RequestOptions<T.SeoContentUpdateSeoContentPatchInput>) {
    return this.client.request<T.SeoContentUpdateSeoContentPatchResponse, T.SeoContentUpdateSeoContentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/seo-contents/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/seo-contents/{id}; permission: public/session-derived. */
  seoContentUpdateSeoContentPut(id: Identifier, data: T.SeoContentUpdateSeoContentPutInput, options?: RequestOptions<T.SeoContentUpdateSeoContentPutInput>) {
    return this.client.request<T.SeoContentUpdateSeoContentPutResponse, T.SeoContentUpdateSeoContentPutInput>({ ...options, method: "PUT", url: `/api/v1/seo-contents/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/shop/cart; permission: public/session-derived. */
  cartShowGet(options?: RequestOptions) {
    return this.client.request<T.CartShowGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/cart` });
  }
  /** PUT /api/v1/shop/cart; permission: public/session-derived. */
  cartReplacePut(data: T.CartReplacePutInput, options?: RequestOptions<T.CartReplacePutInput>) {
    return this.client.request<T.CartReplacePutResponse, T.CartReplacePutInput>({ ...options, method: "PUT", url: `/api/v1/shop/cart`, data: data });
  }
  /** GET /api/v1/shop/orders; permission: public/session-derived. */
  orderListOrdersGet(params?: T.OrderListOrdersGetQuery, options?: RequestOptions) {
    return this.client.request<T.OrderListOrdersGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/orders`, params });
  }
  /** POST /api/v1/shop/orders; permission: public/session-derived. */
  orderCreateOrderPost(data: T.OrderCreateOrderPostInput, options?: RequestOptions<T.OrderCreateOrderPostInput>) {
    return this.client.request<T.OrderCreateOrderPostResponse, T.OrderCreateOrderPostInput>({ ...options, method: "POST", url: `/api/v1/shop/orders`, data: data });
  }
  /** DELETE /api/v1/shop/orders/{id}; permission: public/session-derived. */
  orderDeleteOrderDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderDeleteOrderDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/shop/orders/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/shop/orders/{id}; permission: public/session-derived. */
  orderShowOrderGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderShowOrderGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/orders/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/shop/orders/{id}; permission: public/session-derived. */
  orderUpdateOrderPatch(id: Identifier, data: T.OrderUpdateOrderPatchInput, options?: RequestOptions<T.OrderUpdateOrderPatchInput>) {
    return this.client.request<T.OrderUpdateOrderPatchResponse, T.OrderUpdateOrderPatchInput>({ ...options, method: "PATCH", url: `/api/v1/shop/orders/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/shop/orders/{id}; permission: public/session-derived. */
  orderUpdateOrderPut(id: Identifier, data: T.OrderUpdateOrderPutInput, options?: RequestOptions<T.OrderUpdateOrderPutInput>) {
    return this.client.request<T.OrderUpdateOrderPutResponse, T.OrderUpdateOrderPutInput>({ ...options, method: "PUT", url: `/api/v1/shop/orders/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/shop/orders/{order_id}/items; permission: public/session-derived. */
  orderListOrderItemsGet(orderId: Identifier, options?: RequestOptions) {
    return this.client.request<T.OrderListOrderItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/orders/${encodeURIComponent(orderId)}/items` });
  }
  /** POST /api/v1/shop/orders/{order_id}/items; permission: public/session-derived. */
  orderAddOrderItemPost(orderId: Identifier, data: T.OrderAddOrderItemPostInput, options?: RequestOptions<T.OrderAddOrderItemPostInput>) {
    return this.client.request<T.OrderAddOrderItemPostResponse, T.OrderAddOrderItemPostInput>({ ...options, method: "POST", url: `/api/v1/shop/orders/${encodeURIComponent(orderId)}/items`, data: data });
  }
  /** GET /api/v1/shop/products; permission: public/session-derived. */
  productListProductsGet(params?: T.ProductListProductsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProductListProductsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/products`, params });
  }
  /** POST /api/v1/shop/products; permission: public/session-derived. */
  productCreateProductPost(data: T.ProductCreateProductPostInput, options?: RequestOptions<T.ProductCreateProductPostInput>) {
    return this.client.request<T.ProductCreateProductPostResponse, T.ProductCreateProductPostInput>({ ...options, method: "POST", url: `/api/v1/shop/products`, data: data });
  }
  /** DELETE /api/v1/shop/products/{id}; permission: public/session-derived. */
  productDeleteProductDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductDeleteProductDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/shop/products/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/shop/products/{id}; permission: public/session-derived. */
  productShowProductGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductShowProductGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/products/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/shop/products/{id}; permission: public/session-derived. */
  productUpdateProductPatch(id: Identifier, data: T.ProductUpdateProductPatchInput, options?: RequestOptions<T.ProductUpdateProductPatchInput>) {
    return this.client.request<T.ProductUpdateProductPatchResponse, T.ProductUpdateProductPatchInput>({ ...options, method: "PATCH", url: `/api/v1/shop/products/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/shop/products/{id}; permission: public/session-derived. */
  productUpdateProductPut(id: Identifier, data: T.ProductUpdateProductPutInput, options?: RequestOptions<T.ProductUpdateProductPutInput>) {
    return this.client.request<T.ProductUpdateProductPutResponse, T.ProductUpdateProductPutInput>({ ...options, method: "PUT", url: `/api/v1/shop/products/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/shop/products/{product_id}/variants; permission: public/session-derived. */
  productListProductVariantsGet(productId: Identifier, params?: T.ProductListProductVariantsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProductListProductVariantsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, params });
  }
  /** POST /api/v1/shop/products/{product_id}/variants; permission: public/session-derived. */
  productCreateVariantPost(productId: Identifier, data: T.ProductCreateVariantPostInput, options?: RequestOptions<T.ProductCreateVariantPostInput>) {
    return this.client.request<T.ProductCreateVariantPostResponse, T.ProductCreateVariantPostInput>({ ...options, method: "POST", url: `/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, data: data });
  }
  /** GET /api/v1/shop/variants; permission: public/session-derived. */
  productListVariantsGet(params?: T.ProductListVariantsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProductListVariantsGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/variants`, params });
  }
  /** DELETE /api/v1/shop/variants/{id}; permission: public/session-derived. */
  productDeleteVariantDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductDeleteVariantDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/shop/variants/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/shop/variants/{id}; permission: public/session-derived. */
  productShowVariantGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProductShowVariantGetResponse>({ ...options, method: "GET", url: `/api/v1/shop/variants/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/shop/variants/{id}; permission: public/session-derived. */
  productUpdateVariantPatch(id: Identifier, data: T.ProductUpdateVariantPatchInput, options?: RequestOptions<T.ProductUpdateVariantPatchInput>) {
    return this.client.request<T.ProductUpdateVariantPatchResponse, T.ProductUpdateVariantPatchInput>({ ...options, method: "PATCH", url: `/api/v1/shop/variants/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/shop/variants/{id}; permission: public/session-derived. */
  productUpdateVariantPut(id: Identifier, data: T.ProductUpdateVariantPutInput, options?: RequestOptions<T.ProductUpdateVariantPutInput>) {
    return this.client.request<T.ProductUpdateVariantPutResponse, T.ProductUpdateVariantPutInput>({ ...options, method: "PUT", url: `/api/v1/shop/variants/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/social/moderation/posts; permission: social:post:moderate. */
  socialListForModerationGet(params?: T.SocialListForModerationGetQuery, options?: RequestOptions) {
    return this.client.request<T.SocialListForModerationGetResponse>({ ...options, method: "GET", url: `/api/v1/social/moderation/posts`, params });
  }
  /** DELETE /api/v1/social/moderation/posts/{id}; permission: social:post:moderate. */
  socialRemoveDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SocialRemoveDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/social/moderation/posts/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/social/moderation/posts/{id}; permission: social:post:moderate. */
  socialManagePatch(id: Identifier, data: T.SocialManagePatchInput, options?: RequestOptions<T.SocialManagePatchInput>) {
    return this.client.request<T.SocialManagePatchResponse, T.SocialManagePatchInput>({ ...options, method: "PATCH", url: `/api/v1/social/moderation/posts/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/social/posts; permission: social:post:read. */
  socialListGet(params?: T.SocialListGetQuery, options?: RequestOptions) {
    return this.client.request<T.SocialListGetResponse>({ ...options, method: "GET", url: `/api/v1/social/posts`, params });
  }
  /** POST /api/v1/social/posts; permission: social:post:create. */
  socialCreatePost(data: T.SocialCreatePostInput, options?: RequestOptions<T.SocialCreatePostInput>) {
    return this.client.request<T.SocialCreatePostResponse, T.SocialCreatePostInput>({ ...options, method: "POST", url: `/api/v1/social/posts`, data: data });
  }
  /** GET /api/v1/social/posts/{id}; permission: social:post:read. */
  socialShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SocialShowGetResponse>({ ...options, method: "GET", url: `/api/v1/social/posts/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/social/posts/{id}; permission: social:post:update_own. */
  socialUpdatePatch(id: Identifier, data: T.SocialUpdatePatchInput, options?: RequestOptions<T.SocialUpdatePatchInput>) {
    return this.client.request<T.SocialUpdatePatchResponse, T.SocialUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/social/posts/${encodeURIComponent(id)}`, data: data });
  }
  /** PATCH /api/v1/social/posts/{id}/moderate; permission: social:post:moderate. */
  socialModeratePatch(id: Identifier, data: T.SocialModeratePatchInput, options?: RequestOptions<T.SocialModeratePatchInput>) {
    return this.client.request<T.SocialModeratePatchResponse, T.SocialModeratePatchInput>({ ...options, method: "PATCH", url: `/api/v1/social/posts/${encodeURIComponent(id)}/moderate`, data: data });
  }
  /** GET /api/v1/tags; permission: public/session-derived. */
  tagListTagsGet(params?: T.TagListTagsGetQuery, options?: RequestOptions) {
    return this.client.request<T.TagListTagsGetResponse>({ ...options, method: "GET", url: `/api/v1/tags`, params });
  }
  /** POST /api/v1/tags; permission: public/session-derived. */
  tagCreateTagPost(data: T.TagCreateTagPostInput, options?: RequestOptions<T.TagCreateTagPostInput>) {
    return this.client.request<T.TagCreateTagPostResponse, T.TagCreateTagPostInput>({ ...options, method: "POST", url: `/api/v1/tags`, data: data });
  }
  /** DELETE /api/v1/tags/{host}/{target_id}; permission: public/session-derived. */
  tagDetachFromTargetDelete(host: Identifier, targetId: Identifier, params?: T.TagDetachFromTargetDeleteQuery, options?: RequestOptions) {
    return this.client.request<T.TagDetachFromTargetDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/tags/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, params });
  }
  /** GET /api/v1/tags/{host}/{target_id}; permission: public/session-derived. */
  tagListOnTargetGet(host: Identifier, targetId: Identifier, options?: RequestOptions) {
    return this.client.request<T.TagListOnTargetGetResponse>({ ...options, method: "GET", url: `/api/v1/tags/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}` });
  }
  /** POST /api/v1/tags/{host}/{target_id}; permission: public/session-derived. */
  tagAttachToTargetPost(host: Identifier, targetId: Identifier, data: T.TagAttachToTargetPostInput, options?: RequestOptions<T.TagAttachToTargetPostInput>) {
    return this.client.request<T.TagAttachToTargetPostResponse, T.TagAttachToTargetPostInput>({ ...options, method: "POST", url: `/api/v1/tags/${encodeURIComponent(host)}/${encodeURIComponent(targetId)}`, data: data });
  }
  /** DELETE /api/v1/tags/{id}; permission: public/session-derived. */
  tagDeleteTagDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TagDeleteTagDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/tags/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/tags/{id}; permission: public/session-derived. */
  tagShowTagGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TagShowTagGetResponse>({ ...options, method: "GET", url: `/api/v1/tags/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/tags/{id}; permission: public/session-derived. */
  tagUpdateTagPatch(id: Identifier, data: T.TagUpdateTagPatchInput, options?: RequestOptions<T.TagUpdateTagPatchInput>) {
    return this.client.request<T.TagUpdateTagPatchResponse, T.TagUpdateTagPatchInput>({ ...options, method: "PATCH", url: `/api/v1/tags/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/tags/{id}; permission: public/session-derived. */
  tagUpdateTagPut(id: Identifier, data: T.TagUpdateTagPutInput, options?: RequestOptions<T.TagUpdateTagPutInput>) {
    return this.client.request<T.TagUpdateTagPutResponse, T.TagUpdateTagPutInput>({ ...options, method: "PUT", url: `/api/v1/tags/${encodeURIComponent(id)}`, data: data });
  }
}

