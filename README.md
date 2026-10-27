# Faiber TypeScript SDK

Typed, framework-neutral clients for the public Faiber service platform. Install one service package or the complete facade. Axios is the only runtime transport dependency.

## Packages

| Package | Capability |
| --- | --- |
| `@faiber/sdk-core` | Domains, Axios transport, token providers, auth refresh, guarded REST resources, OpenAPI operations, form and multipart encoding |
| `@faiber/faiber-idp` | Login, sessions, users, roles, permissions, OAuth and access control |
| `@faiber/faiber-profile` | Profiles, atomic field/property patching, locations, avatars, surveys and profile metadata |
| `@faiber/faiber-modules` | Products, editorial posts, pages, taxonomy, SEO, media, inventory, orders, generic comments/reactions and authors |
| `@faiber/faiber-social` | Social feeds, comments, likes, reactions, reports and moderation |
| `@faiber/faiber-asset` | Wallets, balances, plans, subscriptions, ranks, billing, ledger and banking |
| `@faiber/faiber-payment` | Gateways, payment creation/verification, callbacks and transactions |
| `@faiber/faiber-messenger` | Notifications, templates, channels, providers and delivery state |
| `@faiber/faiber-crm` | Leads, contacts, teams, pipelines, workflows, reminders and work logs |
| `@faiber/faiber-lms` | Courses, classrooms, homework/project banks and assignments, exam banks/items/sessions/users, certificates, and reports |
| `@faiber/faiber-reservation` | Services, providers, schedules, available slots and reservations |
| `@faiber/faiber-session` | Live rooms, access tokens, playback, recordings and analytics |
| `@faiber/faiber-version` | Service registry and release history |
| `@faiber/faiber-flow` | Automations, triggers, actions, validation, runs and execution history |
| `@faiber/faiber-knowledge` | Knowledge bases, groups, items, graph edges, chat bindings, rules, runtime resolution and actions |
| `@faiber/faiber-chat` | Direct, group, channel and AI conversations, messages, members, reactions, read state and realtime events |
| `@faiber/faiber-state-sdk` | Game worlds, rooms, authoritative state, realtime replication, prediction and server-side simulation |
| `@faiber/faiber-drm` | Audio/video folders, tags, search, uploads, metadata and signed playback |
| `@faiber/faiber-task` | Projects, work items, sprints, scoped grants, agent proposals and delivery reports |
| `@faiber/faiber-gis` | Candidate typed datasets, geometry, maps, private places, imports and catalog moderation; native acceptance remains gated |
| `@faiber/faiber-manage` | Project-scoped service proxy origins and governed Manage Agent interactions |
| `@faiber/faiber-game-sdk` | Portable TypeScript/WebAssembly ECS, adaptive 2D/3D rendering and cross-platform game runtime |
| `@faiber/faiber-ts-sdk` | One facade containing every package above |

## Install and initialize

```bash
npm install @faiber/faiber-ts-sdk
```

Server-side login with a registered confidential client:

```ts
import { FaiberSDK, MemoryTokenProvider, domainsFromEnv } from "@faiber/faiber-ts-sdk";

const tokenProvider = new MemoryTokenProvider();
const sdk = new FaiberSDK({
  domains: domainsFromEnv(process.env),
  authMode: "bearer",
  tokenProvider,
  axios: { withCredentials: true, timeout: 15_000 },
});

const login = await sdk.idp.login({
  grant_type: "password",
  username,
  password,
  client_id,
  client_secret,
});
await tokenProvider.setTokens({
  accessToken: login.data.data.access_token,
  refreshToken: login.data.data.refresh_token,
});
```

Keep confidential client secrets on the server. Browser applications can use the registered browser login flow or a server-managed session. Login forms are sent as `application/x-www-form-urlencoded`. Cookie deployments set `authMode: "cookie"`, which enables credentialed requests and suppresses Bearer injection; Bearer deployments set `authMode: "bearer"` and provide a token provider. The backward-compatible `auto` mode sends a token when available and otherwise follows Axios cookie configuration. The SDK never reads global storage or embeds credentials. Configure browser origins through the authenticated service gateway where a service trusts forwarded identity headers; supplying a token to a direct internal listener does not establish gateway authentication.

For browser applications, prefer secure `HttpOnly`, `SameSite` cookies or an in-memory token provider. `StorageTokenProvider` is available only for applications that explicitly accept that Web Storage is readable by JavaScript and can expose tokens during an XSS incident. Server applications can implement `TokenProvider` against their request/session context.

Automatic refresh is opt-in through `refreshAuth`. Concurrent `401` responses share one refresh request, retries obtain the replacement token, and a failed refresh clears stale credentials.

## Complete route coverage and AI guidance

Each package includes a `provenance.json` identifying the backend revisions used for its contracts. Match your deployment to those revisions and consult the service README for supported workflows and authentication requirements.

Every service exposes curated convenience APIs plus `sdk.<service>.operations`, generated from mounted Rust routes. Generated methods preserve the HTTP verb, path identifiers, query shape, body shape, response envelope, form/multipart transport, and declared permission. REST convenience resources are capability guarded, so an unsupported operation fails locally instead of producing a backend `405`.

The facade is the single supported application entrypoint. It exports every public service API and type namespace, plus `FaiberSDK.capabilities` and `sdk.describe(service?)`. This machine-readable catalog tells developers and coding agents what each service does and which transport and authentication mode it needs. Manage is exposed as a project-scoped gateway and governed Agentic transport; it never grants arbitrary-host access. Named wire types describe concrete backend models. Fields intentionally carrying application-defined metadata, schema documents, or provider payloads use documented JSON types.

```ts
await sdk.profile.updateProfileByUserId(userId, {
  first_name: { en: "Ava", fa: "آوا" },
  properties: {
    weight: 68.5,
    training_goal: "muscle_gain",
    workout_plan: weeklyPlan,
    workout_stats: stats,
  },
});
```

The profile call above sends one atomic `PATCH /api/v1/profile/{uuid}`. Omitted fields remain unchanged. `job: null` clears the job title; most other optional core fields treat null like omission. Property updates follow the configured property schema.

## Pagination, filtering, and search

List methods preserve each backend's typed query contract, including page number/size, cursor, server search, sort, and domain-specific filters. Generated operation query types retain nested keys such as `page[number]` and `page[size]` where the service expects them. Pagination metadata remains in the original API response envelope.

## Domains and environment configuration

`domainsFromEnv` reads a plain object such as `import.meta.env` or `process.env`. Supported keys are `FAIBER_IDP_URL`, `FAIBER_PROFILE_URL`, `FAIBER_MODULES_URL`, `FAIBER_SOCIAL_URL`, `FAIBER_ASSET_URL`, `FAIBER_PAYMENT_URL`, `FAIBER_MESSENGER_URL`, `FAIBER_CRM_URL`, `FAIBER_LMS_URL`, `FAIBER_RESERVATION_URL`, `FAIBER_SESSION_URL`, `FAIBER_VERSION_URL`, `FAIBER_FLOW_URL`, `FAIBER_KNOWLEDGE_URL`, `FAIBER_CHAT_URL`, `FAIBER_STATE_URL`, `FAIBER_DRM_URL`, `FAIBER_TASK_URL`, `FAIBER_GIS_URL`, and `FAIBER_MANAGE_URL`. Applications may instead pass `domains` directly or a shared `defaultDomain` gateway. Absolute request URLs are rejected unless explicitly enabled.

## Inputs, outputs, errors, and cancellation

Packages export named request, query, entity, response-envelope, and generated operation types. SDK calls return full Axios responses and do not unwrap, cache, or mutate data. Axios errors retain status, response body, headers, and request IDs. Every call supports request headers, timeout, interceptors, adapters, and `AbortSignal` cancellation.

## Uploads and media

Uploads use standards-compatible `FormData` through `multipart(...)`; URL-encoded forms use `urlEncoded(...)`. Media methods return the backend's media identifier, key, URL, or binary response without rewriting it, so it can be linked to products, posts, profiles, and other hosted records.

```ts
await sdk.profile.uploadAvatar(userId, avatarFile);
await sdk.modules.uploadMediaAsset(file, "product");
```

LMS question, option, homework, and course images use the same authenticated upload:

```ts
const response = await sdk.lms.media.uploadImage(imageFile, {
  signal: abortController.signal,
  onUploadProgress: ({ loaded, total }) => {
    if (total) updateProgress(Math.round(loaded / total * 100));
  },
});
const imageUrl = response.data.data?.url;
```

Await the response before saving the returned URL on the question, option, or homework record.
Byte progress reaching 100% does not confirm storage completion. See the
[LMS upload guide](packages/lms/README.md) for formats, size limits, permissions, and filenames.

Use the typed low-level `sdk.<service>.client` only for application-specific routes that are not part of the public service contract. Absolute request URLs are disabled by default so authorization headers cannot be redirected to another origin.

### Realtime through Sockudo

Use `subscribeRealtime` from `@faiber/sdk-core` for private Sockudo subscriptions. Chat configuration comes from `ChatApi.realtimeConfig(conversationId)` and authorization from `ChatApi.realtimeAuth`; both require conversation membership and `chat:read`. Notification configuration and authorization use `MessengerApi.operations.notificationNotificationsRealtimeConfigGet` and `notificationNotificationsRealtimeAuthPost` with `notification:self:read`; the backend permits only the signed-in recipient's channel. Keep these service responsibilities separate. Reload persisted records on subscription/reconnect, close subscriptions on logout, and keep all Sockudo secrets server-side. See the [core subscription example](https://github.com/faiber-code/faiber-ts-sdk/tree/main/packages/core#sockudo-realtime-subscriptions).

Workspace assistant workflows are available through `task.workspaceAssistant`, `chat.workspaceAssistant`, `knowledge.assistantContracts`, and `profile.resolvePeople`. Select assistants by explicit role, retrieve live authorized records, render typed drafts or before/after proposals, then apply a reviewed Task revision. Folder management and planning preferences use the same authenticated SDK transport. Task documentation explains cursor totals, completion attribution, optimistic revisions, and conflict refresh.

### Speech transfer optimization

`@faiber/faiber-chat` exports `createSpeechRecorder` (also available through the facade's `ChatService` namespace). It captures microphone speech with native noise/echo processing, mono audio and a compact Opus/AAC bitrate, without an encoder download. Send its Blob through your authenticated `chat.transcribe` client. `chat.synthesize` requests compact MP3 by default; pass `format: 'wav'` for lossless processing. Both network calls preserve Axios responses and abort signals. See the [Chat package guide](packages/chat/README.md#compact-microphone-capture-and-speech-playback) for resource cleanup, supported fallbacks, bitrate controls and browser limitations.

Chat supports continuous compressed dictation with `ChatService.startLiveDictation()` and
progressive MP3 playback with `ChatService.playSpeech()`. Both reuse your authenticated
`ChatApi`. Live transcription returns replaceable provisional text followed by one final
revision; phrase playback starts before the entire response has been generated. See the
[Chat package speech guide](packages/chat/README.md#live-dictation-and-earlier-speech-playback)
for availability, cancellation, limits, and fallback behavior.

Speech playback can preload three phrases and optionally retain the latest compressed
audio **on the client** for fast replay: pass `cacheScope` (service/tenant/user/voice revision)
and `persistCache: true` to `ChatService.playSpeech()`. Persistence uses browser IndexedDB,
not a server cache. Clear private audio on logout with `ChatService.clearSpeechPlaybackCache()`.
See the Chat package guide for bounds, cancellation and storage tradeoffs.

Profile supports generic dynamic filtering through `sdk.profile.filterProfiles`
with typed core, property and trusted-event paths, any role name, operators,
sorting and pagination. See the [profile package guide](packages/profile/README.md#dynamic-profile-filters).

### Expanded service operations

The service `operations` clients include typed storefront checkout, product trial gifts, paid fitness coaching, handoff/password flows, provider readiness, v2 games and matchmaking, room presence/moderation, and APK publishing. HTTP calls preserve the complete Axios response and configured authorization. Match and room realtime operations perform WebSocket upgrades using scoped tickets obtained from authenticated HTTP calls; they return the connected socket/client. Package READMEs describe the required permissions, dedicated server credentials, request casing and response envelopes.

### Feedback, delivery and assigned-contact chat (0.24.1)

Task feedback workflows are configured only in the instance's internal panel and database; no customer presets or role mappings ship with the SDK. The service packages expose typed feedback/capture contracts, self-scoped durable notification feeds and multi-device registration, per-user Chat summaries/read counts, and LMS notification settings and eligible contacts. See the Task, Messenger, Chat and LMS package guides for authenticated workflows, 35-second long-poll timeouts, concurrency errors and rollout requirements. Keep each client's service domains on the intended sandbox.

### Role summary migration (1.0.0)

Session’s retired `integrationPerformanceContextPost` endpoint is also removed. Source evidence is collected through the signed, source-owned MCP transport.

Use `sdk.profile.summaries` for configurable IDP role summaries. LMS summary APIs and fixed-role
types were removed in this breaking release. Supply canonical role UUIDs, explicitly grant Profile
summary permissions, and distinguish job status from persisted result availability/freshness.
See the [Profile package guide](packages/profile/README.md#configurable-role-summaries).

### Regenerating and checking the SDK

The default contributor pipeline uses the immutable Rust revisions in
service-source-revisions.json. With those service repositories available, run
npm run generate to extract mounted contracts and regenerate typed operations.
Run npm run generate:check to audit the pinned-source manifest and compare every
generated operation, type declaration and index export byte-for-byte without
writing files. Unknown service selections and stale output fail the check.

OpenAPI import is optional and separate from the SDK's source authority. Use
npm run openapi:generate or npm run openapi:check with an explicit
FAIBER_PROFILE_OPENAPI URL and --services=profile, or the corresponding configured
service variable. No default loopback server is probed. Some services do not
expose OpenAPI; this optional tool never replaces source extraction, semantic
review, actual transport tests or current-permission acceptance.

A passing generation check certifies reproducibility only. It does not close the
capability semantic gate or authorize npm publication, provider use or deployment.

### UUID-derived classroom and profile short IDs

```ts
import { shortIdFromUuid } from "@faiber/faiber-ts-sdk";
const code = shortIdFromUuid("550e8400-e29b-41d4-a716-446655440000"); // GDCN7L
const classrooms = await sdk.lms.searchClassrooms({ search: code });
const profiles = await sdk.profile.searchProfiles({ search: "Sara", role: "student" });
```

Classrooms search by name, course name, existing code, or short ID. Profiles search
by email, names, phone, national code, or short ID. List and detail responses expose
`short_id`; it uses the classroom UUID or profile row `id` (not IDP `user_id`).
The six-character alias is calculated without a stored column and supports offline
display. It can collide: searches return all authorized matches with their normal
pagination; retain full identifiers for reads and mutations. Searches normalize
case and Persian/Arabic digits. The backend short-ID migrations must be deployed.

## Daily and weekly LMS calendar

Since 1.2.0, an existing authenticated SDK instance loads a complete local day in
one request. Requires `lms:classroom:read` and an LMS deployment with the calendar
endpoint. Existing visibility rules apply; no separate Profile/report permission
or enrichment request is needed.

```ts
const controller = new AbortController();
const response = await sdk.lms.classroomCalendar({
  date: '2026-10-25',
  timezone: 'Asia/Tehran',
}, { signal: controller.signal });
const { sessions, summary, type_counts } = response.data.data;
```

For a week, replace `date` with `from: '2026-10-25T00:00:00+03:30'` and
`to: '2026-11-01T00:00:00+03:30'`. The end is exclusive; complete ranges may
span 1–7 local days. All results are returned without pagination. Multiple teacher
and type filters are arrays. Type counts ignore selected type filters, while
summary metrics describe returned sessions. Preserve zero student counts and
format timestamp instants using the requested timezone. The call preserves the
full Axios response, cancellation and errors. See the
[@faiber/faiber-lms guide](https://www.npmjs.com/package/@faiber/faiber-lms)
for the complete field, filtering and null semantics and weekly examples.

### Profile and identity visibility rules

Use `sdk.idp.visibility.catalog()`, `.rules(roleId)` and `.save(roleId, { revision, grants })`
to configure dynamic target-role scopes. These methods require `idp:visibility:assign`.
Use `.resolve({ action: 'profile:list' })` to inspect the authenticated caller's
current scope. List, detail, mutation, password and role-assignment grants remain
independent. See the [IDP package guide](packages/idp/README.md#dynamic-profile-and-identity-scopes)
for revision conflicts, assignment ceilings and cancellation. This capability
requires the matching IDP/Profile visibility-rules backend release.

With no saved document (revision 0), existing active permissions keep unrestricted
target access. Saving a document enables explicit rules; saving an empty document
denies its scoped actions. Grants from other roles and direct permissions remain
additive. Catalog role choices include every current IDP role, including custom
roles. Services choose `legacy_action` for their actual route; clients cannot use
a student-list permission to authorize unrelated list routes.
