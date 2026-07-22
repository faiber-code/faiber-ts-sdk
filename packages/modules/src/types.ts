import type { ApiEnvelope, Identifier, JsonValue, PaginatedResult, QueryParams, ResourceListResponse, ResourceResponse, } from "@faiber/sdk-core";
export interface Product {
    id: string;
    name: string;
    description?: string | null;
    sku?: JsonValue;
    status?: number;
    sort_order?: number;
    created_at?: string;
    updated_at?: string;
}
export interface CreateProductInput {
    name: string;
    description?: string;
    sku?: JsonValue;
    status?: number;
    sort_order?: number;
}
export interface UpdateProductInput extends Partial<CreateProductInput> {
}
export interface ProductVariant {
    id: string;
    product_id: string;
    name: string;
    sku?: JsonValue;
    price: string | number;
    cost?: string | number;
    weight?: string | number;
    stock_priority?: number;
    status?: number;
    sort_order?: number;
}
export interface CreateProductVariantInput {
    name: string;
    sku?: JsonValue;
    price: string | number;
    cost?: string | number;
    weight?: string | number;
    stock_priority?: number;
    status?: number;
    sort_order?: number;
}
export interface UpdateProductVariantInput extends Partial<CreateProductVariantInput> {
}
export interface Order {
    id: string;
    user_id?: string;
    status?: string | number;
    total?: string | number;
    items?: OrderItem[];
    created_at?: string;
    updated_at?: string;
}
export interface OrderItem {
    id: string;
    order_id: string;
    variant_id: string;
    quantity: number;
    unit_price?: string | number;
}
export interface CreateOrderInput {
    user_id?: string;
    status?: string | number;
    items?: Array<Pick<OrderItem, "variant_id" | "quantity">>;
}
export interface UpdateOrderInput {
    status?: string | number;
}
export interface BlogPost {
    id: string;
    title: string;
    description?: string | null;
    status?: number;
    created_at?: string;
    updated_at?: string;
}
export interface CreateBlogPostInput {
    title: string;
    description?: string;
    status?: number;
}
export interface UpdateBlogPostInput extends Partial<CreateBlogPostInput> {
}
export interface Category {
    id: string;
    parent_id?: string | null;
    name?: string | null;
    description?: string | null;
    status: number;
    requires_confirmation?: boolean;
}
export interface CreateCategoryInput {
    parent_id?: string;
    name?: string;
    description?: string;
    status?: number;
    requires_confirmation?: boolean;
}
export interface UpdateCategoryInput extends Partial<CreateCategoryInput> {
}
export interface Tag {
    id: string;
    name: string;
    status: number;
}
export interface CreateTagInput {
    name: string;
    status?: number;
}
export interface UpdateTagInput extends Partial<CreateTagInput> {
}
export interface Author {
    id: string;
    user_id: string;
    name: string;
    bio?: string | null;
    avatar_url?: string | null;
    social_links?: JsonValue;
    website?: string | null;
}
export interface CreateAuthorInput {
    user_id: string;
    name: string;
    bio?: string;
    avatar_url?: string;
    social_links?: JsonValue;
    website?: string;
}
export interface UpdateAuthorInput extends Partial<Omit<CreateAuthorInput, "user_id">> {
}
export interface Content {
    id: string;
    content?: string | null;
    auto_saved_content?: string | null;
    created_by_user_id?: string;
    created_by_author_id?: string | null;
}
export interface CreateContentInput {
    content?: string;
    created_by_author_id?: string;
}
export interface UpdateContentInput {
    content?: string;
    auto_saved_content?: string;
}
export interface SeoContent {
    id: string;
    meta_url?: string | null;
    meta_title?: string | null;
    meta_description?: string | null;
    meta_keyword?: string | null;
    meta_ld?: JsonValue;
}
export interface CreateSeoContentInput {
    meta_url?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keyword?: string;
    meta_ld?: JsonValue;
}
export interface UpdateSeoContentInput extends Partial<CreateSeoContentInput> {
}
export interface Comment {
    id: string;
    content?: string;
    author_id?: string | null;
    status?: number;
    created_at?: string;
}
export interface CreateCommentInput {
    content: string;
    author_id?: string;
    status?: number;
}
export interface UpdateCommentInput extends Partial<CreateCommentInput> {
}
export interface ModuleRequest {
    id: string;
    category_id?: string;
    status?: string | number;
    payload?: JsonValue;
}
export interface CreateModuleRequestInput {
    category_id?: string;
    status?: string | number;
    payload?: JsonValue;
}
export interface UpdateModuleRequestInput extends Partial<CreateModuleRequestInput> {
}
export interface Warehouse {
    id: string;
    name: string;
    location: string;
    capacity: number;
}
export interface CreateWarehouseInput {
    name: string;
    location: string;
    capacity: number;
}
export interface UpdateWarehouseInput extends Partial<CreateWarehouseInput> {
}
export interface Inventory {
    id: string;
    variant_id: string;
    warehouse_id: string;
    priority: number;
    quantity: number;
    reserved: number;
    available: number;
}
export interface CreateInventoryInput {
    variant_id: string;
    warehouse_id: string;
    priority?: number;
    quantity: number;
}
export interface UpdateInventoryInput {
    priority?: number;
    quantity?: number;
    reserved?: number;
}
export interface Pricing {
    id: string;
    service_name: string;
    display_name?: string;
    hourly_price?: number;
    monthly_price?: number;
    annual_price?: number;
    currency?: string;
}
export interface CreatePricingInput extends Omit<Pricing, "id"> {
}
export interface UpdatePricingInput extends Partial<CreatePricingInput> {
}
export interface Sample {
    id: string;
    name?: string;
    slug?: string;
    content?: string;
    variables?: JsonValue;
}
export interface CreateSampleInput {
    name?: string;
    slug?: string;
    content?: string;
    variables?: JsonValue;
}
export interface UpdateSampleInput extends Partial<CreateSampleInput> {
}
export interface CartItem {
    variant_id: string;
    quantity: number;
}
export interface Cart {
    items: CartItem[];
    subtotal?: string | number;
    total?: string | number;
}
export interface ReplaceCartInput {
    items: CartItem[];
}
export interface AttachCategoryInput {
    category_id: string;
    sort_order?: number;
}
export interface CategoryAttachment {
    id: string;
    category_id: string;
    target_id: string;
    sort_order: number;
}
export interface AttachTagInput {
    tag_id: string;
    sort_order?: number;
}
export interface TagAttachment {
    id: string;
    tag_id: string;
    target_id: string;
    sort_order: number;
}
export interface AuditLog {
    id: string;
    host?: string;
    target_id?: string;
    action?: string;
    user_id?: string;
    data?: JsonValue;
    created_at?: string;
}
export interface StockMovement {
    id: string;
    inventory_id?: string;
    quantity?: number;
    movement_type?: string;
    created_at?: string;
}
export interface ProductVariantQuery extends QueryParams {
    product_id?: string;
    page_number?: number;
    page_size?: number;
}
export interface InventoryQuery extends QueryParams {
    variant_id?: string;
    warehouse_id?: string;
    page_number?: number;
    page_size?: number;
}
export interface ProductResponse extends ResourceResponse<Product> {
}
export interface ProductListResponse extends ResourceListResponse<Product> {
}
export interface ProductVariantResponse extends ResourceResponse<ProductVariant> {
}
export interface ProductVariantListResponse extends ResourceListResponse<ProductVariant> {
}
export interface CartResponse extends ApiEnvelope<Cart> {
}
export interface CategoryAttachmentResponse extends ApiEnvelope<CategoryAttachment> {
}
export interface CategoryAttachmentListResponse extends ApiEnvelope<CategoryAttachment[]> {
}
export interface TagAttachmentResponse extends ApiEnvelope<TagAttachment> {
}
export interface TagAttachmentListResponse extends ApiEnvelope<TagAttachment[]> {
}
export interface ContentAttachmentListResponse extends ApiEnvelope<Content[]> {
}
export interface SeoAttachmentListResponse extends ApiEnvelope<SeoContent[]> {
}
export interface AuditLogListResponse extends ApiEnvelope<AuditLog[]> {
}
export interface StockMovementListResponse extends ApiEnvelope<PaginatedResult<StockMovement>> {
}
export type TargetIdentifier = Identifier;
