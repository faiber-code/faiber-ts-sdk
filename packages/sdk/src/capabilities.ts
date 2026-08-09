import type { ServiceName } from "@faiber/sdk-core";

export type FaiberTransport = "rest" | "multipart" | "websocket" | "udp" | "sandbox-proxy";

/** Machine-readable service guidance intended for humans, IDEs, and coding agents. */
export interface FaiberServiceCapability {
  readonly service: ServiceName;
  readonly title: string;
  readonly description: string;
  readonly aiGuidance: string;
  readonly transports: readonly FaiberTransport[];
  readonly operationCount: number;
  readonly environmentVariable: string;
  readonly auth: string;
}

/**
 * Complete sandbox service catalog. Agents should choose the narrow typed facade property first,
 * then `sdk.<service>.operations` for generated route-complete APIs. The internal sandbox
 * management gateway is intentionally not part of the public SDK contract.
 */
export const FAIBER_SERVICE_CAPABILITIES = [
  { service: "idp", title: "Identity", description: "Authentication, sessions, users, roles, permissions, OAuth, OIDC, and access control.", aiGuidance: "Authenticate and manage identity here; never store credentials in generated project code.", transports: ["rest"], operationCount: 84, environmentVariable: "FAIBER_IDP_URL", auth: "Public bootstrap plus Bearer/cookie and permission-guarded administration." },
  { service: "profile", title: "Profiles", description: "Profiles, typed properties, locations, avatars, surveys, and metadata.", aiGuidance: "Use atomic profile patch inputs and preserve omitted versus null field semantics.", transports: ["rest", "multipart"], operationCount: 121, environmentVariable: "FAIBER_PROFILE_URL", auth: "IDP Bearer token or secure session cookie." },
  { service: "modules", title: "Content and commerce", description: "Products, posts, pages, taxonomy, SEO, media, inventory, orders, comments, reactions, and authors.", aiGuidance: "Prefer the curated resource APIs; use operations for capability-specific routes and exact queries.", transports: ["rest", "multipart"], operationCount: 146, environmentVariable: "FAIBER_MODULES_URL", auth: "IDP Bearer token or secure session cookie; write routes may require permissions." },
  { service: "asset", title: "Assets and billing", description: "Wallets, balances, plans, subscriptions, ranks, ledger, AI usage plans, and sandbox billing.", aiGuidance: "Treat financial responses as authoritative and use idempotent backend flows for mutations.", transports: ["rest"], operationCount: 70, environmentVariable: "FAIBER_ASSET_URL", auth: "IDP Bearer token or secure session cookie; admin routes declare permissions." },
  { service: "payment", title: "Payments", description: "Gateways, payment creation, verification, callbacks, and transactions.", aiGuidance: "Do not infer payment success; use verification and returned transaction status.", transports: ["rest"], operationCount: 23, environmentVariable: "FAIBER_PAYMENT_URL", auth: "Public callbacks where defined; otherwise IDP session and permissions." },
  { service: "messenger", title: "Messaging delivery", description: "Notifications, templates, channels, providers, and delivery state.", aiGuidance: "Use templates for reusable communication and never embed provider secrets client-side.", transports: ["rest"], operationCount: 30, environmentVariable: "FAIBER_MESSENGER_URL", auth: "IDP session; administrative operations are permission guarded." },
  { service: "crm", title: "CRM", description: "Leads, contacts, teams, pipelines, workflows, reminders, and work logs.", aiGuidance: "Preserve workflow and ownership identifiers; use typed list filters for administrative views.", transports: ["rest"], operationCount: 102, environmentVariable: "FAIBER_CRM_URL", auth: "IDP session with capability-specific CRM permissions." },
  { service: "lms", title: "Learning", description: "Courses, classrooms, enrollment, assessments, certificates, homework, events, and reports.", aiGuidance: "Distinguish learner academy routes from management routes and preserve attempt/session identifiers.", transports: ["rest"], operationCount: 143, environmentVariable: "FAIBER_LMS_URL", auth: "IDP session with learner context or LMS management permissions." },
  { service: "reservation", title: "Reservations", description: "Bookable services, providers, schedules, slots, and reservations.", aiGuidance: "Fetch current availability before booking and handle backend conflicts as expected contention.", transports: ["rest"], operationCount: 29, environmentVariable: "FAIBER_RESERVATION_URL", auth: "IDP Bearer token or secure session cookie." },
  { service: "session", title: "Live sessions", description: "Live rooms, access tokens, playback, recordings, and analytics.", aiGuidance: "Request short-lived room access from the service; never synthesize media access tokens.", transports: ["rest"], operationCount: 18, environmentVariable: "FAIBER_SESSION_URL", auth: "IDP session with room permissions for management operations." },
  { service: "version", title: "Service versions", description: "Service registry, current releases, and release history.", aiGuidance: "Use this service to inspect platform compatibility; do not hardcode deployment versions.", transports: ["rest"], operationCount: 5, environmentVariable: "FAIBER_VERSION_URL", auth: "Public or deployment-defined IDP session." },
  { service: "flow", title: "Automation", description: "Automations, triggers, actions, validation, imports, runs, and execution history.", aiGuidance: "Validate flows before execution and use run identifiers to inspect asynchronous outcomes.", transports: ["rest"], operationCount: 18, environmentVariable: "FAIBER_FLOW_URL", auth: "IDP Bearer token or secure session cookie." },
  { service: "knowledge", title: "Knowledge", description: "Knowledge bases, groups, items, graph edges, chat bindings, rules, runtime resolution, and actions.", aiGuidance: "Use runtime endpoints for published knowledge and management endpoints for authoring.", transports: ["rest"], operationCount: 33, environmentVariable: "FAIBER_KNOWLEDGE_URL", auth: "IDP session with read/write/publish/runtime permissions." },
  { service: "chat", title: "Chat", description: "Direct, group, channel, assistant and AI conversations, messages, members, reactions, and read state.", aiGuidance: "Use server thread/message identifiers and the service's streaming/realtime contract where exposed.", transports: ["rest"], operationCount: 25, environmentVariable: "FAIBER_CHAT_URL", auth: "IDP session with chat read/write/manage/AI permissions." },
  { service: "social", title: "Social", description: "Feeds, posts, comments, reactions, bookmarks, reports, analytics, and moderation.", aiGuidance: "Use self-service routes for a user's content and moderation routes only with explicit permissions.", transports: ["rest", "multipart"], operationCount: 44, environmentVariable: "FAIBER_SOCIAL_URL", auth: "IDP session with social write or moderation permissions." },
  { service: "state", title: "Realtime state", description: "Worlds, rooms, authoritative state, WebSocket/UDP replication, prediction, and WASM simulation.", aiGuidance: "Create/join through REST, then use the returned short-lived ticket with StateRealtimeClient.", transports: ["rest", "websocket", "udp"], operationCount: 14, environmentVariable: "FAIBER_STATE_URL", auth: "IDP session for REST; signed join ticket for realtime transports." },
  { service: "drm", title: "Digital media", description: "Audio/video folders, tags, searchable media metadata, uploads, and signed playback.", aiGuidance: "Upload with multipart data and request signed playback URLs only when needed; URLs expire.", transports: ["rest", "multipart"], operationCount: 15, environmentVariable: "FAIBER_DRM_URL", auth: "Sandbox/IDP deployment policy; playback URLs are short lived." },
] as const satisfies readonly FaiberServiceCapability[];

export const FAIBER_CAPABILITY_BY_SERVICE: Readonly<Record<ServiceName, FaiberServiceCapability>> =
  Object.fromEntries(FAIBER_SERVICE_CAPABILITIES.map(capability => [capability.service, capability])) as unknown as Record<ServiceName, FaiberServiceCapability>;

/** Returns machine-readable usage guidance for one service or the complete platform catalog. */
export function describeFaiber(service?: ServiceName): FaiberServiceCapability | readonly FaiberServiceCapability[] {
  return service ? FAIBER_CAPABILITY_BY_SERVICE[service] : FAIBER_SERVICE_CAPABILITIES;
}
