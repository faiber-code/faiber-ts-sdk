# @faiber/faiber-chat

Direct, group, channel, and AI conversations with members, messages, threads, reactions, read cursors, realtime events, and Agentic-backed AI turns.

## Install

```bash
npm install @faiber/faiber-chat
```

## Configure

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { ChatApi } from "@faiber/faiber-chat";

const tokens = new MemoryTokenProvider();
const client = new FaiberClient("chat", {
  domains: { chat: process.env.FAIBER_CHAT_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
});
const api = new ChatApi(client);

const conversation = await api.createConversation({
  kind: "direct",
  member_ids: [recipientUserId],
});
await api.sendMessage(conversation.data.data.id, { content: { text: "Hello" } });
```

## API surface

This package exposes 69 source-extracted operations from the chat service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

Operation registration describes transport coverage; it does not certify deployed behavior or current authorization. Packaged `provenance.json` identifies the selected service source and contract checksums.

AI turns are executed and billed by Infera Agentic; Chat only coordinates conversation context and reconciliation. The events endpoint is an SSE stream and can be requested with normal SDK authorization headers.

## Authentication and authorization

Use a `TokenProvider` to forward the signed-in user's Bearer token, or enable `withCredentials` for secure HttpOnly cookie sessions. Permission requirements copied from service route guards are included in each operation's JSDoc. The SDK does not embed API keys, credentials, localhost URLs, sandbox hosts, or production hosts.

## Inputs, queries, responses, and transport

All methods return the complete Axios response, including status, headers, and request IDs. Request bodies and query objects are named exported interfaces. Nested pagination uses keys such as `page[number]` and `page[size]` where required by the service. Standard Axios request options, headers, timeouts, adapters, interceptors, and `AbortSignal` cancellation are supported as the final argument.

Generic REST resources are capability-guarded. Calling a legacy method that the service does not register throws `UnsupportedOperationError` before sending a request instead of producing a backend `405`.

## Errors and cancellation

```ts
try {
  await api.client.get("/health", undefined, { signal: AbortSignal.timeout(5_000) });
} catch (error) {
  // Axios errors retain response.status and the service error body.
}
```

Use `@faiber/faiber-ts-sdk` when one application needs multiple Faiber services with one configuration.

### Realtime through Sockudo

Use `subscribeRealtime` from `@faiber/sdk-core` for private Sockudo subscriptions. Chat configuration comes from `ChatApi.realtimeConfig(conversationId)` and authorization from `ChatApi.realtimeAuth`; both require conversation membership and `chat:read`. Notification configuration and authorization use `MessengerApi.operations.notificationNotificationsRealtimeConfigGet` and `notificationNotificationsRealtimeAuthPost` with `notification:self:read`; the backend permits only the signed-in recipient's channel. Keep these service responsibilities separate. Reload persisted records on subscription/reconnect, close subscriptions on logout, and keep all Sockudo secrets server-side. See the [core subscription example](https://github.com/faiber-code/faiber-ts-sdk/tree/main/packages/core#sockudo-realtime-subscriptions).

`speechStatus()` reports configured local transcription availability. `transcribe(audioBlob, 'fa', {signal})` accepts up to 8 MiB of WebM, Ogg, MP4, or WAV audio and returns editable transcript text; it never sends a chat message automatically. Both require `chat:ai`; invalid audio returns 400, unavailable services return 502, and cancellation uses normal Axios request signals.

### Workspace assistant roles

Discover server-managed roles with `chat.workspaceAssistant.roles()`, and choose `role === 'action'` for editable capture or `role === 'chat'` for workspace conversation. Create a conversation with that binding's `assistant_id`; catalog order has no role meaning. `WorkspaceAssistantResult` describes structured message metadata: answers, drafts, clarification, citations, and review proposals, with the Knowledge release and retrieval timestamp. A proposal is a preview until Task confirms approval.

Administrators with `assistant:manage` can call `workspaceAssistant.bind(role, input)`. Enabling requires a compatible published Knowledge contract; `expected_version` prevents overwriting another administrator's binding. Ordinary discovery requires `assistant:read`. Both methods preserve Axios responses, cookie/Bearer authentication, cancellation, and error status.

Workspace role bindings use `knowledge_slug: "2done-action"` or `"2done-chat"` for the corresponding role. Each role base pins its shared contract release. Structured results expose `knowledge_release_id` and optional `shared_knowledge_release_id` for diagnosis. The legacy `2done-assistants` slug remains in the client type for older service deployments; new role bindings require the role-specific slug.

### Compact microphone capture and speech playback

```ts
import { createSpeechRecorder } from '@faiber/faiber-chat';

// Call from a user gesture. Reuse your authenticated ChatApi instance.
const capture = await createSpeechRecorder({ signal: controller.signal });
const chunks: Blob[] = [];
capture.recorder.ondataavailable = ({ data }) => { if (data.size) chunks.push(data); };
capture.recorder.onstop = async () => {
  capture.dispose();
  if (controller.signal.aborted) return;
  const audio = new Blob(chunks, { type: capture.mimeType });
  const response = await chat.transcribe(audio, 'fa', { signal: controller.signal });
  console.log(response.data.data.text);
};
capture.recorder.onerror = () => capture.dispose();
capture.recorder.start(1000);
// Stop on the user's button or your duration limit (2Done uses 60 seconds):
// capture.recorder.stop();
// Cancel/unmount: controller.abort(); capture.dispose();

const voice = await chat.synthesize(
  { text: 'Your next task is ready.', language: 'en', format: 'mp3' },
  { signal: controller.signal },
);
// voice.data is a Blob. Revoke any URL.createObjectURL URL after playback.
```

`createSpeechRecorder` is browser-only but safe to import in Node. It requests native noise suppression, echo cancellation, automatic gain control and mono input. It prefers 32 kbit/s Opus in WebM/Ogg; supported MP4/AAC browsers use 64 kbit/s. It applies gentle 80 Hz/8 kHz speech filters when Web Audio is available and otherwise retains native capture. Browser support and actual capture/encoding settings vary; `settings`, `filtered`, `mimeType` and `targetBitsPerSecond` expose the result. At the target bitrate, one minute is approximately 240 KB for Opus or 480 KB for AAC, plus container overhead. No large encoder/model download is required, and pauses/quiet words are not removed.

Options include `audioBitsPerSecond` (16,000–64,000), `filter: false` and an abort signal. Permission/device errors are preserved; cancellation rejects pending setup with `AbortError` once microphone acquisition resolves and releases any acquired tracks. Always call `dispose()` on cancellation/unmount and after receiving the final recording chunk. The helper neither uploads nor transcribes automatically and does not enforce a duration or byte limit; enforce the STT service's limits in your application.

`synthesize` requests MP3 by default: mono, 24 kHz, 64 kbit/s. Explicit `format: 'wav'` retains lossless output for processing. MP3 requires a service deployment that supports this format; mismatched upstream formats fail rather than being mislabeled. Speech responses are private and not cacheable. Authentication, Axios response metadata, cancellation, and provider billing follow the configured Chat client. Check the returned Blob MIME type rather than assuming a filename extension. Uploading an existing compressed recording through `transcribe` does not re-encode it in the browser.

### Live dictation and earlier speech playback

```ts
import { startLiveDictation, playSpeech } from '@faiber/faiber-chat';

// `chat` is your authenticated ChatApi. Start after a microphone button click.
const dictation = await startLiveDictation(chat, {
  language: 'fa',
  signal: abortController.signal,
  onPartial: text => { provisionalText = text; }, // replace, do not append
  onError: error => { showError(error.message); },
});
const finalText = await dictation.finish(); // stop button: insert this editable revision once
// Or dictation.cancel() when leaving the page.

// Starts the first phrase while the next phrase is synthesized; MP3 transfer.
await playSpeech(chat, { text: 'سلام. این برنامه امروز شماست.', language: 'fa' }, {
  signal: abortController.signal,
  onPhase: phase => { playbackState = phase; },
});
```

Live dictation uploads each compressed chunk once through the normal authenticated
`FaiberClient` transport. `liveSpeech()` exposes the underlying ordered start/push/finish/cancel
operations with full Axios responses. Sessions are caller/organization-bound and expire;
recordings are limited to 60 seconds and buffered upload to 128 KiB. Current live support
requires the configured Persian Shenava model, an available streaming worker lane, and
WebM/Ogg Opus. Unsupported language/codec or busy capacity rejects start; applications may
fall back to `createSpeechRecorder()` and `transcribe()`. Never treat provisional text as a
saved message. Finalization can revise earlier words. Abort and unmount should cancel.

`playSpeech()` is browser-only progressive **phrase** synthesis, not provider-level audio
streaming. It preserves text order, preloads up to three phrases and schedules ready audio on the
browser audio clock. Synthesis slower than playback can still cause buffering. Individual phrases use the configured voice and its billing rules. Synthesis,
decode, and playback errors reject the promise; cancellation stops playback and in-flight
requests. Short utterances still depend on model generation latency.

Opt into **client-side** replay with `{ cacheScope: tenantId + ':' + userId + ':' + voiceRevision, persistCache: true }`.
The latest utterance's compressed MP3 sections are kept in browser IndexedDB (up to 16 MiB);
replay and page reload reuse available sections without TTS requests. Omit `persistCache`
for memory-only replay, or omit `cacheScope` to disable caching. This stores private audio
on the device: only enable persistence when your product permits it. Include the service,
tenant, authenticated user and voice revision in the scope. Call exported
`clearSpeechPlaybackCache()` on logout, and abort active playback first. Changing text,
language or scope replaces the last entry. Cancelled playback retains already generated
sections; a replay requests only missing sections. Storage denial falls back to memory.
No server cache is introduced.

### Curriculum-bound teacher

`chat.learning.ask(runId, { question, idempotency_key })` requires `chat:ai` and
ownership of the LMS run. The server loads the published objective and verified
results; callers cannot choose a learner, model, curriculum, tools, or progress.
Reuse the idempotency key only when retrying exactly the same question.

`chat.learning.history(runId, { signal })` requires `chat:read` and the same run
ownership. It returns at most 40 messages in chronological order as
`{ id, role: 'user' | 'teacher', text }` in `response.data.data`. It does not expose
conversation management, internal prompts, metadata, or other learners' records.
Both methods retain Axios status/headers and accept cancellation options.

## Attachment upload and download

`upload_url` is a short-lived signed storage URL for uploading, not downloading.
The attachment's `cdn_url` is storage metadata and may not be publicly readable.
For private homework-chat files, use `downloadAttachment(id)` instead of opening
`cdn_url`. It forwards the configured Bearer token or secure cookies to Chat,
which verifies conversation access before fetching private storage bytes.

Reserve with `createAttachment`, then call `uploadAttachmentContent(id, bytes, { onUploadProgress, signal })`. This authenticated route sends raw binary with `application/octet-stream` (100 MiB maximum). Bytes must match the reserved size and checksum. `completeAttachment(id)` still finalizes existing presigned uploads.

```ts
const response = await api.downloadAttachment(attachmentId, { signal });
const blob = response.data; // Blob in browsers and Node 18+
const previewUrl = URL.createObjectURL(blob);
// Use previewUrl in an image/viewer or a download anchor.
// Revoke only after the viewer/download has finished, never immediately after clicking.
URL.revokeObjectURL(previewUrl);
```

Downloads use authenticated Chat access (`chat:read`), preserve Axios metadata, and support `onDownloadProgress`. Use `api.operations.routesDownloadAttachmentGet` for raw bytes. Access failures return 403/404; storage failures return 502. Upload completion requires `chat:write`.


### Scoped note assistance and hands-free speech

Workspace chat accepts a selected `space_id`, optional `note_id`, and explicitly chosen
`knowledge_project_ids`. A selected `import_id` refers to a Task extraction preview;
Chat rechecks its permission and version before including evidence and before delivery.
Imported text cannot grant tools or permissions. Research must be explicitly requested
and enabled by the deployment; it consumes the configured research and response limits.
Changes are returned as Task proposals and require review and versioned approval.

The typed `assistantVoice` API supports start/push/finish/cancel, bounded PCM transcription
and synthesis. Use stable request IDs and monotonically increasing chunk sequence numbers
for retries. It requires an accessible project and configured audio allowance. Release
microphone capture on exit/backgrounding and preserve partial text on network failure.
Speech settings can select independent language-specific recognition and output models;
an English request never silently uses a Persian-only model. Live recognition requires
an available compatible Faiber worker or relay. All calls retain authenticated transport,
Axios metadata and cancellation options.

Internal operations require a trusted server credential and current tenant scope. Never call them from a browser or expose the service credential to application users.

## Assigned-contact chat and per-user unread state (0.24.1)

Use `chat.personal.conversations()` and `unreadCount()` for authenticated conversation summaries and actual incoming unread-message counts. Own/deleted messages do not count; do not subtract sequence numbers. Initialize `personal.events()` before a snapshot and resume from its cursor. Long polls default to 35 seconds; `realtimeConfig` and `realtimeAuth` authorize only the current organization's private user channel. All methods require `chat:read`, preserve Axios responses/authentication and support cancellation.

When the instance enables LMS assigned-contact policy, direct creation/sending requires the current student/teacher/support relationship. Obtain eligible contacts from LMS rather than a public directory. Existing pair deduplication remains authoritative. A revoked assignment retains readable history but disables sending. Generic member routes cannot expand these direct conversations. Message retries reuse `client_id` with identical content; a changed body conflicts. Read updates are monotonic, cannot exceed accessible message sequences, and should be sent only after visible messages render.

A web application should keep its chat provider above route changes, preserving conversation/draft/scroll state. Safe Markdown must disable raw HTML and unsafe URL schemes; copying and URL/email/phone detection belong in the client. Chat unread counts and Messenger notification counts are separate.

The personal summary, unread-count, cursor-event and private-channel authorization methods require the current member's `chat:read` permission. Personal methods remain under `/api/v1/me/*`; internal LMS notification-context reads use a separate server-only `x-infera-lms-token` and return identifiers/read state without private message content. Do not expose the service token in a browser.


### Source summary observation policy

Use the source-owned administration API with a Bearer token authorized for
`chat:summary_access:manage`. The service rechecks current IDP authority on
every request; a cookie-only session or caller-supplied user headers do not grant
access. Enabling also validates the configured collector's current
`chat:summary:read` permission. This policy does not grant model access or
change the collector binding.

```ts
const observed = await sdk.chat.operations.nativeSummaryAccessStatus();
await sdk.chat.operations.saveNativeSummaryAccessPolicy({
  enabled: false,
  expected_revision: observed.data.data.policy?.revision ?? 0,
  reason: "Pause collection for review",
});
await sdk.chat.operations.revokeNativeSummaryObject({
  object_id: sourceObjectId,
  reason: "Exclude this source object",
});
await sdk.chat.operations.restoreNativeSummaryObject(sourceObjectId, {
  reason: "Restore after review",
});
```

A stale policy revision returns 409; reload and review before retrying. Reasons
are required and limited to 1024 Unicode characters. Revocations survive policy
disabling and re-enabling. The restore operation sends its reason as a JSON
DELETE body. Successful saves return the current binding, policy and counts;
pending objects can remain until background reconciliation finishes. Axios
responses, errors, headers, timeouts and abort signals are preserved. The
separate `/mcp` transport uses signed scoped grants and rejects browser origins;
these REST methods do not provide an MCP session.

After a transport error or 503, reload current status before retrying a mutation: the source can commit its policy/revocation before a later status read or reconciliation fails. Use the reloaded revision and review the resulting state.

### Assistant edits and durable Knowledge policy reconciliation

managedAssistant(id) returns a typed ManagedAssistantDetailResponse. Capture
version and expected_knowledge_policy_revision when opening the edit draft.
updateAssistant requires expected_version, expected_knowledge_policy_revision,
and a caller-created non-nil configuration_id UUID. createAssistant also requires
a configuration_id. Preserve the UUID with the exact request across uncertain
responses. Do not generate a new operation automatically or refresh either
revision while resubmitting a stale draft.

assistantPolicyOperation(configurationId) returns the tenant-scoped retained
AssistantConfigurationIntentResponse. reconcileAssistantPolicy accepts an
AssistantPolicyReconciliationInput with action recover or cancel. Recovery checks
the authoritative Knowledge outcome before exact idempotent dispatch/application.
Current assistant:manage is required after restart; grants and credentials are
never retained. An administrator can apply an existing committed outcome or
cancel an undispatched intent after its original actor loses authority.
Cancellation writes a remote tombstone, blocking a delayed old request.

Pending intents block competing edits and deletion. An already applied operation
cannot be cancelled as absent. Terminal repeats return their immutable original
result. An assistant changed outside the protocol produces a review conflict;
the SDK never infers success or overwrites it. Review/recovery belongs on an
explicit routed Manage page. A generic raw JSON form is not a completed workflow.

Generated equivalents are routesGetManagedAssistantGet, routesCreateAssistantPost,
routesUpdateAssistantPut, routesGetPolicyOperationGet and
routesReconcilePolicyOperationPost. Managed detail, retained intent and
reconciliation DTOs are exported from the Chat package. These are canonical v1
methods; no private Summary runner credentials or authority DTOs are browser APIs.

## Context selection limits

Configured assistant levels constrain the owning-conversation context request on the selected Chat/Knowledge revisions. Null or omitted request levels do not remove a configured ceiling. Older deployed services may not enforce this behavior; verify the deployed receiver before relying on it.

Selected-assistant group slugs are stored configuration, but forwarding and descendant-versus-exact matching are not fully implemented consistently. Do not use those settings as an authorization boundary or promise that unclassified results are excluded. Server-side current tenant, permissions and base bindings remain authoritative.

Knowledge's selected-media chunk cap applies after governance and deduplication across both packing paths (default 8, valid range 1–20). Query limits are not a strict combined count across all returned lanes. Expansion and reranking settings can be retained as requested values while runtime capabilities report unsupported/not applied; storing a flag does not enable an algorithm or provider. Inspect returned trace/capability information instead of assuming these features ran.

### Response records and message history

Conversation records include nullable `agent_slug`, `assistant_id`, `agentic_thread_id`,
legacy identifiers and deletion timestamps. Members expose `state`,
`notification_level` and `last_read_sequence`. `react` returns a `ChatReaction`,
including `message_id`, `user_id`, `emoji` and `created_at`. It does not return a
message record. Message history includes an `attachments` array on each row and
`meta: { limit, has_more }`; other ordinary Chat responses serialize `meta: null`.
`before` and `after` are exclusive sequence bounds, ordered newest first. The
backend accepts `q` but currently does not apply a text filter.

The generated `routesSynthesizePost` operation returns raw audio bytes and accepts
lowercase `mp3` or `wav`; omitted/null format selects WAV on the server. The curated
`synthesize` helper explicitly requests MP3 by default. Raw `routesTranscribePost`
requires `{ language: 'auto' | 'en' | 'fa' }` and an audio `Content-Type` matching
the supplied bytes, such as `audio/webm` or `audio/wav`; it is not a multipart upload.

Workspace bindings accept `2done-action` for the `action` role and `2done-chat` for
`chat`. The shared `2done-assistants` slug is not a valid binding request. Speech
settings preserve language overrides when `language_models` is omitted or null;
pass `{}` to clear them. Version conflicts require reloading and reviewing the draft.

Provider catalogs, source-import data, model-generated fitness plans and runtime
schema/UI values are forwarded as JSON by the selected backend without a local
schema check. Their exported types document that behavior. Catalog listings and
assistant lookup scope follow the selected backend: active/managed assistant lists
and the public assistant lookup do not apply an organization predicate in their
repositories. Do not infer tenant isolation from an SDK type or a catalog result.

## Mark a received message unread

`api.markRead(conversationId, {sequence: message.sequence, message_id: message.id, unread: true}, {signal})` rewinds only the caller's personal read position to before that received message. This can make later received messages unread too. It does not retract read receipts already delivered to senders. Own, deleted, nonexistent, and other-conversation messages are rejected. Stop automatic visible-message read updates before invoking this action, and resume when the user deliberately reopens the conversation.

## Guided workspace clarification

`WorkspaceResult` may include optional `questions` on its `clarification` branch.
The exported `WorkspaceClarificationQuestion` and `WorkspaceClarificationOption`
types describe bounded display questions and `{label, value}` choices. Send a
selected value as an ordinary AI message in the same conversation; it is not a
command, member authorization, or mutation approval. Text-only older results remain
valid. These additive types require the coordinated guided-clarification backend
change for structured output; they do not imply that it is deployed.
