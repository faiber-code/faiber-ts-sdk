# @faiber/faiber-gis

Candidate typed GIS client for datasets, GeoJSON edits, map publication, binary vector tiles, area imports, private personal places, public place catalog, saved places, moderation and the integration outbox. All methods preserve the complete Axios response and accept cancellation/timeout options.

After release, install with `npm install @faiber/faiber-gis`. Until the release gates pass, use the locally packed candidate.

```ts
import { FaiberSDK } from "@faiber/faiber-ts-sdk";
const sdk = new FaiberSDK({ domains: { gis: "https://gis.your-project.example" } });
const result = await sdk.gis.operations.createDataset({
  name: "My map", attribution: "Original survey", license: "CC-BY-4.0",
  source: "Reviewed survey", scope: "user",
});
```

Coordinates use longitude then latitude; bbox query values are west,south,east,north. Mutations use the returned `expected_revision`; stale updates return409. Dataset publication and map publication are separate decisions. A public map requires a published, public dataset. Private personal places never become public catalog entries automatically.

`tile` and `publicTile` force arraybuffer responses and retain content encoding/revision headers. An import submission queues work; it does not prove successful import or publication. Retry is owner-only for a failed current-protocol job, with current authority and original issuer binding. The service exposes a bounded current lease and finite attempts, not user-owned worker tokens.

Place assertions identify the social post author linking an existing published place, not a transfer of place ownership. Internal outbox reads/acknowledgements require their dedicated worker permission. Ordinary browsers must use their configured identity flow and never receive internal service keys.

Source candidate: GIS0bc8423. The client is unpublished; native PostGIS/IDP/Martin acceptance and canonical source/deployment reconciliation remain mandatory release gates. Transport unit tests do not certify business behavior.
