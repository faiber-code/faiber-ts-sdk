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

The facade exposes `idp`, `profile`, `modules`, `asset`, `payment`, `messenger`, `crm`, `lms`, `reservation`, `session`, `version`, and `flow`. Each service has curated convenience methods, guarded REST resources, a low-level authenticated client, and an `operations` object containing every route extracted from the mounted backend service.

All methods return full Axios responses and accept request options for headers, cancellation, timeout, and transport overrides. Use secure cookies by omitting a token provider, or provide an in-memory/server token provider for Bearer authentication. Service origins are supplied through `domains`, `defaultDomain`, or `domainsFromEnv`; the SDK never hardcodes deployment domains.

See each service package README for its capability and permission table, request/query contracts, response envelopes, uploads, form encoding, errors, and examples.
