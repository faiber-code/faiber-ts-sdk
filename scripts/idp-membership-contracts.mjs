// Exact additive/CAS source contract from IDP 8287992 (native ad3aaaed equivalent).
const read = 'idp:user:read with a matching current target scope';
const write = 'idp:user:assign_roles with a matching current target scope and assignable-role ceiling, rechecked after target user lock';
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
    auth: 'idp:user:assign_roles with a matching current target scope; both added and removed roles must fit the assignment ceiling, rechecked after the target user lock',
    purpose: 'Intentionally replace roles using the captured observed membership revision as quoted If-Match. Missing precondition is 428; stale revision is 409 with zero changes. Never refetch a revision to apply a saved stale role union.'
  }]))
};
