// Audited mounted integration routes and concrete wire types. No workflow configuration is included.
export const integrationEndpoints = [
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/feedback/capabilities",
      "module": "feedback",
      "handler": "capabilities",
      "permissions": [
        "task:feedback:submit"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/feedback/policy",
      "module": "feedback",
      "handler": "get_policy",
      "permissions": [
        "task:access:use + local workspace.manage"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "PUT",
      "path": "/api/v1/feedback/policy",
      "module": "feedback",
      "handler": "put_policy",
      "permissions": [
        "task:access:use + local workspace.manage; If-Match header required (0 initializes)"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "body": "ReviewedIntegrationInput"
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/feedback/requests",
      "module": "feedback",
      "handler": "create",
      "permissions": [
        "task:feedback:submit"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "body": "ReviewedIntegrationInput"
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/feedback/requests",
      "module": "feedback",
      "handler": "index",
      "permissions": [
        "task:feedback:self:read OR scoped review/assignment permission"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "query": "ReviewedIntegrationQuery"
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/feedback/requests/{id}",
      "module": "feedback",
      "handler": "show",
      "permissions": [
        "task:feedback:self:read OR scoped review/assignment permission"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/feedback/requests/{id}/decisions",
      "module": "feedback",
      "handler": "decision",
      "permissions": [
        "task:feedback:review OR task:feedback:assign plus configured local scope"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "body": "ReviewedIntegrationInput"
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/feedback/attachments",
      "module": "feedback",
      "handler": "initialize",
      "permissions": [
        "task:feedback:submit"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "body": "ReviewedIntegrationInput"
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "PUT",
      "path": "/api/v1/feedback/attachments/{id}/content",
      "module": "feedback",
      "handler": "upload",
      "permissions": [
        "task:feedback:submit and attachment ownership"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "binary": true
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/feedback/attachments/{id}/complete",
      "module": "feedback",
      "handler": "complete",
      "permissions": [
        "task:feedback:submit and attachment ownership"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/feedback/requests/{id}/attachments/{attachment}/content",
      "module": "feedback",
      "handler": "content",
      "permissions": [
        "authorized current request access"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "raw",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "task",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/feedback/assignees",
      "module": "feedback",
      "handler": "assignees",
      "permissions": [
        "task:feedback:assign plus configured local scope"
      ],
      "source": "infera-task/src/feedback/routes.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "messenger",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/notifications/me/events",
      "module": "inbox_stream",
      "handler": "events",
      "permissions": [
        "notification:self:read"
      ],
      "source": "infera-messenger/src/inbox_stream.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "query": "ReviewedIntegrationQuery"
    }
  },
  {
    "service": "messenger",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/notifications/me/unread-count",
      "module": "inbox_stream",
      "handler": "unread",
      "permissions": [
        "notification:self:read"
      ],
      "source": "infera-messenger/src/inbox_stream.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "messenger",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/push/devices",
      "module": "mobile_push",
      "handler": "register",
      "permissions": [
        "notification:self:read"
      ],
      "source": "infera-messenger/src/mobile_push.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "body": "ReviewedIntegrationInput"
    }
  },
  {
    "service": "messenger",
    "endpoint": {
      "method": "DELETE",
      "path": "/api/v1/push/devices/{id}",
      "module": "mobile_push",
      "handler": "revoke",
      "permissions": [
        "notification:self:read"
      ],
      "source": "infera-messenger/src/mobile_push.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "messenger",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/web-push/config",
      "module": "web_push",
      "handler": "config",
      "permissions": [
        "notification:self:read"
      ],
      "source": "infera-messenger/src/web_push.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "messenger",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/web-push/subscriptions",
      "module": "web_push",
      "handler": "subscribe",
      "permissions": [
        "notification:self:read"
      ],
      "source": "infera-messenger/src/web_push.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "body": "ReviewedIntegrationInput"
    }
  },
  {
    "service": "messenger",
    "endpoint": {
      "method": "DELETE",
      "path": "/api/v1/web-push/subscriptions/{id}",
      "module": "web_push",
      "handler": "unsubscribe",
      "permissions": [
        "notification:self:read"
      ],
      "source": "infera-messenger/src/web_push.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "messenger",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/web-push/subscriptions/{id}/test",
      "module": "web_push",
      "handler": "test_push",
      "permissions": [
        "notification:self:read"
      ],
      "source": "infera-messenger/src/web_push.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "messenger",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/web-push/deliveries/{id}",
      "module": "web_push",
      "handler": "delivery",
      "permissions": [
        "notification:self:read"
      ],
      "source": "infera-messenger/src/web_push.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "chat",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/me/conversations",
      "module": "human_chat",
      "handler": "summaries",
      "permissions": [
        "chat:read"
      ],
      "source": "infera-chat/src/human_chat.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "query": "ReviewedIntegrationQuery"
    }
  },
  {
    "service": "chat",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/me/unread-count",
      "module": "human_chat",
      "handler": "unread",
      "permissions": [
        "chat:read"
      ],
      "source": "infera-chat/src/human_chat.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "chat",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/me/events",
      "module": "human_chat",
      "handler": "events",
      "permissions": [
        "chat:read"
      ],
      "source": "infera-chat/src/human_chat.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "query": "ReviewedIntegrationQuery"
    }
  },
  {
    "service": "chat",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/me/realtime/config",
      "module": "human_chat",
      "handler": "realtime_config",
      "permissions": [
        "chat:read"
      ],
      "source": "infera-chat/src/human_chat.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "chat",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/me/realtime/auth",
      "module": "human_chat",
      "handler": "realtime_auth",
      "permissions": [
        "chat:read"
      ],
      "source": "infera-chat/src/human_chat.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "body": "ReviewedIntegrationInput"
    }
  },
  {
    "service": "lms",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/notification-rules",
      "module": "mod",
      "handler": "index",
      "permissions": [
        "lms:notification:settings:read"
      ],
      "source": "infera-lms/src/notifications/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "query": "ReviewedIntegrationQuery"
    }
  },
  {
    "service": "lms",
    "endpoint": {
      "method": "PUT",
      "path": "/api/v1/notification-rules/{key}",
      "module": "mod",
      "handler": "update",
      "permissions": [
        "lms:notification:settings:update"
      ],
      "source": "infera-lms/src/notifications/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "body": "ReviewedIntegrationInput"
    }
  },
  {
    "service": "lms",
    "endpoint": {
      "method": "POST",
      "path": "/api/v1/notification-rules/{key}/preview",
      "module": "mod",
      "handler": "preview",
      "permissions": [
        "lms:notification:settings:read"
      ],
      "source": "infera-lms/src/notifications/mod.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false
    }
  },
  {
    "service": "lms",
    "endpoint": {
      "method": "GET",
      "path": "/api/v1/chat/contacts",
      "module": "contacts",
      "handler": "contacts",
      "permissions": [
        "lms:chat:contacts:read"
      ],
      "source": "infera-lms/src/notifications/contacts.rs",
      "responseEnvelope": "api",
      "multipart": false,
      "formUrlEncoded": false,
      "query": "ReviewedIntegrationQuery"
    }
  }
];
export const integrationContracts = {
  "task:GET /api/v1/feedback/capabilities": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackCapabilities>",
    "auth": "task:feedback:submit",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "task:GET /api/v1/feedback/policy": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackPolicyResult>",
    "auth": "task:access:use + local workspace.manage",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "task:PUT /api/v1/feedback/policy": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackPolicyResult>",
    "auth": "task:access:use + local workspace.manage; If-Match header required (0 initializes)",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "input": "import(\"./feedback.js\").FeedbackPolicy"
  },
  "task:POST /api/v1/feedback/requests": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackRequest>",
    "auth": "task:feedback:submit",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "input": "import(\"./feedback.js\").SubmitFeedbackRequest",
    "idempotencyKey": true
  },
  "task:GET /api/v1/feedback/requests": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackPage>",
    "auth": "task:feedback:self:read OR scoped review/assignment permission",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "query": "import(\"./feedback.js\").FeedbackListQuery"
  },
  "task:GET /api/v1/feedback/requests/{id}": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackDetail>",
    "auth": "task:feedback:self:read OR scoped review/assignment permission",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "task:POST /api/v1/feedback/requests/{id}/decisions": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackRequest>",
    "auth": "task:feedback:review OR task:feedback:assign plus configured local scope",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "input": "import(\"./feedback.js\").DecideFeedbackRequest",
    "idempotencyKey": true
  },
  "task:POST /api/v1/feedback/attachments": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackAttachment>",
    "auth": "task:feedback:submit",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "input": "import(\"./feedback.js\").InitializeFeedbackAttachment"
  },
  "task:PUT /api/v1/feedback/attachments/{id}/content": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackAttachment>",
    "auth": "task:feedback:submit and attachment ownership",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "task:POST /api/v1/feedback/attachments/{id}/complete": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackAttachment>",
    "auth": "task:feedback:submit and attachment ownership",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "task:GET /api/v1/feedback/requests/{id}/attachments/{attachment}/content": {
    "response": "ArrayBuffer | Uint8Array",
    "auth": "authorized current request access",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "binaryDownload": true
  },
  "task:GET /api/v1/feedback/assignees": {
    "response": "import(\"./types.js\").TaskResponse<import(\"./feedback.js\").FeedbackAssignees>",
    "auth": "task:feedback:assign plus configured local scope",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "messenger:GET /api/v1/notifications/me/events": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").InboxStreamPage>",
    "auth": "notification:self:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "query": "import(\"./delivery.js\").InboxStreamQuery",
    "timeout": 35000
  },
  "messenger:GET /api/v1/notifications/me/unread-count": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").NotificationUnreadCount>",
    "auth": "notification:self:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "messenger:POST /api/v1/push/devices": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").PushDevice>",
    "auth": "notification:self:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "input": "import(\"./delivery.js\").PushDeviceInput"
  },
  "messenger:DELETE /api/v1/push/devices/{id}": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").PushDeviceRevocation>",
    "auth": "notification:self:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "messenger:GET /api/v1/web-push/config": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").WebPushConfig>",
    "auth": "notification:self:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "messenger:POST /api/v1/web-push/subscriptions": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").PushDevice>",
    "auth": "notification:self:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "input": "import(\"./delivery.js\").WebPushRegistration"
  },
  "messenger:DELETE /api/v1/web-push/subscriptions/{id}": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").WebPushRemoval>",
    "auth": "notification:self:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "messenger:POST /api/v1/web-push/subscriptions/{id}/test": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").WebPushTestDelivery>",
    "auth": "notification:self:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "messenger:GET /api/v1/web-push/deliveries/{id}": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./delivery.js\").WebPushDelivery>",
    "auth": "notification:self:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "chat:GET /api/v1/me/conversations": {
    "response": "import(\"./personal.js\").PersonalChatResponse<import(\"./personal.js\").ConversationSummaryPage>",
    "auth": "chat:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "query": "import(\"./personal.js\").ConversationSummaryQuery"
  },
  "chat:GET /api/v1/me/unread-count": {
    "response": "import(\"./personal.js\").PersonalChatResponse<import(\"./personal.js\").ChatUnreadCount>",
    "auth": "chat:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "chat:GET /api/v1/me/events": {
    "response": "import(\"./personal.js\").PersonalChatResponse<import(\"./personal.js\").PersonalChatEventPage>",
    "auth": "chat:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "query": "import(\"./personal.js\").PersonalChatEventQuery",
    "timeout": 35000
  },
  "chat:GET /api/v1/me/realtime/config": {
    "response": "import(\"./personal.js\").PersonalChatResponse<import(\"./personal.js\").PersonalChatRealtimeConfig>",
    "auth": "chat:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "chat:POST /api/v1/me/realtime/auth": {
    "response": "import(\"./personal.js\").PersonalChatRealtimeAuth",
    "auth": "chat:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "input": "import(\"./personal.js\").PersonalChatRealtimeAuthInput"
  },
  "lms:GET /api/v1/notification-rules": {
    "response": "import(\"./notification-settings.js\").LmsNotificationResponse<import(\"./notification-settings.js\").StudentNotificationRule[]>",
    "auth": "lms:notification:settings:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "query": "import(\"./notification-settings.js\").NotificationRuleQuery"
  },
  "lms:PUT /api/v1/notification-rules/{key}": {
    "response": "import(\"./notification-settings.js\").LmsNotificationResponse<import(\"./notification-settings.js\").StudentNotificationRule>",
    "auth": "lms:notification:settings:update",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "input": "import(\"./notification-settings.js\").UpdateNotificationRule"
  },
  "lms:POST /api/v1/notification-rules/{key}/preview": {
    "response": "import(\"./notification-settings.js\").LmsNotificationResponse<import(\"./notification-settings.js\").NotificationRulePreview>",
    "auth": "lms:notification:settings:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements."
  },
  "lms:GET /api/v1/chat/contacts": {
    "response": "import(\"./notification-settings.js\").LmsNotificationResponse<import(\"./notification-settings.js\").EligibleContactPage>",
    "auth": "lms:chat:contacts:read",
    "purpose": "Use the authenticated sandbox integration. Server-enforced ownership and scope apply; stale versions return 409. See the package integration guide for cursor, idempotency, and configuration requirements.",
    "query": "import(\"./notification-settings.js\").EligibleContactQuery"
  }
};
