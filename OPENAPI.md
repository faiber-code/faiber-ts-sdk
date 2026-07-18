# Complete service contracts

The hand-written service classes are convenience APIs. Exhaustive endpoint and schema coverage is generated directly from each service's OpenAPI document so the SDK cannot silently drift from the Rust services.

```bash
npm run generate
npm run generate:check
```

Each source URL has an environment override such as `FAIBER_PROFILE_OPENAPI`. Generated files are written to `packages/<service>/src/openapi.generated.ts` and expose the standard `paths`, `operations`, and `components` interfaces produced by `openapi-typescript`.

Use a generated contract with the facade:

```ts
import type { paths as ProfilePaths } from "@faiber/faiber-profile/openapi";

const operations = sdk.operations<ProfilePaths>("profile");
const response = await operations.get("/api/v1/profile/{uuid}/admin", {
  path: { uuid: userId },
});
```

`OpenApiClient` supports typed path, query, header, JSON, multipart, binary, and response bodies. `multipart()` creates standards-compliant `FormData` for browser and Node 18+ runtimes.
