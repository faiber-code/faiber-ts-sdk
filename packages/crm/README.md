# @faiber/faiber-crm

Leads, campaigns, sources, logs, touches, teams, workflows, reminders, escalations, webhooks, work logs, and statistics.

## Install

```bash
npm install @faiber/faiber-crm
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { CrmApi } from "@faiber/faiber-crm";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("crm", {
  domains: { crm: process.env.FAIBER_CRM_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new CrmApi(client);

const leads = await api.leads.list({ search: "Acme" });
await api.markLeadDone(leadId);
```

## Complete capability

This package exposes 102 registered operations from the crm service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `integration` | 2 | `GET` |
| `lead` | 23 | `DELETE`, `GET`, `POST`, `PUT` |
| `lead-campaign` | 5 | `DELETE`, `GET`, `POST`, `PUT` |
| `lead-source` | 5 | `DELETE`, `GET`, `POST`, `PUT` |
| `reminder` | 6 | `DELETE`, `GET`, `POST`, `PUT` |
| `router` | 4 | `GET` |
| `sos` | 17 | `DELETE`, `GET`, `POST`, `PUT` |
| `stats` | 2 | `GET` |
| `team` | 5 | `DELETE`, `GET`, `POST`, `PUT` |
| `team-user` | 6 | `DELETE`, `GET`, `POST`, `PUT` |
| `webhook` | 5 | `DELETE`, `GET`, `POST`, `PUT` |
| `workflow` | 6 | `DELETE`, `GET`, `POST`, `PUT` |
| `workflow-member` | 6 | `DELETE`, `GET`, `POST`, `PUT` |
| `workflow-node` | 5 | `DELETE`, `GET`, `POST`, `PUT` |
| `worklog` | 5 | `DELETE`, `GET`, `POST`, `PUT` |

CRM resources update with `PUT`, not `PATCH`. Workflow nodes and members are created under parent-ID routes; those exact operations are available under `api.operations`.

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
