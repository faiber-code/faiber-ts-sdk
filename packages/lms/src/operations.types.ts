import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: SubmitExamRequest. */
export type AcademySubmitExamPostInput = import("./types.js").AcademySubmitExamInput;
/** Backend response type: Value. */
export type AcademySubmitExamPostResponse = import("./types.js").AcademyExamResultResponse;

/** Backend response type: Value. */
export type AcademyCategoriesGetResponse = import("./types.js").AcademyCategoriesResponse;

/** Backend query type: CatalogQuery. */
export interface AcademyCoursesGetQuery extends QueryParams {
  "category_id"?: string | null;
}
/** Backend response type: Value. */
export type AcademyCoursesGetResponse = import("./types.js").AcademyCoursesResponse;

/** Backend response type: Value. */
export type AcademyCourseGetResponse = import("./types.js").AcademyCourseResponse;

/** Backend response type: Value. */
export type AcademyEnrollPostResponse = import("./types.js").AcademyEnrollmentStartResponse;

/** Backend response type: Value. */
export type AcademyMyEnrollmentsGetResponse = import("./types.js").AcademyEnrollmentsResponse;

/** Backend response type: Value. */
export type AcademyStartExamPostResponse = import("./types.js").AcademyExamAttemptResponse;

/** Backend request type: CompleteRequest. */
export type AcademyCompleteSessionPostInput = import("./types.js").AcademyCompleteSessionInput;
/** Backend response type: Value. */
export type AcademyCompleteSessionPostResponse = import("./types.js").AcademySessionCompletionResponse;

/** Backend response type: SessionResponse. */
export interface SessionGetSelfGetResponseData extends JsonObject {
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "roles": string[];
  "permissions": string[];
}
export interface SessionGetSelfGetResponse extends ApiEnvelope<SessionGetSelfGetResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface CertificateIndexCertificateGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::CertificateResponse>. */
export interface CertificateIndexCertificateGetResponseItem extends JsonObject {
  "id": string;
  "public_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "title": string;
  "certificate_template_id"?: string | null;
  "grade_id"?: string | null;
  "score"?: number | null;
  "passing_mark"?: number | null;
  "status": string;
  "verification_code"?: string | null;
  "legacy_code"?: string | null;
  "issued_by"?: string | null;
  "issued_at": string;
  "media_url"?: string | null;
  "revoked_at"?: string | null;
  "revoke_reason"?: string | null;
  "render_snapshot": JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface CertificateIndexCertificateGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface CertificateIndexCertificateGetResponseData extends JsonObject {
  "data": CertificateIndexCertificateGetResponseItem[];
  "meta": CertificateIndexCertificateGetResponsePageMeta;
}
export interface CertificateIndexCertificateGetResponse extends ApiEnvelope<CertificateIndexCertificateGetResponseData> {
}

/** Backend request type: models::CreateCertificateRequest. */
export interface CertificateStoreCertificatePostInput extends JsonObject {
  "user_id": string;
  "course_id"?: string | null;
  "classroom_id"?: string | null;
  "title": string;
  "certificate_template_id"?: string | null;
  "grade_id"?: string | null;
  "status"?: string | null;
  "verification_code"?: string | null;
  "issued_by"?: string | null;
  "issued_at": string;
  "media_url"?: string | null;
  "render_snapshot"?: JsonValue | null;
}
/** Backend response type: models::CertificateResponse. */
export interface CertificateStoreCertificatePostResponseData extends JsonObject {
  "id": string;
  "public_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "title": string;
  "certificate_template_id"?: string | null;
  "grade_id"?: string | null;
  "score"?: number | null;
  "passing_mark"?: number | null;
  "status": string;
  "verification_code"?: string | null;
  "legacy_code"?: string | null;
  "issued_by"?: string | null;
  "issued_at": string;
  "media_url"?: string | null;
  "revoked_at"?: string | null;
  "revoke_reason"?: string | null;
  "render_snapshot": JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface CertificateStoreCertificatePostResponse extends ApiEnvelope<CertificateStoreCertificatePostResponseData> {
}

/** Backend response type: models::CertificateResponse. */
export interface CertificateShowCertificateGetResponseData extends JsonObject {
  "id": string;
  "public_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "title": string;
  "certificate_template_id"?: string | null;
  "grade_id"?: string | null;
  "score"?: number | null;
  "passing_mark"?: number | null;
  "status": string;
  "verification_code"?: string | null;
  "legacy_code"?: string | null;
  "issued_by"?: string | null;
  "issued_at": string;
  "media_url"?: string | null;
  "revoked_at"?: string | null;
  "revoke_reason"?: string | null;
  "render_snapshot": JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface CertificateShowCertificateGetResponse extends ApiEnvelope<CertificateShowCertificateGetResponseData> {
}

/** Backend request type: models::UpdateCertificateRequest. */
export interface CertificateUpdateCertificatePatchInput extends JsonObject {
  "user_id"?: string | null;
  "course_id"?: string | null;
  "classroom_id"?: string | null;
  "title"?: string | null;
  "status"?: string | null;
  "issued_at"?: string | null;
  "media_url"?: string | null;
  "revoke_reason"?: string | null;
}
/** Backend response type: models::CertificateResponse. */
export interface CertificateUpdateCertificatePatchResponseData extends JsonObject {
  "id": string;
  "public_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "title": string;
  "certificate_template_id"?: string | null;
  "grade_id"?: string | null;
  "score"?: number | null;
  "passing_mark"?: number | null;
  "status": string;
  "verification_code"?: string | null;
  "legacy_code"?: string | null;
  "issued_by"?: string | null;
  "issued_at": string;
  "media_url"?: string | null;
  "revoked_at"?: string | null;
  "revoke_reason"?: string | null;
  "render_snapshot": JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface CertificateUpdateCertificatePatchResponse extends ApiEnvelope<CertificateUpdateCertificatePatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface CertificateIndexTemplateGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::CertificateTemplateResponse>. */
export interface CertificateIndexTemplateGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "name_en"?: string | null;
  "background_url": string;
  "canvas_width": number;
  "canvas_height": number;
  "layout": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CertificateIndexTemplateGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface CertificateIndexTemplateGetResponseData extends JsonObject {
  "data": CertificateIndexTemplateGetResponseItem[];
  "meta": CertificateIndexTemplateGetResponsePageMeta;
}
export interface CertificateIndexTemplateGetResponse extends ApiEnvelope<CertificateIndexTemplateGetResponseData> {
}

/** Backend request type: models::CreateCertificateTemplateRequest. */
export interface CertificateStoreTemplatePostInput extends JsonObject {
  "name": string;
  "name_en"?: string | null;
  "background_url": string;
  "canvas_width": number;
  "canvas_height": number;
  "layout"?: JsonValue | null;
  "status"?: string | null;
}
/** Backend response type: models::CertificateTemplateResponse. */
export interface CertificateStoreTemplatePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "name_en"?: string | null;
  "background_url": string;
  "canvas_width": number;
  "canvas_height": number;
  "layout": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CertificateStoreTemplatePostResponse extends ApiEnvelope<CertificateStoreTemplatePostResponseData> {
}

/** Backend response type: models::CertificateTemplateResponse. */
export interface CertificateShowTemplateGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "name_en"?: string | null;
  "background_url": string;
  "canvas_width": number;
  "canvas_height": number;
  "layout": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CertificateShowTemplateGetResponse extends ApiEnvelope<CertificateShowTemplateGetResponseData> {
}

/** Backend request type: models::UpdateCertificateTemplateRequest. */
export interface CertificateUpdateTemplatePatchInput extends JsonObject {
  "name"?: string | null;
  "name_en"?: string | null;
  "background_url"?: string | null;
  "canvas_width"?: number | null;
  "canvas_height"?: number | null;
  "layout"?: JsonValue | null;
  "status"?: string | null;
}
/** Backend response type: models::CertificateTemplateResponse. */
export interface CertificateUpdateTemplatePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "name_en"?: string | null;
  "background_url": string;
  "canvas_width": number;
  "canvas_height": number;
  "layout": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CertificateUpdateTemplatePatchResponse extends ApiEnvelope<CertificateUpdateTemplatePatchResponseData> {
}

/** Backend query type: models::ClassroomListQuery. */
export interface ClassroomIndexClassroomGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "search"?: string | null;
  "status"?: string | null;
  "course_id"?: string | null;
  "user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "consultant_user_id"?: string | null;
  "support_user_id"?: string | null;
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: crate::models::PagedResult<models::ClassroomResponse>. */
export interface ClassroomIndexClassroomGetResponseItem extends JsonObject {
  "id": string;
  "course_id": string;
  "course_name"?: string | null;
  "course_category_id"?: string | null;
  "course_sort_order"?: number | null;
  "course_passing_mark"?: number | null;
  "current_user_score"?: number | null;
  "current_user_passed"?: boolean | null;
  "session_count": number;
  "completed_session_count": number;
  "progress_rate": number;
  "name": string;
  "code"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "classroom_type_id"?: string | null;
  "school_grade_id"?: string | null;
  "grade_id"?: string | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "capacity"?: number | null;
  "notifications": JsonValue;
  "weekly_schedule": JsonValue;
  "check_sessions": JsonValue;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomIndexClassroomGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ClassroomIndexClassroomGetResponseData extends JsonObject {
  "data": ClassroomIndexClassroomGetResponseItem[];
  "meta": ClassroomIndexClassroomGetResponsePageMeta;
}
export interface ClassroomIndexClassroomGetResponse extends ApiEnvelope<ClassroomIndexClassroomGetResponseData> {
}

/** Backend request type: models::CreateClassroomRequest. */
export interface ClassroomStoreClassroomPostInput extends JsonObject {
  "course_id": string;
  "name": string;
  "code"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "classroom_type_id"?: string | null;
  "school_grade_id"?: string | null;
  "grade_id"?: string | null;
  "teacher_user_id"?: string | null;
  "consultant_user_id"?: string | null;
  "support_user_id"?: string | null;
  "capacity"?: number | null;
  "notifications"?: JsonValue | null;
  "weekly_schedule"?: JsonValue | null;
  "check_sessions"?: JsonValue | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
}
/** Backend response type: models::ClassroomResponse. */
export interface ClassroomStoreClassroomPostResponseData extends JsonObject {
  "id": string;
  "course_id": string;
  "course_name"?: string | null;
  "course_category_id"?: string | null;
  "course_sort_order"?: number | null;
  "course_passing_mark"?: number | null;
  "current_user_score"?: number | null;
  "current_user_passed"?: boolean | null;
  "session_count": number;
  "completed_session_count": number;
  "progress_rate": number;
  "name": string;
  "code"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "classroom_type_id"?: string | null;
  "school_grade_id"?: string | null;
  "grade_id"?: string | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "capacity"?: number | null;
  "notifications": JsonValue;
  "weekly_schedule": JsonValue;
  "check_sessions": JsonValue;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomStoreClassroomPostResponse extends ApiEnvelope<ClassroomStoreClassroomPostResponseData> {
}

/** Backend response type: models::ClassroomResponse. */
export interface ClassroomShowClassroomGetResponseData extends JsonObject {
  "id": string;
  "course_id": string;
  "course_name"?: string | null;
  "course_category_id"?: string | null;
  "course_sort_order"?: number | null;
  "course_passing_mark"?: number | null;
  "current_user_score"?: number | null;
  "current_user_passed"?: boolean | null;
  "session_count": number;
  "completed_session_count": number;
  "progress_rate": number;
  "name": string;
  "code"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "classroom_type_id"?: string | null;
  "school_grade_id"?: string | null;
  "grade_id"?: string | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "capacity"?: number | null;
  "notifications": JsonValue;
  "weekly_schedule": JsonValue;
  "check_sessions": JsonValue;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomShowClassroomGetResponse extends ApiEnvelope<ClassroomShowClassroomGetResponseData> {
}

/** Backend request type: models::UpdateClassroomRequest. */
export interface ClassroomUpdateClassroomPatchInput extends JsonObject {
  "course_id"?: string | null;
  "name"?: string | null;
  "code"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "classroom_type_id"?: string | null;
  "school_grade_id"?: string | null;
  "grade_id"?: string | null;
  "teacher_user_id"?: string | null;
  "consultant_user_id"?: string | null;
  "support_user_id"?: string | null;
  "capacity"?: number | null;
  "notifications"?: JsonValue | null;
  "weekly_schedule"?: JsonValue | null;
  "check_sessions"?: JsonValue | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
/** Backend response type: models::ClassroomResponse. */
export interface ClassroomUpdateClassroomPatchResponseData extends JsonObject {
  "id": string;
  "course_id": string;
  "course_name"?: string | null;
  "course_category_id"?: string | null;
  "course_sort_order"?: number | null;
  "course_passing_mark"?: number | null;
  "current_user_score"?: number | null;
  "current_user_passed"?: boolean | null;
  "session_count": number;
  "completed_session_count": number;
  "progress_rate": number;
  "name": string;
  "code"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "classroom_type_id"?: string | null;
  "school_grade_id"?: string | null;
  "grade_id"?: string | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "capacity"?: number | null;
  "notifications": JsonValue;
  "weekly_schedule": JsonValue;
  "check_sessions": JsonValue;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomUpdateClassroomPatchResponse extends ApiEnvelope<ClassroomUpdateClassroomPatchResponseData> {
}

/** Backend response type: models::CompletionReviewResponse. */
export interface ClassroomShowCompletionGetResponseData extends JsonObject {
  "classroom_id": string;
  "classroom_name": string;
  "classroom_status": string;
  "course_id": string;
  "course_name": string;
  "passing_mark"?: number | null;
  "exams": BackendJson<"CompletionExam">[];
  "certificate_templates": BackendJson<"CompletionCertificateTemplate">[];
  "students": BackendJson<"CompletionStudent">[];
}
export interface ClassroomShowCompletionGetResponse extends ApiEnvelope<ClassroomShowCompletionGetResponseData> {
}

/** Backend request type: models::FinalizeClassroomRequest. */
export interface ClassroomFinalizeClassroomPostInput extends JsonObject {
  "idempotency_key": string;
  "students": BackendJson<"FinalScoreRequest">[];
}
/** Backend response type: models::FinalizeClassroomResponse. */
export interface ClassroomFinalizeClassroomPostResponseData extends JsonObject {
  "classroom_id": string;
  "grades_finalized": number;
  "certificates_issued": number;
  "already_finalized": boolean;
}
export interface ClassroomFinalizeClassroomPostResponse extends ApiEnvelope<ClassroomFinalizeClassroomPostResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ClassroomIndexClassroomUsersGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::ClassroomUserResponse>. */
export interface ClassroomIndexClassroomUsersGetResponseItem extends JsonObject {
  "id": string;
  "classroom_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "score"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomIndexClassroomUsersGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ClassroomIndexClassroomUsersGetResponseData extends JsonObject {
  "data": ClassroomIndexClassroomUsersGetResponseItem[];
  "meta": ClassroomIndexClassroomUsersGetResponsePageMeta;
}
export interface ClassroomIndexClassroomUsersGetResponse extends ApiEnvelope<ClassroomIndexClassroomUsersGetResponseData> {
}

/** Backend request type: models::EnrollClassroomUserRequest. */
export interface ClassroomEnrollClassroomUserPostInput extends JsonObject {
  "user_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::ClassroomUserResponse. */
export interface ClassroomEnrollClassroomUserPostResponseData extends JsonObject {
  "id": string;
  "classroom_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "score"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomEnrollClassroomUserPostResponse extends ApiEnvelope<ClassroomEnrollClassroomUserPostResponseData> {
}

/** Backend response type: (). */
export interface ClassroomRemoveClassroomUserDeleteResponse extends ApiEnvelope<JsonObject> {
}

/** Backend request type: models::UpdateClassroomUserRequest. */
export interface ClassroomUpdateClassroomUserPatchInput extends JsonObject {
  "score"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::ClassroomUserResponse. */
export interface ClassroomUpdateClassroomUserPatchResponseData extends JsonObject {
  "id": string;
  "classroom_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "score"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomUpdateClassroomUserPatchResponse extends ApiEnvelope<ClassroomUpdateClassroomUserPatchResponseData> {
}

/** Backend request type: IdBatch. */
export interface IntegrationBatchClassroomsPostInput extends JsonObject {
  "ids"?: string[];
}
/** Backend response type: Value. */
export interface IntegrationBatchClassroomsPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<models::ClassroomSessionTypeResponse>. */
export interface ClassroomIndexSessionTypesGetResponseItem extends JsonObject {
  "id": string;
  "code": string;
  "name": string;
  "name_fa"?: string | null;
  "is_online": boolean;
  "status": string;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomIndexSessionTypesGetResponse extends ApiEnvelope<ClassroomIndexSessionTypesGetResponseItem[]> {
}

/** Backend query type: models::SessionListQuery. */
export interface ClassroomIndexSessionGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "status"?: string | null;
  "classroom_id"?: string | null;
  "user_id"?: string | null;
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: crate::models::PagedResult<models::SessionResponse>. */
export interface ClassroomIndexSessionGetResponseItem extends JsonObject {
  "id": string;
  "classroom_id": string;
  "classroom_name"?: string | null;
  "course_session_id"?: string | null;
  "course_session"?: import("./types.js").ClassroomCourseSession | null;
  "course_session_type_id"?: string | null;
  "session_type"?: import("./types.js").ClassroomSessionType | null;
  "name"?: string | null;
  "session_number"?: number | null;
  "duration_minutes"?: number | null;
  "description"?: string | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "locked": boolean;
  "auto_unlock": boolean;
  "auto_present": boolean;
  "invited": boolean;
  "session_room_id"?: string | null;
  "session_lifecycle_status"?: string | null;
  "session_access_mode": string;
  "session_archive_ready": boolean;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomIndexSessionGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ClassroomIndexSessionGetResponseData extends JsonObject {
  "data": ClassroomIndexSessionGetResponseItem[];
  "meta": ClassroomIndexSessionGetResponsePageMeta;
}
export interface ClassroomIndexSessionGetResponse extends ApiEnvelope<ClassroomIndexSessionGetResponseData> {
}

/** Backend request type: models::CreateSessionRequest. */
export interface ClassroomStoreSessionPostInput extends JsonObject {
  "classroom_id": string;
  "course_session_id"?: string | null;
  "course_session_type_id"?: string | null;
  "name"?: string | null;
  "session_number"?: number | null;
  "duration_minutes"?: number | null;
  "description"?: string | null;
  "teacher_user_id"?: string | null;
  "locked"?: boolean | null;
  "auto_unlock"?: boolean | null;
  "auto_present"?: boolean | null;
  "invited"?: boolean | null;
  "starts_at"?: string | null;
  "status": string;
}
/** Backend response type: models::SessionResponse. */
export interface ClassroomStoreSessionPostResponseData extends JsonObject {
  "id": string;
  "classroom_id": string;
  "classroom_name"?: string | null;
  "course_session_id"?: string | null;
  "course_session"?: import("./types.js").ClassroomCourseSession | null;
  "course_session_type_id"?: string | null;
  "session_type"?: import("./types.js").ClassroomSessionType | null;
  "name"?: string | null;
  "session_number"?: number | null;
  "duration_minutes"?: number | null;
  "description"?: string | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "locked": boolean;
  "auto_unlock": boolean;
  "auto_present": boolean;
  "invited": boolean;
  "session_room_id"?: string | null;
  "session_lifecycle_status"?: string | null;
  "session_access_mode": string;
  "session_archive_ready": boolean;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomStoreSessionPostResponse extends ApiEnvelope<ClassroomStoreSessionPostResponseData> {
}

/** Backend response type: models::SessionResponse. */
export interface ClassroomShowSessionGetResponseData extends JsonObject {
  "id": string;
  "classroom_id": string;
  "classroom_name"?: string | null;
  "course_session_id"?: string | null;
  "course_session"?: import("./types.js").ClassroomCourseSession | null;
  "course_session_type_id"?: string | null;
  "session_type"?: import("./types.js").ClassroomSessionType | null;
  "name"?: string | null;
  "session_number"?: number | null;
  "duration_minutes"?: number | null;
  "description"?: string | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "locked": boolean;
  "auto_unlock": boolean;
  "auto_present": boolean;
  "invited": boolean;
  "session_room_id"?: string | null;
  "session_lifecycle_status"?: string | null;
  "session_access_mode": string;
  "session_archive_ready": boolean;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomShowSessionGetResponse extends ApiEnvelope<ClassroomShowSessionGetResponseData> {
}

/** Backend request type: models::UpdateSessionRequest. */
export interface ClassroomUpdateSessionPatchInput extends JsonObject {
  "confirm_recording_reset"?: boolean;
  "classroom_id"?: string | null;
  "course_session_id"?: string | null;
  "course_session_type_id"?: string | null;
  "name"?: string | null;
  "session_number"?: number | null;
  "duration_minutes"?: number | null;
  "description"?: string | null;
  "teacher_user_id"?: string | null;
  "locked"?: boolean | null;
  "auto_unlock"?: boolean | null;
  "auto_present"?: boolean | null;
  "invited"?: boolean | null;
  "starts_at"?: string | null;
  "status"?: string | null;
}
/** Backend response type: models::SessionResponse. */
export interface ClassroomUpdateSessionPatchResponseData extends JsonObject {
  "id": string;
  "classroom_id": string;
  "classroom_name"?: string | null;
  "course_session_id"?: string | null;
  "course_session"?: import("./types.js").ClassroomCourseSession | null;
  "course_session_type_id"?: string | null;
  "session_type"?: import("./types.js").ClassroomSessionType | null;
  "name"?: string | null;
  "session_number"?: number | null;
  "duration_minutes"?: number | null;
  "description"?: string | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "locked": boolean;
  "auto_unlock": boolean;
  "auto_present": boolean;
  "invited": boolean;
  "session_room_id"?: string | null;
  "session_lifecycle_status"?: string | null;
  "session_access_mode": string;
  "session_archive_ready": boolean;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomUpdateSessionPatchResponse extends ApiEnvelope<ClassroomUpdateSessionPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ClassroomIndexAttendanceGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::AbsenceResponse>. */
export interface ClassroomIndexAttendanceGetResponseItem extends JsonObject {
  "id": string;
  "classroom_session_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "status": string;
  "absence_reason"?: string | null;
  "created_at": string;
}
export interface ClassroomIndexAttendanceGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ClassroomIndexAttendanceGetResponseData extends JsonObject {
  "data": ClassroomIndexAttendanceGetResponseItem[];
  "meta": ClassroomIndexAttendanceGetResponsePageMeta;
}
export interface ClassroomIndexAttendanceGetResponse extends ApiEnvelope<ClassroomIndexAttendanceGetResponseData> {
}

/** Backend request type: models::BatchAttendanceRequest. */
export interface ClassroomRecordAttendancePutInput extends JsonObject {
  "items": BackendJson<"AttendanceItem">[];
  "idempotency_key": string;
}
/** Backend response type: models::BatchAttendanceResponse. */
export interface ClassroomRecordAttendancePutResponseData extends JsonObject {
  "classroom_session_id": string;
  "updated": number;
}
export interface ClassroomRecordAttendancePutResponse extends ApiEnvelope<ClassroomRecordAttendancePutResponseData> {
}

/** Backend query type: models::TodaySessionListQuery. */
export interface ClassroomIndexTodaySessionsGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "date"?: string | null;
  "timezone_offset_minutes"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::SessionResponse>. */
export interface ClassroomIndexTodaySessionsGetResponseItem extends JsonObject {
  "id": string;
  "classroom_id": string;
  "classroom_name"?: string | null;
  "course_session_id"?: string | null;
  "course_session"?: import("./types.js").ClassroomCourseSession | null;
  "course_session_type_id"?: string | null;
  "session_type"?: import("./types.js").ClassroomSessionType | null;
  "name"?: string | null;
  "session_number"?: number | null;
  "duration_minutes"?: number | null;
  "description"?: string | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "locked": boolean;
  "auto_unlock": boolean;
  "auto_present": boolean;
  "invited": boolean;
  "session_room_id"?: string | null;
  "session_lifecycle_status"?: string | null;
  "session_access_mode": string;
  "session_archive_ready": boolean;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomIndexTodaySessionsGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ClassroomIndexTodaySessionsGetResponseData extends JsonObject {
  "data": ClassroomIndexTodaySessionsGetResponseItem[];
  "meta": ClassroomIndexTodaySessionsGetResponsePageMeta;
}
export interface ClassroomIndexTodaySessionsGetResponse extends ApiEnvelope<ClassroomIndexTodaySessionsGetResponseData> {
}

/** Backend response type: Value. */
export interface IntegrationCurrentClassroomUsersGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UserIdBatch. */
export interface IntegrationDropoutEligibilityPostInput extends JsonObject {
  "user_ids"?: string[];
}
/** Backend response type: Value. */
export interface IntegrationDropoutEligibilityPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: PaginationQuery. */
export interface ClassroomIndexAbsencesGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::AbsenceResponse>. */
export interface ClassroomIndexAbsencesGetResponseItem extends JsonObject {
  "id": string;
  "classroom_session_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "status": string;
  "absence_reason"?: string | null;
  "created_at": string;
}
export interface ClassroomIndexAbsencesGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ClassroomIndexAbsencesGetResponseData extends JsonObject {
  "data": ClassroomIndexAbsencesGetResponseItem[];
  "meta": ClassroomIndexAbsencesGetResponsePageMeta;
}
export interface ClassroomIndexAbsencesGetResponse extends ApiEnvelope<ClassroomIndexAbsencesGetResponseData> {
}

/** Backend response type: Branding. */
export interface BrandingShowGetResponseData extends JsonObject {
  "title"?: string | null;
  "localizations": Record<string, JsonValue>;
  "icon_asset_key"?: string | null;
  "icon_url"?: string | null;
}
export interface BrandingShowGetResponse extends ApiEnvelope<BrandingShowGetResponseData> {
}

/** Backend request type: Branding. */
export interface BrandingUpdatePutInput extends JsonObject {
  "title"?: string | null;
  "localizations": Record<string, JsonValue>;
  "icon_asset_key"?: string | null;
  "icon_url"?: string | null;
}
/** Backend response type: Branding. */
export interface BrandingUpdatePutResponseData extends JsonObject {
  "title"?: string | null;
  "localizations": Record<string, JsonValue>;
  "icon_asset_key"?: string | null;
  "icon_url"?: string | null;
}
export interface BrandingUpdatePutResponse extends ApiEnvelope<BrandingUpdatePutResponseData> {
}

/** Backend request type: multipart/form-data. */
export type BrandingUploadPostInput = FormData;
/** Backend response type: serde_json::Value. */
export interface BrandingUploadPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: PaginationQuery. */
export interface ConfigIndexClassroomTypeGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::ClassroomTypeResponse>. */
export interface ConfigIndexClassroomTypeGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export interface ConfigIndexClassroomTypeGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ConfigIndexClassroomTypeGetResponseData extends JsonObject {
  "data": ConfigIndexClassroomTypeGetResponseItem[];
  "meta": ConfigIndexClassroomTypeGetResponsePageMeta;
}
export interface ConfigIndexClassroomTypeGetResponse extends ApiEnvelope<ConfigIndexClassroomTypeGetResponseData> {
}

/** Backend request type: models::CreateClassroomTypeRequest. */
export interface ConfigStoreClassroomTypePostInput extends JsonObject {
  "name": string;
}
/** Backend response type: models::ClassroomTypeResponse. */
export interface ConfigStoreClassroomTypePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export interface ConfigStoreClassroomTypePostResponse extends ApiEnvelope<ConfigStoreClassroomTypePostResponseData> {
}

/** Backend response type: models::ClassroomTypeResponse. */
export interface ConfigShowClassroomTypeGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export interface ConfigShowClassroomTypeGetResponse extends ApiEnvelope<ConfigShowClassroomTypeGetResponseData> {
}

/** Backend request type: models::UpdateClassroomTypeRequest. */
export interface ConfigUpdateClassroomTypePatchInput extends JsonObject {
  "name"?: string | null;
}
/** Backend response type: models::ClassroomTypeResponse. */
export interface ConfigUpdateClassroomTypePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
}
export interface ConfigUpdateClassroomTypePatchResponse extends ApiEnvelope<ConfigUpdateClassroomTypePatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ConfigIndexEducationDayGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::EducationDayResponse>. */
export interface ConfigIndexEducationDayGetResponseItem extends JsonObject {
  "id": string;
  "day_date": string;
  "is_holiday": boolean;
  "label"?: string | null;
  "created_at": string;
}
export interface ConfigIndexEducationDayGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ConfigIndexEducationDayGetResponseData extends JsonObject {
  "data": ConfigIndexEducationDayGetResponseItem[];
  "meta": ConfigIndexEducationDayGetResponsePageMeta;
}
export interface ConfigIndexEducationDayGetResponse extends ApiEnvelope<ConfigIndexEducationDayGetResponseData> {
}

/** Backend request type: models::CreateEducationDayRequest. */
export interface ConfigStoreEducationDayPostInput extends JsonObject {
  "day_date": string;
  "is_holiday": boolean;
  "label"?: string | null;
}
/** Backend response type: models::EducationDayResponse. */
export interface ConfigStoreEducationDayPostResponseData extends JsonObject {
  "id": string;
  "day_date": string;
  "is_holiday": boolean;
  "label"?: string | null;
  "created_at": string;
}
export interface ConfigStoreEducationDayPostResponse extends ApiEnvelope<ConfigStoreEducationDayPostResponseData> {
}

/** Backend response type: models::EducationDayResponse. */
export interface ConfigShowEducationDayGetResponseData extends JsonObject {
  "id": string;
  "day_date": string;
  "is_holiday": boolean;
  "label"?: string | null;
  "created_at": string;
}
export interface ConfigShowEducationDayGetResponse extends ApiEnvelope<ConfigShowEducationDayGetResponseData> {
}

/** Backend request type: models::UpdateEducationDayRequest. */
export interface ConfigUpdateEducationDayPatchInput extends JsonObject {
  "day_date"?: string | null;
  "is_holiday"?: boolean | null;
  "label"?: string | null;
}
/** Backend response type: models::EducationDayResponse. */
export interface ConfigUpdateEducationDayPatchResponseData extends JsonObject {
  "id": string;
  "day_date": string;
  "is_holiday": boolean;
  "label"?: string | null;
  "created_at": string;
}
export interface ConfigUpdateEducationDayPatchResponse extends ApiEnvelope<ConfigUpdateEducationDayPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ConfigIndexGradeGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::GradeResponse>. */
export interface ConfigIndexGradeGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface ConfigIndexGradeGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ConfigIndexGradeGetResponseData extends JsonObject {
  "data": ConfigIndexGradeGetResponseItem[];
  "meta": ConfigIndexGradeGetResponsePageMeta;
}
export interface ConfigIndexGradeGetResponse extends ApiEnvelope<ConfigIndexGradeGetResponseData> {
}

/** Backend request type: models::CreateGradeRequest. */
export interface ConfigStoreGradePostInput extends JsonObject {
  "name": string;
  "sort_order": number;
}
/** Backend response type: models::GradeResponse. */
export interface ConfigStoreGradePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface ConfigStoreGradePostResponse extends ApiEnvelope<ConfigStoreGradePostResponseData> {
}

/** Backend response type: models::GradeResponse. */
export interface ConfigShowGradeGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface ConfigShowGradeGetResponse extends ApiEnvelope<ConfigShowGradeGetResponseData> {
}

/** Backend request type: models::UpdateGradeRequest. */
export interface ConfigUpdateGradePatchInput extends JsonObject {
  "name"?: string | null;
  "sort_order"?: number | null;
}
/** Backend response type: models::GradeResponse. */
export interface ConfigUpdateGradePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface ConfigUpdateGradePatchResponse extends ApiEnvelope<ConfigUpdateGradePatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ConfigIndexHolidayGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::HolidayResponse>. */
export interface ConfigIndexHolidayGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "holiday_date": string;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ConfigIndexHolidayGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ConfigIndexHolidayGetResponseData extends JsonObject {
  "data": ConfigIndexHolidayGetResponseItem[];
  "meta": ConfigIndexHolidayGetResponsePageMeta;
}
export interface ConfigIndexHolidayGetResponse extends ApiEnvelope<ConfigIndexHolidayGetResponseData> {
}

/** Backend request type: models::CreateHolidayRequest. */
export interface ConfigStoreHolidayPostInput extends JsonObject {
  "name": string;
  "description"?: string | null;
  "holiday_date": string;
  "sort_order": number;
  "status": string;
}
/** Backend response type: models::HolidayResponse. */
export interface ConfigStoreHolidayPostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "holiday_date": string;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ConfigStoreHolidayPostResponse extends ApiEnvelope<ConfigStoreHolidayPostResponseData> {
}

/** Backend response type: models::HolidayResponse. */
export interface ConfigShowHolidayGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "holiday_date": string;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ConfigShowHolidayGetResponse extends ApiEnvelope<ConfigShowHolidayGetResponseData> {
}

/** Backend request type: models::UpdateHolidayRequest. */
export interface ConfigUpdateHolidayPatchInput extends JsonObject {
  "name"?: string | null;
  "description"?: string | null;
  "holiday_date"?: string | null;
  "sort_order"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::HolidayResponse. */
export interface ConfigUpdateHolidayPatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "holiday_date": string;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ConfigUpdateHolidayPatchResponse extends ApiEnvelope<ConfigUpdateHolidayPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ConfigIndexWeekendGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::WeekendResponse>. */
export interface ConfigIndexWeekendGetResponseItem extends JsonObject {
  "id": string;
  "day_of_week": number;
  "created_at": string;
}
export interface ConfigIndexWeekendGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ConfigIndexWeekendGetResponseData extends JsonObject {
  "data": ConfigIndexWeekendGetResponseItem[];
  "meta": ConfigIndexWeekendGetResponsePageMeta;
}
export interface ConfigIndexWeekendGetResponse extends ApiEnvelope<ConfigIndexWeekendGetResponseData> {
}

/** Backend request type: models::CreateWeekendRequest. */
export interface ConfigStoreWeekendPostInput extends JsonObject {
  "day_of_week": number;
}
/** Backend response type: models::WeekendResponse. */
export interface ConfigStoreWeekendPostResponseData extends JsonObject {
  "id": string;
  "day_of_week": number;
  "created_at": string;
}
export interface ConfigStoreWeekendPostResponse extends ApiEnvelope<ConfigStoreWeekendPostResponseData> {
}

/** Backend response type: models::WeekendResponse. */
export interface ConfigShowWeekendGetResponseData extends JsonObject {
  "id": string;
  "day_of_week": number;
  "created_at": string;
}
export interface ConfigShowWeekendGetResponse extends ApiEnvelope<ConfigShowWeekendGetResponseData> {
}

/** Backend request type: models::UpdateWeekendRequest. */
export interface ConfigUpdateWeekendPatchInput extends JsonObject {
  "day_of_week"?: number | null;
}
/** Backend response type: models::WeekendResponse. */
export interface ConfigUpdateWeekendPatchResponseData extends JsonObject {
  "id": string;
  "day_of_week": number;
  "created_at": string;
}
export interface ConfigUpdateWeekendPatchResponse extends ApiEnvelope<ConfigUpdateWeekendPatchResponseData> {
}

/** Backend query type: CourseListQuery. */
export interface CourseIndexCourseGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "category_ids"?: string | null;
}
/** Backend response type: crate::models::PagedResult<models::CourseResponse>. */
export interface CourseIndexCourseGetResponseItem extends JsonObject {
  "id": string;
  "category_id"?: string | null;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "cover_url"?: string | null;
  "sort_order": number;
  "duration"?: string | null;
  "passing_mark"?: number | null;
  "certificate_template_ids": string[];
  "price"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseIndexCourseGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface CourseIndexCourseGetResponseData extends JsonObject {
  "data": CourseIndexCourseGetResponseItem[];
  "meta": CourseIndexCourseGetResponsePageMeta;
}
export interface CourseIndexCourseGetResponse extends ApiEnvelope<CourseIndexCourseGetResponseData> {
}

/** Backend request type: models::CreateCourseRequest. */
export interface CourseStoreCoursePostInput extends JsonObject {
  "category_id"?: string | null;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "cover_url"?: string | null;
  "sort_order"?: number;
  "duration"?: string | null;
  "passing_mark"?: number | null;
  "certificate_template_ids"?: string[];
  "price"?: string | null;
  "status": string;
}
/** Backend response type: models::CourseResponse. */
export interface CourseStoreCoursePostResponseData extends JsonObject {
  "id": string;
  "category_id"?: string | null;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "cover_url"?: string | null;
  "sort_order": number;
  "duration"?: string | null;
  "passing_mark"?: number | null;
  "certificate_template_ids": string[];
  "price"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseStoreCoursePostResponse extends ApiEnvelope<CourseStoreCoursePostResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface CourseIndexSessionGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::SessionResponse>. */
export interface CourseIndexSessionGetResponseItem extends JsonObject {
  "id": string;
  "course_id": string;
  "name": string;
  "description"?: string | null;
  "sort_order": number;
  "session_type": string;
  "session_type_id"?: string | null;
  "exam_id"?: string | null;
  "duration_minutes"?: number | null;
  "auto_unlock": boolean;
  "info"?: string | null;
  "video_type"?: string | null;
  "external_url"?: string | null;
  "drm_mixed_media_id"?: BackendJson<"uuid::Uuid"> | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseIndexSessionGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface CourseIndexSessionGetResponseData extends JsonObject {
  "data": CourseIndexSessionGetResponseItem[];
  "meta": CourseIndexSessionGetResponsePageMeta;
}
export interface CourseIndexSessionGetResponse extends ApiEnvelope<CourseIndexSessionGetResponseData> {
}

/** Backend request type: models::CreateSessionRequest. */
export interface CourseStoreSessionPostInput extends JsonObject {
  "course_id": string;
  "name": string;
  "description"?: string | null;
  "sort_order": number;
  "session_type"?: string;
  "session_type_id"?: string | null;
  "exam_id"?: string | null;
  "duration_minutes"?: number | null;
  "auto_unlock": boolean;
  "info"?: string | null;
  "video_type"?: string | null;
  "external_url"?: string | null;
  "drm_mixed_media_id"?: BackendJson<"uuid::Uuid"> | null;
  "status": string;
}
/** Backend response type: models::SessionResponse. */
export interface CourseStoreSessionPostResponseData extends JsonObject {
  "id": string;
  "course_id": string;
  "name": string;
  "description"?: string | null;
  "sort_order": number;
  "session_type": string;
  "session_type_id"?: string | null;
  "exam_id"?: string | null;
  "duration_minutes"?: number | null;
  "auto_unlock": boolean;
  "info"?: string | null;
  "video_type"?: string | null;
  "external_url"?: string | null;
  "drm_mixed_media_id"?: BackendJson<"uuid::Uuid"> | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseStoreSessionPostResponse extends ApiEnvelope<CourseStoreSessionPostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CourseDestroySessionDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SessionResponse. */
export interface CourseShowSessionGetResponseData extends JsonObject {
  "id": string;
  "course_id": string;
  "name": string;
  "description"?: string | null;
  "sort_order": number;
  "session_type": string;
  "session_type_id"?: string | null;
  "exam_id"?: string | null;
  "duration_minutes"?: number | null;
  "auto_unlock": boolean;
  "info"?: string | null;
  "video_type"?: string | null;
  "external_url"?: string | null;
  "drm_mixed_media_id"?: BackendJson<"uuid::Uuid"> | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseShowSessionGetResponse extends ApiEnvelope<CourseShowSessionGetResponseData> {
}

/** Backend request type: models::UpdateSessionRequest. */
export interface CourseUpdateSessionPatchInput extends JsonObject {
  "name"?: string | null;
  "description"?: string | null;
  "sort_order"?: number | null;
  "session_type"?: string | null;
  "session_type_id"?: string | null;
  "exam_id"?: string | null;
  "duration_minutes"?: number | null;
  "auto_unlock"?: boolean | null;
  "info"?: string | null;
  "video_type"?: string | null;
  "external_url"?: string | null;
  "drm_mixed_media_id"?: BackendJson<"uuid::Uuid"> | null;
  "status"?: string | null;
}
/** Backend response type: models::SessionResponse. */
export interface CourseUpdateSessionPatchResponseData extends JsonObject {
  "id": string;
  "course_id": string;
  "name": string;
  "description"?: string | null;
  "sort_order": number;
  "session_type": string;
  "session_type_id"?: string | null;
  "exam_id"?: string | null;
  "duration_minutes"?: number | null;
  "auto_unlock": boolean;
  "info"?: string | null;
  "video_type"?: string | null;
  "external_url"?: string | null;
  "drm_mixed_media_id"?: BackendJson<"uuid::Uuid"> | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseUpdateSessionPatchResponse extends ApiEnvelope<CourseUpdateSessionPatchResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CourseDestroyCourseDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::CourseResponse. */
export interface CourseShowCourseGetResponseData extends JsonObject {
  "id": string;
  "category_id"?: string | null;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "cover_url"?: string | null;
  "sort_order": number;
  "duration"?: string | null;
  "passing_mark"?: number | null;
  "certificate_template_ids": string[];
  "price"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseShowCourseGetResponse extends ApiEnvelope<CourseShowCourseGetResponseData> {
}

/** Backend request type: models::UpdateCourseRequest. */
export interface CourseUpdateCoursePatchInput extends JsonObject {
  "category_id"?: string | null;
  "name"?: string | null;
  "title"?: string | null;
  "description"?: string | null;
  "cover_url"?: string | null;
  "sort_order"?: number | null;
  "duration"?: string | null;
  "passing_mark"?: number | null;
  "certificate_template_ids"?: string[] | null;
  "price"?: string | null;
  "status"?: string | null;
}
/** Backend response type: models::CourseResponse. */
export interface CourseUpdateCoursePatchResponseData extends JsonObject {
  "id": string;
  "category_id"?: string | null;
  "name": string;
  "title"?: string | null;
  "description"?: string | null;
  "cover_url"?: string | null;
  "sort_order": number;
  "duration"?: string | null;
  "passing_mark"?: number | null;
  "certificate_template_ids": string[];
  "price"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseUpdateCoursePatchResponse extends ApiEnvelope<CourseUpdateCoursePatchResponseData> {
}

/** Backend request type: IdBatch. */
export interface IntegrationBatchCoursesPostInput extends JsonObject {
  "ids"?: string[];
}
/** Backend response type: Value. */
export interface IntegrationBatchCoursesPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: PaginationQuery. */
export interface CourseIndexCategoryGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::CategoryResponse>. */
export interface CourseIndexCategoryGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "image_url"?: string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseIndexCategoryGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface CourseIndexCategoryGetResponseData extends JsonObject {
  "data": CourseIndexCategoryGetResponseItem[];
  "meta": CourseIndexCategoryGetResponsePageMeta;
}
export interface CourseIndexCategoryGetResponse extends ApiEnvelope<CourseIndexCategoryGetResponseData> {
}

/** Backend request type: models::CreateCategoryRequest. */
export interface CourseStoreCategoryPostInput extends JsonObject {
  "name": string;
  "description"?: string | null;
  "image_url"?: string | null;
  "sort_order": number;
  "status": string;
}
/** Backend response type: models::CategoryResponse. */
export interface CourseStoreCategoryPostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "image_url"?: string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseStoreCategoryPostResponse extends ApiEnvelope<CourseStoreCategoryPostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CourseDestroyCategoryDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::CategoryResponse. */
export interface CourseShowCategoryGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "image_url"?: string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseShowCategoryGetResponse extends ApiEnvelope<CourseShowCategoryGetResponseData> {
}

/** Backend request type: models::UpdateCategoryRequest. */
export interface CourseUpdateCategoryPatchInput extends JsonObject {
  "name"?: string | null;
  "description"?: string | null;
  "image_url"?: string | null;
  "sort_order"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::CategoryResponse. */
export interface CourseUpdateCategoryPatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "image_url"?: string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseUpdateCategoryPatchResponse extends ApiEnvelope<CourseUpdateCategoryPatchResponseData> {
}

/** Backend request type: models::ReorderRequest. */
export interface CourseReorderCategoriesPatchInput extends JsonObject {
  "active_id": string;
  "over_id": string;
}
/** Backend response type: serde_json::Value. */
export interface CourseReorderCategoriesPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::ReorderRequest. */
export interface CourseReorderCoursesPatchInput extends JsonObject {
  "active_id": string;
  "over_id": string;
}
/** Backend response type: serde_json::Value. */
export interface CourseReorderCoursesPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: IdBatch. */
export interface IntegrationBatchCourseSuccessorsPostInput extends JsonObject {
  "ids"?: string[];
}
/** Backend response type: Value. */
export interface IntegrationBatchCourseSuccessorsPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::DashboardQuery. */
export interface DashboardIndexGetQuery extends QueryParams {
  "mode"?: string | null;
}
/** Backend response type: models::DashboardStats. */
export interface DashboardIndexGetResponseData extends JsonObject {
  "courses": number;
  "classrooms": number;
  "students": number;
  "pending_homework": number;
  "pending_final_homework": number;
  "pending_todo_homework": number;
  "pending_exams": number;
}
export interface DashboardIndexGetResponse extends ApiEnvelope<DashboardIndexGetResponseData> {
}

/** Backend response type: models::IntegrationDocs. */
export interface DocsIntegrationGetResponseData extends JsonObject {
  "service": string;
  "version": string;
  "profile_sync_event": string;
  "profile_sync_routing_key": string;
  "permissions_prefix": string;
  "api_base": string;
}
export interface DocsIntegrationGetResponse extends ApiEnvelope<DocsIntegrationGetResponseData> {
}

/** Backend query type: CompositionSearchQuery. */
export interface DrmRoutesIndexCompositionsGetQuery extends QueryParams {
  "page"?: number;
  "size"?: number;
  "search"?: string | null;
  "selected_id"?: string | null;
}
/** Backend response type: PagedResult<CompositionOption>. */
export interface DrmRoutesIndexCompositionsGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "category_path": string;
}
export interface DrmRoutesIndexCompositionsGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface DrmRoutesIndexCompositionsGetResponseData extends JsonObject {
  "data": DrmRoutesIndexCompositionsGetResponseItem[];
  "meta": DrmRoutesIndexCompositionsGetResponsePageMeta;
}
export interface DrmRoutesIndexCompositionsGetResponse extends ApiEnvelope<DrmRoutesIndexCompositionsGetResponseData> {
}

/** Backend response type: models::EvaluationContext. */
export interface EvaluationGetContextGetResponseData extends JsonObject {
  "classroom_session_id": string;
  "available": boolean;
  "teacher_ratings": BackendJson<"TeacherRatingState">;
  "student_feedback": BackendJson<"StudentFeedbackState">;
}
export interface EvaluationGetContextGetResponse extends ApiEnvelope<EvaluationGetContextGetResponseData> {
}

/** Backend request type: models::SubmitEvaluation. */
export interface EvaluationSubmitPostInput extends JsonObject {
  "kind": string;
  "target_user_id"?: string | null;
  "scores": JsonValue;
  "description"?: string | null;
}
/** Backend response type: models::SubmitEvaluationResponse. */
export interface EvaluationSubmitPostResponseData extends JsonObject {
  "id": string;
  "submitted": boolean;
}
export interface EvaluationSubmitPostResponse extends ApiEnvelope<EvaluationSubmitPostResponseData> {
}

/** Backend response type: models::EvaluationSettings. */
export interface EvaluationGetSettingsGetResponseData extends JsonObject {
  "teacher_ratings_enabled": boolean;
  "student_feedback_enabled": boolean;
}
export interface EvaluationGetSettingsGetResponse extends ApiEnvelope<EvaluationGetSettingsGetResponseData> {
}

/** Backend request type: models::UpdateEvaluationSettings. */
export interface EvaluationUpdateSettingsPutInput extends JsonObject {
  "teacher_ratings_enabled": boolean;
  "student_feedback_enabled": boolean;
}
/** Backend response type: models::EvaluationSettings. */
export interface EvaluationUpdateSettingsPutResponseData extends JsonObject {
  "teacher_ratings_enabled": boolean;
  "student_feedback_enabled": boolean;
}
export interface EvaluationUpdateSettingsPutResponse extends ApiEnvelope<EvaluationUpdateSettingsPutResponseData> {
}

/** Backend query type: models::ExamListQuery. */
export interface ExamIndexExamGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "search"?: string | null;
  "status"?: string | null;
  "course_id"?: string | null;
  "grade_id"?: string | null;
  "user_id"?: string | null;
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: crate::models::PagedResult<models::ExamResponse>. */
export interface ExamIndexExamGetResponseItem extends JsonObject {
  "id": string;
  "course_id"?: string | null;
  "grade_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "info"?: string | null;
  "cover_url"?: string | null;
  "duration_minutes"?: number | null;
  "passing_mark"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode": string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamIndexExamGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ExamIndexExamGetResponseData extends JsonObject {
  "data": ExamIndexExamGetResponseItem[];
  "meta": ExamIndexExamGetResponsePageMeta;
}
export interface ExamIndexExamGetResponse extends ApiEnvelope<ExamIndexExamGetResponseData> {
}

/** Backend request type: models::CreateExamRequest. */
export interface ExamStoreExamPostInput extends JsonObject {
  "course_id"?: string | null;
  "grade_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "info"?: string | null;
  "cover_url"?: string | null;
  "duration_minutes"?: number | null;
  "passing_mark"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode"?: string | null;
  "status": string;
}
/** Backend response type: models::ExamResponse. */
export interface ExamStoreExamPostResponseData extends JsonObject {
  "id": string;
  "course_id"?: string | null;
  "grade_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "info"?: string | null;
  "cover_url"?: string | null;
  "duration_minutes"?: number | null;
  "passing_mark"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode": string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamStoreExamPostResponse extends ApiEnvelope<ExamStoreExamPostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ExamDestroyExamDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::ExamResponse. */
export interface ExamShowExamGetResponseData extends JsonObject {
  "id": string;
  "course_id"?: string | null;
  "grade_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "info"?: string | null;
  "cover_url"?: string | null;
  "duration_minutes"?: number | null;
  "passing_mark"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode": string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamShowExamGetResponse extends ApiEnvelope<ExamShowExamGetResponseData> {
}

/** Backend request type: models::UpdateExamRequest. */
export interface ExamUpdateExamPatchInput extends JsonObject {
  "course_id"?: string | null;
  "grade_id"?: string | null;
  "name"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "cover_url"?: string | null;
  "duration_minutes"?: number | null;
  "passing_mark"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode"?: string | null;
  "status"?: string | null;
}
/** Backend response type: models::ExamResponse. */
export interface ExamUpdateExamPatchResponseData extends JsonObject {
  "id": string;
  "course_id"?: string | null;
  "grade_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "info"?: string | null;
  "cover_url"?: string | null;
  "duration_minutes"?: number | null;
  "passing_mark"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode": string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamUpdateExamPatchResponse extends ApiEnvelope<ExamUpdateExamPatchResponseData> {
}

/** Backend query type: models::AttemptListQuery. */
export interface ExamIndexAttemptGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "status"?: string | null;
  "exam_session_id"?: string | null;
  "user_id"?: string | null;
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: crate::models::PagedResult<models::AttemptResponse>. */
export interface ExamIndexAttemptGetResponseItem extends JsonObject {
  "id": string;
  "exam_session_id": string;
  "exam_id"?: string | null;
  "exam_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "score"?: number | null;
  "teacher_score"?: number | null;
  "description"?: string | null;
  "extend_time_minutes": number;
  "deadline_at"?: string | null;
  "status": string;
  "started_at"?: string | null;
  "finished_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface ExamIndexAttemptGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ExamIndexAttemptGetResponseData extends JsonObject {
  "data": ExamIndexAttemptGetResponseItem[];
  "meta": ExamIndexAttemptGetResponsePageMeta;
}
export interface ExamIndexAttemptGetResponse extends ApiEnvelope<ExamIndexAttemptGetResponseData> {
}

/** Backend response type: models::AttemptResponse. */
export interface ExamShowAttemptGetResponseData extends JsonObject {
  "id": string;
  "exam_session_id": string;
  "exam_id"?: string | null;
  "exam_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "score"?: number | null;
  "teacher_score"?: number | null;
  "description"?: string | null;
  "extend_time_minutes": number;
  "deadline_at"?: string | null;
  "status": string;
  "started_at"?: string | null;
  "finished_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface ExamShowAttemptGetResponse extends ApiEnvelope<ExamShowAttemptGetResponseData> {
}

/** Backend request type: models::UpdateAttemptRequest. */
export interface ExamUpdateAttemptPatchInput extends JsonObject {
  "score"?: number | null;
  "teacher_score"?: number | null;
  "description"?: string | null;
  "extend_time_minutes"?: number | null;
  "deadline_at"?: string | null;
  "status"?: string | null;
}
/** Backend response type: models::AttemptResponse. */
export interface ExamUpdateAttemptPatchResponseData extends JsonObject {
  "id": string;
  "exam_session_id": string;
  "exam_id"?: string | null;
  "exam_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "score"?: number | null;
  "teacher_score"?: number | null;
  "description"?: string | null;
  "extend_time_minutes": number;
  "deadline_at"?: string | null;
  "status": string;
  "started_at"?: string | null;
  "finished_at"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export interface ExamUpdateAttemptPatchResponse extends ApiEnvelope<ExamUpdateAttemptPatchResponseData> {
}

/** Backend request type: models::SaveAttemptAnswerRequest. */
export interface ExamSaveAttemptAnswerPutInput extends JsonObject {
  "answer": JsonValue;
}
/** Backend response type: models::SavedAttemptAnswerResponse. */
export interface ExamSaveAttemptAnswerPutResponseData extends JsonObject {
  "position": number;
  "saved_at": string;
  "answered_count": number;
}
export interface ExamSaveAttemptAnswerPutResponse extends ApiEnvelope<ExamSaveAttemptAnswerPutResponseData> {
}

/** Backend response type: models::AttemptDeliveryResponse. */
export interface ExamShowAttemptDeliveryGetResponseData extends JsonObject {
  "attempt_id": string;
  "exam_session_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "exam_id": string;
  "exam_name": string;
  "exam_description"?: string | null;
  "exam_info"?: string | null;
  "cover_url"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "access": string;
  "state": string;
  "server_now": string;
  "starts_at"?: string | null;
  "closes_at"?: string | null;
  "started_at"?: string | null;
  "finished_at"?: string | null;
  "duration_minutes"?: number | null;
  "remaining_seconds": number;
  "score"?: number | null;
  "teacher_score"?: number | null;
  "passing_mark"?: number | null;
  "passed"?: boolean | null;
  "answered_count": number;
  "correct_count": number;
  "incorrect_count": number;
  "unanswered_count": number;
  "total_questions": number;
  "can_start": boolean;
  "can_answer": boolean;
  "questions": BackendJson<"DeliveryQuestionResponse">[];
}
export interface ExamShowAttemptDeliveryGetResponse extends ApiEnvelope<ExamShowAttemptDeliveryGetResponseData> {
}

/** Backend response type: models::AttemptDeliveryResponse. */
export interface ExamStartAttemptPostResponseData extends JsonObject {
  "attempt_id": string;
  "exam_session_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "exam_id": string;
  "exam_name": string;
  "exam_description"?: string | null;
  "exam_info"?: string | null;
  "cover_url"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "access": string;
  "state": string;
  "server_now": string;
  "starts_at"?: string | null;
  "closes_at"?: string | null;
  "started_at"?: string | null;
  "finished_at"?: string | null;
  "duration_minutes"?: number | null;
  "remaining_seconds": number;
  "score"?: number | null;
  "teacher_score"?: number | null;
  "passing_mark"?: number | null;
  "passed"?: boolean | null;
  "answered_count": number;
  "correct_count": number;
  "incorrect_count": number;
  "unanswered_count": number;
  "total_questions": number;
  "can_start": boolean;
  "can_answer": boolean;
  "questions": BackendJson<"DeliveryQuestionResponse">[];
}
export interface ExamStartAttemptPostResponse extends ApiEnvelope<ExamStartAttemptPostResponseData> {
}

/** Backend response type: models::AttemptDeliveryResponse. */
export interface ExamSubmitAttemptPostResponseData extends JsonObject {
  "attempt_id": string;
  "exam_session_id": string;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "exam_id": string;
  "exam_name": string;
  "exam_description"?: string | null;
  "exam_info"?: string | null;
  "cover_url"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "access": string;
  "state": string;
  "server_now": string;
  "starts_at"?: string | null;
  "closes_at"?: string | null;
  "started_at"?: string | null;
  "finished_at"?: string | null;
  "duration_minutes"?: number | null;
  "remaining_seconds": number;
  "score"?: number | null;
  "teacher_score"?: number | null;
  "passing_mark"?: number | null;
  "passed"?: boolean | null;
  "answered_count": number;
  "correct_count": number;
  "incorrect_count": number;
  "unanswered_count": number;
  "total_questions": number;
  "can_start": boolean;
  "can_answer": boolean;
  "questions": BackendJson<"DeliveryQuestionResponse">[];
}
export interface ExamSubmitAttemptPostResponse extends ApiEnvelope<ExamSubmitAttemptPostResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ExamIndexQuestionGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::QuestionResponse>. */
export interface ExamIndexQuestionGetResponseItem extends JsonObject {
  "id": string;
  "exam_id"?: string | null;
  "question_text": string;
  "question_type": string;
  "options"?: BackendJson<"sea_orm::prelude::Json"> | null;
  "correct_answer"?: string | null;
  "sort_order": number;
  "difficulty": string;
  "points": number;
  "media": BackendJson<"sea_orm::prelude::Json">;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamIndexQuestionGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ExamIndexQuestionGetResponseData extends JsonObject {
  "data": ExamIndexQuestionGetResponseItem[];
  "meta": ExamIndexQuestionGetResponsePageMeta;
}
export interface ExamIndexQuestionGetResponse extends ApiEnvelope<ExamIndexQuestionGetResponseData> {
}

/** Backend request type: models::CreateQuestionRequest. */
export interface ExamStoreQuestionPostInput extends JsonObject {
  "exam_id"?: string | null;
  "question_text": string;
  "question_type": string;
  "options"?: BackendJson<"sea_orm::prelude::Json"> | null;
  "correct_answer"?: string | null;
  "sort_order": number;
  "difficulty"?: string | null;
  "points"?: number | null;
  "media"?: BackendJson<"sea_orm::prelude::Json"> | null;
  "status"?: string | null;
}
/** Backend response type: models::QuestionResponse. */
export interface ExamStoreQuestionPostResponseData extends JsonObject {
  "id": string;
  "exam_id"?: string | null;
  "question_text": string;
  "question_type": string;
  "options"?: BackendJson<"sea_orm::prelude::Json"> | null;
  "correct_answer"?: string | null;
  "sort_order": number;
  "difficulty": string;
  "points": number;
  "media": BackendJson<"sea_orm::prelude::Json">;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamStoreQuestionPostResponse extends ApiEnvelope<ExamStoreQuestionPostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ExamDestroyQuestionDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::QuestionResponse. */
export interface ExamShowQuestionGetResponseData extends JsonObject {
  "id": string;
  "exam_id"?: string | null;
  "question_text": string;
  "question_type": string;
  "options"?: BackendJson<"sea_orm::prelude::Json"> | null;
  "correct_answer"?: string | null;
  "sort_order": number;
  "difficulty": string;
  "points": number;
  "media": BackendJson<"sea_orm::prelude::Json">;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamShowQuestionGetResponse extends ApiEnvelope<ExamShowQuestionGetResponseData> {
}

/** Backend request type: models::UpdateQuestionRequest. */
export interface ExamUpdateQuestionPatchInput extends JsonObject {
  "exam_id"?: string | null;
  "question_text"?: string | null;
  "question_type"?: string | null;
  "options"?: BackendJson<"sea_orm::prelude::Json"> | null;
  "correct_answer"?: string | null;
  "sort_order"?: number | null;
  "difficulty"?: string | null;
  "points"?: number | null;
  "media"?: BackendJson<"sea_orm::prelude::Json"> | null;
  "status"?: string | null;
}
/** Backend response type: models::QuestionResponse. */
export interface ExamUpdateQuestionPatchResponseData extends JsonObject {
  "id": string;
  "exam_id"?: string | null;
  "question_text": string;
  "question_type": string;
  "options"?: BackendJson<"sea_orm::prelude::Json"> | null;
  "correct_answer"?: string | null;
  "sort_order": number;
  "difficulty": string;
  "points": number;
  "media": BackendJson<"sea_orm::prelude::Json">;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamUpdateQuestionPatchResponse extends ApiEnvelope<ExamUpdateQuestionPatchResponseData> {
}

/** Backend query type: models::SessionListQuery. */
export interface ExamIndexSessionGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "search"?: string | null;
  "status"?: string | null;
  "exam_id"?: string | null;
  "classroom_id"?: string | null;
  "user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "consultant_user_id"?: string | null;
  "support_user_id"?: string | null;
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: crate::models::PagedResult<models::SessionResponse>. */
export interface ExamIndexSessionGetResponseItem extends JsonObject {
  "id": string;
  "exam_id": string;
  "exam_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "classroom_session_id"?: string | null;
  "name"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "duration_minutes"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode": string;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "attempts_total": number;
  "attempts_active": number;
  "attempts_completed": number;
  "average_score"?: number | null;
  "created_at": string;
  "updated_at": string;
}
export interface ExamIndexSessionGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ExamIndexSessionGetResponseData extends JsonObject {
  "data": ExamIndexSessionGetResponseItem[];
  "meta": ExamIndexSessionGetResponsePageMeta;
}
export interface ExamIndexSessionGetResponse extends ApiEnvelope<ExamIndexSessionGetResponseData> {
}

/** Backend request type: models::CreateSessionRequest. */
export interface ExamStoreSessionPostInput extends JsonObject {
  "exam_id": string;
  "classroom_id"?: string | null;
  "classroom_session_id"?: string | null;
  "name"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "duration_minutes"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode"?: string | null;
  "teacher_user_id"?: string | null;
  "consultant_user_id"?: string | null;
  "support_user_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
}
/** Backend response type: models::SessionResponse. */
export interface ExamStoreSessionPostResponseData extends JsonObject {
  "id": string;
  "exam_id": string;
  "exam_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "classroom_session_id"?: string | null;
  "name"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "duration_minutes"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode": string;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "attempts_total": number;
  "attempts_active": number;
  "attempts_completed": number;
  "average_score"?: number | null;
  "created_at": string;
  "updated_at": string;
}
export interface ExamStoreSessionPostResponse extends ApiEnvelope<ExamStoreSessionPostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ExamDestroySessionDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SessionResponse. */
export interface ExamShowSessionGetResponseData extends JsonObject {
  "id": string;
  "exam_id": string;
  "exam_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "classroom_session_id"?: string | null;
  "name"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "duration_minutes"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode": string;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "attempts_total": number;
  "attempts_active": number;
  "attempts_completed": number;
  "average_score"?: number | null;
  "created_at": string;
  "updated_at": string;
}
export interface ExamShowSessionGetResponse extends ApiEnvelope<ExamShowSessionGetResponseData> {
}

/** Backend request type: models::UpdateSessionRequest. */
export interface ExamUpdateSessionPatchInput extends JsonObject {
  "exam_id"?: string | null;
  "classroom_id"?: BackendJson<"PatchField<Uuid>">;
  "classroom_session_id"?: BackendJson<"PatchField<Uuid>">;
  "name"?: BackendJson<"PatchField<String>">;
  "description"?: BackendJson<"PatchField<String>">;
  "info"?: BackendJson<"PatchField<String>">;
  "duration_minutes"?: BackendJson<"PatchField<i32>">;
  "questions_count"?: BackendJson<"PatchField<i32>">;
  "easy_count"?: BackendJson<"PatchField<i32>">;
  "medium_count"?: BackendJson<"PatchField<i32>">;
  "hard_count"?: BackendJson<"PatchField<i32>">;
  "selection_mode"?: string | null;
  "teacher_user_id"?: BackendJson<"PatchField<String>">;
  "consultant_user_id"?: BackendJson<"PatchField<String>">;
  "support_user_id"?: BackendJson<"PatchField<String>">;
  "starts_at"?: BackendJson<"PatchField<String>">;
  "ends_at"?: BackendJson<"PatchField<String>">;
  "status"?: string | null;
}
/** Backend response type: models::SessionResponse. */
export interface ExamUpdateSessionPatchResponseData extends JsonObject {
  "id": string;
  "exam_id": string;
  "exam_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "classroom_session_id"?: string | null;
  "name"?: string | null;
  "description"?: string | null;
  "info"?: string | null;
  "duration_minutes"?: number | null;
  "questions_count"?: number | null;
  "easy_count"?: number | null;
  "medium_count"?: number | null;
  "hard_count"?: number | null;
  "selection_mode": string;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status": string;
  "attempts_total": number;
  "attempts_active": number;
  "attempts_completed": number;
  "average_score"?: number | null;
  "created_at": string;
  "updated_at": string;
}
export interface ExamUpdateSessionPatchResponse extends ApiEnvelope<ExamUpdateSessionPatchResponseData> {
}

/** Backend query type: models::HomeworkListQuery. */
export interface HomeworkIndexHomeworkGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "search"?: string | null;
  "status"?: string | null;
  "course_id"?: string | null;
  "user_id"?: string | null;
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: crate::models::PagedResult<models::HomeworkResponse>. */
export interface HomeworkIndexHomeworkGetResponseItem extends JsonObject {
  "id": string;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "grade_id"?: string | null;
  "teacher_grade_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkIndexHomeworkGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface HomeworkIndexHomeworkGetResponseData extends JsonObject {
  "data": HomeworkIndexHomeworkGetResponseItem[];
  "meta": HomeworkIndexHomeworkGetResponsePageMeta;
}
export interface HomeworkIndexHomeworkGetResponse extends ApiEnvelope<HomeworkIndexHomeworkGetResponseData> {
}

/** Backend request type: models::CreateHomeworkRequest. */
export interface HomeworkStoreHomeworkPostInput extends JsonObject {
  "course_id"?: string | null;
  "grade_id"?: string | null;
  "teacher_grade_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "status": string;
}
/** Backend response type: models::HomeworkResponse. */
export interface HomeworkStoreHomeworkPostResponseData extends JsonObject {
  "id": string;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "grade_id"?: string | null;
  "teacher_grade_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkStoreHomeworkPostResponse extends ApiEnvelope<HomeworkStoreHomeworkPostResponseData> {
}

/** Backend response type: models::HomeworkResponse. */
export interface HomeworkShowHomeworkGetResponseData extends JsonObject {
  "id": string;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "grade_id"?: string | null;
  "teacher_grade_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkShowHomeworkGetResponse extends ApiEnvelope<HomeworkShowHomeworkGetResponseData> {
}

/** Backend request type: models::UpdateHomeworkRequest. */
export interface HomeworkUpdateHomeworkPatchInput extends JsonObject {
  "course_id"?: string | null;
  "grade_id"?: string | null;
  "teacher_grade_id"?: string | null;
  "name"?: string | null;
  "description"?: string | null;
  "status"?: string | null;
}
/** Backend response type: models::HomeworkResponse. */
export interface HomeworkUpdateHomeworkPatchResponseData extends JsonObject {
  "id": string;
  "course_id"?: string | null;
  "course_name"?: string | null;
  "grade_id"?: string | null;
  "teacher_grade_id"?: string | null;
  "name": string;
  "description"?: string | null;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkUpdateHomeworkPatchResponse extends ApiEnvelope<HomeworkUpdateHomeworkPatchResponseData> {
}

/** Backend query type: models::AssignmentListQuery. */
export interface HomeworkIndexAssignmentGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "status"?: string | null;
  "homework_id"?: string | null;
  "classroom_id"?: string | null;
  "user_id"?: string | null;
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: crate::models::PagedResult<models::AssignmentResponse>. */
export interface HomeworkIndexAssignmentGetResponseItem extends JsonObject {
  "id": string;
  "homework_id": string;
  "homework_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "user_id"?: string | null;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "chat_conversation_id"?: string | null;
  "due_at"?: string | null;
  "status": string;
  "answer_text"?: string | null;
  "score"?: number | null;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkIndexAssignmentGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface HomeworkIndexAssignmentGetResponseData extends JsonObject {
  "data": HomeworkIndexAssignmentGetResponseItem[];
  "meta": HomeworkIndexAssignmentGetResponsePageMeta;
}
export interface HomeworkIndexAssignmentGetResponse extends ApiEnvelope<HomeworkIndexAssignmentGetResponseData> {
}

/** Backend request type: models::CreateAssignmentRequest. */
export interface HomeworkStoreAssignmentPostInput extends JsonObject {
  "homework_id": string;
  "classroom_id"?: string | null;
  "user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "consultant_user_id"?: string | null;
  "support_user_id"?: string | null;
  "due_at"?: string | null;
  "status": string;
  "answer_text"?: string | null;
  "score"?: number | null;
}
/** Backend response type: models::AssignmentResponse. */
export interface HomeworkStoreAssignmentPostResponseData extends JsonObject {
  "id": string;
  "homework_id": string;
  "homework_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "user_id"?: string | null;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "chat_conversation_id"?: string | null;
  "due_at"?: string | null;
  "status": string;
  "answer_text"?: string | null;
  "score"?: number | null;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkStoreAssignmentPostResponse extends ApiEnvelope<HomeworkStoreAssignmentPostResponseData> {
}

/** Backend response type: models::AssignmentResponse. */
export interface HomeworkShowAssignmentGetResponseData extends JsonObject {
  "id": string;
  "homework_id": string;
  "homework_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "user_id"?: string | null;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "chat_conversation_id"?: string | null;
  "due_at"?: string | null;
  "status": string;
  "answer_text"?: string | null;
  "score"?: number | null;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkShowAssignmentGetResponse extends ApiEnvelope<HomeworkShowAssignmentGetResponseData> {
}

/** Backend request type: models::UpdateAssignmentRequest. */
export interface HomeworkUpdateAssignmentPatchInput extends JsonObject {
  "homework_id"?: string | null;
  "classroom_id"?: string | null;
  "user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "consultant_user_id"?: string | null;
  "support_user_id"?: string | null;
  "chat_conversation_id"?: string | null;
  "due_at"?: string | null;
  "status"?: string | null;
  "answer_text"?: string | null;
  "score"?: number | null;
}
/** Backend response type: models::AssignmentResponse. */
export interface HomeworkUpdateAssignmentPatchResponseData extends JsonObject {
  "id": string;
  "homework_id": string;
  "homework_name"?: string | null;
  "classroom_id"?: string | null;
  "classroom_name"?: string | null;
  "user_id"?: string | null;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "support_user_id"?: string | null;
  "support_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "chat_conversation_id"?: string | null;
  "due_at"?: string | null;
  "status": string;
  "answer_text"?: string | null;
  "score"?: number | null;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkUpdateAssignmentPatchResponse extends ApiEnvelope<HomeworkUpdateAssignmentPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface HomeworkIndexQuestionGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
}
/** Backend response type: crate::models::PagedResult<models::QuestionResponse>. */
export interface HomeworkIndexQuestionGetResponseItem extends JsonObject {
  "id": string;
  "homework_id": string;
  "question_text": string;
  "description"?: string | null;
  "answer"?: string | null;
  "question_type": string;
  "points": number;
  "is_final": boolean;
  "media": JsonValue;
  "status": string;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkIndexQuestionGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface HomeworkIndexQuestionGetResponseData extends JsonObject {
  "data": HomeworkIndexQuestionGetResponseItem[];
  "meta": HomeworkIndexQuestionGetResponsePageMeta;
}
export interface HomeworkIndexQuestionGetResponse extends ApiEnvelope<HomeworkIndexQuestionGetResponseData> {
}

/** Backend request type: models::CreateQuestionRequest. */
export interface HomeworkStoreQuestionPostInput extends JsonObject {
  "homework_id": string;
  "question_text": string;
  "description"?: string | null;
  "answer"?: string | null;
  "question_type"?: string;
  "points"?: number;
  "is_final"?: boolean;
  "media"?: JsonValue | null;
  "status"?: string;
  "sort_order"?: number;
}
/** Backend response type: models::QuestionResponse. */
export interface HomeworkStoreQuestionPostResponseData extends JsonObject {
  "id": string;
  "homework_id": string;
  "question_text": string;
  "description"?: string | null;
  "answer"?: string | null;
  "question_type": string;
  "points": number;
  "is_final": boolean;
  "media": JsonValue;
  "status": string;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkStoreQuestionPostResponse extends ApiEnvelope<HomeworkStoreQuestionPostResponseData> {
}

/** Backend response type: models::QuestionResponse. */
export interface HomeworkShowQuestionGetResponseData extends JsonObject {
  "id": string;
  "homework_id": string;
  "question_text": string;
  "description"?: string | null;
  "answer"?: string | null;
  "question_type": string;
  "points": number;
  "is_final": boolean;
  "media": JsonValue;
  "status": string;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkShowQuestionGetResponse extends ApiEnvelope<HomeworkShowQuestionGetResponseData> {
}

/** Backend request type: models::UpdateQuestionRequest. */
export interface HomeworkUpdateQuestionPatchInput extends JsonObject {
  "homework_id"?: string | null;
  "question_text"?: string | null;
  "description"?: string | null;
  "answer"?: string | null;
  "question_type"?: string | null;
  "points"?: number | null;
  "is_final"?: boolean | null;
  "media"?: JsonValue | null;
  "status"?: string | null;
  "sort_order"?: number | null;
}
/** Backend response type: models::QuestionResponse. */
export interface HomeworkUpdateQuestionPatchResponseData extends JsonObject {
  "id": string;
  "homework_id": string;
  "question_text": string;
  "description"?: string | null;
  "answer"?: string | null;
  "question_type": string;
  "points": number;
  "is_final": boolean;
  "media": JsonValue;
  "status": string;
  "sort_order": number;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkUpdateQuestionPatchResponse extends ApiEnvelope<HomeworkUpdateQuestionPatchResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<BackendJson<"infera_flow_sdk::FlowIntegrationResponse">> {
}

/** Backend request type: LegacyIdBatch. */
export interface IntegrationResolveLegacyIdsPostInput extends JsonObject {
  "courses"?: number[];
  "classrooms"?: number[];
}
/** Backend response type: Value. */
export interface IntegrationResolveLegacyIdsPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: multipart/form-data. */
export type MediaUploadImagePostInput = FormData;
/** Backend response type: UploadResponse. */
export interface MediaUploadImagePostResponseData extends JsonObject {
  "url": string;
  "key": string;
}
export interface MediaUploadImagePostResponse extends ApiEnvelope<MediaUploadImagePostResponseData> {
}

/** Backend response type: raw-response. */
export interface MediaDownloadImageGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ProfileSearchQuery. */
export interface ProfileRoutesIndexGetQuery extends QueryParams {
  "page"?: number;
  "per_page"?: number;
  "filter[search]"?: string | null;
}
/** Backend response type: PagedResult<ProfileSummary>. */
export interface ProfileRoutesIndexGetResponseItem extends JsonObject {
  "user_id": string;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "phone"?: string | null;
}
export interface ProfileRoutesIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ProfileRoutesIndexGetResponseData extends JsonObject {
  "data": ProfileRoutesIndexGetResponseItem[];
  "meta": ProfileRoutesIndexGetResponsePageMeta;
}
export interface ProfileRoutesIndexGetResponse extends ApiEnvelope<ProfileRoutesIndexGetResponseData> {
}

/** Backend response type: Option<ProfileSummary>. */
export interface ProfileRoutesShowGetResponse extends ApiEnvelope<BackendJson<"ProfileSummary"> | null> {
}

/** Backend response type: Branding. */
export interface BrandingPublicShowGetResponseData extends JsonObject {
  "title"?: string | null;
  "localizations": Record<string, JsonValue>;
  "icon_asset_key"?: string | null;
  "icon_url"?: string | null;
}
export interface BrandingPublicShowGetResponse extends ApiEnvelope<BrandingPublicShowGetResponseData> {
}

/** Backend response type: raw-response. */
export interface BrandingAssetGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::PublicCertificateResponse. */
export interface CertificateVerifyCertificateGetResponseData extends JsonObject {
  "public_id": string;
  "title": string;
  "student_name": string;
  "course_name": string;
  "classroom_name": string;
  "score"?: number | null;
  "passing_mark"?: number | null;
  "status": string;
  "valid": boolean;
  "verification_code": string;
  "issued_at": string;
  "image_url": string;
}
export interface CertificateVerifyCertificateGetResponse extends ApiEnvelope<CertificateVerifyCertificateGetResponseData> {
}

/** Backend response type: raw-response. */
export interface CertificateRenderCertificateImageGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::AssignedStudentsQuery. */
export interface ReportAssignedStudentsGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "search"?: string | null;
}
/** Backend response type: crate::models::PagedResult<crate::profile::ProfileSummary>. */
export interface ReportAssignedStudentsGetResponseItem extends JsonObject {
  "user_id": string;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "phone"?: string | null;
}
export interface ReportAssignedStudentsGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ReportAssignedStudentsGetResponseData extends JsonObject {
  "data": ReportAssignedStudentsGetResponseItem[];
  "meta": ReportAssignedStudentsGetResponsePageMeta;
}
export interface ReportAssignedStudentsGetResponse extends ApiEnvelope<ReportAssignedStudentsGetResponseData> {
}

/** Backend query type: models::ReportQuery. */
export interface ReportClassroomsGetQuery extends QueryParams {
  "from"?: string | null;
  "to"?: string | null;
  "status"?: string | null;
}
/** Backend response type: Vec<models::ClassroomReport>. */
export interface ReportClassroomsGetResponseItem extends JsonObject {
  "classroom_id": string;
  "course_id": string;
  "name": string;
  "status": string;
  "teacher_user_id"?: string | null;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "consultant_user_id"?: string | null;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "student_count": number;
  "session_count": number;
  "completed_session_count": number;
  "attendance_count": number;
  "absence_count": number;
  "attendance_rate": number;
}
export interface ReportClassroomsGetResponse extends ApiEnvelope<ReportClassroomsGetResponseItem[]> {
}

/** Backend query type: models::ReportQuery. */
export interface ReportConsultantsGetQuery extends QueryParams {
  "from"?: string | null;
  "to"?: string | null;
  "status"?: string | null;
}
/** Backend response type: Vec<models::ConsultantReport>. */
export interface ReportConsultantsGetResponseItem extends JsonObject {
  "consultant_user_id": string;
  "consultant_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "classroom_count": number;
  "active_classroom_count": number;
  "student_count": number;
  "session_count": number;
  "completed_session_count": number;
  "attendance_count": number;
  "absence_count": number;
  "attendance_rate": number;
}
export interface ReportConsultantsGetResponse extends ApiEnvelope<ReportConsultantsGetResponseItem[]> {
}

/** Backend query type: models::ReportQuery. */
export interface ReportCoursesGetQuery extends QueryParams {
  "from"?: string | null;
  "to"?: string | null;
  "status"?: string | null;
}
/** Backend response type: Vec<models::CourseReport>. */
export type ReportCoursesGetResponse = import("./types.js").AcademyCoursesResponse;

/** Backend response type: Vec<crate::profile::ProfileSummary>. */
export interface ReportMyStudentsGetResponseItem extends JsonObject {
  "user_id": string;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "email"?: string | null;
  "national_code"?: string | null;
  "phone"?: string | null;
}
export interface ReportMyStudentsGetResponse extends ApiEnvelope<ReportMyStudentsGetResponseItem[]> {
}

/** Backend query type: models::StudentSummaryQuery. */
export interface ReportStudentSummaryGetQuery extends QueryParams {
  "from"?: string | null;
  "to"?: string | null;
  "status"?: string | null;
  "student_user_id"?: string | null;
}
/** Backend response type: models::StudentReport. */
export interface ReportStudentSummaryGetResponseData extends JsonObject {
  "courses"?: JsonValue[] | null;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "classroom_count": number;
  "session_count": number;
  "attendance_count": number;
  "absence_count": number;
  "attendance_rate": number;
}
export interface ReportStudentSummaryGetResponse extends ApiEnvelope<ReportStudentSummaryGetResponseData> {
}

/** Backend query type: models::ReportQuery. */
export interface ReportStudentsGetQuery extends QueryParams {
  "from"?: string | null;
  "to"?: string | null;
  "status"?: string | null;
}
/** Backend response type: Vec<models::StudentReport>. */
export interface ReportStudentsGetResponseItem extends JsonObject {
  "courses"?: JsonValue[] | null;
  "user_id": string;
  "profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "classroom_count": number;
  "session_count": number;
  "attendance_count": number;
  "absence_count": number;
  "attendance_rate": number;
}
export interface ReportStudentsGetResponse extends ApiEnvelope<ReportStudentsGetResponseItem[]> {
}

/** Backend query type: models::ReportQuery. */
export interface ReportTeachersGetQuery extends QueryParams {
  "from"?: string | null;
  "to"?: string | null;
  "status"?: string | null;
}
/** Backend response type: Vec<models::TeacherReport>. */
export interface ReportTeachersGetResponseItem extends JsonObject {
  "teacher_user_id": string;
  "teacher_profile"?: BackendJson<"crate::profile::ProfileSummary"> | null;
  "classroom_count": number;
  "active_classroom_count": number;
  "student_count": number;
  "session_count": number;
  "completed_session_count": number;
  "attendance_count": number;
  "absence_count": number;
  "attendance_rate": number;
}
export interface ReportTeachersGetResponse extends ApiEnvelope<ReportTeachersGetResponseItem[]> {
}

/** Backend query type: LicenceQuery. */
export interface ServiceCheckLicenceGetQuery extends QueryParams {
  "user_id": string;
  "content_id": string;
}
/** Backend response type: LicenceResponse. */
export interface ServiceCheckLicenceGetResponseData extends JsonObject {
  "allowed": boolean;
}
export interface ServiceCheckLicenceGetResponse extends ApiEnvelope<ServiceCheckLicenceGetResponseData> {
}

/** Backend response type: api. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}
