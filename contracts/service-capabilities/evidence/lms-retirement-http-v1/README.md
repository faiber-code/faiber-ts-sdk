# Retired LMS summary endpoints: real HTTP classification

**Passed:**57 assertions, all8 retired operations exercised twice against the actual
mounted LMS router through the compiled TypeScript SDK's generic request transport.
Production LMS source is a2d00df7f1cc34c3b2e356824c49e39c12047a33. Test-only descendant
1fbba589305088ecc6210a1baf2e4beb07ce5a82 adds4 files under tests/ in its own checkout:
`/Users/mohammadralizadeh/Infera/.task-worktrees/lms-retirement-http-20261019/infera-lms`.
No production source, historical migration, original handoff or owner SDK checkout changed.

## Exact observed responses

These are service-boundary responses with a valid synthetic gateway actor. They are
**not eight uniform404s** and are not deployed gateway acceptance.

| Retired operation | SPA index present | SPA index absent |
|---|---|---|
| GET /api/v1/ai-summaries/settings |200 HTML SPA fallback|404|
| PUT /api/v1/ai-summaries/settings |405|405|
| GET /api/v1/ai-summaries/models |200 HTML SPA fallback|404|
| GET /api/v1/ai-summaries/latest |200 HTML SPA fallback|404|
| GET /api/v1/ai-summaries/jobs |200 HTML SPA fallback|404|
| GET /api/v1/ai-summaries/summaries |200 HTML SPA fallback|404|
| POST /api/v1/ai-summaries/refresh |405|405|
| POST /api/v1/ai-summaries/users/{user_id}/student/refresh |405|405|

Each405 has Allow:GET,HEAD and empty body. Each200 has text/html and the exact synthetic
SPA sentinel, not a JSON envelope. No retired path returns401/403, summary JSON, queue
receipt or compatibility-proxy output. The index is created in a unique temporary cwd;
only that test index is removed for phase2. Actual panel assets and source files are
untouched. Source router.rs has a GET-only generic ServeFile fallback, explaining both
observations. Do not mistake HTML200 for a supported legacy API or promise external404.

The actor UUID and old admin/config/summary grants are passed as trusted gateway headers.
Actual auth/self confirms the same UUID and permission list. Health, ordinary grade-list
and evaluation-settings endpoints return JSON200; OpenAPI has no retired summary paths.
Thus retirement is not an auth denial or a dead server. This does not validate real IDP
JWT/gateway policy; an external deployed gateway may respond differently.

## Storage and historical migration preservation

On a fresh disposable PostgreSQL database, all38 actual LMS migrations apply, including
m20260912_000020_session_evaluations and the combined
m20260916_000021_ai_performance_summaries. Neither was deleted or reversed. The test
seeds one legacy result and one due legacy job, preserving the3 legacy settings rows.
Before/after row counts and JSON equality checksums are identical across all requests.
Ordinary evaluation settings remain callable. The test checksum uses MD5 only as an
in-process/local equality probe; production configuration/evidence identity is not changed.
Artifact and source manifests use SHA256. Detailed migration names/checksums are recorded
in legacy-storage-result.json and raw logs.

This proves these HTTP requests do not mutate, enqueue or replace the legacy rows.
It is not a universal DB read audit or live scheduler cutover test. Application schedulers
and background consumers are intentionally not started. Source removal of the old module/
spawn is independently preserved in the pinned source; actual deployed scheduler state,
rollback and Profile activation remain separate operational checks.

## SDK/source binding and reproduction

Core/LMS source was git-archived at SDK40b58b73f1482f49925e34180cee8f7452fc0972 and
independently compiled with TypeScript5.9.3 in sdk-build/. Node22.13.1/Axios1.20.0 uses
the resulting isolated packages. The retired wrappers are not reintroduced: tests use
LmsApi's generic transport to probe former URLs and check retired facade/operation names
are absent. Archived LMS source has no ai-summaries/ai_summary/aiSummary definitions.
Runtime dependencies were copied from the earlier hashed Profile test snapshot, not
installed or changed in the SDK owner's checkout.

SDK owner advanced while this bounded test ran. Handoff records its later source difference:
a type-only HttpRequestMethod alias was added to core/src/types.ts. This test certifies the
exact archived40b58b source, not every later combined SDK commit. The owner should include
this case in its final combined checks. No SDK source changes are requested by this result.

The supplied bundle/patch contains only test files. With an isolated compiled
@faiber/faiber-lms dist/index.js available, from the separate test checkout run:

    SUMMARY_LMS_SDK_ENTRY=/absolute/path/to/isolated/dist/index.js bash tests/run-summary-retirement-http.sh

The script starts disposable localhost PostgreSQL/RabbitMQ from already cached images,
runs the locked/offline test and removes its own containers. This run used the cached
RustSDKd3a76ff objects originally acquired using the documented local Git insteadOf
transport mirror. It does not prove canonical remote availability of unpublished sources.
The first run passed56 assertions; final immutable-pin run adds the runtime SDK name check
and passes57. Both raw logs are preserved. No test failures were suppressed or invented.

Detailed source IDs, commands, response bodies, scopes and hashes: handoff.json,
wire-result.json, source/runtime manifests and SHA256SUMS. All3,247 original source-fence
files still match. No paid provider/billing call, source push, npm publication, live
configuration, credential/grant, deployment or summary enablement was performed.
Six-real-domain MCP execution, live model/financial-owner/provider/billing, actual browser
and coordinated deployment acceptance remain explicitly outside this test.
