# Version SDK release review

The SDK release candidate fixes the generated health URL, replaces health/OpenAPI placeholder envelopes with named wire contracts, uses service-slug parameter names, and restricts channel/scope types to serialized Rust variants. Published method names remain available. All seven operations have reviewed generator overrides and survive repeated generation.

Source review covers mounted routers, handler extractors, models, database queries, permissions macro and identity middleware, APK publication transactions, migrations and actual contract tests. The selected test-only service commit is `b5fb6904e9ac005c9437012bf19e9bc3587ef65e`, based on local repair `92b69f4e85225f87e47258645c6f908a1eb501b4`. Canonical main remains `88071d0dd49309e0c93aba6238516e95b57e1df5`; the local repairs are not deployed or merged acceptance.

| Operation | Meaning, inputs and filters | Lifecycle and permissions |
|---|---|---|
| GET /health | Process health envelope, no input/filter | Public service handler; does not check dependencies |
| GET /api/openapi.json | Raw Utoipa document, no input/filter | Public service handler; health-only annotations |
| GET /api/v1/services | Active services, no query/pagination, latest version null | No handler permission enforcement; gateway policy separate |
| GET /api/v1/services/{service_slug} | Active service by slug and greatest active version code | Missing/inactive service 404; scope metadata does not restrict reads |
| GET /api/v1/services/{service_slug}/all | Active history by slug, unspecified ordering | Missing/inactive service 404; no filters/pagination |
| GET /api/v1/versions/{version_id} | Active version UUID | Malformed UUID400, missing/inactive404; parent inactivity does not hide an active version |
| POST /api/v1/apk/releases | JSON camelCase serviceSlug/appName/version/versionCode/downloadUrl; positive integer code, bounded slug/name/version and HTTPS URL without user credentials | Dedicated server publisher token, min32 configured bytes; unavailable configuration503, missing/incorrect token401, invalid metadata400. Transaction/advisory lock serializes service/release changes. Identity stable per slug+version; older codes cannot regress. Existing inactive parent stays inactive. |

Service IDs and version IDs are UUIDs; the service lookup key is the slug. Version links to its service through `service_id`. Control's APK publisher is a server producer of the publish route and verifies read-back, including partial outcomes after a successful write whose parent is inactive. Clients must retain truthful write receipts rather than assume every read-back failure rolls back publication.

The real PostgreSQL/RabbitMQ run passed12 tests, zero failed/ignored, in107.809seconds. Its new test launches the actual mounted HTTP router and invokes the compiled Axios SDK for every operation, including denied publication, invalid metadata, retry identity, non-regression, slug/UUID distinction, enums, error envelopes and cancellation. Existing tests cover concurrent publication, rollback and the real Control publisher script. Input source, SDK source/dist/dependencies and publisher inputs remained unchanged during that run. Full file hashes and resolved lock bytes are retained in `evidence/version-sdk-wire-tests.json` and companion artifacts. Build time is not agent latency.

112 Node tests and strict type consumers passed before the real run. The added public Version type consumer also passes. The final release still requires a full candidate rebuild, all-package verification, canonical reconciliation and current project gateway acceptance. No npm authentication, publication, deployment or migration occurred.
