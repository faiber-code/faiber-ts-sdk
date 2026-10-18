/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope } from '@faiber/sdk-core';
export interface ChannelReadiness { configured: boolean; providerVerified: boolean }
export interface MessengerProviderCheck extends ChannelReadiness { id: number; channel: string; provider: string; reason: string }
export interface MessengerSetupCheck extends ChannelReadiness { channels: Record<string, ChannelReadiness>; providers: MessengerProviderCheck[]; checkedAt: string }
export type MessengerSetupResponse = ApiEnvelope<MessengerSetupCheck>;
export interface WebsiteOtpReadiness { ready: boolean }

