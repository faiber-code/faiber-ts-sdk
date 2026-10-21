// Immutable Modules 85e42a5f direct source audit; native acceptance pending.
export const modulesReviewedOperationContracts = {
  "modules:GET /": {
    "purpose": "Read process liveness and static package version in status/message/data; does not probe dependency readiness.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api-doc/openapi.json": {
    "response": "import(\"@faiber/sdk-core\").ServiceOpenApiDocument",
    "purpose": "Read the raw OpenAPI document. Its annotations omit mounted operations and are not a completeness guarantee.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/openapi.json": {
    "response": "import(\"@faiber/sdk-core\").ServiceOpenApiDocument",
    "purpose": "Read the raw OpenAPI document. Its annotations omit mounted operations and are not a completeness guarantee.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/access/{host}/{target_id}": {
    "purpose": "List on target using the mounted access handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/access/{host}/{target_id}": {
    "purpose": "Grant on target using the mounted access handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/access/{host}/{target_id}/{access_id}": {
    "purpose": "Revoke on target using the mounted access handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/access/{host}/{target_id}/{access_id}": {
    "purpose": "Update on target using the mounted access handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/audit-logs/{host}/{target_id}": {
    "purpose": "List on target using the mounted audit log handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/auth/self": {
    "purpose": "Get self using the mounted session handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/authors": {
    "purpose": "List authors using the mounted author handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/authors": {
    "purpose": "Create author using the mounted author handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/authors/{id}": {
    "purpose": "Delete author using the mounted author handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/authors/{id}": {
    "purpose": "Show author using the mounted author handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/authors/{id}": {
    "purpose": "Update author using the mounted author handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/authors/{id}": {
    "purpose": "Update author using the mounted author handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/blog/posts": {
    "purpose": "List posts using the mounted blog handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/blog/posts": {
    "purpose": "Create post using the mounted blog handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/blog/posts/{id}": {
    "purpose": "Delete post using the mounted blog handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/blog/posts/{id}": {
    "purpose": "Show post using the mounted blog handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/blog/posts/{id}": {
    "purpose": "Update post using the mounted blog handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/blog/posts/{id}": {
    "purpose": "Update post using the mounted blog handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/categories": {
    "purpose": "List categories using the mounted category handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key. Search trims a literal case-insensitive substring, allows at most 128 Unicode characters and no NUL, and returns normalized search or null.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/categories": {
    "purpose": "Create category using the mounted category handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/categories/{host}/{target_id}": {
    "purpose": "Detach from target using the mounted category handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/categories/{host}/{target_id}": {
    "purpose": "List on target using the mounted category handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/categories/{host}/{target_id}": {
    "purpose": "Attach to target using the mounted category handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/categories/{id}": {
    "purpose": "Delete category using the mounted category handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/categories/{id}": {
    "purpose": "Show category using the mounted category handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/categories/{id}": {
    "purpose": "Update category using the mounted category handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/categories/{id}": {
    "purpose": "Update category using the mounted category handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/comments": {
    "purpose": "List comments using the mounted comment handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/comments": {
    "purpose": "Create comment using the mounted comment handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/comments/{host}/{target_id}": {
    "purpose": "List on target using the mounted comment handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/comments/{host}/{target_id}": {
    "purpose": "Create on target using the mounted comment handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/comments/{id}": {
    "purpose": "Delete comment using the mounted comment handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/comments/{id}": {
    "purpose": "Show comment using the mounted comment handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/comments/{id}": {
    "purpose": "Update comment using the mounted comment handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/comments/{id}": {
    "purpose": "Update comment using the mounted comment handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/contents": {
    "purpose": "List contents using the mounted content handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/contents": {
    "purpose": "Create content using the mounted content handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/contents/{host}/{target_id}": {
    "purpose": "Detach from target using the mounted content handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/contents/{host}/{target_id}": {
    "purpose": "List on target using the mounted content handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/contents/{host}/{target_id}": {
    "purpose": "Attach to target using the mounted content handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/contents/{id}": {
    "purpose": "Delete content using the mounted content handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/contents/{id}": {
    "purpose": "Show content using the mounted content handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/contents/{id}": {
    "purpose": "Update content using the mounted content handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted. autosave=true writes only auto_saved_content; otherwise content is written. When both host and target_id are supplied, non-autosave updates require Editor/Maintainer junction access; omitting either skips that local access check.",
    "auth": "IDP/gateway deployment policy; non-autosave update with both host and target_id additionally requires Editor/Maintainer access on that target"
  },
  "modules:PUT /api/v1/contents/{id}": {
    "purpose": "Update content using the mounted content handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted. autosave=true writes only auto_saved_content; otherwise content is written. When both host and target_id are supplied, non-autosave updates require Editor/Maintainer junction access; omitting either skips that local access check.",
    "auth": "IDP/gateway deployment policy; non-autosave update with both host and target_id additionally requires Editor/Maintainer access on that target"
  },
  "modules:GET /api/v1/inventory/inventories": {
    "purpose": "List inventories using the mounted inventory handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/inventory/inventories": {
    "purpose": "Create inventory using the mounted inventory handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/inventory/inventories/{id}": {
    "purpose": "Delete inventory using the mounted inventory handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/inventory/inventories/{id}": {
    "purpose": "Show inventory using the mounted inventory handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/inventory/inventories/{id}": {
    "purpose": "Update inventory using the mounted inventory handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/inventory/inventories/{id}": {
    "purpose": "Update inventory using the mounted inventory handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/inventory/stock-movements": {
    "purpose": "List stock movements using the mounted stock movement handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/inventory/stock-movements": {
    "purpose": "Apply an IN, OUT or ADJUST movement (case-insensitive input) transactionally to existing variant/warehouse inventory. OUT rejects insufficient unreserved stock; unknown movement type returns 400. Returns the concrete movement record in the success envelope.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/inventory/warehouses": {
    "purpose": "List warehouses using the mounted inventory handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/inventory/warehouses": {
    "purpose": "Create warehouse using the mounted inventory handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/inventory/warehouses/{id}": {
    "purpose": "Delete warehouse using the mounted inventory handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/inventory/warehouses/{id}": {
    "purpose": "Show warehouse using the mounted inventory handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/inventory/warehouses/{id}": {
    "purpose": "Update warehouse using the mounted inventory handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/inventory/warehouses/{id}": {
    "purpose": "Update warehouse using the mounted inventory handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/manage/agents/models": {
    "response": "import(\"./contracts.types.js\").ModulesAgentModelCatalog",
    "purpose": "Read the trusted Agentic model catalog, preserving provider and billing-authority fields; upstream configuration/unavailability returns 503/502.",
    "auth": "agent:run with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:GET /api/v1/manage/agents/proposals": {
    "purpose": "List proposals using the mounted management api handler.",
    "auth": "agent:audit with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:GET /api/v1/manage/agents/proposals/{id}": {
    "purpose": "Get proposal using the mounted management api handler.",
    "auth": "agent:audit with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:POST /api/v1/manage/agents/proposals/{id}/approve": {
    "purpose": "Approve proposal using the mounted management api handler.",
    "auth": "agent:apply with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted; risky proposals additionally require agent:approve-risky"
  },
  "modules:POST /api/v1/manage/agents/proposals/{id}/reject": {
    "purpose": "Reject proposal using the mounted management api handler.",
    "auth": "agent:apply with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:POST /api/v1/manage/agents/runs": {
    "response": "import(\"./contracts.types.js\").ModulesAgentRunResponse",
    "textResponse": true,
    "purpose": "Start or replay an agent proposal with a required nonblank Idempotency-Key (at most 128 bytes) supplied in options.headers. Returns text/event-stream, including error events and 15-second keep-alives; this is SSE text, not a JSON envelope.",
    "auth": "agent:run with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:GET /api/v1/manage/content": {
    "purpose": "List content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes.",
    "auth": "content:read with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:POST /api/v1/manage/content": {
    "response": "import(\"./types.js\").ContentDocument",
    "purpose": "Create content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes. Slug is 1\u2013255 alphanumeric/dash/underscore characters, locale 1\u201316 bytes and title 1\u2013500 characters; HTML is sanitized server-side.",
    "auth": "content:write with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:GET /api/v1/manage/content/{id}": {
    "response": "import(\"./types.js\").ContentDocument",
    "purpose": "Get content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes.",
    "auth": "content:read with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:PUT /api/v1/manage/content/{id}": {
    "response": "import(\"./types.js\").ContentDocument",
    "purpose": "Update content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes. Supply If-Match with the current UUID ETag in options.headers; absent header returns 428 and stale ETag returns 412. Slug is 1\u2013255 alphanumeric/dash/underscore characters, locale 1\u201316 bytes and title 1\u2013500 characters; HTML is sanitized server-side.",
    "auth": "content:write with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:POST /api/v1/manage/content/{id}/publish": {
    "response": "import(\"./types.js\").ContentDocument",
    "purpose": "Publish content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes. Supply If-Match with the current UUID ETag in options.headers; absent header returns 428 and stale ETag returns 412.",
    "auth": "content:publish with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:GET /api/v1/manage/content/{id}/revisions": {
    "purpose": "List content revisions using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes.",
    "auth": "content:read with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:POST /api/v1/manage/content/{id}/revisions/{revision}/restore": {
    "response": "import(\"./types.js\").ContentDocument",
    "purpose": "Restore content revision using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes. Supply If-Match with the current UUID ETag in options.headers; absent header returns 428 and stale ETag returns 412.",
    "auth": "content:write with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:PUT /api/v1/manage/import/categories/{id}": {
    "purpose": "Upsert category using the mounted content transfer handler.",
    "auth": "content:write with authenticated actor; published content additionally requires content:publish"
  },
  "modules:PUT /api/v1/manage/import/content/{id}": {
    "purpose": "Upsert content using the mounted content transfer handler.",
    "auth": "content:write with authenticated actor; published content additionally requires content:publish"
  },
  "modules:GET /api/v1/manage/settings": {
    "response": "import(\"./contracts.types.js\").ModulesSettingsWire",
    "purpose": "Get settings using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes.",
    "auth": "settings:read with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:PUT /api/v1/manage/settings": {
    "response": "import(\"./contracts.types.js\").ModulesSettingsWire",
    "purpose": "Update settings using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes. Supply If-Match with the current UUID ETag in options.headers; absent header returns 428 and stale ETag returns 412.",
    "auth": "settings:write with an authenticated actor; modules:* and * or modules_admin/platform_operator roles are accepted"
  },
  "modules:POST /api/v1/media/assets": {
    "purpose": "Upload multipart fields kind and file. Images accept JPEG/PNG/WebP/GIF/AVIF up to 10 MiB; assets also accept MP4/WebM/QuickTime up to 250 MiB. Empty/oversized files return 413, unsupported formats 415; purpose must be a supported Modules media kind.",
    "auth": "Authenticated UUID identity in x-user-id, normally resolved from configured Bearer/cookie credentials"
  },
  "modules:GET /api/v1/media/files/{*key}": {
    "binaryDownload": true,
    "purpose": "Download object bytes by a raw modules/ storage key. Keys containing .. are rejected; missing objects return 404. Successful responses preserve content type and immutable cache headers.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/media/images": {
    "purpose": "Upload multipart fields kind and file. Images accept JPEG/PNG/WebP/GIF/AVIF up to 10 MiB; assets also accept MP4/WebM/QuickTime up to 250 MiB. Empty/oversized files return 413, unsupported formats 415; purpose must be a supported Modules media kind.",
    "auth": "Authenticated UUID identity in x-user-id, normally resolved from configured Bearer/cookie credentials"
  },
  "modules:GET /api/v1/podcasts": {
    "purpose": "List using the mounted podcast handler. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/podcasts": {
    "purpose": "Create using the mounted podcast handler. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/podcasts/{id}": {
    "purpose": "Remove using the mounted podcast handler. Returns HTTP 200 with status/message and no data member. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/podcasts/{id}": {
    "purpose": "Show using the mounted podcast handler. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/podcasts/{id}": {
    "purpose": "Update using the mounted podcast handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/podcasts/{id}/episodes": {
    "input": "import(\"./contracts.types.js\").ModulesEpisodeInput",
    "purpose": "Create episode using the mounted podcast handler. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/podcasts/{podcast_id}/episodes/{id}": {
    "purpose": "Remove episode using the mounted podcast handler. Returns HTTP 200 with status/message and no data member. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/podcasts/{podcast_id}/episodes/{id}": {
    "input": "import(\"./contracts.types.js\").ModulesEpisodeUpdateInput",
    "purpose": "Update episode using the mounted podcast handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted. Podcast/episode rows are physically deleted; episode mutations scope the episode to its podcast. Audio source is external or drm and requires its matching URL or DRM media UUID.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/pricing": {
    "purpose": "List pricing using the mounted service pricing handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/pricing": {
    "purpose": "Create pricing using the mounted service pricing handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/pricing/{id}": {
    "purpose": "Delete pricing using the mounted service pricing handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/pricing/{id}": {
    "purpose": "Show pricing using the mounted service pricing handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/pricing/{id}": {
    "purpose": "Update pricing using the mounted service pricing handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/pricing/{id}": {
    "purpose": "Update pricing using the mounted service pricing handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/public/categories/{scope}/{locale}": {
    "purpose": "List active nondeleted categories by scope and locale; returns raw records with nullable parent and legacy references.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/public/content/{kind}/{locale}": {
    "purpose": "List published documents by kind/locale with optional active category slug. Published timestamps must be null or due; page defaults to 1, size to 12 (1\u2013100), ordered newest first with UUID tie-break.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/public/content/{kind}/{locale}/{slug}": {
    "response": "import(\"./types.js\").ContentDocument",
    "purpose": "Public content using the mounted management api handler. Content/settings payloads are raw records, not status/message/data envelopes.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/public/requests/{key}": {
    "purpose": "Submit a configured website_contact, website_newsletter or website_waitlist form with a non-nil replay UUID, valid email and blank website honeypot. Request body is limited to 20 KiB; invalid input returns 422, missing forms 404, rate limits 429 and changed replay payloads 409.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/public/routes": {
    "response": "import(\"./contracts.types.js\").ModulesPublicRoutesResponse",
    "purpose": "Public routes using the mounted management api handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/public/search/autocomplete": {
    "query": "import(\"./types.js\").AutocompleteQuery",
    "requiredQuery": true,
    "purpose": "Search published posts and nonzero-status products after Persian/Arabic normalization. Fewer than two normalized characters return an empty list; over 120 characters or a locale over 16 bytes return 400. Scope is posts/products/mixed; limit defaults to 8 and clamps to 1\u201320. Returns raw ranked suggestions with nullable metadata.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/public/shop/products": {
    "purpose": "Page published active variants and products without supplier/cost/owner fields; page clamps to 1\u201310000, 100 items per page plus hasMore. Stock is computed from available inventory.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/reactions/{host}/{target_id}": {
    "purpose": "Delete on target using the mounted reaction handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/reactions/{host}/{target_id}": {
    "purpose": "List on target using the mounted reaction handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/reactions/{host}/{target_id}": {
    "purpose": "Create on target using the mounted reaction handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/requests": {
    "purpose": "List requests using the mounted request handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/requests": {
    "purpose": "Create request using the mounted request handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/requests/{host}/{target_id}": {
    "purpose": "Detach from target using the mounted request handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/requests/{host}/{target_id}": {
    "purpose": "List on target using the mounted request handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/requests/{host}/{target_id}": {
    "purpose": "Attach to target using the mounted request handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/requests/{id}": {
    "purpose": "Delete request using the mounted request handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/requests/{id}": {
    "purpose": "Show request using the mounted request handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/requests/{id}": {
    "purpose": "Update request using the mounted request handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/requests/{id}": {
    "purpose": "Update request using the mounted request handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/requests/{request_id}/logs": {
    "purpose": "List logs for request using the mounted request handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/requests/{request_id}/logs": {
    "purpose": "Submit using the mounted request handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/requests/category/{category_id}/logs": {
    "purpose": "List logs for category using the mounted request handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/requests/website-defaults": {
    "purpose": "Initialize the three website form definitions idempotently; requires authenticated admin role or modules:request:create and returns raw {ready:true}.",
    "auth": "Authenticated non-nil identity with admin role or modules:request:create permission"
  },
  "modules:GET /api/v1/samples": {
    "purpose": "List samples using the mounted user sample handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/samples": {
    "purpose": "Create sample using the mounted user sample handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/samples/{id}": {
    "purpose": "Delete sample using the mounted user sample handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/samples/{id}": {
    "purpose": "Show sample using the mounted user sample handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/samples/{id}": {
    "purpose": "Update sample using the mounted user sample handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/samples/{id}": {
    "purpose": "Update sample using the mounted user sample handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/samples/{sample_id}/variables": {
    "purpose": "List sample variables using the mounted user sample handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/samples/{sample_id}/variables": {
    "purpose": "Create sample variable using the mounted user sample handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/samples/by-slug/{slug}/variables-map": {
    "purpose": "Variables map by slug using the mounted user sample handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/samples/variables": {
    "purpose": "List all variables using the mounted user sample handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/samples/variables/{id}": {
    "purpose": "Delete variable using the mounted user sample handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/samples/variables/{id}": {
    "purpose": "Show variable using the mounted user sample handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/samples/variables/{id}": {
    "purpose": "Update variable using the mounted user sample handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/samples/variables/{id}": {
    "purpose": "Update variable using the mounted user sample handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/seo-contents": {
    "purpose": "List seo contents using the mounted seo content handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key. Search trims a literal case-insensitive substring, allows at most 128 Unicode characters and no NUL, and returns normalized search or null.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/seo-contents": {
    "purpose": "Create seo content using the mounted seo content handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/seo-contents/{host}/{target_id}": {
    "purpose": "Detach from target using the mounted seo content handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/seo-contents/{host}/{target_id}": {
    "purpose": "List on target using the mounted seo content handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/seo-contents/{host}/{target_id}": {
    "purpose": "Attach to target using the mounted seo content handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/seo-contents/{id}": {
    "purpose": "Delete seo content using the mounted seo content handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/seo-contents/{id}": {
    "purpose": "Show seo content using the mounted seo content handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/seo-contents/{id}": {
    "purpose": "Update seo content using the mounted seo content handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/seo-contents/{id}": {
    "purpose": "Update seo content using the mounted seo content handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/shop/cart": {
    "purpose": "Show using the mounted cart handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/shop/cart": {
    "purpose": "Replace using the mounted cart handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/shop/checkout/{id}": {
    "purpose": "Read using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:POST /api/v1/shop/checkout/{id}/cancel": {
    "purpose": "Cancel using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:POST /api/v1/shop/checkout/{id}/pay": {
    "purpose": "Pay using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:POST /api/v1/shop/checkout/quote": {
    "purpose": "Quote using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:GET /api/v1/shop/orders": {
    "response": "import(\"./contracts.types.js\").ModulesOrderListResponse",
    "purpose": "List orders using the mounted order handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:POST /api/v1/shop/orders": {
    "response": "import(\"./contracts.types.js\").ModulesOrderResponse",
    "dataAlias": "import(\"./contracts.types.js\").ModulesOrderRecord",
    "input": "import(\"./contracts.types.js\").ModulesOrderCreateInput",
    "purpose": "Create order using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:DELETE /api/v1/shop/orders/{id}": {
    "purpose": "Delete order using the mounted order handler. Returns HTTP 200 with status/message and no data member. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:GET /api/v1/shop/orders/{id}": {
    "response": "import(\"./contracts.types.js\").ModulesOrderResponse",
    "dataAlias": "import(\"./contracts.types.js\").ModulesOrderRecord",
    "purpose": "Show order using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:PATCH /api/v1/shop/orders/{id}": {
    "response": "import(\"./contracts.types.js\").ModulesOrderResponse",
    "dataAlias": "import(\"./contracts.types.js\").ModulesOrderRecord",
    "purpose": "Update order using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:PUT /api/v1/shop/orders/{id}": {
    "response": "import(\"./contracts.types.js\").ModulesOrderResponse",
    "dataAlias": "import(\"./contracts.types.js\").ModulesOrderRecord",
    "purpose": "Update order using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:GET /api/v1/shop/orders/{order_id}/items": {
    "purpose": "List order items using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:POST /api/v1/shop/orders/{order_id}/items": {
    "response": "import(\"./contracts.types.js\").ModulesOrderResponse",
    "dataAlias": "import(\"./contracts.types.js\").ModulesOrderRecord",
    "input": "import(\"./contracts.types.js\").ModulesOrderItemInput",
    "purpose": "Add order item using the mounted order handler. Orders are owner scoped (admin role can access all), prices come from active variants, and quantities must be 1\u201310000 across 1\u2013100 unique variants. Checkout transitions enforce stock and payment state.",
    "auth": "Authenticated non-nil order owner or admin role; foreign/missing orders return 404"
  },
  "modules:GET /api/v1/shop/products": {
    "purpose": "List products using the mounted product handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key. Filters support category UUID/slug, scope, search and country/province/city IDs; these product filters are separate from hosted literal search.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/shop/products": {
    "purpose": "Create product using the mounted product handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/shop/products/{id}": {
    "purpose": "Delete product using the mounted product handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/shop/products/{id}": {
    "purpose": "Show product using the mounted product handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/shop/products/{id}": {
    "purpose": "Update product using the mounted product handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/shop/products/{id}": {
    "purpose": "Update product using the mounted product handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/shop/products/{product_id}/variants": {
    "purpose": "List product variants using the mounted product handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/shop/products/{product_id}/variants": {
    "purpose": "Create variant using the mounted product handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/shop/variants": {
    "purpose": "List variants using the mounted product handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/shop/variants/{id}": {
    "purpose": "Delete variant using the mounted product handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/shop/variants/{id}": {
    "purpose": "Show variant using the mounted product handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/shop/variants/{id}": {
    "purpose": "Update variant using the mounted product handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/shop/variants/{id}": {
    "purpose": "Update variant using the mounted product handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/tags": {
    "purpose": "List tags using the mounted tag handler. Pagination starts at 1, defaults to size 10 and clamps size to 1\u2013100; list data retains its named collection key. Search trims a literal case-insensitive substring, allows at most 128 Unicode characters and no NUL, and returns normalized search or null.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/tags": {
    "purpose": "Create tag using the mounted tag handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/tags/{host}/{target_id}": {
    "purpose": "Detach from target using the mounted tag handler. Returns HTTP 200 with status/message and no data member. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400. Junction deletion scopes by junction ID and resolved host table; the target path ID is not a second repository predicate.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/tags/{host}/{target_id}": {
    "purpose": "List on target using the mounted tag handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:POST /api/v1/tags/{host}/{target_id}": {
    "purpose": "Attach to target using the mounted tag handler. Host must resolve to a supported Modules junction; unsupported host/agent combinations return 400.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:DELETE /api/v1/tags/{id}": {
    "purpose": "Delete tag using the mounted tag handler. Returns HTTP 200 with status/message and no data member.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /api/v1/tags/{id}": {
    "purpose": "Show tag using the mounted tag handler.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PATCH /api/v1/tags/{id}": {
    "purpose": "Update tag using the mounted tag handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:PUT /api/v1/tags/{id}": {
    "purpose": "Update tag using the mounted tag handler. Optional null fields generally preserve existing values; PUT and PATCH share the same partial-update handler where both are mounted.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /health": {
    "purpose": "Read process liveness and static package version in status/message/data; does not probe dependency readiness.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  },
  "modules:GET /integration/flow": {
    "response": "import(\"./contracts.types.js\").ModulesFlowIntegrationResponse",
    "purpose": "Read Flow queue integration metadata in the Modules success envelope; this service currently advertises an empty event list.",
    "auth": "No local handler capability check; IDP/gateway deployment policy is separate. Configured Bearer/cookie identity is always forwarded by the shared client"
  }
};
