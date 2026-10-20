# flow capability discovery

Discover service triggers/actions, validate flow graphs, execute flows and inspect run steps.

کشف محرک و عمل سرویس‌ها، اعتبارسنجی گردش، اجرا و بررسی مراحل.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `d560d457b331ffe8e318006e5baf5d3734ffbe98`
- SDK source revision: `d560d457b331ffe8e318006e5baf5d3734ffbe98`
- Evidence inventory revision: `d560d457b331ffe8e318006e5baf5d3734ffbe98` (sdk)
- Working HEAD: `6fe84352982f97e3f56cd750376a88f4e9ac0a85`
- Source relationship: working_ahead_of_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /` | `infera-flow/src/router.rs:77` | inspect middleware/local scope | pending |
| `GET /health` | `infera-flow/src/router.rs:77` | inspect middleware/local scope | pending |
| `GET /up` | `infera-flow/src/router.rs:77` | inspect middleware/local scope | pending |
| `POST /api/v1/events/{event_key}` | `infera-flow/src/event/routes.rs:50` | flow:execute | pending |
| `GET /api/v1/flows` | `infera-flow/src/flow/routes.rs:52` | flow:read | pending |
| `POST /api/v1/flows` | `infera-flow/src/flow/routes.rs:65` | flow:create | pending |
| `POST /api/v1/flows/import` | `infera-flow/src/flow/routes.rs:38` | flow:create, flow:update | pending |
| `GET /api/v1/flows/{id}` | `infera-flow/src/flow/routes.rs:79` | flow:read | pending |
| `PUT /api/v1/flows/{id}` | `infera-flow/src/flow/routes.rs:93` | flow:update | pending |
| `DELETE /api/v1/flows/{id}` | `infera-flow/src/flow/routes.rs:108` | flow:delete | pending |
| `POST /api/v1/flows/{id}/validate` | `infera-flow/src/flow/routes.rs:122` | flow:update | pending |
| `GET /api/v1/registry/active-triggers` | `infera-flow/src/registry/routes.rs:19` | inspect middleware/local scope | pending |
| `GET /api/v1/catalog/triggers` | `infera-flow/src/catalog/routes.rs:27` | flow:read | pending |
| `GET /api/v1/catalog/actions` | `infera-flow/src/catalog/routes.rs:43` | flow:read | pending |
| `POST /api/v1/catalog/sync` | `infera-flow/src/catalog/routes.rs:59` | catalog:sync | pending |
| `GET /api/v1/runs` | `infera-flow/src/run/routes.rs:46` | flow_run:read | pending |
| `GET /api/v1/runs/{id}` | `infera-flow/src/run/routes.rs:33` | flow_run:read | pending |
| `GET /api/v1/integration/flow` | `infera-flow/src/router.rs:83` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/flow.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
