import type { JsonObject } from "@faiber/sdk-core";

export interface VersionServiceIdentity {
  id: string;
  name: string;
  slug: string;
  title: string | null;
  status: number;
}

/** A list/detail service always includes last_version, including null in list responses. */
export interface ServiceVersionSummary extends VersionServiceIdentity { last_version: Version | null; }

/** Serde wire values; database enum spellings are not accepted response values. */
export type VersionChannel = "Release" | "PreRelease";
export type VersionScope = "Public" | "Closed";

export interface Version {
  id: string;
  service_id: string;
  name: string;
  version_code: number;
  version_name: string;
  channel: VersionChannel;
  scope: VersionScope;
  description: string | null;
  change_log: string | null;
  download_url: string | null;
  status: number;
  /** Naive database timestamp; no timezone offset is promised. */
  created_at: string;
  updated_at: string | null;
}

export interface ServiceWithVersions extends VersionServiceIdentity {
  versions: Version[];
}

export interface ServicesData { services: ServiceVersionSummary[]; }
export interface ServiceData { service: ServiceVersionSummary; }
export interface ServiceVersionsData { service: ServiceWithVersions; }
export interface VersionData { version: Version; }

/** Successful reads always serialize status, message and data. Errors reject the Axios request. */
export interface VersionSuccessEnvelope<T> { status: "success"; message: string; data: T; }

export interface ServicesResponse extends VersionSuccessEnvelope<ServicesData> {}
export interface ServiceResponse extends VersionSuccessEnvelope<ServiceData> {}
export interface ServiceVersionsResponse extends VersionSuccessEnvelope<ServiceVersionsData> {}
export interface VersionResponse extends VersionSuccessEnvelope<VersionData> {}
export interface VersionHealth { version: string; }
export interface HealthResponse extends VersionSuccessEnvelope<VersionHealth> {}
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
