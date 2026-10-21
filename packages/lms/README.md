# @faiber/faiber-lms

## Educational data transfer

```ts
const result = await lms.transferUserData(
  { from_user_id: sourceIdpUuid, to_user_id: destinationIdpUuid },
  crypto.randomUUID(), // retain this key and reuse it if this request needs retrying
);
console.log(result.data.data.transfer_id, result.data.data.moved);
```

This supported `POST /api/v1/idp/option/transfer-user-data` requires `user_data:transfer` and an `Idempotency-Key` header (1–128 printable ASCII characters, no spaces). Both IDs must be distinct, non-nil UUIDs with active Profile records. `TransferUserDataInput`, `TransferUserDataResponse`, `EducationalTransferCounts`, and `TransferUserDataErrorResponse` are exported types.

The transaction changes learner ownership of classroom enrollments, attendance, homework assignments, exam attempts, grades, certificates, classroom notes/evaluations, academy enrollments, and interactive runs. For session evaluations it changes the target learner of teacher ratings and the author of student feedback. Record IDs, status, scores, submissions, question snapshots and foreign-key links are preserved; academy progress/attempts, exam answers and interactive attempts therefore follow their unchanged parent records. Response `moved` counts directly updated rows by category, not linked children. Profile classroom-cache synchronization is queued in the same transaction (`profile_sync: "queued"`).

It does **not** change Office balances, wallets, invoices, transactions or installments; identity/Profile properties; teachers, consultants, support staff or certificate issuers; invitations, support interactions, club project ownership or work-time entries; Chat participants, messages or conversation IDs; or historical migration/audit attribution. This is an LMS learner-record transfer, not an account merge. Existing Chat conversation access is not transferred.

Same actor + same key + same IDs replays the original successful response. Reusing that key with different IDs returns 409 `idempotency_conflict`. Existing destination uniqueness conflicts return 409 `destination_conflict` without merging or deleting records. Started exam attempts return 409 `active_attempt`; busy educational writes can return 409 `transfer_busy` (retry with the same key). Missing/invalid IDs or key return 422; unavailable Profile validation returns 502. Failures leave all educational records unchanged and do not consume the key. Authentication/permission failures use the shared IDP error contract.

Successful response: `{status:"success", message:"Educational data transferred", data:{transfer_id,from_user_id,to_user_id,moved,profile_sync:"queued"}}`.

Validation/conflict response: `{status:"error", error:{code:"destination_conflict",message:"...",details:{}}}`. `user_not_found` includes `details.user_id`. Axios errors retain the HTTP status and typed response body.

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

This package exposes 181 registered operations through typed bindings, including notification rules/contacts and excluding the eight retired LMS summary operations. Binding counts describe inventory only; service permissions and workflow verification remain separate requirements. Common workflows use concise methods, while named operation clients retain exact wire contracts.

| Area | Operations | HTTP methods |
|---|---:|---|
| `academy` | 8 | `GET`, `POST` |
| `branding` | 5 | `GET`, `POST`, `PUT` |
| `certificate` | 10 | `GET`, `PATCH`, `POST` |
| `classroom` | 20 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `config` | 20 | `GET`, `PATCH`, `POST` |
| `contacts` | 1 | `GET` |
| `course` | 17 | `DELETE`, `GET`, `PATCH`, `POST` |
| `dashboard` | 1 | `GET` |
| `docs` | 1 | `GET` |
| `drm-routes` | 1 | `GET` |
| `evaluation` | 4 | `GET`, `POST`, `PUT` |
| `exam` | 22 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `homework` | 25 | `DELETE`, `GET`, `PATCH`, `POST` |
| `integration` | 7 | `GET`, `POST` |
| `interactive` | 15 | `GET`, `POST`, `PUT` |
| `media` | 2 | `GET`, `POST` |
| `mod` | 3 | `GET`, `POST`, `PUT` |
| `notifications` | 1 | `POST` |
| `profile-routes` | 2 | `GET` |
| `report` | 9 | `GET` |
| `router` | 4 | `GET` |
| `service` | 1 | `GET` |
| `session` | 1 | `GET` |
| `transfer` | 1 | `POST` |

Course sessions, classroom users and absences, homework assignments, exam attempts, academy enrollments, reports, and certificate workflows have dedicated typed operations. Most LMS updates use `PATCH`; unsupported generic deletes are guarded locally.

Homework assignments and exam sessions expose explicit `student_user_id`, `teacher_user_id`, `consultant_user_id`, and `support_user_id` list filters. The existing `user_id` filter remains available when a caller wants any related participant or staff role.

Homework-bank items accept `name` on create and update. Responses always include `name`; when it is blank or omitted, the LMS derives it from the question text and caps it at 80 Unicode characters with an ellipsis.

### Homework and exam banks

Reusable homework definitions are the homework-bank layer: `api.homeworkBanks` and the compatibility alias `api.homeworks` address the same records. Use `api.homeworkBankItems(bankId)` for the definition's questions/items (`homework_questions`). Every item has `kind: "todo" | "project"`; the nested list accepts the same `kind` filter, and create/update accept the field. Prefer `api.homeworkAssignments.createForItem(item, delivery)` to select the exercise ID explicitly. Delivery records reference an item's ID (not the bank ID) and are fully managed through `api.homeworkAssignments`. The compatibility methods `listAssignments`, `createAssignment`, `assignment`, `updateAssignment`, and `deleteAssignment` remain available.

Exam definitions are exposed as `api.examBanks`, their questions/items as `api.examBankItems`, delivery sessions as `api.examSessions`, and learner attempts as `listExamUsers`, `examUser`, and `updateExamUser`. The legacy `api.exams`, `api.examQuestions`, and `api.homeworks` names remain available.

```ts
const bank = await api.homeworkBanks.create({ name: "Projects", status: "active" });
const items = api.homeworkBankItems(bank.data.data.id);
const item = await items.create({ question_text: "Build a recursion demo", question_type: "answer", kind: "project", status: "active" });
// item.data.data.id is the exercise; item.data.data.homework_id is its parent bank.
const delivery = await api.homeworkAssignments.createForItem(item.data.data, {
  user_id: studentUserId,
  classroom_id: classroomId,
  status: "pending",
});
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

Complementary videos inherit the time of the preceding session in course `sort_order`,
including a preceding video or online class. Moving that session also moves its following
complementary videos. Opt in to shifting later primary sessions onto the next weekly
schedule slots after the new start time:

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

## Versioned interactive learning

`api.interactive` exposes published previews, authored definition versions, start/resume, draft saves, progressive hints, deterministic submissions and bounded teacher context. The deployment must include the interactive-learning migration and executor. The previous unmounted `interactiveContent` resource now fails locally; use the supported versioned API.

```ts
const catalog = await api.interactive.catalog();
const started = await api.interactive.start(sessionId, { enrollment_id: enrollmentId });
const run = started.data.data;
const result = await api.interactive.submit(run.state.id, {
  revision: run.state.revision,
  activity_id: run.definition.activities[run.state.current_activity].id,
  code: "score = 10",
  idempotency_key: crypto.randomUUID(),
});
```

The server owns checks and mastery. Browser output must not be submitted as a passing result. Keep the idempotency key for retries of an identical submission; refetch on revision conflict. Definition authoring requires `lms:course:read`/`lms:course:update`; learner mutations verify active enrollment ownership and prerequisites. No API credentials belong in browser storage.

### Question, option, homework, and course images

Use the same authenticated upload endpoint for all LMS images. `File` (browser) and `Blob`
(browser or Node 18+) are supported; accepted formats are PNG, JPEG, WebP, and GIF up to 10 MiB.

```ts
const upload = await lms.media.uploadImage(file, {
  fileName: 'homework.webp',
  signal: abortController.signal,
  onUploadProgress: ({ loaded, total }) => {
    if (total) updateUploadPercent(Math.round(loaded * 100 / total));
  },
});
const imageUrl = upload.data.data?.url;
if (!imageUrl) throw new Error("Upload did not return an image URL");
```

The helper sends the multipart `image` field and inherits the SDK's IDP credentials and
refresh flow. Do not set a multipart boundary yourself. Native Axios progress reports bytes
sent; await the response before marking the upload successful, because storage can still fail.
A canceled or failed upload rejects with `AxiosError`. Progress availability depends on the
Axios adapter/runtime; browser XHR and Node HTTP support byte progress.

Uploading does not automatically change an exercise. Save the returned URL in the question's
`media` array, an option's `image_url`/`media` field, the homework item's `media` array, or the
course's image field using its create/update operation. Preserve the other media entries and
option values when editing. Returned image URLs are service-relative, so resolve them against
your configured LMS service origin for display. This endpoint currently requires
`lms:course:update`, including when the image will be used by an exam or homework.

Course creation and updates accept independent `in_person_price` and `online_price` decimal strings (for example, `"1200.50"` and `"800.25"`). Course list and detail responses include both fields. On update, omission preserves the saved price and `null` clears only that price. The existing `price` field remains available for existing consumers; delivery prices do not overwrite it.

### Makeup sessions for selected students

Pass `student_user_ids` when creating a classroom session to select a group of enrolled students. This roster controls attendance, student session visibility, and room provisioning; the teacher and classroom support user remain room members. Omit the field (or pass `null`) for the whole classroom. An empty array or a student outside the classroom returns HTTP 422; duplicate IDs are deduplicated. Selection is set at creation.

```ts
await lms.classroomSessions.create({
  classroom_id: classroomId,
  course_session_type_id: makeupSessionTypeId,
  name: "Makeup lesson",
  student_user_ids: [firstStudentId, secondStudentId],
  starts_at: "2026-10-25T10:00:00+03:30",
  duration_minutes: 60,
  status: "active",
});
```

Requires `lms:classroom:create` and uses configured authentication and Axios request options. The response includes `student_user_ids` (`null` for whole-class sessions).

### Teacher and support filters

`lms.homeworkBanks.list`, `lms.homeworks.list`, `lms.listHomeworks`, `lms.exams.list`, `lms.examBanks.list`, and
`lms.listExams` accept `teacher_user_id` and `support_user_id`. These definition filters
match the explicitly assigned staff on delivered homework items or exam sessions.
Supplying both requires the same delivery to match both staff members. Results retain
normal permissions and pagination; the filters do not grant access to other classrooms.
Assignments and exam sessions expose the same filters through `homeworkAssignments.list`
and `listExamSessions`.

```ts
const exams = await lms.exams.list({ teacher_user_id: teacherId, support_user_id: supportId, page_size: 20 });
const homeworks = await lms.homeworks.list({ teacher_user_id: teacherId, page_size: 20 });
```

Uses configured authentication (`lms:exam:read` / `lms:homework:read` or corresponding own
scopes). Responses retain Axios metadata; permission, validation, cancellation and network
failures reject normally. Definition filters require the matching LMS service update.

## Student notification settings and assigned chat contacts (0.24.1)

`lms.notificationSettings.list()` lists sandbox-wide student rules; editing requires `lms:notification:settings:update`, while reads and read-only previews require `lms:notification:settings:read`. Update with `{enabled,offset_seconds,expected_version}`. Event delays are seconds; before/after domain timing is fixed by each rule. Invalid ordering/ranges return 422, stale versions return 409. Changes recompute pending work without replaying delivered occurrences or backfilling old events. `preview(key)` sends nothing.

`lms.eligibleContacts.list({cursor,limit})` returns only current assigned student/teacher/support profile IDs, requiring `lms:chat:contacts:read`. Resolve authorized profile display information separately. Chat also checks the relationship server-side; hiding contacts in a client is not authorization. All operations use the configured sandbox transport, keep full Axios responses and support cancellation and standard errors.

## Summary API migration in 1.0.0

LMS AI summary settings, generation, queue and result methods have been removed. Use
`ProfileApi.summaries` from `@faiber/faiber-profile`, or `sdk.profile.summaries` from
`@faiber/faiber-ts-sdk`. Role UUIDs replace the old student/teacher/support enum.
The new Profile summary read permissions must be explicitly granted; parent status gives no access.
Ordinary LMS student reports, attendance, assessments, feedback and evaluations remain available.
Legacy summary data is not imported and there is no compatibility proxy.

## Classroom student counts

```ts
const response = await api.listClassrooms({ "page[number]": 1, "page[size]": 20 });
for (const classroom of response.data.data.data) {
  console.log(classroom.name, classroom.student_count, classroom.capacity);
}
```

`student_count` is a number on classroom list, detail, create and update responses,
including `api.operations.classroomIndexClassroomGet`, `api.classrooms.list`, and
`faiber.lms.listClassrooms` through `@faiber/faiber-ts-sdk`. It counts distinct user IDs
with an `active`, `inactive`, `disabled`, or `enrolled` classroom membership. Legacy
activation flags do not revoke membership; IDP controls account activation. Removed,
withdrawn-after-completion and pending records do not count. Staff assignments and
session attendance do not add students. Duplicate enrollment rows count once.

Counts cover the whole classroom, regardless of enrollment pagination, and are batched
for the authorized classroom page. Empty classrooms return `0`. `capacity: null`
means no limit is configured; a numeric zero remains zero. A UI may display `18 / 25`
or a localized `0 / Unlimited`. This does not change enrollment or capacity rules.
The list requires `lms:classroom:read` or `lms:classroom:read_own` with existing record
scoping. Normal Axios response, error, authentication and cancellation behavior applies.

## Academy completion and exam submission

Academy category, course, session, question and enrollment identifiers are UUID strings. Session completion requires the authenticated enrollment owner and an active enrollment; exam and interactive sessions cannot be completed through the ordinary completion endpoint. Incomplete prerequisite sessions return a conflict. Retain the original `idempotency_key` when reconciling a session completion.

Exam submission sends `answers` keyed by question UUID. The server grades the attempt's selected question snapshot; the SDK cannot supply a score or bypass ownership, expiry or attempt status. Submission is not an automatic retry workflow: a response lost after completion requires authoritative readback. Responses retain the full Axios envelope and errors; an empty extracted permission annotation does not mean anonymous access.

## Supported wire behavior

The supported backend source is `1a55795725ac5ac23b763117fbbe64f96d4cf2f6`. Course/category deletes are available; successful mutation envelopes contain `data: {}`. Removing a classroom user returns `data: null`. The legacy `videoSections`, `events`, `textTemplates`, and `interactiveContent` generic resources are unmounted and reject locally.

Image download operations return raw bytes (`ArrayBuffer | Uint8Array`) with Axios headers; certificate SVG returns text. Exam-session patches distinguish omission from `null`: nullable classroom links, staff, timestamps, and counts can be cleared explicitly. The course report returns aggregate classroom/session/attendance counts, while the academy catalog returns learning content and enrollment progress.

Configure Bearer tokens through `TokenProvider` or secure cookies through `withCredentials`; prefer in-memory tokens or HttpOnly cookies. Methods use the shared authenticated transport, accept `signal`, timeout, headers, adapters and interceptors, and preserve full Axios responses. Cancellation and non-success HTTP responses reject with Axios errors. LMS application errors generally serialize `{ error: string }`; educational transfer has its documented structured error envelope.

Permission names in operation documentation describe the backend IDP route metadata. The pinned backend extracts gateway identity headers (with its configured development fallback); that extractor and permission metadata alone do not validate a Bearer token or prove gateway enforcement. Additional handler scope checks apply to scoped reads, learning ownership, evaluation submissions, and sensitive enrollment updates. Native acceptance and deployment verification remain separate from the source contract.
