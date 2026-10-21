// Direct immutable mounted router/handler/model/auth/repository review at 7a395d7149a2d4c03d3e1d4746b69919a52cbb05. Native acceptance pending.
import { routerContracts } from "./router-contract-overrides.mjs";
export const sessionReviewedOperationContracts = {
  "session:GET /": {
    "purpose": "Read public liveness and hard-coded service version; no database readiness probe.",
    "auth": "No local permission requirement; production auth context middleware still runs"
  },
  "session:GET /api/v1/config/branding": {
    "purpose": "Read flattened branding with nullable title/icon and locale map. Requires a non-nil user and config:read.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; config:read"
  },
  "session:PUT /api/v1/config/branding": {
    "purpose": "Replace branding; omitted fields reset to defaults. Locale keys normalize lowercase, titles trim (500 characters max), at most 30 locales; icon URL derives from uploaded key. Invalid/unuploaded keys return422.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; config:update"
  },
  "session:POST /api/v1/config/branding/assets": {
    "purpose": "Upload FormData with file as its first field. PNG/JPEG/WebP signature and MIME must match; nonempty image at most8MiB. Returns asset_key and URL; malformed, oversized and unsupported files return400/413/415.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; config:update",
    "response": "import(\"./reviewed-wire.js\").SessionBrandingUploadResponse"
  },
  "session:GET /api/v1/config/livekit": {
    "purpose": "Read LiveKit/recording/AI settings with secret-presence booleans; secrets are never returned.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; config:read"
  },
  "session:PUT /api/v1/config/livekit": {
    "purpose": "Replace LiveKit settings. Missing/null/blank secret fields preserve existing secrets; omitted audio_processing_enabled becomes false, audio_language defaults auto. Model refs may clear with null. Invalid URLs, language, schedules and model configuration return422.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; config:update"
  },
  "session:GET /api/v1/integration/docs": {
    "purpose": "Read browser integration steps and code snippets with the configured public LiveKit websocket URL.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; integration:read"
  },
  "session:GET /api/v1/integrations/chat/tool-schema": {
    "purpose": "Read the two stable assistant tool schemas (session_list and session_detail). This route has no local permission gate.",
    "auth": "No local permission requirement; production auth context middleware still runs",
    "response": "import(\"./reviewed-wire.js\").SessionToolSchemaResponse"
  },
  "session:GET /api/v1/integrations/chat/users/{user_id}/sessions": {
    "purpose": "List the specified user participant rooms by newest activity. q searches room name; limit defaults20 and clamps1..100. Latest analysis is restricted to that user and transcript truncates to1200 characters.",
    "auth": "Own user plus assistant_session:read_own OR room_recording:read_own OR room:read_recordings; OR assistant_session:read_all/room_recording:read_all. * and session:* accepted",
    "response": "import(\"./reviewed-wire.js\").SessionAssistantListResponse"
  },
  "session:GET /api/v1/integrations/chat/users/{user_id}/sessions/{room_id}": {
    "purpose": "Read one room only if the specified user is a participant; missing membership/room returns404. Own access filters analyses to that user; read_all includes all room analyses. DRM manifest and model analysis remain provider-owned JSON.",
    "auth": "Own user plus assistant_session:read_own OR room_recording:read_own OR room:read_recordings; OR assistant_session:read_all/room_recording:read_all. * and session:* accepted",
    "response": "import(\"./reviewed-wire.js\").SessionAssistantDetailResponse"
  },
  "session:GET /api/v1/integrations/lms/rooms/{id}/notification-state": {
    "purpose": "Read trusted LMS notification state. Header x-infera-lms-token must match LMS_SERVICE_TOKEN (403 on mismatch,503 if missing/provider unavailable). This read can persist learning start and an outbox event; LiveKit probe timeout is5s.",
    "auth": "Trusted server-only x-infera-lms-token matching LMS_SERVICE_TOKEN"
  },
  "session:GET /api/v1/public/branding": {
    "purpose": "Read public flattened branding and nullable runtime-validated feedback_task_origin. This origin cannot be saved through branding.",
    "auth": "No local permission requirement; production auth context middleware still runs"
  },
  "session:GET /api/v1/public/branding/assets/{key}": {
    "purpose": "Read public raw branding image bytes with immutable cache headers. Invalid/missing UUID.extension key returns404; this is not a JSON envelope.",
    "auth": "No local permission requirement; production auth context middleware still runs",
    "response": "import(\"./reviewed-wire.js\").SessionBrandingAssetBytes",
    "binaryDownload": true
  },
  "session:GET /api/v1/recordings": {
    "purpose": "Page recording queue with page_number/page_size (default1/10, page>=1 and size1..100), escaped literal search and exact status filter. Returns recordings and meta; sorted by started_at descending.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room_recording:read; aliases room_recording:read_all, room:read_recordings"
  },
  "session:GET /api/v1/recordings/{recording_id}/manifest": {
    "purpose": "Read typed recording tracks and analyses; missing recording returns404. Own read requires current room-client membership; global/admin scopes are accepted. Analysis remains model-owned JSON.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room_recording:read; aliases room_recording:read_all, room_recording:read_own, room:read_recordings"
  },
  "session:POST /api/v1/recordings/{recording_id}/schedule": {
    "purpose": "Schedule ready/scheduled/failed recording processing; raw_capturing/processing/archived/deleting or raced transitions return409. process_at is timezone-free ISO datetime. Omitted/null optional audio fields preserve current values.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room_recording:process"
  },
  "session:GET /api/v1/recordings/audio-models": {
    "purpose": "Read normalized Agentic audio model catalog using configured financial owner or current config user; missing owner/upstream failure returns502.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; config:read"
  },
  "session:POST /api/v1/room_states/{room_state_id}/respond": {
    "purpose": "Respond as a current participant to question/task/game state. Staff cannot answer questions/tasks. values are required; evidence_images defaults empty. Failed task validation returns200 with validated:false, without persisting completion. Accepted replies may advance the active cohort and emit rewards.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room_state:respond; aliases room:read_own"
  },
  "session:GET /api/v1/rooms": {
    "purpose": "List rooms with page_number/page_size (default1/10; supply positive values), custom_only and normalized Persian/literal search. Returns data.rooms without pagination metadata. status is numeric; current_state uses Rust enum variant casing.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:read; aliases room:read_all, room:read_own"
  },
  "session:POST /api/v1/rooms": {
    "purpose": "Create a room with required name/capacity/starts_at; starts_at is timezone-free ISO datetime. Room-state names use PascalCase (ChargeLow), numeric room status defaults1. Composition rooms materialize DRM state later. Returns200 data.room.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:create; aliases room:read, room:read_own"
  },
  "session:DELETE /api/v1/rooms/{room_id}": {
    "purpose": "Delete room and dependent records; returns200 data.room snapshot of the deleted room, not a generic deleted boolean. Missing room returns404; started-room media cleanup is best effort.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:delete"
  },
  "session:GET /api/v1/rooms/{room_id}": {
    "purpose": "Read room detail with nullable timestamps/current_state and numeric status. Requires preview access or own room membership; missing room returns404.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:read; aliases room:read_all, room:read_own"
  },
  "session:PATCH /api/v1/rooms/{room_id}": {
    "purpose": "Partially update a room via PUT or PATCH (same handler). Omitted/null optional fields preserve values; users/states arrays synchronize membership/states. Before start, timing/state edits reset lifecycle; after start progress is retained. Missing room currently returns500.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:update"
  },
  "session:PUT /api/v1/rooms/{room_id}": {
    "purpose": "Partially update a room via PUT or PATCH (same handler). Omitted/null optional fields preserve values; users/states arrays synchronize membership/states. Before start, timing/state edits reset lifecycle; after start progress is retained. Missing room currently returns500.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:update"
  },
  "session:POST /api/v1/rooms/{room_id}/end": {
    "purpose": "End current room; requires teacher/admin/manager role or current LMS teacher in addition to permission. Returns200 {status,message} without data; absent room returns404.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:end"
  },
  "session:POST /api/v1/rooms/{room_id}/interactions": {
    "purpose": "Queue a server-authorized interaction for an unmuted participant in an active room. Reuse event_id only for identical interaction/content; changed or pending retries return409. content max4096 encoded bytes; disabled interactions return422. Asset receipt returns unchanged.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:read_own; aliases room:read"
  },
  "session:POST /api/v1/rooms/{room_id}/interactive/start": {
    "purpose": "Start interactive state for a current room participant after asset checks; no request body. Returns200 {status,message} without data; missing room/client returns404.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:start_interactive; aliases room:read_own"
  },
  "session:GET /api/v1/rooms/{room_id}/join": {
    "purpose": "Issue fresh LiveKit participant token after preview/participant checks and asset admission. Ended room returns empty token. chat_model_ref/chat_assistant_id/realtime are omitted when unavailable; membership and provider grants are enforced server-side.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:read_livekit_token; aliases room:read, room:read_all, room:read_own"
  },
  "session:GET /api/v1/rooms/{room_id}/leaderboard": {
    "purpose": "Read active seconds, earned coins and asset names per participant; this handler has no extra room-membership check beyond declared permission.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:read_own; aliases room:read, room:read_all"
  },
  "session:GET /api/v1/rooms/{room_id}/livekit-token": {
    "purpose": "Issue LiveKit preview/participant token after preview/membership checks; ended room returns409 and missing room returns404.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:read_livekit_token; aliases room:read, room:read_all, room:read_own, room_recording:read, room_recording:read_all, room_recording:read_own"
  },
  "session:GET /api/v1/rooms/{room_id}/moderation": {
    "purpose": "Read current participant mute status; expired mute becomes null. Authenticated user and existing participant are required; absent participant returns404.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:read_own; aliases room:read, room:read_all"
  },
  "session:PUT /api/v1/rooms/{room_id}/participants/{profile_id}/mute": {
    "purpose": "Mute/unmute a student as teacher/admin/manager or current LMS teacher. Self mute returns400, staff targets403, unverifiable LMS staff503. Returns nullable muted_until.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:end; aliases room:update, room:read, room:read_own"
  },
  "session:GET /api/v1/rooms/{room_id}/playback": {
    "purpose": "Read full playback room/states after preview and readiness checks. Classroom session IDs can resolve through LMS. Unready/untimed composition returns409; timestamps include nullable available_until.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:read_playback; aliases room:read, room:read_all, room:read_own, room_recording:read, room_recording:read_all, room_recording:read_own"
  },
  "session:GET /api/v1/rooms/{room_id}/presence-events": {
    "purpose": "Read joined/left activity-log events for an authorized previewer or participant, sorted by timestamp then ID. Output timestamps are UTC; missing room returns404.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:read; aliases room:read_all, room:read_own"
  },
  "session:GET /api/v1/rooms/{room_id}/recordings": {
    "purpose": "Read recording list and analyses after recording permission and current membership/global/admin checks; presigned URLs are returned, with model-produced analysis JSON.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room_recording:read; aliases room_recording:read_all, room_recording:read_own, room:read_recordings"
  },
  "session:GET /api/v1/rooms/{room_id}/stop": {
    "purpose": "Stop room using its registered GET route and return200 data.room. This operation mutates state; missing room returns404.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:stop"
  },
  "session:GET /api/v1/rooms/analytics": {
    "purpose": "Read ongoing sessions, today sessions and distinct ongoing/today connected users from repository activity and room records.",
    "auth": "IDP Bearer token or secure cookie via shared FaiberClient; room:read_analytics"
  },
  "session:POST /api/v1/rooms/livekit/webhook": {
    "purpose": "Receive signed LiveKit webhook raw bytes; preserve the signed body exactly and supply Authorization. Invalid/missing signature returns401. Success returns200 {status,message} without data; this is server-to-server transport.",
    "auth": "LiveKit webhook Authorization signature; preserve exact body bytes"
  },
  "session:GET /api/v1/summary-access": {
    "purpose": "Read native observation policy with current IDP Bearer authority session:summary_access:manage; cookie-only and spoofed actor headers are insufficient. Binding is source-owned; this is not an MCP session.",
    "auth": "Current IDP Bearer authority session:summary_access:manage; source binding and downstream collector checks"
  },
  "session:PUT /api/v1/summary-access": {
    "purpose": "Save native observation policy with optimistic expected_revision (stale409), required reason max1024 Unicode characters, and current collector session:summary:read validation when enabling. After503 reload current state before retrying; mutation may have committed.",
    "auth": "Current IDP Bearer authority session:summary_access:manage; source binding and downstream collector checks"
  },
  "session:POST /api/v1/summary-access/revocations": {
    "purpose": "Revoke one native summary object with required reason max1024 Unicode characters. Revocation survives policy disable/re-enable. Reload current state after503 because mutation can commit before status reconciliation fails.",
    "auth": "Current IDP Bearer authority session:summary_access:manage; source binding and downstream collector checks"
  },
  "session:DELETE /api/v1/summary-access/revocations/{object}": {
    "purpose": "Restore a native summary object using JSON DELETE body with required reason max1024 Unicode characters. Reload after503; restored status can lag reconciliation.",
    "auth": "Current IDP Bearer authority session:summary_access:manage; source binding and downstream collector checks"
  },
  "session:ANY /api/v1/view/{service}/{*path}": {
    ...routerContracts["session:ANY /api/v1/view/{service}/{*path}"],
    "purpose": "Forward opaque peer bytes through Session actor extraction to chat/asset/profile/drm/lms; explicit HTTP method and separate query. Body max2MiB (413); missing configured Chat/DRM/LMS or upstream failure502; unknown peer404. Chat room grants enforce membership and filter collections; DRM path-based read grants do not prove room membership. Response headers are allowlisted; SDK buffers upstream streams.",
    "auth": "Extracted IDP actor; Session room/peer authorization plus target-service current authorization"
  },
  "session:GET /health": {
    "purpose": "Read public liveness and hard-coded service version; no database readiness probe.",
    "auth": "No local permission requirement; production auth context middleware still runs"
  },
  "session:GET /integration/flow": {
    "purpose": "Read Flow integration queue/events from the pinned infera-flow-sdk model; mounted at root /integration/flow.",
    "auth": "No local permission requirement; production auth context middleware still runs",
    "response": "import(\"./reviewed-wire.js\").SessionFlowIntegrationResponse"
  }
};
