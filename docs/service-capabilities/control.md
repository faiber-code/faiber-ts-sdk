# control capability discovery

Builds, Kubernetes sandbox/workload lifecycle, deployment, domains and operator infrastructure controls.

ساخت، چرخه سندباکس و بارکاری کوبرنتیز، استقرار، دامنه و کنترل زیرساخت.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `4e30e8158d15d221926de36b6834521af6271674`
- SDK source revision: `not in current SDK source lock`
- Working HEAD: `e15272c1539eee4c1b183a8b2ec7e0453301d8b3`
- Source relationship: not_in_sdk_lock

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /api/mode` | `infera-control/crates/faiber-server/src/routes.rs:207` | inspect middleware/local scope | pending |
| `GET /api/health` | `infera-control/crates/faiber-server/src/routes.rs:214` | inspect middleware/local scope | pending |
| `GET /api/public/expired` | `infera-control/crates/faiber-server/src/public_expired.rs:47` | inspect middleware/local scope | pending |
| `GET /api/cluster` | `infera-control/crates/faiber-server/src/routes.rs:223` | inspect middleware/local scope | pending |
| `GET /api/workloads` | `infera-control/crates/faiber-server/src/routes.rs:227` | inspect middleware/local scope | pending |
| `POST /api/deploy` | `infera-control/crates/faiber-server/src/routes.rs:231` | inspect middleware/local scope | pending |
| `PATCH /api/workloads/{ns}/{name}/scale` | `infera-control/crates/faiber-server/src/routes.rs:235` | inspect middleware/local scope | pending |
| `PATCH /api/workloads/{ns}/{name}` | `infera-control/crates/faiber-server/src/routes.rs:243` | inspect middleware/local scope | pending |
| `DELETE /api/workloads/{ns}/{name}` | `infera-control/crates/faiber-server/src/routes.rs:251` | inspect middleware/local scope | pending |
| `POST /api/workloads/{ns}/{name}/restart` | `infera-control/crates/faiber-server/src/routes.rs:258` | inspect middleware/local scope | pending |
| `PUT /api/workloads/{ns}/{name}/domain` | `infera-control/crates/faiber-server/src/routes.rs:849` | inspect middleware/local scope | pending |
| `DELETE /api/workloads/{ns}/{name}/domain` | `infera-control/crates/faiber-server/src/routes.rs:879` | inspect middleware/local scope | pending |
| `GET /api/logs/{ns}/{pod}` | `infera-control/crates/faiber-server/src/routes.rs:274` | inspect middleware/local scope | pending |
| `GET /api/sandboxes` | `infera-control/crates/faiber-server/src/routes.rs:314` | inspect middleware/local scope | pending |
| `POST /api/sandboxes` | `infera-control/crates/faiber-server/src/routes.rs:321` | inspect middleware/local scope | pending |
| `GET /api/settings` | `infera-control/crates/faiber-server/src/routes.rs:380` | inspect middleware/local scope | pending |
| `PUT /api/settings` | `infera-control/crates/faiber-server/src/routes.rs:384` | inspect middleware/local scope | pending |
| `GET /api/self-update` | `infera-control/crates/faiber-server/src/routes.rs:391` | inspect middleware/local scope | pending |
| `POST /api/self-update/apply` | `infera-control/crates/faiber-server/src/routes.rs:395` | inspect middleware/local scope | pending |
| `POST /api/self-update/rollout` | `infera-control/crates/faiber-server/src/routes.rs:399` | inspect middleware/local scope | pending |
| `GET /api/self-auth` | `infera-control/crates/faiber-server/src/routes.rs:403` | inspect middleware/local scope | pending |
| `POST /api/self-auth` | `infera-control/crates/faiber-server/src/routes.rs:412` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/provision` | `infera-control/crates/faiber-server/src/routes.rs:419` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/apk/signing/validate` | `infera-control/crates/faiber-server/src/routes.rs:436` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/apk/builds` | `infera-control/crates/faiber-server/src/routes.rs:446` | inspect middleware/local scope | pending |
| `GET /api/sandboxes/{project}/apk/builds/{id}` | `infera-control/crates/faiber-server/src/routes.rs:454` | inspect middleware/local scope | pending |
| `GET /api/sandboxes/{project}` | `infera-control/crates/faiber-server/src/routes.rs:328` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}` | `infera-control/crates/faiber-server/src/routes.rs:335` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/suspend` | `infera-control/crates/faiber-server/src/routes.rs:461` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/resume` | `infera-control/crates/faiber-server/src/routes.rs:491` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/dns/reconcile` | `infera-control/crates/faiber-server/src/routes.rs:598` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/expired` | `infera-control/crates/faiber-server/src/routes.rs:476` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}/expired` | `infera-control/crates/faiber-server/src/routes.rs:468` | inspect middleware/local scope | pending |
| `PUT /api/sandboxes/{project}/resources` | `infera-control/crates/faiber-server/src/routes.rs:498` | inspect middleware/local scope | pending |
| `GET /api/sandboxes/{project}/volume-backups` | `infera-control/crates/faiber-server/src/routes.rs:508` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/volume-backups` | `infera-control/crates/faiber-server/src/routes.rs:517` | inspect middleware/local scope | pending |
| `PUT /api/sandboxes/{project}/domain` | `infera-control/crates/faiber-server/src/routes.rs:527` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}/domain` | `infera-control/crates/faiber-server/src/routes.rs:542` | inspect middleware/local scope | pending |
| `PUT /api/sandboxes/{project}/domain-aliases` | `infera-control/crates/faiber-server/src/routes.rs:549` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}/domain-aliases` | `infera-control/crates/faiber-server/src/routes.rs:564` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/routing/reconcile` | `infera-control/crates/faiber-server/src/routes.rs:579` | inspect middleware/local scope | pending |
| `GET /api/sandboxes/{project}/path-routes` | `infera-control/crates/faiber-server/src/routes.rs:617` | inspect middleware/local scope | pending |
| `GET /api/sandboxes/{project}/path-routes/{id}` | `infera-control/crates/faiber-server/src/routes.rs:624` | inspect middleware/local scope | pending |
| `PUT /api/sandboxes/{project}/path-routes/{id}` | `infera-control/crates/faiber-server/src/routes.rs:631` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}/path-routes/{id}` | `infera-control/crates/faiber-server/src/routes.rs:639` | inspect middleware/local scope | pending |
| `PUT /api/sandboxes/{project}/identity` | `infera-control/crates/faiber-server/src/routes.rs:426` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/services/{name}/external` | `infera-control/crates/faiber-server/src/routes.rs:342` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/data-services/{name}/{action}` | `infera-control/crates/faiber-server/src/routes.rs:357` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}/data-services/{name}/data` | `infera-control/crates/faiber-server/src/routes.rs:371` | inspect middleware/local scope | pending |
| `GET /api/catalog` | `infera-control/crates/faiber-server/src/routes.rs:648` | inspect middleware/local scope | pending |
| `PUT /api/catalog` | `infera-control/crates/faiber-server/src/routes.rs:652` | inspect middleware/local scope | pending |
| `GET /api/catalog/{name}/env-example` | `infera-control/crates/faiber-server/src/routes.rs:665` | inspect middleware/local scope | pending |
| `POST /api/dns/ensure` | `infera-control/crates/faiber-server/src/routes.rs:674` | inspect middleware/local scope | pending |
| `GET /api/events` | `infera-control/crates/faiber-server/src/routes.rs:692` | inspect middleware/local scope | pending |
| `GET /api/infra/catalog` | `infera-control/crates/faiber-server/src/routes.rs:698` | inspect middleware/local scope | pending |
| `GET /api/infra` | `infera-control/crates/faiber-server/src/routes.rs:702` | inspect middleware/local scope | pending |
| `POST /api/infra` | `infera-control/crates/faiber-server/src/routes.rs:706` | inspect middleware/local scope | pending |
| `GET /api/infra/{name}` | `infera-control/crates/faiber-server/src/routes.rs:713` | inspect middleware/local scope | pending |
| `DELETE /api/infra/{name}` | `infera-control/crates/faiber-server/src/routes.rs:727` | inspect middleware/local scope | pending |
| `POST /api/infra/{name}/external` | `infera-control/crates/faiber-server/src/routes.rs:717` | inspect middleware/local scope | pending |
| `GET /api/builds` | `infera-control/crates/faiber-server/src/routes.rs:733` | inspect middleware/local scope | pending |
| `POST /api/builds` | `infera-control/crates/faiber-server/src/routes.rs:741` | inspect middleware/local scope | pending |
| `GET /api/builds/{id}/logs` | `infera-control/crates/faiber-server/src/routes.rs:752` | inspect middleware/local scope | pending |
| `POST /api/builds/{id}/cancel` | `infera-control/crates/faiber-server/src/routes.rs:748` | inspect middleware/local scope | pending |
| `GET /api/builds/{id}` | `infera-control/crates/faiber-server/src/routes.rs:737` | inspect middleware/local scope | pending |
| `POST /api/webhooks/git` | `infera-control/crates/faiber-server/src/routes.rs:766` | inspect middleware/local scope | pending |
| `GET /api/system` | `infera-control/crates/faiber-server/src/routes.rs:780` | inspect middleware/local scope | pending |
| `GET /api/git-credentials` | `infera-control/crates/faiber-server/src/routes.rs:787` | inspect middleware/local scope | pending |
| `PUT /api/git-credentials` | `infera-control/crates/faiber-server/src/routes.rs:791` | inspect middleware/local scope | pending |
| `DELETE /api/git-credentials` | `infera-control/crates/faiber-server/src/routes.rs:798` | inspect middleware/local scope | pending |
| `GET /api/registries` | `infera-control/crates/faiber-server/src/routes.rs:804` | inspect middleware/local scope | pending |
| `PUT /api/registries` | `infera-control/crates/faiber-server/src/routes.rs:808` | inspect middleware/local scope | pending |
| `GET /api/registries/packages` | `infera-control/crates/faiber-server/src/routes.rs:819` | inspect middleware/local scope | pending |
| `PUT /api/registries/packages/settings` | `infera-control/crates/faiber-server/src/routes.rs:823` | inspect middleware/local scope | pending |
| `POST /api/registries/packages/reconcile` | `infera-control/crates/faiber-server/src/routes.rs:830` | inspect middleware/local scope | pending |
| `POST /api/registries/packages/test` | `infera-control/crates/faiber-server/src/routes.rs:834` | inspect middleware/local scope | pending |
| `POST /api/registries/containerd/applied` | `infera-control/crates/faiber-server/src/routes.rs:815` | inspect middleware/local scope | pending |
| `GET /api/registry/images` | `infera-control/crates/faiber-server/src/routes.rs:843` | inspect middleware/local scope | pending |
| `GET /api/cluster/join-token` | `infera-control/crates/faiber-server/src/routes.rs:902` | inspect middleware/local scope | pending |
| `GET /api/domains` | `infera-control/crates/faiber-server/src/routes.rs:915` | inspect middleware/local scope | pending |
| `GET /api/domain-certificates` | `infera-control/crates/faiber-server/src/routes.rs:949` | inspect middleware/local scope | pending |
| `GET /api/config/export` | `infera-control/crates/faiber-server/src/routes.rs:889` | inspect middleware/local scope | pending |
| `POST /api/config/import` | `infera-control/crates/faiber-server/src/routes.rs:893` | inspect middleware/local scope | pending |
| `GET /api/bootstrap` | `infera-control/crates/faiber-server/src/routes.rs:190` | inspect middleware/local scope | pending |
| `POST /api/bootstrap` | `infera-control/crates/faiber-server/src/routes.rs:194` | inspect middleware/local scope | pending |
| `POST /api/cleanup` | `infera-control/crates/faiber-server/src/routes.rs:198` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/control.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
