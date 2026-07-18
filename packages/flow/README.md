# @faiber/faiber-flow

Typed, framework-neutral TypeScript client for Faiber automations, triggers, actions, validation, and execution runs.

## Install

```bash
npm install @faiber/faiber-flow
```

## Create a client

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

const flows = await api.flows.list({ page_number: 1 });
```

All methods return a full Axios `AxiosResponse`. Entities, named request inputs, response envelopes, pagination models, and shared core types are exported from the package. Use `client.request<TResponse, TBody>()` for project-specific endpoints.

## Authentication

Pass a `TokenProvider` for bearer authentication, or set `withCredentials: true` for secure cookie sessions. The SDK never reads browser storage or environment variables implicitly.

## Errors and cancellation

Axios errors are preserved so callers can inspect `response.status`, structured API error bodies, headers, and request IDs. Pass normal Axios options as the final argument:

```ts
await api.client.get("/health", undefined , { signal: AbortSignal.timeout(5_000) });
```

## Complete SDK

Install `@faiber/faiber-ts-sdk` when an application uses multiple Faiber services. The complete package provides shared configuration, authentication, uploads, and error handling across services.
