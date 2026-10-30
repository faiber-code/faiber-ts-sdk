# Funded campaign contract draft

Additive named APIs cover Social campaigns and private proof review, Task account
rewards and entitlement activation, Asset's Do operator policy, IDP contact facts,
and Payment's configured-product pack checkout. Requests use the shared service
client, full Axios responses, cancellation and stable mutation identifiers.
Server integration credentials must never be bundled into browser clients.

The corresponding generic services are pushed on main. Source revisions in this
branch identify the actual implementation commits. All 23 packages build and the
new authenticated-transport regression test passes. Windows source tools now use
filesystem-safe paths, discover nested worktrees and archive deterministic source
bytes without overwriting dirty service checkouts.

This is not a published release. The inherited source-revision catalog references
unavailable Reservation and State commits, Version uses a stale directory name,
and the GIS source checkout is missing. Resolve/review those sources and run the
complete contract, source/provenance, type, package and test gates before release.
Do not invent source provenance, skip source gates or publish a new version merely
to consume these additions. 2done temporarily uses its generated additive Rewards
API snapshot over the existing SDK transport while this release is prepared.

Keep the user's original SDK checkout and its unrelated changes intact. This
branch is prepared in the isolated current-main worktree.
