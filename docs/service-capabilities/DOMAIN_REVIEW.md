# Service meaning and workflow review

This document records inspected business behavior and concrete gaps. It does not certify the full discovery, SDK, Manage or Knowledge gates. The versioned matrices retain every operation's source and review state.

## Version

The service manages a registry of applications/services and their releases. A service has a UUID plus a human-facing slug. Service detail and full history resolve by **slug**, while individual release detail resolves by **version UUID**. These identifiers are not interchangeable. The current mounted read surface offers active service listing, latest active release for a service, all active releases for a service, and an active release by UUID. There are no general service/release CRUD management handlers in the inspected router.

Read queries filter status `1`. Latest selection orders by the numeric `version` column, exposed as `version_code`; `version_name` remains the display version. Returned release scope/channel values are serialized Rust enum variants, distinct from database spellings. Verify those wire values before adding localized selectors. These reads accept no client filter, pagination or sort DTO. A UI must not pretend that backend search/filter parameters exist.

`POST /api/v1/apk/releases` is a separate trusted publisher capability. It requires a configured token of at least 32 characters and its exact Bearer credential, returning 503 when unconfigured and 401 when unauthorized. The camelCase input contains serviceSlug, appName, version, versionCode and downloadUrl. It validates HTTPS URLs without embedded credentials, positive numeric version codes, bounded app/version/slug fields and allowed version/slug characters. Normal Manage users must never receive that server credential.

Publication resolves or creates the service, derives stable UUIDv5 identities, and inserts/updates the release within a transaction. A slower retry with an older numeric code cannot replace a newer stored publication. The response is a raw `{status,id}` receipt, rather than the usual nested API envelope. Read back by the returned UUID and service slug. Publishing success does not prove the download's bytes are available or an application deployment is healthy.

Sources: `Service/infera_version/src/{router.rs,service/routes.rs,service/methods.rs,version/publish.rs,version/methods.rs,version/transformers.rs}`, `entity/src/version.rs`, and the local auth middleware. The source currently uses legacy local gateway-header auth behavior; empty route permission annotations are not a reason to claim user/tenant authorization has been fully verified.

Open work: repair SDK health/slug paths; verify wire enums and envelopes; decide the intended product management surface for a read-heavy release service; test trusted publication and read-back against disposable storage. Do not invent unsupported CRUD endpoints.

## Reservation

The domain chain is **bookable service → provider assignment → provider weekly schedule → generated time slot → reservation for a user**. Services, providers, schedules, slots and reservations use numeric IDs. A provider's optional linked user and a reservation's customer use IDP UUIDs. Relation controls must display people/service/time labels while keeping those distinct ID types internally.

Services define duration in minutes (declared range 5–480) and optional buffer (0–120). Providers can be associated with services through a service_id operation. Weekly schedules contain day names, local time strings and active flags. Slot generation uses provider_id/service_id plus a date range, active weekly schedules and duration+buffer to form UTC timestamps. The actual timezone behavior and supported date range need explicit UI communication and boundary verification; a human-readable calendar control cannot silently impose an unrelated local timezone.

Available-slot reads return unreserved future slots, optionally filtered by service, provider and date. They are intentionally exposed as a public GET surface by `auth::is_public_api_route`. Management operations require an authenticated non-nil user, non-nil forwarded organization context and the resource/action permission or supported management permission alternatives. Data isolation also relies on per-sandbox deployment because this legacy schema has no organization column. Manage must preserve that boundary.

Creating a reservation atomically claims an unreserved slot and inserts a Confirmed booking. Missing slots return 404; a claimed slot returns 409. Provider/service are derived from the selected slot rather than trusted from a duplicate request field. A confirmation page should show the selected user's readable identity, service/provider, exact slot and timezone before sending the mutation.

At the canonical baseline, reservation listing declares user/provider/service/status constraints and nested pagination, but its repository ignores status and the Axum query parser discards bracketed pagination. Cancelling uses DELETE to update the reservation and release the slot inside a transaction; PATCH status handling currently differs. Arbitrary unknown status strings become Pending. Schedule replacement is currently non-atomic and validates each row only after deleting existing schedules. These are tracked backend prerequisites, not behaviors to conceal with form defaults.

Sources: `Service/infera-reservation/src/{auth.rs,router.rs,models.rs}`, domain models/routes/methods under `reservation_service`, `provider`, `work_schedule`, `time_slot` and `reservation`, and `entity/src/enums.rs`.

Required end-to-end journey: create/choose service → create/choose provider and assign service → save valid weekly schedules → generate bounded slots → find an available slot through actual filters → resolve customer UUID → book → verify receipt and availability exclusion → cancel → verify slot availability → rebook → retry old cancellation without affecting the new booking. Add invalid date/status, missing relations, schedule replacement failure, conflicting concurrent booking and permission revocation cases.

## Local Reservation repair, awaiting canonical/deployed reconciliation

Local commit `868aa40011780194795848fcb60b85972cfd6076` repairs status filtering and rejects unknown values (400). PATCH cancellation and DELETE now share a locked transaction. A repeated cancellation is idempotent without touching a subsequently rebooked slot, including same-user rebooking. A mismatched claimant yields 409 and rolls back. Pending may confirm/cancel; Confirmed may complete/cancel; Cancelled/Completed are terminal except an idempotent repeat. Completing retains the occupied slot, and notes can still change.

Full schedule replacement now validates every day/time before deletion, normalizes HH:MM, requires end after start and an existing provider, locks that provider to serialize replacements, and commits the whole set atomically. An actual PostgreSQL trigger failure after deletion/first insert proves rollback restores the prior set. Available-date filtering uses strict YYYY-MM-DD and an exclusive next UTC midnight. Pagination accepts the SDK's actual bracketed keys and rejects malformed or overflowing offsets.

The full Rust suite executed **21 tests with zero ignored/skipped** against disposable PostgreSQL and RabbitMQ. The HTTP journey uses the real router, authoring/assignment/schedule/slot/booking handlers and forwarded-permission middleware; it checks combined filters, receipts, availability, cancellation, rebooking and denied writes. Pure method tests also cover concurrent claims, simultaneous cancellation, same-user stale retries, completed-state denial and concurrent full schedule replacement.

Evidence: the `reservation-contract-integrity` registry entry retains its original hashed `reservation-contract-integrity-868aa.log`, bound to the clean local commit plus actual Rust SDK dependency hashes. The canonical matrix remains at the fetched source revision; no deployment, SDK release or Manage completeness is implied. IDP/gateway identity and header sanitization, project routing, SDK calls and Manage forms remain separate verification work. Subsequent local generation and slot-edit work is recorded below. The earlier characterization contains six defective behavior flags plus a healthy `second_booking_still_confirmed` consistency flag; that consistency flag is not another defect.

## Review rule

The remaining services retain their own generated source evidence and pending semantic reviews. No operation becomes verified from a method/path count, a route annotation, the existence of a form, or an HTTP adapter that returns a synthetic success. Tests must exercise the owning contract and record the exact revisions and actual outcomes.

## Subsequent local Reservation workflows

Commit `83b2ad0f614ed483dad7e5d19432a8c0b6934e38` bounds generation to strict UTC
ranges of 1–366 inclusive days and at most 100,000 unique candidate slots per request.
Provider/service must exist, be active and be assigned; stored schedules and service
durations/buffers are validated. Provider serialization coordinates schedule replacement,
generation and slot edits. Existing rows and claims remain unchanged on retry; overlapping
schedule starts deduplicate. All 500-row insert batches share one transaction. Real
PostgreSQL tests include a late failure after the first batch, concurrent retries, zero
schedules, terminal calendar dates and excessive output. The 25-test run is retained
separately in `evidence/reservation-generation-tests.json` and its hashed log.

Commit `939d904fbc31b568fef9b1e56ad9ac88ed3e1a5d` prevents independent claim-bit
changes. Claimed or historically referenced slots cannot be moved, rewritten or deleted,
even after cancellation; equivalent PATCH remains idempotent. Unreferenced edits validate
RFC3339 start/end order, active provider/service assignment and duplicate starts. The
29-test run includes real booking/deletion and edit/generation races and is retained in
`evidence/reservation-slot-integrity-tests.json`. Both tested source digests were checked
against clean commits after testing; the registry binds those commits rather than the
older base revision. These are local repairs, with canonical/runtime reconciliation pending.

Provider-wide capacity was subsequently approved and implemented locally; see the capacity section below. Earlier slot-ownership tests alone did not establish interval capacity. Gateway, SDK and Manage workflows still require separate verification.

## Parent-deletion lifecycle and retained dependency evidence

Commit `39ad7e7a142486622d4f0dd68658fcbdbe6103e2` adds migration
`m20261019_000008_preserve_reservation_history`: the reservation-to-slot foreign key
uses RESTRICT rather than CASCADE. Existing rows remain intact; provider/service deletion
can clean up unbooked drafts but cannot erase confirmed or cancelled history. Missing
parent deletion returns 404. PostgreSQL foreign-key and transaction-race errors become
409, while unrelated storage faults remain 500. All 32 tests pass against real PostgreSQL
and RabbitMQ, including direct SQL, booking versus both parent deletion routes and a
down/up migration round trip. The down migration restores the old cascade policy and
cannot reconstruct previously erased data. This schema change is local only.

The `reservation-parent-history` registry entry binds the clean committed source digest.
Exact resolved Cargo lock bytes are retained under SHA256-named artifacts for Reservation
and Agentic; their hashes match the recorded original test resolutions. Offline test-target
builds recovered those exact bytes without re-executing tests, and restored each original
checkout lock afterward. The evidence gate now validates the retained lock as well as the
log, instead of treating a dependency hash without its bytes as reproducible evidence.

Capacity review must include distinct overlapping starts in the same service (for example
09:00 and 09:15 with 30-minute duration), different services and regeneration after
duration/schedule changes. Equal-start deduplication proves none of those capacity rules.
The approved policy is configurable provider-wide parallel capacity, default one; it is implemented locally as described below.

## Version local semantic and Control publisher verification

Version commits `ed076557d2551b9f3dc9e1eba2d65a8522237f14` and
`92b69f4e85225f87e47258645c6f908a1eb501b4` implement per-slug transaction
serialization and malformed-identity rejection, correct health/slug metadata paths,
and provide the explicit `SEMANTIC_CONTRACT.md`. All seven mounted operations now
have source-reviewed meaning, scope, wire, permissions, filters, lifecycle and relation
records in `reviews/version.json`. They remain locally tested pending canonical/runtime
reconciliation; none is automatically promoted to verified knowledge.

The real suite passes 11 tests with zero ignored, including concurrent first creation
(previously 500), monotonic updates, input/credential failures, actual storage rollback,
startup seed preservation, public Closed metadata behavior and parent-status boundaries.
Service index uses `/api/v1/services` with no trailing slash; a SPA 200 at the slash URL
is not an API response. Scope/channel values are Public/Closed and Release/PreRelease.

Control commit `cd8e79a4681a2c5b1fb688a637d14f69f0078f39` embeds a publisher that
checks the raw UUID receipt and reads release/service metadata back before reporting
verified publication. The actual Node 22 script executes against loopback Version HTTP
and real PostgreSQL, including a persisted partial outcome when parent inactivity prevents
read-back. Higher-code same-release retries are labelled superseded; equal-code metadata
must match. All 199 Control core tests and the server compile check pass separately.

This covers a local HTTP component, not sandbox authorization, Secret provisioning/rotation,
Kubernetes rollout, durable Control receipt storage/reconciliation or APK bytes. Those
remaining cross-service gates are explicit. Test source/dependency digests and both committed
revisions are retained; the harness rejects source changes during a run.

## Reservation provider capacity: local verification

Commit `4ece677c98c48070fcdc3de77a714b783f73bacc` implements configurable
provider-wide capacity (integer 1–1000, default one). Stored booking intervals are
half-open `[starts_at, ends_at)`, across all services and distinct same-service
starts. Buffers space generation starts and do not extend historical occupancy.
All non-cancelled statuses count, including completed future bookings.

Generation fills capacity-many single-claim slots per provider/service/start;
retries preserve claims, and decreases retain excess pool rows. Booking rechecks
simultaneous peak occupancy under the provider lock. Limit changes use that same
lock, reject a changed limit below current/future peak with 409, and never cancel
existing bookings. Migration preserves legacy overlaps; the provider-read-protected
capacity endpoint reports exact conflict windows with counts and bounded pages.
Schema rollback refuses nondefault configuration; older writer rollback is not
certified safe for parallel slot pools.

All 40 Rust tests passed on owned PostgreSQL 16 and RabbitMQ containers, including
eight capacity regressions: same/cross-service overlap, adjacent boundaries, peak
versus intersection count, concurrent claims, stale cancellation, limit changes,
limit-decrease versus booking races, generation pools, current permissions and
isolated legacy migration/down/up. Test duration was 12.939 seconds including Rust
build execution; this is not agent latency. The first run found and repaired a
history-edit validation-order regression. Its raw failed-attempt report predates
the runner fix that counts tests from failing binaries; the log records 34 tests
actually executed (33 passed, one failed), rather than that report's partial 15.

The clean commit source digest matches the fenced test inputs:
`3f72d360a944f86e42aa1531bd7492c82ba94bc7de0ed500aa19cd1d54e0a3ef`.
Exact logs, image IDs, resolved lock and dirty path-dependency provenance are in
`evidence/reservation-capacity-tests.json` and `verification-runs.json`.
Canonical/runtime reconciliation, project identity and complete SDK/Manage
workflows remain open. No production migration or release has been performed.
