# modules capability discovery

CMS and commerce content, products and variants, shop/order workflows, forms and public publication.

محتوا، محصول و گونه، فرایند فروشگاه و سفارش، فرم و انتشار عمومی.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `58900d8e5c95fcc3fa4d0d4906d95c7ea9027bb9`
- SDK source revision: `58900d8e5c95fcc3fa4d0d4906d95c7ea9027bb9`
- Evidence inventory revision: `58900d8e5c95fcc3fa4d0d4906d95c7ea9027bb9` (sdk)
- Working HEAD: `58900d8e5c95fcc3fa4d0d4906d95c7ea9027bb9`
- Source relationship: same

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /` | `infera-modules/src/router.rs:463` | inspect middleware/local scope | pending |
| `GET /health` | `infera-modules/src/router.rs:463` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/self` | `infera-modules/src/session/routes.rs:33` | inspect middleware/local scope | pending |
| `GET /api/v1/blog/posts` | `infera-modules/src/blog/routes.rs:43` | inspect middleware/local scope | pending |
| `POST /api/v1/blog/posts` | `infera-modules/src/blog/routes.rs:74` | inspect middleware/local scope | pending |
| `GET /api/v1/blog/posts/{id}` | `infera-modules/src/blog/routes.rs:105` | inspect middleware/local scope | pending |
| `PUT /api/v1/blog/posts/{id}` | `infera-modules/src/blog/routes.rs:138` | inspect middleware/local scope | pending |
| `PATCH /api/v1/blog/posts/{id}` | `infera-modules/src/blog/routes.rs:138` | inspect middleware/local scope | pending |
| `DELETE /api/v1/blog/posts/{id}` | `infera-modules/src/blog/routes.rs:171` | inspect middleware/local scope | pending |
| `GET /api/v1/podcasts` | `infera-modules/src/podcast/routes.rs:34` | inspect middleware/local scope | pending |
| `POST /api/v1/podcasts` | `infera-modules/src/podcast/routes.rs:45` | inspect middleware/local scope | pending |
| `GET /api/v1/podcasts/{id}` | `infera-modules/src/podcast/routes.rs:39` | inspect middleware/local scope | pending |
| `PATCH /api/v1/podcasts/{id}` | `infera-modules/src/podcast/routes.rs:55` | inspect middleware/local scope | pending |
| `DELETE /api/v1/podcasts/{id}` | `infera-modules/src/podcast/routes.rs:65` | inspect middleware/local scope | pending |
| `POST /api/v1/podcasts/{id}/episodes` | `infera-modules/src/podcast/routes.rs:75` | inspect middleware/local scope | pending |
| `PATCH /api/v1/podcasts/{podcast_id}/episodes/{id}` | `infera-modules/src/podcast/routes.rs:85` | inspect middleware/local scope | pending |
| `DELETE /api/v1/podcasts/{podcast_id}/episodes/{id}` | `infera-modules/src/podcast/routes.rs:95` | inspect middleware/local scope | pending |
| `GET /api/v1/shop/products` | `infera-modules/src/product/routes.rs:60` | inspect middleware/local scope | pending |
| `POST /api/v1/shop/products` | `infera-modules/src/product/routes.rs:96` | inspect middleware/local scope | pending |
| `GET /api/v1/shop/products/{id}` | `infera-modules/src/product/routes.rs:127` | inspect middleware/local scope | pending |
| `PUT /api/v1/shop/products/{id}` | `infera-modules/src/product/routes.rs:160` | inspect middleware/local scope | pending |
| `PATCH /api/v1/shop/products/{id}` | `infera-modules/src/product/routes.rs:160` | inspect middleware/local scope | pending |
| `DELETE /api/v1/shop/products/{id}` | `infera-modules/src/product/routes.rs:193` | inspect middleware/local scope | pending |
| `GET /api/v1/shop/products/{product_id}/variants` | `infera-modules/src/product/routes.rs:227` | product:read | pending |
| `POST /api/v1/shop/products/{product_id}/variants` | `infera-modules/src/product/routes.rs:307` | inspect middleware/local scope | pending |
| `GET /api/v1/shop/variants` | `infera-modules/src/product/routes.rs:262` | inspect middleware/local scope | pending |
| `GET /api/v1/shop/variants/{id}` | `infera-modules/src/product/routes.rs:339` | inspect middleware/local scope | pending |
| `PUT /api/v1/shop/variants/{id}` | `infera-modules/src/product/routes.rs:372` | inspect middleware/local scope | pending |
| `PATCH /api/v1/shop/variants/{id}` | `infera-modules/src/product/routes.rs:372` | inspect middleware/local scope | pending |
| `DELETE /api/v1/shop/variants/{id}` | `infera-modules/src/product/routes.rs:404` | inspect middleware/local scope | pending |
| `POST /api/v1/shop/checkout/quote` | `infera-modules/src/order/checkout.rs:164` | inspect middleware/local scope | pending |
| `GET /api/v1/shop/checkout/{id}` | `infera-modules/src/order/checkout.rs:323` | inspect middleware/local scope | pending |
| `POST /api/v1/shop/checkout/{id}/pay` | `infera-modules/src/order/checkout.rs:340` | inspect middleware/local scope | pending |
| `POST /api/v1/shop/checkout/{id}/cancel` | `infera-modules/src/order/checkout.rs:470` | inspect middleware/local scope | pending |
| `GET /api/v1/shop/orders` | `infera-modules/src/order/routes.rs:48` | inspect middleware/local scope | pending |
| `POST /api/v1/shop/orders` | `infera-modules/src/order/routes.rs:80` | inspect middleware/local scope | pending |
| `GET /api/v1/shop/orders/{id}` | `infera-modules/src/order/routes.rs:111` | inspect middleware/local scope | pending |
| `PUT /api/v1/shop/orders/{id}` | `infera-modules/src/order/routes.rs:145` | inspect middleware/local scope | pending |
| `PATCH /api/v1/shop/orders/{id}` | `infera-modules/src/order/routes.rs:145` | inspect middleware/local scope | pending |
| `DELETE /api/v1/shop/orders/{id}` | `infera-modules/src/order/routes.rs:178` | inspect middleware/local scope | pending |
| `GET /api/v1/shop/orders/{order_id}/items` | `infera-modules/src/order/routes.rs:208` | inspect middleware/local scope | pending |
| `POST /api/v1/shop/orders/{order_id}/items` | `infera-modules/src/order/routes.rs:241` | inspect middleware/local scope | pending |
| `GET /api/v1/shop/cart` | `infera-modules/src/cart/routes.rs:18` | inspect middleware/local scope | pending |
| `PUT /api/v1/shop/cart` | `infera-modules/src/cart/routes.rs:30` | inspect middleware/local scope | pending |
| `GET /api/v1/inventory/warehouses` | `infera-modules/src/inventory/routes.rs:56` | inspect middleware/local scope | pending |
| `POST /api/v1/inventory/warehouses` | `infera-modules/src/inventory/routes.rs:92` | inspect middleware/local scope | pending |
| `GET /api/v1/inventory/warehouses/{id}` | `infera-modules/src/inventory/routes.rs:123` | inspect middleware/local scope | pending |
| `PUT /api/v1/inventory/warehouses/{id}` | `infera-modules/src/inventory/routes.rs:156` | inspect middleware/local scope | pending |
| `PATCH /api/v1/inventory/warehouses/{id}` | `infera-modules/src/inventory/routes.rs:156` | inspect middleware/local scope | pending |
| `DELETE /api/v1/inventory/warehouses/{id}` | `infera-modules/src/inventory/routes.rs:189` | inspect middleware/local scope | pending |
| `GET /api/v1/inventory/inventories` | `infera-modules/src/inventory/routes.rs:224` | inspect middleware/local scope | pending |
| `POST /api/v1/inventory/inventories` | `infera-modules/src/inventory/routes.rs:269` | inspect middleware/local scope | pending |
| `GET /api/v1/inventory/inventories/{id}` | `infera-modules/src/inventory/routes.rs:300` | inspect middleware/local scope | pending |
| `PUT /api/v1/inventory/inventories/{id}` | `infera-modules/src/inventory/routes.rs:333` | inspect middleware/local scope | pending |
| `PATCH /api/v1/inventory/inventories/{id}` | `infera-modules/src/inventory/routes.rs:333` | inspect middleware/local scope | pending |
| `DELETE /api/v1/inventory/inventories/{id}` | `infera-modules/src/inventory/routes.rs:366` | inspect middleware/local scope | pending |
| `GET /api/v1/inventory/stock-movements` | `infera-modules/src/stock_movement/routes.rs:42` | inspect middleware/local scope | pending |
| `POST /api/v1/inventory/stock-movements` | `infera-modules/src/stock_movement/routes.rs:86` | inspect middleware/local scope | pending |
| `POST /api/v1/media/images` | `infera-modules/src/media/mod.rs:387` | inspect middleware/local scope | pending |
| `POST /api/v1/media/assets` | `infera-modules/src/media/mod.rs:394` | inspect middleware/local scope | pending |
| `GET /api/v1/media/files/{*key}` | `infera-modules/src/media/mod.rs:401` | inspect middleware/local scope | pending |
| `GET /api/v1/authors` | `infera-modules/src/author/routes.rs:43` | inspect middleware/local scope | pending |
| `POST /api/v1/authors` | `infera-modules/src/author/routes.rs:74` | inspect middleware/local scope | pending |
| `GET /api/v1/authors/{id}` | `infera-modules/src/author/routes.rs:100` | inspect middleware/local scope | pending |
| `PUT /api/v1/authors/{id}` | `infera-modules/src/author/routes.rs:132` | inspect middleware/local scope | pending |
| `PATCH /api/v1/authors/{id}` | `infera-modules/src/author/routes.rs:132` | inspect middleware/local scope | pending |
| `DELETE /api/v1/authors/{id}` | `infera-modules/src/author/routes.rs:163` | inspect middleware/local scope | pending |
| `GET /api/v1/categories/{host}/{target_id}` | `infera-modules/src/category/routes.rs:210` | inspect middleware/local scope | pending |
| `POST /api/v1/categories/{host}/{target_id}` | `infera-modules/src/category/routes.rs:244` | inspect middleware/local scope | pending |
| `DELETE /api/v1/categories/{host}/{target_id}` | `infera-modules/src/category/routes.rs:279` | inspect middleware/local scope | pending |
| `GET /api/v1/categories` | `infera-modules/src/category/routes.rs:49` | inspect middleware/local scope | pending |
| `POST /api/v1/categories` | `infera-modules/src/category/routes.rs:80` | inspect middleware/local scope | pending |
| `GET /api/v1/categories/{id}` | `infera-modules/src/category/routes.rs:111` | inspect middleware/local scope | pending |
| `PUT /api/v1/categories/{id}` | `infera-modules/src/category/routes.rs:144` | inspect middleware/local scope | pending |
| `PATCH /api/v1/categories/{id}` | `infera-modules/src/category/routes.rs:144` | inspect middleware/local scope | pending |
| `DELETE /api/v1/categories/{id}` | `infera-modules/src/category/routes.rs:177` | inspect middleware/local scope | pending |
| `GET /api/v1/tags/{host}/{target_id}` | `infera-modules/src/tag/routes.rs:196` | inspect middleware/local scope | pending |
| `POST /api/v1/tags/{host}/{target_id}` | `infera-modules/src/tag/routes.rs:230` | inspect middleware/local scope | pending |
| `DELETE /api/v1/tags/{host}/{target_id}` | `infera-modules/src/tag/routes.rs:265` | inspect middleware/local scope | pending |
| `GET /api/v1/tags` | `infera-modules/src/tag/routes.rs:49` | inspect middleware/local scope | pending |
| `POST /api/v1/tags` | `infera-modules/src/tag/routes.rs:80` | inspect middleware/local scope | pending |
| `GET /api/v1/tags/{id}` | `infera-modules/src/tag/routes.rs:106` | inspect middleware/local scope | pending |
| `PUT /api/v1/tags/{id}` | `infera-modules/src/tag/routes.rs:138` | inspect middleware/local scope | pending |
| `PATCH /api/v1/tags/{id}` | `infera-modules/src/tag/routes.rs:138` | inspect middleware/local scope | pending |
| `DELETE /api/v1/tags/{id}` | `infera-modules/src/tag/routes.rs:164` | inspect middleware/local scope | pending |
| `GET /api/v1/comments/{host}/{target_id}` | `infera-modules/src/comment/routes.rs:199` | inspect middleware/local scope | pending |
| `POST /api/v1/comments/{host}/{target_id}` | `infera-modules/src/comment/routes.rs:234` | inspect middleware/local scope | pending |
| `GET /api/v1/comments` | `infera-modules/src/comment/routes.rs:47` | inspect middleware/local scope | pending |
| `POST /api/v1/comments` | `infera-modules/src/comment/routes.rs:78` | inspect middleware/local scope | pending |
| `GET /api/v1/comments/{id}` | `infera-modules/src/comment/routes.rs:104` | inspect middleware/local scope | pending |
| `PUT /api/v1/comments/{id}` | `infera-modules/src/comment/routes.rs:136` | inspect middleware/local scope | pending |
| `PATCH /api/v1/comments/{id}` | `infera-modules/src/comment/routes.rs:136` | inspect middleware/local scope | pending |
| `DELETE /api/v1/comments/{id}` | `infera-modules/src/comment/routes.rs:167` | inspect middleware/local scope | pending |
| `GET /api/v1/contents/{host}/{target_id}` | `infera-modules/src/content/routes.rs:218` | inspect middleware/local scope | pending |
| `POST /api/v1/contents/{host}/{target_id}` | `infera-modules/src/content/routes.rs:252` | inspect middleware/local scope | pending |
| `DELETE /api/v1/contents/{host}/{target_id}` | `infera-modules/src/content/routes.rs:287` | inspect middleware/local scope | pending |
| `GET /api/v1/contents` | `infera-modules/src/content/routes.rs:49` | inspect middleware/local scope | pending |
| `POST /api/v1/contents` | `infera-modules/src/content/routes.rs:80` | inspect middleware/local scope | pending |
| `GET /api/v1/contents/{id}` | `infera-modules/src/content/routes.rs:106` | inspect middleware/local scope | pending |
| `PUT /api/v1/contents/{id}` | `infera-modules/src/content/routes.rs:144` | inspect middleware/local scope | pending |
| `PATCH /api/v1/contents/{id}` | `infera-modules/src/content/routes.rs:144` | inspect middleware/local scope | pending |
| `DELETE /api/v1/contents/{id}` | `infera-modules/src/content/routes.rs:186` | inspect middleware/local scope | pending |
| `GET /api/v1/seo-contents/{host}/{target_id}` | `infera-modules/src/seo_content/routes.rs:206` | inspect middleware/local scope | pending |
| `POST /api/v1/seo-contents/{host}/{target_id}` | `infera-modules/src/seo_content/routes.rs:240` | inspect middleware/local scope | pending |
| `DELETE /api/v1/seo-contents/{host}/{target_id}` | `infera-modules/src/seo_content/routes.rs:275` | inspect middleware/local scope | pending |
| `GET /api/v1/seo-contents` | `infera-modules/src/seo_content/routes.rs:49` | inspect middleware/local scope | pending |
| `POST /api/v1/seo-contents` | `infera-modules/src/seo_content/routes.rs:80` | inspect middleware/local scope | pending |
| `GET /api/v1/seo-contents/{id}` | `infera-modules/src/seo_content/routes.rs:111` | inspect middleware/local scope | pending |
| `PUT /api/v1/seo-contents/{id}` | `infera-modules/src/seo_content/routes.rs:143` | inspect middleware/local scope | pending |
| `PATCH /api/v1/seo-contents/{id}` | `infera-modules/src/seo_content/routes.rs:143` | inspect middleware/local scope | pending |
| `DELETE /api/v1/seo-contents/{id}` | `infera-modules/src/seo_content/routes.rs:174` | inspect middleware/local scope | pending |
| `GET /api/v1/audit-logs/{host}/{target_id}` | `infera-modules/src/audit_log/routes.rs:37` | inspect middleware/local scope | pending |
| `GET /api/v1/reactions/{host}/{target_id}` | `infera-modules/src/reaction/routes.rs:43` | inspect middleware/local scope | pending |
| `POST /api/v1/reactions/{host}/{target_id}` | `infera-modules/src/reaction/routes.rs:78` | inspect middleware/local scope | pending |
| `DELETE /api/v1/reactions/{host}/{target_id}` | `infera-modules/src/reaction/routes.rs:115` | inspect middleware/local scope | pending |
| `GET /api/v1/access/{host}/{target_id}` | `infera-modules/src/access/routes.rs:46` | inspect middleware/local scope | pending |
| `POST /api/v1/access/{host}/{target_id}` | `infera-modules/src/access/routes.rs:81` | inspect middleware/local scope | pending |
| `PUT /api/v1/access/{host}/{target_id}/{access_id}` | `infera-modules/src/access/routes.rs:118` | inspect middleware/local scope | pending |
| `DELETE /api/v1/access/{host}/{target_id}/{access_id}` | `infera-modules/src/access/routes.rs:153` | inspect middleware/local scope | pending |
| `GET /api/v1/requests/category/{category_id}/logs` | `infera-modules/src/request/routes.rs:308` | inspect middleware/local scope | pending |
| `GET /api/v1/requests/{request_id}/logs` | `infera-modules/src/request/routes.rs:340` | inspect middleware/local scope | pending |
| `POST /api/v1/requests/{request_id}/logs` | `infera-modules/src/request/routes.rs:371` | modules:request:submit | pending |
| `GET /api/v1/requests/{host}/{target_id}` | `infera-modules/src/request/routes.rs:206` | inspect middleware/local scope | pending |
| `POST /api/v1/requests/{host}/{target_id}` | `infera-modules/src/request/routes.rs:240` | inspect middleware/local scope | pending |
| `DELETE /api/v1/requests/{host}/{target_id}` | `infera-modules/src/request/routes.rs:275` | inspect middleware/local scope | pending |
| `GET /api/v1/requests` | `infera-modules/src/request/routes.rs:54` | inspect middleware/local scope | pending |
| `POST /api/v1/requests` | `infera-modules/src/request/routes.rs:85` | inspect middleware/local scope | pending |
| `GET /api/v1/requests/{id}` | `infera-modules/src/request/routes.rs:111` | inspect middleware/local scope | pending |
| `PUT /api/v1/requests/{id}` | `infera-modules/src/request/routes.rs:143` | inspect middleware/local scope | pending |
| `PATCH /api/v1/requests/{id}` | `infera-modules/src/request/routes.rs:143` | inspect middleware/local scope | pending |
| `DELETE /api/v1/requests/{id}` | `infera-modules/src/request/routes.rs:174` | inspect middleware/local scope | pending |
| `POST /api/v1/public/requests/{key}` | `infera-modules/src/request/public.rs:73` | inspect middleware/local scope | pending |
| `GET /api/v1/public/shop/products` | `infera-modules/src/product/public.rs:27` | inspect middleware/local scope | pending |
| `POST /api/v1/requests/website-defaults` | `infera-modules/src/request/public.rs:205` | modules:request:create | pending |
| `GET /api/v1/pricing` | `infera-modules/src/service_pricing/routes.rs:40` | inspect middleware/local scope | pending |
| `POST /api/v1/pricing` | `infera-modules/src/service_pricing/routes.rs:70` | inspect middleware/local scope | pending |
| `GET /api/v1/pricing/{id}` | `infera-modules/src/service_pricing/routes.rs:95` | inspect middleware/local scope | pending |
| `PUT /api/v1/pricing/{id}` | `infera-modules/src/service_pricing/routes.rs:127` | inspect middleware/local scope | pending |
| `PATCH /api/v1/pricing/{id}` | `infera-modules/src/service_pricing/routes.rs:127` | inspect middleware/local scope | pending |
| `DELETE /api/v1/pricing/{id}` | `infera-modules/src/service_pricing/routes.rs:158` | inspect middleware/local scope | pending |
| `GET /api/v1/samples/variables` | `infera-modules/src/user_sample/routes.rs:326` | inspect middleware/local scope | pending |
| `GET /api/v1/samples/variables/{id}` | `infera-modules/src/user_sample/routes.rs:361` | inspect middleware/local scope | pending |
| `PUT /api/v1/samples/variables/{id}` | `infera-modules/src/user_sample/routes.rs:394` | inspect middleware/local scope | pending |
| `PATCH /api/v1/samples/variables/{id}` | `infera-modules/src/user_sample/routes.rs:394` | inspect middleware/local scope | pending |
| `DELETE /api/v1/samples/variables/{id}` | `infera-modules/src/user_sample/routes.rs:426` | inspect middleware/local scope | pending |
| `GET /api/v1/samples/by-slug/{slug}/variables-map` | `infera-modules/src/user_sample/routes.rs:219` | inspect middleware/local scope | pending |
| `GET /api/v1/samples/{sample_id}/variables` | `infera-modules/src/user_sample/routes.rs:254` | inspect middleware/local scope | pending |
| `POST /api/v1/samples/{sample_id}/variables` | `infera-modules/src/user_sample/routes.rs:292` | inspect middleware/local scope | pending |
| `GET /api/v1/samples` | `infera-modules/src/user_sample/routes.rs:73` | inspect middleware/local scope | pending |
| `POST /api/v1/samples` | `infera-modules/src/user_sample/routes.rs:103` | inspect middleware/local scope | pending |
| `GET /api/v1/samples/{id}` | `infera-modules/src/user_sample/routes.rs:128` | inspect middleware/local scope | pending |
| `PUT /api/v1/samples/{id}` | `infera-modules/src/user_sample/routes.rs:160` | inspect middleware/local scope | pending |
| `PATCH /api/v1/samples/{id}` | `infera-modules/src/user_sample/routes.rs:160` | inspect middleware/local scope | pending |
| `DELETE /api/v1/samples/{id}` | `infera-modules/src/user_sample/routes.rs:191` | inspect middleware/local scope | pending |
| `GET /api/v1/public/search/autocomplete` | `infera-modules/src/search/routes.rs:37` | inspect middleware/local scope | pending |
| `GET /integration/flow` | `infera-modules/src/integration/routes.rs:9` | inspect middleware/local scope | pending |
| `GET /api/v1/public/routes` | `infera-modules/src/management_api/mod.rs:263` | inspect middleware/local scope | pending |
| `GET /api/v1/public/content/{kind}/{locale}/{slug}` | `infera-modules/src/management_api/mod.rs:379` | inspect middleware/local scope | pending |
| `GET /api/v1/manage/content` | `infera-modules/src/management_api/mod.rs:394` | inspect middleware/local scope | pending |
| `POST /api/v1/manage/content` | `infera-modules/src/management_api/mod.rs:414` | inspect middleware/local scope | pending |
| `GET /api/v1/manage/content/{id}` | `infera-modules/src/management_api/mod.rs:475` | inspect middleware/local scope | pending |
| `PUT /api/v1/manage/content/{id}` | `infera-modules/src/management_api/mod.rs:485` | inspect middleware/local scope | pending |
| `GET /api/v1/manage/content/{id}/revisions` | `infera-modules/src/management_api/mod.rs:550` | inspect middleware/local scope | pending |
| `POST /api/v1/manage/content/{id}/revisions/{revision}/restore` | `infera-modules/src/management_api/mod.rs:566` | inspect middleware/local scope | pending |
| `POST /api/v1/manage/content/{id}/publish` | `infera-modules/src/management_api/mod.rs:606` | inspect middleware/local scope | pending |
| `GET /api/v1/manage/settings` | `infera-modules/src/management_api/mod.rs:691` | inspect middleware/local scope | pending |
| `PUT /api/v1/manage/settings` | `infera-modules/src/management_api/mod.rs:700` | inspect middleware/local scope | pending |
| `GET /api/v1/manage/agents/models` | `infera-modules/src/management_api/mod.rs:792` | inspect middleware/local scope | pending |
| `POST /api/v1/manage/agents/runs` | `infera-modules/src/management_api/mod.rs:852` | inspect middleware/local scope | pending |
| `GET /api/v1/manage/agents/proposals` | `infera-modules/src/management_api/mod.rs:979` | inspect middleware/local scope | pending |
| `GET /api/v1/manage/agents/proposals/{id}` | `infera-modules/src/management_api/mod.rs:993` | inspect middleware/local scope | pending |
| `POST /api/v1/manage/agents/proposals/{id}/approve` | `infera-modules/src/management_api/mod.rs:1013` | inspect middleware/local scope | pending |
| `POST /api/v1/manage/agents/proposals/{id}/reject` | `infera-modules/src/management_api/mod.rs:1040` | inspect middleware/local scope | pending |
| `GET /api/v1/public/content/{kind}/{locale}` | `infera-modules/src/content_transfer/mod.rs:276` | inspect middleware/local scope | pending |
| `GET /api/v1/public/categories/{scope}/{locale}` | `infera-modules/src/content_transfer/mod.rs:154` | inspect middleware/local scope | pending |
| `PUT /api/v1/manage/import/categories/{id}` | `infera-modules/src/content_transfer/mod.rs:170` | inspect middleware/local scope | pending |
| `PUT /api/v1/manage/import/content/{id}` | `infera-modules/src/content_transfer/mod.rs:382` | inspect middleware/local scope | pending |
| `GET /api-doc/openapi.json` | `infera-modules/src/router.rs:441` | inspect middleware/local scope | pending |
| `GET /api/openapi.json` | `infera-modules/src/router.rs:436` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/modules.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
