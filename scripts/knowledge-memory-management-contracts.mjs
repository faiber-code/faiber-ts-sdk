// Source-reviewed canonical v1 projections. Native/packed evidence is required
// before promoting the candidate source pin; this file is not proof by itself.
const read='knowledge:memory:read; current organization/subject predicates on every read';
const ownerWrite='current authenticated subject owner OR scoped knowledge:memory:write; captured expected_revision and current policy rules';
const ownerDelete='current authenticated subject owner OR scoped knowledge:memory:delete; common transactional scope fence/audit';
export const knowledgeMemoryManagementContracts={
 'knowledge:GET /api/v1/memory-subjects':{
  methodName:'platformListMemorySubjectsGet',typeBase:'PlatformListMemorySubjectsGet',
  query:'import("./types.js").MemorySubjectQuery',response:'import("./types.js").MemorySubjectListResponse',
  auth:read,purpose:'List bounded current subjects with literal profile/identity search, type/status/enabled filters and stable pagination. Return separate nullable overrides, effective policy, actual counts, server capabilities and captured revision; only the bounded Profile identity allowlist is returned.'
 },
 'knowledge:GET /api/v1/memory-subjects/{id}':{
  methodName:'platformMemorySubjectGet',typeBase:'PlatformMemorySubjectGet',
  response:'import("./types.js").MemorySubjectResponse',auth:read,
  purpose:'Read one currently authorized subject by ID. Foreign and absent tenant records return404; response separates raw nullable overrides from effective policy and provides the reviewed policy revision.'
 },
 'knowledge:GET /api/v1/memory-subjects/{id}/memories':{
  methodName:'platformListMemoriesGet',typeBase:'PlatformListMemoriesGet',
  query:'import("./types.js").MemoryRecordQuery',response:'import("./types.js").MemoryRecordListResponse',auth:read,
  purpose:'Read1–200 atomic records with allowlisted type/lifecycle filters and deterministic pages. Expired/forgotten content is redacted. Text, JSON fact values and provenance references are bounded; no embedding/raw metadata payload is exposed.'
 },
 'knowledge:GET /api/v1/memory-subjects/{subject_id}/memories/{memory_id}':{
  methodName:'platformMemoryRecordGet',typeBase:'PlatformMemoryRecordGet',
  response:'import("./types.js").MemoryRecordResponse',auth:read,
  purpose:'Read one memory using organization AND subject AND memory predicates. Forgotten/expired record text, fact values, confidence and evidence are redacted, including a forgotten parent subject.'
 },
 'knowledge:GET /api/v1/memory-subjects/{id}/audit-events':{
  methodName:'platformMemoryAuditGet',typeBase:'PlatformMemoryAuditGet',
  query:'import("./types.js").MemoryAuditQuery',response:'import("./types.js").MemoryAuditListResponse',auth:read,
  purpose:'Read paginated authorized audit identifiers/actions/actors/dates. Retained before/after payloads and free-text reasons are excluded to prevent forgotten content reappearing through audit.'
 },
 'knowledge:POST /api/v1/memory-subjects/{id}/corrections':{
  methodName:'platformCorrectMemoryPost',typeBase:'PlatformCorrectMemoryPost',
  input:'import("./types.js").MemoryCorrectionInput',response:'import("./types.js").MemoryCorrectionResponse',
  auth:'knowledge:memory:write AND current authenticated subject owner; active permitted long memory policy',
  purpose:'Apply an explicit correction UUID with1–32 reviewed active target IDs, an8192-byte statement and500-byte reason. Complete conflict-set CAS, immutable replay receipt and evidence/audit share one transaction;409 must never be automatically rebased.'
 },
 'knowledge:PUT /api/v1/memory-subjects/{id}/policy':{
  methodName:'platformSetMemoryOverridePut',typeBase:'PlatformSetMemoryOverridePut',
  input:'import("./types.js").MemoryOverrideInput',response:'import("./types.js").MemorySubjectResponse',
  auth:ownerWrite,purpose:'Set nullable personal overrides using a captured revision. Null/missing values reset under PUT semantics. Policy/override/epoch change makes the revision stale;409 commits no state or audit. Response is a safe current subject projection. Assistant disabled lanes are hard ceilings even when the legacy widening flag is true.'
 },
 'knowledge:DELETE /api/v1/memory-subjects/{id}':{
  methodName:'platformClearMemorySubjectDelete',typeBase:'PlatformClearMemorySubjectDelete',
  query:'import("./types.js").MemoryClearQuery',response:'void',auth:ownerDelete,
  purpose:'Atomically fence selected short/long or full subject scope and update current records/counters/audit.204 confirms commit. Original Chat conversations and retained physical copies remain separate service-owned actions.'
 },
 'knowledge:DELETE /api/v1/memory-subjects/{subject_id}/memories/{memory_id}':{
  methodName:'platformForgetMemoryDelete',typeBase:'PlatformForgetMemoryDelete',
  query:'import("./types.js").MemoryClearQuery',response:'void',
  auth:'current authenticated subject owner OR scoped knowledge:memory:delete',
  purpose:'Forget one authorized retained memory row atomically with counters/audit. This does not certify source-family tombstones or erasure of associated conversation projections.'
 },
 'knowledge:POST /api/v1/sources/{id}/pause':{
  methodName:'platformPauseSourcePost',typeBase:'PlatformPauseSourcePost',
  input:'import("./types.js").SourceStateInput',response:'import("./types.js").KnowledgeSourceResponse',auth:'knowledge:write',
  purpose:'Set desired active/paused state under captured expected_version in a locked tenant/base/source transaction. Stale409 never reverses concurrent intent; current already-desired state is unchanged. Mutation and audit roll back together.'
 }
};

Object.assign(knowledgeMemoryManagementContracts,{
 'knowledge:GET /api/v1/runtime/assistants/{assistant_id}/configure':{
  response:'import("./types.js").AssistantPolicySnapshotResponse',auth:'knowledge:write; current tenant',
  purpose:'Capture the current assistant policy revision at edit time. Zero denotes absent policy. Never fetch a fresh revision to rebase a stale submission.'
 },
 'knowledge:PUT /api/v1/runtime/assistants/{assistant_id}/configure':{
  input:'import("./types.js").AssistantConfigurationInput',response:'import("./types.js").AssistantConfigurationResponse',auth:'knowledge:write; current tenant and immutable operation actor',
  purpose:'Apply a non-nil configuration UUID with the captured policy revision. Policy, history, bindings, epochs, audit and exact operation outcome share one transaction. Identical original-actor replay returns the immutable result without duplicate epoch changes; cancelled or changed requests conflict.'
 },
 'knowledge:GET /api/v1/runtime/assistants/{assistant_id}/configuration-operations/{operation_id}':{
  response:'import("./types.js").AssistantConfigurationOperationResponse',auth:'knowledge:write; current tenant and assistant',
  purpose:'Read authoritative applied/cancelled operation outcome after waiting for concurrent configuration writers. Absence is404, never inferred success.'
 },
 'knowledge:POST /api/v1/runtime/assistants/{assistant_id}/configuration-operations/{operation_id}':{
  input:'import("./types.js").AssistantConfigurationCancellation',response:'import("./types.js").AssistantConfigurationOperationResponse',auth:'knowledge:write; current authorized administration',
  purpose:'Write an immutable cancellation tombstone with a bounded reason before releasing a pending Chat fence. Delayed original delivery conflicts. Applied configurations require recovery and cannot be cancelled as absent.'
 },
 'chat:GET /api/v1/admin/assistants/{id}':{
  response:'import("./types.js").ManagedAssistantDetailResponse',auth:'assistant:manage; current tenant',
  purpose:'Read a managed assistant and capture its Chat version and Knowledge policy revision when opening a draft. Knowledge outage fails the snapshot instead of inventing a revision.'
 },
 'chat:GET /api/v1/admin/assistant-policy-operations/{id}':{
  response:'import("./types.js").AssistantConfigurationIntentResponse',auth:'assistant:manage; current tenant',
  purpose:'Inspect retained exact configuration intent and pending/applied/cancelled status. No stored access grants or credentials are returned.'
 },
 'chat:POST /api/v1/admin/assistant-policy-operations/{id}':{
  input:'import("./types.js").AssistantPolicyReconciliationInput',response:'import("./types.js").AssistantPolicyReconciliationResponse',auth:'assistant:manage; current tenant and settings guard',
  purpose:'Recover using the authoritative exact Knowledge outcome, or explicitly cancel an undispatched operation with a remote tombstone. Current authorization is required after restart; never impersonate a revoked actor or rebase captured revisions.'
 }
});
