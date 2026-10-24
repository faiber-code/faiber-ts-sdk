# idp capability discovery

Canonical identity, credentials, sessions, federation, roles, permissions and gateway authorization.

هویت مرجع، اطلاعات ورود، نشست، اتصال هویت، نقش، مجوز و احراز دسترسی.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `8a841a96c6d03fba9f7baa9e5eb2cc14f0e9747d`
- SDK source revision: `828799249ef714d333b03bded092a9d6af6ba7bb`
- Evidence inventory revision: `828799249ef714d333b03bded092a9d6af6ba7bb` (sdk)
- Working HEAD: `9965e90a81fa3c4844a00e710d8d31b20527fede`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-idp/src/router.rs:236` | inspect middleware/local scope | pending |
| `GET /api/openapi.json` | `infera-idp/src/router.rs:220` | inspect middleware/local scope | pending |
| `GET /.well-known/openid-configuration` | `infera-idp/src/oidc.rs:105` | inspect middleware/local scope | pending |
| `GET /oauth2/authorize` | `infera-idp/src/oidc.rs:142` | inspect middleware/local scope | pending |
| `POST /oauth2/token` | `infera-idp/src/oidc.rs:282` | inspect middleware/local scope | pending |
| `GET /oauth2/userinfo` | `infera-idp/src/oidc.rs:642` | inspect middleware/local scope | pending |
| `POST /oauth2/userinfo` | `infera-idp/src/oidc.rs:642` | inspect middleware/local scope | pending |
| `GET /oauth2/jwks` | `infera-idp/src/oidc.rs:625` | inspect middleware/local scope | pending |
| `POST /oauth2/revoke` | `infera-idp/src/oidc.rs:705` | inspect middleware/local scope | pending |
| `POST /oauth2/introspect` | `infera-idp/src/oidc.rs:743` | inspect middleware/local scope | pending |
| `POST /oauth2/backchannel-logout` | `infera-idp/src/oidc.rs:805` | inspect middleware/local scope | pending |
| `GET /oauth2/logout` | `infera-idp/src/oidc.rs:788` | inspect middleware/local scope | pending |
| `POST /oauth2/logout` | `infera-idp/src/oidc.rs:788` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/authority` | `infera-idp/src/identity_authority.rs:375` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/validate` | `infera-idp/src/auth/routes.rs:2128` | inspect middleware/local scope | pending |
| `OPTIONS /api/v1/auth/validate` | `infera-idp/src/auth/routes.rs:2128` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/generate/one-time` | `infera-idp/src/auth/routes.rs:2500` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/secure/generate/one-time/{user_id}` | `infera-idp/src/auth/routes.rs:2540` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/login` | `infera-idp/src/auth/routes.rs:1241` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/logout` | `infera-idp/src/auth/routes.rs:2660` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/web-login` | `infera-idp/src/auth/routes.rs:1330` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/browser-login` | `infera-idp/src/auth/routes.rs:1447` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/token-login` | `infera-idp/src/auth/routes.rs:1535` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/handoff/exchange` | `infera-idp/src/auth/routes.rs:1707` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/secure/handoff/{user_id}` | `infera-idp/src/auth/routes.rs:1664` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/secure/exchange/one-time` | `infera-idp/src/auth/routes.rs:1593` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/handoff` | `infera-idp/src/auth/routes.rs:1768` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/account-login` | `infera-idp/src/auth/routes.rs:2581` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/otp-login` | `infera-idp/src/auth/routes.rs:1840` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/oauth/providers` | `infera-idp/src/auth/routes.rs:223` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/native/authorize` | `infera-idp/src/auth/native.rs:59` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/native/token` | `infera-idp/src/auth/native.rs:130` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/identities` | `infera-idp/src/auth/routes.rs:726` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/linked-faiber/billing` | `infera-idp/src/auth/routes.rs:555` | inspect middleware/local scope | pending |
| `POST /api/v1/auth/linked-faiber/wallet/topup` | `infera-idp/src/auth/routes.rs:679` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/oauth/{provider}` | `infera-idp/src/auth/routes.rs:234` | inspect middleware/local scope | pending |
| `DELETE /api/v1/auth/oauth/{provider}` | `infera-idp/src/auth/routes.rs:809` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/oauth/{provider}/callback` | `infera-idp/src/auth/routes.rs:328` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/refresh` | `infera-idp/src/auth/routes.rs:1915` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/sessions` | `infera-idp/src/auth/routes.rs:2714` | inspect middleware/local scope | pending |
| `DELETE /api/v1/auth/sessions/{session_id}` | `infera-idp/src/auth/routes.rs:2783` | inspect middleware/local scope | pending |
| `GET /api/v1/users` | `infera-idp/src/user/routes.rs:544` | inspect middleware/local scope | pending |
| `POST /api/v1/users` | `infera-idp/src/user/routes.rs:578` | inspect middleware/local scope | pending |
| `POST /api/v1/users/register-phone` | `infera-idp/src/user/routes.rs:158` | inspect middleware/local scope | pending |
| `POST /api/v1/users/register-email` | `infera-idp/src/user/routes.rs:207` | inspect middleware/local scope | pending |
| `POST /api/v1/users/register` | `infera-idp/src/user/routes.rs:248` | inspect middleware/local scope | pending |
| `GET /api/v1/users/self` | `infera-idp/src/user/routes.rs:320` | inspect middleware/local scope | pending |
| `PATCH /api/v1/users/self` | `infera-idp/src/user/routes.rs:380` | inspect middleware/local scope | pending |
| `GET /api/v1/users/self/password` | `infera-idp/src/user/self_password.rs:46` | inspect middleware/local scope | pending |
| `PUT /api/v1/users/self/password` | `infera-idp/src/user/self_password.rs:66` | inspect middleware/local scope | pending |
| `GET /api/v1/users/directory` | `infera-idp/src/user/routes.rs:87` | inspect middleware/local scope | pending |
| `GET /api/v1/users/stats` | `infera-idp/src/user/routes.rs:499` | inspect middleware/local scope | pending |
| `GET /api/v1/users/registration-stats` | `infera-idp/src/user/routes.rs:514` | inspect middleware/local scope | pending |
| `GET /api/v1/users/sync` | `infera-idp/src/user/routes.rs:998` | inspect middleware/local scope | pending |
| `GET /api/v1/users/{user_id}` | `infera-idp/src/user/routes.rs:658` | inspect middleware/local scope | pending |
| `PUT /api/v1/users/{user_id}` | `infera-idp/src/user/routes.rs:691` | inspect middleware/local scope | pending |
| `PATCH /api/v1/users/{user_id}` | `infera-idp/src/user/routes.rs:691` | inspect middleware/local scope | pending |
| `PUT /api/v1/users/{user_id}/change-password` | `infera-idp/src/user/routes.rs:759` | inspect middleware/local scope | pending |
| `PATCH /api/v1/users/{user_id}/change-password` | `infera-idp/src/user/routes.rs:759` | inspect middleware/local scope | pending |
| `GET /api/v1/users/{user_id}/role-memberships` | `infera-idp/src/user/memberships.rs:163` | inspect middleware/local scope | pending |
| `POST /api/v1/users/{user_id}/role-memberships` | `infera-idp/src/user/memberships.rs:188` | inspect middleware/local scope | pending |
| `PUT /api/v1/users/{user_id}/change-roles` | `infera-idp/src/user/routes.rs:810` | inspect middleware/local scope | pending |
| `PATCH /api/v1/users/{user_id}/change-roles` | `infera-idp/src/user/routes.rs:810` | inspect middleware/local scope | pending |
| `DELETE /api/v1/users/{user_id}` | `infera-idp/src/user/routes.rs:856` | inspect middleware/local scope | pending |
| `GET /api/v1/users/{user_id}/logout` | `infera-idp/src/user/routes.rs:948` | inspect middleware/local scope | pending |
| `PUT /api/v1/users/{user_id}/status` | `infera-idp/src/user/routes.rs:897` | inspect middleware/local scope | pending |
| `PATCH /api/v1/users/{user_id}/status` | `infera-idp/src/user/routes.rs:897` | inspect middleware/local scope | pending |
| `GET /api/v1/acl/roles` | `infera-idp/src/acl/routes.rs:47` | inspect middleware/local scope | pending |
| `POST /api/v1/acl/roles` | `infera-idp/src/acl/routes.rs:72` | inspect middleware/local scope | pending |
| `GET /api/v1/acl/roles/{role_id}` | `infera-idp/src/acl/routes.rs:131` | inspect middleware/local scope | pending |
| `PUT /api/v1/acl/roles/{role_id}` | `infera-idp/src/acl/routes.rs:183` | inspect middleware/local scope | pending |
| `PATCH /api/v1/acl/roles/{role_id}` | `infera-idp/src/acl/routes.rs:183` | inspect middleware/local scope | pending |
| `DELETE /api/v1/acl/roles/{role_id}` | `infera-idp/src/acl/routes.rs:94` | inspect middleware/local scope | pending |
| `GET /api/v1/acl/permissions` | `infera-idp/src/acl/routes.rs:240` | inspect middleware/local scope | pending |
| `GET /api/v1/acl/permission-templates` | `infera-idp/src/acl/routes.rs:308` | inspect middleware/local scope | pending |
| `GET /api/v1/acl/roles/{role_id}/permission-grants` | `infera-idp/src/acl/permission_grants.rs:240` | inspect middleware/local scope | pending |
| `PATCH /api/v1/acl/roles/{role_id}/permission-grants` | `infera-idp/src/acl/permission_grants.rs:258` | inspect middleware/local scope | pending |
| `GET /api/v1/acl/users/{user_id}/effective-permissions` | `infera-idp/src/effective_permissions.rs:57` | inspect middleware/local scope | pending |
| `GET /api/v1/settings/oauth` | `infera-idp/src/settings/routes.rs:239` | inspect middleware/local scope | pending |
| `PUT /api/v1/settings/oauth` | `infera-idp/src/settings/routes.rs:254` | inspect middleware/local scope | pending |
| `GET /api/v1/settings/login-page/public` | `infera-idp/src/settings/routes.rs:187` | inspect middleware/local scope | pending |
| `GET /api/v1/settings/login-page/assets/{asset_key}` | `infera-idp/src/settings/routes.rs:50` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/login-page/assets` | `infera-idp/src/settings/routes.rs:97` | inspect middleware/local scope | pending |
| `GET /api/v1/settings/login-page` | `infera-idp/src/settings/routes.rs:198` | inspect middleware/local scope | pending |
| `PUT /api/v1/settings/login-page` | `infera-idp/src/settings/routes.rs:218` | inspect middleware/local scope | pending |
| `GET /api/v1/settings/identity-authority` | `infera-idp/src/identity_authority.rs:385` | inspect middleware/local scope | pending |
| `PUT /api/v1/settings/identity-authority` | `infera-idp/src/identity_authority.rs:394` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/identity-authority/discover` | `infera-idp/src/identity_authority.rs:591` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/identity-authority/pair` | `infera-idp/src/identity_authority.rs:1082` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/identity-authority/pair-faiber` | `infera-idp/src/identity_authority.rs:1112` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/identity-authority/activate-canonical` | `infera-idp/src/identity_authority.rs:1215` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/identity-authority/recover-canonical` | `infera-idp/src/identity_authority.rs:1228` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/identity-authority/pairing-invitations` | `infera-idp/src/identity_authority.rs:668` | inspect middleware/local scope | pending |
| `POST /api/v1/federation/enroll` | `infera-idp/src/identity_authority.rs:731` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/custom-oauth/providers` | `infera-idp/src/custom_oauth.rs:504` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/custom-oauth/{provider}` | `infera-idp/src/custom_oauth.rs:722` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/custom-oauth/{provider}/callback` | `infera-idp/src/custom_oauth.rs:1047` | inspect middleware/local scope | pending |
| `DELETE /api/v1/auth/custom-oauth/{provider}/link` | `infera-idp/src/custom_oauth.rs:1476` | inspect middleware/local scope | pending |
| `GET /api/v1/settings/custom-oauth` | `infera-idp/src/custom_oauth.rs:345` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/custom-oauth` | `infera-idp/src/custom_oauth.rs:366` | inspect middleware/local scope | pending |
| `PUT /api/v1/settings/custom-oauth/{id}` | `infera-idp/src/custom_oauth.rs:416` | inspect middleware/local scope | pending |
| `DELETE /api/v1/settings/custom-oauth/{id}` | `infera-idp/src/custom_oauth.rs:467` | inspect middleware/local scope | pending |
| `GET /api/v1/settings/oauth-clients` | `infera-idp/src/oauth_clients.rs:378` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/oauth-clients` | `infera-idp/src/oauth_clients.rs:394` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/oauth-clients/website-bootstrap` | `infera-idp/src/oauth_clients.rs:63` | inspect middleware/local scope | pending |
| `PUT /api/v1/settings/oauth-clients/{id}` | `infera-idp/src/oauth_clients.rs:449` | inspect middleware/local scope | pending |
| `DELETE /api/v1/settings/oauth-clients/{id}` | `infera-idp/src/oauth_clients.rs:538` | inspect middleware/local scope | pending |
| `POST /api/v1/settings/oauth-clients/{id}/rotate-secret` | `infera-idp/src/oauth_clients.rs:501` | inspect middleware/local scope | pending |
| `GET /integration/flow` | `infera-idp/src/integration/routes.rs:9` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/idp.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
