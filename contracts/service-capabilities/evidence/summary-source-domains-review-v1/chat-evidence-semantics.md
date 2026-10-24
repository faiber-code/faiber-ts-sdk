# Chat summary evidence

`/mcp` runs in the existing service process using official RMCP 0.8.5 Streamable HTTP.
It exposes four read-only tools: get_subject_context, get_activity_overview,
list_activity and get_activity_detail. Source-owned SQL and the actual EvidenceReader
are in src/summary_query.rs and src/summary_evidence.sql; the application adapter
only mounts that reader and starts the durable outbox publisher.

## Authentication and scope

Every HTTP request verifies an asymmetric Profile grant for source, deployment,
expiration and configured service UUID. Every evidence call independently revalidates
`SUMMARY_CHAT_IDP_TOKEN` at deployment-controlled `IDP_VALIDATE_URL` with the
source's /mcp service permission context. No credential is accepted from the model,
stored in configuration JSON or returned to Agentic. Neither a signed grant nor a
Profile read permission bypasses source-native permissions or object grants.

The signed native scope is a required organization UUID. Each call requires the
current service principal's explicit `chat:summary:read` plus the existing native
`chat:read` permission (qualified `chat:chat:read` and existing native wildcards are
recognized for this latter gate only). IDP role labels are not native membership.
Both the subject and service principal must be active current members of every
selected active, nondeleted conversation within that organization. Assigned scope
is unsupported; Profile must select subject scope.

Conversation snapshots are selected by `updated_at`, activity by message creation
time. Activity counts are subject-authored messages. Response timing uses the
immediately preceding recorded message by a different sender and excludes a prior
message outside the reporting window. This is not a measured support SLA, resolution
rate, acknowledgement or thread completion metric. Deleted messages are excluded.
Message context includes permitted conversation participants, not just the subject;
it requires explicit text access and is returned as bounded 4,000-character segments
of the existing JSON content representation. No attachment downloads are initiated.
The separate authenticated personal API mount fix ab6ce746 is retained as its own
ancestor commit; ordinary Chat APIs and current source features remain intact.

## Coverage and consistency

The native-policy preflight and evidence reads share a repeatable-read, read-only
PostgreSQL transaction. If any selected subject/window record lacks native access,
the entire read returns forbidden_native_record_scope; partial totals or fabricated
successful-empty results are not published as complete. Successful empty evidence
remains distinct from forbidden, unavailable and truncated records. Identity mismatch,
revocation or missing native permission fails before domain SQL. Every call revalidates;
there is no cached identity authority across calls.

Aggregates read the full authorized window before record pagination. Cursors use
stable category/record IDs; page limits are 1–100. This is cursor stability over the
current source state, not an immutable snapshot retained across separate calls.
Agentic receives revision fingerprints and must not assume separately paged reads
were one database snapshot. Text, when selected, is untrusted evidence.

## Deployment and tests

Profile selects the financial owner's exact tool-capable model reference; Agentic
makes the model calls. This service never selects or calls the LLM. Deploy the
coordinated Profile/Agentic/IDP and source candidates before enabling a configuration.
Provision the dedicated service identity, existing native object grants, deployment-
controlled URL/scope, verification key and SUMMARY_SERVICE_USER_ID separately.
No live identity, permission, configuration, deployment or model charge is created
by this source change.

The vendored shared contract is a byte-for-byte snapshot from Rust SDK commit
d3a76ff7c204e3da971960417bdfa335f7a73d2c, including released RMCP dependency sources.
Native service SDK revisions retain their canonical lock identities; previously
floating dependencies are explicitly pinned to those identities. Validation must run
outside the ordinary Service/.cargo development patches. No Cargo patch override
is used to claim production dependency acceptance.

`bash tests/run-summary-native.sh` creates a disposable real PostgreSQL database,
applies this service's actual full migration chain, compiles the actual production
reader/SQL, and calls it with the official MCP client and ephemeral signed grants.
It tests complete aggregates beyond one page, stable pages, empty data, forged subject
arguments, per-call identity/permission revocation, forged signatures/browser origins
and native partial-scope denial. Activity triggers are exercised on the migrated
schema and their durable outbox records are checked. This harness does not start
ordinary application schedulers, call a live IDP/provider, or prove live six-service
interoperability. RabbitMQ publication is separately covered by the shared/CRM real
broker fixture. Final handoff manifests distinguish production compilation, domain
MCP tests, source mounts and live acceptance; no deterministic model substitutes for
source SQL/MCP evidence.
