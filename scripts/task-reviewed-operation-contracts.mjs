// Task b8ed5921 direct source review. Native/deployed acceptance remains pending.
export const taskReviewedOperationContracts = {
  "task:GET /api/v1/internal/plans/gifts": {
    "purpose": "List. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").ManagedTrialGiftPage>"
  },
  "task:POST /api/v1/internal/plans/gifts": {
    "purpose": "Create. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").ManagedTrialGift>"
  },
  "task:GET /api/v1/internal/plans/gifts/{id}": {
    "purpose": "Show. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").ManagedTrialGift>"
  },
  "task:PUT /api/v1/internal/plans/gifts/{id}": {
    "purpose": "Update. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").ManagedTrialGift>"
  },
  "task:POST /api/v1/internal/plans/memory-reservations": {
    "purpose": "Reserve internal. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").MemoryReservation>"
  },
  "task:POST /api/v1/internal/plans/memory-reservations/{id}": {
    "purpose": "Settle internal. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").MemorySettlement>"
  },
  "task:POST /api/v1/internal/plans/reservations": {
    "purpose": "Reserve. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").UsageReservation>"
  },
  "task:POST /api/v1/internal/plans/reservations/{id}": {
    "purpose": "Finish. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").FinishedUsageReservation>"
  },
  "task:GET /health/live": {
    "purpose": "Live. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "No local identity extractor; deployment ingress policy is separate. Shared FaiberClient still forwards configured credentials"
  },
  "task:GET /health/ready": {
    "purpose": "Ready. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "No local identity extractor; deployment ingress policy is separate. Shared FaiberClient still forwards configured credentials",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").Readiness>"
  },
  "task:GET /health/dependencies": {
    "purpose": "Ready. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "No local identity extractor; deployment ingress policy is separate. Shared FaiberClient still forwards configured credentials",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").Readiness>"
  },
  "task:GET /metrics": {
    "purpose": "Metrics.",
    "auth": "No local identity extractor; deployment ingress policy is separate. Shared FaiberClient still forwards configured credentials",
    "response": "string",
    "textResponse": true
  },
  "task:GET /api/openapi.json": {
    "purpose": "Openapi.",
    "auth": "No local identity extractor; deployment ingress policy is separate. Shared FaiberClient still forwards configured credentials",
    "response": "import(\"@faiber/sdk-core\").ServiceOpenApiDocument"
  },
  "task:POST /api/v1/guest-links/use": {
    "purpose": "Use guest link. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Guest token in body; no IDP identity extractor. Expiry, active link and sandbox are checked by repository",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").GuestLinkAccess>"
  },
  "task:GET /api/v1/feedback/capabilities": {
    "purpose": "Capabilities. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "IDP route policy task:feedback:submit; handler-specific local scope; verified Bearer/cookie identity through FaiberClient; source checks workspace.manage"
  },
  "task:GET /api/v1/feedback/policy": {
    "purpose": "Get policy. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:PUT /api/v1/feedback/policy": {
    "purpose": "Put policy. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:GET /api/v1/feedback/requests": {
    "purpose": "Index. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "IDP route policy task:feedback:self:read; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:POST /api/v1/feedback/requests": {
    "purpose": "Create. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "IDP route policy task:feedback:submit; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:GET /api/v1/feedback/requests/{id}": {
    "purpose": "Show. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants"
  },
  "task:POST /api/v1/feedback/requests/{id}/decisions": {
    "purpose": "Decision. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants"
  },
  "task:GET /api/v1/feedback/requests/{id}/attachments/{attachment}/content": {
    "purpose": "Content. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "binaryDownload": true
  },
  "task:POST /api/v1/feedback/attachments": {
    "purpose": "Initialize. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "IDP route policy task:feedback:submit; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:PUT /api/v1/feedback/attachments/{id}/content": {
    "purpose": "Upload. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "binaryContentType": "blob"
  },
  "task:POST /api/v1/feedback/attachments/{id}/complete": {
    "purpose": "Complete. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants"
  },
  "task:GET /api/v1/feedback/assignees": {
    "purpose": "Assignees. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.",
    "auth": "IDP route policy task:feedback:assign; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:GET /api/v1/collaboration/config": {
    "purpose": "Config. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:GET /api/v1/plans": {
    "purpose": "Get. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").PlanAccount>"
  },
  "task:GET /api/v1/memory-usage": {
    "purpose": "Own. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:GET /api/v1/plans/memory-limits": {
    "purpose": "Catalog. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:PUT /api/v1/plans/admin/memory-limits": {
    "purpose": "Configure. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:GET /api/v1/plans/admin/users": {
    "purpose": "Users. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").AdminUserPlansData>",
    "requiredQuery": true
  },
  "task:GET /api/v1/plans/admin/income": {
    "purpose": "Income. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").IncomeReportData>",
    "requiredQuery": true
  },
  "task:POST /api/v1/plans/gift": {
    "purpose": "Redeem. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").PlanRedeemed>"
  },
  "task:POST /api/v1/plans/gift-tokens": {
    "purpose": "Gift. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").PlanGiftToken>"
  },
  "task:POST /api/v1/plans/checkout": {
    "purpose": "Checkout. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").PlanCheckoutResult>"
  },
  "task:POST /api/v1/plans/orders/{id}/reconcile": {
    "purpose": "Reconcile. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").PlanReconcile>"
  },
  "task:GET /api/v1/notes/{id}/document": {
    "purpose": "Document. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").NoteDocument>"
  },
  "task:POST /api/v1/notes/{id}/document": {
    "purpose": "Update. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").NoteDocument>",
    "input": "import(\"./wire.types.js\").SaveNoteDocument"
  },
  "task:GET /api/v1/notes/{id}/media": {
    "purpose": "Get. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants"
  },
  "task:POST /api/v1/notes/{id}/media": {
    "purpose": "Add. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read, work_item.update"
  },
  "task:DELETE /api/v1/notes/{id}/media/{attachment}": {
    "purpose": "Remove. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read, work_item.update"
  },
  "task:PUT /api/v1/notes/{id}/cover": {
    "purpose": "Cover. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read, work_item.update"
  },
  "task:GET /api/v1/notes/{id}/realtime/config": {
    "purpose": "Config. Returns the Task status/message/data envelope with the full Axios status and headers. Reads note-scoped Sockudo configuration; 503 when required realtime configuration is absent.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks note.updated",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").NoteRealtimeConfig>"
  },
  "task:POST /api/v1/notes/{id}/realtime/auth": {
    "purpose": "Authorize. Raw {auth} signature for the exact private-note channel and numeric/dot socket ID after note-read access; no Task envelope, WebSocket, or credential in query.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "response": "import(\"./wire.types.js\").NoteRealtimeAuthorization"
  },
  "task:GET /api/v1/notes/data/catalog": {
    "purpose": "Catalog. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").NoteDataCatalog>",
    "query": "import(\"./wire.types.js\").NoteDataCatalogQuery"
  },
  "task:POST /api/v1/assistant/query": {
    "purpose": "Query. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient; source checks project.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./workspace.js\").WorkspaceQueryResult>",
    "input": "import(\"./workspace.js\").WorkspaceQuery"
  },
  "task:GET /api/v1/planning-preferences": {
    "purpose": "Preferences. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./workspace.js\").PlanningPreferencesResult>"
  },
  "task:PUT /api/v1/planning-preferences": {
    "purpose": "Save preferences. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./workspace.js\").PlanningPreferencesResult>",
    "input": "import(\"./workspace.js\").PlanningPreferences"
  },
  "task:GET /api/v1/note-folders": {
    "purpose": "Folders. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient; source checks project.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./workspace.js\").NoteFolder[]>",
    "requiredQuery": true
  },
  "task:POST /api/v1/review-proposals": {
    "purpose": "Propose. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./workspace.js\").ReviewProposal>",
    "input": "import(\"./workspace.js\").ReviewProposalInput"
  },
  "task:POST /api/v1/review-proposals/validate": {
    "purpose": "Validate proposal. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./workspace.js\").ReviewPreviewResult>",
    "input": "import(\"./workspace.js\").ReviewProposalInput"
  },
  "task:GET /api/v1/review-proposals/{id}": {
    "purpose": "Get. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read, work_item.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./workspace.js\").ReviewProposal>"
  },
  "task:PUT /api/v1/review-proposals/{id}": {
    "purpose": "Revise. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "response": "import(\"./types.js\").TaskResponse<import(\"./workspace.js\").ReviewProposal>",
    "input": "import(\"./workspace.js\").ReviewProposalInput"
  },
  "task:POST /api/v1/review-proposals/{id}/apply": {
    "purpose": "Apply. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "response": "import(\"./types.js\").TaskResponse<import(\"./workspace.js\").ReviewProposal>"
  },
  "task:POST /api/v1/review-proposals/{id}/refresh": {
    "purpose": "Refresh. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "response": "import(\"./types.js\").TaskResponse<import(\"./workspace.js\").ReviewProposal>"
  },
  "task:GET /api/v1/workspace": {
    "purpose": "Workspace. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local project.read; verified Bearer/cookie identity through FaiberClient"
  },
  "task:POST /api/v1/notes/knowledge/search": {
    "purpose": "Search. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local work_item.read; verified Bearer/cookie identity through FaiberClient; source checks project.read, work_item.read"
  },
  "task:POST /api/v1/notes/{id}/imports": {
    "purpose": "Create. Returns the Task status/message/data envelope with the full Axios status and headers. Feature flags may return 404. Jobs are actor-owned and note edit access is rechecked; extraction creates a preview and requires explicit apply.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read"
  },
  "task:POST /api/v1/notes/{id}/source-imports": {
    "purpose": "Create. Returns the Task status/message/data envelope with the full Axios status and headers. Feature flags may return 404. Jobs are actor-owned and note edit access is rechecked; extraction creates a preview and requires explicit apply.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read"
  },
  "task:GET /api/v1/note-imports/{id}": {
    "purpose": "Get. Returns the Task status/message/data envelope with the full Axios status and headers. Feature flags may return 404. Jobs are actor-owned and note edit access is rechecked; extraction creates a preview and requires explicit apply.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants"
  },
  "task:POST /api/v1/note-imports/{id}": {
    "purpose": "Control. Returns the Task status/message/data envelope with the full Axios status and headers. Feature flags may return 404. Jobs are actor-owned and note edit access is rechecked; extraction creates a preview and requires explicit apply.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read"
  },
  "task:POST /api/v1/note-imports/{id}/apply": {
    "purpose": "Apply. Returns the Task status/message/data envelope with the full Axios status and headers. Feature flags may return 404. Jobs are actor-owned and note edit access is rechecked; extraction creates a preview and requires explicit apply.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.assign, work_item.read, work_item.update"
  },
  "task:GET /api/v1/notes/{id}/indexing": {
    "purpose": "Status. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read"
  },
  "task:POST /api/v1/notes/{id}/indexing": {
    "purpose": "Retry. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read, work_item.update",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteIndexing>"
  },
  "task:GET /api/v1/notification-preferences": {
    "purpose": "Get preferences. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").NotificationPreferences>"
  },
  "task:PUT /api/v1/notification-preferences": {
    "purpose": "Put preferences. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").NotificationPreferences>"
  },
  "task:GET /api/v1/work-items/{id}/reminder": {
    "purpose": "Get. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").Reminder | null>"
  },
  "task:PUT /api/v1/work-items/{id}/reminder": {
    "purpose": "Put. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").Reminder>",
    "input": "import(\"./types.js\").ReminderInput"
  },
  "task:DELETE /api/v1/work-items/{id}/reminder": {
    "purpose": "Remove. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").RemovalResult>"
  },
  "task:GET /api/v1/projects/{id}/checklists": {
    "purpose": "Project checklists. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").ChecklistSnapshot[]>"
  },
  "task:GET /api/v1/work-items/{id}/checklist": {
    "purpose": "Work item checklist. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").ChecklistSnapshot>"
  },
  "task:PUT /api/v1/work-items/{id}/checklist": {
    "purpose": "Replace checklist. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read, work_item.read, work_item.update",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").ChecklistResult>"
  },
  "task:GET /api/v1/projects/{id}/members": {
    "purpose": "Members. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").ProjectMember[]>"
  },
  "task:DELETE /api/v1/projects/{id}/members/{user_id}": {
    "purpose": "Remove member. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.members.manage",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").RemovalResult>"
  },
  "task:GET /api/v1/access/effective": {
    "purpose": "Effective access. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:GET /api/v1/projects": {
    "purpose": "List projects. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local project.read; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskPageResponse<import(\"./types.js\").Project>"
  },
  "task:POST /api/v1/projects": {
    "purpose": "Create project. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "IDP route policy task:access:use; local project.create; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").Project>",
    "input": "import(\"./types.js\").CreateProjectInput"
  },
  "task:POST /api/v1/projects/personal": {
    "purpose": "Ensure personal project. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:POST /api/v1/projects/shared": {
    "purpose": "Create shared project. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient"
  },
  "task:GET /api/v1/projects/{id}": {
    "purpose": "Get project. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").Project>"
  },
  "task:PATCH /api/v1/projects/{id}": {
    "purpose": "Update project. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.update",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").Project>",
    "input": "import(\"./types.js\").UpdateProjectInput"
  },
  "task:GET /api/v1/projects/{id}/workflow": {
    "purpose": "Workflow states. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read"
  },
  "task:GET /api/v1/projects/{id}/board-workflow": {
    "purpose": "Get. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read"
  },
  "task:PUT /api/v1/projects/{id}/board-workflow": {
    "purpose": "Put. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.members.manage, work_item.rank, work_item.transition"
  },
  "task:GET /api/v1/projects/{id}/memory-usage": {
    "purpose": "Get. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read"
  },
  "task:POST /api/v1/work-items/{id}/attachments": {
    "purpose": "Create. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks attachment.create, comment.create, project.read, work_item.update"
  },
  "task:GET /api/v1/attachments/{id}": {
    "purpose": "Status. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read"
  },
  "task:DELETE /api/v1/attachments/{id}": {
    "purpose": "Remove. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks attachment.delete_own, attachment.manage"
  },
  "task:PUT /api/v1/attachments/{id}/content": {
    "purpose": "Content. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks attachment.create"
  },
  "task:GET /api/v1/attachments/{id}/download": {
    "purpose": "Download. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read"
  },
  "task:POST /api/v1/projects/{id}/grants": {
    "purpose": "Grant project access. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.members.manage, workspace.manage",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").GrantProjectAccessResult>"
  },
  "task:GET /api/v1/teams": {
    "purpose": "List teams. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local team.read; verified Bearer/cookie identity through FaiberClient"
  },
  "task:POST /api/v1/teams": {
    "purpose": "Create team. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "IDP route policy task:access:use; local team.manage; verified Bearer/cookie identity through FaiberClient; source checks team.manage, team.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").Team>"
  },
  "task:GET /api/v1/teams/{id}": {
    "purpose": "Get team. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks team.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").Team>"
  },
  "task:PATCH /api/v1/teams/{id}": {
    "purpose": "Update team. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks team.manage, team.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").Team>"
  },
  "task:GET /api/v1/work-items": {
    "purpose": "List work items. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local work_item.read; verified Bearer/cookie identity through FaiberClient",
    "response": "import(\"./types.js\").TaskPageResponse<import(\"./types.js\").WorkItem>"
  },
  "task:POST /api/v1/work-items": {
    "purpose": "Create work item. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "IDP route policy task:access:use; local work_item.create; verified Bearer/cookie identity through FaiberClient; source checks work_item.assign, work_item.create",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").WorkItem>",
    "input": "import(\"./types.js\").CreateWorkItemInput"
  },
  "task:GET /api/v1/work-items/{id}": {
    "purpose": "Get work item. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").WorkItem>"
  },
  "task:PATCH /api/v1/work-items/{id}": {
    "purpose": "Update work item. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.assign, work_item.update",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").WorkItem>",
    "input": "import(\"./types.js\").UpdateWorkItemInput"
  },
  "task:DELETE /api/v1/work-items/{id}": {
    "purpose": "Remove work item. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns HTTP 204 with no response body.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read",
    "response": "import(\"./wire.types.js\").DeletedWorkItemResponse"
  },
  "task:POST /api/v1/work-items/{id}/transition": {
    "purpose": "Transition work item. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.rank, work_item.transition",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").WorkItem>"
  },
  "task:GET /api/v1/work-items/{id}/activity": {
    "purpose": "Work item activity. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").WorkItemActivity[]>"
  },
  "task:GET /api/v1/work-items/{id}/comments/page": {
    "purpose": "Comment page. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read"
  },
  "task:GET /api/v1/work-items/{id}/comments": {
    "purpose": "List comments. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read"
  },
  "task:POST /api/v1/work-items/{id}/comments": {
    "purpose": "Create comment. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks comment.create",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").Comment>"
  },
  "task:GET /api/v1/work-items/{id}/work-logs": {
    "purpose": "List work logs. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read"
  },
  "task:POST /api/v1/work-items/{id}/work-logs": {
    "purpose": "Create work log. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks time_log.create",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").WorkLog>"
  },
  "task:GET /api/v1/work-items/{id}/commits": {
    "purpose": "List commits. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read"
  },
  "task:POST /api/v1/work-items/{id}/commits": {
    "purpose": "Attach commit. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.update",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").CommitLink>"
  },
  "task:GET /api/v1/work-items/{id}/work-sessions": {
    "purpose": "List work sessions. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read"
  },
  "task:POST /api/v1/work-items/{id}/work-sessions/start": {
    "purpose": "Start work session. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks time_log.create",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").StartedWorkSession>"
  },
  "task:POST /api/v1/work-items/{id}/points": {
    "purpose": "Add points. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks points.manage",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").PointEntry>"
  },
  "task:GET /api/v1/work-sessions/active": {
    "purpose": "Active work sessions. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local time_log.create; verified Bearer/cookie identity through FaiberClient"
  },
  "task:POST /api/v1/work-sessions/{id}/heartbeat": {
    "purpose": "Heartbeat work session. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks time_log.create"
  },
  "task:POST /api/v1/work-sessions/{id}/stop": {
    "purpose": "Stop work session. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks time_log.create, time_log.manage"
  },
  "task:GET /api/v1/sprints": {
    "purpose": "List sprints. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local sprint.read; verified Bearer/cookie identity through FaiberClient"
  },
  "task:POST /api/v1/sprints": {
    "purpose": "Create sprint. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "IDP route policy task:access:use; local sprint.manage; verified Bearer/cookie identity through FaiberClient; source checks sprint.manage",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").Sprint>"
  },
  "task:POST /api/v1/sprints/{id}/start": {
    "purpose": "Start sprint. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks sprint.start",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").Sprint>"
  },
  "task:POST /api/v1/sprints/{id}/complete": {
    "purpose": "Complete sprint. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks sprint.complete",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").Sprint>"
  },
  "task:GET /api/v1/projects/{id}/report": {
    "purpose": "Get. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks report.read",
    "requiredQuery": true
  },
  "task:GET /api/v1/reports/summary": {
    "purpose": "Report summary. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local report.read; verified Bearer/cookie identity through FaiberClient; source checks report.read",
    "requiredQuery": true
  },
  "task:GET /api/v1/reports/team-monitoring": {
    "purpose": "Team monitoring. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local report.read; verified Bearer/cookie identity through FaiberClient; source checks report.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").TeamMonitoring>"
  },
  "task:PUT /api/v1/performance/policies": {
    "purpose": "Upsert performance policy. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local performance.manage; verified Bearer/cookie identity through FaiberClient; source checks performance.manage",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").PerformancePolicy>"
  },
  "task:GET /api/v1/points/history": {
    "purpose": "Point history. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "IDP route policy task:access:use; local report.read; verified Bearer/cookie identity through FaiberClient; source checks report.read",
    "response": "import(\"./types.js\").TaskResponse<import(\"./wire.types.js\").PointHistoryEntry[]>"
  },
  "task:POST /api/v1/agent-proposals": {
    "purpose": "Create agent proposal. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.",
    "auth": "IDP route policy task:access:use; local agent.propose; verified Bearer/cookie identity through FaiberClient; source checks agent.propose",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").AgentProposal>"
  },
  "task:POST /api/v1/agent-proposals/{id}/approve": {
    "purpose": "Mark an agent proposal approved without executing its opaque payload; the proposer cannot approve their own proposal. Returns the Task status/message/data envelope with the full Axios status and headers.",
    "auth": "Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks agent.approve",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").ApprovedAgentProposal>"
  },
  "task:GET /api/v1/events": {
    "fetchStream": true,
    "purpose": "Events. Raw SSE invalidate/changed frames, no JSON envelope; permission rechecked per event and keepalive every 15 seconds. Reconnect and refetch current snapshots; no replay cursor.",
    "auth": "IDP route policy task:access:use; local project.read; verified Bearer/cookie identity through FaiberClient; source checks project.read, work_item.read",
    "response": "import(\"./types.js\").TaskEventStreamBody"
  }
};
