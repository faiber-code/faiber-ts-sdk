
## Consumer evidence is separate from source evidence (2026-10-20)

A verified source review does not certify its TypeScript operation or Manage flow.
For stages `sdk`, `manage`, and `complete`, each operation needs an `sdk` review
with `status: verified`, the current operation `source_checksum`, source references,
its scoped `package`, its named `exported_operation`, and exact `test_evidence`.
Those runs must retain a passing artifact, cover that exact service/operation/source,
record the full frozen `sdk_revision`, affirm `source_unchanged_during_run`, and
explicitly declare the `typescript_sdk_http` boundary after actual HTTP verification.
Adapter mocks, source unit tests, generated route counts and package builds cannot
be labelled as that boundary.

Stages `manage` and `complete` additionally require each operation's `manage`
review with the same checksum/reference/evidence rules, a described readable
`workflow`, and `raw_json_form: false`. Its actual workflow run must declare
`readable_manage_workflow` and bind the selected Manage source revision as well as
the operation's service source. A source-only pass, absent UI, raw JSON form or
historical test of another Manage revision fails the downstream gate. These
records are evidence requirements, not a mechanism to convert unrun workflows
into passing tests. Existing unresolved service and migration gates remain open.
