# @faiber/faiber-version

Typed client for the Faiber version registry.

## Install and configure

```bash
npm install @faiber/faiber-version @faiber/sdk-core
```

```ts
import { FaiberClient } from "@faiber/sdk-core";
import { VersionApi } from "@faiber/faiber-version";

const client = new FaiberClient("version", {
  domains: { version: import.meta.env.FAIBER_VERSION_URL },
});
const versions = new VersionApi(client);

const current = await versions.service("profile");
const history = await versions.allVersions("profile");
const release = await versions.version(versionId);
```

## Capabilities

| Method | Route | SDK method |
| --- | --- | --- |
| `GET` | `/health` | `health()` |
| `GET` | `/api/v1/services` | `services()` |
| `GET` | `/api/v1/services/{service_slug}` | `service(slug)` |
| `GET` | `/api/v1/services/{service_slug}/all` | `allVersions(slug)` |
| `GET` | `/api/v1/versions/{version_id}` | `version(id)` |

Responses retain the backend envelopes: service lists use `data.services`, single services and their complete history use `data.service`, and releases use `data.version`. Exported types include service identity/status, latest version, version code/name, channel, scope, changelog, download URL, status, and timestamps.

All calls return full Axios responses and accept `RequestOptions` for cancellation, timeout, and headers. The version registry routes are public in the inspected service; no token is added unless the configured client has one.
