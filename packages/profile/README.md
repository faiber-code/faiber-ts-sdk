# @faiber/faiber-profile

Profiles, atomic partial updates, dynamic properties, geographic records, relationships, media, search, trusted services, and profile logs.

## Install

```bash
npm install @faiber/faiber-profile
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { ProfileApi } from "@faiber/faiber-profile";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("profile", {
  domains: { profile: process.env.FAIBER_PROFILE_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new ProfileApi(client);

const updated = await api.updateProfile(userId, {
  first_name: { en: "Ava", fa: "آوا" },
  phone: "+989121234567",
  properties: { workout_plan: plan, membership },
});
console.log(updated.data.data.profile);
```

## Complete capability

This package exposes 239 registered operations from the profiles service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `ai-summary` | 20 | `GET`, `PATCH`, `POST`, `PUT` |
| `campaign` | 4 | `GET`, `POST` |
| `city` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `country` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `custom-type` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `education` | 4 | `GET`, `POST`, `PUT` |
| `fitness` | 32 | `GET`, `POST`, `PUT` |
| `integration` | 2 | `GET` |
| `lifecycle` | 24 | `DELETE`, `GET`, `POST`, `PUT` |
| `log-action` | 3 | `POST` |
| `logger` | 2 | `GET` |
| `option` | 5 | `GET`, `POST` |
| `profile` | 59 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `profile-property` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `profile-search` | 3 | `POST` |
| `province` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `referral` | 7 | `DELETE`, `GET`, `POST`, `PUT` |
| `relation` | 10 | `DELETE`, `GET`, `POST`, `PUT` |
| `router` | 3 | `GET` |
| `session` | 4 | `GET`, `PATCH`, `PUT` |
| `setting` | 2 | `GET`, `POST` |
| `survey` | 2 | `GET`, `POST` |
| `trusted-service` | 12 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |

`updateProfile` sends one atomic `PATCH /api/v1/profile/{uuid}`. Omitted fields stay unchanged. In the pinned general patch handler, `job: null` clears the job; other nullable scalar fields deserialize explicit `null` as omission. Use `educationInformation` for explicit clearing of its education/referral/attendance fields. Balances, enrollment state, roles, IDs, and avatar objects are not mass-assignable. The patch model does accept `status`, `employee_type`, and `freemium_session_limit` under `profile:update`. Use `uploadAvatar` and IDP role operations for those concerns.

## Learner balances and education

Profile reads, including `byRole("student")`, expose top-level `account_balance` and `wallet_balance` from the Office-synchronized snapshot. `null` means not yet known; it is not zero. Listing profiles does not load financial history.

```ts
const educations = (await api.listEducations()).data.data; // EducationOption[]: { id, name }
const dependencies = (await api.educationDependencies()).data.data;
await api.educationInformation(idpUserUuid, {
  education_id: educations[0].id,
  attendance_mode: dependencies.attendance_mode[0].id,
  level: "beginner",
  referral_source: dependencies.referral_source[0]?.id ?? null,
  referrer_uuid: null,
  description: "Learner notes",
});
await api.customTypes.create({ name: "job", value_type: "select", options: ["بیکار"] });
```

`educationInformation` is supported and calls `PUT /api/v1/profile/update/education-information/{uuid}`. The path must be an **IDP user UUID**, not a Profile record ID. The entire update is validated before saving. Omission leaves a field unchanged; `null` clears it. Attendance accepts `online` or `in_person`. Level accepts a nonempty **string of at most 64 Unicode characters**, not a number or a fixed enum. Referral source is an active code from the dependencies response; referrer UUID must identify an existing other user. Description is limited to 10,000 characters. Education must be an active lookup ID.

`GET /api/v1/education` and `/education/dependencies` require `profile:read`; education creation and updates require `profile:update`. Administrators can populate the restored lookup with `api.education.create({name})`. The migration restores the table and nullable column but cannot recover rows deleted by the old migration; recover any historical catalog from a backup rather than inventing IDs.

## Authentication and authorization

Use a `TokenProvider` to forward the signed-in user's Bearer token, or enable `withCredentials` for secure HttpOnly cookie sessions. Declared IDP permissions are included in each operation's JSDoc. Most CRUD routes consume identity headers supplied by a trusted IDP gateway; the permission annotations export metadata and do not enforce permissions inside the handler. Summary routes additionally validate Bearer/cookie credentials with IDP on each call. Internal fitness credit/gift operations require their separately configured service Bearer tokens. The SDK does not embed API keys, credentials, localhost URLs, sandbox hosts, or production hosts.

## Inputs, queries, responses, and transport

All methods return the complete Axios response, including status, headers, and request IDs. Request bodies and query objects are named exported interfaces. Profile list pagination uses `page` and `per_page`; filters use names such as `filter[role]` and `filter[status]`. Summary pages also use their exported query types. Standard Axios request options, headers, timeouts, adapters, interceptors, and `AbortSignal` cancellation are supported as the final argument.

Generic REST resources are capability-guarded. Calling a legacy method that the service does not register throws `UnsupportedOperationError` before sending a request instead of producing a backend `405`.

## Media and command responses

`api.operations.profileAvatarShowGetApiV1ProfileMediaUuidAvatar(ownerUuid, {key})`,
`profileAvatarShowGetApiV1ProfileUuidAvatar`, `profileImageShowGet`, and
`profileMediaShowGet` return raw binary bytes (`ArrayBuffer | Uint8Array`), with the
service content type and cache policy in Axios response headers. Their `key` query
is required. Avatar and content image reads are public; private media requires IDP
authentication. Invalid owner prefixes or traversal return 403; missing objects
return 404.

Uploads accept a multipart `file` field containing JPEG, PNG or WebP up to 5 MiB.
The caller must own the target user UUID or have `profile:update`. Successful uploads
return `{url, key}`; unsupported types return 415, missing/empty files 422, oversize
files 413, and unconfigured storage 503.

Property updates return `updated_keys` and `array_item_changes` (added/removed IDs
and counts), rather than the complete profile. Address, parent-link, delete and
restore commands generally acknowledge success with an empty object. Bulk parent
lookups return stored link rows with both IDP user UUIDs; bulk addresses resolve
IDP UUIDs to rows whose `profile_id` is a separate Profile UUID.

## Errors and cancellation

```ts
try {
  await api.client.get("/health", undefined, { signal: AbortSignal.timeout(5_000) });
} catch (error) {
  // Axios errors retain response.status and the service error body.
}
```

Use `@faiber/faiber-ts-sdk` when one application needs multiple Faiber services with one configuration.

### Current space-member names

After retrieving eligible member IDs from Task, call `profile.resolvePeople({ user_ids })` with 1–200 UUIDs per batch. The response contains active sandbox profiles with English/Persian names and canonical `user_id`; email and phone are withheld. No match or duplicate names require clarification before assignment. Requires `profile:lookup` and the standard authenticated client; invalid batches return an Axios 400 response. Request options support cancellation and timeouts.

Personal information includes `job`, a nullable job title. Pass `{ job: "Software engineer" }` to `sdk.profile.personalInformation(userId, ...)`; pass `{ job: null }` to clear it. Omitting `job` preserves the saved value. Profile detail and list responses also include `job`, and general profile patch operations accept it.

### Dynamic profile filters

`listProfiles` and all role-list operation queries, including
`ProfileStudentIndexGetQuery`, accept bracket filters, repeated date ranges and
`sort`. Prefer `filterProfiles` for typed operators and JSON values:

```ts
const response = await api.filterProfiles({
  filters: [
    { path: 'role', op: 'in', value: ['student', 'customer'] },
    { path: 'core.account_balance', op: 'lt', value: 0 },
    { path: 'properties.owner', op: 'in', value: ['supporter-user-uuid'] },
    { path: 'services.office.sync-user.enrollments.freemium_sessions', op: 'gte', value: 1 },
  ],
  sort: [{ path: 'core.created_at', dir: 'desc' }],
  page: 1,
  per_page: 20,
});
const profiles = response.data.data.profiles;
```

This method requires `profile:read` and uses the normal authenticated Faiber
client. It returns the full Axios response and accepts cancellation signals,
headers and timeouts as the second argument. Invalid clauses, dates or unavailable
configured fields reject with an Axios error carrying HTTP 400.

Use `role` (or `core.role`) to filter profile-role names: `eq` matches one role,
`in` matches any supplied role, and `neq` excludes profiles with that role.
The separate `role` input still accepts a single role; when combined with clauses,
all constraints apply together. Role names are not limited to the student use case.

Use `core.<column>`, `properties.<key>[.<nested-field>]`, or
`services.<service-key>.<event-name>.<nested-field>` paths. Properties must be
active, filterable and visible in lists; trusted services must be active and their
events visible in lists. Nested payload arrays match candidate elements. Clauses
are ANDed; use `json_contains` with an array/object structure for fields that
must match the same nested record. Operators are `eq`, `neq`, `gt`, `gte`, `lt`,
`lte`, `in`, `contains`, `exists` and `json_contains`. Missing data satisfies
`neq`; array sorting uses the minimum JSON candidate.

```ts
await api.operations.profileStudentIndexGet({
  'filter[birthday][]': ['2000-01-01', '2010-12-31'],
  'filter[created_at][]': ['2026-01-01', '2026-10-07'],
  'filter[gender]': 'female',
  sort: '-core.created_at',
});
```

Ranges require two ordered endpoints; an empty string leaves a bound open.
Date-only creation-time upper bounds include that entire day. `sort` accepts
comma-separated paths, with `-` for descending. Application concepts such as
`double_debt`, supporter `owner` and `work_id` require stored configured
properties or their actual trusted-service paths; the SDK does not calculate them.
These capabilities require a service version supporting dynamic list filters.

### Fitness coaching

The `operations.fitness*` methods cover intake drafts, product offers, paid orders, coach assignments, plan revisions, catalogs, settings, notifications and trial redemption. Exported `FitnessIntake`, `FitnessPlan`, `FitnessOrder`, `FitnessRevision` and gift types describe the wire models.

```ts
const self = await api.operations.fitnessMeGet();
const saved = await api.operations.fitnessSaveSettingsPut({
  model_ref: modelRef, stt_model_ref: speechInputRef, tts_model_ref: speechOutputRef,
  expected_version: currentVersion,
});
```

The service authorizes gym membership, managers, assigned coaches and order ownership independently of profile editing. Admin provisioning/import requires `fitness:admin`. Settings and drafts use optimistic versions; stale changes return 409. Purchase requests require a stable `idempotency_key`, and plan assignment/proposals use `base_revision_id`. Trusted gift administration and chat-credit reserve/settle operations are server-only and require dedicated bearer credentials. A user token does not mint credits or grant internal gift access. Directory `workspaceResolvePeople` continues to resolve 1–200 explicit UUIDs with `profile:lookup`; its results do not grant collaborator eligibility.

## Configurable role summaries

Role summary configuration and persisted results belong to Profile. The authenticated caller needs
`profile:ai_summary:read_own` for their own results or `profile:ai_summary:read_all` for other subjects
in the same deployment. Parent relationships do not grant access. Configuration (`configure`) and
queue management (`manage`) are separate permissions.

```ts
const response = await api.summaries.latest({ role_id: canonicalRoleId }, { signal });
console.log(response.status, response.data.data.freshness, response.data.data.summary);
```

Read the canonical role catalog with `api.summaries.roles()`, then create/edit a structured draft,
validate it, preview an eligible subject, publish it, and enable it with `setStatus(id, { enabled: true })`.
Global generation must be enabled before previewing; the global kill switch also blocks explicit previews with HTTP 409.
A role can remain disabled while previewing its draft. Preview results remain distinct from published results and never publish the configuration.
GET requests only read stored data. Accepted refresh and preview requests return HTTP 202; poll run/job state separately.
A failed refresh can leave an older result available and stale. Disabled configurations hide latest
content while explicitly authorized history reads remain available. Decimal metric values may be
strings to preserve financial precision. Standard Axios errors, response headers and cancellation
options are retained. These operations are also available as `api.operations.aiSummary…` methods.

## Profile short IDs and search

```ts
const controller = new AbortController();
const matches = await profile.searchProfiles({
  search: "GDCN7L", // email, name, phone, national code, or six-character short ID
  role: "student",
  page: 1,
  per_page: 20,
}, { signal: controller.signal });
for (const person of matches.data.data.profiles) {
  console.log(person.short_id, person.id, person.user_id);
}
```

Use your configured `ProfileApi` instance and an `AbortController`. This wrapper
requires `profile:read` and returns the full Axios response; errors and cancellation
are preserved. `listProfiles({ "filter[search]": text })`, role lists, and
`filterProfiles` use the same live matching. The generated
`operations.profileSearchSearchPost({ search: text })` also matches short IDs and
returns `short_id` on every hit, even when `include` excludes core fields; that
operation requires `profile:search`. The minimal people directory accepts the same
lookup under `profile:lookup` without returning national codes.

Codes derive from the profile row's `id`, **not** `user_id`, without a new database
column. Matching ignores case and normalizes Persian/Arabic digits. Enter the full
six-character code; collisions return all matching results within pagination.
Select the intended profile using its other details, then use its `user_id` for
profile read/update routes. `shortIdFromUuid` is exported for offline display.
Deploy the service's short-ID migration before using these searches.
