// Reviewed mounted Social routes and authenticated Task forwarding.
export const communityEndpoints=[
  {
    "service": "social",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/me",
      "module": "community",
      "handler": "me",
      "permissions": [
        "social:community:read"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/me/analyze",
      "module": "community",
      "handler": "analyze",
      "permissions": [
        "social:community:personalize"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/me/publish",
      "module": "community",
      "handler": "publish",
      "permissions": [
        "social:community:publish"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/people",
      "module": "community",
      "handler": "people",
      "permissions": [
        "social:community:read"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/people/{id}",
      "module": "community",
      "handler": "person",
      "permissions": [
        "social:community:read"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/people/{id}/interest",
      "module": "community",
      "handler": "interest",
      "permissions": [
        "social:community:interest"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/people/{id}/block",
      "module": "community",
      "handler": "block",
      "permissions": [
        "social:community:interest"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/people/{id}/ask",
      "module": "community",
      "handler": "ask",
      "permissions": [
        "social:community:ask"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/people/{id}/messages",
      "module": "community",
      "handler": "messages",
      "permissions": [
        "social:community:messages:read"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/people/{id}/messages",
      "module": "community",
      "handler": "send",
      "permissions": [
        "social:community:messages:send"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/messages",
      "module": "community",
      "handler": "inbox",
      "permissions": [
        "social:community:messages:read"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/gifts",
      "module": "community",
      "handler": "gifts",
      "permissions": [
        "social:community:read"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "social",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/people/{id}/gifts",
      "module": "community",
      "handler": "gift",
      "permissions": [
        "social:community:gifts:send"
      ],
      "source": "infera-social/src/community/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/me",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/me/analyze",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/me/publish",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/people",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/people/{id}",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/people/{id}/interest",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/people/{id}/block",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/people/{id}/ask",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/people/{id}/messages",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/people/{id}/messages",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/messages",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/community/gifts",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/community/people/{id}/gifts",
      "module": "community",
      "handler": "proxy",
      "permissions": [
        "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent"
      ],
      "source": "infera-task/src/campaigns/bridge.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  }
];
export const communityContracts={
  "social:GET /api/v1/community/me": {
    "purpose": "Community me. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:read",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunitySelf>"
  },
  "social:POST /api/v1/community/me/analyze": {
    "purpose": "Community analyze. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:personalize",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityAnalysis>",
    "input": "import(\"./community.js\").CommunityAnalysisInput"
  },
  "social:POST /api/v1/community/me/publish": {
    "purpose": "Community publish. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:publish",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityVisibility>",
    "input": "import(\"./community.js\").CommunityVisibilityInput"
  },
  "social:GET /api/v1/community/people": {
    "purpose": "Community people. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:read",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityPeople>",
    "query": "import(\"./community.js\").CommunityPeopleQuery"
  },
  "social:GET /api/v1/community/people/{id}": {
    "purpose": "Community person. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:read",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityPerson>"
  },
  "social:POST /api/v1/community/people/{id}/interest": {
    "purpose": "Community interest. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:interest",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityInterest>",
    "input": "import(\"./community.js\").CommunityToggleInput"
  },
  "social:POST /api/v1/community/people/{id}/block": {
    "purpose": "Community block. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:interest",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityBlock>",
    "input": "import(\"./community.js\").CommunityToggleInput"
  },
  "social:POST /api/v1/community/people/{id}/ask": {
    "purpose": "Community ask. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:ask",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityAnswer>",
    "input": "import(\"./community.js\").CommunityQuestionInput"
  },
  "social:GET /api/v1/community/people/{id}/messages": {
    "purpose": "Community messages. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:messages:read",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityMessagePage>",
    "query": "import(\"./community.js\").CommunityMessagesQuery"
  },
  "social:POST /api/v1/community/people/{id}/messages": {
    "purpose": "Community send. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:messages:send",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityMessage>",
    "input": "import(\"./community.js\").CommunityMessageInput"
  },
  "social:GET /api/v1/community/messages": {
    "purpose": "Community inbox. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:messages:read",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityInbox>"
  },
  "social:GET /api/v1/community/gifts": {
    "purpose": "Community gifts. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:read",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityGiftCatalog>"
  },
  "social:POST /api/v1/community/people/{id}/gifts": {
    "purpose": "Community gift. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "social:community:gifts:send",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityGiftReceipt>",
    "input": "import(\"./community.js\").CommunityGiftInput"
  },
  "task:GET /api/v1/community/me": {
    "purpose": "Community me. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunitySelf>"
  },
  "task:POST /api/v1/community/me/analyze": {
    "purpose": "Community analyze. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityAnalysis>",
    "input": "import(\"./community.js\").CommunityAnalysisInput"
  },
  "task:POST /api/v1/community/me/publish": {
    "purpose": "Community publish. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityVisibility>",
    "input": "import(\"./community.js\").CommunityVisibilityInput"
  },
  "task:GET /api/v1/community/people": {
    "purpose": "Community people. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityPeople>",
    "query": "import(\"./community.js\").CommunityPeopleQuery"
  },
  "task:GET /api/v1/community/people/{id}": {
    "purpose": "Community person. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityPerson>"
  },
  "task:POST /api/v1/community/people/{id}/interest": {
    "purpose": "Community interest. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityInterest>",
    "input": "import(\"./community.js\").CommunityToggleInput"
  },
  "task:POST /api/v1/community/people/{id}/block": {
    "purpose": "Community block. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityBlock>",
    "input": "import(\"./community.js\").CommunityToggleInput"
  },
  "task:POST /api/v1/community/people/{id}/ask": {
    "purpose": "Community ask. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityAnswer>",
    "input": "import(\"./community.js\").CommunityQuestionInput"
  },
  "task:GET /api/v1/community/people/{id}/messages": {
    "purpose": "Community messages. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityMessagePage>",
    "query": "import(\"./community.js\").CommunityMessagesQuery"
  },
  "task:POST /api/v1/community/people/{id}/messages": {
    "purpose": "Community send. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityMessage>",
    "input": "import(\"./community.js\").CommunityMessageInput"
  },
  "task:GET /api/v1/community/messages": {
    "purpose": "Community inbox. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityInbox>"
  },
  "task:GET /api/v1/community/gifts": {
    "purpose": "Community gifts. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityGiftCatalog>"
  },
  "task:POST /api/v1/community/people/{id}/gifts": {
    "purpose": "Community gift. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.",
    "auth": "task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent",
    "response": "import(\"./community.js\").CommunityResponse<import(\"./community.js\").CommunityGiftReceipt>",
    "input": "import(\"./community.js\").CommunityGiftInput"
  }
};

// Existing campaign wire surfaces are reused for the newly resolved native mounts.
communityContracts["social:GET /api/v1/campaigns"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"campaigns\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign campaigns; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection.", "query": "NonNullable<Parameters<import(\"./campaigns.js\").CampaignsApi[\"campaigns\"]>[0]>"};
communityContracts["social:POST /api/v1/campaigns"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"createCampaign\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign createCampaign; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection.", "input": "Parameters<import(\"./campaigns.js\").CampaignsApi[\"createCampaign\"]>[0]"};
communityContracts["social:GET /api/v1/campaigns/{id}"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"campaign\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign campaign; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection."};
communityContracts["social:POST /api/v1/campaigns/{id}"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"changeCampaign\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign changeCampaign; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection.", "input": "Parameters<import(\"./campaigns.js\").CampaignsApi[\"changeCampaign\"]>[1]"};
communityContracts["social:POST /api/v1/campaigns/{id}/jobs"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"addJob\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign addJob; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection.", "input": "Parameters<import(\"./campaigns.js\").CampaignsApi[\"addJob\"]>[1]"};
communityContracts["social:POST /api/v1/campaign-jobs/{id}/start"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"startJob\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign startJob; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection.", "input": "Parameters<import(\"./campaigns.js\").CampaignsApi[\"startJob\"]>[1]"};
communityContracts["social:GET /api/v1/campaign-assignments"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"work\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign work; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection.", "query": "NonNullable<Parameters<import(\"./campaigns.js\").CampaignsApi[\"work\"]>[0]>"};
communityContracts["social:GET /api/v1/campaign-assignments/{id}"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"assignment\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign assignment; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection."};
communityContracts["social:POST /api/v1/campaign-assignments/{id}/submit"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"submit\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign submit; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection.", "input": "Parameters<import(\"./campaigns.js\").CampaignsApi[\"submit\"]>[1]"};
communityContracts["social:POST /api/v1/campaign-assignments/{id}/review"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"review\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign review; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection.", "input": "Parameters<import(\"./campaigns.js\").CampaignsApi[\"review\"]>[1]"};
communityContracts["social:POST /api/v1/campaign-assignments/{id}/files"]={"response": "Awaited<ReturnType<import(\"./campaigns.js\").CampaignsApi[\"upload\"]>>[\"data\"]", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign upload; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection.", "input": "Parameters<import(\"./campaigns.js\").CampaignsApi[\"upload\"]>[1]"};
communityContracts["social:GET /api/v1/campaign-files/{id}"]={"response": "ArrayBuffer", "auth": "social:campaigns:use; verified organization/actor; private campaign or assignment membership and method-specific moderation checks", "purpose": "Campaign file; preserves funding, membership, proof and version rules. Full Axios response; retry stable request IDs. Review requires explicit reasons for rejection.", "binaryDownload": true};
communityContracts['social:GET /api/v1/campaign-referrals']={auth:'social:campaigns:use; caller-owned referral records',response:'import("./campaigns.js").RewardResponse<import("./campaigns.js").CampaignReferralPage>',purpose:'List up to 100 own referral states and expiry dates.'};
communityContracts['social:POST /api/v1/campaign-referrals/bind']={auth:'social:campaigns:use; binding independently verified with Task',input:'import("./campaigns.js").CampaignReferralBind',response:'import("./campaigns.js").RewardResponse<import("./campaigns.js").CampaignReferralAccepted>',purpose:'Bind once to the independently verified referrer; replay the same request ID.'};
communityContracts['asset:GET /api/v1/internal/backups/balance/{owner}']={auth:'Trusted backend x-infera-backup-token matching BACKUP_SERVICE_TOKEN; never expose this credential in browsers',response:'import("./ledger-contracts.js").AssetBackupBalance',purpose:'Read whether the named payer has a positive backup wallet balance. Raw allowed/currency response; 403 for bad credentials, 400 for invalid payer UUID.'};

// Existing independently reviewed routes discovered by the mounted-router audit.
communityContracts['idp:GET /api/v1/internal/verification/{id}']={response:'import("./verification.js").VerifiedContactResponse',auth:'Backend-only Bearer CONTACT_VERIFICATION_SERVICE_TOKEN; invalid or missing credentials return 401',purpose:'Read explicit verification of an active user’s current contact. Contact presence alone does not imply verification; unavailable storage returns 503.'};
for(const method of ['GET','PUT'])communityContracts[`lms:${method} /api/v1/courses/progression`]={response:'import("./types.js").CourseProgressionResponse',...(method==='PUT'?{input:'import("./types.js").CourseProgression'}:{}),auth:method==='PUT'?'lms:course:update; handler-local permission guard':'lms:course:read; handler-local permission guard',purpose:method==='PUT'?'Atomically replace visual course rows and explicit forward edges using the captured revision. Stale revision returns 409; unknown/duplicate courses, duplicate edges and backward connections return 422.':'Read the versioned visual course rows and explicit edges in a repeatable-read transaction. Deleted course placement is removed; legacy cycles return 422.'};
for(const [method,path,api,member,input] of [
 ['GET','/api/v1/internal/reward-checkouts/{product}/readiness','RewardCheckoutApi','readiness',null],
 ['POST','/api/v1/internal/reward-checkouts/{product}/payment','RewardCheckoutApi','create',1],
 ['POST','/api/v1/internal/reward-checkouts/{product}/refunds','RewardCheckoutApi','refund',1],
 ['GET','/api/v1/internal/reward-checkouts/{product}/transactions/{id}','RewardCheckoutApi','receipt',null],
 ['GET','/api/v1/reward-refunds','RewardRefundsApi','list',null],
 ['GET','/api/v1/reward-refunds/{id}','RewardRefundsApi','show',null],
 ['POST','/api/v1/reward-refunds/{id}/start','RewardRefundsApi','start',1],
 ['POST','/api/v1/reward-refunds/{id}/confirm','RewardRefundsApi','confirm',1],
 ['POST','/api/v1/reward-refunds/{id}/reopen','RewardRefundsApi','reopen',1],
]){const file=api==='RewardCheckoutApi'?'reward-checkout':'reward-refunds';communityContracts[`payment:${method} ${path}`]={response:`Awaited<ReturnType<import("./${file}.js").${api}["${member}"]>>["data"]`,...(input===null?{}:{input:`Parameters<import("./${file}.js").${api}["${member}"]>[${input}]`}),auth:api==='RewardCheckoutApi'?'Trusted configured product service Bearer token; never expose in browsers':method==='GET'?'admin:transaction:read; verified operator':'admin:transaction:refund and configured product operator assignment; self-review forbidden',purpose:api==='RewardCheckoutApi'?`Configured product ${member}; validates product scope and server-owned prices and payment identity. Never infer successful settlement from checkout creation or readiness. Reuse operation IDs on retry.`:`Bank refund ${member}; retains immutable review rounds and idempotency. Writes require current version and independent operator verification; conflicts return 409. Reopening a review never executes another bank refund.`};}
