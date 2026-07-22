import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: response without a declared JSON model. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: SessionResponse. */
export interface SessionGetSelfGetResponseData extends JsonObject {
  "user_id": string;
  "roles": string[];
  "permissions": string[];
}
export interface SessionGetSelfGetResponse extends ApiEnvelope<SessionGetSelfGetResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface CertificateIndexCertificateGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::CertificateResponse>. */
export interface CertificateIndexCertificateGetResponseItem extends JsonObject {
  "id": number;
  "user_id": string;
  "course_id"?: number;
  "classroom_id"?: number;
  "title": string;
  "issued_at": string;
  "media_url"?: string;
  "created_at": string;
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
  "course_id"?: number;
  "classroom_id"?: number;
  "title": string;
  "issued_at": string;
  "media_url"?: string;
}
/** Backend response type: models::CertificateResponse. */
export interface CertificateStoreCertificatePostResponseData extends JsonObject {
  "id": number;
  "user_id": string;
  "course_id"?: number;
  "classroom_id"?: number;
  "title": string;
  "issued_at": string;
  "media_url"?: string;
  "created_at": string;
}
export interface CertificateStoreCertificatePostResponse extends ApiEnvelope<CertificateStoreCertificatePostResponseData> {
}

/** Backend response type: models::CertificateResponse. */
export interface CertificateShowCertificateGetResponseData extends JsonObject {
  "id": number;
  "user_id": string;
  "course_id"?: number;
  "classroom_id"?: number;
  "title": string;
  "issued_at": string;
  "media_url"?: string;
  "created_at": string;
}
export interface CertificateShowCertificateGetResponse extends ApiEnvelope<CertificateShowCertificateGetResponseData> {
}

/** Backend request type: models::UpdateCertificateRequest. */
export interface CertificateUpdateCertificatePatchInput extends JsonObject {
  "user_id"?: string;
  "course_id"?: number;
  "classroom_id"?: number;
  "title"?: string;
  "issued_at"?: string;
  "media_url"?: string;
}
/** Backend response type: models::CertificateResponse. */
export interface CertificateUpdateCertificatePatchResponseData extends JsonObject {
  "id": number;
  "user_id": string;
  "course_id"?: number;
  "classroom_id"?: number;
  "title": string;
  "issued_at": string;
  "media_url"?: string;
  "created_at": string;
}
export interface CertificateUpdateCertificatePatchResponse extends ApiEnvelope<CertificateUpdateCertificatePatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ClassroomIndexClassroomGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::ClassroomResponse>. */
export interface ClassroomIndexClassroomGetResponseItem extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "code"?: string;
  "classroom_type_id"?: number;
  "school_grade_id"?: number;
  "teacher_user_id"?: string;
  "consultant_user_id"?: string;
  "capacity"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
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
  "course_id": number;
  "name": string;
  "code"?: string;
  "classroom_type_id"?: number;
  "school_grade_id"?: number;
  "teacher_user_id"?: string;
  "consultant_user_id"?: string;
  "capacity"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
}
/** Backend response type: models::ClassroomResponse. */
export interface ClassroomStoreClassroomPostResponseData extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "code"?: string;
  "classroom_type_id"?: number;
  "school_grade_id"?: number;
  "teacher_user_id"?: string;
  "consultant_user_id"?: string;
  "capacity"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomStoreClassroomPostResponse extends ApiEnvelope<ClassroomStoreClassroomPostResponseData> {
}

/** Backend response type: models::ClassroomResponse. */
export interface ClassroomShowClassroomGetResponseData extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "code"?: string;
  "classroom_type_id"?: number;
  "school_grade_id"?: number;
  "teacher_user_id"?: string;
  "consultant_user_id"?: string;
  "capacity"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomShowClassroomGetResponse extends ApiEnvelope<ClassroomShowClassroomGetResponseData> {
}

/** Backend request type: models::UpdateClassroomRequest. */
export interface ClassroomUpdateClassroomPatchInput extends JsonObject {
  "course_id"?: number;
  "name"?: string;
  "code"?: string;
  "classroom_type_id"?: number;
  "school_grade_id"?: number;
  "teacher_user_id"?: string;
  "consultant_user_id"?: string;
  "capacity"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status"?: string;
}
/** Backend response type: models::ClassroomResponse. */
export interface ClassroomUpdateClassroomPatchResponseData extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "code"?: string;
  "classroom_type_id"?: number;
  "school_grade_id"?: number;
  "teacher_user_id"?: string;
  "consultant_user_id"?: string;
  "capacity"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomUpdateClassroomPatchResponse extends ApiEnvelope<ClassroomUpdateClassroomPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ClassroomIndexClassroomUsersGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::ClassroomUserResponse>. */
export interface ClassroomIndexClassroomUsersGetResponseItem extends JsonObject {
  "id": number;
  "classroom_id": number;
  "user_id": string;
  "score"?: number;
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
  "score"?: number;
  "status"?: string;
}
/** Backend response type: models::ClassroomUserResponse. */
export interface ClassroomEnrollClassroomUserPostResponseData extends JsonObject {
  "id": number;
  "classroom_id": number;
  "user_id": string;
  "score"?: number;
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
  "score"?: number;
  "status"?: string;
}
/** Backend response type: models::ClassroomUserResponse. */
export interface ClassroomUpdateClassroomUserPatchResponseData extends JsonObject {
  "id": number;
  "classroom_id": number;
  "user_id": string;
  "score"?: number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomUpdateClassroomUserPatchResponse extends ApiEnvelope<ClassroomUpdateClassroomUserPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ClassroomIndexSessionGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::SessionResponse>. */
export interface ClassroomIndexSessionGetResponseItem extends JsonObject {
  "id": number;
  "classroom_id": number;
  "course_session_id"?: number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
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
  "classroom_id": number;
  "course_session_id"?: number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
}
/** Backend response type: models::SessionResponse. */
export interface ClassroomStoreSessionPostResponseData extends JsonObject {
  "id": number;
  "classroom_id": number;
  "course_session_id"?: number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomStoreSessionPostResponse extends ApiEnvelope<ClassroomStoreSessionPostResponseData> {
}

/** Backend response type: models::SessionResponse. */
export interface ClassroomShowSessionGetResponseData extends JsonObject {
  "id": number;
  "classroom_id": number;
  "course_session_id"?: number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomShowSessionGetResponse extends ApiEnvelope<ClassroomShowSessionGetResponseData> {
}

/** Backend request type: models::UpdateSessionRequest. */
export interface ClassroomUpdateSessionPatchInput extends JsonObject {
  "classroom_id"?: number;
  "course_session_id"?: number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status"?: string;
}
/** Backend response type: models::SessionResponse. */
export interface ClassroomUpdateSessionPatchResponseData extends JsonObject {
  "id": number;
  "classroom_id": number;
  "course_session_id"?: number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ClassroomUpdateSessionPatchResponse extends ApiEnvelope<ClassroomUpdateSessionPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ClassroomIndexAbsencesGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::AbsenceResponse>. */
export interface ClassroomIndexAbsencesGetResponseItem extends JsonObject {
  "id": number;
  "classroom_session_id": number;
  "user_id": string;
  "status": string;
  "absence_reason"?: string;
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

/** Backend query type: PaginationQuery. */
export interface OpsIndexClubProjectGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::ClubProjectResponse>. */
export interface OpsIndexClubProjectGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "owner_user_id"?: string;
  "status": string;
  "created_at": string;
}
export interface OpsIndexClubProjectGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface OpsIndexClubProjectGetResponseData extends JsonObject {
  "data": OpsIndexClubProjectGetResponseItem[];
  "meta": OpsIndexClubProjectGetResponsePageMeta;
}
export interface OpsIndexClubProjectGetResponse extends ApiEnvelope<OpsIndexClubProjectGetResponseData> {
}

/** Backend request type: models::CreateClubProjectRequest. */
export interface OpsStoreClubProjectPostInput extends JsonObject {
  "name": string;
  "description"?: string;
  "owner_user_id"?: string;
  "status": string;
}
/** Backend response type: models::ClubProjectResponse. */
export interface OpsStoreClubProjectPostResponseData extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "owner_user_id"?: string;
  "status": string;
  "created_at": string;
}
export interface OpsStoreClubProjectPostResponse extends ApiEnvelope<OpsStoreClubProjectPostResponseData> {
}

/** Backend response type: models::ClubProjectResponse. */
export interface OpsShowClubProjectGetResponseData extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "owner_user_id"?: string;
  "status": string;
  "created_at": string;
}
export interface OpsShowClubProjectGetResponse extends ApiEnvelope<OpsShowClubProjectGetResponseData> {
}

/** Backend request type: models::UpdateClubProjectRequest. */
export interface OpsUpdateClubProjectPatchInput extends JsonObject {
  "name"?: string;
  "description"?: string;
  "owner_user_id"?: string;
  "status"?: string;
}
/** Backend response type: models::ClubProjectResponse. */
export interface OpsUpdateClubProjectPatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "owner_user_id"?: string;
  "status": string;
  "created_at": string;
}
export interface OpsUpdateClubProjectPatchResponse extends ApiEnvelope<OpsUpdateClubProjectPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ConfigIndexClassroomTypeGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::ClassroomTypeResponse>. */
export interface ConfigIndexClassroomTypeGetResponseItem extends JsonObject {
  "id": number;
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
  "id": number;
  "name": string;
  "created_at": string;
}
export interface ConfigStoreClassroomTypePostResponse extends ApiEnvelope<ConfigStoreClassroomTypePostResponseData> {
}

/** Backend response type: models::ClassroomTypeResponse. */
export interface ConfigShowClassroomTypeGetResponseData extends JsonObject {
  "id": number;
  "name": string;
  "created_at": string;
}
export interface ConfigShowClassroomTypeGetResponse extends ApiEnvelope<ConfigShowClassroomTypeGetResponseData> {
}

/** Backend request type: models::UpdateClassroomTypeRequest. */
export interface ConfigUpdateClassroomTypePatchInput extends JsonObject {
  "name"?: string;
}
/** Backend response type: models::ClassroomTypeResponse. */
export interface ConfigUpdateClassroomTypePatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "created_at": string;
}
export interface ConfigUpdateClassroomTypePatchResponse extends ApiEnvelope<ConfigUpdateClassroomTypePatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ConfigIndexEducationDayGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::EducationDayResponse>. */
export interface ConfigIndexEducationDayGetResponseItem extends JsonObject {
  "id": number;
  "day_date": string;
  "is_holiday": boolean;
  "label"?: string;
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
  "label"?: string;
}
/** Backend response type: models::EducationDayResponse. */
export interface ConfigStoreEducationDayPostResponseData extends JsonObject {
  "id": number;
  "day_date": string;
  "is_holiday": boolean;
  "label"?: string;
  "created_at": string;
}
export interface ConfigStoreEducationDayPostResponse extends ApiEnvelope<ConfigStoreEducationDayPostResponseData> {
}

/** Backend response type: models::EducationDayResponse. */
export interface ConfigShowEducationDayGetResponseData extends JsonObject {
  "id": number;
  "day_date": string;
  "is_holiday": boolean;
  "label"?: string;
  "created_at": string;
}
export interface ConfigShowEducationDayGetResponse extends ApiEnvelope<ConfigShowEducationDayGetResponseData> {
}

/** Backend request type: models::UpdateEducationDayRequest. */
export interface ConfigUpdateEducationDayPatchInput extends JsonObject {
  "day_date"?: string;
  "is_holiday"?: boolean;
  "label"?: string;
}
/** Backend response type: models::EducationDayResponse. */
export interface ConfigUpdateEducationDayPatchResponseData extends JsonObject {
  "id": number;
  "day_date": string;
  "is_holiday": boolean;
  "label"?: string;
  "created_at": string;
}
export interface ConfigUpdateEducationDayPatchResponse extends ApiEnvelope<ConfigUpdateEducationDayPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ConfigIndexGradeGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::GradeResponse>. */
export interface ConfigIndexGradeGetResponseItem extends JsonObject {
  "id": number;
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
  "id": number;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface ConfigStoreGradePostResponse extends ApiEnvelope<ConfigStoreGradePostResponseData> {
}

/** Backend response type: models::GradeResponse. */
export interface ConfigShowGradeGetResponseData extends JsonObject {
  "id": number;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface ConfigShowGradeGetResponse extends ApiEnvelope<ConfigShowGradeGetResponseData> {
}

/** Backend request type: models::UpdateGradeRequest. */
export interface ConfigUpdateGradePatchInput extends JsonObject {
  "name"?: string;
  "sort_order"?: number;
}
/** Backend response type: models::GradeResponse. */
export interface ConfigUpdateGradePatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface ConfigUpdateGradePatchResponse extends ApiEnvelope<ConfigUpdateGradePatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ConfigIndexTextTemplateGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::TextTemplateResponse>. */
export interface ConfigIndexTextTemplateGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
  "body": string;
  "template_type": string;
  "created_at": string;
}
export interface ConfigIndexTextTemplateGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ConfigIndexTextTemplateGetResponseData extends JsonObject {
  "data": ConfigIndexTextTemplateGetResponseItem[];
  "meta": ConfigIndexTextTemplateGetResponsePageMeta;
}
export interface ConfigIndexTextTemplateGetResponse extends ApiEnvelope<ConfigIndexTextTemplateGetResponseData> {
}

/** Backend request type: models::CreateTextTemplateRequest. */
export interface ConfigStoreTextTemplatePostInput extends JsonObject {
  "name": string;
  "body": string;
  "template_type": string;
}
/** Backend response type: models::TextTemplateResponse. */
export interface ConfigStoreTextTemplatePostResponseData extends JsonObject {
  "id": number;
  "name": string;
  "body": string;
  "template_type": string;
  "created_at": string;
}
export interface ConfigStoreTextTemplatePostResponse extends ApiEnvelope<ConfigStoreTextTemplatePostResponseData> {
}

/** Backend response type: models::TextTemplateResponse. */
export interface ConfigShowTextTemplateGetResponseData extends JsonObject {
  "id": number;
  "name": string;
  "body": string;
  "template_type": string;
  "created_at": string;
}
export interface ConfigShowTextTemplateGetResponse extends ApiEnvelope<ConfigShowTextTemplateGetResponseData> {
}

/** Backend request type: models::UpdateTextTemplateRequest. */
export interface ConfigUpdateTextTemplatePatchInput extends JsonObject {
  "name"?: string;
  "body"?: string;
  "template_type"?: string;
}
/** Backend response type: models::TextTemplateResponse. */
export interface ConfigUpdateTextTemplatePatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "body": string;
  "template_type": string;
  "created_at": string;
}
export interface ConfigUpdateTextTemplatePatchResponse extends ApiEnvelope<ConfigUpdateTextTemplatePatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ConfigIndexWeekendGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::WeekendResponse>. */
export interface ConfigIndexWeekendGetResponseItem extends JsonObject {
  "id": number;
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
  "id": number;
  "day_of_week": number;
  "created_at": string;
}
export interface ConfigStoreWeekendPostResponse extends ApiEnvelope<ConfigStoreWeekendPostResponseData> {
}

/** Backend response type: models::WeekendResponse. */
export interface ConfigShowWeekendGetResponseData extends JsonObject {
  "id": number;
  "day_of_week": number;
  "created_at": string;
}
export interface ConfigShowWeekendGetResponse extends ApiEnvelope<ConfigShowWeekendGetResponseData> {
}

/** Backend request type: models::UpdateWeekendRequest. */
export interface ConfigUpdateWeekendPatchInput extends JsonObject {
  "day_of_week"?: number;
}
/** Backend response type: models::WeekendResponse. */
export interface ConfigUpdateWeekendPatchResponseData extends JsonObject {
  "id": number;
  "day_of_week": number;
  "created_at": string;
}
export interface ConfigUpdateWeekendPatchResponse extends ApiEnvelope<ConfigUpdateWeekendPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface CourseIndexCourseGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::CourseResponse>. */
export interface CourseIndexCourseGetResponseItem extends JsonObject {
  "id": number;
  "category_id"?: number;
  "name": string;
  "title"?: string;
  "description"?: string;
  "duration"?: string;
  "passing_mark"?: number;
  "price"?: string;
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
  "category_id"?: number;
  "name": string;
  "title"?: string;
  "description"?: string;
  "duration"?: string;
  "passing_mark"?: number;
  "price"?: string;
  "status": string;
}
/** Backend response type: models::CourseResponse. */
export interface CourseStoreCoursePostResponseData extends JsonObject {
  "id": number;
  "category_id"?: number;
  "name": string;
  "title"?: string;
  "description"?: string;
  "duration"?: string;
  "passing_mark"?: number;
  "price"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseStoreCoursePostResponse extends ApiEnvelope<CourseStoreCoursePostResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface CourseIndexSessionGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::SessionResponse>. */
export interface CourseIndexSessionGetResponseItem extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "description"?: string;
  "sort_order": number;
  "session_type": string;
  "duration_minutes"?: number;
  "auto_unlock": boolean;
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
  "course_id": number;
  "name": string;
  "description"?: string;
  "sort_order": number;
  "session_type": string;
  "duration_minutes"?: number;
  "auto_unlock": boolean;
  "status": string;
}
/** Backend response type: models::SessionResponse. */
export interface CourseStoreSessionPostResponseData extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "description"?: string;
  "sort_order": number;
  "session_type": string;
  "duration_minutes"?: number;
  "auto_unlock": boolean;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseStoreSessionPostResponse extends ApiEnvelope<CourseStoreSessionPostResponseData> {
}

/** Backend response type: models::SessionResponse. */
export interface CourseShowSessionGetResponseData extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "description"?: string;
  "sort_order": number;
  "session_type": string;
  "duration_minutes"?: number;
  "auto_unlock": boolean;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseShowSessionGetResponse extends ApiEnvelope<CourseShowSessionGetResponseData> {
}

/** Backend request type: models::UpdateSessionRequest. */
export interface CourseUpdateSessionPatchInput extends JsonObject {
  "name"?: string;
  "description"?: string;
  "sort_order"?: number;
  "session_type"?: string;
  "duration_minutes"?: number;
  "auto_unlock"?: boolean;
  "status"?: string;
}
/** Backend response type: models::SessionResponse. */
export interface CourseUpdateSessionPatchResponseData extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "description"?: string;
  "sort_order": number;
  "session_type": string;
  "duration_minutes"?: number;
  "auto_unlock": boolean;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseUpdateSessionPatchResponse extends ApiEnvelope<CourseUpdateSessionPatchResponseData> {
}

/** Backend response type: models::CourseResponse. */
export interface CourseShowCourseGetResponseData extends JsonObject {
  "id": number;
  "category_id"?: number;
  "name": string;
  "title"?: string;
  "description"?: string;
  "duration"?: string;
  "passing_mark"?: number;
  "price"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseShowCourseGetResponse extends ApiEnvelope<CourseShowCourseGetResponseData> {
}

/** Backend request type: models::UpdateCourseRequest. */
export interface CourseUpdateCoursePatchInput extends JsonObject {
  "category_id"?: number;
  "name"?: string;
  "title"?: string;
  "description"?: string;
  "duration"?: string;
  "passing_mark"?: number;
  "price"?: string;
  "status"?: string;
}
/** Backend response type: models::CourseResponse. */
export interface CourseUpdateCoursePatchResponseData extends JsonObject {
  "id": number;
  "category_id"?: number;
  "name": string;
  "title"?: string;
  "description"?: string;
  "duration"?: string;
  "passing_mark"?: number;
  "price"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseUpdateCoursePatchResponse extends ApiEnvelope<CourseUpdateCoursePatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface CourseIndexCategoryGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::CategoryResponse>. */
export interface CourseIndexCategoryGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
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
  "description"?: string;
  "sort_order": number;
  "status": string;
}
/** Backend response type: models::CategoryResponse. */
export interface CourseStoreCategoryPostResponseData extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseStoreCategoryPostResponse extends ApiEnvelope<CourseStoreCategoryPostResponseData> {
}

/** Backend response type: models::CategoryResponse. */
export interface CourseShowCategoryGetResponseData extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseShowCategoryGetResponse extends ApiEnvelope<CourseShowCategoryGetResponseData> {
}

/** Backend request type: models::UpdateCategoryRequest. */
export interface CourseUpdateCategoryPatchInput extends JsonObject {
  "name"?: string;
  "description"?: string;
  "sort_order"?: number;
  "status"?: string;
}
/** Backend response type: models::CategoryResponse. */
export interface CourseUpdateCategoryPatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseUpdateCategoryPatchResponse extends ApiEnvelope<CourseUpdateCategoryPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface CourseIndexVideoSectionGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::VideoSectionResponse>. */
export interface CourseIndexVideoSectionGetResponseItem extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "sort_order": number;
  "media_url"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseIndexVideoSectionGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface CourseIndexVideoSectionGetResponseData extends JsonObject {
  "data": CourseIndexVideoSectionGetResponseItem[];
  "meta": CourseIndexVideoSectionGetResponsePageMeta;
}
export interface CourseIndexVideoSectionGetResponse extends ApiEnvelope<CourseIndexVideoSectionGetResponseData> {
}

/** Backend request type: models::CreateVideoSectionRequest. */
export interface CourseStoreVideoSectionPostInput extends JsonObject {
  "course_id": number;
  "name": string;
  "sort_order": number;
  "media_url"?: string;
}
/** Backend response type: models::VideoSectionResponse. */
export interface CourseStoreVideoSectionPostResponseData extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "sort_order": number;
  "media_url"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseStoreVideoSectionPostResponse extends ApiEnvelope<CourseStoreVideoSectionPostResponseData> {
}

/** Backend response type: models::VideoSectionResponse. */
export interface CourseShowVideoSectionGetResponseData extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "sort_order": number;
  "media_url"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseShowVideoSectionGetResponse extends ApiEnvelope<CourseShowVideoSectionGetResponseData> {
}

/** Backend request type: models::UpdateVideoSectionRequest. */
export interface CourseUpdateVideoSectionPatchInput extends JsonObject {
  "course_id"?: number;
  "name"?: string;
  "sort_order"?: number;
  "media_url"?: string;
}
/** Backend response type: models::VideoSectionResponse. */
export interface CourseUpdateVideoSectionPatchResponseData extends JsonObject {
  "id": number;
  "course_id": number;
  "name": string;
  "sort_order": number;
  "media_url"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface CourseUpdateVideoSectionPatchResponse extends ApiEnvelope<CourseUpdateVideoSectionPatchResponseData> {
}

/** Backend response type: models::DashboardStats. */
export interface DashboardIndexGetResponseData extends JsonObject {
  "courses": number;
  "classrooms": number;
  "students": number;
  "pending_homework": number;
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

/** Backend query type: PaginationQuery. */
export interface EventIndexEventGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::EventResponse>. */
export interface EventIndexEventGetResponseItem extends JsonObject {
  "id": number;
  "event_type_id"?: number;
  "name": string;
  "description"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface EventIndexEventGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface EventIndexEventGetResponseData extends JsonObject {
  "data": EventIndexEventGetResponseItem[];
  "meta": EventIndexEventGetResponsePageMeta;
}
export interface EventIndexEventGetResponse extends ApiEnvelope<EventIndexEventGetResponseData> {
}

/** Backend request type: models::CreateEventRequest. */
export interface EventStoreEventPostInput extends JsonObject {
  "event_type_id"?: number;
  "name": string;
  "description"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
}
/** Backend response type: models::EventResponse. */
export interface EventStoreEventPostResponseData extends JsonObject {
  "id": number;
  "event_type_id"?: number;
  "name": string;
  "description"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface EventStoreEventPostResponse extends ApiEnvelope<EventStoreEventPostResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface EventIndexUserGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::UserResponse>. */
export interface EventIndexUserGetResponseItem extends JsonObject {
  "id": number;
  "event_id": number;
  "user_id": string;
  "status": string;
  "created_at": string;
}
export interface EventIndexUserGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface EventIndexUserGetResponseData extends JsonObject {
  "data": EventIndexUserGetResponseItem[];
  "meta": EventIndexUserGetResponsePageMeta;
}
export interface EventIndexUserGetResponse extends ApiEnvelope<EventIndexUserGetResponseData> {
}

/** Backend request type: models::CreateUserRequest. */
export interface EventStoreUserPostInput extends JsonObject {
  "event_id": number;
  "user_id": string;
  "status": string;
}
/** Backend response type: models::UserResponse. */
export interface EventStoreUserPostResponseData extends JsonObject {
  "id": number;
  "event_id": number;
  "user_id": string;
  "status": string;
  "created_at": string;
}
export interface EventStoreUserPostResponse extends ApiEnvelope<EventStoreUserPostResponseData> {
}

/** Backend response type: models::UserResponse. */
export interface EventShowUserGetResponseData extends JsonObject {
  "id": number;
  "event_id": number;
  "user_id": string;
  "status": string;
  "created_at": string;
}
export interface EventShowUserGetResponse extends ApiEnvelope<EventShowUserGetResponseData> {
}

/** Backend request type: models::UpdateUserRequest. */
export interface EventUpdateUserPatchInput extends JsonObject {
  "user_id"?: string;
  "status"?: string;
}
/** Backend response type: models::UserResponse. */
export interface EventUpdateUserPatchResponseData extends JsonObject {
  "id": number;
  "event_id": number;
  "user_id": string;
  "status": string;
  "created_at": string;
}
export interface EventUpdateUserPatchResponse extends ApiEnvelope<EventUpdateUserPatchResponseData> {
}

/** Backend response type: models::EventResponse. */
export interface EventShowEventGetResponseData extends JsonObject {
  "id": number;
  "event_type_id"?: number;
  "name": string;
  "description"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface EventShowEventGetResponse extends ApiEnvelope<EventShowEventGetResponseData> {
}

/** Backend request type: models::UpdateEventRequest. */
export interface EventUpdateEventPatchInput extends JsonObject {
  "event_type_id"?: number;
  "name"?: string;
  "description"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status"?: string;
}
/** Backend response type: models::EventResponse. */
export interface EventUpdateEventPatchResponseData extends JsonObject {
  "id": number;
  "event_type_id"?: number;
  "name": string;
  "description"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface EventUpdateEventPatchResponse extends ApiEnvelope<EventUpdateEventPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface EventIndexSessionGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::SessionResponse>. */
export interface EventIndexSessionGetResponseItem extends JsonObject {
  "id": number;
  "event_id": number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "created_at": string;
}
export interface EventIndexSessionGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface EventIndexSessionGetResponseData extends JsonObject {
  "data": EventIndexSessionGetResponseItem[];
  "meta": EventIndexSessionGetResponsePageMeta;
}
export interface EventIndexSessionGetResponse extends ApiEnvelope<EventIndexSessionGetResponseData> {
}

/** Backend request type: models::CreateSessionRequest. */
export interface EventStoreSessionPostInput extends JsonObject {
  "event_id": number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
}
/** Backend response type: models::SessionResponse. */
export interface EventStoreSessionPostResponseData extends JsonObject {
  "id": number;
  "event_id": number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "created_at": string;
}
export interface EventStoreSessionPostResponse extends ApiEnvelope<EventStoreSessionPostResponseData> {
}

/** Backend response type: models::SessionResponse. */
export interface EventShowSessionGetResponseData extends JsonObject {
  "id": number;
  "event_id": number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "created_at": string;
}
export interface EventShowSessionGetResponse extends ApiEnvelope<EventShowSessionGetResponseData> {
}

/** Backend request type: models::UpdateSessionRequest. */
export interface EventUpdateSessionPatchInput extends JsonObject {
  "event_id"?: number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
}
/** Backend response type: models::SessionResponse. */
export interface EventUpdateSessionPatchResponseData extends JsonObject {
  "id": number;
  "event_id": number;
  "name"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "created_at": string;
}
export interface EventUpdateSessionPatchResponse extends ApiEnvelope<EventUpdateSessionPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ExamIndexExamGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::ExamResponse>. */
export interface ExamIndexExamGetResponseItem extends JsonObject {
  "id": number;
  "course_id"?: number;
  "name": string;
  "description"?: string;
  "duration_minutes"?: number;
  "passing_mark"?: number;
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
  "course_id"?: number;
  "name": string;
  "description"?: string;
  "duration_minutes"?: number;
  "passing_mark"?: number;
  "status": string;
}
/** Backend response type: models::ExamResponse. */
export interface ExamStoreExamPostResponseData extends JsonObject {
  "id": number;
  "course_id"?: number;
  "name": string;
  "description"?: string;
  "duration_minutes"?: number;
  "passing_mark"?: number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamStoreExamPostResponse extends ApiEnvelope<ExamStoreExamPostResponseData> {
}

/** Backend response type: models::ExamResponse. */
export interface ExamShowExamGetResponseData extends JsonObject {
  "id": number;
  "course_id"?: number;
  "name": string;
  "description"?: string;
  "duration_minutes"?: number;
  "passing_mark"?: number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamShowExamGetResponse extends ApiEnvelope<ExamShowExamGetResponseData> {
}

/** Backend request type: models::UpdateExamRequest. */
export interface ExamUpdateExamPatchInput extends JsonObject {
  "course_id"?: number;
  "name"?: string;
  "description"?: string;
  "duration_minutes"?: number;
  "passing_mark"?: number;
  "status"?: string;
}
/** Backend response type: models::ExamResponse. */
export interface ExamUpdateExamPatchResponseData extends JsonObject {
  "id": number;
  "course_id"?: number;
  "name": string;
  "description"?: string;
  "duration_minutes"?: number;
  "passing_mark"?: number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface ExamUpdateExamPatchResponse extends ApiEnvelope<ExamUpdateExamPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ExamIndexQuestionGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::QuestionResponse>. */
export interface ExamIndexQuestionGetResponseItem extends JsonObject {
  "id": number;
  "exam_id"?: number;
  "question_text": string;
  "question_type": string;
  "options"?: JsonValue;
  "correct_answer"?: string;
  "sort_order": number;
  "created_at": string;
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
  "exam_id"?: number;
  "question_text": string;
  "question_type": string;
  "options"?: JsonValue;
  "correct_answer"?: string;
  "sort_order": number;
}
/** Backend response type: models::QuestionResponse. */
export interface ExamStoreQuestionPostResponseData extends JsonObject {
  "id": number;
  "exam_id"?: number;
  "question_text": string;
  "question_type": string;
  "options"?: JsonValue;
  "correct_answer"?: string;
  "sort_order": number;
  "created_at": string;
}
export interface ExamStoreQuestionPostResponse extends ApiEnvelope<ExamStoreQuestionPostResponseData> {
}

/** Backend response type: models::QuestionResponse. */
export interface ExamShowQuestionGetResponseData extends JsonObject {
  "id": number;
  "exam_id"?: number;
  "question_text": string;
  "question_type": string;
  "options"?: JsonValue;
  "correct_answer"?: string;
  "sort_order": number;
  "created_at": string;
}
export interface ExamShowQuestionGetResponse extends ApiEnvelope<ExamShowQuestionGetResponseData> {
}

/** Backend request type: models::UpdateQuestionRequest. */
export interface ExamUpdateQuestionPatchInput extends JsonObject {
  "exam_id"?: number;
  "question_text"?: string;
  "question_type"?: string;
  "options"?: JsonValue;
  "correct_answer"?: string;
  "sort_order"?: number;
}
/** Backend response type: models::QuestionResponse. */
export interface ExamUpdateQuestionPatchResponseData extends JsonObject {
  "id": number;
  "exam_id"?: number;
  "question_text": string;
  "question_type": string;
  "options"?: JsonValue;
  "correct_answer"?: string;
  "sort_order": number;
  "created_at": string;
}
export interface ExamUpdateQuestionPatchResponse extends ApiEnvelope<ExamUpdateQuestionPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ExamIndexSessionGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::SessionResponse>. */
export interface ExamIndexSessionGetResponseItem extends JsonObject {
  "id": number;
  "exam_id": number;
  "classroom_id"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
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
  "exam_id": number;
  "classroom_id"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
}
/** Backend response type: models::SessionResponse. */
export interface ExamStoreSessionPostResponseData extends JsonObject {
  "id": number;
  "exam_id": number;
  "classroom_id"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
}
export interface ExamStoreSessionPostResponse extends ApiEnvelope<ExamStoreSessionPostResponseData> {
}

/** Backend response type: models::SessionResponse. */
export interface ExamShowSessionGetResponseData extends JsonObject {
  "id": number;
  "exam_id": number;
  "classroom_id"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
}
export interface ExamShowSessionGetResponse extends ApiEnvelope<ExamShowSessionGetResponseData> {
}

/** Backend request type: models::UpdateSessionRequest. */
export interface ExamUpdateSessionPatchInput extends JsonObject {
  "exam_id"?: number;
  "classroom_id"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status"?: string;
}
/** Backend response type: models::SessionResponse. */
export interface ExamUpdateSessionPatchResponseData extends JsonObject {
  "id": number;
  "exam_id": number;
  "classroom_id"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "status": string;
  "created_at": string;
}
export interface ExamUpdateSessionPatchResponse extends ApiEnvelope<ExamUpdateSessionPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface HomeworkIndexHomeworkGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::HomeworkResponse>. */
export interface HomeworkIndexHomeworkGetResponseItem extends JsonObject {
  "id": number;
  "course_id"?: number;
  "name": string;
  "description"?: string;
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
  "course_id"?: number;
  "name": string;
  "description"?: string;
  "status": string;
}
/** Backend response type: models::HomeworkResponse. */
export interface HomeworkStoreHomeworkPostResponseData extends JsonObject {
  "id": number;
  "course_id"?: number;
  "name": string;
  "description"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkStoreHomeworkPostResponse extends ApiEnvelope<HomeworkStoreHomeworkPostResponseData> {
}

/** Backend response type: models::HomeworkResponse. */
export interface HomeworkShowHomeworkGetResponseData extends JsonObject {
  "id": number;
  "course_id"?: number;
  "name": string;
  "description"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkShowHomeworkGetResponse extends ApiEnvelope<HomeworkShowHomeworkGetResponseData> {
}

/** Backend request type: models::UpdateHomeworkRequest. */
export interface HomeworkUpdateHomeworkPatchInput extends JsonObject {
  "course_id"?: number;
  "name"?: string;
  "description"?: string;
  "status"?: string;
}
/** Backend response type: models::HomeworkResponse. */
export interface HomeworkUpdateHomeworkPatchResponseData extends JsonObject {
  "id": number;
  "course_id"?: number;
  "name": string;
  "description"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkUpdateHomeworkPatchResponse extends ApiEnvelope<HomeworkUpdateHomeworkPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface HomeworkIndexAssignmentGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::AssignmentResponse>. */
export interface HomeworkIndexAssignmentGetResponseItem extends JsonObject {
  "id": number;
  "homework_id": number;
  "classroom_id"?: number;
  "user_id"?: string;
  "due_at"?: string;
  "status": string;
  "answer_text"?: string;
  "score"?: number;
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
  "homework_id": number;
  "classroom_id"?: number;
  "user_id"?: string;
  "due_at"?: string;
  "status": string;
  "answer_text"?: string;
  "score"?: number;
}
/** Backend response type: models::AssignmentResponse. */
export interface HomeworkStoreAssignmentPostResponseData extends JsonObject {
  "id": number;
  "homework_id": number;
  "classroom_id"?: number;
  "user_id"?: string;
  "due_at"?: string;
  "status": string;
  "answer_text"?: string;
  "score"?: number;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkStoreAssignmentPostResponse extends ApiEnvelope<HomeworkStoreAssignmentPostResponseData> {
}

/** Backend response type: models::AssignmentResponse. */
export interface HomeworkShowAssignmentGetResponseData extends JsonObject {
  "id": number;
  "homework_id": number;
  "classroom_id"?: number;
  "user_id"?: string;
  "due_at"?: string;
  "status": string;
  "answer_text"?: string;
  "score"?: number;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkShowAssignmentGetResponse extends ApiEnvelope<HomeworkShowAssignmentGetResponseData> {
}

/** Backend request type: models::UpdateAssignmentRequest. */
export interface HomeworkUpdateAssignmentPatchInput extends JsonObject {
  "homework_id"?: number;
  "classroom_id"?: number;
  "user_id"?: string;
  "due_at"?: string;
  "status"?: string;
  "answer_text"?: string;
  "score"?: number;
}
/** Backend response type: models::AssignmentResponse. */
export interface HomeworkUpdateAssignmentPatchResponseData extends JsonObject {
  "id": number;
  "homework_id": number;
  "classroom_id"?: number;
  "user_id"?: string;
  "due_at"?: string;
  "status": string;
  "answer_text"?: string;
  "score"?: number;
  "created_at": string;
  "updated_at": string;
}
export interface HomeworkUpdateAssignmentPatchResponse extends ApiEnvelope<HomeworkUpdateAssignmentPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface HomeworkIndexQuestionGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::QuestionResponse>. */
export interface HomeworkIndexQuestionGetResponseItem extends JsonObject {
  "id": number;
  "homework_id": number;
  "question_text": string;
  "sort_order": number;
  "created_at": string;
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
  "homework_id": number;
  "question_text": string;
  "sort_order": number;
}
/** Backend response type: models::QuestionResponse. */
export interface HomeworkStoreQuestionPostResponseData extends JsonObject {
  "id": number;
  "homework_id": number;
  "question_text": string;
  "sort_order": number;
  "created_at": string;
}
export interface HomeworkStoreQuestionPostResponse extends ApiEnvelope<HomeworkStoreQuestionPostResponseData> {
}

/** Backend response type: models::QuestionResponse. */
export interface HomeworkShowQuestionGetResponseData extends JsonObject {
  "id": number;
  "homework_id": number;
  "question_text": string;
  "sort_order": number;
  "created_at": string;
}
export interface HomeworkShowQuestionGetResponse extends ApiEnvelope<HomeworkShowQuestionGetResponseData> {
}

/** Backend request type: models::UpdateQuestionRequest. */
export interface HomeworkUpdateQuestionPatchInput extends JsonObject {
  "homework_id"?: number;
  "question_text"?: string;
  "sort_order"?: number;
}
/** Backend response type: models::QuestionResponse. */
export interface HomeworkUpdateQuestionPatchResponseData extends JsonObject {
  "id": number;
  "homework_id": number;
  "question_text": string;
  "sort_order": number;
  "created_at": string;
}
export interface HomeworkUpdateQuestionPatchResponse extends ApiEnvelope<HomeworkUpdateQuestionPatchResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: PaginationQuery. */
export interface InteractiveIndexCategoryGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::CategoryResponse>. */
export interface InteractiveIndexCategoryGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface InteractiveIndexCategoryGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface InteractiveIndexCategoryGetResponseData extends JsonObject {
  "data": InteractiveIndexCategoryGetResponseItem[];
  "meta": InteractiveIndexCategoryGetResponsePageMeta;
}
export interface InteractiveIndexCategoryGetResponse extends ApiEnvelope<InteractiveIndexCategoryGetResponseData> {
}

/** Backend request type: models::CreateCategoryRequest. */
export interface InteractiveStoreCategoryPostInput extends JsonObject {
  "name": string;
  "sort_order": number;
}
/** Backend response type: models::CategoryResponse. */
export interface InteractiveStoreCategoryPostResponseData extends JsonObject {
  "id": number;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface InteractiveStoreCategoryPostResponse extends ApiEnvelope<InteractiveStoreCategoryPostResponseData> {
}

/** Backend response type: models::CategoryResponse. */
export interface InteractiveShowCategoryGetResponseData extends JsonObject {
  "id": number;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface InteractiveShowCategoryGetResponse extends ApiEnvelope<InteractiveShowCategoryGetResponseData> {
}

/** Backend request type: models::UpdateCategoryRequest. */
export interface InteractiveUpdateCategoryPatchInput extends JsonObject {
  "name"?: string;
  "sort_order"?: number;
}
/** Backend response type: models::CategoryResponse. */
export interface InteractiveUpdateCategoryPatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "sort_order": number;
  "created_at": string;
}
export interface InteractiveUpdateCategoryPatchResponse extends ApiEnvelope<InteractiveUpdateCategoryPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface InteractiveIndexClassroomSessionGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::ClassroomSessionResponse>. */
export interface InteractiveIndexClassroomSessionGetResponseItem extends JsonObject {
  "id": number;
  "classroom_session_id": number;
  "interactive_content_id": number;
  "room_code"?: string;
  "state"?: JsonValue;
  "created_at": string;
}
export interface InteractiveIndexClassroomSessionGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface InteractiveIndexClassroomSessionGetResponseData extends JsonObject {
  "data": InteractiveIndexClassroomSessionGetResponseItem[];
  "meta": InteractiveIndexClassroomSessionGetResponsePageMeta;
}
export interface InteractiveIndexClassroomSessionGetResponse extends ApiEnvelope<InteractiveIndexClassroomSessionGetResponseData> {
}

/** Backend request type: models::CreateClassroomSessionRequest. */
export interface InteractiveStoreClassroomSessionPostInput extends JsonObject {
  "classroom_session_id": number;
  "interactive_content_id": number;
  "room_code"?: string;
  "state"?: JsonValue;
}
/** Backend response type: models::ClassroomSessionResponse. */
export interface InteractiveStoreClassroomSessionPostResponseData extends JsonObject {
  "id": number;
  "classroom_session_id": number;
  "interactive_content_id": number;
  "room_code"?: string;
  "state"?: JsonValue;
  "created_at": string;
}
export interface InteractiveStoreClassroomSessionPostResponse extends ApiEnvelope<InteractiveStoreClassroomSessionPostResponseData> {
}

/** Backend response type: models::ClassroomSessionResponse. */
export interface InteractiveShowClassroomSessionGetResponseData extends JsonObject {
  "id": number;
  "classroom_session_id": number;
  "interactive_content_id": number;
  "room_code"?: string;
  "state"?: JsonValue;
  "created_at": string;
}
export interface InteractiveShowClassroomSessionGetResponse extends ApiEnvelope<InteractiveShowClassroomSessionGetResponseData> {
}

/** Backend request type: models::UpdateClassroomSessionRequest. */
export interface InteractiveUpdateClassroomSessionPatchInput extends JsonObject {
  "classroom_session_id"?: number;
  "interactive_content_id"?: number;
  "room_code"?: string;
  "state"?: JsonValue;
}
/** Backend response type: models::ClassroomSessionResponse. */
export interface InteractiveUpdateClassroomSessionPatchResponseData extends JsonObject {
  "id": number;
  "classroom_session_id": number;
  "interactive_content_id": number;
  "room_code"?: string;
  "state"?: JsonValue;
  "created_at": string;
}
export interface InteractiveUpdateClassroomSessionPatchResponse extends ApiEnvelope<InteractiveUpdateClassroomSessionPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface InteractiveIndexContentGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::ContentResponse>. */
export interface InteractiveIndexContentGetResponseItem extends JsonObject {
  "id": number;
  "category_id"?: number;
  "name": string;
  "content_type": string;
  "payload"?: JsonValue;
  "reward_points": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface InteractiveIndexContentGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface InteractiveIndexContentGetResponseData extends JsonObject {
  "data": InteractiveIndexContentGetResponseItem[];
  "meta": InteractiveIndexContentGetResponsePageMeta;
}
export interface InteractiveIndexContentGetResponse extends ApiEnvelope<InteractiveIndexContentGetResponseData> {
}

/** Backend request type: models::CreateContentRequest. */
export interface InteractiveStoreContentPostInput extends JsonObject {
  "category_id"?: number;
  "name": string;
  "content_type": string;
  "payload"?: JsonValue;
  "reward_points": number;
  "status": string;
}
/** Backend response type: models::ContentResponse. */
export interface InteractiveStoreContentPostResponseData extends JsonObject {
  "id": number;
  "category_id"?: number;
  "name": string;
  "content_type": string;
  "payload"?: JsonValue;
  "reward_points": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface InteractiveStoreContentPostResponse extends ApiEnvelope<InteractiveStoreContentPostResponseData> {
}

/** Backend response type: models::ContentResponse. */
export interface InteractiveShowContentGetResponseData extends JsonObject {
  "id": number;
  "category_id"?: number;
  "name": string;
  "content_type": string;
  "payload"?: JsonValue;
  "reward_points": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface InteractiveShowContentGetResponse extends ApiEnvelope<InteractiveShowContentGetResponseData> {
}

/** Backend request type: models::UpdateContentRequest. */
export interface InteractiveUpdateContentPatchInput extends JsonObject {
  "category_id"?: number;
  "name"?: string;
  "content_type"?: string;
  "payload"?: JsonValue;
  "reward_points"?: number;
  "status"?: string;
}
/** Backend response type: models::ContentResponse. */
export interface InteractiveUpdateContentPatchResponseData extends JsonObject {
  "id": number;
  "category_id"?: number;
  "name": string;
  "content_type": string;
  "payload"?: JsonValue;
  "reward_points": number;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface InteractiveUpdateContentPatchResponse extends ApiEnvelope<InteractiveUpdateContentPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface OpsIndexInvitationGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::InvitationResponse>. */
export interface OpsIndexInvitationGetResponseItem extends JsonObject {
  "id": number;
  "inviter_user_id": string;
  "invitee_user_id"?: string;
  "invitee_email"?: string;
  "reward_status": string;
  "created_at": string;
}
export interface OpsIndexInvitationGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface OpsIndexInvitationGetResponseData extends JsonObject {
  "data": OpsIndexInvitationGetResponseItem[];
  "meta": OpsIndexInvitationGetResponsePageMeta;
}
export interface OpsIndexInvitationGetResponse extends ApiEnvelope<OpsIndexInvitationGetResponseData> {
}

/** Backend request type: models::CreateInvitationRequest. */
export interface OpsStoreInvitationPostInput extends JsonObject {
  "inviter_user_id": string;
  "invitee_user_id"?: string;
  "invitee_email"?: string;
  "reward_status": string;
}
/** Backend response type: models::InvitationResponse. */
export interface OpsStoreInvitationPostResponseData extends JsonObject {
  "id": number;
  "inviter_user_id": string;
  "invitee_user_id"?: string;
  "invitee_email"?: string;
  "reward_status": string;
  "created_at": string;
}
export interface OpsStoreInvitationPostResponse extends ApiEnvelope<OpsStoreInvitationPostResponseData> {
}

/** Backend response type: models::InvitationResponse. */
export interface OpsShowInvitationGetResponseData extends JsonObject {
  "id": number;
  "inviter_user_id": string;
  "invitee_user_id"?: string;
  "invitee_email"?: string;
  "reward_status": string;
  "created_at": string;
}
export interface OpsShowInvitationGetResponse extends ApiEnvelope<OpsShowInvitationGetResponseData> {
}

/** Backend request type: models::UpdateInvitationRequest. */
export interface OpsUpdateInvitationPatchInput extends JsonObject {
  "inviter_user_id"?: string;
  "invitee_user_id"?: string;
  "invitee_email"?: string;
  "reward_status"?: string;
}
/** Backend response type: models::InvitationResponse. */
export interface OpsUpdateInvitationPatchResponseData extends JsonObject {
  "id": number;
  "inviter_user_id": string;
  "invitee_user_id"?: string;
  "invitee_email"?: string;
  "reward_status": string;
  "created_at": string;
}
export interface OpsUpdateInvitationPatchResponse extends ApiEnvelope<OpsUpdateInvitationPatchResponseData> {
}

/** Backend response type: Vec<models::ClassroomReport>. */
export interface ReportClassroomsGetResponseItem extends JsonObject {
  "classroom_id": number;
  "name": string;
  "student_count": number;
  "session_count": number;
}
export interface ReportClassroomsGetResponse extends ApiEnvelope<ReportClassroomsGetResponseItem[]> {
}

/** Backend response type: Vec<models::StudentReport>. */
export interface ReportStudentsGetResponseItem extends JsonObject {
  "user_id": string;
  "classroom_count": number;
  "absence_count": number;
}
export interface ReportStudentsGetResponse extends ApiEnvelope<ReportStudentsGetResponseItem[]> {
}

/** Backend response type: Vec<models::TeacherReport>. */
export interface ReportTeachersGetResponseItem extends JsonObject {
  "teacher_user_id": string;
  "classroom_count": number;
}
export interface ReportTeachersGetResponse extends ApiEnvelope<ReportTeachersGetResponseItem[]> {
}

/** Backend query type: LicenceQuery. */
export interface ServiceCheckLicenceGetQuery extends QueryParams {
  "user_id": string;
  "content_id": number;
}
/** Backend response type: LicenceResponse. */
export interface ServiceCheckLicenceGetResponseData extends JsonObject {
  "allowed": boolean;
}
export interface ServiceCheckLicenceGetResponse extends ApiEnvelope<ServiceCheckLicenceGetResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface OpsIndexSupportInteractionGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::SupportInteractionResponse>. */
export interface OpsIndexSupportInteractionGetResponseItem extends JsonObject {
  "id": number;
  "user_id": string;
  "subject": string;
  "body"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface OpsIndexSupportInteractionGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface OpsIndexSupportInteractionGetResponseData extends JsonObject {
  "data": OpsIndexSupportInteractionGetResponseItem[];
  "meta": OpsIndexSupportInteractionGetResponsePageMeta;
}
export interface OpsIndexSupportInteractionGetResponse extends ApiEnvelope<OpsIndexSupportInteractionGetResponseData> {
}

/** Backend request type: models::CreateSupportInteractionRequest. */
export interface OpsStoreSupportInteractionPostInput extends JsonObject {
  "user_id": string;
  "subject": string;
  "body"?: string;
  "status": string;
}
/** Backend response type: models::SupportInteractionResponse. */
export interface OpsStoreSupportInteractionPostResponseData extends JsonObject {
  "id": number;
  "user_id": string;
  "subject": string;
  "body"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface OpsStoreSupportInteractionPostResponse extends ApiEnvelope<OpsStoreSupportInteractionPostResponseData> {
}

/** Backend response type: models::SupportInteractionResponse. */
export interface OpsShowSupportInteractionGetResponseData extends JsonObject {
  "id": number;
  "user_id": string;
  "subject": string;
  "body"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface OpsShowSupportInteractionGetResponse extends ApiEnvelope<OpsShowSupportInteractionGetResponseData> {
}

/** Backend request type: models::UpdateSupportInteractionRequest. */
export interface OpsUpdateSupportInteractionPatchInput extends JsonObject {
  "user_id"?: string;
  "subject"?: string;
  "body"?: string;
  "status"?: string;
}
/** Backend response type: models::SupportInteractionResponse. */
export interface OpsUpdateSupportInteractionPatchResponseData extends JsonObject {
  "id": number;
  "user_id": string;
  "subject": string;
  "body"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface OpsUpdateSupportInteractionPatchResponse extends ApiEnvelope<OpsUpdateSupportInteractionPatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface OpsIndexWorktimeGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<models::WorktimeResponse>. */
export interface OpsIndexWorktimeGetResponseItem extends JsonObject {
  "id": number;
  "teacher_user_id": string;
  "starts_at": string;
  "ends_at"?: string;
  "status": string;
  "notes"?: string;
  "created_at": string;
}
export interface OpsIndexWorktimeGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface OpsIndexWorktimeGetResponseData extends JsonObject {
  "data": OpsIndexWorktimeGetResponseItem[];
  "meta": OpsIndexWorktimeGetResponsePageMeta;
}
export interface OpsIndexWorktimeGetResponse extends ApiEnvelope<OpsIndexWorktimeGetResponseData> {
}

/** Backend request type: models::CreateWorktimeRequest. */
export interface OpsStoreWorktimePostInput extends JsonObject {
  "teacher_user_id": string;
  "starts_at": string;
  "ends_at"?: string;
  "status": string;
  "notes"?: string;
}
/** Backend response type: models::WorktimeResponse. */
export interface OpsStoreWorktimePostResponseData extends JsonObject {
  "id": number;
  "teacher_user_id": string;
  "starts_at": string;
  "ends_at"?: string;
  "status": string;
  "notes"?: string;
  "created_at": string;
}
export interface OpsStoreWorktimePostResponse extends ApiEnvelope<OpsStoreWorktimePostResponseData> {
}

/** Backend response type: models::WorktimeResponse. */
export interface OpsShowWorktimeGetResponseData extends JsonObject {
  "id": number;
  "teacher_user_id": string;
  "starts_at": string;
  "ends_at"?: string;
  "status": string;
  "notes"?: string;
  "created_at": string;
}
export interface OpsShowWorktimeGetResponse extends ApiEnvelope<OpsShowWorktimeGetResponseData> {
}

/** Backend request type: models::UpdateWorktimeRequest. */
export interface OpsUpdateWorktimePatchInput extends JsonObject {
  "teacher_user_id"?: string;
  "starts_at"?: string;
  "ends_at"?: string;
  "status"?: string;
  "notes"?: string;
}
/** Backend response type: models::WorktimeResponse. */
export interface OpsUpdateWorktimePatchResponseData extends JsonObject {
  "id": number;
  "teacher_user_id": string;
  "starts_at": string;
  "ends_at"?: string;
  "status": string;
  "notes"?: string;
  "created_at": string;
}
export interface OpsUpdateWorktimePatchResponse extends ApiEnvelope<OpsUpdateWorktimePatchResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

