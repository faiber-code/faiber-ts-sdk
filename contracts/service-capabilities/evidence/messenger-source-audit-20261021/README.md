# Messenger immutable source audit

Selected backend: `0eb2143fae39dee3e0543abaac59ea1aaaed771c`. All 47 mounted operations have direct source review entries in `operation-matrix.json`. `source-review.json` records inspected file hashes and the locked Flow SDK dependency source is preserved in `locked-flow-integration-meta.rs`.

The backend working checkout is dirty at `0038f19eb1d78b744b3d9829c1a05331657a9fa4`; inspection used `git archive` of the selected pin and `git show` for locked Flow SDK `291c81a67bc302d667fb807da2af3240598bee52`. No backend files were edited.

Corrected contracts include numeric template/channel/provider IDs, template `fa_name` and three-state `channel_id` patches, provider write-only options, administrative pagination, required read-all recipient, raw OpenAPI/auth/readiness responses, empty-object deletes/subscription responses, named health/Flow metadata, exact channel/provider/status literals, recipient privacy projections, and distinct queue `notification_ids` results. Setup-check provider labels use Rust enum variant casing rather than lowercase service labels.

Authority varies by route. Self inbox handlers enforce a non-nil actor and explicit self-read permission, with native message/messenger aliases. Device/Web Push handlers declare self-read permissions and require a current actor. Administrative notification handlers may target arbitrary recipients. Dispatch, explicit user/channel subscription, and Flow metadata have no permission macro. Global IDP extraction is not itself evidence of gateway token validation or tenant isolation. No tenant SQL predicate is claimed.

`tests/messenger-reviewed-wire.test.mjs` prepares adapter-only checks for all 47 methods/paths/bodies/queries, credential and cancellation forwarding, and response/status/header preservation. `tests/messenger-reviewed-wire.types.ts` prepares declaration checks for concrete models, nullability and required inputs. Fixtures are authored source expectations; they are not recorded native responses.

Source syntax checks (`node --check` for the override and test module) and scoped whitespace checks passed. Per the combined integration workflow, generation, build, declaration tests and adapter execution are deferred to the parent integration run. Native backend acceptance, owned infrastructure execution, current deployment reconciliation, gateway authority and isolation remain pending. No Cargo/Docker commands, provider inspections, sends, test pushes, or native delivery actions were executed.
