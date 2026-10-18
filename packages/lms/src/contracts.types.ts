/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope } from '@faiber/sdk-core';
export interface LearningCertificate { public_id: string; title: string; status: string; course_id: string; issued_at: string }
export interface LearningCertificateClaim { public_id: string }
export type LearningCertificatesResponse = ApiEnvelope<LearningCertificate[]>;
export type LearningCertificateClaimResponse = ApiEnvelope<LearningCertificateClaim>;

