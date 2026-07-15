# faiber-ts-sdk

One TypeScript monorepo for the public Faiber service APIs. Install one service SDK or the complete facade. `faiber-agentic`, `faiber-control`, UI frameworks, state managers, storage libraries and server frameworks are intentionally excluded.

## Packages

| Package | Purpose |
| --- | --- |
| `@faiber/sdk-core` | Axios client, auth, token providers, REST primitives and environment helpers |
| `@faiber/faiber-idp` | Login, tokens, users, roles and permissions |
| `@faiber/faiber-profile` | Profiles, locations and personal records |
| `@faiber/faiber-modules` | Products, posts, taxonomy, content, SEO, inventory, orders and social APIs |
| `@faiber/faiber-asset` | Wallet, billing, ranks, actions, subscriptions and banking |
| `@faiber/faiber-payment` | Gateways, payments and transactions |
| `@faiber/faiber-messenger` | Notifications, templates, channels and delivery providers |
| `@faiber/faiber-crm` | Leads, workflows, teams, reminders and work logs |
| `@faiber/faiber-lms` | Courses, classrooms, assessments, certificates, events and reports |
| `@faiber/faiber-reservation` | Services, providers, schedules, slots and reservations |
| `@faiber/faiber-session` | Live rooms, tokens, recordings and analytics |
| `@faiber/faiber-version` | Service and release versions |
| `@faiber/faiber-flow` | Automations, runs, trigger/action catalog and validation |
| `faiber-ts-sdk` | Convenience facade containing every package above |

## Install only what you use

```bash
npm install @faiber/faiber-modules @faiber/faiber-idp
```

Or install everything:

```bash
npm install faiber-ts-sdk
```

Axios is the only external runtime dependency.

## Complete website example

```ts
import { FaiberSDK, MemoryTokenProvider, domainsFromEnv } from "faiber-ts-sdk";

const tokens = new MemoryTokenProvider();
const sdk = new FaiberSDK({
  // Pass process.env in Node, import.meta.env in Vite, or any plain object.
  domains: domainsFromEnv(import.meta.env),
  tokenProvider: tokens,
  axios: {
    withCredentials: true,
    timeout: 15_000,
    headers: { "X-Frontend": "storefront" },
  },
});

const login = await sdk.idp.login({ phone: "09120000000", password: userSuppliedPassword });
const body = login.data;
await tokens.setTokens({
  accessToken: body.access_token ?? body.token,
  refreshToken: body.refresh_token,
});

const products = await sdk.modules.products.list({ page_number: 1, page_size: 24 });
const posts = await sdk.modules.posts.list({ page_number: 1, page_size: 10 });
```

## Install one service

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { ModulesApi } from "@faiber/faiber-modules";

const client = new FaiberClient("modules", {
  domains: { modules: "https://content.example.com" },
  tokenProvider: new MemoryTokenProvider(),
});

const modules = new ModulesApi(client);
const response = await modules.products.list({ search: "camera" }, {
  signal: AbortSignal.timeout(5000),
  headers: { "X-Request-Source": "search-page" },
});
```

## Browser and Node authentication

The SDK does not access global storage. Supply the strategy appropriate for the host:

```ts
import { StorageTokenProvider } from "@faiber/sdk-core";

// Browser, only when your threat model explicitly permits localStorage:
const browserTokens = new StorageTokenProvider(window.localStorage);

// Server: implement TokenProvider using the request/session context.
const serverTokens = {
  async getTokens() { return session.tokens; },
  async setTokens(value) { session.tokens = value; },
};
```

Cookie authentication works by setting `withCredentials: true` and omitting a token provider. Automatic refresh is opt-in through `refreshAuth`; concurrent 401 responses share one isolated refresh request. Refresh failures clear stale stored credentials, and retried requests always obtain the new authorization value.

For public browser applications, prefer secure `HttpOnly`, `SameSite` cookies or an in-memory provider. Persistent Web Storage is readable by JavaScript and therefore exposes bearer tokens if the page suffers an XSS vulnerability. `StorageTokenProvider` is an explicit adapter, never an automatic default.

## Axios remains available

Every API exposes its `AxiosInstance`:

```ts
sdk.modules.axios.interceptors.response.use(logResponse);

// Any new or project-specific endpoint is immediately usable.
const response = await sdk.modules.client.request({
  method: "QUERY",
  url: "/api/v1/custom-search",
  data: { query: "..." },
});
```

Convenience calls return the full `AxiosResponse`; the SDK never unwraps, caches, normalizes or mutates application data.

## Typed inputs and outputs

Every service package exports its domain entities, named input interfaces, and named response interfaces. CRUD resources preserve these types through the full Axios response:

```ts
import type {
  CreateProductInput,
  ProductListResponse,
} from "@faiber/faiber-modules";

const input: CreateProductInput = {
  name: "Camera",
  status: 1,
};

await sdk.modules.products.create(input);
const response = await sdk.modules.products.list({ page_number: 1 });
const body: ProductListResponse = response.data;
```

Custom actions such as authentication, notifications, slot generation, profile updates, and workflow validation also expose dedicated `*Input` and `*Response` interfaces. The low-level `client.request<TResponse, TData>()` remains generic for endpoints defined by an application.

Absolute request URLs are disabled by default to prevent authorization headers from being redirected to another origin. Applications that intentionally need absolute URLs can opt back in with `axios: { allowAbsoluteUrls: true }`.

## Domains

The SDK never reads environment variables itself. `domainsFromEnv` reads a plain object using these optional names:

`FAIBER_IDP_URL`, `FAIBER_PROFILE_URL`, `FAIBER_MODULES_URL`, `FAIBER_ASSET_URL`, `FAIBER_PAYMENT_URL`, `FAIBER_MESSENGER_URL`, `FAIBER_CRM_URL`, `FAIBER_LMS_URL`, `FAIBER_RESERVATION_URL`, `FAIBER_SESSION_URL`, `FAIBER_VERSION_URL`, and `FAIBER_FLOW_URL`.

You can also pass `domains` directly or use `defaultDomain` when services share one API gateway.

## Development

```bash
pnpm install
pnpm build
pnpm typecheck
pnpm pack:check
```
