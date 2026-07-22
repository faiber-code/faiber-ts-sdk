import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: response without a declared JSON model. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterBeautifiedOpenapiGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<models::AccessResponseDTO>. */
export interface AccessListOnTargetGetResponseItem extends JsonObject {
  "id": string;
  "user_id": string;
  "granted_by_user_id": string;
  "target_id": string;
  "access_level": JsonValue;
  "created_at": string;
}
export interface AccessListOnTargetGetResponse extends ApiEnvelope<AccessListOnTargetGetResponseItem[]> {
}

/** Backend request type: models::AccessGrantRequest. */
export interface AccessGrantOnTargetPostInput extends JsonObject {
  "user_id": string;
  "access_level": JsonValue;
}
/** Backend response type: models::AccessResponseDTO. */
export interface AccessGrantOnTargetPostResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "granted_by_user_id": string;
  "target_id": string;
  "access_level": JsonValue;
  "created_at": string;
}
export interface AccessGrantOnTargetPostResponse extends ApiEnvelope<AccessGrantOnTargetPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface AccessRevokeOnTargetDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::AccessUpdateRequest. */
export interface AccessUpdateOnTargetPutInput extends JsonObject {
  "access_level": JsonValue;
}
/** Backend response type: models::AccessResponseDTO. */
export interface AccessUpdateOnTargetPutResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "granted_by_user_id": string;
  "target_id": string;
  "access_level": JsonValue;
  "created_at": string;
}
export interface AccessUpdateOnTargetPutResponse extends ApiEnvelope<AccessUpdateOnTargetPutResponseData> {
}

/** Backend response type: Vec<models::AuditLogResponseDTO>. */
export interface AuditLogListOnTargetGetResponseItem extends JsonObject {
  "id": string;
  "user_id": string;
  "action": string;
  "target_id"?: string;
  "metadata"?: JsonValue;
  "created_at": string;
}
export interface AuditLogListOnTargetGetResponse extends ApiEnvelope<AuditLogListOnTargetGetResponseItem[]> {
}

/** Backend response type: SessionResponse. */
export interface SessionGetSelfGetResponseData extends JsonObject {
  "user_id": string;
  "roles": string[];
  "permissions": string[];
}
export interface SessionGetSelfGetResponse extends ApiEnvelope<SessionGetSelfGetResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface AuthorListAuthorsGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::AuthorListResponse. */
export interface AuthorListAuthorsGetResponseData extends JsonObject {
  "authors": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface AuthorListAuthorsGetResponse extends ApiEnvelope<AuthorListAuthorsGetResponseData> {
}

/** Backend request type: models::AuthorCreateRequest. */
export interface AuthorCreateAuthorPostInput extends JsonObject {
  "user_id": string;
  "name": string;
  "bio"?: string;
  "avatar_url"?: string;
  "social_links"?: JsonValue;
  "website"?: string;
}
/** Backend response type: models::AuthorResponseDTO. */
export interface AuthorCreateAuthorPostResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "name": string;
  "bio"?: string;
  "avatar_url"?: string;
  "social_links"?: JsonValue;
  "website"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface AuthorCreateAuthorPostResponse extends ApiEnvelope<AuthorCreateAuthorPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface AuthorDeleteAuthorDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::AuthorResponseDTO. */
export interface AuthorShowAuthorGetResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "name": string;
  "bio"?: string;
  "avatar_url"?: string;
  "social_links"?: JsonValue;
  "website"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface AuthorShowAuthorGetResponse extends ApiEnvelope<AuthorShowAuthorGetResponseData> {
}

/** Backend request type: models::AuthorUpdateRequest. */
export interface AuthorUpdateAuthorPatchInput extends JsonObject {
  "name"?: string;
  "bio"?: string | null;
  "avatar_url"?: string | null;
  "social_links"?: JsonValue | null;
  "website"?: string | null;
}
/** Backend response type: models::AuthorResponseDTO. */
export interface AuthorUpdateAuthorPatchResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "name": string;
  "bio"?: string;
  "avatar_url"?: string;
  "social_links"?: JsonValue;
  "website"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface AuthorUpdateAuthorPatchResponse extends ApiEnvelope<AuthorUpdateAuthorPatchResponseData> {
}

/** Backend request type: models::AuthorUpdateRequest. */
export interface AuthorUpdateAuthorPutInput extends JsonObject {
  "name"?: string;
  "bio"?: string | null;
  "avatar_url"?: string | null;
  "social_links"?: JsonValue | null;
  "website"?: string | null;
}
/** Backend response type: models::AuthorResponseDTO. */
export interface AuthorUpdateAuthorPutResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "name": string;
  "bio"?: string;
  "avatar_url"?: string;
  "social_links"?: JsonValue;
  "website"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface AuthorUpdateAuthorPutResponse extends ApiEnvelope<AuthorUpdateAuthorPutResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface BlogListPostsGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::PostListResponse. */
export interface BlogListPostsGetResponseData extends JsonObject {
  "posts": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface BlogListPostsGetResponse extends ApiEnvelope<BlogListPostsGetResponseData> {
}

/** Backend request type: models::PostCreateRequest. */
export interface BlogCreatePostPostInput extends JsonObject {
  "title": string;
  "description"?: string;
  "content"?: string;
  "image_url"?: string;
  "status"?: number;
}
/** Backend response type: models::PostResponseDTO. */
export interface BlogCreatePostPostResponseData extends JsonObject {
  "id": string;
  "title": string;
  "description"?: string;
  "content"?: string;
  "image_url"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface BlogCreatePostPostResponse extends ApiEnvelope<BlogCreatePostPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface BlogDeletePostDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::PostResponseDTO. */
export interface BlogShowPostGetResponseData extends JsonObject {
  "id": string;
  "title": string;
  "description"?: string;
  "content"?: string;
  "image_url"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface BlogShowPostGetResponse extends ApiEnvelope<BlogShowPostGetResponseData> {
}

/** Backend request type: models::PostUpdateRequest. */
export interface BlogUpdatePostPatchInput extends JsonObject {
  "title"?: string;
  "description"?: string;
  "content"?: string;
  "image_url"?: string;
  "status"?: number;
}
/** Backend response type: models::PostResponseDTO. */
export interface BlogUpdatePostPatchResponseData extends JsonObject {
  "id": string;
  "title": string;
  "description"?: string;
  "content"?: string;
  "image_url"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface BlogUpdatePostPatchResponse extends ApiEnvelope<BlogUpdatePostPatchResponseData> {
}

/** Backend request type: models::PostUpdateRequest. */
export interface BlogUpdatePostPutInput extends JsonObject {
  "title"?: string;
  "description"?: string;
  "content"?: string;
  "image_url"?: string;
  "status"?: number;
}
/** Backend response type: models::PostResponseDTO. */
export interface BlogUpdatePostPutResponseData extends JsonObject {
  "id": string;
  "title": string;
  "description"?: string;
  "content"?: string;
  "image_url"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface BlogUpdatePostPutResponse extends ApiEnvelope<BlogUpdatePostPutResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface CategoryListCategoriesGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::CategoryListResponse. */
export interface CategoryListCategoriesGetResponseData extends JsonObject {
  "categories": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface CategoryListCategoriesGetResponse extends ApiEnvelope<CategoryListCategoriesGetResponseData> {
}

/** Backend request type: models::CategoryCreateRequest. */
export interface CategoryCreateCategoryPostInput extends JsonObject {
  "parent_id"?: string;
  "name"?: string;
  "description"?: string;
  "status"?: number;
  "requires_confirmation"?: boolean;
}
/** Backend response type: models::CategoryResponseDTO. */
export interface CategoryCreateCategoryPostResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string;
  "name"?: string;
  "description"?: string;
  "status": number;
  "requires_confirmation": boolean;
  "created_at": string;
  "updated_at": string;
}
export interface CategoryCreateCategoryPostResponse extends ApiEnvelope<CategoryCreateCategoryPostResponseData> {
}

/** Backend query type: models::CategoryDetachQuery. */
export interface CategoryDetachFromTargetDeleteQuery extends QueryParams {
  "junction_id": string;
}
/** Backend response type: response without a declared JSON model. */
export interface CategoryDetachFromTargetDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<models::CategoryAttachmentDTO>. */
export interface CategoryListOnTargetGetResponseItem extends JsonObject {
  "id": string;
  "category_id": string;
  "target_id": string;
  "sort_order": number;
  "created_at": string;
}
export interface CategoryListOnTargetGetResponse extends ApiEnvelope<CategoryListOnTargetGetResponseItem[]> {
}

/** Backend request type: models::CategoryAttachRequest. */
export interface CategoryAttachToTargetPostInput extends JsonObject {
  "category_id": string;
  "sort_order"?: number;
}
/** Backend response type: models::CategoryAttachmentDTO. */
export interface CategoryAttachToTargetPostResponseData extends JsonObject {
  "id": string;
  "category_id": string;
  "target_id": string;
  "sort_order": number;
  "created_at": string;
}
export interface CategoryAttachToTargetPostResponse extends ApiEnvelope<CategoryAttachToTargetPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface CategoryDeleteCategoryDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::CategoryResponseDTO. */
export interface CategoryShowCategoryGetResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string;
  "name"?: string;
  "description"?: string;
  "status": number;
  "requires_confirmation": boolean;
  "created_at": string;
  "updated_at": string;
}
export interface CategoryShowCategoryGetResponse extends ApiEnvelope<CategoryShowCategoryGetResponseData> {
}

/** Backend request type: models::CategoryUpdateRequest. */
export interface CategoryUpdateCategoryPatchInput extends JsonObject {
  "parent_id"?: string | null;
  "name"?: string | null;
  "description"?: string | null;
  "status"?: number;
  "requires_confirmation"?: boolean;
}
/** Backend response type: models::CategoryResponseDTO. */
export interface CategoryUpdateCategoryPatchResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string;
  "name"?: string;
  "description"?: string;
  "status": number;
  "requires_confirmation": boolean;
  "created_at": string;
  "updated_at": string;
}
export interface CategoryUpdateCategoryPatchResponse extends ApiEnvelope<CategoryUpdateCategoryPatchResponseData> {
}

/** Backend request type: models::CategoryUpdateRequest. */
export interface CategoryUpdateCategoryPutInput extends JsonObject {
  "parent_id"?: string | null;
  "name"?: string | null;
  "description"?: string | null;
  "status"?: number;
  "requires_confirmation"?: boolean;
}
/** Backend response type: models::CategoryResponseDTO. */
export interface CategoryUpdateCategoryPutResponseData extends JsonObject {
  "id": string;
  "parent_id"?: string;
  "name"?: string;
  "description"?: string;
  "status": number;
  "requires_confirmation": boolean;
  "created_at": string;
  "updated_at": string;
}
export interface CategoryUpdateCategoryPutResponse extends ApiEnvelope<CategoryUpdateCategoryPutResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface CommentListCommentsGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::CommentListResponse. */
export interface CommentListCommentsGetResponseData extends JsonObject {
  "comments": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface CommentListCommentsGetResponse extends ApiEnvelope<CommentListCommentsGetResponseData> {
}

/** Backend request type: models::CommentCreateRequest. */
export interface CommentCreateCommentPostInput extends JsonObject {
  "content": string;
  "parent_id"?: string;
  "author_id"?: string;
  "status"?: number;
}
/** Backend response type: models::CommentResponseDTO. */
export interface CommentCreateCommentPostResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "author_id"?: string;
  "parent_id"?: string;
  "content": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface CommentCreateCommentPostResponse extends ApiEnvelope<CommentCreateCommentPostResponseData> {
}

/** Backend response type: Vec<models::CommentAttachmentDTO>. */
export interface CommentListOnTargetGetResponseItem extends JsonObject {
  "id": string;
  "comment_id": string;
  "target_id": string;
  "sort_order": number;
  "created_at": string;
}
export interface CommentListOnTargetGetResponse extends ApiEnvelope<CommentListOnTargetGetResponseItem[]> {
}

/** Backend request type: models::CommentOnTargetRequest. */
export interface CommentCreateOnTargetPostInput extends JsonObject {
  "content": string;
  "parent_id"?: string;
  "author_id"?: string;
  "status"?: number;
  "sort_order"?: number;
}
/** Backend response type: models::CommentAttachmentDTO. */
export interface CommentCreateOnTargetPostResponseData extends JsonObject {
  "id": string;
  "comment_id": string;
  "target_id": string;
  "sort_order": number;
  "created_at": string;
}
export interface CommentCreateOnTargetPostResponse extends ApiEnvelope<CommentCreateOnTargetPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface CommentDeleteCommentDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::CommentResponseDTO. */
export interface CommentShowCommentGetResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "author_id"?: string;
  "parent_id"?: string;
  "content": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface CommentShowCommentGetResponse extends ApiEnvelope<CommentShowCommentGetResponseData> {
}

/** Backend request type: models::CommentUpdateRequest. */
export interface CommentUpdateCommentPatchInput extends JsonObject {
  "content"?: string;
  "status"?: number;
}
/** Backend response type: models::CommentResponseDTO. */
export interface CommentUpdateCommentPatchResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "author_id"?: string;
  "parent_id"?: string;
  "content": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface CommentUpdateCommentPatchResponse extends ApiEnvelope<CommentUpdateCommentPatchResponseData> {
}

/** Backend request type: models::CommentUpdateRequest. */
export interface CommentUpdateCommentPutInput extends JsonObject {
  "content"?: string;
  "status"?: number;
}
/** Backend response type: models::CommentResponseDTO. */
export interface CommentUpdateCommentPutResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "author_id"?: string;
  "parent_id"?: string;
  "content": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface CommentUpdateCommentPutResponse extends ApiEnvelope<CommentUpdateCommentPutResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ContentListContentsGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::ContentListResponse. */
export interface ContentListContentsGetResponseData extends JsonObject {
  "contents": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface ContentListContentsGetResponse extends ApiEnvelope<ContentListContentsGetResponseData> {
}

/** Backend request type: models::ContentCreateRequest. */
export interface ContentCreateContentPostInput extends JsonObject {
  "content"?: string;
  "created_by_author_id"?: string;
}
/** Backend response type: models::ContentResponseDTO. */
export interface ContentCreateContentPostResponseData extends JsonObject {
  "id": string;
  "created_by_user_id": string;
  "created_by_author_id"?: string;
  "content"?: string;
  "auto_saved_content"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface ContentCreateContentPostResponse extends ApiEnvelope<ContentCreateContentPostResponseData> {
}

/** Backend query type: models::ContentDetachQuery. */
export interface ContentDetachFromTargetDeleteQuery extends QueryParams {
  "junction_id": string;
}
/** Backend response type: response without a declared JSON model. */
export interface ContentDetachFromTargetDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<models::ContentAttachmentDTO>. */
export interface ContentListOnTargetGetResponseItem extends JsonObject {
  "id": string;
  "content_id": string;
  "target_id": string;
  "content_type": JsonValue;
  "sort_order": number;
  "priority"?: number;
  "created_at": string;
}
export interface ContentListOnTargetGetResponse extends ApiEnvelope<ContentListOnTargetGetResponseItem[]> {
}

/** Backend request type: models::ContentAttachRequest. */
export interface ContentAttachToTargetPostInput extends JsonObject {
  "content_id": string;
  "content_type": JsonValue;
  "sort_order"?: number;
  "priority"?: number;
}
/** Backend response type: models::ContentAttachmentDTO. */
export interface ContentAttachToTargetPostResponseData extends JsonObject {
  "id": string;
  "content_id": string;
  "target_id": string;
  "content_type": JsonValue;
  "sort_order": number;
  "priority"?: number;
  "created_at": string;
}
export interface ContentAttachToTargetPostResponse extends ApiEnvelope<ContentAttachToTargetPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface ContentDeleteContentDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::ContentResponseDTO. */
export interface ContentShowContentGetResponseData extends JsonObject {
  "id": string;
  "created_by_user_id": string;
  "created_by_author_id"?: string;
  "content"?: string;
  "auto_saved_content"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface ContentShowContentGetResponse extends ApiEnvelope<ContentShowContentGetResponseData> {
}

/** Backend request type: models::ContentUpdateRequest. */
export interface ContentUpdateContentPatchInput extends JsonObject {
  "content"?: string;
  "auto_saved_content"?: string;
}
/** Backend query type: models::ContentUpdateQuery. */
export interface ContentUpdateContentPatchQuery extends QueryParams {
  "autosave"?: boolean;
  "host"?: string;
  "target_id"?: string;
}
/** Backend response type: models::ContentResponseDTO. */
export interface ContentUpdateContentPatchResponseData extends JsonObject {
  "id": string;
  "created_by_user_id": string;
  "created_by_author_id"?: string;
  "content"?: string;
  "auto_saved_content"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface ContentUpdateContentPatchResponse extends ApiEnvelope<ContentUpdateContentPatchResponseData> {
}

/** Backend request type: models::ContentUpdateRequest. */
export interface ContentUpdateContentPutInput extends JsonObject {
  "content"?: string;
  "auto_saved_content"?: string;
}
/** Backend query type: models::ContentUpdateQuery. */
export interface ContentUpdateContentPutQuery extends QueryParams {
  "autosave"?: boolean;
  "host"?: string;
  "target_id"?: string;
}
/** Backend response type: models::ContentResponseDTO. */
export interface ContentUpdateContentPutResponseData extends JsonObject {
  "id": string;
  "created_by_user_id": string;
  "created_by_author_id"?: string;
  "content"?: string;
  "auto_saved_content"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface ContentUpdateContentPutResponse extends ApiEnvelope<ContentUpdateContentPutResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::InventoryListQuery. */
export interface InventoryListInventoriesGetQuery extends QueryParams {
  "variant_id"?: string;
  "warehouse_id"?: string;
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::InventoryListResponse. */
export interface InventoryListInventoriesGetResponseData extends JsonObject {
  "inventories": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface InventoryListInventoriesGetResponse extends ApiEnvelope<InventoryListInventoriesGetResponseData> {
}

/** Backend request type: models::InventoryCreateRequest. */
export interface InventoryCreateInventoryPostInput extends JsonObject {
  "variant_id": string;
  "warehouse_id": string;
  "priority"?: number;
  "quantity": number;
}
/** Backend response type: models::InventoryResponseDTO. */
export interface InventoryCreateInventoryPostResponseData extends JsonObject {
  "id": string;
  "variant_id": string;
  "warehouse_id": string;
  "priority": number;
  "quantity": number;
  "reserved": number;
  "available": number;
  "created_at": string;
  "updated_at": string;
}
export interface InventoryCreateInventoryPostResponse extends ApiEnvelope<InventoryCreateInventoryPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface InventoryDeleteInventoryDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::InventoryResponseDTO. */
export interface InventoryShowInventoryGetResponseData extends JsonObject {
  "id": string;
  "variant_id": string;
  "warehouse_id": string;
  "priority": number;
  "quantity": number;
  "reserved": number;
  "available": number;
  "created_at": string;
  "updated_at": string;
}
export interface InventoryShowInventoryGetResponse extends ApiEnvelope<InventoryShowInventoryGetResponseData> {
}

/** Backend request type: models::InventoryUpdateRequest. */
export interface InventoryUpdateInventoryPatchInput extends JsonObject {
  "priority"?: number;
  "quantity"?: number;
  "reserved"?: number;
}
/** Backend response type: models::InventoryResponseDTO. */
export interface InventoryUpdateInventoryPatchResponseData extends JsonObject {
  "id": string;
  "variant_id": string;
  "warehouse_id": string;
  "priority": number;
  "quantity": number;
  "reserved": number;
  "available": number;
  "created_at": string;
  "updated_at": string;
}
export interface InventoryUpdateInventoryPatchResponse extends ApiEnvelope<InventoryUpdateInventoryPatchResponseData> {
}

/** Backend request type: models::InventoryUpdateRequest. */
export interface InventoryUpdateInventoryPutInput extends JsonObject {
  "priority"?: number;
  "quantity"?: number;
  "reserved"?: number;
}
/** Backend response type: models::InventoryResponseDTO. */
export interface InventoryUpdateInventoryPutResponseData extends JsonObject {
  "id": string;
  "variant_id": string;
  "warehouse_id": string;
  "priority": number;
  "quantity": number;
  "reserved": number;
  "available": number;
  "created_at": string;
  "updated_at": string;
}
export interface InventoryUpdateInventoryPutResponse extends ApiEnvelope<InventoryUpdateInventoryPutResponseData> {
}

/** Backend query type: models::StockMovementListQuery. */
export interface StockMovementListStockMovementsGetQuery extends QueryParams {
  "variant_id"?: string;
  "warehouse_id"?: string;
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::StockMovementListResponse. */
export interface StockMovementListStockMovementsGetResponseData extends JsonObject {
  "stock_movements": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface StockMovementListStockMovementsGetResponse extends ApiEnvelope<StockMovementListStockMovementsGetResponseData> {
}

/** Backend request type: models::StockMovementCreateRequest. */
export interface StockMovementCreateStockMovementPostInput extends JsonObject {
  "variant_id": string;
  "warehouse_id": string;
  "quantity": number;
  "reference_id"?: string;
  "reason"?: string;
}
/** Backend response type: models::StockMovementResponseDTO. */
export interface StockMovementCreateStockMovementPostResponseData extends JsonObject {
  "id": string;
  "variant_id": string;
  "warehouse_id": string;
  "quantity": number;
  "reference_id"?: string;
  "reason"?: string;
  "created_at": string;
}
export interface StockMovementCreateStockMovementPostResponse extends ApiEnvelope<StockMovementCreateStockMovementPostResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface InventoryListWarehousesGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::WarehouseListResponse. */
export interface InventoryListWarehousesGetResponseData extends JsonObject {
  "warehouses": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface InventoryListWarehousesGetResponse extends ApiEnvelope<InventoryListWarehousesGetResponseData> {
}

/** Backend request type: models::WarehouseCreateRequest. */
export interface InventoryCreateWarehousePostInput extends JsonObject {
  "name": string;
  "location": string;
  "capacity": number;
}
/** Backend response type: models::WarehouseResponseDTO. */
export interface InventoryCreateWarehousePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "location": string;
  "capacity": number;
  "created_at": string;
  "updated_at": string;
}
export interface InventoryCreateWarehousePostResponse extends ApiEnvelope<InventoryCreateWarehousePostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface InventoryDeleteWarehouseDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::WarehouseResponseDTO. */
export interface InventoryShowWarehouseGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "location": string;
  "capacity": number;
  "created_at": string;
  "updated_at": string;
}
export interface InventoryShowWarehouseGetResponse extends ApiEnvelope<InventoryShowWarehouseGetResponseData> {
}

/** Backend request type: models::WarehouseUpdateRequest. */
export interface InventoryUpdateWarehousePatchInput extends JsonObject {
  "name"?: string;
  "location"?: string;
  "capacity"?: number;
}
/** Backend response type: models::WarehouseResponseDTO. */
export interface InventoryUpdateWarehousePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "location": string;
  "capacity": number;
  "created_at": string;
  "updated_at": string;
}
export interface InventoryUpdateWarehousePatchResponse extends ApiEnvelope<InventoryUpdateWarehousePatchResponseData> {
}

/** Backend request type: models::WarehouseUpdateRequest. */
export interface InventoryUpdateWarehousePutInput extends JsonObject {
  "name"?: string;
  "location"?: string;
  "capacity"?: number;
}
/** Backend response type: models::WarehouseResponseDTO. */
export interface InventoryUpdateWarehousePutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "location": string;
  "capacity": number;
  "created_at": string;
  "updated_at": string;
}
export interface InventoryUpdateWarehousePutResponse extends ApiEnvelope<InventoryUpdateWarehousePutResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ServicePricingListPricingGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::ServicePricingListResponse. */
export interface ServicePricingListPricingGetResponseData extends JsonObject {
  "pricings": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface ServicePricingListPricingGetResponse extends ApiEnvelope<ServicePricingListPricingGetResponseData> {
}

/** Backend request type: models::ServicePricingCreateRequest. */
export interface ServicePricingCreatePricingPostInput extends JsonObject {
  "service_name": string;
  "display_name"?: string;
  "hourly_price": number;
  "monthly_price": number;
  "annual_price": number;
  "currency"?: string;
  "status"?: number;
}
/** Backend response type: models::ServicePricingResponseDTO. */
export interface ServicePricingCreatePricingPostResponseData extends JsonObject {
  "id": string;
  "service_name": string;
  "display_name"?: string;
  "hourly_price": number;
  "monthly_price": number;
  "annual_price": number;
  "currency": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface ServicePricingCreatePricingPostResponse extends ApiEnvelope<ServicePricingCreatePricingPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface ServicePricingDeletePricingDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::ServicePricingResponseDTO. */
export interface ServicePricingShowPricingGetResponseData extends JsonObject {
  "id": string;
  "service_name": string;
  "display_name"?: string;
  "hourly_price": number;
  "monthly_price": number;
  "annual_price": number;
  "currency": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface ServicePricingShowPricingGetResponse extends ApiEnvelope<ServicePricingShowPricingGetResponseData> {
}

/** Backend request type: models::ServicePricingUpdateRequest. */
export interface ServicePricingUpdatePricingPatchInput extends JsonObject {
  "service_name"?: string;
  "display_name"?: string | null;
  "hourly_price"?: number;
  "monthly_price"?: number;
  "annual_price"?: number;
  "currency"?: string;
  "status"?: number;
}
/** Backend response type: models::ServicePricingResponseDTO. */
export interface ServicePricingUpdatePricingPatchResponseData extends JsonObject {
  "id": string;
  "service_name": string;
  "display_name"?: string;
  "hourly_price": number;
  "monthly_price": number;
  "annual_price": number;
  "currency": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface ServicePricingUpdatePricingPatchResponse extends ApiEnvelope<ServicePricingUpdatePricingPatchResponseData> {
}

/** Backend request type: models::ServicePricingUpdateRequest. */
export interface ServicePricingUpdatePricingPutInput extends JsonObject {
  "service_name"?: string;
  "display_name"?: string | null;
  "hourly_price"?: number;
  "monthly_price"?: number;
  "annual_price"?: number;
  "currency"?: string;
  "status"?: number;
}
/** Backend response type: models::ServicePricingResponseDTO. */
export interface ServicePricingUpdatePricingPutResponseData extends JsonObject {
  "id": string;
  "service_name": string;
  "display_name"?: string;
  "hourly_price": number;
  "monthly_price": number;
  "annual_price": number;
  "currency": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface ServicePricingUpdatePricingPutResponse extends ApiEnvelope<ServicePricingUpdatePricingPutResponseData> {
}

/** Backend query type: models::ReactionDeleteQuery. */
export interface ReactionDeleteOnTargetDeleteQuery extends QueryParams {
  "reaction_id": string;
}
/** Backend response type: response without a declared JSON model. */
export interface ReactionDeleteOnTargetDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<models::ReactionResponseDTO>. */
export interface ReactionListOnTargetGetResponseItem extends JsonObject {
  "id": string;
  "user_id": string;
  "target_id": string;
  "reaction_type": JsonValue;
  "created_at": string;
}
export interface ReactionListOnTargetGetResponse extends ApiEnvelope<ReactionListOnTargetGetResponseItem[]> {
}

/** Backend request type: models::ReactionCreateRequest. */
export interface ReactionCreateOnTargetPostInput extends JsonObject {
  "reaction_type": JsonValue;
}
/** Backend response type: models::ReactionResponseDTO. */
export interface ReactionCreateOnTargetPostResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "target_id": string;
  "reaction_type": JsonValue;
  "created_at": string;
}
export interface ReactionCreateOnTargetPostResponse extends ApiEnvelope<ReactionCreateOnTargetPostResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface RequestListRequestsGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::RequestListResponse. */
export interface RequestListRequestsGetResponseData extends JsonObject {
  "requests": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface RequestListRequestsGetResponse extends ApiEnvelope<RequestListRequestsGetResponseData> {
}

/** Backend request type: models::RequestCreateRequest. */
export interface RequestCreateRequestPostInput extends JsonObject {
  "key": string;
  "name": string;
  "description"?: string;
  "status"?: number;
}
/** Backend response type: models::RequestResponseDTO. */
export interface RequestCreateRequestPostResponseData extends JsonObject {
  "id": string;
  "key": string;
  "name": string;
  "description"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface RequestCreateRequestPostResponse extends ApiEnvelope<RequestCreateRequestPostResponseData> {
}

/** Backend query type: models::RequestDetachQuery. */
export interface RequestDetachFromTargetDeleteQuery extends QueryParams {
  "junction_id": string;
}
/** Backend response type: response without a declared JSON model. */
export interface RequestDetachFromTargetDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<models::RequestAttachmentDTO>. */
export interface RequestListOnTargetGetResponseItem extends JsonObject {
  "id": string;
  "request_id": string;
  "target_id": string;
  "sort_order": number;
  "created_at": string;
}
export interface RequestListOnTargetGetResponse extends ApiEnvelope<RequestListOnTargetGetResponseItem[]> {
}

/** Backend request type: models::RequestAttachRequest. */
export interface RequestAttachToTargetPostInput extends JsonObject {
  "request_id": string;
  "sort_order"?: number;
}
/** Backend response type: models::RequestAttachmentDTO. */
export interface RequestAttachToTargetPostResponseData extends JsonObject {
  "id": string;
  "request_id": string;
  "target_id": string;
  "sort_order": number;
  "created_at": string;
}
export interface RequestAttachToTargetPostResponse extends ApiEnvelope<RequestAttachToTargetPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface RequestDeleteRequestDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::RequestResponseDTO. */
export interface RequestShowRequestGetResponseData extends JsonObject {
  "id": string;
  "key": string;
  "name": string;
  "description"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface RequestShowRequestGetResponse extends ApiEnvelope<RequestShowRequestGetResponseData> {
}

/** Backend request type: models::RequestUpdateRequest. */
export interface RequestUpdateRequestPatchInput extends JsonObject {
  "key"?: string;
  "name"?: string;
  "description"?: string | null;
  "status"?: number;
}
/** Backend response type: models::RequestResponseDTO. */
export interface RequestUpdateRequestPatchResponseData extends JsonObject {
  "id": string;
  "key": string;
  "name": string;
  "description"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface RequestUpdateRequestPatchResponse extends ApiEnvelope<RequestUpdateRequestPatchResponseData> {
}

/** Backend request type: models::RequestUpdateRequest. */
export interface RequestUpdateRequestPutInput extends JsonObject {
  "key"?: string;
  "name"?: string;
  "description"?: string | null;
  "status"?: number;
}
/** Backend response type: models::RequestResponseDTO. */
export interface RequestUpdateRequestPutResponseData extends JsonObject {
  "id": string;
  "key": string;
  "name": string;
  "description"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface RequestUpdateRequestPutResponse extends ApiEnvelope<RequestUpdateRequestPutResponseData> {
}

/** Backend response type: Vec<models::RequestLogResponseDTO>. */
export interface RequestListLogsForRequestGetResponseItem extends JsonObject {
  "id": string;
  "user_id"?: string;
  "request_id": string;
  "data": JsonValue;
  "status": number;
  "created_at": string;
}
export interface RequestListLogsForRequestGetResponse extends ApiEnvelope<RequestListLogsForRequestGetResponseItem[]> {
}

/** Backend request type: models::RequestSubmitRequest. */
export interface RequestSubmitPostInput extends JsonObject {
  "data": JsonValue;
}
/** Backend response type: models::RequestLogResponseDTO. */
export interface RequestSubmitPostResponseData extends JsonObject {
  "id": string;
  "user_id"?: string;
  "request_id": string;
  "data": JsonValue;
  "status": number;
  "created_at": string;
}
export interface RequestSubmitPostResponse extends ApiEnvelope<RequestSubmitPostResponseData> {
}

/** Backend query type: models::RequestLogListQuery. */
export interface RequestListLogsForCategoryGetQuery extends QueryParams {
  "request_id"?: string;
}
/** Backend response type: Vec<models::RequestLogResponseDTO>. */
export interface RequestListLogsForCategoryGetResponseItem extends JsonObject {
  "id": string;
  "user_id"?: string;
  "request_id": string;
  "data": JsonValue;
  "status": number;
  "created_at": string;
}
export interface RequestListLogsForCategoryGetResponse extends ApiEnvelope<RequestListLogsForCategoryGetResponseItem[]> {
}

/** Backend query type: PaginationQuery. */
export interface UserSampleListSamplesGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::UserSampleListResponse. */
export interface UserSampleListSamplesGetResponseData extends JsonObject {
  "samples": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface UserSampleListSamplesGetResponse extends ApiEnvelope<UserSampleListSamplesGetResponseData> {
}

/** Backend request type: models::UserSampleCreateRequest. */
export interface UserSampleCreateSamplePostInput extends JsonObject {
  "slug": string;
  "name": string;
  "description"?: string;
  "project_slug"?: string;
  "preview_url"?: string;
  "thumbnail_url"?: string;
  "category"?: string;
  "status"?: number;
}
/** Backend response type: models::UserSampleResponseDTO. */
export interface UserSampleCreateSamplePostResponseData extends JsonObject {
  "id": string;
  "slug": string;
  "name": string;
  "description"?: string;
  "project_slug"?: string;
  "preview_url"?: string;
  "thumbnail_url"?: string;
  "category"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface UserSampleCreateSamplePostResponse extends ApiEnvelope<UserSampleCreateSamplePostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface UserSampleDeleteSampleDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::UserSampleResponseDTO. */
export interface UserSampleShowSampleGetResponseData extends JsonObject {
  "id": string;
  "slug": string;
  "name": string;
  "description"?: string;
  "project_slug"?: string;
  "preview_url"?: string;
  "thumbnail_url"?: string;
  "category"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface UserSampleShowSampleGetResponse extends ApiEnvelope<UserSampleShowSampleGetResponseData> {
}

/** Backend request type: models::UserSampleUpdateRequest. */
export interface UserSampleUpdateSamplePatchInput extends JsonObject {
  "slug"?: string;
  "name"?: string;
  "description"?: string | null;
  "project_slug"?: string | null;
  "preview_url"?: string | null;
  "thumbnail_url"?: string | null;
  "category"?: string | null;
  "status"?: number;
}
/** Backend response type: models::UserSampleResponseDTO. */
export interface UserSampleUpdateSamplePatchResponseData extends JsonObject {
  "id": string;
  "slug": string;
  "name": string;
  "description"?: string;
  "project_slug"?: string;
  "preview_url"?: string;
  "thumbnail_url"?: string;
  "category"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface UserSampleUpdateSamplePatchResponse extends ApiEnvelope<UserSampleUpdateSamplePatchResponseData> {
}

/** Backend request type: models::UserSampleUpdateRequest. */
export interface UserSampleUpdateSamplePutInput extends JsonObject {
  "slug"?: string;
  "name"?: string;
  "description"?: string | null;
  "project_slug"?: string | null;
  "preview_url"?: string | null;
  "thumbnail_url"?: string | null;
  "category"?: string | null;
  "status"?: number;
}
/** Backend response type: models::UserSampleResponseDTO. */
export interface UserSampleUpdateSamplePutResponseData extends JsonObject {
  "id": string;
  "slug": string;
  "name": string;
  "description"?: string;
  "project_slug"?: string;
  "preview_url"?: string;
  "thumbnail_url"?: string;
  "category"?: string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface UserSampleUpdateSamplePutResponse extends ApiEnvelope<UserSampleUpdateSamplePutResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface UserSampleListSampleVariablesGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::SampleVariableListResponse. */
export interface UserSampleListSampleVariablesGetResponseData extends JsonObject {
  "variables": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface UserSampleListSampleVariablesGetResponse extends ApiEnvelope<UserSampleListSampleVariablesGetResponseData> {
}

/** Backend request type: models::SampleVariableCreateRequest. */
export interface UserSampleCreateSampleVariablePostInput extends JsonObject {
  "key": string;
  "label": string;
  "value"?: string;
  "group_name"?: string;
  "variable_type"?: string;
  "description"?: string;
  "sort_order"?: number;
}
/** Backend response type: models::SampleVariableResponseDTO. */
export interface UserSampleCreateSampleVariablePostResponseData extends JsonObject {
  "id": string;
  "sample_id": string;
  "sample_slug"?: string;
  "sample_name"?: string;
  "key": string;
  "label": string;
  "value"?: string;
  "group_name"?: string;
  "variable_type": string;
  "description"?: string;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface UserSampleCreateSampleVariablePostResponse extends ApiEnvelope<UserSampleCreateSampleVariablePostResponseData> {
}

/** Backend response type: models::SampleVariablesMapResponse. */
export interface UserSampleVariablesMapBySlugGetResponseData extends JsonObject {
  "sample_id": string;
  "sample_slug": string;
  "variables": Record<string, JsonValue>;
}
export interface UserSampleVariablesMapBySlugGetResponse extends ApiEnvelope<UserSampleVariablesMapBySlugGetResponseData> {
}

/** Backend query type: models::SampleVariableListQuery. */
export interface UserSampleListAllVariablesGetQuery extends QueryParams {
  "sample_id"?: string;
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::SampleVariableListResponse. */
export interface UserSampleListAllVariablesGetResponseData extends JsonObject {
  "variables": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface UserSampleListAllVariablesGetResponse extends ApiEnvelope<UserSampleListAllVariablesGetResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface UserSampleDeleteVariableDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SampleVariableResponseDTO. */
export interface UserSampleShowVariableGetResponseData extends JsonObject {
  "id": string;
  "sample_id": string;
  "sample_slug"?: string;
  "sample_name"?: string;
  "key": string;
  "label": string;
  "value"?: string;
  "group_name"?: string;
  "variable_type": string;
  "description"?: string;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface UserSampleShowVariableGetResponse extends ApiEnvelope<UserSampleShowVariableGetResponseData> {
}

/** Backend request type: models::SampleVariableUpdateRequest. */
export interface UserSampleUpdateVariablePatchInput extends JsonObject {
  "key"?: string;
  "label"?: string;
  "value"?: string | null;
  "group_name"?: string | null;
  "variable_type"?: string;
  "description"?: string | null;
  "sort_order"?: number;
}
/** Backend response type: models::SampleVariableResponseDTO. */
export interface UserSampleUpdateVariablePatchResponseData extends JsonObject {
  "id": string;
  "sample_id": string;
  "sample_slug"?: string;
  "sample_name"?: string;
  "key": string;
  "label": string;
  "value"?: string;
  "group_name"?: string;
  "variable_type": string;
  "description"?: string;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface UserSampleUpdateVariablePatchResponse extends ApiEnvelope<UserSampleUpdateVariablePatchResponseData> {
}

/** Backend request type: models::SampleVariableUpdateRequest. */
export interface UserSampleUpdateVariablePutInput extends JsonObject {
  "key"?: string;
  "label"?: string;
  "value"?: string | null;
  "group_name"?: string | null;
  "variable_type"?: string;
  "description"?: string | null;
  "sort_order"?: number;
}
/** Backend response type: models::SampleVariableResponseDTO. */
export interface UserSampleUpdateVariablePutResponseData extends JsonObject {
  "id": string;
  "sample_id": string;
  "sample_slug"?: string;
  "sample_name"?: string;
  "key": string;
  "label": string;
  "value"?: string;
  "group_name"?: string;
  "variable_type": string;
  "description"?: string;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface UserSampleUpdateVariablePutResponse extends ApiEnvelope<UserSampleUpdateVariablePutResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface SeoContentListSeoContentsGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::SeoContentListResponse. */
export interface SeoContentListSeoContentsGetResponseData extends JsonObject {
  "seo_contents": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface SeoContentListSeoContentsGetResponse extends ApiEnvelope<SeoContentListSeoContentsGetResponseData> {
}

/** Backend request type: models::SeoContentCreateRequest. */
export interface SeoContentCreateSeoContentPostInput extends JsonObject {
  "meta_url"?: string;
  "meta_title"?: string;
  "meta_description"?: string;
  "meta_keyword"?: string;
  "meta_ld"?: JsonValue;
}
/** Backend response type: models::SeoContentResponseDTO. */
export interface SeoContentCreateSeoContentPostResponseData extends JsonObject {
  "id": string;
  "meta_url"?: string;
  "meta_title"?: string;
  "meta_description"?: string;
  "meta_keyword"?: string;
  "meta_ld"?: JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface SeoContentCreateSeoContentPostResponse extends ApiEnvelope<SeoContentCreateSeoContentPostResponseData> {
}

/** Backend query type: models::SeoContentDetachQuery. */
export interface SeoContentDetachFromTargetDeleteQuery extends QueryParams {
  "junction_id": string;
}
/** Backend response type: response without a declared JSON model. */
export interface SeoContentDetachFromTargetDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<models::SeoContentAttachmentDTO>. */
export interface SeoContentListOnTargetGetResponseItem extends JsonObject {
  "id": string;
  "seo_content_id": string;
  "target_id": string;
  "created_at": string;
}
export interface SeoContentListOnTargetGetResponse extends ApiEnvelope<SeoContentListOnTargetGetResponseItem[]> {
}

/** Backend request type: models::SeoContentAttachRequest. */
export interface SeoContentAttachToTargetPostInput extends JsonObject {
  "seo_content_id": string;
}
/** Backend response type: models::SeoContentAttachmentDTO. */
export interface SeoContentAttachToTargetPostResponseData extends JsonObject {
  "id": string;
  "seo_content_id": string;
  "target_id": string;
  "created_at": string;
}
export interface SeoContentAttachToTargetPostResponse extends ApiEnvelope<SeoContentAttachToTargetPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface SeoContentDeleteSeoContentDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SeoContentResponseDTO. */
export interface SeoContentShowSeoContentGetResponseData extends JsonObject {
  "id": string;
  "meta_url"?: string;
  "meta_title"?: string;
  "meta_description"?: string;
  "meta_keyword"?: string;
  "meta_ld"?: JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface SeoContentShowSeoContentGetResponse extends ApiEnvelope<SeoContentShowSeoContentGetResponseData> {
}

/** Backend request type: models::SeoContentUpdateRequest. */
export interface SeoContentUpdateSeoContentPatchInput extends JsonObject {
  "meta_url"?: string | null;
  "meta_title"?: string | null;
  "meta_description"?: string | null;
  "meta_keyword"?: string | null;
  "meta_ld"?: JsonValue | null;
}
/** Backend response type: models::SeoContentResponseDTO. */
export interface SeoContentUpdateSeoContentPatchResponseData extends JsonObject {
  "id": string;
  "meta_url"?: string;
  "meta_title"?: string;
  "meta_description"?: string;
  "meta_keyword"?: string;
  "meta_ld"?: JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface SeoContentUpdateSeoContentPatchResponse extends ApiEnvelope<SeoContentUpdateSeoContentPatchResponseData> {
}

/** Backend request type: models::SeoContentUpdateRequest. */
export interface SeoContentUpdateSeoContentPutInput extends JsonObject {
  "meta_url"?: string | null;
  "meta_title"?: string | null;
  "meta_description"?: string | null;
  "meta_keyword"?: string | null;
  "meta_ld"?: JsonValue | null;
}
/** Backend response type: models::SeoContentResponseDTO. */
export interface SeoContentUpdateSeoContentPutResponseData extends JsonObject {
  "id": string;
  "meta_url"?: string;
  "meta_title"?: string;
  "meta_description"?: string;
  "meta_keyword"?: string;
  "meta_ld"?: JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface SeoContentUpdateSeoContentPutResponse extends ApiEnvelope<SeoContentUpdateSeoContentPutResponseData> {
}

/** Backend response type: CartResponse. */
export interface CartShowGetResponseData extends JsonObject {
  "id"?: string;
  "user_id": string;
  "items": JsonValue[];
}
export interface CartShowGetResponse extends ApiEnvelope<CartShowGetResponseData> {
}

/** Backend request type: CartUpdate. */
export interface CartReplacePutInput extends JsonObject {
  "items": JsonValue[];
}
/** Backend response type: CartResponse. */
export interface CartReplacePutResponseData extends JsonObject {
  "id"?: string;
  "user_id": string;
  "items": JsonValue[];
}
export interface CartReplacePutResponse extends ApiEnvelope<CartReplacePutResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface OrderListOrdersGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::OrderListResponse. */
export interface OrderListOrdersGetResponseData extends JsonObject {
  "orders": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface OrderListOrdersGetResponse extends ApiEnvelope<OrderListOrdersGetResponseData> {
}

/** Backend request type: models::OrderCreateRequest. */
export interface OrderCreateOrderPostInput extends JsonObject {
  "status"?: number;
  "items": JsonValue[];
}
/** Backend response type: models::OrderResponseDTO. */
export interface OrderCreateOrderPostResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "status": number;
  "total": number;
  "items": JsonValue[];
  "created_at": string;
  "updated_at": string;
}
export interface OrderCreateOrderPostResponse extends ApiEnvelope<OrderCreateOrderPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface OrderDeleteOrderDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::OrderResponseDTO. */
export interface OrderShowOrderGetResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "status": number;
  "total": number;
  "items": JsonValue[];
  "created_at": string;
  "updated_at": string;
}
export interface OrderShowOrderGetResponse extends ApiEnvelope<OrderShowOrderGetResponseData> {
}

/** Backend request type: models::OrderUpdateRequest. */
export interface OrderUpdateOrderPatchInput extends JsonObject {
  "status"?: number;
}
/** Backend response type: models::OrderResponseDTO. */
export interface OrderUpdateOrderPatchResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "status": number;
  "total": number;
  "items": JsonValue[];
  "created_at": string;
  "updated_at": string;
}
export interface OrderUpdateOrderPatchResponse extends ApiEnvelope<OrderUpdateOrderPatchResponseData> {
}

/** Backend request type: models::OrderUpdateRequest. */
export interface OrderUpdateOrderPutInput extends JsonObject {
  "status"?: number;
}
/** Backend response type: models::OrderResponseDTO. */
export interface OrderUpdateOrderPutResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "status": number;
  "total": number;
  "items": JsonValue[];
  "created_at": string;
  "updated_at": string;
}
export interface OrderUpdateOrderPutResponse extends ApiEnvelope<OrderUpdateOrderPutResponseData> {
}

/** Backend response type: Vec<models::OrderItemResponseDTO>. */
export interface OrderListOrderItemsGetResponseItem extends JsonObject {
  "id": string;
  "order_id": string;
  "variant_id": string;
  "quantity": number;
  "unit_price": number;
  "total_price": number;
  "created_at": string;
}
export interface OrderListOrderItemsGetResponse extends ApiEnvelope<OrderListOrderItemsGetResponseItem[]> {
}

/** Backend request type: models::OrderItemCreateRequest. */
export interface OrderAddOrderItemPostInput extends JsonObject {
  "variant_id": string;
  "quantity": number;
  "unit_price": number;
}
/** Backend response type: models::OrderResponseDTO. */
export interface OrderAddOrderItemPostResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "status": number;
  "total": number;
  "items": JsonValue[];
  "created_at": string;
  "updated_at": string;
}
export interface OrderAddOrderItemPostResponse extends ApiEnvelope<OrderAddOrderItemPostResponseData> {
}

/** Backend query type: models::ProductListQuery. */
export interface ProductListProductsGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
  "category"?: string;
  "scope"?: string;
  "search"?: string;
}
/** Backend response type: models::ProductListResponse. */
export interface ProductListProductsGetResponseData extends JsonObject {
  "products": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface ProductListProductsGetResponse extends ApiEnvelope<ProductListProductsGetResponseData> {
}

/** Backend request type: models::ProductCreateRequest. */
export interface ProductCreateProductPostInput extends JsonObject {
  "name": string;
  "description"?: string;
  "sku"?: JsonValue;
  "status"?: number;
  "sort_order"?: number;
}
/** Backend response type: models::ProductResponseDTO. */
export interface ProductCreateProductPostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string;
  "sku": JsonValue;
  "status": number;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface ProductCreateProductPostResponse extends ApiEnvelope<ProductCreateProductPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface ProductDeleteProductDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::ProductResponseDTO. */
export interface ProductShowProductGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string;
  "sku": JsonValue;
  "status": number;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface ProductShowProductGetResponse extends ApiEnvelope<ProductShowProductGetResponseData> {
}

/** Backend request type: models::ProductUpdateRequest. */
export interface ProductUpdateProductPatchInput extends JsonObject {
  "name"?: string;
  "description"?: string | null;
  "sku"?: JsonValue;
  "status"?: number;
  "sort_order"?: number;
}
/** Backend response type: models::ProductResponseDTO. */
export interface ProductUpdateProductPatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string;
  "sku": JsonValue;
  "status": number;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface ProductUpdateProductPatchResponse extends ApiEnvelope<ProductUpdateProductPatchResponseData> {
}

/** Backend request type: models::ProductUpdateRequest. */
export interface ProductUpdateProductPutInput extends JsonObject {
  "name"?: string;
  "description"?: string | null;
  "sku"?: JsonValue;
  "status"?: number;
  "sort_order"?: number;
}
/** Backend response type: models::ProductResponseDTO. */
export interface ProductUpdateProductPutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string;
  "sku": JsonValue;
  "status": number;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface ProductUpdateProductPutResponse extends ApiEnvelope<ProductUpdateProductPutResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ProductListProductVariantsGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::VariantListResponse. */
export interface ProductListProductVariantsGetResponseData extends JsonObject {
  "variants": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface ProductListProductVariantsGetResponse extends ApiEnvelope<ProductListProductVariantsGetResponseData> {
}

/** Backend request type: models::VariantCreateRequest. */
export interface ProductCreateVariantPostInput extends JsonObject {
  "name": string;
  "sku"?: JsonValue;
  "price": number;
  "cost"?: number;
  "weight"?: number;
  "stock_priority"?: number;
  "status"?: number;
  "sort_order"?: number;
}
/** Backend response type: models::VariantResponseDTO. */
export interface ProductCreateVariantPostResponseData extends JsonObject {
  "id": string;
  "product_id": string;
  "name": string;
  "sku": JsonValue;
  "price": number;
  "cost": number;
  "weight": number;
  "stock_priority": number;
  "status": number;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface ProductCreateVariantPostResponse extends ApiEnvelope<ProductCreateVariantPostResponseData> {
}

/** Backend query type: models::VariantListQuery. */
export interface ProductListVariantsGetQuery extends QueryParams {
  "product_id"?: string;
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::VariantListResponse. */
export interface ProductListVariantsGetResponseData extends JsonObject {
  "variants": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface ProductListVariantsGetResponse extends ApiEnvelope<ProductListVariantsGetResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface ProductDeleteVariantDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::VariantResponseDTO. */
export interface ProductShowVariantGetResponseData extends JsonObject {
  "id": string;
  "product_id": string;
  "name": string;
  "sku": JsonValue;
  "price": number;
  "cost": number;
  "weight": number;
  "stock_priority": number;
  "status": number;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface ProductShowVariantGetResponse extends ApiEnvelope<ProductShowVariantGetResponseData> {
}

/** Backend request type: models::VariantUpdateRequest. */
export interface ProductUpdateVariantPatchInput extends JsonObject {
  "name"?: string;
  "sku"?: JsonValue;
  "price"?: number;
  "cost"?: number;
  "weight"?: number;
  "stock_priority"?: number;
  "status"?: number;
  "sort_order"?: number;
}
/** Backend response type: models::VariantResponseDTO. */
export interface ProductUpdateVariantPatchResponseData extends JsonObject {
  "id": string;
  "product_id": string;
  "name": string;
  "sku": JsonValue;
  "price": number;
  "cost": number;
  "weight": number;
  "stock_priority": number;
  "status": number;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface ProductUpdateVariantPatchResponse extends ApiEnvelope<ProductUpdateVariantPatchResponseData> {
}

/** Backend request type: models::VariantUpdateRequest. */
export interface ProductUpdateVariantPutInput extends JsonObject {
  "name"?: string;
  "sku"?: JsonValue;
  "price"?: number;
  "cost"?: number;
  "weight"?: number;
  "stock_priority"?: number;
  "status"?: number;
  "sort_order"?: number;
}
/** Backend response type: models::VariantResponseDTO. */
export interface ProductUpdateVariantPutResponseData extends JsonObject {
  "id": string;
  "product_id": string;
  "name": string;
  "sku": JsonValue;
  "price": number;
  "cost": number;
  "weight": number;
  "stock_priority": number;
  "status": number;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface ProductUpdateVariantPutResponse extends ApiEnvelope<ProductUpdateVariantPutResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface TagListTagsGetQuery extends QueryParams {
  "page_number"?: number;
  "page_size"?: number;
}
/** Backend response type: models::TagListResponse. */
export interface TagListTagsGetResponseData extends JsonObject {
  "tags": JsonValue[];
  "page_number": number;
  "page_size": number;
  "total_items": number;
}
export interface TagListTagsGetResponse extends ApiEnvelope<TagListTagsGetResponseData> {
}

/** Backend request type: models::TagCreateRequest. */
export interface TagCreateTagPostInput extends JsonObject {
  "name": string;
  "status"?: number;
}
/** Backend response type: models::TagResponseDTO. */
export interface TagCreateTagPostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface TagCreateTagPostResponse extends ApiEnvelope<TagCreateTagPostResponseData> {
}

/** Backend query type: models::TagDetachQuery. */
export interface TagDetachFromTargetDeleteQuery extends QueryParams {
  "junction_id": string;
}
/** Backend response type: response without a declared JSON model. */
export interface TagDetachFromTargetDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<models::TagAttachmentDTO>. */
export interface TagListOnTargetGetResponseItem extends JsonObject {
  "id": string;
  "tag_id": string;
  "target_id": string;
  "sort_order": number;
  "created_at": string;
}
export interface TagListOnTargetGetResponse extends ApiEnvelope<TagListOnTargetGetResponseItem[]> {
}

/** Backend request type: models::TagAttachRequest. */
export interface TagAttachToTargetPostInput extends JsonObject {
  "tag_id": string;
  "sort_order"?: number;
}
/** Backend response type: models::TagAttachmentDTO. */
export interface TagAttachToTargetPostResponseData extends JsonObject {
  "id": string;
  "tag_id": string;
  "target_id": string;
  "sort_order": number;
  "created_at": string;
}
export interface TagAttachToTargetPostResponse extends ApiEnvelope<TagAttachToTargetPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface TagDeleteTagDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::TagResponseDTO. */
export interface TagShowTagGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface TagShowTagGetResponse extends ApiEnvelope<TagShowTagGetResponseData> {
}

/** Backend request type: models::TagUpdateRequest. */
export interface TagUpdateTagPatchInput extends JsonObject {
  "name"?: string;
  "status"?: number;
}
/** Backend response type: models::TagResponseDTO. */
export interface TagUpdateTagPatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface TagUpdateTagPatchResponse extends ApiEnvelope<TagUpdateTagPatchResponseData> {
}

/** Backend request type: models::TagUpdateRequest. */
export interface TagUpdateTagPutInput extends JsonObject {
  "name"?: string;
  "status"?: number;
}
/** Backend response type: models::TagResponseDTO. */
export interface TagUpdateTagPutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "status": number;
  "created_at": string;
  "updated_at": string;
}
export interface TagUpdateTagPutResponse extends ApiEnvelope<TagUpdateTagPutResponseData> {
}

