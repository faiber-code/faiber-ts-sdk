import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: ServiceListResponse. */
export interface ServiceServicesIndexGetResponseData extends JsonObject {
  "services": BackendJson<"ServiceResponse">[];
}
export interface ServiceServicesIndexGetResponse extends ApiEnvelope<ServiceServicesIndexGetResponseData> {
}

/** Backend response type: ServiceSingleResponse. */
export interface ServiceServiceShowGetResponseData extends JsonObject {
  "service": BackendJson<"ServiceResponse">;
}
export interface ServiceServiceShowGetResponse extends ApiEnvelope<ServiceServiceShowGetResponseData> {
}

/** Backend response type: ServiceAllSingleResponse. */
export interface ServiceServiceShowAllGetResponseData extends JsonObject {
  "service": BackendJson<"ServiceAllResponse">;
}
export interface ServiceServiceShowAllGetResponse extends ApiEnvelope<ServiceServiceShowAllGetResponseData> {
}

/** Backend response type: VersionSingleResponse. */
export interface VersionVersionShowGetResponseData extends JsonObject {
  "version": BackendJson<"VersionResponse">;
}
export interface VersionVersionShowGetResponse extends ApiEnvelope<VersionVersionShowGetResponseData> {
}
