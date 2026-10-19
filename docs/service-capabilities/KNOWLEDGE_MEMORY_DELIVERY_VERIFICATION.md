# Knowledge delivery prerequisite verification

Local isolated source `24eb78f` (full hash in the retained JSON) passes53 tests:
43 unit cases and10 real disposable PostgreSQL delivery cases. Exact source and
all436 resolved dependency package directories remained unchanged. The database
used cached pgvector/pgvector:pg16 with explicit vector/pg_trgm provisioning before
the complete actual migrations; the image digest, commands and locks are retained.
The first plain-PostgreSQL run failed migration setup and is preserved as failed.
The canonical extension guard was not removed or bypassed.

Tests kill actual child processes after claim and during application; database
triggers/advisory locks establish an in-flight transaction before termination.
Expired claims are reclaimed. Stale owner/generation completion and failure are
rejected. Concurrent claims are disjoint and same-event application commits once.
Audit failure and expiry roll back all subject/memory writes. Fresh database policy
is checked during apply; corrupt envelopes fail without recording memory. The
new migration roundtrips after quiescence and refuses removal during processing.
The subprocess helper is excluded from parent counts, not a passing empty test.

The source baseline and exact wire/authorization/subject/duplicate/correction/
forgetting semantics are documented in the isolated service's
`docs/MEMORY_DELIVERY_SEMANTIC_BASELINE.md`. Its ordinary working checkout, local
note/query repairs and unrelated Fit8 changes are preserved. Canonical main remains
70b8a217; local source reconciliation is not deployment or release acceptance.

Evidence: `evidence/knowledge-memory-delivery-tests-24eb78f.json` and matching log,
plus the exact runner. This closes only the local E-W lease/apply prerequisite.
Producer transactional outbox, receipt validation, read-your-writes watermark,
current identity/project scope, E-ID and forgetting/epochs remain open. No model
call, instruction publication, deployment or memory cutover occurred.

The SDK1.0.0 snapshot dd52e55 is unchanged. The user's later npm authorization is
conditional on completing SDK release gates; interactive authentication/publication
must wait for those gates, including canonical integration and the coordinated
Profile/LMS breaking cutover. It does not authorize service deployment or migration.
