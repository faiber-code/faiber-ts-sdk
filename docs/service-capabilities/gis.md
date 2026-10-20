# gis capability discovery

Scoped spatial datasets, validated geometry, maps, authorized tiles, import jobs, public places and strictly private personal places.

مجموعه‌دادهٔ مکانی محدودشده، هندسهٔ معتبر، نقشه، کاشی با کنترل دسترسی، ورود داده، مکان عمومی و مکان شخصی خصوصی.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `d07b4facd1f73d40a20291dde479365845ec4023`
- SDK source revision: `0bc8423a51887450b928e7b372153014cd47e582`
- Working HEAD: `d07b4facd1f73d40a20291dde479365845ec4023`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-gis/src/router.rs:16` | inspect middleware/local scope | stale |
| `GET /api/v1/datasets` | `infera-gis/src/geometry/routes.rs:28` | inspect middleware/local scope | stale |
| `POST /api/v1/datasets` | `infera-gis/src/geometry/routes.rs:60` | inspect middleware/local scope | stale |
| `GET /api/v1/datasets/{id}` | `infera-gis/src/geometry/routes.rs:68` | inspect middleware/local scope | stale |
| `PATCH /api/v1/datasets/{id}` | `infera-gis/src/geometry/routes.rs:87` | inspect middleware/local scope | stale |
| `GET /api/v1/datasets/{id}/features` | `infera-gis/src/geometry/routes.rs:148` | inspect middleware/local scope | stale |
| `PUT /api/v1/datasets/{id}/features` | `infera-gis/src/geometry/routes.rs:78` | inspect middleware/local scope | stale |
| `PUT /api/v1/datasets/{id}/features/{feature}` | `infera-gis/src/geometry/routes.rs:181` | inspect middleware/local scope | stale |
| `GET /api/v1/datasets/{id}/history` | `infera-gis/src/geometry/routes.rs:167` | inspect middleware/local scope | stale |
| `GET /api/v1/public/datasets/{id}/geojson` | `infera-gis/src/geometry/routes.rs:159` | inspect middleware/local scope | stale |
| `GET /api/v1/maps` | `infera-gis/src/maps/routes.rs:44` | inspect middleware/local scope | stale |
| `POST /api/v1/maps` | `infera-gis/src/maps/routes.rs:51` | inspect middleware/local scope | stale |
| `GET /api/v1/maps/{id}` | `infera-gis/src/maps/routes.rs:126` | inspect middleware/local scope | stale |
| `PATCH /api/v1/maps/{id}` | `infera-gis/src/maps/routes.rs:155` | inspect middleware/local scope | stale |
| `GET /api/v1/maps/{id}/style` | `infera-gis/src/maps/routes.rs:295` | inspect middleware/local scope | stale |
| `PUT /api/v1/maps/{id}/publish` | `infera-gis/src/maps/routes.rs:199` | inspect middleware/local scope | stale |
| `GET /api/v1/public/maps` | `infera-gis/src/maps/routes.rs:239` | inspect middleware/local scope | stale |
| `GET /api/v1/public/maps/{slug}` | `infera-gis/src/maps/routes.rs:245` | inspect middleware/local scope | stale |
| `GET /api/v1/public/maps/{slug}/style` | `infera-gis/src/maps/routes.rs:248` | inspect middleware/local scope | stale |
| `GET /api/v1/public/maps/{slug}/geojson` | `infera-gis/src/maps/routes.rs:276` | inspect middleware/local scope | stale |
| `GET /api/v1/public/datasets/{id}/tilejson` | `infera-gis/src/tiles/routes.rs:22` | inspect middleware/local scope | stale |
| `GET /api/v1/public/datasets/{id}/tiles/{z}/{x}/{y}` | `infera-gis/src/tiles/routes.rs:31` | inspect middleware/local scope | stale |
| `GET /api/v1/datasets/{id}/tiles/{z}/{x}/{y}` | `infera-gis/src/tiles/routes.rs:41` | inspect middleware/local scope | stale |
| `GET /api/v1/imports` | `infera-gis/src/imports/mod.rs:79` | inspect middleware/local scope | stale |
| `POST /api/v1/imports` | `infera-gis/src/imports/mod.rs:43` | inspect middleware/local scope | stale |
| `POST /api/v1/imports/{id}/retry` | `infera-gis/src/imports/mod.rs:86` | inspect middleware/local scope | stale |
| `GET /api/v1/my-places` | `infera-gis/src/personal_places.rs:43` | inspect middleware/local scope | stale |
| `POST /api/v1/my-places` | `infera-gis/src/personal_places.rs:59` | inspect middleware/local scope | stale |
| `GET /api/v1/my-places/{id}` | `infera-gis/src/personal_places.rs:50` | inspect middleware/local scope | stale |
| `PUT /api/v1/my-places/{id}` | `infera-gis/src/personal_places.rs:72` | inspect middleware/local scope | stale |
| `DELETE /api/v1/my-places/{id}` | `infera-gis/src/personal_places.rs:88` | inspect middleware/local scope | stale |
| `GET /api/v1/me` | `infera-gis/src/router.rs:10` | inspect middleware/local scope | stale |
| `GET /api/v1/places` | `infera-gis/src/places.rs:120` | inspect middleware/local scope | stale |
| `POST /api/v1/places` | `infera-gis/src/places.rs:226` | inspect middleware/local scope | stale |
| `GET /api/v1/places/{id}` | `infera-gis/src/places.rs:175` | inspect middleware/local scope | stale |
| `PUT /api/v1/places/{id}/save` | `infera-gis/src/places.rs:193` | inspect middleware/local scope | stale |
| `DELETE /api/v1/places/{id}/save` | `infera-gis/src/places.rs:203` | inspect middleware/local scope | stale |
| `POST /api/v1/places/{id}/reports` | `infera-gis/src/places.rs:264` | inspect middleware/local scope | stale |
| `POST /api/v1/places/{id}/assertion` | `infera-gis/src/places.rs:472` | inspect middleware/local scope | stale |
| `GET /api/v1/me/saves` | `infera-gis/src/places.rs:186` | inspect middleware/local scope | stale |
| `GET /api/v1/me/contributions` | `infera-gis/src/places.rs:543` | inspect middleware/local scope | stale |
| `GET /api/v1/internal/outbox` | `infera-gis/src/places.rs:590` | inspect middleware/local scope | stale |
| `PUT /api/v1/internal/outbox/{id}/ack` | `infera-gis/src/places.rs:596` | inspect middleware/local scope | stale |
| `GET /api/v1/places/{id}/references` | `infera-gis/src/places.rs:549` | inspect middleware/local scope | stale |
| `GET /api/v1/moderation/{id}/history` | `infera-gis/src/places.rs:553` | inspect middleware/local scope | stale |
| `POST /api/v1/moderation/reports/{id}` | `infera-gis/src/places.rs:563` | inspect middleware/local scope | stale |
| `GET /api/v1/moderation` | `infera-gis/src/places.rs:292` | inspect middleware/local scope | stale |
| `POST /api/v1/moderation/{id}` | `infera-gis/src/places.rs:317` | inspect middleware/local scope | stale |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/gis.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
