# @faiber/faiber-ts-sdk

The complete typed TypeScript facade for all public Faiber services.

## Install

```bash
npm install @faiber/faiber-ts-sdk
```

## Configure once

```ts
import { FaiberSDK, MemoryTokenProvider, domainsFromEnv } from "@faiber/faiber-ts-sdk";

const tokens = new MemoryTokenProvider();
const sdk = new FaiberSDK({
  domains: domainsFromEnv(import.meta.env),
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});

const login = await sdk.idp.login({ email, password });
await tokens.setTokens({
  accessToken: login.data.access_token,
  refreshToken: login.data.refresh_token,
});

const [products, profile, slots] = await Promise.all([
  sdk.modules.products.list({ page_number: 1, page_size: 24 }),
  sdk.profile.full(userId),
  sdk.reservation.availableSlots({ provider_id: 42 }),
]);
```

The facade exposes `idp`, `profile`, `modules`, `asset`, `payment`, `messenger`, `crm`, `lms`, `reservation`, `session`, `version`, `flow`, and `fitapp`. Each convenience method returns a full Axios response and exports named input/output interfaces.

See the package examples above for authentication and service configuration. All clients also support standard Axios errors, cancellation, interceptors, and request options.
