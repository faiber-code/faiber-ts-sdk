# DRM immutable source audit — 2026-10-21

Source: `31d8ace56b1f65c789415bb4bfb9f6da6678b1a2`. All 96 mounted REST operations were reviewed against the router, handler extractors/bodies, models, authorization, inline SeaORM repositories/SQL, entities, storage, processing/analysis/Knowledge lifecycle and relevant source tests. The backend working checkout was preserved; Git archive/show supplied the immutable inputs.

`operation-ledger.json` records every operation and its body/query, encoding, concrete response and local permission. `source-sha256.json` records the inspected pinned Rust inputs. `operation-matrix.md` captures the per-operation semantics. The full review is `../../reviews/drm.json`.

## Contract corrections

- Concrete named paginated media, jobs, analyses, content and composition output types replace generic JSON fallbacks. Entity-flattened media includes transcription and nullable original/checksum/archive fields. Raw dashboards, dependency health, temporary ClearKey JWKs and legacy package responses have concrete types. Deletes remain empty204.
- Multipart media accepts images as well as audio/video and supports preserving an explicit filename. Resumable parts use numeric path part numbers and raw octet-stream bytes. Completion/create repeat status differences are documented. Regeneration accepts JSON null; retry and analysis permit an omitted body via undefined.
- Required comma-separated DRM status IDs and license package_id are enforced in signatures. Query defaults, clamping, filters, snake_case serialization and nullable analysis are documented.
- Package downloads return ArrayBuffer with responseType arraybuffer, preserve Range and200/206 metadata, and retain existing raw-segment wildcard validation. Media playback returns a900-second original-object URL independent of packaging.
- Editor content states, mixed-media languages/status and library visibility use named enums where source validation defines them. Historical documents, editor nested data, audit snapshots and external metadata are documented dynamic JSON. Knowledge catalog is a documented verbatim upstream pass-through with no local wire model.

## Authority and scope findings

Cargo.lock pins `faiber-sdk291c81a67bc302d667fb807da2af3240598bee52` and enables `dev-fallback`. Its middleware extracts x-user-id/roles/permissions and does not validate Bearer/cookie credentials. DRM `auth.rs` enforces granular grants against that context. Consumer docs require an enforcing trusted gateway; the SDK continues forwarding configured credentials through FaiberClient. Source review cannot certify deployed identity authority.

The generic get_item handler ignores its library_id path field. Other scope checks, globally scoped lists/counts, category archive versus permanent library deletion, explicit-ID create replay, field replacement and plain nested-option null no-ops are documented faithfully. The SDK does not claim to repair these backend semantics. Media folder_id:null and composition description:null preserve at this pin; mixed-media category_id has a custom present-option deserializer and null clears it.

## Prepared verification — not executed in this task

- `tests/drm-source-wire.test.mjs`: 96-operation method/path/encoding/query/credentials/Axios matrix plus image upload, resumable chunks, defaults/nulls, download ranges, deletes, traversal and cancellation fixtures.
- `tests/drm-source-wire.types.ts`: concrete nested/nullable response consumption and negative tests for required queries, validated enums and numeric part number.
- `tests/fixtures/drm-source-operation-matrix.json`: all96 operation transport fixture metadata.

Compiled SDK tests are deferred to the parent's combined final check. Exact pinned native Rust/database/storage/broker acceptance and deployed gateway checks remain pending; no passing runtime result is asserted here.

## Scoped integrated follow-up

The DRM package scoped TypeScript build, all four runtime transport tests (including the96-operation matrix), and the DRM strict type fixture passed after adding the missing exported DrmPage<T> pagination type. Parent combined final checks remain separately pending; native/deployed acceptance remains pending.
