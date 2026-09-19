# @faiber/faiber-lms

Courses, categories, video sections, classrooms, sessions, enrollments, exams, homework, certificates, events, interactive content, operations, reports, and education configuration.

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

This package exposes 152 registered operations from the learning management service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

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
| `homework` | 12 | `GET`, `PATCH`, `POST` |
| `integration` | 7 | `GET`, `POST` |
| `media` | 2 | `GET`, `POST` |
| `profile-routes` | 2 | `GET` |
| `report` | 8 | `GET` |
| `router` | 2 | `GET` |
| `service` | 1 | `GET` |
| `session` | 1 | `GET` |

Course sessions, classroom users and absences, assignments, invitations, club projects, support interactions, and work-time records have dedicated typed operations. Most LMS updates use `PATCH`; unsupported generic deletes are guarded locally.

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
