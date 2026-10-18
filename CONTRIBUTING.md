# SDK contract verification

`service-source-revisions.json` records the backend Git revisions reviewed for this SDK release. Extraction and generation read immutable archives of those revisions from sibling service repositories. They do not modify the service checkouts, and they exclude Rust test modules so mock routers cannot become SDK operations.

Fetch a missing recorded revision in the relevant service repository before running the checks. To review a backend change before it is committed, set `FAIBER_SERVICES_ROOT` to an explicit source tree. Update the recorded revision only after reviewing the mounted router, handler extraction, validation, authorization, repository behavior and available tests. An updated source lock alone does not establish contract correctness.

`release-contract-overrides.mjs` contains reviewed contracts keyed by service, HTTP method and mounted path. It supplies concrete wire models for runtime JSON responses, credential requirements that macros cannot discover, and special behavior such as transfer idempotency headers and WebSocket upgrades. The ordinary generator remains a coverage aid. Preserve these overrides and existing method names when regenerating.

Run the following checks before a release:

```sh
npm install
npm run contracts:extract
npm run contracts:generate
npm run build
npm test
npm run contracts:audit
NPM_CONFIG_CACHE=/tmp/faiber-npm-cache npm run pack:check
git diff --check
```

The audit compares the manifest against the recorded source revisions and requires one operation for each mounted route. Tests additionally verify existing operation names, concrete public inputs, wire casing, response envelopes, authentication, cancellation, transfer headers, source parsing and scoped WebSocket handshakes. A WebSocket upgrade is verified separately from Axios HTTP operations; its scoped ticket must come from an authenticated HTTP operation.

All packages use the same version and exact internal dependencies. Follow `AGENTS.md` for annotated tags, Git push order, package publication order and per-package registry verification. The root workspace remains private.
