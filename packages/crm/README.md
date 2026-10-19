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

This package exposes 92 source-mounted operations. Common workflows have concise methods on `api`; named operation types are exported from `operations.types`. A router's `ANY` filter is exposed as one operation taking an explicit HTTP method.

| Area | Operations | HTTP methods |
|---|---:|---|
| `api` | 85 | `DELETE`, `GET`, `PATCH`, `POST`, `PUT` |
| `router` | 7 | `ANY`, `GET` |

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

### Legacy API fallback

`operations.routerApiNotFoundAny(method)` and
`operations.routerApiPathNotFoundAny("obsolete/items", method)` represent explicit
legacy not-found routes. The handler returns404 and does not mutate CRM records. HEAD has no body; the CORS
layer can answer OPTIONS with an empty200. Axios rejects404 by default; intentional
diagnostics can use `validateStatus` and check for a body before inspecting
`{error:{code:"api_route_not_found",message}}`. Nested raw path segments retain slashes;
traversal, percent escapes, query/fragment syntax and backslashes are rejected locally.

`CONNECT` requires an explicitly supplied tunnel-capable Axios adapter. The default
Node Axios adapter does not consume CONNECT response events, and browsers restrict
tunnel methods; the SDK rejects a default-adapter CONNECT call before transport.

Wildcard not-found diagnostics reject known registered API paths before sending;
use the corresponding named operation for those paths. This prevents a diagnostic
call from resolving to a native resource route with a different response model.
