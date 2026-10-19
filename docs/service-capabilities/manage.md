# manage capability discovery

Project-scoped signed administration sessions, service proxy, readable management workflows and reviewed agent execution.

نشست امضاشده مدیریت پروژه، اتصال سرویس، گردش مدیریت خوانا و اجرای بازبینی‌شده عامل.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `a13caa6019e3648a1f84766d7ee5034c7147a123`
- SDK source revision: `not in current SDK source lock`
- Working HEAD: `a13caa6019e3648a1f84766d7ee5034c7147a123`
- Source relationship: not_in_sdk_lock

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-manage/src/router.rs:139` | inspect middleware/local scope | source_reviewed_requires_runtime_verification |
| `GET /sso` | `infera-manage/src/sso.rs:299` | inspect middleware/local scope | source_reviewed_requires_runtime_verification |
| `POST /api/v1/dev/login` | `infera-manage/src/sso.rs:74` | inspect middleware/local scope | source_reviewed_requires_runtime_verification |
| `POST /logout` | `infera-manage/src/sso.rs:420` | inspect middleware/local scope | source_reviewed_requires_runtime_verification |
| `GET /api/v1/me` | `infera-manage/src/router.rs:121` | inspect middleware/local scope | source_reviewed_requires_runtime_verification |
| `POST /api/v1/setup/check` | `infera-manage/src/setup.rs:158` | inspect middleware/local scope | source_reviewed_requires_runtime_verification |
| `GET /api/v1/health/services` | `infera-manage/src/proxy.rs:132` | inspect middleware/local scope | source_reviewed_requires_runtime_verification |
| `ANY /api/v1/proxy/{*rest}` | `infera-manage/src/proxy.rs:173` | inspect middleware/local scope | source_reviewed_requires_runtime_verification |
| `ANY /api/v1/agent/{*rest}` | `infera-manage/src/agent.rs:43` | inspect middleware/local scope | source_reviewed_requires_runtime_verification |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/manage.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
