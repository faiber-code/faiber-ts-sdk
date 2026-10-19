# CRM summary evidence

`/mcp` is hosted in the existing CRM process using the shared official RMCP
Streamable HTTP transport. It exposes only `get_subject_context`,
`get_activity_overview`, `list_activity`, and `get_activity_detail`.

Authentication has two independent gates:

1. Every HTTP request validates Profile's asymmetric signed run grant, CRM audience,
   deployment, expiry and configured service user. The client cannot choose a subject,
   workspace, window, categories or permissions through tool arguments.
2. Every evidence call validates `SUMMARY_CRM_IDP_TOKEN` against the deployment-owned
   `IDP_VALIDATE_URL` using CRM's `/mcp` service context. Redirects are rejected. The
   resolved user must match the signed service user and have `crm:summary:read` plus
   the existing native read permissions for every selected category. A role label,
   Profile permission or possession of a signed run grant alone is insufficient.

Leads and tasks reuse REST's explicit read/read_own/read_all rules. Summarizing a
different subject requires `crm:lead:read_all` / `crm:task:read_all` for those selected
categories; `crm:admin` remains the existing native CRM permission alternative but
does not replace the separate `crm:summary:read` gate. Activity and SOS reads require
their existing `crm:activity:read` and `crm:sos:read` permissions (or native CRM admin).
No new role or service grant is automatically provisioned by this implementation.

Profile's `SUMMARY_CRM_SCOPE_ID` must match CRM's authoritative `AppState.workspace_id`.
The grant cannot select another workspace. Configure the deployment-controlled
`SUMMARY_CRM_MCP_URL` in Profile and CRM's usual `SUMMARY_VERIFYING_KEY`,
`SUMMARY_DEPLOYMENT_ID`/`SANDBOX_ID`, and `SUMMARY_SERVICE_USER_ID` separately.
Agentic receives the short-lived run grant; it never receives the CRM OAuth credential
or signing key. Keep credentials outside configuration JSON, prompts, audit records
and logs. An unavailable IDP or missing credential fails closed with `unavailable`;
denied native permissions/workspace returns `forbidden`, distinct from successful empty.

## Facts and scope

| Category | Subject scope | Additional assigned scope |
|---|---|---|
| leads | Leads owned by subject | Same owned leads |
| tasks | Tasks assigned to subject | Tasks linked to subject-owned leads, retaining actual assignee |
| activities | Activities owned by subject | Activities linked to subject-owned leads, retaining actual owner |
| sos | Escalations created by subject | Escalations linked to subject-owned leads, retaining creator |

Canonical CRM actor/owner/assignee user UUIDs come from existing authenticated REST
writes. Customer `profile_id`, legacy external identifiers and lead titles are not
reinterpreted as IDP subjects. Records expose only bounded operational metadata and
native record IDs/references; no contact PII, notes, bodies, descriptions or arbitrary
JSON metadata. This adapter advertises no text categories and rejects text grants. Task type is restricted to known operational values;
unrecognized custom strings become null with `task_type_supported=false`, so a
free-form task type cannot become an unbounded text/body channel.

Lead/task records use `updated_at` within the frozen UTC reporting window; activity
uses `occurred_at`, SOS uses `created_at`. Thus task counts cover updated records,
not all-time backlogs. Completion requires completed status and completion at/before
cutoff; overdue requires open/in-progress status and a due date before cutoff.
Source aggregates query all authorized window records before pagination. Stable
category/UUID cursors return at most 100 records and explicit truncation; record
versions include a content fingerprint. Duration is exact recorded numeric seconds
and is null when no duration is recorded, rather than an invented zero.

CRM call/meeting/message activity counts do not establish answered calls, actual
Chat response SLA, resolved cases, unique working hours or financial collection
credit. Financial facts remain Accounting's responsibility. Legacy `worklogs` and
`reminders` have no workspace key and are not exposed. Safely adding them requires
an authoritative workspace migration and verified actor/customer identity mapping.
Modern CRM tasks with `task_type=reminder` and `due_at` provide recorded scheduling
facts; neither proves follow-through or completeness of external calendars.

The durable outbox migration captures native writes and invalidates both old and
new owners/assignees. Lead relationship changes also invalidate task/activity/SOS
categories. Events contain identifiers/revision metadata only. The shared publisher
uses leases and RabbitMQ confirms; Profile deduplicates event IDs.

## Local verification

`bash tests/run-summary-evidence.sh` creates disposable PostgreSQL/RabbitMQ containers,
applies actual CRM migrations and tests query isolation, complete aggregates over 105
tasks, stable pagination, text exclusion, relationship invalidation, confirmed event
delivery, official MCP transport, forged arguments, service identity revocation,
missing credentials and workspace denial. It cleans up those containers on exit.
It never calls a real provider, provisions grants, deploys or enables generation.

This adds the sixth summary source to shared/REST/SDK contracts; older Agentic/Profile
binaries do not understand `crm`. Ship the coordinated service and SDK versions before
using a CRM configuration. Existing LMS cutover remains a separate breaking SDK change.

The source is reconciled on canonical1addec42 with independent fallback/CORS repair
178f5de3 retained as an ancestor. The actual reader is now in src/summary_query.rs;
REST and MCP share src/native_policy.rs permission functions. Each production
read uses a repeatable-read, read-only transaction. The independent
`tests/run-summary-native.sh` compiles these exact production modules and the same
integration test file without linking unrelated application integrations. It still
applies actual migrations and uses real PostgreSQL/RabbitMQ and official MCP.
Native service SDKs retain their canonical lock revisions, including the Asset
economy RPC pin. Shared contracts are byte-matched to SDK d3a76ff7c204e3da971960417bdfa335f7a73d2c.

The canonical CrmDatabase command-delivery transaction wrapper is preserved. MCP
is hosted from normal pooled application state; attempts to construct a long-lived
server from a request-scoped transaction fail closed with503, as for Task.
