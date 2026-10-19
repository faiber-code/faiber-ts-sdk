# payment capability discovery

Payment gateways, transactions, checkout requests, verification and durable payment result delivery.

درگاه پرداخت، تراکنش، درخواست پرداخت، تأیید و ارسال پایدار نتیجه.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `ddc661f4a7e6f2ffdcbbd0d137ddf3831daa4eb2`
- SDK source revision: `ddc661f4a7e6f2ffdcbbd0d137ddf3831daa4eb2`
- Working HEAD: `9c9418bfbdb4ce37c0bca86a359e051f138fe17d`
- Source relationship: working_behind_sdk

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /` | `infera-payment/src/router.rs:182` | inspect middleware/local scope | pending |
| `GET /health` | `infera-payment/src/router.rs:182` | inspect middleware/local scope | pending |
| `GET /up` | `infera-payment/src/router.rs:182` | inspect middleware/local scope | pending |
| `GET /api/openapi.json` | `infera-payment/src/router.rs:176` | inspect middleware/local scope | pending |
| `GET /payments/{uuid}/redirect` | `infera-payment/src/payment_web/routes.rs:30` | inspect middleware/local scope | pending |
| `GET /payments/callbacks/{provider}` | `infera-payment/src/payment_web/routes.rs:50` | inspect middleware/local scope | pending |
| `POST /payments/callbacks/{provider}` | `infera-payment/src/payment_web/routes.rs:50` | inspect middleware/local scope | pending |
| `GET /api/v1/transactions/daily-income` | `infera-payment/src/transaction/routes.rs:133` | admin:transaction:read | pending |
| `GET /api/v1/gateways` | `infera-payment/src/gateway/routes.rs:41` | admin:gateway:read | pending |
| `POST /api/v1/gateways` | `infera-payment/src/gateway/routes.rs:73` | admin:gateway:create | pending |
| `GET /api/v1/gateways/options` | `infera-payment/src/gateway/routes.rs:59` | admin:gateway:read | pending |
| `POST /api/v1/gateways/setup-check` | `infera-payment/src/gateway/routes.rs:151` | admin:gateway:read | pending |
| `GET /api/v1/gateways/{id}` | `infera-payment/src/gateway/routes.rs:95` | admin:gateway:read | pending |
| `PATCH /api/v1/gateways/{id}` | `infera-payment/src/gateway/routes.rs:114` | admin:gateway:update | pending |
| `DELETE /api/v1/gateways/{id}` | `infera-payment/src/gateway/routes.rs:137` | admin:gateway:delete | pending |
| `GET /api/v1/transactions` | `infera-payment/src/transaction/routes.rs:157` | admin:transaction:read | pending |
| `POST /api/v1/transactions/{uuid}/verify` | `infera-payment/src/transaction/routes.rs:70` | admin:transaction:verify | pending |
| `POST /api/v1/transactions/{uuid}/reject` | `infera-payment/src/transaction/routes.rs:39` | admin:transaction:verify | pending |
| `GET /api/v1/transactions/{uuid}/verifications` | `infera-payment/src/transaction/routes.rs:101` | admin:transaction:read | pending |
| `GET /api/v1/settings` | `infera-payment/src/settings/routes.rs:29` | admin:gateway:read | pending |
| `PATCH /api/v1/settings` | `infera-payment/src/settings/routes.rs:52` | admin:gateway:update | pending |
| `GET /api/v1/auth/self` | `infera-payment/src/session/routes.rs:36` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/2done/payment` | `infera-payment/src/product_plans.rs:77` | inspect middleware/local scope | pending |
| `GET /api/v1/internal/2done/transactions/{id}` | `infera-payment/src/product_plans.rs:103` | inspect middleware/local scope | pending |
| `GET /api/v1/internal/2done/availability` | `infera-payment/src/product_plans.rs:51` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/fitness/payment` | `infera-payment/src/fitness.rs:64` | inspect middleware/local scope | pending |
| `GET /api/v1/internal/fitness/transactions/{id}` | `infera-payment/src/fitness.rs:107` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/fitness/transactions/{id}/retry` | `infera-payment/src/fitness.rs:149` | inspect middleware/local scope | pending |
| `GET /api/v1/internal/asset/purchases/{id}` | `infera-payment/src/asset_checkout.rs:74` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/shop/payment` | `infera-payment/src/shop_checkout.rs:187` | inspect middleware/local scope | pending |
| `GET /api/v1/internal/shop/transactions/{id}` | `infera-payment/src/shop_checkout.rs:247` | inspect middleware/local scope | pending |
| `GET /api/v1/internal/shop/readiness` | `infera-payment/src/shop_checkout.rs:303` | inspect middleware/local scope | pending |
| `POST /api/v1/payment` | `infera-payment/src/payment/routes.rs:27` | inspect middleware/local scope | pending |
| `GET /api/v1/transactions/{uuid}` | `infera-payment/src/payment/routes.rs:55` | inspect middleware/local scope | pending |
| `GET /api/v1/integration/docs` | `infera-payment/src/integration/routes.rs:18` | admin:integration:read | pending |
| `GET /api/v1/integration/flow` | `infera-payment/src/integration/routes.rs:26` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/payment.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
