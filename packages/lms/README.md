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

This package exposes 142 registered operations from the learning management service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `academy` | 8 | `GET`, `POST` |
| `certificate` | 4 | `GET`, `PATCH`, `POST` |
| `classroom` | 13 | `DELETE`, `GET`, `PATCH`, `POST` |
| `config` | 20 | `GET`, `PATCH`, `POST` |
| `course` | 20 | `DELETE`, `GET`, `PATCH`, `POST` |
| `dashboard` | 1 | `GET` |
| `docs` | 1 | `GET` |
| `event` | 12 | `GET`, `PATCH`, `POST` |
| `exam` | 13 | `DELETE`, `GET`, `PATCH`, `POST` |
| `homework` | 12 | `GET`, `PATCH`, `POST` |
| `integration` | 1 | `GET` |
| `interactive` | 12 | `GET`, `PATCH`, `POST` |
| `ops` | 16 | `GET`, `PATCH`, `POST` |
| `report` | 3 | `GET` |
| `router` | 2 | `GET` |
| `service` | 1 | `GET` |
| `session` | 1 | `GET` |

Course sessions, classroom users and absences, assignments, invitations, club projects, support interactions, work-time records, and authenticated learner academy progression have dedicated typed operations. Exam questions support typed deletion; other unsupported generic deletes remain guarded locally.

```ts
const catalog = await api.academyCourses({ category_id: 4 });
const enrollment = await api.academyEnroll(catalog.data.data[0].id);
const detail = await api.academyCourse(catalog.data.data[0].id);
```

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
