/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope } from '@faiber/sdk-core';
export interface PaymentGatewayCheck { id: number; provider: string; configured: boolean; providerVerified: boolean; reason: string }
export interface PaymentSetupCheck { configured: boolean; providerVerified: boolean; providers: PaymentGatewayCheck[]; checkedAt: string }
export type PaymentSetupResponse = ApiEnvelope<PaymentSetupCheck>;
export type PaymentReceiptStatus = 'pending' | 'accepted' | 'rejected' | 'cancelled';
export interface ProductPaymentReceipt { uuid: string; amount: number; status: PaymentReceiptStatus | null; service_name: string; service_model_type: string | null; service_model_id: string | null }
export type ProductPaymentReceiptResponse = ApiEnvelope<ProductPaymentReceipt>;
export interface ProductPaymentAvailability { available: boolean; sandbox: boolean }
export type ProductPaymentAvailabilityResponse = ApiEnvelope<ProductPaymentAvailability>;
export interface VerifiedAssetPurchaseReceipt { purchaseId: string; transaction: string; amount: number; currency: 'IRR'; kind: string | null; providerVerified: boolean; status: 'pending'|'accepted'|'rejected' }
export type VerifiedAssetPurchaseResponse = VerifiedAssetPurchaseReceipt;
export interface ShopPaymentReceipt { transaction: string; order_id: string | null; site: string; amount: number; status: PaymentReceiptStatus | null; providerVerified: true }
export type ShopPaymentReceiptResponse = ApiEnvelope<ShopPaymentReceipt>;
export interface ShopPaymentReadiness { configured: boolean }

