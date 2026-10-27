// Reviewed additive visibility contract. Requires the matching IDP/Profile feature release.
const manage = "idp:visibility:assign on the current active local principal";
export const idpVisibilityContracts = {
  "idp:GET /api/v1/visibility/catalog": {
    methodName: "visibilityCatalogGet",
    typeBase: "VisibilityCatalogGet",
    response: 'import("./visibility.js").VisibilityCatalogResponse',
    auth: manage,
    purpose:
      "List active YAML-defined scoped actions and stable local role UUIDs for rule assignment.",
  },
  "idp:GET /api/v1/visibility/roles/{role_id}": {
    methodName: "visibilityRoleGet",
    typeBase: "VisibilityRoleGet",
    response: 'import("./visibility.js").VisibilityRulesResponse',
    auth: manage,
    purpose:
      "Read one local role scope document and its concurrency revision; unknown roles return 404.",
  },
  "idp:PUT /api/v1/visibility/roles/{role_id}": {
    methodName: "visibilityRolePut",
    typeBase: "VisibilityRolePut",
    input: 'import("./visibility.js").SaveVisibilityRulesInput',
    response: 'import("./visibility.js").VisibilityRulesResponse',
    auth: manage,
    purpose:
      "Replace the role scope document atomically with an audit entry. Supply the observed revision; stale revisions return 409 and invalid catalog actions or target UUIDs return 422.",
  },
  "idp:POST /api/v1/visibility/resolve": {
    methodName: "visibilityResolvePost",
    typeBase: "VisibilityResolvePost",
    input: 'import("./visibility.js").ResolveVisibilityInput',
    response: 'import("./visibility.js").EffectiveVisibilityResponse',
    auth: "authenticated current principal with an active scoped grant for the requested action",
    purpose:
      "Resolve only the authenticated caller against current role memberships and permission grants. No matching grant returns 403. Never accepts caller-supplied actor IDs or scopes.",
  },
};
