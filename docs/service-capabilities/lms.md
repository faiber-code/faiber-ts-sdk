# lms capability discovery

Courses, classrooms, enrollments, sessions, exams, assignments, progress, certificates and learning operations.

دوره، کلاس، ثبت‌نام، جلسه، آزمون، تکلیف، پیشرفت، گواهی و عملیات آموزشی.

Status: evidence inventory; semantic and wire verification remain required.

The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.

- Canonical source revision: `230453c1471d723af582308e43b5b43b5a0f7b99`
- SDK source revision: `0276d4a534979e131d07b02b79fd0ef18e1e1bab`
- Evidence inventory revision: `0276d4a534979e131d07b02b79fd0ef18e1e1bab` (sdk)
- Working HEAD: `d94f42a89b344e5b8809f62a4a4324ceda69553a`
- Source relationship: diverged

## Operation review matrix

| Method/path | Handler source | Declared permissions | Semantic review |
|---|---|---|---|
| `GET /` | `infera-lms/src/router.rs:279` | inspect middleware/local scope | pending |
| `GET /health` | `infera-lms/src/router.rs:279` | inspect middleware/local scope | pending |
| `GET /up` | `infera-lms/src/router.rs:279` | inspect middleware/local scope | pending |
| `GET /api/openapi.json` | `infera-lms/src/router.rs:273` | inspect middleware/local scope | pending |
| `GET /api/v1/config/branding` | `infera-lms/src/branding.rs:198` | lms:config:read | pending |
| `PUT /api/v1/config/branding` | `infera-lms/src/branding.rs:211` | lms:config:update | pending |
| `POST /api/v1/config/branding/assets` | `infera-lms/src/branding.rs:257` | lms:config:update | pending |
| `GET /api/v1/public/branding` | `infera-lms/src/branding.rs:183` | inspect middleware/local scope | pending |
| `GET /api/v1/public/branding/assets/{key}` | `infera-lms/src/branding.rs:299` | inspect middleware/local scope | pending |
| `GET /api/v1/notification-rules` | `infera-lms/src/notifications/mod.rs:83` | lms:notification:settings:read | pending |
| `PUT /api/v1/notification-rules/{key}` | `infera-lms/src/notifications/mod.rs:127` | lms:notification:settings:update | pending |
| `POST /api/v1/notification-rules/{key}/preview` | `infera-lms/src/notifications/mod.rs:201` | lms:notification:settings:read | pending |
| `GET /api/v1/chat/contacts` | `infera-lms/src/notifications/contacts.rs:50` | lms:chat:contacts:read | pending |
| `GET /api/v1/interactive/catalog` | `infera-lms/src/interactive/routes.rs:112` | inspect middleware/local scope | pending |
| `GET /api/v1/interactive/certificates` | `infera-lms/src/interactive/routes.rs:429` | inspect middleware/local scope | pending |
| `POST /api/v1/interactive/courses/{id}/certificate` | `infera-lms/src/interactive/routes.rs:415` | inspect middleware/local scope | pending |
| `GET /api/v1/interactive/definitions` | `infera-lms/src/interactive/routes.rs:121` | inspect middleware/local scope | pending |
| `GET /api/v1/interactive/definitions/{id}` | `infera-lms/src/interactive/routes.rs:137` | inspect middleware/local scope | pending |
| `POST /api/v1/interactive/definitions/{id}/publish` | `infera-lms/src/interactive/routes.rs:171` | inspect middleware/local scope | pending |
| `GET /api/v1/interactive/lessons/{id}` | `infera-lms/src/interactive/routes.rs:199` | inspect middleware/local scope | pending |
| `POST /api/v1/interactive/lessons/{id}` | `infera-lms/src/interactive/routes.rs:152` | inspect middleware/local scope | pending |
| `POST /api/v1/interactive/lessons/{id}/start` | `infera-lms/src/interactive/routes.rs:210` | inspect middleware/local scope | pending |
| `GET /api/v1/interactive/runs` | `infera-lms/src/interactive/routes.rs:241` | inspect middleware/local scope | pending |
| `GET /api/v1/interactive/runs/{id}` | `infera-lms/src/interactive/routes.rs:253` | inspect middleware/local scope | pending |
| `PUT /api/v1/interactive/runs/{id}/draft` | `infera-lms/src/interactive/routes.rs:262` | inspect middleware/local scope | pending |
| `POST /api/v1/interactive/runs/{id}/hints` | `infera-lms/src/interactive/routes.rs:278` | inspect middleware/local scope | pending |
| `POST /api/v1/interactive/runs/{id}/attempts` | `infera-lms/src/interactive/routes.rs:341` | inspect middleware/local scope | pending |
| `GET /api/v1/interactive/runs/{id}/teacher-context` | `infera-lms/src/interactive/routes.rs:379` | inspect middleware/local scope | pending |
| `GET /api/v1/courses/categories` | `infera-lms/src/course/routes.rs:108` | lms:course:read | pending |
| `POST /api/v1/courses/categories` | `infera-lms/src/course/routes.rs:126` | lms:course:create | pending |
| `PATCH /api/v1/courses/categories/reorder` | `infera-lms/src/course/routes.rs:70` | lms:course:update | pending |
| `GET /api/v1/courses/categories/{id}` | `infera-lms/src/course/routes.rs:147` | lms:course:read | pending |
| `PATCH /api/v1/courses/categories/{id}` | `infera-lms/src/course/routes.rs:165` | lms:course:update | pending |
| `DELETE /api/v1/courses/categories/{id}` | `infera-lms/src/course/routes.rs:187` | lms:course:delete | pending |
| `GET /api/v1/courses` | `infera-lms/src/course/routes.rs:206` | lms:course:read | pending |
| `POST /api/v1/courses` | `infera-lms/src/course/routes.rs:250` | lms:course:create | pending |
| `PATCH /api/v1/courses/reorder` | `infera-lms/src/course/routes.rs:89` | lms:course:update | pending |
| `GET /api/v1/courses/{id}` | `infera-lms/src/course/routes.rs:271` | lms:course:read | pending |
| `PATCH /api/v1/courses/{id}` | `infera-lms/src/course/routes.rs:295` | lms:course:update | pending |
| `DELETE /api/v1/courses/{id}` | `infera-lms/src/course/routes.rs:317` | lms:course:delete | pending |
| `GET /api/v1/courses/{course_id}/sessions` | `infera-lms/src/course/routes.rs:336` | lms:course:read | pending |
| `POST /api/v1/courses/{course_id}/sessions` | `infera-lms/src/course/routes.rs:361` | lms:course:create | pending |
| `GET /api/v1/courses/{course_id}/sessions/{id}` | `infera-lms/src/course/routes.rs:384` | lms:course:read | pending |
| `PATCH /api/v1/courses/{course_id}/sessions/{id}` | `infera-lms/src/course/routes.rs:408` | lms:course:update | pending |
| `DELETE /api/v1/courses/{course_id}/sessions/{id}` | `infera-lms/src/course/routes.rs:431` | lms:course:delete | pending |
| `GET /api/v1/classrooms/users/sessions/absences` | `infera-lms/src/classroom/routes.rs:386` | lms:classroom:read | pending |
| `GET /api/v1/classrooms/session-types` | `infera-lms/src/classroom/routes.rs:60` | lms:classroom:read | pending |
| `GET /api/v1/classrooms/sessions/today` | `infera-lms/src/classroom/routes.rs:77` | lms:classroom:read | pending |
| `GET /api/v1/classrooms/sessions` | `infera-lms/src/classroom/routes.rs:204` | lms:classroom:read | pending |
| `POST /api/v1/classrooms/sessions` | `infera-lms/src/classroom/routes.rs:225` | lms:classroom:create | pending |
| `GET /api/v1/classrooms/sessions/{id}` | `infera-lms/src/classroom/routes.rs:247` | lms:classroom:read | pending |
| `PATCH /api/v1/classrooms/sessions/{id}` | `infera-lms/src/classroom/routes.rs:268` | lms:classroom:update | pending |
| `GET /api/v1/classrooms/sessions/{id}/attendance` | `infera-lms/src/classroom/routes.rs:429` | lms:classroom:read | pending |
| `PUT /api/v1/classrooms/sessions/{id}/attendance` | `infera-lms/src/classroom/routes.rs:407` | lms:classroom:attendance:update | pending |
| `GET /api/v1/classrooms/{id}/users` | `infera-lms/src/classroom/routes.rs:291` | lms:classroom:read | pending |
| `POST /api/v1/classrooms/{id}/users` | `infera-lms/src/classroom/routes.rs:314` | lms:classroom:create | pending |
| `PATCH /api/v1/classrooms/{id}/users/{user_id}` | `infera-lms/src/classroom/routes.rs:342` | lms:classroom:update, lms:classroom:score:update | pending |
| `DELETE /api/v1/classrooms/{id}/users/{user_id}` | `infera-lms/src/classroom/routes.rs:367` | lms:classroom:update | pending |
| `GET /api/v1/classrooms` | `infera-lms/src/classroom/routes.rs:98` | lms:classroom:read | pending |
| `POST /api/v1/classrooms` | `infera-lms/src/classroom/routes.rs:119` | lms:classroom:create | pending |
| `GET /api/v1/classrooms/{id}/completion` | `infera-lms/src/classroom/routes.rs:482` | lms:classroom:read | pending |
| `POST /api/v1/classrooms/{id}/finalize` | `infera-lms/src/classroom/routes.rs:450` | lms:classroom:finalize | pending |
| `GET /api/v1/classrooms/{id}` | `infera-lms/src/classroom/routes.rs:141` | lms:classroom:read | pending |
| `PATCH /api/v1/classrooms/{id}` | `infera-lms/src/classroom/routes.rs:162` | lms:classroom:update | pending |
| `DELETE /api/v1/classrooms/{id}` | `infera-lms/src/classroom/routes.rs:185` | lms:classroom:delete | pending |
| `GET /api/v1/exams` | `infera-lms/src/exam/routes.rs:162` | lms:exam:read | pending |
| `POST /api/v1/exams` | `infera-lms/src/exam/routes.rs:182` | lms:exam:create | pending |
| `GET /api/v1/exams/{id}` | `infera-lms/src/exam/routes.rs:203` | lms:exam:read | pending |
| `PATCH /api/v1/exams/{id}` | `infera-lms/src/exam/routes.rs:223` | lms:exam:update | pending |
| `DELETE /api/v1/exams/{id}` | `infera-lms/src/exam/routes.rs:245` | lms:exam:delete | pending |
| `GET /api/v1/exams/sessions` | `infera-lms/src/exam/routes.rs:264` | lms:exam:read | pending |
| `POST /api/v1/exams/sessions` | `infera-lms/src/exam/routes.rs:284` | lms:exam:create | pending |
| `GET /api/v1/exams/sessions/{id}` | `infera-lms/src/exam/routes.rs:305` | lms:exam:read | pending |
| `PATCH /api/v1/exams/sessions/{id}` | `infera-lms/src/exam/routes.rs:325` | lms:exam:update | pending |
| `DELETE /api/v1/exams/sessions/{id}` | `infera-lms/src/exam/routes.rs:348` | lms:exam:delete | pending |
| `GET /api/v1/exams/attempts` | `infera-lms/src/exam/routes.rs:367` | lms:exam:read | pending |
| `GET /api/v1/exams/attempts/{id}` | `infera-lms/src/exam/routes.rs:388` | lms:exam:read | pending |
| `PATCH /api/v1/exams/attempts/{id}` | `infera-lms/src/exam/routes.rs:409` | lms:exam:update | pending |
| `GET /api/v1/exams/attempts/{id}/delivery` | `infera-lms/src/exam/routes.rs:62` | lms:exam:read | pending |
| `POST /api/v1/exams/attempts/{id}/start` | `infera-lms/src/exam/routes.rs:83` | lms:exam:read | pending |
| `PUT /api/v1/exams/attempts/{id}/answers/{position}` | `infera-lms/src/exam/routes.rs:109` | lms:exam:read | pending |
| `POST /api/v1/exams/attempts/{id}/submit` | `infera-lms/src/exam/routes.rs:136` | lms:exam:read | pending |
| `GET /api/v1/exams/questions` | `infera-lms/src/exam/routes.rs:432` | lms:exam:read | pending |
| `POST /api/v1/exams/questions` | `infera-lms/src/exam/routes.rs:452` | lms:exam:create | pending |
| `GET /api/v1/exams/questions/{id}` | `infera-lms/src/exam/routes.rs:473` | lms:exam:read | pending |
| `PATCH /api/v1/exams/questions/{id}` | `infera-lms/src/exam/routes.rs:493` | lms:exam:update | pending |
| `DELETE /api/v1/exams/questions/{id}` | `infera-lms/src/exam/routes.rs:515` | lms:exam:delete | pending |
| `GET /api/v1/evaluations/settings` | `infera-lms/src/evaluation/routes.rs:31` | lms:config:read | pending |
| `PUT /api/v1/evaluations/settings` | `infera-lms/src/evaluation/routes.rs:47` | lms:config:update | pending |
| `GET /api/v1/evaluations/sessions/{id}` | `infera-lms/src/evaluation/routes.rs:64` | inspect middleware/local scope | pending |
| `POST /api/v1/evaluations/sessions/{id}` | `infera-lms/src/evaluation/routes.rs:88` | inspect middleware/local scope | pending |
| `POST /api/v1/media/images` | `infera-lms/src/media.rs:88` | lms:course:update | pending |
| `GET /api/v1/media/images/{filename}` | `infera-lms/src/media.rs:159` | lms:course:read | pending |
| `GET /api/v1/homeworks` | `infera-lms/src/homework/routes.rs:73` | lms:homework:read | pending |
| `POST /api/v1/homeworks` | `infera-lms/src/homework/routes.rs:93` | lms:homework:create | pending |
| `GET /api/v1/homeworks/assignments/current-term` | `infera-lms/src/homework/routes.rs:415` | lms:homework:read | pending |
| `GET /api/v1/homeworks/{id}` | `infera-lms/src/homework/routes.rs:114` | lms:homework:read | pending |
| `PATCH /api/v1/homeworks/{id}` | `infera-lms/src/homework/routes.rs:134` | lms:homework:update | pending |
| `DELETE /api/v1/homeworks/{id}` | `infera-lms/src/homework/routes.rs:157` | lms:homework:delete | pending |
| `GET /api/v1/homeworks/assignments` | `infera-lms/src/homework/routes.rs:394` | lms:homework:read | pending |
| `POST /api/v1/homeworks/assignments` | `infera-lms/src/homework/routes.rs:436` | lms:homework:create | pending |
| `GET /api/v1/homeworks/assignments/{id}` | `infera-lms/src/homework/routes.rs:457` | lms:homework:read | pending |
| `PATCH /api/v1/homeworks/assignments/{id}` | `infera-lms/src/homework/routes.rs:477` | lms:homework:update | pending |
| `DELETE /api/v1/homeworks/assignments/{id}` | `infera-lms/src/homework/routes.rs:502` | lms:homework:delete | pending |
| `GET /api/v1/homeworks/questions` | `infera-lms/src/homework/routes.rs:604` | lms:homework:read | pending |
| `POST /api/v1/homeworks/questions` | `infera-lms/src/homework/routes.rs:624` | lms:homework:create | pending |
| `GET /api/v1/homeworks/questions/{id}` | `infera-lms/src/homework/routes.rs:645` | lms:homework:read | pending |
| `PATCH /api/v1/homeworks/questions/{id}` | `infera-lms/src/homework/routes.rs:665` | lms:homework:update | pending |
| `GET /api/v1/homework-banks` | `infera-lms/src/homework/routes.rs:176` | lms:homework_bank:read | pending |
| `POST /api/v1/homework-banks` | `infera-lms/src/homework/routes.rs:197` | lms:homework_bank:create | pending |
| `GET /api/v1/homework-banks/{id}` | `infera-lms/src/homework/routes.rs:219` | lms:homework_bank:read | pending |
| `PATCH /api/v1/homework-banks/{id}` | `infera-lms/src/homework/routes.rs:240` | lms:homework_bank:update | pending |
| `DELETE /api/v1/homework-banks/{id}` | `infera-lms/src/homework/routes.rs:263` | lms:homework_bank:delete | pending |
| `GET /api/v1/homework-banks/{homework_bank_id}/homeworks` | `infera-lms/src/homework/routes.rs:282` | lms:homework:read | pending |
| `POST /api/v1/homework-banks/{homework_bank_id}/homeworks` | `infera-lms/src/homework/routes.rs:305` | lms:homework:create | pending |
| `GET /api/v1/homework-banks/{homework_bank_id}/homeworks/{homework_id}` | `infera-lms/src/homework/routes.rs:329` | lms:homework:read | pending |
| `PATCH /api/v1/homework-banks/{homework_bank_id}/homeworks/{homework_id}` | `infera-lms/src/homework/routes.rs:351` | lms:homework:update | pending |
| `DELETE /api/v1/homework-banks/{homework_bank_id}/homeworks/{homework_id}` | `infera-lms/src/homework/routes.rs:375` | lms:homework:delete | pending |
| `GET /api/v1/certificates/templates` | `infera-lms/src/certificate/routes.rs:49` | lms:certificate:read | pending |
| `POST /api/v1/certificates/templates` | `infera-lms/src/certificate/routes.rs:70` | lms:certificate:create | pending |
| `GET /api/v1/certificates/templates/{id}` | `infera-lms/src/certificate/routes.rs:94` | lms:certificate:read | pending |
| `PATCH /api/v1/certificates/templates/{id}` | `infera-lms/src/certificate/routes.rs:112` | lms:certificate:update | pending |
| `GET /api/v1/certificates` | `infera-lms/src/certificate/routes.rs:137` | lms:certificate:read | pending |
| `POST /api/v1/certificates` | `infera-lms/src/certificate/routes.rs:157` | lms:certificate:create | pending |
| `GET /api/v1/certificates/{id}` | `infera-lms/src/certificate/routes.rs:178` | lms:certificate:read | pending |
| `PATCH /api/v1/certificates/{id}` | `infera-lms/src/certificate/routes.rs:196` | lms:certificate:update | pending |
| `GET /api/v1/config/grades` | `infera-lms/src/config/routes.rs:127` | lms:config:read | pending |
| `POST /api/v1/config/grades` | `infera-lms/src/config/routes.rs:145` | lms:config:create | pending |
| `GET /api/v1/config/grades/{id}` | `infera-lms/src/config/routes.rs:166` | lms:config:read | pending |
| `PATCH /api/v1/config/grades/{id}` | `infera-lms/src/config/routes.rs:184` | lms:config:update | pending |
| `GET /api/v1/config/weekends` | `infera-lms/src/config/routes.rs:207` | lms:config:read | pending |
| `POST /api/v1/config/weekends` | `infera-lms/src/config/routes.rs:225` | lms:config:create | pending |
| `GET /api/v1/config/weekends/{id}` | `infera-lms/src/config/routes.rs:246` | lms:config:read | pending |
| `PATCH /api/v1/config/weekends/{id}` | `infera-lms/src/config/routes.rs:264` | lms:config:update | pending |
| `GET /api/v1/config/holidays` | `infera-lms/src/config/routes.rs:51` | lms:config:read | pending |
| `POST /api/v1/config/holidays` | `infera-lms/src/config/routes.rs:68` | lms:config:create | pending |
| `GET /api/v1/config/holidays/{id}` | `infera-lms/src/config/routes.rs:88` | lms:config:read | pending |
| `PATCH /api/v1/config/holidays/{id}` | `infera-lms/src/config/routes.rs:105` | lms:config:update | pending |
| `GET /api/v1/config/classroom-types` | `infera-lms/src/config/routes.rs:287` | lms:config:read | pending |
| `POST /api/v1/config/classroom-types` | `infera-lms/src/config/routes.rs:306` | lms:config:create | pending |
| `GET /api/v1/config/classroom-types/{id}` | `infera-lms/src/config/routes.rs:327` | lms:config:read | pending |
| `PATCH /api/v1/config/classroom-types/{id}` | `infera-lms/src/config/routes.rs:345` | lms:config:update | pending |
| `GET /api/v1/config/education-days` | `infera-lms/src/config/routes.rs:368` | lms:config:read | pending |
| `POST /api/v1/config/education-days` | `infera-lms/src/config/routes.rs:386` | lms:config:create | pending |
| `GET /api/v1/config/education-days/{id}` | `infera-lms/src/config/routes.rs:407` | lms:config:read | pending |
| `PATCH /api/v1/config/education-days/{id}` | `infera-lms/src/config/routes.rs:425` | lms:config:update | pending |
| `GET /api/v1/reports/teachers` | `infera-lms/src/report/routes.rs:196` | lms:report:read | pending |
| `GET /api/v1/reports/consultants` | `infera-lms/src/report/routes.rs:217` | lms:report:read | pending |
| `GET /api/v1/reports/courses` | `infera-lms/src/report/routes.rs:238` | lms:report:read | pending |
| `GET /api/v1/reports/classrooms` | `infera-lms/src/report/routes.rs:259` | lms:report:read | pending |
| `GET /api/v1/reports/students` | `infera-lms/src/report/routes.rs:280` | lms:report:read | pending |
| `GET /api/v1/reports/my-students` | `infera-lms/src/report/routes.rs:101` | lms:report:read_own | pending |
| `GET /api/v1/reports/assigned-students` | `infera-lms/src/report/routes.rs:39` | lms:report:read_own | pending |
| `GET /api/v1/reports/assigned-chat-contacts` | `infera-lms/src/report/routes.rs:71` | lms:report:read_own | pending |
| `GET /api/v1/reports/student-summary` | `infera-lms/src/report/routes.rs:141` | lms:report:read_own | pending |
| `GET /api/v1/dashboard` | `infera-lms/src/dashboard/routes.rs:31` | lms:dashboard:read | pending |
| `GET /api/v1/docs/integration` | `infera-lms/src/docs/routes.rs:25` | lms:docs:read | pending |
| `GET /api/v1/service/licence/check` | `infera-lms/src/service/routes.rs:46` | inspect middleware/local scope | pending |
| `GET /api/v1/auth/self` | `infera-lms/src/session/routes.rs:36` | inspect middleware/local scope | pending |
| `GET /api/v1/profiles` | `infera-lms/src/profile_routes.rs:60` | lms:classroom:read | pending |
| `GET /api/v1/profiles/{user_id}` | `infera-lms/src/profile_routes.rs:31` | lms:classroom:read | pending |
| `POST /api/v1/idp/option/transfer-user-data` | `infera-lms/src/transfer.rs:137` | user_data:transfer | pending |
| `GET /api/v1/drm/compositions` | `infera-lms/src/drm_routes.rs:30` | lms:course:update, lms:course:create | pending |
| `GET /api/v1/academy/categories` | `infera-lms/src/academy/routes.rs:63` | inspect middleware/local scope | pending |
| `GET /api/v1/academy/courses` | `infera-lms/src/academy/routes.rs:86` | inspect middleware/local scope | pending |
| `GET /api/v1/academy/courses/{id}` | `infera-lms/src/academy/routes.rs:123` | inspect middleware/local scope | pending |
| `POST /api/v1/academy/courses/{id}/enroll` | `infera-lms/src/academy/routes.rs:148` | inspect middleware/local scope | pending |
| `GET /api/v1/academy/enrollments` | `infera-lms/src/academy/routes.rs:174` | inspect middleware/local scope | pending |
| `POST /api/v1/academy/enrollments/{id}/sessions/{session_id}/complete` | `infera-lms/src/academy/routes.rs:188` | inspect middleware/local scope | pending |
| `POST /api/v1/academy/enrollments/{id}/exams/{exam_id}/attempts` | `infera-lms/src/academy/routes.rs:232` | inspect middleware/local scope | pending |
| `POST /api/v1/academy/attempts/{id}/submit` | `infera-lms/src/academy/routes.rs:388` | inspect middleware/local scope | pending |
| `GET /api/v1/integration/flow` | `infera-lms/src/integration/routes.rs:31` | inspect middleware/local scope | pending |
| `POST /api/v1/integration/legacy-ids/resolve` | `infera-lms/src/integration/office.rs:201` | inspect middleware/local scope | pending |
| `POST /api/v1/courses/batch` | `infera-lms/src/integration/office.rs:36` | inspect middleware/local scope | pending |
| `POST /api/v1/courses/successors/batch` | `infera-lms/src/integration/office.rs:117` | inspect middleware/local scope | pending |
| `POST /api/v1/classrooms/batch` | `infera-lms/src/integration/office.rs:65` | inspect middleware/local scope | pending |
| `GET /api/v1/classrooms/users/current` | `infera-lms/src/integration/office.rs:166` | inspect middleware/local scope | pending |
| `POST /api/v1/classrooms/users/dropout-eligibility` | `infera-lms/src/integration/office.rs:180` | inspect middleware/local scope | pending |
| `POST /api/v1/integrations/chat/relationship` | `infera-lms/src/notifications/contacts.rs:87` | inspect middleware/local scope | pending |
| `GET /api/v1/public/certificates/{code}/image.svg` | `infera-lms/src/certificate/routes.rs:237` | lms:certificate:verify | pending |
| `GET /api/v1/public/certificates/{code}` | `infera-lms/src/certificate/routes.rs:219` | lms:certificate:verify | pending |

Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in `contracts/service-capabilities/lms.json`. Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.
