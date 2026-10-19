# CRM summary completion handoff — 2026-10-19

CRM is implemented locally as the sixth read-only summary source. Poulstar drafts
now contain Student21, Teacher13 and Support27 metrics. Support selects LMS,
Session, CRM and Accounting, with CRM subject scope for personal work attribution.
No live draft was saved and generation remains disabled.

## Final verification

`frozen-verification.json` records **passed**, with **2,396 source/dependency inputs
unchanged** from `source-dependency-before.json` to `source-dependency-after.json`.
Its command logs/hashes cover shared Rust contracts (6 units + one official MCP
transport test across all six sources, 3 unrelated gates ignored), Profile role
configuration (1), CRM actual migrations/PostgreSQL/RabbitMQ/MCP (2), TypeScript
SDK build/all110 tests/private pack checks for22 packages, panel lint/9 tests/build,
and role draft applicator6 tests. No provider, billing, deployment, grants, installs
or publication ran.

The CRM test exercises complete aggregates over105 task rows, stable100+5 pagination,
foreign workspace UUID exclusion, subject/assigned attribution, body/custom-type
exclusion, forbidden native reads, forged model identity arguments, missing OAuth,
live service-identity revocation, old/new-owner invalidation and confirmed outbox
delivery. IDP ACL import1 and Agentic Profile runner6 earlier scoped tests also passed;
those logs retain their original scope rather than being presented as new live tests.

`browser-checks.json` records English and Persian RTL CRM selection, approved source
selection only, no overflow and a disabled/explained text control for metadata-only
CRM. These use a synthetic localhost API, not a live provider. The earlier failed
run-reload case remains retained with a separate positive final content assertion.

## SDK integration

`handoff.json` contains exact paths and SHA-256 hashes.
`typescript-sdk-crm-only.patch` changes exactly two SDK files: the Profile source
union and one authenticated CRM-source-check test. No REST operation was renamed,
added or removed; all20 Profile summary operations remain. The existing source
check route now accepts `crm`.

Rust contracts add `Source::Crm`, a sixth `Source::ALL` entry, CRM categories and
aggregates, and rejection of text access where the source supports no text. The
generated data-only Rust Profile SDK mirrors the new variant. Rust exhaustive
matches must account for it. Shared mirrors now include CRM. The MCP/grant envelope
version stays1. Ship coordinated binaries before using a CRM configuration.

The SDK release owner's isolated candidate was **not edited**. The original
`dd52e5597f53d4a16c1c9d0e4b2bc43a6eaa5726` evidence applies only to its original
inputs. The110 tests above belong to the current root SDK checkout, not the separate
Version/Social release candidate. This delta still needs integration into that
canonical release candidate and its final synchronized-version gates. No SDK was
published by this task.

`repository-state.json` lists ten repository heads, branches, complete dirty-file
hashes and fingerprints. It includes pre-existing/concurrent changes; do not commit
the entire dirty trees wholesale. This task made no commit, push or main merge.
Cargo checks used `Service/.cargo/config.toml` local SDK patches. Final production
locked/container builds against the canonical Rust SDK revision remain a release
gate; CRM Docker layers now include the shared crate.

## Remaining live and evidence gates

A fresh final browser check observed an authenticated ordinary Profile dashboard,
but both the summary route and roles API fell back to `/dashboard`, without summary
navigation or JSON role output. `live-access-recheck.json` supersedes the initial
unauthenticated-page observation. Live configuration saving remains blocked.

CRM still needs its deployment-controlled URL/workspace and a dedicated matching
OAuth identity with native source reads plus `crm:summary:read`. No credential or
access grant was provisioned. The IDP ACL permission and scoped native checks are
implemented and tested locally; actual deployed credentials remain unverified.

Financial-owner Qwen3 discovery, a real scoped preview and actual billing attribution
remain unverified. No model call or charge was initiated. Keep generation disabled
until those checks pass. Use generic service images with separate per-project
runtimes/configuration/data; do not consolidate runtimes.

Current financial balances/older debt/future schedule/refund reconciliation require
authoritative Accounting contracts. Teacher rank completion, author/grader attribution
and punctuality need explicit source facts. Legacy CRM worklogs/reminders lack a
workspace mapping and are not exposed; modern CRM task reminders/due dates are
available. CRM message activities are not Chat response or resolution metrics.
