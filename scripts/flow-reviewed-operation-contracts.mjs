// Immutable Flow d560d457b331ffe8e318006e5baf5d3734ffbe98 direct mounted-source audit; dependency pinned at 291c81a67bc302d667fb807da2af3240598bee52; native suite passed.
export const flowReviewedOperationContracts = {
  "flow:GET /": {
    "purpose": "Read package version liveness; no dependency checks. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "No declared handler permission. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowHealthResponse"
  },
  "flow:GET /health": {
    "purpose": "Read package version liveness; no dependency checks. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "No declared handler permission. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowHealthResponse"
  },
  "flow:GET /up": {
    "purpose": "Read package version liveness; no dependency checks. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "No declared handler permission. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowHealthResponse"
  },
  "flow:GET /api/v1/integration/flow": {
    "purpose": "Read integration metadata; queue flow_queue and empty events. Concrete shared metadata inspected in pinned dependency source; dependency is pinned to faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "No declared handler permission. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowIntegrationResponse"
  },
  "flow:GET /api/v1/flows": {
    "purpose": "List all flows descending updated_at without pagination or tenant filter. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowListResponse"
  },
  "flow:POST /api/v1/flows": {
    "purpose": "Create flow: name1..200, nonempty trigger_key; normalized nonempty unique slug (409), enabled defaults false, graph defaults trigger node. Validate graph400. Insert before enabled-registry notification; notification500 may follow persisted mutation. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow:create. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowResponse",
    "input": "import(\"./types.js\").CreateFlowInput"
  },
  "flow:GET /api/v1/flows/{id}": {
    "purpose": "Read UUID flow; missing404. No tenant/owner predicate. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowResponse"
  },
  "flow:PUT /api/v1/flows/{id}": {
    "purpose": "Partially update UUID flow; null/omitted fields preserve existing values. Graph or trigger_key increments version and updates trigger node data. Slug normalization/conflict409; existing graph revalidated400 even on metadata update. Update before registry notification; notification500 may follow persisted mutation. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow:update. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowResponse",
    "input": "import(\"./types.js\").UpdateFlowInput"
  },
  "flow:DELETE /api/v1/flows/{id}": {
    "purpose": "Delete UUID flow (missing404), then notify registry; returns200 {deleted:true}. Notification500 can follow committed deletion; repeated deletion404. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow:delete. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowDeleteResponse"
  },
  "flow:POST /api/v1/flows/{id}/validate": {
    "purpose": "Validate persisted UUID graph; missing404. Invalid graph returns200 {valid:false,errors:[...]}; no mutation. Checks one trigger, edges endpoints, unique nonempty node IDs, emit service/event/object payload and supported condition structure; does not reject cycles or unknown node types. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow:update. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowValidationResponse"
  },
  "flow:POST /api/v1/flows/import": {
    "purpose": "Expand bridges/groups then validate nonempty manifest, normalized unique slugs and graph400. Arrays default empty, bridge enabled defaults true; version/source ignored. Transactional upsert by slug; dry_run rolls back and reports proposed counts. Normal import commits before registry notify, so500 can follow durable effects; identical retry reports unchanged. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow:create, flow:update. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").ImportFlowsResponse",
    "input": "import(\"./types.js\").ImportFlowsInput"
  },
  "flow:POST /api/v1/events/{event_key}": {
    "jsonBody": true,
    "purpose": "Emit arbitrary JSON including null; require nonempty1..200 ASCII alphanumeric/dot/underscore/hyphen key without leading/trailing/double dots400. Explicit flow:execute or * local check403. New event UUID per call; awaits matching enabled flows; individual execution failures logged/swallowed. HTTP200 accepted does not guarantee completed runs; repeated calls can emit duplicates. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow:execute. Handler explicitly checks AuthContext flow:execute or *; roles alone are insufficient. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").EmitFlowEventResponse",
    "input": "import(\"./types.js\").EmitFlowEventInput"
  },
  "flow:GET /api/v1/catalog/triggers": {
    "purpose": "Read all cached trigger catalog entries with service/method/path/trigger_key; no pagination or tenant filter. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").TriggerCatalogResponse"
  },
  "flow:GET /api/v1/catalog/actions": {
    "purpose": "Read all cached action catalog entries including verbatim external payload_fields JSON; no pagination or tenant filter. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").ActionCatalogResponse"
  },
  "flow:POST /api/v1/catalog/sync": {
    "purpose": "Fetch configured services OpenAPI and Flow integration metadata; replace matching triggers/actions; return200 report with per-service openapi/actions failures, not {synced:true}. Does not remove stale absent metadata. Partial persistence and insert errors may occur; retry fetches and replaces again. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: catalog:sync. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").CatalogSyncResponse"
  },
  "flow:GET /api/v1/registry/active-triggers": {
    "purpose": "Read {version,triggers}; enabled flows grouped by trigger key and unioned capture_fields, unordered. Optional service matches endpoint.{service}. prefix; generic event triggers excluded with service filter. No handler-local permission or tenant check. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "No declared handler permission. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").ActiveTriggersResponse",
    "query": "import(\"./types.js\").ActiveTriggersQuery"
  },
  "flow:GET /api/v1/runs": {
    "purpose": "List global runs descending started_at; limit optional nonnegative u64, default50, no clamp. No pagination envelope or flow/owner filter. Integer values must fit JavaScript safe range for precise requests. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow_run:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowRunListResponse",
    "query": "import(\"./types.js\").FlowRunsQuery"
  },
  "flow:GET /api/v1/runs/{id}": {
    "purpose": "Read UUID run404; flatten run fields alongside nullable JSON context and steps ordered created_at ascending. Payload/context may be null; no tenant/owner filter. Success envelope is {status:\"success\",message:\"ok\",data}; AppError uses {error:string}, database/broker failures500 and malformed extractors use Axum rejection responses.",
    "auth": "Declared IDP metadata: flow_run:read. No handler-local permission enforcement. Global imported auth_extractor_middleware; pinned IDP macro registers metadata and middleware trusts x-user-* with dev-fallback, not token verification. Dependency is pinned to reviewed faiber-sdk 291c81a67bc302d667fb807da2af3240598bee52. Use enforcing gateway; FaiberClient forwards configured Bearer/cookie credentials.",
    "response": "import(\"./types.js\").FlowRunResponse"
  }
};
