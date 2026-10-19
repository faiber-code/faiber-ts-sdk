# SDK release gates — 2026-10-19

Release candidate: **1.0.0**, all 22 packages unpublished. npm authentication has not
started. Structural extraction is not semantic release approval. Manage completion,
Knowledge publication and agent memory adoption remain downstream of SDK acceptance.

## Source and actual behavior verified locally

- All 18 SDK HTTP service inventories follow mounted source graphs. Named dynamic
  operations cover Session's peer proxy, CRM's two legacy fallbacks and State health.
  The1600-operation structural count is not a completion criterion.
- SDK build, strict types and 125 tests pass. Wildcard path components retain directory
  separators and reject traversal/ambiguous encoding before transport. CONNECT requires
  an explicit tunnel-capable Axios adapter; default CONNECT rejects before hanging.
- Profile production7a6a9ca28eb8e1498cb20557450d6dd81a6ae8ad with test-only07279def6aeb91f806d0c32ab811a69ec2b05daf:
  all 20 summary operations over real mounted HTTP and compiled SDK,348 assertions,
  real PostgreSQL/RabbitMQ; IDP/Agentic/evidence/gateway identities are explicit fixtures.
- LMS productiona2d00df7f1cc34c3b2e356824c49e39c12047a33 with test-only1fbba589305088ecc6210a1baf2e4beb07ce5a82:
 57 assertions classify all 8 retired endpoints using full 38 historical migrations.
  Old GETs return generic HTML 200 with an SPA index,404 without; PUT/twoPOST return405.
  These are not auth denials or successful summary APIs. Seeded legacy rows remain unchanged.
- Stateb8d3bfa828878a979a8c8765285bfd3899965bd4 : 26 workspace tests,9 real SDK HTTP
  assertions against the exact production health subrouter. This static advertisement
  is not proof of persistence/gameplay/WebSocket readiness or whole-main startup.
- CRM178f5de3c68fab387abd5294aeceb8dd1843084f : 12 library tests and 59 real SDK HTTP
  assertions against production fallback/CORS. HEAD is empty; OPTIONS is empty 200;
  other tested verbs return structured 404. CONNECT uses a real test-only Node HTTP
  adapter, not a response mock. Native CRM data/permissions remain separate checks.
- IDP360daa64429c966ed04a8081f700fde9c73d56ac : 111 workspace tests,23 SDK assertions
  and an actual Manage caller test. Manage02ca8711d457f463727b1678a6b699894709c24b
  passed28 local unit tests. Control 4dbda3369965d70693fdff6e4bf993c9c9953b8d passed212.
  No live secret/configuration, rollout or gateway reconciliation is certified.
- Chatab6ce7461d35414b719f3806df57549339002df5: restored5 mounted personal APIs;
 21 actual SDK assertions with real PostgreSQL, including private-content exclusion.

Immutable artifacts and source hashes are retained in
`contracts/service-capabilities/evidence/`. Original failures remain available under
`/Users/mohammadralizadeh/Infera/acceptance-results/sdk-source-semantic-20261019`.
The Version registry entry now points at immutable original accepted artifacts;
subsequent generic runner output no longer invalidates that historical record.

## Combined verification and open release gates

At `93cd663f14fb846157e6c545d5f09914b3fa96e3`, combined run
`mounted-http-profile-state-crm-v6` passed build, 124 SDK tests/types, contract audit,
Version12, Social11 with real S3-compatible storage, IDP111/actual Manage caller,
Chat21, Profile348, State26/9 and CRM12/56, plus all22 actual tarball installs/imports/
strict consumers. Source, dependency and compiled-input fences remained unchanged.
The overall result **failed** on a fresh npm security-audit timeout (156.614 seconds).
A direct curl probe also failed the registry TLS handshake, independently of npm auth.

The later registered-path guard passed125 SDK tests and59 actual CRM assertions.
It prevents a not-found diagnostic from resolving to a known native resource with a
different response model. Its final combined freeze must still be verified.

The refreshed canonical matrix is intentionally unverified where semantic/wire or
cross-service evidence is missing. All 21 service origins fetched successfully in the
latest baseline; all 22 ordinary working trees were unchanged by fetch. SDK-origin SSH
fetch timed out to GitHub port22. Unmapped external MCP routing in dirty Summary source
is retained as an explicit working-extraction failure, not silently treated as empty.

Still required:

1. Finish per-capability meanings, permissions, inputs/filters, lifecycle, relationship
   and actual workflow evidence, with explicit selected canonical source decisions.
2. Compose immutable Task/Session/Chat/CRM Summary adapters with existing Chat/CRM repairs,
   verify six-domain interoperability/current principals and remotely available Rust SDK pins.
3. Verify Session peer proxy workflows with actual participating services. Preserve
   current Session reconnect/Pastil and CRM durable Office fixes.
4. Reconcile SDK source pins with accepted backend repairs. Reservation's latest local
   capacity/history source4ece677c98c48070fcdc3de77a714b783f73bacc has40 local tests;
   SDK source currently remains canonicalf7cd709. Version's actual tested repairb5fb6904
   differs from canonical88071d0. Do not certify those different sources as interchangeable.
5. Finish current deployment/permission/configuration reconciliation and reproducible
   source acceptance where required; do not infer it from forwarded-header fixtures.
6. Obtain a passing fresh npm security audit and run the final22-package/source-bound
   verification on the frozen release candidate, then follow Git/main/version gates.

Only after all SDK release gates pass should interactive npm web authentication start.
No published version, Git tag/push, deployment or agent-memory migration is claimed.
No subjects, events or facts have been adopted into the new brain. Model defaults and
unrelated ordinary source changes were preserved; model quality/response latency gains
have not been measured because that cutover has not happened.
