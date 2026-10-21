/** Mounted Social operations reviewed from immutable d067ac956571abd73211b06d835caa658b1f09bc. Source review does not establish deployed/native verification. */
export const socialReviewedOperationContracts = {
  "social:POST /api/v1/admin/import/modules": {
    "purpose": "Import legacy Modules social records within the current organization; dry_run defaults true. Returns counters and the explicit legacy reaction mapping; requires social:admin.",
    "auth": "social:admin; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").LegacyImportResponse",
    "input": "import(\"./types.js\").LegacyImportInput"
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
  "social:DELETE /api/v1/admin/social/categories/{id}": {
    "response": "void",
    "auth": "social:categories:manage; current trusted organization/actor context required",
    "purpose": "Soft-delete a category; returns204 without a response body."
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
  "social:POST /api/v1/admin/social/locations/{post_id}/reveal": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminLocation>",
    "auth": "social:location:reveal; current trusted organization/actor context required",
    "purpose": "Reveal decrypted coordinates with a mandatory nonempty operator reason and audit event. Response is no-store/no-cache; expire the result after60seconds.",
    "input": "import(\"./admin.types.js\").SocialAdminReasonInput"
  },
  "social:GET /api/v1/admin/social/media": {
    "response": "import(\"./admin.types.js\").SocialAdminPage<import(\"./admin.types.js\").SocialAdminMedia>",
    "auth": "social:content:read; current trusted organization/actor context required",
    "purpose": "Page uploaded media. status filters exact content_type, not lifecycle status.",
    "query": "import(\"./admin.types.js\").SocialAdminStatusQuery"
  },
  "social:GET /api/v1/admin/social/moderation/queue": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminModerationQueue>",
    "auth": "social:moderation:review; current trusted organization/actor context required",
    "purpose": "Read pending non-deleted posts/comments and open/reviewing reports. Awaiting-funding posts are excluded; queue is unpaginated."
  },
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
  "social:GET /api/v1/admin/social/settings": {
    "response": "import(\"./admin.types.js\").SocialAdminResponse<import(\"./admin.types.js\").SocialAdminSettings>",
    "auth": "social:settings:manage; current trusted organization/actor context required",
    "purpose": "Read configuration-presence flags and capability contract version. This does not disclose secrets or prove they are valid."
  },
  "social:GET /api/v1/auth/self": {
    "purpose": "Read the middleware-derived current user UUID, roles and permissions.",
    "auth": "middleware-derived IDP identity",
    "response": "import(\"./types.js\").SocialSessionIdentityResponse"
  },
  "social:DELETE /api/v1/block/{id}": {
    "response": "void",
    "auth": "trusted server BFF_SERVICE_KEY bearer plus actor UUID",
    "purpose": "Remove the current actor block edge; idempotent204.",
    "pathTypes": {
      "id": "string"
    }
  },
  "social:PUT /api/v1/block/{id}": {
    "response": "void",
    "auth": "trusted server BFF_SERVICE_KEY bearer plus actor UUID",
    "purpose": "Block a user and remove user-follow edges in both directions; self-block400, success204. Current handler uses separate statements.",
    "pathTypes": {
      "id": "string"
    }
  },
  "social:GET /api/v1/categories": {
    "purpose": "List organization-scoped, non-deleted categories ordered by sort_order and slug; hidden/archived categories are included.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialCategoryListResponse"
  },
  "social:POST /api/v1/categories": {
    "purpose": "Create a category (201). Slug normalizes to lowercase ASCII letters/digits/hyphens/underscores, 1–100 bytes. Localized labels, description and metadata remain application JSON.",
    "auth": "social:category:manage; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialCategoryResponse",
    "input": "import(\"./types.js\").CreateCategoryInput"
  },
  "social:DELETE /api/v1/categories/{id}": {
    "purpose": "Soft-delete the category; returns 204 with no body.",
    "auth": "social:category:manage; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:PATCH /api/v1/categories/{id}": {
    "purpose": "Patch supplied category fields. Null and absent Option fields leave stored values unchanged; slug/status validation matches creation.",
    "auth": "social:category:manage; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialCategoryResponse",
    "input": "import(\"./types.js\").UpdateCategoryInput"
  },
  "social:GET /api/v1/categories/{id}/capability-policy": {
    "purpose": "Read the published category policy projection (404 when absent), including configurable JSON sections and published_at.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialCategoryCapabilityPolicyResponse"
  },
  "social:GET /api/v1/claims/{id}": {
    "purpose": "Read a private claim for its claimant, post author or claims manager; returns mutual contact consent and nullable resolution. Nonparticipants return 403.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialClaimDetailResponse"
  },
  "social:PUT /api/v1/claims/{id}/contact-consent": {
    "purpose": "Set consent for a claim participant; mutual_consent reflects both participant grants. Requires an authenticated participant.",
    "auth": "social:claim:consent; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialContactConsentResponse",
    "input": "import(\"./contracts.types.js\").SocialContactConsentInput"
  },
  "social:POST /api/v1/claims/{id}/select": {
    "purpose": "Select a submitted claim as the post author in a transaction and create pending resolution. Another selected claim returns 409; returns claim_id/post_id/status/author_approved.",
    "auth": "social:claim:select_own; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialClaimSelectedResponse"
  },
  "social:POST /api/v1/claims/{id}/withdraw": {
    "purpose": "Withdraw only the current claimant submitted claim; other states or ownership return 409. Returns id/status.",
    "auth": "social:claim:update_own; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialClaimWithdrawnResponse"
  },
  "social:DELETE /api/v1/comments/{id}": {
    "purpose": "Soft-delete author-owned comment, or a moderator-authorized comment, and refresh counts; returns 204.",
    "auth": "social:comment:delete_own; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:PATCH /api/v1/comments/{id}": {
    "purpose": "Update author-owned comment body (1–10000 trimmed characters). Category moderation can require review.",
    "auth": "social:comment:update_own; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialCommentResponse",
    "input": "import(\"./types.js\").UpdateCommentInput"
  },
  "social:DELETE /api/v1/comments/{id}/like": {
    "purpose": "Remove current user comment reaction and refresh counts; returns 204.",
    "auth": "social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:PUT /api/v1/comments/{id}/like": {
    "purpose": "Set the current user comment reaction to like, returning the reaction record.",
    "auth": "social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialReactionResponse"
  },
  "social:DELETE /api/v1/comments/{id}/reaction": {
    "purpose": "Remove current user comment reaction and refresh counts; returns 204.",
    "auth": "social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:GET /api/v1/comments/{id}/reaction": {
    "purpose": "Read comment reaction totals, counts by reaction type and nullable viewer_reaction after verifying target visibility.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").ReactionSummaryResponse"
  },
  "social:PUT /api/v1/comments/{id}/reaction": {
    "purpose": "Upsert current user comment reaction after visibility and restriction checks; type is one of like/love/care/haha/wow/sad/angry.",
    "auth": "social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialReactionResponse",
    "input": "import(\"./types.js\").SetReactionInput"
  },
  "social:GET /api/v1/comments/post/{id}": {
    "purpose": "Read published non-deleted comments oldest-first after checking parent visibility; no pagination query is consumed.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialCommentListResponse"
  },
  "social:POST /api/v1/comments/post/{id}": {
    "purpose": "Create a post comment (201), checking parent post and optional same-post non-deleted parent comment. Body is trimmed, 1–10000 characters; category moderation/restrictions apply.",
    "auth": "social:comment:create; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialCommentResponse",
    "input": "import(\"./types.js\").CreateCommentInput"
  },
  "social:DELETE /api/v1/follow/{kind}/{id}": {
    "response": "void",
    "auth": "trusted server BFF_SERVICE_KEY bearer plus actor UUID",
    "purpose": "Remove the current actor follow edge; returns204 even when no edge existed.",
    "pathTypes": {
      "kind": "import(\"./discovery.types.js\").SocialFollowTargetKind",
      "id": "string"
    }
  },
  "social:GET /api/v1/follow/{kind}/{id}": {
    "response": "import(\"./discovery.types.js\").SocialGraphResponse<import(\"./discovery.types.js\").SocialRelationship>",
    "auth": "trusted server BFF_SERVICE_KEY bearer plus actor UUID",
    "purpose": "Read whether the current BFF actor follows or blocks a user/place target. kind is place or user.",
    "pathTypes": {
      "kind": "import(\"./discovery.types.js\").SocialFollowTargetKind",
      "id": "string"
    }
  },
  "social:PUT /api/v1/follow/{kind}/{id}": {
    "response": "void",
    "auth": "trusted server BFF_SERVICE_KEY bearer plus actor UUID",
    "purpose": "Idempotently follow a user/place. Self-follow400 and blocked user403. Returns204; the migration 6 database trigger may enqueue an opted-in user-follow notification for a new edge.",
    "pathTypes": {
      "kind": "import(\"./discovery.types.js\").SocialFollowTargetKind",
      "id": "string"
    }
  },
  "social:POST /api/v1/integrations/funding-events": {
    "purpose": "Apply a durable provider funding event after matching bounty unit/code/decimal amount. Event/reference are 1–255 trimmed characters. Duplicate external_event_id returns duplicate:true without status; new event returns duplicate:false/status. A funded result advances category moderation lifecycle transactionally.",
    "auth": "social:integrations:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialFundingEventResponse",
    "input": "import(\"./contracts.types.js\").SocialFundingEventInput"
  },
  "social:GET /api/v1/internal/notification-outbox": {
    "response": "import(\"./discovery.types.js\").SocialGraphResponse<import(\"./discovery.types.js\").SocialNotificationOutboxEvent[]>",
    "auth": "trusted BFF actor plus exact social:integrations:write permission",
    "purpose": "Read oldest50 undelivered notification events for the configured organization. No lease or claim is acquired; consumers must deduplicate.",
    "pathTypes": {}
  },
  "social:PUT /api/v1/internal/notification-outbox/{id}/ack": {
    "response": "void",
    "auth": "trusted BFF actor plus exact social:integrations:write permission",
    "purpose": "Mark an organization-scoped notification as delivered; returns204 even for missing/already-acknowledged rows. Ack is not a downstream business-effect receipt.",
    "pathTypes": {
      "id": "string"
    }
  },
  "social:POST /api/v1/internal/place-events": {
    "response": "void",
    "auth": "trusted BFF actor plus exact social:integrations:write permission",
    "purpose": "Record a unique organization/event UUID and queue place.updated notifications for followers who did not disable place notifications, in one transaction. Repeated ID has no new effect; returns204.",
    "input": "import(\"./discovery.types.js\").SocialPlaceEventInput",
    "pathTypes": {}
  },
  "social:GET /api/v1/me/analytics": {
    "purpose": "Read current author analytics over inclusive YYYY-MM-DD from/to dates, at most 366 days; defaults to today and preceding 29 days. Returns totals/posts/trend.",
    "auth": "social:analytics:read_own; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").CreatorAnalyticsResponse",
    "query": "import(\"./types.js\").AnalyticsQuery"
  },
  "social:GET /api/v1/me/bookmarks": {
    "purpose": "List bookmarked post UUIDs for the authenticated organization/user; this is not a post projection.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialBookmarksResponse"
  },
  "social:GET /api/v1/me/claims": {
    "purpose": "Page current claimant claims with required total/page/limit meta, message/evidence/status and mutual_contact_consent; defaults page=1/limit=30, limit 1–100.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialClaimPageResponse",
    "query": "import(\"./contracts.types.js\").SocialClaimListQuery"
  },
  "social:DELETE /api/v1/me/feed-location": {
    "purpose": "Clear the authenticated user location preference idempotently; returns 204.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:GET /api/v1/me/feed-location": {
    "purpose": "Read the authenticated user location preference, returning data:null when unset.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").FeedLocationPreferenceResponse"
  },
  "social:PUT /api/v1/me/feed-location": {
    "purpose": "Save current user location preference. Coordinates must be finite and within latitude ±90/longitude ±180; range_km must be >0 and <=500. Returns the saved non-null preference.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SetFeedLocationResponse",
    "input": "import(\"./types.js\").SetFeedLocationInput"
  },
  "social:GET /api/v1/me/notification-preferences": {
    "response": "import(\"./discovery.types.js\").SocialGraphResponse<import(\"./discovery.types.js\").SocialNotificationPreferences>",
    "auth": "trusted server BFF_SERVICE_KEY bearer plus actor UUID",
    "purpose": "Read follow/comment/place/quest notification preferences, defaulting to enabled.",
    "pathTypes": {}
  },
  "social:PUT /api/v1/me/notification-preferences": {
    "response": "import(\"./discovery.types.js\").SocialGraphResponse<import(\"./discovery.types.js\").SocialNotificationPreferences>",
    "auth": "trusted server BFF_SERVICE_KEY bearer plus actor UUID",
    "purpose": "Update supplied boolean preferences; absent fields stay unchanged. Current handler writes supplied preferences separately.",
    "input": "import(\"./discovery.types.js\").SocialNotificationPreferencesInput",
    "pathTypes": {}
  },
  "social:GET /api/v1/me/posts": {
    "purpose": "Page current actor posts using feed filters and required pagination meta. author_id is overwritten by the authenticated user UUID.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialPostListResponse",
    "query": "import(\"./types.js\").FeedQuery"
  },
  "social:GET /api/v1/me/posts/{id}/claims": {
    "purpose": "Page claims for a post owned by the current user; other actors return 403. Returns required total/page/limit meta and mutual_contact_consent.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialClaimPageResponse",
    "query": "import(\"./contracts.types.js\").SocialClaimListQuery"
  },
  "social:GET /api/v1/media/{id}": {
    "purpose": "Download organization media after uploader/parent visibility checks. Returns bytes with Content-Type and private,max-age=300; storage/configuration failures return 500.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialBinaryMediaResponse",
    "binaryDownload": true
  },
  "social:POST /api/v1/media/uploads": {
    "purpose": "Upload the first multipart field as JPEG, PNG or WebP (1 byte–12 MiB); full multipart body limit 13 MiB. Returns 201 with UUID, authenticated media URL and content type. Storage must be configured.",
    "auth": "social:post:create; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialMediaResponse"
  },
  "social:POST /api/v1/moderation/actions": {
    "purpose": "Moderate a post/comment/report. Reject/hide require a nonblank reason; resolve/dismiss target reports. Awaiting-funding posts return 409. Returns target_type,target_id,status,action; audit stores previous_status separately. Requires either social:moderate or social:moderation:review.",
    "auth": "social:moderate OR social:moderation:review; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").ModerationActionResponse",
    "input": "import(\"./types.js\").ModerateTargetInput"
  },
  "social:GET /api/v1/moderation/audit": {
    "purpose": "Page organization moderation history with optional target_type/action filters; defaults page=1/limit=30 with page>=1 and limit 1–100. Requires either social:moderate or social:moderation:review.",
    "auth": "social:moderate OR social:moderation:review; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").ModerationAuditResponse",
    "query": "import(\"./types.js\").ModerationAuditQuery"
  },
  "social:GET /api/v1/moderation/queue": {
    "purpose": "Read pending non-deleted posts/comments and open/reviewing reports; awaiting-funding posts are excluded. Requires either social:moderate or social:moderation:review.",
    "auth": "social:moderate OR social:moderation:review; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").ModerationQueueResponse"
  },
  "social:GET /api/v1/posts": {
    "purpose": "Page visible organization posts with q title/body search, author/category UUID and validated kind filters. Defaults page=1/limit=30, page>=1 and limit 1–100. Saved location ranks nearby posts then posts without decryptable coordinates. Returns data plus required total/page/limit meta.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialPostListResponse",
    "query": "import(\"./types.js\").FeedQuery"
  },
  "social:POST /api/v1/posts": {
    "purpose": "Create a post (201), or return the completed identical request_key replay (200). Body is trimmed, 1–50000 characters; creation title truncates to 500 characters. Media array entries must reference owned uploaded IDs. Category entitlements/restrictions and published capability policy apply. Reusing a key for changed content or an unconfirmed request returns 409; retry the same request key.",
    "auth": "social:post:create; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialPostResponse",
    "input": "import(\"./types.js\").CreatePostInput"
  },
  "social:DELETE /api/v1/posts/{id}": {
    "purpose": "Soft-delete an author-owned post, or a moderator-authorized post; returns 204.",
    "auth": "social:post:delete_own; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:GET /api/v1/posts/{id}": {
    "purpose": "Read a non-deleted organization-scoped post visible to its author, moderators or readers of published non-private posts. Bidirectional user blocks hide it with 404.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialPostResponse"
  },
  "social:PATCH /api/v1/posts/{id}": {
    "purpose": "Update author-owned content; Option nulls leave fields unchanged. Body is 1–50000 characters and supplied title is 1–500. Existing/new category entitlement and media ownership are enforced. Rejected or moderated content returns to review; awaiting-funding lifecycle is preserved.",
    "auth": "social:post:update_own; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialPostResponse",
    "input": "import(\"./types.js\").UpdatePostInput"
  },
  "social:GET /api/v1/posts/{id}/analytics": {
    "purpose": "Read author-only post analytics over inclusive YYYY-MM-DD from/to dates. Defaults to today and preceding 29 days; from<=to and at most 366 days. Returns totals/posts/trend.",
    "auth": "social:analytics:read_own; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").CreatorAnalyticsResponse",
    "query": "import(\"./types.js\").AnalyticsQuery"
  },
  "social:DELETE /api/v1/posts/{id}/bookmark": {
    "purpose": "Remove current user bookmark; returns 204.",
    "auth": "social:bookmark:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:PUT /api/v1/posts/{id}/bookmark": {
    "purpose": "Idempotently bookmark a visible post for current user; returns 204.",
    "auth": "social:bookmark:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:POST /api/v1/posts/{id}/cancel": {
    "purpose": "Cancel an author-owned post unless already resolved/cancelled/expired (409); hide content and queue bounty refund where relevant. Returns post_id/lifecycle_status.",
    "auth": "social:post:update_own; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialPostCancelledResponse"
  },
  "social:GET /api/v1/posts/{id}/capabilities": {
    "purpose": "Read a visible post capability projection with nullable subject/location/bounty, linked actions and lifecycle. Exact coordinates are excluded.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialCapabilitiesResponse"
  },
  "social:POST /api/v1/posts/{id}/claims": {
    "purpose": "Submit one claim per user/post (201). Authors cannot claim own posts; lifecycle must be published and policy must enable claims. Message 1–5000 trimmed characters, evidence defaults null; conflicts return 409.",
    "auth": "social:claim:create; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialClaimCreatedResponse",
    "input": "import(\"./contracts.types.js\").SocialCreateClaimInput"
  },
  "social:GET /api/v1/posts/{id}/comments": {
    "purpose": "Read published non-deleted comments oldest-first after checking parent visibility; no pagination query is consumed.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialCommentListResponse"
  },
  "social:POST /api/v1/posts/{id}/comments": {
    "purpose": "Create a post comment (201), checking parent post and optional same-post non-deleted parent comment. Body is trimmed, 1–10000 characters; category moderation/restrictions apply.",
    "auth": "social:comment:create; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialCommentResponse",
    "input": "import(\"./types.js\").CreateCommentInput"
  },
  "social:DELETE /api/v1/posts/{id}/like": {
    "purpose": "Remove current user post reaction and refresh counts; returns 204.",
    "auth": "social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:PUT /api/v1/posts/{id}/like": {
    "purpose": "Set the current user post reaction to like, returning the reaction record.",
    "auth": "social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialReactionResponse"
  },
  "social:POST /api/v1/posts/{id}/navigation-access": {
    "purpose": "Request short-lived exact coordinates with optional reason. Requires authenticated user, navigation permission and location access policy; returns no-store coordinates expiring in 60 seconds.",
    "auth": "social:location:navigate; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./contracts.types.js\").SocialNavigationAccessResponse",
    "input": "import(\"./contracts.types.js\").SocialNavigationAccessInput"
  },
  "social:DELETE /api/v1/posts/{id}/reaction": {
    "purpose": "Remove current user post reaction and refresh counts; returns 204.",
    "auth": "social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:GET /api/v1/posts/{id}/reaction": {
    "purpose": "Read post reaction totals, counts by reaction type and nullable viewer_reaction after verifying visibility.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").ReactionSummaryResponse"
  },
  "social:PUT /api/v1/posts/{id}/reaction": {
    "purpose": "Upsert current user post reaction after visibility and restriction checks; type is one of like/love/care/haha/wow/sad/angry.",
    "auth": "social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialReactionResponse",
    "input": "import(\"./types.js\").SetReactionInput"
  },
  "social:POST /api/v1/posts/{id}/resubmit": {
    "purpose": "Resubmit author-owned content to the category moderation state; returns the updated post.",
    "auth": "social:post:update_own; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialPostResponse"
  },
  "social:POST /api/v1/posts/{id}/share-events": {
    "purpose": "Record a visible post share with channel default system and optional idempotency_key; returns 204. Idempotency keys are scoped to organization/user across posts, truncate to 128 characters, and suppress duplicates; channel is trimmed to 1–32 characters.",
    "auth": "social:share:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void",
    "input": "import(\"./types.js\").ShareEventInput"
  },
  "social:POST /api/v1/posts/{id}/views": {
    "purpose": "Record a visible post view when visible_ms>=1000; lower values return 400. counted is false for author views or a duplicate user/post/day view.",
    "auth": "social:view:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").RecordViewResponse",
    "input": "import(\"./types.js\").RecordViewInput"
  },
  "social:GET /api/v1/public/media/{id}": {
    "response": "ArrayBuffer | Uint8Array",
    "auth": "public projection",
    "purpose": "Download published media bytes after parent visibility and blocking checks. Response has private,no-cache. Unpublished media404, unavailable object storage500.",
    "binaryDownload": true,
    "pathTypes": {
      "id": "string"
    }
  },
  "social:GET /api/v1/public/posts": {
    "response": "import(\"./discovery.types.js\").SocialDiscoveryResponse<import(\"./discovery.types.js\").SocialDiscoveryPost[]>",
    "auth": "public; following=true requires a trusted BFF actor",
    "purpose": "Public projection; runtime-configured organization/category, only public published non-deleted posts and non-expired24hour stories. Valid trusted actor enables following/liked/bookmarked and bidirectional blocking. Page1..10000/limit1..100; subject pair, comma-separated place references, author UUID and normalized text filters.",
    "query": "import(\"./discovery.types.js\").SocialDiscoveryFeedQuery",
    "pathTypes": {}
  },
  "social:GET /api/v1/public/posts/{id}": {
    "response": "import(\"./discovery.types.js\").SocialDiscoveryResponse<import(\"./discovery.types.js\").SocialDiscoveryPost>",
    "auth": "public projection",
    "purpose": "Read the same public, unexpired and non-blocked post projection; hidden, private, wrong-category or blocked records return404.",
    "pathTypes": {
      "id": "string"
    }
  },
  "social:GET /api/v1/public/posts/{id}/comments": {
    "response": "import(\"./discovery.types.js\").SocialDiscoveryResponse<import(\"./discovery.types.js\").SocialDiscoveryComment[]>",
    "auth": "public projection",
    "purpose": "Read at most100 published non-deleted comments, oldest first, after verifying parent post visibility and bidirectional actor blocks.",
    "pathTypes": {
      "id": "string"
    }
  },
  "social:DELETE /api/v1/reactions/post/{id}": {
    "purpose": "Remove current user post reaction and refresh counts; returns 204.",
    "auth": "social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "void"
  },
  "social:GET /api/v1/reactions/post/{id}": {
    "purpose": "Read post reaction totals, counts by reaction type and nullable viewer_reaction after verifying visibility.",
    "auth": "social:read; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").ReactionSummaryResponse"
  },
  "social:POST /api/v1/reactions/post/{id}": {
    "purpose": "Upsert current user post reaction after visibility and restriction checks; type is one of like/love/care/haha/wow/sad/angry.",
    "auth": "social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialReactionResponse",
    "input": "import(\"./types.js\").SetReactionInput"
  },
  "social:POST /api/v1/reports": {
    "purpose": "Report a visible post/comment or another user (201). Self user reports return 400; reason is trimmed, 1–64 characters. Returns the complete report record with nullable resolution fields.",
    "auth": "social:report:create; authenticated IDP context via shared FaiberClient; trusted organization context",
    "response": "import(\"./types.js\").SocialReportResponse",
    "input": "import(\"./types.js\").CreateReportInput"
  },
  "social:GET /health": {
    "purpose": "Read process liveness and package version; this is not a dependency readiness probe.",
    "auth": "public liveness route",
    "response": "import(\"./types.js\").SocialHealthResponse"
  }
};
