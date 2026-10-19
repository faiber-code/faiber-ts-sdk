import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class VersionOperations extends ServiceApi {
  /**
   * Read the raw generated OpenAPI document, without an API envelope. The current document describes health only and is not the complete mounted API inventory.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public at the service router; deployed gateway rules may add restrictions.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Publish a stable, idempotent APK release with an HTTPS download URL. Returns a raw receipt; invalid metadata returns 400 and missing publisher configuration returns 503.
   * Calls `POST /api/v1/apk/releases` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: server-only APK_PUBLISH_TOKEN bearer credential.
   */
  routerPublishApkPost(data: T.RouterPublishApkPostInput, options?: RequestOptions<T.RouterPublishApkPostInput>) {
    return this.client.request<T.RouterPublishApkPostResponse, T.RouterPublishApkPostInput>({ ...options, method: "POST", url: `/api/v1/apk/releases`, data: data });
  }
  /**
   * List active registered services without pagination or filters. last_version is null in this list; read a service by slug to resolve its newest active release.
   * Calls `GET /api/v1/services` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no IDP permission enforced by the mounted service handler; deployed gateway policy is separate.
   */
  serviceServicesIndexGet(options?: RequestOptions) {
    return this.client.request<T.ServiceServicesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/services` });
  }
  /**
   * Find an active service by its slug, not its UUID, and its highest-code active version. Missing or inactive services return 404.
   * Calls `GET /api/v1/services/{service_slug}` through the shared IDP-aware Faiber client.
   * @param serviceSlug Backend path identifier `service_slug`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no IDP permission enforced by the mounted service handler; deployed gateway policy is separate.
   */
  serviceServiceShowGet(serviceSlug: string, options?: RequestOptions) {
    return this.client.request<T.ServiceServiceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/services/${encodeURIComponent(serviceSlug)}` });
  }
  /**
   * Read all active versions for an active service slug. The service does not define history ordering or pagination; missing or inactive services return 404.
   * Calls `GET /api/v1/services/{service_slug}/all` through the shared IDP-aware Faiber client.
   * @param serviceSlug Backend path identifier `service_slug`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no IDP permission enforced by the mounted service handler; deployed gateway policy is separate.
   */
  serviceServiceShowAllGet(serviceSlug: string, options?: RequestOptions) {
    return this.client.request<T.ServiceServiceShowAllGetResponse>({ ...options, method: "GET", url: `/api/v1/services/${encodeURIComponent(serviceSlug)}/all` });
  }
  /**
   * Read an active version by UUID. Malformed UUIDs return 400 and missing or inactive versions return 404. Scope is metadata, not an access filter in this handler.
   * Calls `GET /api/v1/versions/{version_id}` through the shared IDP-aware Faiber client.
   * @param versionId Backend path identifier `version_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no IDP permission enforced by the mounted service handler; deployed gateway policy is separate.
   */
  versionVersionShowGet(versionId: string, options?: RequestOptions) {
    return this.client.request<T.VersionVersionShowGetResponse>({ ...options, method: "GET", url: `/api/v1/versions/${encodeURIComponent(versionId)}` });
  }
  /**
   * Read the Version service process health envelope. This does not verify database, broker or gateway readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public at the service router; deployed gateway rules may add restrictions.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/health` });
  }
}
