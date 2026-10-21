import type { ModulesPublicRoutesResponse } from "./contracts.types.js";
import type * as O from "./operations.types.js";
import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions, } from "@faiber/sdk-core";
import type { HostedCatalogQuery, CategoryListResponse, TagListResponse, SeoContentListResponse, AttachCategoryInput, AttachTagInput, AuditLogListResponse, Author, BlogPost, CartResponse, Category, CategoryAttachmentListResponse, CategoryAttachmentResponse, Comment, Content, ContentAttachmentListResponse, CreateAuthorInput, CreateBlogPostInput, CreateCategoryInput, CreateCommentInput, CreateContentInput, CreateInventoryInput, CreateModuleRequestInput, CreateOrderInput, CreatePricingInput, CreateProductInput, CreateProductVariantInput, CreateSampleInput, CreateSeoContentInput, CreateTagInput, CreateWarehouseInput, Inventory, ModuleRequest, Order, Pricing, Product, ProductListResponse, ProductResponse, ProductVariant, ProductVariantListResponse, ProductVariantQuery, ProductVariantResponse, ReplaceCartInput, Sample, SeoAttachmentListResponse, SeoContent, StockMovementListResponse, Tag, TagAttachmentListResponse, TagAttachmentResponse, UpdateAuthorInput, UpdateBlogPostInput, UpdateCategoryInput, UpdateCommentInput, UpdateContentInput, UpdateInventoryInput, UpdateModuleRequestInput, UpdateOrderInput, UpdatePricingInput, UpdateProductInput, UpdateProductVariantInput, UpdateSampleInput, UpdateSeoContentInput, UpdateTagInput, UpdateWarehouseInput, Warehouse, } from "./types.js";
import type { AgentProposal, AutocompleteQuery, AutocompleteResponse, ContentDocument, ContentDocumentQuery, ContentRevision, ImportContentCategoryInput, ImportContentDocumentInput, ModulesAuthSelf, ModulesMediaPurpose, ModulesMediaUploadResponse, ModulesRouteContract, ModulesSettings, PublicContentCategory, PublicContentListResponse, PublicContentQuery, RunModulesAgentInput, UpdateModulesSettingsInput, WriteContentDocumentInput } from "./types.js";
function targetPath(base: string, host: string, id: Identifier): string {
    return `${base}/${encodeURIComponent(host)}/${encodeURIComponent(id)}`;
}
import { ModulesOperations } from "./operations.js";
export class ModulesApi extends ServiceApi {
    readonly operations = new ModulesOperations(this.client);
    readonly products = new RestResource<O.ProductShowProductGetResponseData, O.ProductCreateProductPostInput, O.ProductUpdateProductPatchInput, O.ProductListProductsGetResponse, O.ProductShowProductGetResponse, O.ProductListProductsGetQuery, O.ProductDeleteProductDeleteResponse>(this.client, "/api/v1/shop/products", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly variants = new RestResource<O.ProductShowVariantGetResponseData, O.ProductCreateVariantPostInput, O.ProductUpdateVariantPatchInput, O.ProductListVariantsGetResponse, O.ProductShowVariantGetResponse, O.ProductListVariantsGetQuery, O.ProductDeleteVariantDeleteResponse>(this.client, "/api/v1/shop/variants", { supported: ["list", "show", "update", "replace", "delete"] });
    readonly orders = new RestResource<O.OrderShowOrderGetResponseData, O.OrderCreateOrderPostInput, O.OrderUpdateOrderPatchInput, O.OrderListOrdersGetResponse, O.OrderShowOrderGetResponse, O.OrderListOrdersGetQuery, O.OrderDeleteOrderDeleteResponse>(this.client, "/api/v1/shop/orders", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly posts = new RestResource<O.BlogShowPostGetResponseData, O.BlogCreatePostPostInput, O.BlogUpdatePostPatchInput, O.BlogListPostsGetResponse, O.BlogShowPostGetResponse, O.BlogListPostsGetQuery, O.BlogDeletePostDeleteResponse>(this.client, "/api/v1/blog/posts", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    /** List the current non-deleted hosted catalog with literal search and server pagination. See HostedCatalogQuery; preserves full Axios response and caller authorization. */
    readonly categories = new RestResource<O.CategoryShowCategoryGetResponseData, O.CategoryCreateCategoryPostInput, O.CategoryUpdateCategoryPatchInput, O.CategoryListCategoriesGetResponse, O.CategoryShowCategoryGetResponse, O.CategoryListCategoriesGetQuery, O.CategoryDeleteCategoryDeleteResponse>(this.client, "/api/v1/categories", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    /** List the current non-deleted hosted catalog with literal search and server pagination. See HostedCatalogQuery; preserves full Axios response and caller authorization. */
    readonly tags = new RestResource<O.TagShowTagGetResponseData, O.TagCreateTagPostInput, O.TagUpdateTagPatchInput, O.TagListTagsGetResponse, O.TagShowTagGetResponse, O.TagListTagsGetQuery, O.TagDeleteTagDeleteResponse>(this.client, "/api/v1/tags", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly authors = new RestResource<O.AuthorShowAuthorGetResponseData, O.AuthorCreateAuthorPostInput, O.AuthorUpdateAuthorPatchInput, O.AuthorListAuthorsGetResponse, O.AuthorShowAuthorGetResponse, O.AuthorListAuthorsGetQuery, O.AuthorDeleteAuthorDeleteResponse>(this.client, "/api/v1/authors", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly contents = new RestResource<O.ContentShowContentGetResponseData, O.ContentCreateContentPostInput, O.ContentUpdateContentPatchInput, O.ContentListContentsGetResponse, O.ContentShowContentGetResponse, O.ContentListContentsGetQuery, O.ContentDeleteContentDeleteResponse>(this.client, "/api/v1/contents", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    /** List the current non-deleted hosted catalog with literal search and server pagination. See HostedCatalogQuery; preserves full Axios response and caller authorization. */
    readonly seo = new RestResource<O.SeoContentShowSeoContentGetResponseData, O.SeoContentCreateSeoContentPostInput, O.SeoContentUpdateSeoContentPatchInput, O.SeoContentListSeoContentsGetResponse, O.SeoContentShowSeoContentGetResponse, O.SeoContentListSeoContentsGetQuery, O.SeoContentDeleteSeoContentDeleteResponse>(this.client, "/api/v1/seo-contents", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly comments = new RestResource<O.CommentShowCommentGetResponseData, O.CommentCreateCommentPostInput, O.CommentUpdateCommentPatchInput, O.CommentListCommentsGetResponse, O.CommentShowCommentGetResponse, O.CommentListCommentsGetQuery, O.CommentDeleteCommentDeleteResponse>(this.client, "/api/v1/comments", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly requests = new RestResource<O.RequestShowRequestGetResponseData, O.RequestCreateRequestPostInput, O.RequestUpdateRequestPatchInput, O.RequestListRequestsGetResponse, O.RequestShowRequestGetResponse, O.RequestListRequestsGetQuery, O.RequestDeleteRequestDeleteResponse>(this.client, "/api/v1/requests", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly warehouses = new RestResource<O.InventoryShowWarehouseGetResponseData, O.InventoryCreateWarehousePostInput, O.InventoryUpdateWarehousePatchInput, O.InventoryListWarehousesGetResponse, O.InventoryShowWarehouseGetResponse, O.InventoryListWarehousesGetQuery, O.InventoryDeleteWarehouseDeleteResponse>(this.client, "/api/v1/inventory/warehouses", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly inventory = new RestResource<O.InventoryShowInventoryGetResponseData, O.InventoryCreateInventoryPostInput, O.InventoryUpdateInventoryPatchInput, O.InventoryListInventoriesGetResponse, O.InventoryShowInventoryGetResponse, O.InventoryListInventoriesGetQuery, O.InventoryDeleteInventoryDeleteResponse>(this.client, "/api/v1/inventory/inventories", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly pricing = new RestResource<O.ServicePricingShowPricingGetResponseData, O.ServicePricingCreatePricingPostInput, O.ServicePricingUpdatePricingPatchInput, O.ServicePricingListPricingGetResponse, O.ServicePricingShowPricingGetResponse, O.ServicePricingListPricingGetQuery, O.ServicePricingDeletePricingDeleteResponse>(this.client, "/api/v1/pricing", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly samples = new RestResource<O.UserSampleShowSampleGetResponseData, O.UserSampleCreateSamplePostInput, O.UserSampleUpdateSamplePatchInput, O.UserSampleListSamplesGetResponse, O.UserSampleShowSampleGetResponse, O.UserSampleListSamplesGetQuery, O.UserSampleDeleteSampleDeleteResponse>(this.client, "/api/v1/samples", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    /** Product variants. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    productVariants(productId: Identifier, params?: ProductVariantQuery, options?: RequestOptions) {
        return this.client.get<ProductVariantListResponse>(`/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, params, options);
    }
    /** Create variant. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    createVariant(productId: Identifier, data: CreateProductVariantInput, options?: RequestOptions<CreateProductVariantInput>) {
        return this.client.post<ProductVariantResponse, CreateProductVariantInput>(`/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, data, options);
    }
    /** Cart. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    cart(options?: RequestOptions) {
        return this.client.get<CartResponse>("/api/v1/shop/cart", undefined, options);
    }
    /** Replace cart. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    replaceCart(data: ReplaceCartInput, options?: RequestOptions<ReplaceCartInput>) {
        return this.client.put<CartResponse, ReplaceCartInput>("/api/v1/shop/cart", data, options);
    }
    /** Uploads an image or video asset into Modules-managed object storage. */
    /** Upload media asset. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    uploadMediaAsset(file: Blob, purpose: ModulesMediaPurpose, options?: RequestOptions<FormData>) {
        const data = new FormData();
        data.append("kind", purpose);
        data.append("file", file);
        return this.client.post<ModulesMediaUploadResponse, FormData>("/api/v1/media/assets", data, options);
    }
    /** Categories for. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    categoriesFor(host: string, id: Identifier, options?: RequestOptions) {
        return this.client.get<CategoryAttachmentListResponse>(targetPath("/api/v1/categories", host, id), undefined, options);
    }
    /** Attach category. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    attachCategory(host: string, id: Identifier, data: AttachCategoryInput, options?: RequestOptions<AttachCategoryInput>) {
        return this.client.post<CategoryAttachmentResponse, AttachCategoryInput>(targetPath("/api/v1/categories", host, id), data, options);
    }
    /** Tags for. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    tagsFor(host: string, id: Identifier, options?: RequestOptions) {
        return this.client.get<TagAttachmentListResponse>(targetPath("/api/v1/tags", host, id), undefined, options);
    }
    /** Attach tag. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    attachTag(host: string, id: Identifier, data: AttachTagInput, options?: RequestOptions<AttachTagInput>) {
        return this.client.post<TagAttachmentResponse, AttachTagInput>(targetPath("/api/v1/tags", host, id), data, options);
    }
    /** Content for. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    contentFor(host: string, id: Identifier, options?: RequestOptions) {
        return this.client.get<ContentAttachmentListResponse>(targetPath("/api/v1/contents", host, id), undefined, options);
    }
    /** Seo for. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    seoFor(host: string, id: Identifier, options?: RequestOptions) {
        return this.client.get<SeoAttachmentListResponse>(targetPath("/api/v1/seo-contents", host, id), undefined, options);
    }
    /** Audit. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    audit(host: string, id: Identifier, options?: RequestOptions) {
        return this.client.get<AuditLogListResponse>(targetPath("/api/v1/audit-logs", host, id), undefined, options);
    }
    /** Stock movements. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    stockMovements(params?: O.StockMovementListStockMovementsGetQuery, options?: RequestOptions) {
        return this.client.get<StockMovementListResponse>("/api/v1/inventory/stock-movements", params, options);
    }
    /** Auth self. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    authSelf(options?: RequestOptions) {
        return this.client.get<ModulesAuthSelf>("/api/v1/auth/self", undefined, options);
    }
    /** Route contracts. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    routeContracts(options?: RequestOptions) {
        return this.client.get<ModulesPublicRoutesResponse>("/api/v1/public/routes", undefined, options);
    }
    /** Settings. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    settings(options?: RequestOptions) {
        return this.client.get<ModulesSettings>("/api/v1/manage/settings", undefined, options);
    }
    /** Update settings. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    updateSettings(etag: string, data: UpdateModulesSettingsInput, options?: RequestOptions<UpdateModulesSettingsInput>) {
        return this.client.put<ModulesSettings, UpdateModulesSettingsInput>("/api/v1/manage/settings", data, {
            ...options,
            headers: { ...options?.headers, "If-Match": etag },
        });
    }
    /**
     * Loads one published document by its canonical slug or retained legacy slug.
     * The service returns sanitized HTML safe for public rendering and preserves
     * the complete Axios response, including ETag and request metadata.
     */
    /** Public content. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    publicContent(kind: string, locale: string, slug: string, options?: RequestOptions) {
        return this.client.get<ContentDocument>(`/api/v1/public/content/${encodeURIComponent(kind)}/${encodeURIComponent(locale)}/${encodeURIComponent(slug)}`, undefined, options);
    }
    /** Lists published content. Public-role content:read access is sufficient. */
    /** Public content list. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    publicContentList(kind: string, locale: string, params?: PublicContentQuery, options?: RequestOptions) {
        return this.client.get<PublicContentListResponse>(`/api/v1/public/content/${encodeURIComponent(kind)}/${encodeURIComponent(locale)}`, params, options);
    }
    /** Lists active public category nodes for a locale and scope. */
    /** Public content categories. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    publicContentCategories(scope: "post" | "product", locale: string, options?: RequestOptions) {
        return this.client.get<PublicContentCategory[]>(`/api/v1/public/categories/${encodeURIComponent(scope)}/${encodeURIComponent(locale)}`, undefined, options);
    }
    /**
     * Returns relevance-ranked autocomplete suggestions from published posts,
     * active products, or both. This public endpoint accepts two or more query
     * characters for nonempty results, clamps the result limit to 20, and supports cancellation.
     */
    /** Autocomplete. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    autocomplete(params: AutocompleteQuery, options?: RequestOptions) {
        return this.client.get<AutocompleteResponse>("/api/v1/public/search/autocomplete", params, options);
    }
    /** Replay-safe category import for trusted operators with content:write. */
    /** Import content category. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    importContentCategory(id: Identifier, data: ImportContentCategoryInput, options?: RequestOptions<ImportContentCategoryInput>) {
        return this.client.put<PublicContentCategory, ImportContentCategoryInput>(`/api/v1/manage/import/categories/${encodeURIComponent(id)}`, data, options);
    }
    /** Replay-safe document import; published input additionally requires content:publish. */
    /** Import content document. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    importContentDocument(id: Identifier, data: ImportContentDocumentInput, options?: RequestOptions<ImportContentDocumentInput>) {
        return this.client.put<ContentDocument, ImportContentDocumentInput>(`/api/v1/manage/import/content/${encodeURIComponent(id)}`, data, options);
    }
    /** Content documents. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    contentDocuments(params?: ContentDocumentQuery, options?: RequestOptions) {
        return this.client.get<ContentDocument[]>("/api/v1/manage/content", params, options);
    }
    /** Create content document. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    createContentDocument(data: WriteContentDocumentInput, options?: RequestOptions<WriteContentDocumentInput>) {
        return this.client.post<ContentDocument, WriteContentDocumentInput>("/api/v1/manage/content", data, options);
    }
    /** Content document. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    contentDocument(id: Identifier, options?: RequestOptions) {
        return this.client.get<ContentDocument>(`/api/v1/manage/content/${encodeURIComponent(id)}`, undefined, options);
    }
    /** Update content document. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    updateContentDocument(id: Identifier, etag: string, data: WriteContentDocumentInput, options?: RequestOptions<WriteContentDocumentInput>) {
        return this.client.put<ContentDocument, WriteContentDocumentInput>(`/api/v1/manage/content/${encodeURIComponent(id)}`, data, {
            ...options,
            headers: { ...options?.headers, "If-Match": etag },
        });
    }
    /** Content revisions. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    contentRevisions(id: Identifier, options?: RequestOptions) {
        return this.client.get<ContentRevision[]>(`/api/v1/manage/content/${encodeURIComponent(id)}/revisions`, undefined, options);
    }
    /** Restore content revision. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    restoreContentRevision(id: Identifier, revision: number, etag: string, options?: RequestOptions) {
        return this.client.post<ContentDocument, undefined>(`/api/v1/manage/content/${encodeURIComponent(id)}/revisions/${revision}/restore`, undefined, {
            ...options,
            headers: { ...options?.headers, "If-Match": etag },
        });
    }
    /** Publish content. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    publishContent(id: Identifier, etag: string, options?: RequestOptions) {
        return this.client.post<ContentDocument, undefined>(`/api/v1/manage/content/${encodeURIComponent(id)}/publish`, undefined, {
            ...options,
            headers: { ...options?.headers, "If-Match": etag },
        });
    }
    /** Agent proposals. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    agentProposals(options?: RequestOptions) {
        return this.client.get<AgentProposal[]>("/api/v1/manage/agents/proposals", undefined, options);
    }
    /** Agent proposal. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    agentProposal(id: Identifier, options?: RequestOptions) {
        return this.client.get<AgentProposal>(`/api/v1/manage/agents/proposals/${encodeURIComponent(id)}`, undefined, options);
    }
    /** Approve agent proposal. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    approveAgentProposal(id: Identifier, options?: RequestOptions) {
        return this.client.post<AgentProposal, undefined>(`/api/v1/manage/agents/proposals/${encodeURIComponent(id)}/approve`, undefined, options);
    }
    /** Reject agent proposal. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    rejectAgentProposal(id: Identifier, options?: RequestOptions) {
        return this.client.post<AgentProposal, undefined>(`/api/v1/manage/agents/proposals/${encodeURIComponent(id)}/reject`, undefined, options);
    }
    /** Run agent. Parameters follow the named wire models; preserves Axios status, headers and cancellation. Uses configured Bearer/cookie authorization; see the matching operations method for permission and validation errors. */
    runAgent(data: RunModulesAgentInput, idempotencyKey: string, options?: RequestOptions<RunModulesAgentInput>) {
        return this.client.post<string, RunModulesAgentInput>("/api/v1/manage/agents/runs", data, {
            ...options,
            headers: { ...options?.headers, "Idempotency-Key": idempotencyKey },
            responseType: "text",
        });
    }
}
export * from "@faiber/sdk-core";
export * from "./types.js";
export * from "./operations.js";
export * from "./operations.types.js";

export * from "./contracts.types.js";
