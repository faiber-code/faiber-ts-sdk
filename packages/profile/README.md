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

This package exposes 178 registered operations from the profiles service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `campaign` | 4 | `GET`, `POST` |
| `city` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `country` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `custom-type` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
| `education` | 4 | `GET`, `POST`, `PUT` |
| `integration` | 2 | `GET` |
| `lifecycle` | 24 | `DELETE`, `GET`, `POST`, `PUT` |
| `log-action` | 3 | `POST` |
| `logger` | 2 | `GET` |
| `option` | 5 | `GET`, `POST` |
| `profile` | 57 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `profile-property` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `profile-search` | 1 | `POST` |
| `province` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `referral` | 7 | `DELETE`, `GET`, `POST`, `PUT` |
| `relation` | 10 | `DELETE`, `GET`, `POST`, `PUT` |
| `router` | 3 | `GET` |
| `session` | 2 | `GET` |
| `setting` | 2 | `GET`, `POST` |
| `survey` | 2 | `GET`, `POST` |
| `trusted-service` | 12 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |

`updateProfile` sends one atomic `PATCH /api/v1/profile/{uuid}`. Omitted fields stay unchanged; `null` clears nullable fields. System-managed balances, gems, enrollment state, roles, IDs, and avatar objects are not mass-assignable. Use `uploadAvatar` and IDP role operations for those concerns.

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
