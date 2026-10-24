# Chat source audit — 2026-10-21

Selected immutable revision: `03dd17ad3a1f6a36f5b6ad42e8e11729b44ebc55`.
All 69 mounted REST operations are recorded individually in `operations.json` with
handler references, authority, response/encoding corrections and semantics. The
application mounts `routes`, human-chat internals, fitness internals, memory import,
and native observer administration; static dashboard files and the separately
signed Summary MCP protocol are not additional REST SDK operations.

## Concrete mismatch ledger

- Replaced opaque JSON success payloads for conversation CRUD/list, active members,
  messages/history, reactions, assistant catalog/managed records, AI-turn results,
  workspace binding receipts, intake projections, media extraction, runtime-input
  projections and image/speech status with named exported models.
- Corrected convenience member `status` to actual `state`, notification/read fields;
  added every stored conversation field and nullable `agent_slug`. Reaction responses
  now contain reaction identifiers rather than a fabricated message record.
- History always includes attachments and meta `{limit,has_more}`. Ordinary local
  envelopes include `status:'success'` and `meta:null`. Accepted `q` is not applied.
- TTS serde format is lowercase mp3/wav; generated operation returns raw audio bytes.
  Omitted/null backend format is WAV; curated helper explicitly defaults to MP3.
- Raw transcription requires language query and correct audio media type. The keyed
  correction enables Blob MIME inference with caller-header override; byte bodies
  require explicit matching audio Content-Type. No multipart conversion occurs.
- Added required customer-content query, validated enums and UUID/revision assistant
  inputs; retained explicit null behavior. Speech settings omitted/null overrides
  preserve state, `{}` clears it. Removed invalid 2done-assistants binding slug.
- Generated and curated JSDoc describes backend behavior, exact authorization,
  errors, null/empty responses, ignored filters, limits and server-only credentials.

## Deliberately dynamic JSON

Agentic model/speech catalogs, Knowledge platform catalog data, source import and
parsed model fitness plans pass through unchanged without a local DTO. Intake
extraction checks allowed keys but does not validate value types. Runtime-input
projection keys are fixed, but their schema/UI and other values are copied without
coercion (missing values become null). Conversation rich text/settings/avatar,
message content/metadata, Agentic context and usage remain application/provider JSON.
The named exported types document each case rather than substituting placeholders
for concrete local Rust models. Knowledge outcome receipts are retained raw.

## Source behavior and missing evidence

The active/managed assistant list repositories and active assistant lookup lack
organization predicates; this is an observed backend scope behavior, not a claim
that the SDK provides isolation. Managed detail does check organization. The SDK
continues through FaiberClient for Bearer/cookie authority; native observer policy
requires freshly checked IDP Bearer authority. Fitness, Task imports and LMS
notification context have distinct server-only secrets. Cookie mutations require
an allowed Origin. Guest tokens only enable a restricted AI conversation route set.

Native source tests were inspected, not executed. Their presence does not prove the
selected revision's runtime behavior. Native acceptance, deployment/gateway scope,
and integrated compiled SDK tests remain pending. No Cargo, Docker, production or
publication command ran in this audit. Focused tests are staged for the parent's
post-integration checks: `tests/chat-source-wire.test.mjs` and
`tests/chat-source-wire.types.ts` (add the latter to the shared test tsconfig).
