# @faiber/faiber-flow

Typed Flow definitions, graph validation, event execution, catalog synchronization, active trigger discovery, run details and integration metadata.

```bash
npm install @faiber/faiber-flow
```

```ts
import { FaiberClient, MemoryTokenProvider } from '@faiber/sdk-core';
import { FlowApi } from '@faiber/faiber-flow';

const client = new FaiberClient('flow', {
  domains: { flow: process.env.FAIBER_FLOW_URL! },
  tokenProvider: new MemoryTokenProvider(),
  axios: { withCredentials: true, timeout: 15_000 },
});
const api = new FlowApi(client);
const created = await api.flows.create({
  name: 'Checkout completed',
  trigger_key: 'event.checkout.completed',
  enabled: false,
});
const validation = await api.validate(created.data.data.id);
const registry = await api.activeTriggers({ service: 'ledger' });
const runs = await api.runs.list({ limit: 20 });
// Run detail includes flattened run fields, nullable context and ordered steps.
if (runs.data.data[0]) {
  const detail = await api.runs.show(runs.data.data[0].id);
  console.log(detail.data.data.status, detail.data.data.steps);
}
```

All 18 mounted HTTP operations are callable on `api.operations`, with named exported inputs, queries and responses. Convenience methods include `flows`, `runs`, `validate`, `triggers`, `actions`, `activeTriggers`, `syncCatalog`, `importFlows`, `emitEvent` and `integration`. All calls retain the complete Axios response, status, headers and request IDs. Successful data is wrapped as `{status: 'success', message: 'ok', data}`. Lists are arrays inside that envelope; Flow does not provide a pagination envelope. Run `limit` defaults to 50 and has no application clamp.

Flow creation uses `name`, `trigger_key`, optional `slug`, `enabled` and `graph`; enabled defaults false and an omitted graph creates a single trigger node. A graph has `nodes` and `edges`. Editor positions, node data, edge data, downstream payloads and historical execution context are deliberately JSON values because the service stores extensible JSON documents. PUT updates are partial; null and omitted fields preserve existing values. Graph or trigger changes increment the version. Delete returns an envelope containing `{deleted: true}`.

`importFlows` accepts flow entries, event bridges and bridge groups. Use `dry_run: true` to validate and report proposed changes with transaction rollback. Normal imports upsert by normalized slug; identical retries report unchanged entries. Import bridge enabled defaults true, unlike direct creation. `version` and `source` are accepted metadata and currently ignored by the backend.

`emitEvent(eventKey, json)` accepts any JSON value, including null. The event key must contain 1–200 ASCII letters, numbers, dots, underscores or hyphens, with no leading/trailing/double dots. The response is HTTP 200 with `{accepted: true, event_id, trigger_key}`. Individual flow execution failures can still produce an accepted response; inspect runs afterward. Each repeated event call creates a fresh event and can duplicate downstream actions. Mutations persist before registry notifications, so a notification error can follow a committed change. Reconcile state before retrying. Catalog sync returns counts and per-service failures even under HTTP 200; it does not return a single `synced` boolean.

Configure a `TokenProvider` for Bearer authorization, or `withCredentials` for secure HttpOnly cookie sessions. Prefer cookies or in-memory tokens; persistent browser storage is an explicit security tradeoff. Every SDK call uses the shared `FaiberClient`. Declared route permissions are `flow:read/create/update/delete`, `flow_run:read`, `catalog:sync`, and `flow:execute`; import declares both create and update. Event emit explicitly checks `flow:execute` or `*` in `AuthContext`. Other handlers have no local permission/owner/tenant checks. Flow installs imported global auth extraction, with the external dependency pinned to `291c81a67bc302d667fb807da2af3240598bee52` in the production manifest and committed lockfile. Inspected shared IDP source registers permission metadata and trusts gateway identity headers with development fallback; enforce identity and permissions at your gateway. Sending credentials alone does not establish backend authorization enforcement.

Axios options, headers, adapters, interceptors, timeouts and `AbortSignal` cancellation are accepted as the final argument. Application errors use `{error: string}`: validation 400, missing UUID records 404, duplicate slugs 409, persistence/broker 500; malformed extractors may instead use Axum rejection bodies. Axios errors retain `response.status` and the original error body. An invalid saved graph returns HTTP 200 with `valid: false` and `errors`.

```ts
const controller = new AbortController();
try {
  await api.emitEvent('checkout.completed', { total: 1200 }, { signal: controller.signal });
} catch (error) {
  // Inspect the Axios error response; check current runs before retrying execution.
}
```

Use [@faiber/faiber-ts-sdk](https://www.npmjs.com/package/@faiber/faiber-ts-sdk) for multiple Faiber services in one client configuration.
