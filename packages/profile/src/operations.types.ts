import type { ProfileListQuery as importProfileListQuery } from "./types.js";
import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: BulkAddressGet. */
export interface OptionAddressGetPostInput extends JsonObject {
  "user_ids": string[];
}
/** Backend response type: Value. */
export interface OptionAddressGetPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: profile_methods::ChatContext. */
export interface SessionGetChatContextGetResponseData extends JsonObject {
  "profile": JsonValue;
  "properties": BackendJson<"Map<String, Value>">;
}
export interface SessionGetChatContextGetResponse extends ApiEnvelope<SessionGetChatContextGetResponseData> {
}

/** Backend response type: SessionResponse. */
export interface SessionGetSelfGetResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface SessionGetSelfGetResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface SessionGetSelfGetResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface SessionGetSelfGetResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface SessionGetSelfGetResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface SessionGetSelfGetResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface SessionGetSelfGetResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface SessionGetSelfGetResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": SessionGetSelfGetResponseDataProfileOfficeEnrollments[];
  "transactions": SessionGetSelfGetResponseDataProfileOfficeTransactions[];
  "installments": SessionGetSelfGetResponseDataProfileOfficeInstallments[];
  "wallets": SessionGetSelfGetResponseDataProfileOfficeWallets[];
  "wallet_transactions": SessionGetSelfGetResponseDataProfileOfficeWalletTransactions[];
}
export interface SessionGetSelfGetResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface SessionGetSelfGetResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface SessionGetSelfGetResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface SessionGetSelfGetResponseDataProfileLms extends JsonObject {
  "classrooms": SessionGetSelfGetResponseDataProfileLmsClassrooms[];
  "classroom_sessions": SessionGetSelfGetResponseDataProfileLmsClassroomSessions[];
  "classroom_users": SessionGetSelfGetResponseDataProfileLmsClassroomUsers[];
}
export interface SessionGetSelfGetResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface SessionGetSelfGetResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": SessionGetSelfGetResponseDataProfileRoles[];
  "credential"?: SessionGetSelfGetResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: SessionGetSelfGetResponseDataProfileOffice | null;
  "lms"?: SessionGetSelfGetResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: SessionGetSelfGetResponseDataProfileParent[] | null;
}
export interface SessionGetSelfGetResponseData extends JsonObject {
  "user_id": string;
  "roles": string[];
  "permissions": string[];
  "profile": SessionGetSelfGetResponseDataProfile;
}
export interface SessionGetSelfGetResponse extends ApiEnvelope<SessionGetSelfGetResponseData> {
}

/** Backend request type: SelfName. */
export interface SessionUpdateSelfNamePatchInput extends JsonObject {
  "first_name": string;
  "last_name": string;
  "locale": string;
}
/** Backend response type: SessionResponse. */
export interface SessionUpdateSelfNamePatchResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface SessionUpdateSelfNamePatchResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface SessionUpdateSelfNamePatchResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface SessionUpdateSelfNamePatchResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface SessionUpdateSelfNamePatchResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface SessionUpdateSelfNamePatchResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface SessionUpdateSelfNamePatchResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface SessionUpdateSelfNamePatchResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": SessionUpdateSelfNamePatchResponseDataProfileOfficeEnrollments[];
  "transactions": SessionUpdateSelfNamePatchResponseDataProfileOfficeTransactions[];
  "installments": SessionUpdateSelfNamePatchResponseDataProfileOfficeInstallments[];
  "wallets": SessionUpdateSelfNamePatchResponseDataProfileOfficeWallets[];
  "wallet_transactions": SessionUpdateSelfNamePatchResponseDataProfileOfficeWalletTransactions[];
}
export interface SessionUpdateSelfNamePatchResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface SessionUpdateSelfNamePatchResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface SessionUpdateSelfNamePatchResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface SessionUpdateSelfNamePatchResponseDataProfileLms extends JsonObject {
  "classrooms": SessionUpdateSelfNamePatchResponseDataProfileLmsClassrooms[];
  "classroom_sessions": SessionUpdateSelfNamePatchResponseDataProfileLmsClassroomSessions[];
  "classroom_users": SessionUpdateSelfNamePatchResponseDataProfileLmsClassroomUsers[];
}
export interface SessionUpdateSelfNamePatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface SessionUpdateSelfNamePatchResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": SessionUpdateSelfNamePatchResponseDataProfileRoles[];
  "credential"?: SessionUpdateSelfNamePatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: SessionUpdateSelfNamePatchResponseDataProfileOffice | null;
  "lms"?: SessionUpdateSelfNamePatchResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: SessionUpdateSelfNamePatchResponseDataProfileParent[] | null;
}
export interface SessionUpdateSelfNamePatchResponseData extends JsonObject {
  "user_id": string;
  "roles": string[];
  "permissions": string[];
  "profile": SessionUpdateSelfNamePatchResponseDataProfile;
}
export interface SessionUpdateSelfNamePatchResponse extends ApiEnvelope<SessionUpdateSelfNamePatchResponseData> {
}

/** Backend request type: OnboardingInput. */
export interface SessionCompleteOnboardingPutInput extends JsonObject {
  "age": number;
  "height": number;
  "weight": number;
  "goal": string;
}
/** Backend response type: SessionResponse. */
export interface SessionCompleteOnboardingPutResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface SessionCompleteOnboardingPutResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface SessionCompleteOnboardingPutResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface SessionCompleteOnboardingPutResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface SessionCompleteOnboardingPutResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface SessionCompleteOnboardingPutResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface SessionCompleteOnboardingPutResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface SessionCompleteOnboardingPutResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": SessionCompleteOnboardingPutResponseDataProfileOfficeEnrollments[];
  "transactions": SessionCompleteOnboardingPutResponseDataProfileOfficeTransactions[];
  "installments": SessionCompleteOnboardingPutResponseDataProfileOfficeInstallments[];
  "wallets": SessionCompleteOnboardingPutResponseDataProfileOfficeWallets[];
  "wallet_transactions": SessionCompleteOnboardingPutResponseDataProfileOfficeWalletTransactions[];
}
export interface SessionCompleteOnboardingPutResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface SessionCompleteOnboardingPutResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface SessionCompleteOnboardingPutResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface SessionCompleteOnboardingPutResponseDataProfileLms extends JsonObject {
  "classrooms": SessionCompleteOnboardingPutResponseDataProfileLmsClassrooms[];
  "classroom_sessions": SessionCompleteOnboardingPutResponseDataProfileLmsClassroomSessions[];
  "classroom_users": SessionCompleteOnboardingPutResponseDataProfileLmsClassroomUsers[];
}
export interface SessionCompleteOnboardingPutResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface SessionCompleteOnboardingPutResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": SessionCompleteOnboardingPutResponseDataProfileRoles[];
  "credential"?: SessionCompleteOnboardingPutResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: SessionCompleteOnboardingPutResponseDataProfileOffice | null;
  "lms"?: SessionCompleteOnboardingPutResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: SessionCompleteOnboardingPutResponseDataProfileParent[] | null;
}
export interface SessionCompleteOnboardingPutResponseData extends JsonObject {
  "user_id": string;
  "roles": string[];
  "permissions": string[];
  "profile": SessionCompleteOnboardingPutResponseDataProfile;
}
export interface SessionCompleteOnboardingPutResponse extends ApiEnvelope<SessionCompleteOnboardingPutResponseData> {
}

/** Backend response type: Value. */
export interface CampaignIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface CampaignMyContributionsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface CampaignShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ContributionRequest. */
export interface CampaignContributePostInput extends JsonObject {
  "method": string;
  "amount": number;
  "unit": string;
  "idempotency_key": string;
}
/** Backend response type: Value. */
export interface CampaignContributePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface CityIndexGetQuery extends QueryParams {
  "page"?: string | null;
  "per_page"?: string | null;
  "filter[search]"?: string | null;
  "filter[status]"?: string | null;
  "filter[active]"?: string | null;
  "filter[name]"?: string | null;
  "filter[province_id]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface CityIndexGetResponseDataCities extends JsonObject {
  "id": string;
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface CityIndexGetResponseData extends JsonObject {
  "cities": CityIndexGetResponseDataCities[];
}
export interface CityIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface CityIndexGetResponse extends ApiEnvelope<CityIndexGetResponseData> {
  meta: CityIndexGetMetaData;
}

/** Backend request type: models::Create. */
export interface CityStorePostInput extends JsonObject {
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface CityStorePostResponseDataCity extends JsonObject {
  "id": string;
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface CityStorePostResponseData extends JsonObject {
  "city": CityStorePostResponseDataCity;
}
export interface CityStorePostResponse extends ApiEnvelope<CityStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CityDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface CityShowGetResponseDataCity extends JsonObject {
  "id": string;
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface CityShowGetResponseData extends JsonObject {
  "city": CityShowGetResponseDataCity;
}
export interface CityShowGetResponse extends ApiEnvelope<CityShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface CityUpdatePatchInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface CityUpdatePatchResponseDataCity extends JsonObject {
  "id": string;
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface CityUpdatePatchResponseData extends JsonObject {
  "city": CityUpdatePatchResponseDataCity;
}
export interface CityUpdatePatchResponse extends ApiEnvelope<CityUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface CityUpdatePutInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface CityUpdatePutResponseDataCity extends JsonObject {
  "id": string;
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface CityUpdatePutResponseData extends JsonObject {
  "city": CityUpdatePutResponseDataCity;
}
export interface CityUpdatePutResponse extends ApiEnvelope<CityUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CityForceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface CityRestoreGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface CountryIndexGetQuery extends QueryParams {
  "page"?: string | null;
  "per_page"?: string | null;
  "filter[search]"?: string | null;
  "filter[status]"?: string | null;
  "filter[active]"?: string | null;
  "filter[name]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface CountryIndexGetResponseDataCountries extends JsonObject {
  "id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface CountryIndexGetResponseData extends JsonObject {
  "countries": CountryIndexGetResponseDataCountries[];
}
export interface CountryIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface CountryIndexGetResponse extends ApiEnvelope<CountryIndexGetResponseData> {
  meta: CountryIndexGetMetaData;
}

/** Backend request type: models::Create. */
export interface CountryStorePostInput extends JsonObject {
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface CountryStorePostResponseDataCountry extends JsonObject {
  "id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface CountryStorePostResponseData extends JsonObject {
  "country": CountryStorePostResponseDataCountry;
}
export interface CountryStorePostResponse extends ApiEnvelope<CountryStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CountryDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface CountryShowGetResponseDataCountry extends JsonObject {
  "id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface CountryShowGetResponseData extends JsonObject {
  "country": CountryShowGetResponseDataCountry;
}
export interface CountryShowGetResponse extends ApiEnvelope<CountryShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface CountryUpdatePatchInput extends JsonObject {
  "name"?: string | null;
  "status"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface CountryUpdatePatchResponseDataCountry extends JsonObject {
  "id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface CountryUpdatePatchResponseData extends JsonObject {
  "country": CountryUpdatePatchResponseDataCountry;
}
export interface CountryUpdatePatchResponse extends ApiEnvelope<CountryUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface CountryUpdatePutInput extends JsonObject {
  "name"?: string | null;
  "status"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface CountryUpdatePutResponseDataCountry extends JsonObject {
  "id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface CountryUpdatePutResponseData extends JsonObject {
  "country": CountryUpdatePutResponseDataCountry;
}
export interface CountryUpdatePutResponse extends ApiEnvelope<CountryUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CountryForceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface CountryRestoreGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface CustomTypeIndexGetQuery extends QueryParams {
  "page"?: string | null;
  "per_page"?: string | null;
  "filter[search]"?: string | null;
  "filter[status]"?: string | null;
  "filter[active]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface CustomTypeIndexGetResponseDataCustomTypes extends JsonObject {
  "id": string;
  "name": string;
  "value_type": string;
  "options": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface CustomTypeIndexGetResponseData extends JsonObject {
  "custom_types": CustomTypeIndexGetResponseDataCustomTypes[];
}
export interface CustomTypeIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface CustomTypeIndexGetResponse extends ApiEnvelope<CustomTypeIndexGetResponseData> {
  meta: CustomTypeIndexGetMetaData;
}

/** Backend request type: models::Create. */
export interface CustomTypeStorePostInput extends JsonObject {
  "name": string;
  "value_type": string;
  "options": JsonValue[];
}
/** Backend response type: models::SingleData. */
export interface CustomTypeStorePostResponseDataCustomType extends JsonObject {
  "id": string;
  "name": string;
  "value_type": string;
  "options": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface CustomTypeStorePostResponseData extends JsonObject {
  "custom_type": CustomTypeStorePostResponseDataCustomType;
}
export interface CustomTypeStorePostResponse extends ApiEnvelope<CustomTypeStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CustomTypeDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface CustomTypeShowGetResponseDataCustomType extends JsonObject {
  "id": string;
  "name": string;
  "value_type": string;
  "options": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface CustomTypeShowGetResponseData extends JsonObject {
  "custom_type": CustomTypeShowGetResponseDataCustomType;
}
export interface CustomTypeShowGetResponse extends ApiEnvelope<CustomTypeShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface CustomTypeUpdatePatchInput extends JsonObject {
  "name"?: string | null;
  "value_type"?: string | null;
  "options"?: JsonValue[] | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface CustomTypeUpdatePatchResponseDataCustomType extends JsonObject {
  "id": string;
  "name": string;
  "value_type": string;
  "options": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface CustomTypeUpdatePatchResponseData extends JsonObject {
  "custom_type": CustomTypeUpdatePatchResponseDataCustomType;
}
export interface CustomTypeUpdatePatchResponse extends ApiEnvelope<CustomTypeUpdatePatchResponseData> {
}

/** Backend response type: Value. */
export interface OptionDependencyGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<EducationOption>. */
export interface EducationIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
}
export interface EducationIndexGetResponse extends ApiEnvelope<EducationIndexGetResponseItem[]> {
}

/** Backend request type: CreateEducation. */
export interface EducationStorePostInput extends JsonObject {
  "name": string;
}
/** Backend response type: EducationOption. */
export interface EducationStorePostResponseData extends JsonObject {
  "id": string;
  "name": string;
}
export interface EducationStorePostResponse extends ApiEnvelope<EducationStorePostResponseData> {
}

/** Backend response type: EducationDependencies. */
export interface EducationDependenciesGetResponseDataAttendanceMode extends JsonObject {
  "id": string;
  "name": string;
}
export interface EducationDependenciesGetResponseDataReferralSource extends JsonObject {
  "id": string;
  "name": string;
}
export interface EducationDependenciesGetResponseData extends JsonObject {
  "attendance_mode": EducationDependenciesGetResponseDataAttendanceMode[];
  "referral_source": EducationDependenciesGetResponseDataReferralSource[];
  "level_max_length": number;
}
export interface EducationDependenciesGetResponse extends ApiEnvelope<EducationDependenciesGetResponseData> {
}

/** Backend request type: CatalogImport. */
export interface FitnessImportCatalogPostInput extends JsonObject {
  "release_id": string;
}
/** Backend response type: Value. */
export type FitnessImportCatalogPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessImportReceipt>;

/** Backend request type: Provision. */
export type FitnessProvisionPostInput = import("./contracts.types.js").FitnessProvisionInput;
/** Backend response type: Value. */
export type FitnessProvisionPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessGym>;

/** Backend query type: CatalogQuery. */
export type FitnessListCatalogGetQuery = import("./contracts.types.js").FitnessCatalogQuery;
/** Backend response type: Value. */
export type FitnessListCatalogGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessCatalogItem[]>;

/** Backend response type: Value. */
export type FitnessCoachesGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessTariff[]>;

/** Backend response type: Value. */
export type FitnessContextGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessContext>;

/** Backend response type: Value. */
export type FitnessIntakeGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessIntakeDraft | null>;

/** Backend request type: Draft. */
export type FitnessSaveIntakePutInput = import("./contracts.types.js").FitnessSaveDraftInput;
/** Backend response type: Value. */
export type FitnessSaveIntakePutResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessIntakeDraft>;

/** Backend response type: Value. */
export type FitnessNotificationsGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessEvent[]>;

/** Backend response type: Value. */
export type FitnessReadNotificationPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessReadReceipt>;

/** Backend response type: Value. */
export type FitnessOrdersGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessOrder[]>;

/** Backend request type: Purchase. */
export interface FitnessPurchasePostInput extends JsonObject {
  "product": string;
  "intake_version": number;
  "idempotency_key": string;
  "tariff_id"?: string | null;
  "parent_order_id"?: string | null;
}
/** Backend response type: Value. */
export type FitnessPurchasePostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessOrder>;

/** Backend response type: Value. */
export type FitnessShowGetApiV1FitnessOrdersIdResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessOrder>;

/** Backend request type: Action. */
export interface FitnessActionPostInput extends JsonObject {
  "action": string;
  "expected_version": number;
}
/** Backend response type: Value. */
export type FitnessActionPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessOrder>;

/** Backend request type: Plan. */
export type FitnessAssignPostInput = import("./contracts.types.js").FitnessPlanInput;
/** Backend response type: Value. */
export type FitnessAssignPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessRevisionReceipt>;

/** Backend response type: Value. */
export type FitnessProductsGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessProductOffer[]>;

/** Backend request type: Proposal. */
export type FitnessProposePostInput = import("./contracts.types.js").FitnessProposalInput;
/** Backend response type: Value. */
export type FitnessProposePostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessRevisionReceipt>;

/** Backend response type: Value. */
export type FitnessRevisionGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessRevision>;

/** Backend request type: Review. */
export interface FitnessReviewPostInput extends JsonObject {
  "accept": boolean;
}
/** Backend response type: Value. */
export type FitnessReviewPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessRevisionReceipt | {status:"rejected"}>;

/** Backend response type: Value. */
export type FitnessMeGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessSelf>;

/** Backend response type: Value. */
export type FitnessSettingsGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessGym>;

/** Backend request type: Settings. */
export type FitnessSaveSettingsPutInput = import("./contracts.types.js").FitnessSettingsInput;
/** Backend response type: Value. */
export type FitnessSaveSettingsPutResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessGym>;

/** Backend request type: TariffInput. */
export type FitnessSaveTariffPostInput = import("./contracts.types.js").FitnessTariffInput;
/** Backend response type: Value. */
export type FitnessSaveTariffPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessTariff>;

/** Backend response type: Value. */
export type FitnessTeamGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessCoach[]>;

/** Backend request type: CoachInput. */
export interface FitnessSaveCoachPutInput extends JsonObject {
  "user_id": string;
  "enabled": boolean;
}
/** Backend response type: Value. */
export type FitnessSaveCoachPutResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessCoach>;

/** Backend request type: Redeem. */
export interface FitnessRedeemPostInput extends JsonObject {
  "token": string;
}
/** Backend response type: Value. */
export type FitnessRedeemPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessTrial>;

/** Backend response type: Value. */
export type FitnessVoiceSettingsGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessVoiceSettings>;

/** Backend response type: Value. */
export interface OptionIdentityGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: crate::integration::models::IntegrationDocsResponse. */
export interface IntegrationIntegrationDocsShowGetResponseDataDirectEventsPayloadFields extends JsonObject {
  "name": string;
  "field_type": string;
  "required": boolean;
  "description": string;
}
export interface IntegrationIntegrationDocsShowGetResponseDataDirectEvents extends JsonObject {
  "event_name": string;
  "payload_fields": IntegrationIntegrationDocsShowGetResponseDataDirectEventsPayloadFields[];
}
export interface IntegrationIntegrationDocsShowGetResponseDataDirect extends JsonObject {
  "transport": string;
  "queue"?: string | null;
  "base_url"?: string | null;
  "broker_url_hint"?: string | null;
  "sample_profile_id"?: string | null;
  "events": IntegrationIntegrationDocsShowGetResponseDataDirectEvents[];
}
export interface IntegrationIntegrationDocsShowGetResponseDataSdk extends JsonObject {
  "event_name": string;
  "method": string;
  "language": string;
  "cargo_dep": string;
  "code": string;
}
export interface IntegrationIntegrationDocsShowGetResponseData extends JsonObject {
  "direct": IntegrationIntegrationDocsShowGetResponseDataDirect;
  "sdk": IntegrationIntegrationDocsShowGetResponseDataSdk[];
}
export interface IntegrationIntegrationDocsShowGetResponse extends ApiEnvelope<IntegrationIntegrationDocsShowGetResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<BackendJson<"infera_flow_sdk::FlowIntegrationResponse">> {
}

/** Backend request type: CreditTurn. */
export interface FitnessReservePostInput extends JsonObject {
  "user_id": string;
  "turn_id": string;
  "success"?: boolean | null;
}
/** Backend response type: Value. */
export type FitnessReservePostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessReserveReceipt>;

/** Backend request type: CreditTurn. */
export interface FitnessSettlePostInput extends JsonObject {
  "user_id": string;
  "turn_id": string;
  "success"?: boolean | null;
}
/** Backend response type: Value. */
export type FitnessSettlePostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessSettleReceipt>;

/** Backend query type: List. */
export interface FitnessListGetQuery extends QueryParams {
  "page"?: number | null;
  "per_page"?: number | null;
  "search"?: string | null;
}
/** Backend response type: Value. */
export type FitnessListGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessTrialGiftPage>;

/** Backend request type: Create. */
export type FitnessCreatePostInput = import("./contracts.types.js").FitnessGiftCreateInput;
/** Backend response type: Value. */
export type FitnessCreatePostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessTrialGift>;

/** Backend response type: Value. */
export type FitnessShowGetApiV1InternalPlansGiftsIdResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessTrialGift>;

/** Backend request type: Settings. */
export type FitnessUpdatePutInput = import("./contracts.types.js").FitnessGiftUpdateInput;
/** Backend response type: Value. */
export type FitnessUpdatePutResponse = import("@faiber/sdk-core").ApiEnvelope<import("./contracts.types.js").FitnessTrialGift>;

/** Backend request type: LogActionCreate. */
export interface LogActionStorePostInput extends JsonObject {
  "action": string;
  "meta"?: JsonValue | null;
}
/** Backend response type: Value. */
export interface LogActionStorePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: LogActionCreate. */
export interface LogActionStoreSlugPostInput extends JsonObject {
  "action": string;
  "meta"?: JsonValue | null;
}
/** Backend response type: Value. */
export interface LogActionStoreSlugPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: LogActionCreate. */
export interface LogActionStoreDirectPostInput extends JsonObject {
  "action": string;
  "meta"?: JsonValue | null;
}
/** Backend response type: Value. */
export interface LogActionStoreDirectPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface LoggerIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface LoggerShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: BulkParentGet. */
export interface OptionParentChildrenGetPostInput extends JsonObject {
  "user_ids": string[];
}
/** Backend response type: Value. */
export interface OptionParentChildrenGetPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: BulkParentGet. */
export interface OptionParentGetPostInput extends JsonObject {
  "user_ids": string[];
}
/** Backend response type: Value. */
export interface OptionParentGetPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface ProfileIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export interface ProfileIndexGetResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileIndexGetResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileIndexGetResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileIndexGetResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileIndexGetResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileIndexGetResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileIndexGetResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileIndexGetResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileIndexGetResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileIndexGetResponseDataProfilesOfficeTransactions[];
  "installments": ProfileIndexGetResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileIndexGetResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileIndexGetResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileIndexGetResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileIndexGetResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileIndexGetResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileIndexGetResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileIndexGetResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileIndexGetResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileIndexGetResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileIndexGetResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileIndexGetResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileIndexGetResponseDataProfilesRoles[];
  "credential"?: ProfileIndexGetResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileIndexGetResponseDataProfilesOffice | null;
  "lms"?: ProfileIndexGetResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileIndexGetResponseDataProfilesParent[] | null;
}
export interface ProfileIndexGetResponseData extends JsonObject {
  "profiles": ProfileIndexGetResponseDataProfiles[];
}
export interface ProfileIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfileIndexGetResponse extends ApiEnvelope<ProfileIndexGetResponseData> {
  meta: ProfileIndexGetMetaData;
}

/** Backend query type: MediaQuery. */
export interface ProfileAvatarShowGetApiV1ProfileMediaUuidAvatarQuery extends QueryParams {
  "key": string;
}
/** Backend response type: raw-response. */
export interface ProfileAvatarShowGetApiV1ProfileMediaUuidAvatarResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface ProfilePropertyIndexGetQuery extends QueryParams {
  "page"?: string | null;
  "per_page"?: string | null;
  "filter[search]"?: string | null;
  "filter[status]"?: string | null;
  "filter[active]"?: string | null;
  "filter[key]"?: string | null;
  "filter[title]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface ProfilePropertyIndexGetResponseDataProfilePropertyDefinitions extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "validator_type": string;
  "validator_config"?: JsonValue | null;
  "custom_type_id"?: string | null;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "visible_in_chat": boolean;
  "filterable": boolean;
  "index_value_kind"?: string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ProfilePropertyIndexGetResponseData extends JsonObject {
  "profile_property_definitions": ProfilePropertyIndexGetResponseDataProfilePropertyDefinitions[];
}
export interface ProfilePropertyIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfilePropertyIndexGetResponse extends ApiEnvelope<ProfilePropertyIndexGetResponseData> {
  meta: ProfilePropertyIndexGetMetaData;
}

/** Backend request type: models::Create. */
export interface ProfilePropertyStorePostInput extends JsonObject {
  "key": string;
  "title": string;
  "validator_type": string;
  "validator_config"?: JsonValue | null;
  "custom_type_id"?: string | null;
  "visible_in_list"?: boolean | null;
  "visible_in_get"?: boolean | null;
  "visible_in_full"?: boolean | null;
  "visible_in_chat"?: boolean | null;
  "filterable"?: boolean | null;
  "index_value_kind"?: string | null;
  "sort_order"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface ProfilePropertyStorePostResponseDataProfilePropertyDefinition extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "validator_type": string;
  "validator_config"?: JsonValue | null;
  "custom_type_id"?: string | null;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "visible_in_chat": boolean;
  "filterable": boolean;
  "index_value_kind"?: string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ProfilePropertyStorePostResponseData extends JsonObject {
  "profile_property_definition": ProfilePropertyStorePostResponseDataProfilePropertyDefinition;
}
export interface ProfilePropertyStorePostResponse extends ApiEnvelope<ProfilePropertyStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfilePropertyDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface ProfilePropertyShowGetResponseDataProfilePropertyDefinition extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "validator_type": string;
  "validator_config"?: JsonValue | null;
  "custom_type_id"?: string | null;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "visible_in_chat": boolean;
  "filterable": boolean;
  "index_value_kind"?: string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ProfilePropertyShowGetResponseData extends JsonObject {
  "profile_property_definition": ProfilePropertyShowGetResponseDataProfilePropertyDefinition;
}
export interface ProfilePropertyShowGetResponse extends ApiEnvelope<ProfilePropertyShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface ProfilePropertyUpdatePatchInput extends JsonObject {
  "key"?: string | null;
  "title"?: string | null;
  "validator_type"?: string | null;
  "validator_config"?: JsonValue | null;
  "custom_type_id"?: string | null;
  "visible_in_list"?: boolean | null;
  "visible_in_get"?: boolean | null;
  "visible_in_full"?: boolean | null;
  "visible_in_chat"?: boolean | null;
  "filterable"?: boolean | null;
  "index_value_kind"?: string | null;
  "sort_order"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface ProfilePropertyUpdatePatchResponseDataProfilePropertyDefinition extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "validator_type": string;
  "validator_config"?: JsonValue | null;
  "custom_type_id"?: string | null;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "visible_in_chat": boolean;
  "filterable": boolean;
  "index_value_kind"?: string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ProfilePropertyUpdatePatchResponseData extends JsonObject {
  "profile_property_definition": ProfilePropertyUpdatePatchResponseDataProfilePropertyDefinition;
}
export interface ProfilePropertyUpdatePatchResponse extends ApiEnvelope<ProfilePropertyUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface ProfilePropertyUpdatePutInput extends JsonObject {
  "key"?: string | null;
  "title"?: string | null;
  "validator_type"?: string | null;
  "validator_config"?: JsonValue | null;
  "custom_type_id"?: string | null;
  "visible_in_list"?: boolean | null;
  "visible_in_get"?: boolean | null;
  "visible_in_full"?: boolean | null;
  "visible_in_chat"?: boolean | null;
  "filterable"?: boolean | null;
  "index_value_kind"?: string | null;
  "sort_order"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface ProfilePropertyUpdatePutResponseDataProfilePropertyDefinition extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "validator_type": string;
  "validator_config"?: JsonValue | null;
  "custom_type_id"?: string | null;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "visible_in_chat": boolean;
  "filterable": boolean;
  "index_value_kind"?: string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ProfilePropertyUpdatePutResponseData extends JsonObject {
  "profile_property_definition": ProfilePropertyUpdatePutResponseDataProfilePropertyDefinition;
}
export interface ProfilePropertyUpdatePutResponse extends ApiEnvelope<ProfilePropertyUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfilePropertyForceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface ProfilePropertyRestoreGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: entity::profile::Model. */
export interface ReferralShowProfileReferralGetResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "national_number"?: string | null;
  "first_name_fa"?: string | null;
  "first_name_en"?: string | null;
  "last_name_fa"?: string | null;
  "last_name_en"?: string | null;
  "birthday"?: string | null;
  "nationality"?: string | null;
  "religion"?: string | null;
  "gender"?: string | null;
  "job"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "education_id"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "referral_source_id"?: string | null;
  "referrer_profile_id"?: string | null;
  "description"?: string | null;
  "marital"?: string | null;
  "nickname"?: string | null;
  "country_id"?: string | null;
  "province_id"?: string | null;
  "city_id"?: string | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "red_gem"?: number | null;
  "blue_gem"?: number | null;
  "green_gem"?: number | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ReferralShowProfileReferralGetResponse extends ApiEnvelope<ReferralShowProfileReferralGetResponseData> {
}

/** Backend request type: ProfileReferralWrite. */
export interface ReferralAssignPutInput extends JsonObject {
  "referral_source_id"?: string | null;
  "referrer_profile_id"?: string | null;
}
/** Backend response type: entity::profile::Model. */
export interface ReferralAssignPutResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "national_number"?: string | null;
  "first_name_fa"?: string | null;
  "first_name_en"?: string | null;
  "last_name_fa"?: string | null;
  "last_name_en"?: string | null;
  "birthday"?: string | null;
  "nationality"?: string | null;
  "religion"?: string | null;
  "gender"?: string | null;
  "job"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "education_id"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "referral_source_id"?: string | null;
  "referrer_profile_id"?: string | null;
  "description"?: string | null;
  "marital"?: string | null;
  "nickname"?: string | null;
  "country_id"?: string | null;
  "province_id"?: string | null;
  "city_id"?: string | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "red_gem"?: number | null;
  "blue_gem"?: number | null;
  "green_gem"?: number | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ReferralAssignPutResponse extends ApiEnvelope<ReferralAssignPutResponseData> {
}

/** Backend query type: RelationQuery. */
export interface RelationListRelationsGetQuery extends QueryParams {
  "profile_id"?: string | null;
  "active"?: boolean | null;
}
/** Backend response type: Vec<entity::profile_relation::Model>. */
export interface RelationListRelationsGetResponseItem extends JsonObject {
  "id": string;
  "source_profile_id": string;
  "target_profile_id": string;
  "relation_type_id": string;
  "inverse_relation_id"?: string | null;
  "metadata": BackendJson<"Json">;
  "active": boolean;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface RelationListRelationsGetResponse extends ApiEnvelope<RelationListRelationsGetResponseItem[]> {
}

/** Backend request type: RelationWrite. */
export interface RelationCreateRelationPostInput extends JsonObject {
  "source_profile_id": string;
  "target_profile_id": string;
  "relation_type_id": string;
  "metadata"?: JsonValue;
}
/** Backend response type: Vec<entity::profile_relation::Model>. */
export interface RelationCreateRelationPostResponseItem extends JsonObject {
  "id": string;
  "source_profile_id": string;
  "target_profile_id": string;
  "relation_type_id": string;
  "inverse_relation_id"?: string | null;
  "metadata": BackendJson<"Json">;
  "active": boolean;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface RelationCreateRelationPostResponse extends ApiEnvelope<RelationCreateRelationPostResponseItem[]> {
}

/** Backend response type: serde_json::Value. */
export interface RelationDeleteRelationDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: entity::profile_relation::Model. */
export interface RelationShowRelationGetResponseData extends JsonObject {
  "id": string;
  "source_profile_id": string;
  "target_profile_id": string;
  "relation_type_id": string;
  "inverse_relation_id"?: string | null;
  "metadata": BackendJson<"Json">;
  "active": boolean;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface RelationShowRelationGetResponse extends ApiEnvelope<RelationShowRelationGetResponseData> {
}

/** Backend request type: RelationUpdate. */
export interface RelationUpdateRelationPutInput extends JsonObject {
  "metadata"?: JsonValue;
  "active"?: boolean;
}
/** Backend response type: Vec<entity::profile_relation::Model>. */
export interface RelationUpdateRelationPutResponseItem extends JsonObject {
  "id": string;
  "source_profile_id": string;
  "target_profile_id": string;
  "relation_type_id": string;
  "inverse_relation_id"?: string | null;
  "metadata": BackendJson<"Json">;
  "active": boolean;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface RelationUpdateRelationPutResponse extends ApiEnvelope<RelationUpdateRelationPutResponseItem[]> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileDeleteParentDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface ProfileShowGetResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileShowGetResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileShowGetResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileShowGetResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileShowGetResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileShowGetResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileShowGetResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileShowGetResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileShowGetResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileShowGetResponseDataProfileOfficeTransactions[];
  "installments": ProfileShowGetResponseDataProfileOfficeInstallments[];
  "wallets": ProfileShowGetResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileShowGetResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileShowGetResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileShowGetResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileShowGetResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileShowGetResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileShowGetResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileShowGetResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileShowGetResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileShowGetResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileShowGetResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileShowGetResponseDataProfileRoles[];
  "credential"?: ProfileShowGetResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileShowGetResponseDataProfileOffice | null;
  "lms"?: ProfileShowGetResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileShowGetResponseDataProfileParent[] | null;
}
export interface ProfileShowGetResponseData extends JsonObject {
  "profile": ProfileShowGetResponseDataProfile;
}
export interface ProfileShowGetResponse extends ApiEnvelope<ProfileShowGetResponseData> {
}

/** Backend request type: models::ProfilePatch. */
export interface ProfileUpdatePatchInput extends JsonObject {
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "national_number"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "birthday"?: string | null;
  "nationality"?: string | null;
  "religion"?: string | null;
  "gender"?: string | null;
  "job"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "marital"?: string | null;
  "nickname"?: string | null;
  "country_id"?: string | null;
  "province_id"?: string | null;
  "city_id"?: string | null;
  "status"?: string | null;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "properties"?: Record<string, JsonValue> | null;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdatePatchResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileUpdatePatchResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileUpdatePatchResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileUpdatePatchResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdatePatchResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdatePatchResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileUpdatePatchResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileUpdatePatchResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileUpdatePatchResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileUpdatePatchResponseDataProfileOfficeTransactions[];
  "installments": ProfileUpdatePatchResponseDataProfileOfficeInstallments[];
  "wallets": ProfileUpdatePatchResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileUpdatePatchResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileUpdatePatchResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileUpdatePatchResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileUpdatePatchResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileUpdatePatchResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileUpdatePatchResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileUpdatePatchResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileUpdatePatchResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileUpdatePatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdatePatchResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileUpdatePatchResponseDataProfileRoles[];
  "credential"?: ProfileUpdatePatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileUpdatePatchResponseDataProfileOffice | null;
  "lms"?: ProfileUpdatePatchResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileUpdatePatchResponseDataProfileParent[] | null;
}
export interface ProfileUpdatePatchResponseData extends JsonObject {
  "profile": ProfileUpdatePatchResponseDataProfile;
}
export interface ProfileUpdatePatchResponse extends ApiEnvelope<ProfileUpdatePatchResponseData> {
}

/** Backend response type: models::SingleData. */
export interface ProfileShowAdminGetResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileShowAdminGetResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileShowAdminGetResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileShowAdminGetResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileShowAdminGetResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileShowAdminGetResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileShowAdminGetResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileShowAdminGetResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileShowAdminGetResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileShowAdminGetResponseDataProfileOfficeTransactions[];
  "installments": ProfileShowAdminGetResponseDataProfileOfficeInstallments[];
  "wallets": ProfileShowAdminGetResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileShowAdminGetResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileShowAdminGetResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileShowAdminGetResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileShowAdminGetResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileShowAdminGetResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileShowAdminGetResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileShowAdminGetResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileShowAdminGetResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileShowAdminGetResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileShowAdminGetResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileShowAdminGetResponseDataProfileRoles[];
  "credential"?: ProfileShowAdminGetResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileShowAdminGetResponseDataProfileOffice | null;
  "lms"?: ProfileShowAdminGetResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileShowAdminGetResponseDataProfileParent[] | null;
}
export interface ProfileShowAdminGetResponseData extends JsonObject {
  "profile": ProfileShowAdminGetResponseDataProfile;
}
export interface ProfileShowAdminGetResponse extends ApiEnvelope<ProfileShowAdminGetResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileAvatarDeleteDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: MediaQuery. */
export interface ProfileAvatarShowGetApiV1ProfileUuidAvatarQuery extends QueryParams {
  "key": string;
}
/** Backend response type: raw-response. */
export interface ProfileAvatarShowGetApiV1ProfileUuidAvatarResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: multipart/form-data. */
export type ProfileAvatarStorePostInput = FormData;
/** Backend response type: serde_json::Value. */
export interface ProfileAvatarStorePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileDeleteAddressDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::UpdateEmployeeType. */
export interface ProfileUpdateEmployeeTypePatchInput extends JsonObject {
  "employee_type": string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileUpdateEmployeeTypePatchResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileUpdateEmployeeTypePatchResponseDataProfileOfficeTransactions[];
  "installments": ProfileUpdateEmployeeTypePatchResponseDataProfileOfficeInstallments[];
  "wallets": ProfileUpdateEmployeeTypePatchResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileUpdateEmployeeTypePatchResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileUpdateEmployeeTypePatchResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileUpdateEmployeeTypePatchResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileUpdateEmployeeTypePatchResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileUpdateEmployeeTypePatchResponseDataProfileRoles[];
  "credential"?: ProfileUpdateEmployeeTypePatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileUpdateEmployeeTypePatchResponseDataProfileOffice | null;
  "lms"?: ProfileUpdateEmployeeTypePatchResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileUpdateEmployeeTypePatchResponseDataProfileParent[] | null;
}
export interface ProfileUpdateEmployeeTypePatchResponseData extends JsonObject {
  "profile": ProfileUpdateEmployeeTypePatchResponseDataProfile;
}
export interface ProfileUpdateEmployeeTypePatchResponse extends ApiEnvelope<ProfileUpdateEmployeeTypePatchResponseData> {
}

/** Backend request type: models::UpdateEmployeeType. */
export interface ProfileUpdateEmployeeTypePutInput extends JsonObject {
  "employee_type": string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateEmployeeTypePutResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileUpdateEmployeeTypePutResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileUpdateEmployeeTypePutResponseDataProfileOfficeTransactions[];
  "installments": ProfileUpdateEmployeeTypePutResponseDataProfileOfficeInstallments[];
  "wallets": ProfileUpdateEmployeeTypePutResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileUpdateEmployeeTypePutResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileUpdateEmployeeTypePutResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileUpdateEmployeeTypePutResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileUpdateEmployeeTypePutResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileUpdateEmployeeTypePutResponseDataProfileRoles[];
  "credential"?: ProfileUpdateEmployeeTypePutResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileUpdateEmployeeTypePutResponseDataProfileOffice | null;
  "lms"?: ProfileUpdateEmployeeTypePutResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileUpdateEmployeeTypePutResponseDataProfileParent[] | null;
}
export interface ProfileUpdateEmployeeTypePutResponseData extends JsonObject {
  "profile": ProfileUpdateEmployeeTypePutResponseDataProfile;
}
export interface ProfileUpdateEmployeeTypePutResponse extends ApiEnvelope<ProfileUpdateEmployeeTypePutResponseData> {
}

/** Backend request type: models::UpdateFreemiumLimit. */
export interface ProfileUpdateFreemiumPatchInput extends JsonObject {
  "freemium_session_limit": number;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateFreemiumPatchResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileUpdateFreemiumPatchResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileUpdateFreemiumPatchResponseDataProfileOfficeTransactions[];
  "installments": ProfileUpdateFreemiumPatchResponseDataProfileOfficeInstallments[];
  "wallets": ProfileUpdateFreemiumPatchResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileUpdateFreemiumPatchResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileUpdateFreemiumPatchResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileUpdateFreemiumPatchResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileUpdateFreemiumPatchResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileUpdateFreemiumPatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileUpdateFreemiumPatchResponseDataProfileRoles[];
  "credential"?: ProfileUpdateFreemiumPatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileUpdateFreemiumPatchResponseDataProfileOffice | null;
  "lms"?: ProfileUpdateFreemiumPatchResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileUpdateFreemiumPatchResponseDataProfileParent[] | null;
}
export interface ProfileUpdateFreemiumPatchResponseData extends JsonObject {
  "profile": ProfileUpdateFreemiumPatchResponseDataProfile;
}
export interface ProfileUpdateFreemiumPatchResponse extends ApiEnvelope<ProfileUpdateFreemiumPatchResponseData> {
}

/** Backend request type: models::UpdateFreemiumLimit. */
export interface ProfileUpdateFreemiumPutInput extends JsonObject {
  "freemium_session_limit": number;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateFreemiumPutResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileUpdateFreemiumPutResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileUpdateFreemiumPutResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileUpdateFreemiumPutResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateFreemiumPutResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateFreemiumPutResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileUpdateFreemiumPutResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileUpdateFreemiumPutResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileUpdateFreemiumPutResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileUpdateFreemiumPutResponseDataProfileOfficeTransactions[];
  "installments": ProfileUpdateFreemiumPutResponseDataProfileOfficeInstallments[];
  "wallets": ProfileUpdateFreemiumPutResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileUpdateFreemiumPutResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileUpdateFreemiumPutResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileUpdateFreemiumPutResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileUpdateFreemiumPutResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileUpdateFreemiumPutResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileUpdateFreemiumPutResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileUpdateFreemiumPutResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileUpdateFreemiumPutResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileUpdateFreemiumPutResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateFreemiumPutResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileUpdateFreemiumPutResponseDataProfileRoles[];
  "credential"?: ProfileUpdateFreemiumPutResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileUpdateFreemiumPutResponseDataProfileOffice | null;
  "lms"?: ProfileUpdateFreemiumPutResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileUpdateFreemiumPutResponseDataProfileParent[] | null;
}
export interface ProfileUpdateFreemiumPutResponseData extends JsonObject {
  "profile": ProfileUpdateFreemiumPutResponseDataProfile;
}
export interface ProfileUpdateFreemiumPutResponse extends ApiEnvelope<ProfileUpdateFreemiumPutResponseData> {
}

/** Backend response type: models::SingleData. */
export interface ProfileShowFullGetResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileShowFullGetResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileShowFullGetResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileShowFullGetResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileShowFullGetResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileShowFullGetResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileShowFullGetResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileShowFullGetResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileShowFullGetResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileShowFullGetResponseDataProfileOfficeTransactions[];
  "installments": ProfileShowFullGetResponseDataProfileOfficeInstallments[];
  "wallets": ProfileShowFullGetResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileShowFullGetResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileShowFullGetResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileShowFullGetResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileShowFullGetResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileShowFullGetResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileShowFullGetResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileShowFullGetResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileShowFullGetResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileShowFullGetResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileShowFullGetResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileShowFullGetResponseDataProfileRoles[];
  "credential"?: ProfileShowFullGetResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileShowFullGetResponseDataProfileOffice | null;
  "lms"?: ProfileShowFullGetResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileShowFullGetResponseDataProfileParent[] | null;
}
export interface ProfileShowFullGetResponseData extends JsonObject {
  "profile": ProfileShowFullGetResponseDataProfile;
}
export interface ProfileShowFullGetResponse extends ApiEnvelope<ProfileShowFullGetResponseData> {
}

/** Backend query type: MediaQuery. */
export interface ProfileMediaShowGetQuery extends QueryParams {
  "key": string;
}
/** Backend response type: raw-response. */
export interface ProfileMediaShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: property_models::PropertiesUpdate. */
export interface ProfileUpdatePropertiesPatchInput extends JsonObject {
  "properties": Record<string, JsonValue>;
}
/** Backend response type: serde_json::Value. */
export interface ProfileUpdatePropertiesPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: property_models::PropertiesUpdate. */
export interface ProfileUpdatePropertiesPutInput extends JsonObject {
  "properties": Record<string, JsonValue>;
}
/** Backend response type: serde_json::Value. */
export interface ProfileUpdatePropertiesPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::UpdateStatus. */
export interface ProfileUpdateStatusPatchInput extends JsonObject {
  "status": string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateStatusPatchResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileUpdateStatusPatchResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileUpdateStatusPatchResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileUpdateStatusPatchResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateStatusPatchResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateStatusPatchResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileUpdateStatusPatchResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileUpdateStatusPatchResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileUpdateStatusPatchResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileUpdateStatusPatchResponseDataProfileOfficeTransactions[];
  "installments": ProfileUpdateStatusPatchResponseDataProfileOfficeInstallments[];
  "wallets": ProfileUpdateStatusPatchResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileUpdateStatusPatchResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileUpdateStatusPatchResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileUpdateStatusPatchResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileUpdateStatusPatchResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileUpdateStatusPatchResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileUpdateStatusPatchResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileUpdateStatusPatchResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileUpdateStatusPatchResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileUpdateStatusPatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateStatusPatchResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileUpdateStatusPatchResponseDataProfileRoles[];
  "credential"?: ProfileUpdateStatusPatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileUpdateStatusPatchResponseDataProfileOffice | null;
  "lms"?: ProfileUpdateStatusPatchResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileUpdateStatusPatchResponseDataProfileParent[] | null;
}
export interface ProfileUpdateStatusPatchResponseData extends JsonObject {
  "profile": ProfileUpdateStatusPatchResponseDataProfile;
}
export interface ProfileUpdateStatusPatchResponse extends ApiEnvelope<ProfileUpdateStatusPatchResponseData> {
}

/** Backend request type: models::UpdateStatus. */
export interface ProfileUpdateStatusPutInput extends JsonObject {
  "status": string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateStatusPutResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileUpdateStatusPutResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileUpdateStatusPutResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileUpdateStatusPutResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateStatusPutResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdateStatusPutResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileUpdateStatusPutResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileUpdateStatusPutResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileUpdateStatusPutResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileUpdateStatusPutResponseDataProfileOfficeTransactions[];
  "installments": ProfileUpdateStatusPutResponseDataProfileOfficeInstallments[];
  "wallets": ProfileUpdateStatusPutResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileUpdateStatusPutResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileUpdateStatusPutResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileUpdateStatusPutResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileUpdateStatusPutResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileUpdateStatusPutResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileUpdateStatusPutResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileUpdateStatusPutResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileUpdateStatusPutResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileUpdateStatusPutResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateStatusPutResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileUpdateStatusPutResponseDataProfileRoles[];
  "credential"?: ProfileUpdateStatusPutResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileUpdateStatusPutResponseDataProfileOffice | null;
  "lms"?: ProfileUpdateStatusPutResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileUpdateStatusPutResponseDataProfileParent[] | null;
}
export interface ProfileUpdateStatusPutResponseData extends JsonObject {
  "profile": ProfileUpdateStatusPutResponseDataProfile;
}
export interface ProfileUpdateStatusPutResponse extends ApiEnvelope<ProfileUpdateStatusPutResponseData> {
}

/** Backend query type: models::ListQuery. */
export interface ProfileAccountantIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export interface ProfileAccountantIndexGetResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileAccountantIndexGetResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileAccountantIndexGetResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileAccountantIndexGetResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileAccountantIndexGetResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileAccountantIndexGetResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileAccountantIndexGetResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileAccountantIndexGetResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileAccountantIndexGetResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileAccountantIndexGetResponseDataProfilesOfficeTransactions[];
  "installments": ProfileAccountantIndexGetResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileAccountantIndexGetResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileAccountantIndexGetResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileAccountantIndexGetResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileAccountantIndexGetResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileAccountantIndexGetResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileAccountantIndexGetResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileAccountantIndexGetResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileAccountantIndexGetResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileAccountantIndexGetResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileAccountantIndexGetResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileAccountantIndexGetResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileAccountantIndexGetResponseDataProfilesRoles[];
  "credential"?: ProfileAccountantIndexGetResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileAccountantIndexGetResponseDataProfilesOffice | null;
  "lms"?: ProfileAccountantIndexGetResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileAccountantIndexGetResponseDataProfilesParent[] | null;
}
export interface ProfileAccountantIndexGetResponseData extends JsonObject {
  "profiles": ProfileAccountantIndexGetResponseDataProfiles[];
}
export interface ProfileAccountantIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfileAccountantIndexGetResponse extends ApiEnvelope<ProfileAccountantIndexGetResponseData> {
  meta: ProfileAccountantIndexGetMetaData;
}

/** Backend request type: models::AddressRequest. */
export interface ProfileAddAddressPatchInput extends JsonObject {
  "title": string;
  "country"?: string | null;
  "province"?: string | null;
  "city"?: string | null;
  "postal_code"?: string | null;
  "plate"?: string | null;
  "detail"?: string | null;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddAddressPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::AddressRequest. */
export interface ProfileAddAddressPutInput extends JsonObject {
  "title": string;
  "country"?: string | null;
  "province"?: string | null;
  "city"?: string | null;
  "postal_code"?: string | null;
  "plate"?: string | null;
  "detail"?: string | null;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddAddressPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::AppUpdate. */
export interface ProfileAddAppPatchInput extends JsonObject {
  "app": JsonValue;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddAppPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::AppUpdate. */
export interface ProfileAddAppPutInput extends JsonObject {
  "app": JsonValue;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddAppPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::ParentLinkRequest. */
export interface ProfileAddParentPatchInput extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddParentPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::ParentLinkRequest. */
export interface ProfileAddParentPutInput extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddParentPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::GeoBulkGetRequest. */
export interface ProfileCityGetPostInput extends JsonObject {
  "ids": string[];
  "user_ids"?: string[] | null;
}
/** Backend response type: models::ListData. */
export interface ProfileCityGetPostResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileCityGetPostResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileCityGetPostResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileCityGetPostResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileCityGetPostResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileCityGetPostResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileCityGetPostResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileCityGetPostResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileCityGetPostResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileCityGetPostResponseDataProfilesOfficeTransactions[];
  "installments": ProfileCityGetPostResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileCityGetPostResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileCityGetPostResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileCityGetPostResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileCityGetPostResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileCityGetPostResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileCityGetPostResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileCityGetPostResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileCityGetPostResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileCityGetPostResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileCityGetPostResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileCityGetPostResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileCityGetPostResponseDataProfilesRoles[];
  "credential"?: ProfileCityGetPostResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileCityGetPostResponseDataProfilesOffice | null;
  "lms"?: ProfileCityGetPostResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileCityGetPostResponseDataProfilesParent[] | null;
}
export interface ProfileCityGetPostResponseData extends JsonObject {
  "profiles": ProfileCityGetPostResponseDataProfiles[];
}
export interface ProfileCityGetPostResponse extends ApiEnvelope<ProfileCityGetPostResponseData> {
}

/** Backend query type: models::ListQuery. */
export interface ProfileConsultantIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export interface ProfileConsultantIndexGetResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileConsultantIndexGetResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileConsultantIndexGetResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileConsultantIndexGetResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileConsultantIndexGetResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileConsultantIndexGetResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileConsultantIndexGetResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileConsultantIndexGetResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileConsultantIndexGetResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileConsultantIndexGetResponseDataProfilesOfficeTransactions[];
  "installments": ProfileConsultantIndexGetResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileConsultantIndexGetResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileConsultantIndexGetResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileConsultantIndexGetResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileConsultantIndexGetResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileConsultantIndexGetResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileConsultantIndexGetResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileConsultantIndexGetResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileConsultantIndexGetResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileConsultantIndexGetResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileConsultantIndexGetResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileConsultantIndexGetResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileConsultantIndexGetResponseDataProfilesRoles[];
  "credential"?: ProfileConsultantIndexGetResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileConsultantIndexGetResponseDataProfilesOffice | null;
  "lms"?: ProfileConsultantIndexGetResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileConsultantIndexGetResponseDataProfilesParent[] | null;
}
export interface ProfileConsultantIndexGetResponseData extends JsonObject {
  "profiles": ProfileConsultantIndexGetResponseDataProfiles[];
}
export interface ProfileConsultantIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfileConsultantIndexGetResponse extends ApiEnvelope<ProfileConsultantIndexGetResponseData> {
  meta: ProfileConsultantIndexGetMetaData;
}

/** Backend request type: models::GeoBulkGetRequest. */
export interface ProfileCountryGetPostInput extends JsonObject {
  "ids": string[];
  "user_ids"?: string[] | null;
}
/** Backend response type: models::ListData. */
export interface ProfileCountryGetPostResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileCountryGetPostResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileCountryGetPostResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileCountryGetPostResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileCountryGetPostResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileCountryGetPostResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileCountryGetPostResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileCountryGetPostResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileCountryGetPostResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileCountryGetPostResponseDataProfilesOfficeTransactions[];
  "installments": ProfileCountryGetPostResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileCountryGetPostResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileCountryGetPostResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileCountryGetPostResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileCountryGetPostResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileCountryGetPostResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileCountryGetPostResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileCountryGetPostResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileCountryGetPostResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileCountryGetPostResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileCountryGetPostResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileCountryGetPostResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileCountryGetPostResponseDataProfilesRoles[];
  "credential"?: ProfileCountryGetPostResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileCountryGetPostResponseDataProfilesOffice | null;
  "lms"?: ProfileCountryGetPostResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileCountryGetPostResponseDataProfilesParent[] | null;
}
export interface ProfileCountryGetPostResponseData extends JsonObject {
  "profiles": ProfileCountryGetPostResponseDataProfiles[];
}
export interface ProfileCountryGetPostResponse extends ApiEnvelope<ProfileCountryGetPostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileForceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::BulkGetRequest. */
export interface ProfileBulkGetPostInput extends JsonObject {
  "user_ids": string[];
}
/** Backend response type: models::ListData. */
export interface ProfileBulkGetPostResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileBulkGetPostResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileBulkGetPostResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileBulkGetPostResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileBulkGetPostResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileBulkGetPostResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileBulkGetPostResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileBulkGetPostResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileBulkGetPostResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileBulkGetPostResponseDataProfilesOfficeTransactions[];
  "installments": ProfileBulkGetPostResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileBulkGetPostResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileBulkGetPostResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileBulkGetPostResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileBulkGetPostResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileBulkGetPostResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileBulkGetPostResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileBulkGetPostResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileBulkGetPostResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileBulkGetPostResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileBulkGetPostResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileBulkGetPostResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileBulkGetPostResponseDataProfilesRoles[];
  "credential"?: ProfileBulkGetPostResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileBulkGetPostResponseDataProfilesOffice | null;
  "lms"?: ProfileBulkGetPostResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileBulkGetPostResponseDataProfilesParent[] | null;
}
export interface ProfileBulkGetPostResponseData extends JsonObject {
  "profiles": ProfileBulkGetPostResponseDataProfiles[];
}
export interface ProfileBulkGetPostResponse extends ApiEnvelope<ProfileBulkGetPostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileChatListGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileGetAddressGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileGetAppGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileGetParentGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface ProfileManagerIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export interface ProfileManagerIndexGetResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileManagerIndexGetResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileManagerIndexGetResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileManagerIndexGetResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileManagerIndexGetResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileManagerIndexGetResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileManagerIndexGetResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileManagerIndexGetResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileManagerIndexGetResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileManagerIndexGetResponseDataProfilesOfficeTransactions[];
  "installments": ProfileManagerIndexGetResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileManagerIndexGetResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileManagerIndexGetResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileManagerIndexGetResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileManagerIndexGetResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileManagerIndexGetResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileManagerIndexGetResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileManagerIndexGetResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileManagerIndexGetResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileManagerIndexGetResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileManagerIndexGetResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileManagerIndexGetResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileManagerIndexGetResponseDataProfilesRoles[];
  "credential"?: ProfileManagerIndexGetResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileManagerIndexGetResponseDataProfilesOffice | null;
  "lms"?: ProfileManagerIndexGetResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileManagerIndexGetResponseDataProfilesParent[] | null;
}
export interface ProfileManagerIndexGetResponseData extends JsonObject {
  "profiles": ProfileManagerIndexGetResponseDataProfiles[];
}
export interface ProfileManagerIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfileManagerIndexGetResponse extends ApiEnvelope<ProfileManagerIndexGetResponseData> {
  meta: ProfileManagerIndexGetMetaData;
}

/** Backend response type: serde_json::Value. */
export interface ProfileGetMyAddressesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::AddressRequest. */
export interface ProfileSaveMyAddressPatchInput extends JsonObject {
  "title": string;
  "country"?: string | null;
  "province"?: string | null;
  "city"?: string | null;
  "postal_code"?: string | null;
  "plate"?: string | null;
  "detail"?: string | null;
}
/** Backend response type: serde_json::Value. */
export interface ProfileSaveMyAddressPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::AddressRequest. */
export interface ProfileSaveMyAddressPutInput extends JsonObject {
  "title": string;
  "country"?: string | null;
  "province"?: string | null;
  "city"?: string | null;
  "postal_code"?: string | null;
  "plate"?: string | null;
  "detail"?: string | null;
}
/** Backend response type: serde_json::Value. */
export interface ProfileSaveMyAddressPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileDeleteMyAddressDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface ProfileOtherIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export interface ProfileOtherIndexGetResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileOtherIndexGetResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileOtherIndexGetResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileOtherIndexGetResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileOtherIndexGetResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileOtherIndexGetResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileOtherIndexGetResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileOtherIndexGetResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileOtherIndexGetResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileOtherIndexGetResponseDataProfilesOfficeTransactions[];
  "installments": ProfileOtherIndexGetResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileOtherIndexGetResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileOtherIndexGetResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileOtherIndexGetResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileOtherIndexGetResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileOtherIndexGetResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileOtherIndexGetResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileOtherIndexGetResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileOtherIndexGetResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileOtherIndexGetResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileOtherIndexGetResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileOtherIndexGetResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileOtherIndexGetResponseDataProfilesRoles[];
  "credential"?: ProfileOtherIndexGetResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileOtherIndexGetResponseDataProfilesOffice | null;
  "lms"?: ProfileOtherIndexGetResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileOtherIndexGetResponseDataProfilesParent[] | null;
}
export interface ProfileOtherIndexGetResponseData extends JsonObject {
  "profiles": ProfileOtherIndexGetResponseDataProfiles[];
}
export interface ProfileOtherIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfileOtherIndexGetResponse extends ApiEnvelope<ProfileOtherIndexGetResponseData> {
  meta: ProfileOtherIndexGetMetaData;
}

/** Backend query type: models::ListQuery. */
export interface ProfileParentIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export interface ProfileParentIndexGetResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileParentIndexGetResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileParentIndexGetResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileParentIndexGetResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileParentIndexGetResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileParentIndexGetResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileParentIndexGetResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileParentIndexGetResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileParentIndexGetResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileParentIndexGetResponseDataProfilesOfficeTransactions[];
  "installments": ProfileParentIndexGetResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileParentIndexGetResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileParentIndexGetResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileParentIndexGetResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileParentIndexGetResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileParentIndexGetResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileParentIndexGetResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileParentIndexGetResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileParentIndexGetResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileParentIndexGetResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileParentIndexGetResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileParentIndexGetResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileParentIndexGetResponseDataProfilesRoles[];
  "credential"?: ProfileParentIndexGetResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileParentIndexGetResponseDataProfilesOffice | null;
  "lms"?: ProfileParentIndexGetResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileParentIndexGetResponseDataProfilesParent[] | null;
}
export interface ProfileParentIndexGetResponseData extends JsonObject {
  "profiles": ProfileParentIndexGetResponseDataProfiles[];
}
export interface ProfileParentIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfileParentIndexGetResponse extends ApiEnvelope<ProfileParentIndexGetResponseData> {
  meta: ProfileParentIndexGetMetaData;
}

/** Backend request type: ResolvePeople. */
export type ProfileSearchResolvePostInput = import("./types.js").ResolvePeopleInput;
/** Backend response type: PeopleResult. */
export interface ProfileSearchResolvePostResponseDataResults extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "user_id": string;
  "first_name_fa"?: string | null;
  "last_name_fa"?: string | null;
  "first_name_en"?: string | null;
  "last_name_en"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
}
export interface ProfileSearchResolvePostResponseData extends JsonObject {
  "results": ProfileSearchResolvePostResponseDataResults[];
  "has_more": boolean;
}
export interface ProfileSearchResolvePostResponse extends ApiEnvelope<ProfileSearchResolvePostResponseData> {
}

/** Backend request type: PeopleQuery. */
export interface ProfileSearchSearchPostApiV1ProfilePeopleSearchInput extends JsonObject {
  "search": string;
}
/** Backend response type: PeopleResult. */
export interface ProfileSearchSearchPostApiV1ProfilePeopleSearchResponseDataResults extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "user_id": string;
  "first_name_fa"?: string | null;
  "last_name_fa"?: string | null;
  "first_name_en"?: string | null;
  "last_name_en"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
}
export interface ProfileSearchSearchPostApiV1ProfilePeopleSearchResponseData extends JsonObject {
  "results": ProfileSearchSearchPostApiV1ProfilePeopleSearchResponseDataResults[];
  "has_more": boolean;
}
export interface ProfileSearchSearchPostApiV1ProfilePeopleSearchResponse extends ApiEnvelope<ProfileSearchSearchPostApiV1ProfilePeopleSearchResponseData> {
}

/** Backend request type: models::GeoBulkGetRequest. */
export interface ProfileProvinceGetPostInput extends JsonObject {
  "ids": string[];
  "user_ids"?: string[] | null;
}
/** Backend response type: models::ListData. */
export interface ProfileProvinceGetPostResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileProvinceGetPostResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileProvinceGetPostResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileProvinceGetPostResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileProvinceGetPostResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileProvinceGetPostResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileProvinceGetPostResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileProvinceGetPostResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileProvinceGetPostResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileProvinceGetPostResponseDataProfilesOfficeTransactions[];
  "installments": ProfileProvinceGetPostResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileProvinceGetPostResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileProvinceGetPostResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileProvinceGetPostResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileProvinceGetPostResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileProvinceGetPostResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileProvinceGetPostResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileProvinceGetPostResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileProvinceGetPostResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileProvinceGetPostResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileProvinceGetPostResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileProvinceGetPostResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileProvinceGetPostResponseDataProfilesRoles[];
  "credential"?: ProfileProvinceGetPostResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileProvinceGetPostResponseDataProfilesOffice | null;
  "lms"?: ProfileProvinceGetPostResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileProvinceGetPostResponseDataProfilesParent[] | null;
}
export interface ProfileProvinceGetPostResponseData extends JsonObject {
  "profiles": ProfileProvinceGetPostResponseDataProfiles[];
}
export interface ProfileProvinceGetPostResponse extends ApiEnvelope<ProfileProvinceGetPostResponseData> {
}

/** Backend request type: crate::profile_search::models::SearchRequest. */
export type ProfileSearchSearchPostInputFiltersOp = "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "exists" | "json_contains";
export interface ProfileSearchSearchPostInputFilters extends JsonObject {
  "path": string;
  "op": ProfileSearchSearchPostInputFiltersOp;
  "value"?: JsonValue | null;
}
export interface ProfileSearchSearchPostInputSort extends JsonObject {
  "path": string;
  "dir": string;
}
export interface ProfileSearchSearchPostInput extends JsonObject {
  "search"?: string | null;
  "filters"?: ProfileSearchSearchPostInputFilters[];
  "sort"?: ProfileSearchSearchPostInputSort[];
  "page"?: number | null;
  "per_page"?: number | null;
  "include"?: string[];
}
/** Backend response type: SearchData. */
export interface ProfileSearchSearchPostResponseDataResults extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "profile_id": string;
  "user_id": string;
  "core"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
}
export interface ProfileSearchSearchPostResponseData extends JsonObject {
  "results": ProfileSearchSearchPostResponseDataResults[];
}
export interface ProfileSearchSearchPostMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfileSearchSearchPostResponse extends ApiEnvelope<ProfileSearchSearchPostResponseData> {
  meta: ProfileSearchSearchPostMetaData;
}

/** Backend query type: models::ListQuery. */
export interface ProfileStudentIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export interface ProfileStudentIndexGetResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileStudentIndexGetResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileStudentIndexGetResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileStudentIndexGetResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileStudentIndexGetResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileStudentIndexGetResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileStudentIndexGetResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileStudentIndexGetResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileStudentIndexGetResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileStudentIndexGetResponseDataProfilesOfficeTransactions[];
  "installments": ProfileStudentIndexGetResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileStudentIndexGetResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileStudentIndexGetResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileStudentIndexGetResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileStudentIndexGetResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileStudentIndexGetResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileStudentIndexGetResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileStudentIndexGetResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileStudentIndexGetResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileStudentIndexGetResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileStudentIndexGetResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileStudentIndexGetResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileStudentIndexGetResponseDataProfilesRoles[];
  "credential"?: ProfileStudentIndexGetResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileStudentIndexGetResponseDataProfilesOffice | null;
  "lms"?: ProfileStudentIndexGetResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileStudentIndexGetResponseDataProfilesParent[] | null;
}
export interface ProfileStudentIndexGetResponseData extends JsonObject {
  "profiles": ProfileStudentIndexGetResponseDataProfiles[];
}
export interface ProfileStudentIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfileStudentIndexGetResponse extends ApiEnvelope<ProfileStudentIndexGetResponseData> {
  meta: ProfileStudentIndexGetMetaData;
}

/** Backend response type: models::PesResponse. */
export interface ProfileStudentPesGetResponseData extends JsonObject {
  "count": number;
  "amount": number;
}
export interface ProfileStudentPesGetResponse extends ApiEnvelope<ProfileStudentPesGetResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileStudentPesSchemaGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface ProfileSupportIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export interface ProfileSupportIndexGetResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileSupportIndexGetResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileSupportIndexGetResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileSupportIndexGetResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileSupportIndexGetResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileSupportIndexGetResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileSupportIndexGetResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileSupportIndexGetResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileSupportIndexGetResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileSupportIndexGetResponseDataProfilesOfficeTransactions[];
  "installments": ProfileSupportIndexGetResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileSupportIndexGetResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileSupportIndexGetResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileSupportIndexGetResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileSupportIndexGetResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileSupportIndexGetResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileSupportIndexGetResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileSupportIndexGetResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileSupportIndexGetResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileSupportIndexGetResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileSupportIndexGetResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileSupportIndexGetResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileSupportIndexGetResponseDataProfilesRoles[];
  "credential"?: ProfileSupportIndexGetResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileSupportIndexGetResponseDataProfilesOffice | null;
  "lms"?: ProfileSupportIndexGetResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileSupportIndexGetResponseDataProfilesParent[] | null;
}
export interface ProfileSupportIndexGetResponseData extends JsonObject {
  "profiles": ProfileSupportIndexGetResponseDataProfiles[];
}
export interface ProfileSupportIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfileSupportIndexGetResponse extends ApiEnvelope<ProfileSupportIndexGetResponseData> {
  meta: ProfileSupportIndexGetMetaData;
}

/** Backend response type: models::PesResponse. */
export interface ProfileSupportPesGetResponseData extends JsonObject {
  "count": number;
  "amount": number;
}
export interface ProfileSupportPesGetResponse extends ApiEnvelope<ProfileSupportPesGetResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileSupportPesSchemaGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface ProfileTeacherIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export interface ProfileTeacherIndexGetResponseDataProfilesRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileTeacherIndexGetResponseDataProfilesCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileTeacherIndexGetResponseDataProfilesOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileTeacherIndexGetResponseDataProfilesOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileTeacherIndexGetResponseDataProfilesOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileTeacherIndexGetResponseDataProfilesOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileTeacherIndexGetResponseDataProfilesOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileTeacherIndexGetResponseDataProfilesOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileTeacherIndexGetResponseDataProfilesOfficeEnrollments[];
  "transactions": ProfileTeacherIndexGetResponseDataProfilesOfficeTransactions[];
  "installments": ProfileTeacherIndexGetResponseDataProfilesOfficeInstallments[];
  "wallets": ProfileTeacherIndexGetResponseDataProfilesOfficeWallets[];
  "wallet_transactions": ProfileTeacherIndexGetResponseDataProfilesOfficeWalletTransactions[];
}
export interface ProfileTeacherIndexGetResponseDataProfilesLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileTeacherIndexGetResponseDataProfilesLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileTeacherIndexGetResponseDataProfilesLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileTeacherIndexGetResponseDataProfilesLms extends JsonObject {
  "classrooms": ProfileTeacherIndexGetResponseDataProfilesLmsClassrooms[];
  "classroom_sessions": ProfileTeacherIndexGetResponseDataProfilesLmsClassroomSessions[];
  "classroom_users": ProfileTeacherIndexGetResponseDataProfilesLmsClassroomUsers[];
}
export interface ProfileTeacherIndexGetResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileTeacherIndexGetResponseDataProfiles extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileTeacherIndexGetResponseDataProfilesRoles[];
  "credential"?: ProfileTeacherIndexGetResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileTeacherIndexGetResponseDataProfilesOffice | null;
  "lms"?: ProfileTeacherIndexGetResponseDataProfilesLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileTeacherIndexGetResponseDataProfilesParent[] | null;
}
export interface ProfileTeacherIndexGetResponseData extends JsonObject {
  "profiles": ProfileTeacherIndexGetResponseDataProfiles[];
}
export interface ProfileTeacherIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProfileTeacherIndexGetResponse extends ApiEnvelope<ProfileTeacherIndexGetResponseData> {
  meta: ProfileTeacherIndexGetMetaData;
}

/** Backend response type: serde_json::Value. */
export interface ProfileRestoreGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::MetaUpdate. */
export interface ProfileAddMetaPatchInput extends JsonObject {
  "meta": JsonValue;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddMetaPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::MetaUpdate. */
export interface ProfileAddMetaPutInput extends JsonObject {
  "meta": JsonValue;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddMetaPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: EducationInformationUpdate. */
export type EducationUpdatePutInput = import("./types.js").EducationInformationInput;
/** Backend response type: crate::profile::models::SingleData. */
export interface EducationUpdatePutResponseDataCity extends JsonObject {
  "id": string;
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface EducationUpdatePutResponseData extends JsonObject {
  "city": EducationUpdatePutResponseDataCity;
}
export interface EducationUpdatePutResponse extends ApiEnvelope<EducationUpdatePutResponseData> {
}

/** Backend request type: models::PersonalInformationUpdate. */
export interface ProfileUpdatePersonalPatchInput extends JsonObject {
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "birthday"?: string | null;
  "nationality"?: string | null;
  "religion"?: string | null;
  "gender"?: string | null;
  "job"?: string | null;
  "marital"?: string | null;
  "nickname"?: string | null;
  "national_number"?: string | null;
  "description"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "country_id"?: string | null;
  "province_id"?: string | null;
  "city_id"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdatePersonalPatchResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileUpdatePersonalPatchResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileUpdatePersonalPatchResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileUpdatePersonalPatchResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdatePersonalPatchResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdatePersonalPatchResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileUpdatePersonalPatchResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileUpdatePersonalPatchResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileUpdatePersonalPatchResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileUpdatePersonalPatchResponseDataProfileOfficeTransactions[];
  "installments": ProfileUpdatePersonalPatchResponseDataProfileOfficeInstallments[];
  "wallets": ProfileUpdatePersonalPatchResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileUpdatePersonalPatchResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileUpdatePersonalPatchResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileUpdatePersonalPatchResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileUpdatePersonalPatchResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileUpdatePersonalPatchResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileUpdatePersonalPatchResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileUpdatePersonalPatchResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileUpdatePersonalPatchResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileUpdatePersonalPatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdatePersonalPatchResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileUpdatePersonalPatchResponseDataProfileRoles[];
  "credential"?: ProfileUpdatePersonalPatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileUpdatePersonalPatchResponseDataProfileOffice | null;
  "lms"?: ProfileUpdatePersonalPatchResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileUpdatePersonalPatchResponseDataProfileParent[] | null;
}
export interface ProfileUpdatePersonalPatchResponseData extends JsonObject {
  "profile": ProfileUpdatePersonalPatchResponseDataProfile;
}
export interface ProfileUpdatePersonalPatchResponse extends ApiEnvelope<ProfileUpdatePersonalPatchResponseData> {
}

/** Backend request type: models::PersonalInformationUpdate. */
export interface ProfileUpdatePersonalPutInput extends JsonObject {
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "birthday"?: string | null;
  "nationality"?: string | null;
  "religion"?: string | null;
  "gender"?: string | null;
  "job"?: string | null;
  "marital"?: string | null;
  "nickname"?: string | null;
  "national_number"?: string | null;
  "description"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "country_id"?: string | null;
  "province_id"?: string | null;
  "city_id"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdatePersonalPutResponseDataProfileRoles extends JsonObject {
  "id": string;
  "name": string;
}
export interface ProfileUpdatePersonalPutResponseDataProfileCredential extends JsonObject {
  "handle_registration": number;
  "handle_registration_with_installment": number;
  "handle_await_installment": number;
  "handle_overdue_installment": number;
  "handle_freemium_sessions": number;
  "handle_cancel": number;
  "total": number;
}
export interface ProfileUpdatePersonalPutResponseDataProfileOfficeEnrollments extends JsonObject {
  "enrollment_id": number;
  "student_id"?: number | null;
  "classroom_id"?: number | null;
  "course_id"?: number | null;
  "support_user_id"?: string | null;
  "amount"?: number | null;
  "discount_amount"?: number | null;
  "remain_amount"?: number | null;
  "total_sessions"?: number | null;
  "freemium_sessions"?: number | null;
  "freemium_sessions_used"?: number | null;
  "education_status_id"?: number | null;
  "archive": boolean;
}
export interface ProfileUpdatePersonalPutResponseDataProfileOfficeTransactions extends JsonObject {
  "transaction_id": number;
  "subject"?: string | null;
  "amount"?: number | null;
  "status"?: string | null;
  "support_user_id"?: string | null;
  "deposit_at"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdatePersonalPutResponseDataProfileOfficeInstallments extends JsonObject {
  "installment_id": number;
  "amount"?: number | null;
  "status"?: string | null;
  "paid_at"?: string | null;
  "deadline"?: string | null;
  "archive": boolean;
}
export interface ProfileUpdatePersonalPutResponseDataProfileOfficeWallets extends JsonObject {
  "wallet_id": number;
  "balance"?: number | null;
}
export interface ProfileUpdatePersonalPutResponseDataProfileOfficeWalletTransactions extends JsonObject {
  "wallet_transaction_id": number;
  "amount"?: number | null;
  "transaction_type"?: string | null;
}
export interface ProfileUpdatePersonalPutResponseDataProfileOffice extends JsonObject {
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "enrollments": ProfileUpdatePersonalPutResponseDataProfileOfficeEnrollments[];
  "transactions": ProfileUpdatePersonalPutResponseDataProfileOfficeTransactions[];
  "installments": ProfileUpdatePersonalPutResponseDataProfileOfficeInstallments[];
  "wallets": ProfileUpdatePersonalPutResponseDataProfileOfficeWallets[];
  "wallet_transactions": ProfileUpdatePersonalPutResponseDataProfileOfficeWalletTransactions[];
}
export interface ProfileUpdatePersonalPutResponseDataProfileLmsClassrooms extends JsonObject {
  "classroom_id": string;
  "name"?: string | null;
  "course_id"?: string | null;
  "capacity"?: number | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "classroom_type_id"?: string | null;
  "status"?: string | null;
  "consultant_user_id"?: string | null;
  "teacher_user_id"?: string | null;
  "support_user_id"?: string | null;
}
export interface ProfileUpdatePersonalPutResponseDataProfileLmsClassroomSessions extends JsonObject {
  "session_id": string;
  "classroom_id"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "status"?: string | null;
}
export interface ProfileUpdatePersonalPutResponseDataProfileLmsClassroomUsers extends JsonObject {
  "classroom_id": string;
  "score"?: number | null;
  "status"?: string | null;
}
export interface ProfileUpdatePersonalPutResponseDataProfileLms extends JsonObject {
  "classrooms": ProfileUpdatePersonalPutResponseDataProfileLmsClassrooms[];
  "classroom_sessions": ProfileUpdatePersonalPutResponseDataProfileLmsClassroomSessions[];
  "classroom_users": ProfileUpdatePersonalPutResponseDataProfileLmsClassroomUsers[];
}
export interface ProfileUpdatePersonalPutResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdatePersonalPutResponseDataProfile extends JsonObject {
  /** Six-character UUID-derived alias; search may return collisions. */
  "short_id": string;
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "gender"?: string | null;
  "job"?: string | null;
  "education_id"?: string | null;
  "attendance_mode"?: string | null;
  "level"?: string | null;
  "referral_source"?: string | null;
  "referrer_uuid"?: string | null;
  "description"?: string | null;
  "account_balance"?: number | null;
  "wallet_balance"?: number | null;
  "status": string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "avatar"?: string | null;
  "has_active_enrollment": boolean;
  "roles": ProfileUpdatePersonalPutResponseDataProfileRoles[];
  "credential"?: ProfileUpdatePersonalPutResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "office"?: ProfileUpdatePersonalPutResponseDataProfileOffice | null;
  "lms"?: ProfileUpdatePersonalPutResponseDataProfileLms | null;
  "properties"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "services"?: BackendJson<"serde_json::Map<String, Value>"> | null;
  "parent"?: ProfileUpdatePersonalPutResponseDataProfileParent[] | null;
}
export interface ProfileUpdatePersonalPutResponseData extends JsonObject {
  "profile": ProfileUpdatePersonalPutResponseDataProfile;
}
export interface ProfileUpdatePersonalPutResponse extends ApiEnvelope<ProfileUpdatePersonalPutResponseData> {
}

/** Backend query type: models::ListQuery. */
export interface ProvinceIndexGetQuery extends QueryParams {
  "page"?: string | null;
  "per_page"?: string | null;
  "filter[search]"?: string | null;
  "filter[status]"?: string | null;
  "filter[active]"?: string | null;
  "filter[name]"?: string | null;
  "filter[country_id]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface ProvinceIndexGetResponseDataProvinces extends JsonObject {
  "id": string;
  "country_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ProvinceIndexGetResponseData extends JsonObject {
  "provinces": ProvinceIndexGetResponseDataProvinces[];
}
export interface ProvinceIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface ProvinceIndexGetResponse extends ApiEnvelope<ProvinceIndexGetResponseData> {
  meta: ProvinceIndexGetMetaData;
}

/** Backend request type: models::Create. */
export interface ProvinceStorePostInput extends JsonObject {
  "country_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface ProvinceStorePostResponseDataProvince extends JsonObject {
  "id": string;
  "country_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ProvinceStorePostResponseData extends JsonObject {
  "province": ProvinceStorePostResponseDataProvince;
}
export interface ProvinceStorePostResponse extends ApiEnvelope<ProvinceStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProvinceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface ProvinceShowGetResponseDataProvince extends JsonObject {
  "id": string;
  "country_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ProvinceShowGetResponseData extends JsonObject {
  "province": ProvinceShowGetResponseDataProvince;
}
export interface ProvinceShowGetResponse extends ApiEnvelope<ProvinceShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface ProvinceUpdatePatchInput extends JsonObject {
  "country_id"?: string | null;
  "name"?: string | null;
  "status"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface ProvinceUpdatePatchResponseDataProvince extends JsonObject {
  "id": string;
  "country_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ProvinceUpdatePatchResponseData extends JsonObject {
  "province": ProvinceUpdatePatchResponseDataProvince;
}
export interface ProvinceUpdatePatchResponse extends ApiEnvelope<ProvinceUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface ProvinceUpdatePutInput extends JsonObject {
  "country_id"?: string | null;
  "name"?: string | null;
  "status"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface ProvinceUpdatePutResponseDataProvince extends JsonObject {
  "id": string;
  "country_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ProvinceUpdatePutResponseData extends JsonObject {
  "province": ProvinceUpdatePutResponseDataProvince;
}
export interface ProvinceUpdatePutResponse extends ApiEnvelope<ProvinceUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProvinceForceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface ProvinceRestoreGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<entity::referral_source::Model>. */
export interface ReferralListGetResponseItem extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "metadata": BackendJson<"Json">;
  "active": boolean;
  "sort_order": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ReferralListGetResponse extends ApiEnvelope<ReferralListGetResponseItem[]> {
}

/** Backend request type: SourceWrite. */
export interface ReferralCreatePostInput extends JsonObject {
  "code": string;
  "labels"?: JsonValue;
  "metadata"?: JsonValue;
  "active"?: boolean;
  "sort_order"?: number;
}
/** Backend response type: entity::referral_source::Model. */
export interface ReferralCreatePostResponseData extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "metadata": BackendJson<"Json">;
  "active": boolean;
  "sort_order": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ReferralCreatePostResponse extends ApiEnvelope<ReferralCreatePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ReferralDeleteDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: entity::referral_source::Model. */
export interface ReferralShowGetResponseData extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "metadata": BackendJson<"Json">;
  "active": boolean;
  "sort_order": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ReferralShowGetResponse extends ApiEnvelope<ReferralShowGetResponseData> {
}

/** Backend request type: SourceWrite. */
export interface ReferralUpdatePutInput extends JsonObject {
  "code": string;
  "labels"?: JsonValue;
  "metadata"?: JsonValue;
  "active"?: boolean;
  "sort_order"?: number;
}
/** Backend response type: entity::referral_source::Model. */
export interface ReferralUpdatePutResponseData extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "metadata": BackendJson<"Json">;
  "active": boolean;
  "sort_order": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface ReferralUpdatePutResponse extends ApiEnvelope<ReferralUpdatePutResponseData> {
}

/** Backend response type: Vec<entity::relation_type::Model>. */
export interface RelationListTypesGetResponseItem extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "inverse_type_id"?: string | null;
  "symmetric": boolean;
  "managed_inverse": boolean;
  "allow_self": boolean;
  "constraints": BackendJson<"Json">;
  "active": boolean;
  "sort_order": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface RelationListTypesGetResponse extends ApiEnvelope<RelationListTypesGetResponseItem[]> {
}

/** Backend request type: RelationTypeWrite. */
export interface RelationCreateTypePostInput extends JsonObject {
  "code": string;
  "labels"?: JsonValue;
  "inverse_type_id"?: string | null;
  "symmetric"?: boolean;
  "managed_inverse"?: boolean;
  "allow_self"?: boolean;
  "constraints"?: JsonValue;
  "active"?: boolean;
  "sort_order"?: number;
}
/** Backend response type: entity::relation_type::Model. */
export interface RelationCreateTypePostResponseData extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "inverse_type_id"?: string | null;
  "symmetric": boolean;
  "managed_inverse": boolean;
  "allow_self": boolean;
  "constraints": BackendJson<"Json">;
  "active": boolean;
  "sort_order": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface RelationCreateTypePostResponse extends ApiEnvelope<RelationCreateTypePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface RelationDeleteTypeDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: entity::relation_type::Model. */
export interface RelationShowTypeGetResponseData extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "inverse_type_id"?: string | null;
  "symmetric": boolean;
  "managed_inverse": boolean;
  "allow_self": boolean;
  "constraints": BackendJson<"Json">;
  "active": boolean;
  "sort_order": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface RelationShowTypeGetResponse extends ApiEnvelope<RelationShowTypeGetResponseData> {
}

/** Backend request type: RelationTypeWrite. */
export interface RelationUpdateTypePutInput extends JsonObject {
  "code": string;
  "labels"?: JsonValue;
  "inverse_type_id"?: string | null;
  "symmetric"?: boolean;
  "managed_inverse"?: boolean;
  "allow_self"?: boolean;
  "constraints"?: JsonValue;
  "active"?: boolean;
  "sort_order"?: number;
}
/** Backend response type: entity::relation_type::Model. */
export interface RelationUpdateTypePutResponseData extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "inverse_type_id"?: string | null;
  "symmetric": boolean;
  "managed_inverse": boolean;
  "allow_self": boolean;
  "constraints": BackendJson<"Json">;
  "active": boolean;
  "sort_order": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface RelationUpdateTypePutResponse extends ApiEnvelope<RelationUpdateTypePutResponseData> {
}

/** Backend response type: models::ListData. */
export interface SettingIndexGetResponseDataSetting extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "value": number;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface SettingIndexGetResponseData extends JsonObject {
  "setting": SettingIndexGetResponseDataSetting[];
}
export interface SettingIndexGetResponse extends ApiEnvelope<SettingIndexGetResponseData> {
}

/** Backend request type: models::Create. */
export interface SettingStorePostInput extends JsonObject {
  "key": string;
  "title": string;
  "value": number;
}
/** Backend response type: models::SingleData. */
export interface SettingStorePostResponseDataSetting extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "value": number;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface SettingStorePostResponseData extends JsonObject {
  "setting": SettingStorePostResponseDataSetting;
}
export interface SettingStorePostResponse extends ApiEnvelope<SettingStorePostResponseData> {
}

/** Backend query type: ActionQuery. */
export interface LifecycleActionsListGetQuery extends QueryParams {
  "state_id"?: string | null;
}
/** Backend response type: Vec<entity::state_action::Model>. */
export interface LifecycleActionsListGetResponseItem extends JsonObject {
  "id": string;
  "state_id": string;
  "phase": string;
  "action_type": string;
  "labels": BackendJson<"Json">;
  "config": BackendJson<"Json">;
  "condition"?: BackendJson<"Json"> | null;
  "delay_seconds": number;
  "retry_policy": BackendJson<"Json">;
  "max_attempts": number;
  "sort_order": number;
  "enabled": boolean;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface LifecycleActionsListGetResponse extends ApiEnvelope<LifecycleActionsListGetResponseItem[]> {
}

/** Backend request type: ActionWrite. */
export interface LifecycleCreateActionPostInput extends JsonObject {
  "state_id": string;
  "phase": string;
  "action_type": string;
  "labels"?: JsonValue;
  "config"?: JsonValue;
  "condition"?: JsonValue | null;
  "delay_seconds"?: number;
  "retry_policy"?: JsonValue;
  "max_attempts"?: number;
  "sort_order"?: number;
  "enabled"?: boolean;
}
/** Backend response type: entity::state_action::Model. */
export interface LifecycleCreateActionPostResponseData extends JsonObject {
  "id": string;
  "state_id": string;
  "phase": string;
  "action_type": string;
  "labels": BackendJson<"Json">;
  "config": BackendJson<"Json">;
  "condition"?: BackendJson<"Json"> | null;
  "delay_seconds": number;
  "retry_policy": BackendJson<"Json">;
  "max_attempts": number;
  "sort_order": number;
  "enabled": boolean;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface LifecycleCreateActionPostResponse extends ApiEnvelope<LifecycleCreateActionPostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface LifecycleDeleteActionDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: entity::state_action::Model. */
export interface LifecycleShowActionGetResponseData extends JsonObject {
  "id": string;
  "state_id": string;
  "phase": string;
  "action_type": string;
  "labels": BackendJson<"Json">;
  "config": BackendJson<"Json">;
  "condition"?: BackendJson<"Json"> | null;
  "delay_seconds": number;
  "retry_policy": BackendJson<"Json">;
  "max_attempts": number;
  "sort_order": number;
  "enabled": boolean;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface LifecycleShowActionGetResponse extends ApiEnvelope<LifecycleShowActionGetResponseData> {
}

/** Backend request type: ActionWrite. */
export interface LifecycleUpdateActionPutInput extends JsonObject {
  "state_id": string;
  "phase": string;
  "action_type": string;
  "labels"?: JsonValue;
  "config"?: JsonValue;
  "condition"?: JsonValue | null;
  "delay_seconds"?: number;
  "retry_policy"?: JsonValue;
  "max_attempts"?: number;
  "sort_order"?: number;
  "enabled"?: boolean;
}
/** Backend response type: entity::state_action::Model. */
export interface LifecycleUpdateActionPutResponseData extends JsonObject {
  "id": string;
  "state_id": string;
  "phase": string;
  "action_type": string;
  "labels": BackendJson<"Json">;
  "config": BackendJson<"Json">;
  "condition"?: BackendJson<"Json"> | null;
  "delay_seconds": number;
  "retry_policy": BackendJson<"Json">;
  "max_attempts": number;
  "sort_order": number;
  "enabled": boolean;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface LifecycleUpdateActionPutResponse extends ApiEnvelope<LifecycleUpdateActionPutResponseData> {
}

/** Backend request type: ActionWrite. */
export interface LifecycleDryRunActionPostInput extends JsonObject {
  "state_id": string;
  "phase": string;
  "action_type": string;
  "labels"?: JsonValue;
  "config"?: JsonValue;
  "condition"?: JsonValue | null;
  "delay_seconds"?: number;
  "retry_policy"?: JsonValue;
  "max_attempts"?: number;
  "sort_order"?: number;
  "enabled"?: boolean;
}
/** Backend response type: serde_json::Value. */
export interface LifecycleDryRunActionPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: StateQuery. */
export interface LifecycleStatesGetQuery extends QueryParams {
  "system_id"?: string | null;
}
/** Backend response type: Vec<entity::state_definition::Model>. */
export interface LifecycleStatesGetResponseItem extends JsonObject {
  "id": string;
  "system_id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "description": BackendJson<"Json">;
  "rule": BackendJson<"Json">;
  "priority": number;
  "is_fallback": boolean;
  "active": boolean;
  "version": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface LifecycleStatesGetResponse extends ApiEnvelope<LifecycleStatesGetResponseItem[]> {
}

/** Backend request type: StateWrite. */
export interface LifecycleCreateStatePostInput extends JsonObject {
  "system_id": string;
  "code": string;
  "labels"?: JsonValue;
  "description"?: JsonValue;
  "rule"?: JsonValue;
  "priority"?: number;
  "is_fallback"?: boolean;
  "active"?: boolean;
}
/** Backend response type: entity::state_definition::Model. */
export interface LifecycleCreateStatePostResponseData extends JsonObject {
  "id": string;
  "system_id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "description": BackendJson<"Json">;
  "rule": BackendJson<"Json">;
  "priority": number;
  "is_fallback": boolean;
  "active": boolean;
  "version": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface LifecycleCreateStatePostResponse extends ApiEnvelope<LifecycleCreateStatePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface LifecycleDeleteStateDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: entity::state_definition::Model. */
export interface LifecycleShowStateGetResponseData extends JsonObject {
  "id": string;
  "system_id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "description": BackendJson<"Json">;
  "rule": BackendJson<"Json">;
  "priority": number;
  "is_fallback": boolean;
  "active": boolean;
  "version": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface LifecycleShowStateGetResponse extends ApiEnvelope<LifecycleShowStateGetResponseData> {
}

/** Backend request type: StateWrite. */
export interface LifecycleUpdateStatePutInput extends JsonObject {
  "system_id": string;
  "code": string;
  "labels"?: JsonValue;
  "description"?: JsonValue;
  "rule"?: JsonValue;
  "priority"?: number;
  "is_fallback"?: boolean;
  "active"?: boolean;
}
/** Backend response type: entity::state_definition::Model. */
export interface LifecycleUpdateStatePutResponseData extends JsonObject {
  "id": string;
  "system_id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "description": BackendJson<"Json">;
  "rule": BackendJson<"Json">;
  "priority": number;
  "is_fallback": boolean;
  "active": boolean;
  "version": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface LifecycleUpdateStatePutResponse extends ApiEnvelope<LifecycleUpdateStatePutResponseData> {
}

/** Backend query type: AttemptQuery. */
export interface LifecycleActionAttemptsGetQuery extends QueryParams {
  "outbox_id"?: string | null;
}
/** Backend response type: Vec<entity::state_action_attempt::Model>. */
export interface LifecycleActionAttemptsGetResponseItem extends JsonObject {
  "id": string;
  "outbox_id": string;
  "attempt": number;
  "status": string;
  "error"?: string | null;
  "started_at": string;
  "finished_at"?: string | null;
}
export interface LifecycleActionAttemptsGetResponse extends ApiEnvelope<LifecycleActionAttemptsGetResponseItem[]> {
}

/** Backend request type: EvaluationRequest. */
export interface LifecycleEvaluatePostInput extends JsonObject {
  "profile_id": string;
  "system_id": string;
  "facts"?: JsonValue;
  "trigger"?: string | null;
}
/** Backend response type: EvaluationResult. */
export interface LifecycleEvaluatePostResponseDataCandidates extends JsonObject {
  "state_id": string;
  "code": string;
  "priority": number;
  "matched": boolean;
  "is_fallback": boolean;
}
export interface LifecycleEvaluatePostResponseData extends JsonObject {
  "eligible": boolean;
  "selected_state_id"?: string | null;
  "selected_state_code"?: string | null;
  "current_state_id"?: string | null;
  "changed": boolean;
  "candidates": LifecycleEvaluatePostResponseDataCandidates[];
  "facts": JsonValue;
}
export interface LifecycleEvaluatePostResponse extends ApiEnvelope<LifecycleEvaluatePostResponseData> {
}

/** Backend query type: OutboxQuery. */
export interface LifecycleOutboxGetQuery extends QueryParams {
  "status"?: string | null;
}
/** Backend response type: Vec<entity::state_action_outbox::Model>. */
export interface LifecycleOutboxGetResponseItem extends JsonObject {
  "id": string;
  "transition_id": string;
  "action_id": string;
  "idempotency_key": string;
  "available_at": string;
  "status": string;
  "attempts": number;
  "last_error"?: string | null;
  "completed_at"?: string | null;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface LifecycleOutboxGetResponse extends ApiEnvelope<LifecycleOutboxGetResponseItem[]> {
}

/** Backend response type: entity::state_action_outbox::Model. */
export interface LifecycleRetryPostResponseData extends JsonObject {
  "id": string;
  "transition_id": string;
  "action_id": string;
  "idempotency_key": string;
  "available_at": string;
  "status": string;
  "attempts": number;
  "last_error"?: string | null;
  "completed_at"?: string | null;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface LifecycleRetryPostResponse extends ApiEnvelope<LifecycleRetryPostResponseData> {
}

/** Backend response type: usize. */
export interface LifecycleProcessOutboxPostResponse extends ApiEnvelope<number> {
}

/** Backend request type: EvaluationRequest. */
export interface LifecyclePreviewPostInput extends JsonObject {
  "profile_id": string;
  "system_id": string;
  "facts"?: JsonValue;
  "trigger"?: string | null;
}
/** Backend response type: EvaluationResult. */
export interface LifecyclePreviewPostResponseDataCandidates extends JsonObject {
  "state_id": string;
  "code": string;
  "priority": number;
  "matched": boolean;
  "is_fallback": boolean;
}
export interface LifecyclePreviewPostResponseData extends JsonObject {
  "eligible": boolean;
  "selected_state_id"?: string | null;
  "selected_state_code"?: string | null;
  "current_state_id"?: string | null;
  "changed": boolean;
  "candidates": LifecyclePreviewPostResponseDataCandidates[];
  "facts": JsonValue;
}
export interface LifecyclePreviewPostResponse extends ApiEnvelope<LifecyclePreviewPostResponseData> {
}

/** Backend query type: TransitionQuery. */
export interface LifecycleTransitionsGetQuery extends QueryParams {
  "profile_id"?: string | null;
  "system_id"?: string | null;
}
/** Backend response type: Vec<entity::state_transition::Model>. */
export interface LifecycleTransitionsGetResponseItem extends JsonObject {
  "id": string;
  "profile_id": string;
  "system_id": string;
  "from_state_id"?: string | null;
  "to_state_id": string;
  "definition_version": number;
  "trigger": string;
  "facts": BackendJson<"Json">;
  "matched_rule": BackendJson<"Json">;
  "transitioned_at": string;
}
export interface LifecycleTransitionsGetResponse extends ApiEnvelope<LifecycleTransitionsGetResponseItem[]> {
}

/** Backend request type: RulePreviewRequest. */
export interface LifecycleValidateRulePostInput extends JsonObject {
  "rule"?: JsonValue;
  "facts"?: JsonValue;
}
/** Backend response type: serde_json::Value. */
export interface LifecycleValidateRulePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<entity::state_system::Model>. */
export interface LifecycleSystemsGetResponseItem extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "description": BackendJson<"Json">;
  "eligibility_rule": BackendJson<"Json">;
  "evaluation_schedule"?: string | null;
  "publish_mode": string;
  "active": boolean;
  "version": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface LifecycleSystemsGetResponse extends ApiEnvelope<LifecycleSystemsGetResponseItem[]> {
}

/** Backend request type: SystemWrite. */
export interface LifecycleCreateSystemPostInput extends JsonObject {
  "code": string;
  "labels"?: JsonValue;
  "description"?: JsonValue;
  "eligibility_rule"?: JsonValue;
  "evaluation_schedule"?: string | null;
  "publish_mode"?: string;
  "active"?: boolean;
}
/** Backend response type: entity::state_system::Model. */
export interface LifecycleCreateSystemPostResponseData extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "description": BackendJson<"Json">;
  "eligibility_rule": BackendJson<"Json">;
  "evaluation_schedule"?: string | null;
  "publish_mode": string;
  "active": boolean;
  "version": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface LifecycleCreateSystemPostResponse extends ApiEnvelope<LifecycleCreateSystemPostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface LifecycleDeleteSystemDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: entity::state_system::Model. */
export interface LifecycleShowSystemGetResponseData extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "description": BackendJson<"Json">;
  "eligibility_rule": BackendJson<"Json">;
  "evaluation_schedule"?: string | null;
  "publish_mode": string;
  "active": boolean;
  "version": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface LifecycleShowSystemGetResponse extends ApiEnvelope<LifecycleShowSystemGetResponseData> {
}

/** Backend request type: SystemWrite. */
export interface LifecycleUpdateSystemPutInput extends JsonObject {
  "code": string;
  "labels"?: JsonValue;
  "description"?: JsonValue;
  "eligibility_rule"?: JsonValue;
  "evaluation_schedule"?: string | null;
  "publish_mode"?: string;
  "active"?: boolean;
}
/** Backend response type: entity::state_system::Model. */
export interface LifecycleUpdateSystemPutResponseData extends JsonObject {
  "id": string;
  "code": string;
  "labels": BackendJson<"Json">;
  "description": BackendJson<"Json">;
  "eligibility_rule": BackendJson<"Json">;
  "evaluation_schedule"?: string | null;
  "publish_mode": string;
  "active": boolean;
  "version": number;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface LifecycleUpdateSystemPutResponse extends ApiEnvelope<LifecycleUpdateSystemPutResponseData> {
}

/** Backend response type: Value. */
export interface SurveyIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateSurvey. */
export interface SurveyStorePostInput extends JsonObject {
  "user_id": string;
  "enrollment_id"?: number | null;
  "type"?: string | null;
  "meta"?: JsonValue | null;
}
/** Backend response type: Value. */
export interface SurveyStorePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface TrustedServiceIndexGetQuery extends QueryParams {
  "page"?: string | null;
  "per_page"?: string | null;
  "filter[search]"?: string | null;
  "filter[status]"?: string | null;
  "filter[active]"?: string | null;
  "filter[service_key]"?: string | null;
  "filter[title]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface TrustedServiceIndexGetResponseDataTrustedServices extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceIndexGetResponseData extends JsonObject {
  "trusted_services": TrustedServiceIndexGetResponseDataTrustedServices[];
}
export interface TrustedServiceIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface TrustedServiceIndexGetResponse extends ApiEnvelope<TrustedServiceIndexGetResponseData> {
  meta: TrustedServiceIndexGetMetaData;
}

/** Backend request type: models::Create. */
export interface TrustedServiceStorePostInput extends JsonObject {
  "service_key": string;
  "title": string;
}
/** Backend response type: models::SingleData. */
export interface TrustedServiceStorePostResponseDataTrustedService extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceStorePostResponseData extends JsonObject {
  "trusted_service": TrustedServiceStorePostResponseDataTrustedService;
}
export interface TrustedServiceStorePostResponse extends ApiEnvelope<TrustedServiceStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface TrustedServiceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface TrustedServiceShowGetResponseDataTrustedService extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceShowGetResponseData extends JsonObject {
  "trusted_service": TrustedServiceShowGetResponseDataTrustedService;
}
export interface TrustedServiceShowGetResponse extends ApiEnvelope<TrustedServiceShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface TrustedServiceUpdatePatchInput extends JsonObject {
  "service_key"?: string | null;
  "title"?: string | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface TrustedServiceUpdatePatchResponseDataTrustedService extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceUpdatePatchResponseData extends JsonObject {
  "trusted_service": TrustedServiceUpdatePatchResponseDataTrustedService;
}
export interface TrustedServiceUpdatePatchResponse extends ApiEnvelope<TrustedServiceUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface TrustedServiceUpdatePutInput extends JsonObject {
  "service_key"?: string | null;
  "title"?: string | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface TrustedServiceUpdatePutResponseDataTrustedService extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceUpdatePutResponseData extends JsonObject {
  "trusted_service": TrustedServiceUpdatePutResponseDataTrustedService;
}
export interface TrustedServiceUpdatePutResponse extends ApiEnvelope<TrustedServiceUpdatePutResponseData> {
}

/** Backend query type: models::EventListQuery. */
export interface TrustedServiceEventIndexGetQuery extends QueryParams {
  "page"?: string | null;
  "per_page"?: string | null;
  "filter[search]"?: string | null;
  "filter[status]"?: string | null;
  "filter[active]"?: string | null;
  "filter[event_name]"?: string | null;
  "filter[title]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::EventListData. */
export interface TrustedServiceEventIndexGetResponseDataTrustedServiceEvents extends JsonObject {
  "id": string;
  "service_id": string;
  "event_name": string;
  "title": string;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "payload_schema"?: JsonValue | null;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceEventIndexGetResponseData extends JsonObject {
  "trusted_service_events": TrustedServiceEventIndexGetResponseDataTrustedServiceEvents[];
}
export interface TrustedServiceEventIndexGetMetaData extends JsonObject {
  "current_page": number;
  "per_page": number;
  "total": number;
  "last_page": number;
}
export interface TrustedServiceEventIndexGetResponse extends ApiEnvelope<TrustedServiceEventIndexGetResponseData> {
  meta: TrustedServiceEventIndexGetMetaData;
}

/** Backend request type: models::EventCreate. */
export interface TrustedServiceEventStorePostInput extends JsonObject {
  "event_name": string;
  "title": string;
  "visible_in_list"?: boolean | null;
  "visible_in_get"?: boolean | null;
  "visible_in_full"?: boolean | null;
  "payload_schema"?: JsonValue | null;
}
/** Backend response type: models::EventSingleData. */
export interface TrustedServiceEventStorePostResponseDataTrustedServiceEvent extends JsonObject {
  "id": string;
  "service_id": string;
  "event_name": string;
  "title": string;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "payload_schema"?: JsonValue | null;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceEventStorePostResponseData extends JsonObject {
  "trusted_service_event": TrustedServiceEventStorePostResponseDataTrustedServiceEvent;
}
export interface TrustedServiceEventStorePostResponse extends ApiEnvelope<TrustedServiceEventStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface TrustedServiceEventDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::EventSingleData. */
export interface TrustedServiceEventShowGetResponseDataTrustedServiceEvent extends JsonObject {
  "id": string;
  "service_id": string;
  "event_name": string;
  "title": string;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "payload_schema"?: JsonValue | null;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceEventShowGetResponseData extends JsonObject {
  "trusted_service_event": TrustedServiceEventShowGetResponseDataTrustedServiceEvent;
}
export interface TrustedServiceEventShowGetResponse extends ApiEnvelope<TrustedServiceEventShowGetResponseData> {
}

/** Backend request type: models::EventUpdate. */
export interface TrustedServiceEventUpdatePatchInput extends JsonObject {
  "event_name"?: string | null;
  "title"?: string | null;
  "visible_in_list"?: boolean | null;
  "visible_in_get"?: boolean | null;
  "visible_in_full"?: boolean | null;
  "payload_schema"?: JsonValue | null;
}
/** Backend response type: models::EventSingleData. */
export interface TrustedServiceEventUpdatePatchResponseDataTrustedServiceEvent extends JsonObject {
  "id": string;
  "service_id": string;
  "event_name": string;
  "title": string;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "payload_schema"?: JsonValue | null;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceEventUpdatePatchResponseData extends JsonObject {
  "trusted_service_event": TrustedServiceEventUpdatePatchResponseDataTrustedServiceEvent;
}
export interface TrustedServiceEventUpdatePatchResponse extends ApiEnvelope<TrustedServiceEventUpdatePatchResponseData> {
}

/** Backend request type: models::EventUpdate. */
export interface TrustedServiceEventUpdatePutInput extends JsonObject {
  "event_name"?: string | null;
  "title"?: string | null;
  "visible_in_list"?: boolean | null;
  "visible_in_get"?: boolean | null;
  "visible_in_full"?: boolean | null;
  "payload_schema"?: JsonValue | null;
}
/** Backend response type: models::EventSingleData. */
export interface TrustedServiceEventUpdatePutResponseDataTrustedServiceEvent extends JsonObject {
  "id": string;
  "service_id": string;
  "event_name": string;
  "title": string;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "payload_schema"?: JsonValue | null;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceEventUpdatePutResponseData extends JsonObject {
  "trusted_service_event": TrustedServiceEventUpdatePutResponseDataTrustedServiceEvent;
}
export interface TrustedServiceEventUpdatePutResponse extends ApiEnvelope<TrustedServiceEventUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface RouterHealthGetHealthResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface RouterHealthGetUpResponse extends ApiEnvelope<JsonValue> {
}
