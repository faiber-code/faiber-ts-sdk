import type { Identifier, JsonValue, QueryParams } from "@faiber/sdk-core";
import type * as O from "./operations.types.js";
/** Concrete aliases share the audited handler wire contracts with operations. Arbitrary JSON fields (SKU, editor content, SEO, metadata, form data and agent context) are backend serde_json::Value, not placeholder models. */
export type Product = O.ProductShowProductGetResponseData;
export type ProductVariant = O.ProductShowVariantGetResponseData;
export type Order = O.OrderShowOrderGetResponseData;
export type OrderItem = O.OrderListOrderItemsGetResponseItem;
export type BlogPost = O.BlogShowPostGetResponseData;
export type Category = O.CategoryShowCategoryGetResponseData;
export type Tag = O.TagShowTagGetResponseData;
export type Author = O.AuthorShowAuthorGetResponseData;
export type Content = O.ContentShowContentGetResponseData;
export type SeoContent = O.SeoContentShowSeoContentGetResponseData;
export type Comment = O.CommentShowCommentGetResponseData;
export type ModuleRequest = O.RequestShowRequestGetResponseData;
export type Warehouse = O.InventoryShowWarehouseGetResponseData;
export type Inventory = O.InventoryShowInventoryGetResponseData;
export type Pricing = O.ServicePricingShowPricingGetResponseData;
export type Sample = O.UserSampleShowSampleGetResponseData;
export type Cart = O.CartShowGetResponseData;
export type CreateOrderItemInput = O.OrderAddOrderItemPostInput;
export type ReplaceCartInput = O.CartReplacePutInput;
export type AttachCategoryInput = O.CategoryAttachToTargetPostInput;
export type AttachTagInput = O.TagAttachToTargetPostInput;
export type CategoryAttachment = O.CategoryListOnTargetGetResponseItem;
export type TagAttachment = O.TagListOnTargetGetResponseItem;
export type AuditLog = O.AuditLogListOnTargetGetResponseItem;
export type StockMovement = O.StockMovementCreateStockMovementPostResponseData;
export type ProductVariantQuery = O.ProductListVariantsGetQuery;
export type InventoryQuery = O.InventoryListInventoriesGetQuery;
export type ProductResponse = O.ProductShowProductGetResponse;
export type ProductListResponse = O.ProductListProductsGetResponse;
export type ProductVariantResponse = O.ProductShowVariantGetResponse;
export type ProductVariantListResponse = O.ProductListProductVariantsGetResponse;
export type CartResponse = O.CartShowGetResponse;
export type CategoryAttachmentResponse = O.CategoryAttachToTargetPostResponse;
export type CategoryAttachmentListResponse = O.CategoryListOnTargetGetResponse;
export type TagAttachmentResponse = O.TagAttachToTargetPostResponse;
export type TagAttachmentListResponse = O.TagListOnTargetGetResponse;
export type ContentAttachmentListResponse = O.ContentListOnTargetGetResponse;
export type SeoAttachmentListResponse = O.SeoContentListOnTargetGetResponse;
export type AuditLogListResponse = O.AuditLogListOnTargetGetResponse;
export type StockMovementListResponse = O.StockMovementListStockMovementsGetResponse;
export type CreateProductInput = O.ProductCreateProductPostInput;
export type UpdateProductInput = O.ProductUpdateProductPatchInput;
export type CreateProductVariantInput = O.ProductCreateVariantPostInput;
export type UpdateProductVariantInput = O.ProductUpdateVariantPatchInput;
export type CreateOrderInput = O.OrderCreateOrderPostInput;
export type UpdateOrderInput = O.OrderUpdateOrderPatchInput;
export type CreateBlogPostInput = O.BlogCreatePostPostInput;
export type UpdateBlogPostInput = O.BlogUpdatePostPatchInput;
export type CreateCategoryInput = O.CategoryCreateCategoryPostInput;
export type UpdateCategoryInput = O.CategoryUpdateCategoryPatchInput;
export type CreateTagInput = O.TagCreateTagPostInput;
export type UpdateTagInput = O.TagUpdateTagPatchInput;
export type CreateAuthorInput = O.AuthorCreateAuthorPostInput;
export type UpdateAuthorInput = O.AuthorUpdateAuthorPatchInput;
export type CreateContentInput = O.ContentCreateContentPostInput;
export type UpdateContentInput = O.ContentUpdateContentPatchInput;
export type CreateSeoContentInput = O.SeoContentCreateSeoContentPostInput;
export type UpdateSeoContentInput = O.SeoContentUpdateSeoContentPatchInput;
export type CreateCommentInput = O.CommentCreateCommentPostInput;
export type UpdateCommentInput = O.CommentUpdateCommentPatchInput;
export type CreateModuleRequestInput = O.RequestCreateRequestPostInput;
export type UpdateModuleRequestInput = O.RequestUpdateRequestPatchInput;
export type CreateWarehouseInput = O.InventoryCreateWarehousePostInput;
export type UpdateWarehouseInput = O.InventoryUpdateWarehousePatchInput;
export type CreateInventoryInput = O.InventoryCreateInventoryPostInput;
export type UpdateInventoryInput = O.InventoryUpdateInventoryPatchInput;
export type CreatePricingInput = O.ServicePricingCreatePricingPostInput;
export type UpdatePricingInput = O.ServicePricingUpdatePricingPatchInput;
export type CreateSampleInput = O.UserSampleCreateSamplePostInput;
export type UpdateSampleInput = O.UserSampleUpdateSamplePatchInput;
export type CartItem = JsonValue;
export type TargetIdentifier = Identifier;

export type ModulesAuthSelf = O.SessionGetSelfGetResponse;

export interface ModulesRouteContract {
    method: string;
    path: string;
    permission: string;
    visibility: "public" | "authenticated" | "manage" | "integration";
    risk: "read" | "ordinary" | "risky";
}

export type ModulesSettings = import("./contracts.types.js").ModulesSettingsWire;

export interface UpdateModulesSettingsInput {
    title: string;
    locales: JsonValue;
    timezone: string;
    currency: string;
    contact?: JsonValue;
    seo_defaults?: JsonValue;
    checkout_rules?: JsonValue;
    delivery?: JsonValue;
}

export type ContentDocumentKind = "page" | "post" | "reusable" | "podcast" | "episode" | "student_project" | "parent_review";
export type ContentDocumentStatus = "draft" | "review" | "scheduled" | "published" | "archived";

export type ContentDocument = O.ManagementApiListContentGetResponseItem;

export interface WriteContentDocumentInput {
    kind: ContentDocumentKind;
    slug: string;
    locale?: string;
    title: string;
    editor_json?: JsonValue;
    publish_at?: string | null;
}

export interface ContentDocumentQuery extends QueryParams {
    kind?: ContentDocumentKind;
    locale?: string;
    status?: ContentDocumentStatus;
}

/** Pagination and optional category filter for published public content. */
export interface PublicContentQuery extends QueryParams {
    page_number?: number;
    page_size?: number;
    category?: string;
}

/** Paginated published-content response returned by Modules public APIs. */
export interface PublicContentListResponse {
    items: ContentDocument[];
    page_number: number;
    page_size: number;
    total_items: number;
}

/** Selects which public Modules records participate in autocomplete. */
export type AutocompleteScope = "posts" | "products" | "mixed";

/** Query for the indexed public autocomplete endpoint. */
export interface AutocompleteQuery extends QueryParams {
    q: string;
    scope?: AutocompleteScope;
    locale?: string;
    limit?: number;
}

/** One relevance-ranked public search suggestion. */
export type AutocompleteSuggestion = O.SearchAutocompleteGetResponseDataItems;

/** Response returned by the indexed public autocomplete endpoint. */
export interface AutocompleteResponse {
    query: string;
    scope: AutocompleteScope;
    items: AutocompleteSuggestion[];
}

/** Public category node. Use parent_id to reconstruct an arbitrary-depth tree. */
export type PublicContentCategory = O.ContentTransferListPublicCategoriesGetResponseItem;

/** Deterministic category import used by trusted migration operators. Requires content:write. */
export interface ImportContentCategoryInput {
    parent_id?: string | null;
    legacy_host: string;
    legacy_id: string;
    slug: string;
    locale?: string;
    name: string;
    description?: string | null;
    image_url?: string | null;
    scope?: "post" | "product";
    status?: number;
    seo?: JsonValue;
}

/** Deterministic revisioned document import. Publishing also requires content:publish. */
export interface ImportContentDocumentInput {
    kind: ContentDocumentKind;
    slug: string;
    locale?: string;
    title: string;
    legacy_host: string;
    legacy_id: string;
    source_checksum: string;
    editor_json?: JsonValue;
    status?: ContentDocumentStatus;
    publish_at?: string | null;
    published_at?: string | null;
    category_ids?: string[];
}

export type ModulesMediaPurpose =
    | "editor"
    | "post"
    | "product"
    | "post-category"
    | "product-category"
    | "student-project"
    | "parent-review";

export interface ModulesMediaUploadResponse {
    url: string;
    key: string;
    content_type: string;
    size: number;
}

export type ContentRevision = O.ManagementApiListContentRevisionsGetResponseItem;

export type ModulesAgentSpecialist = "content" | "seo" | "commerce" | "media" | "forms" | "manage";
export type AgentProposalRisk = "read" | "ordinary" | "risky";

export type AgentProposal = O.ManagementApiGetProposalGetResponseData;

export interface RunModulesAgentInput {
    operation: string;
    message: string;
    specialist: ModulesAgentSpecialist;
    target_type: string;
    target_id?: string | null;
    expected_etag?: string | null;
    resource_ids?: string[];
    context?: JsonValue;
    model_ref?: string | null;
    risk?: AgentProposalRisk;
}

/** Existing hosted catalog pagination. Page numbers start at 1; the server clamps
 * page_size to 1..100 (default 10). Search is a case-insensitive literal substring,
 * not a SQL pattern: raw input is limited to 128 Unicode characters and no NUL.
 * The server trims whitespace; omitted/blank search preserves the unfiltered catalog.
 * UUID ascending order stabilizes pages; deleted rows are excluded. */
export interface HostedCatalogQuery extends QueryParams {
    page_number?: number;
    page_size?: number;
    search?: string;
}
/** Category name matches; response data.search is the normalized string or null. */
export type CategoryListResponse = import("./operations.types.js").CategoryListCategoriesGetResponse;
/** Tag name matches; response data.search is the normalized string or null. */
export type TagListResponse = import("./operations.types.js").TagListTagsGetResponse;
/** SEO title or URL matches; response data.search is the normalized string or null. */
export type SeoContentListResponse = import("./operations.types.js").SeoContentListSeoContentsGetResponse;
