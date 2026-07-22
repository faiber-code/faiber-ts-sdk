# @faiber/faiber-flow

Flow definitions, graph validation, action and trigger catalogs, active trigger registry, execution runs, and integration metadata.

## Install

```bash
npm install @faiber/faiber-flow
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { FlowApi } from "@faiber/faiber-flow";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("flow", {
  domains: { flow: process.env.FAIBER_FLOW_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new FlowApi(client);

const flows = await api.flows.list();
const validation = await api.validate(flowId);
```

## Complete capability

This package exposes 15 registered operations from the automation flows service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `catalog` | 3 | `GET`, `POST` |
| `flow` | 6 | `DELETE`, `GET`, `POST`, `PUT` |
| `registry` | 1 | `GET` |
| `router` | 4 | `GET` |
| `run` | 1 | `GET` |

Flow updates use `PUT`. Runs are read-only in the current service contract; unsupported generic run mutations fail locally before a network request.

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
