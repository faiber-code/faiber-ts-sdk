# task capability discovery

Workspace/team/project work, grants, checklists, notes, attachments, reminders and reviewed assistant proposals.

کار فضای تیم و پروژه، دسترسی، چک‌لیست، یادداشت، پیوست، یادآور و پیشنهاد بازبینی‌شده دستیار.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `63201e112a1e640cab8454b168bbefe52ebab7bc`
- SDK source revision: `9ae25618d5670275fe273dc867ea99c3965d9b70`
- Evidence inventory revision: `9ae25618d5670275fe273dc867ea99c3965d9b70` (sdk)
- Working HEAD: `afe576aac58ff0812635dedccfdcaed39519062a`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /api/v1/internal/plans/gifts` | `infera-task/src/trial_gifts.rs:147` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/plans/gifts` | `infera-task/src/trial_gifts.rs:215` | inspect middleware/local scope | pending |
| `GET /api/v1/internal/plans/gifts/{id}` | `infera-task/src/trial_gifts.rs:200` | inspect middleware/local scope | pending |
| `PUT /api/v1/internal/plans/gifts/{id}` | `infera-task/src/trial_gifts.rs:263` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/plans/memory-reservations` | `infera-task/src/memory_usage.rs:258` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/plans/memory-reservations/{id}` | `infera-task/src/memory_usage.rs:304` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/plans/reservations` | `infera-task/src/plans.rs:384` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/plans/reservations/{id}` | `infera-task/src/plans.rs:421` | inspect middleware/local scope | pending |
| `GET /health/live` | `infera-task/src/routes.rs:297` | inspect middleware/local scope | pending |
| `GET /health/ready` | `infera-task/src/routes.rs:304` | inspect middleware/local scope | pending |
| `GET /health/dependencies` | `infera-task/src/routes.rs:304` | inspect middleware/local scope | pending |
| `GET /metrics` | `infera-task/src/routes.rs:316` | inspect middleware/local scope | pending |
| `GET /api/openapi.json` | `infera-task/src/routes.rs:327` | inspect middleware/local scope | pending |
| `POST /api/v1/guest-links/use` | `infera-task/src/routes.rs:332` | inspect middleware/local scope | pending |
| `GET /api/v1/feedback/capabilities` | `infera-task/src/feedback/routes.rs:44` | inspect middleware/local scope | pending |
| `GET /api/v1/feedback/policy` | `infera-task/src/feedback/routes.rs:69` | inspect middleware/local scope | pending |
| `PUT /api/v1/feedback/policy` | `infera-task/src/feedback/routes.rs:102` | inspect middleware/local scope | pending |
| `GET /api/v1/feedback/requests` | `infera-task/src/feedback/routes.rs:144` | inspect middleware/local scope | pending |
| `POST /api/v1/feedback/requests` | `infera-task/src/feedback/routes.rs:151` | inspect middleware/local scope | pending |
| `GET /api/v1/feedback/requests/{id}` | `infera-task/src/feedback/routes.rs:159` | inspect middleware/local scope | pending |
| `POST /api/v1/feedback/requests/{id}/decisions` | `infera-task/src/feedback/routes.rs:166` | inspect middleware/local scope | pending |
| `GET /api/v1/feedback/requests/{id}/attachments/{attachment}/content` | `infera-task/src/feedback/storage.rs:122` | inspect middleware/local scope | pending |
| `POST /api/v1/feedback/attachments` | `infera-task/src/feedback/storage.rs:23` | inspect middleware/local scope | pending |
| `PUT /api/v1/feedback/attachments/{id}/content` | `infera-task/src/feedback/storage.rs:92` | inspect middleware/local scope | pending |
| `POST /api/v1/feedback/attachments/{id}/complete` | `infera-task/src/feedback/storage.rs:108` | inspect middleware/local scope | pending |
| `GET /api/v1/feedback/assignees` | `infera-task/src/feedback/routes.rs:175` | inspect middleware/local scope | pending |
| `GET /api/v1/collaboration/config` | `infera-task/src/attachments.rs:32` | inspect middleware/local scope | pending |
| `GET /api/v1/plans` | `infera-task/src/plans.rs:329` | inspect middleware/local scope | pending |
| `GET /api/v1/memory-usage` | `infera-task/src/memory_usage.rs:223` | inspect middleware/local scope | pending |
| `GET /api/v1/plans/memory-limits` | `infera-task/src/memory_usage.rs:235` | inspect middleware/local scope | pending |
| `PUT /api/v1/plans/admin/memory-limits` | `infera-task/src/memory_usage.rs:236` | inspect middleware/local scope | pending |
| `GET /api/v1/plans/admin/users` | `infera-task/src/plan_reports.rs:37` | inspect middleware/local scope | pending |
| `GET /api/v1/plans/admin/income` | `infera-task/src/plan_reports.rs:94` | inspect middleware/local scope | pending |
| `POST /api/v1/plans/gift` | `infera-task/src/plans.rs:465` | inspect middleware/local scope | pending |
| `POST /api/v1/plans/gift-tokens` | `infera-task/src/plans.rs:510` | inspect middleware/local scope | pending |
| `POST /api/v1/plans/checkout` | `infera-task/src/plans.rs:575` | inspect middleware/local scope | pending |
| `POST /api/v1/plans/orders/{id}/reconcile` | `infera-task/src/plans.rs:651` | inspect middleware/local scope | pending |
| `GET /api/v1/notes/{id}/document` | `infera-task/src/notes.rs:56` | inspect middleware/local scope | pending |
| `POST /api/v1/notes/{id}/document` | `infera-task/src/notes.rs:89` | inspect middleware/local scope | pending |
| `GET /api/v1/notes/{id}/media` | `infera-task/src/note_media.rs:85` | inspect middleware/local scope | pending |
| `POST /api/v1/notes/{id}/media` | `infera-task/src/note_media.rs:98` | inspect middleware/local scope | pending |
| `DELETE /api/v1/notes/{id}/media/{attachment}` | `infera-task/src/note_media.rs:370` | inspect middleware/local scope | pending |
| `PUT /api/v1/notes/{id}/cover` | `infera-task/src/note_media.rs:240` | inspect middleware/local scope | pending |
| `GET /api/v1/notes/{id}/realtime/config` | `infera-task/src/notes.rs:214` | inspect middleware/local scope | pending |
| `POST /api/v1/notes/{id}/realtime/auth` | `infera-task/src/notes.rs:229` | inspect middleware/local scope | pending |
| `GET /api/v1/notes/data/catalog` | `infera-task/src/note_data.rs:228` | inspect middleware/local scope | pending |
| `POST /api/v1/assistant/query` | `infera-task/src/assistant.rs:64` | inspect middleware/local scope | pending |
| `GET /api/v1/planning-preferences` | `infera-task/src/assistant.rs:189` | inspect middleware/local scope | pending |
| `PUT /api/v1/planning-preferences` | `infera-task/src/assistant.rs:202` | inspect middleware/local scope | pending |
| `GET /api/v1/note-folders` | `infera-task/src/assistant.rs:243` | inspect middleware/local scope | pending |
| `POST /api/v1/review-proposals` | `infera-task/src/assistant.rs:730` | inspect middleware/local scope | pending |
| `POST /api/v1/review-proposals/validate` | `infera-task/src/assistant.rs:904` | inspect middleware/local scope | pending |
| `GET /api/v1/review-proposals/{id}` | `infera-task/src/assistant.rs:747` | inspect middleware/local scope | pending |
| `PUT /api/v1/review-proposals/{id}` | `infera-task/src/assistant.rs:791` | inspect middleware/local scope | pending |
| `POST /api/v1/review-proposals/{id}/apply` | `infera-task/src/assistant.rs:812` | inspect middleware/local scope | pending |
| `POST /api/v1/review-proposals/{id}/refresh` | `infera-task/src/assistant.rs:936` | inspect middleware/local scope | pending |
| `GET /api/v1/workspace` | `infera-task/src/routes.rs:377` | inspect middleware/local scope | pending |
| `POST /api/v1/notes/knowledge/search` | `infera-task/src/note_knowledge.rs:134` | inspect middleware/local scope | pending |
| `POST /api/v1/notes/{id}/imports` | `infera-task/src/note_imports.rs:92` | inspect middleware/local scope | pending |
| `POST /api/v1/notes/{id}/source-imports` | `infera-task/src/source_imports.rs:17` | inspect middleware/local scope | pending |
| `GET /api/v1/note-imports/{id}` | `infera-task/src/note_imports.rs:178` | inspect middleware/local scope | pending |
| `POST /api/v1/note-imports/{id}` | `infera-task/src/note_imports.rs:191` | inspect middleware/local scope | pending |
| `POST /api/v1/note-imports/{id}/apply` | `infera-task/src/note_imports.rs:265` | inspect middleware/local scope | pending |
| `GET /api/v1/notes/{id}/indexing` | `infera-task/src/note_knowledge.rs:82` | inspect middleware/local scope | pending |
| `POST /api/v1/notes/{id}/indexing` | `infera-task/src/note_knowledge.rs:96` | inspect middleware/local scope | pending |
| `GET /api/v1/notification-preferences` | `infera-task/src/reminders.rs:262` | inspect middleware/local scope | pending |
| `PUT /api/v1/notification-preferences` | `infera-task/src/reminders.rs:286` | inspect middleware/local scope | pending |
| `GET /api/v1/work-items/{id}/reminder` | `infera-task/src/reminders.rs:59` | inspect middleware/local scope | pending |
| `PUT /api/v1/work-items/{id}/reminder` | `infera-task/src/reminders.rs:178` | inspect middleware/local scope | pending |
| `DELETE /api/v1/work-items/{id}/reminder` | `infera-task/src/reminders.rs:240` | inspect middleware/local scope | pending |
| `GET /api/v1/projects/{id}/checklists` | `infera-task/src/collaboration.rs:91` | inspect middleware/local scope | pending |
| `GET /api/v1/work-items/{id}/checklist` | `infera-task/src/collaboration.rs:103` | inspect middleware/local scope | pending |
| `PUT /api/v1/work-items/{id}/checklist` | `infera-task/src/collaboration.rs:120` | inspect middleware/local scope | pending |
| `GET /api/v1/projects/{id}/members` | `infera-task/src/collaboration.rs:196` | inspect middleware/local scope | pending |
| `DELETE /api/v1/projects/{id}/members/{user_id}` | `infera-task/src/collaboration.rs:210` | inspect middleware/local scope | pending |
| `GET /api/v1/access/effective` | `infera-task/src/routes.rs:385` | inspect middleware/local scope | pending |
| `GET /api/v1/projects` | `infera-task/src/routes.rs:396` | inspect middleware/local scope | pending |
| `POST /api/v1/projects` | `infera-task/src/routes.rs:414` | inspect middleware/local scope | pending |
| `POST /api/v1/projects/personal` | `infera-task/src/routes.rs:424` | inspect middleware/local scope | pending |
| `POST /api/v1/projects/shared` | `infera-task/src/routes.rs:433` | inspect middleware/local scope | pending |
| `GET /api/v1/projects/{id}` | `infera-task/src/routes.rs:443` | inspect middleware/local scope | pending |
| `PATCH /api/v1/projects/{id}` | `infera-task/src/routes.rs:453` | inspect middleware/local scope | pending |
| `GET /api/v1/projects/{id}/workflow` | `infera-task/src/routes.rs:641` | inspect middleware/local scope | pending |
| `GET /api/v1/projects/{id}/board-workflow` | `infera-task/src/workflows.rs:191` | inspect middleware/local scope | pending |
| `PUT /api/v1/projects/{id}/board-workflow` | `infera-task/src/workflows.rs:200` | inspect middleware/local scope | pending |
| `GET /api/v1/projects/{id}/memory-usage` | `infera-task/src/memory_usage.rs:211` | inspect middleware/local scope | pending |
| `POST /api/v1/work-items/{id}/attachments` | `infera-task/src/attachments.rs:202` | inspect middleware/local scope | pending |
| `GET /api/v1/attachments/{id}` | `infera-task/src/attachments.rs:260` | inspect middleware/local scope | pending |
| `DELETE /api/v1/attachments/{id}` | `infera-task/src/attachments.rs:445` | inspect middleware/local scope | pending |
| `PUT /api/v1/attachments/{id}/content` | `infera-task/src/attachments.rs:279` | inspect middleware/local scope | pending |
| `GET /api/v1/attachments/{id}/download` | `infera-task/src/attachments.rs:376` | inspect middleware/local scope | pending |
| `POST /api/v1/projects/{id}/grants` | `infera-task/src/routes.rs:466` | inspect middleware/local scope | pending |
| `GET /api/v1/teams` | `infera-task/src/routes.rs:599` | inspect middleware/local scope | pending |
| `POST /api/v1/teams` | `infera-task/src/routes.rs:608` | inspect middleware/local scope | pending |
| `GET /api/v1/teams/{id}` | `infera-task/src/routes.rs:618` | inspect middleware/local scope | pending |
| `PATCH /api/v1/teams/{id}` | `infera-task/src/routes.rs:628` | inspect middleware/local scope | pending |
| `GET /api/v1/work-items` | `infera-task/src/routes.rs:477` | inspect middleware/local scope | pending |
| `POST /api/v1/work-items` | `infera-task/src/routes.rs:495` | inspect middleware/local scope | pending |
| `GET /api/v1/work-items/{id}` | `infera-task/src/routes.rs:512` | inspect middleware/local scope | pending |
| `PATCH /api/v1/work-items/{id}` | `infera-task/src/routes.rs:522` | inspect middleware/local scope | pending |
| `DELETE /api/v1/work-items/{id}` | `infera-task/src/routes.rs:969` | inspect middleware/local scope | pending |
| `POST /api/v1/work-items/{id}/transition` | `infera-task/src/routes.rs:535` | inspect middleware/local scope | pending |
| `GET /api/v1/work-items/{id}/activity` | `infera-task/src/routes.rs:957` | inspect middleware/local scope | pending |
| `GET /api/v1/work-items/{id}/comments/page` | `infera-task/src/routes.rs:651` | inspect middleware/local scope | pending |
| `GET /api/v1/work-items/{id}/comments` | `infera-task/src/routes.rs:662` | inspect middleware/local scope | pending |
| `POST /api/v1/work-items/{id}/comments` | `infera-task/src/routes.rs:589` | inspect middleware/local scope | pending |
| `GET /api/v1/work-items/{id}/work-logs` | `infera-task/src/routes.rs:687` | inspect middleware/local scope | pending |
| `POST /api/v1/work-items/{id}/work-logs` | `infera-task/src/routes.rs:672` | inspect middleware/local scope | pending |
| `GET /api/v1/work-items/{id}/commits` | `infera-task/src/routes.rs:712` | inspect middleware/local scope | pending |
| `POST /api/v1/work-items/{id}/commits` | `infera-task/src/routes.rs:697` | inspect middleware/local scope | pending |
| `GET /api/v1/work-items/{id}/work-sessions` | `infera-task/src/routes.rs:768` | inspect middleware/local scope | pending |
| `POST /api/v1/work-items/{id}/work-sessions/start` | `infera-task/src/routes.rs:722` | inspect middleware/local scope | pending |
| `POST /api/v1/work-items/{id}/points` | `infera-task/src/routes.rs:778` | inspect middleware/local scope | pending |
| `GET /api/v1/work-sessions/active` | `infera-task/src/routes.rs:759` | inspect middleware/local scope | pending |
| `POST /api/v1/work-sessions/{id}/heartbeat` | `infera-task/src/routes.rs:737` | inspect middleware/local scope | pending |
| `POST /api/v1/work-sessions/{id}/stop` | `infera-task/src/routes.rs:748` | inspect middleware/local scope | pending |
| `GET /api/v1/sprints` | `infera-task/src/routes.rs:559` | inspect middleware/local scope | pending |
| `POST /api/v1/sprints` | `infera-task/src/routes.rs:549` | inspect middleware/local scope | pending |
| `POST /api/v1/sprints/{id}/start` | `infera-task/src/routes.rs:569` | inspect middleware/local scope | pending |
| `POST /api/v1/sprints/{id}/complete` | `infera-task/src/routes.rs:579` | inspect middleware/local scope | pending |
| `GET /api/v1/projects/{id}/report` | `infera-task/src/space_report.rs:55` | inspect middleware/local scope | pending |
| `GET /api/v1/reports/summary` | `infera-task/src/routes.rs:823` | inspect middleware/local scope | pending |
| `GET /api/v1/reports/team-monitoring` | `infera-task/src/routes.rs:813` | inspect middleware/local scope | pending |
| `PUT /api/v1/performance/policies` | `infera-task/src/routes.rs:793` | inspect middleware/local scope | pending |
| `GET /api/v1/points/history` | `infera-task/src/routes.rs:803` | inspect middleware/local scope | pending |
| `POST /api/v1/agent-proposals` | `infera-task/src/routes.rs:833` | inspect middleware/local scope | pending |
| `POST /api/v1/agent-proposals/{id}/approve` | `infera-task/src/routes.rs:847` | inspect middleware/local scope | pending |
| `GET /api/v1/events` | `infera-task/src/routes.rs:858` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/task.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
