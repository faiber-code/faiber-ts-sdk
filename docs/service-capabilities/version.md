# version capability discovery

Application release/version records and client update metadata.

رکورد نسخه و انتشار برنامه و اطلاعات به‌روزرسانی کاربر.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `88071d0dd49309e0c93aba6238516e95b57e1df5`
- SDK source revision: `88071d0dd49309e0c93aba6238516e95b57e1df5`
- Working HEAD: `92b69f4e85225f87e47258645c6f908a1eb501b4`
- Source relationship: working_ahead_of_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera_version/src/router.rs:146` | inspect middleware/local scope | stale |
| `POST /api/v1/apk/releases` | `infera_version/src/version/publish.rs:32` | inspect middleware/local scope | locally_tested_requires_canonical_reconciliation |
| `GET /api/openapi.json` | `infera_version/src/router.rs:130` | inspect middleware/local scope | stale |
| `GET /api/v1/services` | `infera_version/src/service/routes.rs:32` | inspect middleware/local scope | locally_tested_requires_canonical_reconciliation |
| `GET /api/v1/services/{service_slug}` | `infera_version/src/service/routes.rs:54` | inspect middleware/local scope | stale |
| `GET /api/v1/services/{service_slug}/all` | `infera_version/src/service/routes.rs:79` | inspect middleware/local scope | stale |
| `GET /api/v1/versions/{version_id}` | `infera_version/src/version/routes.rs:29` | inspect middleware/local scope | stale |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/version.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
