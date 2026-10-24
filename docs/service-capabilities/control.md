# control capability discovery

Builds, Kubernetes sandbox/workload lifecycle, deployment, domains and operator infrastructure controls.

ساخت، چرخه سندباکس و بارکاری کوبرنتیز، استقرار، دامنه و کنترل زیرساخت.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `60b2a772066b46d0dde00cf655a6457144016553`
- SDK source revision: `not in current SDK source lock`
- Evidence inventory revision: `60b2a772066b46d0dde00cf655a6457144016553` (sdk)
- Working HEAD: `e15272c1539eee4c1b183a8b2ec7e0453301d8b3`
- Source relationship: not_in_sdk_lock

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /api/mode` | `infera-control/crates/faiber-server/src/routes.rs:211` | inspect middleware/local scope | pending |
| `GET /api/health` | `infera-control/crates/faiber-server/src/routes.rs:218` | inspect middleware/local scope | pending |
| `GET /api/public/expired` | `infera-control/crates/faiber-server/src/public_expired.rs:47` | inspect middleware/local scope | pending |
| `GET /api/cluster` | `infera-control/crates/faiber-server/src/routes.rs:227` | inspect middleware/local scope | pending |
| `GET /api/workloads` | `infera-control/crates/faiber-server/src/routes.rs:231` | inspect middleware/local scope | pending |
| `POST /api/deploy` | `infera-control/crates/faiber-server/src/routes.rs:235` | inspect middleware/local scope | pending |
| `PATCH /api/workloads/{ns}/{name}/scale` | `infera-control/crates/faiber-server/src/routes.rs:239` | inspect middleware/local scope | pending |
| `PATCH /api/workloads/{ns}/{name}` | `infera-control/crates/faiber-server/src/routes.rs:247` | inspect middleware/local scope | pending |
| `DELETE /api/workloads/{ns}/{name}` | `infera-control/crates/faiber-server/src/routes.rs:255` | inspect middleware/local scope | pending |
| `POST /api/workloads/{ns}/{name}/restart` | `infera-control/crates/faiber-server/src/routes.rs:262` | inspect middleware/local scope | pending |
| `PUT /api/workloads/{ns}/{name}/domain` | `infera-control/crates/faiber-server/src/routes.rs:853` | inspect middleware/local scope | pending |
| `DELETE /api/workloads/{ns}/{name}/domain` | `infera-control/crates/faiber-server/src/routes.rs:883` | inspect middleware/local scope | pending |
| `GET /api/logs/{ns}/{pod}` | `infera-control/crates/faiber-server/src/routes.rs:278` | inspect middleware/local scope | pending |
| `GET /api/sandboxes` | `infera-control/crates/faiber-server/src/routes.rs:318` | inspect middleware/local scope | pending |
| `POST /api/sandboxes` | `infera-control/crates/faiber-server/src/routes.rs:325` | inspect middleware/local scope | pending |
| `GET /api/settings` | `infera-control/crates/faiber-server/src/routes.rs:384` | inspect middleware/local scope | pending |
| `PUT /api/settings` | `infera-control/crates/faiber-server/src/routes.rs:388` | inspect middleware/local scope | pending |
| `GET /api/self-update` | `infera-control/crates/faiber-server/src/routes.rs:395` | inspect middleware/local scope | pending |
| `POST /api/self-update/apply` | `infera-control/crates/faiber-server/src/routes.rs:399` | inspect middleware/local scope | pending |
| `POST /api/self-update/rollout` | `infera-control/crates/faiber-server/src/routes.rs:403` | inspect middleware/local scope | pending |
| `GET /api/self-auth` | `infera-control/crates/faiber-server/src/routes.rs:407` | inspect middleware/local scope | pending |
| `POST /api/self-auth` | `infera-control/crates/faiber-server/src/routes.rs:416` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/provision` | `infera-control/crates/faiber-server/src/routes.rs:423` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/apk/signing/validate` | `infera-control/crates/faiber-server/src/routes.rs:440` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/apk/builds` | `infera-control/crates/faiber-server/src/routes.rs:450` | inspect middleware/local scope | pending |
| `GET /api/sandboxes/{project}/apk/builds/{id}` | `infera-control/crates/faiber-server/src/routes.rs:458` | inspect middleware/local scope | pending |
| `GET /api/sandboxes/{project}` | `infera-control/crates/faiber-server/src/routes.rs:332` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}` | `infera-control/crates/faiber-server/src/routes.rs:339` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/suspend` | `infera-control/crates/faiber-server/src/routes.rs:465` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/resume` | `infera-control/crates/faiber-server/src/routes.rs:495` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/dns/reconcile` | `infera-control/crates/faiber-server/src/routes.rs:602` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/expired` | `infera-control/crates/faiber-server/src/routes.rs:480` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}/expired` | `infera-control/crates/faiber-server/src/routes.rs:472` | inspect middleware/local scope | pending |
| `PUT /api/sandboxes/{project}/resources` | `infera-control/crates/faiber-server/src/routes.rs:502` | inspect middleware/local scope | pending |
| `GET /api/sandboxes/{project}/volume-backups` | `infera-control/crates/faiber-server/src/routes.rs:512` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/volume-backups` | `infera-control/crates/faiber-server/src/routes.rs:521` | inspect middleware/local scope | pending |
| `PUT /api/sandboxes/{project}/domain` | `infera-control/crates/faiber-server/src/routes.rs:531` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}/domain` | `infera-control/crates/faiber-server/src/routes.rs:546` | inspect middleware/local scope | pending |
| `PUT /api/sandboxes/{project}/domain-aliases` | `infera-control/crates/faiber-server/src/routes.rs:553` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}/domain-aliases` | `infera-control/crates/faiber-server/src/routes.rs:568` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/routing/reconcile` | `infera-control/crates/faiber-server/src/routes.rs:583` | inspect middleware/local scope | pending |
| `GET /api/sandboxes/{project}/path-routes` | `infera-control/crates/faiber-server/src/routes.rs:621` | inspect middleware/local scope | pending |
| `GET /api/sandboxes/{project}/path-routes/{id}` | `infera-control/crates/faiber-server/src/routes.rs:628` | inspect middleware/local scope | pending |
| `PUT /api/sandboxes/{project}/path-routes/{id}` | `infera-control/crates/faiber-server/src/routes.rs:635` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}/path-routes/{id}` | `infera-control/crates/faiber-server/src/routes.rs:643` | inspect middleware/local scope | pending |
| `PUT /api/sandboxes/{project}/identity` | `infera-control/crates/faiber-server/src/routes.rs:430` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/services/{name}/external` | `infera-control/crates/faiber-server/src/routes.rs:346` | inspect middleware/local scope | pending |
| `POST /api/sandboxes/{project}/data-services/{name}/{action}` | `infera-control/crates/faiber-server/src/routes.rs:361` | inspect middleware/local scope | pending |
| `DELETE /api/sandboxes/{project}/data-services/{name}/data` | `infera-control/crates/faiber-server/src/routes.rs:375` | inspect middleware/local scope | pending |
| `GET /api/catalog` | `infera-control/crates/faiber-server/src/routes.rs:652` | inspect middleware/local scope | pending |
| `PUT /api/catalog` | `infera-control/crates/faiber-server/src/routes.rs:656` | inspect middleware/local scope | pending |
| `GET /api/build-policy/{name}` | `infera-control/crates/faiber-server/src/routes.rs:1169` | inspect middleware/local scope | pending |
| `PATCH /api/build-policy/{name}` | `infera-control/crates/faiber-server/src/routes.rs:1172` | inspect middleware/local scope | pending |
| `GET /api/catalog/{name}/env-example` | `infera-control/crates/faiber-server/src/routes.rs:669` | inspect middleware/local scope | pending |
| `POST /api/dns/ensure` | `infera-control/crates/faiber-server/src/routes.rs:678` | inspect middleware/local scope | pending |
| `GET /api/events` | `infera-control/crates/faiber-server/src/routes.rs:696` | inspect middleware/local scope | pending |
| `GET /api/infra/catalog` | `infera-control/crates/faiber-server/src/routes.rs:702` | inspect middleware/local scope | pending |
| `GET /api/infra` | `infera-control/crates/faiber-server/src/routes.rs:706` | inspect middleware/local scope | pending |
| `POST /api/infra` | `infera-control/crates/faiber-server/src/routes.rs:710` | inspect middleware/local scope | pending |
| `GET /api/infra/{name}` | `infera-control/crates/faiber-server/src/routes.rs:717` | inspect middleware/local scope | pending |
| `DELETE /api/infra/{name}` | `infera-control/crates/faiber-server/src/routes.rs:731` | inspect middleware/local scope | pending |
| `POST /api/infra/{name}/external` | `infera-control/crates/faiber-server/src/routes.rs:721` | inspect middleware/local scope | pending |
| `GET /api/builds` | `infera-control/crates/faiber-server/src/routes.rs:737` | inspect middleware/local scope | pending |
| `POST /api/builds` | `infera-control/crates/faiber-server/src/routes.rs:745` | inspect middleware/local scope | pending |
| `GET /api/builds/{id}/logs` | `infera-control/crates/faiber-server/src/routes.rs:756` | inspect middleware/local scope | pending |
| `POST /api/builds/{id}/cancel` | `infera-control/crates/faiber-server/src/routes.rs:752` | inspect middleware/local scope | pending |
| `GET /api/builds/{id}` | `infera-control/crates/faiber-server/src/routes.rs:741` | inspect middleware/local scope | pending |
| `POST /api/webhooks/git` | `infera-control/crates/faiber-server/src/routes.rs:770` | inspect middleware/local scope | pending |
| `GET /api/system` | `infera-control/crates/faiber-server/src/routes.rs:784` | inspect middleware/local scope | pending |
| `GET /api/git-credentials` | `infera-control/crates/faiber-server/src/routes.rs:791` | inspect middleware/local scope | pending |
| `PUT /api/git-credentials` | `infera-control/crates/faiber-server/src/routes.rs:795` | inspect middleware/local scope | pending |
| `DELETE /api/git-credentials` | `infera-control/crates/faiber-server/src/routes.rs:802` | inspect middleware/local scope | pending |
| `GET /api/registries` | `infera-control/crates/faiber-server/src/routes.rs:808` | inspect middleware/local scope | pending |
| `PUT /api/registries` | `infera-control/crates/faiber-server/src/routes.rs:812` | inspect middleware/local scope | pending |
| `GET /api/registries/packages` | `infera-control/crates/faiber-server/src/routes.rs:823` | inspect middleware/local scope | pending |
| `PUT /api/registries/packages/settings` | `infera-control/crates/faiber-server/src/routes.rs:827` | inspect middleware/local scope | pending |
| `POST /api/registries/packages/reconcile` | `infera-control/crates/faiber-server/src/routes.rs:834` | inspect middleware/local scope | pending |
| `POST /api/registries/packages/test` | `infera-control/crates/faiber-server/src/routes.rs:838` | inspect middleware/local scope | pending |
| `POST /api/registries/containerd/applied` | `infera-control/crates/faiber-server/src/routes.rs:819` | inspect middleware/local scope | pending |
| `GET /api/registry/images` | `infera-control/crates/faiber-server/src/routes.rs:847` | inspect middleware/local scope | pending |
| `GET /api/cluster/join-token` | `infera-control/crates/faiber-server/src/routes.rs:906` | inspect middleware/local scope | pending |
| `GET /api/domains` | `infera-control/crates/faiber-server/src/routes.rs:919` | inspect middleware/local scope | pending |
| `GET /api/domain-certificates` | `infera-control/crates/faiber-server/src/routes.rs:953` | inspect middleware/local scope | pending |
| `GET /api/config/export` | `infera-control/crates/faiber-server/src/routes.rs:893` | inspect middleware/local scope | pending |
| `POST /api/config/import` | `infera-control/crates/faiber-server/src/routes.rs:897` | inspect middleware/local scope | pending |
| `GET /api/bootstrap` | `infera-control/crates/faiber-server/src/routes.rs:194` | inspect middleware/local scope | pending |
| `POST /api/bootstrap` | `infera-control/crates/faiber-server/src/routes.rs:198` | inspect middleware/local scope | pending |
| `POST /api/cleanup` | `infera-control/crates/faiber-server/src/routes.rs:202` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/control.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
