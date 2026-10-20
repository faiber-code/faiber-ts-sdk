# social capability discovery

Community feeds, categories, posts, comments, reactions, capabilities, moderation and operator administration.

خوراک اجتماعی، دسته، پست، نظر، واکنش، قابلیت، نظارت و مدیریت.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `79462976a1c07e7ef8eb913d7cc7015dd50f936e`
- SDK source revision: `d067ac956571abd73211b06d835caa658b1f09bc`
- Evidence inventory revision: `d067ac956571abd73211b06d835caa658b1f09bc` (sdk)
- Working HEAD: `79462976a1c07e7ef8eb913d7cc7015dd50f936e`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-social/src/main.rs:68` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/self` | `infera-social/src/api/routes.rs:117` | inspect middleware/local scope | pending |
| `GET /api/v1/categories` | `infera-social/src/api/routes.rs:207` | social:read | pending |
| `POST /api/v1/categories` | `infera-social/src/api/routes.rs:217` | social:category:manage | pending |
| `POST /api/v1/media/uploads` | `infera-social/src/api/routes.rs:127` | social:post:create | pending |
| `GET /api/v1/media/{id}` | `infera-social/src/api/routes.rs:185` | social:read | pending |
| `PATCH /api/v1/categories/{id}` | `infera-social/src/api/routes.rs:227` | social:category:manage | pending |
| `DELETE /api/v1/categories/{id}` | `infera-social/src/api/routes.rs:239` | social:category:manage | pending |
| `GET /api/v1/categories/{id}/capability-policy` | `infera-social/src/api/routes.rs:380` | social:read | pending |
| `GET /api/v1/posts` | `infera-social/src/api/routes.rs:249` | social:read | pending |
| `POST /api/v1/posts` | `infera-social/src/api/routes.rs:329` | social:post:create | pending |
| `GET /api/v1/me/feed-location` | `infera-social/src/api/routes.rs:268` | social:read | pending |
| `PUT /api/v1/me/feed-location` | `infera-social/src/api/routes.rs:279` | social:read | pending |
| `DELETE /api/v1/me/feed-location` | `infera-social/src/api/routes.rs:290` | social:read | pending |
| `GET /api/v1/me/posts` | `infera-social/src/api/routes.rs:299` | social:read | pending |
| `GET /api/v1/me/analytics` | `infera-social/src/api/routes.rs:623` | social:analytics:read_own | pending |
| `GET /api/v1/me/bookmarks` | `infera-social/src/api/routes.rs:319` | social:read | pending |
| `GET /api/v1/posts/{id}` | `infera-social/src/api/routes.rs:540` | social:read | pending |
| `PATCH /api/v1/posts/{id}` | `infera-social/src/api/routes.rs:551` | social:post:update_own | pending |
| `DELETE /api/v1/posts/{id}` | `infera-social/src/api/routes.rs:563` | social:post:delete_own | pending |
| `GET /api/v1/posts/{id}/capabilities` | `infera-social/src/api/routes.rs:391` | social:read | pending |
| `POST /api/v1/posts/{id}/navigation-access` | `infera-social/src/api/routes.rs:403` | social:location:navigate | pending |
| `POST /api/v1/posts/{id}/claims` | `infera-social/src/api/routes.rs:429` | social:claim:create | pending |
| `POST /api/v1/posts/{id}/cancel` | `infera-social/src/api/routes.rs:518` | social:post:update_own | pending |
| `POST /api/v1/claims/{id}/withdraw` | `infera-social/src/api/routes.rs:444` | social:claim:update_own | pending |
| `POST /api/v1/claims/{id}/select` | `infera-social/src/api/routes.rs:455` | social:claim:select_own | pending |
| `PUT /api/v1/claims/{id}/contact-consent` | `infera-social/src/api/routes.rs:466` | social:claim:consent | pending |
| `GET /api/v1/claims/{id}` | `infera-social/src/api/routes.rs:507` | social:read | pending |
| `GET /api/v1/me/claims` | `infera-social/src/api/routes.rs:478` | social:read | pending |
| `GET /api/v1/me/posts/{id}/claims` | `infera-social/src/api/routes.rs:492` | social:read | pending |
| `POST /api/v1/integrations/funding-events` | `infera-social/src/api/routes.rs:529` | social:integrations:write | pending |
| `GET /api/v1/posts/{id}/comments` | `infera-social/src/api/routes.rs:645` | social:read | pending |
| `POST /api/v1/posts/{id}/comments` | `infera-social/src/api/routes.rs:656` | social:comment:create | pending |
| `POST /api/v1/posts/{id}/resubmit` | `infera-social/src/api/routes.rs:573` | social:post:update_own | pending |
| `PUT /api/v1/posts/{id}/bookmark` | `infera-social/src/api/routes.rs:584` | social:bookmark:write | pending |
| `DELETE /api/v1/posts/{id}/bookmark` | `infera-social/src/api/routes.rs:593` | social:bookmark:write | pending |
| `POST /api/v1/posts/{id}/views` | `infera-social/src/api/routes.rs:602` | social:view:write | pending |
| `POST /api/v1/posts/{id}/share-events` | `infera-social/src/api/routes.rs:613` | social:share:write | pending |
| `GET /api/v1/posts/{id}/analytics` | `infera-social/src/api/routes.rs:633` | social:analytics:read_own | pending |
| `PATCH /api/v1/comments/{id}` | `infera-social/src/api/routes.rs:668` | social:comment:update_own | pending |
| `DELETE /api/v1/comments/{id}` | `infera-social/src/api/routes.rs:680` | social:comment:delete_own | pending |
| `GET /api/v1/posts/{id}/reaction` | `infera-social/src/api/routes.rs:690` | social:read | pending |
| `PUT /api/v1/posts/{id}/reaction` | `infera-social/src/api/routes.rs:712` | social:reaction:write | pending |
| `DELETE /api/v1/posts/{id}/reaction` | `infera-social/src/api/routes.rs:780` | social:reaction:write | pending |
| `GET /api/v1/comments/{id}/reaction` | `infera-social/src/api/routes.rs:701` | social:read | pending |
| `PUT /api/v1/comments/{id}/reaction` | `infera-social/src/api/routes.rs:725` | social:reaction:write | pending |
| `DELETE /api/v1/comments/{id}/reaction` | `infera-social/src/api/routes.rs:790` | social:reaction:write | pending |
| `PUT /api/v1/posts/{id}/like` | `infera-social/src/api/routes.rs:738` | social:reaction:write | pending |
| `DELETE /api/v1/posts/{id}/like` | `infera-social/src/api/routes.rs:780` | social:reaction:write | pending |
| `PUT /api/v1/comments/{id}/like` | `infera-social/src/api/routes.rs:759` | social:reaction:write | pending |
| `DELETE /api/v1/comments/{id}/like` | `infera-social/src/api/routes.rs:790` | social:reaction:write | pending |
| `POST /api/v1/reports` | `infera-social/src/api/routes.rs:800` | social:report:create | pending |
| `GET /api/v1/moderation/queue` | `infera-social/src/api/routes.rs:810` | social:moderate, social:moderation:review | pending |
| `GET /api/v1/moderation/audit` | `infera-social/src/api/routes.rs:820` | social:moderate, social:moderation:review | pending |
| `POST /api/v1/moderation/actions` | `infera-social/src/api/routes.rs:833` | social:moderate, social:moderation:review | pending |
| `POST /api/v1/admin/import/modules` | `infera-social/src/api/routes.rs:844` | social:admin | pending |
| `GET /api/v1/admin/social/overview` | `infera-social/src/admin.rs:87` | social:panel:view | pending |
| `GET /api/v1/admin/social/posts` | `infera-social/src/admin.rs:106` | social:content:read | pending |
| `GET /api/v1/admin/social/posts/{id}` | `infera-social/src/admin.rs:135` | social:content:read | pending |
| `GET /api/v1/admin/social/comments` | `infera-social/src/admin.rs:154` | social:content:read | pending |
| `GET /api/v1/admin/social/comments/{id}` | `infera-social/src/admin.rs:170` | social:content:read | pending |
| `GET /api/v1/admin/social/media` | `infera-social/src/admin.rs:178` | social:content:read | pending |
| `GET /api/v1/admin/social/categories` | `infera-social/src/admin.rs:408` | social:panel:view | pending |
| `POST /api/v1/admin/social/categories` | `infera-social/src/admin.rs:430` | social:categories:manage | pending |
| `GET /api/v1/admin/social/categories/{id}` | `infera-social/src/admin.rs:417` | social:panel:view | pending |
| `PATCH /api/v1/admin/social/categories/{id}` | `infera-social/src/admin.rs:439` | social:categories:manage | pending |
| `DELETE /api/v1/admin/social/categories/{id}` | `infera-social/src/admin.rs:450` | social:categories:manage | pending |
| `GET /api/v1/admin/social/capability-policies` | `infera-social/src/admin.rs:460` | social:panel:view | pending |
| `POST /api/v1/admin/social/capability-policies` | `infera-social/src/admin.rs:512` | social:capabilities:manage | pending |
| `GET /api/v1/admin/social/capability-policies/{id}` | `infera-social/src/admin.rs:471` | social:panel:view | pending |
| `PATCH /api/v1/admin/social/capability-policies/{id}` | `infera-social/src/admin.rs:524` | social:capabilities:manage | pending |
| `POST /api/v1/admin/social/capability-policies/{id}/publish` | `infera-social/src/admin.rs:540` | social:capabilities:manage | pending |
| `GET /api/v1/admin/social/moderation/queue` | `infera-social/src/admin.rs:556` | social:moderation:review | pending |
| `GET /api/v1/admin/social/reports` | `infera-social/src/admin.rs:194` | social:reports:manage | pending |
| `GET /api/v1/admin/social/reports/{id}` | `infera-social/src/admin.rs:210` | social:reports:manage | pending |
| `GET /api/v1/admin/social/claims` | `infera-social/src/admin.rs:218` | social:claims:manage | pending |
| `GET /api/v1/admin/social/claims/{id}` | `infera-social/src/admin.rs:234` | social:claims:manage | pending |
| `POST /api/v1/admin/social/claims/{id}/approve` | `infera-social/src/admin.rs:565` | social:claims:manage | pending |
| `POST /api/v1/admin/social/claims/{id}/reject` | `infera-social/src/admin.rs:576` | social:claims:manage | pending |
| `GET /api/v1/admin/social/bounties` | `infera-social/src/admin.rs:242` | social:funding:review | pending |
| `GET /api/v1/admin/social/bounties/{id}` | `infera-social/src/admin.rs:258` | social:funding:review | pending |
| `POST /api/v1/admin/social/locations/{post_id}/reveal` | `infera-social/src/admin.rs:587` | social:location:reveal | pending |
| `GET /api/v1/admin/social/actors` | `infera-social/src/admin.rs:613` | social:content:read | pending |
| `GET /api/v1/admin/social/actors/{id}` | `infera-social/src/admin.rs:629` | social:content:read | pending |
| `GET /api/v1/admin/social/restrictions` | `infera-social/src/admin.rs:266` | social:actors:restrict | pending |
| `POST /api/v1/admin/social/restrictions` | `infera-social/src/admin.rs:638` | social:actors:restrict | pending |
| `POST /api/v1/admin/social/restrictions/{id}/revoke` | `infera-social/src/admin.rs:668` | social:actors:restrict | pending |
| `GET /api/v1/admin/social/analytics` | `infera-social/src/admin.rs:686` | social:analytics:read | pending |
| `GET /api/v1/admin/social/audit` | `infera-social/src/admin.rs:282` | social:audit:read | pending |
| `GET /api/v1/admin/social/integrations` | `infera-social/src/admin.rs:298` | social:integrations:manage | pending |
| `GET /api/v1/admin/social/integrations/{id}` | `infera-social/src/admin.rs:314` | social:integrations:manage | pending |
| `POST /api/v1/admin/social/integrations/{id}/replay` | `infera-social/src/admin.rs:694` | social:integrations:manage | pending |
| `GET /api/v1/admin/social/settings` | `infera-social/src/admin.rs:716` | social:settings:manage | pending |
| `GET /api/v1/comments/post/{id}` | `infera-social/src/api/routes.rs:645` | social:read | pending |
| `POST /api/v1/comments/post/{id}` | `infera-social/src/api/routes.rs:656` | social:comment:create | pending |
| `GET /api/v1/reactions/post/{id}` | `infera-social/src/api/routes.rs:690` | social:read | pending |
| `POST /api/v1/reactions/post/{id}` | `infera-social/src/api/routes.rs:712` | social:reaction:write | pending |
| `DELETE /api/v1/reactions/post/{id}` | `infera-social/src/api/routes.rs:780` | social:reaction:write | pending |
| `POST /api/v1/internal/place-events` | `infera-social/src/discovery.rs:338` | inspect middleware/local scope | pending |
| `GET /api/v1/public/posts` | `infera-social/src/discovery.rs:79` | inspect middleware/local scope | pending |
| `GET /api/v1/public/posts/{id}` | `infera-social/src/discovery.rs:160` | inspect middleware/local scope | pending |
| `GET /api/v1/public/posts/{id}/comments` | `infera-social/src/discovery.rs:167` | inspect middleware/local scope | pending |
| `GET /api/v1/public/media/{id}` | `infera-social/src/discovery.rs:180` | inspect middleware/local scope | pending |
| `GET /api/v1/follow/{kind}/{id}` | `infera-social/src/discovery.rs:269` | inspect middleware/local scope | pending |
| `PUT /api/v1/follow/{kind}/{id}` | `infera-social/src/discovery.rs:217` | inspect middleware/local scope | pending |
| `DELETE /api/v1/follow/{kind}/{id}` | `infera-social/src/discovery.rs:235` | inspect middleware/local scope | pending |
| `GET /api/v1/me/notification-preferences` | `infera-social/src/discovery.rs:281` | inspect middleware/local scope | pending |
| `PUT /api/v1/me/notification-preferences` | `infera-social/src/discovery.rs:289` | inspect middleware/local scope | pending |
| `GET /api/v1/internal/notification-outbox` | `infera-social/src/discovery.rs:315` | inspect middleware/local scope | pending |
| `PUT /api/v1/internal/notification-outbox/{id}/ack` | `infera-social/src/discovery.rs:322` | inspect middleware/local scope | pending |
| `PUT /api/v1/block/{id}` | `infera-social/src/discovery.rs:243` | inspect middleware/local scope | pending |
| `DELETE /api/v1/block/{id}` | `infera-social/src/discovery.rs:256` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/social.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
