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
   * Performs the upsert performance policy operation for the routes capability.
   * Calls `PUT /api/v1/performance/policies` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUpsertPerformancePolicyPut(data: T.RoutesUpsertPerformancePolicyPutInput, options?: RequestOptions<T.RoutesUpsertPerformancePolicyPutInput>) {
    return this.client.request<T.RoutesUpsertPerformancePolicyPutResponse, T.RoutesUpsertPerformancePolicyPutInput>({ ...options, method: "PUT", url: `/api/v1/performance/policies`, data: data });
  }
  /**
   * Performs the point history operation for the routes capability.
   * Calls `GET /api/v1/points/history` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesPointHistoryGet(params?: T.RoutesPointHistoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesPointHistoryGetResponse>({ ...options, method: "GET", url: `/api/v1/points/history`, params });
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
   * Performs the workflow states operation for the routes capability.
   * Calls `GET /api/v1/projects/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesWorkflowStatesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesWorkflowStatesGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/workflow` });
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
   * Performs the team monitoring operation for the routes capability.
   * Calls `GET /api/v1/reports/team-monitoring` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesTeamMonitoringGet(params?: T.RoutesTeamMonitoringGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesTeamMonitoringGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/team-monitoring`, params });
  }
  /**
   * Performs the list sprints operation for the routes capability.
   * Calls `GET /api/v1/sprints` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListSprintsGet(params?: T.RoutesListSprintsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListSprintsGetResponse>({ ...options, method: "GET", url: `/api/v1/sprints`, params });
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
   * Performs the list teams operation for the routes capability.
   * Calls `GET /api/v1/teams` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListTeamsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListTeamsGetResponse>({ ...options, method: "GET", url: `/api/v1/teams` });
  }
  /**
   * Performs the create team operation for the routes capability.
   * Calls `POST /api/v1/teams` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateTeamPost(data: T.RoutesCreateTeamPostInput, options?: RequestOptions<T.RoutesCreateTeamPostInput>) {
    return this.client.request<T.RoutesCreateTeamPostResponse, T.RoutesCreateTeamPostInput>({ ...options, method: "POST", url: `/api/v1/teams`, data: data });
  }
  /**
   * Performs the get team operation for the routes capability.
   * Calls `GET /api/v1/teams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetTeamGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetTeamGetResponse>({ ...options, method: "GET", url: `/api/v1/teams/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update team operation for the routes capability.
   * Calls `PATCH /api/v1/teams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUpdateTeamPatch(id: Identifier, data: T.RoutesUpdateTeamPatchInput, options?: RequestOptions<T.RoutesUpdateTeamPatchInput>) {
    return this.client.request<T.RoutesUpdateTeamPatchResponse, T.RoutesUpdateTeamPatchInput>({ ...options, method: "PATCH", url: `/api/v1/teams/${encodeURIComponent(id)}`, data: data });
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
   * Performs the list comments operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListCommentsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListCommentsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/comments` });
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
   * Performs the list commits operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/commits` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListCommitsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListCommitsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/commits` });
  }
  /**
   * Performs the attach commit operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/commits` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesAttachCommitPost(id: Identifier, data: T.RoutesAttachCommitPostInput, options?: RequestOptions<T.RoutesAttachCommitPostInput>) {
    return this.client.request<T.RoutesAttachCommitPostResponse, T.RoutesAttachCommitPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/commits`, data: data });
  }
  /**
   * Performs the add points operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/points` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesAddPointsPost(id: Identifier, data: T.RoutesAddPointsPostInput, options?: RequestOptions<T.RoutesAddPointsPostInput>) {
    return this.client.request<T.RoutesAddPointsPostResponse, T.RoutesAddPointsPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/points`, data: data });
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
   * Performs the list work logs operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/work-logs` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListWorkLogsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListWorkLogsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-logs` });
  }
  /**
   * Performs the create work log operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/work-logs` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateWorkLogPost(id: Identifier, data: T.RoutesCreateWorkLogPostInput, options?: RequestOptions<T.RoutesCreateWorkLogPostInput>) {
    return this.client.request<T.RoutesCreateWorkLogPostResponse, T.RoutesCreateWorkLogPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-logs`, data: data });
  }
  /**
   * Performs the list work sessions operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/work-sessions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListWorkSessionsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListWorkSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-sessions` });
  }
  /**
   * Performs the start work session operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/work-sessions/start` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesStartWorkSessionPost(id: Identifier, data: T.RoutesStartWorkSessionPostInput, options?: RequestOptions<T.RoutesStartWorkSessionPostInput>) {
    return this.client.request<T.RoutesStartWorkSessionPostResponse, T.RoutesStartWorkSessionPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-sessions/start`, data: data });
  }
  /**
   * Performs the heartbeat work session operation for the routes capability.
   * Calls `POST /api/v1/work-sessions/{id}/heartbeat` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesHeartbeatWorkSessionPost(id: Identifier, data: T.RoutesHeartbeatWorkSessionPostInput, options?: RequestOptions<T.RoutesHeartbeatWorkSessionPostInput>) {
    return this.client.request<T.RoutesHeartbeatWorkSessionPostResponse, T.RoutesHeartbeatWorkSessionPostInput>({ ...options, method: "POST", url: `/api/v1/work-sessions/${encodeURIComponent(id)}/heartbeat`, data: data });
  }
  /**
   * Performs the stop work session operation for the routes capability.
   * Calls `POST /api/v1/work-sessions/{id}/stop` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesStopWorkSessionPost(id: Identifier, data: T.RoutesStopWorkSessionPostInput, options?: RequestOptions<T.RoutesStopWorkSessionPostInput>) {
    return this.client.request<T.RoutesStopWorkSessionPostResponse, T.RoutesStopWorkSessionPostInput>({ ...options, method: "POST", url: `/api/v1/work-sessions/${encodeURIComponent(id)}/stop`, data: data });
  }
  /**
   * Performs the active work sessions operation for the routes capability.
   * Calls `GET /api/v1/work-sessions/active` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesActiveWorkSessionsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesActiveWorkSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-sessions/active` });
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
