# @faiber/faiber-fitapp

Typed client for Fitapp coaching relationships, plans, activity, measurements, and messaging.

```sh
npm install @faiber/faiber-fitapp
```

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { FitappApi } from "@faiber/faiber-fitapp";

const client = new FaiberClient("fitapp", { domains: { fitapp: "https://fitapp.example.com" }, tokenProvider: new MemoryTokenProvider(), axios: { withCredentials: true } });
const plans = await new FitappApi(client).assignedPlans({ page_number: 1, page_size: 20 });
```

Methods return typed Axios responses and accept standard cancellation, timeout, and header options. Prefer secure cookies or in-memory bearer tokens.
