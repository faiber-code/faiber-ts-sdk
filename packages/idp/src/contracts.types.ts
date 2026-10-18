/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope } from '@faiber/sdk-core';
export interface HandoffToken { token: string }
export interface PasswordStatus { has_password: boolean }
export type HandoffTokenResponse = ApiEnvelope<HandoffToken>;
export type PasswordStatusResponse = ApiEnvelope<PasswordStatus>;

export interface HandoffAccessToken { access_token: string; refresh_token: string; expires_in: number; scope: string }
export type HandoffAccessTokenResponse = ApiEnvelope<HandoffAccessToken>;

