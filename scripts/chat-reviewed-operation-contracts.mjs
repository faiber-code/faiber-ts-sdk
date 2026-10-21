// Direct immutable Chat source review at 03dd17ad3a1f6a36f5b6ad42e8e11729b44ebc55. Native verification pending.
export const chatReviewedOperationContracts = {
  "chat:GET /health": {
    "purpose": "Read public process liveness/version/Agentic execution identity; this does not probe database readiness.",
    "auth": "public process liveness"
  },
  "chat:GET /api/v1/admin/image-settings": {
    "purpose": "Read current organization versioned image settings; requires assistant:manage.",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:PUT /api/v1/admin/image-settings": {
    "purpose": "Save image capture settings with optimistic version (0 creates); enabled models must exist and support vision. Stale revisions return 409.",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:GET /api/v1/admin/image-models": {
    "purpose": "Read configured model catalog unchanged from upstream; image catalog filters vision-capable entries.",
    "response": "import(\"./reviewed-wire.js\").AssistantModelsResponse",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:GET /api/v1/image-status": {
    "purpose": "Read image capture enabled state; assistant:read OR assistant:manage is accepted.",
    "response": "import(\"./reviewed-wire.js\").ImageStatusResponse",
    "auth": "assistant:read OR assistant:manage"
  },
  "chat:POST /api/v1/fitness/intake-extract": {
    "purpose": "Extract only allowed intake keys for a current enabled fitness member. text is at most 12000 bytes; locale is en/fa. Model-produced values are not type-coerced by this backend.",
    "response": "import(\"./reviewed-wire.js\").FitnessIntakeResponse",
    "input": "import(\"./reviewed-wire.js\").FitnessIntakeInput",
    "auth": "Authenticated current enabled fitness member, validated by Profile"
  },
  "chat:GET /api/v1/fitness/models": {
    "purpose": "Read fitness-authorized LLM and speech catalogs using current upstream fitness settings access.",
    "response": "import(\"./reviewed-wire.js\").FitnessModelsResponse",
    "auth": "Authenticated current Profile fitness settings access"
  },
  "chat:POST /api/v1/learning/runs/{id}/questions": {
    "purpose": "Ask the LMS-run teacher using a UUID idempotency_key. Current chat:ai and run ownership/access are checked; identical retries reuse the presentation and daily quota conflicts return 409.",
    "response": "import(\"./learning.js\").LearningQuestionResponse",
    "auth": "Authenticated IDP session; chat:ai"
  },
  "chat:GET /api/v1/learning/runs/{id}/messages": {
    "purpose": "Read at most 40 current learner messages in chronological order after current LMS teacher-context authorization; returns id, role and extracted text only.",
    "response": "import(\"./learning.js\").LearningHistoryResponse",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:GET /api/v1/admin/speech-settings": {
    "purpose": "Read current organization versioned speech settings; requires assistant:manage.",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:PUT /api/v1/admin/speech-settings": {
    "purpose": "Save speech settings with optimistic version after the fitness settings boundary. Omitted/null language_models preserves overrides; {} clears them. Fitness instances reject generic changes.",
    "input": "import(\"./reviewed-wire.js\").SpeechSettingsInput",
    "auth": "Authenticated IDP session; current downstream authorization as documented"
  },
  "chat:GET /api/v1/admin/speech-models": {
    "purpose": "Read configured model catalog unchanged from upstream; image catalog filters vision-capable entries.",
    "response": "import(\"./reviewed-wire.js\").SpeechModelsResponse",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:POST /api/v1/speech/live": {
    "purpose": "Forward ordered live speech actions through current configured language model with chat:ai. JSON body limit is 72 KiB and audio_base64 is at most 65536 characters. Provider result passes through unchanged.",
    "response": "import(\"./speech-live.js\").LiveSpeechResponse",
    "input": "import(\"./speech-live.js\").LiveSpeechInput",
    "auth": "Authenticated IDP session; chat:ai"
  },
  "chat:GET /api/v1/speech/status": {
    "purpose": "Read speech availability, engine, model_ref and max_bytes using current configured models; requires chat:ai.",
    "response": "import(\"./reviewed-wire.js\").ChatSpeechStatusResponse",
    "auth": "Authenticated IDP session; chat:ai"
  },
  "chat:POST /api/v1/speech/voice": {
    "purpose": "Meter assistant voice under current Task project access and allowance; stable id/chunk sequence supports retries. Transcribe accepts canonical mono 16 kHz PCM WAV up to 60 seconds; TTS text is at most 600 characters. Feature disabled returns 404.",
    "auth": "Authenticated IDP session; chat:ai"
  },
  "chat:POST /api/v1/speech/tts": {
    "purpose": "Synthesize 1..5000 trimmed characters with chat:ai. Wire format is lowercase mp3/wav; omitted/null format selects WAV on the backend. Returns raw audio bytes, no envelope; mismatched provider content type returns 502.",
    "response": "import(\"./reviewed-wire.js\").SpeechAudioBytes",
    "input": "import(\"./types.js\").SpeechSynthesisInput",
    "binaryDownload": true,
    "auth": "Authenticated IDP session; chat:ai"
  },
  "chat:POST /api/v1/speech/transcribe": {
    "purpose": "Transcribe raw audio/webm, audio/ogg, audio/mp4, audio/wav or audio/mpeg, up to 8 MiB. Required language is en/fa/auto. Supply the audio Content-Type header; private temporary storage is cleaned up.",
    "response": "import(\"./reviewed-wire.js\").ChatSpeechTranscriptResponse",
    "query": "import(\"./reviewed-wire.js\").SpeechTranscriptionQuery",
    "binaryContentType": "blob",
    "requiredQuery": true,
    "auth": "Authenticated IDP session; chat:ai"
  },
  "chat:GET /api/v1/admin/assistant-policy-operations/{id}": {
    "purpose": "Read the tenant-scoped retained configuration intent. Current assistant:manage is required; credentials/grants are never retained.",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:POST /api/v1/admin/assistant-policy-operations/{id}": {
    "purpose": "Recover or cancel an exact durable assistant configuration intent using current assistant:manage and fitness settings guard. Applied operations return their retained result; conflicts require explicit review.",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:GET /api/v1/assistants": {
    "purpose": "List active nondeleted assistant catalog items (id, name, status) ordered by update time; this repository list has no organization predicate.",
    "response": "import(\"./reviewed-wire.js\").AssistantCatalogResponse",
    "auth": "Authenticated IDP session; assistant:read"
  },
  "chat:GET /api/v1/workspace-assistants": {
    "purpose": "List active assistant workspace role bindings for this organization; enabled bindings are returned, plus staged bindings for configured pilot users.",
    "response": "import(\"./workspace.js\").WorkspaceAssistantBindingsResponse",
    "auth": "Authenticated IDP session; assistant:read"
  },
  "chat:GET /api/v1/admin/workspace-assistants": {
    "purpose": "List all stored organization workspace role bindings including disabled rows, ordered by role.",
    "response": "import(\"./workspace.js\").ManagedWorkspaceRolesResponse",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:PUT /api/v1/admin/workspace-assistants/{role}": {
    "purpose": "Bind action/chat role using its matching 2done-action/2done-chat Knowledge slug. Enabling validates the published contract; expected_version 0 creates and stale revisions conflict.",
    "response": "import(\"./workspace.js\").WorkspaceAssistantBindingResponse",
    "input": "import(\"./workspace.js\").WorkspaceAssistantBindingInput",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:GET /api/v1/assistants/{id}": {
    "purpose": "Read one active nondeleted assistant catalog item (id, name, status); this lookup has no organization predicate.",
    "response": "import(\"./reviewed-wire.js\").AssistantCatalogItemResponse",
    "auth": "Authenticated IDP session; assistant:read"
  },
  "chat:GET /api/v1/admin/assistants": {
    "purpose": "List nondeleted managed assistant records ordered by updated_at; the repository has no organization filter on this list, so caller/gateway authority remains essential.",
    "response": "import(\"./reviewed-wire.js\").ManagedAssistantsResponse",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:POST /api/v1/admin/assistants": {
    "purpose": "Create a managed assistant (201) using a non-nil caller configuration UUID. Keep the UUID and exact request for retries; governed configuration reconciles Knowledge policy before application.",
    "response": "import(\"./reviewed-wire.js\").ManagedAssistantResponse",
    "auth": "Authenticated IDP session; assistant:manage",
    "input": "import(\"./reviewed-wire.js\").ChatCreateAssistantInput"
  },
  "chat:GET /api/v1/admin/assistants/{id}": {
    "purpose": "Read managed assistant detail for this organization including expected_knowledge_policy_revision; capture both revisions when opening an edit draft.",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:PUT /api/v1/admin/assistants/{id}": {
    "purpose": "Apply a managed assistant edit with configuration_id and both captured Chat/Knowledge revisions. Omitted knowledge_level preserves it; explicit null clears it. Stale or pending competing edits return 409.",
    "response": "import(\"./reviewed-wire.js\").ManagedAssistantResponse",
    "auth": "Authenticated IDP session; assistant:manage",
    "input": "import(\"./reviewed-wire.js\").ChatUpdateAssistantInput"
  },
  "chat:DELETE /api/v1/admin/assistants/{id}": {
    "purpose": "Soft-delete a managed assistant after fitness and pending configuration guards; returns 204.",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:GET /api/v1/admin/assistant-models": {
    "purpose": "Return Agentic model catalog unchanged for billing_payer user or project_owner (default project_owner); upstream errors return 502.",
    "response": "import(\"./reviewed-wire.js\").AssistantModelsResponse",
    "query": "import(\"./reviewed-wire.js\").AssistantModelsQuery",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:GET /api/v1/admin/assistant-context-catalog": {
    "purpose": "Return Knowledge platform catalog data unchanged; upstream missing data is null. Requires assistant:manage.",
    "response": "import(\"./reviewed-wire.js\").AssistantContextCatalogResponse",
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:GET /api/v1/admin/customer-action-content": {
    "purpose": "Discover up to the upstream first 100 products, LMS courses or weblog posts and normalize content links. q is trimmed and case-insensitively filters title/description; products also forward search.",
    "response": "import(\"./reviewed-wire.js\").CustomerActionContentResponse",
    "query": "import(\"./reviewed-wire.js\").CustomerActionContentQuery",
    "requiredQuery": true,
    "auth": "Authenticated IDP session; assistant:manage"
  },
  "chat:GET /api/v1/conversations": {
    "purpose": "List current active memberships in nondeleted, nonquarantined organization conversations ordered by last message; direct rooms must retain exactly their private pair.",
    "response": "import(\"./reviewed-wire.js\").ChatConversationsResponse",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:POST /api/v1/conversations": {
    "purpose": "Create a conversation (201); direct rooms require exactly two distinct members and deduplicate by pair. Reserved learning slugs/settings are rejected. Configured LMS contact policy and guest assistant restrictions are enforced.",
    "response": "import(\"./reviewed-wire.js\").ChatConversationResponse",
    "auth": "Authenticated IDP session; chat:write",
    "input": "import(\"./types.js\").CreateConversationInput"
  },
  "chat:GET /api/v1/conversations/{id}": {
    "purpose": "Read one accessible conversation; membership, organization, deleted/quarantined state and private direct-room rules are rechecked.",
    "response": "import(\"./reviewed-wire.js\").ChatConversationResponse",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:PUT /api/v1/conversations/{id}": {
    "purpose": "Update conversation fields with optional expected_version; null preserves optional values. Stale versions conflict. Conversation access and write role are checked.",
    "response": "import(\"./reviewed-wire.js\").ChatConversationResponse",
    "auth": "Authenticated IDP session; chat:write"
  },
  "chat:DELETE /api/v1/conversations/{id}": {
    "purpose": "Archive the accessible conversation; requires the owner and returns 204 with no body.",
    "auth": "Authenticated IDP session; chat:delete"
  },
  "chat:GET /api/v1/conversations/{id}/members": {
    "purpose": "List active members of an accessible conversation ordered by joined_at; includes state, notification settings and read sequence.",
    "response": "import(\"./reviewed-wire.js\").ChatMembersResponse",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:POST /api/v1/conversations/{id}/members": {
    "purpose": "Add a member (201); owner/admin role and contact/direct-room restrictions apply.",
    "response": "import(\"./reviewed-wire.js\").ChatMemberResponse",
    "auth": "Authenticated IDP session; chat:manage"
  },
  "chat:DELETE /api/v1/conversations/{id}/members/{user_id}": {
    "purpose": "Mark an active member left; self-removal is allowed, other removals require owner/admin. The conversation owner cannot be removed; returns 409 until ownership is transferred. Returns 204.",
    "auth": "Authenticated IDP session; chat:manage"
  },
  "chat:GET /api/v1/conversations/{id}/messages": {
    "purpose": "Read descending undeleted message history with ready attachments. before/after are exclusive sequences; limit defaults to 50 and clamps 1..200. q is accepted but not applied. meta contains limit and has_more.",
    "response": "import(\"./reviewed-wire.js\").ChatMessagesResponse",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:POST /api/v1/conversations/{id}/messages": {
    "purpose": "Send a message (201); conversation and assigned contact policy are rechecked. Reuse client_id for an identical retry; changed request content conflicts. Attachments must belong to the current conversation/uploader and be ready.",
    "response": "import(\"./reviewed-wire.js\").ChatMessageResponse",
    "auth": "Authenticated IDP session; chat:write"
  },
  "chat:POST /api/v1/conversations/{id}/attachments": {
    "purpose": "Reserve an attachment (201) for an accessible conversation, returning attachment, expiring upload_url and expires_in_seconds. Size is 0..100 MiB; download through the authenticated content route.",
    "auth": "Authenticated IDP session; chat:write"
  },
  "chat:GET /api/v1/attachments/{id}/content": {
    "purpose": "Download private attachment bytes with original media type and no-store headers after conversation access checks; storage failures return 502.",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:POST /api/v1/attachments/{id}/complete": {
    "purpose": "Finalize an existing presigned upload or upload raw application/octet-stream bytes (100 MiB maximum). Reserved byte size/checksum and conversation/uploader authority are checked; returns the stored attachment.",
    "auth": "Authenticated IDP session; chat:write"
  },
  "chat:POST /api/v1/conversations/{id}/realtime-auth": {
    "purpose": "Authorize an accessible conversation private channel with a URL-encoded socket_id/channel_name form; mismatched channel returns 403 and success is raw {auth:string}.",
    "response": "import(\"./reviewed-wire.js\").ChatRealtimeAuthorization",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:GET /api/v1/conversations/{id}/realtime-config": {
    "purpose": "Read the accessible conversation realtime ws_url/app_key/channel; unavailable configuration returns 502.",
    "response": "import(\"./types.js\").ChatRealtimeConfigResponse",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:POST /api/v1/conversations/{id}/read": {
    "purpose": "Advance the current active member read sequence monotonically. Sequence cannot be negative or exceed the conversation head; message_id, when provided, must have that exact sequence. Returns 204.",
    "auth": "Authenticated IDP session; chat:write"
  },
  "chat:PUT /api/v1/messages/{id}": {
    "purpose": "Replace content of an accessible message; only the original sender may edit it.",
    "response": "import(\"./reviewed-wire.js\").ChatMessageResponse",
    "auth": "Authenticated IDP session; chat:write"
  },
  "chat:DELETE /api/v1/messages/{id}": {
    "purpose": "Soft-delete an accessible message subject to sender/manager checks; returns 204.",
    "auth": "Authenticated IDP session; chat:delete"
  },
  "chat:POST /api/v1/messages/{id}/reactions": {
    "purpose": "Insert a reaction and return its own reaction record (201), rather than the message. Emoji is at most 16 characters; duplicate reaction returns 409.",
    "response": "import(\"./reviewed-wire.js\").ChatReactionResponse",
    "auth": "Authenticated IDP session; chat:write"
  },
  "chat:GET /api/v1/conversations/{id}/ai/runtime-inputs": {
    "purpose": "List only public pending runtime-input projection keys for the current Agentic thread; arbitrary schema/ui values are preserved and missing upstream keys become null.",
    "response": "import(\"./reviewed-wire.js\").ChatRuntimeInputsResponse",
    "auth": "Authenticated IDP session; chat:ai"
  },
  "chat:POST /api/v1/conversations/{id}/ai/runtime-inputs/{input_id}/complete": {
    "purpose": "Complete an input currently pending on this accessible conversation thread; missing input returns 404 and success returns data:{ok:true}.",
    "response": "import(\"./reviewed-wire.js\").ChatRuntimeInputCompletionResponse",
    "auth": "Authenticated IDP session; chat:ai"
  },
  "chat:GET /api/v1/me/conversations": {
    "purpose": "Page current organization active-member summaries by ascending UUID, with incoming undeleted sent user-message unread counts. limit defaults 50 and clamps 1..100; next_cursor is null when exhausted.",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:GET /api/v1/me/unread-count": {
    "purpose": "Count all incoming unread sent user messages for current organization active memberships; own/deleted messages are excluded.",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:GET /api/v1/me/events": {
    "purpose": "Read durable current-user invalidations. Missing cursor initializes at head; invalid cursor returns 400 and requires resynchronization. At most 100 events; wait_seconds defaults and caps at 25.",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:GET /api/v1/me/realtime/config": {
    "purpose": "Read configured private organization/user channel connection details; unavailable realtime returns 502.",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:POST /api/v1/me/realtime/auth": {
    "purpose": "Authorize only the current organization/user private channel using JSON socket_id and channel_name; another channel returns 403.",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:POST /api/v1/conversations/{id}/ai/messages": {
    "purpose": "Run governed AI for an accessible conversation and return user_message, assistant_message, ai_turn and Agentic billing authority. Assistant, context, fitness, workspace, plan and current upstream authority checks apply.",
    "response": "import(\"./reviewed-wire.js\").ChatAiResponse",
    "auth": "Authenticated IDP session; chat:ai"
  },
  "chat:GET /api/v1/conversations/{id}/events": {
    "purpose": "Subscribe to conversation SSE after access checks; stream includes named events and 15-second keep-alives. Retain authenticated transport and abort on exit.",
    "auth": "Authenticated IDP session; chat:read"
  },
  "chat:GET /api/v1/integrations/lms/messages/{id}/notification-context": {
    "purpose": "Server-only LMS notification lookup using x-infera-lms-token; returns identifiers and active recipient read state without message content. Lookup is global by message UUID.",
    "auth": "Server-only x-infera-lms-token matching CHAT_LMS_SERVICE_TOKEN; never expose in browsers"
  },
  "chat:POST /api/v1/fitness/generate": {
    "purpose": "Server-only fitness plan generation using the deployment Bearer secret and deny-unknown-fields input. Returns parsed model JSON, which is not locally plan-schema validated; 180-second model timeout.",
    "response": "import(\"./reviewed-wire.js\").FitnessGenerationResponse",
    "auth": "Server-only FITNESS_PROFILE_SERVICE_TOKEN as Bearer; never expose in browsers"
  },
  "chat:PUT /api/v1/fitness/settings": {
    "purpose": "Validate requested fitness model references using the server-only deployment Bearer credential; returns the three validated references without persisting a settings row.",
    "response": "import(\"./reviewed-wire.js\").FitnessSettingsResponse",
    "auth": "Server-only FITNESS_PROFILE_SERVICE_TOKEN as Bearer; never expose in browsers"
  },
  "chat:POST /api/v1/internal/memory/source": {
    "purpose": "Server-only Task source import with x-task-import-token, non-nil user/organization UUIDs and URL up to 4096 bytes. Forwards upstream data unchanged with a bounded 12.5 MB response.",
    "response": "import(\"./reviewed-wire.js\").ImportedSourceResponse",
    "auth": "Server-only x-task-import-token matching CHAT_TASK_IMPORT_TOKEN; never expose in browsers"
  },
  "chat:POST /api/v1/internal/memory/media": {
    "purpose": "Server-only Task media import with x-task-import-token and stable UUID; changed source conflicts. OCR returns normalized text/tables/warnings; audio adds duration_ms and is limited to 60 seconds.",
    "response": "import(\"./reviewed-wire.js\").ImportedMediaResponse",
    "input": "import(\"./reviewed-wire.js\").ImportedMediaInput",
    "auth": "Server-only x-task-import-token matching CHAT_TASK_IMPORT_TOKEN; never expose in browsers"
  },
  "chat:GET /api/v1/summary-access": {
    "purpose": "Read or mutate current native observer policy with current IDP authority; Bearer-only authorization, exact revision and reason rules apply. See source summary observation policy.",
    "auth": "Current IDP Bearer chat:summary_access:manage; enabling also verifies collector chat:summary:read"
  },
  "chat:PUT /api/v1/summary-access": {
    "purpose": "Read or mutate current native observer policy with current IDP authority; Bearer-only authorization, exact revision and reason rules apply. See source summary observation policy.",
    "auth": "Current IDP Bearer chat:summary_access:manage; enabling also verifies collector chat:summary:read"
  },
  "chat:POST /api/v1/summary-access/revocations": {
    "purpose": "Read or mutate current native observer policy with current IDP authority; Bearer-only authorization, exact revision and reason rules apply. See source summary observation policy.",
    "auth": "Current IDP Bearer chat:summary_access:manage; enabling also verifies collector chat:summary:read"
  },
  "chat:DELETE /api/v1/summary-access/revocations/{object}": {
    "purpose": "Read or mutate current native observer policy with current IDP authority; Bearer-only authorization, exact revision and reason rules apply. See source summary observation policy.",
    "auth": "Current IDP Bearer chat:summary_access:manage; enabling also verifies collector chat:summary:read"
  }
};
