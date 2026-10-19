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
| `GET` | `/api/openapi.json` | `openapi()` |
| `GET` | `/api/v1/services` | `services()` |
| `GET` | `/api/v1/services/{service_slug}` | `service(slug)` |
| `GET` | `/api/v1/services/{service_slug}/all` | `allVersions(slug)` |
| `GET` | `/api/v1/versions/{version_id}` | `version(id)` |

Responses retain the backend envelopes: service lists use `data.services`, single services and their complete history use `data.service`, and releases use `data.version`. Exported types include service identity/status, latest version, version code/name, channel, scope, changelog, download URL, status, and timestamps.

All calls return full Axios responses and accept `RequestOptions` for cancellation, timeout, and headers. The version registry routes are public in the inspected service; no token is added unless the configured client has one.

### APK publishing

`versions.operations.routerPublishApkPost({serviceSlug, appName, version, versionCode, downloadUrl}, options)` publishes an idempotent APK release. The download URL must use HTTPS and `versionCode` must be positive. Supply the sandbox's dedicated APK publisher bearer credential through the configured server client; this is not an end-user publishing permission. The raw response is `{status:"success", id}`. Invalid metadata returns 400 and unavailable publisher configuration returns 503.

### Registry behavior

Lists return active services without pagination, filters, or populated `last_version` values. A service lookup accepts its **slug**, and resolves the highest active `version_code`. Complete history includes active versions with unspecified ordering. A version lookup accepts a UUID: malformed UUIDs return 400, and missing/inactive records return 404.

`channel` uses `Release` or `PreRelease`; `scope` uses `Public` or `Closed`. Scope is descriptive metadata in the inspected handler and does not enforce membership. Apply the appropriate gateway access policy for your project runtime. Do not treat `Closed` as a protection mechanism.

Health reports process status. The OpenAPI endpoint returns a raw document, currently describing health only; it is not a complete API inventory. Both convenience methods and generated operations use these same wire contracts.

Nullable fields are present with `null`, including service `title`, release metadata
and `updated_at`; they are not omitted. History uses `versions` and has no
`last_version` field. Version timestamps are naive database timestamp strings; no
UTC offset is promised. Successful read envelopes always include `status`, `message`
and `data`. The publisher receipt remains raw.
