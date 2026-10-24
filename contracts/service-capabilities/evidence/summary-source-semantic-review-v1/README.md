# Pinned Summary contract semantic review

This is a source review and retained-evidence map, not a new integration test run or
release approval. `operations.json` enumerates all20 Profile operations and all8 retired
LMS operations, including exact method/path, inputs, output, permission, behavior,
source handler line and per-operation coverage. `reviewed-source-sha256.json` fences
the37 reviewed files. Original handoffs and source candidates are unchanged.

Reviewed immutable candidates:

| Component | Revision |
|---|---|
| Profile | 7a6a9ca28eb8e1498cb20557450d6dd81a6ae8ad |
| LMS | a2d00df7f1cc34c3b2e356824c49e39c12047a33 |
| Rust Summary SDK/contracts | d3a76ff7c204e3da971960417bdfa335f7a73d2c |
| Accounting adapter | 97ba4b6ff6a9f03c9504fffa8b4d1d6aa9844e8b |

Task/Session/Chat/CRM adapter relationship notes below reference separately hashed root
snapshots. Their service code is not part of the shared SDK commit. Do not attribute
all six production adapters or their native permission checks to d3a76ff.

## REST scope and identifiers

All20 operations mount below `/api/v1/ai-summaries` in Profile's router. Public input
cannot choose deployment, evidence network destination, billing owner or service identity.
Profile obtains deployment from `SUMMARY_DEPLOYMENT_ID` or `SANDBOX_ID`; this is server
configuration, not an independently proven current namespace binding. Agentic must attest
managed caller namespace through its own authentication/TokenReview and resolve current
financial owner. Those live cross-service facts are not established by these local tests.

The canonical role UUID is the IDP role ID, not a role name or Profile configuration ID.
One deployment+role configuration has its own UUID. Subjects are canonical IDP user UUIDs;
Profile's generic profile primary key must not be substituted for a user UUID. The evidence
service identity UUID is a different principal. Roles for one person have independent jobs
and results. Name-only events resolve IDP catalog IDs; unresolved names are quarantined,
never replaced with random IDs. The creation path checks canonical role existence but full
draft validation is intentionally later. Update cannot switch a configuration's role.

Non-preview jobs coalesce by deployment+subject+role. Job IDs are operational IDs; run IDs
identify immutable execution outcomes. Preview initially uses its job UUID as operation/run
UUID; ordinary runs may acquire a new operation UUID on the same coalesced job. API users
must follow returned IDs and not assume all job/run/configuration IDs are interchangeable.
Agentic operation identity is deployment-qualified. There is no LMS-to-Profile compatibility
proxy or old configuration/result import. Legacy LMS tables remain inert; the combined
historical evaluation migration is preserved.

## Permissions and envelopes

`configure` controls settings/catalog/configuration/publish/status/check. `manage` controls
queue/refresh/retry. These abbreviations mean `profile:ai_summary:<suffix>`. The backend also
accepts the exact unprefixed `ai_summary:<suffix>` convention; arbitrary prefixed suffix
matches and parent relationships do not grant access. Result reads require `read_own` or
`read_all`, independently from configure/manage. Preview additionally checks permission to
read its selected subject. `read_own` list queries force the authenticated user; `read_all`
remains bounded by deployment. Live route/gateway permission provisioning is not tested by
the static ACL checks.

Success returns `{status:"success",message:"ok",data:T}`. T is Settings, a configuration/run
record, catalog/list, Page or receipt as specified in operations.json. AppError uses an HTTP
error plus `{status,message}`. Axum path/query/JSON extractor rejections can follow Axum's own
error shape; no all-errors-envelope wire guarantee was established. Rust SummaryClient uses
reqwest error_for_status before decode; do not assume it retains typed business-error bodies.

`ListQuery` is user_id,role_id,status,page,per_page. Lists clamp page>=1 and per_page1..100
(default25), order by created_at DESC,id DESC, and return `{items,page,per_page,total}`.
Latest uses only role_id and optional user_id; irrelevant list fields are accepted but ignored.
Configuration lists are unpaginated. ConfigurationWrite denies unknown top-level fields;
Settings/ListQuery do not declare deny_unknown_fields. Nested shared configuration types
must be read from the pinned config.rs rather than a hand-invented permissive JSON body.

Configuration snapshots contain role/language/model_ref/guidance/lookback, source selections,
metrics, sections, refresh and budgets. Metrics select typed source aggregate, restricted
formula or LLM assessment. Aggregate references use source+category+key, not SQL; source
categories/scopes/tools must exist in capabilities. Value types are number/integer/boolean/
enum. Source/formula calculations are deterministic; qualitative output is schema validated.
Unavailable numeric facts are null with reasons. These SDK definitions are source contracts;
the actual provider/schema repair behavior belongs to a separately pinned Agentic runner.

## Lifecycle and receipt semantics

GETs never invoke LLM generation. GET settings may insert the deployment's initial default
row; it is not a completely write-free DB call. Validate/publish/preview can negotiate MCP
and read service-user context while checking sources. A source `configured:true` flag means
URL configuration exists, not that credentials, tools or subject grants were verified.

Publishing creates an immutable validated revision via optimistic transaction checks. Its
queue traversal runs after the publication transaction commits. If that later phase fails,
an HTTP failure does not prove publication rolled back; read the configuration before retry.
No public expected_version argument is consumed by publish; it internally compares the
loaded draft/publication versions. An identical published fingerprint returns409.

Preview202 is a queued preview receipt, not a completed result. Preview can execute while
global/role generation is disabled, and can incur a model charge. It validates membership
and draft and never changes the latest pointer. Non-preview refresh requires enabled global
and role state; immediate requests still coalesce. Refresh batches are sequential and not
atomic: earlier pairs may be queued before a later pair fails. Retry202 merely resets an
eligible failed job; it does not promise execution or preservation of a previous operation ID.
Preview retry behavior after resetting operation_id has no retained targeted execution test.

Latest availability, job status, freshness and completeness are separate. A failed refresh can
leave prior ready+stale content. Disabled returns no latest content; authorized run history
remains accessible. Role removal makes latest ineligible through cached membership and is
rechecked during generation/publication. Workers fence publication by lease, eligibility,
configuration/global state, published revision and evidence revision. They retain superseded
runs and leave changed work pending. These worker checks have local deterministic coverage;
real provider ambiguous outcomes/billing recovery are not established by a fixture response.

## Six-source MCP contract

Shared d3a76ff exposes four read-only tools for each source:
get_subject_context, get_activity_overview, list_activity, get_activity_detail. Rust uses
released RMCP0.8.5 Streamable HTTP; Accounting uses Laravel MCP0.8.2. Tool definitions and
structured output schemas are authoritative at discovery. No write, shell or browser tools
are attached by this contract.

Common Rust arguments: optional category,cursor,record_id,text_offset and limit(default50,
bounded1..100). Unknown keys are rejected. Detail requires record_id; text_offset is detail-
only and requires granted text access, <=1000000. Text pieces are bounded4000characters.
Accounting's actual schema excludes text_offset because it exposes no text. Profile's static
sources description advertises a shared input schema including text_offset for all sources;
therefore consumers must not treat that static description as exact Laravel tool arguments.

The grant binds issuer/audience/deployment/service principal/subject/role/run/config revision/
tools/categories/scope/text/window/native scope/expiry. Verification checks Ed25519 signature,
source audience, expected deployment, UUIDs, expiry/window bounds and configured principal.
Rust HTTP rejects browser Origin; grant credentials do not enter prompts. Live LMS+Accounting
also revalidate IDP principal UUID/transport permission on every evidence read; CRM has its own
live validator. Task/Session/Chat snapshots do not invoke this shared native_identity helper:
they apply current source-native SQL object grants/membership. Do not certify universal
per-call IDP revocation for all six adapters from the shared helper's unit test.

A successful EvidenceEnvelope contains contract_version,source,subject_user_id,scope,
window_start,cutoff,coverage,aggregates,records,next_cursor,truncated. Coverage is source,
status,revision,reason,record_count. Record is reference,category,id,version,occurred_at,data.
Coverage statuses are available/empty/unavailable/forbidden/unsupported/truncated/missing_identity.
Rust adapter errors return MCP isError structured status/error, not a success evidence envelope.
Accounting native errors do likewise. Aggregate queries cover the complete authorized
window, not the returned sample page. Cursors are opaque source pagination state, not subject
or network selectors. Returned evidence references are source-record-version identities;
Agentic must reject invented references and treat all source text as untrusted evidence.

| Source | Categories / text | Native binding and relationship intersection |
|---|---|---|
| LMS | classrooms,attendance,homework,exams,evaluations; text=evaluations | Optional signed class UUID; subject class enrollment or teacher/support relation. Subject attendance/assignments/exams, or assigned supervised learners. Separate service principal uses actual current IDP roles+classroom/homework/exam native scopes and record relationships. Requires lms:summary:read. Complete requested-window native coverage preflight rejects forbidden partial scope before aggregates; repeatable-read read-only DB transaction. |
| Task | work_items,activity,comments; text=comments | Required workspace UUID. Subject owner/reporter/people, or assigned subject with report.read capability. Service principal must have work_item.read via active workspace/team/project/item grants. No IDP-admin bypass. Existing SQL filters authorize every returned item; partial-scope denial versus empty is not independently proven. |
| Accounting | enrollments,installments,transactions,activity; no text | Signed requesting deployment, canonical student UUID. Assigned adds support/consultant; creator is included in current subject predicate. Never treat external_id as user UUID. Native service is office, MCP audience accounting; requires office:summary:read and current domain read_all/read_own. Enrollment own=support/consultant; installment/transaction own=support/creator/profile/student. Activity uses parent enrollment policy. Full requested-scope native preflight+repeatable-read transaction; unresolved legacy identity is explicit missing_identity. Amounts are exact decimal strings in authoritative IRR schema; no inferred mixed-currency sum. |
| Session | participation,timing,transcripts; text=transcripts | Optional signed room UUID. Both subject and principal need current active room_client links; principal needs source-native room teacher/support/moderator/admin role. Assigned expands only subject's staff rooms. Timing is clipped recorded state duration, not proof of unique attendance/punctuality. Reads existing analyses/transcripts only; never downloads/transcribes media. IDs named profile_id must be correctly mapped to canonical subject/principal by deployment; cross-service UUID equivalence is not established by the generic fixture. |
| Chat | conversations,activity,response_timing,messages; text=messages; subject only | Required organization UUID. Active conversation and active current membership for both subject and service principal. Activity/response timing is subject sender; selected message context may include other conversation participants under granted membership+text scope. Timing uses prior ordered message, not proof of support SLA. Current snapshot does not live-revalidate IDP OAuth on each call. |
| CRM | leads,tasks,activities,sos; no text | Required workspace binding; current CRM OAuth principal and explicit crm:summary:read plus native category read_own/read_all using shared native policy helper. Subject-owned records; assigned may include related lead records as supported. Preserves actor IDs. Legacy worklogs/reminders without workspace mapping are unsupported; CRM activity messages are not Chat replies. Text/task_type restrictions prevent arbitrary free-text side channel. This adapter is a separately hashed dirty-root contribution, not d3a76ff. |

Source source-native object IDs (class/workspace/organization/room/record) are not role IDs,
user IDs or project deployment strings. Only deployment configuration resolves MCP destinations
and native scope; clients cannot provide arbitrary URLs or credentials. A central managed
project, Office accounting runtime and VPS worker are distinct runtimes. Native grant policy
and deployment/subject mappings must be verified in the actual environment before generation.

## Evidence limits and concrete remaining SDK gates

The per-operation test map is deliberately conservative. T1's HTTP traffic is to local
IDP/Agentic doubles and real MCP; the20 public Profile REST handlers are called neither by
mounted HTTP nor compiled SDK there. T3 tests mock readers, not all six domain servers.
T4 exercises actual LMS domain SQL directly; T5 includes actual Laravel MCP HTTP. T11 proves
Rust↔Laravel negotiation/listing only. Static ACL and browser fixtures do not prove gateway
permissions or paid provider/billing behavior. Rust SDK library build has0tests. The claimed
seven shared units lack a separate retained stdout file in v1 and are identified as such.

Known acceptance gaps for the combined owner: actual mounted Profile REST+compiled SDK
request/query/status/envelope/permission tests; preview lifecycle and retry semantics;
positive history/jobs pagination/filter/redaction; all eight retired LMS HTTP responses;
six real domain adapter↔Agentic interoperability; actual owner-scoped model availability,
validated provider tool execution, cost/charge correlation and crash/ambiguous outcome recovery.
Declared utoipa status is200 even where implementation returns201/202(create/preview/refresh/
retry). Source routes and operations.json reflect actual handler statuses; generated OpenAPI
alone is insufficient as the authoritative status contract.

No new tests, paid calls, live configuration, deployment or permission changes were performed
for this semantic review. Current model-readiness receipt v2 separately confirms owner binding
but leaves the exact callable model reference and live Profile model selection pending. SDK
owner's separately reported IDP caller-auth repair is IDP-owned; the reviewed d3a76ff dependency
pin is not silently replaced. Any later integrated source must carry its own acceptance binding.
