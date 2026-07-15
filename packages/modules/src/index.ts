import { RestResource, ServiceApi, type BlogPost, type Identifier, type JsonObject, type Product, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
const target = (base: string, host: string, id: Identifier) => `${base}/${encodeURIComponent(host)}/${encodeURIComponent(id)}`;
export class ModulesApi extends ServiceApi {
  readonly products = new RestResource<Product>(this.client, "/api/v1/shop/products"); readonly variants = new RestResource(this.client, "/api/v1/shop/variants"); readonly orders = new RestResource(this.client, "/api/v1/shop/orders");
  readonly posts = new RestResource<BlogPost>(this.client, "/api/v1/blog/posts"); readonly categories = new RestResource(this.client, "/api/v1/categories"); readonly tags = new RestResource(this.client, "/api/v1/tags"); readonly authors = new RestResource(this.client, "/api/v1/authors");
  readonly contents = new RestResource(this.client, "/api/v1/contents"); readonly seo = new RestResource(this.client, "/api/v1/seo-contents"); readonly comments = new RestResource(this.client, "/api/v1/comments"); readonly requests = new RestResource(this.client, "/api/v1/requests");
  readonly warehouses = new RestResource(this.client, "/api/v1/inventory/warehouses"); readonly inventory = new RestResource(this.client, "/api/v1/inventory/inventories"); readonly pricing = new RestResource(this.client, "/api/v1/pricing"); readonly samples = new RestResource(this.client, "/api/v1/samples");
  productVariants(productId: Identifier, params?: QueryParams, options?: RequestOptions) { return this.client.get(`/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, params, options); }
  createVariant(productId: Identifier, data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.post(`/api/v1/shop/products/${encodeURIComponent(productId)}/variants`, data, options); }
  cart(options?: RequestOptions) { return this.client.get("/api/v1/shop/cart", undefined, options); } replaceCart(data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.put("/api/v1/shop/cart", data, options); }
  categoriesFor(host: string, id: Identifier, options?: RequestOptions) { return this.client.get(target("/api/v1/categories", host, id), undefined, options); }
  attachCategory(host: string, id: Identifier, data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.post(target("/api/v1/categories", host, id), data, options); }
  tagsFor(host: string, id: Identifier, options?: RequestOptions) { return this.client.get(target("/api/v1/tags", host, id), undefined, options); }
  attachTag(host: string, id: Identifier, data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.post(target("/api/v1/tags", host, id), data, options); }
  contentFor(host: string, id: Identifier, options?: RequestOptions) { return this.client.get(target("/api/v1/contents", host, id), undefined, options); }
  seoFor(host: string, id: Identifier, options?: RequestOptions) { return this.client.get(target("/api/v1/seo-contents", host, id), undefined, options); }
  audit(host: string, id: Identifier, options?: RequestOptions) { return this.client.get(target("/api/v1/audit-logs", host, id), undefined, options); }
  stockMovements(params?: QueryParams, options?: RequestOptions) { return this.client.get("/api/v1/inventory/stock-movements", params, options); }
  socialPosts(params?: QueryParams, options?: RequestOptions) { return this.client.get("/api/v1/social/posts", params, options); }
  moderationQueue(params?: QueryParams, options?: RequestOptions) { return this.client.get("/api/v1/social/moderation/posts", params, options); }
}
export * from "@faiber/sdk-core";
