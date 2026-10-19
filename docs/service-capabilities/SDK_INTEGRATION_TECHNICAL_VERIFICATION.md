# SDK integration technical verification

Development SDK 1.0.0 is frozen at
`dd52e5597f53d4a16c1c9d0e4b2bc43a6eaa5726` on
`work/knowledge-brain-sdk-integration-20261019`, in
`/Users/mohammadralizadeh/Infera/.task-worktrees/sdk-integration-20261019/faiber-ts-sdk`.
The original contributor working tree is preserved. The integration incorporates
published main 0.24.1 (`b11672d7255de11399ec52ba76b3fa239c81870b`), Profile/classroom
handoffs and the later generation-safe delta, plus the tested Manage bridge.
All 22 public package versions and internal dependencies are 1.0.0; no new package
was published, no tag/push/deployment occurred, and this is not release approval.

The frozen 35.320-second run passed workspace build, 111 tests and type checks,
zero npm audit findings, dry-runs, 22 actual tarballs, imports from every installed
package and strict consumer compilation with `skipLibCheck:false`. Published APIs
are preserved except the eight documented LMS summary removals. Profile summary
and encoded-form regeneration tests pass twice for idempotency. Axios is 1.20.0;
brace-expansion is 2.1.7. The dependency change follows the
[Axios runtime security fixes](https://github.com/axios/axios/releases/tag/v1.20.0).

The same run includes 31 scoped backend tests using Manage
`bfb5096432bd72bb5d8b920c304309bab9c2928b` and isolated Agentic
`84a0e9a95d274a655aae052988915ffc74401942`. The actual SDK uses Axios/fetch over
owned HTTP to create/page/read/delete and verify query/project/billing denials.
Current membership/configuration uses MongoDB; Control lifecycle is a fixture.
There is no model call or actual service mutation receipt. Review hubs remain
process-local; durable review/idempotency is a separate blocker.

Sources, compiled packages, installed dependencies, current contribution files
and Service Cargo overrides matched before/after. The immutable record is
`contracts/service-capabilities/evidence/sdk-integrated-100-dd52e55/verification.json`.
That directory retains all 22 tarballs, individual file hashes, package integrity
values, commands/logs/locks, silent-command receipts and dependency fingerprints.
`review.json` contains repository heads/dirty paths observed afterward. Earlier
consumer fixture failures remain retained separately in `acceptance-results`.
The consumer test now imports public declarations rather than monorepo source.

| Source | Revision | Tests and scope |
|---|---|---|
| Knowledge canonical | `70b8a21721dd34125b8f0e167e06da9ad3287223` | 43 unit tests; 436 resolved package directories fenced |
| Social canonical | `79462976a1c07e7ef8eb913d7cc7015dd50f936e` | 6 unit tests; 411 resolved package directories fenced |
| Flow local repair | `6fe84352982f97e3f56cd750376a88f4e9ac0a85` | 13 unit tests; 397 resolved package directories fenced |

All unit baselines passed with zero failed/ignored cases and unchanged inputs.
Flow ignores Cargo.lock; the generated resolved lock bytes are retained. Its local
repair is not canonical merge acceptance. Previous dependency failures remain
historical evidence. These unit results do not certify database/broker/gateway or
cross-service runtime behavior. No host caches were cleaned.

Full semantic operation/relationship discovery, canonical/main integration,
current permission and actual SDK/service workflows remain open. Manage still
needs readable forms, linked-resource workflows and browser coverage. Summary
needs live provider/billing/browser acceptance and provisioned identities/grants.
Durable ingestion/review, provenance, corrections, forgetting, bounded context,
outage behavior, migration and rollback remain open. Only after these gates pass
may verified Knowledge instructions and scoped agent memory be adopted.

No topology was consolidated or reconfigured. Migrated records remain 0 and agent
quality/response-latency canaries remain unmeasured. Build/test duration is not
agent latency. Ask remains per-user; Code/Design/Manage per-project. The established
Pastil/model defaults remain required.
