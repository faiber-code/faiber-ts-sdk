/** Hand-reviewed Social admin router/SQL contracts; verification remains evidence-gated. */
export const socialAdminContracts = {
  "social:GET /api/v1/admin/social/overview": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminOverview>",
    "auth": "social:panel:view; current trusted organization/actor context required",
    "purpose": "Read organization-scoped operator totals."
  },
  "social:GET /api/v1/admin/social/posts": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminPostSummary>",
    "auth": "social:content:read; current trusted organization/actor context required",
    "purpose": "Page non-deleted posts, filtering moderation status, category UUID and trimmed title/body search.",
    "query": "import(\"./admin.types.js\").SocialAdminPostsQuery"
  },
  "social:GET /api/v1/admin/social/posts/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminPostDetail>",
    "auth": "social:content:read; current trusted organization/actor context required",
    "purpose": "Read a post, metadata, report rows, activity counts and public capability projection. Missing or deleted post projection returns404."
  },
  "social:GET /api/v1/admin/social/comments": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminComment>",
    "auth": "social:content:read; current trusted organization/actor context required",
    "purpose": "Page comments including deleted records; status filters moderation_status. q/category_id are ignored.",
    "query": "import(\"./admin.types.js\").SocialAdminStatusQuery"
  },
  "social:GET /api/v1/admin/social/comments/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminComment>",
    "auth": "social:content:read; current trusted organization/actor context required",
    "purpose": "Read an organization-scoped comment UUID, including deleted rows; missing records return404."
  },
  "social:GET /api/v1/admin/social/media": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminMedia>",
    "auth": "social:content:read; current trusted organization/actor context required",
    "purpose": "Page uploaded media. status filters exact content_type, not lifecycle status.",
    "query": "import(\"./admin.types.js\").SocialAdminStatusQuery"
  },
  "social:GET /api/v1/admin/social/categories": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminCategory[]>",
    "auth": "social:panel:view; current trusted organization/actor context required",
    "purpose": "List non-deleted categories, including hidden/archived status; no pagination."
  },
  "social:POST /api/v1/admin/social/categories": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminCategory>",
    "auth": "social:categories:manage; current trusted organization/actor context required",
    "purpose": "Create a validated category; returns201. Localized name/description and metadata use backend JSON values.",
    "input": "import(\"./admin.types.js\").SocialAdminCreateCategoryInput"
  },
  "social:GET /api/v1/admin/social/categories/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminCategory>",
    "auth": "social:panel:view; current trusted organization/actor context required",
    "purpose": "Read a non-deleted category UUID from the organization-scoped category list."
  },
  "social:PATCH /api/v1/admin/social/categories/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminCategory>",
    "auth": "social:categories:manage; current trusted organization/actor context required",
    "purpose": "Patch a category using supplied fields; absent and null optional fields follow backend Option semantics.",
    "input": "import(\"./admin.types.js\").SocialAdminUpdateCategoryInput"
  },
  "social:DELETE /api/v1/admin/social/categories/{id}": {
    "response": "void",
    "auth": "social:categories:manage; current trusted organization/actor context required",
    "purpose": "Soft-delete a category; returns204 without a response body."
  },
  "social:GET /api/v1/admin/social/capability-policies": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminPolicy[]>",
    "auth": "social:panel:view; current trusted organization/actor context required",
    "purpose": "List category capability policies ordered by category UUID and descending version, including draft/retired."
  },
  "social:POST /api/v1/admin/social/capability-policies": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminPolicy>",
    "auth": "social:capabilities:manage; current trusted organization/actor context required",
    "purpose": "Create a new draft policy version for a category; authenticated operator required; returns201. Only seven supported config section names are accepted.",
    "input": "import(\"./admin.types.js\").SocialAdminPolicyInput"
  },
  "social:GET /api/v1/admin/social/capability-policies/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminPolicy>",
    "auth": "social:panel:view; current trusted organization/actor context required",
    "purpose": "Read an organization-scoped capability policy UUID; missing records return404."
  },
  "social:PATCH /api/v1/admin/social/capability-policies/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminPolicy>",
    "auth": "social:capabilities:manage; current trusted organization/actor context required",
    "purpose": "Replace draft config for the matching category; non-draft, missing or mismatched category returns409.",
    "input": "import(\"./admin.types.js\").SocialAdminPolicyInput"
  },
  "social:POST /api/v1/admin/social/capability-policies/{id}/publish": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminPolicy>",
    "auth": "social:capabilities:manage; current trusted organization/actor context required",
    "purpose": "Publish a draft and retire the previously published category policy in one transaction. Authenticated operator required; non-draft returns409."
  },
  "social:GET /api/v1/admin/social/moderation/queue": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminModerationQueue>",
    "auth": "social:moderation:review; current trusted organization/actor context required",
    "purpose": "Read pending non-deleted posts/comments and open/reviewing reports. Awaiting-funding posts are excluded; queue is unpaginated."
  },
  "social:GET /api/v1/admin/social/reports": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminReport>",
    "auth": "social:reports:manage; current trusted organization/actor context required",
    "purpose": "Page organization-scoped reports with exact status filtering.",
    "query": "import(\"./admin.types.js\").SocialAdminStatusQuery"
  },
  "social:GET /api/v1/admin/social/reports/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminReport>",
    "auth": "social:reports:manage; current trusted organization/actor context required",
    "purpose": "Read a report UUID in the organization; missing records return404."
  },
  "social:GET /api/v1/admin/social/claims": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminClaim>",
    "auth": "social:claims:manage; current trusted organization/actor context required",
    "purpose": "Page organization-scoped claims with exact status filtering.",
    "query": "import(\"./admin.types.js\").SocialAdminStatusQuery"
  },
  "social:GET /api/v1/admin/social/claims/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminClaim>",
    "auth": "social:claims:manage; current trusted organization/actor context required",
    "purpose": "Read a claim UUID in the organization; missing records return404."
  },
  "social:POST /api/v1/admin/social/claims/{id}/approve": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminClaimDecision>",
    "auth": "social:claims:manage; current trusted organization/actor context required",
    "purpose": "Resolve an author-selected and author-approved claim in a transaction, update post lifecycle and audit. Authenticated operator required; unmet selection prerequisites return409.",
    "input": "import(\"./admin.types.js\").SocialAdminReasonInput"
  },
  "social:POST /api/v1/admin/social/claims/{id}/reject": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminClaimDecision>",
    "auth": "social:claims:manage; current trusted organization/actor context required",
    "purpose": "Reject a submitted/selected claim and audit the decision. Nonempty reason and authenticated operator required. Terminal claims return409; the claim row is locked while applying the decision.",
    "input": "import(\"./admin.types.js\").SocialAdminReasonInput"
  },
  "social:GET /api/v1/admin/social/bounties": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminBounty>",
    "auth": "social:funding:review; current trusted organization/actor context required",
    "purpose": "Page organization-scoped bounties with exact status filter and newest-update ordering. Admin amount uses a JSON number.",
    "query": "import(\"./admin.types.js\").SocialAdminStatusQuery"
  },
  "social:GET /api/v1/admin/social/bounties/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminBounty>",
    "auth": "social:funding:review; current trusted organization/actor context required",
    "purpose": "Read a bounty UUID in the organization; missing records return404."
  },
  "social:POST /api/v1/admin/social/locations/{post_id}/reveal": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminLocation>",
    "auth": "social:location:reveal; current trusted organization/actor context required",
    "purpose": "Reveal decrypted coordinates with a mandatory nonempty operator reason and audit event. Response is no-store/no-cache; expire the result after60seconds.",
    "input": "import(\"./admin.types.js\").SocialAdminReasonInput"
  },
  "social:GET /api/v1/admin/social/actors": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminActor>",
    "auth": "social:content:read; current trusted organization/actor context required",
    "purpose": "Page actors by latest post time; q optionally filters an actor UUID. Invalid q is currently ignored; meta.total is current-page length.",
    "query": "import(\"./admin.types.js\").SocialAdminActorsQuery"
  },
  "social:GET /api/v1/admin/social/actors/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminActorDetail>",
    "auth": "social:content:read; current trusted organization/actor context required",
    "purpose": "Read actor activity counts and restriction rows in the organization; a UUID with no activity returns zero counts."
  },
  "social:GET /api/v1/admin/social/restrictions": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminRestriction>",
    "auth": "social:actors:restrict; current trusted organization/actor context required",
    "purpose": "Page organization-scoped restrictions with exact status filter.",
    "query": "import(\"./admin.types.js\").SocialAdminStatusQuery"
  },
  "social:POST /api/v1/admin/social/restrictions": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminRestrictionCreated>",
    "auth": "social:actors:restrict; current trusted organization/actor context required",
    "purpose": "Create an active restriction; authenticated operator, valid scope, nonempty reason and end later than start required; returns201.",
    "input": "import(\"./admin.types.js\").SocialAdminCreateRestrictionInput"
  },
  "social:POST /api/v1/admin/social/restrictions/{id}/revoke": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminRestrictionRevoked>",
    "auth": "social:actors:restrict; current trusted organization/actor context required",
    "purpose": "Revoke an active restriction with an authenticated operator and nonempty reason; non-active/missing returns409.",
    "input": "import(\"./admin.types.js\").SocialAdminReasonInput"
  },
  "social:GET /api/v1/admin/social/analytics": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminAnalytics>",
    "auth": "social:analytics:read; current trusted organization/actor context required",
    "purpose": "Read organization-scoped counts by status and navigation grant events; includes deleted posts in status totals."
  },
  "social:GET /api/v1/admin/social/audit": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminAudit>",
    "auth": "social:audit:read; current trusted organization/actor context required",
    "purpose": "Page organization-scoped audit rows. status filters exact audit action, not a lifecycle state.",
    "query": "import(\"./admin.types.js\").SocialAdminStatusQuery"
  },
  "social:GET /api/v1/admin/social/integrations": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminIntegration>",
    "auth": "social:integrations:manage; current trusted organization/actor context required",
    "purpose": "Page organization-scoped durable integration events with exact status filter and newest-update ordering.",
    "query": "import(\"./admin.types.js\").SocialAdminStatusQuery"
  },
  "social:GET /api/v1/admin/social/integrations/{id}": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminIntegration>",
    "auth": "social:integrations:manage; current trusted organization/actor context required",
    "purpose": "Read an organization-scoped durable event UUID, including its payload; missing returns404."
  },
  "social:POST /api/v1/admin/social/integrations/{id}/replay": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminIntegrationPending>",
    "auth": "social:integrations:manage; current trusted organization/actor context required",
    "purpose": "Reset failed/dead_letter events to pending and audit a replay request. Authenticated operator and nonempty reason required; other statuses return409. Receipt is queued, not delivered; the outbox reset and audit insert commit in one transaction.",
    "input": "import(\"./admin.types.js\").SocialAdminReasonInput"
  },
  "social:GET /api/v1/admin/social/settings": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminSettings>",
    "auth": "social:settings:manage; current trusted organization/actor context required",
    "purpose": "Read configuration-presence flags and capability contract version. This does not disclose secrets or prove they are valid."
  }
};
