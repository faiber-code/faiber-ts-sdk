// Source-only semantic corrections from immutable IDP 828799249ef714d333b03bded092a9d6af6ba7bb.
// Native evidence remains independently required; these declarations do not certify release gates.
export const idpSourceContracts = {
  "idp:GET /health": {
    "auth": "no handler authentication check; deployment gateway policy is separate",
    "purpose": "Read process health and the static service version; does not verify database, broker or downstream readiness."
  },
  "idp:GET /api/openapi.json": {
    "auth": "no handler authentication check; deployment gateway policy is separate",
    "purpose": "Read the runtime OpenAPI document. This partial annotated document is not the complete mounted endpoint inventory."
  },
  "idp:GET /.well-known/openid-configuration": {
    "auth": "public metadata handler",
    "purpose": "Read raw OIDC discovery metadata, including issuer-root endpoints; no API envelope."
  },
  "idp:GET /oauth2/authorize": {
    "auth": "registered active OAuth client; current user Bearer/cookie session or login redirect",
    "purpose": "Authorize an OIDC code flow using S256 PKCE, state of at least 8 characters, registered redirect URI and allowed openid scopes. Redirects to login when unauthenticated; returns 303 with Location.",
    "requiredQuery": true
  },
  "idp:POST /oauth2/token": {
    "auth": "registered OAuth client and the credential method configured for that client",
    "purpose": "Exchange an authorization code, refresh token, service client credential or canonical subject token. Sends a URL-encoded form and returns raw token JSON; supported fields depend on grant_type. Client credentials require an assigned service user; token exchange requires linked authority."
  },
  "idp:GET /oauth2/userinfo": {
    "auth": "valid active Bearer access token (cookie alone is not accepted)",
    "purpose": "Read the Bearer token subject and only claims allowed by its scopes; nullable values remain nullable. Returns raw JSON; missing or invalid tokens/users fail with 401."
  },
  "idp:POST /oauth2/userinfo": {
    "auth": "valid active Bearer access token (cookie alone is not accepted)",
    "purpose": "Read the Bearer token subject and only claims allowed by its scopes; nullable values remain nullable. Returns raw JSON; missing or invalid tokens/users fail with 401."
  },
  "idp:GET /oauth2/jwks": {
    "auth": "public signing-key handler",
    "purpose": "Read public RSA signing keys as raw JWKS; key configuration errors propagate and no private key material is returned."
  },
  "idp:POST /oauth2/revoke": {
    "auth": "registered OAuth client and the credential method configured for that client",
    "purpose": "Revoke a token belonging to the authenticated OAuth client. Unknown or another client token remains a successful no-op; returns empty HTTP 200, not JSON."
  },
  "idp:POST /oauth2/introspect": {
    "auth": "registered OAuth client and the credential method configured for that client",
    "purpose": "Inspect an access or refresh token as a raw active/inactive JSON union; authenticate the requesting OAuth client through form credentials or HTTP Basic."
  },
  "idp:POST /oauth2/backchannel-logout": {
    "auth": "linked identity authority and a valid signed canonical-provider logout JWT",
    "purpose": "Consume a validated upstream OIDC logout JWT in linked mode; nonce is forbidden and logout event plus subject/session is required. Deletes matching linked sessions and returns empty 204."
  },
  "idp:GET /oauth2/logout": {
    "auth": "current Bearer/cookie session when present; otherwise succeeds without a session",
    "purpose": "End the current session and attempt back-channel logout propagation; returns empty 204 even when no current session is found. Does not clear cookies in this handler."
  },
  "idp:POST /oauth2/logout": {
    "auth": "current Bearer/cookie session when present; otherwise succeeds without a session",
    "purpose": "End the current session and attempt back-channel logout propagation; returns empty 204 even when no current session is found. Does not clear cookies in this handler."
  },
  "idp:GET /api/v1/auth/authority": {
    "auth": "public authority-status handler",
    "purpose": "Read public local/canonical identity authority mode, rollout and federation session status; nullable upstream configuration values remain null."
  },
  "idp:GET /api/v1/auth/validate": {
    "auth": "current Bearer/cookie session and forward-auth policy; OPTIONS/preflight returns success without authentication",
    "purpose": "Validate forward-auth and emit principal/permission response headers with a status/message JSON body. Preflight bypasses authentication; HTML unauthenticated requests may redirect. Original method/URI, service and required-role headers affect policy."
  },
  "idp:OPTIONS /api/v1/auth/validate": {
    "auth": "current Bearer/cookie session and forward-auth policy; OPTIONS/preflight returns success without authentication",
    "purpose": "Return empty HTTP 200 CORS preflight from the outer CorsLayer before the validate handler executes; no JSON body or principal headers are produced.",
    "response": "void"
  },
  "idp:POST /api/v1/auth/generate/one-time": {
    "auth": "current active Bearer or secure cookie session; no additional ACL permission",
    "purpose": "Generate one durable single-use token bound to the current user, client and active session; returns data.token. Missing session returns 401.",
    "response": "import(\"./contracts.types.js\").OneTimeTokenResponse"
  },
  "idp:POST /api/v1/auth/secure/generate/one-time/{user_id}": {
    "auth": "server-only x-infera-idp-service-token and exact configured internal Host; missing configuration 503, invalid credential 401, wrong Host 403",
    "purpose": "Generate one durable single-use token for a target native user UUID and the service default client; returns data.token. This is an internal server operation."
  },
  "idp:POST /api/v1/auth/login": {
    "auth": "local identity authority plus registered legacy client_id/client_secret and user credentials",
    "purpose": "Exchange a password with grant_type=password and the configured legacy client secret for a token envelope. Disabled principal, client or session cannot receive tokens.",
    "response": "import(\"./types.js\").AuthTokensResponse"
  },
  "idp:GET /api/v1/auth/logout": {
    "auth": "current active Bearer or secure cookie session; no additional ACL permission",
    "purpose": "Revoke the current session and tokens, attempt back-channel logout and remove the current cookies. Returns only status/message; missing session returns 401.",
    "response": "import(\"./contracts.types.js\").IdpEmptyResponse"
  },
  "idp:POST /api/v1/auth/web-login": {
    "auth": "local identity authority plus registered legacy client_id/client_secret and user credentials",
    "purpose": "Authenticate a legacy client password form and set secure session cookies. Returns only status/message; does not return tokens in the body.",
    "response": "import(\"./contracts.types.js\").IdpEmptyResponse"
  },
  "idp:POST /api/v1/auth/browser-login": {
    "auth": "local identity authority, active public client with auth method none, matching registered HTTPS Origin and valid user credentials",
    "purpose": "Authenticate a registered public client with a password or OTP and matching HTTPS Origin. Returns only status/message and HttpOnly cookies; never returns bearer credentials. Invalid origin returns 403."
  },
  "idp:GET /api/v1/auth/token-login": {
    "auth": "valid durable single-use token and same-realm redirect; bootstrap session flow",
    "purpose": "Consume a durable single-use token, set session cookies and return a 303 redirect within the same sandbox realm. handoff_ codes are rejected; returns no JSON envelope.",
    "response": "void",
    "requiredQuery": true
  },
  "idp:POST /api/v1/auth/handoff/exchange": {
    "auth": "valid single-use handoff_ token matching the explicit client_id",
    "purpose": "Consume a handoff_ code once for its explicit active OAuth client. Revalidates user, client and session; returns a token envelope. Wrong-client consumption is rejected."
  },
  "idp:POST /api/v1/auth/secure/handoff/{user_id}": {
    "auth": "server-only x-infera-handoff-secret and configured client allowlist",
    "purpose": "Issue one single-use handoff_ code for a specified allowed client and target user. Requires a server secret header; never expose this credential in browser code."
  },
  "idp:POST /api/v1/auth/secure/exchange/one-time": {
    "auth": "server-only x-infera-idp-service-token and exact configured internal Host; missing configuration 503, invalid credential 401, wrong Host 403",
    "purpose": "Consume a non-handoff durable one-time token once and revalidate its bound client, user and session; returns a token envelope. This is an internal server operation."
  },
  "idp:GET /api/v1/auth/handoff": {
    "auth": "current active Bearer or secure cookie session; no additional ACL permission",
    "purpose": "Transfer a current canonical-realm session to an explicitly trusted HTTPS IDP alias. Returns a 303 redirect to login or token-login; target and return redirect must satisfy realm checks.",
    "response": "void",
    "requiredQuery": true
  },
  "idp:POST /api/v1/auth/account-login": {
    "auth": "current active Bearer or secure cookie session; no additional ACL permission",
    "purpose": "Exchange the current parent session for child-account tokens after checking Profile parent ownership. account is the child native user UUID; returns a token envelope, not a cookie-only body.",
    "response": "import(\"./types.js\").AuthTokensResponse"
  },
  "idp:POST /api/v1/auth/otp-login": {
    "auth": "local identity authority plus registered legacy client_id/client_secret and user credentials",
    "purpose": "Exchange grant_type=password plus otp_code and the configured legacy client secret. Returns a token envelope and sets session cookies; OTP and local-authority checks apply."
  },
  "idp:GET /api/v1/auth/oauth/providers": {
    "auth": "public provider-discovery handler",
    "purpose": "List enabled built-in provider names in data.providers; does not return an array of provider objects."
  },
  "idp:GET /api/v1/auth/native/authorize": {
    "auth": "registered native client/redirect and current session or login redirect",
    "purpose": "Start the native S256 PKCE code flow. Requires registered redirect, state of at least 16 characters and challenge of at least 43 characters. Returns a 303 login or callback redirect; code expires after 120 seconds.",
    "requiredQuery": true
  },
  "idp:POST /api/v1/auth/native/token": {
    "auth": "valid native single-use authorization code and matching S256 verifier/client/redirect",
    "purpose": "Consume the native authorization code once with its client, redirect and 43\u2013128 character PKCE verifier. Sends URL-encoded form; returns raw token JSON including token_type."
  },
  "idp:GET /api/v1/auth/identities": {
    "auth": "current active Bearer or secure cookie session; no additional ACL permission",
    "purpose": "List provider subjects linked to the current user, including built-in identities and active custom-provider identities. Returns data.identities."
  },
  "idp:GET /api/v1/auth/linked-faiber/billing": {
    "auth": "current active Bearer or secure cookie session; no additional ACL permission",
    "purpose": "Read the linked main-Faiber wallet and daily costs. page defaults to 1, page_size to 14 (1\u2013100), timezone to 0 (\u00b1840 minutes). Optional project slug uses alphanumeric/hyphen characters; downstream failures return 502."
  },
  "idp:POST /api/v1/auth/linked-faiber/wallet/topup": {
    "auth": "current active Bearer or secure cookie session; no additional ACL permission",
    "purpose": "Create a positive top-up against the linked main-Faiber wallet; returns purchase_id and payment_url. Non-positive amount returns 422; upstream rejection becomes 502."
  },
  "idp:GET /api/v1/auth/oauth/{provider}": {
    "auth": "public login bootstrap; intent=link requires current Bearer/cookie session",
    "purpose": "Begin built-in Google/GitHub login or linking with a private state cookie and 303 redirect. intent=link requires an existing session; redirect is constrained by backend realm rules."
  },
  "idp:DELETE /api/v1/auth/oauth/{provider}": {
    "auth": "current active Bearer or secure cookie session; no additional ACL permission",
    "purpose": "Remove a built-in provider identity from the current account. Refuses removal of the last login method with 409; returns status/message."
  },
  "idp:GET /api/v1/auth/oauth/{provider}/callback": {
    "auth": "matching private OAuth state cookie and upstream authorization code",
    "purpose": "Finish built-in OAuth using the private state cookie and upstream code. Establishes or links the identity, sets session cookies and redirects; errors may be reported by login redirect."
  },
  "idp:GET /api/v1/auth/refresh": {
    "auth": "valid active refresh cookie or Bearer refresh token; access token is not a refresh credential",
    "purpose": "Refresh from the private refresh cookie when present, otherwise from a Bearer refresh credential. Returns a token envelope; cookie refresh preserves its original refresh deadline while token refresh revokes the old credential.",
    "response": "import(\"./types.js\").AuthTokensResponse"
  },
  "idp:GET /api/v1/auth/sessions": {
    "auth": "current active Bearer or secure cookie session; no additional ACL permission",
    "purpose": "List active sessions for the current user, including client and device metadata and is_current. Nullable metadata fields remain present as null."
  },
  "idp:DELETE /api/v1/auth/sessions/{session_id}": {
    "auth": "current active Bearer or secure cookie session; no additional ACL permission",
    "purpose": "Revoke another active session owned by the current user. Unknown/unowned sessions return 404 and the current session returns 409; use logout to end the current session."
  },
  "idp:GET /api/v1/users": {
    "auth": "current idp:user:read through the native active principal/session and a matching dynamic target scope",
    "purpose": "List managed users using search, enabled/disabled status and exact current active role filters. page defaults to 1, per_page to 20 and clamps to 1\u2013100; pages clamp to the last page. UUID search is exact; other search uses SQL LIKE across identifiers/display name."
  },
  "idp:POST /api/v1/users": {
    "auth": "current idp:user:create through the native active principal/session",
    "purpose": "Create a managed user with at least one identifier; password needs at least 8 characters. Applies local role UUIDs and activates the account. Duplicate identity returns 409; returns data.user."
  },
  "idp:POST /api/v1/users/register-phone": {
    "auth": "public local-authority registration bootstrap; cannot assign roles",
    "purpose": "Find or register an OTP phone identity and request an OTP delivery. Public registration cannot assign roles (403); returns user_id and otp_sent flags."
  },
  "idp:POST /api/v1/users/register-email": {
    "auth": "public local-authority registration bootstrap; cannot assign roles",
    "purpose": "Find or register an email identity and request OTP delivery; returns user_id and otp_sent flags. Local identity authority is required."
  },
  "idp:POST /api/v1/users/register": {
    "auth": "public local-authority registration bootstrap; cannot assign roles",
    "purpose": "Resolve or create an identity by supplied identifiers. Public role/roles assignment is forbidden (403); returns data.user containing only user_id and created, not a managed user resource."
  },
  "idp:GET /api/v1/users/self": {
    "auth": "current active Bearer/cookie session",
    "purpose": "Read the authenticated identity and current roles/permissions directly in data; no data.user wrapper."
  },
  "idp:PATCH /api/v1/users/self": {
    "auth": "current active Bearer/cookie session",
    "purpose": "Fill missing self identifiers only; trims values and lowercases email. Existing identifiers cannot be replaced (409); empty input returns 422. Publishes Profile/LMS identity updates."
  },
  "idp:GET /api/v1/users/self/password": {
    "auth": "current active Bearer/cookie session",
    "purpose": "Read whether the current account has a password identity; returns data.has_password."
  },
  "idp:PUT /api/v1/users/self/password": {
    "auth": "current active Bearer/cookie session",
    "purpose": "Set the current account password (8\u2013128 characters) while preserving non-password identities. current_password is accepted but not verified by this backend; session authentication authorizes replacement. Unknown fields return 422."
  },
  "idp:GET /api/v1/users/directory": {
    "auth": "current active Bearer/cookie session",
    "purpose": "Search enabled accounts using at least 3 trimmed characters; returns at most 10 matches. Email/phone are masked except exact contact matches. Requires a session, not user-read administration.",
    "requiredQuery": true
  },
  "idp:GET /api/v1/users/stats": {
    "auth": "current idp:user:read through the native active principal/session and a matching dynamic target scope",
    "purpose": "Read counts of total users, enabled users and active sessions; returns the three counts in data."
  },
  "idp:GET /api/v1/users/registration-stats": {
    "auth": "current idp:user:read through the native active principal/session and a matching dynamic target scope",
    "purpose": "Read registration buckets for range=day (default), week or year; invalid range returns 400. Returns data.points with bucket and registrations."
  },
  "idp:GET /api/v1/users/sync": {
    "auth": "no handler session or ACL check; deployment gateway policy is separate",
    "purpose": "Publish all users to LMS and active users to Profile; this GET mutates downstream state and returns data=true. Handler has no session or ACL check; deployment gateway policy is separate."
  },
  "idp:GET /api/v1/users/{user_id}": {
    "auth": "current idp:user:read through the native active principal/session and a matching dynamic target scope",
    "purpose": "Read a managed user by native UUID; returns data.user and 404 for unknown identities."
  },
  "idp:PUT /api/v1/users/{user_id}": {
    "auth": "current idp:user:update through the native active principal/session and a matching dynamic target scope",
    "purpose": "Replace phone, email and national_code using PATCH or PUT. Omitted/null/empty fields are cleared by this backend, so supply every identity value to retain. Validates and publishes Profile/LMS updates; returns data.user."
  },
  "idp:PATCH /api/v1/users/{user_id}": {
    "auth": "current idp:user:update through the native active principal/session and a matching dynamic target scope",
    "purpose": "Replace phone, email and national_code using PATCH or PUT. Omitted/null/empty fields are cleared by this backend, so supply every identity value to retain. Validates and publishes Profile/LMS updates; returns data.user."
  },
  "idp:PUT /api/v1/users/{user_id}/change-password": {
    "auth": "current idp:user:change_password through the native active principal/session and a matching dynamic target scope",
    "purpose": "Set an administrative target password of at least 8 characters. When password is supplied, this legacy handler deletes all local identity rows before creating the password identity; use self/password for preservation. Returns data.user."
  },
  "idp:PATCH /api/v1/users/{user_id}/change-password": {
    "auth": "current idp:user:change_password through the native active principal/session and a matching dynamic target scope",
    "purpose": "Set an administrative target password of at least 8 characters. When password is supplied, this legacy handler deletes all local identity rows before creating the password identity; use self/password for preservation. Returns data.user."
  },
  "idp:GET /api/v1/users/{user_id}/role-memberships": {
    "auth": "idp:user:read with a matching current target scope, rechecked after target user lock",
    "purpose": "Read every stored local role membership row, including inactive and duplicate rows, with an opaque revision. Does not activate the target or grant authority."
  },
  "idp:POST /api/v1/users/{user_id}/role-memberships": {
    "auth": "idp:user:assign_roles with a matching current target scope and assignable-role ceiling, rechecked after target user lock",
    "purpose": "Append 1\u2013128 unique non-nil active local role UUIDs to an already enabled local user. Preserves every existing membership; repeated active additions are no-ops. Rechecks authority under the target lock."
  },
  "idp:PUT /api/v1/users/{user_id}/change-roles": {
    "auth": "idp:user:assign_roles with a matching current target scope; added and removed roles must fit its assignment ceiling, rechecked after target user lock",
    "purpose": "Intentionally replace target memberships with reviewed role UUIDs and quoted If-Match revision. Missing precondition is 428; stale revision is 409 with zero changes. Never fetch a fresh revision to submit a saved stale union. Missing/null roles is a no-op."
  },
  "idp:PATCH /api/v1/users/{user_id}/change-roles": {
    "auth": "idp:user:assign_roles with a matching current target scope; added and removed roles must fit its assignment ceiling, rechecked after target user lock",
    "purpose": "Intentionally replace target memberships with reviewed role UUIDs and quoted If-Match revision. Missing precondition is 428; stale revision is 409 with zero changes. Never fetch a fresh revision to submit a saved stale union. Missing/null roles is a no-op."
  },
  "idp:DELETE /api/v1/users/{user_id}": {
    "auth": "current idp:user:delete through the native active principal/session and a matching dynamic target scope",
    "purpose": "Delete a managed user and publish downstream deletion. Cannot delete the current caller (406); returns data.user, not a deleted flag."
  },
  "idp:GET /api/v1/users/{user_id}/logout": {
    "auth": "current idp:user:logout through the native active principal/session and a matching dynamic target scope",
    "purpose": "Force-revoke all target user sessions and attempt back-channel logout propagation; returns the updated data.user with active-session count."
  },
  "idp:PUT /api/v1/users/{user_id}/status": {
    "auth": "current idp:user:update through the native active principal/session and a matching dynamic target scope",
    "purpose": "Enable or disable a target account. Cannot disable self (406); disabling revokes current tokens/sessions before external publication and re-enabling does not restore credentials. Returns data.user."
  },
  "idp:PATCH /api/v1/users/{user_id}/status": {
    "auth": "current idp:user:update through the native active principal/session and a matching dynamic target scope",
    "purpose": "Enable or disable a target account. Cannot disable self (406); disabling revokes current tokens/sessions before external publication and re-enabling does not restore credentials. Returns data.user."
  },
  "idp:GET /api/v1/acl/roles": {
    "auth": "current idp:acl:read",
    "purpose": "List active local roles as data.roles with UUID and name."
  },
  "idp:POST /api/v1/acl/roles": {
    "auth": "current idp:acl:update",
    "purpose": "Create an active local role. Accepts optional initial permissions but the response permission array is empty; read the role to inspect persisted grants."
  },
  "idp:GET /api/v1/acl/roles/{role_id}": {
    "auth": "current idp:acl:read",
    "purpose": "Read one active local role and its permission UUID/name list; unknown/inactive roles return 404."
  },
  "idp:PUT /api/v1/acl/roles/{role_id}": {
    "auth": "current idp:acl:update",
    "purpose": "Replace the entire permission set of one active role; preserves no omitted grants. The built-in admin role is protected (406); prefer revisioned permission deltas for additive changes."
  },
  "idp:PATCH /api/v1/acl/roles/{role_id}": {
    "auth": "current idp:acl:update",
    "purpose": "Replace the entire permission set of one active role; preserves no omitted grants. The built-in admin role is protected (406); prefer revisioned permission deltas for additive changes."
  },
  "idp:DELETE /api/v1/acl/roles/{role_id}": {
    "auth": "current idp:acl:update",
    "purpose": "Delete an active local role; built-in names are protected (406). Returns data.id/name, not data.role or a deleted flag."
  },
  "idp:GET /api/v1/acl/permissions": {
    "auth": "current idp:acl:read",
    "purpose": "List native permission UUID/name records and the static service namespace catalog in data.permissions and data.services."
  },
  "idp:GET /api/v1/acl/permission-templates": {
    "auth": "current idp:acl:read",
    "purpose": "Read built-in quick/service permission templates resolved to current permissions; each template includes category, nullable service and permission UUID/name records."
  },
  "idp:GET /api/v1/acl/roles/{role_id}/permission-grants": {
    "auth": "current idp:acl:read",
    "purpose": "Read one active local role grant snapshot and its opaque conflict revision. Includes current active permission UUIDs/names and stored grant count; maximum snapshot is 4096 rows. Private no-store response; revision conveys no delegated authority."
  },
  "idp:PATCH /api/v1/acl/roles/{role_id}/permission-grants": {
    "auth": "both current idp:acl:read and idp:acl:update, rechecked under role lock",
    "purpose": "Apply an atomic bounded permission delta using the reviewed expected_revision. Both read/update ACL grants are required; stale revision returns 409, protected admin role 406, invalid/overlapping/duplicate IDs 400. Preserves unrelated and inactive stored grants."
  },
  "idp:GET /api/v1/acl/users/{user_id}/effective-permissions": {
    "auth": "both current idp:user:read and idp:acl:read",
    "purpose": "Read a current local-IDP permission snapshot scoped to the required stored service namespace (lowercase, max 64 characters). Includes direct/role grants only while user, memberships, roles, grants and permissions are active. Bound 1024; private no-store; observation revision is not delegated authority.",
    "requiredQuery": true
  },
  "idp:GET /api/v1/settings/oauth": {
    "auth": "current native administrator role",
    "purpose": "Read built-in Google/GitHub OAuth client configuration; secrets are represented by has_secret only."
  },
  "idp:PUT /api/v1/settings/oauth": {
    "auth": "current native administrator role",
    "purpose": "Update built-in Google/GitHub OAuth configuration; response hides secrets and reports has_secret."
  },
  "idp:GET /api/v1/settings/login-page/public": {
    "auth": "public handler; deployment gateway policy is separate",
    "purpose": "Read public login-page text, nullable asset URLs and per-locale text settings; does not require customization permission.",
    "response": "import(\"./contracts.types.js\").LoginPageSettingsResponse"
  },
  "idp:GET /api/v1/settings/login-page/assets/{asset_key}": {
    "auth": "public handler; deployment gateway policy is separate",
    "purpose": "Read raw immutable login-page asset bytes with Content-Type and public cache headers. Invalid/missing asset returns 404, unconfigured object storage 503; uses Axios arraybuffer.",
    "response": "import(\"./contracts.types.js\").LoginPageAssetBytes",
    "binaryDownload": true
  },
  "idp:POST /api/v1/settings/login-page/assets": {
    "auth": "current idp:login_page:customize",
    "purpose": "Upload exactly the first multipart file field named file. Accepts nonempty PNG/JPEG/WebP up to 8 MiB with matching signature. Returns data.asset_key/url; bad MIME/signature 415, size 413, storage failures 502/503."
  },
  "idp:GET /api/v1/settings/login-page": {
    "auth": "current idp:login_page:customize",
    "purpose": "Read login-page settings for customization, including nullable localized text and asset references.",
    "response": "import(\"./contracts.types.js\").LoginPageSettingsResponse"
  },
  "idp:PUT /api/v1/settings/login-page": {
    "auth": "current idp:login_page:customize",
    "purpose": "Replace login-page customization fields and per-locale text. Omitted default arrays/maps become empty and faiber_enabled defaults false; response includes resolved asset URLs.",
    "response": "import(\"./contracts.types.js\").LoginPageSettingsResponse",
    "input": "import(\"./contracts.types.js\").LoginPageSettingsInput"
  },
  "idp:GET /api/v1/settings/identity-authority": {
    "auth": "current native administrator role",
    "purpose": "Read administrative identity authority state; same body as the public authority view."
  },
  "idp:PUT /api/v1/settings/identity-authority": {
    "auth": "current native administrator role",
    "purpose": "Update canonical/linked authority mode and JIT provisioning. Linked mode requires enabled OIDC provider, rollout, matching discovery and tested local admin login; unmet preconditions return 412."
  },
  "idp:POST /api/v1/settings/identity-authority/discover": {
    "auth": "native administrator or enabled short-lived x-faiber-federation-token scoped to authority.discover",
    "purpose": "Discover and validate a public upstream OIDC issuer and required HTTPS endpoints; records discovery status. Invalid URL returns 400; failed or malformed discovery returns 502."
  },
  "idp:POST /api/v1/settings/identity-authority/pair": {
    "auth": "native administrator or enabled short-lived x-faiber-federation-token scoped to authority.pair",
    "purpose": "Pair the canonical upstream using issuer and invitation code, then activate linked mode. Existing linked authority conflicts (409); rollout/provider conditions apply."
  },
  "idp:POST /api/v1/settings/identity-authority/pair-faiber": {
    "auth": "native administrator or enabled short-lived x-faiber-federation-token scoped to providers.pair-faiber",
    "purpose": "Pair the Faiber sign-in provider using issuer and invitation code, then enable it on the login page without changing canonical authority."
  },
  "idp:POST /api/v1/settings/identity-authority/activate-canonical": {
    "auth": "native administrator or enabled short-lived x-faiber-federation-token scoped to authority.activate",
    "purpose": "Activate exactly one enabled paired canonical OIDC provider; rollout must be enabled (412), ambiguous or incompatible authority returns 409."
  },
  "idp:POST /api/v1/settings/identity-authority/recover-canonical": {
    "auth": "native administrator or enabled short-lived x-faiber-federation-token scoped to authority.recover",
    "purpose": "Restore local canonical mode and clear linked-provider authority settings. Returns the updated authority view."
  },
  "idp:POST /api/v1/settings/identity-authority/pairing-invitations": {
    "auth": "native administrator or enabled short-lived x-faiber-federation-token scoped to authority.invite",
    "purpose": "Create a ten-minute single-use invitation bound to a linked public issuer; linked authorities cannot invite (409). Returns code and expiry."
  },
  "idp:POST /api/v1/federation/enroll": {
    "auth": "matching durable single-use pairing invitation code and linked issuer; no admin session required",
    "purpose": "Consume a matching unexpired invitation once and create a confidential linked OAuth client. Redirect hosts must match the invited issuer; returns one-time plaintext client secret. Linked mode conflicts (409), invalid/used code returns 401."
  },
  "idp:GET /api/v1/auth/custom-oauth/providers": {
    "auth": "public provider-discovery handler",
    "purpose": "List enabled custom OAuth provider public views; linked mode only exposes the canonical provider. Faiber provider visibility follows faiber_enabled."
  },
  "idp:GET /api/v1/auth/custom-oauth/{provider}": {
    "auth": "public login bootstrap; intent=link requires current session",
    "purpose": "Start custom OAuth/OIDC with private state cookie and S256 PKCE. intent=link requires a session; linked mode restricts to the canonical provider. Redirects to the upstream authorization URL."
  },
  "idp:GET /api/v1/auth/custom-oauth/{provider}/callback": {
    "auth": "matching private state cookie, upstream code and validated provider claims",
    "purpose": "Finish custom OAuth/OIDC with matching private state, single-use code and validated upstream claims. Performs bounded claim/role mapping and establishes session cookies before redirect. Linked mode only accepts the configured canonical provider."
  },
  "idp:DELETE /api/v1/auth/custom-oauth/{provider}/link": {
    "auth": "current active Bearer/cookie session",
    "purpose": "Unlink one custom-provider identity from the current account; the last login method cannot be removed (409). Returns status/message."
  },
  "idp:GET /api/v1/settings/custom-oauth": {
    "auth": "native administrator or enabled short-lived x-faiber-federation-token scoped to providers.list",
    "purpose": "List stored custom OAuth providers with endpoint/mapping configuration and has_secret; encrypted/plaintext secrets are omitted.",
    "response": "import(\"./contracts.types.js\").CustomProviderListResponse"
  },
  "idp:POST /api/v1/settings/custom-oauth": {
    "auth": "native administrator or enabled short-lived x-faiber-federation-token scoped to providers.create",
    "purpose": "Create custom OAuth/OIDC configuration with an encrypted nonempty client secret. Validates public endpoint URLs and provider key; defaults scopes when empty. Success is 201; duplicate key 409.",
    "response": "import(\"./contracts.types.js\").CustomProviderResponse",
    "input": "import(\"./contracts.types.js\").CustomProviderInput"
  },
  "idp:PUT /api/v1/settings/custom-oauth/{id}": {
    "auth": "native administrator or enabled short-lived x-faiber-federation-token scoped to providers.update",
    "purpose": "Replace custom provider settings, retaining existing secret when client_secret is absent/empty. Omitted arrays/maps/default flags follow backend defaults; invalid endpoint/key/protocol returns 400.",
    "response": "import(\"./contracts.types.js\").CustomProviderResponse",
    "input": "import(\"./contracts.types.js\").CustomProviderInput"
  },
  "idp:DELETE /api/v1/settings/custom-oauth/{id}": {
    "auth": "current native administrator role",
    "purpose": "Delete a custom provider only if no external identities reference it; references return 409. Returns status/message."
  },
  "idp:GET /api/v1/settings/oauth-clients": {
    "auth": "current native administrator role",
    "purpose": "List OAuth clients without secrets, including redirect URIs, grants, scopes, service account binding and current status."
  },
  "idp:POST /api/v1/settings/oauth-clients": {
    "auth": "current native administrator role",
    "purpose": "Create a public/confidential OAuth client. Public clients require auth method none; confidential secret is returned once. The website client ID is reserved; success is 201 and duplicate ID returns 409."
  },
  "idp:POST /api/v1/settings/oauth-clients/website-bootstrap": {
    "auth": "native administrator or enabled short-lived x-faiber-federation-token scoped to browser-client.bootstrap",
    "purpose": "Provision the reserved unprivileged browser client for a canonical HTTPS origin. Never assigns a service user, trusted status or admin scopes; unknown fields/invalid origin fail. Duplicate/incompatible reserved rows return 409."
  },
  "idp:PUT /api/v1/settings/oauth-clients/{id}": {
    "auth": "current native administrator role",
    "purpose": "Replace OAuth client settings in a transaction. Disabling the client or changing service_user_id revokes its tokens and sessions; reserved website ID collision returns 409."
  },
  "idp:DELETE /api/v1/settings/oauth-clients/{id}": {
    "auth": "current native administrator role",
    "purpose": "Delete an OAuth client only when it has no active token rows; disable it first on 409. Returns status/message and may succeed for an absent UUID."
  },
  "idp:POST /api/v1/settings/oauth-clients/{id}/rotate-secret": {
    "auth": "current native administrator role",
    "purpose": "Generate a replacement secret for a confidential client and return it once with client metadata. Public clients return 400; existing token revocation is not performed by this handler."
  },
  "idp:GET /integration/flow": {
    "auth": "public metadata handler; deployment gateway policy is separate",
    "purpose": "Read Flow integration queue and event/field metadata for UserUpdate, UserDelete and notification delivery. Returns metadata only; does not publish events.",
    "response": "import(\"./contracts.types.js\").IdpFlowIntegrationResponse"
  }
};
