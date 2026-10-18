/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope, JsonObject } from '@faiber/sdk-core';
/** Product-specific gift limits are forwarded to the owning entitlement service. */
export interface ProductGiftLimits extends JsonObject { responses?: number; plans?: number }
export interface ProductTrialGift { id: string; label: string; status: string; expires_at: string; limits: ProductGiftLimits; max_uses: number; used_count: number; remaining_uses: number; created_by: string; created_at: string; updated_at?: string; duration_days?: number; can_copy?: boolean; token?: string }
export interface ProductTrialGiftPage { items: ProductTrialGift[]; total: number; page: number; per_page: number }
export interface ProductGiftAdapter { id: string; available: true; can_manage: boolean }
export type ProductTrialGiftResponse = ApiEnvelope<ProductTrialGift>;
export type ProductTrialGiftPageResponse = ApiEnvelope<ProductTrialGiftPage>;
export type ProductGiftAdaptersResponse = ApiEnvelope<ProductGiftAdapter[]>;
export interface ProductGiftToken { token: string }
export type ProductGiftTokenResponse = ApiEnvelope<ProductGiftToken>;
export interface WalletPurchaseReceipt { id: string; kind: string; status: string; amount: string; currency: string }
export interface WalletSubscriptionReceipt { id: string; amount: string; currency: string; status: 'fulfilled' }
export type WalletPurchaseReceiptResponse = ApiEnvelope<WalletPurchaseReceipt>;
export type WalletSubscriptionReceiptResponse = ApiEnvelope<WalletSubscriptionReceipt>;
export interface ResourceQuote { cpu: string; ram: string; disk: string; total: string; currency: string; period: 'hourly'; monthly_estimate: string; allocation: import('./operations.types.js').SandboxBillingQuoteResourcesPostInput }
export type ResourceQuoteResponse = ApiEnvelope<ResourceQuote>;

export interface ProductTrialGiftWriteInput { max_uses?:number;request_id?:string|null;label:string;status:'active'|'inactive';expires_at:string;limits:ProductGiftLimits;rotate_token?:boolean }
export interface FitnessAssetProductInput { tier:string;name:string;description?:string|null;price:string|number;currency:'IRR';duration_days:number;points:string|number;storage_gb:number;product_id?:string|null;metadata:FitnessAssetProductMetadata;status:number }
/** Required gym identity plus product-specific, JSON-safe entitlement metadata. */
export interface FitnessAssetProductMetadata extends JsonObject { fitness_gym_id:string;fitness_product?:string;fitness_coach_id?:string;fitness_tariff_id?:string;includes_meals?:boolean;chat_limit?:number }
export interface FitnessAssetProduct { tier:string;name:string;description:string|null;price:string;currency:'IRR';duration_days:number;points:string;storage_gb:number;product_id:string|null;metadata:FitnessAssetProductMetadata;status:number }
export type FitnessAssetProductResponse = ApiEnvelope<FitnessAssetProduct>;

