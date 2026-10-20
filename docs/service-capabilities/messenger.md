# messenger capability discovery

Notification templates, channels, providers, subscriptions, delivery and user-scoped Web Push.

قالب اعلان، کانال، ارائه‌دهنده، اشتراک، ارسال و اعلان وب شخصی.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `0eb2143fae39dee3e0543abaac59ea1aaaed771c`
- SDK source revision: `0eb2143fae39dee3e0543abaac59ea1aaaed771c`
- Evidence inventory revision: `0eb2143fae39dee3e0543abaac59ea1aaaed771c` (sdk)
- Working HEAD: `0038f19eb1d78b744b3d9829c1a05331657a9fa4`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-messenger/src/router.rs:187` | inspect middleware/local scope | pending |
| `GET /up` | `infera-messenger/src/router.rs:187` | inspect middleware/local scope | pending |
| `GET /api/openapi.json` | `infera-messenger/src/router.rs:70` | inspect middleware/local scope | pending |
| `GET /api/v1/templates` | `infera-messenger/src/template/routes.rs:47` | admin:template:read | pending |
| `POST /api/v1/templates` | `infera-messenger/src/template/routes.rs:89` | admin:template:create | pending |
| `GET /api/v1/templates/{id}` | `infera-messenger/src/template/routes.rs:65` | admin:template:read | pending |
| `PATCH /api/v1/templates/{id}` | `infera-messenger/src/template/routes.rs:108` | admin:template:update | pending |
| `DELETE /api/v1/templates/{id}` | `infera-messenger/src/template/routes.rs:128` | admin:template:delete | pending |
| `GET /api/v1/templates/{id}/contents` | `infera-messenger/src/template/routes.rs:147` | admin:template:read | pending |
| `POST /api/v1/templates/{id}/contents` | `infera-messenger/src/template/routes.rs:169` | admin:template:create_content | pending |
| `PATCH /api/v1/templates/contents/{content_id}` | `infera-messenger/src/template/routes.rs:189` | admin:template:update_content | pending |
| `GET /api/v1/channels` | `infera-messenger/src/channel/routes.rs:40` | admin:channel:read | pending |
| `POST /api/v1/channels` | `infera-messenger/src/channel/routes.rs:82` | admin:channel:create | pending |
| `GET /api/v1/channels/{id}` | `infera-messenger/src/channel/routes.rs:58` | admin:channel:read | pending |
| `PATCH /api/v1/channels/{id}` | `infera-messenger/src/channel/routes.rs:101` | admin:channel:update | pending |
| `DELETE /api/v1/channels/{id}` | `infera-messenger/src/channel/routes.rs:121` | admin:channel:delete | pending |
| `GET /api/v1/services` | `infera-messenger/src/service/routes.rs:38` | admin:service:read | pending |
| `POST /api/v1/services` | `infera-messenger/src/service/routes.rs:80` | admin:service:create | pending |
| `POST /api/v1/services/setup-check` | `infera-messenger/src/service/routes.rs:133` | admin:service:read | pending |
| `POST /api/v1/services/website-otp-readiness` | `infera-messenger/src/service/website_otp.rs:6` | inspect middleware/local scope | pending |
| `GET /api/v1/services/{id}` | `infera-messenger/src/service/routes.rs:56` | admin:service:read | pending |
| `PATCH /api/v1/services/{id}` | `infera-messenger/src/service/routes.rs:99` | admin:service:update | pending |
| `DELETE /api/v1/services/{id}` | `infera-messenger/src/service/routes.rs:119` | admin:service:delete | pending |
| `GET /api/v1/notifications/me` | `infera-messenger/src/notification/routes.rs:231` | notification:self:read | pending |
| `PATCH /api/v1/notifications/me/read-all` | `infera-messenger/src/notification/routes.rs:254` | notification:self:read | pending |
| `PATCH /api/v1/notifications/me/{id}/read` | `infera-messenger/src/notification/routes.rs:272` | notification:self:read | pending |
| `GET /api/v1/notifications` | `infera-messenger/src/notification/routes.rs:376` | admin:notification:read | pending |
| `PATCH /api/v1/notifications/read-all` | `infera-messenger/src/notification/routes.rs:449` | admin:notification:read | pending |
| `GET /api/v1/notifications/realtime/config` | `infera-messenger/src/notification/routes.rs:313` | notification:self:read | pending |
| `POST /api/v1/notifications/realtime/auth` | `infera-messenger/src/notification/routes.rs:342` | notification:self:read | pending |
| `GET /api/v1/notifications/{id}` | `infera-messenger/src/notification/routes.rs:410` | admin:notification:read | pending |
| `PATCH /api/v1/notifications/{id}/read` | `infera-messenger/src/notification/routes.rs:468` | admin:notification:read | pending |
| `GET /api/v1/dashboard` | `infera-messenger/src/dashboard/routes.rs:21` | admin:dashboard:read | pending |
| `GET /api/v1/integration/rabbitmq` | `infera-messenger/src/integration/routes.rs:20` | admin:integration:read | pending |
| `GET /api/v1/integration/docs` | `infera-messenger/src/integration/routes.rs:35` | admin:integration:read | pending |
| `GET /api/v1/integration/flow` | `infera-messenger/src/integration/routes.rs:44` | inspect middleware/local scope | pending |
| `GET /api/v1/notifications/me/events` | `infera-messenger/src/inbox_stream.rs:69` | notification:self:read | pending |
| `GET /api/v1/notifications/me/unread-count` | `infera-messenger/src/inbox_stream.rs:155` | notification:self:read | pending |
| `POST /api/v1/push/devices` | `infera-messenger/src/mobile_push.rs:45` | notification:self:read | pending |
| `DELETE /api/v1/push/devices/{id}` | `infera-messenger/src/mobile_push.rs:107` | notification:self:read | pending |
| `GET /api/v1/web-push/config` | `infera-messenger/src/web_push.rs:114` | notification:self:read | pending |
| `POST /api/v1/web-push/subscriptions` | `infera-messenger/src/web_push.rs:129` | notification:self:read | pending |
| `DELETE /api/v1/web-push/subscriptions/{id}` | `infera-messenger/src/web_push.rs:169` | notification:self:read | pending |
| `POST /api/v1/web-push/subscriptions/{id}/test` | `infera-messenger/src/web_push.rs:189` | notification:self:read | pending |
| `GET /api/v1/web-push/deliveries/{id}` | `infera-messenger/src/web_push.rs:231` | notification:self:read | pending |
| `POST /api/v1/notifications` | `infera-messenger/src/notification/routes.rs:488` | inspect middleware/local scope | pending |
| `POST /api/v1/channels/subscribe` | `infera-messenger/src/channel/routes.rs:134` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/messenger.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
