import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class FlowOperations extends ServiceApi {
  /** GET /; permission: public/session-derived. */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /** GET /api/v1/catalog/actions; permission: flow:read. */
  catalogActionsGet(options?: RequestOptions) {
    return this.client.request<T.CatalogActionsGetResponse>({ ...options, method: "GET", url: `/api/v1/catalog/actions` });
  }
  /** POST /api/v1/catalog/sync; permission: catalog:sync. */
  catalogSyncPost(options?: RequestOptions) {
    return this.client.request<T.CatalogSyncPostResponse>({ ...options, method: "POST", url: `/api/v1/catalog/sync` });
  }
  /** GET /api/v1/catalog/triggers; permission: flow:read. */
  catalogTriggersGet(options?: RequestOptions) {
    return this.client.request<T.CatalogTriggersGetResponse>({ ...options, method: "GET", url: `/api/v1/catalog/triggers` });
  }
  /** GET /api/v1/flows; permission: flow:read. */
  flowIndexGet(options?: RequestOptions) {
    return this.client.request<T.FlowIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/flows` });
  }
  /** POST /api/v1/flows; permission: flow:create. */
  flowStorePost(data: T.FlowStorePostInput, options?: RequestOptions<T.FlowStorePostInput>) {
    return this.client.request<T.FlowStorePostResponse, T.FlowStorePostInput>({ ...options, method: "POST", url: `/api/v1/flows`, data: data });
  }
  /** DELETE /api/v1/flows/{id}; permission: flow:delete. */
  flowDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FlowDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/flows/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/flows/{id}; permission: flow:read. */
  flowShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FlowShowGetResponse>({ ...options, method: "GET", url: `/api/v1/flows/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/flows/{id}; permission: flow:update. */
  flowUpdatePut(id: Identifier, data: T.FlowUpdatePutInput, options?: RequestOptions<T.FlowUpdatePutInput>) {
    return this.client.request<T.FlowUpdatePutResponse, T.FlowUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/flows/${encodeURIComponent(id)}`, data: data });
  }
  /** POST /api/v1/flows/{id}/validate; permission: flow:update. */
  flowValidatePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FlowValidatePostResponse>({ ...options, method: "POST", url: `/api/v1/flows/${encodeURIComponent(id)}/validate` });
  }
  /** GET /api/v1/integration/flow; permission: public/session-derived. */
  routerIntegrationFlowGet(options?: RequestOptions) {
    return this.client.request<T.RouterIntegrationFlowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /** GET /api/v1/registry/active-triggers; permission: public/session-derived. */
  registryActiveTriggersGet(params?: T.RegistryActiveTriggersGetQuery, options?: RequestOptions) {
    return this.client.request<T.RegistryActiveTriggersGetResponse>({ ...options, method: "GET", url: `/api/v1/registry/active-triggers`, params });
  }
  /** GET /api/v1/runs; permission: flow_run:read. */
  runIndexGet(params?: T.RunIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RunIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/runs`, params });
  }
  /** GET /health; permission: public/session-derived. */
  routerStatusRouteGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /** GET /up; permission: public/session-derived. */
  routerStatusRouteGetUp(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetUpResponse>({ ...options, method: "GET", url: `/up` });
  }
}

