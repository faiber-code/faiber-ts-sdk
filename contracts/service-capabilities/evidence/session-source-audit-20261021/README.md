# Session immutable source audit

Revision: `7a395d7149a2d4c03d3e1d4746b69919a52cbb05`. All 45 mounted HTTP operations were reviewed directly from a git archive; the dirty backend worktree was not modified. See source-review.json for operation-level handler/auth/behavior findings and the Session review manifest for model/repository references.

Status is source_only / native pending. Prepared TypeScript/adapter fixtures have not been executed by this audit worker. No Cargo, Docker, native acceptance, build, test, commit or publication was performed. Existing session-peer-source-review-v1.json and session-chat-sdk-69-26 evidence remain independent and unchanged; no expanded gateway/native acceptance is inferred from them.

Corrected SDK contracts: native numeric room status and required capacity/starts_at, timezone-free input datetime, real room and playback envelopes, page_number/page_size list queries, deleted-room snapshot response, absent start body, concrete branding upload fields and raw asset bytes, assistant SQL/tool models and pinned Flow metadata. Source serde enum names are PascalCase; SeaORM string_value database names are not JSON enum values.

Dynamic boundaries: room-state composition and stored DRM manifests are serde_json::Value owned by DRM; analysis is model-produced JSON persisted without schema. Interaction content is arbitrary client JSON (4096-byte limit). Asset receipt is forwarded unchanged and only reservation_id is required by Session. Peer request/query/response remain opaque HTTP transport governed by the selected target service, preserving existing dynamic-method and binary metadata.

Native auth caveats: global auth_extractor_middleware supplies actor context. Macro declarations are permission metadata and local checks vary; gateway enforcement needs native/deployed verification. Assistant own/all checks, branding non-nil actor/config checks, trusted LMS token, signed LiveKit webhook and native summary current-IDP Bearer checks were reviewed separately. Do not interpret absent local permission checks as evidence of gateway acceptance.

Prepared fixtures: tests/session-source-wire.test.mjs, tests/session-source-wire.types.ts and tests/fixtures/session-source-operation-matrix.json. Parent integration must merge reviewed overrides, regenerate operations, include the type fixture, build and run these fixtures before claiming compiled SDK verification. Source review checksums use the existing immutable operation inventory hashes, not file-only hashes.
