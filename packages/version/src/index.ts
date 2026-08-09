import { ServiceApi, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";

/** Typed service registry and release-history client. Authentication follows the shared Faiber client configuration. */
export class VersionApi extends ServiceApi {
  /**
   * Checks Version service readiness through `GET /health`.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response containing the service health payload.
   * @throws AxiosError for unavailable or failed transport responses.
   */
  health(options?: RequestOptions) { return this.client.get<T.HealthResponse>("/health", undefined, options); }
  /**
   * Gets the machine-readable OpenAPI document through `GET /api/openapi.json`.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response containing the Utoipa OpenAPI document.
   * @throws AxiosError for unavailable or failed transport responses.
   */
  openapi(options?: RequestOptions) { return this.client.get<T.VersionOpenApiDocument>("/api/openapi.json", undefined, options); }
  /**
   * Lists registered services and latest releases through `GET /api/v1/services`.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response with typed service summaries.
   * @throws AxiosError for authentication, authorization, or transport failures.
   */
  services(options?: RequestOptions) { return this.client.get<T.ServicesResponse>("/api/v1/services", undefined, options); }
  /**
   * Gets one registered service and its latest release through `GET /api/v1/services/{slug}`.
   * @param slug Stable service slug.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response with the typed service summary.
   * @throws AxiosError for not-found, authorization, or transport failures.
   */
  service(slug: string, options?: RequestOptions) { return this.client.get<T.ServiceResponse>(`/api/v1/services/${encodeURIComponent(slug)}`, undefined, options); }
  /**
   * Gets full release history through `GET /api/v1/services/{slug}/all`.
   * @param slug Stable service slug.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response with typed ordered versions.
   * @throws AxiosError for not-found, authorization, or transport failures.
   */
  allVersions(slug: string, options?: RequestOptions) { return this.client.get<T.ServiceVersionsResponse>(`/api/v1/services/${encodeURIComponent(slug)}/all`, undefined, options); }
  /**
   * Gets one version by UUID through `GET /api/v1/versions/{id}`.
   * @param id Version UUID.
   * @param options Axios headers, timeout, cancellation signal, and transport options.
   * @returns Complete Axios response with the typed version record.
   * @throws AxiosError for not-found, authorization, or transport failures.
   */
  version(id: string, options?: RequestOptions) { return this.client.get<T.VersionResponse>(`/api/v1/versions/${encodeURIComponent(id)}`, undefined, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
