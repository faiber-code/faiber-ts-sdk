import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class TaskOperations extends ServiceApi {
  /**
   * Performs the openapi operation for the routes capability.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesOpenapiGet(options?: RequestOptions) {
    return this.client.request<T.RoutesOpenapiGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Performs the effective access operation for the routes capability.
   * Calls `GET /api/v1/access/effective` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesEffectiveAccessGet(params?: T.RoutesEffectiveAccessGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesEffectiveAccessGetResponse>({ ...options, method: "GET", url: `/api/v1/access/effective`, params });
  }
  /**
   * Performs the create agent proposal operation for the routes capability.
   * Calls `POST /api/v1/agent-proposals` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateAgentProposalPost(data: T.RoutesCreateAgentProposalPostInput, options?: RequestOptions<T.RoutesCreateAgentProposalPostInput>) {
    return this.client.request<T.RoutesCreateAgentProposalPostResponse, T.RoutesCreateAgentProposalPostInput>({ ...options, method: "POST", url: `/api/v1/agent-proposals`, data: data });
  }
  /**
   * Performs the approve agent proposal operation for the routes capability.
   * Calls `POST /api/v1/agent-proposals/{id}/approve` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesApproveAgentProposalPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesApproveAgentProposalPostResponse>({ ...options, method: "POST", url: `/api/v1/agent-proposals/${encodeURIComponent(id)}/approve` });
  }
  /**
   * Performs the events operation for the routes capability.
   * Calls `GET /api/v1/events` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesEventsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/events` });
  }
  /**
   * Performs the use guest link operation for the routes capability.
   * Calls `POST /api/v1/guest-links/use` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUseGuestLinkPost(data: T.RoutesUseGuestLinkPostInput, options?: RequestOptions<T.RoutesUseGuestLinkPostInput>) {
    return this.client.request<T.RoutesUseGuestLinkPostResponse, T.RoutesUseGuestLinkPostInput>({ ...options, method: "POST", url: `/api/v1/guest-links/use`, data: data });
  }
  /**
   * Performs the list projects operation for the routes capability.
   * Calls `GET /api/v1/projects` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListProjectsGet(params?: T.RoutesListProjectsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListProjectsGetResponse>({ ...options, method: "GET", url: `/api/v1/projects`, params });
  }
  /**
   * Performs the create project operation for the routes capability.
   * Calls `POST /api/v1/projects` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateProjectPost(data: T.RoutesCreateProjectPostInput, options?: RequestOptions<T.RoutesCreateProjectPostInput>) {
    return this.client.request<T.RoutesCreateProjectPostResponse, T.RoutesCreateProjectPostInput>({ ...options, method: "POST", url: `/api/v1/projects`, data: data });
  }
  /**
   * Performs the get project operation for the routes capability.
   * Calls `GET /api/v1/projects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetProjectGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetProjectGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update project operation for the routes capability.
   * Calls `PATCH /api/v1/projects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUpdateProjectPatch(id: Identifier, data: T.RoutesUpdateProjectPatchInput, options?: RequestOptions<T.RoutesUpdateProjectPatchInput>) {
    return this.client.request<T.RoutesUpdateProjectPatchResponse, T.RoutesUpdateProjectPatchInput>({ ...options, method: "PATCH", url: `/api/v1/projects/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the grant project access operation for the routes capability.
   * Calls `POST /api/v1/projects/{id}/grants` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGrantProjectAccessPost(id: Identifier, data: T.RoutesGrantProjectAccessPostInput, options?: RequestOptions<T.RoutesGrantProjectAccessPostInput>) {
    return this.client.request<T.RoutesGrantProjectAccessPostResponse, T.RoutesGrantProjectAccessPostInput>({ ...options, method: "POST", url: `/api/v1/projects/${encodeURIComponent(id)}/grants`, data: data });
  }
  /**
   * Performs the report summary operation for the routes capability.
   * Calls `GET /api/v1/reports/summary` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesReportSummaryGet(params?: T.RoutesReportSummaryGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesReportSummaryGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/summary`, params });
  }
  /**
   * Performs the create sprint operation for the routes capability.
   * Calls `POST /api/v1/sprints` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateSprintPost(data: T.RoutesCreateSprintPostInput, options?: RequestOptions<T.RoutesCreateSprintPostInput>) {
    return this.client.request<T.RoutesCreateSprintPostResponse, T.RoutesCreateSprintPostInput>({ ...options, method: "POST", url: `/api/v1/sprints`, data: data });
  }
  /**
   * Performs the complete sprint operation for the routes capability.
   * Calls `POST /api/v1/sprints/{id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCompleteSprintPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesCompleteSprintPostResponse>({ ...options, method: "POST", url: `/api/v1/sprints/${encodeURIComponent(id)}/complete` });
  }
  /**
   * Performs the start sprint operation for the routes capability.
   * Calls `POST /api/v1/sprints/{id}/start` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesStartSprintPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesStartSprintPostResponse>({ ...options, method: "POST", url: `/api/v1/sprints/${encodeURIComponent(id)}/start` });
  }
  /**
   * Performs the list work items operation for the routes capability.
   * Calls `GET /api/v1/work-items` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListWorkItemsGet(params?: T.RoutesListWorkItemsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListWorkItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items`, params });
  }
  /**
   * Performs the create work item operation for the routes capability.
   * Calls `POST /api/v1/work-items` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateWorkItemPost(data: T.RoutesCreateWorkItemPostInput, options?: RequestOptions<T.RoutesCreateWorkItemPostInput>) {
    return this.client.request<T.RoutesCreateWorkItemPostResponse, T.RoutesCreateWorkItemPostInput>({ ...options, method: "POST", url: `/api/v1/work-items`, data: data });
  }
  /**
   * Performs the get work item operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetWorkItemGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetWorkItemGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update work item operation for the routes capability.
   * Calls `PATCH /api/v1/work-items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUpdateWorkItemPatch(id: Identifier, data: T.RoutesUpdateWorkItemPatchInput, options?: RequestOptions<T.RoutesUpdateWorkItemPatchInput>) {
    return this.client.request<T.RoutesUpdateWorkItemPatchResponse, T.RoutesUpdateWorkItemPatchInput>({ ...options, method: "PATCH", url: `/api/v1/work-items/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the create comment operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateCommentPost(id: Identifier, data: T.RoutesCreateCommentPostInput, options?: RequestOptions<T.RoutesCreateCommentPostInput>) {
    return this.client.request<T.RoutesCreateCommentPostResponse, T.RoutesCreateCommentPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/comments`, data: data });
  }
  /**
   * Performs the transition work item operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/transition` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesTransitionWorkItemPost(id: Identifier, data: T.RoutesTransitionWorkItemPostInput, options?: RequestOptions<T.RoutesTransitionWorkItemPostInput>) {
    return this.client.request<T.RoutesTransitionWorkItemPostResponse, T.RoutesTransitionWorkItemPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/transition`, data: data });
  }
  /**
   * Performs the workspace operation for the routes capability.
   * Calls `GET /api/v1/workspace` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesWorkspaceGet(options?: RequestOptions) {
    return this.client.request<T.RoutesWorkspaceGetResponse>({ ...options, method: "GET", url: `/api/v1/workspace` });
  }
  /**
   * Performs the ready operation for the routes capability.
   * Calls `GET /health/dependencies` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesReadyGetHealthDependencies(options?: RequestOptions) {
    return this.client.request<T.RoutesReadyGetHealthDependenciesResponse>({ ...options, method: "GET", url: `/health/dependencies` });
  }
  /**
   * Performs the live operation for the routes capability.
   * Calls `GET /health/live` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesLiveGet(options?: RequestOptions) {
    return this.client.request<T.RoutesLiveGetResponse>({ ...options, method: "GET", url: `/health/live` });
  }
  /**
   * Performs the ready operation for the routes capability.
   * Calls `GET /health/ready` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesReadyGetHealthReady(options?: RequestOptions) {
    return this.client.request<T.RoutesReadyGetHealthReadyResponse>({ ...options, method: "GET", url: `/health/ready` });
  }
  /**
   * Performs the metrics operation for the routes capability.
   * Calls `GET /metrics` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesMetricsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesMetricsGetResponse>({ ...options, method: "GET", url: `/metrics` });
  }
}
