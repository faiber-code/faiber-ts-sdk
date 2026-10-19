# profile capability discovery

People and organizations, profile properties, relations, media, education and cross-service profile filtering.

افراد و سازمان، ویژگی پروفایل، ارتباط، رسانه، تحصیل و فیلتر بین سرویس‌ها.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `96e944e6a43d0832a6485fc9ae10b9a3bd627bb0`
- SDK source revision: `f5f3d63e02e5af915f40411bb829290089f30f39`
- Working HEAD: `5b32bc1f9b8f762ddbaac2abc16b14dd3d34034b`
- Source relationship: diverged

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /health` | `infera-profile/src/router.rs:254` | inspect middleware/local scope | pending |
| `GET /up` | `infera-profile/src/router.rs:254` | inspect middleware/local scope | pending |
| `GET /api/openapi.json` | `infera-profile/src/router.rs:168` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/products` | `infera-profile/src/fitness/routes.rs:820` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/trial/redeem` | `infera-profile/src/fitness/gifts.rs:235` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/notifications` | `infera-profile/src/fitness/routes.rs:791` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/notifications/{id}/read` | `infera-profile/src/fitness/routes.rs:803` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/admin/provision` | `infera-profile/src/fitness/routes.rs:581` | fitness:admin | pending |
| `POST /api/v1/fitness/admin/catalog` | `infera-profile/src/fitness/routes.rs:646` | fitness:admin | pending |
| `GET /api/v1/fitness/team` | `infera-profile/src/fitness/routes.rs:693` | inspect middleware/local scope | pending |
| `PUT /api/v1/fitness/team` | `infera-profile/src/fitness/routes.rs:708` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/tariffs` | `infera-profile/src/fitness/routes.rs:735` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/self` | `infera-profile/src/fitness/routes.rs:48` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/intake` | `infera-profile/src/fitness/routes.rs:66` | inspect middleware/local scope | pending |
| `PUT /api/v1/fitness/intake` | `infera-profile/src/fitness/routes.rs:87` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/orders` | `infera-profile/src/fitness/routes.rs:107` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/orders` | `infera-profile/src/fitness/routes.rs:124` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/orders/{id}` | `infera-profile/src/fitness/routes.rs:201` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/orders/{id}/action` | `infera-profile/src/fitness/routes.rs:230` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/orders/{id}/plan` | `infera-profile/src/fitness/routes.rs:315` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/revisions/{id}` | `infera-profile/src/fitness/routes.rs:338` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/revisions/{id}/review` | `infera-profile/src/fitness/routes.rs:363` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/coaches` | `infera-profile/src/fitness/routes.rs:410` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/catalog` | `infera-profile/src/fitness/routes.rs:426` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/settings` | `infera-profile/src/fitness/routes.rs:438` | inspect middleware/local scope | pending |
| `PUT /api/v1/fitness/settings` | `infera-profile/src/fitness/routes.rs:469` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/voice-settings` | `infera-profile/src/fitness/routes.rs:447` | inspect middleware/local scope | pending |
| `GET /api/v1/fitness/context` | `infera-profile/src/fitness/routes.rs:516` | inspect middleware/local scope | pending |
| `POST /api/v1/fitness/proposals` | `infera-profile/src/fitness/routes.rs:543` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/fitness-chat/reserve` | `infera-profile/src/fitness/credits.rs:33` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/fitness-chat/settle` | `infera-profile/src/fitness/credits.rs:84` | inspect middleware/local scope | pending |
| `GET /api/v1/internal/plans/gifts` | `infera-profile/src/fitness/gifts.rs:132` | inspect middleware/local scope | pending |
| `POST /api/v1/internal/plans/gifts` | `infera-profile/src/fitness/gifts.rs:165` | inspect middleware/local scope | pending |
| `GET /api/v1/internal/plans/gifts/{id}` | `infera-profile/src/fitness/gifts.rs:151` | inspect middleware/local scope | pending |
| `PUT /api/v1/internal/plans/gifts/{id}` | `infera-profile/src/fitness/gifts.rs:197` | inspect middleware/local scope | pending |
| `POST /api/v1/profile/get` | `infera-profile/src/profile/routes.rs:299` | inspect middleware/local scope | pending |
| `POST /api/v1/profile/country/get` | `infera-profile/src/profile/routes.rs:322` | inspect middleware/local scope | pending |
| `POST /api/v1/profile/province/get` | `infera-profile/src/profile/routes.rs:343` | inspect middleware/local scope | pending |
| `POST /api/v1/profile/city/get` | `infera-profile/src/profile/routes.rs:364` | inspect middleware/local scope | pending |
| `GET /api/v1/profile/supports/pes` | `infera-profile/src/profile/routes.rs:385` | inspect middleware/local scope | pending |
| `GET /api/v1/profile/supports/pes/schema` | `infera-profile/src/profile/routes.rs:403` | inspect middleware/local scope | pending |
| `GET /api/v1/profile/students/pes` | `infera-profile/src/profile/routes.rs:394` | inspect middleware/local scope | pending |
| `GET /api/v1/profile/students/pes/schema` | `infera-profile/src/profile/routes.rs:412` | inspect middleware/local scope | pending |
| `GET /api/v1/profile/get-chat-list/{uuid}` | `infera-profile/src/profile/routes.rs:421` | inspect middleware/local scope | pending |
| `GET /api/v1/profile/{uuid}/avatar` | `infera-profile/src/profile/routes.rs:962` | inspect middleware/local scope | pending |
| `GET /api/v1/profile` | `infera-profile/src/profile/routes.rs:198` | profile:read | pending |
| `GET /api/v1/profile/manager` | `infera-profile/src/profile/routes.rs:120` | profile:read_manager | pending |
| `GET /api/v1/profile/accountant` | `infera-profile/src/profile/routes.rs:120` | profile:read_accountant | pending |
| `GET /api/v1/profile/support` | `infera-profile/src/profile/routes.rs:120` | profile:read_support | pending |
| `GET /api/v1/profile/consultant` | `infera-profile/src/profile/routes.rs:120` | profile:read_consultant | pending |
| `GET /api/v1/profile/teacher` | `infera-profile/src/profile/routes.rs:120` | profile:read_teacher | pending |
| `GET /api/v1/profile/student` | `infera-profile/src/profile/routes.rs:120` | profile:read_student | pending |
| `GET /api/v1/profile/parent` | `infera-profile/src/profile/routes.rs:120` | profile:read_parent | pending |
| `GET /api/v1/profile/other` | `infera-profile/src/profile/routes.rs:120` | profile:read | pending |
| `GET /api/v1/profile/{uuid}` | `infera-profile/src/profile/routes.rs:224` | profile:read | pending |
| `PATCH /api/v1/profile/{uuid}` | `infera-profile/src/profile/routes.rs:244` | profile:update | pending |
| `GET /api/v1/profile/{uuid}/full` | `infera-profile/src/profile/routes.rs:265` | profile:read | pending |
| `GET /api/v1/profile/{uuid}/admin` | `infera-profile/src/profile/routes.rs:285` | profile:read_admin | pending |
| `POST /api/v1/profile/{uuid}/avatar` | `infera-profile/src/profile/routes.rs:825` | inspect middleware/local scope | pending |
| `DELETE /api/v1/profile/{uuid}/avatar` | `infera-profile/src/profile/routes.rs:1052` | inspect middleware/local scope | pending |
| `POST /api/v1/profile/{uuid}/images` | `infera-profile/src/profile/routes.rs:841` | inspect middleware/local scope | pending |
| `GET /api/v1/profile/{uuid}/media` | `infera-profile/src/profile/routes.rs:999` | inspect middleware/local scope | pending |
| `PUT /api/v1/profile/{uuid}/freemium-session-limit` | `infera-profile/src/profile/routes.rs:487` | profile:freemium_session_limit | pending |
| `PATCH /api/v1/profile/{uuid}/freemium-session-limit` | `infera-profile/src/profile/routes.rs:487` | profile:freemium_session_limit | pending |
| `PUT /api/v1/profile/{uuid}/status` | `infera-profile/src/profile/routes.rs:439` | profile:update_status | pending |
| `PATCH /api/v1/profile/{uuid}/status` | `infera-profile/src/profile/routes.rs:439` | profile:update_status | pending |
| `PUT /api/v1/profile/{uuid}/employee-type` | `infera-profile/src/profile/routes.rs:462` | profile:update_employee_type | pending |
| `PATCH /api/v1/profile/{uuid}/employee-type` | `infera-profile/src/profile/routes.rs:462` | profile:update_employee_type | pending |
| `PUT /api/v1/profile/update/personal-information/{uuid}` | `infera-profile/src/profile/routes.rs:512` | profile:update | pending |
| `PATCH /api/v1/profile/update/personal-information/{uuid}` | `infera-profile/src/profile/routes.rs:512` | profile:update | pending |
| `GET /api/v1/profile/get/parent/{uuid}` | `infera-profile/src/profile/routes.rs:535` | profile:read | pending |
| `PUT /api/v1/profile/add/parent/{uuid}` | `infera-profile/src/profile/routes.rs:553` | profile:update | pending |
| `PATCH /api/v1/profile/add/parent/{uuid}` | `infera-profile/src/profile/routes.rs:553` | profile:update | pending |
| `DELETE /api/v1/profile/{student_uuid}/delete/parent/{parent_uuid}` | `infera-profile/src/profile/routes.rs:572` | profile:update | pending |
| `GET /api/v1/profile/get/address/{uuid}` | `infera-profile/src/profile/routes.rs:592` | profile:read | pending |
| `PUT /api/v1/profile/add/address/{uuid}` | `infera-profile/src/profile/routes.rs:610` | profile:update | pending |
| `PATCH /api/v1/profile/add/address/{uuid}` | `infera-profile/src/profile/routes.rs:610` | profile:update | pending |
| `DELETE /api/v1/profile/{uuid}/delete/address/{title}` | `infera-profile/src/profile/routes.rs:629` | profile:update | pending |
| `GET /api/v1/profile/me/addresses` | `infera-profile/src/profile/routes.rs:643` | inspect middleware/local scope | pending |
| `PUT /api/v1/profile/me/addresses` | `infera-profile/src/profile/routes.rs:661` | inspect middleware/local scope | pending |
| `PATCH /api/v1/profile/me/addresses` | `infera-profile/src/profile/routes.rs:661` | inspect middleware/local scope | pending |
| `DELETE /api/v1/profile/me/addresses/{title}` | `infera-profile/src/profile/routes.rs:680` | inspect middleware/local scope | pending |
| `GET /api/v1/profile/get/app/{uuid}` | `infera-profile/src/profile/routes.rs:699` | profile:read | pending |
| `PUT /api/v1/profile/add/app/{uuid}` | `infera-profile/src/profile/routes.rs:717` | profile:update | pending |
| `PATCH /api/v1/profile/add/app/{uuid}` | `infera-profile/src/profile/routes.rs:717` | profile:update | pending |
| `DELETE /api/v1/profile/{uuid}` | `infera-profile/src/profile/routes.rs:776` | profile:delete | pending |
| `GET /api/v1/profile/undo/{uuid}` | `infera-profile/src/profile/routes.rs:794` | profile:restore | pending |
| `DELETE /api/v1/profile/force/{uuid}` | `infera-profile/src/profile/routes.rs:812` | profile:force_delete | pending |
| `PUT /api/v1/profile/update/{uuid}/meta` | `infera-profile/src/profile/routes.rs:736` | profile:update | pending |
| `PATCH /api/v1/profile/update/{uuid}/meta` | `infera-profile/src/profile/routes.rs:736` | profile:update | pending |
| `PUT /api/v1/profile/{uuid}/properties` | `infera-profile/src/profile/routes.rs:755` | profile:update | pending |
| `PATCH /api/v1/profile/{uuid}/properties` | `infera-profile/src/profile/routes.rs:755` | profile:update | pending |
| `PUT /api/v1/profile/update/education-information/{uuid}` | `infera-profile/src/education.rs:214` | profile:update | pending |
| `POST /api/v1/profile/search` | `infera-profile/src/profile_search/routes.rs:25` | profile:search | pending |
| `POST /api/v1/profile/people/search` | `infera-profile/src/profile_search/people.rs:70` | profile:lookup | pending |
| `POST /api/v1/profile/people/resolve` | `infera-profile/src/profile_search/people.rs:160` | profile:lookup | pending |
| `GET /api/v1/profile-media/{uuid}/avatar` | `infera-profile/src/profile/routes.rs:962` | inspect middleware/local scope | pending |
| `GET /api/v1/profile-media/{uuid}/images` | `infera-profile/src/profile/routes.rs:979` | inspect middleware/local scope | pending |
| `GET /api/v1/country` | `infera-profile/src/country/routes.rs:39` | country:read | pending |
| `POST /api/v1/country` | `infera-profile/src/country/routes.rs:75` | country:create | pending |
| `GET /api/v1/country/{id}` | `infera-profile/src/country/routes.rs:56` | country:read | pending |
| `PUT /api/v1/country/{id}` | `infera-profile/src/country/routes.rs:94` | country:update | pending |
| `PATCH /api/v1/country/{id}` | `infera-profile/src/country/routes.rs:94` | country:update | pending |
| `DELETE /api/v1/country/{id}` | `infera-profile/src/country/routes.rs:114` | country:delete | pending |
| `GET /api/v1/country/undo/{id}` | `infera-profile/src/country/routes.rs:128` | country:delete | pending |
| `DELETE /api/v1/country/force/{id}` | `infera-profile/src/country/routes.rs:142` | country:delete | pending |
| `GET /api/v1/custom-type` | `infera-profile/src/custom_type/routes.rs:21` | inspect middleware/local scope | pending |
| `POST /api/v1/custom-type` | `infera-profile/src/custom_type/routes.rs:47` | inspect middleware/local scope | pending |
| `GET /api/v1/custom-type/{id}` | `infera-profile/src/custom_type/routes.rs:35` | inspect middleware/local scope | pending |
| `PATCH /api/v1/custom-type/{id}` | `infera-profile/src/custom_type/routes.rs:59` | inspect middleware/local scope | pending |
| `DELETE /api/v1/custom-type/{id}` | `infera-profile/src/custom_type/routes.rs:72` | inspect middleware/local scope | pending |
| `GET /api/v1/education` | `infera-profile/src/education.rs:116` | profile:read | pending |
| `POST /api/v1/education` | `infera-profile/src/education.rs:140` | profile:update | pending |
| `GET /api/v1/education/dependencies` | `infera-profile/src/education.rs:169` | profile:read | pending |
| `GET /api/v1/relation-type` | `infera-profile/src/relation/routes.rs:8` | inspect middleware/local scope | pending |
| `POST /api/v1/relation-type` | `infera-profile/src/relation/routes.rs:10` | inspect middleware/local scope | pending |
| `GET /api/v1/relation-type/{id}` | `infera-profile/src/relation/routes.rs:9` | inspect middleware/local scope | pending |
| `PUT /api/v1/relation-type/{id}` | `infera-profile/src/relation/routes.rs:11` | inspect middleware/local scope | pending |
| `DELETE /api/v1/relation-type/{id}` | `infera-profile/src/relation/routes.rs:12` | inspect middleware/local scope | pending |
| `GET /api/v1/profile-relation` | `infera-profile/src/relation/routes.rs:13` | inspect middleware/local scope | pending |
| `POST /api/v1/profile-relation` | `infera-profile/src/relation/routes.rs:15` | inspect middleware/local scope | pending |
| `GET /api/v1/profile-relation/{id}` | `infera-profile/src/relation/routes.rs:14` | inspect middleware/local scope | pending |
| `PUT /api/v1/profile-relation/{id}` | `infera-profile/src/relation/routes.rs:16` | inspect middleware/local scope | pending |
| `DELETE /api/v1/profile-relation/{id}` | `infera-profile/src/relation/routes.rs:17` | inspect middleware/local scope | pending |
| `GET /api/v1/referral-source` | `infera-profile/src/referral/routes.rs:8` | inspect middleware/local scope | pending |
| `POST /api/v1/referral-source` | `infera-profile/src/referral/routes.rs:10` | inspect middleware/local scope | pending |
| `GET /api/v1/referral-source/{id}` | `infera-profile/src/referral/routes.rs:9` | inspect middleware/local scope | pending |
| `PUT /api/v1/referral-source/{id}` | `infera-profile/src/referral/routes.rs:11` | inspect middleware/local scope | pending |
| `DELETE /api/v1/referral-source/{id}` | `infera-profile/src/referral/routes.rs:12` | inspect middleware/local scope | pending |
| `GET /api/v1/profile-referral/{profile_id}` | `infera-profile/src/referral/routes.rs:14` | inspect middleware/local scope | pending |
| `PUT /api/v1/profile-referral/{profile_id}` | `infera-profile/src/referral/routes.rs:13` | inspect middleware/local scope | pending |
| `GET /api/v1/state-system` | `infera-profile/src/lifecycle/routes.rs:12` | inspect middleware/local scope | pending |
| `POST /api/v1/state-system` | `infera-profile/src/lifecycle/routes.rs:14` | inspect middleware/local scope | pending |
| `GET /api/v1/state-system/{id}` | `infera-profile/src/lifecycle/routes.rs:13` | inspect middleware/local scope | pending |
| `PUT /api/v1/state-system/{id}` | `infera-profile/src/lifecycle/routes.rs:15` | inspect middleware/local scope | pending |
| `DELETE /api/v1/state-system/{id}` | `infera-profile/src/lifecycle/routes.rs:16` | inspect middleware/local scope | pending |
| `GET /api/v1/state-definition` | `infera-profile/src/lifecycle/routes.rs:18` | inspect middleware/local scope | pending |
| `POST /api/v1/state-definition` | `infera-profile/src/lifecycle/routes.rs:20` | inspect middleware/local scope | pending |
| `GET /api/v1/state-definition/{id}` | `infera-profile/src/lifecycle/routes.rs:19` | inspect middleware/local scope | pending |
| `PUT /api/v1/state-definition/{id}` | `infera-profile/src/lifecycle/routes.rs:21` | inspect middleware/local scope | pending |
| `DELETE /api/v1/state-definition/{id}` | `infera-profile/src/lifecycle/routes.rs:22` | inspect middleware/local scope | pending |
| `GET /api/v1/state-action` | `infera-profile/src/lifecycle/routes.rs:24` | inspect middleware/local scope | pending |
| `POST /api/v1/state-action` | `infera-profile/src/lifecycle/routes.rs:26` | inspect middleware/local scope | pending |
| `POST /api/v1/state-action/dry-run` | `infera-profile/src/lifecycle/routes.rs:27` | inspect middleware/local scope | pending |
| `GET /api/v1/state-action/{id}` | `infera-profile/src/lifecycle/routes.rs:25` | inspect middleware/local scope | pending |
| `PUT /api/v1/state-action/{id}` | `infera-profile/src/lifecycle/routes.rs:28` | inspect middleware/local scope | pending |
| `DELETE /api/v1/state-action/{id}` | `infera-profile/src/lifecycle/routes.rs:29` | inspect middleware/local scope | pending |
| `POST /api/v1/state-evaluation/preview` | `infera-profile/src/lifecycle/routes.rs:31` | inspect middleware/local scope | pending |
| `POST /api/v1/state-evaluation/validate-rule` | `infera-profile/src/lifecycle/routes.rs:32` | inspect middleware/local scope | pending |
| `POST /api/v1/state-evaluation/evaluate` | `infera-profile/src/lifecycle/routes.rs:33` | inspect middleware/local scope | pending |
| `GET /api/v1/state-evaluation/transitions` | `infera-profile/src/lifecycle/routes.rs:35` | inspect middleware/local scope | pending |
| `GET /api/v1/state-evaluation/outbox` | `infera-profile/src/lifecycle/routes.rs:37` | inspect middleware/local scope | pending |
| `GET /api/v1/state-evaluation/action-attempts` | `infera-profile/src/lifecycle/routes.rs:39` | inspect middleware/local scope | pending |
| `POST /api/v1/state-evaluation/outbox/{id}/retry` | `infera-profile/src/lifecycle/routes.rs:40` | inspect middleware/local scope | pending |
| `POST /api/v1/state-evaluation/outbox/process` | `infera-profile/src/lifecycle/routes.rs:41` | inspect middleware/local scope | pending |
| `GET /api/v1/province` | `infera-profile/src/province/routes.rs:29` | province:read | pending |
| `POST /api/v1/province` | `infera-profile/src/province/routes.rs:69` | province:create | pending |
| `GET /api/v1/province/{id}` | `infera-profile/src/province/routes.rs:50` | province:read | pending |
| `PUT /api/v1/province/{id}` | `infera-profile/src/province/routes.rs:88` | province:update | pending |
| `PATCH /api/v1/province/{id}` | `infera-profile/src/province/routes.rs:88` | province:update | pending |
| `DELETE /api/v1/province/{id}` | `infera-profile/src/province/routes.rs:108` | province:delete | pending |
| `GET /api/v1/province/undo/{id}` | `infera-profile/src/province/routes.rs:126` | province:delete | pending |
| `DELETE /api/v1/province/force/{id}` | `infera-profile/src/province/routes.rs:144` | province:delete | pending |
| `GET /api/v1/city` | `infera-profile/src/city/routes.rs:29` | city:read | pending |
| `POST /api/v1/city` | `infera-profile/src/city/routes.rs:61` | city:create | pending |
| `GET /api/v1/city/{id}` | `infera-profile/src/city/routes.rs:46` | city:read | pending |
| `PUT /api/v1/city/{id}` | `infera-profile/src/city/routes.rs:80` | city:update | pending |
| `PATCH /api/v1/city/{id}` | `infera-profile/src/city/routes.rs:80` | city:update | pending |
| `DELETE /api/v1/city/{id}` | `infera-profile/src/city/routes.rs:100` | city:delete | pending |
| `GET /api/v1/city/undo/{id}` | `infera-profile/src/city/routes.rs:118` | city:delete | pending |
| `DELETE /api/v1/city/force/{id}` | `infera-profile/src/city/routes.rs:136` | city:delete | pending |
| `GET /api/v1/setting` | `infera-profile/src/setting/routes.rs:25` | setting:read | pending |
| `POST /api/v1/setting` | `infera-profile/src/setting/routes.rs:42` | setting:create | pending |
| `GET /api/v1/profile-property-definition` | `infera-profile/src/profile_property/routes.rs:43` | profile_property_definition:read | pending |
| `POST /api/v1/profile-property-definition` | `infera-profile/src/profile_property/routes.rs:83` | profile_property_definition:create | pending |
| `GET /api/v1/profile-property-definition/{id}` | `infera-profile/src/profile_property/routes.rs:64` | profile_property_definition:read | pending |
| `PUT /api/v1/profile-property-definition/{id}` | `infera-profile/src/profile_property/routes.rs:102` | profile_property_definition:update | pending |
| `PATCH /api/v1/profile-property-definition/{id}` | `infera-profile/src/profile_property/routes.rs:102` | profile_property_definition:update | pending |
| `DELETE /api/v1/profile-property-definition/{id}` | `infera-profile/src/profile_property/routes.rs:122` | profile_property_definition:delete | pending |
| `GET /api/v1/profile-property-definition/undo/{id}` | `infera-profile/src/profile_property/routes.rs:136` | profile_property_definition:restore | pending |
| `DELETE /api/v1/profile-property-definition/force/{id}` | `infera-profile/src/profile_property/routes.rs:150` | profile_property_definition:force_delete | pending |
| `GET /api/v1/trusted-service` | `infera-profile/src/trusted_service/routes.rs:49` | trusted_service:read | pending |
| `POST /api/v1/trusted-service` | `infera-profile/src/trusted_service/routes.rs:89` | trusted_service:create | pending |
| `GET /api/v1/trusted-service/{id}` | `infera-profile/src/trusted_service/routes.rs:70` | trusted_service:read | pending |
| `PUT /api/v1/trusted-service/{id}` | `infera-profile/src/trusted_service/routes.rs:108` | trusted_service:update | pending |
| `PATCH /api/v1/trusted-service/{id}` | `infera-profile/src/trusted_service/routes.rs:108` | trusted_service:update | pending |
| `DELETE /api/v1/trusted-service/{id}` | `infera-profile/src/trusted_service/routes.rs:128` | trusted_service:delete | pending |
| `GET /api/v1/trusted-service/{id}/event` | `infera-profile/src/trusted_service/routes.rs:142` | trusted_service:read | pending |
| `POST /api/v1/trusted-service/{id}/event` | `infera-profile/src/trusted_service/routes.rs:164` | trusted_service:create | pending |
| `GET /api/v1/trusted-service/{id}/event/{event_id}` | `infera-profile/src/trusted_service/routes.rs:184` | trusted_service:read | pending |
| `PUT /api/v1/trusted-service/{id}/event/{event_id}` | `infera-profile/src/trusted_service/routes.rs:203` | trusted_service:update | pending |
| `PATCH /api/v1/trusted-service/{id}/event/{event_id}` | `infera-profile/src/trusted_service/routes.rs:203` | trusted_service:update | pending |
| `DELETE /api/v1/trusted-service/{id}/event/{event_id}` | `infera-profile/src/trusted_service/routes.rs:225` | trusted_service:delete | pending |
| `GET /api/v1/survey` | `infera-profile/src/survey/routes.rs:36` | survey:read | pending |
| `POST /api/v1/survey` | `infera-profile/src/survey/routes.rs:47` | survey:create | pending |
| `POST /api/v1/log-action` | `infera-profile/src/log_action/routes.rs:42` | log_action:create | pending |
| `POST /api/v1/log-action/{slug}` | `infera-profile/src/log_action/routes.rs:68` | log_action:create | pending |
| `POST /api/v1/log-action/direct/{slug}` | `infera-profile/src/log_action/routes.rs:78` | inspect middleware/local scope | pending |
| `GET /api/v1/logger` | `infera-profile/src/logger/routes.rs:21` | inspect middleware/local scope | pending |
| `GET /api/v1/logger/{log}` | `infera-profile/src/logger/routes.rs:31` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/self` | `infera-profile/src/session/routes.rs:111` | inspect middleware/local scope | pending |
| `PATCH /api/v1/auth/self` | `infera-profile/src/session/routes.rs:140` | inspect middleware/local scope | pending |
| `PUT /api/v1/auth/self/onboarding` | `infera-profile/src/session/routes.rs:70` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/chat-context` | `infera-profile/src/session/routes.rs:95` | inspect middleware/local scope | pending |
| `POST /api/v1/parent/get` | `infera-profile/src/option/routes.rs:57` | inspect middleware/local scope | pending |
| `POST /api/v1/parent/children/get` | `infera-profile/src/option/routes.rs:44` | inspect middleware/local scope | pending |
| `POST /api/v1/address/get` | `infera-profile/src/option/routes.rs:74` | inspect middleware/local scope | pending |
| `GET /api/v1/dependency` | `infera-profile/src/option/routes.rs:102` | dependency:read | pending |
| `GET /api/v1/identity` | `infera-profile/src/option/routes.rs:115` | inspect middleware/local scope | pending |
| `GET /api/v1/integration/docs` | `infera-profile/src/integration/routes.rs:22` | admin:integration:read | pending |
| `GET /api/v1/integration/flow` | `infera-profile/src/integration/routes.rs:31` | inspect middleware/local scope | pending |
| `GET /campaign` | `infera-profile/src/campaign/routes.rs:48` | inspect middleware/local scope | pending |
| `GET /campaign/{id}` | `infera-profile/src/campaign/routes.rs:61` | inspect middleware/local scope | pending |
| `POST /campaign/{id}/contributions` | `infera-profile/src/campaign/routes.rs:91` | inspect middleware/local scope | pending |
| `GET /campaign-profile/me/contributions` | `infera-profile/src/campaign/routes.rs:134` | inspect middleware/local scope | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/profile.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
