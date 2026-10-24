# @faiber/faiber-ts-sdk

The complete typed facade for all public Faiber services.

## Install and configure

```bash
npm install @faiber/faiber-ts-sdk
```

Server-side login with a registered confidential client:

```ts
import { FaiberSDK, MemoryTokenProvider, domainsFromEnv } from "@faiber/faiber-ts-sdk";

const tokens = new MemoryTokenProvider();
const sdk = new FaiberSDK({
  domains: domainsFromEnv(process.env),
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

The facade exposes `idp`, `profile`, `modules`, `social`, `asset`, `payment`, `messenger`, `crm`, `lms`, `reservation`, `session`, `version`, `flow`, `knowledge`, `chat`, `state`, `drm`, `task`, `manage`, and `gis`. Each regular REST service has curated convenience methods, guarded REST resources, a low-level authenticated client, and an `operations` object containing every mounted backend route. DRM includes its complete management panel contract (libraries, categories, compositions, mixed media, workflows, manifests, package jobs, statuses, audit, operations settings, multipart media, and binary chunk uploads). Session includes room lifecycle, LMS/chat integrations, recordings/manifests, branding, analytics, and canonical room/recording/playback view URLs. Chat includes assistant administration and the full conversation/realtime/AI runtime contract. Messenger and Payment expose their complete management, status, integration, and verification contracts. Realtime State, Task, Version, and Manage retain their specialized transport-aware clients. Manage provides project-scoped proxy origins plus reviewed Agentic action and POST-SSE APIs.

`FaiberSDK.capabilities`, `sdk.capabilities`, and `sdk.describe(service?)` expose machine-readable descriptions, authentication rules, transports, environment variables, operation counts, and AI-agent usage guidance. Every service package is also exported as a namespace such as `IdpService`, `DrmService`, or `StateService`, so application code can import runtime APIs and types exclusively from this facade.


All methods return full Axios responses and accept request options for headers, cancellation, timeout, and transport overrides. Use `authMode: "cookie"` for secure HttpOnly-cookie authorization, or `authMode: "bearer"` with an in-memory/server token provider. Keep confidential client secrets on the server; browser applications use the registered browser login flow or a server-managed session. Service origins are supplied through `domains`, `defaultDomain`, or `domainsFromEnv`; the SDK never hardcodes deployment domains.

See each service package README for its capability and permission table, request/query contracts, response envelopes, uploads, form encoding, errors, and examples.

### Poulstar Office extension

Poulstar Office uses its project-owned API client and deployment configuration. The platform facade covers the registered Infera services listed above.

## Daily and weekly LMS calendar

Since 1.2.0, an existing authenticated SDK instance loads a complete local day in
one request. Requires `lms:classroom:read` and an LMS deployment with the calendar
endpoint. Existing visibility rules apply; no separate Profile/report permission
or enrichment request is needed.

```ts
const controller = new AbortController();
const response = await sdk.lms.classroomCalendar({
  date: '2026-10-25',
  timezone: 'Asia/Tehran',
}, { signal: controller.signal });
const { sessions, summary, type_counts } = response.data.data;
```

For a week, replace `date` with `from: '2026-10-25T00:00:00+03:30'` and
`to: '2026-11-01T00:00:00+03:30'`. The end is exclusive; complete ranges may
span 1–7 local days. All results are returned without pagination. Multiple teacher
and type filters are arrays. Type counts ignore selected type filters, while
summary metrics describe returned sessions. Preserve zero student counts and
format timestamp instants using the requested timezone. The call preserves the
full Axios response, cancellation and errors. See the
[@faiber/faiber-lms guide](https://www.npmjs.com/package/@faiber/faiber-lms)
for the complete field, filtering and null semantics and weekly examples.
