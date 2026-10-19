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

Available-slot reads return unreserved future slots, optionally filtered by service, provider and date. They are intentionally exposed as a public GET surface by `auth::is_public_api_route`. Management operations require an authenticated non-nil user, signed non-nil organization context and the resource/action permission or supported management permission alternatives. Data isolation also relies on per-sandbox deployment because this legacy schema has no organization column. Manage must preserve that boundary.

Creating a reservation atomically claims an unreserved slot and inserts a Confirmed booking. Missing slots return 404; a claimed slot returns 409. Provider/service are derived from the selected slot rather than trusted from a duplicate request field. A confirmation page should show the selected user's readable identity, service/provider, exact slot and timezone before sending the mutation.

Reservation listing supports user/provider/service constraints and nested pagination. The DTO also declares status, but the inspected repository does not apply it. Cancelling uses DELETE to update the reservation and release the slot inside a transaction; PATCH status handling currently differs. Arbitrary unknown status strings become Pending. Schedule replacement is currently non-atomic and validates each row only after deleting existing schedules. These are tracked backend prerequisites, not behaviors to conceal with form defaults.

Sources: `Service/infera-reservation/src/{auth.rs,router.rs,models.rs}`, domain models/routes/methods under `reservation_service`, `provider`, `work_schedule`, `time_slot` and `reservation`, and `entity/src/enums.rs`.

Required end-to-end journey: create/choose service → create/choose provider and assign service → save valid weekly schedules → generate bounded slots → find an available slot through actual filters → resolve customer UUID → book → verify receipt and availability exclusion → cancel → verify slot availability → rebook → retry old cancellation without affecting the new booking. Add invalid date/status, missing relations, schedule replacement failure, conflicting concurrent booking and permission revocation cases.

## Review rule

The remaining services retain their own generated source evidence and pending semantic reviews. No operation becomes verified from a method/path count, a route annotation, the existence of a form, or an HTTP adapter that returns a synthetic success. Tests must exercise the owning contract and record the exact revisions and actual outcomes.
