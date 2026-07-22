import type { ApiEnvelope, JsonObject, JsonValue } from "@faiber/sdk-core";

export interface ServiceVersionSummary extends JsonObject {
  id: string;
  name: string;
  slug: string;
  title?: string | null;
  last_version?: Version | null;
  status: number;
}

export interface Version extends JsonObject {
  id: string;
  service_id: string;
  name: string;
  version_code: number;
  version_name: string;
  channel: string;
  scope: string;
  description?: string | null;
  change_log?: string | null;
  download_url?: string | null;
  status: number;
  created_at: string;
  updated_at?: string | null;
}

export interface ServiceWithVersions extends ServiceVersionSummary {
  versions: Version[];
}

export interface ServicesData extends JsonObject { services: ServiceVersionSummary[]; }
export interface ServiceData extends JsonObject { service: ServiceVersionSummary; }
export interface ServiceVersionsData extends JsonObject { service: ServiceWithVersions; }
export interface VersionData extends JsonObject { version: Version; }

export interface ServicesResponse extends ApiEnvelope<ServicesData> {}
export interface ServiceResponse extends ApiEnvelope<ServiceData> {}
export interface ServiceVersionsResponse extends ApiEnvelope<ServiceVersionsData> {}
export interface VersionResponse extends ApiEnvelope<VersionData> {}
export type HealthResponse = JsonValue;
