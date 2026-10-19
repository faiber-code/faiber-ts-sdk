# Manage administration and review authority

Local implementation update: the missing-secret and stale-revision findings below
were subsequently repaired and locally tested. See
[implementation evidence](MANAGE_AUTHORITY_IMPLEMENTATION.md). The following
source observations retain their original pinned baseline; they are not claims
about the repaired local commits or deployed configuration.

Source review at pinned Manage `a13caa6019e3648a1f84766d7ee5034c7147a123`.
The checkout matches that revision apart from its pre-existing dirty Cargo lock,
which is preserved. This is a discovery record, not service or UI certification.

## Session, current project access and identity

SSO consumes a project-signed handoff with expiry, project slug, platform user,
identity project/revision, enabled service snapshot and optional organization UUID.
It asks Agentic's internal project admin status endpoint before issuing an HttpOnly
SameSite=Lax cookie. Agentic's inspected `project::admin_open::admin_status` calls
`require_project(..., PROJECT_SETTINGS_MANAGE)` before resolving live sandbox
status. This is a useful current project access gate, conditional on the trusted
internal identity/network boundary being established in deployment.

Every authenticated route except `/api/v1/me` repeats that status preflight. Status
unavailable fails closed; nonactive projects and activation-only sessions cannot
proxy. `/me` instead returns runtime status (including unavailable) so activation
can be reviewed. Expiring sandbox access tokens refresh from the signed session's
refresh token and identity project; browser tokens are ignored. Enabled services
and other projects remain a session snapshot, not live permission grants.

Organization is the signed nonnil UUID when present, otherwise UUIDv5 of the
normalized project slug and Manage namespace URL. That deterministic fallback is
not proof that the same UUID is authoritative in every owning service. Preserve an
explicit project/organization mapping before memory migration. Project slug,
Agentic project UUID, IDP user UUID and local service numeric IDs are distinct.

The in-memory identity revision map compares sessions to handoffs observed by that
process. SSO overwrites the value rather than taking a monotonic maximum. It is
not a durable current-revision lookup; restart and old-handoff ordering need tests.
No claim of immediate configuration revocation follows from that map alone.

`config::derive_handoff_secret` falls back to a fixed seed when neither configured
worker secret exists; the server startup does not reject that condition. This is
a confirmed production configuration gate, not evidence that a deployed secret
is absent. Secret configuration/rotation, missing-secret behavior and matching
Agentic derivation must be reconciled and tested before release certification.
Never put session cookies, access/refresh tokens or secret material into agent
Knowledge, memory, prompts or audit payloads.

## Service proxy contract

`ANY /api/v1/proxy/{service}/{path}` accepts only enabled, catalogued services.
An optional `infera-` prefix normalizes to the service slug. The path, method and
query pass through. The proxy strips browser cookies, bearer credentials, identity,
role, permission, organization/tenant and project headers. It injects the signed
session user, effective organization, `admin` role and the service catalogue's
static permission list, plus its sandbox bearer when available. This is an
administration bridge, not delegation of remembered user permissions. Verify the
current Agentic settings-manage preflight and actual service ACLs together.

IDP can use a distinct signed identity project. In cluster mode, upstream URLs use
`sandbox-{project}`; `SANDBOX_DOMAIN` instead chooses a fixed public service host.
Deployment host isolation therefore remains a gate. Requests buffer up to 16 MiB;
upstream responses are fully buffered without an explicit byte limit or client
timeout in AppState. They preserve status and most response headers, excluding
connection and transfer-encoding. This bridge is not the SSE streaming path.

Read permissions, filters, lifecycle semantics and linking still belong to each
owning service. The proxy must not reinterpret a service's 200 HTML fallback as
API success. A static catalogue list is not a complete or current capability
matrix; missing permission names or enabled-service changes need reconciliation.

## Agent bridge and human review

`ANY /api/v1/agent/{rest}` restricts operations by exact method/path shape:
GET models; GET/POST chat/threads; GET thread messages; DELETE thread; POST chat
stream/cancel; POST ask completion and browser-action completion. Thread/action
IDs must parse as UUID; unknown, double-slash and traversal-like paths fail.
It streams the upstream body, forwarding only content type and status, and sends
signed session identity/project and its bearer. Request body limit is 2 MiB.

This allows durable chat and human review; it is not full access to arbitrary
Agentic APIs or service administration. Ask/action completion must still authorize
the current thread, project, requester, action state and decision at Agentic.
Complete Manage agent tooling can call verified SDK-backed service operations
within the same current project authority; it must not expand the broad proxy or
turn remembered roles into grants. Agentic remains execution/billing authority.

## Setup and service health

Service health is a sequential status-only `/health` check per enabled catalogue
entry, not schema readiness, feature completion or provider verification. Unknown
catalogue slugs are skipped. Setup additionally invokes Payment and Messenger
setup-check endpoints with admin context, and requires SMS-OTP verification when
IDP is enabled. Session is externally configured but has no dedicated provider
probe in this inspected handler. Setup checks do not send payments or messages.

A 60 second project-signed setup report is persisted through Agentic's internal
setup-status endpoint with a 15 second timeout. The public response contains project,
service steps, persisted prerequisites and checkedAt; provider secrets/options are
excluded. A successful local fixture test of this proof is not evidence of real
provider credentials or upstream readiness. Preserve Pastil's pending payment/SMS
credentials and signed-in customer-club gates.

## Readable workflow gaps remain

This review does not complete the panel. For example,
`LmsOwnedResourceFormPage.tsx` still parses options from a monospaced JSON textarea,
and its order lookup requests size 10000 then derives order from a returned page.
The Reservation dashboard similarly requests 10000 while the owning API caps page
size 100. They need typed, paginated SDK workflows and readable option editors after
discovery. Do not infer full totals or complete order from one capped page.

Every affected form still must meet the repository's EN/FA, RTL/LTR, semantic
light/dark theme, routed create/edit/view, request-scoped loading and accessible
status/toggle gates. No UI, model default, runtime deployment or migration changed
in this review. Existing component tests are evidence only for their stated scope.

Sources: `Service/infera-manage/src/{router,proxy,agent,runtime,session,sso,config,
setup,state,services,token}.rs`, the cited panel files, and
`infera-agentic/src/project/admin_open.rs`. Agentic observations are labelled local
source evidence and still need pinned cross-service runtime reconciliation.
