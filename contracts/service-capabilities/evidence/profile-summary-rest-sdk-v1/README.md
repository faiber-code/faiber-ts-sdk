# Mounted Profile REST + compiled TypeScript SDK acceptance

**Passed:** one real integration case, **348 assertions**, all **20 Profile summary SDK
operations** over actual Axios HTTP. Exact requests and response receipts are recorded in
`sdk-wire-result.json`; the source-bound description and limits are in `handoff.json`.

| Input | Exact revision |
|---|---|
| Profile production code | 7a6a9ca28eb8e1498cb20557450d6dd81a6ae8ad |
| Test-only Profile descendant | 07279def6aeb91f806d0c32ab811a69ec2b05daf |
| TypeScript core/Profile SDK source | 7a477a0bcf6afc3a72a5aaca95b7cb1b62c4783b |
| Rust SDK dependency | d3a76ff7c204e3da971960417bdfa335f7a73d2c |

The test-only commit adds three files under tests/ in a separate isolated checkout:
`/Users/mohammadralizadeh/Infera/.task-worktrees/profile-rest-sdk-20261019/infera-profile`.
Production source is unchanged. Fetch the supplied bundle or apply the bounded patch to
review/run it. All3,247 source files in the five original handoff candidates still match
their hashes. Neither those candidates nor the SDK owner's checkout was edited.

Core/Profile sources were exported from the immutable SDK commit and independently compiled
in sdk-build/ with TypeScript5.9.3. The consumer runs those emitted packages with Node22.13.1
and Axios1.20.0; its runtime dependency closure is copied locally. No SDK checkout build
outputs were written. `consumer-source-sha256.json` hashes889 runtime files; the separate
build-source manifest binds the archived source and emitted outputs. `sdk-input-initial.json`
is the retained initial inspection, not the final snapshot authority. The SDK owner's later
HEAD is recorded with a source-equivalence comparison for these packages only; that is not
acceptance of every package in its later combined release candidate.

## Actual test boundary

The test starts the full Profile router on loopback using actual production handlers,
AuthContext extraction, PostgreSQL queries and worker tick logic. Disposable PostgreSQL16
and RabbitMQ3 are real. It applies the actual summary migration and minimal Profile identity
tables; unrelated production migrations are not run.

IDP roles/users, Agentic model catalog/generation responses and the MCP evidence reader are
explicit deterministic HTTP fixtures. Source negotiation uses actual official RMCP transport.
Test-only /__fixture controls seed history/failed states and advance actual worker ticks.
Synthetic x-user-id/roles/permissions represent gateway-verified identities at the boundary;
there is no live JWT/gateway authentication, namespace TokenReview or financial-owner lookup.
The production main server's unrelated process orchestration is not reproduced.

The assertions cover:
- All20 wrappers: exact method/normalized path, HTTP status and success envelope. Create201;
  preview/refresh/retry202. Actual body/query serialization reaches PostgreSQL-backed handlers.
- All20 operations reject a parent-role subject without dedicated summary permissions.
- Preview needs configure plus selected-subject read; configure-only and own-read-other deny.
  Own latest/list/run reject other subjects; configure/manage alone cannot read content.
- Real history/jobs subject, role, status, page/per_page/count/second-page queries; own-subject
  enforcement; cross-deployment history omission/direct run404; operational private-field redaction.
- Draft creation/read/list/update, stale/missing-version errors, validation/publication,
  duplicate409, global/role settings, bounded refresh422 and duplicate job coalescing.
- Pending preview receipt persists before execution, then completes with stored fixture metric.
  Ordinary retry resets failed state, generates a new run and retains previous history. Preview
  retry remains a preview and cannot replace latest. Disable hides latest while history remains.

## Failures retained, without overstating them

`run-first.log`: isolated dependency closure missed https-proxy-agent; no API request reached.
`run-second.log`: the fixture's English-only metric failed the backend's required translations
validation422. The fixture was corrected to supply Persian as well. No backend/SDK fix needed.
`run-third.log`: first complete20-operation pass,236 assertions.
`run-fourth.log`: a new preview-retry assertion failed because the fixture's failure injector
had overwritten its preview snapshot. The injector now preserves preview configuration.
`run-fifth.log`: expanded348-assertion pass. `run-final.log`: same pass on immutable07279def.
No raw failed run was overwritten or described as a production defect.

## Reproduce and limits

From the isolated checkout, point SUMMARY_SDK_PACKAGE_ENTRY at the isolated compiled
consumer/node_modules/@faiber/faiber-profile/dist/index.js, then run:

    bash tests/run-summary-rest-sdk.sh

The runner uses only disposable localhost dependency containers and drops its own schema.
Images must already be available (--pull never). It requires an available locked Rust SDK
revision. This run used offline cached canonical-URL Rust objects originally resolved via the
previously documented local Git transport mirror; canonical remote availability is unproven.
CARGO_TARGET_DIR may reuse build artifacts; no Cargo dev patch is required or asserted.

This closes the bounded public Profile REST/compiled-SDK wire coverage gap, not all Summary
acceptance. Real model/provider/billing, live IDP/permissions, deployment, six real domain MCP
adapters, failure/timeout causality, browser behavior and8 retired LMS HTTP responses remain
separate checks. Failed job state in these retry cases is deliberately injected locally.
The consumer is JavaScript against compiled typed SDK exports; it is not a new exhaustive
compile-time DTO assertion suite or runtime schema validator for every optional field.
No paid call, source push, npm authentication/publication, live configuration/deployment or
model selection occurred. Original frozen handoffs and classroom/CRM contributions remain intact.
