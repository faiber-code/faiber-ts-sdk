# knowledge capability discovery

Governed knowledge authoring, immutable publication, retrieval, assistant policies and semantic memory.

تألیف دانش کنترل‌شده، انتشار تغییرناپذیر، بازیابی، سیاست دستیار و حافظه معنایی.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `70b8a21721dd34125b8f0e167e06da9ad3287223`
- SDK source revision: `1e6b40ca89500a122afe11a0d03c3395502c18e1`
- Evidence inventory revision: `1e6b40ca89500a122afe11a0d03c3395502c18e1` (sdk)
- Working HEAD: `92047358a6b4dee1911d47a78621c8359716b7af`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-knowledge/src/main.rs:92` | inspect middleware/local scope | pending |
| `GET /health/live` | `infera-knowledge/src/main.rs:84` | inspect middleware/local scope | pending |
| `GET /health/ready` | `infera-knowledge/src/main.rs:92` | inspect middleware/local scope | pending |
| `GET /api/v1/knowledge-releases/{id}` | `infera-knowledge/src/routes.rs:491` | knowledge:read | pending |
| `GET /api/v1/knowledge-bases` | `infera-knowledge/src/routes.rs:70` | knowledge:read | pending |
| `POST /api/v1/knowledge-bases` | `infera-knowledge/src/routes.rs:82` | knowledge:write | pending |
| `GET /api/v1/knowledge-bases/{id}` | `infera-knowledge/src/routes.rs:91` | knowledge:read | pending |
| `PUT /api/v1/knowledge-bases/{id}` | `infera-knowledge/src/routes.rs:101` | knowledge:write | pending |
| `DELETE /api/v1/knowledge-bases/{id}` | `infera-knowledge/src/routes.rs:112` | knowledge:delete | pending |
| `POST /api/v1/knowledge-bases/{id}/publish` | `infera-knowledge/src/routes.rs:121` | knowledge:publish | pending |
| `GET /api/v1/knowledge-bases/{id}/export` | `infera-knowledge/src/routes.rs:131` | knowledge:read | pending |
| `GET /api/v1/knowledge-bases/{id}/groups` | `infera-knowledge/src/routes.rs:158` | knowledge:read | pending |
| `POST /api/v1/knowledge-bases/{id}/groups` | `infera-knowledge/src/routes.rs:169` | knowledge:write | pending |
| `PUT /api/v1/groups/{id}` | `infera-knowledge/src/routes.rs:183` | knowledge:write | pending |
| `DELETE /api/v1/groups/{id}` | `infera-knowledge/src/routes.rs:194` | knowledge:delete | pending |
| `GET /api/v1/knowledge-bases/{id}/items` | `infera-knowledge/src/routes.rs:204` | knowledge:read | pending |
| `POST /api/v1/knowledge-bases/{id}/items` | `infera-knowledge/src/routes.rs:218` | knowledge:write | pending |
| `GET /api/v1/items/{id}` | `infera-knowledge/src/routes.rs:232` | knowledge:read | pending |
| `PUT /api/v1/items/{id}` | `infera-knowledge/src/routes.rs:242` | knowledge:write | pending |
| `DELETE /api/v1/items/{id}` | `infera-knowledge/src/routes.rs:253` | knowledge:delete | pending |
| `GET /api/v1/knowledge-bases/{id}/edges` | `infera-knowledge/src/routes.rs:263` | knowledge:read | pending |
| `POST /api/v1/knowledge-bases/{id}/edges` | `infera-knowledge/src/routes.rs:277` | knowledge:write | pending |
| `PUT /api/v1/edges/{id}` | `infera-knowledge/src/routes.rs:291` | knowledge:write | pending |
| `DELETE /api/v1/edges/{id}` | `infera-knowledge/src/routes.rs:303` | knowledge:delete | pending |
| `GET /api/v1/chat-bindings` | `infera-knowledge/src/routes.rs:313` | knowledge:read | pending |
| `POST /api/v1/chat-bindings` | `infera-knowledge/src/routes.rs:325` | knowledge:write | pending |
| `PUT /api/v1/chat-bindings/{id}` | `infera-knowledge/src/routes.rs:338` | knowledge:write | pending |
| `DELETE /api/v1/chat-bindings/{id}` | `infera-knowledge/src/routes.rs:350` | knowledge:delete | pending |
| `GET /api/v1/match-rules` | `infera-knowledge/src/routes.rs:360` | knowledge:read | pending |
| `POST /api/v1/match-rules` | `infera-knowledge/src/routes.rs:373` | knowledge:write | pending |
| `PUT /api/v1/match-rules/{id}` | `infera-knowledge/src/routes.rs:386` | knowledge:write | pending |
| `DELETE /api/v1/match-rules/{id}` | `infera-knowledge/src/routes.rs:398` | knowledge:delete | pending |
| `GET /api/v1/actions` | `infera-knowledge/src/routes.rs:408` | knowledge:actions | pending |
| `PATCH /api/v1/actions/{id}/status` | `infera-knowledge/src/routes.rs:426` | knowledge:actions | pending |
| `GET /api/v1/audit` | `infera-knowledge/src/routes.rs:458` | knowledge:audit | pending |
| `GET /api/v1/platform/status` | `infera-knowledge/src/platform.rs:588` | knowledge:read | pending |
| `GET /api/v1/platform/catalog` | `infera-knowledge/src/platform.rs:634` | knowledge:read | pending |
| `GET /api/v1/platform/converters` | `infera-knowledge/src/platform.rs:652` | knowledge:read | pending |
| `GET /api/v1/processing-jobs` | `infera-knowledge/src/platform.rs:661` | knowledge:read | pending |
| `GET /api/v1/audit-events` | `infera-knowledge/src/platform.rs:940` | knowledge:read, knowledge:memory:read | pending |
| `GET /api/v1/evaluation-cases` | `infera-knowledge/src/platform.rs:957` | knowledge:read | pending |
| `POST /api/v1/evaluation-cases` | `infera-knowledge/src/platform.rs:966` | knowledge:write | pending |
| `GET /api/v1/sources` | `infera-knowledge/src/platform.rs:3539` | knowledge:read | pending |
| `POST /api/v1/sources` | `infera-knowledge/src/platform.rs:3547` | knowledge:write | pending |
| `POST /api/v1/sources/{id}/sync` | `infera-knowledge/src/platform.rs:765` | knowledge:write | pending |
| `POST /api/v1/sources/{id}/pause` | `infera-knowledge/src/platform.rs:811` | knowledge:write | pending |
| `GET /api/v1/documents` | `infera-knowledge/src/platform.rs:3651` | knowledge:read | pending |
| `POST /api/v1/documents` | `infera-knowledge/src/platform.rs:3659` | knowledge:write | pending |
| `POST /api/v1/documents/{id}/reprocess` | `infera-knowledge/src/platform.rs:876` | knowledge:write | pending |
| `POST /api/v1/processing-jobs/{id}/retry` | `infera-knowledge/src/platform.rs:670` | knowledge:write | pending |
| `POST /api/v1/processing-jobs/{id}/cancel` | `infera-knowledge/src/platform.rs:719` | knowledge:write | pending |
| `POST /api/v1/platform/cache/invalidate` | `infera-knowledge/src/platform.rs:917` | knowledge:write | pending |
| `GET /api/v1/recommender-groups` | `infera-knowledge/src/platform.rs:3502` | knowledge:read | pending |
| `POST /api/v1/recommender-groups` | `infera-knowledge/src/platform.rs:3511` | knowledge:write | pending |
| `POST /api/v1/recommender-groups/{id}/items` | `infera-knowledge/src/platform.rs:3522` | knowledge:write | pending |
| `GET /api/v1/memory-subjects` | `infera-knowledge/src/platform.rs:3255` | knowledge:memory:read | pending |
| `GET /api/v1/memory-subjects/{id}` | `infera-knowledge/src/platform/memory_management.rs:98` | knowledge:memory:read | pending |
| `DELETE /api/v1/memory-subjects/{id}` | `infera-knowledge/src/platform.rs:3264` | inspect middleware/local scope | pending |
| `GET /api/v1/memory-subjects/{subject_id}/memories/{memory_id}` | `infera-knowledge/src/platform/memory_management.rs:159` | knowledge:memory:read | pending |
| `DELETE /api/v1/memory-subjects/{subject_id}/memories/{memory_id}` | `infera-knowledge/src/platform.rs:3290` | inspect middleware/local scope | pending |
| `GET /api/v1/memory-subjects/{id}/memories` | `infera-knowledge/src/platform/memory_management.rs:142` | knowledge:memory:read | pending |
| `GET /api/v1/memory-subjects/{id}/audit-events` | `infera-knowledge/src/platform/memory_management.rs:257` | knowledge:memory:read | pending |
| `PUT /api/v1/memory-subjects/{id}/policy` | `infera-knowledge/src/platform.rs:3358` | inspect middleware/local scope | pending |
| `POST /api/v1/memory-subjects/{id}/corrections` | `infera-knowledge/src/platform/memory_corrections.rs:14` | knowledge:memory:write | pending |
| `POST /api/v1/memory-outbox/{id}/replay` | `infera-knowledge/src/platform.rs:3478` | knowledge:memory:write | pending |
| `POST /api/v1/runtime/chat/{chat_slug}/query` | `infera-knowledge/src/routes.rs:473` | knowledge:runtime | pending |
| `GET /api/v1/runtime/tool-schema` | `infera-knowledge/src/routes.rs:484` | inspect middleware/local scope | pending |
| `GET /api/v1/runtime/assistants/{assistant_id}/contracts/{slug}` | `infera-knowledge/src/contracts.rs:14` | knowledge:runtime | pending |
| `GET /api/v1/runtime/assistants/{assistant_id}/configuration-operations/{operation_id}` | `infera-knowledge/src/platform.rs:1022` | knowledge:write | pending |
| `POST /api/v1/runtime/assistants/{assistant_id}/configuration-operations/{operation_id}` | `infera-knowledge/src/platform.rs:1056` | knowledge:write | pending |
| `GET /api/v1/runtime/assistants/{assistant_id}/configure` | `infera-knowledge/src/platform.rs:1007` | knowledge:write | pending |
| `PUT /api/v1/runtime/assistants/{assistant_id}/configure` | `infera-knowledge/src/platform.rs:1114` | knowledge:write | pending |
| `POST /api/v1/runtime/assistants/{assistant_id}/query` | `infera-knowledge/src/platform.rs:1366` | knowledge:runtime | pending |
| `POST /api/v1/runtime/assistants/{assistant_id}/preview` | `infera-knowledge/src/platform.rs:2055` | inspect middleware/local scope | pending |
| `POST /api/v1/runtime/assistants/{assistant_id}/evaluations` | `infera-knowledge/src/platform.rs:2065` | inspect middleware/local scope | pending |
| `POST /api/v1/runtime/assistants/{assistant_id}/memory/turn` | `infera-knowledge/src/platform.rs:2676` | knowledge:runtime | pending |
| `GET /api/v1/runtime/evidence/documents/{id}` | `infera-knowledge/src/platform.rs:483` | knowledge:runtime | pending |
| `GET /api/v1/runtime/evidence/session/{id}` | `infera-knowledge/src/platform.rs:493` | knowledge:runtime | pending |
| `POST /api/v1/runtime/retrieval-traces/{id}/usage` | `infera-knowledge/src/platform.rs:450` | knowledge:runtime | pending |
| `POST /api/v1/runtime/mcp` | `infera-knowledge/src/platform.rs:4250` | knowledge:runtime | pending |
| `POST /internal/task-projections/sync` | `infera-knowledge/src/task_projections.rs:61` | inspect middleware/local scope | pending |
| `POST /internal/task-projections/candidates` | `infera-knowledge/src/task_projections.rs:94` | inspect middleware/local scope | pending |
| `POST /internal/task-projections/passages` | `infera-knowledge/src/task_projections.rs:127` | inspect middleware/local scope | pending |
| `POST /internal/task-conversions` | `infera-knowledge/src/task_conversion.rs:24` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/knowledge.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
