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

