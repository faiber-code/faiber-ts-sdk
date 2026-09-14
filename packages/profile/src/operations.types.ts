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
  "id": string;
  "user_id": string;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
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
  "filter[province_id]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface CountryIndexGetResponseDataCities extends JsonObject {
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
  "cities": CountryIndexGetResponseDataCities[];
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
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface CountryStorePostResponseDataCity extends JsonObject {
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
  "city": CountryStorePostResponseDataCity;
}
export interface CountryStorePostResponse extends ApiEnvelope<CountryStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CountryDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface CountryShowGetResponseDataCity extends JsonObject {
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
  "city": CountryShowGetResponseDataCity;
}
export interface CountryShowGetResponse extends ApiEnvelope<CountryShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface CountryUpdatePatchInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface CountryUpdatePatchResponseDataCity extends JsonObject {
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
  "city": CountryUpdatePatchResponseDataCity;
}
export interface CountryUpdatePatchResponse extends ApiEnvelope<CountryUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface CountryUpdatePutInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface CountryUpdatePutResponseDataCity extends JsonObject {
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
  "city": CountryUpdatePutResponseDataCity;
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
  "filter[name]"?: string | null;
  "filter[province_id]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface CustomTypeIndexGetResponseDataCities extends JsonObject {
  "id": string;
  "name": string;
  "value_type": string;
  "options": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface CustomTypeIndexGetResponseData extends JsonObject {
  "cities": CustomTypeIndexGetResponseDataCities[];
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
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface CustomTypeStorePostResponseDataCity extends JsonObject {
  "id": string;
  "name": string;
  "value_type": string;
  "options": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface CustomTypeStorePostResponseData extends JsonObject {
  "city": CustomTypeStorePostResponseDataCity;
}
export interface CustomTypeStorePostResponse extends ApiEnvelope<CustomTypeStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CustomTypeDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface CustomTypeShowGetResponseDataCity extends JsonObject {
  "id": string;
  "name": string;
  "value_type": string;
  "options": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface CustomTypeShowGetResponseData extends JsonObject {
  "city": CustomTypeShowGetResponseDataCity;
}
export interface CustomTypeShowGetResponse extends ApiEnvelope<CustomTypeShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface CustomTypeUpdatePatchInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface CustomTypeUpdatePatchResponseDataCity extends JsonObject {
  "id": string;
  "name": string;
  "value_type": string;
  "options": JsonValue;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface CustomTypeUpdatePatchResponseData extends JsonObject {
  "city": CustomTypeUpdatePatchResponseDataCity;
}
export interface CustomTypeUpdatePatchResponse extends ApiEnvelope<CustomTypeUpdatePatchResponseData> {
}

/** Backend response type: Value. */
export interface OptionDependencyGetResponse extends ApiEnvelope<JsonValue> {
}

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
export interface ProfileIndexGetQuery extends QueryParams {
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
export interface ProfileIndexGetResponseDataCities extends JsonObject {
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
export interface ProfileIndexGetResponseData extends JsonObject {
  "cities": ProfileIndexGetResponseDataCities[];
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
  "filter[name]"?: string | null;
  "filter[province_id]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface ProfilePropertyIndexGetResponseDataCities extends JsonObject {
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
  "cities": ProfilePropertyIndexGetResponseDataCities[];
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
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface ProfilePropertyStorePostResponseDataCity extends JsonObject {
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
  "city": ProfilePropertyStorePostResponseDataCity;
}
export interface ProfilePropertyStorePostResponse extends ApiEnvelope<ProfilePropertyStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfilePropertyDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface ProfilePropertyShowGetResponseDataCity extends JsonObject {
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
  "city": ProfilePropertyShowGetResponseDataCity;
}
export interface ProfilePropertyShowGetResponse extends ApiEnvelope<ProfilePropertyShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface ProfilePropertyUpdatePatchInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface ProfilePropertyUpdatePatchResponseDataCity extends JsonObject {
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
  "city": ProfilePropertyUpdatePatchResponseDataCity;
}
export interface ProfilePropertyUpdatePatchResponse extends ApiEnvelope<ProfilePropertyUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface ProfilePropertyUpdatePutInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface ProfilePropertyUpdatePutResponseDataCity extends JsonObject {
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
  "city": ProfilePropertyUpdatePutResponseDataCity;
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
  "attendance_mode"?: string | null;
  "level"?: string | null;
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
  "attendance_mode"?: string | null;
  "level"?: string | null;
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
export interface ProfileShowGetResponseDataCity extends JsonObject {
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
export interface ProfileShowGetResponseData extends JsonObject {
  "city": ProfileShowGetResponseDataCity;
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
export interface ProfileUpdatePatchResponseDataCity extends JsonObject {
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
export interface ProfileUpdatePatchResponseData extends JsonObject {
  "city": ProfileUpdatePatchResponseDataCity;
}
export interface ProfileUpdatePatchResponse extends ApiEnvelope<ProfileUpdatePatchResponseData> {
}

/** Backend response type: models::SingleData. */
export interface ProfileShowAdminGetResponseDataCity extends JsonObject {
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
export interface ProfileShowAdminGetResponseData extends JsonObject {
  "city": ProfileShowAdminGetResponseDataCity;
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
export interface ProfileUpdateEmployeeTypePatchResponseDataCity extends JsonObject {
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
export interface ProfileUpdateEmployeeTypePatchResponseData extends JsonObject {
  "city": ProfileUpdateEmployeeTypePatchResponseDataCity;
}
export interface ProfileUpdateEmployeeTypePatchResponse extends ApiEnvelope<ProfileUpdateEmployeeTypePatchResponseData> {
}

/** Backend request type: models::UpdateEmployeeType. */
export interface ProfileUpdateEmployeeTypePutInput extends JsonObject {
  "employee_type": string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateEmployeeTypePutResponseDataCity extends JsonObject {
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
export interface ProfileUpdateEmployeeTypePutResponseData extends JsonObject {
  "city": ProfileUpdateEmployeeTypePutResponseDataCity;
}
export interface ProfileUpdateEmployeeTypePutResponse extends ApiEnvelope<ProfileUpdateEmployeeTypePutResponseData> {
}

/** Backend request type: models::UpdateFreemiumLimit. */
export interface ProfileUpdateFreemiumPatchInput extends JsonObject {
  "freemium_session_limit": number;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateFreemiumPatchResponseDataCity extends JsonObject {
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
export interface ProfileUpdateFreemiumPatchResponseData extends JsonObject {
  "city": ProfileUpdateFreemiumPatchResponseDataCity;
}
export interface ProfileUpdateFreemiumPatchResponse extends ApiEnvelope<ProfileUpdateFreemiumPatchResponseData> {
}

/** Backend request type: models::UpdateFreemiumLimit. */
export interface ProfileUpdateFreemiumPutInput extends JsonObject {
  "freemium_session_limit": number;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateFreemiumPutResponseDataCity extends JsonObject {
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
export interface ProfileUpdateFreemiumPutResponseData extends JsonObject {
  "city": ProfileUpdateFreemiumPutResponseDataCity;
}
export interface ProfileUpdateFreemiumPutResponse extends ApiEnvelope<ProfileUpdateFreemiumPutResponseData> {
}

/** Backend response type: models::SingleData. */
export interface ProfileShowFullGetResponseDataCity extends JsonObject {
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
export interface ProfileShowFullGetResponseData extends JsonObject {
  "city": ProfileShowFullGetResponseDataCity;
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
export interface ProfileUpdateStatusPatchResponseDataCity extends JsonObject {
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
export interface ProfileUpdateStatusPatchResponseData extends JsonObject {
  "city": ProfileUpdateStatusPatchResponseDataCity;
}
export interface ProfileUpdateStatusPatchResponse extends ApiEnvelope<ProfileUpdateStatusPatchResponseData> {
}

/** Backend request type: models::UpdateStatus. */
export interface ProfileUpdateStatusPutInput extends JsonObject {
  "status": string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateStatusPutResponseDataCity extends JsonObject {
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
export interface ProfileUpdateStatusPutResponseData extends JsonObject {
  "city": ProfileUpdateStatusPutResponseDataCity;
}
export interface ProfileUpdateStatusPutResponse extends ApiEnvelope<ProfileUpdateStatusPutResponseData> {
}

/** Backend query type: models::ListQuery. */
export interface ProfileAccountantIndexGetQuery extends QueryParams {
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
export interface ProfileAccountantIndexGetResponseDataCities extends JsonObject {
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
export interface ProfileAccountantIndexGetResponseData extends JsonObject {
  "cities": ProfileAccountantIndexGetResponseDataCities[];
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
export interface ProfileCityGetPostResponseDataCities extends JsonObject {
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
export interface ProfileCityGetPostResponseData extends JsonObject {
  "cities": ProfileCityGetPostResponseDataCities[];
}
export interface ProfileCityGetPostResponse extends ApiEnvelope<ProfileCityGetPostResponseData> {
}

/** Backend query type: models::ListQuery. */
export interface ProfileConsultantIndexGetQuery extends QueryParams {
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
export interface ProfileConsultantIndexGetResponseDataCities extends JsonObject {
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
export interface ProfileConsultantIndexGetResponseData extends JsonObject {
  "cities": ProfileConsultantIndexGetResponseDataCities[];
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
export interface ProfileCountryGetPostResponseDataCities extends JsonObject {
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
export interface ProfileCountryGetPostResponseData extends JsonObject {
  "cities": ProfileCountryGetPostResponseDataCities[];
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
export interface ProfileBulkGetPostResponseDataCities extends JsonObject {
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
export interface ProfileBulkGetPostResponseData extends JsonObject {
  "cities": ProfileBulkGetPostResponseDataCities[];
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
export interface ProfileManagerIndexGetQuery extends QueryParams {
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
export interface ProfileManagerIndexGetResponseDataCities extends JsonObject {
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
export interface ProfileManagerIndexGetResponseData extends JsonObject {
  "cities": ProfileManagerIndexGetResponseDataCities[];
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
export interface ProfileOtherIndexGetQuery extends QueryParams {
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
export interface ProfileOtherIndexGetResponseDataCities extends JsonObject {
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
export interface ProfileOtherIndexGetResponseData extends JsonObject {
  "cities": ProfileOtherIndexGetResponseDataCities[];
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
export interface ProfileParentIndexGetQuery extends QueryParams {
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
export interface ProfileParentIndexGetResponseDataCities extends JsonObject {
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
export interface ProfileParentIndexGetResponseData extends JsonObject {
  "cities": ProfileParentIndexGetResponseDataCities[];
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

/** Backend request type: models::GeoBulkGetRequest. */
export interface ProfileProvinceGetPostInput extends JsonObject {
  "ids": string[];
  "user_ids"?: string[] | null;
}
/** Backend response type: models::ListData. */
export interface ProfileProvinceGetPostResponseDataCities extends JsonObject {
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
export interface ProfileProvinceGetPostResponseData extends JsonObject {
  "cities": ProfileProvinceGetPostResponseDataCities[];
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
export interface ProfileStudentIndexGetQuery extends QueryParams {
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
export interface ProfileStudentIndexGetResponseDataCities extends JsonObject {
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
export interface ProfileStudentIndexGetResponseData extends JsonObject {
  "cities": ProfileStudentIndexGetResponseDataCities[];
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
export interface ProfileSupportIndexGetQuery extends QueryParams {
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
export interface ProfileSupportIndexGetResponseDataCities extends JsonObject {
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
export interface ProfileSupportIndexGetResponseData extends JsonObject {
  "cities": ProfileSupportIndexGetResponseDataCities[];
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
export interface ProfileTeacherIndexGetQuery extends QueryParams {
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
export interface ProfileTeacherIndexGetResponseDataCities extends JsonObject {
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
export interface ProfileTeacherIndexGetResponseData extends JsonObject {
  "cities": ProfileTeacherIndexGetResponseDataCities[];
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

/** Backend request type: models::PersonalInformationUpdate. */
export interface ProfileUpdatePersonalPatchInput extends JsonObject {
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "birthday"?: string | null;
  "nationality"?: string | null;
  "religion"?: string | null;
  "gender"?: string | null;
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
export interface ProfileUpdatePersonalPatchResponseDataCity extends JsonObject {
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
export interface ProfileUpdatePersonalPatchResponseData extends JsonObject {
  "city": ProfileUpdatePersonalPatchResponseDataCity;
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
export interface ProfileUpdatePersonalPutResponseDataCity extends JsonObject {
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
export interface ProfileUpdatePersonalPutResponseData extends JsonObject {
  "city": ProfileUpdatePersonalPutResponseDataCity;
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
  "filter[province_id]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface ProvinceIndexGetResponseDataCities extends JsonObject {
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
  "cities": ProvinceIndexGetResponseDataCities[];
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
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface ProvinceStorePostResponseDataCity extends JsonObject {
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
  "city": ProvinceStorePostResponseDataCity;
}
export interface ProvinceStorePostResponse extends ApiEnvelope<ProvinceStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProvinceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface ProvinceShowGetResponseDataCity extends JsonObject {
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
  "city": ProvinceShowGetResponseDataCity;
}
export interface ProvinceShowGetResponse extends ApiEnvelope<ProvinceShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface ProvinceUpdatePatchInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface ProvinceUpdatePatchResponseDataCity extends JsonObject {
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
  "city": ProvinceUpdatePatchResponseDataCity;
}
export interface ProvinceUpdatePatchResponse extends ApiEnvelope<ProvinceUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface ProvinceUpdatePutInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface ProvinceUpdatePutResponseDataCity extends JsonObject {
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
  "city": ProvinceUpdatePutResponseDataCity;
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
export interface SettingIndexGetResponseDataCities extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "value": number;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface SettingIndexGetResponseData extends JsonObject {
  "cities": SettingIndexGetResponseDataCities[];
}
export interface SettingIndexGetResponse extends ApiEnvelope<SettingIndexGetResponseData> {
}

/** Backend request type: models::Create. */
export interface SettingStorePostInput extends JsonObject {
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface SettingStorePostResponseDataCity extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "value": number;
  "created_at": string;
  "updated_at"?: string | null;
}
export interface SettingStorePostResponseData extends JsonObject {
  "city": SettingStorePostResponseDataCity;
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
  "filter[name]"?: string | null;
  "filter[province_id]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface TrustedServiceIndexGetResponseDataCities extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceIndexGetResponseData extends JsonObject {
  "cities": TrustedServiceIndexGetResponseDataCities[];
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
  "province_id": string;
  "name": string;
  "latitude"?: number | null;
  "longitude"?: number | null;
}
/** Backend response type: models::SingleData. */
export interface TrustedServiceStorePostResponseDataCity extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceStorePostResponseData extends JsonObject {
  "city": TrustedServiceStorePostResponseDataCity;
}
export interface TrustedServiceStorePostResponse extends ApiEnvelope<TrustedServiceStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface TrustedServiceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface TrustedServiceShowGetResponseDataCity extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceShowGetResponseData extends JsonObject {
  "city": TrustedServiceShowGetResponseDataCity;
}
export interface TrustedServiceShowGetResponse extends ApiEnvelope<TrustedServiceShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface TrustedServiceUpdatePatchInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface TrustedServiceUpdatePatchResponseDataCity extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceUpdatePatchResponseData extends JsonObject {
  "city": TrustedServiceUpdatePatchResponseDataCity;
}
export interface TrustedServiceUpdatePatchResponse extends ApiEnvelope<TrustedServiceUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface TrustedServiceUpdatePutInput extends JsonObject {
  "province_id"?: string | null;
  "name"?: string | null;
  "latitude"?: number | null;
  "longitude"?: number | null;
  "status"?: string | null;
}
/** Backend response type: models::SingleData. */
export interface TrustedServiceUpdatePutResponseDataCity extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at"?: string | null;
  "deleted_at"?: string | null;
}
export interface TrustedServiceUpdatePutResponseData extends JsonObject {
  "city": TrustedServiceUpdatePutResponseDataCity;
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
