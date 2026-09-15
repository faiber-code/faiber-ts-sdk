import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class CrmOperations extends ServiceApi {
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
   * Performs the activities operation for the api capability.
   * Calls `GET /api/v1/activities` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:activity:read.
   */
  apiActivitiesGet(params?: T.ApiActivitiesGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiActivitiesGetResponse>({ ...options, method: "GET", url: `/api/v1/activities`, params });
  }
  /**
   * Performs the create activity operation for the api capability.
   * Calls `POST /api/v1/activities` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:activity:create.
   */
  apiCreateActivityPost(data: T.ApiCreateActivityPostInput, options?: RequestOptions<T.ApiCreateActivityPostInput>) {
    return this.client.request<T.ApiCreateActivityPostResponse, T.ApiCreateActivityPostInput>({ ...options, method: "POST", url: `/api/v1/activities`, data: data });
  }
  /**
   * Performs the create activity with reminder operation for the api capability.
   * Calls `POST /api/v1/activities/with-reminder` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:activity:create, crm:task:create.
   */
  apiCreateActivityWithReminderPost(data: T.ApiCreateActivityWithReminderPostInput, options?: RequestOptions<T.ApiCreateActivityWithReminderPostInput>) {
    return this.client.request<T.ApiCreateActivityWithReminderPostResponse, T.ApiCreateActivityWithReminderPostInput>({ ...options, method: "POST", url: `/api/v1/activities/with-reminder`, data: data });
  }
  /**
   * Performs the automation jobs operation for the api capability.
   * Calls `GET /api/v1/automation/jobs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:automation:read.
   */
  apiAutomationJobsGet(params?: T.ApiAutomationJobsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiAutomationJobsGetResponse>({ ...options, method: "GET", url: `/api/v1/automation/jobs`, params });
  }
  /**
   * Performs the automation webhooks operation for the api capability.
   * Calls `GET /api/v1/automation/webhooks` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:automation:read.
   */
  apiAutomationWebhooksGet(options?: RequestOptions) {
    return this.client.request<T.ApiAutomationWebhooksGetResponse>({ ...options, method: "GET", url: `/api/v1/automation/webhooks` });
  }
  /**
   * Performs the board operation for the api capability.
   * Calls `GET /api/v1/boards/{entity_type}/{pipeline_id}` through the shared IDP-aware Faiber client.
   * @param entityType Backend path identifier `entity_type`.
   * @param pipelineId Backend path identifier `pipeline_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:board:read.
   */
  apiBoardGet(entityType: Identifier, pipelineId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiBoardGetResponse>({ ...options, method: "GET", url: `/api/v1/boards/${encodeURIComponent(entityType)}/${encodeURIComponent(pipelineId)}` });
  }
  /**
   * Performs the campaigns operation for the api capability.
   * Calls `GET /api/v1/campaigns` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:marketing:read.
   */
  apiCampaignsGet(options?: RequestOptions) {
    return this.client.request<T.ApiCampaignsGetResponse>({ ...options, method: "GET", url: `/api/v1/campaigns` });
  }
  /**
   * Performs the create campaign operation for the api capability.
   * Calls `POST /api/v1/campaigns` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:marketing:manage.
   */
  apiCreateCampaignPost(data: T.ApiCreateCampaignPostInput, options?: RequestOptions<T.ApiCreateCampaignPostInput>) {
    return this.client.request<T.ApiCreateCampaignPostResponse, T.ApiCreateCampaignPostInput>({ ...options, method: "POST", url: `/api/v1/campaigns`, data: data });
  }
  /**
   * Performs the companies operation for the api capability.
   * Calls `GET /api/v1/companies` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:company:read, crm:company:read_all.
   */
  apiCompaniesGet(params?: T.ApiCompaniesGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiCompaniesGetResponse>({ ...options, method: "GET", url: `/api/v1/companies`, params });
  }
  /**
   * Performs the create company operation for the api capability.
   * Calls `POST /api/v1/companies` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:company:create.
   */
  apiCreateCompanyPost(data: T.ApiCreateCompanyPostInput, options?: RequestOptions<T.ApiCreateCompanyPostInput>) {
    return this.client.request<T.ApiCreateCompanyPostResponse, T.ApiCreateCompanyPostInput>({ ...options, method: "POST", url: `/api/v1/companies`, data: data });
  }
  /**
   * Performs the company operation for the api capability.
   * Calls `GET /api/v1/companies/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:company:read, crm:company:read_all.
   */
  apiCompanyGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiCompanyGetResponse>({ ...options, method: "GET", url: `/api/v1/companies/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update company operation for the api capability.
   * Calls `PATCH /api/v1/companies/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:company:update.
   */
  apiUpdateCompanyPatch(id: Identifier, data: T.ApiUpdateCompanyPatchInput, options?: RequestOptions<T.ApiUpdateCompanyPatchInput>) {
    return this.client.request<T.ApiUpdateCompanyPatchResponse, T.ApiUpdateCompanyPatchInput>({ ...options, method: "PATCH", url: `/api/v1/companies/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the contacts operation for the api capability.
   * Calls `GET /api/v1/contacts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:contact:read, crm:contact:read_all.
   */
  apiContactsGet(params?: T.ApiContactsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiContactsGetResponse>({ ...options, method: "GET", url: `/api/v1/contacts`, params });
  }
  /**
   * Performs the create contact operation for the api capability.
   * Calls `POST /api/v1/contacts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:contact:create.
   */
  apiCreateContactPost(data: T.ApiCreateContactPostInput, options?: RequestOptions<T.ApiCreateContactPostInput>) {
    return this.client.request<T.ApiCreateContactPostResponse, T.ApiCreateContactPostInput>({ ...options, method: "POST", url: `/api/v1/contacts`, data: data });
  }
  /**
   * Performs the contact operation for the api capability.
   * Calls `GET /api/v1/contacts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:contact:read, crm:contact:read_all.
   */
  apiContactGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiContactGetResponse>({ ...options, method: "GET", url: `/api/v1/contacts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update contact operation for the api capability.
   * Calls `PATCH /api/v1/contacts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:contact:update.
   */
  apiUpdateContactPatch(id: Identifier, data: T.ApiUpdateContactPatchInput, options?: RequestOptions<T.ApiUpdateContactPatchInput>) {
    return this.client.request<T.ApiUpdateContactPatchResponse, T.ApiUpdateContactPatchInput>({ ...options, method: "PATCH", url: `/api/v1/contacts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the context operation for the api capability.
   * Calls `GET /api/v1/context` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:workspace:read.
   */
  apiContextGet(options?: RequestOptions) {
    return this.client.request<T.ApiContextGetResponse>({ ...options, method: "GET", url: `/api/v1/context` });
  }
  /**
   * Performs the deals operation for the api capability.
   * Calls `GET /api/v1/deals` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:deal:read, crm:deal:read_all, crm:deal:read_own.
   */
  apiDealsGet(params?: T.ApiDealsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiDealsGetResponse>({ ...options, method: "GET", url: `/api/v1/deals`, params });
  }
  /**
   * Performs the create deal operation for the api capability.
   * Calls `POST /api/v1/deals` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:deal:create.
   */
  apiCreateDealPost(data: T.ApiCreateDealPostInput, options?: RequestOptions<T.ApiCreateDealPostInput>) {
    return this.client.request<T.ApiCreateDealPostResponse, T.ApiCreateDealPostInput>({ ...options, method: "POST", url: `/api/v1/deals`, data: data });
  }
  /**
   * Performs the deal operation for the api capability.
   * Calls `GET /api/v1/deals/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:deal:read, crm:deal:read_all, crm:deal:read_own.
   */
  apiDealGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDealGetResponse>({ ...options, method: "GET", url: `/api/v1/deals/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update deal operation for the api capability.
   * Calls `PATCH /api/v1/deals/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:deal:update.
   */
  apiUpdateDealPatch(id: Identifier, data: T.ApiUpdateDealPatchInput, options?: RequestOptions<T.ApiUpdateDealPatchInput>) {
    return this.client.request<T.ApiUpdateDealPatchResponse, T.ApiUpdateDealPatchInput>({ ...options, method: "PATCH", url: `/api/v1/deals/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the assign deal operation for the api capability.
   * Calls `PATCH /api/v1/deals/{id}/assignment` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:deal:assign.
   */
  apiAssignDealPatch(id: Identifier, data: T.ApiAssignDealPatchInput, options?: RequestOptions<T.ApiAssignDealPatchInput>) {
    return this.client.request<T.ApiAssignDealPatchResponse, T.ApiAssignDealPatchInput>({ ...options, method: "PATCH", url: `/api/v1/deals/${encodeURIComponent(id)}/assignment`, data: data });
  }
  /**
   * Performs the move deal stage operation for the api capability.
   * Calls `PATCH /api/v1/deals/{id}/stage` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:deal:move.
   */
  apiMoveDealStagePatch(id: Identifier, data: T.ApiMoveDealStagePatchInput, options?: RequestOptions<T.ApiMoveDealStagePatchInput>) {
    return this.client.request<T.ApiMoveDealStagePatchResponse, T.ApiMoveDealStagePatchInput>({ ...options, method: "PATCH", url: `/api/v1/deals/${encodeURIComponent(id)}/stage`, data: data });
  }
  /**
   * Performs the find office lead operation for the api capability.
   * Calls `GET /api/v1/integration/office/leads/find` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  apiFindOfficeLeadGet(params?: T.ApiFindOfficeLeadGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiFindOfficeLeadGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/office/leads/find`, params });
  }
  /**
   * Performs the leads operation for the api capability.
   * Calls `GET /api/v1/leads` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:lead:read, crm:lead:read_all, crm:lead:read_own.
   */
  apiLeadsGet(params?: T.ApiLeadsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiLeadsGetResponse>({ ...options, method: "GET", url: `/api/v1/leads`, params });
  }
  /**
   * Performs the create lead operation for the api capability.
   * Calls `POST /api/v1/leads` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:lead:create.
   */
  apiCreateLeadPost(data: T.ApiCreateLeadPostInput, options?: RequestOptions<T.ApiCreateLeadPostInput>) {
    return this.client.request<T.ApiCreateLeadPostResponse, T.ApiCreateLeadPostInput>({ ...options, method: "POST", url: `/api/v1/leads`, data: data });
  }
  /**
   * Performs the lead operation for the api capability.
   * Calls `GET /api/v1/leads/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:lead:read, crm:lead:read_all, crm:lead:read_own.
   */
  apiLeadGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiLeadGetResponse>({ ...options, method: "GET", url: `/api/v1/leads/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update lead operation for the api capability.
   * Calls `PATCH /api/v1/leads/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:lead:update.
   */
  apiUpdateLeadPatch(id: Identifier, data: T.ApiUpdateLeadPatchInput, options?: RequestOptions<T.ApiUpdateLeadPatchInput>) {
    return this.client.request<T.ApiUpdateLeadPatchResponse, T.ApiUpdateLeadPatchInput>({ ...options, method: "PATCH", url: `/api/v1/leads/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the assign lead operation for the api capability.
   * Calls `PATCH /api/v1/leads/{id}/assignment` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:lead:assign.
   */
  apiAssignLeadPatch(id: Identifier, data: T.ApiAssignLeadPatchInput, options?: RequestOptions<T.ApiAssignLeadPatchInput>) {
    return this.client.request<T.ApiAssignLeadPatchResponse, T.ApiAssignLeadPatchInput>({ ...options, method: "PATCH", url: `/api/v1/leads/${encodeURIComponent(id)}/assignment`, data: data });
  }
  /**
   * Performs the lead history operation for the api capability.
   * Calls `GET /api/v1/leads/{id}/history` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:lead:read, crm:activity:read.
   */
  apiLeadHistoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiLeadHistoryGetResponse>({ ...options, method: "GET", url: `/api/v1/leads/${encodeURIComponent(id)}/history` });
  }
  /**
   * Performs the delete lead reminders operation for the api capability.
   * Calls `DELETE /api/v1/leads/{id}/reminders` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:task:delete.
   */
  apiDeleteLeadRemindersDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteLeadRemindersDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/leads/${encodeURIComponent(id)}/reminders` });
  }
  /**
   * Performs the remove lead from sos operation for the api capability.
   * Calls `DELETE /api/v1/leads/{id}/sos` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:sos:delete.
   */
  apiRemoveLeadFromSosDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemoveLeadFromSosDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/leads/${encodeURIComponent(id)}/sos` });
  }
  /**
   * Performs the add lead to sos operation for the api capability.
   * Calls `POST /api/v1/leads/{id}/sos` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:sos:create.
   */
  apiAddLeadToSosPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiAddLeadToSosPostResponse>({ ...options, method: "POST", url: `/api/v1/leads/${encodeURIComponent(id)}/sos` });
  }
  /**
   * Performs the move lead stage operation for the api capability.
   * Calls `PATCH /api/v1/leads/{id}/stage` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:lead:move.
   */
  apiMoveLeadStagePatch(id: Identifier, data: T.ApiMoveLeadStagePatchInput, options?: RequestOptions<T.ApiMoveLeadStagePatchInput>) {
    return this.client.request<T.ApiMoveLeadStagePatchResponse, T.ApiMoveLeadStagePatchInput>({ ...options, method: "PATCH", url: `/api/v1/leads/${encodeURIComponent(id)}/stage`, data: data });
  }
  /**
   * Performs the light leads operation for the api capability.
   * Calls `GET /api/v1/leads/light` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  apiLightLeadsGet(params?: T.ApiLightLeadsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiLightLeadsGetResponse>({ ...options, method: "GET", url: `/api/v1/leads/light`, params });
  }
  /**
   * Performs the pipelines operation for the api capability.
   * Calls `GET /api/v1/pipelines` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:pipeline:read.
   */
  apiPipelinesGet(options?: RequestOptions) {
    return this.client.request<T.ApiPipelinesGetResponse>({ ...options, method: "GET", url: `/api/v1/pipelines` });
  }
  /**
   * Performs the update pipeline operation for the api capability.
   * Calls `PATCH /api/v1/pipelines/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:pipeline:update.
   */
  apiUpdatePipelinePatch(id: Identifier, data: T.ApiUpdatePipelinePatchInput, options?: RequestOptions<T.ApiUpdatePipelinePatchInput>) {
    return this.client.request<T.ApiUpdatePipelinePatchResponse, T.ApiUpdatePipelinePatchInput>({ ...options, method: "PATCH", url: `/api/v1/pipelines/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the report run operation for the api capability.
   * Calls `GET /api/v1/reports/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:report:read.
   */
  apiReportRunGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiReportRunGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the request agentic insight operation for the api capability.
   * Calls `POST /api/v1/reports/{id}/agentic` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:agent:run.
   */
  apiRequestAgenticInsightPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRequestAgenticInsightPostResponse>({ ...options, method: "POST", url: `/api/v1/reports/${encodeURIComponent(id)}/agentic` });
  }
  /**
   * Performs the report catalog operation for the api capability.
   * Calls `GET /api/v1/reports/catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:report:read.
   */
  apiReportCatalogGet(options?: RequestOptions) {
    return this.client.request<T.ApiReportCatalogGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/catalog` });
  }
  /**
   * Performs the overview operation for the api capability.
   * Calls `GET /api/v1/reports/overview` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:report:read.
   */
  apiOverviewGet(params?: T.ApiOverviewGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiOverviewGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/overview`, params });
  }
  /**
   * Performs the refresh reports operation for the api capability.
   * Calls `POST /api/v1/reports/refresh` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:report:refresh.
   */
  apiRefreshReportsPost(params?: T.ApiRefreshReportsPostQuery, options?: RequestOptions) {
    return this.client.request<T.ApiRefreshReportsPostResponse>({ ...options, method: "POST", url: `/api/v1/reports/refresh`, params });
  }
  /**
   * Performs the list sos leads operation for the api capability.
   * Calls `GET /api/v1/sos` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:sos:read.
   */
  apiListSosLeadsGet(options?: RequestOptions) {
    return this.client.request<T.ApiListSosLeadsGetResponse>({ ...options, method: "GET", url: `/api/v1/sos` });
  }
  /**
   * Performs the sources operation for the api capability.
   * Calls `GET /api/v1/sources` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:marketing:read.
   */
  apiSourcesGet(options?: RequestOptions) {
    return this.client.request<T.ApiSourcesGetResponse>({ ...options, method: "GET", url: `/api/v1/sources` });
  }
  /**
   * Performs the create source operation for the api capability.
   * Calls `POST /api/v1/sources` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:marketing:manage.
   */
  apiCreateSourcePost(data: T.ApiCreateSourcePostInput, options?: RequestOptions<T.ApiCreateSourcePostInput>) {
    return this.client.request<T.ApiCreateSourcePostResponse, T.ApiCreateSourcePostInput>({ ...options, method: "POST", url: `/api/v1/sources`, data: data });
  }
  /**
   * Performs the daily stats operation for the api capability.
   * Calls `GET /api/v1/stats/daily` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:stats:read, crm:stats:read_own.
   */
  apiDailyStatsGet(options?: RequestOptions) {
    return this.client.request<T.ApiDailyStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/stats/daily` });
  }
  /**
   * Performs the lead stats operation for the api capability.
   * Calls `GET /api/v1/stats/lead` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:stats:read, crm:stats:read_all.
   */
  apiLeadStatsGet(options?: RequestOptions) {
    return this.client.request<T.ApiLeadStatsGetResponse>({ ...options, method: "GET", url: `/api/v1/stats/lead` });
  }
  /**
   * Performs the tasks operation for the api capability.
   * Calls `GET /api/v1/tasks` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:task:read, crm:task:read_all, crm:task:read_own.
   */
  apiTasksGet(params?: T.ApiTasksGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiTasksGetResponse>({ ...options, method: "GET", url: `/api/v1/tasks`, params });
  }
  /**
   * Performs the create task operation for the api capability.
   * Calls `POST /api/v1/tasks` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:task:create.
   */
  apiCreateTaskPost(data: T.ApiCreateTaskPostInput, options?: RequestOptions<T.ApiCreateTaskPostInput>) {
    return this.client.request<T.ApiCreateTaskPostResponse, T.ApiCreateTaskPostInput>({ ...options, method: "POST", url: `/api/v1/tasks`, data: data });
  }
  /**
   * Performs the delete task operation for the api capability.
   * Calls `DELETE /api/v1/tasks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:task:delete.
   */
  apiDeleteTaskDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteTaskDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/tasks/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update task status operation for the api capability.
   * Calls `PATCH /api/v1/tasks/{id}/status` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:task:update.
   */
  apiUpdateTaskStatusPatch(id: Identifier, data: T.ApiUpdateTaskStatusPatchInput, options?: RequestOptions<T.ApiUpdateTaskStatusPatchInput>) {
    return this.client.request<T.ApiUpdateTaskStatusPatchResponse, T.ApiUpdateTaskStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/tasks/${encodeURIComponent(id)}/status`, data: data });
  }
  /**
   * Performs the teams operation for the api capability.
   * Calls `GET /api/v1/teams` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:team:read.
   */
  apiTeamsGet(options?: RequestOptions) {
    return this.client.request<T.ApiTeamsGetResponse>({ ...options, method: "GET", url: `/api/v1/teams` });
  }
  /**
   * Performs the create team operation for the api capability.
   * Calls `POST /api/v1/teams` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:team:create.
   */
  apiCreateTeamPost(data: T.ApiCreateTeamPostInput, options?: RequestOptions<T.ApiCreateTeamPostInput>) {
    return this.client.request<T.ApiCreateTeamPostResponse, T.ApiCreateTeamPostInput>({ ...options, method: "POST", url: `/api/v1/teams`, data: data });
  }
  /**
   * Performs the delete team operation for the api capability.
   * Calls `DELETE /api/v1/teams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:team:delete.
   */
  apiDeleteTeamDelete(id: Identifier, data: T.ApiDeleteTeamDeleteInput, options?: RequestOptions<T.ApiDeleteTeamDeleteInput>) {
    return this.client.request<T.ApiDeleteTeamDeleteResponse, T.ApiDeleteTeamDeleteInput>({ ...options, method: "DELETE", url: `/api/v1/teams/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the team operation for the api capability.
   * Calls `GET /api/v1/teams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:team:read.
   */
  apiTeamGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiTeamGetResponse>({ ...options, method: "GET", url: `/api/v1/teams/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the add team member operation for the api capability.
   * Calls `POST /api/v1/teams/{id}/members` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:team:manage_members.
   */
  apiAddTeamMemberPost(id: Identifier, data: T.ApiAddTeamMemberPostInput, options?: RequestOptions<T.ApiAddTeamMemberPostInput>) {
    return this.client.request<T.ApiAddTeamMemberPostResponse, T.ApiAddTeamMemberPostInput>({ ...options, method: "POST", url: `/api/v1/teams/${encodeURIComponent(id)}/members`, data: data });
  }
  /**
   * Performs the remove team member operation for the api capability.
   * Calls `DELETE /api/v1/teams/{team_id}/members/{member_id}` through the shared IDP-aware Faiber client.
   * @param teamId Backend path identifier `team_id`.
   * @param memberId Backend path identifier `member_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:team:manage_members.
   */
  apiRemoveTeamMemberDelete(teamId: Identifier, memberId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiRemoveTeamMemberDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/teams/${encodeURIComponent(teamId)}/members/${encodeURIComponent(memberId)}` });
  }
  /**
   * Performs the create workflow route operation for the api capability.
   * Calls `POST /api/v1/workflow` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow:create.
   */
  apiCreateWorkflowRoutePost(data: T.ApiCreateWorkflowRoutePostInput, options?: RequestOptions<T.ApiCreateWorkflowRoutePostInput>) {
    return this.client.request<T.ApiCreateWorkflowRoutePostResponse, T.ApiCreateWorkflowRoutePostInput>({ ...options, method: "POST", url: `/api/v1/workflow`, data: data });
  }
  /**
   * Performs the list workflow assignments operation for the api capability.
   * Calls `GET /api/v1/workflows/{id}/assignments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:workflow_assignment:read.
   */
  apiListWorkflowAssignmentsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiListWorkflowAssignmentsGetResponse>({ ...options, method: "GET", url: `/api/v1/workflows/${encodeURIComponent(id)}/assignments` });
  }
  /**
   * Performs the create workflow assignment operation for the api capability.
   * Calls `POST /api/v1/workflows/{id}/assignments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:workflow_assignment:manage.
   */
  apiCreateWorkflowAssignmentPost(id: Identifier, data: T.ApiCreateWorkflowAssignmentPostInput, options?: RequestOptions<T.ApiCreateWorkflowAssignmentPostInput>) {
    return this.client.request<T.ApiCreateWorkflowAssignmentPostResponse, T.ApiCreateWorkflowAssignmentPostInput>({ ...options, method: "POST", url: `/api/v1/workflows/${encodeURIComponent(id)}/assignments`, data: data });
  }
  /**
   * Performs the delete workflow assignment operation for the api capability.
   * Calls `DELETE /api/v1/workflows/{workflow_id}/assignments/{assignment_id}` through the shared IDP-aware Faiber client.
   * @param workflowId Backend path identifier `workflow_id`.
   * @param assignmentId Backend path identifier `assignment_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:workflow_assignment:manage.
   */
  apiDeleteWorkflowAssignmentDelete(workflowId: Identifier, assignmentId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ApiDeleteWorkflowAssignmentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/workflows/${encodeURIComponent(workflowId)}/assignments/${encodeURIComponent(assignmentId)}` });
  }
  /**
   * Performs the member workflows operation for the api capability.
   * Calls `GET /api/v1/workflows/member-based` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:pipeline:read.
   */
  apiMemberWorkflowsGet(options?: RequestOptions) {
    return this.client.request<T.ApiMemberWorkflowsGetResponse>({ ...options, method: "GET", url: `/api/v1/workflows/member-based` });
  }
  /**
   * Performs the worklogs operation for the api capability.
   * Calls `GET /api/v1/worklog` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: worklog:read, worklog:read_all, worklog:read_own.
   */
  apiWorklogsGet(params?: T.ApiWorklogsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ApiWorklogsGetResponse>({ ...options, method: "GET", url: `/api/v1/worklog`, params });
  }
  /**
   * Performs the update workspace operation for the api capability.
   * Calls `PATCH /api/v1/workspace/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: crm:settings:update.
   */
  apiUpdateWorkspacePatch(data: T.ApiUpdateWorkspacePatchInput, options?: RequestOptions<T.ApiUpdateWorkspacePatchInput>) {
    return this.client.request<T.ApiUpdateWorkspacePatchResponse, T.ApiUpdateWorkspacePatchInput>({ ...options, method: "PATCH", url: `/api/v1/workspace/settings`, data: data });
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
   * Calls `GET /livez` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusRouteGetLivez(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetLivezResponse>({ ...options, method: "GET", url: `/livez` });
  }
  /**
   * Performs the readiness route operation for the router capability.
   * Calls `GET /readyz` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerReadinessRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterReadinessRouteGetResponse>({ ...options, method: "GET", url: `/readyz` });
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
