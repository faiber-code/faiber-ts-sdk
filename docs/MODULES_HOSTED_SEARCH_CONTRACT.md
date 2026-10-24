# Modules hosted catalog search contract

SDK source baseline: b335df45d828638b9b855c1f8bede731825ba92c.
Modules successor: 85e42a5f1440b78564f23b4bbf7723a0797d3470, descendant of
58900d8e5c95fcc3fa4d0d4906d95c7ea9027bb9. Other source pins are unchanged.

The mounted existing GET `/api/v1/categories`, `/api/v1/tags`, and
`/api/v1/seo-contents` now extract `HostedListQuery`. No route or operation was
added or renamed. Inspect `src/{category,tag,seo_content}/{routes,models,methods}.rs`,
`src/models.rs`, `src/common/pagination.rs` and the router at that exact revision.

`search` is optional text, at most 128 raw Unicode scalar values, with no NUL.
The service rejects invalid input with HTTP 400 before querying, trims whitespace,
then escapes SQL pattern metacharacters for a case-insensitive literal substring.
Category/tag name is searched; SEO matches title or URL. Blank/omitted search
preserves the unfiltered rows and count. Each data envelope serializes normalized
`search: string | null`, the catalog array, `page_number`, `page_size`, and
`total_items`. Page numbers are at least 1; page size clamps to 1..100, default 10.
Soft-deleted rows are excluded and UUID ascending order stabilizes adjacent pages.
Search adds no status, tenancy, session or permission semantics. Current service
and gateway authorization remains authoritative; a successful search is no grant.

The convenience resources retain their names (`categories`, `tags`, `seo`) and
full Axios transport. They now use a named `HostedCatalogQuery` and exact generated
list responses. The three existing generated operations retain their names/routes.
The generator special case for serialized nullable search is narrow to these three
verified DTOs; it does not reinterpret all Rust `Option` fields. No local filtering,
search rewriting, bounds emulation or implicit retry is introduced.

Native evidence supplied by the service owner is preserved separately in
`ops/poulstar-integration/verification-artifacts/manage-hosted-relations-20261021`
in the integration workspace: mounted routes were exercised with disposable
PostgreSQL/RabbitMQ and a separate sandbox database, plus sealed unit tests.
SDK loopback tests are transport fixtures, not replacements for that evidence.
SDK tests verify named/generated query serialization, non-ASCII and literal
metacharacters, omitted/blank input, response echoes/counts, bearer forwarding,
full Axios responses, cancellation and single-attempt 400/401/403/500 propagation.
Type fixtures reject invalid search types and missing response search.

The frozen source archive and actual packed consumer are verified separately in
release evidence. Package versions remain the unreleased 1.0.0 cohort. This update
does not clear the global all-service semantic gate, publish npm packages, grant
permissions, migrate agent memory or certify deployed UI/backend integrations.
