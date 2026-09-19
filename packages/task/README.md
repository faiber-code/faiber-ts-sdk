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
