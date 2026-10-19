# SDK release gates — 2026-10-19

Release candidate: **1.0.0**, all 22 packages unpublished. npm authentication has not
started. Structural extraction is not semantic release approval. Manage completion,
Knowledge publication and agent memory adoption remain downstream of SDK acceptance.

## Source and actual behavior verified locally

- All 18 SDK HTTP service inventories follow mounted source graphs. Named dynamic
  operations cover Session's peer proxy, CRM's two legacy fallbacks and State health.
  The1601-operation structural count is not a completion criterion.
- SDK build, strict types and 125 tests pass. Wildcard path components retain directory
  separators and reject traversal/ambiguous encoding before transport. CONNECT requires
  an explicit tunnel-capable Axios adapter; default CONNECT rejects before hanging.
- Profile production7a6a9ca28eb8e1498cb20557450d6dd81a6ae8ad with test-only07279def6aeb91f806d0c32ab811a69ec2b05daf:
  all 20 summary operations over real mounted HTTP and compiled SDK,348 assertions,
  real PostgreSQL/RabbitMQ; IDP/Agentic/evidence/gateway identities are explicit fixtures.
- LMS productiona2d00df7f1cc34c3b2e356824c49e39c12047a33 with test-only1fbba589305088ecc6210a1baf2e4beb07ce5a82:
 57 assertions classify all 8 retired endpoints using full 38 historical migrations.
  Old GETs return generic HTML 200 with an SPA index,404 without; PUT/twoPOST return405.
  These are not auth denials or successful summary APIs. Seeded legacy rows remain unchanged.
- Stateb8d3bfa828878a979a8c8765285bfd3899965bd4 : 26 workspace tests,9 real SDK HTTP
  assertions against the exact production health subrouter. This static advertisement
  is not proof of persistence/gameplay/WebSocket readiness or whole-main startup.
- CRM178f5de3c68fab387abd5294aeceb8dd1843084f : 12 library tests and 59 real SDK HTTP
  assertions against production fallback/CORS. HEAD is empty; OPTIONS is empty 200;
  other tested verbs return structured 404. CONNECT uses a real test-only Node HTTP
  adapter, not a response mock. Native CRM data/permissions remain separate checks.
- IDP360daa64429c966ed04a8081f700fde9c73d56ac : 111 workspace tests,23 SDK assertions
  and an actual Manage caller test. Manage02ca8711d457f463727b1678a6b699894709c24b
  passed28 local unit tests. Control 4dbda3369965d70693fdff6e4bf993c9c9953b8d passed212.
  No live secret/configuration, rollout or gateway reconciliation is certified.
- Chatab6ce7461d35414b719f3806df57549339002df5: restored5 mounted personal APIs;
 21 actual SDK assertions with real PostgreSQL, including private-content exclusion.

Immutable artifacts and source hashes are retained in
`contracts/service-capabilities/evidence/`. Original failures remain available under
`/Users/mohammadralizadeh/Infera/acceptance-results/sdk-source-semantic-20261019`.
The Version registry entry now points at immutable original accepted artifacts;
subsequent generic runner output no longer invalidates that historical record.

## Combined verification and open release gates

At `8811162b2d1251ad8c26c7b8a6c7bc5deb67d16b`, combined run
`reservation-capacity-aligned-v7` passed build,125 SDK tests/types, structural contract
audit, Version12, Social11 with real S3-compatible storage, IDP111/actual Manage caller,
Chat21, Profile348, State26/9, CRM12/59 and Reservation42/188 across30 operations,
plus all22 actual tarball installs/imports/strict consumers. Source, dependency and
compiled-input fences remained unchanged. Each command log hash was rechecked in
`evidence/combined-8811162-v7.json`.

The overall result **failed** on a fresh npm security-audit read ETIMEDOUT
(173.988 seconds overall; audit22.468 seconds). A previous direct curl probe also
failed the registry TLS handshake, independently of npm authentication. No audit
waiver or authentication attempt has been made. Subsequent Session documentation
corrections require their own checks and a later frozen combined run before release.

The refreshed canonical matrix is intentionally unverified where semantic/wire or
cross-service evidence is missing. All 21 service origins fetched successfully in the
latest baseline; all 22 ordinary working trees were unchanged by fetch. SDK-origin SSH
fetch timed out to GitHub port22. Unmapped external MCP routing in dirty Summary source
is retained as an explicit working-extraction failure, not silently treated as empty.

Still required:

1. Finish per-capability meanings, permissions, inputs/filters, lifecycle, relationship
   and actual workflow evidence, with explicit selected canonical source decisions.
2. Compose immutable Task/Session/Chat/CRM Summary adapters with existing Chat/CRM repairs,
   verify six-domain interoperability/current principals and remotely available Rust SDK pins.
3. Verify Session peer proxy workflows with actual participating services. Preserve
   current Session reconnect/Pastil and CRM durable Office fixes.
4. Integrate the selected backend repairs canonically. SDK now selects Reservation
   `80aef6037cec20bb808903f15737160cef5f6a66` (test-only descendant
   `2f6595825607c36474ef92d38d94c601a202d849`) and Version
   `b5fb6904e9ac005c9437012bf19e9bc3587ef65e`. These differ from current remote
   canonical bases; do not claim a deployed fix or source availability from local tests.
5. Finish current deployment/permission/configuration reconciliation and reproducible
   source acceptance where required; do not infer it from forwarded-header fixtures.
6. Obtain a passing fresh npm security audit and run the final22-package/source-bound
   verification on the frozen release candidate, then follow Git/main/version gates.

Only after all SDK release gates pass should interactive npm web authentication start.
No published version, Git tag/push, deployment or agent-memory migration is claimed.
No subjects, events or facts have been adopted into the new brain. Model defaults and
unrelated ordinary source changes were preserved; model quality/response latency gains
have not been measured because that cutover has not happened.

## Reservation source reconciliation

Selected production repair `80aef6037cec20bb808903f15737160cef5f6a66` preserves all
prior capacity/history fixes and excludes legacy user-held slots from public availability.
Test-only descendant `2f6595825607c36474ef92d38d94c601a202d849` passed42 tests and188
compiled-SDK assertions over all30 mounted operations with real PostgreSQL/RabbitMQ,
standalone locked canonical-URL dependencies and no Service-level Cargo overrides.
Current permission headers are an explicit trusted-gateway fixture; live namespace/IDP
binding and customer existence lookup are separate gates.

The SDK exposes provider capacity inputs/reports, correct raw OpenAPI and data:null
mutation receipts. Cancellation is idempotent and cannot release a rebooked claim.
The initial real legacy-claim regression and both invalid fixture assumptions
(cancellation returns a booking object; repeated cancellation returns409) remain retained.
No wrong fixture assumption was labeled a backend defect.

## Session proxy source review

Canonical `bb6b725f2c35fc27bd04b84897523fca77d2854b` is checked out independently
at `.task-worktrees/session-sdk-peer/infera-session`. Standalone locked offline Cargo
metadata resolves without changing its tracked lock. The ordinary Session tree remains
untouched. Source review corrects missing required peer configuration from503 to502;
Asset/Profile retain system-namespace fallback URLs. Scoped Chat grants use room checks;
DRM read grants are path-based for authenticated actors without a proxy room-membership
lookup. Actual target-resource permissions, project peer configuration, namespace
isolation and browser preflight remain separate release gates. This is source evidence,
not a successful multi-service acceptance claim.

Canonical Session's68 baseline tests passed in131.123 seconds. The actual Session/Chat
pair exposed compile-time IDP development fallback despite DEV=false. Production repair
`6cdedd4303f4612143ae6bae54edff464a7aa08d` disables default/dev-fallback features;
test-only descendant `82b9ef8d6ad8077b3fb1154d99ded7d66d17b701` preserves every
other production source. The original red and later receipt-parser failure are retained.
Fresh run `session-chat-actual-sdk-v4` passed with unchanged source/dependency/SDK and
Chat executable fences:69 Session tests plus1 nested actual Chat test,26 SDK assertions,
zero failed/ignored,9.807 seconds. This verifies the personal Chat proxy boundary,
current forwarded permissions, organization/member filters, realtime HMAC, request/body
limits and internal-credential exclusion. Evidence is registered as
`session-chat-peer-sdk-http`; source-only/test-only patches and both actual locks are
retained. Room-scoped group/AI, other peer success, live identity, namespace isolation,
browser preflight and streaming remain open. The production repair is local and pending
canonical integration; npm authentication remains blocked.

## Version endpoint semantics and exact response fields

All7 mounted Version endpoints now have a source-hashed English/Persian local review
of authorization, input/filter rules, lifecycle, output shapes and identifier/link
meaning. These reviews persist in `reviews/version.json`; canonical/Control namespace
acceptance stays open. `Closed` remains descriptive metadata, reads are public at the
handler, numeric code selects latest, and timestamps have no promised UTC offset.

Required nullable keys and the history shape are corrected: `ServiceWithVersions`
has `versions` and no `last_version`; service and release nullable fields serialize
explicit nulls; successful read status/message/data are required. Generated slug and
UUID parameters accept strings rather than generic numeric identifiers. Build, strict
consumer types and125 SDK tests pass; fresh actual Version12 tests pass in4.041 seconds
with immutable report/log and lock evidence under `version-nullable-sdk-12`. Runtime
operations.js is unchanged by the later type-only path narrowing. The obsolete
Identifier regression expectation and macOS temporary-path fixture assumption were
corrected; their red logs are retained separately.

Source snapshots now retain tracked `shared/` Rust dependencies. The snapshot regression
resolves the actual Cargo path dependency from immutable bytes despite a dirty checkout.
Discovery now hashes shared Rust/SQL/manifests and surfaces their working changes; this
does not mark unresolved external MCP router graphs or their semantics verified.

## Coordinated Summary adapter handoff

The completed “Plan configurable role summaries” continuation supplied an immutable
source handoff. Independently verified97 artifact hashes,2197 source-file hashes, all
five clean candidate HEADs/bundles, required repair ancestry and the identical stable
Chat mount patch ID. The final logs contain5 real domain PostgreSQL/MCP tests (CRM
also real RabbitMQ) and2 actual IDP ACL importer tests; four production compiles pass.

- Task5039302f25bdecacb7b3d17bf53e232fe0489a92
- Sessionf05bbc459965efbebd1cfe6d3348b48ead8cee49, exact6cd auth repair parent
- Chatc42afad57281dbe92d8ef4c01d002a3f59704ddf, identical production mount fix
- CRM5f215256d275a909c39825f00f4c71909c2e4b58, exact178 fallback/CORS parent
- IDP6d91708d22125f23d91e9e11ef3ffc801c0af5f2, ACL-only continuation of1983731

Registered evidence: `summary-four-domain-native-mcp`. These candidates are not yet
substituted into the SDK source pins. Preserve Chat's existing personal-router test
when composing its adapter and apply the ACL-only change onto the current IDP auth
repair. Whole-process MCP HTTP mounting, updated route/type inventory, Session legacy
performance-context retirement, combined six-domain use, remote source availability
and current deployed identity/permissions remain release gates. Local official-MCP
reader tests do not certify those boundaries. Live model selection, provider/billing
checks and Knowledge migration have not happened. Current model defaults are unchanged.
