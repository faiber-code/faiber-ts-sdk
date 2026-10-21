# crm capability discovery

Customer companies and contacts, leads, deals, pipelines, teams, activities and certified reports.

شرکت و مخاطب مشتری، سرنخ، معامله، قیف فروش، تیم، فعالیت و گزارش معتبر.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `1addec42a400ba980b6547060cdcb4d347a7bbd0`
- SDK source revision: `77e2e4a7660e007aefef81e27337476c6d748cac`
- Evidence inventory revision: `77e2e4a7660e007aefef81e27337476c6d748cac` (sdk)
- Working HEAD: `6c763c989216fbecd6cfdb4c98f1067c09d17507`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /` | `infera-crm/src/router.rs:157` | inspect middleware/local scope | pending |
| `GET /health` | `infera-crm/src/router.rs:157` | inspect middleware/local scope | pending |
| `GET /up` | `infera-crm/src/router.rs:157` | inspect middleware/local scope | pending |
| `GET /livez` | `infera-crm/src/router.rs:157` | inspect middleware/local scope | pending |
| `GET /readyz` | `infera-crm/src/router.rs:167` | inspect middleware/local scope | pending |
| `GET /api/v1/context` | `infera-crm/src/api/routes.rs:205` | crm:workspace:read | pending |
| `GET /api/v1/workflow` | `infera-crm/src/api/operations.rs:973` | workflow:read, workflow:read_all, workflow:read_own | pending |
| `POST /api/v1/workflow` | `infera-crm/src/api/operations.rs:945` | workflow:create | pending |
| `GET /api/v1/workflow/{id}` | `infera-crm/src/api/operations.rs:992` | workflow:read, workflow:read_all, workflow:read_own | pending |
| `PUT /api/v1/workflow/{id}` | `infera-crm/src/api/operations.rs:1015` | workflow:update | pending |
| `PATCH /api/v1/workflow/{id}` | `infera-crm/src/api/operations.rs:1015` | workflow:update | pending |
| `DELETE /api/v1/workflow/{id}` | `infera-crm/src/api/operations.rs:1061` | workflow:delete | pending |
| `GET /api/v1/workflow-node` | `infera-crm/src/api/operations.rs:1258` | workflow_node:read, workflow_node:read_all, workflow_node:read_own | pending |
| `GET /api/v1/workflow-node/{id}` | `infera-crm/src/api/operations.rs:1281` | workflow_node:read, workflow_node:read_all, workflow_node:read_own | pending |
| `POST /api/v1/workflow-node/{id}` | `infera-crm/src/api/operations.rs:1121` | workflow_node:create | pending |
| `PUT /api/v1/workflow-node/{id}` | `infera-crm/src/api/operations.rs:1311` | workflow_node:update | pending |
| `PATCH /api/v1/workflow-node/{id}` | `infera-crm/src/api/operations.rs:1311` | workflow_node:update | pending |
| `DELETE /api/v1/workflow-node/{id}` | `infera-crm/src/api/operations.rs:1365` | workflow_node:delete | pending |
| `GET /api/v1/workflows` | `infera-crm/src/api/operations.rs:973` | workflow:read, workflow:read_all, workflow:read_own | pending |
| `POST /api/v1/workflows` | `infera-crm/src/api/operations.rs:945` | workflow:create | pending |
| `GET /api/v1/workflows/{id}` | `infera-crm/src/api/operations.rs:992` | workflow:read, workflow:read_all, workflow:read_own | pending |
| `PATCH /api/v1/workflows/{id}` | `infera-crm/src/api/operations.rs:1015` | workflow:update | pending |
| `DELETE /api/v1/workflows/{id}` | `infera-crm/src/api/operations.rs:1061` | workflow:delete | pending |
| `GET /api/v1/workflows/{workflow_id}/nodes` | `infera-crm/src/api/operations.rs:1096` | workflow_node:read, workflow_node:read_all, workflow_node:read_own | pending |
| `POST /api/v1/workflows/{workflow_id}/nodes` | `infera-crm/src/api/operations.rs:1121` | workflow_node:create | pending |
| `GET /api/v1/workflows/{workflow_id}/nodes/{node_id}` | `infera-crm/src/api/operations.rs:1151` | workflow_node:read, workflow_node:read_all, workflow_node:read_own | pending |
| `PATCH /api/v1/workflows/{workflow_id}/nodes/{node_id}` | `infera-crm/src/api/operations.rs:1181` | workflow_node:update | pending |
| `DELETE /api/v1/workflows/{workflow_id}/nodes/{node_id}` | `infera-crm/src/api/operations.rs:1232` | workflow_node:delete | pending |
| `GET /api/v1/integration/office/leads/find` | `infera-crm/src/integration/office.rs:58` | inspect middleware/local scope | pending |
| `GET /api/v1/pipelines` | `infera-crm/src/api/routes.rs:249` | crm:pipeline:read | pending |
| `PATCH /api/v1/pipelines/{id}` | `infera-crm/src/api/dashboard.rs:60` | crm:pipeline:update | pending |
| `GET /api/v1/workflows/member-based` | `infera-crm/src/api/dashboard.rs:41` | crm:pipeline:read, workflow:read, workflow:read_own | pending |
| `GET /api/v1/stats/daily` | `infera-crm/src/api/dashboard.rs:118` | crm:stats:read, crm:stats:read_own | pending |
| `GET /api/v1/stats/lead` | `infera-crm/src/api/dashboard.rs:332` | crm:stats:read, crm:stats:read_all, crm:stats:read_own | pending |
| `GET /api/v1/teams` | `infera-crm/src/api/routes.rs:259` | crm:team:read | pending |
| `POST /api/v1/teams` | `infera-crm/src/api/writes.rs:112` | crm:team:create | pending |
| `GET /api/v1/teams/{id}` | `infera-crm/src/api/operations.rs:88` | crm:team:read | pending |
| `DELETE /api/v1/teams/{id}` | `infera-crm/src/api/operations.rs:177` | crm:team:delete | pending |
| `POST /api/v1/teams/{id}/members` | `infera-crm/src/api/operations.rs:110` | crm:team:manage_members | pending |
| `DELETE /api/v1/teams/{team_id}/members/{member_id}` | `infera-crm/src/api/operations.rs:245` | crm:team:manage_members | pending |
| `GET /api/v1/sos` | `infera-crm/src/api/operations.rs:290` | crm:sos:read | pending |
| `POST /api/v1/leads/{id}/sos` | `infera-crm/src/api/operations.rs:305` | crm:sos:create | pending |
| `DELETE /api/v1/leads/{id}/sos` | `infera-crm/src/api/operations.rs:359` | crm:sos:delete | pending |
| `GET /api/v1/workflows/{id}/assignments` | `infera-crm/src/api/operations.rs:403` | crm:workflow_assignment:read | pending |
| `POST /api/v1/workflows/{id}/assignments` | `infera-crm/src/api/operations.rs:419` | crm:workflow_assignment:manage | pending |
| `DELETE /api/v1/workflows/{workflow_id}/assignments/{assignment_id}` | `infera-crm/src/api/operations.rs:505` | crm:workflow_assignment:manage | pending |
| `GET /api/v1/tasks` | `infera-crm/src/api/operations.rs:549` | crm:task:read, crm:task:read_all, crm:task:read_own | pending |
| `POST /api/v1/tasks` | `infera-crm/src/api/operations.rs:580` | crm:task:create | pending |
| `DELETE /api/v1/tasks/{id}` | `infera-crm/src/api/operations.rs:691` | crm:task:delete | pending |
| `PATCH /api/v1/tasks/{id}/status` | `infera-crm/src/api/operations.rs:630` | crm:task:update | pending |
| `POST /api/v1/activities/with-reminder` | `infera-crm/src/api/operations.rs:836` | crm:activity:create, crm:task:create | pending |
| `GET /api/v1/activities` | `infera-crm/src/api/operations.rs:757` | crm:activity:read | pending |
| `POST /api/v1/activities` | `infera-crm/src/api/operations.rs:783` | crm:activity:create | pending |
| `GET /api/v1/worklog` | `infera-crm/src/api/operations.rs:920` | worklog:read, worklog:read_all, worklog:read_own | pending |
| `GET /api/v1/sources` | `infera-crm/src/api/operations.rs:1413` | crm:marketing:read | pending |
| `POST /api/v1/sources` | `infera-crm/src/api/operations.rs:1424` | crm:marketing:manage | pending |
| `GET /api/v1/campaigns` | `infera-crm/src/api/operations.rs:1461` | crm:marketing:read | pending |
| `POST /api/v1/campaigns` | `infera-crm/src/api/operations.rs:1472` | crm:marketing:manage | pending |
| `PATCH /api/v1/workspace/settings` | `infera-crm/src/api/operations.rs:1524` | crm:settings:update | pending |
| `GET /api/v1/automation/jobs` | `infera-crm/src/api/routes.rs:680` | crm:automation:read | pending |
| `GET /api/v1/automation/webhooks` | `infera-crm/src/api/routes.rs:705` | crm:automation:read | pending |
| `GET /api/v1/companies` | `infera-crm/src/api/routes.rs:274` | crm:company:read, crm:company:read_all | pending |
| `POST /api/v1/companies` | `infera-crm/src/api/writes.rs:156` | crm:company:create | pending |
| `GET /api/v1/companies/{id}` | `infera-crm/src/api/routes.rs:304` | crm:company:read, crm:company:read_all | pending |
| `PATCH /api/v1/companies/{id}` | `infera-crm/src/api/writes.rs:277` | crm:company:update | pending |
| `GET /api/v1/contacts` | `infera-crm/src/api/routes.rs:324` | crm:contact:read, crm:contact:read_all | pending |
| `POST /api/v1/contacts` | `infera-crm/src/api/writes.rs:218` | crm:contact:create | pending |
| `GET /api/v1/contacts/{id}` | `infera-crm/src/api/routes.rs:354` | crm:contact:read, crm:contact:read_all | pending |
| `PATCH /api/v1/contacts/{id}` | `infera-crm/src/api/writes.rs:345` | crm:contact:update | pending |
| `GET /api/v1/leads/light` | `infera-crm/src/api/routes.rs:436` | inspect middleware/local scope | pending |
| `GET /api/v1/leads` | `infera-crm/src/api/routes.rs:377` | crm:lead:read, crm:lead:read_all, crm:lead:read_own | pending |
| `POST /api/v1/leads` | `infera-crm/src/api/writes.rs:639` | crm:lead:create | pending |
| `GET /api/v1/leads/{id}` | `infera-crm/src/api/routes.rs:445` | crm:lead:read, crm:lead:read_all, crm:lead:read_own | pending |
| `PATCH /api/v1/leads/{id}` | `infera-crm/src/api/writes.rs:415` | crm:lead:update | pending |
| `GET /api/v1/leads/{id}/history` | `infera-crm/src/api/operations.rs:1388` | crm:lead:read, crm:activity:read | pending |
| `DELETE /api/v1/leads/{id}/reminders` | `infera-crm/src/api/operations.rs:738` | crm:task:delete | pending |
| `PATCH /api/v1/leads/{id}/stage` | `infera-crm/src/api/writes.rs:786` | crm:lead:move | pending |
| `PATCH /api/v1/leads/{id}/assignment` | `infera-crm/src/api/writes.rs:932` | crm:lead:assign | pending |
| `GET /api/v1/deals` | `infera-crm/src/api/routes.rs:474` | crm:deal:read, crm:deal:read_all, crm:deal:read_own | pending |
| `POST /api/v1/deals` | `infera-crm/src/api/writes.rs:711` | crm:deal:create | pending |
| `GET /api/v1/deals/{id}` | `infera-crm/src/api/routes.rs:521` | crm:deal:read, crm:deal:read_all, crm:deal:read_own | pending |
| `PATCH /api/v1/deals/{id}` | `infera-crm/src/api/writes.rs:485` | crm:deal:update | pending |
| `PATCH /api/v1/deals/{id}/stage` | `infera-crm/src/api/writes.rs:855` | crm:deal:move | pending |
| `PATCH /api/v1/deals/{id}/assignment` | `infera-crm/src/api/writes.rs:997` | crm:deal:assign | pending |
| `GET /api/v1/boards/{entity_type}/{pipeline_id}` | `infera-crm/src/api/routes.rs:542` | crm:board:read | pending |
| `GET /api/v1/reports/overview` | `infera-crm/src/api/routes.rs:633` | crm:report:read | pending |
| `POST /api/v1/reports/refresh` | `infera-crm/src/api/writes.rs:1062` | crm:report:refresh | pending |
| `POST /api/v1/reports/{id}/agentic` | `infera-crm/src/api/writes.rs:1114` | crm:agent:run | pending |
| `GET /api/v1/reports/{id}` | `infera-crm/src/api/routes.rs:665` | crm:report:read | pending |
| `GET /api/v1/reports/catalog` | `infera-crm/src/api/routes.rs:645` | crm:report:read | pending |
| `ANY /api` | `infera-crm/src/router.rs:145` | inspect middleware/local scope | pending |
| `ANY /api/{*path}` | `infera-crm/src/router.rs:145` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/crm.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
