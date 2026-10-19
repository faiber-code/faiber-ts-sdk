import type { ApiEnvelope, JsonObject } from "@faiber/sdk-core";

export interface ServiceVersionSummary extends JsonObject {
  id: string;
  name: string;
  slug: string;
  title?: string | null;
  last_version?: Version | null;
  status: number;
}

/** Serde wire values; database enum spellings are not accepted response values. */
export type VersionChannel = "Release" | "PreRelease";
export type VersionScope = "Public" | "Closed";

export interface Version extends JsonObject {
  id: string;
  service_id: string;
  name: string;
  version_code: number;
  version_name: string;
  channel: VersionChannel;
  scope: VersionScope;
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
export interface VersionHealth extends JsonObject { version: string; }
export interface HealthResponse extends ApiEnvelope<VersionHealth> {}
/** OpenAPI metadata emitted by Utoipa. Schema/path values are extensible OpenAPI objects. */
export interface VersionOpenApiInfo extends JsonObject {
  title: string;
  version: string;
  description?: string;
}
export interface VersionOpenApiServer extends JsonObject { url: string; description?: string; }
export interface VersionOpenApiTag extends JsonObject { name: string; description?: string; }
/** Raw OpenAPI document; the current service only annotates its health operation. */
export interface VersionOpenApiDocument extends JsonObject {
  openapi: string;
  info: VersionOpenApiInfo;
  paths: Record<string, JsonObject>;
  components?: JsonObject;
  servers?: VersionOpenApiServer[];
  tags?: VersionOpenApiTag[];
  security?: Record<string, string[]>[];
}
