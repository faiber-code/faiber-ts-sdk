# messenger capability discovery

Notification templates, channels, providers, subscriptions, delivery and user-scoped Web Push.

قالب اعلان، کانال، ارائه‌دهنده، اشتراک، ارسال و اعلان وب شخصی.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `5e6963aa2ffab0ad4f5e18161544143229af08be`
- SDK source revision: `5e6963aa2ffab0ad4f5e18161544143229af08be`
- Evidence inventory revision: `5e6963aa2ffab0ad4f5e18161544143229af08be` (sdk)
- Working HEAD: `5fa08b3182f9775652aee9f51f1618c63ddd0637`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-messenger/src/router.rs:188` | inspect middleware/local scope | stale |
| `GET /up` | `infera-messenger/src/router.rs:188` | inspect middleware/local scope | stale |
| `GET /api/openapi.json` | `infera-messenger/src/router.rs:70` | inspect middleware/local scope | stale |
| `GET /api/v1/templates` | `infera-messenger/src/template/routes.rs:47` | admin:template:read | stale |
| `POST /api/v1/templates` | `infera-messenger/src/template/routes.rs:89` | admin:template:create | stale |
| `GET /api/v1/templates/{id}` | `infera-messenger/src/template/routes.rs:65` | admin:template:read | stale |
| `PATCH /api/v1/templates/{id}` | `infera-messenger/src/template/routes.rs:108` | admin:template:update | stale |
| `DELETE /api/v1/templates/{id}` | `infera-messenger/src/template/routes.rs:128` | admin:template:delete | stale |
| `GET /api/v1/templates/{id}/contents` | `infera-messenger/src/template/routes.rs:147` | admin:template:read | stale |
| `POST /api/v1/templates/{id}/contents` | `infera-messenger/src/template/routes.rs:169` | admin:template:create_content | stale |
| `PATCH /api/v1/templates/contents/{content_id}` | `infera-messenger/src/template/routes.rs:189` | admin:template:update_content | stale |
| `GET /api/v1/channels` | `infera-messenger/src/channel/routes.rs:40` | admin:channel:read | stale |
| `POST /api/v1/channels` | `infera-messenger/src/channel/routes.rs:82` | admin:channel:create | stale |
| `GET /api/v1/channels/{id}` | `infera-messenger/src/channel/routes.rs:58` | admin:channel:read | stale |
| `PATCH /api/v1/channels/{id}` | `infera-messenger/src/channel/routes.rs:101` | admin:channel:update | stale |
| `DELETE /api/v1/channels/{id}` | `infera-messenger/src/channel/routes.rs:121` | admin:channel:delete | stale |
| `GET /api/v1/services` | `infera-messenger/src/service/routes.rs:38` | admin:service:read | stale |
| `POST /api/v1/services` | `infera-messenger/src/service/routes.rs:80` | admin:service:create | stale |
| `POST /api/v1/services/setup-check` | `infera-messenger/src/service/routes.rs:133` | admin:service:read | stale |
| `POST /api/v1/services/website-otp-readiness` | `infera-messenger/src/service/website_otp.rs:6` | inspect middleware/local scope | stale |
| `GET /api/v1/services/{id}` | `infera-messenger/src/service/routes.rs:56` | admin:service:read | stale |
| `PATCH /api/v1/services/{id}` | `infera-messenger/src/service/routes.rs:99` | admin:service:update | stale |
| `DELETE /api/v1/services/{id}` | `infera-messenger/src/service/routes.rs:119` | admin:service:delete | stale |
| `GET /api/v1/notifications/me` | `infera-messenger/src/notification/routes.rs:241` | notification:self:read | stale |
| `PATCH /api/v1/notifications/me/read-all` | `infera-messenger/src/notification/routes.rs:265` | notification:self:read | stale |
| `PATCH /api/v1/notifications/me/{id}/read` | `infera-messenger/src/notification/routes.rs:283` | notification:self:read | stale |
| `GET /api/v1/notifications` | `infera-messenger/src/notification/routes.rs:389` | admin:notification:read | stale |
| `PATCH /api/v1/notifications/read-all` | `infera-messenger/src/notification/routes.rs:462` | admin:notification:read | stale |
| `GET /api/v1/notifications/realtime/config` | `infera-messenger/src/notification/routes.rs:326` | notification:self:read | stale |
| `POST /api/v1/notifications/realtime/auth` | `infera-messenger/src/notification/routes.rs:355` | notification:self:read | stale |
| `GET /api/v1/notifications/{id}` | `infera-messenger/src/notification/routes.rs:423` | admin:notification:read | stale |
| `PATCH /api/v1/notifications/{id}/read` | `infera-messenger/src/notification/routes.rs:481` | admin:notification:read | stale |
| `GET /api/v1/dashboard` | `infera-messenger/src/dashboard/routes.rs:21` | admin:dashboard:read | stale |
| `GET /api/v1/integration/rabbitmq` | `infera-messenger/src/integration/routes.rs:20` | admin:integration:read | stale |
| `GET /api/v1/integration/docs` | `infera-messenger/src/integration/routes.rs:35` | admin:integration:read | stale |
| `GET /api/v1/integration/flow` | `infera-messenger/src/integration/routes.rs:44` | inspect middleware/local scope | stale |
| `GET /api/v1/notifications/me/events` | `infera-messenger/src/inbox_stream.rs:69` | notification:self:read | stale |
| `GET /api/v1/notifications/me/unread-count` | `infera-messenger/src/inbox_stream.rs:155` | notification:self:read | stale |
| `POST /api/v1/push/devices` | `infera-messenger/src/mobile_push.rs:46` | notification:self:read | stale |
| `DELETE /api/v1/push/devices/{id}` | `infera-messenger/src/mobile_push.rs:116` | notification:self:read | stale |
| `POST /api/v1/push/devices/{id}/presence` | `infera-messenger/src/device_delivery.rs:38` | notification:self:read | pending |
| `GET /api/v1/push/devices/{id}/pending` | `infera-messenger/src/device_delivery.rs:57` | notification:self:read | pending |
| `POST /api/v1/push/receipts` | `infera-messenger/src/device_delivery.rs:111` | inspect middleware/local scope | pending |
| `GET /api/v1/notifications/me/{id}/delivery` | `infera-messenger/src/device_delivery.rs:132` | notification:self:read | pending |
| `GET /api/v1/web-push/config` | `infera-messenger/src/web_push.rs:114` | notification:self:read | stale |
| `POST /api/v1/web-push/subscriptions` | `infera-messenger/src/web_push.rs:129` | notification:self:read | stale |
| `DELETE /api/v1/web-push/subscriptions/{id}` | `infera-messenger/src/web_push.rs:169` | notification:self:read | stale |
| `POST /api/v1/web-push/subscriptions/{id}/test` | `infera-messenger/src/web_push.rs:189` | notification:self:read | stale |
| `GET /api/v1/web-push/deliveries/{id}` | `infera-messenger/src/web_push.rs:231` | notification:self:read | stale |
| `POST /api/v1/notifications` | `infera-messenger/src/notification/routes.rs:501` | inspect middleware/local scope | stale |
| `POST /api/v1/channels/subscribe` | `infera-messenger/src/channel/routes.rs:134` | inspect middleware/local scope | stale |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/messenger.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
