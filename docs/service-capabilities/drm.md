# drm capability discovery

Media libraries, protected playback, processing jobs and versioned mixed-media compositions.

کتابخانه رسانه، پخش حفاظت‌شده، پردازش و ترکیب چندرسانه‌ای نسخه‌دار.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `31d8ace56b1f65c789415bb4bfb9f6da6678b1a2`
- SDK source revision: `31d8ace56b1f65c789415bb4bfb9f6da6678b1a2`
- Working HEAD: `31d8ace56b1f65c789415bb4bfb9f6da6678b1a2`
- Source relationship: same

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /api/v1/status` | `infera-drm/src/handlers.rs:23` | inspect middleware/local scope | pending |
| `GET /api/v1/folders` | `infera-drm/src/handlers.rs:27` | inspect middleware/local scope | pending |
| `POST /api/v1/folders` | `infera-drm/src/handlers.rs:38` | inspect middleware/local scope | pending |
| `PATCH /api/v1/folders/{id}` | `infera-drm/src/handlers.rs:59` | inspect middleware/local scope | pending |
| `DELETE /api/v1/folders/{id}` | `infera-drm/src/handlers.rs:80` | inspect middleware/local scope | pending |
| `GET /api/v1/tags` | `infera-drm/src/handlers.rs:88` | inspect middleware/local scope | pending |
| `POST /api/v1/tags` | `infera-drm/src/handlers.rs:97` | inspect middleware/local scope | pending |
| `DELETE /api/v1/tags/{id}` | `infera-drm/src/handlers.rs:115` | inspect middleware/local scope | pending |
| `GET /api/v1/media` | `infera-drm/src/handlers.rs:158` | inspect middleware/local scope | pending |
| `POST /api/v1/media` | `infera-drm/src/handlers.rs:266` | inspect middleware/local scope | pending |
| `GET /api/v1/media/drm-statuses` | `infera-drm/src/package_handlers.rs:169` | inspect middleware/local scope | pending |
| `POST /api/v1/media/batch` | `infera-drm/src/handlers.rs:237` | inspect middleware/local scope | pending |
| `GET /api/v1/media/{id}` | `infera-drm/src/handlers.rs:226` | inspect middleware/local scope | pending |
| `PATCH /api/v1/media/{id}` | `infera-drm/src/handlers.rs:397` | inspect middleware/local scope | pending |
| `DELETE /api/v1/media/{id}` | `infera-drm/src/handlers.rs:430` | inspect middleware/local scope | pending |
| `GET /api/v1/media/{id}/playback` | `infera-drm/src/handlers.rs:454` | inspect middleware/local scope | pending |
| `GET /api/v1/mixed-media` | `infera-drm/src/editor_handlers.rs:42` | inspect middleware/local scope | pending |
| `POST /api/v1/mixed-media` | `infera-drm/src/editor_handlers.rs:53` | inspect middleware/local scope | pending |
| `GET /api/v1/mixed-media/{id}` | `infera-drm/src/editor_handlers.rs:102` | inspect middleware/local scope | pending |
| `PATCH /api/v1/mixed-media/{id}` | `infera-drm/src/editor_handlers.rs:109` | inspect middleware/local scope | pending |
| `DELETE /api/v1/mixed-media/{id}` | `infera-drm/src/editor_handlers.rs:154` | inspect middleware/local scope | pending |
| `GET /api/v1/mixed-media/{id}/resources` | `infera-drm/src/editor_handlers.rs:163` | inspect middleware/local scope | pending |
| `POST /api/v1/mixed-media/{id}/categories` | `infera-drm/src/editor_handlers.rs:202` | inspect middleware/local scope | pending |
| `PATCH /api/v1/mixed-media/{mixed_id}/categories/{id}` | `infera-drm/src/editor_handlers.rs:228` | inspect middleware/local scope | pending |
| `DELETE /api/v1/mixed-media/{mixed_id}/categories/{id}` | `infera-drm/src/editor_handlers.rs:253` | inspect middleware/local scope | pending |
| `POST /api/v1/mixed-media/{id}/parts` | `infera-drm/src/editor_handlers.rs:330` | inspect middleware/local scope | pending |
| `GET /api/v1/mixed-media/{mixed_id}/parts/{id}` | `infera-drm/src/editor_handlers.rs:349` | inspect middleware/local scope | pending |
| `PUT /api/v1/mixed-media/{mixed_id}/parts/{id}` | `infera-drm/src/editor_handlers.rs:363` | inspect middleware/local scope | pending |
| `DELETE /api/v1/mixed-media/{mixed_id}/parts/{id}` | `infera-drm/src/editor_handlers.rs:388` | inspect middleware/local scope | pending |
| `GET /api/v1/mixed-media/{id}/workflow` | `infera-drm/src/editor_handlers.rs:403` | inspect middleware/local scope | pending |
| `PUT /api/v1/mixed-media/{id}/workflow` | `infera-drm/src/editor_handlers.rs:415` | inspect middleware/local scope | pending |
| `POST /api/v1/mixed-media/{id}/publish` | `infera-drm/src/editor_handlers.rs:454` | inspect middleware/local scope | pending |
| `GET /api/v1/mixed-media/{id}/manifest` | `infera-drm/src/editor_handlers.rs:601` | inspect middleware/local scope | pending |
| `GET /api/v1/mixed-media/{id}/manifests` | `infera-drm/src/editor_handlers.rs:615` | inspect middleware/local scope | pending |
| `GET /api/v1/mixed-media/{id}/knowledge-sync` | `infera-drm/src/knowledge_sync.rs:140` | inspect middleware/local scope | pending |
| `PUT /api/v1/mixed-media/{id}/knowledge-sync` | `infera-drm/src/knowledge_sync.rs:152` | inspect middleware/local scope | pending |
| `POST /api/v1/mixed-media/{id}/knowledge-sync` | `infera-drm/src/knowledge_sync.rs:171` | inspect middleware/local scope | pending |
| `GET /api/v1/mixed-media/{id}/analysis` | `infera-drm/src/composition_analysis.rs:256` | inspect middleware/local scope | pending |
| `POST /api/v1/mixed-media/{id}/analysis` | `infera-drm/src/composition_analysis.rs:267` | inspect middleware/local scope | pending |
| `GET /api/v1/composition-analyses` | `infera-drm/src/composition_analysis.rs:299` | inspect middleware/local scope | pending |
| `GET /api/v1/drm/jobs` | `infera-drm/src/drm_queue.rs:186` | inspect middleware/local scope | pending |
| `POST /api/v1/drm/jobs` | `infera-drm/src/drm_queue.rs:224` | inspect middleware/local scope | pending |
| `POST /api/v1/drm/jobs/{id}/retry` | `infera-drm/src/drm_queue.rs:232` | inspect middleware/local scope | pending |
| `POST /api/v1/drm/jobs/actions/retry-failed` | `infera-drm/src/drm_queue.rs:253` | inspect middleware/local scope | pending |
| `DELETE /api/v1/drm/jobs/{id}` | `infera-drm/src/drm_queue.rs:284` | inspect middleware/local scope | pending |
| `GET /api/v1/packages/{kind}/{media_id}` | `infera-drm/src/drm_queue.rs:330` | inspect middleware/local scope | pending |
| `POST /api/v1/packages` | `infera-drm/src/drm_queue.rs:345` | inspect middleware/local scope | pending |
| `GET /api/v1/libraries` | `infera-drm/src/generic_handlers.rs:44` | inspect middleware/local scope | pending |
| `POST /api/v1/libraries` | `infera-drm/src/generic_handlers.rs:56` | inspect middleware/local scope | pending |
| `GET /api/v1/libraries/{id}` | `infera-drm/src/generic_handlers.rs:93` | inspect middleware/local scope | pending |
| `PATCH /api/v1/libraries/{id}` | `infera-drm/src/generic_handlers.rs:105` | inspect middleware/local scope | pending |
| `DELETE /api/v1/libraries/{id}` | `infera-drm/src/generic_handlers.rs:134` | inspect middleware/local scope | pending |
| `GET /api/v1/libraries/{id}/categories` | `infera-drm/src/generic_handlers.rs:180` | inspect middleware/local scope | pending |
| `POST /api/v1/libraries/{id}/categories` | `infera-drm/src/generic_handlers.rs:194` | inspect middleware/local scope | pending |
| `PATCH /api/v1/libraries/{library_id}/categories/{id}` | `infera-drm/src/generic_handlers.rs:238` | inspect middleware/local scope | pending |
| `DELETE /api/v1/libraries/{library_id}/categories/{id}` | `infera-drm/src/generic_handlers.rs:262` | inspect middleware/local scope | pending |
| `GET /api/v1/libraries/{id}/items` | `infera-drm/src/generic_handlers.rs:315` | inspect middleware/local scope | pending |
| `POST /api/v1/libraries/{id}/items` | `infera-drm/src/generic_handlers.rs:449` | inspect middleware/local scope | pending |
| `GET /api/v1/libraries/{id}/stats` | `infera-drm/src/generic_handlers.rs:329` | inspect middleware/local scope | pending |
| `GET /api/v1/libraries/{id}/items/query` | `infera-drm/src/generic_handlers.rs:363` | inspect middleware/local scope | pending |
| `GET /api/v1/libraries/{library_id}/items/{id}` | `infera-drm/src/generic_handlers.rs:491` | inspect middleware/local scope | pending |
| `PUT /api/v1/libraries/{library_id}/items/{id}` | `infera-drm/src/generic_handlers.rs:503` | inspect middleware/local scope | pending |
| `DELETE /api/v1/libraries/{library_id}/items/{id}` | `infera-drm/src/generic_handlers.rs:529` | inspect middleware/local scope | pending |
| `GET /api/v1/libraries/{library_id}/items/{id}/attachments` | `infera-drm/src/generic_handlers.rs:547` | inspect middleware/local scope | pending |
| `POST /api/v1/libraries/{library_id}/items/{id}/attachments` | `infera-drm/src/generic_handlers.rs:568` | inspect middleware/local scope | pending |
| `GET /api/v1/compositions` | `infera-drm/src/generic_handlers.rs:633` | inspect middleware/local scope | pending |
| `POST /api/v1/compositions` | `infera-drm/src/generic_handlers.rs:683` | inspect middleware/local scope | pending |
| `GET /api/v1/composition-categories` | `infera-drm/src/generic_handlers.rs:731` | inspect middleware/local scope | pending |
| `POST /api/v1/composition-categories` | `infera-drm/src/generic_handlers.rs:742` | inspect middleware/local scope | pending |
| `PATCH /api/v1/composition-categories/{id}` | `infera-drm/src/generic_handlers.rs:769` | inspect middleware/local scope | pending |
| `DELETE /api/v1/composition-categories/{id}` | `infera-drm/src/generic_handlers.rs:809` | inspect middleware/local scope | pending |
| `GET /api/v1/compositions/{id}/workflow` | `infera-drm/src/editor_handlers.rs:403` | inspect middleware/local scope | pending |
| `PUT /api/v1/compositions/{id}/workflow` | `infera-drm/src/editor_handlers.rs:415` | inspect middleware/local scope | pending |
| `GET /api/v1/compositions/{id}/manifests` | `infera-drm/src/editor_handlers.rs:615` | inspect middleware/local scope | pending |
| `POST /api/v1/compositions/{id}/manifests` | `infera-drm/src/generic_handlers.rs:823` | inspect middleware/local scope | pending |
| `POST /api/v1/compositions/{id}/publish` | `infera-drm/src/editor_handlers.rs:454` | inspect middleware/local scope | pending |
| `GET /api/v1/external-references` | `infera-drm/src/generic_handlers.rs:859` | inspect middleware/local scope | pending |
| `POST /api/v1/external-references` | `infera-drm/src/generic_handlers.rs:873` | inspect middleware/local scope | pending |
| `POST /api/v1/upload-sessions` | `infera-drm/src/upload_handlers.rs:76` | inspect middleware/local scope | pending |
| `GET /api/v1/upload-sessions/{id}` | `infera-drm/src/upload_handlers.rs:130` | inspect middleware/local scope | pending |
| `DELETE /api/v1/upload-sessions/{id}` | `infera-drm/src/upload_handlers.rs:280` | inspect middleware/local scope | pending |
| `PUT /api/v1/upload-sessions/{id}/parts/{part_number}` | `infera-drm/src/upload_handlers.rs:141` | inspect middleware/local scope | pending |
| `POST /api/v1/upload-sessions/{id}/complete` | `infera-drm/src/upload_handlers.rs:185` | inspect middleware/local scope | pending |
| `POST /api/v1/media/register` | `infera-drm/src/upload_handlers.rs:298` | inspect middleware/local scope | pending |
| `GET /api/v1/media/{id}/packages` | `infera-drm/src/package_handlers.rs:77` | inspect middleware/local scope | pending |
| `POST /api/v1/media/{id}/packages` | `infera-drm/src/package_handlers.rs:236` | inspect middleware/local scope | pending |
| `GET /api/v1/packages/{package_id}/files/{*path}` | `infera-drm/src/package_handlers.rs:93` | inspect middleware/local scope | pending |
| `DELETE /api/v1/media/packages/{id}` | `infera-drm/src/package_handlers.rs:257` | inspect middleware/local scope | pending |
| `GET /api/v1/licenses/clearkey` | `infera-drm/src/package_handlers.rs:245` | inspect middleware/local scope | pending |
| `GET /api/v1/dashboard/summary` | `infera-drm/src/operations_handlers.rs:65` | inspect middleware/local scope | pending |
| `GET /api/v1/operations/health` | `infera-drm/src/operations_handlers.rs:112` | inspect middleware/local scope | pending |
| `GET /api/v1/operations/transcription-models` | `infera-drm/src/operations_handlers.rs:230` | inspect middleware/local scope | pending |
| `GET /api/v1/operations/knowledge-catalog` | `infera-drm/src/knowledge_sync.rs:181` | inspect middleware/local scope | pending |
| `GET /api/v1/operations/settings` | `infera-drm/src/operations_handlers.rs:123` | inspect middleware/local scope | pending |
| `PATCH /api/v1/operations/settings` | `infera-drm/src/operations_handlers.rs:135` | inspect middleware/local scope | pending |
| `GET /api/v1/audit-events` | `infera-drm/src/operations_handlers.rs:333` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/drm.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
