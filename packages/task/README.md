# @faiber/faiber-task

## Offline synchronization

`api.offline.capabilities()` discovers the coordinated offline-sync backend.
`api.offline.apply(change, {signal})` submits a named `OfflineChange` with a stable
UUID, original UTC `changed_at`, target, kind and payload. Retain the exact payload
on retry. `OfflineSyncResult.outcome` is `applied` or `superseded`, and its snapshot
contains the current authorized task/checklist/document. Conflict ordering is per
work item by original edit time, with UUID tie-breaking. Note-document payloads
must contain full Yjs state. Domain permission and validation errors remain errors;
clients retain unsynced work. These APIs require the Task offline migration and
endpoint deployment; package types alone do not enable server support.

Typed client for every authenticated Faiber Tasks route. Tasks is the sandbox-local authority
for projects, work items, sprints, scoped access grants, reporting, comments, agent proposals,
and realtime invalidation events.

```bash
npm install @faiber/faiber-task
```

```ts
import { FaiberClient, TaskApi } from "@faiber/faiber-task";

const task = new TaskApi(new FaiberClient("task", {
  domains: { task: process.env.FAIBER_TASK_URL! },
  authMode: "bearer",
  getAccessToken: async () => accessToken,
}));

const projects = await task.listProjects({ mode: "software" });
const personal = await task.ensurePersonalProject();
const shared = await task.createSharedProject({ name: "Household" });
const item = await task.createWorkItem(input, crypto.randomUUID());
await task.transitionWorkItem(item.data.data.id, item.data.data.version, { status: "in_progress" });
```

All methods return complete Axios responses and accept shared request options, including
`AbortSignal`. Mutable aggregates emit ETags; updates accept the integer version and send it
as `If-Match`. Retried work-item creates must reuse the same idempotency key. `openEvents`
opens the authenticated SSE invalidation stream with the fetch adapter by default.

`ensurePersonalProject` is idempotent and grants the signed-in user only project-level
access. `createSharedProject` creates a general project with an owner grant and an
acceptance-required assignment policy. These are generic Task APIs; use the
existing `createProject` method for software or marketing project modes.

All methods return complete Axios responses. On transport or API failure, catch
the Axios error and inspect `error.response?.status` and the service response.
Pass an `AbortSignal` through the final request-options argument to cancel calls.

IDP proves identity and the configured global Task permission. Task independently enforces
workspace, team, project, and work-item grants. Global roles never bypass local grants.

### Checklists, collaborators, and reminders

`projectChecklists` and `checklist` return atomic task/checklist snapshots. Save with `replaceChecklist(taskId, taskVersion, {items})`; a 409 requires reloading before retry. `projectMembers` lists project grants, and `removeProjectMember` requires project membership management rights (owners cannot be removed). `reminder`, `saveReminder`, and `removeReminder` operate only on the current user's reminder. Use version 0 for first creation and the returned reminder version thereafter. Reminders accept future ISO timestamps, IANA time zones, and `once`, `daily`, or `monthly` recurrence. Task creation accepts an optional `reminder` atomically. Delivery is handled by Messenger; these APIs never grant access to another user's inbox. All operations preserve Axios responses and support cancellation through request options.

### Reviewed workspace changes

`task.workspaceAssistant` provides scoped task/note queries, category folders, saved planning preferences, and durable review proposals. Queries return an exact `total`, cursor pages, and retrieval time. Date ranges are inclusive at `from` and exclusive at `until`; `completed_by_me` uses recorded completion actors, including tasks subsequently reopened. Use `owner_id` for assignment-based lists.

```ts
const result = await task.workspaceAssistant.query({
  project_id: spaceId, owner_id: signedInUserId, active_only: true,
  from: tomorrowStart, until: nextDayStart, limit: 200,
});
const proposal = await task.workspaceAssistant.propose({
  conversation_id: conversationId, project_id: spaceId,
  request_id: crypto.randomUUID(),
  operations: [{ kind: 'update', id: taskId, expected_version: currentVersion,
    patch: { due_at: tomorrowStart } }],
});
// Render proposal.data.data.preview and collect the user's review first.
const applied = await task.workspaceAssistant.apply(
  proposal.data.data.id, proposal.data.data.revision,
);
```

`revise` validates edited operations and produces a new revision. On a conflict, `refresh` rebuilds the preview from current records; review it again before applying. Approval is transactional and idempotent for the same revision. All methods inherit caller authentication, cancellation, and Axios error handling. They require `task:access:use` plus each operation's current Task capability; project-owner billing never grants access. Initial `createWorkItem` checklists and personal reminders are committed together with the task.
Administrative 2Done reports: `adminUserPlans({ user_ids })` returns sandbox subscriptions for up to 100 comma-separated user UUIDs; `incomeReport({ from, to, plan?, page? })` returns confirmed purchases and daily cash income in toman. Dates are inclusive YYYY-MM-DD in Asia/Tehran, at most 366 days. Both require verified administrator role and Task access. Methods retain the full Axios response and accept cancellation options.


### Boards, private sources and note memory

`task.collaboration` exposes versioned shared workflows, private attachments, note media,
imports, indexing and owner-pooled allowances. Inspect `config()` before offering a
feature and use its deployment-specific file/audio ceilings. Stage IDs and canonical
categories remain stable when names change. Only space managers edit shared stages;
participants can transition only assigned tasks. A 409 requires refreshed versions and
an updated preview before retrying a move.

Create an attachment reservation with a stable request UUID and SHA-256 checksum, upload
with `uploadAttachment`, then poll `attachment` until scanning marks it clean. Bind clean
IDs to a comment or use `attachNoteMedia`/`setNoteCover` with the current note version.
Downloads recheck Task permissions. Storage remains charged while retained originals
exist; unbinding a file preserves note text and schedules abandoned-object cleanup.

`startNoteImport` accepts a clean private original; `startSourceImport` accepts a public
HTTP(S) page. Poll `noteImport`, show extraction and provenance, then explicitly approve
with `applyNoteImport`. One conversion consumes one import; OCR and audio also use their
configured allowances. Cancellation and retry use the job version. Never automatically
apply extracted content. `workspaceAssistant.propose` supports `import_note` with the
current import/note versions, append/replace mode and an optional reviewed summary; the
original stays attached. A changed source or note returns 409.

`searchNotes` defaults to one specified project and accepts up to nine additional
accessible projects. Task reauthorizes every returned note/version before returning a
citation. `noteIndexing` and `retryNoteIndexing` expose progress and authorized retry.
New content remains directly readable through explicit note selection during indexing.
Saved supported originals are extracted asynchronously without changing note writing.

Reviewed `archive_note` operations take `archived: true` or `false`. They retain content,
files and history. Default assistant queries and knowledge search omit archived notes;
explicit note selection remains permission checked. Use `include_archived: true` only
when the user requests archived records. All methods preserve Axios responses and accept
request options, including cancellation signals.

Internal operations require a trusted server credential and current tenant scope. Never call them from a browser or expose the service credential to application users.

## Configurable feedback requests (0.24.1)

`task.feedback.capabilities()` returns current verified reporting roles and readiness. A new Task instance has no policy or workflow preset. A workspace manager configures it in `/dashboard/settings/feedback`; it is stored only in that sandbox database. Clients must not encode role mappings or stage counts.

Use exported `ReportContext` and `SubmitFeedbackRequest` types, initialize/upload/complete private screenshot evidence, then call `task.feedback.submit(input, crypto.randomUUID())`. Keep the same key and body for retries. Screenshots can be unavailable without blocking submission. `list`, `detail`, `decide`, and authorized `attachmentContent` preserve server ownership and local review scope. A decision uses `expected_version`; stale versions return 409. Only the configured final assignment stage creates a task. `current_stage` contains its bilingual label and action kind. Existing reports retain the submitted route snapshot after policy edits. Management methods require local `workspace.manage`; policy writes use the current version (zero initializes).

All calls retain Axios status/headers, authenticated cookies or bearer tokens, AbortSignal cancellation and transport errors. Never submit hidden answers, credentials, signed media URLs or private evidence in broker events.

Task source contracts include feedback intake, review decisions and private evidence,
workspace queries and governed proposal batches, note documents/imports, board workflows,
owner-pooled usage and plans. `operations` exposes every mounted HTTP operation, including
internal service operations; internal plan/gift operations require a separate backend
service credential and should only be called from a trusted server.

Read the current ETag/version before updating projects, work items, reminders, preferences
or proposals. Pass `If-Match` in request headers for generated methods; convenience methods
accept a version argument. Missing preconditions return 428, stale revisions return 409.
Work-item creation and feedback submission/decisions require stable `Idempotency-Key`
headers across retries. Deleting a work item returns 204 with no JSON body. Project and
work-item collection endpoints include pagination metadata, but this backend pin always
returns null cursors for those legacy collections; assistant queries provide real UUID cursors.

`workspaceAssistant.query` accepts structured `record_type` and `field_filters` only with
`item_type: 'note'`. Proposals use a discriminated `kind` with its full operation payload.
Validate or persist a preview, review it, then apply that revision. Application rechecks
resource access and the preview inside one transaction; a conflict applies nothing.

For feedback, call `feedback.capabilities()` before capturing context. Preserve its
`reporter_id` using `X-Feedback-Reporter-Id` on submission and screenshot operations.
A 409 `feedback_identity_changed` requires discarding the capture and obtaining a fresh
binding. This header is a precondition, never an authentication credential. Review and
assignment require both the configured IDP permission and the local branch/stage role grant.
Screenshot uploads are raw PNG/JPEG/WebP bytes; general Task attachments use `FormData`.
Private downloads use byte responses and preserve the Axios response headers.

`openEvents()` returns a raw SSE stream of `event: invalidate` / `data: changed` frames,
with keepalives every 15 seconds. Reconnect and fetch authoritative snapshots after an
invalidation; no replay cursor is provided. Note realtime uses separately authorized
Sockudo channels: config is enveloped, while the authorization endpoint returns raw
`{ auth }`. The SDK exposes the HTTP boundary; connect a compatible realtime client
using the returned configuration. Disabled collaboration features can return 404 and
unconfigured realtime can return 503.

Project `settings`, work-item `custom_fields`, session/commit `metadata` and agent-proposal
`payload` deliberately retain JSON extension data because the service stores
`serde_json::Value`; fixed outer envelopes and all declared nested models remain typed.

### Funded campaigns and private recognition

Campaign jobs use Social posts and claims. Public Do campaign discovery does not
expose private participant identities or evidence. Starting a job queues a funded
reservation; proof review queues an idempotent Asset settlement. A pending response
is not confirmation that a reward has been paid. Read the assignment again to
observe settlement. Dox campaigns are private and have no spending power.

Use stable `request_id` values on retries. A reused ID with different contents
returns a conflict. Upload scanned evidence using `FormData`; proof downloads
require participant, campaign moderator, or authorized operator access. These APIs
require deployed campaign support and configured service integrations. Financial
features are disabled until funded and enabled by the service operator.

```ts
const campaigns = await task.rewards.campaigns({ view: 'public' }, { signal: controller.signal });
console.log(campaigns.status, campaigns.data.data.items);
```
