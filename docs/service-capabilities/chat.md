# chat capability discovery

Durable conversations, membership, messages and governed AI conversation orchestration through Agentic.

گفتگو، عضویت و پیام پایدار و هماهنگی گفتگوی هوشمند از طریق ایجنتیک.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `d5b722e2fad3a0585cdc5a24742bfbc6f52118bf`
- SDK source revision: `7de27e4843cd7fb394a7590b49d4b78fdc0a0c9a`
- Evidence inventory revision: `7de27e4843cd7fb394a7590b49d4b78fdc0a0c9a` (sdk)
- Working HEAD: `7360ff93ae3f4ff36b7b79e15db8a15ea09e881d`
- Source relationship: diverged

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-chat/src/application.rs:44` | inspect middleware/local scope | pending |
| `GET /api/v1/admin/image-settings` | `infera-chat/src/image_capture.rs:50` | assistant:manage | pending |
| `PUT /api/v1/admin/image-settings` | `infera-chat/src/image_capture.rs:87` | assistant:manage | pending |
| `GET /api/v1/admin/image-models` | `infera-chat/src/image_capture.rs:76` | assistant:manage | pending |
| `GET /api/v1/image-status` | `infera-chat/src/image_capture.rs:57` | assistant:read, assistant:manage | pending |
| `POST /api/v1/fitness/intake-extract` | `infera-chat/src/fitness.rs:298` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/models` | `infera-chat/src/fitness.rs:353` | inspect middleware/local scope | pending |
| `POST /api/v1/learning/runs/{id}/questions` | `infera-chat/src/learning.rs:11` | chat:ai | pending |
| `GET /api/v1/learning/runs/{id}/messages` | `infera-chat/src/learning.rs:65` | chat:read | pending |
| `GET /api/v1/admin/speech-settings` | `infera-chat/src/speech.rs:148` | assistant:manage | pending |
| `PUT /api/v1/admin/speech-settings` | `infera-chat/src/fitness.rs:378` | inspect middleware/local scope | pending |
| `GET /api/v1/admin/speech-models` | `infera-chat/src/speech.rs:157` | assistant:manage | pending |
| `POST /api/v1/speech/live` | `infera-chat/src/speech.rs:444` | chat:ai | pending |
| `GET /api/v1/speech/status` | `infera-chat/src/speech.rs:238` | chat:ai | pending |
| `POST /api/v1/speech/voice` | `infera-chat/src/memory_voice.rs:23` | chat:ai | pending |
| `POST /api/v1/speech/tts` | `infera-chat/src/speech.rs:278` | chat:ai | pending |
| `POST /api/v1/speech/transcribe` | `infera-chat/src/speech.rs:331` | chat:ai | pending |
| `GET /api/v1/assistants` | `infera-chat/src/routes.rs:109` | assistant:read | pending |
| `GET /api/v1/workspace-assistants` | `infera-chat/src/workspace_assistant.rs:77` | assistant:read | pending |
| `GET /api/v1/admin/workspace-assistants` | `infera-chat/src/workspace_assistant.rs:1255` | assistant:manage | pending |
| `PUT /api/v1/admin/workspace-assistants/{role}` | `infera-chat/src/workspace_assistant.rs:94` | assistant:manage | pending |
| `GET /api/v1/assistants/{id}` | `infera-chat/src/routes.rs:150` | assistant:read | pending |
| `GET /api/v1/admin/assistants` | `infera-chat/src/routes.rs:118` | assistant:manage | pending |
| `POST /api/v1/admin/assistants` | `infera-chat/src/routes.rs:127` | assistant:manage | pending |
| `GET /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:140` | assistant:manage | pending |
| `PUT /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:163` | assistant:manage | pending |
| `DELETE /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:175` | assistant:manage | pending |
| `GET /api/v1/admin/assistant-models` | `infera-chat/src/routes.rs:185` | assistant:manage | pending |
| `GET /api/v1/admin/assistant-context-catalog` | `infera-chat/src/routes.rs:199` | assistant:manage | pending |
| `GET /api/v1/admin/customer-action-content` | `infera-chat/src/routes.rs:209` | assistant:manage | pending |
| `GET /api/v1/conversations` | `infera-chat/src/routes.rs:262` | chat:read | pending |
| `POST /api/v1/conversations` | `infera-chat/src/routes.rs:271` | chat:write | pending |
| `GET /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:287` | chat:read | pending |
| `PUT /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:297` | chat:write | pending |
| `DELETE /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:308` | chat:delete | pending |
| `GET /api/v1/conversations/{id}/members` | `infera-chat/src/routes.rs:317` | chat:read | pending |
| `POST /api/v1/conversations/{id}/members` | `infera-chat/src/routes.rs:327` | chat:manage | pending |
| `DELETE /api/v1/conversations/{id}/members/{user_id}` | `infera-chat/src/routes.rs:341` | chat:manage | pending |
| `GET /api/v1/conversations/{id}/messages` | `infera-chat/src/routes.rs:350` | chat:read | pending |
| `POST /api/v1/conversations/{id}/messages` | `infera-chat/src/routes.rs:363` | chat:write | pending |
| `POST /api/v1/conversations/{id}/attachments` | `infera-chat/src/routes.rs:378` | chat:write | pending |
| `GET /api/v1/attachments/{id}/content` | `infera-chat/src/routes.rs:393` | chat:read | pending |
| `POST /api/v1/attachments/{id}/complete` | `infera-chat/src/routes.rs:413` | chat:write | pending |
| `POST /api/v1/conversations/{id}/realtime-auth` | `infera-chat/src/routes.rs:244` | chat:read | pending |
| `GET /api/v1/conversations/{id}/realtime-config` | `infera-chat/src/routes.rs:231` | chat:read | pending |
| `POST /api/v1/conversations/{id}/read` | `infera-chat/src/routes.rs:463` | chat:write | pending |
| `PUT /api/v1/messages/{id}` | `infera-chat/src/routes.rs:429` | chat:write | pending |
| `DELETE /api/v1/messages/{id}` | `infera-chat/src/routes.rs:440` | chat:delete | pending |
| `POST /api/v1/messages/{id}/reactions` | `infera-chat/src/routes.rs:449` | chat:write | pending |
| `GET /api/v1/conversations/{id}/ai/runtime-inputs` | `infera-chat/src/routes.rs:486` | chat:ai | pending |
| `POST /api/v1/conversations/{id}/ai/runtime-inputs/{input_id}/complete` | `infera-chat/src/routes.rs:501` | chat:ai | pending |
| `GET /api/v1/me/conversations` | `infera-chat/src/human_chat.rs:84` | chat:read | pending |
| `GET /api/v1/me/unread-count` | `infera-chat/src/human_chat.rs:121` | chat:read | pending |
| `GET /api/v1/me/events` | `infera-chat/src/human_chat.rs:148` | chat:read | pending |
| `GET /api/v1/me/realtime/config` | `infera-chat/src/human_chat.rs:200` | chat:read | pending |
| `POST /api/v1/me/realtime/auth` | `infera-chat/src/human_chat.rs:220` | chat:read | pending |
| `POST /api/v1/conversations/{id}/ai/messages` | `infera-chat/src/routes.rs:473` | chat:ai | pending |
| `GET /api/v1/conversations/{id}/events` | `infera-chat/src/routes.rs:523` | chat:read | pending |
| `GET /api/v1/integrations/lms/messages/{id}/notification-context` | `infera-chat/src/human_chat.rs:244` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/generate` | `infera-chat/src/fitness.rs:220` | inspect middleware/local scope | pending |
| `PUT /api/v1/fitness/settings` | `infera-chat/src/fitness.rs:267` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/memory/source` | `infera-chat/src/memory_import.rs:15` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/memory/media` | `infera-chat/src/media_import.rs:32` | inspect middleware/local scope | pending |
| `GET /api/v1/summary-access` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:270` | inspect middleware/local scope | pending |
| `PUT /api/v1/summary-access` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:278` | inspect middleware/local scope | pending |
| `POST /api/v1/summary-access/revocations` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:346` | inspect middleware/local scope | pending |
| `DELETE /api/v1/summary-access/revocations/{object}` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:362` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/chat.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
