/** Wire models reviewed against the pinned service handlers and repositories. */
import type { GatewayProvider, PaymentEnvelope } from './types.js';
export type PaymentGatewayCheckReason = 'missing_production_credentials' | 'manual_provider_verification_required' | 'credential_verified' | 'provider_rejected' | 'verification_unavailable';
export interface PaymentGatewayCheck { id: number; provider: GatewayProvider; configured: boolean; providerVerified: boolean; reason: PaymentGatewayCheckReason }
export interface PaymentSetupCheck { configured: boolean; providerVerified: boolean; providers: PaymentGatewayCheck[]; checkedAt: string }
export type PaymentSetupResponse = PaymentEnvelope<PaymentSetupCheck>;
export type PaymentReceiptStatus = 'pending' | 'accepted' | 'rejected' | 'cancelled';
export interface ProductPaymentReceipt { uuid: string; amount: number; status: PaymentReceiptStatus | null; service_name: string; service_model_type: string | null; service_model_id: string | null }
export type ProductPaymentReceiptResponse = PaymentEnvelope<ProductPaymentReceipt>;
export interface ProductPaymentAvailability { available: boolean; sandbox: boolean }
export type ProductPaymentAvailabilityResponse = PaymentEnvelope<ProductPaymentAvailability>;
export interface VerifiedAssetPurchaseReceipt { purchaseId: string; transaction: string; amount: number; currency: 'IRR'; kind: 'topup' | 'subscription' | 'plan' | 'points_pack'; providerVerified: boolean; status: 'pending'|'accepted'|'rejected' }
export type VerifiedAssetPurchaseResponse = VerifiedAssetPurchaseReceipt;
export interface ShopPaymentReceipt { transaction: string; order_id: string | null; site: string; amount: number; status: PaymentReceiptStatus | null; providerVerified: true }
export type ShopPaymentReceiptResponse = PaymentEnvelope<ShopPaymentReceipt>;
export interface ShopPaymentReadiness { configured: boolean }

