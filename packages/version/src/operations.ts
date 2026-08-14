import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class VersionOperations extends ServiceApi {
  /**
   * Performs the status route operation for the router capability.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Performs the openapi json operation for the router capability.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Performs the services index operation for the service capability.
   * Calls `GET /api/v1/services` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceServicesIndexGet(options?: RequestOptions) {
    return this.client.request<T.ServiceServicesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/services` });
  }
  /**
   * Performs the service show operation for the service capability.
   * Calls `GET /api/v1/services/{service_id}` through the shared IDP-aware Faiber client.
   * @param serviceId Backend path identifier `service_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceServiceShowGet(serviceId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceServiceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/services/${encodeURIComponent(serviceId)}` });
  }
  /**
   * Performs the service show all operation for the service capability.
   * Calls `GET /api/v1/services/{service_id}/all` through the shared IDP-aware Faiber client.
   * @param serviceId Backend path identifier `service_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceServiceShowAllGet(serviceId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceServiceShowAllGetResponse>({ ...options, method: "GET", url: `/api/v1/services/${encodeURIComponent(serviceId)}/all` });
  }
  /**
   * Performs the version show operation for the version capability.
   * Calls `GET /api/v1/versions/{version_id}` through the shared IDP-aware Faiber client.
   * @param versionId Backend path identifier `version_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  versionVersionShowGet(versionId: Identifier, options?: RequestOptions) {
    return this.client.request<T.VersionVersionShowGetResponse>({ ...options, method: "GET", url: `/api/v1/versions/${encodeURIComponent(versionId)}` });
  }
}
