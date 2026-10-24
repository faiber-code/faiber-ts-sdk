// Exact additive/CAS source contract from IDP 8287992 (native ad3aaaed equivalent).
const read = 'idp:acl:read against the current active local principal';
const write = 'both current idp:acl:read and idp:acl:update, rechecked after target user lock';
export const idpMembershipContracts = {
  'idp:GET /api/v1/users/{user_id}/role-memberships': {
    methodName: 'userRoleMembershipsGet', typeBase: 'UserRoleMembershipsGet',
    response: 'import("./memberships.js").UserRoleMembershipSnapshotResponse', auth: read,
    purpose: 'Read every stored local user role membership and an opaque observed revision; retain inactive and duplicate rows. Does not grant authority or activate a user.'
  },
  'idp:POST /api/v1/users/{user_id}/role-memberships': {
    methodName: 'userRoleMembershipsPost', typeBase: 'UserRoleMembershipsPost',
    input: 'import("./memberships.js").AddUserRoleMemberships',
    response: 'import("./memberships.js").AddUserRoleMembershipsResponse', auth: write,
    purpose: 'Append 1–128 unique active local role UUIDs to an already active local user, preserving every existing membership. Repeated active additions are no-ops; concurrent disjoint additions preserve both.'
  },
  ...Object.fromEntries(['PATCH','PUT'].map(method => [`idp:${method} /api/v1/users/{user_id}/change-roles`, {
    membershipRevision: true,
    auth: 'current idp:acl:update, rechecked after target user lock; target must already be active',
    purpose: 'Intentionally replace roles using the captured observed membership revision as quoted If-Match. Missing precondition is 428; stale revision is 409 with zero changes. Never refetch a revision to apply a saved stale role union.'
  }]))
};
