// Direct source review at Asset b3d71e6139fc585e491372ebfa645ac90dc883cf; native execution remains pending.
export const assetReviewedOperationContracts = {
  "asset:GET /": {
    "purpose": "Read process liveness and the static service version; this endpoint does not probe database or broker readiness."
  },
  "asset:GET /api/openapi.json": {
    "purpose": "Read the raw OpenAPI document. This document contains annotated routes only; complete mounted operations are available through the SDK."
  },
  "asset:GET /api/v1/actions": {
    "purpose": "Page nondeleted action definitions ordered by name; search matches name/title/description. Pagination defaults to page 1, size 20, clamped to 1\u2013100.",
    "response": "import(\"./contracts.types.js\").AssetActionPageResponse"
  },
  "asset:POST /api/v1/actions": {
    "purpose": "Create an audited action with validated criteria and achievement rules; funded rules validate referenced assets and write rule history/outbox transactionally. Returns HTTP 200.",
    "response": "import(\"./contracts.types.js\").AssetActionRecordResponse",
    "input": "import(\"./contracts.types.js\").AssetActionCreateInput"
  },
  "asset:DELETE /api/v1/actions/{id}": {
    "purpose": "Soft-delete an audited action and record its funded-rule archival transactionally; returns HTTP 200 with data:null, or 404 when absent.",
    "response": "import(\"./contracts.types.js\").AssetEmptyDataResponse"
  },
  "asset:GET /api/v1/actions/{id}": {
    "purpose": "Read one nondeleted action definition by UUID; a missing or archived action returns 404.",
    "response": "import(\"./contracts.types.js\").AssetActionRecordResponse"
  },
  "asset:PATCH /api/v1/actions/{id}": {
    "purpose": "Patch an audited action; null optional fields preserve values. Funded rule changes require a higher version and keep action identifiers immutable; invalid definitions fail before commit.",
    "response": "import(\"./contracts.types.js\").AssetActionRecordResponse",
    "input": "import(\"./contracts.types.js\").AssetActionUpdateInput"
  },
  "asset:POST /api/v1/actions/complete": {
    "purpose": "Complete a legacy action for the supplied profile UUID with optional stable event_id, occurrence timestamp and subject. Criteria, frequency, caps and badge rules govern rewards; scoped economy rewards use verified domain evidence instead."
  },
  "asset:GET /api/v1/admin/plan-products": {
    "purpose": "List all nondeleted plan products including disabled entries, ordered by price; reading may initialize project creation allowance metadata."
  },
  "asset:PUT /api/v1/admin/plan-products": {
    "purpose": "Upsert a validated plan product, excluding reserved fitness tiers. Optional Modules product UUID is validated upstream; upstream unavailability returns 503/502 and inaccessible products 422. Returns HTTP 200."
  },
  "asset:DELETE /api/v1/admin/plan-products/{tier}": {
    "purpose": "Soft-delete a nonfitness plan product by tier and set status zero. Missing tiers return 404; fitness tiers return 403. Returns raw status/message."
  },
  "asset:GET /api/v1/admin/resource-unit-prices": {
    "purpose": "Read configured CPU/RAM/disk unit prices as exact decimal strings; missing configuration fails with 500."
  },
  "asset:PUT /api/v1/admin/resource-unit-prices": {
    "purpose": "Update nonnegative CPU/RAM/disk unit prices and currency; negative prices return 422."
  },
  "asset:PUT /api/v1/admin/sandbox-projects/{profile_id}/{project}/pricing-override": {
    "purpose": "Set or clear an exact monthly resource override for the supplied profile/project. Negative values return 422; absent allocation is initialized and bundle_id is cleared."
  },
  "asset:PUT /api/v1/admin/sandbox-projects/{project}/financial-owner": {
    "purpose": "Move project allocation and subscription billing rows from current_profile_id to financial_owner_user_id in a transaction; an existing target allocation is replaced. Equal identities return unchanged."
  },
  "asset:GET /api/v1/admin/subscriptions": {
    "purpose": "Page all subscription rows newest first with optional project/profile filters and project/service/status search. Bracket pagination defaults to page 1 and size 20, clamped to 1\u2013100."
  },
  "asset:GET /api/v1/admin/trial-gifts/{product}": {
    "purpose": "Proxy product-owned gift list JSON with optional page/per_page/search (max 120 characters); annotate any item with can_copy. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp."
  },
  "asset:POST /api/v1/admin/trial-gifts/{product}": {
    "purpose": "Create a product-owned gift with nonnil stable request_id; require label up to 120 characters, active/inactive status, max_uses 1\u20131000000, RFC3339 expiry and object limits up to 2048 encoded bytes. Store token in the configured vault and return product JSON with can_copy. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp.",
    "input": "import(\"./contracts.types.js\").ProductTrialGiftCreateInput"
  },
  "asset:GET /api/v1/admin/trial-gifts/{product}/{id}": {
    "purpose": "Proxy one product-owned gift JSON object and annotate can_copy based on vault availability and remaining uses. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp."
  },
  "asset:PUT /api/v1/admin/trial-gifts/{product}/{id}": {
    "purpose": "Update a product-owned gift with optional rotate_token and full required write fields; request_id is ignored on update. Return delegated product JSON annotated with can_copy. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp."
  },
  "asset:GET /api/v1/admin/trial-gifts/{product}/{id}/token": {
    "purpose": "Read an unused gift token from the configured vault; exhausted gift conflicts with 409, unavailable vault returns 503, and missing stored token returns 404. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp."
  },
  "asset:GET /api/v1/admin/trial-gifts/products": {
    "purpose": "List configured product gift adapters with available/can_manage flags. Declared admin:charge permission is accompanied by a local asset:charge:read/update check (asset:charge:* or * accepted); product must be 2done or fitapp."
  },
  "asset:GET /api/v1/admin/user-plans": {
    "purpose": "List user plans ordered by last update with camelCase profileId/expiresAt/daysRemaining and effective enabled flag; no pagination."
  },
  "asset:DELETE /api/v1/admin/user-plans/{profile_id}": {
    "purpose": "Delete plan rows for a profile, including when absent; returns raw status/message."
  },
  "asset:PUT /api/v1/admin/user-plans/{profile_id}": {
    "purpose": "Set an enabled paid plan for a profile with days defaulting to 30 and restricted to 1\u20133650. Tier must name an active product and cannot be free; returns camelCase effective plan data."
  },
  "asset:PUT /api/v1/admin/user-plans/{profile_id}/disable": {
    "purpose": "Disable a profile plan by setting free, clearing expiry and zeroing plan points; create a free row if absent. Returns camelCase effective plan data."
  },
  "asset:GET /api/v1/admin/users/{profile_id}/wallet": {
    "purpose": "Read or initialize one nonnil profile wallet and recent ledger entries. limit defaults to 25 and clamps to 1\u2013100; all amounts are exact decimal strings."
  },
  "asset:POST /api/v1/admin/users/{profile_id}/wallet/adjustments": {
    "purpose": "Credit or debit a nonnil profile wallet with positive amount and trimmed 1\u2013200 character reason; record current actor as ledger reference. Invalid direction returns 422 and insufficient debit balance 402."
  },
  "asset:POST /api/v1/ai-reservations": {
    "purpose": "Reserve a positive IRR amount for the current profile using an external_id. Identical owner/kind/model/amount/currency replay returns the same reservation; conflicting reuse returns 409."
  },
  "asset:POST /api/v1/ai-reservations/{id}/release": {
    "purpose": "Release an owner-scoped reserved amount back to the wallet. Releasing twice is idempotent; settled reservations conflict with 409; missing/foreign IDs return 404."
  },
  "asset:POST /api/v1/ai-reservations/{id}/settle": {
    "purpose": "Settle an owner-scoped reservation with a nonnegative actual IRR amount. Equal settlement replay succeeds; changed amount, currency or released state conflicts. Missing/foreign reservation returns 404."
  },
  "asset:GET /api/v1/assets": {
    "purpose": "Page nondeleted asset definitions ordered by name. Optional asset_type is matched case-insensitively; an unrecognized type applies no type filter. Search matches name/title/description."
  },
  "asset:POST /api/v1/assets": {
    "purpose": "Create an asset with required name and case-sensitive asset_type enum; validate badge metadata when present. subject_type defaults to profile, max_quantity to zero, status to 1. Returns HTTP 200."
  },
  "asset:DELETE /api/v1/assets/{id}": {
    "purpose": "Soft-delete an asset by UUID; returns HTTP 200 with data:null, or 404 when absent.",
    "response": "import(\"./contracts.types.js\").AssetEmptyDataResponse"
  },
  "asset:GET /api/v1/assets/{id}": {
    "purpose": "Read one nondeleted asset definition by UUID; missing or deleted assets return 404."
  },
  "asset:PATCH /api/v1/assets/{id}": {
    "purpose": "Patch an asset without changing asset_type; null optional values preserve existing data. Badge metadata is validated; missing asset returns 404."
  },
  "asset:GET /api/v1/bank-summary": {
    "purpose": "Read bank_value_sum as an exact decimal string; default Coin settings may be initialized when absent."
  },
  "asset:GET /api/v1/bank-transactions": {
    "purpose": "Page nondeleted bank transactions newest first, optionally filtering profile_id/type and searching profile UUID or amount; include profile deposit totals and best-effort profile names."
  },
  "asset:POST /api/v1/bank-transactions": {
    "purpose": "Record a positive legacy bank deposit for the supplied profile UUID; omitted bank_id selects the default bank. Scoped economy rejects this path with 422 and requires verified broker funding. Returns HTTP 200."
  },
  "asset:GET /api/v1/charge/settings": {
    "purpose": "Read Charge mapping rules; initialize empty first-match defaults if no settings exist. Conditions are tagged objects, and decimal values serialize as strings.",
    "response": "import(\"./contracts.types.js\").AssetChargeSettingsResponse"
  },
  "asset:PATCH /api/v1/charge/settings": {
    "purpose": "Replace Charge mapping rules and optionally status; conditions require their type discriminator and variant-specific fields. Returns persisted rules with defaults materialized.",
    "response": "import(\"./contracts.types.js\").AssetChargeSettingsResponse",
    "input": "import(\"./contracts.types.js\").AssetChargeSettingsInput"
  },
  "asset:GET /api/v1/coin-settings": {
    "purpose": "Read legacy Coin counters and derived unit value; initialize default settings if absent."
  },
  "asset:PATCH /api/v1/coin-settings": {
    "purpose": "Patch legacy total supply/allocation percentage; configured scoped economy rejects changes with 409 and requires versioned economy policy instead."
  },
  "asset:GET /api/v1/dashboard": {
    "purpose": "Read monthly global legacy Coin, bank and action totals. month uses YYYY-MM and defaults to server local current month; invalid month returns 400."
  },
  "asset:GET /api/v1/economy/capabilities": {
    "purpose": "Read literal permission flags for policy updates, reward review, rule updates and rule creation. The endpoint declares admin:wallet:read_own with admin:coin_settings:read as an alias."
  },
  "asset:POST /api/v1/economy/commands": {
    "purpose": "Execute only audited operator reward or scope_close commands. Reward actor_id is overwritten from current identity and a nonempty reason is required; automatic/broker authority commands are rejected. Stable event_id retries must carry the same command."
  },
  "asset:GET /api/v1/economy/journal": {
    "purpose": "Read immutable raw command/results and state changes with exclusive after/before sequence bounds and optional descending order. limit defaults to 100 and caps at 500."
  },
  "asset:GET /api/v1/economy/leaderboards": {
    "purpose": "Read role/period XP rankings ordered by XP then object key. role and period_id cannot contain colons; limit defaults to 100 and caps at 500. Replay rewards do not change live rankings."
  },
  "asset:GET /api/v1/economy/me": {
    "purpose": "Read current profile wallet, allocations, entitlements, sessions and purchases. Session refill is a read projection; it does not persist consumption or a journal entry."
  },
  "asset:GET /api/v1/economy/me/history": {
    "purpose": "Read immutable journal changes belonging to the current profile using exclusive after and limit. Other profiles and original commands/results are omitted; before and descending are ignored by this handler."
  },
  "asset:POST /api/v1/economy/me/purchases": {
    "purpose": "Purchase configured catalog credit with Coin, money or crafting. Reuse event_id for retries; money returns an expiring quote and provider handoff appears on the purchase projection."
  },
  "asset:POST /api/v1/economy/me/rewards/preview": {
    "purpose": "Simulate a reward for the current profile and roll back every mutation. Input verified evidence is not accepted; completion remains subject to the owning producer/operator authority rules."
  },
  "asset:POST /api/v1/economy/me/sessions/{session_id}/credit": {
    "purpose": "Apply only available credit that fits below a current profile session Charge maximum; preserve excess credit. Reuse event_id for retries."
  },
  "asset:GET /api/v1/economy/objects/{kind}": {
    "purpose": "Read supported economy object projections by kind, optional exact object_key/profile_id/scope_id and offset. limit defaults to 100 and caps at 500; configuration_projection exposes producer acknowledgement revisions."
  },
  "asset:GET /api/v1/economy/policy": {
    "purpose": "Read current economy policy or null before configuration, including latest configuration_revision when present. Decimal quantities remain exact strings."
  },
  "asset:PUT /api/v1/economy/policy": {
    "purpose": "Validate and replace economy policy with a higher version under the financial lock. Launch, initial supply, currency and coin asset remain immutable; referenced assets, funding shares and evidence bindings are validated and published transactionally.",
    "response": "import(\"./economy.types.js\").EconomyPolicyUpdateResponse"
  },
  "asset:GET /api/v1/economy/valuation": {
    "purpose": "Read configured currency, live Coin unit value and bank counters; unconfigured economy returns 422."
  },
  "asset:GET /api/v1/games/escrows/{match_id}": {
    "purpose": "Read one escrow using the server-only x-game-service-token header. Returns {data:receipt} with camelCase decimal strings and no status/message fields; absent match returns 404.",
    "response": "import(\"./contracts.types.js\").AssetEscrowResponse"
  },
  "asset:POST /api/v1/games/escrows/{match_id}/refund": {
    "purpose": "Refund a funded legacy escrow using server-only x-game-service-token; refunded replay succeeds. Other states and scoped economy conflict with 409. Returns {data:receipt}.",
    "response": "import(\"./contracts.types.js\").AssetEscrowResponse"
  },
  "asset:POST /api/v1/games/escrows/{match_id}/settle": {
    "purpose": "Settle a funded legacy escrow using server-only x-game-service-token. winnerIds must be unique nonempty participants; burnBasisPoints defaults to 1000 and allows 0\u201310000. Settled replay succeeds; incompatible state or scoped economy returns 409.",
    "response": "import(\"./contracts.types.js\").AssetEscrowResponse"
  },
  "asset:POST /api/v1/games/escrows/fund": {
    "purpose": "Fund a legacy escrow using server-only x-game-service-token. Require two or more unique positive entries; identical match/entries replay succeeds, changed entries conflict. Scoped economy rejects this path with 409. Returns {data:receipt}.",
    "response": "import(\"./contracts.types.js\").AssetEscrowResponse"
  },
  "asset:GET /api/v1/integration/docs": {
    "purpose": "Read concrete direct-broker metadata and Rust SDK integration snippets for published legacy events."
  },
  "asset:GET /api/v1/integration/flow": {
    "purpose": "Read concrete Flow queue and event metadata supplied by the Cargo.lock-pinned infera-flow-sdk; no handler-local ACL is enforced.",
    "response": "import(\"./contracts.types.js\").AssetFlowIntegrationResponse"
  },
  "asset:GET /api/v1/integration/rabbitmq": {
    "purpose": "Read configured RabbitMQ queue and concrete event/payload-field metadata; broker_url_hint is documentation rather than a live credential."
  },
  "asset:PUT /api/v1/internal/fitness/products": {
    "purpose": "Publish an immutable fitness product using server-only FITNESS_PROFILE_SERVICE_TOKEN as Bearer authorization. Require fitness: tier, gym metadata, IRR price 1000\u20131000000000, zero points/storage and no linked product. Changed existing versions return 409."
  },
  "asset:GET /api/v1/leaderboard": {
    "purpose": "Read Coin/Gem rankings and current profile neighbors. profile_ids is a comma-separated cohort; invalid UUIDs are ignored and the current profile always participates. top/neighbors default to 3 and clamp to 1\u201310."
  },
  "asset:GET /api/v1/llm-pricing/plans": {
    "purpose": "Page user plan rows newest updated first with tier/profile UUID search. This list returns stored tiers; the single-profile read separately resolves expired tiers."
  },
  "asset:DELETE /api/v1/llm-pricing/plans/{profile_id}": {
    "purpose": "Delete the plan row for a profile, including when absent; returns HTTP 200 with data:null.",
    "response": "import(\"./contracts.types.js\").AssetEmptyDataResponse"
  },
  "asset:GET /api/v1/llm-pricing/plans/{profile_id}": {
    "purpose": "Read a profile plan with expired/missing plans projected as free; a missing row returns a synthetic free response with zero points rather than 404."
  },
  "asset:PUT /api/v1/llm-pricing/plans/{profile_id}": {
    "purpose": "Set a profile plan tier to free/pro/max/enterprise; invalid tiers return 400. Paid tiers expire after 30 days; free clears expiry. Returns HTTP 200."
  },
  "asset:GET /api/v1/me/asset-history": {
    "purpose": "Page the current profile asset history with bracket pagination, optional asset kind/name and earned_only. Aliases wallet:read_own and customer:wallet:read_own are declared alongside admin:wallet:read_own."
  },
  "asset:GET /api/v1/me/assets": {
    "purpose": "Read and enrich the current profile wallet: exact Coin/XP/Charge/Gem balances, positive badges and optional Charge/rank projections. A nonnil profile identity is required."
  },
  "asset:GET /api/v1/me/badges": {
    "purpose": "Read badge definitions and balances scoped to the current profile and optional subject_type/subject_id; absent subject_type defaults to profile. A nonnil profile identity is required."
  },
  "asset:GET /api/v1/me/badges/todos": {
    "purpose": "Read the current profile badge level requirements and progress for an optional subject scope; absent subject_type defaults to profile."
  },
  "asset:GET /api/v1/me/llm-usage": {
    "purpose": "Read current profile metered LLM buckets and totals. range accepts 24h/week/month/year; absent or unrecognized values become 24h. Decimal points remain strings."
  },
  "asset:GET /api/v1/me/transactions": {
    "purpose": "Page current profile ledger entries newest first, with reference/date filters and optional completed-local-day usage rollup. page/page_size default to 1/20, size clamps to 1\u2013100; timezone clamps to \u00b1840 minutes. Rollup omits the open local day."
  },
  "asset:GET /api/v1/me/transactions/{id}": {
    "purpose": "Read a single ledger entry by UUID scoped to the current profile; a missing or foreign entry returns 404."
  },
  "asset:GET /api/v1/me/transactions/days": {
    "purpose": "Page current profile metered debit totals by local day, newest first, with inclusive date bounds and timezone offset. Page defaults to 1/20, size clamps to 1\u2013100; values use camelCase and exact decimal strings."
  },
  "asset:GET /api/v1/me/transactions/days/{day}": {
    "purpose": "Read current profile resource and LLM usage for one local day; invalid date returns 400. Ledger totals are authoritative and may differ from fine-grained record sums due to decimal precision."
  },
  "asset:GET /api/v1/plans": {
    "purpose": "List active nondeleted plan products ordered by price. Reading may initialize missing project_creation_attempts_monthly metadata; monetary values are decimal strings."
  },
  "asset:GET /api/v1/plans/current": {
    "purpose": "Read the current profile effective plan; absent or expired plans project as free. Paid plan renewal opens during the final seven days. Response keys use camelCase."
  },
  "asset:POST /api/v1/plans/purchase": {
    "purpose": "Start a configured plan checkout; fitness tiers require their owning checkout. Same-tier renewal before the final seven days conflicts; eligible Pro-to-Max upgrade uses the configured price difference."
  },
  "asset:GET /api/v1/points-packs": {
    "purpose": "Read configured built-in points packs s/m/l with decimal-string price and points; no pagination."
  },
  "asset:POST /api/v1/points-packs/purchase": {
    "purpose": "Start a points checkout using a nonempty pack_id or whole custom points between 10000 and 100000000. pack_id takes precedence; missing selection returns 422."
  },
  "asset:GET /api/v1/ranks": {
    "purpose": "Page nondeleted ranks ordered by min_xp; search matches name/title/description. Pagination defaults to page 1, size 20, clamped to 1\u2013100."
  },
  "asset:POST /api/v1/ranks": {
    "purpose": "Create an XP rank with required name and min_xp. A negative threshold returns 400 and a duplicate active threshold returns 409; success returns HTTP 200."
  },
  "asset:DELETE /api/v1/ranks/{id}": {
    "purpose": "Soft-delete one rank; returns HTTP 200 with data:null, or 404 when absent.",
    "response": "import(\"./contracts.types.js\").AssetEmptyDataResponse"
  },
  "asset:GET /api/v1/ranks/{id}": {
    "purpose": "Read one nondeleted XP rank by UUID; absent ranks return 404."
  },
  "asset:PATCH /api/v1/ranks/{id}": {
    "purpose": "Patch an XP rank; null fields preserve existing values. Changed min_xp must be nonnegative and unique among nondeleted ranks; missing rank returns 404."
  },
  "asset:DELETE /api/v1/sandbox-resources/{project}": {
    "purpose": "Permanently delete current-profile sandbox data upstream and preserve the local billing/configuration record in purged state. Upstream failure returns 502; returns a raw status/message object."
  },
  "asset:GET /api/v1/sandbox-resources/{project}": {
    "purpose": "Read an existing current-profile project allocation and effective pricing; absent allocation returns 404 and is not created."
  },
  "asset:PUT /api/v1/sandbox-resources/{project}": {
    "purpose": "Apply validated current-profile resources through the sandbox service and persist the allocation. Optional max_hourly_amount and accepted_currency detect quote changes with 409. app_storage_mb is ignored and persisted as zero; upstream failure returns 502."
  },
  "asset:POST /api/v1/sandbox-resources/{project}/pause": {
    "purpose": "Pause a current-profile sandbox and schedule seven-day retention; absent allocation may be initialized. The local state is saved before the upstream pause call; upstream failure returns 502."
  },
  "asset:GET /api/v1/sandbox-resources/{project}/pricing": {
    "purpose": "Read existing current-profile project effective pricing without allocation creation; missing project returns 404. Monetary fields are exact decimal strings."
  },
  "asset:POST /api/v1/sandbox-resources/{project}/resume": {
    "purpose": "Resume a current-profile sandbox after checking one hourly charge against the wallet; insufficient funds returns 402 and upstream failure 502. Successful resume clears retention and resets the charging clock."
  },
  "asset:POST /api/v1/sandbox-resources/quote": {
    "purpose": "Validate and quote resources without allocation or wallet mutation. Return decimal CPU/RAM/disk/total/monthly values and all defaulted allocation fields. Bundles require exact sizes; advanced volumes must be at least 64 MiB and sum to database storage."
  },
  "asset:GET /api/v1/subscriptions": {
    "purpose": "List current-profile subscriptions with optional exact project filter; returns {data:{subscriptions:[...]}} without pagination."
  },
  "asset:POST /api/v1/subscriptions/{id}/cancel": {
    "purpose": "Cancel an owned subscription and clear next_charge_at. Missing IDs return 404 and foreign IDs 403; returns raw status/message."
  },
  "asset:DELETE /api/v1/subscriptions/{project}/{service}/data": {
    "purpose": "Permanently delete an owned project/service upstream and remove local subscription/retention rows. Upstream failure returns 503; local cleanup errors are ignored. Returns raw status/message."
  },
  "asset:POST /api/v1/subscriptions/{project}/{service}/pause": {
    "purpose": "Suspend a current-profile project/service subscription and record paused state; no purge deadline is set. Upstream scale-to-zero failure is ignored. Returns the raw lifecycle object."
  },
  "asset:POST /api/v1/subscriptions/{project}/{service}/remove": {
    "purpose": "Suspend an owned project/service subscription and schedule permanent deletion after seven days; upstream scale-to-zero failure is ignored. Returns the raw lifecycle object."
  },
  "asset:POST /api/v1/subscriptions/{project}/{service}/resume": {
    "purpose": "Resume an owned project/service subscription after wallet and upstream checks. Insufficient funds returns 402; upstream failure returns 503. Returns the raw lifecycle object."
  },
  "asset:POST /api/v1/subscriptions/purchase": {
    "purpose": "Start an external-payment deployment subscription purchase for nonempty service/period items. Period accepts hourly/monthly/annual; fetch pricing, create pending subscription rows and return payment handoff."
  },
  "asset:GET /api/v1/user-action-logs": {
    "purpose": "Page nondeleted action logs newest first, filtering profile/action and inclusive from/to timestamps. Search joins action and profile data; asset filters and earned_only are ignored by this handler."
  },
  "asset:GET /api/v1/user-asset-logs": {
    "purpose": "Page nondeleted asset logs newest first, filtering profile/action/asset identifiers, inclusive timestamps and optional positive earned quantities. Search joins action, asset and profile data."
  },
  "asset:GET /api/v1/wallet": {
    "purpose": "Read or initialize the current nonnil profile billing wallet; returns exact decimal balance and currency."
  },
  "asset:GET /api/v1/wallet/purchases/{id}": {
    "purpose": "Read an owner-scoped wallet purchase receipt. Verified-checkout mode may refresh pending/failed provider state and apply a verified result; missing or foreign IDs return 404."
  },
  "asset:POST /api/v1/wallet/subscriptions": {
    "purpose": "Atomically debit the current wallet and activate subscriptions using nonnil request_id, exact currency and max_amount. Reject duplicate service items/invalid periods, changed intents or prices with 409 and insufficient funds with 402; replay returns the committed fulfilled receipt."
  },
  "asset:POST /api/v1/wallet/topup": {
    "purpose": "Start a positive wallet top-up. Reuse request_id for account-scoped retries; mismatched amount/currency/owner or completed checkout conflicts with 409. Returns purchase_id/payment_url; payment initiation failure returns 502."
  },
  "asset:GET /health": {
    "purpose": "Read process liveness and the static service version; this endpoint does not probe database or broker readiness."
  }
};

// Allocation JSON column is written only from the validated volume-size map.
for (const operation of ["PUT /api/v1/admin/sandbox-projects/{profile_id}/{project}/pricing-override", "GET /api/v1/sandbox-resources/{project}", "PUT /api/v1/sandbox-resources/{project}", "POST /api/v1/sandbox-resources/{project}/pause", "POST /api/v1/sandbox-resources/{project}/resume"]) {
 assetReviewedOperationContracts[`asset:${operation}`] = {
  ...assetReviewedOperationContracts[`asset:${operation}`],
  response:'import("./contracts.types.js").AssetSandboxAllocationResponse',
  dataAlias:'import("./contracts.types.js").AssetSandboxAllocation',
 };
}
