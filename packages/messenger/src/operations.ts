import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class MessengerOperations extends ServiceApi {
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
   * Performs the channels index operation for the channel capability.
   * Calls `GET /api/v1/channels` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:channel:read.
   */
  channelChannelsIndexGet(options?: RequestOptions) {
    return this.client.request<T.ChannelChannelsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/channels` });
  }
  /**
   * Performs the channels create operation for the channel capability.
   * Calls `POST /api/v1/channels` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:channel:create.
   */
  channelChannelsCreatePost(data: T.ChannelChannelsCreatePostInput, options?: RequestOptions<T.ChannelChannelsCreatePostInput>) {
    return this.client.request<T.ChannelChannelsCreatePostResponse, T.ChannelChannelsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/channels`, data: data });
  }
  /**
   * Performs the channels delete operation for the channel capability.
   * Calls `DELETE /api/v1/channels/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:channel:delete.
   */
  channelChannelsDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ChannelChannelsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/channels/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the channels show operation for the channel capability.
   * Calls `GET /api/v1/channels/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:channel:read.
   */
  channelChannelsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ChannelChannelsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/channels/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the channels update operation for the channel capability.
   * Calls `PATCH /api/v1/channels/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:channel:update.
   */
  channelChannelsUpdatePatch(id: Identifier, data: T.ChannelChannelsUpdatePatchInput, options?: RequestOptions<T.ChannelChannelsUpdatePatchInput>) {
    return this.client.request<T.ChannelChannelsUpdatePatchResponse, T.ChannelChannelsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/channels/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the channels subscribe operation for the channel capability.
   * Calls `POST /api/v1/channels/subscribe` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  channelChannelsSubscribePost(data: T.ChannelChannelsSubscribePostInput, options?: RequestOptions<T.ChannelChannelsSubscribePostInput>) {
    return this.client.request<T.ChannelChannelsSubscribePostResponse, T.ChannelChannelsSubscribePostInput>({ ...options, method: "POST", url: `/api/v1/channels/subscribe`, data: data });
  }
  /**
   * Performs the dashboard show operation for the dashboard capability.
   * Calls `GET /api/v1/dashboard` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:dashboard:read.
   */
  dashboardDashboardShowGet(options?: RequestOptions) {
    return this.client.request<T.DashboardDashboardShowGetResponse>({ ...options, method: "GET", url: `/api/v1/dashboard` });
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
   * Performs the rabbitmq integration show operation for the integration capability.
   * Calls `GET /api/v1/integration/rabbitmq` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:integration:read.
   */
  integrationRabbitmqIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationRabbitmqIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/rabbitmq` });
  }
  /**
   * Performs the notifications index operation for the notification capability.
   * Calls `GET /api/v1/notifications` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:notification:read.
   */
  notificationNotificationsIndexGet(params?: T.NotificationNotificationsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/notifications`, params });
  }
  /**
   * Performs the notifications send operation for the notification capability.
   * Calls `POST /api/v1/notifications` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  notificationNotificationsSendPost(data: T.NotificationNotificationsSendPostInput, options?: RequestOptions<T.NotificationNotificationsSendPostInput>) {
    return this.client.request<T.NotificationNotificationsSendPostResponse, T.NotificationNotificationsSendPostInput>({ ...options, method: "POST", url: `/api/v1/notifications`, data: data });
  }
  /**
   * Performs the notifications show operation for the notification capability.
   * Calls `GET /api/v1/notifications/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:notification:read.
   */
  notificationNotificationsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/notifications/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the notifications mark read operation for the notification capability.
   * Calls `PATCH /api/v1/notifications/{id}/read` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:notification:read.
   */
  notificationNotificationsMarkReadPatch(id: Identifier, params?: T.NotificationNotificationsMarkReadPatchQuery, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsMarkReadPatchResponse>({ ...options, method: "PATCH", url: `/api/v1/notifications/${encodeURIComponent(id)}/read`, params });
  }
  /**
   * Performs the services index operation for the service capability.
   * Calls `GET /api/v1/services` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:service:read.
   */
  serviceServicesIndexGet(options?: RequestOptions) {
    return this.client.request<T.ServiceServicesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/services` });
  }
  /**
   * Performs the services create operation for the service capability.
   * Calls `POST /api/v1/services` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:service:create.
   */
  serviceServicesCreatePost(data: T.ServiceServicesCreatePostInput, options?: RequestOptions<T.ServiceServicesCreatePostInput>) {
    return this.client.request<T.ServiceServicesCreatePostResponse, T.ServiceServicesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/services`, data: data });
  }
  /**
   * Performs the services delete operation for the service capability.
   * Calls `DELETE /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:service:delete.
   */
  serviceServicesDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceServicesDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the services show operation for the service capability.
   * Calls `GET /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:service:read.
   */
  serviceServicesShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceServicesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the services update operation for the service capability.
   * Calls `PATCH /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:service:update.
   */
  serviceServicesUpdatePatch(id: Identifier, data: T.ServiceServicesUpdatePatchInput, options?: RequestOptions<T.ServiceServicesUpdatePatchInput>) {
    return this.client.request<T.ServiceServicesUpdatePatchResponse, T.ServiceServicesUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/services/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the templates index operation for the template capability.
   * Calls `GET /api/v1/templates` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:template:read.
   */
  templateTemplatesIndexGet(options?: RequestOptions) {
    return this.client.request<T.TemplateTemplatesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/templates` });
  }
  /**
   * Performs the templates create operation for the template capability.
   * Calls `POST /api/v1/templates` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:template:create.
   */
  templateTemplatesCreatePost(data: T.TemplateTemplatesCreatePostInput, options?: RequestOptions<T.TemplateTemplatesCreatePostInput>) {
    return this.client.request<T.TemplateTemplatesCreatePostResponse, T.TemplateTemplatesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/templates`, data: data });
  }
  /**
   * Performs the templates delete operation for the template capability.
   * Calls `DELETE /api/v1/templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:template:delete.
   */
  templateTemplatesDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TemplateTemplatesDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/templates/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the templates show operation for the template capability.
   * Calls `GET /api/v1/templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:template:read.
   */
  templateTemplatesShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TemplateTemplatesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/templates/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the templates update operation for the template capability.
   * Calls `PATCH /api/v1/templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:template:update.
   */
  templateTemplatesUpdatePatch(id: Identifier, data: T.TemplateTemplatesUpdatePatchInput, options?: RequestOptions<T.TemplateTemplatesUpdatePatchInput>) {
    return this.client.request<T.TemplateTemplatesUpdatePatchResponse, T.TemplateTemplatesUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/templates/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the template contents index operation for the template capability.
   * Calls `GET /api/v1/templates/{id}/contents` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:template:read.
   */
  templateTemplateContentsIndexGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TemplateTemplateContentsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/templates/${encodeURIComponent(id)}/contents` });
  }
  /**
   * Performs the template contents create operation for the template capability.
   * Calls `POST /api/v1/templates/{id}/contents` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:template:create_content.
   */
  templateTemplateContentsCreatePost(id: Identifier, data: T.TemplateTemplateContentsCreatePostInput, options?: RequestOptions<T.TemplateTemplateContentsCreatePostInput>) {
    return this.client.request<T.TemplateTemplateContentsCreatePostResponse, T.TemplateTemplateContentsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/templates/${encodeURIComponent(id)}/contents`, data: data });
  }
  /**
   * Performs the template contents update operation for the template capability.
   * Calls `PATCH /api/v1/templates/contents/{content_id}` through the shared IDP-aware Faiber client.
   * @param contentId Backend path identifier `content_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:template:update_content.
   */
  templateTemplateContentsUpdatePatch(contentId: Identifier, data: T.TemplateTemplateContentsUpdatePatchInput, options?: RequestOptions<T.TemplateTemplateContentsUpdatePatchInput>) {
    return this.client.request<T.TemplateTemplateContentsUpdatePatchResponse, T.TemplateTemplateContentsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/templates/contents/${encodeURIComponent(contentId)}`, data: data });
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

