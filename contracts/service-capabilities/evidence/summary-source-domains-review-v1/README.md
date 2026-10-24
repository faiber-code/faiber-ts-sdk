# Immutable four-domain Summary handoff

All four service candidates compile; real source PostgreSQL migrations, production
readers and official MCP contracts pass. CRM also passes real RabbitMQ outbox delivery.
IDP actual ACL importer passes the explicit Task/Session/Chat transport permission checks.
The 2,197 final tracked source files exactly match the inputs held unchanged across the
sealed checks. All 1,004 captured dirty-root files remain byte-identical.

Read handoff.json for exact commits, canonical bases, source manifests, composition
boundaries and validation limits. Each bundle starts at the named canonical base;
from-canonical.patch includes its required production repair, while summary-only.patch
starts after that repair. Preserve those repairs during integration.

Session includes exact6cdedd43, disabling compile-time dev-fallback. CRM includes
exact178f5de3 fallback/CORS repair. Chat contains the identical production mount patch
fromab6ce746 as a cherry-pick on canonicald5b722e; ab6's separate test-only parent0fd9ded3
is not imported. When applying Summary onto ab6, preserve its sdk_personal_router_tests
module and add both Summary modules in src/lib.rs. Original repair and cherry-pick have
identical stable patch IDs; handoff.json records the precise boundary.

The full API/SDK peer tests are separate evidence. No live model/provider/billing or
combined six-service run is claimed. Poulstar Qwen3 selection remains pending the
reviewed Profile/Agentic deployment and authenticated financial-owner catalog. The
model belongs in Profile configuration, and Agentic dispatches the saved reference.
No direct VPS URL, guessed model reference or administrator billing fallback is used.

Raw intermediate failures are retained alongside final passing sealed logs. The
root IDP application has no committed Cargo.lock at this base; its direct --locked
attempt was rejected. The passing ACL tests instead compile the exact production
entity/seeder sources through the committed tests/summary-acl locked harness. This
is not a claim that the full IDP auth integration was rebuilt here.

No credentials, source text bodies or live user data are included. Fixture credentials
are explicit disposable test-only strings and locally generated signing material.
