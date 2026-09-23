# Infera GIS client

Typed datasets, geometry, map styles, imports and personal places. Inherits the compatible public place catalog API. Server-enforced ownership and publication; never supply operator credentials to a browser.

```sh
npm install @faiber/faiber-gis @faiber/sdk-core
```

```ts
import { FaiberClient } from '@faiber/sdk-core';
import { GisApi } from '@faiber/faiber-gis';
const gis = new GisApi(new FaiberClient('gis', {domains: {gis: '/gis'}, authMode: 'cookie'}));
const datasets = await gis.datasets();
```

For a same-origin service panel, use cookie mode with an IDP-backed session. A server-side integration can use the common authenticated Faiber transport. Geometry writes require the last confirmed dataset revision; a 409 means reload and reconcile. Public and private map styles use separate endpoints. Download jobs report completion only after geometry storage and draft map generation. Preserve OSM attribution and licensing.

Map editing uses `map(id)`, `updateMap(id, input)`, and `mapPublication(id, {status, expected_revision, reason})`. Keep the dataset ID fixed; changing ownership through map edits is rejected. Public and private tile methods return an Axios response containing `ArrayBuffer` data. Pass `{signal: controller.signal}` to cancel any request; normal Axios errors include the response status and server error code. Map rendering styles preserve provider-defined JSON fields.

Use [`@faiber/faiber-ts-sdk`](https://www.npmjs.com/package/@faiber/faiber-ts-sdk) for the complete service facade.
