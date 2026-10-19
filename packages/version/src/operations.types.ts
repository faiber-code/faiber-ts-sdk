import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: HealthResponse. */
export type RouterStatusRouteGetResponse = import("./types.js").HealthResponse;

/** Backend response type: VersionOpenApiDocument. */
export type RouterOpenapiJsonGetResponse = import("./types.js").VersionOpenApiDocument;

/** Backend request type: ApkRelease. */
export type RouterPublishApkPostInput = import("./contracts.types.js").ApkPublishInput;
/** Backend response type: serde_json::Value. */
export type RouterPublishApkPostResponse = import("./contracts.types.js").ApkPublishReceipt;

/** Backend response type: ServiceListResponse. */
export type ServiceServicesIndexGetResponse = import("./types.js").ServicesResponse;

/** Backend response type: ServiceSingleResponse. */
export type ServiceServiceShowGetResponse = import("./types.js").ServiceResponse;

/** Backend response type: ServiceAllSingleResponse. */
export type ServiceServiceShowAllGetResponse = import("./types.js").ServiceVersionsResponse;

/** Backend response type: VersionSingleResponse. */
export type VersionVersionShowGetResponse = import("./types.js").VersionResponse;
