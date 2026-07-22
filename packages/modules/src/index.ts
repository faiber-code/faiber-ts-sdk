import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions, } from "@faiber/sdk-core";
import type { AttachCategoryInput, AttachTagInput, AuditLogListResponse, Author, BlogPost, CartResponse, Category, CategoryAttachmentListResponse, CategoryAttachmentResponse, Comment, Content, ContentAttachmentListResponse, CreateAuthorInput, CreateBlogPostInput, CreateCategoryInput, CreateCommentInput, CreateContentInput, CreateInventoryInput, CreateModuleRequestInput, CreateOrderInput, CreatePricingInput, CreateProductInput, CreateProductVariantInput, CreateSampleInput, CreateSeoContentInput, CreateTagInput, CreateWarehouseInput, Inventory, ModuleRequest, Order, Pricing, Product, ProductListResponse, ProductResponse, ProductVariant, ProductVariantListResponse, ProductVariantQuery, ProductVariantResponse, ReplaceCartInput, Sample, SeoAttachmentListResponse, SeoContent, SocialPostListResponse, StockMovementListResponse, Tag, TagAttachmentListResponse, TagAttachmentResponse, UpdateAuthorInput, UpdateBlogPostInput, UpdateCategoryInput, UpdateCommentInput, UpdateContentInput, UpdateInventoryInput, UpdateModuleRequestInput, UpdateOrderInput, UpdatePricingInput, UpdateProductInput, UpdateProductVariantInput, UpdateSampleInput, UpdateSeoContentInput, UpdateTagInput, UpdateWarehouseInput, Warehouse, } from "./types.js";
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
    socialPosts(params?: QueryParams, options?: RequestOptions) {
        return this.client.get<SocialPostListResponse>("/api/v1/social/posts", params, options);
    }
    moderationQueue(params?: QueryParams, options?: RequestOptions) {
        return this.client.get<SocialPostListResponse>("/api/v1/social/moderation/posts", params, options);
    }
}
export * from "@faiber/sdk-core";
export * from "./types.js";
export * from "./operations.js";
export * from "./operations.types.js";
