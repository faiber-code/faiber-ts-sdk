# Flow semantics and administration review

Status: canonical source review, runtime verification pending. Source: Flow `d560d457b331ffe8e318006e5baf5d3734ffbe98`. This document supplements the generated operation matrix; it does not mark operations verified.

## Authoring, activation and import

Flows are UUID resources with a normalized unique slug, display name, trigger key, enabled flag, graph, derived capture fields and integer version. Create validates a 1–200-character name and nonempty trigger, normalizes the explicit slug or name, rejects empty/duplicate slugs, validates a supplied/default graph, starts at version 1 and defaults enabled to false. Import entries instead default enabled to true; a preview must make this activation difference visible.

List returns every flow ordered by updated_at descending, with no server query/search/pagination DTO. Detail resolves UUID. Update changes only present optional fields, normalizes/rechecks slug, rewrites trigger nodes when trigger_key changes, validates graph, updates capture fields and increments version. Its optional fields do not provide an explicit nullable clear operation. An incremented response version is not itself an expected-version concurrency precondition. Verify overlapping edits before exposing optimistic conflict handling.

Validation POST reads the saved graph and returns `{valid,errors}` inside the ordinary response envelope; HTTP success can contain valid=false. Graph validation checks exactly one trigger, referenced edge endpoints, unique nonempty node IDs, supported condition structure and required emit target/event/object payload. It does not prove that a referenced remote action exists, that a target consumer will authorize/perform it, or that its payload is valid against the owning service's business contract.

Import supports flows, event bridges and bridge groups, with dry_run default false. It expands bridge manifests, normalizes and rejects duplicate slugs, validates the whole prepared graph set, then inserts/updates by slug in a database transaction. Unchanged entries remain unchanged. Dry-run rolls the transaction back and returns projected created/updated/unchanged counts. A real import commits before registry notification. Failed notification after persistence must be presented as a partial outcome and reconciled, not retried blindly as if nothing changed.

Declared permissions: flow:read for list/detail, flow:create for create, flow:update for update/validate, flow:delete for delete, and both create/update annotations for import. Inspect IDP macro/gateway enforcement and actual any/all semantics before certifying these declarations. Main installs the IDP extractor. Legacy storage is sandbox-scoped rather than row-level organization-scoped; project isolation must be demonstrated through the service deployment/proxy boundary.

Sources: `src/flow/{models,routes,methods}.rs`, `src/main.rs`, flow entity/migrations and IDP permission macro implementation. Required tests: create/import activation defaults, missing/invalid field errors, slug normalization/collision, dry-run no mutation, atomic import failure, omitted updates, concurrent updates, notification failure after commit and current permission revocation.

## Discovery and readable controls

Catalog lists trigger keys derived from service OpenAPI and target actions from each service's `/api/v1/integration/flow` metadata. Sync returns counts, succeeded service slugs and per-service/source failures. Inspect these failures even when HTTP succeeds. Current sync refreshes entries individually; stale entry retirement and partial refresh reconciliation need verification. OpenAPI incompleteness must not become verified capability knowledge.

Active-trigger registry accepts an optional `service` string, returning active trigger/capture metadata. Run list accepts only an optional unsigned limit, defaults to 50, orders by started_at descending and forwards the limit without a visible upper clamp in the method. It has no status, flow, event or cursor filters. Detail uses run UUID, includes flattened run fields, context and timestamp-ordered steps. A Manage interface must not advertise unsupported server filtering, and should not load unbounded histories as a substitute for missing pagination.

Create/edit should offer trigger and action labels from actual catalog metadata, typed target payload controls, supported condition operators, explicit enablement, a graph preview and validate/dry-run results. Run review should display running/completed/failed, error details, source event ID and per-step outcomes. A completed Flow run is not a verified remote business action receipt.

Sources: `src/catalog/{routes,methods,services}.rs`, `src/registry/{routes,methods}.rs`, `src/run/{routes,methods}.rs`.

## Events and cross-service effects

Explicit event emission requires flow:execute in the handler's AuthContext in addition to the route annotation. Event keys are bounded to 200 ASCII letters/digits/dot/underscore/hyphen, without leading/trailing/doubled dots. Emission generates a fresh event UUID; a body-supplied UUID is not an idempotency key. The receipt reports accepted/event_id/trigger_key. It must not be labelled a verified action completion or blindly retried after an ambiguous timeout.

The executor finds enabled matching flows, creates a running run, traverses graph edges whose conditions pass, records steps and executes reachable emit nodes once per traversal's visited node ID. Emit resolves static/expression payload fields, uses an explicit queue or a catalog action queue, and publishes through RabbitMQ. It then records the step. Earlier external effects are not rolled back if a later node fails. The run becomes completed after traversal or failed after an emit error. There is no cross-service database transaction around source event, queue delivery, consumer effect and run receipt.

Required workflow verification: a permitted source event triggers one enabled flow; a typed target action reaches the real owning service; inspect the resulting business resource/ledger receipt; replay/redelivery must not duplicate that effect; failures after an earlier effect must show partial outcome; invalid/revoked target references must fail truthfully. Determine the consumer's actual deduplication/compensation rules before enabling a mutation from a Manage agent proposal.

Sources: `src/event/routes.rs`, `src/engine/{executor,emit,conditions}.rs`, `src/broker.rs`, and each actual target consumer. Existing fixture tests of graph shape or event matching cannot close this cross-service workflow.

## Local history implementation awaiting dependencies

Commit `6fe84352982f97e3f56cd750376a88f4e9ac0a85` adds a compatible array response
with default limit 50 / accepted range 1–200, before-UUID keyset traversal ordered by
started_at and UUID, and AND filters for flow/event/status. Missing or differently
filtered cursors return 404. It adds supporting indexes and explicit current nonnil
identity plus flow_run:read permission checks on list/detail; the IDP macro alone only
exports metadata. Live filtered history may need restarting when a cursor's status changes.

The real PostgreSQL/HTTP tests are written, but **zero tests executed and compilation
was not completed**: the slug crate is absent from the local cache. An explicit online
fetch failed with crates.io SSL timeout; the repository-documented Nexus mirror is also
unreachable. The original lockfile is restored, and the failed input lock is labelled
unresolved rather than passed off as a tested dependency resolution. This code is local,
unverified and undeployed. Other Flow permission enforcement and external action receipts
remain separate blockers; no remote action was mocked as successful.
