# @faiber/faiber-places

First-class geographic places, account saves, moderated contributions, and canonical IDs.

```sh
npm install @faiber/faiber-places @faiber/sdk-core
```

```ts
import { FaiberClient } from '@faiber/sdk-core';
import { PlacesApi } from '@faiber/faiber-places';
const places = new PlacesApi(new FaiberClient('places', {
  domains: { places: 'https://places.example.com' },
  authMode: 'cookie',
  axios: { withCredentials: true, timeout: 6000 },
}));
const response = await places.search({ lat: 37.2792, lon: 49.5839, radius: 500 });
console.log(response.data.data);
```

Public search/detail return published, closed, or moved places. Merged IDs resolve to a canonical place; `references` returns aliases for external reference queries. `saves`, `save`, `unsave`, `propose`, and `report` require authenticated identity. Proposals remain pending until a moderator acts. Queue, decisions, report resolution, and history require `places:moderate`. Use the server integration's trusted identity boundary; never ship service credentials to browsers.

All methods return full Axios responses. Pass request options with an AbortSignal to cancel, and handle authentication (401), authorization (403), missing records (404), validation (400), and service failures. Retain user inputs on a failed mutation. No automatic mutation retry is performed. The full facade is [@faiber/faiber-ts-sdk](https://www.npmjs.com/package/@faiber/faiber-ts-sdk).

This capability is under development on the Rasht integration branch; use its reviewed pinned package artifacts until a coordinated SDK release is published.
