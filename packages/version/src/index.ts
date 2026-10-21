import { ServiceApi, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";

import { VersionOperations } from "./operations.js";

/** Typed public release catalog client. Gateway authorization follows the shared Faiber client configuration. */
export class VersionApi extends ServiceApi {
  readonly operations = new VersionOperations(this.client);
  /**
   * Reads the public Version process status, without checking dependency readiness, through `GET /health`.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response containing the service health payload.
   * @throws AxiosError for unavailable or failed transport responses.
   */
  health(options?: RequestOptions) { return this.client.get<T.HealthResponse>("/health", undefined, options); }
  /**
   * Gets the public raw OpenAPI document (currently health annotations only) through `GET /api/openapi.json`.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response containing the Utoipa OpenAPI document.
   * @throws AxiosError for unavailable or failed transport responses.
   */
  openapi(options?: RequestOptions) { return this.client.get<T.VersionOpenApiDocument>("/api/openapi.json", undefined, options); }
  /**
   * Lists active registered services publicly, without filters or pagination and with last_version:null, through `GET /api/v1/services`.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response with typed service summaries.
   * @throws AxiosError for transport or gateway-policy failures; no IDP permission is enforced by the service handler.
   */
  services(options?: RequestOptions) { return this.client.get<T.ServicesResponse>("/api/v1/services", undefined, options); }
  /**
   * Gets an active service and its highest-code active release publicly through `GET /api/v1/services/{slug}`.
   * @param slug Stable service slug.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response with the typed service summary.
   * @throws AxiosError for missing/inactive records (404), transport or gateway-policy failures; no IDP permission is enforced by the service handler.
   */
  service(slug: string, options?: RequestOptions) { return this.client.get<T.ServiceResponse>(`/api/v1/services/${encodeURIComponent(slug)}`, undefined, options); }
  /**
   * Gets all active releases for an active service publicly through `GET /api/v1/services/{slug}/all`.
   * @param slug Stable service slug.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response with typed active versions; ordering is unspecified.
   * @throws AxiosError for missing/inactive records (404), transport or gateway-policy failures; no IDP permission is enforced by the service handler.
   */
  allVersions(slug: string, options?: RequestOptions) { return this.client.get<T.ServiceVersionsResponse>(`/api/v1/services/${encodeURIComponent(slug)}/all`, undefined, options); }
  /**
   * Gets an active version publicly by UUID, regardless of parent activity or scope metadata, through `GET /api/v1/versions/{id}`.
   * @param id Version UUID; malformed UUIDs return 400.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response with the typed version record.
   * @throws AxiosError for missing/inactive records (404), transport or gateway-policy failures; no IDP permission is enforced by the service handler.
   */
  version(id: string, options?: RequestOptions) { return this.client.get<T.VersionResponse>(`/api/v1/versions/${encodeURIComponent(id)}`, undefined, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";

export * from "./contracts.types.js";
