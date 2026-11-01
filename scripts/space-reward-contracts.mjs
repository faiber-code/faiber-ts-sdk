// Reviewed mounted handlers; published method names remain stable.
export const spaceRewardContracts = {
  "task:ANY /api/v1/campaign-assignments": {
    "purpose": "Lists own assignments or a permitted moderation/appeals queue.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"work\"]>>[\"data\"]",
    "query": "NonNullable<Parameters<import(\"./campaigns.js\").RewardsApi[\"work\"]>[0]>",
    "dynamicMethod": true
  },
  "task:ANY /api/v1/campaign-assignments/{id}": {
    "purpose": "Gets private evidence, submission versions and review history.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"assignment\"]>>[\"data\"]",
    "dynamicMethod": true
  },
  "task:ANY /api/v1/campaign-assignments/{id}/files": {
    "purpose": "Uploads one private proof file. The server scans and validates it before acceptance.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"upload\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"upload\"]>[1]",
    "dynamicMethod": true,
    "optionalInputInOptions": true
  },
  "task:ANY /api/v1/campaign-assignments/{id}/review": {
    "purpose": "Reviews or appeals a submission; self-approval is forbidden.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"review\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"review\"]>[1]",
    "dynamicMethod": true,
    "optionalInputInOptions": true
  },
  "task:ANY /api/v1/campaign-assignments/{id}/submit": {
    "purpose": "Submits clean attachment IDs or HTTPS proof links using the current assignment version.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"submit\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"submit\"]>[1]",
    "dynamicMethod": true,
    "optionalInputInOptions": true
  },
  "task:ANY /api/v1/campaign-files/{id}": {
    "purpose": "Downloads evidence only for its participant, moderator or authorized appeal operator.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"file\"]>>[\"data\"]",
    "dynamicMethod": true,
    "binaryDownload": true
  },
  "task:ANY /api/v1/campaign-jobs/{id}/start": {
    "purpose": "Starts an eligible job; pending funding must complete before submission.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"startJob\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"startJob\"]>[1]",
    "dynamicMethod": true,
    "optionalInputInOptions": true
  },
  "task:ANY /api/v1/campaigns": {
    "purpose": "Lists authorized campaigns, 25 per page; view=public never includes private campaigns. Creates a draft; Dox requires a private authorized space.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"campaigns\"]>>[\"data\"] | Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"createCampaign\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"createCampaign\"]>[0]",
    "query": "NonNullable<Parameters<import(\"./campaigns.js\").RewardsApi[\"campaigns\"]>[0]>",
    "dynamicMethod": true,
    "optionalInputInOptions": true
  },
  "task:ANY /api/v1/campaigns/{id}": {
    "purpose": "Gets visible campaign metadata and jobs. Proof and participant identities are private. Mutates membership, publication, budget or closure; owner permissions apply.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"campaign\"]>>[\"data\"] | Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"changeCampaign\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"changeCampaign\"]>[1]",
    "dynamicMethod": true,
    "optionalInputInOptions": true
  },
  "task:ANY /api/v1/campaigns/{id}/jobs": {
    "purpose": "Adds a job to an owned draft; accepted reward terms are immutable.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"addJob\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"addJob\"]>[1]",
    "dynamicMethod": true,
    "optionalInputInOptions": true
  },
  "task:GET /api/v1/faiber-feedback/capabilities": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Short-lived x-faiber-feedback-grant bound to exact GET path/query plus workspace-owned developer read policy; not a tenant identity. mine=true is forbidden.",
    "response": "import(\"./types.js\").TaskResponse<import(\"./bridge-contracts.js\").DeveloperFeedbackCapabilities>"
  },
  "task:GET /api/v1/faiber-feedback/requests": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Short-lived x-faiber-feedback-grant bound to exact GET path/query plus workspace-owned developer read policy; not a tenant identity. mine=true is forbidden.",
    "response": "import(\"./types.js\").TaskResponse<import(\"./bridge-contracts.js\").DeveloperFeedbackPage>",
    "query": "import(\"./bridge-contracts.js\").DeveloperFeedbackQuery"
  },
  "task:GET /api/v1/faiber-feedback/requests/{id}": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Short-lived x-faiber-feedback-grant bound to exact GET path/query plus workspace-owned developer read policy; not a tenant identity. mine=true is forbidden.",
    "response": "import(\"./types.js\").TaskResponse<import(\"./bridge-contracts.js\").DeveloperFeedbackDetail>"
  },
  "task:GET /api/v1/integrations/faiber/{project}/sync": {
    "purpose": "Read this actor's Faiber project synchronization settings. Requires task:access:use; settings are actor-scoped.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").TaskIntegrationsApi[\"sync\"]>>[\"data\"]"
  },
  "task:PUT /api/v1/integrations/faiber/{project}/sync": {
    "purpose": "Save versioned settings after checking source connection and destination project permissions. 409 for stale settings; disabling remains possible after revocation.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").TaskIntegrationsApi[\"saveSync\"]>>[\"data\"]",
    "input": "Parameters<import(\"./integrations.js\").TaskIntegrationsApi[\"saveSync\"]>[1]"
  },
  "task:POST /api/v1/integrations/faiber/{project}/sync/run": {
    "purpose": "Queue a sync attempt; does not imply imported data is already available.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").TaskIntegrationsApi[\"runSync\"]>>[\"data\"]"
  },
  "task:POST /api/v1/internal/campaign-notification": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Trusted CAMPAIGN_SCOPE_SERVICE_TOKEN Bearer credential; caller must enforce actor permissions. Never put this credential in browser code.",
    "response": "import(\"./types.js\").TaskResponse<import(\"./bridge-contracts.js\").CampaignNotificationReceipt>",
    "input": "import(\"./bridge-contracts.js\").CampaignNotificationInput"
  },
  "task:POST /api/v1/internal/campaign-referral-facts": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Trusted CAMPAIGN_SCOPE_SERVICE_TOKEN Bearer credential; caller must enforce actor permissions. Never put this credential in browser code.",
    "response": "import(\"./types.js\").TaskResponse<import(\"./bridge-contracts.js\").CampaignReferralFacts>",
    "input": "import(\"./bridge-contracts.js\").CampaignReferralInput"
  },
  "task:POST /api/v1/internal/campaign-scope": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Trusted CAMPAIGN_SCOPE_SERVICE_TOKEN Bearer credential; caller must enforce actor permissions. Never put this credential in browser code.",
    "response": "import(\"./types.js\").TaskResponse<import(\"./bridge-contracts.js\").CampaignScopeResult>",
    "input": "import(\"./bridge-contracts.js\").CampaignScopeInput"
  },
  "task:GET /api/v1/offline-sync": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./offline.js\").TaskOfflineOperations[\"capabilities\"]>>[\"data\"]"
  },
  "task:POST /api/v1/offline-sync": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./offline.js\").TaskOfflineOperations[\"apply\"]>>[\"data\"]",
    "input": "Parameters<import(\"./offline.js\").TaskOfflineOperations[\"apply\"]>[0]"
  },
  "task:GET /api/v1/plans/admin/users/{user_id}": {
    "purpose": "Inspect an authorized admin target's subscription and credit balance. Upstream failure sets credit_unavailable without inventing a balance.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").TaskIntegrationsApi[\"billing\"]>>[\"data\"]"
  },
  "task:POST /api/v1/plans/admin/users/{user_id}/adjustments": {
    "purpose": "Record an explicit, audited entitlement adjustment. Stable request IDs prevent double grants; plan changes require the returned state precondition. queued means durable delivery is pending.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").TaskIntegrationsApi[\"adjustBilling\"]>>[\"data\"]",
    "input": "Parameters<import(\"./integrations.js\").TaskIntegrationsApi[\"adjustBilling\"]>[1]"
  },
  "task:GET /api/v1/projects/{id}/dox": {
    "purpose": "Reads one's private Dox score in an authorized space. Read settings, wallet, products and a 100-entry history page. Pass history_cursor as before to continue. Requires project.read and current membership.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"dox\"]>>[\"data\"] | Awaited<ReturnType<import(\"./space-rewards.js\").SpaceRewardsApi[\"read\"]>>[\"data\"]"
  },
  "task:POST /api/v1/projects/{id}/dox": {
    "purpose": "Configure rewards as the creator with project.update. Starts disabled; managed requires selected members. 409 on stale version; allocation is 500 per member, once.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./space-rewards.js\").SpaceRewardsApi[\"configure\"]>>[\"data\"]",
    "input": "Parameters<import(\"./space-rewards.js\").SpaceRewardsApi[\"configure\"]>[1]"
  },
  "task:POST /api/v1/projects/{id}/dox/products": {
    "purpose": "Create or update an owner-managed product. Positive integer amounts, title <=300; updates require its current version.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./space-rewards.js\").SpaceRewardsApi[\"product\"]>>[\"data\"]",
    "input": "Parameters<import(\"./space-rewards.js\").SpaceRewardsApi[\"product\"]>[1]"
  },
  "task:POST /api/v1/projects/{id}/dox/purchase": {
    "purpose": "Purchase a versioned product with reward.redeem; durable settlement may remain processing. Successful transfers notify current members.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./space-rewards.js\").SpaceRewardsApi[\"purchase\"]>>[\"data\"]",
    "input": "Parameters<import(\"./space-rewards.js\").SpaceRewardsApi[\"purchase\"]>[1]"
  },
  "task:GET /api/v1/projects/{id}/moderation": {
    "purpose": "Get the next completed task and remaining count, optionally a specific task. Requires selected managed-reward moderator, membership and approval.review. Own tasks are excluded.",
    "auth": "task:access:use and local approval.review; enabled managed rewards, selected active moderator; no self review",
    "response": "Awaited<ReturnType<import(\"./space-rewards.js\").SpaceRewardsApi[\"queue\"]>>[\"data\"]"
  },
  "task:POST /api/v1/projects/{id}/moderation/{task}": {
    "purpose": "Approve/lock with an integer Dox amount (zero allowed), reject to Todo, or skip to the queue end. Requires moderator access and current task version. 409 on concurrent review; never pays twice.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./space-rewards.js\").SpaceRewardsApi[\"decide\"]>>[\"data\"]",
    "input": "Parameters<import(\"./space-rewards.js\").SpaceRewardsApi[\"decide\"]>[2]"
  },
  "task:GET /api/v1/projects/{id}/moderation/tasks": {
    "purpose": "Page all visible tasks by review status. Requires moderator access; page is one-based, page_size 1..100 (default20).",
    "auth": "task:access:use and local approval.review; enabled managed rewards, selected active moderator; no self review",
    "response": "Awaited<ReturnType<import(\"./space-rewards.js\").SpaceRewardsApi[\"tasks\"]>>[\"data\"]",
    "query": "NonNullable<Parameters<import(\"./space-rewards.js\").SpaceRewardsApi[\"tasks\"]>[1]>"
  },
  "task:GET /api/v1/projects/{id}/moderation/transactions": {
    "purpose": "Page the full space ledger or processing/failed attempts; moderator-only. account is space or user:UUID; direction requires account. Summary includes all space balances, independent of filters.",
    "auth": "task:access:use and local approval.review; enabled managed rewards, selected active moderator; no self review",
    "response": "Awaited<ReturnType<import(\"./space-rewards.js\").SpaceRewardsApi[\"transactions\"]>>[\"data\"]",
    "query": "NonNullable<Parameters<import(\"./space-rewards.js\").SpaceRewardsApi[\"transactions\"]>[1]>"
  },
  "task:GET /api/v1/rewards": {
    "purpose": "Gets the global Do wallet, catalog, offers and account-wide streak.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"overview\"]>>[\"data\"]"
  },
  "task:POST /api/v1/rewards/checkin": {
    "purpose": "Records one server-dated check-in, with replay protection.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"checkin\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"checkin\"]>[0]"
  },
  "task:POST /api/v1/rewards/packs": {
    "purpose": "Prepares a server-priced coin-pack payment. Never grants coins at checkout.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"buyPack\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"buyPack\"]>[0]"
  },
  "task:POST /api/v1/rewards/packs/{id}/reconcile": {
    "purpose": "Reconciles a provider-verified pack payment; duplicate callbacks do not mint twice.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"reconcilePack\"]>>[\"data\"]"
  },
  "task:POST /api/v1/rewards/packs/{id}/refund": {
    "purpose": "Reserves only an untouched original purchased pack for refund. Stable request IDs replay safely; committed, transferred or spent origins cannot be refunded.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"refundPack\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"refundPack\"]>[1]"
  },
  "task:POST /api/v1/rewards/redeem": {
    "purpose": "Buys an enabled catalog item; entitlement delivery may remain pending.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"redeem\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"redeem\"]>[0]"
  },
  "task:POST /api/v1/rewards/risk-appeal": {
    "purpose": "Appeals a risk hold using a stable request ID. Requires authenticated Task access; the operator's reason stays visible in overview. 409 if an appeal is already open.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"appealRisk\"]>>[\"data\"]",
    "input": "Parameters<import(\"./campaigns.js\").RewardsApi[\"appealRisk\"]>[0]"
  },
  "task:GET /api/v1/work-items/{id}/dox": {
    "purpose": "Reads the authorized task's private recognition request and available approval actions. Requires Task access and work_item.read; inaccessible IDs return 404. Read a task's estimate, transfer status and available actions. Requires work_item.read. locked means approval prevents task mutations.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./campaigns.js\").RewardsApi[\"taskDoxState\"]>>[\"data\"] | Awaited<ReturnType<import(\"./space-rewards.js\").SpaceRewardsApi[\"task\"]>>[\"data\"]"
  },
  "task:POST /api/v1/work-items/{id}/dox": {
    "purpose": "Offer as creator before completion, or approve as authorized creator/moderator. Self-review is forbidden; failed payouts are retryable.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./space-rewards.js\").SpaceRewardsApi[\"changeTask\"]>>[\"data\"]",
    "input": "Parameters<import(\"./space-rewards.js\").SpaceRewardsApi[\"changeTask\"]>[1]"
  },
  "asset:GET /api/v1/do/audit": {
    "purpose": "Reads outstanding backing and the latest 100 operator audit records. Requires admin:coin_settings:read.",
    "auth": "admin:coin_settings:read",
    "response": "Awaited<ReturnType<import(\"./do-dox.js\").DoEconomyApi[\"audit\"]>>[\"data\"]"
  },
  "asset:POST /api/v1/do/campaign-funding": {
    "purpose": "Funds a campaign from explicit marketing reserves. Requires admin:coin_settings:update. Reuse request_id on retries; changed semantics return 409.",
    "auth": "admin:coin_settings:update",
    "response": "Awaited<ReturnType<import(\"./do-dox.js\").DoEconomyApi[\"fundCampaign\"]>>[\"data\"]",
    "input": "Parameters<import(\"./do-dox.js\").DoEconomyApi[\"fundCampaign\"]>[0]"
  },
  "asset:GET /api/v1/do/policy": {
    "purpose": "Reads packs, benefit prices, review rules and promotion reserves. Requires admin:coin_settings:read.",
    "auth": "admin:coin_settings:read",
    "response": "Awaited<ReturnType<import(\"./do-dox.js\").DoEconomyApi[\"policy\"]>>[\"data\"]"
  },
  "asset:PUT /api/v1/do/policy": {
    "purpose": "Saves an audited version of policy. Requires admin:coin_settings:update; stale versions and underfunded packs return 409.",
    "auth": "admin:coin_settings:update",
    "response": "Awaited<ReturnType<import(\"./do-dox.js\").DoEconomyApi[\"savePolicy\"]>>[\"data\"]",
    "input": "Parameters<import(\"./do-dox.js\").DoEconomyApi[\"savePolicy\"]>[0]"
  },
  "asset:POST /api/v1/do/risk": {
    "purpose": "Holds or releases a profile's payouts/redemptions with an audited reason. Requires admin:coin_settings:update.",
    "auth": "admin:coin_settings:update",
    "response": "Awaited<ReturnType<import(\"./do-dox.js\").DoEconomyApi[\"setRisk\"]>>[\"data\"]",
    "input": "Parameters<import(\"./do-dox.js\").DoEconomyApi[\"setRisk\"]>[0]"
  },
  "asset:POST /api/v1/internal/ai-credits/balance": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Trusted x-ai-credit-token; grant credential for balance/grant, meter credential for balance/reserve/settle; never expose to browser.",
    "response": "import(\"./ledger-contracts.js\").AssetCreditResponse<import(\"./ledger-contracts.js\").AssetAiCreditBalance>",
    "input": "import(\"./ledger-contracts.js\").AssetAiCreditAccount"
  },
  "asset:POST /api/v1/internal/ai-credits/grant": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Trusted x-ai-credit-token; grant credential for balance/grant, meter credential for balance/reserve/settle; never expose to browser.",
    "response": "import(\"./ledger-contracts.js\").AssetCreditResponse<import(\"./ledger-contracts.js\").AssetAiCreditBalance>",
    "input": "import(\"./ledger-contracts.js\").AssetAiCreditGrant"
  },
  "asset:POST /api/v1/internal/ai-credits/reserve": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Trusted x-ai-credit-token; grant credential for balance/grant, meter credential for balance/reserve/settle; never expose to browser.",
    "response": "import(\"./ledger-contracts.js\").AssetCreditResponse<import(\"./ledger-contracts.js\").AssetAiCreditReservation>",
    "input": "import(\"./ledger-contracts.js\").AssetAiCreditReserve"
  },
  "asset:POST /api/v1/internal/ai-credits/settle": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Trusted x-ai-credit-token; grant credential for balance/grant, meter credential for balance/reserve/settle; never expose to browser.",
    "response": "import(\"./ledger-contracts.js\").AssetCreditResponse<import(\"./ledger-contracts.js\").AssetAiCreditReservation>",
    "input": "import(\"./ledger-contracts.js\").AssetAiCreditSettle"
  },
  "asset:POST /api/v1/internal/do/execute": {
    "purpose": "Configure the closed ledger or transfer existing Dox atomically. Stable operation IDs are idempotent; task/purchase domain IDs prevent duplicate payouts. 409 on insufficient funds or conflicting replays.",
    "auth": "Trusted x-do-service-token; Social for campaign commands, Task for wallet/space commands. Stable ID required; changed replay or insufficient funds returns409.",
    "response": "import(\"./do-dox.js\").DoResponse<import(\"./ledger-contracts.js\").AssetRewardReceipt>",
    "input": "import(\"./ledger-contracts.js\").AssetRewardCommand"
  },
  "asset:POST /api/v1/internal/do/read": {
    "purpose": "Read one member's balance and cursor-paginated history; at most 100 postings per page. Read confirmed space postings and balances. Page is one-based, size1..100; direction requires an account. Only Task credentials are accepted.",
    "auth": "Trusted x-do-service-token; management requires Task credential. Scope and membership must be validated by calling service.",
    "response": "import(\"./do-dox.js\").DoResponse<import(\"./ledger-contracts.js\").AssetRewardReadResult>",
    "input": "import(\"./ledger-contracts.js\").AssetRewardRead"
  },
  "asset:GET /api/v1/internal/do/readiness": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Trusted Task x-do-service-token; configuration snapshot does not prove external cash reserves.",
    "response": "import(\"./do-dox.js\").DoResponse<import(\"./ledger-contracts.js\").AssetRewardReadiness>"
  },
  "asset:POST /api/v1/internal/do/refunds": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./do-dox.js\").DoRefundIntegrationApi[\"reserve\"]>>[\"data\"]",
    "input": "Parameters<import(\"./do-dox.js\").DoRefundIntegrationApi[\"reserve\"]>[0]"
  },
  "asset:GET /api/v1/internal/do/refunds/{id}": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./do-dox.js\").DoRefundIntegrationApi[\"receipt\"]>>[\"data\"]"
  },
  "chat:GET /api/v1/admin/media-retention": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "assistant:manage and organization scope. Version compare-and-swap; periods1..3650 for all four kinds.",
    "response": "import(\"./integrations.js\").ChatIntegrationResponse<import(\"./bridge-contracts.js\").ChatMediaRetention>"
  },
  "chat:PUT /api/v1/admin/media-retention": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "assistant:manage and organization scope. Version compare-and-swap; periods1..3650 for all four kinds.",
    "response": "import(\"./integrations.js\").ChatIntegrationResponse<import(\"./bridge-contracts.js\").ChatMediaRetention>",
    "input": "import(\"./bridge-contracts.js\").ChatMediaRetention"
  },
  "chat:GET /api/v1/connector-actions/{id}": {
    "purpose": "Inspect a current-user action; IDs do not grant cross-user access.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"action\"]>>[\"data\"]"
  },
  "chat:POST /api/v1/connector-actions/{id}/approve": {
    "purpose": "Execute an explicitly approved, unexpired action after rechecking provider access; retries are durable.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"approve\"]>>[\"data\"]"
  },
  "chat:POST /api/v1/connector-actions/{id}/cancel": {
    "purpose": "Cancel a current-user pending action.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"cancel\"]>>[\"data\"]"
  },
  "chat:GET /api/v1/connectors": {
    "purpose": "List own connection status without credentials. Requires authenticated chat access.",
    "auth": "chat:read",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"list\"]>>[\"data\"]"
  },
  "chat:DELETE /api/v1/connectors/{provider}": {
    "purpose": "Revoke the current user's connector and pending actions.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"disconnect\"]>>[\"data\"]"
  },
  "chat:GET /api/v1/connectors/{provider}/callback": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "One-use OAuth state bound to actor/provider; provider callback navigation, not a privileged action helper.",
    "query": "import(\"./bridge-contracts.js\").ConnectorCallbackQuery",
    "response": "void"
  },
  "chat:POST /api/v1/connectors/{provider}/connect": {
    "purpose": "Begin provider authorization; navigate to the returned URL only after a user request.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"connect\"]>>[\"data\"]"
  },
  "chat:POST /api/v1/connectors/{provider}/tools/{tool}": {
    "purpose": "Invoke a provider tool with its declared schema. Writes return an approval action, never execute implicitly. T describes the provider-defined result payload.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"invoke\"]>>[\"data\"]",
    "input": "Parameters<import(\"./integrations.js\").ChatIntegrationsApi[\"invoke\"]>[2]"
  },
  "chat:GET /api/v1/connectors/faiber/callback": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "One-use OAuth state bound to actor/provider; provider callback navigation, not a privileged action helper.",
    "query": "import(\"./bridge-contracts.js\").ConnectorCallbackQuery",
    "response": "void"
  },
  "chat:GET /api/v1/connectors/faiber/projects": {
    "purpose": "List selected and eligible Faiber project sandboxes for the current connector.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"projects\"]>>[\"data\"]"
  },
  "chat:PUT /api/v1/connectors/faiber/projects": {
    "purpose": "Select only currently authorized projects; stale/revoked connection returns409/403.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"selectProjects\"]>>[\"data\"]",
    "input": "Parameters<import(\"./integrations.js\").ChatIntegrationsApi[\"selectProjects\"]>[0]"
  },
  "chat:POST /api/v1/conversations/{id}/ai/messages/stream": {
    "purpose": "Stream assistant speech previews and a final validated reply. Requires chat:ai and conversation membership. Never treat text previews as completed task mutations.",
    "auth": "chat:ai",
    "response": "Awaited<ReturnType<import(\"./streaming.js\").ChatStreamingApi[\"messages\"]>>[\"data\"]",
    "input": "Parameters<import(\"./streaming.js\").ChatStreamingApi[\"messages\"]>[1]",
    "fetchStream": true
  },
  "chat:GET /api/v1/conversations/history": {
    "purpose": "Search own AI conversation history in SQL. Cursor is bound to q; changed search requires clearing cursor.",
    "auth": "Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded.",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"history\"]>>[\"data\"]",
    "query": "NonNullable<Parameters<import(\"./integrations.js\").ChatIntegrationsApi[\"history\"]>[0]>"
  },
  "chat:GET /api/v1/document-status": {
    "purpose": "Document extraction limits; requires chat:ai.",
    "auth": "chat:ai",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"documentStatus\"]>>[\"data\"]"
  },
  "chat:POST /api/v1/documents/extract": {
    "purpose": "Extract explicitly uploaded document bytes; requires chat:ai and non-guest identity. Unsupported type/size returns400. Bytes are not persisted.",
    "auth": "chat:ai",
    "response": "Awaited<ReturnType<import(\"./integrations.js\").ChatIntegrationsApi[\"extractDocument\"]>>[\"data\"]",
    "input": "Parameters<import(\"./integrations.js\").ChatIntegrationsApi[\"extractDocument\"]>[0]",
    "binaryContentType": "blob"
  },
  "chat:POST /api/v1/internal/faiber-task-sync": {
    "purpose": "Read or mutate the scoped service resource; preserve the full response and service validation errors.",
    "auth": "Trusted PRODUCT_CHAT_SERVICE_TOKEN Bearer credential; current actor connector, selected project and exact connection version are rechecked.",
    "response": "import(\"./integrations.js\").ChatIntegrationResponse<import(\"./bridge-contracts.js\").FaiberTaskSyncResult>",
    "input": "import(\"./bridge-contracts.js\").FaiberTaskSyncInput"
  },
  "chat:POST /api/v1/speech/voice/stream": {
    "purpose": "Stream authorized, metered PCM speech for a voice session. Requires chat:ai and the actor-owned project session. Returns the full Axios response with a WHATWG stream.",
    "auth": "chat:ai",
    "response": "Awaited<ReturnType<import(\"./streaming.js\").ChatStreamingApi[\"audio\"]>>[\"data\"]",
    "input": "Parameters<import(\"./streaming.js\").ChatStreamingApi[\"audio\"]>[0]",
    "fetchStream": true
  },
  "task:GET /api/openapi.json": {
    "methodName": "workspaceQuery",
    "typeBase": "RoutesOpenapiGet"
  },
  "task:GET /api/v1/access/effective": {
    "methodName": "routesEffectiveAccessGet",
    "typeBase": "RoutesEffectiveAccessGet"
  },
  "task:POST /api/v1/agent-proposals": {
    "methodName": "routesCreateAgentProposalPost",
    "typeBase": "RoutesCreateAgentProposalPost"
  },
  "task:POST /api/v1/agent-proposals/{id}/approve": {
    "methodName": "routesApproveAgentProposalPost",
    "typeBase": "RoutesApproveAgentProposalPost"
  },
  "task:POST /api/v1/assistant/query": {
    "methodName": "routesQueryPost",
    "typeBase": "RoutesQueryPost"
  },
  "task:DELETE /api/v1/attachments/{id}": {
    "methodName": "routesRemoveDeleteApiV1AttachmentsId",
    "typeBase": "RoutesRemoveDeleteApiV1AttachmentsId"
  },
  "task:GET /api/v1/attachments/{id}": {
    "methodName": "routesStatusGetApiV1AttachmentsId",
    "typeBase": "RoutesStatusGetApiV1AttachmentsId"
  },
  "task:PUT /api/v1/attachments/{id}/content": {
    "methodName": "routesContentPut",
    "typeBase": "RoutesContentPut"
  },
  "task:GET /api/v1/attachments/{id}/download": {
    "methodName": "routesDownloadGet",
    "typeBase": "RoutesDownloadGet"
  },
  "task:GET /api/v1/collaboration/config": {
    "methodName": "routesConfigGetApiV1CollaborationConfig",
    "typeBase": "RoutesConfigGetApiV1CollaborationConfig"
  },
  "task:GET /api/v1/events": {
    "methodName": "routesEventsGet",
    "typeBase": "RoutesEventsGet"
  },
  "task:GET /api/v1/feedback/assignees": {
    "methodName": "feedbackAssigneesGet",
    "typeBase": "FeedbackAssigneesGet"
  },
  "task:POST /api/v1/feedback/attachments": {
    "methodName": "feedbackInitializePost",
    "typeBase": "FeedbackInitializePost"
  },
  "task:POST /api/v1/feedback/attachments/{id}/complete": {
    "methodName": "feedbackCompletePost",
    "typeBase": "FeedbackCompletePost"
  },
  "task:PUT /api/v1/feedback/attachments/{id}/content": {
    "methodName": "feedbackUploadPut",
    "typeBase": "FeedbackUploadPut"
  },
  "task:GET /api/v1/feedback/capabilities": {
    "methodName": "feedbackCapabilitiesGet",
    "typeBase": "FeedbackCapabilitiesGet"
  },
  "task:GET /api/v1/feedback/policy": {
    "methodName": "feedbackGetPolicyGet",
    "typeBase": "FeedbackGetPolicyGet"
  },
  "task:PUT /api/v1/feedback/policy": {
    "methodName": "feedbackPutPolicyPut",
    "typeBase": "FeedbackPutPolicyPut"
  },
  "task:GET /api/v1/feedback/requests": {
    "methodName": "feedbackIndexGet",
    "typeBase": "FeedbackIndexGet"
  },
  "task:POST /api/v1/feedback/requests": {
    "methodName": "feedbackCreatePost",
    "typeBase": "FeedbackCreatePost"
  },
  "task:GET /api/v1/feedback/requests/{id}": {
    "methodName": "feedbackShowGet",
    "typeBase": "FeedbackShowGet"
  },
  "task:GET /api/v1/feedback/requests/{id}/attachments/{attachment}/content": {
    "methodName": "feedbackContentGet",
    "typeBase": "FeedbackContentGet"
  },
  "task:POST /api/v1/feedback/requests/{id}/decisions": {
    "methodName": "feedbackDecisionPost",
    "typeBase": "FeedbackDecisionPost"
  },
  "task:POST /api/v1/guest-links/use": {
    "methodName": "routesUseGuestLinkPost",
    "typeBase": "RoutesUseGuestLinkPost"
  },
  "task:GET /api/v1/internal/plans/gifts": {
    "methodName": "routesListGet",
    "typeBase": "RoutesListGet"
  },
  "task:POST /api/v1/internal/plans/gifts": {
    "methodName": "routesCreatePostApiV1InternalPlansGifts",
    "typeBase": "RoutesCreatePostApiV1InternalPlansGifts"
  },
  "task:GET /api/v1/internal/plans/gifts/{id}": {
    "methodName": "routesShowGet",
    "typeBase": "RoutesShowGet"
  },
  "task:PUT /api/v1/internal/plans/gifts/{id}": {
    "methodName": "routesUpdatePut",
    "typeBase": "RoutesUpdatePut"
  },
  "task:POST /api/v1/internal/plans/memory-reservations": {
    "methodName": "routesReserveInternalPost",
    "typeBase": "RoutesReserveInternalPost"
  },
  "task:POST /api/v1/internal/plans/memory-reservations/{id}": {
    "methodName": "routesSettleInternalPost",
    "typeBase": "RoutesSettleInternalPost"
  },
  "task:POST /api/v1/internal/plans/reservations": {
    "methodName": "routesReservePost",
    "typeBase": "RoutesReservePost"
  },
  "task:POST /api/v1/internal/plans/reservations/{id}": {
    "methodName": "routesFinishPost",
    "typeBase": "RoutesFinishPost"
  },
  "task:GET /api/v1/memory-usage": {
    "methodName": "routesOwnGet",
    "typeBase": "RoutesOwnGet"
  },
  "task:GET /api/v1/note-folders": {
    "methodName": "workspaceFolders",
    "typeBase": "RoutesFoldersGet"
  },
  "task:GET /api/v1/note-imports/{id}": {
    "methodName": "routesGetGetApiV1NoteImportsId",
    "typeBase": "RoutesGetGetApiV1NoteImportsId"
  },
  "task:POST /api/v1/note-imports/{id}": {
    "methodName": "routesControlPost",
    "typeBase": "RoutesControlPost"
  },
  "task:POST /api/v1/note-imports/{id}/apply": {
    "methodName": "routesApplyPostApiV1NoteImportsIdApply",
    "typeBase": "RoutesApplyPostApiV1NoteImportsIdApply"
  },
  "task:PUT /api/v1/notes/{id}/cover": {
    "methodName": "routesCoverPut",
    "typeBase": "RoutesCoverPut"
  },
  "task:GET /api/v1/notes/{id}/document": {
    "methodName": "routesDocumentGet",
    "typeBase": "RoutesDocumentGet"
  },
  "task:POST /api/v1/notes/{id}/document": {
    "methodName": "routesUpdatePost",
    "typeBase": "RoutesUpdatePost"
  },
  "task:POST /api/v1/notes/{id}/imports": {
    "methodName": "routesCreatePostApiV1NotesIdImports",
    "typeBase": "RoutesCreatePostApiV1NotesIdImports"
  },
  "task:GET /api/v1/notes/{id}/indexing": {
    "methodName": "routesStatusGetApiV1NotesIdIndexing",
    "typeBase": "RoutesStatusGetApiV1NotesIdIndexing"
  },
  "task:POST /api/v1/notes/{id}/indexing": {
    "methodName": "routesRetryPost",
    "typeBase": "RoutesRetryPost"
  },
  "task:GET /api/v1/notes/{id}/media": {
    "methodName": "routesGetGetApiV1NotesIdMedia",
    "typeBase": "RoutesGetGetApiV1NotesIdMedia"
  },
  "task:POST /api/v1/notes/{id}/media": {
    "methodName": "routesAddPost",
    "typeBase": "RoutesAddPost"
  },
  "task:DELETE /api/v1/notes/{id}/media/{attachment}": {
    "methodName": "routesRemoveDeleteApiV1NotesIdMediaAttachment",
    "typeBase": "RoutesRemoveDeleteApiV1NotesIdMediaAttachment"
  },
  "task:POST /api/v1/notes/{id}/realtime/auth": {
    "methodName": "routesAuthorizePost",
    "typeBase": "RoutesAuthorizePost"
  },
  "task:GET /api/v1/notes/{id}/realtime/config": {
    "methodName": "routesConfigGetApiV1NotesIdRealtimeConfig",
    "typeBase": "RoutesConfigGetApiV1NotesIdRealtimeConfig"
  },
  "task:POST /api/v1/notes/{id}/source-imports": {
    "methodName": "routesCreatePostApiV1NotesIdSourceImports",
    "typeBase": "RoutesCreatePostApiV1NotesIdSourceImports"
  },
  "task:GET /api/v1/notes/data/catalog": {
    "methodName": "routesCatalogGetApiV1NotesDataCatalog",
    "typeBase": "RoutesCatalogGetApiV1NotesDataCatalog"
  },
  "task:POST /api/v1/notes/knowledge/search": {
    "methodName": "routesSearchPost",
    "typeBase": "RoutesSearchPost"
  },
  "task:GET /api/v1/notification-preferences": {
    "methodName": "routesGetPreferencesGet",
    "typeBase": "RoutesGetPreferencesGet"
  },
  "task:PUT /api/v1/notification-preferences": {
    "methodName": "routesPutPreferencesPut",
    "typeBase": "RoutesPutPreferencesPut"
  },
  "task:PUT /api/v1/performance/policies": {
    "methodName": "routesUpsertPerformancePolicyPut",
    "typeBase": "RoutesUpsertPerformancePolicyPut"
  },
  "task:GET /api/v1/planning-preferences": {
    "methodName": "workspacePreferences",
    "typeBase": "RoutesPreferencesGet"
  },
  "task:PUT /api/v1/planning-preferences": {
    "methodName": "workspaceSavePreferences",
    "typeBase": "RoutesSavePreferencesPut"
  },
  "task:GET /api/v1/plans": {
    "methodName": "routesGetGetApiV1Plans",
    "typeBase": "RoutesGetGetApiV1Plans"
  },
  "task:GET /api/v1/plans/admin/income": {
    "methodName": "routesIncomeGet",
    "typeBase": "RoutesIncomeGet"
  },
  "task:PUT /api/v1/plans/admin/memory-limits": {
    "methodName": "routesConfigurePut",
    "typeBase": "RoutesConfigurePut"
  },
  "task:GET /api/v1/plans/admin/users": {
    "methodName": "routesUsersGet",
    "typeBase": "RoutesUsersGet"
  },
  "task:POST /api/v1/plans/checkout": {
    "methodName": "routesCheckoutPost",
    "typeBase": "RoutesCheckoutPost"
  },
  "task:POST /api/v1/plans/gift": {
    "methodName": "routesRedeemPost",
    "typeBase": "RoutesRedeemPost"
  },
  "task:POST /api/v1/plans/gift-tokens": {
    "methodName": "routesGiftPost",
    "typeBase": "RoutesGiftPost"
  },
  "task:GET /api/v1/plans/memory-limits": {
    "methodName": "routesCatalogGetApiV1PlansMemoryLimits",
    "typeBase": "RoutesCatalogGetApiV1PlansMemoryLimits"
  },
  "task:POST /api/v1/plans/orders/{id}/reconcile": {
    "methodName": "routesReconcilePost",
    "typeBase": "RoutesReconcilePost"
  },
  "task:GET /api/v1/points/history": {
    "methodName": "routesPointHistoryGet",
    "typeBase": "RoutesPointHistoryGet"
  },
  "task:GET /api/v1/projects": {
    "methodName": "routesListProjectsGet",
    "typeBase": "RoutesListProjectsGet"
  },
  "task:POST /api/v1/projects": {
    "methodName": "routesCreateProjectPost",
    "typeBase": "RoutesCreateProjectPost"
  },
  "task:GET /api/v1/projects/{id}": {
    "methodName": "routesGetProjectGet",
    "typeBase": "RoutesGetProjectGet"
  },
  "task:PATCH /api/v1/projects/{id}": {
    "methodName": "routesUpdateProjectPatch",
    "typeBase": "RoutesUpdateProjectPatch"
  },
  "task:GET /api/v1/projects/{id}/board-workflow": {
    "methodName": "routesGetGetApiV1ProjectsIdBoardWorkflow",
    "typeBase": "RoutesGetGetApiV1ProjectsIdBoardWorkflow"
  },
  "task:PUT /api/v1/projects/{id}/board-workflow": {
    "methodName": "routesPutPutApiV1ProjectsIdBoardWorkflow",
    "typeBase": "RoutesPutPutApiV1ProjectsIdBoardWorkflow"
  },
  "task:GET /api/v1/projects/{id}/checklists": {
    "methodName": "routesProjectChecklistsGet",
    "typeBase": "RoutesProjectChecklistsGet"
  },
  "task:POST /api/v1/projects/{id}/grants": {
    "methodName": "routesGrantProjectAccessPost",
    "typeBase": "RoutesGrantProjectAccessPost"
  },
  "task:GET /api/v1/projects/{id}/members": {
    "methodName": "routesMembersGet",
    "typeBase": "RoutesMembersGet"
  },
  "task:DELETE /api/v1/projects/{id}/members/{user_id}": {
    "methodName": "routesRemoveMemberDelete",
    "typeBase": "RoutesRemoveMemberDelete"
  },
  "task:GET /api/v1/projects/{id}/memory-usage": {
    "methodName": "routesGetGetApiV1ProjectsIdMemoryUsage",
    "typeBase": "RoutesGetGetApiV1ProjectsIdMemoryUsage"
  },
  "task:GET /api/v1/projects/{id}/report": {
    "methodName": "routesGetGetApiV1ProjectsIdReport",
    "typeBase": "RoutesGetGetApiV1ProjectsIdReport"
  },
  "task:GET /api/v1/projects/{id}/workflow": {
    "methodName": "routesWorkflowStatesGet",
    "typeBase": "RoutesWorkflowStatesGet"
  },
  "task:POST /api/v1/projects/personal": {
    "methodName": "routesEnsurePersonalProjectPost",
    "typeBase": "RoutesEnsurePersonalProjectPost"
  },
  "task:POST /api/v1/projects/shared": {
    "methodName": "routesCreateSharedProjectPost",
    "typeBase": "RoutesCreateSharedProjectPost"
  },
  "task:GET /api/v1/reports/summary": {
    "methodName": "routesReportSummaryGet",
    "typeBase": "RoutesReportSummaryGet"
  },
  "task:GET /api/v1/reports/team-monitoring": {
    "methodName": "routesTeamMonitoringGet",
    "typeBase": "RoutesTeamMonitoringGet"
  },
  "task:POST /api/v1/review-proposals": {
    "methodName": "workspacePropose",
    "typeBase": "RoutesProposePost"
  },
  "task:GET /api/v1/review-proposals/{id}": {
    "methodName": "workspaceProposal",
    "typeBase": "RoutesGetGetApiV1ReviewProposalsId"
  },
  "task:PUT /api/v1/review-proposals/{id}": {
    "methodName": "workspaceRevise",
    "typeBase": "RoutesRevisePut"
  },
  "task:POST /api/v1/review-proposals/{id}/apply": {
    "methodName": "workspaceApply",
    "typeBase": "RoutesApplyPostApiV1ReviewProposalsIdApply"
  },
  "task:POST /api/v1/review-proposals/{id}/refresh": {
    "methodName": "workspaceRefresh",
    "typeBase": "RoutesRefreshPost"
  },
  "task:POST /api/v1/review-proposals/validate": {
    "methodName": "workspaceValidate",
    "typeBase": "RoutesValidateProposalPost"
  },
  "task:GET /api/v1/sprints": {
    "methodName": "routesListSprintsGet",
    "typeBase": "RoutesListSprintsGet"
  },
  "task:POST /api/v1/sprints": {
    "methodName": "routesCreateSprintPost",
    "typeBase": "RoutesCreateSprintPost"
  },
  "task:POST /api/v1/sprints/{id}/complete": {
    "methodName": "routesCompleteSprintPost",
    "typeBase": "RoutesCompleteSprintPost"
  },
  "task:POST /api/v1/sprints/{id}/start": {
    "methodName": "routesStartSprintPost",
    "typeBase": "RoutesStartSprintPost"
  },
  "task:GET /api/v1/teams": {
    "methodName": "routesListTeamsGet",
    "typeBase": "RoutesListTeamsGet"
  },
  "task:POST /api/v1/teams": {
    "methodName": "routesCreateTeamPost",
    "typeBase": "RoutesCreateTeamPost"
  },
  "task:GET /api/v1/teams/{id}": {
    "methodName": "routesGetTeamGet",
    "typeBase": "RoutesGetTeamGet"
  },
  "task:PATCH /api/v1/teams/{id}": {
    "methodName": "routesUpdateTeamPatch",
    "typeBase": "RoutesUpdateTeamPatch"
  },
  "task:GET /api/v1/work-items": {
    "methodName": "routesListWorkItemsGet",
    "typeBase": "RoutesListWorkItemsGet"
  },
  "task:POST /api/v1/work-items": {
    "methodName": "routesCreateWorkItemPost",
    "typeBase": "RoutesCreateWorkItemPost"
  },
  "task:DELETE /api/v1/work-items/{id}": {
    "methodName": "routesRemoveWorkItemDelete",
    "typeBase": "RoutesRemoveWorkItemDelete"
  },
  "task:GET /api/v1/work-items/{id}": {
    "methodName": "routesGetWorkItemGet",
    "typeBase": "RoutesGetWorkItemGet"
  },
  "task:PATCH /api/v1/work-items/{id}": {
    "methodName": "routesUpdateWorkItemPatch",
    "typeBase": "RoutesUpdateWorkItemPatch"
  },
  "task:GET /api/v1/work-items/{id}/activity": {
    "methodName": "routesWorkItemActivityGet",
    "typeBase": "RoutesWorkItemActivityGet"
  },
  "task:POST /api/v1/work-items/{id}/attachments": {
    "methodName": "routesCreatePostApiV1WorkItemsIdAttachments",
    "typeBase": "RoutesCreatePostApiV1WorkItemsIdAttachments"
  },
  "task:GET /api/v1/work-items/{id}/checklist": {
    "methodName": "routesWorkItemChecklistGet",
    "typeBase": "RoutesWorkItemChecklistGet"
  },
  "task:PUT /api/v1/work-items/{id}/checklist": {
    "methodName": "routesReplaceChecklistPut",
    "typeBase": "RoutesReplaceChecklistPut"
  },
  "task:GET /api/v1/work-items/{id}/comments": {
    "methodName": "routesListCommentsGet",
    "typeBase": "RoutesListCommentsGet"
  },
  "task:POST /api/v1/work-items/{id}/comments": {
    "methodName": "routesCreateCommentPost",
    "typeBase": "RoutesCreateCommentPost"
  },
  "task:GET /api/v1/work-items/{id}/comments/page": {
    "methodName": "routesCommentPageGet",
    "typeBase": "RoutesCommentPageGet",
    "response": "import(\"./types.js\").TaskResponse<import(\"./types.js\").CommentPage>"
  },
  "task:GET /api/v1/work-items/{id}/commits": {
    "methodName": "routesListCommitsGet",
    "typeBase": "RoutesListCommitsGet"
  },
  "task:POST /api/v1/work-items/{id}/commits": {
    "methodName": "routesAttachCommitPost",
    "typeBase": "RoutesAttachCommitPost"
  },
  "task:POST /api/v1/work-items/{id}/points": {
    "methodName": "routesAddPointsPost",
    "typeBase": "RoutesAddPointsPost"
  },
  "task:DELETE /api/v1/work-items/{id}/reminder": {
    "methodName": "routesRemoveDeleteApiV1WorkItemsIdReminder",
    "typeBase": "RoutesRemoveDeleteApiV1WorkItemsIdReminder"
  },
  "task:GET /api/v1/work-items/{id}/reminder": {
    "methodName": "routesGetGetApiV1WorkItemsIdReminder",
    "typeBase": "RoutesGetGetApiV1WorkItemsIdReminder"
  },
  "task:PUT /api/v1/work-items/{id}/reminder": {
    "methodName": "routesPutPutApiV1WorkItemsIdReminder",
    "typeBase": "RoutesPutPutApiV1WorkItemsIdReminder"
  },
  "task:POST /api/v1/work-items/{id}/transition": {
    "methodName": "routesTransitionWorkItemPost",
    "typeBase": "RoutesTransitionWorkItemPost"
  },
  "task:GET /api/v1/work-items/{id}/work-logs": {
    "methodName": "routesListWorkLogsGet",
    "typeBase": "RoutesListWorkLogsGet"
  },
  "task:POST /api/v1/work-items/{id}/work-logs": {
    "methodName": "routesCreateWorkLogPost",
    "typeBase": "RoutesCreateWorkLogPost"
  },
  "task:GET /api/v1/work-items/{id}/work-sessions": {
    "methodName": "routesListWorkSessionsGet",
    "typeBase": "RoutesListWorkSessionsGet"
  },
  "task:POST /api/v1/work-items/{id}/work-sessions/start": {
    "methodName": "routesStartWorkSessionPost",
    "typeBase": "RoutesStartWorkSessionPost"
  },
  "task:POST /api/v1/work-sessions/{id}/heartbeat": {
    "methodName": "routesHeartbeatWorkSessionPost",
    "typeBase": "RoutesHeartbeatWorkSessionPost"
  },
  "task:POST /api/v1/work-sessions/{id}/stop": {
    "methodName": "routesStopWorkSessionPost",
    "typeBase": "RoutesStopWorkSessionPost"
  },
  "task:GET /api/v1/work-sessions/active": {
    "methodName": "routesActiveWorkSessionsGet",
    "typeBase": "RoutesActiveWorkSessionsGet"
  },
  "task:GET /api/v1/workspace": {
    "methodName": "routesWorkspaceGet",
    "typeBase": "RoutesWorkspaceGet"
  },
  "task:GET /health/dependencies": {
    "methodName": "routesReadyGetHealthDependencies",
    "typeBase": "RoutesReadyGetHealthDependencies"
  },
  "task:GET /health/live": {
    "methodName": "routesLiveGet",
    "typeBase": "RoutesLiveGet"
  },
  "task:GET /health/ready": {
    "methodName": "routesReadyGetHealthReady",
    "typeBase": "RoutesReadyGetHealthReady"
  },
  "task:GET /metrics": {
    "methodName": "routesMetricsGet",
    "typeBase": "RoutesMetricsGet"
  },
  "asset:GET /": {
    "methodName": "routerStatusRouteGet",
    "typeBase": "RouterStatusRouteGet"
  },
  "asset:GET /api/openapi.json": {
    "methodName": "routerOpenapiJsonGet",
    "typeBase": "RouterOpenapiJsonGet"
  },
  "asset:GET /api/v1/actions": {
    "methodName": "actionActionsIndexGet",
    "typeBase": "ActionActionsIndexGet"
  },
  "asset:POST /api/v1/actions": {
    "methodName": "actionActionsCreatePost",
    "typeBase": "ActionActionsCreatePost"
  },
  "asset:DELETE /api/v1/actions/{id}": {
    "methodName": "actionActionsDeleteDelete",
    "typeBase": "ActionActionsDeleteDelete"
  },
  "asset:GET /api/v1/actions/{id}": {
    "methodName": "actionActionsShowGet",
    "typeBase": "ActionActionsShowGet"
  },
  "asset:PATCH /api/v1/actions/{id}": {
    "methodName": "actionActionsUpdatePatch",
    "typeBase": "ActionActionsUpdatePatch"
  },
  "asset:POST /api/v1/actions/complete": {
    "methodName": "actionActionsCompletePost",
    "typeBase": "ActionActionsCompletePost"
  },
  "asset:GET /api/v1/admin/plan-products": {
    "methodName": "walletBillingAdminPlanProductsIndexGet",
    "typeBase": "WalletBillingAdminPlanProductsIndexGet"
  },
  "asset:PUT /api/v1/admin/plan-products": {
    "methodName": "walletBillingAdminPlanProductsUpdatePut",
    "typeBase": "WalletBillingAdminPlanProductsUpdatePut"
  },
  "asset:DELETE /api/v1/admin/plan-products/{tier}": {
    "methodName": "walletBillingAdminPlanProductsDeleteDelete",
    "typeBase": "WalletBillingAdminPlanProductsDeleteDelete"
  },
  "asset:GET /api/v1/admin/resource-unit-prices": {
    "methodName": "sandboxBillingAdminPricesGet",
    "typeBase": "SandboxBillingAdminPricesGet"
  },
  "asset:PUT /api/v1/admin/resource-unit-prices": {
    "methodName": "sandboxBillingAdminPricesUpdatePut",
    "typeBase": "SandboxBillingAdminPricesUpdatePut"
  },
  "asset:PUT /api/v1/admin/sandbox-projects/{profile_id}/{project}/pricing-override": {
    "methodName": "sandboxBillingAdminProjectPricingOverridePut",
    "typeBase": "SandboxBillingAdminProjectPricingOverridePut"
  },
  "asset:PUT /api/v1/admin/sandbox-projects/{project}/financial-owner": {
    "methodName": "sandboxBillingAdminProjectFinancialOwnerPut",
    "typeBase": "SandboxBillingAdminProjectFinancialOwnerPut"
  },
  "asset:GET /api/v1/admin/subscriptions": {
    "methodName": "walletBillingAdminSubscriptionsIndexGet",
    "typeBase": "WalletBillingAdminSubscriptionsIndexGet"
  },
  "asset:GET /api/v1/admin/trial-gifts/{product}": {
    "methodName": "trialGiftsListGet",
    "typeBase": "TrialGiftsListGet"
  },
  "asset:POST /api/v1/admin/trial-gifts/{product}": {
    "methodName": "trialGiftsCreatePost",
    "typeBase": "TrialGiftsCreatePost"
  },
  "asset:GET /api/v1/admin/trial-gifts/{product}/{id}": {
    "methodName": "trialGiftsShowGet",
    "typeBase": "TrialGiftsShowGet"
  },
  "asset:PUT /api/v1/admin/trial-gifts/{product}/{id}": {
    "methodName": "trialGiftsUpdatePut",
    "typeBase": "TrialGiftsUpdatePut"
  },
  "asset:GET /api/v1/admin/trial-gifts/{product}/{id}/token": {
    "methodName": "trialGiftsCopyTokenGet",
    "typeBase": "TrialGiftsCopyTokenGet"
  },
  "asset:GET /api/v1/admin/trial-gifts/products": {
    "methodName": "trialGiftsProductsGet",
    "typeBase": "TrialGiftsProductsGet"
  },
  "asset:GET /api/v1/admin/user-plans": {
    "methodName": "walletBillingAdminUserPlansIndexGet",
    "typeBase": "WalletBillingAdminUserPlansIndexGet"
  },
  "asset:DELETE /api/v1/admin/user-plans/{profile_id}": {
    "methodName": "walletBillingAdminUserPlanDeleteDelete",
    "typeBase": "WalletBillingAdminUserPlanDeleteDelete"
  },
  "asset:PUT /api/v1/admin/user-plans/{profile_id}": {
    "methodName": "walletBillingAdminUserPlanUpdatePut",
    "typeBase": "WalletBillingAdminUserPlanUpdatePut"
  },
  "asset:PUT /api/v1/admin/user-plans/{profile_id}/disable": {
    "methodName": "walletBillingAdminUserPlanDisablePut",
    "typeBase": "WalletBillingAdminUserPlanDisablePut"
  },
  "asset:GET /api/v1/admin/users/{profile_id}/wallet": {
    "methodName": "walletBillingAdminUserWalletShowGet",
    "typeBase": "WalletBillingAdminUserWalletShowGet"
  },
  "asset:POST /api/v1/admin/users/{profile_id}/wallet/adjustments": {
    "methodName": "walletBillingAdminUserWalletAdjustPost",
    "typeBase": "WalletBillingAdminUserWalletAdjustPost"
  },
  "asset:POST /api/v1/ai-reservations": {
    "methodName": "aiBillingReservePost",
    "typeBase": "AiBillingReservePost"
  },
  "asset:POST /api/v1/ai-reservations/{id}/release": {
    "methodName": "aiBillingReleasePost",
    "typeBase": "AiBillingReleasePost"
  },
  "asset:POST /api/v1/ai-reservations/{id}/settle": {
    "methodName": "aiBillingSettlePost",
    "typeBase": "AiBillingSettlePost"
  },
  "asset:GET /api/v1/assets": {
    "methodName": "catalogAssetsIndexGet",
    "typeBase": "CatalogAssetsIndexGet"
  },
  "asset:POST /api/v1/assets": {
    "methodName": "catalogAssetsCreatePost",
    "typeBase": "CatalogAssetsCreatePost"
  },
  "asset:DELETE /api/v1/assets/{id}": {
    "methodName": "catalogAssetsDeleteDelete",
    "typeBase": "CatalogAssetsDeleteDelete"
  },
  "asset:GET /api/v1/assets/{id}": {
    "methodName": "catalogAssetsShowGet",
    "typeBase": "CatalogAssetsShowGet"
  },
  "asset:PATCH /api/v1/assets/{id}": {
    "methodName": "catalogAssetsUpdatePatch",
    "typeBase": "CatalogAssetsUpdatePatch"
  },
  "asset:GET /api/v1/bank-summary": {
    "methodName": "bankBankSummaryShowGet",
    "typeBase": "BankBankSummaryShowGet"
  },
  "asset:GET /api/v1/bank-transactions": {
    "methodName": "bankBankTransactionsIndexGet",
    "typeBase": "BankBankTransactionsIndexGet"
  },
  "asset:POST /api/v1/bank-transactions": {
    "methodName": "bankBankTransactionsCreatePost",
    "typeBase": "BankBankTransactionsCreatePost"
  },
  "asset:GET /api/v1/charge/settings": {
    "methodName": "chargeChargeSettingsShowGet",
    "typeBase": "ChargeChargeSettingsShowGet"
  },
  "asset:PATCH /api/v1/charge/settings": {
    "methodName": "chargeChargeSettingsUpdatePatch",
    "typeBase": "ChargeChargeSettingsUpdatePatch"
  },
  "asset:GET /api/v1/coin-settings": {
    "methodName": "bankCoinSettingsShowGet",
    "typeBase": "BankCoinSettingsShowGet"
  },
  "asset:PATCH /api/v1/coin-settings": {
    "methodName": "bankCoinSettingsUpdatePatch",
    "typeBase": "BankCoinSettingsUpdatePatch"
  },
  "asset:GET /api/v1/dashboard": {
    "methodName": "dashboardDashboardShowGet",
    "typeBase": "DashboardDashboardShowGet"
  },
  "asset:GET /api/v1/economy/capabilities": {
    "methodName": "economyCapabilitiesGet",
    "typeBase": "EconomyCapabilitiesGet"
  },
  "asset:POST /api/v1/economy/commands": {
    "methodName": "economyCommandPost",
    "typeBase": "EconomyCommandPost"
  },
  "asset:GET /api/v1/economy/journal": {
    "methodName": "economyJournalGet",
    "typeBase": "EconomyJournalGet"
  },
  "asset:GET /api/v1/economy/leaderboards": {
    "methodName": "economyLeaderboardsGet",
    "typeBase": "EconomyLeaderboardsGet"
  },
  "asset:GET /api/v1/economy/me": {
    "methodName": "economyMeGet",
    "typeBase": "EconomyMeGet"
  },
  "asset:GET /api/v1/economy/me/history": {
    "methodName": "economyMyHistoryGet",
    "typeBase": "EconomyMyHistoryGet"
  },
  "asset:POST /api/v1/economy/me/purchases": {
    "methodName": "economyPurchasePost",
    "typeBase": "EconomyPurchasePost"
  },
  "asset:POST /api/v1/economy/me/rewards/preview": {
    "methodName": "economyPreviewPost",
    "typeBase": "EconomyPreviewPost"
  },
  "asset:POST /api/v1/economy/me/sessions/{session_id}/credit": {
    "methodName": "economyCreditPost",
    "typeBase": "EconomyCreditPost"
  },
  "asset:GET /api/v1/economy/objects/{kind}": {
    "methodName": "economyObjectsGet",
    "typeBase": "EconomyObjectsGet"
  },
  "asset:GET /api/v1/economy/policy": {
    "methodName": "economyPolicyGetGet",
    "typeBase": "EconomyPolicyGetGet"
  },
  "asset:PUT /api/v1/economy/policy": {
    "methodName": "economyPolicyPutPut",
    "typeBase": "EconomyPolicyPutPut"
  },
  "asset:GET /api/v1/economy/valuation": {
    "methodName": "economyValuationGet",
    "typeBase": "EconomyValuationGet"
  },
  "asset:GET /api/v1/games/escrows/{match_id}": {
    "methodName": "gameEscrowShowGet",
    "typeBase": "GameEscrowShowGet"
  },
  "asset:POST /api/v1/games/escrows/{match_id}/refund": {
    "methodName": "gameEscrowRefundPost",
    "typeBase": "GameEscrowRefundPost"
  },
  "asset:POST /api/v1/games/escrows/{match_id}/settle": {
    "methodName": "gameEscrowSettlePost",
    "typeBase": "GameEscrowSettlePost"
  },
  "asset:POST /api/v1/games/escrows/fund": {
    "methodName": "gameEscrowFundPost",
    "typeBase": "GameEscrowFundPost"
  },
  "asset:GET /api/v1/integration/docs": {
    "methodName": "integrationIntegrationDocsShowGet",
    "typeBase": "IntegrationIntegrationDocsShowGet"
  },
  "asset:GET /api/v1/integration/flow": {
    "methodName": "integrationFlowIntegrationShowGet",
    "typeBase": "IntegrationFlowIntegrationShowGet"
  },
  "asset:GET /api/v1/integration/rabbitmq": {
    "methodName": "integrationRabbitmqIntegrationShowGet",
    "typeBase": "IntegrationRabbitmqIntegrationShowGet"
  },
  "asset:PUT /api/v1/internal/fitness/products": {
    "methodName": "fitnessPublishPut",
    "typeBase": "FitnessPublishPut"
  },
  "asset:GET /api/v1/leaderboard": {
    "methodName": "leaderboardLeaderboardIndexGet",
    "typeBase": "LeaderboardLeaderboardIndexGet"
  },
  "asset:GET /api/v1/llm-pricing/plans": {
    "methodName": "llmUsagePlansIndexGet",
    "typeBase": "LlmUsagePlansIndexGet"
  },
  "asset:DELETE /api/v1/llm-pricing/plans/{profile_id}": {
    "methodName": "llmUsagePlanDeleteDelete",
    "typeBase": "LlmUsagePlanDeleteDelete"
  },
  "asset:GET /api/v1/llm-pricing/plans/{profile_id}": {
    "methodName": "llmUsagePlanShowGet",
    "typeBase": "LlmUsagePlanShowGet"
  },
  "asset:PUT /api/v1/llm-pricing/plans/{profile_id}": {
    "methodName": "llmUsagePlanSetPut",
    "typeBase": "LlmUsagePlanSetPut"
  },
  "asset:GET /api/v1/me/asset-history": {
    "methodName": "walletMeAssetHistoryGet",
    "typeBase": "WalletMeAssetHistoryGet"
  },
  "asset:GET /api/v1/me/assets": {
    "methodName": "walletMeAssetsShowGet",
    "typeBase": "WalletMeAssetsShowGet"
  },
  "asset:GET /api/v1/me/badges": {
    "methodName": "walletMeBadgesShowGet",
    "typeBase": "WalletMeBadgesShowGet"
  },
  "asset:GET /api/v1/me/badges/todos": {
    "methodName": "walletMeBadgeTodosShowGet",
    "typeBase": "WalletMeBadgeTodosShowGet"
  },
  "asset:GET /api/v1/me/llm-usage": {
    "methodName": "walletMeLlmUsageGet",
    "typeBase": "WalletMeLlmUsageGet"
  },
  "asset:GET /api/v1/me/transactions": {
    "methodName": "walletMeTransactionsGet",
    "typeBase": "WalletMeTransactionsGet"
  },
  "asset:GET /api/v1/me/transactions/{id}": {
    "methodName": "walletMeTransactionShowGet",
    "typeBase": "WalletMeTransactionShowGet"
  },
  "asset:GET /api/v1/me/transactions/days": {
    "methodName": "walletMeTransactionDaysGet",
    "typeBase": "WalletMeTransactionDaysGet"
  },
  "asset:GET /api/v1/me/transactions/days/{day}": {
    "methodName": "walletMeTransactionDayGet",
    "typeBase": "WalletMeTransactionDayGet"
  },
  "asset:GET /api/v1/plans": {
    "methodName": "walletBillingPlansIndexGet",
    "typeBase": "WalletBillingPlansIndexGet"
  },
  "asset:GET /api/v1/plans/current": {
    "methodName": "walletBillingCurrentPlanGet",
    "typeBase": "WalletBillingCurrentPlanGet"
  },
  "asset:POST /api/v1/plans/purchase": {
    "methodName": "walletBillingPlansPurchasePost",
    "typeBase": "WalletBillingPlansPurchasePost"
  },
  "asset:GET /api/v1/points-packs": {
    "methodName": "walletBillingPointsPacksIndexGet",
    "typeBase": "WalletBillingPointsPacksIndexGet"
  },
  "asset:POST /api/v1/points-packs/purchase": {
    "methodName": "walletBillingPointsPacksPurchasePost",
    "typeBase": "WalletBillingPointsPacksPurchasePost"
  },
  "asset:GET /api/v1/ranks": {
    "methodName": "rankRanksIndexGet",
    "typeBase": "RankRanksIndexGet"
  },
  "asset:POST /api/v1/ranks": {
    "methodName": "rankRanksCreatePost",
    "typeBase": "RankRanksCreatePost"
  },
  "asset:DELETE /api/v1/ranks/{id}": {
    "methodName": "rankRanksDeleteDelete",
    "typeBase": "RankRanksDeleteDelete"
  },
  "asset:GET /api/v1/ranks/{id}": {
    "methodName": "rankRanksShowGet",
    "typeBase": "RankRanksShowGet"
  },
  "asset:PATCH /api/v1/ranks/{id}": {
    "methodName": "rankRanksUpdatePatch",
    "typeBase": "RankRanksUpdatePatch"
  },
  "asset:DELETE /api/v1/sandbox-resources/{project}": {
    "methodName": "sandboxBillingPurgeDelete",
    "typeBase": "SandboxBillingPurgeDelete"
  },
  "asset:GET /api/v1/sandbox-resources/{project}": {
    "methodName": "sandboxBillingShowGet",
    "typeBase": "SandboxBillingShowGet"
  },
  "asset:PUT /api/v1/sandbox-resources/{project}": {
    "methodName": "sandboxBillingUpdatePut",
    "typeBase": "SandboxBillingUpdatePut"
  },
  "asset:POST /api/v1/sandbox-resources/{project}/pause": {
    "methodName": "sandboxBillingPausePost",
    "typeBase": "SandboxBillingPausePost"
  },
  "asset:GET /api/v1/sandbox-resources/{project}/pricing": {
    "methodName": "sandboxBillingShowPricingGet",
    "typeBase": "SandboxBillingShowPricingGet"
  },
  "asset:POST /api/v1/sandbox-resources/{project}/resume": {
    "methodName": "sandboxBillingResumePost",
    "typeBase": "SandboxBillingResumePost"
  },
  "asset:POST /api/v1/sandbox-resources/quote": {
    "methodName": "sandboxBillingQuoteResourcesPost",
    "typeBase": "SandboxBillingQuoteResourcesPost"
  },
  "asset:GET /api/v1/subscriptions": {
    "methodName": "walletBillingSubscriptionsIndexGet",
    "typeBase": "WalletBillingSubscriptionsIndexGet"
  },
  "asset:POST /api/v1/subscriptions/{id}/cancel": {
    "methodName": "walletBillingSubscriptionsCancelPost",
    "typeBase": "WalletBillingSubscriptionsCancelPost"
  },
  "asset:DELETE /api/v1/subscriptions/{project}/{service}/data": {
    "methodName": "serviceLifecycleDeletePermanentlyDelete",
    "typeBase": "ServiceLifecycleDeletePermanentlyDelete"
  },
  "asset:POST /api/v1/subscriptions/{project}/{service}/pause": {
    "methodName": "serviceLifecyclePausePost",
    "typeBase": "ServiceLifecyclePausePost"
  },
  "asset:POST /api/v1/subscriptions/{project}/{service}/remove": {
    "methodName": "serviceLifecycleRemovePost",
    "typeBase": "ServiceLifecycleRemovePost"
  },
  "asset:POST /api/v1/subscriptions/{project}/{service}/resume": {
    "methodName": "serviceLifecycleResumePost",
    "typeBase": "ServiceLifecycleResumePost"
  },
  "asset:POST /api/v1/subscriptions/purchase": {
    "methodName": "walletBillingSubscriptionsPurchasePost",
    "typeBase": "WalletBillingSubscriptionsPurchasePost"
  },
  "asset:GET /api/v1/user-action-logs": {
    "methodName": "logsUserActionLogsIndexGet",
    "typeBase": "LogsUserActionLogsIndexGet"
  },
  "asset:GET /api/v1/user-asset-logs": {
    "methodName": "logsUserAssetLogsIndexGet",
    "typeBase": "LogsUserAssetLogsIndexGet"
  },
  "asset:GET /api/v1/wallet": {
    "methodName": "walletBillingWalletShowGet",
    "typeBase": "WalletBillingWalletShowGet"
  },
  "asset:GET /api/v1/wallet/purchases/{id}": {
    "methodName": "walletBillingWalletPurchaseShowGet",
    "typeBase": "WalletBillingWalletPurchaseShowGet"
  },
  "asset:POST /api/v1/wallet/subscriptions": {
    "methodName": "walletBillingWalletSubscriptionsPost",
    "typeBase": "WalletBillingWalletSubscriptionsPost"
  },
  "asset:POST /api/v1/wallet/topup": {
    "methodName": "walletBillingWalletTopupPost",
    "typeBase": "WalletBillingWalletTopupPost"
  },
  "asset:GET /health": {
    "methodName": "routerHealthGet",
    "typeBase": "RouterHealthGet"
  },
  "chat:GET /api/v1/admin/assistant-context-catalog": {
    "methodName": "routesAssistantContextCatalogGet",
    "typeBase": "RoutesAssistantContextCatalogGet"
  },
  "chat:GET /api/v1/admin/assistant-models": {
    "methodName": "routesAssistantModelsGet",
    "typeBase": "RoutesAssistantModelsGet"
  },
  "chat:GET /api/v1/admin/assistant-policy-operations/{id}": {
    "methodName": "routesGetPolicyOperationGet",
    "typeBase": "RoutesGetPolicyOperationGet"
  },
  "chat:POST /api/v1/admin/assistant-policy-operations/{id}": {
    "methodName": "routesReconcilePolicyOperationPost",
    "typeBase": "RoutesReconcilePolicyOperationPost"
  },
  "chat:GET /api/v1/admin/assistants": {
    "methodName": "routesListManagedAssistantsGet",
    "typeBase": "RoutesListManagedAssistantsGet"
  },
  "chat:POST /api/v1/admin/assistants": {
    "methodName": "routesCreateAssistantPost",
    "typeBase": "RoutesCreateAssistantPost"
  },
  "chat:DELETE /api/v1/admin/assistants/{id}": {
    "methodName": "routesDeleteAssistantDelete",
    "typeBase": "RoutesDeleteAssistantDelete"
  },
  "chat:GET /api/v1/admin/assistants/{id}": {
    "methodName": "routesGetManagedAssistantGet",
    "typeBase": "RoutesGetManagedAssistantGet"
  },
  "chat:PUT /api/v1/admin/assistants/{id}": {
    "methodName": "routesUpdateAssistantPut",
    "typeBase": "RoutesUpdateAssistantPut"
  },
  "chat:GET /api/v1/admin/customer-action-content": {
    "methodName": "routesCustomerActionContentGet",
    "typeBase": "RoutesCustomerActionContentGet"
  },
  "chat:GET /api/v1/admin/image-models": {
    "methodName": "routesModelsGetApiV1AdminImageModels",
    "typeBase": "RoutesModelsGetApiV1AdminImageModels"
  },
  "chat:GET /api/v1/admin/image-settings": {
    "methodName": "routesSettingsGetApiV1AdminImageSettings",
    "typeBase": "RoutesSettingsGetApiV1AdminImageSettings"
  },
  "chat:PUT /api/v1/admin/image-settings": {
    "methodName": "routesSavePut",
    "typeBase": "RoutesSavePut"
  },
  "chat:GET /api/v1/admin/speech-models": {
    "methodName": "routesModelsGetApiV1AdminSpeechModels",
    "typeBase": "RoutesModelsGetApiV1AdminSpeechModels"
  },
  "chat:GET /api/v1/admin/speech-settings": {
    "methodName": "routesSettingsGetApiV1AdminSpeechSettings",
    "typeBase": "RoutesSettingsGetApiV1AdminSpeechSettings"
  },
  "chat:PUT /api/v1/admin/speech-settings": {
    "methodName": "routesPublicSpeechSettingsPut",
    "typeBase": "RoutesPublicSpeechSettingsPut"
  },
  "chat:GET /api/v1/admin/workspace-assistants": {
    "methodName": "workspaceManagedRoles",
    "typeBase": "RoutesManagedRolesGet"
  },
  "chat:PUT /api/v1/admin/workspace-assistants/{role}": {
    "methodName": "workspaceBind",
    "typeBase": "RoutesBindPut"
  },
  "chat:GET /api/v1/assistants": {
    "methodName": "routesListAssistantsGet",
    "typeBase": "RoutesListAssistantsGet"
  },
  "chat:GET /api/v1/assistants/{id}": {
    "methodName": "routesGetAssistantGet",
    "typeBase": "RoutesGetAssistantGet"
  },
  "chat:POST /api/v1/attachments/{id}/complete": {
    "methodName": "routesCompleteAttachmentPost",
    "typeBase": "RoutesCompleteAttachmentPost"
  },
  "chat:GET /api/v1/attachments/{id}/content": {
    "methodName": "routesDownloadAttachmentGet",
    "typeBase": "RoutesDownloadAttachmentGet"
  },
  "chat:GET /api/v1/conversations": {
    "methodName": "routesListGet",
    "typeBase": "RoutesListGet"
  },
  "chat:POST /api/v1/conversations": {
    "methodName": "routesCreatePost",
    "typeBase": "RoutesCreatePost"
  },
  "chat:DELETE /api/v1/conversations/{id}": {
    "methodName": "routesArchiveDelete",
    "typeBase": "RoutesArchiveDelete"
  },
  "chat:GET /api/v1/conversations/{id}": {
    "methodName": "routesGetOneGet",
    "typeBase": "RoutesGetOneGet"
  },
  "chat:PUT /api/v1/conversations/{id}": {
    "methodName": "routesUpdatePut",
    "typeBase": "RoutesUpdatePut"
  },
  "chat:POST /api/v1/conversations/{id}/ai/messages": {
    "methodName": "routesAiSendPost",
    "typeBase": "RoutesAiSendPost"
  },
  "chat:GET /api/v1/conversations/{id}/ai/runtime-inputs": {
    "methodName": "routesAiRuntimeInputsGet",
    "typeBase": "RoutesAiRuntimeInputsGet"
  },
  "chat:POST /api/v1/conversations/{id}/ai/runtime-inputs/{input_id}/complete": {
    "methodName": "routesAiCompleteRuntimeInputPost",
    "typeBase": "RoutesAiCompleteRuntimeInputPost"
  },
  "chat:POST /api/v1/conversations/{id}/attachments": {
    "methodName": "routesCreateAttachmentPost",
    "typeBase": "RoutesCreateAttachmentPost"
  },
  "chat:GET /api/v1/conversations/{id}/events": {
    "methodName": "routesEventsGet",
    "typeBase": "RoutesEventsGet"
  },
  "chat:GET /api/v1/conversations/{id}/members": {
    "methodName": "routesMembersGet",
    "typeBase": "RoutesMembersGet"
  },
  "chat:POST /api/v1/conversations/{id}/members": {
    "methodName": "routesAddMemberPost",
    "typeBase": "RoutesAddMemberPost"
  },
  "chat:DELETE /api/v1/conversations/{id}/members/{user_id}": {
    "methodName": "routesRemoveMemberDelete",
    "typeBase": "RoutesRemoveMemberDelete"
  },
  "chat:GET /api/v1/conversations/{id}/messages": {
    "methodName": "routesMessagesGet",
    "typeBase": "RoutesMessagesGet"
  },
  "chat:POST /api/v1/conversations/{id}/messages": {
    "methodName": "routesSendPost",
    "typeBase": "RoutesSendPost"
  },
  "chat:POST /api/v1/conversations/{id}/read": {
    "methodName": "routesReadPost",
    "typeBase": "RoutesReadPost"
  },
  "chat:POST /api/v1/conversations/{id}/realtime-auth": {
    "methodName": "routesRealtimeAuthPost",
    "typeBase": "RoutesRealtimeAuthPost"
  },
  "chat:GET /api/v1/conversations/{id}/realtime-config": {
    "methodName": "routesRealtimeConfigGet",
    "typeBase": "RoutesRealtimeConfigGet"
  },
  "chat:POST /api/v1/fitness/generate": {
    "methodName": "fitnessGeneratePost",
    "typeBase": "FitnessGeneratePost"
  },
  "chat:POST /api/v1/fitness/intake-extract": {
    "methodName": "routesExtractIntakePost",
    "typeBase": "RoutesExtractIntakePost"
  },
  "chat:GET /api/v1/fitness/models": {
    "methodName": "routesModelsGetApiV1FitnessModels",
    "typeBase": "RoutesModelsGetApiV1FitnessModels"
  },
  "chat:PUT /api/v1/fitness/settings": {
    "methodName": "fitnessSaveSettingsPut",
    "typeBase": "FitnessSaveSettingsPut"
  },
  "chat:GET /api/v1/image-status": {
    "methodName": "routesStatusGetApiV1ImageStatus",
    "typeBase": "RoutesStatusGetApiV1ImageStatus"
  },
  "chat:GET /api/v1/integrations/lms/messages/{id}/notification-context": {
    "methodName": "humanChatNotificationContextGet",
    "typeBase": "HumanChatNotificationContextGet"
  },
  "chat:POST /api/v1/internal/memory/media": {
    "methodName": "memoryImportExtractPost",
    "typeBase": "MemoryImportExtractPost"
  },
  "chat:POST /api/v1/internal/memory/source": {
    "methodName": "memoryImportSourcePost",
    "typeBase": "MemoryImportSourcePost"
  },
  "chat:GET /api/v1/learning/runs/{id}/messages": {
    "methodName": "routesHistoryGet",
    "typeBase": "RoutesHistoryGet"
  },
  "chat:POST /api/v1/learning/runs/{id}/questions": {
    "methodName": "routesAskPost",
    "typeBase": "RoutesAskPost"
  },
  "chat:GET /api/v1/me/conversations": {
    "methodName": "humanChatSummariesGet",
    "typeBase": "HumanChatSummariesGet"
  },
  "chat:GET /api/v1/me/events": {
    "methodName": "humanChatEventsGet",
    "typeBase": "HumanChatEventsGet"
  },
  "chat:POST /api/v1/me/realtime/auth": {
    "methodName": "humanChatRealtimeAuthPost",
    "typeBase": "HumanChatRealtimeAuthPost"
  },
  "chat:GET /api/v1/me/realtime/config": {
    "methodName": "humanChatRealtimeConfigGet",
    "typeBase": "HumanChatRealtimeConfigGet"
  },
  "chat:GET /api/v1/me/unread-count": {
    "methodName": "humanChatUnreadGet",
    "typeBase": "HumanChatUnreadGet"
  },
  "chat:DELETE /api/v1/messages/{id}": {
    "methodName": "routesDeleteMessageDelete",
    "typeBase": "RoutesDeleteMessageDelete"
  },
  "chat:PUT /api/v1/messages/{id}": {
    "methodName": "routesEditPut",
    "typeBase": "RoutesEditPut"
  },
  "chat:POST /api/v1/messages/{id}/reactions": {
    "methodName": "routesReactPost",
    "typeBase": "RoutesReactPost"
  },
  "chat:POST /api/v1/speech/live": {
    "methodName": "routesLivePost",
    "typeBase": "RoutesLivePost"
  },
  "chat:GET /api/v1/speech/status": {
    "methodName": "routesStatusGetApiV1SpeechStatus",
    "typeBase": "RoutesStatusGetApiV1SpeechStatus"
  },
  "chat:POST /api/v1/speech/transcribe": {
    "methodName": "routesTranscribePost",
    "typeBase": "RoutesTranscribePost"
  },
  "chat:POST /api/v1/speech/tts": {
    "methodName": "routesSynthesizePost",
    "typeBase": "RoutesSynthesizePost"
  },
  "chat:POST /api/v1/speech/voice": {
    "methodName": "routesHandlePost",
    "typeBase": "RoutesHandlePost"
  },
  "chat:GET /api/v1/summary-access": {
    "methodName": "nativeSummaryAccessStatus",
    "typeBase": "NativeAccessGetStatusGet"
  },
  "chat:PUT /api/v1/summary-access": {
    "methodName": "saveNativeSummaryAccessPolicy",
    "typeBase": "NativeAccessUpdatePolicyPut"
  },
  "chat:POST /api/v1/summary-access/revocations": {
    "methodName": "revokeNativeSummaryObject",
    "typeBase": "NativeAccessRevokePost"
  },
  "chat:DELETE /api/v1/summary-access/revocations/{object}": {
    "methodName": "restoreNativeSummaryObject",
    "typeBase": "NativeAccessRestoreDelete"
  },
  "chat:GET /api/v1/workspace-assistants": {
    "methodName": "workspaceRoles",
    "typeBase": "RoutesRolesGet"
  },
  "chat:GET /health": {
    "methodName": "mainHealthGet",
    "typeBase": "MainHealthGet"
  }
};
