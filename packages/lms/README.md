# @faiber/faiber-lms

Courses, classrooms, homework/project banks and assignments, exam banks/items/sessions/users, certificates, reports, and education configuration.

## Install

```bash
npm install @faiber/faiber-lms
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { LmsApi } from "@faiber/faiber-lms";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("lms", {
  domains: { lms: process.env.FAIBER_LMS_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new LmsApi(client);

const courses = await api.courses.list({
  "page[number]": 1,
  "page[size]": 20,
});
const sessions = await api.courseSessions(courseId);
```

## Complete capability

This package exposes 164 registered operations from the learning management service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `academy` | 8 | `GET`, `POST` |
| `ai-summary` | 8 | `GET`, `POST`, `PUT` |
| `branding` | 5 | `GET`, `POST`, `PUT` |
| `certificate` | 10 | `GET`, `PATCH`, `POST` |
| `classroom` | 20 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `config` | 20 | `GET`, `PATCH`, `POST` |
| `course` | 17 | `DELETE`, `GET`, `PATCH`, `POST` |
| `dashboard` | 1 | `GET` |
| `docs` | 1 | `GET` |
| `drm-routes` | 1 | `GET` |
| `evaluation` | 4 | `GET`, `POST`, `PUT` |
| `exam` | 22 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `homework` | 24 | `DELETE`, `GET`, `PATCH`, `POST` |
| `integration` | 7 | `GET`, `POST` |
| `media` | 2 | `GET`, `POST` |
| `profile-routes` | 2 | `GET` |
| `report` | 8 | `GET` |
| `router` | 2 | `GET` |
| `service` | 1 | `GET` |
| `session` | 1 | `GET` |

Course sessions, classroom users and absences, assignments, invitations, club projects, support interactions, and work-time records have dedicated typed operations. Most LMS updates use `PATCH`; unsupported generic deletes are guarded locally.

### Homework and exam banks

Reusable homework definitions are the homework-bank layer: `api.homeworkBanks` and the compatibility alias `api.homeworks` address the same records. Use `api.homeworkBankItems(bankId)` for the definition's questions/items (`homework_questions`). Every item has `kind: "todo" | "project"`; the nested list accepts the same `kind` filter, and create/update accept the field. Delivery records reference an item's ID (not the bank ID) and are fully managed through `api.homeworkAssignments`. The compatibility methods `listAssignments`, `createAssignment`, `assignment`, `updateAssignment`, and `deleteAssignment` remain available.

Exam definitions are exposed as `api.examBanks`, their questions/items as `api.examBankItems`, delivery sessions as `api.examSessions`, and learner attempts as `listExamUsers`, `examUser`, and `updateExamUser`. The legacy `api.exams`, `api.examQuestions`, and `api.homeworks` names remain available.

```ts
const bank = await api.homeworkBanks.create({ name: "Projects", status: "active" });
const items = api.homeworkBankItems(bank.data.data.id);
const item = await items.create({ question_text: "Build a recursion demo", question_type: "answer", kind: "project", status: "active" });
const todos = await items.list({ kind: "todo" });
const assignments = await api.homeworkAssignments.list({
  statuses: ["pending", "unsolved", "completed"],
  homework_id: item.data.data.id,
});
```

Session attendance rows expose `attendance_mode` (`online` or `in_person`) alongside the stored `online` boolean, attended seconds, description, and ratings. The same details are available on absence rows. When recording an attendance batch, include `online` for each learner whose attendance mode matters; omitting it defaults to in-person.

### Classroom weekly schedules

Use `day_of_week` (Sunday `0` through Saturday `6`) and `starts_at` (`HH:MM` or `HH:MM:SS`) for new classroom schedules. Set `timezone_offset_minutes` when the local time differs from the offset in the classroom's `starts_at` timestamp.

```ts
await api.classrooms.create({
  course_id: courseId,
  name: "Autumn class",
  starts_at: "2026-09-20T09:08:11.383Z",
  status: "active",
  weekly_schedule: [
    { day_of_week: 0, starts_at: "15:00", timezone_offset_minutes: 210, mode: "online" },
    { day_of_week: 2, starts_at: "14:00", timezone_offset_minutes: 210, mode: "interactive" },
  ],
});
```

The weekly `mode` selects each generated primary session type: `online` → `ONLINE_CLASS`, `interactive` → `VIDEO` (composition media), `in_person` → `MEETING`, and `makeup` → `REWIEW_CLASS`. You can instead supply a `course_session_type_id`. Updating `weekly_schedule` on a classroom also reschedules its existing generated sessions. For existing forms, the LMS accepts `day` (Persian or English weekday name) with `start_time`; it normalizes these fields on save. Legacy `delivery_type` and `session_type` are supported when `mode` is absent, with `delivery_type` taking precedence. A Persian day without an explicit offset defaults to Tehran time (`+03:30`).

When moving one classroom session, opt in to shifting every later session onto the next weekly schedule slots after the new start time:

```ts
await api.classroomSessions.update(sessionId, {
  starts_at: "2026-09-23T10:00:00Z",
  shift_following_sessions: true,
});
```

If the selected session or an affected later session already has a provisioned room, the LMS returns `409 recording_reset_confirmation_required`. Repeat the request with `confirm_recording_reset: true` only after the user accepts that the affected recordings will be removed and those rooms reset.

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
