import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: ServiceListResponse. */
export type ServiceServicesIndexGetResponseDataServicesLastVersionChannel = "Release" | "PreRelease";
export type ServiceServicesIndexGetResponseDataServicesLastVersionScope = "Public" | "Closed";
export interface ServiceServicesIndexGetResponseDataServicesLastVersion extends JsonObject {
  "id": string;
  "service_id": string;
  "name": string;
  "version_code": number;
  "version_name": string;
  "channel": ServiceServicesIndexGetResponseDataServicesLastVersionChannel;
  "scope": ServiceServicesIndexGetResponseDataServicesLastVersionScope;
  "description"?: string | null;
  "change_log"?: string | null;
  "download_url"?: string | null;
  "status": number;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface ServiceServicesIndexGetResponseDataServices extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "title"?: string | null;
  "last_version"?: ServiceServicesIndexGetResponseDataServicesLastVersion | null;
  "status": number;
}
export interface ServiceServicesIndexGetResponseData extends JsonObject {
  "services": ServiceServicesIndexGetResponseDataServices[];
}
export interface ServiceServicesIndexGetResponse extends ApiEnvelope<ServiceServicesIndexGetResponseData> {
}

/** Backend response type: ServiceSingleResponse. */
export type ServiceServiceShowGetResponseDataServiceLastVersionChannel = "Release" | "PreRelease";
export type ServiceServiceShowGetResponseDataServiceLastVersionScope = "Public" | "Closed";
export interface ServiceServiceShowGetResponseDataServiceLastVersion extends JsonObject {
  "id": string;
  "service_id": string;
  "name": string;
  "version_code": number;
  "version_name": string;
  "channel": ServiceServiceShowGetResponseDataServiceLastVersionChannel;
  "scope": ServiceServiceShowGetResponseDataServiceLastVersionScope;
  "description"?: string | null;
  "change_log"?: string | null;
  "download_url"?: string | null;
  "status": number;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface ServiceServiceShowGetResponseDataService extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "title"?: string | null;
  "last_version"?: ServiceServiceShowGetResponseDataServiceLastVersion | null;
  "status": number;
}
export interface ServiceServiceShowGetResponseData extends JsonObject {
  "service": ServiceServiceShowGetResponseDataService;
}
export interface ServiceServiceShowGetResponse extends ApiEnvelope<ServiceServiceShowGetResponseData> {
}

/** Backend response type: ServiceAllSingleResponse. */
export type ServiceServiceShowAllGetResponseDataServiceVersionsChannel = "Release" | "PreRelease";
export type ServiceServiceShowAllGetResponseDataServiceVersionsScope = "Public" | "Closed";
export interface ServiceServiceShowAllGetResponseDataServiceVersions extends JsonObject {
  "id": string;
  "service_id": string;
  "name": string;
  "version_code": number;
  "version_name": string;
  "channel": ServiceServiceShowAllGetResponseDataServiceVersionsChannel;
  "scope": ServiceServiceShowAllGetResponseDataServiceVersionsScope;
  "description"?: string | null;
  "change_log"?: string | null;
  "download_url"?: string | null;
  "status": number;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface ServiceServiceShowAllGetResponseDataService extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "title"?: string | null;
  "versions": ServiceServiceShowAllGetResponseDataServiceVersions[];
  "status": number;
}
export interface ServiceServiceShowAllGetResponseData extends JsonObject {
  "service": ServiceServiceShowAllGetResponseDataService;
}
export interface ServiceServiceShowAllGetResponse extends ApiEnvelope<ServiceServiceShowAllGetResponseData> {
}

/** Backend response type: VersionSingleResponse. */
export type VersionVersionShowGetResponseDataVersionChannel = "Release" | "PreRelease";
export type VersionVersionShowGetResponseDataVersionScope = "Public" | "Closed";
export interface VersionVersionShowGetResponseDataVersion extends JsonObject {
  "id": string;
  "service_id": string;
  "name": string;
  "version_code": number;
  "version_name": string;
  "channel": VersionVersionShowGetResponseDataVersionChannel;
  "scope": VersionVersionShowGetResponseDataVersionScope;
  "description"?: string | null;
  "change_log"?: string | null;
  "download_url"?: string | null;
  "status": number;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface VersionVersionShowGetResponseData extends JsonObject {
  "version": VersionVersionShowGetResponseDataVersion;
}
export interface VersionVersionShowGetResponse extends ApiEnvelope<VersionVersionShowGetResponseData> {
}
