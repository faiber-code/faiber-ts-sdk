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
   * Performs the integration docs show operation for the integration capability.
   * Calls `GET /api/v1/integration/docs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:integration:read.
   */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /**
   * Performs the flow integration show operation for the integration capability.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Performs the index operation for the lead capability.
   * Calls `GET /api/v1/lead` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:read, lead:read_all, lead:read_own.
   */
  leadIndexGet(params?: T.LeadIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.LeadIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/lead`, params });
  }
  /**
   * Performs the create operation for the lead capability.
   * Calls `POST /api/v1/lead` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:create.
   */
  leadCreatePost(data: T.LeadCreatePostInput, options?: RequestOptions<T.LeadCreatePostInput>) {
    return this.client.request<T.LeadCreatePostResponse, T.LeadCreatePostInput>({ ...options, method: "POST", url: `/api/v1/lead`, data: data });
  }
  /**
   * Performs the index operation for the lead campaign capability.
   * Calls `GET /api/v1/lead-campaign` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  leadCampaignIndexGet(options?: RequestOptions) {
    return this.client.request<T.LeadCampaignIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/lead-campaign` });
  }
  /**
   * Performs the create operation for the lead campaign capability.
   * Calls `POST /api/v1/lead-campaign` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  leadCampaignCreatePost(data: T.LeadCampaignCreatePostInput, options?: RequestOptions<T.LeadCampaignCreatePostInput>) {
    return this.client.request<T.LeadCampaignCreatePostResponse, T.LeadCampaignCreatePostInput>({ ...options, method: "POST", url: `/api/v1/lead-campaign`, data: data });
  }
  /**
   * Performs the destroy operation for the lead campaign capability.
   * Calls `DELETE /api/v1/lead-campaign/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  leadCampaignDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadCampaignDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead-campaign/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the lead campaign capability.
   * Calls `GET /api/v1/lead-campaign/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  leadCampaignShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadCampaignShowGetResponse>({ ...options, method: "GET", url: `/api/v1/lead-campaign/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the lead campaign capability.
   * Calls `PUT /api/v1/lead-campaign/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  leadCampaignUpdatePut(id: Identifier, data: T.LeadCampaignUpdatePutInput, options?: RequestOptions<T.LeadCampaignUpdatePutInput>) {
    return this.client.request<T.LeadCampaignUpdatePutResponse, T.LeadCampaignUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/lead-campaign/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index operation for the lead source capability.
   * Calls `GET /api/v1/lead-source` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  leadSourceIndexGet(options?: RequestOptions) {
    return this.client.request<T.LeadSourceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/lead-source` });
  }
  /**
   * Performs the create operation for the lead source capability.
   * Calls `POST /api/v1/lead-source` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  leadSourceCreatePost(data: T.LeadSourceCreatePostInput, options?: RequestOptions<T.LeadSourceCreatePostInput>) {
    return this.client.request<T.LeadSourceCreatePostResponse, T.LeadSourceCreatePostInput>({ ...options, method: "POST", url: `/api/v1/lead-source`, data: data });
  }
  /**
   * Performs the destroy operation for the lead source capability.
   * Calls `DELETE /api/v1/lead-source/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  leadSourceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadSourceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead-source/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the lead source capability.
   * Calls `GET /api/v1/lead-source/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  leadSourceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadSourceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/lead-source/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the lead source capability.
   * Calls `PUT /api/v1/lead-source/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  leadSourceUpdatePut(id: Identifier, data: T.LeadSourceUpdatePutInput, options?: RequestOptions<T.LeadSourceUpdatePutInput>) {
    return this.client.request<T.LeadSourceUpdatePutResponse, T.LeadSourceUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/lead-source/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the destroy operation for the lead capability.
   * Calls `DELETE /api/v1/lead/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:delete.
   */
  leadDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the lead capability.
   * Calls `GET /api/v1/lead/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:read, lead:read_all, lead:read_own.
   */
  leadShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadShowGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the lead capability.
   * Calls `PUT /api/v1/lead/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:update.
   */
  leadUpdatePut(id: Identifier, data: T.LeadUpdatePutInput, options?: RequestOptions<T.LeadUpdatePutInput>) {
    return this.client.request<T.LeadUpdatePutResponse, T.LeadUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/lead/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the check status operation for the lead capability.
   * Calls `GET /api/v1/lead/{id}/check-status` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:update.
   */
  leadCheckStatusGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadCheckStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}/check-status` });
  }
  /**
   * Performs the list logs operation for the lead capability.
   * Calls `GET /api/v1/lead/{id}/log` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead_log:read.
   */
  leadListLogsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadListLogsGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}/log` });
  }
  /**
   * Performs the create log operation for the lead capability.
   * Calls `POST /api/v1/lead/{id}/log` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead_log:create.
   */
  leadCreateLogPost(id: Identifier, data: T.LeadCreateLogPostInput, options?: RequestOptions<T.LeadCreateLogPostInput>) {
    return this.client.request<T.LeadCreateLogPostResponse, T.LeadCreateLogPostInput>({ ...options, method: "POST", url: `/api/v1/lead/${encodeURIComponent(id)}/log`, data: data });
  }
  /**
   * Performs the destroy log operation for the lead capability.
   * Calls `DELETE /api/v1/lead/{id}/log/{log_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param logId Backend path identifier `log_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead_log:delete.
   */
  leadDestroyLogDelete(id: Identifier, logId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadDestroyLogDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}` });
  }
  /**
   * Performs the show log operation for the lead capability.
   * Calls `GET /api/v1/lead/{id}/log/{log_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param logId Backend path identifier `log_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead_log:read.
   */
  leadShowLogGet(id: Identifier, logId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadShowLogGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}` });
  }
  /**
   * Performs the update log operation for the lead capability.
   * Calls `PUT /api/v1/lead/{id}/log/{log_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param logId Backend path identifier `log_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead_log:update.
   */
  leadUpdateLogPut(id: Identifier, logId: Identifier, data: T.LeadUpdateLogPutInput, options?: RequestOptions<T.LeadUpdateLogPutInput>) {
    return this.client.request<T.LeadUpdateLogPutResponse, T.LeadUpdateLogPutInput>({ ...options, method: "PUT", url: `/api/v1/lead/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}`, data: data });
  }
  /**
   * Performs the move to done operation for the lead capability.
   * Calls `PUT /api/v1/lead/{id}/move-to-done` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:update.
   */
  leadMoveToDonePut(id: Identifier, data: T.LeadMoveToDonePutInput, options?: RequestOptions<T.LeadMoveToDonePutInput>) {
    return this.client.request<T.LeadMoveToDonePutResponse, T.LeadMoveToDonePutInput>({ ...options, method: "PUT", url: `/api/v1/lead/${encodeURIComponent(id)}/move-to-done`, data: data });
  }
  /**
   * Performs the list touches operation for the lead capability.
   * Calls `GET /api/v1/lead/{id}/touch` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead_touch:read.
   */
  leadListTouchesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadListTouchesGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}/touch` });
  }
  /**
   * Performs the create touch operation for the lead capability.
   * Calls `POST /api/v1/lead/{id}/touch` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead_touch:create.
   */
  leadCreateTouchPost(id: Identifier, data: T.LeadCreateTouchPostInput, options?: RequestOptions<T.LeadCreateTouchPostInput>) {
    return this.client.request<T.LeadCreateTouchPostResponse, T.LeadCreateTouchPostInput>({ ...options, method: "POST", url: `/api/v1/lead/${encodeURIComponent(id)}/touch`, data: data });
  }
  /**
   * Performs the destroy touch operation for the lead capability.
   * Calls `DELETE /api/v1/lead/{id}/touch/{touch_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param touchId Backend path identifier `touch_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead_touch:delete.
   */
  leadDestroyTouchDelete(id: Identifier, touchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadDestroyTouchDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}` });
  }
  /**
   * Performs the show touch operation for the lead capability.
   * Calls `GET /api/v1/lead/{id}/touch/{touch_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param touchId Backend path identifier `touch_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead_touch:read.
   */
  leadShowTouchGet(id: Identifier, touchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadShowTouchGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}` });
  }
  /**
   * Performs the update touch operation for the lead capability.
   * Calls `PUT /api/v1/lead/{id}/touch/{touch_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param touchId Backend path identifier `touch_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead_touch:update.
   */
  leadUpdateTouchPut(id: Identifier, touchId: Identifier, data: T.LeadUpdateTouchPutInput, options?: RequestOptions<T.LeadUpdateTouchPutInput>) {
    return this.client.request<T.LeadUpdateTouchPutResponse, T.LeadUpdateTouchPutInput>({ ...options, method: "PUT", url: `/api/v1/lead/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}`, data: data });
  }
  /**
   * Performs the create developer operation for the lead capability.
   * Calls `POST /api/v1/lead/developer` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:create.
   */
  leadCreateDeveloperPost(data: T.LeadCreateDeveloperPostInput, options?: RequestOptions<T.LeadCreateDeveloperPostInput>) {
    return this.client.request<T.LeadCreateDeveloperPostResponse, T.LeadCreateDeveloperPostInput>({ ...options, method: "POST", url: `/api/v1/lead/developer`, data: data });
  }
  /**
   * Performs the developer ready operation for the lead capability.
   * Calls `GET /api/v1/lead/developer/ready` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:read, lead:read_all, lead:read_own.
   */
  leadDeveloperReadyGet(params?: T.LeadDeveloperReadyGetQuery, options?: RequestOptions) {
    return this.client.request<T.LeadDeveloperReadyGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/developer/ready`, params });
  }
  /**
   * Performs the by foreign key operation for the lead capability.
   * Calls `GET /api/v1/lead/foreign_key` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:read, lead:read_all, lead:read_own.
   */
  leadByForeignKeyGet(params?: T.LeadByForeignKeyGetQuery, options?: RequestOptions) {
    return this.client.request<T.LeadByForeignKeyGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/foreign_key`, params });
  }
  /**
   * Performs the destroy by foreign key operation for the lead capability.
   * Calls `DELETE /api/v1/lead/foreign_key/{foreign_key}/profile_id/{profile_id}/flags/{flags}` through the shared IDP-aware Faiber client.
   * @param foreignKey Backend path identifier `foreign_key`.
   * @param profileId Backend path identifier `profile_id`.
   * @param flags Backend path identifier `flags`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:delete.
   */
  leadDestroyByForeignKeyDelete(foreignKey: Identifier, profileId: Identifier, flags: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadDestroyByForeignKeyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead/foreign_key/${encodeURIComponent(foreignKey)}/profile_id/${encodeURIComponent(profileId)}/flags/${encodeURIComponent(flags)}` });
  }
  /**
   * Performs the update by foreign key operation for the lead capability.
   * Calls `PUT /api/v1/lead/foreign_key/{foreign_key}/profile_id/{profile_id}/flags/{flags}` through the shared IDP-aware Faiber client.
   * @param foreignKey Backend path identifier `foreign_key`.
   * @param profileId Backend path identifier `profile_id`.
   * @param flags Backend path identifier `flags`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:update.
   */
  leadUpdateByForeignKeyPut(foreignKey: Identifier, profileId: Identifier, flags: Identifier, data: T.LeadUpdateByForeignKeyPutInput, options?: RequestOptions<T.LeadUpdateByForeignKeyPutInput>) {
    return this.client.request<T.LeadUpdateByForeignKeyPutResponse, T.LeadUpdateByForeignKeyPutInput>({ ...options, method: "PUT", url: `/api/v1/lead/foreign_key/${encodeURIComponent(foreignKey)}/profile_id/${encodeURIComponent(profileId)}/flags/${encodeURIComponent(flags)}`, data: data });
  }
  /**
   * Performs the light operation for the lead capability.
   * Calls `GET /api/v1/lead/light` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lead:read, lead:read_all, lead:read_own.
   */
  leadLightGet(params?: T.LeadLightGetQuery, options?: RequestOptions) {
    return this.client.request<T.LeadLightGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/light`, params });
  }
  /**
   * Performs the index operation for the reminder capability.
   * Calls `GET /api/v1/reminder` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: reminder:read.
   */
  reminderIndexGet(options?: RequestOptions) {
    return this.client.request<T.ReminderIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/reminder` });
  }
  /**
   * Performs the create operation for the reminder capability.
   * Calls `POST /api/v1/reminder` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: reminder:create.
   */
  reminderCreatePost(data: T.ReminderCreatePostInput, options?: RequestOptions<T.ReminderCreatePostInput>) {
    return this.client.request<T.ReminderCreatePostResponse, T.ReminderCreatePostInput>({ ...options, method: "POST", url: `/api/v1/reminder`, data: data });
  }
  /**
   * Performs the destroy operation for the reminder capability.
   * Calls `DELETE /api/v1/reminder/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: reminder:delete.
   */
  reminderDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReminderDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/reminder/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the reminder capability.
   * Calls `PUT /api/v1/reminder/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: reminder:update.
   */
  reminderUpdatePut(id: Identifier, data: T.ReminderUpdatePutInput, options?: RequestOptions<T.ReminderUpdatePutInput>) {
    return this.client.request<T.ReminderUpdatePutResponse, T.ReminderUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/reminder/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the destroy by lead operation for the reminder capability.
   * Calls `DELETE /api/v1/reminder/lead_id/{lead_id}` through the shared IDP-aware Faiber client.
   * @param leadId Backend path identifier `lead_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: reminder:delete.
   */
  reminderDestroyByLeadDelete(leadId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReminderDestroyByLeadDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/reminder/lead_id/${encodeURIComponent(leadId)}` });
  }
  /**
   * Performs the until today operation for the reminder capability.
   * Calls `GET /api/v1/reminder/until-today` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: reminder:read.
   */
  reminderUntilTodayGet(options?: RequestOptions) {
    return this.client.request<T.ReminderUntilTodayGetResponse>({ ...options, method: "GET", url: `/api/v1/reminder/until-today` });
  }
  /**
   * Performs the index operation for the sos capability.
   * Calls `GET /api/v1/sos` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos:read, sos:read_all, sos:read_own.
   */
  sosIndexGet(params?: T.SosIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.SosIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/sos`, params });
  }
  /**
   * Performs the create operation for the sos capability.
   * Calls `POST /api/v1/sos` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos:create.
   */
  sosCreatePost(data: T.SosCreatePostInput, options?: RequestOptions<T.SosCreatePostInput>) {
    return this.client.request<T.SosCreatePostResponse, T.SosCreatePostInput>({ ...options, method: "POST", url: `/api/v1/sos`, data: data });
  }
  /**
   * Performs the destroy operation for the sos capability.
   * Calls `DELETE /api/v1/sos/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos:delete.
   */
  sosDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/sos/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the sos capability.
   * Calls `GET /api/v1/sos/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos:read.
   */
  sosShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosShowGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the sos capability.
   * Calls `PUT /api/v1/sos/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos:update.
   */
  sosUpdatePut(id: Identifier, data: T.SosUpdatePutInput, options?: RequestOptions<T.SosUpdatePutInput>) {
    return this.client.request<T.SosUpdatePutResponse, T.SosUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/sos/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list logs operation for the sos capability.
   * Calls `GET /api/v1/sos/{id}/log` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos_log:read.
   */
  sosListLogsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosListLogsGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/${encodeURIComponent(id)}/log` });
  }
  /**
   * Performs the create log operation for the sos capability.
   * Calls `POST /api/v1/sos/{id}/log` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos_log:create.
   */
  sosCreateLogPost(id: Identifier, data: T.SosCreateLogPostInput, options?: RequestOptions<T.SosCreateLogPostInput>) {
    return this.client.request<T.SosCreateLogPostResponse, T.SosCreateLogPostInput>({ ...options, method: "POST", url: `/api/v1/sos/${encodeURIComponent(id)}/log`, data: data });
  }
  /**
   * Performs the destroy log operation for the sos capability.
   * Calls `DELETE /api/v1/sos/{id}/log/{log_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param logId Backend path identifier `log_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos_log:delete.
   */
  sosDestroyLogDelete(id: Identifier, logId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosDestroyLogDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/sos/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}` });
  }
  /**
   * Performs the show log operation for the sos capability.
   * Calls `GET /api/v1/sos/{id}/log/{log_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param logId Backend path identifier `log_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos_log:read.
   */
  sosShowLogGet(id: Identifier, logId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosShowLogGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}` });
  }
  /**
   * Performs the update log operation for the sos capability.
   * Calls `PUT /api/v1/sos/{id}/log/{log_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param logId Backend path identifier `log_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos_log:update.
   */
  sosUpdateLogPut(id: Identifier, logId: Identifier, data: T.SosUpdateLogPutInput, options?: RequestOptions<T.SosUpdateLogPutInput>) {
    return this.client.request<T.SosUpdateLogPutResponse, T.SosUpdateLogPutInput>({ ...options, method: "PUT", url: `/api/v1/sos/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}`, data: data });
  }
  /**
   * Performs the list touches operation for the sos capability.
   * Calls `GET /api/v1/sos/{id}/touch` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos_touch:read.
   */
  sosListTouchesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosListTouchesGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/${encodeURIComponent(id)}/touch` });
  }
  /**
   * Performs the create touch operation for the sos capability.
   * Calls `POST /api/v1/sos/{id}/touch` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos_touch:create.
   */
  sosCreateTouchPost(id: Identifier, data: T.SosCreateTouchPostInput, options?: RequestOptions<T.SosCreateTouchPostInput>) {
    return this.client.request<T.SosCreateTouchPostResponse, T.SosCreateTouchPostInput>({ ...options, method: "POST", url: `/api/v1/sos/${encodeURIComponent(id)}/touch`, data: data });
  }
  /**
   * Performs the destroy touch operation for the sos capability.
   * Calls `DELETE /api/v1/sos/{id}/touch/{touch_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param touchId Backend path identifier `touch_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos_touch:delete.
   */
  sosDestroyTouchDelete(id: Identifier, touchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosDestroyTouchDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/sos/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}` });
  }
  /**
   * Performs the show touch operation for the sos capability.
   * Calls `GET /api/v1/sos/{id}/touch/{touch_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param touchId Backend path identifier `touch_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos_touch:read.
   */
  sosShowTouchGet(id: Identifier, touchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosShowTouchGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}` });
  }
  /**
   * Performs the update touch operation for the sos capability.
   * Calls `PUT /api/v1/sos/{id}/touch/{touch_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param touchId Backend path identifier `touch_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos_touch:update.
   */
  sosUpdateTouchPut(id: Identifier, touchId: Identifier, data: T.SosUpdateTouchPutInput, options?: RequestOptions<T.SosUpdateTouchPutInput>) {
    return this.client.request<T.SosUpdateTouchPutResponse, T.SosUpdateTouchPutInput>({ ...options, method: "PUT", url: `/api/v1/sos/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}`, data: data });
  }
  /**
   * Performs the all operation for the sos capability.
   * Calls `GET /api/v1/sos/all` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos:read, sos:read_all, sos:read_own.
   */
  sosAllGet(params?: T.SosAllGetQuery, options?: RequestOptions) {
    return this.client.request<T.SosAllGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/all`, params });
  }
  /**
   * Performs the exit assignee route operation for the sos capability.
   * Calls `POST /api/v1/sos/exit_assignee/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: sos:update, sos:update_all, sos:update_own.
   */
  sosExitAssigneeRoutePost(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosExitAssigneeRoutePostResponse>({ ...options, method: "POST", url: `/api/v1/sos/exit_assignee/${encodeURIComponent(profileId)}` });
  }
  /**
   * Performs the daily operation for the stats capability.
   * Calls `GET /api/v1/stats/daily` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: stats:read.
   */
  statsDailyGet(options?: RequestOptions) {
    return this.client.request<T.StatsDailyGetResponse>({ ...options, method: "GET", url: `/api/v1/stats/daily` });
  }
  /**
   * Performs the lead operation for the stats capability.
   * Calls `GET /api/v1/stats/lead` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: stats:read, stats:read_all, stats:read_own.
   */
  statsLeadGet(options?: RequestOptions) {
    return this.client.request<T.StatsLeadGetResponse>({ ...options, method: "GET", url: `/api/v1/stats/lead` });
  }
  /**
   * Performs the index operation for the team capability.
   * Calls `GET /api/v1/team` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team:read.
   */
  teamIndexGet(params?: T.TeamIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TeamIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/team`, params });
  }
  /**
   * Performs the create operation for the team capability.
   * Calls `POST /api/v1/team` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team:create.
   */
  teamCreatePost(data: T.TeamCreatePostInput, options?: RequestOptions<T.TeamCreatePostInput>) {
    return this.client.request<T.TeamCreatePostResponse, T.TeamCreatePostInput>({ ...options, method: "POST", url: `/api/v1/team`, data: data });
  }
  /**
   * Performs the index operation for the team user capability.
   * Calls `GET /api/v1/team-users` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team_user:read.
   */
  teamUserIndexGet(params?: T.TeamUserIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TeamUserIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/team-users`, params });
  }
  /**
   * Performs the create operation for the team user capability.
   * Calls `POST /api/v1/team-users` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team_user:create.
   */
  teamUserCreatePost(data: T.TeamUserCreatePostInput, options?: RequestOptions<T.TeamUserCreatePostInput>) {
    return this.client.request<T.TeamUserCreatePostResponse, T.TeamUserCreatePostInput>({ ...options, method: "POST", url: `/api/v1/team-users`, data: data });
  }
  /**
   * Performs the destroy operation for the team user capability.
   * Calls `DELETE /api/v1/team-users/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team_user:delete.
   */
  teamUserDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TeamUserDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/team-users/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the team user capability.
   * Calls `GET /api/v1/team-users/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team_user:read.
   */
  teamUserShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TeamUserShowGetResponse>({ ...options, method: "GET", url: `/api/v1/team-users/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the team user capability.
   * Calls `PUT /api/v1/team-users/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team_user:update.
   */
  teamUserUpdatePut(id: Identifier, data: T.TeamUserUpdatePutInput, options?: RequestOptions<T.TeamUserUpdatePutInput>) {
    return this.client.request<T.TeamUserUpdatePutResponse, T.TeamUserUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/team-users/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the multi profiles operation for the team user capability.
   * Calls `POST /api/v1/team-users/multi-profiles` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team_user:create.
   */
  teamUserMultiProfilesPost(data: T.TeamUserMultiProfilesPostInput, options?: RequestOptions<T.TeamUserMultiProfilesPostInput>) {
    return this.client.request<T.TeamUserMultiProfilesPostResponse, T.TeamUserMultiProfilesPostInput>({ ...options, method: "POST", url: `/api/v1/team-users/multi-profiles`, data: data });
  }
  /**
   * Performs the destroy operation for the team capability.
   * Calls `DELETE /api/v1/team/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team:delete.
   */
  teamDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TeamDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/team/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the team capability.
   * Calls `GET /api/v1/team/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team:read.
   */
  teamShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TeamShowGetResponse>({ ...options, method: "GET", url: `/api/v1/team/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the team capability.
   * Calls `PUT /api/v1/team/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: team:update.
   */
  teamUpdatePut(id: Identifier, data: T.TeamUpdatePutInput, options?: RequestOptions<T.TeamUpdatePutInput>) {
    return this.client.request<T.TeamUpdatePutResponse, T.TeamUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/team/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index operation for the webhook capability.
   * Calls `GET /api/v1/webhook` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  webhookIndexGet(options?: RequestOptions) {
    return this.client.request<T.WebhookIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/webhook` });
  }
  /**
   * Performs the create operation for the webhook capability.
   * Calls `POST /api/v1/webhook` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  webhookCreatePost(data: T.WebhookCreatePostInput, options?: RequestOptions<T.WebhookCreatePostInput>) {
    return this.client.request<T.WebhookCreatePostResponse, T.WebhookCreatePostInput>({ ...options, method: "POST", url: `/api/v1/webhook`, data: data });
  }
  /**
   * Performs the destroy operation for the webhook capability.
   * Calls `DELETE /api/v1/webhook/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  webhookDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WebhookDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/webhook/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the webhook capability.
   * Calls `GET /api/v1/webhook/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  webhookShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WebhookShowGetResponse>({ ...options, method: "GET", url: `/api/v1/webhook/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the webhook capability.
   * Calls `PUT /api/v1/webhook/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  webhookUpdatePut(id: Identifier, data: T.WebhookUpdatePutInput, options?: RequestOptions<T.WebhookUpdatePutInput>) {
    return this.client.request<T.WebhookUpdatePutResponse, T.WebhookUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/webhook/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index operation for the workflow capability.
   * Calls `GET /api/v1/workflow` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow:read, workflow:read_all, workflow:read_own.
   */
  workflowIndexGet(params?: T.WorkflowIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WorkflowIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow`, params });
  }
  /**
   * Performs the create operation for the workflow capability.
   * Calls `POST /api/v1/workflow` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow:create.
   */
  workflowCreatePost(data: T.WorkflowCreatePostInput, options?: RequestOptions<T.WorkflowCreatePostInput>) {
    return this.client.request<T.WorkflowCreatePostResponse, T.WorkflowCreatePostInput>({ ...options, method: "POST", url: `/api/v1/workflow`, data: data });
  }
  /**
   * Performs the index operation for the workflow member capability.
   * Calls `GET /api/v1/workflow-members` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_member:read.
   */
  workflowMemberIndexGet(options?: RequestOptions) {
    return this.client.request<T.WorkflowMemberIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-members` });
  }
  /**
   * Performs the destroy operation for the workflow member capability.
   * Calls `DELETE /api/v1/workflow-members/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_member:delete.
   */
  workflowMemberDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowMemberDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/workflow-members/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the workflow member capability.
   * Calls `GET /api/v1/workflow-members/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_member:read.
   */
  workflowMemberShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowMemberShowGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-members/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the create operation for the workflow member capability.
   * Calls `POST /api/v1/workflow-members/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_member:create.
   */
  workflowMemberCreatePost(id: Identifier, data: T.WorkflowMemberCreatePostInput, options?: RequestOptions<T.WorkflowMemberCreatePostInput>) {
    return this.client.request<T.WorkflowMemberCreatePostResponse, T.WorkflowMemberCreatePostInput>({ ...options, method: "POST", url: `/api/v1/workflow-members/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update operation for the workflow member capability.
   * Calls `PUT /api/v1/workflow-members/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_member:update.
   */
  workflowMemberUpdatePut(id: Identifier, data: T.WorkflowMemberUpdatePutInput, options?: RequestOptions<T.WorkflowMemberUpdatePutInput>) {
    return this.client.request<T.WorkflowMemberUpdatePutResponse, T.WorkflowMemberUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/workflow-members/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the by workflow operation for the workflow member capability.
   * Calls `GET /api/v1/workflow-members/workflow/{workflow_id}` through the shared IDP-aware Faiber client.
   * @param workflowId Backend path identifier `workflow_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_member:read.
   */
  workflowMemberByWorkflowGet(workflowId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowMemberByWorkflowGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-members/workflow/${encodeURIComponent(workflowId)}` });
  }
  /**
   * Performs the index operation for the workflow node capability.
   * Calls `GET /api/v1/workflow-node` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_node:read, workflow_node:read_all, workflow_node:read_own.
   */
  workflowNodeIndexGet(params?: T.WorkflowNodeIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WorkflowNodeIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-node`, params });
  }
  /**
   * Performs the destroy operation for the workflow node capability.
   * Calls `DELETE /api/v1/workflow-node/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_node:delete.
   */
  workflowNodeDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowNodeDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/workflow-node/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the workflow node capability.
   * Calls `GET /api/v1/workflow-node/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_node:read.
   */
  workflowNodeShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowNodeShowGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-node/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the create operation for the workflow node capability.
   * Calls `POST /api/v1/workflow-node/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_node:create.
   */
  workflowNodeCreatePost(id: Identifier, data: T.WorkflowNodeCreatePostInput, options?: RequestOptions<T.WorkflowNodeCreatePostInput>) {
    return this.client.request<T.WorkflowNodeCreatePostResponse, T.WorkflowNodeCreatePostInput>({ ...options, method: "POST", url: `/api/v1/workflow-node/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update operation for the workflow node capability.
   * Calls `PUT /api/v1/workflow-node/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow_node:update.
   */
  workflowNodeUpdatePut(id: Identifier, data: T.WorkflowNodeUpdatePutInput, options?: RequestOptions<T.WorkflowNodeUpdatePutInput>) {
    return this.client.request<T.WorkflowNodeUpdatePutResponse, T.WorkflowNodeUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/workflow-node/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the destroy operation for the workflow capability.
   * Calls `DELETE /api/v1/workflow/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow:delete.
   */
  workflowDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/workflow/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the workflow capability.
   * Calls `GET /api/v1/workflow/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow:read, workflow:read_all, workflow:read_own.
   */
  workflowShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowShowGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the workflow capability.
   * Calls `PUT /api/v1/workflow/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow:update.
   */
  workflowUpdatePut(id: Identifier, data: T.WorkflowUpdatePutInput, options?: RequestOptions<T.WorkflowUpdatePutInput>) {
    return this.client.request<T.WorkflowUpdatePutResponse, T.WorkflowUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/workflow/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the member based operation for the workflow capability.
   * Calls `GET /api/v1/workflow/member-based` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: workflow:read, workflow:read_all, workflow:read_own.
   */
  workflowMemberBasedGet(options?: RequestOptions) {
    return this.client.request<T.WorkflowMemberBasedGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow/member-based` });
  }
  /**
   * Performs the index operation for the worklog capability.
   * Calls `GET /api/v1/worklog` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: worklog:read, worklog:read_all, worklog:read_own.
   */
  worklogIndexGet(params?: T.WorklogIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WorklogIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/worklog`, params });
  }
  /**
   * Performs the create operation for the worklog capability.
   * Calls `POST /api/v1/worklog` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: worklog:create.
   */
  worklogCreatePost(data: T.WorklogCreatePostInput, options?: RequestOptions<T.WorklogCreatePostInput>) {
    return this.client.request<T.WorklogCreatePostResponse, T.WorklogCreatePostInput>({ ...options, method: "POST", url: `/api/v1/worklog`, data: data });
  }
  /**
   * Performs the destroy operation for the worklog capability.
   * Calls `DELETE /api/v1/worklog/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: worklog:delete.
   */
  worklogDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorklogDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/worklog/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the worklog capability.
   * Calls `GET /api/v1/worklog/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: worklog:read, worklog:read_all, worklog:read_own.
   */
  worklogShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorklogShowGetResponse>({ ...options, method: "GET", url: `/api/v1/worklog/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the worklog capability.
   * Calls `PUT /api/v1/worklog/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: worklog:update.
   */
  worklogUpdatePut(id: Identifier, data: T.WorklogUpdatePutInput, options?: RequestOptions<T.WorklogUpdatePutInput>) {
    return this.client.request<T.WorklogUpdatePutResponse, T.WorklogUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/worklog/${encodeURIComponent(id)}`, data: data });
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

