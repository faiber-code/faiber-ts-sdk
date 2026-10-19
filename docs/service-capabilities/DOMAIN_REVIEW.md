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

Evidence: `contracts/service-capabilities/evidence/reservation-contract-tests.json` and its hashed log, bound to the clean local commit plus actual Rust SDK dependency hashes. The canonical matrix remains at the fetched source revision; no deployment, SDK release or Manage completeness is implied. IDP/gateway identity and header sanitization, project routing, bounded slot generation, slot-edit claim integrity, SDK calls and Manage forms remain separate verification work. The earlier characterization contains six defective behavior flags plus a healthy `second_booking_still_confirmed` consistency flag; that consistency flag is not another defect.

## Review rule

The remaining services retain their own generated source evidence and pending semantic reviews. No operation becomes verified from a method/path count, a route annotation, the existence of a form, or an HTTP adapter that returns a synthetic success. Tests must exercise the owning contract and record the exact revisions and actual outcomes.
