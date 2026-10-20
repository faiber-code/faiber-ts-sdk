# reservation capability discovery

Bookable services, providers, working schedules, slots and conflict-controlled reservations.

خدمت قابل رزرو، ارائه‌دهنده، برنامه کاری، بازه زمانی و رزرو بدون تداخل.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `f7cd709510458083d10a1b79a5ad3d7cd29196bd`
- SDK source revision: `80aef6037cec20bb808903f15737160cef5f6a66`
- Working HEAD: `4ece677c98c48070fcdc3de77a714b783f73bacc`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-reservation/src/router.rs:151` | inspect middleware/local scope | stale |
| `GET /` | `infera-reservation/src/router.rs:151` | inspect middleware/local scope | stale |
| `GET /api/openapi.json` | `infera-reservation/src/router.rs:68` | inspect middleware/local scope | stale |
| `GET /api/v1/services` | `infera-reservation/src/reservation_service/routes.rs:13` | inspect middleware/local scope | stale |
| `POST /api/v1/services` | `infera-reservation/src/reservation_service/routes.rs:27` | inspect middleware/local scope | stale |
| `GET /api/v1/services/{id}` | `infera-reservation/src/reservation_service/routes.rs:22` | inspect middleware/local scope | stale |
| `PATCH /api/v1/services/{id}` | `infera-reservation/src/reservation_service/routes.rs:33` | inspect middleware/local scope | stale |
| `DELETE /api/v1/services/{id}` | `infera-reservation/src/reservation_service/routes.rs:39` | inspect middleware/local scope | stale |
| `GET /api/v1/providers` | `infera-reservation/src/provider/routes.rs:16` | inspect middleware/local scope | stale |
| `POST /api/v1/providers` | `infera-reservation/src/provider/routes.rs:27` | inspect middleware/local scope | stale |
| `GET /api/v1/providers/{id}` | `infera-reservation/src/provider/routes.rs:22` | inspect middleware/local scope | stale |
| `PATCH /api/v1/providers/{id}` | `infera-reservation/src/provider/routes.rs:33` | inspect middleware/local scope | stale |
| `DELETE /api/v1/providers/{id}` | `infera-reservation/src/provider/routes.rs:39` | inspect middleware/local scope | stale |
| `GET /api/v1/providers/{id}/services` | `infera-reservation/src/provider/routes.rs:45` | inspect middleware/local scope | stale |
| `POST /api/v1/providers/{id}/services` | `infera-reservation/src/provider/routes.rs:51` | inspect middleware/local scope | stale |
| `DELETE /api/v1/providers/{id}/services/{service_id}` | `infera-reservation/src/provider/routes.rs:57` | inspect middleware/local scope | stale |
| `GET /api/v1/providers/{provider_id}/schedules` | `infera-reservation/src/work_schedule/routes.rs:10` | inspect middleware/local scope | stale |
| `PUT /api/v1/providers/{provider_id}/schedules` | `infera-reservation/src/work_schedule/routes.rs:16` | inspect middleware/local scope | stale |
| `POST /api/v1/slots` | `infera-reservation/src/time_slot/routes.rs:19` | inspect middleware/local scope | stale |
| `GET /api/v1/slots/available` | `infera-reservation/src/time_slot/routes.rs:13` | inspect middleware/local scope | stale |
| `GET /api/v1/slots/{id}` | `infera-reservation/src/time_slot/routes.rs:30` | inspect middleware/local scope | stale |
| `PATCH /api/v1/slots/{id}` | `infera-reservation/src/time_slot/routes.rs:34` | inspect middleware/local scope | stale |
| `DELETE /api/v1/slots/{id}` | `infera-reservation/src/time_slot/routes.rs:25` | inspect middleware/local scope | stale |
| `GET /api/v1/reservations` | `infera-reservation/src/reservation/routes.rs:12` | inspect middleware/local scope | stale |
| `POST /api/v1/reservations` | `infera-reservation/src/reservation/routes.rs:24` | inspect middleware/local scope | stale |
| `GET /api/v1/reservations/{id}` | `infera-reservation/src/reservation/routes.rs:18` | inspect middleware/local scope | stale |
| `PATCH /api/v1/reservations/{id}` | `infera-reservation/src/reservation/routes.rs:29` | inspect middleware/local scope | stale |
| `DELETE /api/v1/reservations/{id}` | `infera-reservation/src/reservation/routes.rs:35` | inspect middleware/local scope | stale |
| `GET /api/v1/integration/flow` | `infera-reservation/src/integration/routes.rs:9` | inspect middleware/local scope | stale |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/reservation.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
