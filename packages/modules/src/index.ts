import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions, } from "@faiber/sdk-core";
import type { AttachCategoryInput, AttachTagInput, AuditLogListResponse, Author, BlogPost, CartResponse, Category, CategoryAttachmentListResponse, CategoryAttachmentResponse, Comment, Content, ContentAttachmentListResponse, CreateAuthorInput, CreateBlogPostInput, CreateCategoryInput, CreateCommentInput, CreateContentInput, CreateInventoryInput, CreateModuleRequestInput, CreateOrderInput, CreatePricingInput, CreateProductInput, CreateProductVariantInput, CreateSampleInput, CreateSeoContentInput, CreateTagInput, CreateWarehouseInput, Inventory, ModuleRequest, Order, Pricing, Product, ProductListResponse, ProductResponse, ProductVariant, ProductVariantListResponse, ProductVariantQuery, ProductVariantResponse, ReplaceCartInput, Sample, SeoAttachmentListResponse, SeoContent, StockMovementListResponse, Tag, TagAttachmentListResponse, TagAttachmentResponse, UpdateAuthorInput, UpdateBlogPostInput, UpdateCategoryInput, UpdateCommentInput, UpdateContentInput, UpdateInventoryInput, UpdateModuleRequestInput, UpdateOrderInput, UpdatePricingInput, UpdateProductInput, UpdateProductVariantInput, UpdateSampleInput, UpdateSeoContentInput, UpdateTagInput, UpdateWarehouseInput, Warehouse, } from "./types.js";
import type { AgentProposal, ContentDocument, ContentDocumentQuery, ContentRevision, ModulesAuthSelf, ModulesRouteContract, ModulesSettings, RunModulesAgentInput, UpdateModulesSettingsInput, WriteContentDocumentInput } from "./types.js";
function targetPath(base: string, host: string, id: Identifier): string {
    return `${base}/${encodeURIComponent(host)}/${encodeURIComponent(id)}`;
}
import { ModulesOperations } from "./operations.js";
export class ModulesApi extends ServiceApi {
    readonly operations = new ModulesOperations(this.client);
    readonly products = new RestResource<Product, CreateProductInput, UpdateProductInput, ProductListResponse, ProductResponse>(this.client, "/api/v1/shop/products", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly variants = new RestResource<ProductVariant, CreateProductVariantInput, UpdateProductVariantInput, ProductVariantListResponse, ProductVariantResponse>(this.client, "/api/v1/shop/variants", { supported: ["list", "show", "update", "replace", "delete"] });
    readonly orders = new RestResource<Order, CreateOrderInput, UpdateOrderInput>(this.client, "/api/v1/shop/orders", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly posts = new RestResource<BlogPost, CreateBlogPostInput, UpdateBlogPostInput>(this.client, "/api/v1/blog/posts", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly categories = new RestResource<Category, CreateCategoryInput, UpdateCategoryInput>(this.client, "/api/v1/categories", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly tags = new RestResource<Tag, CreateTagInput, UpdateTagInput>(this.client, "/api/v1/tags", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly authors = new RestResource<Author, CreateAuthorInput, UpdateAuthorInput>(this.client, "/api/v1/authors", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly contents = new RestResource<Content, CreateContentInput, UpdateContentInput>(this.client, "/api/v1/contents", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly seo = new RestResource<SeoContent, CreateSeoContentInput, UpdateSeoContentInput>(this.client, "/api/v1/seo-contents", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly comments = new RestResource<Comment, CreateCommentInput, UpdateCommentInput>(this.client, "/api/v1/comments", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly requests = new RestResource<ModuleRequest, CreateModuleRequestInput, UpdateModuleRequestInput>(this.client, "/api/v1/requests", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly warehouses = new RestResource<Warehouse, CreateWarehouseInput, UpdateWarehouseInput>(this.client, "/api/v1/inventory/warehouses", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly inventory = new RestResource<Inventory, CreateInventoryInput, UpdateInventoryInput>(this.client, "/api/v1/inventory/inventories", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly pricing = new RestResource<Pricing, CreatePricingInput, UpdatePricingInput>(this.client, "/api/v1/pricing", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly samples = new RestResource<Sample, CreateSampleInput, UpdateSampleInput>(this.client, "/api/v1/samples", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    productVariants(productId: Identifier, params?: ProductVariantQuery, options?: RequestOptions) {
        return this.client.get<ProductVariantListResponse>(`/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, params, options);
    }
    createVariant(productId: Identifier, data: CreateProductVariantInput, options?: RequestOptions<CreateProductVariantInput>) {
        return this.client.post<ProductVariantResponse, CreateProductVariantInput>(`/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, data, options);
    }
    cart(options?: RequestOptions) {
        return this.client.get<CartResponse>("/api/v1/shop/cart", undefined, options);
    }
    replaceCart(data: ReplaceCartInput, options?: RequestOptions<ReplaceCartInput>) {
        return this.client.put<CartResponse, ReplaceCartInput>("/api/v1/shop/cart", data, options);
    }
    categoriesFor(host: string, id: Identifier, options?: RequestOptions) {
        return this.client.get<CategoryAttachmentListResponse>(targetPath("/api/v1/categories", host, id), undefined, options);
    }
    attachCategory(host: string, id: Identifier, data: AttachCategoryInput, options?: RequestOptions<AttachCategoryInput>) {
        return this.client.post<CategoryAttachmentResponse, AttachCategoryInput>(targetPath("/api/v1/categories", host, id), data, options);
    }
    tagsFor(host: string, id: Identifier, options?: RequestOptions) {
        return this.client.get<TagAttachmentListResponse>(targetPath("/api/v1/tags", host, id), undefined, options);
    }
    attachTag(host: string, id: Identifier, data: AttachTagInput, options?: RequestOptions<AttachTagInput>) {
        return this.client.post<TagAttachmentResponse, AttachTagInput>(targetPath("/api/v1/tags", host, id), data, options);
    }
    contentFor(host: string, id: Identifier, options?: RequestOptions) {
        return this.client.get<ContentAttachmentListResponse>(targetPath("/api/v1/contents", host, id), undefined, options);
    }
    seoFor(host: string, id: Identifier, options?: RequestOptions) {
        return this.client.get<SeoAttachmentListResponse>(targetPath("/api/v1/seo-contents", host, id), undefined, options);
    }
    audit(host: string, id: Identifier, options?: RequestOptions) {
        return this.client.get<AuditLogListResponse>(targetPath("/api/v1/audit-logs", host, id), undefined, options);
    }
    stockMovements(params?: QueryParams, options?: RequestOptions) {
        return this.client.get<StockMovementListResponse>("/api/v1/inventory/stock-movements", params, options);
    }
    authSelf(options?: RequestOptions) {
        return this.client.get<ModulesAuthSelf>("/api/v1/auth/self", undefined, options);
    }
    routeContracts(options?: RequestOptions) {
        return this.client.get<{ service: string; tenancy: string; routes: ModulesRouteContract[] }>("/api/v1/public/routes", undefined, options);
    }
    settings(options?: RequestOptions) {
        return this.client.get<ModulesSettings>("/api/v1/manage/settings", undefined, options);
    }
    updateSettings(etag: string, data: UpdateModulesSettingsInput, options?: RequestOptions<UpdateModulesSettingsInput>) {
        return this.client.put<ModulesSettings, UpdateModulesSettingsInput>("/api/v1/manage/settings", data, {
            ...options,
            headers: { ...options?.headers, "If-Match": etag },
        });
    }
    publicContent(kind: string, locale: string, slug: string, options?: RequestOptions) {
        return this.client.get<ContentDocument>(`/api/v1/public/content/${encodeURIComponent(kind)}/${encodeURIComponent(locale)}/${encodeURIComponent(slug)}`, undefined, options);
    }
    contentDocuments(params?: ContentDocumentQuery, options?: RequestOptions) {
        return this.client.get<ContentDocument[]>("/api/v1/manage/content", params, options);
    }
    createContentDocument(data: WriteContentDocumentInput, options?: RequestOptions<WriteContentDocumentInput>) {
        return this.client.post<ContentDocument, WriteContentDocumentInput>("/api/v1/manage/content", data, options);
    }
    contentDocument(id: Identifier, options?: RequestOptions) {
        return this.client.get<ContentDocument>(`/api/v1/manage/content/${encodeURIComponent(id)}`, undefined, options);
    }
    updateContentDocument(id: Identifier, etag: string, data: WriteContentDocumentInput, options?: RequestOptions<WriteContentDocumentInput>) {
        return this.client.put<ContentDocument, WriteContentDocumentInput>(`/api/v1/manage/content/${encodeURIComponent(id)}`, data, {
            ...options,
            headers: { ...options?.headers, "If-Match": etag },
        });
    }
    contentRevisions(id: Identifier, options?: RequestOptions) {
        return this.client.get<ContentRevision[]>(`/api/v1/manage/content/${encodeURIComponent(id)}/revisions`, undefined, options);
    }
    restoreContentRevision(id: Identifier, revision: number, etag: string, options?: RequestOptions) {
        return this.client.post<ContentDocument, undefined>(`/api/v1/manage/content/${encodeURIComponent(id)}/revisions/${revision}/restore`, undefined, {
            ...options,
            headers: { ...options?.headers, "If-Match": etag },
        });
    }
    publishContent(id: Identifier, etag: string, options?: RequestOptions) {
        return this.client.post<ContentDocument, undefined>(`/api/v1/manage/content/${encodeURIComponent(id)}/publish`, undefined, {
            ...options,
            headers: { ...options?.headers, "If-Match": etag },
        });
    }
    agentProposals(options?: RequestOptions) {
        return this.client.get<AgentProposal[]>("/api/v1/manage/agents/proposals", undefined, options);
    }
    agentProposal(id: Identifier, options?: RequestOptions) {
        return this.client.get<AgentProposal>(`/api/v1/manage/agents/proposals/${encodeURIComponent(id)}`, undefined, options);
    }
    approveAgentProposal(id: Identifier, options?: RequestOptions) {
        return this.client.post<AgentProposal, undefined>(`/api/v1/manage/agents/proposals/${encodeURIComponent(id)}/approve`, undefined, options);
    }
    rejectAgentProposal(id: Identifier, options?: RequestOptions) {
        return this.client.post<AgentProposal, undefined>(`/api/v1/manage/agents/proposals/${encodeURIComponent(id)}/reject`, undefined, options);
    }
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
