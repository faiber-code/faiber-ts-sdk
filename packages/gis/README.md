# @faiber/faiber-gis

Typed GIS client for datasets, GeoJSON edits, map publication, vector tiles, area imports, private places, the public place catalog, moderation and the integration outbox.

```sh
npm install @faiber/faiber-gis @faiber/sdk-core
```

```ts
import { FaiberClient } from "@faiber/sdk-core";
import { GisApi } from "@faiber/faiber-gis";

const gis = new GisApi(new FaiberClient("gis", {
  domains: { gis: "https://gis.your-project.example" },
  axios: { withCredentials: true, timeout: 15_000 },
}));
const controller = new AbortController();
const response = await gis.operations.createDataset({
  name: "My map", attribution: "Original survey", license: "CC-BY-4.0",
  source: "Reviewed survey", scope: "user",
}, { signal: controller.signal });
console.log(response.status, response.data.data.id);
```

The browser needs an existing secure IDP cookie session and an origin allowed by the GIS deployment. GIS validates the session and checks the exact origin for cookie-authenticated mutations. A generic end-user Bearer token is not a substitute for this GIS identity flow. Trusted BFF credentials belong only on the server and must never be shipped to a browser. Public map and tile endpoints can be called without a session.

Every method returns the full Axios response, including status and headers, and accepts Axios request options. Cancellation rejects with Axios cancellation behavior; HTTP and transport failures reject with `AxiosError`. Authentication failures return401, permission/origin failures403, inaccessible resources commonly404, stale revisions409 and unavailable dependencies503. Inspect `error.response` when present; a network failure may have no response.

Feature geometry uses the six native GeoJSON types (`Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon`); the server checks coordinate ranges, batch sizes and PostGIS topology. Map styles expose typed sources, layers, light, center and zoom; paint/filter expressions retain JSON values. Coordinates use longitude then latitude; bbox values are west,south,east,north. Revision-checked mutations require `expected_revision` from the latest resource. Dataset publication and map publication are separate: a public map also requires a published, public dataset. Personal places remain private.

`tile` and `publicTile` return `ArrayBuffer` bytes while preserving headers. Import submission returns a queued job, not a completed or published dataset. Imports require the server's organization-specific authority configuration; missing configuration returns503. Submission and retry enforce a two-active-job limit per owner, returning429 when exceeded. `imports()` returns at most100 newest visible jobs; it has no pagination and omits the private lease token. Retry accepts only an owned failed current-protocol job and rechecks current authority and its original issuer binding.

Place assertions link an existing place to a social author; they do not transfer ownership. Outbox reads and acknowledgements require the dedicated integration permission.

For the complete client, install [`@faiber/faiber-ts-sdk`](https://www.npmjs.com/package/@faiber/faiber-ts-sdk) and use `sdk.gis`. The published package's `provenance.json` identifies its supported backend source; deployment compatibility still depends on the project's service versions.
