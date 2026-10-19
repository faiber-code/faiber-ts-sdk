# Local current-authority implementation evidence

Manage `4dd4bf06f424acd4d9c3080283e7359c9cb44a21` and Agentic
`6cd75ebcbbea9345f02cd2e4d013b51775f20a83` implement the discovered
signing/configuration and current-identity prerequisites. They are local commits,
not a release or deployed configuration assertion. The full contract is in
`Service/infera-manage/docs/MANAGE_AUTHORITY_CONTRACT.md`.

The final owned run passed with unchanged source/dependency fingerprints:
24 Manage component tests, three Agentic tests (including the actual cross-service
HTTP case), and two actual Manage startup rejection cases. Control lifecycle is an
explicit fixture in that HTTP case; current project membership, grants, identity
and service configuration use the real Agentic handler and disposable MongoDB.
The actual Manage process is stopped and restarted, not a simulated cache reset.
This does not certify the deployed gateway, Control, IDP token exchange/refresh,
all service resource ACLs, SDK wire transport or the panel UI.

The cross-service case verifies signed nonce/user-bound current authority, removal
of one and the final service despite historical used_services, Manage/Admin-only
sets, active sandboxes with missing deployed configuration, predeployment-only
setup declarations, identity changes, stale handoffs/sessions across restart,
current settings-manage denial and membership removal, outsider denial, explicit
organization preservation and linked identity lookup using stored BSON UUIDs.
Configured signing bytes remain compatible; missing/blank configuration has no
fixed fallback. Component tests additionally reject forged/stale/mismatched and
oversized authority responses and preserve recovery without stale service grants
or refresh during outage. The response receipt is bounded to 64 KiB and 30 seconds.

Concurrency in the original Agentic checkout invalidated earlier source fences.
The accepted run therefore uses the detached checkout recorded in
`evidence/manage-authority-tests.json` at the exact Agentic commit. Its original
lock was restored after retaining resolved bytes. Manage's pre-existing dirty
Cargo lock is unchanged and retained; its fingerprint is part of the tested input.
Original unrelated Agentic/SDK changes were not staged, reset or included in these
backend commits. The isolated checkout remains available; no host cache cleanup
was performed.

Evidence records retain every command, counts/durations, source/dependency hashes,
Mongo image digest, input/resolved lock hashes, binary hash and logs. Earlier
failed attempts remain labelled as failures. Cargo target metadata now binds the
vendored compiler documentation include to its exact manifest; unsupported/dynamic
inputs still fail closed. Supporting artifacts for multi-service runs are each
hash-verified by the evidence gate, including both dependency locks.

The full SDK build passed in the contemporaneous working tree. Its 104-test run
passed 101 and failed 3 due to unrelated LMS changes: generated operation/documentation
counts no longer match the contract manifest and published aiSummary method names
were removed. Those tests were not weakened. Focused evidence-tooling tests pass.
Later concurrent working version edits to 1.0.0 are not a release by this task and
are not certified by that earlier 0.23.0 test run. SDK release reconciliation remains
open and the full service discovery gate remains blocked.

Pastil's fresh compact chat snapshot still reports completed turn
`01a14e78-000f-7453-aac4-1cef7aba5351`, preserving Creation/Ask/Chat GPT-6 Luna
and Code/Design GPT-6.1 Sol, plus the prior deployment/reconnection fixes. Payment/SMS
credentials and signed-in customer-club testing remain deferred in that source
report. The full oversized turn cannot be read by the history tool; its compact
completion snapshot was read without messaging that chat or rerunning production.

No agent memory migration/publication occurred; reconciled migrated records remain
zero and agent quality/latency canaries remain unmeasured. Compilation/test duration
is not agent-response latency. Canonical/deployed and owning-service workflow gates
must still pass in dependency order before SDK/Manage completion or cutover.
