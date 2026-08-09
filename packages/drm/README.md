# @faiber/faiber-drm

Typed client for sandbox audio/video folders, tags, media search, uploads, metadata, deletion, and signed playback. Sandbox applications should normally install the single `@faiber/faiber-ts-sdk` facade; this package is its internal service module.

## Run and configure

```bash
npm install @faiber/faiber-ts-sdk
```

```ts
import { FaiberSDK } from "@faiber/faiber-ts-sdk";

const sdk = new FaiberSDK({
  domains: { drm: process.env.FAIBER_DRM_URL! },
  tokenProvider,
  axios: { timeout: 15_000 },
});

const page = await sdk.drm.media({ search: "intro", media_type: "video", page: 1, size: 30 });
const upload = await sdk.drm.uploadMedia({ file, name: "Introduction", tag_ids: [tagId] });
const playback = await sdk.drm.playback(upload.data.id);
```

`FAIBER_DRM_URL` must be the DRM service origin. Bearer and cookie authentication use the shared SDK configuration. Upload accepts `Blob` and sends `multipart/form-data`; only audio and video are accepted by the backend. Playback URLs are signed for 900 seconds. Every call returns the complete Axios response and accepts Axios request options, including `AbortSignal`, headers, timeout, and adapters.

The client covers all 15 mounted REST operations. Inputs, list filters, paginated results, entity models, and playback output are named exported TypeScript types. Axios errors preserve validation, not-found, and transport responses.
