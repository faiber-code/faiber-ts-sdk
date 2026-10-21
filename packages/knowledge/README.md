# @faiber/faiber-knowledge

Versioned knowledge bases, groups, items, graph edges, chat bindings, match rules, runtime resolution, publishing, actions, and audit history.

## Install

```bash
npm install @faiber/faiber-knowledge
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { KnowledgeApi } from "@faiber/faiber-knowledge";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("knowledge", {
  domains: { knowledge: process.env.FAIBER_KNOWLEDGE_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new KnowledgeApi(client);

const bases = await api.knowledgeBases({ status: "published", limit: 20 });
const result = await api.query("fitness-coach", {
  query: "What workout is scheduled today?",
  profile_id: userId,
});
```

## API surface

This package exposes 84 source-extracted operations from the knowledge service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

Operation registration describes transport coverage; it does not certify deployed behavior or current authorization. Packaged `provenance.json` identifies the selected service source and contract checksums.

Management routes use optimistic version fields where supported. Runtime queries are scoped by chat slug and return matched knowledge, rules, notifications, warnings, tasks, input requests, directions, and trace data.

## Authentication and authorization

Use a `TokenProvider` to forward the signed-in user's Bearer token, or enable `withCredentials` for secure HttpOnly cookie sessions. Permission requirements copied from service route guards are included in each operation's JSDoc. The SDK does not embed API keys, credentials, localhost URLs, sandbox hosts, or production hosts.

## Inputs, queries, responses, and transport

All methods return the complete Axios response, including status, headers, and request IDs. Request bodies and query objects are named exported interfaces. Nested pagination uses keys such as `page[number]` and `page[size]` where required by the service. Standard Axios request options, headers, timeouts, adapters, interceptors, and `AbortSignal` cancellation are supported as the final argument.

Generic REST resources are capability-guarded. Calling a legacy method that the service does not register throws `UnsupportedOperationError` before sending a request instead of producing a backend `405`.

## Errors and cancellation

```ts
try {
  await api.client.get("/health", undefined, { signal: AbortSignal.timeout(5_000) });
} catch (error) {
  // Axios errors retain response.status and the service error body.
}
```

Use `@faiber/faiber-ts-sdk` when one application needs multiple Faiber services with one configuration.

### Deterministic published assistant contracts

`knowledge.assistantContracts(assistantId, '2done-assistants')` retrieves complete contract records from the assistant's enabled base binding and immutable published release. It returns `data.release_id` and keyed `data.contracts`, including localized content and versioned JSON Schema metadata. Unlike semantic retrieval, this operation does not rank, truncate, or omit required contracts. It requires `knowledge:runtime`; absent, disabled, unpublished, or inaccessible bindings fail rather than returning partial guidance. Normal Axios authentication, cancellation, and error handling apply.

Internal operations require a trusted server credential and current tenant scope. Never call them from a browser or expose the service credential to application users.

### Publish and read an immutable release

`publish(baseId)` requires `knowledge:publish` and returns a
`KnowledgeReleaseResponse`, including the release ID, manifest, checksum, and
publication timestamp. The mutable knowledge base instead points to that release
through `published_release_id`. Read a pinned snapshot with `release(releaseId)`
or `operations.routesGetReleaseGet(releaseId)`; both require `knowledge:read`.
An authoring `export(baseId)` is mutable and has an export timestamp; it is not a
published instruction bundle.

```ts
const published = await api.publish(baseId, { signal });
const release = await api.release(published.data.data.id, { signal });
console.log(release.data.data.checksum_sha256);
```

Base, group, item, edge, binding, and rule responses expose their actual record
fields, including revisions, timestamps, nullable actor/deletion fields, and item
links. Localized content, metadata, condition expressions, and policies retain
JSON values where the service defines an extensible schema. Item links require
`linked_service`, `linked_entity_type`, and `linked_entity_id` together. An empty
link string clears that link field during an update; omitted fields are preserved.
`null` does not clear optional update fields in the current Rust DTOs. Use
`expected_version` when editing to detect conflicts; handle HTTP 409 by reloading
the current record and preserving unsaved user input.

### Filter and page match rules

`matchRules({ q, knowledge_base_id, group_id, enabled, page, limit })` filters
active rules before pagination across all authorized active bases. `q` matches
slug or localized name text. The response includes `meta.total`, `meta.page`, and
`meta.limit`; `limit` is bounded to 1–200 and pages start at 1. Ordering is by
priority followed by rule ID. This API does not truncate the base directory to
its first 200 records. `operations.routesListRulesGet()` exposes the same wire
contract. Group and base filters use their UUIDs; inaccessible or deleted bases
contribute no results.

### Authoring lists, actions, and direct text ingestion

Base, item and match-rule lists return the array in `response.data.data` and pagination
in `response.data.meta` (`total`, `page`, `limit`). Item importance accepts `debug`,
`info`, `notice`, `warning`, `urgent`, or `critical`. Optional scalar editor update
fields accept `null` as the backend's omitted-value behavior; null does not clear a
parent, date, or link. Empty link strings are handled separately by the service.

`ingestDocument` performs direct text/chunk indexing synchronously. A changed document
returns HTTP 201 with `status: "indexed"` and a completed `job_id`; a retry with identical
external ID, content checksum and source fields returns HTTP 200 with `status: "unchanged"` and no new
job ID. Indexed text does not imply that vector embeddings are ready. The document
list returns a projection with `indexed_at` and `created_at`; it does not include
content, checksum or metadata. Use the authorized document-evidence operation when
that content is needed.

Editor audit logs (`operations.routesListAuditGet`, permission `knowledge:audit`)
and platform audit events (`auditEvents`, permission `knowledge:read`) are distinct
record formats. Action status accepts `open`, `acknowledged`, `snoozed`, `completed`,
or `dismissed` with `knowledge:actions`; ordinary read permission does not authorize
action updates.

Corrections to title, media type, language, provenance, metadata or source association
update the existing external-ID document even when the text checksum is unchanged.
Reprocessing retries return the actual persisted active job ID; they do not promise
that an ingestion worker or embeddings are ready.

### Source configuration and synchronization

Source records include their organization/base, version, configuration and provenance
policy, synchronization cursor/counts, converter references, schedule and timestamps.
`operations.platformCreateSourcePost` accepts the named `CreateKnowledgeSourceInput`;
source kinds are `manual`, `api`, `crawler`, `web`, `sitemap`, `rss`, `infera-drm`,
`infera-session`, `structured`, and `database-export`. Configuration/provenance members
are deliberate service-defined JSON extension values. Keep credentials in Control and
provide reference keys ending in `_ref` rather than raw secrets.

`platformSyncSourcePost` returns an enqueue receipt. Inspect processing-job state and
adapter availability separately before treating source data as synchronized. The
`platformPauseSourcePost` operation toggles active/paused state; it is not an idempotent
"set paused" request. Read the current source after an ambiguous transport failure
before repeating the toggle. Source management requires `knowledge:write`; listing
sources requires `knowledge:read`.

### Canonical v1 memory-management successor (draft integration)

The management additions require the matching verified Knowledge backend before
package promotion. The source pin is intentionally unchanged during draft work.

- memorySubject, memories, memory and memoryAudit read current tenant-scoped
  projections. Policy and nullable overrides are separate. Expired/forgotten
  content is redacted; audit projections exclude retained private snapshots.
- setMemoryOverride requires expected_revision from the exact reviewed subject.
  Null or omitted override fields reset that override under PUT semantics.
  A409 is surfaced once; fetch/review and deliberate resubmission belong to the
  operator. The client never automatically rebases the draft.
- setSourceState and canonical platformPauseSourcePost send desired_state and
  captured expected_version. The canonical v1 route replaces blind toggling;
  callers must pass both fields.
- correctMemory sends explicit reviewed memory IDs and correction UUID. The
  service requires current owner/write authority and the complete conflict set.
- forgetMemory and clearSubjectMemory preserve bounded type/reason query inputs.
- forgetAssistantScope calls canonical /api/v1/runtime/mcp memory_forget and
  returns the full Axios response. structuredContent.scope_fenced and cleared
  indicate a committed scope invalidation, including first pending turns with
  no subject; rows_changed may be zero. These fields do not promise erasure of
  original Chat conversations, source families or retained physical copies.

Adapter tests verify transport and types only. Backend PostgreSQL, authenticated
Manage proxy, package/source-pin reconciliation, bounded UI and release gates
remain distinct requirements. All endpoints remain under /api/v1.


Assistant memory-enabled flags remain hard capture/recall ceilings. Explicit true
subject overrides against an off lane are forbidden even if the stored legacy
override_widening_allowed flag is true. That legacy value is retained as history,
not an operative UI control. The response declares effective_override_mode as
narrow_only; inspect raw and effective values separately. Explicit assistant policy
changes require their own current-authority/revision/epoch integration gate.

### Captured assistant policy revisions and operation outcomes

Open an edit draft with assistantConfiguration(assistantId). Retain its
expected_policy_revision with that draft. configureAssistant requires the captured
revision and a caller-created, non-nil configuration_id UUID. Use zero only to
create an absent policy. Keep the same UUID and exact input after an uncertain
outcome; a changed request needs a new, explicitly reviewed operation. A409 must
never cause automatic snapshot fetching or rebasing.

assistantConfigurationOperation(assistantId, configurationId) reads the immutable
applied/cancelled outcome under current knowledge:write. The canonical generated
equivalents are platformAssistantConfigurationSnapshotGet,
platformConfigureAssistantPut, platformAssistantConfigurationOperationGet and
platformCancelAssistantConfigurationOperationPost. Explicit cancellation accepts
a nonempty reason up to500bytes, fences delayed delivery, and cannot cancel an
already committed policy. An identical original-actor replay never increments
policy history, audit or memory epochs again.

The DTOs are AssistantPolicySnapshotResponse, AssistantConfigurationInput,
AssistantConfigurationResponse, AssistantConfigurationOperationResponse and
AssistantConfigurationCancellation. These methods preserve Axios metadata,
current transport authentication, cancellation and actual error statuses.
Local PostgreSQL/HTTP tests are separate from deployed IDP/grant certification
and from the all-service semantic release gate.

## Context selection limits

Configured assistant levels constrain the owning-conversation context request on the selected Chat/Knowledge revisions. Null or omitted request levels do not remove a configured ceiling. Older deployed services may not enforce this behavior; verify the deployed receiver before relying on it.

Selected-assistant group slugs are stored configuration, but forwarding and descendant-versus-exact matching are not fully implemented consistently. Do not use those settings as an authorization boundary or promise that unclassified results are excluded. Server-side current tenant, permissions and base bindings remain authoritative.

Knowledge's selected-media chunk cap applies after governance and deduplication across both packing paths (default 8, valid range 1–20). Query limits are not a strict combined count across all returned lanes. Expansion and reranking settings can be retained as requested values while runtime capabilities report unsupported/not applied; storing a flag does not enable an algorithm or provider. Inspect returned trace/capability information instead of assuming these features ran.
