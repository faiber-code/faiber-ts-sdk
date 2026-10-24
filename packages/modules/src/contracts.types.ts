/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope } from '@faiber/sdk-core';
export interface ShopShippingAddress { fullName:string;phone:string;city:string;address:string;postalCode:string }
export interface ShopQuoteItem { variant_id:string;quantity:number;unit_price?:string|number }
export type ShopCheckoutItem = [variantId:string, quantity:number, unitPrice:string];
export interface ShopCheckoutQuoteInput { id:string;items:ShopQuoteItem[];shipping:ShopShippingAddress }
export interface ShopCheckout { id:string;user_id:string;shipping:ShopShippingAddress;items:ShopCheckoutItem[];subtotal:number;shipping_fee:number;total:number;state:string;transaction_id:string|null;redirect_url:string|null;expires_at:string }
export interface ShopCatalogProduct { id:string;productId:string;name:string;description:string|null;imageUrl:string|null;price:string;currency:'IRR';inStock:boolean }
export interface ShopCatalog { products:ShopCatalogProduct[];page:number;hasMore:boolean;currency:'IRR' }
export type ShopCatalogResponse = ApiEnvelope<ShopCatalog>;
export interface WebsiteFormsReady { ready:true }


/** JSON settings sections intentionally accept arbitrary backend JSON; locales is also stored and accepted as serde_json::Value. */
export interface ModulesSettingsWire { id:number; title:string; locales:import('@faiber/sdk-core').JsonValue; timezone:string; currency:string; contact:import('@faiber/sdk-core').JsonValue; seo_defaults:import('@faiber/sdk-core').JsonValue; checkout_rules:import('@faiber/sdk-core').JsonValue; delivery:import('@faiber/sdk-core').JsonValue; etag:string; updated_at:string }
export interface ModulesPublicRoutesResponse { service:string; tenancy:string; routes:import('./types.js').ModulesRouteContract[] }
/** Forwarded model pricing is owned by Agentic and intentionally dynamic JSON. */
export interface ModulesAgentModel { model_ref:string;model:string;provider_id:string;provider_label:string;source:string;available:boolean;pricing:import('@faiber/sdk-core').JsonValue|null }
export interface ModulesAgentModelCatalog { models:ModulesAgentModel[];billing_authority:string;billing_policy:string|null }
export interface ModulesFlowField { name:string;field_type:string;required:boolean;description:string }
export interface ModulesFlowEvent { event_name:string;payload_fields:ModulesFlowField[] }
export interface ModulesFlowIntegration { queue:string;events:ModulesFlowEvent[] }
export type ModulesFlowIntegrationResponse = ApiEnvelope<ModulesFlowIntegration>;
/** Full SSE text with event/data records and keep-alive comments; caller may supply a streaming Axios adapter through options. */
export type ModulesAgentRunResponse = string;
/** Exact owner checkout summary projected by order::checkout::summary; omitted when no storefront checkout exists. */
export interface ModulesOrderCheckoutSummary { shipping:ShopShippingAddress;shipping_fee:number;total:number;state:string }
export interface ModulesOrderItem { id:string;order_id:string;variant_id:string;quantity:number;unit_price:string;total_price:string;created_at:string }
export interface ModulesOrderRecord { checkout?:ModulesOrderCheckoutSummary;id:string;user_id:string;status:number;total:string;items:ModulesOrderItem[];created_at:string;updated_at:string }
export interface ModulesOrderPage { orders:ModulesOrderRecord[];page_number:number;page_size:number;total_items:number }
export type ModulesOrderResponse = ApiEnvelope<ModulesOrderRecord>;
export type ModulesOrderListResponse = ApiEnvelope<ModulesOrderPage>;
export interface ModulesOrderItemInput { variant_id:string;quantity:number;unit_price?:string|number }
export interface ModulesOrderCreateInput { id?:string|null;status?:number|null;items:ModulesOrderItemInput[] }
/** Audio source validation accepts only external with URL, or drm with media UUID. */
export interface ModulesEpisodeInput { title:string;description?:string|null;sort_order?:number|null;audio_source:'external'|'drm';external_audio_url?:string|null;drm_media_id?:string|null;duration_seconds?:number|null;status?:number|null;published_at?:string|null }
export interface ModulesEpisodeUpdateInput { title?:string|null;description?:string|null;sort_order?:number|null;audio_source?:'external'|'drm'|null;external_audio_url?:string|null;drm_media_id?:string|null;duration_seconds?:number|null;status?:number|null;published_at?:string|null }
