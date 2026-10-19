# Session summary evidence

`/mcp` runs in the existing service process using official RMCP 0.8.5 Streamable HTTP.
It exposes four read-only tools: get_subject_context, get_activity_overview,
list_activity and get_activity_detail. Source-owned SQL and the actual EvidenceReader
are in src/summary_query.rs and src/summary_evidence.sql; the application adapter
only mounts that reader and starts the durable outbox publisher.

## Authentication and scope

Every HTTP request verifies an asymmetric Profile grant for source, deployment,
expiration and configured service UUID. Every evidence call independently revalidates
`SUMMARY_SESSION_IDP_TOKEN` at deployment-controlled `IDP_VALIDATE_URL` with the
source's /mcp service permission context. No credential is accepted from the model,
stored in configuration JSON or returned to Agentic. Neither a signed grant nor a
Profile read permission bypasses source-native permissions or object grants.

The grant may bind one room UUID or use the deployment-wide permitted room set.
The current principal needs `session:summary:read` plus explicit native permissions
for every selected category: room read/read_all/read_own for participation,
room:read_analytics for timing, and recording read/read_all/read_own or
room:read_recordings for transcripts. Unqualified and `session:`-qualified native
permission names are recognized. Global IDP role labels do not bypass these gates.
Both the subject and principal must be active linked room clients; the principal
also needs an existing native staff room role (teacher/support/moderator/admin).
A room UUID or broad Profile read permission alone never authorizes evidence.

Subject scope returns that client's participation, recorded state intervals and
existing transcript segments. Assigned scope expands within linked rooms only when
the subject has an existing native teacher/support/moderator room relationship.
Native room role values are source policy, not Profile configuration keys.
PostgreSQL's native varchar[] room roles are explicitly cast to text[] before the
role-overlap predicate. Current reconnect/Pastil/asset/scheduled-end changes remain
on the specified canonical base.

Participation uses current linked-client records updated/created in the window.
Timing clips recorded state intervals to the frozen UTC window. Overlapping state
logs are not deduplicated: duration totals do not establish unique classroom presence,
attendance, teaching quality, rank completion or billable hours. Transcript tools read
existing recording_audio_analyses only, in bounded 4,000-character segments when text
is explicitly permitted. They never initiate downloads or transcription. This change
removes only the obsolete LMS performance-context integration and mount.

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

The production IDP dependency explicitly disables default features and dev-fallback.
A separate SDK pair exposed that enabling the compile-time development fallback
can synthesize a nil actor even when DEV=false. The final feature graph must prove
no transitive dev-fallback before release; this is not a substitute for real peer
authentication acceptance.
