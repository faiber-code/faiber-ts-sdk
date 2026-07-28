import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class FlowOperations extends ServiceApi {
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
   * Performs the actions operation for the catalog capability.
   * Calls `GET /api/v1/catalog/actions` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: flow:read.
   */
  catalogActionsGet(options?: RequestOptions) {
    return this.client.request<T.CatalogActionsGetResponse>({ ...options, method: "GET", url: `/api/v1/catalog/actions` });
  }
  /**
   * Performs the sync operation for the catalog capability.
   * Calls `POST /api/v1/catalog/sync` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: catalog:sync.
   */
  catalogSyncPost(options?: RequestOptions) {
    return this.client.request<T.CatalogSyncPostResponse>({ ...options, method: "POST", url: `/api/v1/catalog/sync` });
  }
  /**
   * Performs the triggers operation for the catalog capability.
   * Calls `GET /api/v1/catalog/triggers` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: flow:read.
   */
  catalogTriggersGet(options?: RequestOptions) {
    return this.client.request<T.CatalogTriggersGetResponse>({ ...options, method: "GET", url: `/api/v1/catalog/triggers` });
  }
  /**
   * Performs the index operation for the flow capability.
   * Calls `GET /api/v1/flows` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: flow:read.
   */
  flowIndexGet(options?: RequestOptions) {
    return this.client.request<T.FlowIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/flows` });
  }
  /**
   * Performs the store operation for the flow capability.
   * Calls `POST /api/v1/flows` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: flow:create.
   */
  flowStorePost(data: T.FlowStorePostInput, options?: RequestOptions<T.FlowStorePostInput>) {
    return this.client.request<T.FlowStorePostResponse, T.FlowStorePostInput>({ ...options, method: "POST", url: `/api/v1/flows`, data: data });
  }
  /**
   * Performs the destroy operation for the flow capability.
   * Calls `DELETE /api/v1/flows/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: flow:delete.
   */
  flowDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FlowDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/flows/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the flow capability.
   * Calls `GET /api/v1/flows/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: flow:read.
   */
  flowShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FlowShowGetResponse>({ ...options, method: "GET", url: `/api/v1/flows/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the flow capability.
   * Calls `PUT /api/v1/flows/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: flow:update.
   */
  flowUpdatePut(id: Identifier, data: T.FlowUpdatePutInput, options?: RequestOptions<T.FlowUpdatePutInput>) {
    return this.client.request<T.FlowUpdatePutResponse, T.FlowUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/flows/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the validate operation for the flow capability.
   * Calls `POST /api/v1/flows/{id}/validate` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: flow:update.
   */
  flowValidatePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FlowValidatePostResponse>({ ...options, method: "POST", url: `/api/v1/flows/${encodeURIComponent(id)}/validate` });
  }
  /**
   * Performs the integration flow operation for the router capability.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerIntegrationFlowGet(options?: RequestOptions) {
    return this.client.request<T.RouterIntegrationFlowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Performs the active triggers operation for the registry capability.
   * Calls `GET /api/v1/registry/active-triggers` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  registryActiveTriggersGet(params?: T.RegistryActiveTriggersGetQuery, options?: RequestOptions) {
    return this.client.request<T.RegistryActiveTriggersGetResponse>({ ...options, method: "GET", url: `/api/v1/registry/active-triggers`, params });
  }
  /**
   * Performs the index operation for the run capability.
   * Calls `GET /api/v1/runs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: flow_run:read.
   */
  runIndexGet(params?: T.RunIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RunIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/runs`, params });
  }
  /**
   * Performs the status route operation for the router capability.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusRouteGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Performs the status route operation for the router capability.
   * Calls `GET /up` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusRouteGetUp(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetUpResponse>({ ...options, method: "GET", url: `/up` });
  }
}

