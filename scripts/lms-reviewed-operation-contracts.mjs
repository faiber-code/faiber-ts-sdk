// Source-reviewed LMS corrections at 1a557957; no native execution is certified here.
export const lmsReviewedOperationContracts = {
  "lms:GET /api/v1/classrooms/sessions/calendar": {
    methodName: "classroomCalendarGet",
    typeBase: "ClassroomCalendarGet",
    requiredQuery: true,
    query: 'import("./calendar.types.js").ClassroomCalendarQuery',
    response: 'import("./calendar.types.js").ClassroomCalendarResponse',
    dataAlias: 'import("./calendar.types.js").ClassroomCalendarData',
    purpose: "Return every authorized session and complete calendar details for 1–7 local days. Requires an IANA timezone and date or half-open midnight range. Type counts ignore selected type filters; summary respects all filters. Rejects invalid ranges (422), malformed queries (400), missing read permission (403), and unavailable profile enrichment (502). No pagination or enrichment requests are needed.",
  },
  "lms:POST /api/v1/classrooms/batch": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsBatchClassrooms>",
    "dataAlias": "import(\"./wire.types.js\").LmsBatchClassrooms",
    "purpose": "Batch classrooms records through the mounted LMS integration::routes handler."
  },
  "lms:GET /api/v1/classrooms/users/current": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsCurrentClassroomUsers>",
    "dataAlias": "import(\"./wire.types.js\").LmsCurrentClassroomUsers",
    "purpose": "Current classroom enrollment records through the mounted LMS integration::routes handler."
  },
  "lms:POST /api/v1/classrooms/users/dropout-eligibility": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsDropoutEligibility>",
    "dataAlias": "import(\"./wire.types.js\").LmsDropoutEligibility",
    "purpose": "Dropout eligibility records through the mounted LMS integration::routes handler."
  },
  "lms:POST /api/v1/courses/batch": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsBatchCourses>",
    "dataAlias": "import(\"./wire.types.js\").LmsBatchCourses",
    "purpose": "Batch courses records through the mounted LMS integration::routes handler."
  },
  "lms:POST /api/v1/courses/successors/batch": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsCourseSuccessors>",
    "dataAlias": "import(\"./wire.types.js\").LmsCourseSuccessors",
    "purpose": "Batch course successors records through the mounted LMS integration::routes handler."
  },
  "lms:POST /api/v1/integration/legacy-ids/resolve": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsLegacyResolution>",
    "dataAlias": "import(\"./wire.types.js\").LmsLegacyResolution",
    "purpose": "Resolve legacy ids records through the mounted LMS integration::routes handler."
  },
  "lms:GET /api/v1/integration/flow": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsFlowIntegration>",
    "dataAlias": "import(\"./wire.types.js\").LmsFlowIntegration",
    "purpose": "Flow integration show records through the mounted LMS integration::routes handler."
  },
  "lms:POST /api/v1/config/branding/assets": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsBrandingUpload>",
    "dataAlias": "import(\"./wire.types.js\").LmsBrandingUpload",
    "purpose": "Upload one file multipart field containing PNG, JPEG, or WebP bytes up to 8 MiB. Returns asset_key and public URL; saving branding is a separate request.",
    "auth": "IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/reports/courses": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsCourseReport[]>",
    "dataAlias": "import(\"./wire.types.js\").LmsCourseReport[]",
    "purpose": "Read aggregate classroom/student/session/attendance metrics grouped by course. Returns course_id/course_name and counts, distinct from academy catalog DTOs; requires broad report access.",
    "auth": "IDP route metadata: lms:report:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/reports/student-summary": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsStudentReport>",
    "dataAlias": "import(\"./wire.types.js\").LmsStudentReport",
    "purpose": "Read the authenticated learner or selected student_user_id summary and nested courses/sessions/deliveries/exams. Own access permits self or a Profile-verified child; unrelated students return 403 and Profile outages return 502.",
    "auth": "IDP route metadata: lms:report:read_own; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/reports/students": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsStudentReport[]>",
    "dataAlias": "import(\"./wire.types.js\").LmsStudentReport[]",
    "purpose": "Read aggregate student classroom/attendance metrics. courses is omitted on this list; date/status filters apply through classroom scope. Requires broad report access.",
    "auth": "IDP route metadata: lms:report:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/profiles/{user_id}": {
    "response": "ApiEnvelope<import(\"./wire.types.js\").LmsProfileSummary | null>",
    "dataAlias": "import(\"./wire.types.js\").LmsProfileSummary | null",
    "purpose": "Read a Profile summary by user UUID. An absent profile returns data:null; an upstream failure returns 502.",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/exams/sessions/{id}": {
    "input": "import(\"./types.js\").UpdateExamSessionInput",
    "purpose": "Patch an exam session. Omit a field to preserve it; explicit null clears PatchField members such as classroom_id, dates, staff, and counts. selection_mode and status use normal optional scalar semantics.",
    "auth": "IDP route metadata: lms:exam:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/media/images/{filename}": {
    "binaryDownload": true,
    "response": "ArrayBuffer | Uint8Array",
    "purpose": "Download raw image bytes with Content-Type and cache headers in the complete Axios response. This response has no JSON envelope; invalid or missing assets reject with AxiosError.",
    "auth": "IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/public/branding/assets/{key}": {
    "binaryDownload": true,
    "response": "ArrayBuffer | Uint8Array",
    "purpose": "Download raw image bytes with Content-Type and cache headers in the complete Axios response. This response has no JSON envelope; invalid or missing assets reject with AxiosError."
  },
  "lms:GET /api/v1/public/certificates/{code}/image.svg": {
    "textResponse": true,
    "response": "import(\"./types.js\").CertificateSvgResponse",
    "auth": "IDP route metadata lms:certificate:verify; handler accepts public verification codes without an actor guard",
    "purpose": "Render or read the cached SVG for a public, legacy, or verification code. Returns a raw SVG string with cache headers; unknown codes return 404."
  },
  "lms:GET /api/v1/public/certificates/{code}": {
    "auth": "IDP route metadata lms:certificate:verify; handler accepts public verification codes without an actor guard",
    "purpose": "Verify a public, legacy, or verification code. Returns certificate identity, validity and result fields; unknown codes return 404."
  },
  "lms:DELETE /api/v1/classrooms/{id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete classroom records through the mounted LMS classroom::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:classroom:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/courses/{id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete course records through the mounted LMS course::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:course:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/courses/categories/{id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete course category records through the mounted LMS course::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:course:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/courses/{course_id}/sessions/{id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete session records through the mounted LMS course::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:course:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/courses/reorder": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Reorder courses records through the mounted LMS course::routes handler.",
    "auth": "IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/courses/categories/reorder": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Reorder categories records through the mounted LMS course::routes handler.",
    "auth": "IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/exams/{id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete exam definition records through the mounted LMS exam::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:exam:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/exams/questions/{id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete exercise/question records through the mounted LMS exam::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:exam:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/exams/sessions/{id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete session records through the mounted LMS exam::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:exam:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/homeworks/{id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete homework definition records through the mounted LMS homework::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:homework:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/homework-banks/{id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete homework bank records through the mounted LMS homework::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:homework_bank:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/homework-banks/{homework_bank_id}/homeworks/{homework_id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete bank exercise records through the mounted LMS homework::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:homework:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/homeworks/assignments/{id}": {
    "response": "import(\"./wire.types.js\").LmsEmptyMutationResponse",
    "purpose": "Delete assignment records through the mounted LMS homework::routes handler. Successful deletion returns an empty data object.",
    "auth": "IDP route metadata: lms:homework:delete; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:DELETE /api/v1/classrooms/{id}/users/{user_id}": {
    "response": "ApiEnvelope<null>",
    "purpose": "Remove a classroom enrollment. The successful JSON envelope contains data:null; no deleted flag is returned.",
    "auth": "IDP route metadata: lms:classroom:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/homeworks/assignments": {
    "input": "import(\"./wire.types.js\").LmsCreateAssignmentInput",
    "purpose": "Assign a real active exercise to an existing learner. homework_id identifies the exercise/question, not its bank. user_id is required by repository validation; a supplied classroom must contain that learner. Invalid targets return 422; Profile validation outages return 502.",
    "auth": "IDP route metadata: lms:homework:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /": {
    "purpose": "Read the LMS process version in a success envelope. This endpoint does not probe database readiness."
  },
  "lms:GET /health": {
    "purpose": "Read the LMS process version in a success envelope. This endpoint does not probe database readiness."
  },
  "lms:GET /up": {
    "purpose": "Read the LMS process version in a success envelope. This endpoint does not probe database readiness."
  },
  "lms:GET /api/openapi.json": {
    "purpose": "Read the raw OpenAPI document. The mounted router remains authoritative because this document omits several supported operations."
  },
  "lms:GET /api/v1/config/branding": {
    "purpose": "Read persisted learner branding. The handler checks a nonnil actor and lms:config:read.",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PUT /api/v1/config/branding": {
    "purpose": "Replace learner branding, normalize localized titles, and derive icon_url from a previously uploaded icon_asset_key. Requires a nonnil actor and lms:config:update; omitted fields reset to defaults.",
    "auth": "IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/public/branding": {
    "purpose": "Read public learner branding and runtime feedback_task_origin. The discovery key is present with null when unconfigured and is not persisted as branding."
  },
  "lms:GET /api/v1/notification-rules": {
    "purpose": "List  records through the mounted LMS notifications handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:notification:settings:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PUT /api/v1/notification-rules/{key}": {
    "purpose": "Patch  records through the mounted LMS notifications handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:notification:settings:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/notification-rules/{key}/preview": {
    "purpose": "Preview  records through the mounted LMS notifications handler.",
    "auth": "IDP route metadata: lms:notification:settings:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/chat/contacts": {
    "purpose": "Contacts  records through the mounted LMS notifications::contacts handler.",
    "auth": "IDP route metadata: lms:chat:contacts:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/interactive/catalog": {
    "purpose": "Catalog  records through the mounted LMS interactive::routes handler."
  },
  "lms:GET /api/v1/interactive/certificates": {
    "purpose": "My certificates records through the mounted LMS interactive::routes handler."
  },
  "lms:POST /api/v1/interactive/courses/{id}/certificate": {
    "purpose": "Claim certificate records through the mounted LMS interactive::routes handler."
  },
  "lms:GET /api/v1/interactive/definitions": {
    "purpose": "Definitions  records through the mounted LMS interactive::routes handler."
  },
  "lms:GET /api/v1/interactive/definitions/{id}": {
    "purpose": "Definition  records through the mounted LMS interactive::routes handler."
  },
  "lms:POST /api/v1/interactive/definitions/{id}/publish": {
    "purpose": "Publish  records through the mounted LMS interactive::routes handler."
  },
  "lms:GET /api/v1/interactive/lessons/{id}": {
    "purpose": "Lesson  records through the mounted LMS interactive::routes handler."
  },
  "lms:POST /api/v1/interactive/lessons/{id}": {
    "purpose": "Save definition records through the mounted LMS interactive::routes handler."
  },
  "lms:POST /api/v1/interactive/lessons/{id}/start": {
    "purpose": "Start  records through the mounted LMS interactive::routes handler."
  },
  "lms:GET /api/v1/interactive/runs": {
    "purpose": "Runs  records through the mounted LMS interactive::routes handler."
  },
  "lms:GET /api/v1/interactive/runs/{id}": {
    "purpose": "Run  records through the mounted LMS interactive::routes handler."
  },
  "lms:PUT /api/v1/interactive/runs/{id}/draft": {
    "purpose": "Draft  records through the mounted LMS interactive::routes handler."
  },
  "lms:POST /api/v1/interactive/runs/{id}/hints": {
    "purpose": "Hint  records through the mounted LMS interactive::routes handler."
  },
  "lms:POST /api/v1/interactive/runs/{id}/attempts": {
    "purpose": "Submit  records through the mounted LMS interactive::routes handler."
  },
  "lms:GET /api/v1/interactive/runs/{id}/teacher-context": {
    "purpose": "Teacher context records through the mounted LMS interactive::routes handler."
  },
  "lms:GET /api/v1/courses/categories": {
    "purpose": "List course category records through the mounted LMS course::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/courses/categories": {
    "purpose": "Create course category records through the mounted LMS course::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:course:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/courses/categories/{id}": {
    "purpose": "Read course category records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/courses/categories/{id}": {
    "purpose": "Patch course category records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/courses": {
    "purpose": "List course records through the mounted LMS course::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/courses": {
    "purpose": "Create course records through the mounted LMS course::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:course:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/courses/{id}": {
    "purpose": "Read course records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/courses/{id}": {
    "purpose": "Patch course records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/courses/{course_id}/sessions": {
    "purpose": "List session records through the mounted LMS course::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/courses/{course_id}/sessions": {
    "purpose": "Create session records through the mounted LMS course::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:course:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/courses/{course_id}/sessions/{id}": {
    "purpose": "Read session records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/courses/{course_id}/sessions/{id}": {
    "purpose": "Patch session records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/classrooms/users/sessions/absences": {
    "purpose": "List absence records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/classrooms/session-types": {
    "purpose": "List session types records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/classrooms/sessions/today": {
    "purpose": "List today sessions records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/classrooms/sessions": {
    "purpose": "List session records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/classrooms/sessions": {
    "purpose": "Create session records through the mounted LMS classroom::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:classroom:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/classrooms/sessions/{id}": {
    "purpose": "Read session records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/classrooms/sessions/{id}": {
    "purpose": "Patch session records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:classroom:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/classrooms/sessions/{id}/attendance": {
    "purpose": "List attendance records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PUT /api/v1/classrooms/sessions/{id}/attendance": {
    "purpose": "Record attendance records through the mounted LMS classroom::routes handler.",
    "auth": "IDP route metadata: lms:classroom:attendance:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/classrooms/{id}/users": {
    "purpose": "List classroom enrollment records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/classrooms/{id}/users": {
    "purpose": "Enroll classroom user records through the mounted LMS classroom::routes handler.",
    "auth": "IDP route metadata: lms:classroom:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/classrooms/{id}/users/{user_id}": {
    "purpose": "Patch classroom user records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:classroom:update, lms:classroom:score:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/classrooms": {
    "purpose": "List authorized classrooms by name, course name, legacy code, or exact UUID-derived short ID. All matching collisions are preserved within the authorized scope. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/classrooms": {
    "purpose": "Create classroom records through the mounted LMS classroom::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:classroom:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/classrooms/{id}/completion": {
    "purpose": "Read completion records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/classrooms/{id}/finalize": {
    "purpose": "Finalize classroom records through the mounted LMS classroom::routes handler.",
    "auth": "IDP route metadata: lms:classroom:finalize; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/classrooms/{id}": {
    "purpose": "Read classroom records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/classrooms/{id}": {
    "purpose": "Patch classroom records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:classroom:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/exams": {
    "purpose": "List exam definition records through the mounted LMS exam::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/exams": {
    "purpose": "Create exam definition records through the mounted LMS exam::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:exam:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/exams/{id}": {
    "purpose": "Read exam definition records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/exams/{id}": {
    "purpose": "Patch exam definition records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:exam:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/exams/sessions": {
    "purpose": "List session records through the mounted LMS exam::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/exams/sessions": {
    "purpose": "Create session records through the mounted LMS exam::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:exam:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/exams/sessions/{id}": {
    "purpose": "Read session records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/exams/attempts": {
    "purpose": "List exam attempt records through the mounted LMS exam::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/exams/attempts/{id}": {
    "purpose": "Read exam attempt records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/exams/attempts/{id}": {
    "purpose": "Patch exam attempt records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:exam:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/exams/attempts/{id}/delivery": {
    "purpose": "Read attempt delivery records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/exams/attempts/{id}/start": {
    "purpose": "Start exam attempt records through the mounted LMS exam::routes handler.",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PUT /api/v1/exams/attempts/{id}/answers/{position}": {
    "purpose": "Save attempt answer records through the mounted LMS exam::routes handler.",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/exams/attempts/{id}/submit": {
    "purpose": "Submit exam attempt records through the mounted LMS exam::routes handler.",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/exams/questions": {
    "purpose": "List exercise/question records through the mounted LMS exam::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/exams/questions": {
    "purpose": "Create exercise/question records through the mounted LMS exam::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:exam:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/exams/questions/{id}": {
    "purpose": "Read exercise/question records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/exams/questions/{id}": {
    "purpose": "Patch exercise/question records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:exam:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/evaluations/settings": {
    "purpose": "Get settings records through the mounted LMS evaluation::routes handler.",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PUT /api/v1/evaluations/settings": {
    "purpose": "Patch settings records through the mounted LMS evaluation::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/evaluations/sessions/{id}": {
    "purpose": "Get context records through the mounted LMS evaluation::routes handler."
  },
  "lms:POST /api/v1/evaluations/sessions/{id}": {
    "purpose": "Submit  records through the mounted LMS evaluation::routes handler.",
    "input": "import(\"./wire.types.js\").LmsSubmitEvaluationInput"
  },
  "lms:POST /api/v1/media/images": {
    "purpose": "Upload the first multipart image field containing PNG, JPEG, WebP or GIF bytes up to 10 MiB. Verifies MIME and magic bytes; returns the stored URL/key. Unsupported media returns 415, oversized data 413, storage failures 502.",
    "auth": "IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homeworks": {
    "purpose": "List homework definition records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/homeworks": {
    "purpose": "Create homework definition records through the mounted LMS homework::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:homework:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homeworks/assignments/current-term": {
    "purpose": "List current term assignment records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homeworks/{id}": {
    "purpose": "Read homework definition records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/homeworks/{id}": {
    "purpose": "Patch homework definition records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:homework:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homeworks/assignments": {
    "purpose": "List assignment records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homeworks/assignments/{id}": {
    "purpose": "Read assignment records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/homeworks/assignments/{id}": {
    "purpose": "Patch assignment records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:homework:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homeworks/questions": {
    "purpose": "List exercise/question records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/homeworks/questions": {
    "purpose": "Create exercise/question records through the mounted LMS homework::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:homework:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homeworks/questions/{id}": {
    "purpose": "Read exercise/question records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/homeworks/questions/{id}": {
    "purpose": "Patch exercise/question records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:homework:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homework-banks": {
    "purpose": "List homework bank records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:homework_bank:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/homework-banks": {
    "purpose": "Create homework bank records through the mounted LMS homework::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:homework_bank:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homework-banks/{id}": {
    "purpose": "Read homework bank records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:homework_bank:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/homework-banks/{id}": {
    "purpose": "Patch homework bank records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:homework_bank:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homework-banks/{homework_bank_id}/homeworks": {
    "purpose": "List bank exercise records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/homework-banks/{homework_bank_id}/homeworks": {
    "purpose": "Create bank exercise records through the mounted LMS homework::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:homework:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/homework-banks/{homework_bank_id}/homeworks/{homework_id}": {
    "purpose": "Read bank exercise records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/homework-banks/{homework_bank_id}/homeworks/{homework_id}": {
    "purpose": "Patch bank exercise records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:homework:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/certificates/templates": {
    "purpose": "List certificate template records through the mounted LMS certificate::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:certificate:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/certificates/templates": {
    "purpose": "Create certificate template records through the mounted LMS certificate::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:certificate:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/certificates/templates/{id}": {
    "purpose": "Read certificate template records through the mounted LMS certificate::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:certificate:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/certificates/templates/{id}": {
    "purpose": "Patch certificate template records through the mounted LMS certificate::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:certificate:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/certificates": {
    "purpose": "List certificate records through the mounted LMS certificate::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:certificate:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/certificates": {
    "purpose": "Create certificate records through the mounted LMS certificate::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:certificate:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/certificates/{id}": {
    "purpose": "Read certificate records through the mounted LMS certificate::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:certificate:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/certificates/{id}": {
    "purpose": "Patch certificate records through the mounted LMS certificate::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:certificate:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/config/grades": {
    "purpose": "List school grade records through the mounted LMS config::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/config/grades": {
    "purpose": "Create school grade records through the mounted LMS config::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:config:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/config/grades/{id}": {
    "purpose": "Read school grade records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/config/grades/{id}": {
    "purpose": "Patch school grade records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/config/weekends": {
    "purpose": "List weekend weekday records through the mounted LMS config::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/config/weekends": {
    "purpose": "Create weekend weekday records through the mounted LMS config::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:config:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/config/weekends/{id}": {
    "purpose": "Read weekend weekday records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/config/weekends/{id}": {
    "purpose": "Patch weekend weekday records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/config/holidays": {
    "purpose": "List holiday records through the mounted LMS config::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/config/holidays": {
    "purpose": "Create holiday records through the mounted LMS config::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:config:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/config/holidays/{id}": {
    "purpose": "Read holiday records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/config/holidays/{id}": {
    "purpose": "Patch holiday records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/config/classroom-types": {
    "purpose": "List classroom type records through the mounted LMS config::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/config/classroom-types": {
    "purpose": "Create classroom type records through the mounted LMS config::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:config:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/config/classroom-types/{id}": {
    "purpose": "Read classroom type records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/config/classroom-types/{id}": {
    "purpose": "Patch classroom type records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/config/education-days": {
    "purpose": "List education day records through the mounted LMS config::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/config/education-days": {
    "purpose": "Create education day records through the mounted LMS config::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.",
    "auth": "IDP route metadata: lms:config:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/config/education-days/{id}": {
    "purpose": "Read education day records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:PATCH /api/v1/config/education-days/{id}": {
    "purpose": "Patch education day records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.",
    "auth": "IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/reports/teachers": {
    "purpose": "Read aggregate classroom/student/session/attendance metrics grouped by assigned teacher. from/to accept RFC3339 or UTC dates and filter classroom starts; requires broad report access.",
    "auth": "IDP route metadata: lms:report:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/reports/consultants": {
    "purpose": "Read aggregate classroom/student/session/attendance metrics grouped by assigned consultant. Date/status filters select classroom rows; requires broad report access.",
    "auth": "IDP route metadata: lms:report:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/reports/classrooms": {
    "purpose": "Read one aggregate metrics row per classroom with teacher/consultant profiles and date/status filters. Requires broad report access.",
    "auth": "IDP route metadata: lms:report:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/reports/my-students": {
    "purpose": "Read Profile-verified child summaries for the authenticated parent. Upstream Profile failure returns 502.",
    "auth": "IDP route metadata: lms:report:read_own; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/reports/assigned-students": {
    "purpose": "List students enrolled in classrooms supervised by the actor, with search and standard pagination. Removed/disabled memberships are excluded; rows are Profile summaries.",
    "auth": "IDP route metadata: lms:report:read_own; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/reports/assigned-chat-contacts": {
    "purpose": "List authorized supervised students and their Profile-linked parents, with search and standard pagination. contact_role and Profile fields are flattened in each row; upstream validation failures return 502.",
    "auth": "IDP route metadata: lms:report:read_own; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/dashboard": {
    "purpose": "List  records through the mounted LMS dashboard::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).",
    "auth": "IDP route metadata: lms:dashboard:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/docs/integration": {
    "purpose": "Integration  records through the mounted LMS docs::routes handler.",
    "auth": "IDP route metadata: lms:docs:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/service/licence/check": {
    "purpose": "Check licence records through the mounted LMS service::routes handler.",
    "requiredQuery": true
  },
  "lms:GET /api/v1/auth/self": {
    "purpose": "Get self records through the mounted LMS session::routes handler."
  },
  "lms:GET /api/v1/profiles": {
    "purpose": "Search Profile summaries through the LMS proxy using page, per_page and filter[search]. Returns LMS pagination metadata.",
    "auth": "IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:POST /api/v1/idp/option/transfer-user-data": {
    "purpose": "Transfer learner-owned educational records transactionally between distinct nonnil Profile user UUIDs. Requires Idempotency-Key (1\u2013128 printable ASCII characters without spaces); identical actor/key/payload retries replay success. Conflicts or active attempts return 409; Profile outages return 502. Declared IDP permission is user_data:transfer; the pinned handler itself checks actor presence.",
    "auth": "IDP route metadata: user_data:transfer; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/drm/compositions": {
    "purpose": "Search published DRM compositions by page, size and search, retaining selected_id when applicable. Returns composition IDs, names and category paths.",
    "auth": "IDP route metadata: lms:course:update, lms:course:create; trusted gateway identity plus any handler-local checks apply"
  },
  "lms:GET /api/v1/academy/categories": {
    "purpose": "Categories  records through the mounted LMS academy::routes handler."
  },
  "lms:GET /api/v1/academy/courses": {
    "purpose": "Courses  records through the mounted LMS academy::routes handler."
  },
  "lms:GET /api/v1/academy/courses/{id}": {
    "purpose": "Course  records through the mounted LMS academy::routes handler."
  },
  "lms:POST /api/v1/academy/courses/{id}/enroll": {
    "purpose": "Enroll  records through the mounted LMS academy::routes handler."
  },
  "lms:GET /api/v1/academy/enrollments": {
    "purpose": "My enrollments records through the mounted LMS academy::routes handler."
  },
  "lms:POST /api/v1/academy/enrollments/{id}/sessions/{session_id}/complete": {
    "purpose": "Complete session records through the mounted LMS academy::routes handler."
  },
  "lms:POST /api/v1/academy/enrollments/{id}/exams/{exam_id}/attempts": {
    "purpose": "Start exam definition records through the mounted LMS academy::routes handler."
  },
  "lms:POST /api/v1/academy/attempts/{id}/submit": {
    "purpose": "Submit exam definition records through the mounted LMS academy::routes handler."
  },
  "lms:POST /api/v1/integrations/chat/relationship": {
    "purpose": "Relationship  records through the mounted LMS notifications::contacts handler."
  }
};
