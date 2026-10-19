/** Active runtime source review at5e6d6add; server BFF credentials never belong in a browser. */
export const socialDiscoveryContracts = {
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
  "social:GET /api/v1/public/media/{id}": {
    "response": "ArrayBuffer | Uint8Array",
    "auth": "public projection",
    "purpose": "Download published media bytes after parent visibility and blocking checks. Response has private,no-cache. Unpublished media404, unavailable object storage500.",
    "binaryDownload": true,
    "pathTypes": {
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
    "purpose": "Idempotently follow a user/place. Self-follow400 and blocked user403. Returns204; may emit a durable follow notification.",
    "pathTypes": {
      "kind": "import(\"./discovery.types.js\").SocialFollowTargetKind",
      "id": "string"
    }
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
  "social:PUT /api/v1/block/{id}": {
    "response": "void",
    "auth": "trusted server BFF_SERVICE_KEY bearer plus actor UUID",
    "purpose": "Block a user and remove user-follow edges in both directions; self-block400, success204. Current handler uses separate statements.",
    "pathTypes": {
      "id": "string"
    }
  },
  "social:DELETE /api/v1/block/{id}": {
    "response": "void",
    "auth": "trusted server BFF_SERVICE_KEY bearer plus actor UUID",
    "purpose": "Remove the current actor block edge; idempotent204.",
    "pathTypes": {
      "id": "string"
    }
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
  }
};
