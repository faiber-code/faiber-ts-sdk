# Canonical Knowledge unit baseline

Fetched main `70b8a21721dd34125b8f0e167e06da9ad3287223` now passes all43
unit tests, with zero failures and zero ignored cases. The previous missing-csv
dependency failure remains historical evidence; direct crate access recovered and
`cargo fetch --locked` succeeded without modifying the canonical lock.

The clean detached checkout and all436 Cargo-resolved package directories were
hashed before and after `cargo test --locked --offline --lib`. This includes pinned
git Rust SDK and registry inputs, not mutable local path substitutions. All inputs
remained unchanged. Exact package hashes, compiler identity, lock hash and retained
command output are in `evidence/knowledge-canonical-unit-retry.json`.

The test runner limits owned compilation to two jobs, disables incremental output
and stops its own process group if available disk drops below6GiB. It does not delete
host caches or alter unrelated processes. The successful run did not hit the guard.
Its63.194second command duration is not agent-response latency.

These tests cover the canonical unit baseline only. Current scope authorization,
real durable ingestion/lease recovery, provenance/correction/forgetting and bounded
context/outage behavior still need their named runtime workflows. Full semantic
service/SDK and readable Manage gates remain ahead of Knowledge instruction
publication and scoped agent-memory migration. No memory has been migrated and no
production knowledge has been published by this work.
