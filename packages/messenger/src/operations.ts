import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class MessengerOperations extends ServiceApi {
  /**
   * Read the raw Utoipa OpenAPI object (HTTP 200, no API envelope). The annotation list omits mounted operations; use the SDK operation inventory for complete coverage.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Public handler (global IDP context extraction still applies).
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * List non-deleted numeric channel groupings without pagination; each item has id and name.
   * Calls `GET /api/v1/channels` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:channel:read.
   */
  channelChannelsIndexGet(options?: RequestOptions) {
    return this.client.request<T.ChannelChannelsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/channels` });
  }
  /**
   * Create a channel grouping using trimmed nonempty name; blank names return 400. Returns HTTP 200.
   * Calls `POST /api/v1/channels` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:channel:create.
   */
  channelChannelsCreatePost(data: T.ChannelChannelsCreatePostInput, options?: RequestOptions<T.ChannelChannelsCreatePostInput>) {
    return this.client.request<T.ChannelChannelsCreatePostResponse, T.ChannelChannelsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/channels`, data: data });
  }
  /**
   * Soft-delete a channel grouping; missing/already-deleted IDs return 404. Returns HTTP 200 with data {}.
   * Calls `DELETE /api/v1/channels/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:channel:delete.
   */
  channelChannelsDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ChannelChannelsDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/channels/${encodeURIComponent(id)}` });
  }
  /**
   * Read a non-deleted numeric channel grouping; missing IDs return 404.
   * Calls `GET /api/v1/channels/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:channel:read.
   */
  channelChannelsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ChannelChannelsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/channels/${encodeURIComponent(id)}` });
  }
  /**
   * Replace the required trimmed channel name; blank names return 400 and missing/deleted IDs return 404. Returns HTTP 200.
   * Calls `PATCH /api/v1/channels/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:channel:update.
   */
  channelChannelsUpdatePatch(id: Identifier, data: T.ChannelChannelsUpdatePatchInput, options?: RequestOptions<T.ChannelChannelsUpdatePatchInput>) {
    return this.client.request<T.ChannelChannelsUpdatePatchResponse, T.ChannelChannelsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/channels/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Insert or update subscribed for the explicit numeric channel_id and user_id. This service route has no IDP permission macro or actor-ownership check; gateway authority must restrict callers. Returns data {} (HTTP 200).
   * Calls `POST /api/v1/channels/subscribe` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No handler permission macro; ingress authentication/authorization remains deployment-defined.
   */
  channelChannelsSubscribePost(data: T.ChannelChannelsSubscribePostInput, options?: RequestOptions<T.ChannelChannelsSubscribePostInput>) {
    return this.client.request<T.ChannelChannelsSubscribePostResponse, T.ChannelChannelsSubscribePostInput>({ ...options, method: "POST", url: `/api/v1/channels/subscribe`, data: data });
  }
  /**
   * Read inventory counts named templates, notifications, channels, services and providers; not delivery success metrics.
   * Calls `GET /api/v1/dashboard` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:dashboard:read.
   */
  dashboardDashboardShowGet(options?: RequestOptions) {
    return this.client.request<T.DashboardDashboardShowGetResponse>({ ...options, method: "GET", url: `/api/v1/dashboard` });
  }
  /**
   * Read direct integration fields and SDK language snippets in an API envelope. Optional direct fields are omitted when absent.
   * Calls `GET /api/v1/integration/docs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:integration:read.
   */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /**
   * Read queue/events Flow integration metadata in an API envelope; handler has no permission macro. Concrete response comes from the selected Cargo.lock Flow SDK revision.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No handler permission macro; ingress authentication/authorization remains deployment-defined.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Read RabbitMQ queue/event metadata in an API envelope; sample profile ID is illustrative and broker_url_hint is not a configured credential.
   * Calls `GET /api/v1/integration/rabbitmq` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:integration:read.
   */
  integrationRabbitmqIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationRabbitmqIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/rabbitmq` });
  }
  /**
   * Page non-deleted administrative records including provider diagnostics, ordered updated_at then id descending. Optional trimmed recipient filters exactly; blank recipient is ignored. Literal page[number]/page[size] default to 1/20 and clamp size to 1..100.
   * Calls `GET /api/v1/notifications` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:notification:read.
   */
  notificationNotificationsIndexGet(params?: T.NotificationNotificationsIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/notifications`, params });
  }
  /**
   * Queue by template_id or template_name and validated native channel; nonempty recipients supersedes recipient and empty recipients is 400. Returns HTTP 200 data.notification_ids. options.correlation_id enables update/reuse; scheduled_at schedules dispatch. This service route has no IDP permission macro or actor-ownership check; gateway authority must restrict callers.
   * Calls `POST /api/v1/notifications` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No handler permission macro; ingress authentication/authorization remains deployment-defined.
   */
  notificationNotificationsSendPost(data: T.NotificationNotificationsSendPostInput, options?: RequestOptions<T.NotificationNotificationsSendPostInput>) {
    return this.client.request<T.NotificationNotificationsSendPostResponse, T.NotificationNotificationsSendPostInput>({ ...options, method: "POST", url: `/api/v1/notifications`, data: data });
  }
  /**
   * Read an administrative notification including provider diagnostics; missing/deleted notification or missing template returns 404.
   * Calls `GET /api/v1/notifications/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:notification:read.
   */
  notificationNotificationsShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/notifications/${encodeURIComponent(id)}` });
  }
  /**
   * Mark a non-deleted administrative record read; optional nonblank trimmed recipient constrains ownership. Missing/constrained IDs return 404. HTTP 200 includes the administrative record.
   * Calls `PATCH /api/v1/notifications/{id}/read` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:notification:read.
   */
  notificationNotificationsMarkReadPatch(id: Identifier, params?: T.NotificationNotificationsMarkReadPatchQuery, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsMarkReadPatchResponse>({ ...options, method: "PATCH", url: `/api/v1/notifications/${encodeURIComponent(id)}/read`, params });
  }
  /**
   * Page current non-nil actor recipient records using literal page[number]/page[size], default 1/20 and size clamp 1..100; ordered updated_at/id descending. Recipient DTO excludes routing/provider diagnostics; description is body copy. Unauthenticated actor is 401, missing self-read permission is 403.
   * Calls `GET /api/v1/notifications/me` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases).
   */
  notificationNotificationsMyInboxGet(params?: T.NotificationNotificationsMyInboxGetQuery, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsMyInboxGetResponse>({ ...options, method: "GET", url: `/api/v1/notifications/me`, params });
  }
  /**
   * Mark one current actor notification read and return recipient-safe copy. Requires non-nil actor and self-read permission; missing/other-recipient/deleted record is 404.
   * Calls `PATCH /api/v1/notifications/me/{id}/read` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases).
   */
  notificationNotificationsMyMarkReadPatch(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsMyMarkReadPatchResponse>({ ...options, method: "PATCH", url: `/api/v1/notifications/me/${encodeURIComponent(id)}/read` });
  }
  /**
   * Poll current non-nil actor durable recipient events, up to 100 per page. Omit cursor to capture current head before inbox snapshot; negative cursor is 400 and expired/future cursor is 410 requiring resync. wait_seconds defaults/maxes at 25. Payloads are recipient-safe and include cursor/event_id; provider acceptance is not delivery proof.
   * Calls `GET /api/v1/notifications/me/events` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases).
   */
  inboxStreamEventsGet(params?: T.InboxStreamEventsGetQuery, options?: RequestOptions) {
    return this.client.request<T.InboxStreamEventsGetResponse>({ timeout: 35000, ...options, method: "GET", url: `/api/v1/notifications/me/events`, params });
  }
  /**
   * Mark current non-nil actor unread/non-deleted inbox records read and return updated count; recipient is derived from auth, never a query argument.
   * Calls `PATCH /api/v1/notifications/me/read-all` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases).
   */
  notificationNotificationsMyMarkAllReadPatch(options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsMyMarkAllReadPatchResponse>({ ...options, method: "PATCH", url: `/api/v1/notifications/me/read-all` });
  }
  /**
   * Count current non-nil actor unread non-deleted notifications; independent from chat unread count. Returns HTTP 200; storage unavailable is 503.
   * Calls `GET /api/v1/notifications/me/unread-count` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases).
   */
  inboxStreamUnreadGet(options?: RequestOptions) {
    return this.client.request<T.InboxStreamUnreadGetResponse>({ ...options, method: "GET", url: `/api/v1/notifications/me/unread-count` });
  }
  /**
   * Mark all unread non-deleted records for required trimmed recipient read and return updated count (HTTP 200). Missing query rejects with 400; blank recipient returns 400.
   * Calls `PATCH /api/v1/notifications/read-all` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:notification:read.
   */
  notificationNotificationsMarkAllReadPatch(params: T.NotificationNotificationsMarkAllReadPatchQuery, options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsMarkAllReadPatchResponse>({ ...options, method: "PATCH", url: `/api/v1/notifications/read-all`, params });
  }
  /**
   * Sign only the current non-nil actor private channel using socket_id and channel_name; wrong channel is 403 and unavailable broker configuration is 503. Returns raw {auth} (HTTP 200), no API envelope.
   * Calls `POST /api/v1/notifications/realtime/auth` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases).
   */
  notificationNotificationsRealtimeAuthPost(data: T.NotificationNotificationsRealtimeAuthPostInput, options?: RequestOptions<T.NotificationNotificationsRealtimeAuthPostInput>) {
    return this.client.request<T.NotificationNotificationsRealtimeAuthPostResponse, T.NotificationNotificationsRealtimeAuthPostInput>({ ...options, method: "POST", url: `/api/v1/notifications/realtime/auth`, data: data });
  }
  /**
   * Read current non-nil actor websocket URL, app key, private channel and PrivateMessageEvent name. Missing realtime configuration is 503. Reload persisted inbox records after reconnect.
   * Calls `GET /api/v1/notifications/realtime/config` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases).
   */
  notificationNotificationsRealtimeConfigGet(options?: RequestOptions) {
    return this.client.request<T.NotificationNotificationsRealtimeConfigGetResponse>({ ...options, method: "GET", url: `/api/v1/notifications/realtime/config` });
  }
  /**
   * Register an authenticated mobile installation UUID for an approved application; platform android/ios, token length 20..4096, locale length <=32. Unknown fields reject; invalid values are 400, per-user/application limit 10 or conflict is 409. Reusing a token/installation can transfer registration after account switch. Returns HTTP 200 id.
   * Calls `POST /api/v1/push/devices` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read.
   */
  mobilePushRegisterPost(data: T.MobilePushRegisterPostInput, options?: RequestOptions<T.MobilePushRegisterPostInput>) {
    return this.client.request<T.MobilePushRegisterPostResponse, T.MobilePushRegisterPostInput>({ ...options, method: "POST", url: `/api/v1/push/devices`, data: data });
  }
  /**
   * Delete an owned mobile installation UUID. Idempotently returns HTTP 200 data.revoked=true even if ID is missing or belongs to another user; storage unavailable is 503.
   * Calls `DELETE /api/v1/push/devices/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read.
   */
  mobilePushRevokeDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.MobilePushRevokeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/push/devices/${encodeURIComponent(id)}` });
  }
  /**
   * List provider services without pagination. options is always null; encrypted credentials are never read back. Does not invoke provider network calls.
   * Calls `GET /api/v1/services` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:service:read.
   */
  serviceServicesIndexGet(options?: RequestOptions) {
    return this.client.request<T.ServiceServicesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/services` });
  }
  /**
   * Create provider service with encrypted dynamic JSON options and default i16 priority 0. Invalid native channel/provider is 400. Returns HTTP 200 with options null.
   * Calls `POST /api/v1/services` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:service:create.
   */
  serviceServicesCreatePost(data: T.ServiceServicesCreatePostInput, options?: RequestOptions<T.ServiceServicesCreatePostInput>) {
    return this.client.request<T.ServiceServicesCreatePostResponse, T.ServiceServicesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/services`, data: data });
  }
  /**
   * Hard-delete a provider service by numeric ID. Missing IDs succeed; returns HTTP 200 with data {}.
   * Calls `DELETE /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:service:delete.
   */
  serviceServicesDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceServicesDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /**
   * Read numeric provider service with options always null; missing ID is 404. Does not invoke provider network calls.
   * Calls `GET /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:service:read.
   */
  serviceServicesShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ServiceServicesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /**
   * Patch provider service. Omitted/null fields preserve; options is encrypted when non-null, and readback is always null. Invalid provider is 400; invalid channel falls back to existing. Missing ID is 404. Returns HTTP 200.
   * Calls `PATCH /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:service:update.
   */
  serviceServicesUpdatePatch(id: Identifier, data: T.ServiceServicesUpdatePatchInput, options?: RequestOptions<T.ServiceServicesUpdatePatchInput>) {
    return this.client.request<T.ServiceServicesUpdatePatchResponse, T.ServiceServicesUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/services/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Inspect provider setup and return configured/providerVerified per channel/provider with checkedAt. May contact SMTP and Ghasedak account/template APIs, without sending notifications. Provider enum labels in this report use Rust variant casing; HTTP 200 is not evidence every provider is verified.
   * Calls `POST /api/v1/services/setup-check` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:service:read.
   */
  serviceSetupCheckPost(options?: RequestOptions) {
    return this.client.request<T.ServiceSetupCheckPostResponse>({ ...options, method: "POST", url: `/api/v1/services/setup-check` });
  }
  /**
   * Server-only OTP readiness using x-website-otp-token header; token must be configured with >=32 characters. Missing configuration is 503, wrong token 401. May contact Ghasedak read APIs; sends no messages. Returns raw {ready}, no envelope.
   * Calls `POST /api/v1/services/website-otp-readiness` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Server-only x-website-otp-token header; empty IDP permission macro.
   */
  serviceReadinessPost(options?: RequestOptions) {
    return this.client.request<T.ServiceReadinessPostResponse>({ ...options, method: "POST", url: `/api/v1/services/website-otp-readiness` });
  }
  /**
   * List non-deleted templates without pagination; params is persisted dynamic JSON and channel_id is nullable.
   * Calls `GET /api/v1/templates` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:template:read.
   */
  templateTemplatesIndexGet(options?: RequestOptions) {
    return this.client.request<T.TemplateTemplatesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/templates` });
  }
  /**
   * Create template name/fa_name with optional parameter names (default []) and nullable numeric grouping channel_id; returns HTTP 200.
   * Calls `POST /api/v1/templates` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:template:create.
   */
  templateTemplatesCreatePost(data: T.TemplateTemplatesCreatePostInput, options?: RequestOptions<T.TemplateTemplatesCreatePostInput>) {
    return this.client.request<T.TemplateTemplatesCreatePostResponse, T.TemplateTemplatesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/templates`, data: data });
  }
  /**
   * Soft-delete a template; missing/deleted IDs are 404. Returns HTTP 200 with data {}.
   * Calls `DELETE /api/v1/templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:template:delete.
   */
  templateTemplatesDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TemplateTemplatesDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/templates/${encodeURIComponent(id)}` });
  }
  /**
   * Read a non-deleted numeric template; missing/deleted IDs are 404.
   * Calls `GET /api/v1/templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:template:read.
   */
  templateTemplatesShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TemplateTemplatesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/templates/${encodeURIComponent(id)}` });
  }
  /**
   * Patch template; omitted/null name/fa_name/params preserves, while explicit channel_id null clears and omission preserves. Missing/deleted ID is 404; HTTP 200.
   * Calls `PATCH /api/v1/templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:template:update.
   */
  templateTemplatesUpdatePatch(id: Identifier, data: T.TemplateTemplatesUpdatePatchInput, options?: RequestOptions<T.TemplateTemplatesUpdatePatchInput>) {
    return this.client.request<T.TemplateTemplatesUpdatePatchResponse, T.TemplateTemplatesUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/templates/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List non-deleted template contents for numeric template ID without pagination; absent parent may return an empty array.
   * Calls `GET /api/v1/templates/{id}/contents` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:template:read.
   */
  templateTemplateContentsIndexGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TemplateTemplateContentsIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/templates/${encodeURIComponent(id)}/contents` });
  }
  /**
   * Create channel-specific text/options for numeric template ID; invalid native channel is 400. Returns HTTP 200; foreign-key violations surface as insert errors.
   * Calls `POST /api/v1/templates/{id}/contents` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:template:create_content.
   */
  templateTemplateContentsCreatePost(id: Identifier, data: T.TemplateTemplateContentsCreatePostInput, options?: RequestOptions<T.TemplateTemplateContentsCreatePostInput>) {
    return this.client.request<T.TemplateTemplateContentsCreatePostResponse, T.TemplateTemplateContentsCreatePostInput>({ ...options, method: "POST", url: `/api/v1/templates/${encodeURIComponent(id)}/contents`, data: data });
  }
  /**
   * Patch text/options for numeric content_id. Null/omission preserves; channel cannot change. Missing/deleted content is 404; returns HTTP 200.
   * Calls `PATCH /api/v1/templates/contents/{content_id}` through the shared IDP-aware Faiber client.
   * @param contentId Backend path identifier `content_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; admin:template:update_content.
   */
  templateTemplateContentsUpdatePatch(contentId: Identifier, data: T.TemplateTemplateContentsUpdatePatchInput, options?: RequestOptions<T.TemplateTemplateContentsUpdatePatchInput>) {
    return this.client.request<T.TemplateTemplateContentsUpdatePatchResponse, T.TemplateTemplateContentsUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/templates/contents/${encodeURIComponent(contentId)}`, data: data });
  }
  /**
   * Read authenticated Web Push availability and public key. Missing/invalid VAPID configuration returns enabled=false/public_key=null (HTTP 200).
   * Calls `GET /api/v1/web-push/config` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read.
   */
  webPushConfigGet(options?: RequestOptions) {
    return this.client.request<T.WebPushConfigGetResponse>({ ...options, method: "GET", url: `/api/v1/web-push/config` });
  }
  /**
   * Read an owned Web Push delivery UUID status and nullable provider_status. Missing/other-user ID is 404; storage unavailable is 503. Provider status does not prove display or reading.
   * Calls `GET /api/v1/web-push/deliveries/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read.
   */
  webPushDeliveryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WebPushDeliveryGetResponse>({ ...options, method: "GET", url: `/api/v1/web-push/deliveries/${encodeURIComponent(id)}` });
  }
  /**
   * Register an authenticated browser subscription; application_id defaults to default, locale defaults to fa unless exactly en. Endpoint must be an approved HTTPS 443 FCM/Mozilla/Apple host and keys valid URL-safe unpadded base64. Invalid subscription is 400, limit10 or endpoint owned by another actor is 409, unavailable VAPID/storage is 503. Returns HTTP 200 id.
   * Calls `POST /api/v1/web-push/subscriptions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read.
   */
  webPushSubscribePost(data: T.WebPushSubscribePostInput, options?: RequestOptions<T.WebPushSubscribePostInput>) {
    return this.client.request<T.WebPushSubscribePostResponse, T.WebPushSubscribePostInput>({ ...options, method: "POST", url: `/api/v1/web-push/subscriptions`, data: data });
  }
  /**
   * Remove an owned browser subscription UUID. Idempotently returns HTTP 200 data.removed=true even for missing/other-user IDs; storage unavailable is 503.
   * Calls `DELETE /api/v1/web-push/subscriptions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read.
   */
  webPushUnsubscribeDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WebPushUnsubscribeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/web-push/subscriptions/${encodeURIComponent(id)}` });
  }
  /**
   * Queue an actual test push to the current actor subscription UUID (HTTP 200 pending). Missing/other-user ID is 404, repeat within one minute is 429, missing configuration/storage is 503. Provider acceptance does not prove browser display.
   * Calls `POST /api/v1/web-push/subscriptions/{id}/test` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP context; notification:self:read.
   */
  webPushTestPushPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WebPushTestPushPostResponse>({ ...options, method: "POST", url: `/api/v1/web-push/subscriptions/${encodeURIComponent(id)}/test` });
  }
  /**
   * Read process version in status/message/data (HTTP 200); this does not check database or broker readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Public handler (global IDP context extraction still applies).
   */
  routerStatusRouteGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Read process version in status/message/data (HTTP 200); this does not check database or broker readiness.
   * Calls `GET /up` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Public handler (global IDP context extraction still applies).
   */
  routerStatusRouteGetUp(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetUpResponse>({ ...options, method: "GET", url: `/up` });
  }
}
