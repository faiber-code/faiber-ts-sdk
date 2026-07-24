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
| `@faiber/faiber-lms` | Courses, classrooms, enrollment, assessments, certificates, homework, events and reports |
| `@faiber/faiber-reservation` | Services, providers, schedules, available slots and reservations |
| `@faiber/faiber-session` | Live rooms, access tokens, playback, recordings and analytics |
| `@faiber/faiber-version` | Service registry and release history |
| `@faiber/faiber-flow` | Automations, triggers, actions, validation, runs and execution history |
| `@faiber/faiber-knowledge` | Knowledge bases, groups, items, graph edges, chat bindings, rules, runtime resolution and actions |
| `@faiber/faiber-chat` | Direct, group, channel and AI conversations, messages, members, reactions, read state and realtime events |
| `@faiber/faiber-state-sdk` | Game worlds, rooms, authoritative state, realtime replication, prediction and server-side simulation |
| `@faiber/faiber-game-sdk` | Portable TypeScript/WebAssembly ECS, adaptive 2D/3D rendering and cross-platform game runtime |
| `@faiber/faiber-ts-sdk` | One facade containing every package above |

## Install and initialize

```bash
npm install @faiber/faiber-ts-sdk
```

```ts
import { FaiberSDK, MemoryTokenProvider, domainsFromEnv } from "@faiber/faiber-ts-sdk";

const tokenProvider = new MemoryTokenProvider();
const sdk = new FaiberSDK({
  domains: domainsFromEnv(import.meta.env),
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

Login forms are sent as `application/x-www-form-urlencoded`. Cookie deployments can omit the token provider and use `withCredentials: true`; Bearer deployments provide a token provider. The SDK never reads global storage or embeds credentials.

For browser applications, prefer secure `HttpOnly`, `SameSite` cookies or an in-memory token provider. `StorageTokenProvider` is available only for applications that explicitly accept that Web Storage is readable by JavaScript and can expose tokens during an XSS incident. Server applications can implement `TokenProvider` against their request/session context.

Automatic refresh is opt-in through `refreshAuth`. Concurrent `401` responses share one refresh request, retries obtain the replacement token, and a failed refresh clears stale credentials.

## Complete route coverage

Every service exposes curated convenience APIs plus `sdk.<service>.operations`, generated from mounted Rust routes. Generated methods preserve the HTTP verb, path identifiers, query shape, body shape, response envelope, form/multipart transport, and declared permission. REST convenience resources are capability guarded, so an unsupported operation fails locally instead of producing a backend `405`.

```ts
await sdk.profile.updateProfile(profileId, {
  first_name: { en: "Ava", fa: "آوا" },
  properties: {
    weight: 68.5,
    training_goal: "muscle_gain",
    workout_plan: weeklyPlan,
    workout_stats: stats,
  },
});
```

The profile call above sends one atomic `PATCH /api/v1/profile/{uuid}`. Omitted fields remain unchanged and nullable fields can be cleared with `null`.

## Pagination, filtering, and search

List methods preserve each backend's typed query contract, including page number/size, cursor, server search, sort, and domain-specific filters. Generated operation query types retain nested keys such as `page[number]` and `page[size]` where the service expects them. Pagination metadata remains in the original API response envelope.

## Domains and environment configuration

`domainsFromEnv` reads a plain object such as `import.meta.env` or `process.env`. Supported keys are `FAIBER_IDP_URL`, `FAIBER_PROFILE_URL`, `FAIBER_MODULES_URL`, `FAIBER_SOCIAL_URL`, `FAIBER_ASSET_URL`, `FAIBER_PAYMENT_URL`, `FAIBER_MESSENGER_URL`, `FAIBER_CRM_URL`, `FAIBER_LMS_URL`, `FAIBER_RESERVATION_URL`, `FAIBER_SESSION_URL`, `FAIBER_VERSION_URL`, `FAIBER_FLOW_URL`, `FAIBER_KNOWLEDGE_URL`, and `FAIBER_CHAT_URL`. Applications may instead pass `domains` directly or a shared `defaultDomain` gateway. Absolute request URLs are rejected unless explicitly enabled.

## Inputs, outputs, errors, and cancellation

Packages export named request, query, entity, response-envelope, and generated operation types. SDK calls return full Axios responses and do not unwrap, cache, or mutate data. Axios errors retain status, response body, headers, and request IDs. Every call supports request headers, timeout, interceptors, adapters, and `AbortSignal` cancellation.

## Uploads and media

Uploads use standards-compatible `FormData` through `multipart(...)`; URL-encoded forms use `urlEncoded(...)`. Media methods return the backend's media identifier, key, URL, or binary response without rewriting it, so it can be linked to products, posts, profiles, and other hosted records.

```ts
import { multipart } from "@faiber/faiber-ts-sdk";

await sdk.profile.uploadAvatar(profileId, avatarFile);
await sdk.modules.client.post("/api/v1/media", multipart({
  file,
  alt: "Product front view",
  role: "gallery",
}));
```

Use the typed low-level `sdk.<service>.client` only for application-specific routes that are not part of the public service contract. Absolute request URLs are disabled by default so authorization headers cannot be redirected to another origin.
