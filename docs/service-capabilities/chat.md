# chat capability discovery

Durable conversations, membership, messages and governed AI conversation orchestration through Agentic.

گفتگو، عضویت و پیام پایدار و هماهنگی گفتگوی هوشمند از طریق ایجنتیک.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `8b16e1becd3646b5fbca2726976b0643bbb74558`
- SDK source revision: `8b16e1becd3646b5fbca2726976b0643bbb74558`
- Evidence inventory revision: `8b16e1becd3646b5fbca2726976b0643bbb74558` (sdk)
- Working HEAD: `7360ff93ae3f4ff36b7b79e15db8a15ea09e881d`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-chat/src/application.rs:45` | inspect middleware/local scope | stale |
| `GET /api/v1/admin/media-retention` | `infera-chat/src/media_retention.rs:45` | assistant:manage | pending |
| `PUT /api/v1/admin/media-retention` | `infera-chat/src/media_retention.rs:67` | assistant:manage | pending |
| `GET /api/v1/connectors/faiber/callback` | `infera-chat/src/connectors/faiber.rs:65` | inspect middleware/local scope | pending |
| `GET /api/v1/connectors/faiber/projects` | `infera-chat/src/connectors/faiber.rs:253` | inspect middleware/local scope | pending |
| `PUT /api/v1/connectors/faiber/projects` | `infera-chat/src/connectors/faiber.rs:277` | inspect middleware/local scope | pending |
| `GET /api/v1/document-status` | `infera-chat/src/chat_documents.rs:23` | chat:ai | pending |
| `POST /api/v1/documents/extract` | `infera-chat/src/chat_documents.rs:29` | chat:ai | pending |
| `GET /api/v1/connectors` | `infera-chat/src/connectors.rs:194` | inspect middleware/local scope | pending |
| `POST /api/v1/connectors/{provider}/connect` | `infera-chat/src/connectors.rs:210` | inspect middleware/local scope | pending |
| `GET /api/v1/connectors/{provider}/callback` | `infera-chat/src/connectors.rs:247` | inspect middleware/local scope | pending |
| `DELETE /api/v1/connectors/{provider}` | `infera-chat/src/connectors.rs:334` | inspect middleware/local scope | pending |
| `POST /api/v1/connectors/{provider}/tools/{tool}` | `infera-chat/src/connectors.rs:466` | inspect middleware/local scope | pending |
| `POST /api/v1/connector-actions/{id}/approve` | `infera-chat/src/connectors.rs:517` | inspect middleware/local scope | pending |
| `GET /api/v1/connector-actions/{id}` | `infera-chat/src/connectors.rs:559` | inspect middleware/local scope | pending |
| `POST /api/v1/connector-actions/{id}/cancel` | `infera-chat/src/connectors.rs:504` | inspect middleware/local scope | pending |
| `GET /api/v1/admin/image-settings` | `infera-chat/src/image_capture.rs:56` | assistant:manage | stale |
| `PUT /api/v1/admin/image-settings` | `infera-chat/src/image_capture.rs:93` | assistant:manage | stale |
| `GET /api/v1/admin/image-models` | `infera-chat/src/image_capture.rs:82` | assistant:manage | stale |
| `GET /api/v1/image-status` | `infera-chat/src/image_capture.rs:63` | assistant:read, assistant:manage | stale |
| `POST /api/v1/fitness/intake-extract` | `infera-chat/src/fitness.rs:298` | inspect middleware/local scope | stale |
| `GET /api/v1/fitness/models` | `infera-chat/src/fitness.rs:353` | inspect middleware/local scope | stale |
| `POST /api/v1/learning/runs/{id}/questions` | `infera-chat/src/learning.rs:11` | chat:ai | stale |
| `GET /api/v1/learning/runs/{id}/messages` | `infera-chat/src/learning.rs:65` | chat:read | stale |
| `GET /api/v1/admin/speech-settings` | `infera-chat/src/speech.rs:165` | assistant:manage | stale |
| `PUT /api/v1/admin/speech-settings` | `infera-chat/src/fitness.rs:378` | inspect middleware/local scope | stale |
| `GET /api/v1/admin/speech-models` | `infera-chat/src/speech.rs:174` | assistant:manage | stale |
| `POST /api/v1/speech/live` | `infera-chat/src/speech.rs:461` | chat:ai | stale |
| `GET /api/v1/speech/status` | `infera-chat/src/speech.rs:255` | chat:ai | stale |
| `POST /api/v1/speech/voice/stream` | `infera-chat/src/memory_voice.rs:209` | chat:ai | pending |
| `POST /api/v1/speech/voice` | `infera-chat/src/memory_voice.rs:68` | chat:ai | stale |
| `POST /api/v1/speech/tts` | `infera-chat/src/speech.rs:295` | chat:ai | stale |
| `POST /api/v1/speech/transcribe` | `infera-chat/src/speech.rs:348` | chat:ai | stale |
| `GET /api/v1/admin/assistant-policy-operations/{id}` | `infera-chat/src/routes.rs:609` | assistant:manage | stale |
| `POST /api/v1/admin/assistant-policy-operations/{id}` | `infera-chat/src/routes.rs:613` | assistant:manage | stale |
| `GET /api/v1/assistants` | `infera-chat/src/routes.rs:125` | assistant:read | stale |
| `GET /api/v1/workspace-assistants` | `infera-chat/src/workspace_assistant.rs:85` | assistant:read | stale |
| `GET /api/v1/admin/workspace-assistants` | `infera-chat/src/workspace_assistant.rs:1626` | assistant:manage | stale |
| `PUT /api/v1/admin/workspace-assistants/{role}` | `infera-chat/src/workspace_assistant.rs:102` | assistant:manage | stale |
| `GET /api/v1/assistants/{id}` | `infera-chat/src/routes.rs:171` | assistant:read | stale |
| `GET /api/v1/admin/assistants` | `infera-chat/src/routes.rs:134` | assistant:manage | stale |
| `POST /api/v1/admin/assistants` | `infera-chat/src/routes.rs:143` | assistant:manage | stale |
| `GET /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:156` | assistant:manage | stale |
| `PUT /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:184` | assistant:manage | stale |
| `DELETE /api/v1/admin/assistants/{id}` | `infera-chat/src/routes.rs:196` | assistant:manage | stale |
| `GET /api/v1/admin/assistant-models` | `infera-chat/src/routes.rs:206` | assistant:manage | stale |
| `GET /api/v1/admin/assistant-context-catalog` | `infera-chat/src/routes.rs:220` | assistant:manage | stale |
| `GET /api/v1/admin/customer-action-content` | `infera-chat/src/routes.rs:230` | assistant:manage | stale |
| `GET /api/v1/conversations` | `infera-chat/src/routes.rs:283` | chat:read | stale |
| `POST /api/v1/conversations` | `infera-chat/src/routes.rs:295` | chat:write | stale |
| `GET /api/v1/conversations/history` | `infera-chat/src/routes.rs:292` | inspect middleware/local scope | pending |
| `GET /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:314` | chat:read | stale |
| `PUT /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:324` | chat:write | stale |
| `DELETE /api/v1/conversations/{id}` | `infera-chat/src/routes.rs:335` | chat:delete | stale |
| `GET /api/v1/conversations/{id}/members` | `infera-chat/src/routes.rs:344` | chat:read | stale |
| `POST /api/v1/conversations/{id}/members` | `infera-chat/src/routes.rs:354` | chat:manage | stale |
| `DELETE /api/v1/conversations/{id}/members/{user_id}` | `infera-chat/src/routes.rs:368` | chat:manage | stale |
| `GET /api/v1/conversations/{id}/messages` | `infera-chat/src/routes.rs:377` | chat:read | stale |
| `POST /api/v1/conversations/{id}/messages` | `infera-chat/src/routes.rs:390` | chat:write | stale |
| `POST /api/v1/conversations/{id}/attachments` | `infera-chat/src/routes.rs:405` | chat:write | stale |
| `GET /api/v1/attachments/{id}/content` | `infera-chat/src/routes.rs:428` | chat:read | stale |
| `POST /api/v1/attachments/{id}/complete` | `infera-chat/src/routes.rs:450` | chat:write | stale |
| `POST /api/v1/conversations/{id}/realtime-auth` | `infera-chat/src/routes.rs:265` | chat:read | stale |
| `GET /api/v1/conversations/{id}/realtime-config` | `infera-chat/src/routes.rs:252` | chat:read | stale |
| `POST /api/v1/conversations/{id}/read` | `infera-chat/src/routes.rs:501` | chat:write | stale |
| `PUT /api/v1/messages/{id}` | `infera-chat/src/routes.rs:467` | chat:write | stale |
| `DELETE /api/v1/messages/{id}` | `infera-chat/src/routes.rs:478` | chat:delete | stale |
| `POST /api/v1/messages/{id}/reactions` | `infera-chat/src/routes.rs:487` | chat:write | stale |
| `GET /api/v1/conversations/{id}/ai/runtime-inputs` | `infera-chat/src/routes.rs:524` | chat:ai | stale |
| `POST /api/v1/conversations/{id}/ai/runtime-inputs/{input_id}/complete` | `infera-chat/src/routes.rs:539` | chat:ai | stale |
| `GET /api/v1/me/conversations` | `infera-chat/src/human_chat.rs:93` | chat:read | stale |
| `GET /api/v1/me/unread-count` | `infera-chat/src/human_chat.rs:246` | chat:read | stale |
| `GET /api/v1/me/events` | `infera-chat/src/human_chat.rs:273` | chat:read | stale |
| `GET /api/v1/me/realtime/config` | `infera-chat/src/human_chat.rs:325` | chat:read | stale |
| `POST /api/v1/me/realtime/auth` | `infera-chat/src/human_chat.rs:345` | chat:read | stale |
| `POST /api/v1/conversations/{id}/ai/messages/stream` | `infera-chat/src/voice_reply.rs:123` | chat:ai | pending |
| `POST /api/v1/conversations/{id}/ai/messages` | `infera-chat/src/routes.rs:511` | chat:ai | stale |
| `GET /api/v1/conversations/{id}/events` | `infera-chat/src/routes.rs:561` | chat:read | stale |
| `GET /api/v1/integrations/lms/messages/{id}/notification-context` | `infera-chat/src/human_chat.rs:369` | inspect middleware/local scope | stale |
| `POST /api/v1/internal/faiber-task-sync` | `infera-chat/src/connectors/faiber_sync.rs:44` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/generate` | `infera-chat/src/fitness.rs:220` | inspect middleware/local scope | stale |
| `PUT /api/v1/fitness/settings` | `infera-chat/src/fitness.rs:267` | inspect middleware/local scope | stale |
| `POST /api/v1/internal/memory/source` | `infera-chat/src/memory_import.rs:15` | inspect middleware/local scope | stale |
| `POST /api/v1/internal/memory/media` | `infera-chat/src/media_import.rs:32` | inspect middleware/local scope | stale |
| `GET /api/v1/summary-access` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:270` | inspect middleware/local scope | stale |
| `PUT /api/v1/summary-access` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:278` | inspect middleware/local scope | stale |
| `POST /api/v1/summary-access/revocations` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:331` | inspect middleware/local scope | stale |
| `DELETE /api/v1/summary-access/revocations/{object}` | `infera-chat/shared/infera-summary-sdk/src/native_access.rs:347` | inspect middleware/local scope | stale |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/chat.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
