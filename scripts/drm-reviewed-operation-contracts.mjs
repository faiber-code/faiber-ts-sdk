// Direct source audit of immutable DRM 31d8ace56b1f65c789415bb4bfb9f6da6678b1a2. Native/deployed acceptance remains pending.
export const drmReviewedOperationContracts = {
  "drm:GET /api/v1/status": {
    "purpose": "Read public liveness marker; this does not inspect database or object storage.",
    "auth": "Public status; configured credentials still forwarded through FaiberClient",
    "response": "import(\"./wire.types.js\").DrmStatus"
  },
  "drm:GET /api/v1/folders": {
    "purpose": "List folders. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmFolder)[]"
  },
  "drm:POST /api/v1/folders": {
    "purpose": "Create folder. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmFolder",
    "input": "import(\"./wire.types.js\").DrmFolderInput"
  },
  "drm:PATCH /api/v1/folders/{id}": {
    "purpose": "Update folder. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmFolder",
    "input": "import(\"./wire.types.js\").DrmFolderInput"
  },
  "drm:DELETE /api/v1/folders/{id}": {
    "purpose": "Delete folder. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/tags": {
    "purpose": "List tags. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmTag)[]"
  },
  "drm:POST /api/v1/tags": {
    "purpose": "Create tag. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmTag",
    "input": "import(\"./wire.types.js\").DrmTagInput"
  },
  "drm:DELETE /api/v1/tags/{id}": {
    "purpose": "Delete tag. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/media": {
    "purpose": "Search name, description and matching tags, with media_type/folder_id/tag_id AND filters. Defaults page=1,size=30; size clamps1..100; newest created first.",
    "auth": "Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmPage<import(\"./wire.types.js\").DrmMediaRecord>",
    "query": "import(\"./wire.types.js\").DrmMediaListQuery"
  },
  "drm:POST /api/v1/media": {
    "purpose": "Upload audio, video or image multipart file. Fields name/description/folder_id are text; tag_ids is JSON-encoded UUID array. Returns201; video queues packaging and optional transcription.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaRecord",
    "input": "FormData"
  },
  "drm:GET /api/v1/media/drm-statuses": {
    "purpose": "Read effective video package/job states for comma-separated UUID ids (required). Invalid UUIDs ignored; at most500 unique IDs; ready package takes precedence; non-video not_applicable.",
    "auth": "Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmMediaDrmStatusResponse)[]",
    "query": "import(\"./wire.types.js\").DrmStatusesQuery",
    "requiredQuery": true
  },
  "drm:POST /api/v1/media/batch": {
    "purpose": "Read deduplicated IDs in request order; at most the first50 unique IDs are used; missing IDs are omitted.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmMediaRecord)[]",
    "input": "import(\"./wire.types.js\").DrmBatchMediaInput"
  },
  "drm:GET /api/v1/media/{id}": {
    "purpose": "Get media. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaRecord"
  },
  "drm:PATCH /api/v1/media/{id}": {
    "purpose": "Patch supplied metadata and replace tag links when tag_ids is present. Plain Serde Option<Option<Uuid>> means folder_id:null is a no-op; description/duration null also preserve.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaRecord",
    "input": "import(\"./wire.types.js\").DrmMediaUpdate"
  },
  "drm:DELETE /api/v1/media/{id}": {
    "purpose": "Delete metadata, original and package storage; attached content conflicts409; returns204.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/media/{id}/playback": {
    "purpose": "Return a900-second signed original-object URL, independent of package readiness. Archived media404; status alone does not hide the original.",
    "auth": "Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmPlayback"
  },
  "drm:GET /api/v1/mixed-media": {
    "purpose": "List mixed media. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmMixedMedia)[]"
  },
  "drm:POST /api/v1/mixed-media": {
    "purpose": "Create composition and revision1 workflow. Requires existing library/category; nonempty name; transcription_language auto/fa/en; defaults auto; returns201.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMedia",
    "input": "import(\"./wire.types.js\").DrmMixedMediaInput"
  },
  "drm:GET /api/v1/mixed-media/{id}": {
    "purpose": "Get mixed media. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMedia"
  },
  "drm:PATCH /api/v1/mixed-media/{id}": {
    "purpose": "Patch composition. category_id:null explicitly clears category; omitted category preserves. Plain nested-Option description:null preserves at this pin. Language auto/fa/en; status draft/published/inactive.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMedia",
    "input": "import(\"./wire.types.js\").DrmMixedMediaUpdate"
  },
  "drm:DELETE /api/v1/mixed-media/{id}": {
    "purpose": "Delete mixed media. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/mixed-media/{id}/resources": {
    "purpose": "Read unarchived categories and parts from the composition owning library, ordered by title.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmEditorResources"
  },
  "drm:POST /api/v1/mixed-media/{id}/categories": {
    "purpose": "Create category; parent must be in the same library or mixed media scope. Returns201, or200 on an existing explicit generic category ID.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmContentCategory",
    "input": "import(\"./wire.types.js\").DrmCategoryInput"
  },
  "drm:PATCH /api/v1/mixed-media/{mixed_id}/categories/{id}": {
    "purpose": "Replace title and parent; reject self-parent. Generic library route and mixed-media route enforce their respective parent scope.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmContentCategory",
    "input": "import(\"./wire.types.js\").DrmCategoryInput"
  },
  "drm:DELETE /api/v1/mixed-media/{mixed_id}/categories/{id}": {
    "purpose": "Delete category. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:POST /api/v1/mixed-media/{id}/parts": {
    "purpose": "Create composition part; nonempty title, Question/Task/Interactive/Game state and nonnegative duration required; referenced media must exist. rewards is persisted empty; returns201.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaPart",
    "input": "import(\"./wire.types.js\").DrmPartInput"
  },
  "drm:GET /api/v1/mixed-media/{mixed_id}/parts/{id}": {
    "purpose": "Get part. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaPart"
  },
  "drm:PUT /api/v1/mixed-media/{mixed_id}/parts/{id}": {
    "purpose": "Replace composition part within path parent; validates title/state/duration/media and stores rewards as empty object.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaPart",
    "input": "import(\"./wire.types.js\").DrmPartInput"
  },
  "drm:DELETE /api/v1/mixed-media/{mixed_id}/parts/{id}": {
    "purpose": "Delete part. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/mixed-media/{id}/workflow": {
    "purpose": "Get workflow. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMediaWorkflow"
  },
  "drm:PUT /api/v1/mixed-media/{id}/workflow": {
    "purpose": "Replace nodes and edges arrays and increment revision; returns400 if either is not an array. Node data remains editor-defined JSON.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMediaWorkflow",
    "input": "import(\"./wire.types.js\").DrmWorkflowInput"
  },
  "drm:POST /api/v1/mixed-media/{id}/publish": {
    "purpose": "Validate a nonempty, singly started, connected acyclic workflow and ready video references, then create versioned manifest201. Referenced unarchived items may come from other libraries; launches Knowledge sync/optional analysis.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMediaManifest"
  },
  "drm:GET /api/v1/mixed-media/{id}/manifest": {
    "purpose": "Get manifest. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMediaManifest"
  },
  "drm:GET /api/v1/mixed-media/{id}/manifests": {
    "purpose": "List manifests. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmMixedMediaManifest)[]"
  },
  "drm:GET /api/v1/mixed-media/{id}/knowledge-sync": {
    "purpose": "Read persisted settings. Knowledge settings read creates default row for an existing composition; absent composition404. Operations settings require drm:manage.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmKnowledgeSyncSettings"
  },
  "drm:PUT /api/v1/mixed-media/{id}/knowledge-sync": {
    "purpose": "Update operational or Knowledge settings. Operations package_concurrency1..16; enabled transcription requires speech and summary models. Knowledge enabled requires knowledge_base_id and organization context; starts immediate sync.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmKnowledgeSyncSettings",
    "input": "import(\"./wire.types.js\").DrmUpdateKnowledgeSync"
  },
  "drm:POST /api/v1/mixed-media/{id}/knowledge-sync": {
    "purpose": "Synchronize published composition using Knowledge broker; x-organization-id UUID required unless server default configured. Returns settings; disabled/missing configuration can reject.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmKnowledgeSyncSettings"
  },
  "drm:GET /api/v1/mixed-media/{id}/analysis": {
    "purpose": "Return analysis or JSON null when no analysis/composition exists; errors other than not-found propagate.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmCompositionAnalysis | null"
  },
  "drm:POST /api/v1/mixed-media/{id}/analysis": {
    "purpose": "Queue composition analysis; body may be omitted (undefined) or supply language/force. Language override persists and requires auto/fa/en. Returns existing active work unless force applies; model/settings errors400.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmCompositionAnalysis",
    "input": "import(\"./wire.types.js\").DrmStartAnalysisInput | undefined"
  },
  "drm:GET /api/v1/composition-analyses": {
    "purpose": "Page composition analyses with search/status/time filters; defaults page1,size20 with size clamped1..100.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmPage<import(\"./wire.types.js\").DrmCompositionAnalysis>",
    "query": "import(\"./wire.types.js\").DrmAnalysisQuery"
  },
  "drm:GET /api/v1/drm/jobs": {
    "purpose": "Page DRM jobs newest first; defaults page1,size30 (clamps1..100); status/media_id/from/to filters combine. Response flattens job and adds media_name/media_type.",
    "auth": "Local AuthContext requires drm:package:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmPage<import(\"./wire.types.js\").DrmJobResponse>",
    "query": "import(\"./wire.types.js\").DrmJobQuery"
  },
  "drm:POST /api/v1/drm/jobs": {
    "purpose": "Enqueue video packaging (audio/image400); deduplicate existing queued/processing/retrying job; full config defaults true/true/true/false; returns202.",
    "auth": "Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmJobResponse",
    "input": "import(\"./wire.types.js\").DrmEnqueueDrmInput"
  },
  "drm:POST /api/v1/drm/jobs/{id}/retry": {
    "purpose": "Retry failed/cancelled job, optionally replacing config (undefined omits body); other states400. Resets package/media and queue state transactionally.",
    "auth": "Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmJobResponse",
    "input": "import(\"./wire.types.js\").DrmConfig | undefined"
  },
  "drm:POST /api/v1/drm/jobs/actions/retry-failed": {
    "purpose": "Retry only newest failed job per media and skip any media with active work; returns count.",
    "auth": "Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmRetryFailedResponse"
  },
  "drm:DELETE /api/v1/drm/jobs/{id}": {
    "purpose": "Cancel active job and update package/media transactionally; finished job400; success204.",
    "auth": "Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/packages/{kind}/{media_id}": {
    "purpose": "Read newest job for media UUID; kind path member is ignored by pinned handler; response contains key/content_type/policy/status plus job_id/progress.",
    "auth": "Local AuthContext requires drm:package:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmLegacyStatus"
  },
  "drm:POST /api/v1/packages": {
    "purpose": "Legacy video enqueue; omitted download/transcode/package default false (unlike modern config); returns202 with job_id/status.",
    "auth": "Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmLegacyEnqueue",
    "input": "import(\"./wire.types.js\").DrmLegacyPackageInput"
  },
  "drm:GET /api/v1/libraries": {
    "purpose": "List only public libraries ordered by name; direct get by ID can read private libraries with route permission.",
    "auth": "Local AuthContext requires drm:library:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmContentLibrary)[]"
  },
  "drm:POST /api/v1/libraries": {
    "purpose": "Create public/private library; defaults public/active; blank name400. Existing explicit ID200, new201.",
    "auth": "Local AuthContext requires drm:library:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmContentLibrary",
    "input": "import(\"./wire.types.js\").DrmLibraryInput"
  },
  "drm:GET /api/v1/libraries/{id}": {
    "purpose": "Get library. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:library:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmContentLibrary"
  },
  "drm:PATCH /api/v1/libraries/{id}": {
    "purpose": "Replace library name/description and optionally status/visibility; description omitted clears; visibility only public/private.",
    "auth": "Local AuthContext requires drm:library:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmContentLibrary",
    "input": "import(\"./wire.types.js\").DrmLibraryInput"
  },
  "drm:DELETE /api/v1/libraries/{id}": {
    "purpose": "Permanently delete library, categories, items, compositions and linked external references transactionally; requires dedicated library delete permission; success204.",
    "auth": "Local AuthContext requires drm:library:delete (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/libraries/{id}/categories": {
    "purpose": "List categories. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:library:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmContentCategory)[]"
  },
  "drm:POST /api/v1/libraries/{id}/categories": {
    "purpose": "Create category; parent must be in the same library or mixed media scope. Returns201, or200 on an existing explicit generic category ID.",
    "auth": "Local AuthContext requires drm:library:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmContentCategory",
    "input": "import(\"./wire.types.js\").DrmGenericCategoryInput"
  },
  "drm:PATCH /api/v1/libraries/{library_id}/categories/{id}": {
    "purpose": "Replace title and parent; reject self-parent. Generic library route and mixed-media route enforce their respective parent scope.",
    "auth": "Local AuthContext requires drm:library:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmContentCategory",
    "input": "import(\"./wire.types.js\").DrmGenericCategoryInput"
  },
  "drm:DELETE /api/v1/libraries/{library_id}/categories/{id}": {
    "purpose": "Archive category descendants and contained content transactionally; returns204. Category must belong to path library.",
    "auth": "Local AuthContext requires drm:library:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/libraries/{id}/items": {
    "purpose": "List items. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:content:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmMediaPart)[]"
  },
  "drm:POST /api/v1/libraries/{id}/items": {
    "purpose": "Create reusable content; state must be Question/Task/Interactive/Game. Negative duration clamps0. rewards is accepted but stored as empty object. Explicit existing ID returns200, otherwise201.",
    "auth": "Local AuthContext requires drm:content:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaPart",
    "input": "import(\"./wire.types.js\").DrmContentItemInput"
  },
  "drm:GET /api/v1/libraries/{id}/stats": {
    "purpose": "Library stats. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:library:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmLibraryStats"
  },
  "drm:GET /api/v1/libraries/{id}/items/query": {
    "purpose": "Page unarchived library items by title; page1,size30,size clamps1..100. category_id includes descendants unless direct=true. errors=true finds missing/failed media; search filters title.",
    "auth": "Local AuthContext requires drm:content:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmPage<import(\"./wire.types.js\").DrmMediaPart>",
    "query": "import(\"./wire.types.js\").DrmContentItemsQuery"
  },
  "drm:GET /api/v1/libraries/{library_id}/items/{id}": {
    "purpose": "Read item by UUID. The pinned handler ignores library_id when fetching; callers must select the intended library and deployment authorization remains authoritative.",
    "auth": "Local AuthContext requires drm:content:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaPart"
  },
  "drm:PUT /api/v1/libraries/{library_id}/items/{id}": {
    "purpose": "Replace item fields, checking path library. Negative duration clamps0; rewards is stored as empty object. Omitted optional members clear/reset corresponding fields.",
    "auth": "Local AuthContext requires drm:content:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaPart",
    "input": "import(\"./wire.types.js\").DrmContentItemInput"
  },
  "drm:DELETE /api/v1/libraries/{library_id}/items/{id}": {
    "purpose": "Archive item. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:content:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/libraries/{library_id}/items/{id}/attachments": {
    "purpose": "Item attachments. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:content:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmContentItemMedia)[]"
  },
  "drm:POST /api/v1/libraries/{library_id}/items/{id}/attachments": {
    "purpose": "Attach primary/hint media; is_current demotes prior current attachment in the slot and updates the item media pointer; position clamps0; existing link200, new201.",
    "auth": "Local AuthContext requires drm:content:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmContentItemMedia",
    "input": "import(\"./wire.types.js\").DrmAttachmentInput"
  },
  "drm:GET /api/v1/compositions": {
    "purpose": "Page compositions by updated time descending; defaults page1,size20 (clamps1..100). uncategorized=true overrides category_id; category filter includes descendants; search matches name/description.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmPage<import(\"./wire.types.js\").DrmMixedMedia>",
    "query": "import(\"./wire.types.js\").DrmCompositionQuery"
  },
  "drm:POST /api/v1/compositions": {
    "purpose": "Create composition. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMedia",
    "input": "import(\"./wire.types.js\").DrmCompositionInput"
  },
  "drm:GET /api/v1/composition-categories": {
    "purpose": "List composition categories. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmCompositionCategory)[]"
  },
  "drm:POST /api/v1/composition-categories": {
    "purpose": "Create composition category. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmCompositionCategory",
    "input": "import(\"./wire.types.js\").DrmCompositionCategoryInput"
  },
  "drm:PATCH /api/v1/composition-categories/{id}": {
    "purpose": "Update composition category. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmCompositionCategory",
    "input": "import(\"./wire.types.js\").DrmCompositionCategoryInput"
  },
  "drm:DELETE /api/v1/composition-categories/{id}": {
    "purpose": "Delete composition category. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/compositions/{id}/workflow": {
    "purpose": "Get workflow. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMediaWorkflow"
  },
  "drm:PUT /api/v1/compositions/{id}/workflow": {
    "purpose": "Replace nodes and edges arrays and increment revision; returns400 if either is not an array. Node data remains editor-defined JSON.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMediaWorkflow",
    "input": "import(\"./wire.types.js\").DrmWorkflowInput"
  },
  "drm:GET /api/v1/compositions/{id}/manifests": {
    "purpose": "List manifests. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmMixedMediaManifest)[]"
  },
  "drm:POST /api/v1/compositions/{id}/manifests": {
    "purpose": "Store caller-supplied historical JSON document and increment composition manifest version. Existing explicit manifest ID returns200, otherwise201.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMediaManifest",
    "input": "import(\"./wire.types.js\").DrmHistoricalManifestInput"
  },
  "drm:POST /api/v1/compositions/{id}/publish": {
    "purpose": "Validate a nonempty, singly started, connected acyclic workflow and ready video references, then create versioned manifest201. Referenced unarchived items may come from other libraries; launches Knowledge sync/optional analysis.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMixedMediaManifest"
  },
  "drm:GET /api/v1/external-references": {
    "purpose": "List external references. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:composition:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmExternalReference)[]",
    "query": "import(\"./wire.types.js\").DrmExternalReferenceQuery"
  },
  "drm:POST /api/v1/external-references": {
    "purpose": "Create external mapping or return existing identical mapping; conflicting internal target409; existing metadata is preserved.",
    "auth": "Local AuthContext requires drm:composition:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmExternalReference",
    "input": "import(\"./wire.types.js\").DrmExternalReferenceInput"
  },
  "drm:POST /api/v1/upload-sessions": {
    "purpose": "Create24-hour resumable session for audio/video/image; total_bytes positive; default part10MiB clamped5..64MiB; existing media_id409; returns201 with sorted parts.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmUploadSessionResponse",
    "input": "import(\"./wire.types.js\").DrmUploadSessionInput"
  },
  "drm:GET /api/v1/upload-sessions/{id}": {
    "purpose": "Get upload session. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:media:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmUploadSessionResponse"
  },
  "drm:DELETE /api/v1/upload-sessions/{id}": {
    "purpose": "Abort uploading storage session and mark cancelled; returns204, including sessions already completed/cancelled.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:PUT /api/v1/upload-sessions/{id}/parts/{part_number}": {
    "purpose": "Send raw bytes (not JSON/multipart), part_number1..10000; nonempty body no larger than session part_size; expired/non-uploading409. Re-upload replaces stored part metadata.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmUploadPart",
    "input": "import(\"./wire.types.js\").DrmUploadPartBody",
    "pathTypes": {
      "part_number": "number"
    }
  },
  "drm:POST /api/v1/upload-sessions/{id}/complete": {
    "purpose": "Complete multipart when uploaded sizes sum total_bytes, verify stored size and register media201; repeat completed session200. checksum_sha256 is stored client metadata, not independently verified.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaRecord",
    "input": "import(\"./wire.types.js\").DrmCompleteUploadInput"
  },
  "drm:POST /api/v1/media/register": {
    "purpose": "Register existing originals/ object (reject ..) after actual size verification; accepts audio/video/image. Existing ID returns200; new201; video queues DRM/transcription.",
    "auth": "Local AuthContext requires drm:media:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmMediaRecord",
    "input": "import(\"./wire.types.js\").DrmRegisterMediaInput"
  },
  "drm:GET /api/v1/media/{id}/packages": {
    "purpose": "List packages. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:package:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmPackageResponse)[]"
  },
  "drm:POST /api/v1/media/{id}/packages": {
    "purpose": "Enqueue/deduplicate video packaging; JSON null selects default config; send null rather than an absent JSON body. Returns202 raw job without media_name/media_type.",
    "auth": "Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmJob",
    "jsonBody": true,
    "input": "import(\"./wire.types.js\").DrmConfig | null"
  },
  "drm:GET /api/v1/packages/{package_id}/files/{*path}": {
    "purpose": "Download raw ready package bytes with optional Range header. Returns200 or206 with Content-Range/Accept-Ranges/Content-Type/cache metadata. Not-ready409; invalid path400; missing object404.",
    "auth": "Local AuthContext requires drm:package:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmPackageFile",
    "binaryDownload": true
  },
  "drm:DELETE /api/v1/media/packages/{id}": {
    "purpose": "Archive package. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:package:write (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "void"
  },
  "drm:GET /api/v1/licenses/clearkey": {
    "purpose": "Read temporary ClearKey JWK document; package_id UUID required. Keep key material private and use authenticated shared transport.",
    "auth": "Local AuthContext requires drm:license:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmClearKeyLicense",
    "query": "import(\"./wire.types.js\").DrmPackageQuery",
    "requiredQuery": true
  },
  "drm:GET /api/v1/dashboard/summary": {
    "purpose": "Read global media/content/package counts and latest10 updated jobs.",
    "auth": "Local AuthContext requires drm:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmDashboard"
  },
  "drm:GET /api/v1/operations/health": {
    "purpose": "Read dependency/tool/storage health including nullable tool versions and public_url; service marker remains ok even if dependencies are false.",
    "auth": "Local AuthContext requires drm:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmHealth"
  },
  "drm:GET /api/v1/operations/transcription-models": {
    "purpose": "Transcription models. Returns the bare JSON payload with full Axios status/headers; missing records404 and validation400.",
    "auth": "Local AuthContext requires drm:manage (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "(import(\"./wire.types.js\").DrmTranscriptionModel)[]"
  },
  "drm:GET /api/v1/operations/knowledge-catalog": {
    "purpose": "Proxy Knowledge platform catalog verbatim; requires x-organization-id UUID unless server default configured. Forwards Authorization or configured service credential. Upstream failures500.",
    "auth": "Local AuthContext requires drm:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmKnowledgeCatalog"
  },
  "drm:GET /api/v1/operations/settings": {
    "purpose": "Read persisted settings. Knowledge settings read creates default row for an existing composition; absent composition404. Operations settings require drm:manage.",
    "auth": "Local AuthContext requires drm:manage (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmSettingsResponse"
  },
  "drm:PATCH /api/v1/operations/settings": {
    "purpose": "Update operational or Knowledge settings. Operations package_concurrency1..16; enabled transcription requires speech and summary models. Knowledge enabled requires knowledge_base_id and organization context; starts immediate sync.",
    "auth": "Local AuthContext requires drm:manage (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmSettingsResponse",
    "input": "import(\"./wire.types.js\").DrmSettingsInput"
  },
  "drm:GET /api/v1/audit-events": {
    "purpose": "Page audit events descending created_at; defaults page1,size50, clamps1..100; from/to inclusive timestamps.",
    "auth": "Local AuthContext requires drm:audit:read (management/wildcard aliases accepted). Pinned IDP SDK extracts trusted x-user-* headers with dev-fallback and does not verify tokens; use an enforcing gateway. FaiberClient forwards configured Bearer/cookie credentials; deployed gateway authority remains unverified",
    "response": "import(\"./wire.types.js\").DrmPage<import(\"./wire.types.js\").DrmAuditEvent>",
    "query": "import(\"./wire.types.js\").DrmAuditQuery"
  }
};
