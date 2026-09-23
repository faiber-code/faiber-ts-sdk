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

## Complete capability

This package exposes 32 registered operations from the chat service. Common workflows have concise methods on `api`; every registered backend route is also available as a named function on `api.operations`. Generated operation input, query, response, path, verb, and permission contracts are exported from `operations.types`.

| Area | Operations | HTTP methods |
|---|---:|---|
| `main` | 1 | `GET` |
| `routes` | 31 | `DELETE`, `GET`, `POST`, `PUT` |

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
