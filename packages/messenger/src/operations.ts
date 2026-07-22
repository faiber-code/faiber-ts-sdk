import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class MessengerOperations extends ServiceApi {
  /** GET /api/openapi.json; permission: public/session-derived. */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /** GET /api/v1/channels; permission: admin:channel:read. */
  channelChannelsIndexGet(options?: RequestOptions) {
    return this.client.request<T.ChannelChannelsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/channels` });
  }
  /** POST /api/v1/channels; permission: admin:channel:create. */
  channelChannelsCreatePost(data: T.ChannelChannelsCreatePostInput, options?: RequestOptions<T.ChannelChannelsCreatePostInput>) {
    return this.client.request<T.ChannelChannelsCreatePostResponse, T.ChannelChannelsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/channels`, data: data });
  }
  /** DELETE /api/v1/channels/{id}; permission: admin:channel:delete. */
  channelChannelsDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ChannelChannelsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/channels/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/channels/{id}; permission: admin:channel:read. */
  channelChannelsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ChannelChannelsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/channels/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/channels/{id}; permission: admin:channel:update. */
  channelChannelsUpdatePatch(id: Identifier, data: T.ChannelChannelsUpdatePatchInput, options?: RequestOptions<T.ChannelChannelsUpdatePatchInput>) {
    return this.client.request<T.ChannelChannelsUpdatePatchResponse, T.ChannelChannelsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/channels/${encodeURIComponent(id)}`, data: data });
  }
  /** POST /api/v1/channels/subscribe; permission: public/session-derived. */
  channelChannelsSubscribePost(data: T.ChannelChannelsSubscribePostInput, options?: RequestOptions<T.ChannelChannelsSubscribePostInput>) {
    return this.client.request<T.ChannelChannelsSubscribePostResponse, T.ChannelChannelsSubscribePostInput>({ ...options, method: "POST", url: `/api/v1/channels/subscribe`, data: data });
  }
  /** GET /api/v1/dashboard; permission: admin:dashboard:read. */
  dashboardDashboardShowGet(options?: RequestOptions) {
    return this.client.request<T.DashboardDashboardShowGetResponse>({ ...options, method: "GET", url: `/api/v1/dashboard` });
  }
  /** GET /api/v1/integration/docs; permission: admin:integration:read. */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /** GET /api/v1/integration/flow; permission: public/session-derived. */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /** GET /api/v1/integration/rabbitmq; permission: admin:integration:read. */
  integrationRabbitmqIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationRabbitmqIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/rabbitmq` });
  }
  /** GET /api/v1/notifications; permission: admin:notification:read. */
  notificationNotificationsIndexGet(params?: T.NotificationNotificationsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/notifications`, params });
  }
  /** POST /api/v1/notifications; permission: public/session-derived. */
  notificationNotificationsSendPost(data: T.NotificationNotificationsSendPostInput, options?: RequestOptions<T.NotificationNotificationsSendPostInput>) {
    return this.client.request<T.NotificationNotificationsSendPostResponse, T.NotificationNotificationsSendPostInput>({ ...options, method: "POST", url: `/api/v1/notifications`, data: data });
  }
  /** GET /api/v1/notifications/{id}; permission: admin:notification:read. */
  notificationNotificationsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/notifications/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/notifications/{id}/read; permission: admin:notification:read. */
  notificationNotificationsMarkReadPatch(id: Identifier, params?: T.NotificationNotificationsMarkReadPatchQuery, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsMarkReadPatchResponse>({ ...options, method: "PATCH", url: `/api/v1/notifications/${encodeURIComponent(id)}/read`, params });
  }
  /** GET /api/v1/services; permission: admin:service:read. */
  serviceServicesIndexGet(options?: RequestOptions) {
    return this.client.request<T.ServiceServicesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/services` });
  }
  /** POST /api/v1/services; permission: admin:service:create. */
  serviceServicesCreatePost(data: T.ServiceServicesCreatePostInput, options?: RequestOptions<T.ServiceServicesCreatePostInput>) {
    return this.client.request<T.ServiceServicesCreatePostResponse, T.ServiceServicesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/services`, data: data });
  }
  /** DELETE /api/v1/services/{id}; permission: admin:service:delete. */
  serviceServicesDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceServicesDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/services/{id}; permission: admin:service:read. */
  serviceServicesShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceServicesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/services/{id}; permission: admin:service:update. */
  serviceServicesUpdatePatch(id: Identifier, data: T.ServiceServicesUpdatePatchInput, options?: RequestOptions<T.ServiceServicesUpdatePatchInput>) {
    return this.client.request<T.ServiceServicesUpdatePatchResponse, T.ServiceServicesUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/services/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/templates; permission: admin:template:read. */
  templateTemplatesIndexGet(options?: RequestOptions) {
    return this.client.request<T.TemplateTemplatesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/templates` });
  }
  /** POST /api/v1/templates; permission: admin:template:create. */
  templateTemplatesCreatePost(data: T.TemplateTemplatesCreatePostInput, options?: RequestOptions<T.TemplateTemplatesCreatePostInput>) {
    return this.client.request<T.TemplateTemplatesCreatePostResponse, T.TemplateTemplatesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/templates`, data: data });
  }
  /** DELETE /api/v1/templates/{id}; permission: admin:template:delete. */
  templateTemplatesDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TemplateTemplatesDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/templates/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/templates/{id}; permission: admin:template:read. */
  templateTemplatesShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TemplateTemplatesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/templates/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/templates/{id}; permission: admin:template:update. */
  templateTemplatesUpdatePatch(id: Identifier, data: T.TemplateTemplatesUpdatePatchInput, options?: RequestOptions<T.TemplateTemplatesUpdatePatchInput>) {
    return this.client.request<T.TemplateTemplatesUpdatePatchResponse, T.TemplateTemplatesUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/templates/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/templates/{id}/contents; permission: admin:template:read. */
  templateTemplateContentsIndexGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TemplateTemplateContentsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/templates/${encodeURIComponent(id)}/contents` });
  }
  /** POST /api/v1/templates/{id}/contents; permission: admin:template:create_content. */
  templateTemplateContentsCreatePost(id: Identifier, data: T.TemplateTemplateContentsCreatePostInput, options?: RequestOptions<T.TemplateTemplateContentsCreatePostInput>) {
    return this.client.request<T.TemplateTemplateContentsCreatePostResponse, T.TemplateTemplateContentsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/templates/${encodeURIComponent(id)}/contents`, data: data });
  }
  /** PATCH /api/v1/templates/contents/{content_id}; permission: admin:template:update_content. */
  templateTemplateContentsUpdatePatch(contentId: Identifier, data: T.TemplateTemplateContentsUpdatePatchInput, options?: RequestOptions<T.TemplateTemplateContentsUpdatePatchInput>) {
    return this.client.request<T.TemplateTemplateContentsUpdatePatchResponse, T.TemplateTemplateContentsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/templates/contents/${encodeURIComponent(contentId)}`, data: data });
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

