// Direct immutable Messenger handler/model/repository review; native acceptance pending.
export const messengerReviewedOperationContracts = {
  "messenger:GET /health": {
    "response": "import(\"./types.js\").MessengerHealthResponse",
    "purpose": "Read process version in status/message/data (HTTP 200); this does not check database or broker readiness.",
    "auth": "Public handler (global IDP context extraction still applies)"
  },
  "messenger:GET /up": {
    "response": "import(\"./types.js\").MessengerHealthResponse",
    "purpose": "Read process version in status/message/data (HTTP 200); this does not check database or broker readiness.",
    "auth": "Public handler (global IDP context extraction still applies)"
  },
  "messenger:GET /api/openapi.json": {
    "response": "import(\"@faiber/sdk-core\").ServiceOpenApiDocument",
    "purpose": "Read the raw Utoipa OpenAPI object (HTTP 200, no API envelope). The annotation list omits mounted operations; use the SDK operation inventory for complete coverage.",
    "auth": "Public handler (global IDP context extraction still applies)"
  },
  "messenger:GET /api/v1/templates": {
    "response": "import(\"./types.js\").TemplateListResponse",
    "purpose": "List non-deleted templates without pagination; params is persisted dynamic JSON and channel_id is nullable.",
    "auth": "Authenticated IDP context; admin:template:read"
  },
  "messenger:POST /api/v1/templates": {
    "response": "import(\"./types.js\").TemplateResponse",
    "purpose": "Create template name/fa_name with optional parameter names (default []) and nullable numeric grouping channel_id; returns HTTP 200.",
    "input": "import(\"./types.js\").CreateMessageTemplateInput",
    "auth": "Authenticated IDP context; admin:template:create"
  },
  "messenger:GET /api/v1/templates/{id}": {
    "response": "import(\"./types.js\").TemplateResponse",
    "purpose": "Read a non-deleted numeric template; missing/deleted IDs are 404.",
    "auth": "Authenticated IDP context; admin:template:read"
  },
  "messenger:PATCH /api/v1/templates/{id}": {
    "response": "import(\"./types.js\").TemplateResponse",
    "purpose": "Patch template; omitted/null name/fa_name/params preserves, while explicit channel_id null clears and omission preserves. Missing/deleted ID is 404; HTTP 200.",
    "input": "import(\"./types.js\").UpdateMessageTemplateInput",
    "auth": "Authenticated IDP context; admin:template:update"
  },
  "messenger:DELETE /api/v1/templates/{id}": {
    "response": "import(\"./types.js\").MessengerEmptyResponse",
    "purpose": "Soft-delete a template; missing/deleted IDs are 404. Returns HTTP 200 with data {}.",
    "auth": "Authenticated IDP context; admin:template:delete"
  },
  "messenger:GET /api/v1/templates/{id}/contents": {
    "response": "import(\"./types.js\").TemplateContentsResponse",
    "purpose": "List non-deleted template contents for numeric template ID without pagination; absent parent may return an empty array.",
    "auth": "Authenticated IDP context; admin:template:read"
  },
  "messenger:POST /api/v1/templates/{id}/contents": {
    "response": "import(\"./types.js\").TemplateContentResponse",
    "purpose": "Create channel-specific text/options for numeric template ID; invalid native channel is 400. Returns HTTP 200; foreign-key violations surface as insert errors.",
    "input": "import(\"./types.js\").CreateTemplateContentInput",
    "auth": "Authenticated IDP context; admin:template:create_content"
  },
  "messenger:PATCH /api/v1/templates/contents/{content_id}": {
    "response": "import(\"./types.js\").TemplateContentResponse",
    "purpose": "Patch text/options for numeric content_id. Null/omission preserves; channel cannot change. Missing/deleted content is 404; returns HTTP 200.",
    "input": "import(\"./types.js\").UpdateTemplateContentInput",
    "auth": "Authenticated IDP context; admin:template:update_content"
  },
  "messenger:GET /api/v1/channels": {
    "response": "import(\"./types.js\").ChannelListResponse",
    "purpose": "List non-deleted numeric channel groupings without pagination; each item has id and name.",
    "auth": "Authenticated IDP context; admin:channel:read"
  },
  "messenger:POST /api/v1/channels": {
    "input": "import(\"./types.js\").CreateChannelInput",
    "response": "import(\"./types.js\").ChannelResponse",
    "purpose": "Create a channel grouping using trimmed nonempty name; blank names return 400. Returns HTTP 200.",
    "auth": "Authenticated IDP context; admin:channel:create"
  },
  "messenger:GET /api/v1/channels/{id}": {
    "response": "import(\"./types.js\").ChannelResponse",
    "purpose": "Read a non-deleted numeric channel grouping; missing IDs return 404.",
    "auth": "Authenticated IDP context; admin:channel:read"
  },
  "messenger:PATCH /api/v1/channels/{id}": {
    "input": "import(\"./types.js\").UpdateChannelInput",
    "response": "import(\"./types.js\").ChannelResponse",
    "purpose": "Replace the required trimmed channel name; blank names return 400 and missing/deleted IDs return 404. Returns HTTP 200.",
    "auth": "Authenticated IDP context; admin:channel:update"
  },
  "messenger:DELETE /api/v1/channels/{id}": {
    "response": "import(\"./types.js\").MessengerEmptyResponse",
    "purpose": "Soft-delete a channel grouping; missing/already-deleted IDs return 404. Returns HTTP 200 with data {}.",
    "auth": "Authenticated IDP context; admin:channel:delete"
  },
  "messenger:GET /api/v1/services": {
    "response": "import(\"./types.js\").ProviderListResponse",
    "purpose": "List provider services without pagination. options is always null; encrypted credentials are never read back. Does not invoke provider network calls.",
    "auth": "Authenticated IDP context; admin:service:read"
  },
  "messenger:POST /api/v1/services": {
    "input": "import(\"./types.js\").CreateDeliveryProviderInput",
    "response": "import(\"./types.js\").ProviderResponse",
    "purpose": "Create provider service with encrypted dynamic JSON options and default i16 priority 0. Invalid native channel/provider is 400. Returns HTTP 200 with options null.",
    "auth": "Authenticated IDP context; admin:service:create"
  },
  "messenger:POST /api/v1/services/setup-check": {
    "response": "import(\"./contracts.types.js\").MessengerSetupResponse",
    "purpose": "Inspect provider setup and return configured/providerVerified per channel/provider with checkedAt. May contact SMTP and Ghasedak account/template APIs, without sending notifications. Provider enum labels in this report use Rust variant casing; HTTP 200 is not evidence every provider is verified.",
    "auth": "Authenticated IDP context; admin:service:read"
  },
  "messenger:POST /api/v1/services/website-otp-readiness": {
    "response": "import(\"./contracts.types.js\").WebsiteOtpReadiness",
    "purpose": "Server-only OTP readiness using x-website-otp-token header; token must be configured with >=32 characters. Missing configuration is 503, wrong token 401. May contact Ghasedak read APIs; sends no messages. Returns raw {ready}, no envelope.",
    "auth": "Server-only x-website-otp-token header; empty IDP permission macro"
  },
  "messenger:GET /api/v1/services/{id}": {
    "response": "import(\"./types.js\").ProviderResponse",
    "purpose": "Read numeric provider service with options always null; missing ID is 404. Does not invoke provider network calls.",
    "auth": "Authenticated IDP context; admin:service:read"
  },
  "messenger:PATCH /api/v1/services/{id}": {
    "input": "import(\"./types.js\").UpdateDeliveryProviderInput",
    "response": "import(\"./types.js\").ProviderResponse",
    "purpose": "Patch provider service. Omitted/null fields preserve; options is encrypted when non-null, and readback is always null. Invalid provider is 400; invalid channel falls back to existing. Missing ID is 404. Returns HTTP 200.",
    "auth": "Authenticated IDP context; admin:service:update"
  },
  "messenger:DELETE /api/v1/services/{id}": {
    "response": "import(\"./types.js\").MessengerEmptyResponse",
    "purpose": "Hard-delete a provider service by numeric ID. Missing IDs succeed; returns HTTP 200 with data {}.",
    "auth": "Authenticated IDP context; admin:service:delete"
  },
  "messenger:GET /api/v1/notifications/me": {
    "query": "import(\"./types.js\").MessengerPageQuery",
    "response": "import(\"./types.js\").InboxResponse",
    "purpose": "Page current non-nil actor recipient records using literal page[number]/page[size], default 1/20 and size clamp 1..100; ordered updated_at/id descending. Recipient DTO excludes routing/provider diagnostics; description is body copy. Unauthenticated actor is 401, missing self-read permission is 403.",
    "auth": "Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases)"
  },
  "messenger:PATCH /api/v1/notifications/me/read-all": {
    "response": "import(\"./types.js\").InboxReadAllResponse",
    "purpose": "Mark current non-nil actor unread/non-deleted inbox records read and return updated count; recipient is derived from auth, never a query argument.",
    "auth": "Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases)"
  },
  "messenger:PATCH /api/v1/notifications/me/{id}/read": {
    "response": "import(\"./types.js\").InboxItemResponse",
    "purpose": "Mark one current actor notification read and return recipient-safe copy. Requires non-nil actor and self-read permission; missing/other-recipient/deleted record is 404.",
    "auth": "Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases)"
  },
  "messenger:GET /api/v1/notifications": {
    "query": "import(\"./types.js\").MessengerNotificationQuery",
    "response": "import(\"./types.js\").NotificationListResponse",
    "purpose": "Page non-deleted administrative records including provider diagnostics, ordered updated_at then id descending. Optional trimmed recipient filters exactly; blank recipient is ignored. Literal page[number]/page[size] default to 1/20 and clamp size to 1..100.",
    "auth": "Authenticated IDP context; admin:notification:read"
  },
  "messenger:PATCH /api/v1/notifications/read-all": {
    "query": "import(\"./types.js\").MessengerRequiredRecipientQuery",
    "requiredQuery": true,
    "response": "import(\"./types.js\").InboxReadAllResponse",
    "purpose": "Mark all unread non-deleted records for required trimmed recipient read and return updated count (HTTP 200). Missing query rejects with 400; blank recipient returns 400.",
    "auth": "Authenticated IDP context; admin:notification:read"
  },
  "messenger:GET /api/v1/notifications/realtime/config": {
    "response": "import(\"./types.js\").MessengerRealtimeConfigResponse",
    "purpose": "Read current non-nil actor websocket URL, app key, private channel and PrivateMessageEvent name. Missing realtime configuration is 503. Reload persisted inbox records after reconnect.",
    "auth": "Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases)"
  },
  "messenger:POST /api/v1/notifications/realtime/auth": {
    "input": "import(\"./types.js\").MessengerRealtimeAuthInput",
    "response": "import(\"./types.js\").MessengerRealtimeAuthResponse",
    "purpose": "Sign only the current non-nil actor private channel using socket_id and channel_name; wrong channel is 403 and unavailable broker configuration is 503. Returns raw {auth} (HTTP 200), no API envelope.",
    "auth": "Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases)"
  },
  "messenger:GET /api/v1/notifications/{id}": {
    "response": "import(\"./types.js\").NotificationResponse",
    "purpose": "Read an administrative notification including provider diagnostics; missing/deleted notification or missing template returns 404.",
    "auth": "Authenticated IDP context; admin:notification:read"
  },
  "messenger:PATCH /api/v1/notifications/{id}/read": {
    "query": "import(\"./types.js\").MessengerRecipientQuery",
    "response": "import(\"./types.js\").NotificationResponse",
    "purpose": "Mark a non-deleted administrative record read; optional nonblank trimmed recipient constrains ownership. Missing/constrained IDs return 404. HTTP 200 includes the administrative record.",
    "auth": "Authenticated IDP context; admin:notification:read"
  },
  "messenger:GET /api/v1/dashboard": {
    "response": "import(\"./types.js\").DashboardResponse",
    "purpose": "Read inventory counts named templates, notifications, channels, services and providers; not delivery success metrics.",
    "auth": "Authenticated IDP context; admin:dashboard:read"
  },
  "messenger:GET /api/v1/integration/rabbitmq": {
    "purpose": "Read RabbitMQ queue/event metadata in an API envelope; sample profile ID is illustrative and broker_url_hint is not a configured credential.",
    "auth": "Authenticated IDP context; admin:integration:read"
  },
  "messenger:GET /api/v1/integration/docs": {
    "purpose": "Read direct integration fields and SDK language snippets in an API envelope. Optional direct fields are omitted when absent.",
    "auth": "Authenticated IDP context; admin:integration:read"
  },
  "messenger:GET /api/v1/integration/flow": {
    "response": "import(\"./types.js\").MessengerFlowIntegrationResponse",
    "purpose": "Read queue/events Flow integration metadata in an API envelope; handler has no permission macro. Concrete response comes from the selected Cargo.lock Flow SDK revision.",
    "auth": "No handler permission macro; ingress authentication/authorization remains deployment-defined"
  },
  "messenger:GET /api/v1/notifications/me/events": {
    "query": "import(\"./delivery.js\").InboxStreamQuery",
    "timeout": 35000,
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").InboxStreamPage>",
    "purpose": "Poll current non-nil actor durable recipient events, up to 100 per page. Omit cursor to capture current head before inbox snapshot; negative cursor is 400 and expired/future cursor is 410 requiring resync. wait_seconds defaults/maxes at 25. Payloads are recipient-safe and include cursor/event_id; provider acceptance is not delivery proof.",
    "auth": "Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases)"
  },
  "messenger:GET /api/v1/notifications/me/unread-count": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").NotificationUnreadCount>",
    "purpose": "Count current non-nil actor unread non-deleted notifications; independent from chat unread count. Returns HTTP 200; storage unavailable is 503.",
    "auth": "Authenticated IDP context; notification:self:read; non-nil current actor and self_inbox_user explicit permission check (message:/messenger: aliases)"
  },
  "messenger:POST /api/v1/push/devices": {
    "input": "import(\"./delivery.js\").PushDeviceInput",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").PushDevice>",
    "purpose": "Register an authenticated mobile installation UUID for an approved application; platform android/ios, token length 20..4096, locale length <=32. Unknown fields reject; invalid values are 400, per-user/application limit 10 or conflict is 409. Reusing a token/installation can transfer registration after account switch. Returns HTTP 200 id.",
    "auth": "Authenticated IDP context; notification:self:read"
  },
  "messenger:DELETE /api/v1/push/devices/{id}": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").PushDeviceRevocation>",
    "purpose": "Delete an owned mobile installation UUID. Idempotently returns HTTP 200 data.revoked=true even if ID is missing or belongs to another user; storage unavailable is 503.",
    "auth": "Authenticated IDP context; notification:self:read"
  },
  "messenger:GET /api/v1/web-push/config": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").WebPushConfig>",
    "purpose": "Read authenticated Web Push availability and public key. Missing/invalid VAPID configuration returns enabled=false/public_key=null (HTTP 200).",
    "auth": "Authenticated IDP context; notification:self:read"
  },
  "messenger:POST /api/v1/web-push/subscriptions": {
    "input": "import(\"./delivery.js\").WebPushRegistration",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").PushDevice>",
    "purpose": "Register an authenticated browser subscription; application_id defaults to default, locale defaults to fa unless exactly en. Endpoint must be an approved HTTPS 443 FCM/Mozilla/Apple host and keys valid URL-safe unpadded base64. Invalid subscription is 400, limit10 or endpoint owned by another actor is 409, unavailable VAPID/storage is 503. Returns HTTP 200 id.",
    "auth": "Authenticated IDP context; notification:self:read"
  },
  "messenger:DELETE /api/v1/web-push/subscriptions/{id}": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").WebPushRemoval>",
    "purpose": "Remove an owned browser subscription UUID. Idempotently returns HTTP 200 data.removed=true even for missing/other-user IDs; storage unavailable is 503.",
    "auth": "Authenticated IDP context; notification:self:read"
  },
  "messenger:POST /api/v1/web-push/subscriptions/{id}/test": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").WebPushTestDelivery>",
    "purpose": "Queue an actual test push to the current actor subscription UUID (HTTP 200 pending). Missing/other-user ID is 404, repeat within one minute is 429, missing configuration/storage is 503. Provider acceptance does not prove browser display.",
    "auth": "Authenticated IDP context; notification:self:read"
  },
  "messenger:GET /api/v1/web-push/deliveries/{id}": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").WebPushDelivery>",
    "purpose": "Read an owned Web Push delivery UUID status and nullable provider_status. Missing/other-user ID is 404; storage unavailable is 503. Provider status does not prove display or reading.",
    "auth": "Authenticated IDP context; notification:self:read"
  },
  "messenger:POST /api/v1/notifications": {
    "input": "import(\"./types.js\").SendNotificationInput",
    "response": "import(\"./types.js\").SendNotificationResponse",
    "purpose": "Queue by template_id or template_name and validated native channel; nonempty recipients supersedes recipient and empty recipients is 400. Returns HTTP 200 data.notification_ids. options.correlation_id enables update/reuse; scheduled_at schedules dispatch. This service route has no IDP permission macro or actor-ownership check; gateway authority must restrict callers.",
    "auth": "No handler permission macro; ingress authentication/authorization remains deployment-defined"
  },
  "messenger:POST /api/v1/channels/subscribe": {
    "input": "import(\"./types.js\").SubscribeChannelInput",
    "response": "import(\"./types.js\").SubscribeChannelResponse",
    "purpose": "Insert or update subscribed for the explicit numeric channel_id and user_id. This service route has no IDP permission macro or actor-ownership check; gateway authority must restrict callers. Returns data {} (HTTP 200).",
    "auth": "No handler permission macro; ingress authentication/authorization remains deployment-defined"
  }
};
