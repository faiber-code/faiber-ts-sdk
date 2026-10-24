# chat capability discovery

Durable conversations, membership, messages and governed AI conversation orchestration through Agentic.

گفتگو، عضویت و پیام پایدار و هماهنگی گفتگوی هوشمند از طریق ایجنتیک.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `d5b722e2fad3a0585cdc5a24742bfbc6f52118bf`
- SDK source revision: `03dd17ad3a1f6a36f5b6ad42e8e11729b44ebc55`
- Evidence inventory revision: `03dd17ad3a1f6a36f5b6ad42e8e11729b44ebc55` (sdk)
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
| `GET /api/v1/admin/assistant-policy-operations/{id}` | `infera-chat/src/routes.rs:577` | assistant:manage | pending |
| `POST /api/v1/admin/assistant-policy-operations/{id}` | `infera-chat/src/routes.rs:581` | assistant:manage | pending |
| `GET /api/v1/assistants` | `infera-chat/src/routes.rs:110` | assistant:read | pending |
| `GET /api/v1/workspace-assistants` | `infera-chat/src/workspace_assistant.rs:77` | assistant:read | pending |
| `GET /api/v1/admin/workspace-assistants` | `infera-chat/src/workspace_assistant.rs:1255` | assistant:manage | pending |
| `PUT /api/v1/admin/workspace-assistants/{role}` | `infera-chat/src/workspace_assistant.rs:94` | assistant:manage | pending |
| `GET /api/v1/assistants/{id}` | `infera-chat/src/routes.rs:156` | assistant:read | pending |
| `GET /api/v1/admin/assistants` | `infera-chat/src/routes.rs:119` | assistant:manage | pending |
| `POST /api/v1/admin/assistants` | `infera-chat/src/routes.rs:128` | assistant:manage | pending |
| `GET /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:141` | assistant:manage | pending |
| `PUT /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:169` | assistant:manage | pending |
| `DELETE /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:181` | assistant:manage | pending |
| `GET /api/v1/admin/assistant-models` | `infera-chat/src/routes.rs:191` | assistant:manage | pending |
| `GET /api/v1/admin/assistant-context-catalog` | `infera-chat/src/routes.rs:205` | assistant:manage | pending |
| `GET /api/v1/admin/customer-action-content` | `infera-chat/src/routes.rs:215` | assistant:manage | pending |
| `GET /api/v1/conversations` | `infera-chat/src/routes.rs:268` | chat:read | pending |
| `POST /api/v1/conversations` | `infera-chat/src/routes.rs:277` | chat:write | pending |
| `GET /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:293` | chat:read | pending |
| `PUT /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:303` | chat:write | pending |
| `DELETE /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:314` | chat:delete | pending |
| `GET /api/v1/conversations/{id}/members` | `infera-chat/src/routes.rs:323` | chat:read | pending |
| `POST /api/v1/conversations/{id}/members` | `infera-chat/src/routes.rs:333` | chat:manage | pending |
| `DELETE /api/v1/conversations/{id}/members/{user_id}` | `infera-chat/src/routes.rs:347` | chat:manage | pending |
| `GET /api/v1/conversations/{id}/messages` | `infera-chat/src/routes.rs:356` | chat:read | pending |
| `POST /api/v1/conversations/{id}/messages` | `infera-chat/src/routes.rs:369` | chat:write | pending |
| `POST /api/v1/conversations/{id}/attachments` | `infera-chat/src/routes.rs:384` | chat:write | pending |
| `GET /api/v1/attachments/{id}/content` | `infera-chat/src/routes.rs:399` | chat:read | pending |
| `POST /api/v1/attachments/{id}/complete` | `infera-chat/src/routes.rs:419` | chat:write | pending |
| `POST /api/v1/conversations/{id}/realtime-auth` | `infera-chat/src/routes.rs:250` | chat:read | pending |
| `GET /api/v1/conversations/{id}/realtime-config` | `infera-chat/src/routes.rs:237` | chat:read | pending |
| `POST /api/v1/conversations/{id}/read` | `infera-chat/src/routes.rs:469` | chat:write | pending |
| `PUT /api/v1/messages/{id}` | `infera-chat/src/routes.rs:435` | chat:write | pending |
| `DELETE /api/v1/messages/{id}` | `infera-chat/src/routes.rs:446` | chat:delete | pending |
| `POST /api/v1/messages/{id}/reactions` | `infera-chat/src/routes.rs:455` | chat:write | pending |
| `GET /api/v1/conversations/{id}/ai/runtime-inputs` | `infera-chat/src/routes.rs:492` | chat:ai | pending |
| `POST /api/v1/conversations/{id}/ai/runtime-inputs/{input_id}/complete` | `infera-chat/src/routes.rs:507` | chat:ai | pending |
| `GET /api/v1/me/conversations` | `infera-chat/src/human_chat.rs:84` | chat:read | pending |
| `GET /api/v1/me/unread-count` | `infera-chat/src/human_chat.rs:121` | chat:read | pending |
| `GET /api/v1/me/events` | `infera-chat/src/human_chat.rs:148` | chat:read | pending |
| `GET /api/v1/me/realtime/config` | `infera-chat/src/human_chat.rs:200` | chat:read | pending |
| `POST /api/v1/me/realtime/auth` | `infera-chat/src/human_chat.rs:220` | chat:read | pending |
| `POST /api/v1/conversations/{id}/ai/messages` | `infera-chat/src/routes.rs:479` | chat:ai | pending |
| `GET /api/v1/conversations/{id}/events` | `infera-chat/src/routes.rs:529` | chat:read | pending |
| `GET /api/v1/integrations/lms/messages/{id}/notification-context` | `infera-chat/src/human_chat.rs:244` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/generate` | `infera-chat/src/fitness.rs:220` | inspect middleware/local scope | pending |
| `PUT /api/v1/fitness/settings` | `infera-chat/src/fitness.rs:267` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/memory/source` | `infera-chat/src/memory_import.rs:15` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/memory/media` | `infera-chat/src/media_import.rs:32` | inspect middleware/local scope | pending |
| `GET /api/v1/summary-access` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:270` | inspect middleware/local scope | pending |
| `PUT /api/v1/summary-access` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:278` | inspect middleware/local scope | pending |
| `POST /api/v1/summary-access/revocations` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:331` | inspect middleware/local scope | pending |
| `DELETE /api/v1/summary-access/revocations/{object}` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:347` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/chat.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
