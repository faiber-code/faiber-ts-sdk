# Changelog

## 1.1.0 — 2026-10-24

- Add deterministic six-character classroom and profile short IDs derived from existing UUIDs. Aliases may collide; canonical UUIDs remain the identifiers for mutations.
- Add `shortIdFromUuid`, `lms.searchClassrooms`, and `profile.searchProfiles`; include aliases in directory and advanced-search types.
- Search classroom/course names and profile email, names, phone, national code, or short ID through authenticated, paginated endpoints.
- Correct the minimal people-search response envelope and retain the existing profile-summary and classroom-count capabilities.
- Include the pending SDK changes on top of the published 1.0.0 release.

## 1.0.0 — unreleased integration candidate

This source version is pending full service, permission, workflow and consumer
acceptance. This integration candidate has not been published by this task.

- Align public request and response models with the selected backend handlers, including
  required/nullable fields, tagged unions, pagination, mutation receipts, and media responses.
- Preserve reviewed wire metadata when adding operation documentation. Recognize qualified
  Rust query extractors and serialize Rust unit responses as JSON null in generated types.
- Let REST resources declare service-specific delete responses. Infer audio Blob content
  types and use the fetch adapter for reviewed browser event streams while retaining
  per-request adapter overrides.
- Correct consumer guidance for Profile null updates and server-side confidential login.
  Source review, native runtime evidence, and deployed compatibility remain distinct.
- Match Version's required nullable response keys and distinct history shape, preserve
  required success-envelope fields and restrict slug/UUID inputs to strings.
- Select the tested Session source repair disabling compile-time development identity
  fallback, and document the actual peer status, configuration and permission boundaries.
- Preserve tracked shared Rust dependencies in immutable discovery/source snapshots.
  The incoming four-domain Summary source handoff is independently verified and remains
  pending composition, mounted HTTP acceptance and canonical integration.
- Follow the actual mounted router graphs for all19 SDK HTTP service inventories.
  Add explicit dynamic-method Session peer and CRM fallback operations and named State
  process health. Preserve wildcard separators while rejecting traversal/ambiguous escapes.
  Session uses the current notification-state source and root `/integration/flow`.
- Preserve source-reviewed Asset, IDP, Modules, Payment, Profile and LMS mounts.
  OIDC discovery and `/oauth2/*` use the service root; secure single-use token
  generation requires its target user UUID. Preserve nested shop/inventory/public
  routes, the daily-income route, and macro-defined role-list queries/permissions.
- Align Reservation with tested provider capacity/history repairs, expose capacity reports,
  preserve legacy claims while excluding them from public availability, and type
  unit-valued mutation/cancellation receipts as data:null. Cancellation is idempotent.
- Give process health, raw OpenAPI, OIDC discovery/JWKS/user-info/introspection and
  forward-auth their actual named wire shapes. CORS OPTIONS returns an empty body;
  forward-auth carries its principal in response headers.
- The coordinated IDP source candidate requires a server-only identity-project
  service credential for internal one-time-token calls. Host alone no longer
  authorizes issuance/exchange; missing configuration fails closed.
- Role summaries move from LMS to Profile (`sdk.profile.summaries`), using canonical
  role UUIDs and explicit Profile read/configuration permissions. The eight LMS
  summary operation methods and their fixed-role convenience methods are removed.
  Parent status grants no summary access. Existing LMS evaluations remain available.
- Preserve the 0.24.1 personal Chat, notification/contact, delivery and feedback APIs.
- Classroom responses include distinct current `student_count` independently of
  nullable enrollment capacity, with the corrected classroom list envelope.
- Manage conversations bind the current project and user; paged history retains
  cursor headers. Server-bound preferences cannot grant service permissions.
- Require Axios 1.20.0 or later within major1; preserve typed request options for
  actual encoded wire bodies. Update the development brace-expansion dependency.

Deploy the coordinated service contracts before using changed APIs. Summary live
provider/billing/browser acceptance, canonical integration and the remaining
semantic SDK/Manage gates remain release blockers. No agent-memory migration or
Knowledge instruction publication is included in this version declaration.
