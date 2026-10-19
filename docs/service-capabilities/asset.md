# asset capability discovery

Balances, assets, rewards, economy policy, subscriptions and usage ledger.

موجودی، دارایی، پاداش، سیاست اقتصادی، اشتراک و دفتر مصرف.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `b3d71e6139fc585e491372ebfa645ac90dc883cf`
- SDK source revision: `b3d71e6139fc585e491372ebfa645ac90dc883cf`
- Working HEAD: `894e73657c0044b54a0bb158fca1cdee77f6d438`
- Source relationship: diverged

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /` | `infera-asset/src/router.rs:227` | inspect middleware/local scope | pending |
| `GET /health` | `infera-asset/src/router.rs:227` | inspect middleware/local scope | pending |
| `GET /api/openapi.json` | `infera-asset/src/router.rs:217` | inspect middleware/local scope | pending |
| `GET /api/v1/economy/policy` | `infera-asset/src/economy/routes.rs:77` | admin:coin_settings:read | pending |
| `PUT /api/v1/economy/policy` | `infera-asset/src/economy/routes.rs:155` | admin:coin_settings:update | pending |
| `GET /api/v1/economy/capabilities` | `infera-asset/src/economy/routes.rs:54` | admin:wallet:read_own | pending |
| `POST /api/v1/economy/commands` | `infera-asset/src/economy/routes.rs:194` | admin:action:complete | pending |
| `GET /api/v1/economy/objects/{kind}` | `infera-asset/src/economy/routes.rs:239` | admin:bank_transaction:read | pending |
| `GET /api/v1/economy/journal` | `infera-asset/src/economy/routes.rs:291` | admin:user_asset_log:read | pending |
| `GET /api/v1/economy/me` | `infera-asset/src/economy/routes.rs:315` | admin:wallet:read_own | pending |
| `GET /api/v1/economy/valuation` | `infera-asset/src/economy/routes.rs:459` | admin:wallet:read_own | pending |
| `GET /api/v1/economy/me/history` | `infera-asset/src/economy/routes.rs:482` | admin:wallet:read_own | pending |
| `POST /api/v1/economy/me/rewards/preview` | `infera-asset/src/economy/routes.rs:515` | admin:wallet:read_own | pending |
| `GET /api/v1/economy/leaderboards` | `infera-asset/src/economy/routes.rs:569` | admin:wallet:read_own | pending |
| `POST /api/v1/economy/me/purchases` | `infera-asset/src/economy/routes.rs:368` | admin:wallet:read_own | pending |
| `POST /api/v1/economy/me/sessions/{session_id}/credit` | `infera-asset/src/economy/routes.rs:405` | admin:wallet:read_own | pending |
| `GET /api/v1/assets` | `infera-asset/src/catalog/routes.rs:53` | admin:asset:read | pending |
| `POST /api/v1/assets` | `infera-asset/src/catalog/routes.rs:106` | admin:asset:create | pending |
| `GET /api/v1/assets/{id}` | `infera-asset/src/catalog/routes.rs:81` | admin:asset:read | pending |
| `PATCH /api/v1/assets/{id}` | `infera-asset/src/catalog/routes.rs:133` | admin:asset:update | pending |
| `DELETE /api/v1/assets/{id}` | `infera-asset/src/catalog/routes.rs:158` | admin:asset:delete | pending |
| `GET /api/v1/ranks` | `infera-asset/src/rank/routes.rs:40` | admin:rank:read | pending |
| `POST /api/v1/ranks` | `infera-asset/src/rank/routes.rs:92` | admin:rank:create | pending |
| `GET /api/v1/ranks/{id}` | `infera-asset/src/rank/routes.rs:67` | admin:rank:read | pending |
| `PATCH /api/v1/ranks/{id}` | `infera-asset/src/rank/routes.rs:119` | admin:rank:update | pending |
| `DELETE /api/v1/ranks/{id}` | `infera-asset/src/rank/routes.rs:144` | admin:rank:delete | pending |
| `GET /api/v1/actions` | `infera-asset/src/action/routes.rs:51` | admin:action:read | pending |
| `POST /api/v1/actions` | `infera-asset/src/action/routes.rs:103` | admin:action:create | pending |
| `GET /api/v1/actions/{id}` | `infera-asset/src/action/routes.rs:78` | admin:action:read | pending |
| `PATCH /api/v1/actions/{id}` | `infera-asset/src/action/routes.rs:137` | admin:action:update | pending |
| `DELETE /api/v1/actions/{id}` | `infera-asset/src/action/routes.rs:170` | admin:action:delete | pending |
| `GET /api/v1/charge/settings` | `infera-asset/src/charge/routes.rs:36` | admin:charge:read | pending |
| `PATCH /api/v1/charge/settings` | `infera-asset/src/charge/routes.rs:58` | admin:charge:update | pending |
| `GET /api/v1/llm-pricing/plans` | `infera-asset/src/llm_usage/routes.rs:44` | admin:charge:read | pending |
| `PUT /api/v1/llm-pricing/plans/{profile_id}` | `infera-asset/src/llm_usage/routes.rs:110` | admin:charge:update | pending |
| `GET /api/v1/llm-pricing/plans/{profile_id}` | `infera-asset/src/llm_usage/routes.rs:86` | admin:charge:read | pending |
| `DELETE /api/v1/llm-pricing/plans/{profile_id}` | `infera-asset/src/llm_usage/routes.rs:62` | admin:charge:update | pending |
| `GET /api/v1/admin/subscriptions` | `infera-asset/src/wallet_billing/routes.rs:553` | admin:charge:read | pending |
| `GET /api/v1/admin/plan-products` | `infera-asset/src/wallet_billing/routes.rs:321` | admin:charge:read | pending |
| `PUT /api/v1/admin/plan-products` | `infera-asset/src/wallet_billing/routes.rs:337` | admin:charge:update | pending |
| `DELETE /api/v1/admin/plan-products/{tier}` | `infera-asset/src/wallet_billing/routes.rs:375` | admin:charge:update | pending |
| `GET /api/v1/admin/user-plans` | `infera-asset/src/wallet_billing/routes.rs:134` | admin:charge:read | pending |
| `PUT /api/v1/admin/user-plans/{profile_id}` | `infera-asset/src/wallet_billing/routes.rs:150` | admin:charge:update | pending |
| `DELETE /api/v1/admin/user-plans/{profile_id}` | `infera-asset/src/wallet_billing/routes.rs:187` | admin:charge:update | pending |
| `PUT /api/v1/admin/user-plans/{profile_id}/disable` | `infera-asset/src/wallet_billing/routes.rs:169` | admin:charge:update | pending |
| `GET /api/v1/admin/users/{profile_id}/wallet` | `infera-asset/src/wallet_billing/routes.rs:77` | admin:charge:read | pending |
| `POST /api/v1/admin/users/{profile_id}/wallet/adjustments` | `infera-asset/src/wallet_billing/routes.rs:95` | admin:charge:update | pending |
| `GET /api/v1/admin/trial-gifts/products` | `infera-asset/src/trial_gifts.rs:250` | admin:charge:read | pending |
| `GET /api/v1/admin/trial-gifts/{product}` | `infera-asset/src/trial_gifts.rs:266` | admin:charge:read | pending |
| `POST /api/v1/admin/trial-gifts/{product}` | `infera-asset/src/trial_gifts.rs:311` | admin:charge:update | pending |
| `GET /api/v1/admin/trial-gifts/{product}/{id}` | `infera-asset/src/trial_gifts.rs:294` | admin:charge:read | pending |
| `PUT /api/v1/admin/trial-gifts/{product}/{id}` | `infera-asset/src/trial_gifts.rs:336` | admin:charge:update | pending |
| `GET /api/v1/admin/trial-gifts/{product}/{id}/token` | `infera-asset/src/trial_gifts.rs:137` | admin:charge:update | pending |
| `GET /api/v1/admin/resource-unit-prices` | `infera-asset/src/sandbox_billing.rs:709` | admin:charge:read | pending |
| `PUT /api/v1/admin/resource-unit-prices` | `infera-asset/src/sandbox_billing.rs:730` | admin:charge:update | pending |
| `PUT /api/v1/admin/sandbox-projects/{profile_id}/{project}/pricing-override` | `infera-asset/src/sandbox_billing.rs:766` | admin:charge:update | pending |
| `PUT /api/v1/admin/sandbox-projects/{project}/financial-owner` | `infera-asset/src/sandbox_billing.rs:804` | admin:charge:update | pending |
| `GET /api/v1/coin-settings` | `infera-asset/src/bank/routes.rs:49` | admin:coin_settings:read | pending |
| `PATCH /api/v1/coin-settings` | `infera-asset/src/bank/routes.rs:71` | admin:coin_settings:update | pending |
| `GET /api/v1/bank-summary` | `infera-asset/src/bank/routes.rs:94` | admin:bank_transaction:read | pending |
| `GET /api/v1/bank-transactions` | `infera-asset/src/bank/routes.rs:116` | admin:bank_transaction:read | pending |
| `GET /api/v1/user-action-logs` | `infera-asset/src/logs/routes.rs:34` | admin:user_action_log:read | pending |
| `GET /api/v1/user-asset-logs` | `infera-asset/src/logs/routes.rs:60` | admin:user_asset_log:read | pending |
| `GET /api/v1/dashboard` | `infera-asset/src/dashboard/routes.rs:32` | admin:dashboard:read | pending |
| `GET /api/v1/integration/rabbitmq` | `infera-asset/src/integration/routes.rs:24` | admin:integration:read | pending |
| `GET /api/v1/integration/docs` | `infera-asset/src/integration/routes.rs:39` | admin:integration:read | pending |
| `GET /api/v1/integration/flow` | `infera-asset/src/integration/routes.rs:48` | inspect middleware/local scope | pending |
| `POST /api/v1/actions/complete` | `infera-asset/src/action/routes.rs:200` | admin:action:complete | pending |
| `POST /api/v1/bank-transactions` | `infera-asset/src/bank/routes.rs:139` | admin:bank_transaction:create | pending |
| `GET /api/v1/leaderboard` | `infera-asset/src/leaderboard/routes.rs:35` | admin:wallet:read_own | pending |
| `GET /api/v1/me/assets` | `infera-asset/src/wallet/routes.rs:658` | inspect middleware/local scope | pending |
| `GET /api/v1/me/badges` | `infera-asset/src/wallet/routes.rs:788` | inspect middleware/local scope | pending |
| `GET /api/v1/me/badges/todos` | `infera-asset/src/wallet/routes.rs:817` | admin:wallet:read_own | pending |
| `GET /api/v1/me/asset-history` | `infera-asset/src/wallet/routes.rs:714` | admin:wallet:read_own | pending |
| `GET /api/v1/me/transactions/days` | `infera-asset/src/wallet/routes.rs:432` | admin:wallet:read_own | pending |
| `GET /api/v1/me/transactions/days/{day}` | `infera-asset/src/wallet/routes.rs:491` | admin:wallet:read_own | pending |
| `GET /api/v1/me/transactions/{id}` | `infera-asset/src/wallet/routes.rs:624` | admin:wallet:read_own | pending |
| `GET /api/v1/me/transactions` | `infera-asset/src/wallet/routes.rs:316` | inspect middleware/local scope | pending |
| `GET /api/v1/me/llm-usage` | `infera-asset/src/wallet/routes.rs:46` | admin:wallet:read_own | pending |
| `POST /api/v1/ai-reservations` | `infera-asset/src/ai_billing/routes.rs:37` | inspect middleware/local scope | pending |
| `POST /api/v1/ai-reservations/{id}/settle` | `infera-asset/src/ai_billing/routes.rs:56` | inspect middleware/local scope | pending |
| `POST /api/v1/ai-reservations/{id}/release` | `infera-asset/src/ai_billing/routes.rs:76` | inspect middleware/local scope | pending |
| `GET /api/v1/wallet` | `infera-asset/src/wallet_billing/routes.rs:460` | inspect middleware/local scope | pending |
| `POST /api/v1/wallet/topup` | `infera-asset/src/wallet_billing/routes.rs:475` | inspect middleware/local scope | pending |
| `POST /api/v1/wallet/subscriptions` | `infera-asset/src/wallet_billing/routes.rs:597` | inspect middleware/local scope | pending |
| `GET /api/v1/wallet/purchases/{id}` | `infera-asset/src/wallet_billing/routes.rs:491` | inspect middleware/local scope | pending |
| `GET /api/v1/subscriptions` | `infera-asset/src/wallet_billing/routes.rs:526` | inspect middleware/local scope | pending |
| `POST /api/v1/subscriptions/purchase` | `infera-asset/src/wallet_billing/routes.rs:510` | inspect middleware/local scope | pending |
| `POST /api/v1/subscriptions/{id}/cancel` | `infera-asset/src/wallet_billing/routes.rs:582` | inspect middleware/local scope | pending |
| `GET /api/v1/plans` | `infera-asset/src/wallet_billing/routes.rs:220` | inspect middleware/local scope | pending |
| `GET /api/v1/plans/current` | `infera-asset/src/wallet_billing/routes.rs:232` | inspect middleware/local scope | pending |
| `POST /api/v1/plans/purchase` | `infera-asset/src/wallet_billing/routes.rs:394` | inspect middleware/local scope | pending |
| `GET /api/v1/points-packs` | `infera-asset/src/wallet_billing/routes.rs:411` | inspect middleware/local scope | pending |
| `POST /api/v1/points-packs/purchase` | `infera-asset/src/wallet_billing/routes.rs:428` | inspect middleware/local scope | pending |
| `POST /api/v1/sandbox-resources/quote` | `infera-asset/src/sandbox_billing.rs:504` | inspect middleware/local scope | pending |
| `GET /api/v1/sandbox-resources/{project}` | `infera-asset/src/sandbox_billing.rs:479` | inspect middleware/local scope | pending |
| `PUT /api/v1/sandbox-resources/{project}` | `infera-asset/src/sandbox_billing.rs:554` | inspect middleware/local scope | pending |
| `DELETE /api/v1/sandbox-resources/{project}` | `infera-asset/src/sandbox_billing.rs:686` | inspect middleware/local scope | pending |
| `GET /api/v1/sandbox-resources/{project}/pricing` | `infera-asset/src/sandbox_billing.rs:520` | inspect middleware/local scope | pending |
| `POST /api/v1/sandbox-resources/{project}/pause` | `infera-asset/src/sandbox_billing.rs:638` | inspect middleware/local scope | pending |
| `POST /api/v1/sandbox-resources/{project}/resume` | `infera-asset/src/sandbox_billing.rs:653` | inspect middleware/local scope | pending |
| `POST /api/v1/subscriptions/{project}/{service}/pause` | `infera-asset/src/service_lifecycle.rs:159` | inspect middleware/local scope | pending |
| `POST /api/v1/subscriptions/{project}/{service}/resume` | `infera-asset/src/service_lifecycle.rs:186` | inspect middleware/local scope | pending |
| `POST /api/v1/subscriptions/{project}/{service}/remove` | `infera-asset/src/service_lifecycle.rs:240` | inspect middleware/local scope | pending |
| `DELETE /api/v1/subscriptions/{project}/{service}/data` | `infera-asset/src/service_lifecycle.rs:267` | inspect middleware/local scope | pending |
| `PUT /api/v1/internal/fitness/products` | `infera-asset/src/fitness.rs:18` | inspect middleware/local scope | pending |
| `POST /api/v1/games/escrows/fund` | `infera-asset/src/game_escrow.rs:196` | inspect middleware/local scope | pending |
| `GET /api/v1/games/escrows/{match_id}` | `infera-asset/src/game_escrow.rs:500` | inspect middleware/local scope | pending |
| `POST /api/v1/games/escrows/{match_id}/settle` | `infera-asset/src/game_escrow.rs:312` | inspect middleware/local scope | pending |
| `POST /api/v1/games/escrows/{match_id}/refund` | `infera-asset/src/game_escrow.rs:443` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/asset.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
