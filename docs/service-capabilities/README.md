# Capability discovery implementation status

This workbench retains SDK contract reviews and the broader Knowledge/Manage program evidence. The SDK 1.0.0 candidate is under verification. Source-only reviews, executed native tests, deployed compatibility, and publication are recorded separately; this directory does not itself establish a release or memory cutover.

## Reproduce the current work

- `npm run capabilities:discover` reads fetched canonical source revisions, separately records the SDK's published snapshot and dirty checkout drift, and regenerates mounted operation/source evidence. It does not change the SDK's source lock, released contract manifest or generated callable API.
- `npm run capabilities:check -- --stage=discovery` verifies discovery prerequisites and keeps downstream SDK/Manage/memory gaps visible. Backend correctness gaps still block this stage. Default `npm run capabilities:check` also requires all recorded implementation gaps to close. These are semantic prerequisite checks, not substitutes for the separate SDK, panel, authorization or migration suites.
- `python3 scripts/run-reservation-discovery-probe.py` creates its own labelled PostgreSQL 16 container with a random loopback port, runs the real database characterization and existing concurrent-claim test, records evidence, and removes its own test file/container while restoring the original lockfile. It requires Docker, the cached image and offline Cargo dependencies. It accepts no live database URL.
- `python3 scripts/run-reservation-contract-tests.py` runs the full Reservation Rust suite and router journey on owned disposable PostgreSQL/RabbitMQ, with source/dependency hashes and no skipped tests. Local repair verification does not establish deployed-source reconciliation.
- `npm run build && npm test` verifies the SDK plus discovery/extractor regressions. Characterization of a defect cannot satisfy a correctness gate.

## Evidence and open work

`implementation-baseline.json` preserves repository commits/dirty state and Pastil evidence. `remote-baseline.json` records fetched canonical revisions. The per-service matrices include source checksums and handler/model evidence. `known-gaps.json` records observed prerequisites; `relationships.json` is an incomplete manually traced relationship catalog with no verified runtime workflows yet.

`DOMAIN_REVIEW.md` explains inspected Version and Reservation behavior. `FLOW_WORKFLOW_REVIEW.md` covers inspected authoring/import/event/run semantics. `MEMORY_AUTHORITY_REVIEW.md` traces Knowledge subjects, Chat source ownership and Task's current-permission projection boundary. Current source reviews are retained in `reviews/` and the dated per-service evidence folders. Source-only completion does not imply that native relationship journeys or deployed authorization have passed. Automatically extracted rows are not treated as verified behavior.

`evidence/reservation-characterization.json` and its hashed log show actual PostgreSQL outcomes. A passing characterization means that historical probe executed successfully; defect flags apply to its recorded source revision. The selected Reservation repair and its later source-equivalence/native receipts are retained separately in `evidence/reservation-finalization-20261021/`. The earlier record must not be presented as proof that the same defect persists in the selected repair.

The generated summary reports mounted operations and resolved handlers only as inventory. It is explicitly insufficient for semantic discovery completion. Manage readable forms/workflows, exact SDK artifact consumption, Knowledge publication and agent memory integration follow after their prerequisite gates; they remain pending.

Compiler provenance now includes local auth crates, build/config files and statically
embedded `include!`, `include_str!` and `include_bytes!` inputs. Immutable snapshots retain
referenced source assets (including server-embedded UI locale/CSS files) from the same
pinned Git tree. Dynamic, missing or escaping inputs remain explicit release blockers.
Embedded scripts are hashed as inputs, never parsed into invented Rust handlers.
