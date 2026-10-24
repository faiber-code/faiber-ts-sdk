# @faiber/faiber-drm

Typed media storage, protected playback, resumable uploads, DRM packaging, content libraries, compositions, analysis, and Knowledge synchronization.

```bash
npm install @faiber/faiber-drm
```

```ts
import { DrmApi, FaiberClient, MemoryTokenProvider } from "@faiber/faiber-drm";

const drm = new DrmApi(new FaiberClient("drm", {
  domains: { drm: "https://drm.example.com" },
  tokenProvider: new MemoryTokenProvider({ accessToken }),
  axios: { timeout: 15_000 },
}));

const page = await drm.media({ search: "intro", media_type: "video", page: 1, size: 30 });
const uploaded = await drm.uploadMedia({ file, filename: "intro.mp4", name: "Introduction", tag_ids: [tagId] });
const original = await drm.playback(uploaded.data.id);
const statuses = await drm.drmStatuses({ ids: uploaded.data.id });
const packages = await drm.mediaPackages(uploaded.data.id);
```

Configure the service origin without `/api/v1`. Use an in-memory token provider or secure HttpOnly cookies with `axios: { withCredentials: true }`. The pinned backend's IDP middleware extracts trusted identity headers with development fallback; it does not itself verify Bearer tokens. Deploy behind an enforcing identity gateway that verifies credentials and controls those headers. The SDK sends configured credentials through the shared `FaiberClient` on every call. The public status endpoint needs no identity. Gateway authority and native service acceptance require deployment verification.

Media includes audio, video, and images. Multipart uploads use standard `FormData`; metadata fields are text and `tag_ids` is a JSON UUID array. Video upload automatically queues packaging and optional transcription. Original playback is a signed URL valid for 900 seconds and works independently of package readiness; archived media is unavailable. Media records include nullable transcription, original filename, checksum and archive timestamp. Batch media deduplicates IDs, returns at most 50 existing records in request order and omits missing records.

For large files, create a resumable upload session, send numbered raw byte parts, then complete it:

```ts
const session = await drm.createUploadSession({
  filename: "lecture.mp4", mime_type: file.type, total_bytes: file.size,
});
for (let start = 0, part = 1; start < file.size; start += session.data.part_size, part++) {
  await drm.uploadPart(session.data.id, part, file.slice(start, start + session.data.part_size));
}
const completed = await drm.completeUpload(session.data.id, {});
```

Sessions expire after 24 hours. Parts are numbered 1–10000, must be nonempty, and cannot exceed `part_size` (default 10 MiB, bounded to 5–64 MiB). Reuploading a part replaces its metadata. Completion checks the total uploaded and stored byte counts; repeating completed completion returns the existing media with HTTP 200 instead of 201. The supplied checksum is stored metadata. Cancel returns HTTP 204.

`packageFile(packageId, "video/segment-1.m4s", { headers: { Range: "bytes=0-1023" } })` returns raw `ArrayBuffer` data and preserves HTTP 200/206, content type and range headers. Package files and ClearKey licenses require authenticated shared transport. Wildcard paths use raw nonempty segments; separators remain intact. Percent escapes, dot traversal, query/fragment syntax and backslashes fail locally. A package must be ready; otherwise downloads return 409. ClearKey requires `{ package_id }` and returns temporary JWK key material; keep it private.

The client exposes all 96 mounted operations through `drm.operations`, with convenience methods for common workflows. Each operation documents its source permission: media, package, composition, content, library, license and audit grants apply by route. Operations settings and transcription model catalog require `drm:manage`; permanent library deletion requires `drm:library:delete`. Listing libraries includes public libraries only; direct library access follows the route permission. Category and item deletes archive them, while deleting a library permanently removes its content and compositions. Knowledge sync/catalog additionally require an `x-organization-id` UUID header unless the server configures a default organization.

Paginated media, compositions, item queries, jobs, analyses and audit events return `{ data, page, page_size, total_items }`, without an extra envelope. Pages start at 1 and sizes clamp to 1–100. Defaults are 30 for media/items/jobs, 20 for compositions/analyses, and 50 for audit. Other endpoints return bare records or arrays. An absent composition analysis returns JSON `null`; successful deletes return no body. Requests retain snake_case fields. `category_id: null` clears a mixed-media category; the pinned backend's ordinary nested optional fields such as media `folder_id` and composition `description` treat JSON null as no change. Workflow nodes/edges must be arrays; nested editor data, historical documents and metadata remain documented dynamic JSON. The Knowledge catalog is an unmodified upstream JSON response.

Every call returns the complete Axios response and supports request options including headers, cancellation signals, timeout, credentials and adapters. Axios errors retain backend status and `{ error }` payloads for local validation (400), authorization (401/403), missing resources (404), conflicts (409) and internal failures (500); extractor failures may use framework error bodies. Cancellation rejects with the Axios cancellation error. The [complete Faiber SDK](https://www.npmjs.com/package/@faiber/faiber-ts-sdk) includes the same service client as `sdk.drm`.
