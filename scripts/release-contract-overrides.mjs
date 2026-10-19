import { routerContracts } from "./router-contract-overrides.mjs";
import { socialDiscoveryContracts } from "./social-discovery-contracts.mjs";
import { socialAdminContracts } from "./social-admin-contracts.mjs";
import { integrationContracts } from "./integration-contracts.mjs";
import { profileSummaryContracts } from "./profile-summary-contracts.mjs";
// Reviewed wire contracts; keyed by the mounted method and path, never ambiguous handler names.
export const releaseContracts = {
  ...routerContracts,
  ...socialAdminContracts,
  ...socialDiscoveryContracts,
  ...integrationContracts,
  ...profileSummaryContracts,
  "idp:POST /api/v1/auth/secure/handoff/{user_id}": {
    "response": "import(\"./contracts.types.js\").HandoffTokenResponse",
    "auth": "server-only x-infera-handoff-secret; configured client allowlist",
    "purpose": "Issue a single-use handoff code for an allowed OAuth client. Requires the server secret header; never expose it in a browser."
  },
  "idp:POST /api/v1/auth/handoff/exchange": {
    "response": "import(\"./contracts.types.js\").HandoffAccessTokenResponse",
    "auth": "public bootstrap; consumes a single-use handoff code",
    "purpose": "Exchange a handoff code for the matching client. Invalid or consumed codes return 400; inactive sessions return 401."
  },
  "idp:GET /api/v1/users/self/password": {
    "response": "import(\"./contracts.types.js\").PasswordStatusResponse",
    "auth": "authenticated user session",
    "purpose": "Read or update the authenticated account password. Password updates require 8\u2013128 characters and preserve linked OAuth identities."
  },
  "idp:PUT /api/v1/users/self/password": {
    "response": "import(\"./contracts.types.js\").PasswordStatusResponse",
    "auth": "authenticated user session",
    "purpose": "Read or update the authenticated account password. Password updates require 8\u2013128 characters and preserve linked OAuth identities."
  },
  "idp:POST /api/v1/settings/oauth-clients/website-bootstrap": {
    "auth": "IDP administrator or federation service browser-client.bootstrap credential",
    "purpose": "Idempotently provision the unprivileged website OAuth client for a canonical HTTPS origin; conflicting origins or disabled clients return 409."
  },
  "messenger:POST /api/v1/services/setup-check": {
    "response": "import(\"./contracts.types.js\").MessengerSetupResponse",
    "auth": "admin:service:read",
    "purpose": "Inspect configured messaging providers without sending a message or exposing credentials."
  },
  "messenger:POST /api/v1/services/website-otp-readiness": {
    "response": "import(\"./contracts.types.js\").WebsiteOtpReadiness",
    "auth": "server-only x-website-otp-token",
    "purpose": "Check verified SMS OTP readiness without sending messages. Set x-website-otp-token in request headers; returns a raw object."
  },
  "payment:GET /api/v1/gateways": {"query": "import(\"./types.js\").GatewayListQuery", "response": "import(\"./types.js\").GatewayListResponse"},
  "payment:POST /api/v1/gateways": {"input": "import(\"./types.js\").CreateGatewayInput", "response": "import(\"./types.js\").GatewayResponse"},
  "payment:GET /api/v1/gateways/{id}": {"response": "import(\"./types.js\").GatewayResponse", "pathTypes": {"id": "number"}},
  "payment:PATCH /api/v1/gateways/{id}": {"input": "import(\"./types.js\").UpdateGatewayInput", "response": "import(\"./types.js\").GatewayResponse", "pathTypes": {"id": "number"}},
  "payment:DELETE /api/v1/gateways/{id}": {"response": "import(\"./types.js\").GatewayResponse", "pathTypes": {"id": "number"}},
  "payment:GET /api/v1/gateways/options": {"response": "import(\"./types.js\").GatewayOptionsResponse"},
  "payment:GET /api/v1/transactions": {"query": "import(\"./types.js\").TransactionListQuery", "response": "import(\"./types.js\").TransactionListResponse"},
  "payment:GET /api/v1/transactions/{uuid}": {"response": "import(\"./types.js\").TransactionResponse", "pathTypes": {"uuid": "string"}},
  "payment:GET /api/v1/transactions/daily-income": {"query": "import(\"./types.js\").DailyIncomeQuery", "response": "import(\"./types.js\").DailyIncomeResponse"},
  "payment:POST /api/v1/transactions/{uuid}/verify": {"response": "import(\"./types.js\").VerifyPaymentResponse", "pathTypes": {"uuid": "string"}},
  "payment:POST /api/v1/transactions/{uuid}/reject": {"response": "import(\"./types.js\").VerifyPaymentResponse", "pathTypes": {"uuid": "string"}},
  "payment:GET /api/v1/transactions/{uuid}/verifications": {"response": "import(\"./types.js\").PaymentVerificationLogsResponse", "pathTypes": {"uuid": "string"}},
  "payment:POST /api/v1/payment": {"input": "import(\"./types.js\").CreatePaymentInput", "response": "import(\"./types.js\").CreatePaymentResponse"},
  "payment:GET /payments/{uuid}/redirect": {"response": "import(\"./types.js\").PaymentHtmlResponse", "textResponse": true, "pathTypes": {"uuid": "string"}, "auth": "public payment navigation/provider callback; no user permission declared", "purpose": "Return payment HTML, or for callbacks303 Location when the configured HTTPS origin is allowed. Callback fields are query parameters for both GET and POST. This can verify a payment with its provider; HTTP200 alone does not prove successful payment. Node follows redirects by default; use maxRedirects:0 and validateStatus to inspect303."},
  "payment:GET /payments/callbacks/{provider}": {"response": "import(\"./types.js\").PaymentHtmlResponse", "textResponse": true, "pathTypes": {"provider": "string"}, "auth": "public payment navigation/provider callback; no user permission declared", "purpose": "Return payment HTML, or for callbacks303 Location when the configured HTTPS origin is allowed. Callback fields are query parameters for both GET and POST. This can verify a payment with its provider; HTTP200 alone does not prove successful payment. Node follows redirects by default; use maxRedirects:0 and validateStatus to inspect303."},
  "payment:POST /payments/callbacks/{provider}": {"response": "import(\"./types.js\").PaymentHtmlResponse", "textResponse": true, "pathTypes": {"provider": "string"}, "auth": "public payment navigation/provider callback; no user permission declared", "purpose": "Return payment HTML, or for callbacks303 Location when the configured HTTPS origin is allowed. Callback fields are query parameters for both GET and POST. This can verify a payment with its provider; HTTP200 alone does not prove successful payment. Node follows redirects by default; use maxRedirects:0 and validateStatus to inspect303."},
  "payment:POST /api/v1/gateways/setup-check": {
    "response": "import(\"./contracts.types.js\").PaymentSetupResponse",
    "auth": "admin:gateway:read",
    "purpose": "Verify live gateway configuration with a read-only provider check. Does not expose merchant secrets."
  },
  "payment:GET /api/v1/internal/2done/availability": {
    "response": "import(\"./contracts.types.js\").ProductPaymentAvailabilityResponse",
    "auth": "server-only PRODUCT_PAYMENT_TOKEN bearer credential"
  },
  "payment:GET /api/v1/internal/2done/transactions/{id}": {
    "response": "import(\"./contracts.types.js\").ProductPaymentReceiptResponse",
    "auth": "server-only product payment bearer credential; restricted service and transaction ownership"
  },
  "payment:GET /api/v1/internal/fitness/transactions/{id}": {
    "response": "import(\"./contracts.types.js\").ProductPaymentReceiptResponse",
    "auth": "server-only product payment bearer credential; restricted service and transaction ownership"
  },
  "payment:GET /api/v1/internal/asset/purchases/{id}": {
    "response": "import(\"./contracts.types.js\").VerifiedAssetPurchaseResponse",
    "auth": "server-only Asset payment bearer credential; validates checkout allocation and provider proof"
  },
  "payment:GET /api/v1/internal/shop/transactions/{id}": {
    "response": "import(\"./contracts.types.js\").ShopPaymentReceiptResponse",
    "auth": "server-only shop payment bearer credential and website scope"
  },
  "payment:GET /api/v1/internal/shop/readiness": {
    "response": "import(\"./contracts.types.js\").ShopPaymentReadiness",
    "auth": "server-only shop payment bearer credential and website scope"
  },
  "asset:POST /api/v1/admin/trial-gifts/{product}": {
    "response": "import(\"./contracts.types.js\").ProductTrialGiftResponse",
    "auth": "admin:charge:update and asset:charge:update",
    "purpose": "Administer an owning product service trial gift. Tokens are returned only on creation or explicit copy; reused request IDs are idempotent.",
    "input": "import(\"./contracts.types.js\").ProductTrialGiftWriteInput"
  },
  "asset:PUT /api/v1/admin/trial-gifts/{product}/{id}": {
    "response": "import(\"./contracts.types.js\").ProductTrialGiftResponse",
    "auth": "admin:charge:update and asset:charge:update",
    "purpose": "Administer an owning product service trial gift. Tokens are returned only on creation or explicit copy; reused request IDs are idempotent.",
    "input": "import(\"./contracts.types.js\").ProductTrialGiftWriteInput"
  },
  "asset:GET /api/v1/admin/trial-gifts/{product}/{id}": {
    "response": "import(\"./contracts.types.js\").ProductTrialGiftResponse",
    "auth": "admin:charge:read and asset:charge:read",
    "purpose": "Administer an owning product service trial gift. Tokens are returned only on creation or explicit copy; reused request IDs are idempotent."
  },
  "asset:GET /api/v1/admin/trial-gifts/{product}": {
    "response": "import(\"./contracts.types.js\").ProductTrialGiftPageResponse",
    "auth": "admin:charge:read and asset:charge:read"
  },
  "asset:GET /api/v1/admin/trial-gifts/{product}/{id}/token": {
    "response": "import(\"./contracts.types.js\").ProductGiftTokenResponse",
    "auth": "admin:charge:update and asset:charge:update",
    "purpose": "Copy an unused gift token from the encrypted vault. Redeemed gifts return 409; unavailable vaults return 503. Response is no-store."
  },
  "asset:GET /api/v1/admin/trial-gifts/products": {
    "response": "import(\"./contracts.types.js\").ProductGiftAdaptersResponse",
    "auth": "admin:charge:read and asset:charge:read"
  },
  "asset:POST /api/v1/sandbox-resources/quote": {
    "response": "import(\"./contracts.types.js\").ResourceQuoteResponse",
    "auth": "authenticated user",
    "purpose": "Quote the current hourly resource price without allocating or debiting; decimal monetary amounts are encoded as strings."
  },
  "asset:GET /api/v1/wallet/purchases/{id}": {
    "response": "import(\"./contracts.types.js\").WalletPurchaseReceiptResponse",
    "auth": "authenticated purchase owner"
  },
  "asset:POST /api/v1/wallet/subscriptions": {
    "response": "import(\"./contracts.types.js\").WalletSubscriptionReceiptResponse",
    "auth": "authenticated wallet owner",
    "purpose": "Atomically debit the wallet and activate subscriptions. Reuse request_id on retries; 409 rejects changed quotes and 402 indicates insufficient balance."
  },
  "lms:GET /api/v1/interactive/catalog": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningCatalogItem[]>",
    "auth": "public catalog"
  },
  "lms:GET /api/v1/interactive/definitions": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningDefinitionRecord[]>",
    "auth": "lms:course:read"
  },
  "lms:GET /api/v1/interactive/definitions/{id}": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningDefinitionRecord>",
    "auth": "lms:course:read"
  },
  "lms:POST /api/v1/interactive/definitions/{id}/publish": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningDefinitionRecord>",
    "auth": "lms:course:update"
  },
  "lms:GET /api/v1/interactive/lessons/{id}": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningDefinitionRecord>",
    "auth": "authenticated enrollment/run owner"
  },
  "lms:POST /api/v1/interactive/lessons/{id}/start": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningRun>",
    "input": "import(\"./interactive.js\").StartLearningInput",
    "auth": "authenticated enrollment/run owner"
  },
  "lms:GET /api/v1/interactive/runs": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningState[]>",
    "auth": "authenticated enrollment/run owner"
  },
  "lms:GET /api/v1/interactive/runs/{id}": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningRun>",
    "auth": "authenticated enrollment/run owner"
  },
  "lms:PUT /api/v1/interactive/runs/{id}/draft": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningRun>",
    "input": "import(\"./interactive.js\").LearningDraftInput",
    "auth": "authenticated enrollment/run owner"
  },
  "lms:POST /api/v1/interactive/runs/{id}/hints": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningHint>",
    "input": "import(\"./interactive.js\").LearningHintInput",
    "auth": "authenticated enrollment/run owner"
  },
  "lms:POST /api/v1/interactive/runs/{id}/attempts": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningAttempt>",
    "input": "import(\"./interactive.js\").LearningAttemptInput",
    "auth": "authenticated enrollment/run owner"
  },
  "lms:GET /api/v1/interactive/runs/{id}/teacher-context": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningTeacherContext>",
    "auth": "authenticated enrollment/run owner"
  },
  "lms:POST /api/v1/interactive/lessons/{id}": {
    "response": "import(\"./interactive.js\").LearningEnvelope<import(\"./interactive.js\").LearningDefinitionRecord>",
    "input": "import(\"./interactive.js\").SaveLearningDefinitionInput",
    "auth": "lms:course:update",
    "purpose": "Create a validated draft lesson version. Existing run versions remain immutable."
  },
  "lms:POST /api/v1/idp/option/transfer-user-data": {
    "response": "import(\"./types.js\").TransferUserDataResponse",
    "input": "import(\"./types.js\").TransferUserDataInput",
    "methodName": "transferUserDataPost",
    "idempotencyKey": true
  },
  "version:GET /health": {
    "response": "import(\"./types.js\").HealthResponse",
    "auth": "public at the service router; deployed gateway rules may add restrictions",
    "purpose": "Read the Version service process health envelope. This does not verify database, broker or gateway readiness."
  },
  "version:GET /api/openapi.json": {
    "response": "import(\"./types.js\").VersionOpenApiDocument",
    "auth": "public at the service router; deployed gateway rules may add restrictions",
    "purpose": "Read the raw generated OpenAPI document, without an API envelope. The current document describes health only and is not the complete mounted API inventory."
  },
  "version:GET /api/v1/services": {
    "response": "import(\"./types.js\").ServicesResponse",
    "auth": "no IDP permission enforced by the mounted service handler; deployed gateway policy is separate",
    "purpose": "List active registered services without pagination or filters. last_version is null in this list; read a service by slug to resolve its newest active release."
  },
  "version:GET /api/v1/services/{service_slug}": {
    "pathTypes": { "service_slug": "string" },
    "response": "import(\"./types.js\").ServiceResponse",
    "auth": "no IDP permission enforced by the mounted service handler; deployed gateway policy is separate",
    "purpose": "Find an active service by its slug, not its UUID, and its highest-code active version. Missing or inactive services return 404."
  },
  "version:GET /api/v1/services/{service_slug}/all": {
    "pathTypes": { "service_slug": "string" },
    "response": "import(\"./types.js\").ServiceVersionsResponse",
    "auth": "no IDP permission enforced by the mounted service handler; deployed gateway policy is separate",
    "purpose": "Read all active versions for an active service slug. The service does not define history ordering or pagination; missing or inactive services return 404."
  },
  "version:GET /api/v1/versions/{version_id}": {
    "pathTypes": { "version_id": "string" },
    "response": "import(\"./types.js\").VersionResponse",
    "auth": "no IDP permission enforced by the mounted service handler; deployed gateway policy is separate",
    "purpose": "Read an active version by UUID. Malformed UUIDs return 400 and missing or inactive versions return 404. Scope is metadata, not an access filter in this handler."
  },
  "version:POST /api/v1/apk/releases": {
    "response": "import(\"./contracts.types.js\").ApkPublishReceipt",
    "input": "import(\"./contracts.types.js\").ApkPublishInput",
    "auth": "server-only APK_PUBLISH_TOKEN bearer credential",
    "purpose": "Publish a stable, idempotent APK release with an HTTPS download URL. Returns a raw receipt; invalid metadata returns 400 and missing publisher configuration returns 503."
  },
  "lms:GET /api/v1/interactive/certificates": {
    "response": "import(\"./contracts.types.js\").LearningCertificatesResponse",
    "auth": "authenticated learner; own awards only"
  },
  "lms:POST /api/v1/interactive/courses/{id}/certificate": {
    "response": "import(\"./contracts.types.js\").LearningCertificateClaimResponse",
    "auth": "authenticated active enrollment owner",
    "purpose": "Claim an idempotent server-verified course award; returns 409 when completion prerequisites are missing."
  },
  "session:GET /api/v1/rooms/{room_id}/presence-events": {
    "response": "import(\"./contracts.types.js\").SessionPresenceResponse",
    "auth": "room:read or room:read_all or room:read_own plus room preview/participation access"
  },
  "state:GET /api/v2/games": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameCatalogEntry[]>",
    "auth": "public catalog",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:GET /api/v2/games/{game_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameCatalogEntry>",
    "auth": "public catalog",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:POST /api/v2/games/{game_id}/sessions": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameSessionView>",
    "input": "import(\"./contracts.types.js\").GameCreateInput",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope.",
    "pathFields": {
      "gameId": "gameId"
    }
  },
  "state:POST /api/v2/games/{game_id}/matchmaking": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameQueueReceipt>",
    "input": "import(\"./contracts.types.js\").GameQueueInput",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:GET /api/v2/game-matchmaking/{ticket_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameQueueTicket>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:POST /api/v2/games/{game_id}/lobbies": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameLobbyCreated>",
    "input": "import(\"./contracts.types.js\").GameQueueInput",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:POST /api/v2/game-lobbies/{code}/join": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameLobbyJoined>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:GET /api/v2/game-lobbies/{code}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameLobbyView>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:GET /api/v2/game-sessions/{session_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameSessionView>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:POST /api/v2/game-sessions/{session_id}/ready": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameSessionView>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:POST /api/v2/game-sessions/{session_id}/commands": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameSessionView>",
    "input": "import(\"./contracts.types.js\").GameCommandInput",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:GET /api/v2/game-history": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameSessionView[]>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:GET /api/v2/game-progress": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameProgress[]>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:GET /api/v2/game-world-progress": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").GameWorldProgress[]>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:POST /api/v2/games/{game_id}/matchmaking/tickets": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").KheradgahTicket>",
    "input": "import(\"./contracts.types.js\").KheradgahQueueInput",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:GET /api/v2/games/{game_id}/matchmaking/tickets/{ticket_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").KheradgahTicket>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:DELETE /api/v2/games/{game_id}/matchmaking/tickets/{ticket_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").KheradgahTicket>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:GET /api/v2/matches/{match_id}/view": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").KheradgahView>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:POST /api/v2/matches/{match_id}/connections": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./contracts.types.js\").KheradgahConnectionTicket>",
    "auth": "state:execute and authenticated game membership",
    "purpose": "Use the server-authoritative v2 game API. Commands require the current version; stale versions return 409. The response is {data}, not a v1 envelope."
  },
  "state:GET /api/v2/realtime": {
    "response": "import(\"./contracts.types.js\").KheradgahServerFrame",
    "auth": "one-use, 30-second connection ticket issued by the authenticated match connection operation; Origin validation",
    "purpose": "Open the v2 match WebSocket and send its one-use hello ticket within five seconds. Acquire a fresh connection ticket after reconnecting.",
    "websocket": true,
    "methodName": "connectMatchRealtime"
  },
  "profile:GET /api/v1/fitness/self": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessSelf>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/intake": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessIntakeDraft | null>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:PUT /api/v1/fitness/intake": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessIntakeDraft>",
    "input": "import(\"./contracts.types.js\").FitnessSaveDraftInput",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/orders": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessOrder[]>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:POST /api/v1/fitness/orders": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessOrder>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/orders/{id}": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessOrder>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:POST /api/v1/fitness/orders/{id}/action": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessOrder>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:POST /api/v1/fitness/orders/{id}/plan": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessRevisionReceipt>",
    "input": "import(\"./contracts.types.js\").FitnessPlanInput",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/revisions/{id}": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessRevision>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:POST /api/v1/fitness/revisions/{id}/review": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessRevisionReceipt | {status:\"rejected\"}>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/coaches": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessTariff[]>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/catalog": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessCatalogItem[]>",
    "query": "import(\"./contracts.types.js\").FitnessCatalogQuery",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/settings": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessGym>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:PUT /api/v1/fitness/settings": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessGym>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403.",
    "input": "import(\"./contracts.types.js\").FitnessSettingsInput"
  },
  "profile:GET /api/v1/fitness/voice-settings": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessVoiceSettings>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/context": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessContext>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:POST /api/v1/fitness/proposals": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessRevisionReceipt>",
    "input": "import(\"./contracts.types.js\").FitnessProposalInput",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:POST /api/v1/fitness/admin/provision": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessGym>",
    "input": "import(\"./contracts.types.js\").FitnessProvisionInput",
    "auth": "fitness:admin plus administrator role",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:POST /api/v1/fitness/admin/catalog": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessImportReceipt>",
    "auth": "fitness:admin plus administrator role",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/team": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessCoach[]>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:PUT /api/v1/fitness/team": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessCoach>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:POST /api/v1/fitness/tariffs": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessTariff>",
    "input": "import(\"./contracts.types.js\").FitnessTariffInput",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/notifications": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessEvent[]>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:POST /api/v1/fitness/notifications/{id}/read": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessReadReceipt>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/fitness/products": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessProductOffer[]>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:POST /api/v1/fitness/trial/redeem": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessTrial>",
    "auth": "authenticated gym membership, manager/coach relationship or owned order as required by the operation",
    "purpose": "Use the paid coaching workflow with server-owned prices, membership and revision checks. Reuse idempotency keys for purchases; stale versions return 409, unauthorized relationships return 403."
  },
  "profile:GET /api/v1/internal/plans/gifts": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessTrialGiftPage>",
    "auth": "server-only product trial-gift or fitness-chat bearer credential; never browser administration"
  },
  "profile:POST /api/v1/internal/plans/gifts": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessTrialGift>",
    "auth": "server-only product trial-gift or fitness-chat bearer credential; never browser administration",
    "input": "import(\"./contracts.types.js\").FitnessGiftCreateInput"
  },
  "profile:GET /api/v1/internal/plans/gifts/{id}": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessTrialGift>",
    "auth": "server-only product trial-gift or fitness-chat bearer credential; never browser administration"
  },
  "profile:PUT /api/v1/internal/plans/gifts/{id}": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessTrialGift>",
    "auth": "server-only product trial-gift or fitness-chat bearer credential; never browser administration",
    "input": "import(\"./contracts.types.js\").FitnessGiftUpdateInput"
  },
  "profile:POST /api/v1/internal/fitness-chat/reserve": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessReserveReceipt>",
    "auth": "server-only product trial-gift or fitness-chat bearer credential; never browser administration"
  },
  "profile:POST /api/v1/internal/fitness-chat/settle": {
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./contracts.types.js\").FitnessSettleReceipt>",
    "auth": "server-only product trial-gift or fitness-chat bearer credential; never browser administration"
  },
  "modules:POST /api/v1/shop/checkout/quote": {
    "response": "import(\"./contracts.types.js\").ShopCheckout",
    "input": "import(\"./contracts.types.js\").ShopCheckoutQuoteInput",
    "auth": "authenticated checkout owner; quote/pay/cancel require configured browser Origin",
    "purpose": "Use owner-scoped server-priced checkout. Reuse quote id on retries; pass max_total when paying. Set the configured website Origin header. Amounts are integer IRR and stale quotes return 409."
  },
  "modules:GET /api/v1/shop/checkout/{id}": {
    "response": "import(\"./contracts.types.js\").ShopCheckout",
    "auth": "authenticated checkout owner; quote/pay/cancel require configured browser Origin",
    "purpose": "Use owner-scoped server-priced checkout. Reuse quote id on retries; pass max_total when paying. Set the configured website Origin header. Amounts are integer IRR and stale quotes return 409."
  },
  "modules:POST /api/v1/shop/checkout/{id}/pay": {
    "response": "import(\"./contracts.types.js\").ShopCheckout",
    "auth": "authenticated checkout owner; quote/pay/cancel require configured browser Origin",
    "purpose": "Use owner-scoped server-priced checkout. Reuse quote id on retries; pass max_total when paying. Set the configured website Origin header. Amounts are integer IRR and stale quotes return 409."
  },
  "modules:POST /api/v1/shop/checkout/{id}/cancel": {
    "response": "import(\"./contracts.types.js\").ShopCheckout",
    "auth": "authenticated checkout owner; quote/pay/cancel require configured browser Origin",
    "purpose": "Use owner-scoped server-priced checkout. Reuse quote id on retries; pass max_total when paying. Set the configured website Origin header. Amounts are integer IRR and stale quotes return 409."
  },
  "modules:GET /api/v1/public/shop/products": {
    "response": "import(\"./contracts.types.js\").ShopCatalogResponse",
    "auth": "public catalog",
    "purpose": "Page through at most 100 published catalog variants; hasMore indicates the next page. Cost and supplier data are never returned."
  },
  "modules:POST /api/v1/requests/website-defaults": {
    "response": "import(\"./contracts.types.js\").WebsiteFormsReady",
    "auth": "modules:request:create and authenticated administrator/request creator",
    "purpose": "Create missing public website form definitions without replacing owner configuration. Returns a raw readiness object."
  },
  "profile:PUT /api/v1/profile/update/education-information/{uuid}": {
    "input": "import(\"./types.js\").EducationInformationInput"
  },
  "asset:PUT /api/v1/internal/fitness/products": {
    "response": "import(\"./contracts.types.js\").FitnessAssetProductResponse",
    "input": "import(\"./contracts.types.js\").FitnessAssetProductInput",
    "auth": "server-only FITNESS_PROFILE_SERVICE_TOKEN bearer credential",
    "purpose": "Publish an immutable, versioned fitness Asset product; changed prices or metadata for an existing tier return 409. Decimal fields accept strings or numbers and serialize as strings."
  },
  "idp:POST /api/v1/auth/otp-login": {
    "response": "import(\"./contracts.types.js\").HandoffAccessTokenResponse",
    "auth": "public OAuth bootstrap",
    "purpose": "Exchange OTP credentials using application/x-www-form-urlencoded; full token response and cancellation options are preserved."
  },
  "profile:POST /api/v1/profile/search": {
    "methodName": "profileSearchSearchPost",
    "typeBase": "ProfileSearchSearchPost"
  },
  "profile:POST /api/v1/profile/people/resolve": {
    "input": "import(\"./types.js\").ResolvePeopleInput",
    "auth": "profile:lookup and authenticated directory access",
    "purpose": "Resolve 1\u2013200 explicit user UUIDs into active directory identities. Returns results and has_more:false; never grants collaborator eligibility.",
    "methodName": "workspaceResolvePeople"
  },
  "modules:POST /api/v1/requests/{request_id}/logs": {
    "methodName": "requestSubmitPost",
    "typeBase": "RequestSubmitPost"
  },
  "state:GET /api/v1/worlds": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").World[]>",
    "auth": "state:read"
  },
  "state:POST /api/v1/worlds": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").World>",
    "auth": "state:write"
  },
  "state:GET /api/v1/worlds/{world_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").World>",
    "auth": "state:read"
  },
  "state:PUT /api/v1/worlds/{world_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").World>",
    "auth": "state:write"
  },
  "state:DELETE /api/v1/worlds/{world_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<boolean>",
    "auth": "state:write"
  },
  "state:GET /api/v1/worlds/{world_id}/rooms": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").Room[]>",
    "auth": "state:read"
  },
  "state:POST /api/v1/worlds/{world_id}/rooms": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").Room>",
    "auth": "state:write"
  },
  "state:GET /api/v1/rooms/{room_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").Room>",
    "auth": "state:read"
  },
  "state:PUT /api/v1/rooms/{room_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").Room>",
    "auth": "state:write"
  },
  "state:DELETE /api/v1/rooms/{room_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<boolean>",
    "auth": "state:write"
  },
  "state:POST /api/v1/rooms/{room_id}/join": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").JoinTicket>",
    "auth": "state:execute"
  },
  "state:GET /api/v1/worlds/{world_id}/wasm": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").WasmModuleInfo[]>",
    "auth": "state:read"
  },
  "state:POST /api/v1/worlds/{world_id}/wasm": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").WasmModuleInfo>",
    "auth": "state:write"
  },
  "state:DELETE /api/v1/worlds/{world_id}/wasm/{module_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<boolean>",
    "auth": "state:write"
  },
  "state:GET /api/v1/worlds/{world_id}/endpoints": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").WasmEndpoint[]>",
    "auth": "state:read"
  },
  "state:POST /api/v1/worlds/{world_id}/endpoints": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").WasmEndpoint>",
    "auth": "state:write"
  },
  "state:DELETE /api/v1/worlds/{world_id}/endpoints/{endpoint_id}": {
    "response": "import(\"./contracts.types.js\").GameResult<boolean>",
    "auth": "state:write"
  },
  "state:POST /api/v1/rooms/{room_id}/endpoints/{slug}": {
    "response": "import(\"./contracts.types.js\").GameResult<import(\"./types.js\").StatePatch>",
    "auth": "state:execute"
  },
  "state:GET /api/v1/realtime": {
    "response": "import(\"./types.js\").ServerEvent",
    "auth": "short-lived room ticket issued by the authenticated join endpoint",
    "purpose": "Open room replication with the ticket returned by join. This operation uses a WebSocket upgrade, not an Axios HTTP request.",
    "websocket": "room"
  }
};
