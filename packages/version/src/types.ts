import type { ApiEnvelope, JsonObject } from "@faiber/sdk-core";
export interface ServiceVersionSummary extends JsonObject {
    slug: string;
    name: string;
    current_version?: string;
}
export interface ServiceVersion extends JsonObject {
    id: string;
    service_slug: string;
    version: string;
    released_at?: string;
    changelog?: string;
}
export interface ServicesResponse extends ApiEnvelope<ServiceVersionSummary[]> {
}
export interface ServiceResponse extends ApiEnvelope<ServiceVersionSummary> {
}
export interface ServiceVersionsResponse extends ApiEnvelope<ServiceVersion[]> {
}
export interface VersionResponse extends ApiEnvelope<ServiceVersion> {
}
