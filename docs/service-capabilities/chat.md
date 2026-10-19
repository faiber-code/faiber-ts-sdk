# chat capability discovery

Durable conversations, membership, messages and governed AI conversation orchestration through Agentic.

گفتگو، عضویت و پیام پایدار و هماهنگی گفتگوی هوشمند از طریق ایجنتیک.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `d495217f85d77270865a040c1328d70c620e6c9d`
- SDK source revision: `d495217f85d77270865a040c1328d70c620e6c9d`
- Working HEAD: `7360ff93ae3f4ff36b7b79e15db8a15ea09e881d`
- Source relationship: diverged

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-chat/src/main.rs:66` | inspect middleware/local scope | pending |
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
| `GET /api/v1/assistants` | `infera-chat/src/routes.rs:108` | assistant:read | pending |
| `GET /api/v1/workspace-assistants` | `infera-chat/src/workspace_assistant.rs:77` | assistant:read | pending |
| `GET /api/v1/admin/workspace-assistants` | `infera-chat/src/workspace_assistant.rs:1255` | assistant:manage | pending |
| `PUT /api/v1/admin/workspace-assistants/{role}` | `infera-chat/src/workspace_assistant.rs:94` | assistant:manage | pending |
| `GET /api/v1/assistants/{id}` | `infera-chat/src/routes.rs:149` | assistant:read | pending |
| `GET /api/v1/admin/assistants` | `infera-chat/src/routes.rs:117` | assistant:manage | pending |
| `POST /api/v1/admin/assistants` | `infera-chat/src/routes.rs:126` | assistant:manage | pending |
| `GET /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:139` | assistant:manage | pending |
| `PUT /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:162` | assistant:manage | pending |
| `DELETE /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:174` | assistant:manage | pending |
| `GET /api/v1/admin/assistant-models` | `infera-chat/src/routes.rs:184` | assistant:manage | pending |
| `GET /api/v1/admin/assistant-context-catalog` | `infera-chat/src/routes.rs:198` | assistant:manage | pending |
| `GET /api/v1/admin/customer-action-content` | `infera-chat/src/routes.rs:208` | assistant:manage | pending |
| `GET /api/v1/conversations` | `infera-chat/src/routes.rs:261` | chat:read | pending |
| `POST /api/v1/conversations` | `infera-chat/src/routes.rs:270` | chat:write | pending |
| `GET /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:286` | chat:read | pending |
| `PUT /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:296` | chat:write | pending |
| `DELETE /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:307` | chat:delete | pending |
| `GET /api/v1/conversations/{id}/members` | `infera-chat/src/routes.rs:316` | chat:read | pending |
| `POST /api/v1/conversations/{id}/members` | `infera-chat/src/routes.rs:326` | chat:manage | pending |
| `DELETE /api/v1/conversations/{id}/members/{user_id}` | `infera-chat/src/routes.rs:340` | chat:manage | pending |
| `GET /api/v1/conversations/{id}/messages` | `infera-chat/src/routes.rs:349` | chat:read | pending |
| `POST /api/v1/conversations/{id}/messages` | `infera-chat/src/routes.rs:362` | chat:write | pending |
| `POST /api/v1/conversations/{id}/attachments` | `infera-chat/src/routes.rs:377` | chat:write | pending |
| `GET /api/v1/attachments/{id}/content` | `infera-chat/src/routes.rs:392` | chat:read | pending |
| `POST /api/v1/attachments/{id}/complete` | `infera-chat/src/routes.rs:412` | chat:write | pending |
| `POST /api/v1/conversations/{id}/realtime-auth` | `infera-chat/src/routes.rs:243` | chat:read | pending |
| `GET /api/v1/conversations/{id}/realtime-config` | `infera-chat/src/routes.rs:230` | chat:read | pending |
| `POST /api/v1/conversations/{id}/read` | `infera-chat/src/routes.rs:462` | chat:write | pending |
| `PUT /api/v1/messages/{id}` | `infera-chat/src/routes.rs:428` | chat:write | pending |
| `DELETE /api/v1/messages/{id}` | `infera-chat/src/routes.rs:439` | chat:delete | pending |
| `POST /api/v1/messages/{id}/reactions` | `infera-chat/src/routes.rs:448` | chat:write | pending |
| `GET /api/v1/conversations/{id}/ai/runtime-inputs` | `infera-chat/src/routes.rs:485` | chat:ai | pending |
| `POST /api/v1/conversations/{id}/ai/runtime-inputs/{input_id}/complete` | `infera-chat/src/routes.rs:500` | chat:ai | pending |
| `POST /api/v1/conversations/{id}/ai/messages` | `infera-chat/src/routes.rs:472` | chat:ai | pending |
| `GET /api/v1/conversations/{id}/events` | `infera-chat/src/routes.rs:522` | chat:read | pending |
| `POST /api/v1/fitness/generate` | `infera-chat/src/fitness.rs:220` | inspect middleware/local scope | pending |
| `PUT /api/v1/fitness/settings` | `infera-chat/src/fitness.rs:267` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/memory/source` | `infera-chat/src/memory_import.rs:15` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/memory/media` | `infera-chat/src/media_import.rs:32` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/chat.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
