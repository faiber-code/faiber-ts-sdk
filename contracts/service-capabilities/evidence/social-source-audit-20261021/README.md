# Social source audit — 2026-10-21

Immutable supported backend: `d067ac956571abd73211b06d835caa658b1f09bc`.
Read from `git archive`, leaving the backend checkout unchanged. `operations.json`
records all 112 mounted REST operations individually: 60 ordinary API, 37 admin,
14 discovery/graph/worker and one health endpoint. Static `/dashboard` assets are
not REST SDK operations. Source checksums include handlers, repository, concrete
models/entities, middleware, capability security, all migrations and source tests.

## Actual SDK fixes

- Authenticated `/api/v1/media/{id}` returns raw bytes with a private cache header;
  the old declaration incorrectly used `void` and omitted array-buffer transport.
- Replaced opaque JSON envelopes with named exported policy, capability,
  navigation, claim create/list/detail/selection/withdrawal/consent, cancellation,
  funding, feed-location, session identity and health models.
- Funding duplicate receipts omit status; new receipts include status. Claim
  detail adds nullable resolution; paginated claims carry required metadata.
- Base entities now include serialized nullable `deleted_at`, post lifecycle,
  report organization/resolution fields and required nullable model members.
- Fixed moderation result to `target_type,target_id,status,action`; previous status
  belongs to the moderation audit record. Both moderation permission alternatives
  are documented.
- Convenience/generated inputs accept Rust Option nulls; category/post patch nulls
  leave stored values unchanged. Validated reaction, capability and funding values
  use named exported types instead of unrestricted generated string members.
- Feed-location reads allow null; successful writes return a non-null preference.
  Flat pagination, 1000 ms view validation, cross-post share-key uniqueness,
  publication request-key replay and actual media bounds are documented.
- README counts cover all 112 routes and show exported methods; existing operator
  and discovery contracts were reviewed alongside newly concretized API routes.

## Repository and middleware observations

Ordinary API/admin permissions come from RequestContext with explicit wildcard
support and optional DEV bypass. The auth middleware strips forwarded identity
headers for a configured nonmatching BFF key, then can validate Bearer/cookie
sessions through IDP. Browser clients must use shared FaiberClient authorization;
organization and actor headers are trusted deployment context, not untrusted input.
Discovery routes are merged outside ordinary middleware and enforce their own
server-only BFF key and actor UUID. Worker permission is an exact untrimmed
`social:integrations:write` token; wildcards do not satisfy it.

Follow notification behavior was traced through migration 6: a database INSERT
trigger emits opted-in user-follow and published-comment events. It is not visible
in the Rust follow handler alone. Idempotent existing edges do not produce a new
insert event; place follows do not emit user-follow notifications. Block and
preference mutations currently use separate statements. Outbox reads do not lease
records. Place-event receipt and opted-in notification insertion are transactional.

Authenticated list_posts visibility/ranking differs from public discovery:
list_posts returns entity records and required total/page/limit metadata, while
public discovery uses a runtime-scoped projection and filters expired stories and
blocked authors. Public comments also filter blocked comment authors. Do not infer
identical moderation/expiry/blocking predicates across the distinct endpoints.

Publication request-key fingerprints cover core content plus subject type/ref,
not all capability details. Failed/incomplete publication requests can retain an
unfinished receipt; clients must not manufacture a new key after uncertainty.
This is backend behavior, not evidence that SDK retries create an atomic transaction.

## Verification boundary

Source audit is **source_only**; exact-pin native acceptance and compiled SDK
verification are **pending** until the coordinated post-fix checks. No native,
Cargo, Docker, npm publication or deployment was performed in this audit. The
existing Social admin and object-storage native receipts are preserved unchanged
and retain their original revision/case scope. They are not broadened to all 112
operations or to the selected revision.

Prepared regression inputs: `tests/social-source-wire.test.mjs` and additional
compile-time fixtures in `tests/social-admin-wire.types.ts`. Run after final
regeneration and build, together with existing Social admin/discovery generation
and native-probe source tests. Adapter fixtures establish SDK transport behavior;
they do not establish backend transactional or permission enforcement.
