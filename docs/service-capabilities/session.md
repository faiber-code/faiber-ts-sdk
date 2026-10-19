# session capability discovery

Live rooms, participants, recordings and server-timed sessions backed by published DRM compositions.

اتاق زنده، شرکت‌کننده، ضبط و جلسه زمان‌بندی‌شده متکی به ترکیب منتشرشده رسانه.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `4c5eefc4062e8e522795478c8dd7d55e48a0c9fc`
- SDK source revision: `831dde454084a05920441091a8305a7a972d9804`
- Working HEAD: `edefa6463fe1877661cc62ef4752515262c71e00`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /api/v1/config/branding` | `infera-session/src/branding.rs:172` | config:read | pending |
| `PUT /api/v1/config/branding` | `infera-session/src/branding.rs:185` | config:update | pending |
| `POST /api/v1/config/branding/assets` | `infera-session/src/branding.rs:231` | config:update | pending |
| `GET /api/v1/public/branding` | `infera-session/src/branding.rs:161` | inspect middleware/local scope | pending |
| `GET /api/v1/public/branding/assets/{key}` | `infera-session/src/branding.rs:273` | inspect middleware/local scope | pending |
| `GET /` | `infera-session/src/router.rs:702` | inspect middleware/local scope | pending |
| `GET /health` | `infera-session/src/router.rs:702` | inspect middleware/local scope | pending |
| `POST /api/v1/rooms/{room_id}/interactions` | `infera-session/src/asset_economy.rs:116` | room:read_own | pending |
| `GET /api/v1/rooms/analytics` | `infera-session/src/room/routes.rs:466` | room:read_analytics | pending |
| `GET /api/v1/rooms` | `infera-session/src/room/routes.rs:511` | room:read | pending |
| `POST /api/v1/rooms` | `infera-session/src/room/routes.rs:414` | room:create | pending |
| `GET /api/v1/rooms/{room_id}` | `infera-session/src/room/routes.rs:671` | room:read | pending |
| `GET /api/v1/rooms/{room_id}/recordings` | `infera-session/src/room/routes.rs:1091` | room_recording:read | pending |
| `GET /api/v1/rooms/{room_id}/presence-events` | `infera-session/src/room/routes.rs:242` | room:read | pending |
| `GET /api/v1/rooms/{room_id}/livekit-token` | `infera-session/src/room/routes.rs:871` | room:read_livekit_token | pending |
| `GET /api/v1/rooms/{room_id}/join` | `infera-session/src/room/routes.rs:935` | room:read_livekit_token | pending |
| `GET /api/v1/rooms/{room_id}/leaderboard` | `infera-session/src/room/routes.rs:484` | room:read_own | pending |
| `POST /api/v1/rooms/{room_id}/interactive/start` | `infera-session/src/room/routes.rs:1042` | room:start_interactive | pending |
| `POST /api/v1/rooms/{room_id}/end` | `infera-session/src/room/routes.rs:721` | room:end | pending |
| `PUT /api/v1/rooms/{room_id}/participants/{profile_id}/mute` | `infera-session/src/room/routes.rs:332` | room:end | pending |
| `GET /api/v1/rooms/{room_id}/moderation` | `infera-session/src/room/routes.rs:293` | room:read_own | pending |
| `GET /api/v1/rooms/{room_id}/playback` | `infera-session/src/room/routes.rs:767` | room:read_playback | pending |
| `GET /api/v1/rooms/{room_id}/stop` | `infera-session/src/room/routes.rs:1357` | room:stop | pending |
| `PUT /api/v1/rooms/{room_id}` | `infera-session/src/room/routes.rs:567` | room:update | pending |
| `PATCH /api/v1/rooms/{room_id}` | `infera-session/src/room/routes.rs:567` | room:update | pending |
| `DELETE /api/v1/rooms/{room_id}` | `infera-session/src/room/routes.rs:626` | room:delete | pending |
| `POST /api/v1/rooms/livekit/webhook` | `infera-session/src/room/routes.rs:1388` | inspect middleware/local scope | pending |
| `POST /api/v1/room_states/{room_state_id}/respond` | `infera-session/src/room_state/routes.rs:178` | room_state:respond | pending |
| `GET /api/v1/config/livekit` | `infera-session/src/configuration/routes.rs:28` | config:read | pending |
| `PUT /api/v1/config/livekit` | `infera-session/src/configuration/routes.rs:45` | config:update | pending |
| `GET /api/v1/recordings` | `infera-session/src/recording/routes.rs:107` | room_recording:read | pending |
| `GET /api/v1/recordings/audio-models` | `infera-session/src/recording/routes.rs:132` | config:read | pending |
| `GET /api/v1/recordings/{recording_id}/manifest` | `infera-session/src/recording/routes.rs:229` | room_recording:read | pending |
| `POST /api/v1/recordings/{recording_id}/schedule` | `infera-session/src/recording/routes.rs:258` | room_recording:process | pending |
| `GET /api/v1/integrations/chat/users/{user_id}/sessions` | `infera-session/src/assistant_tools.rs:59` | inspect middleware/local scope | pending |
| `GET /api/v1/integrations/chat/users/{user_id}/sessions/{room_id}` | `infera-session/src/assistant_tools.rs:103` | inspect middleware/local scope | pending |
| `GET /api/v1/integrations/chat/tool-schema` | `infera-session/src/assistant_tools.rs:145` | inspect middleware/local scope | pending |
| `ANY /api/v1/view/{service}/{*path}` | `infera-session/src/router.rs:281` | inspect middleware/local scope | pending |
| `GET /integration/flow` | `infera-session/src/integration/routes.rs:29` | inspect middleware/local scope | pending |
| `GET /api/v1/integration/docs` | `infera-session/src/integration/routes.rs:18` | integration:read | pending |
| `POST /api/v1/integrations/lms/performance-context` | `infera-session/src/integration/lms.rs:40` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/session.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
