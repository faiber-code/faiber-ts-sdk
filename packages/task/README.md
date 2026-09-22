# @faiber/faiber-task

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
