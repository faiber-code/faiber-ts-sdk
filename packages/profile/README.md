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

This package exposes 173 registered operations from the profiles service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `campaign` | 4 | `GET`, `POST` |
| `city` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `country` | 8 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `custom-type` | 5 | `DELETE`, `GET`, `PATCH`, `POST` |
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
