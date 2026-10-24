import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class FlowOperations extends ServiceApi {
  /**
   * Read package version liveness; no dependency checks. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No declared handler permission. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Read all cached action catalog entries including verbatim external payload_fields JSON; no pagination or tenant filter. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /api/v1/catalog/actions` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  catalogActionsGet(options?: RequestOptions) {
    return this.client.request<T.CatalogActionsGetResponse>({ ...options, method: "GET", url: `/api/v1/catalog/actions` });
  }
  /**
   * Fetch configured services OpenAPI and Flow integration metadata; replace matching triggers/actions; return200 report with per-service openapi/actions failures, not {synced:true}. Does not remove stale absent metadata. Partial persistence and insert errors may occur; retry fetches and replaces again. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `POST /api/v1/catalog/sync` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: catalog:sync. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  catalogSyncPost(options?: RequestOptions) {
    return this.client.request<T.CatalogSyncPostResponse>({ ...options, method: "POST", url: `/api/v1/catalog/sync` });
  }
  /**
   * Read all cached trigger catalog entries with service/method/path/trigger_key; no pagination or tenant filter. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /api/v1/catalog/triggers` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  catalogTriggersGet(options?: RequestOptions) {
    return this.client.request<T.CatalogTriggersGetResponse>({ ...options, method: "GET", url: `/api/v1/catalog/triggers` });
  }
  /**
   * Emit arbitrary JSON including null; require nonempty1..200 ASCII alphanumeric/dot/underscore/hyphen key without leading/trailing/double dots400. Explicit flow:execute or * local check403. New event UUID per call; awaits matching enabled flows; individual execution failures logged/swallowed. HTTP200 accepted does not guarantee completed runs; repeated calls can emit duplicates. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `POST /api/v1/events/{event_key}` through the shared IDP-aware Faiber client.
   * @param eventKey Backend path identifier `event_key`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow:execute. Handler explicitly checks AuthContext flow:execute or *; roles alone are insufficient. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  eventEmitPost(eventKey: Identifier, data: T.EventEmitPostInput, options?: RequestOptions<T.EventEmitPostInput>) {
    return this.client.request<T.EventEmitPostResponse, T.EventEmitPostInput>({ ...options, method: "POST", url: `/api/v1/events/${encodeURIComponent(eventKey)}`, data: data, headers: { "Content-Type": "application/json", ...options?.headers } });
  }
  /**
   * List all flows descending updated_at without pagination or tenant filter. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /api/v1/flows` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  flowIndexGet(options?: RequestOptions) {
    return this.client.request<T.FlowIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/flows` });
  }
  /**
   * Create flow: name1..200, nonempty trigger_key; normalized nonempty unique slug (409), enabled defaults false, graph defaults trigger node. Validate graph400. Insert before enabled-registry notification; notification500 may follow persisted mutation. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `POST /api/v1/flows` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow:create. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  flowStorePost(data: T.FlowStorePostInput, options?: RequestOptions<T.FlowStorePostInput>) {
    return this.client.request<T.FlowStorePostResponse, T.FlowStorePostInput>({ ...options, method: "POST", url: `/api/v1/flows`, data: data });
  }
  /**
   * Delete UUID flow (missing404), then notify registry; returns200 {deleted:true}. Notification500 can follow committed deletion; repeated deletion404. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `DELETE /api/v1/flows/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow:delete. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  flowDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FlowDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/flows/${encodeURIComponent(id)}` });
  }
  /**
   * Read UUID flow; missing404. No tenant/owner predicate. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /api/v1/flows/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  flowShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FlowShowGetResponse>({ ...options, method: "GET", url: `/api/v1/flows/${encodeURIComponent(id)}` });
  }
  /**
   * Partially update UUID flow; null/omitted fields preserve existing values. Graph or trigger_key increments version and updates trigger node data. Slug normalization/conflict409; existing graph revalidated400 even on metadata update. Update before registry notification; notification500 may follow persisted mutation. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `PUT /api/v1/flows/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow:update. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  flowUpdatePut(id: Identifier, data: T.FlowUpdatePutInput, options?: RequestOptions<T.FlowUpdatePutInput>) {
    return this.client.request<T.FlowUpdatePutResponse, T.FlowUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/flows/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Validate persisted UUID graph; missing404. Invalid graph returns200 {valid:false,errors:[...]}; no mutation. Checks one trigger, edges endpoints, unique nonempty node IDs, emit service/event/object payload and supported condition structure; does not reject cycles or unknown node types. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `POST /api/v1/flows/{id}/validate` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow:update. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  flowValidatePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FlowValidatePostResponse>({ ...options, method: "POST", url: `/api/v1/flows/${encodeURIComponent(id)}/validate` });
  }
  /**
   * Expand bridges/groups then validate nonempty manifest, normalized unique slugs and graph400. Arrays default empty, bridge enabled defaults true; version/source ignored. Transactional upsert by slug; dry_run rolls back and reports proposed counts. Normal import commits before registry notify, so500 can follow durable effects; identical retry reports unchanged. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `POST /api/v1/flows/import` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow:create, flow:update. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  flowImportPost(data: T.FlowImportPostInput, options?: RequestOptions<T.FlowImportPostInput>) {
    return this.client.request<T.FlowImportPostResponse, T.FlowImportPostInput>({ ...options, method: "POST", url: `/api/v1/flows/import`, data: data });
  }
  /**
   * Read integration metadata; queue flow_queue and empty events. Concrete shared metadata inspected in pinned dependency source; dependency is pinned to faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No declared handler permission. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  routerIntegrationFlowGet(options?: RequestOptions) {
    return this.client.request<T.RouterIntegrationFlowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Read {version,triggers}; enabled flows grouped by trigger key and unioned capture_fields, unordered. Optional service matches endpoint.{service}. prefix; generic event triggers excluded with service filter. No handler-local permission or tenant check. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /api/v1/registry/active-triggers` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No declared handler permission. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  registryActiveTriggersGet(params?: T.RegistryActiveTriggersGetQuery, options?: RequestOptions) {
    return this.client.request<T.RegistryActiveTriggersGetResponse>({ ...options, method: "GET", url: `/api/v1/registry/active-triggers`, params });
  }
  /**
   * List global runs descending started_at; limit optional nonnegative u64, default50, no clamp. No pagination envelope or flow/owner filter. Integer values must fit JavaScript safe range for precise requests. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /api/v1/runs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow_run:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  runIndexGet(params?: T.RunIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.RunIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/runs`, params });
  }
  /**
   * Read UUID run404; flatten run fields alongside nullable JSON context and steps ordered created_at ascending. Payload/context may be null; no tenant/owner filter. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /api/v1/runs/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Declared IDP metadata: flow_run:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  runShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RunShowGetResponse>({ ...options, method: "GET", url: `/api/v1/runs/${encodeURIComponent(id)}` });
  }
  /**
   * Read package version liveness; no dependency checks. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No declared handler permission. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  routerStatusRouteGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Read package version liveness; no dependency checks. Success envelope is {status:"success",message:"ok",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.
   * Calls `GET /up` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No declared handler permission. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials..
   */
  routerStatusRouteGetUp(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetUpResponse>({ ...options, method: "GET", url: `/up` });
  }
}
