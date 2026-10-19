# social capability discovery

Community feeds, categories, posts, comments, reactions, capabilities, moderation and operator administration.

خوراک اجتماعی، دسته، پست، نظر، واکنش، قابلیت، نظارت و مدیریت.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `79462976a1c07e7ef8eb913d7cc7015dd50f936e`
- SDK source revision: `79462976a1c07e7ef8eb913d7cc7015dd50f936e`
- Working HEAD: `79462976a1c07e7ef8eb913d7cc7015dd50f936e`
- Source relationship: same

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /api/v1/auth/self` | `infera-social/src/api/routes.rs:117` | inspect middleware/local scope | pending |
| `GET /api/v1/categories` | `infera-social/src/api/routes.rs:207` | social:read | pending |
| `POST /api/v1/categories` | `infera-social/src/api/routes.rs:217` | social:category:manage | pending |
| `POST /api/v1/media/uploads` | `infera-social/src/api/routes.rs:127` | social:post:create | pending |
| `GET /api/v1/media/{id}` | `infera-social/src/api/routes.rs:185` | social:read | pending |
| `PATCH /api/v1/categories/{id}` | `infera-social/src/api/routes.rs:227` | social:category:manage | pending |
| `DELETE /api/v1/categories/{id}` | `infera-social/src/api/routes.rs:239` | social:category:manage | pending |
| `GET /api/v1/categories/{id}/capability-policy` | `infera-social/src/api/routes.rs:362` | social:read | pending |
| `GET /api/v1/posts` | `infera-social/src/api/routes.rs:249` | social:read | pending |
| `POST /api/v1/posts` | `infera-social/src/api/routes.rs:329` | social:post:create | pending |
| `GET /api/v1/me/feed-location` | `infera-social/src/api/routes.rs:268` | social:read | pending |
| `PUT /api/v1/me/feed-location` | `infera-social/src/api/routes.rs:279` | social:read | pending |
| `DELETE /api/v1/me/feed-location` | `infera-social/src/api/routes.rs:290` | social:read | pending |
| `GET /api/v1/me/posts` | `infera-social/src/api/routes.rs:299` | social:read | pending |
| `GET /api/v1/me/analytics` | `infera-social/src/api/routes.rs:605` | social:analytics:read_own | pending |
| `GET /api/v1/me/bookmarks` | `infera-social/src/api/routes.rs:319` | social:read | pending |
| `GET /api/v1/posts/{id}` | `infera-social/src/api/routes.rs:522` | social:read | pending |
| `PATCH /api/v1/posts/{id}` | `infera-social/src/api/routes.rs:533` | social:post:update_own | pending |
| `DELETE /api/v1/posts/{id}` | `infera-social/src/api/routes.rs:545` | social:post:delete_own | pending |
| `GET /api/v1/posts/{id}/capabilities` | `infera-social/src/api/routes.rs:373` | social:read | pending |
| `POST /api/v1/posts/{id}/navigation-access` | `infera-social/src/api/routes.rs:385` | social:location:navigate | pending |
| `POST /api/v1/posts/{id}/claims` | `infera-social/src/api/routes.rs:411` | social:claim:create | pending |
| `POST /api/v1/posts/{id}/cancel` | `infera-social/src/api/routes.rs:500` | social:post:update_own | pending |
| `POST /api/v1/claims/{id}/withdraw` | `infera-social/src/api/routes.rs:426` | social:claim:update_own | pending |
| `POST /api/v1/claims/{id}/select` | `infera-social/src/api/routes.rs:437` | social:claim:select_own | pending |
| `PUT /api/v1/claims/{id}/contact-consent` | `infera-social/src/api/routes.rs:448` | social:claim:consent | pending |
| `GET /api/v1/claims/{id}` | `infera-social/src/api/routes.rs:489` | social:read | pending |
| `GET /api/v1/me/claims` | `infera-social/src/api/routes.rs:460` | social:read | pending |
| `GET /api/v1/me/posts/{id}/claims` | `infera-social/src/api/routes.rs:474` | social:read | pending |
| `POST /api/v1/integrations/funding-events` | `infera-social/src/api/routes.rs:511` | social:integrations:write | pending |
| `GET /api/v1/posts/{id}/comments` | `infera-social/src/api/routes.rs:627` | social:read | pending |
| `POST /api/v1/posts/{id}/comments` | `infera-social/src/api/routes.rs:638` | social:comment:create | pending |
| `POST /api/v1/posts/{id}/resubmit` | `infera-social/src/api/routes.rs:555` | social:post:update_own | pending |
| `PUT /api/v1/posts/{id}/bookmark` | `infera-social/src/api/routes.rs:566` | social:bookmark:write | pending |
| `DELETE /api/v1/posts/{id}/bookmark` | `infera-social/src/api/routes.rs:575` | social:bookmark:write | pending |
| `POST /api/v1/posts/{id}/views` | `infera-social/src/api/routes.rs:584` | social:view:write | pending |
| `POST /api/v1/posts/{id}/share-events` | `infera-social/src/api/routes.rs:595` | social:share:write | pending |
| `GET /api/v1/posts/{id}/analytics` | `infera-social/src/api/routes.rs:615` | social:analytics:read_own | pending |
| `PATCH /api/v1/comments/{id}` | `infera-social/src/api/routes.rs:650` | social:comment:update_own | pending |
| `DELETE /api/v1/comments/{id}` | `infera-social/src/api/routes.rs:662` | social:comment:delete_own | pending |
| `GET /api/v1/posts/{id}/reaction` | `infera-social/src/api/routes.rs:672` | social:read | pending |
| `PUT /api/v1/posts/{id}/reaction` | `infera-social/src/api/routes.rs:694` | social:reaction:write | pending |
| `DELETE /api/v1/posts/{id}/reaction` | `infera-social/src/api/routes.rs:762` | social:reaction:write | pending |
| `GET /api/v1/comments/{id}/reaction` | `infera-social/src/api/routes.rs:683` | social:read | pending |
| `PUT /api/v1/comments/{id}/reaction` | `infera-social/src/api/routes.rs:707` | social:reaction:write | pending |
| `DELETE /api/v1/comments/{id}/reaction` | `infera-social/src/api/routes.rs:772` | social:reaction:write | pending |
| `PUT /api/v1/posts/{id}/like` | `infera-social/src/api/routes.rs:720` | social:reaction:write | pending |
| `DELETE /api/v1/posts/{id}/like` | `infera-social/src/api/routes.rs:762` | social:reaction:write | pending |
| `PUT /api/v1/comments/{id}/like` | `infera-social/src/api/routes.rs:741` | social:reaction:write | pending |
| `DELETE /api/v1/comments/{id}/like` | `infera-social/src/api/routes.rs:772` | social:reaction:write | pending |
| `POST /api/v1/reports` | `infera-social/src/api/routes.rs:782` | social:report:create | pending |
| `GET /api/v1/moderation/queue` | `infera-social/src/api/routes.rs:792` | social:moderate, social:moderation:review | pending |
| `GET /api/v1/moderation/audit` | `infera-social/src/api/routes.rs:802` | social:moderate, social:moderation:review | pending |
| `POST /api/v1/moderation/actions` | `infera-social/src/api/routes.rs:815` | social:moderate, social:moderation:review | pending |
| `POST /api/v1/admin/import/modules` | `infera-social/src/api/routes.rs:826` | social:admin | pending |
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
| `GET /api/v1/admin/social/settings` | `infera-social/src/admin.rs:714` | social:settings:manage | pending |
| `GET /api/v1/comments/post/{id}` | `infera-social/src/api/routes.rs:627` | social:read | pending |
| `POST /api/v1/comments/post/{id}` | `infera-social/src/api/routes.rs:638` | social:comment:create | pending |
| `GET /api/v1/reactions/post/{id}` | `infera-social/src/api/routes.rs:672` | social:read | pending |
| `POST /api/v1/reactions/post/{id}` | `infera-social/src/api/routes.rs:694` | social:reaction:write | pending |
| `DELETE /api/v1/reactions/post/{id}` | `infera-social/src/api/routes.rs:762` | social:reaction:write | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/social.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
