# Social administration source review (in progress)

Source: canonical `79462976a1c07e7ef8eb913d7cc7015dd50f936e`. This is an inspected
subset of Social's domain, not completed semantic or runtime certification. The nested
`/api/v1/admin/social` router must be included in SDK and Manage after discovery passes.
Existing public/owner routes require additional review.

## Authority and wire shape

RequestContext scopes SQL by organization UUID. Missing/malformed organization falls
back to nil; forwarded identity/permissions may come from the IDP extractor or headers.
The direct browser middleware validates a Bearer/cookie session only when no x-user-id
header exists. DEV=true bypasses permission checks. Gateway header sanitization, current
membership, nil/legacy organization handling and direct network exposure remain runtime
acceptance requirements. A remembered role must not substitute for those checks.

Responses use `{status,data}` with optional top-level `meta`, without Version's message
field. Most identifiers are UUIDs; actor references are IDP user UUIDs. Relation controls
need current permitted IDP labels, not free-text ID entry. Exact location reveal requires
its separate permission/reason and returns no-store/no-cache; do not place it in general
agent instructions, public previews or ordinary cached content.

## Reads and actual filters

Overview requires social:panel:view. Post/comment/media/actor reads require
social:content:read; reports social:reports:manage; claims social:claims:manage;
bounties social:funding:review; moderation queue social:moderation:review;
restrictions social:actors:restrict; audit social:audit:read; integrations
social:integrations:manage; analytics social:analytics:read; settings
social:settings:manage. These are explicit handler checks, not route annotations alone.

Post list combines organization, not-deleted, moderation status, category UUID and a
trimmed title/body ILIKE search. The generic comment/media/report/claim/bounty/
restriction/audit/integration lists apply organization plus a status-like column only;
the shared DTO's q/category fields are not universally implemented. For media the
status-like column is content_type; for audit it is action. Do not invent shared filters
from DTO field presence. Actor q is parsed as a UUID; invalid input silently removes that
filter. Actor pagination meta currently reports page length as total rather than a full
matching actor count. Common page/limit defaults and clamps do not protect extreme page
multiplication from overflow; this needs owning-service validation and real HTTP tests.

## Categories, policies and actions

Categories have slug, localized name/description objects, icon/color, sort order, active/
archived status, independent post/comment moderation controls and metadata. Creates
return 201. Deletion is soft archive and returns 204. Updates apply present values;
optional icon/color fields do not expose an explicit nullable-clear distinction. Manage
must provide locale fields, semantic status controls and dedicated record pages.

Capability policies are versioned per organization/category. Create produces draft
MAX(version)+1; update only edits matching drafts. Config must be an object with only
subject/location/bounty/claims/resolution/expiry/linked_actions top-level sections.
Nested field semantics must be derived from capability consumers before typed forms are
complete. Publish locks the draft, retires the prior published policy and publishes the
selected policy atomically. The database enforces unique category/version and one
published policy per category. Concurrent authoring/publication still needs verification
and truthful conflict handling; do not claim the uniqueness constraint is absent.

Restrictions require a current operator, one of all/post/comment/claim/reaction, a reason
and valid start/end ordering; create is 201/active, revoke only accepts active records.
The supplied revocation reason is validated but not persisted by the inspected update.
Claim approval/rejection delegates to the capability lifecycle; completion of a claim
review is not evidence of a verified external funding or payout effect.

Integration replay requires operator/reason and failed/dead_letter state. It resets the
outbox to pending, then inserts an audit row outside a shared transaction. A later audit
failure can return an error after replay was already queued. Verify this partial outcome,
consumer idempotency and reason retention before enabling a Manage agent replay action.
Settings exposes configuration booleans, not secret values.

## Required next verification

Use real disposable PostgreSQL for organization/permission isolation, real filters,
extreme pagination, actor totals, draft/publish concurrency, restriction audit/reason
retention, exact-location reason/audit/no-cache behavior, and replay/audit failure.
Funding, issuer assertions, IDP identity and external action receipts require named real
cross-service workflows. No raw JSON form, router count or mocked consumer success can
close those gates.

The canonical unit attempt executed zero tests: async-trait 0.1.91 is missing from the
local cache. Its original lock was restored. Network/index and the documented mirror
are already unavailable in this session; this remains unexecuted, not a passing baseline.
