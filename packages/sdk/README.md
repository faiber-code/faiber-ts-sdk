# @faiber/faiber-ts-sdk

The complete typed facade for all public Faiber services.

## Install and configure

```bash
npm install @faiber/faiber-ts-sdk
```

```ts
import { FaiberSDK, MemoryTokenProvider, domainsFromEnv } from "@faiber/faiber-ts-sdk";

const tokens = new MemoryTokenProvider();
const sdk = new FaiberSDK({
  domains: domainsFromEnv(import.meta.env),
  authMode: "bearer",
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});

const login = await sdk.idp.login({
  grant_type: "password",
  username,
  password,
  client_id,
  client_secret,
});
await tokens.setTokens({
  accessToken: login.data.data.access_token,
  refreshToken: login.data.data.refresh_token,
});

const [products, profile, slots] = await Promise.all([
  sdk.modules.products.list({ page_number: 1, page_size: 24 }),
  sdk.profile.full(userId),
  sdk.reservation.availableSlots({ provider_id: providerId }),
]);
```

The facade exposes `office`, `idp`, `profile`, `modules`, `social`, `asset`, `payment`, `messenger`, `crm`, `lms`, `reservation`, `session`, `version`, `flow`, `knowledge`, `chat`, `state`, `drm`, `task`, and `manage`. Each regular REST service has curated convenience methods, guarded REST resources, a low-level authenticated client, and an `operations` object containing every mounted backend route. DRM includes its complete management panel contract (libraries, categories, compositions, mixed media, workflows, manifests, package jobs, statuses, audit, operations settings, multipart media, and binary chunk uploads). Session includes room lifecycle, LMS/chat integrations, recordings/manifests, branding, analytics, and canonical room/recording/playback view URLs. Chat includes assistant administration and the full conversation/realtime/AI runtime contract. Messenger and Payment expose their complete management, status, integration, and verification contracts. Realtime State, Task, Version, and Manage retain their specialized transport-aware clients. Manage provides project-scoped proxy origins plus reviewed Agentic action and POST-SSE APIs.

`FaiberSDK.capabilities`, `sdk.capabilities`, and `sdk.describe(service?)` expose machine-readable descriptions, authentication rules, transports, environment variables, operation counts, and AI-agent usage guidance. Every service package is also exported as a namespace such as `IdpService`, `DrmService`, or `StateService`, so application code can import runtime APIs and types exclusively from this facade.


All methods return full Axios responses and accept request options for headers, cancellation, timeout, and transport overrides. Use `authMode: "cookie"` for secure HttpOnly-cookie authorization, or `authMode: "bearer"` with an in-memory/server token provider. Service origins are supplied through `domains`, `defaultDomain`, or `domainsFromEnv`; the SDK never hardcodes deployment domains.

See each service package README for its capability and permission table, request/query contracts, response envelopes, uploads, form encoding, errors, and examples.

### Poulstar Office extension

Configure `domains.office` from your deployment environment and use `sdk.office.request(operationKey, { query, params, body, signal })` for the registered accounting operations. `OFFICE_OPERATIONS` documents route keys and required permissions. For example, `await sdk.office.educationStatuses({ signal })` returns an Axios response containing enrollment status choices. Office shares the SDK token provider or secure cookie authentication. Requests retain server pagination, multipart uploads, download blobs, timeout/cancellation and Axios error status. No Office hostname is embedded in the package.
