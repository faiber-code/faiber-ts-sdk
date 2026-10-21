# @faiber/faiber-crm

Typed CRM workspaces, pipelines, leads, deals, companies, contacts, teams, tasks, activities, marketing, reports and automation reads.

```bash
npm install @faiber/faiber-crm
```

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { CrmApi } from "@faiber/faiber-crm";

const client = new FaiberClient("crm", {
  domains: { crm: process.env.FAIBER_CRM_URL! },
  tokenProvider: new MemoryTokenProvider(),
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new CrmApi(client);
const response = await api.listLeads({ q: "Acme", limit: 25 });
const leads = response.data.data.items;
const nextCursor = response.data.data.next_cursor;

// Use a distinct key for each intended mutation. A duplicate key returns 409.
const created = await api.createLead(
  { title: "Acme renewal", estimated_value: 50000, currency: "IRR" },
  { headers: { "Idempotency-Key": crypto.randomUUID() } },
);
await api.updateLead(created.data.data.id,
  { version: created.data.data.version, score: 80 },
  { headers: { "Idempotency-Key": crypto.randomUUID() } },
);
```

The configured IDP token provider forwards Bearer authorization; `withCredentials` enables secure HttpOnly cookie sessions where supported by the deployment. Keep browser tokens in memory. Each operation's JSDoc states the local permission rules; `crm:admin` bypasses modern CRM handler checks, and otherwise the listed permissions are alternatives. Roles alone do not grant data access. Deployment authentication and gateway isolation must be configured separately. The legacy Office lookup has no local authorization guard.

The package exposes 92 mounted HTTP operations through `api.operations`, including singular/plural workflow compatibility routes, health/readiness and the two explicit API not-found boundaries. Concise methods on `api` cover common workflows. Source coverage does not certify native execution or gateway policy. The separate `/mcp` summary-evidence mount uses the RMCP protocol and signed summary-run grants; it is not a typed REST business operation in this package. Static dashboard assets use the server's frontend fallback.

Most business routes return `{ data, meta: { request_id } }`. Health, readiness and Office lookup use `{ status, message, data }`; readiness returns HTTP 503 when database or broker is unavailable. Lead list/create/update responses contain bare lead records. `getLead` additionally returns a nullable remote `profile`; remote enrichment may be unavailable. Lists return `{items,next_cursor}` inside data, with scalar `cursor` and `limit` (default 50, clamped 1–100). Lead `statuses` is comma-separated. Custom lead sort still compares UUID cursor using `id > cursor`, so it is not a chronological cursor guarantee. Workflow/node/worklog collections return arrays; workflow and node lists include inactive nondeleted rows.

Mutations that document `Idempotency-Key` require a nonempty header up to 128 characters. Keys identify submissions and duplicate submissions return 409; they do not replay successful responses. Company/contact/lead/deal updates, stage/assignment updates, task status, team deletion and pipeline/workspace patches use a version. Workflow updates accept version but do not enforce it, and node updates have no version field. Ordinary optional patch nulls preserve values. Workflow `team_id`, `hint`, `actions` and node `sla_minutes`, `actions` distinguish omitted values from explicit nulls, which clear fields. Record assignment replaces both owner/team; omitted IDs clear them.

Deletion payloads differ by route: most return `{id,deleted:true}`, compatibility `DELETE /workflow-node/{id}` returns `true`, team-member removal returns the deactivated member, and lead-reminder deletion returns `{lead_id,deleted:number}`. Team deletion also detaches active records and workflow assignments. Use the route-specific named types.

Extensible JSON is intentional where the Rust model stores arbitrary values: workspace `settings`; company `address`/`custom_data`; contact `consent`/`custom_data`; lead/deal `custom_data`; pipeline acquire flags/actions; node actions; activity/campaign metadata; audit history event data; durable-job results; report AI interpretation and deterministic summaries; legacy Office flags/assignee IDs/meta. Profile first/last names are optional remote JSON values. These fields remain JSON-safe rather than implying a fixed schema. Workflow action definitions themselves are concrete exported objects with internal/external kinds.

All calls preserve complete Axios responses, including headers, status and request context. Final request options support timeouts, interceptors, adapters, credentials and `AbortSignal`. Axios rejects authentication (401), permission (403), missing record (404), version/idempotency conflict (409), validation (422), readiness (503) and transport failures by default.

```ts
try {
  await api.getOverview(undefined, { signal: AbortSignal.timeout(5_000) });
} catch (error) {
  // Axios errors retain response.status and the backend error body.
}
```

The API not-found diagnostics `operations.routerApiNotFoundAny(method)` and `operations.routerApiPathNotFoundAny("obsolete/items", method)` return structured 404 without modifying CRM data. HEAD has no body and CORS can answer OPTIONS with empty 200. For deliberate diagnostics, supply `validateStatus` and check for a body. Wildcard diagnostics reject registered API paths, traversal, percent escapes, query/fragment syntax and backslashes locally. CONNECT requires an explicit tunnel-capable Axios adapter.

Use [@faiber/faiber-ts-sdk](https://www.npmjs.com/package/@faiber/faiber-ts-sdk) to configure multiple Faiber services together.
