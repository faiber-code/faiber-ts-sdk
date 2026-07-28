import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: handler-defined response. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: BulkAddressGet. */
export interface OptionAddressGetPostInput extends JsonObject {
  "user_ids": string[];
}
/** Backend response type: Value. */
export interface OptionAddressGetPostResponse extends ApiEnvelope<JsonValue> {
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
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
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
  "filter[role]"?: string | null;
  "filter[trashed]"?: string | null;
}
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
export interface ProfileIndexGetResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileIndexGetResponseDataProfiles extends JsonObject {
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
  "roles": ProfileIndexGetResponseDataProfilesRoles[];
  "credential"?: ProfileIndexGetResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
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
  "visible_in_list"?: boolean | null;
  "visible_in_get"?: boolean | null;
  "visible_in_full"?: boolean | null;
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
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
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
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
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
  "visible_in_list"?: boolean | null;
  "visible_in_get"?: boolean | null;
  "visible_in_full"?: boolean | null;
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
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
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
  "visible_in_list"?: boolean | null;
  "visible_in_get"?: boolean | null;
  "visible_in_full"?: boolean | null;
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
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
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
export interface ProfileShowGetResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileShowGetResponseDataProfile extends JsonObject {
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
  "roles": ProfileShowGetResponseDataProfileRoles[];
  "credential"?: ProfileShowGetResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface ProfileUpdatePatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdatePatchResponseDataProfile extends JsonObject {
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
  "roles": ProfileUpdatePatchResponseDataProfileRoles[];
  "credential"?: ProfileUpdatePatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface ProfileShowAdminGetResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileShowAdminGetResponseDataProfile extends JsonObject {
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
  "roles": ProfileShowAdminGetResponseDataProfileRoles[];
  "credential"?: ProfileShowAdminGetResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface ProfileAvatarShowGetQuery extends QueryParams {
  "key": string;
}
/** Backend response type: handler-defined response. */
export interface ProfileAvatarShowGetResponse extends ApiEnvelope<JsonValue> {
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
export interface ProfileUpdateEmployeeTypePatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateEmployeeTypePatchResponseDataProfile extends JsonObject {
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
  "roles": ProfileUpdateEmployeeTypePatchResponseDataProfileRoles[];
  "credential"?: ProfileUpdateEmployeeTypePatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface ProfileUpdateEmployeeTypePutResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateEmployeeTypePutResponseDataProfile extends JsonObject {
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
  "roles": ProfileUpdateEmployeeTypePutResponseDataProfileRoles[];
  "credential"?: ProfileUpdateEmployeeTypePutResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface ProfileUpdateFreemiumPatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateFreemiumPatchResponseDataProfile extends JsonObject {
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
  "roles": ProfileUpdateFreemiumPatchResponseDataProfileRoles[];
  "credential"?: ProfileUpdateFreemiumPatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface ProfileUpdateFreemiumPutResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateFreemiumPutResponseDataProfile extends JsonObject {
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
  "roles": ProfileUpdateFreemiumPutResponseDataProfileRoles[];
  "credential"?: ProfileUpdateFreemiumPutResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface ProfileShowFullGetResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileShowFullGetResponseDataProfile extends JsonObject {
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
  "roles": ProfileShowFullGetResponseDataProfileRoles[];
  "credential"?: ProfileShowFullGetResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
/** Backend response type: handler-defined response. */
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
export interface ProfileUpdateStatusPatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateStatusPatchResponseDataProfile extends JsonObject {
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
  "roles": ProfileUpdateStatusPatchResponseDataProfileRoles[];
  "credential"?: ProfileUpdateStatusPatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface ProfileUpdateStatusPutResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdateStatusPutResponseDataProfile extends JsonObject {
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
  "roles": ProfileUpdateStatusPutResponseDataProfileRoles[];
  "credential"?: ProfileUpdateStatusPutResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
  "parent"?: ProfileUpdateStatusPutResponseDataProfileParent[] | null;
}
export interface ProfileUpdateStatusPutResponseData extends JsonObject {
  "profile": ProfileUpdateStatusPutResponseDataProfile;
}
export interface ProfileUpdateStatusPutResponse extends ApiEnvelope<ProfileUpdateStatusPutResponseData> {
}

/** Backend response type: handler-defined response. */
export interface ProfileAccountantIndexGetResponse extends ApiEnvelope<JsonValue> {
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
export interface ProfileCityGetPostResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileCityGetPostResponseDataProfiles extends JsonObject {
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
  "roles": ProfileCityGetPostResponseDataProfilesRoles[];
  "credential"?: ProfileCityGetPostResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
  "parent"?: ProfileCityGetPostResponseDataProfilesParent[] | null;
}
export interface ProfileCityGetPostResponseData extends JsonObject {
  "profiles": ProfileCityGetPostResponseDataProfiles[];
}
export interface ProfileCityGetPostResponse extends ApiEnvelope<ProfileCityGetPostResponseData> {
}

/** Backend response type: handler-defined response. */
export interface ProfileConsultantIndexGetResponse extends ApiEnvelope<JsonValue> {
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
export interface ProfileCountryGetPostResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileCountryGetPostResponseDataProfiles extends JsonObject {
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
  "roles": ProfileCountryGetPostResponseDataProfilesRoles[];
  "credential"?: ProfileCountryGetPostResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface ProfileBulkGetPostResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileBulkGetPostResponseDataProfiles extends JsonObject {
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
  "roles": ProfileBulkGetPostResponseDataProfilesRoles[];
  "credential"?: ProfileBulkGetPostResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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

/** Backend response type: handler-defined response. */
export interface ProfileManagerIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface ProfileOtherIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface ProfileParentIndexGetResponse extends ApiEnvelope<JsonValue> {
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
export interface ProfileProvinceGetPostResponseDataProfilesParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileProvinceGetPostResponseDataProfiles extends JsonObject {
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
  "roles": ProfileProvinceGetPostResponseDataProfilesRoles[];
  "credential"?: ProfileProvinceGetPostResponseDataProfilesCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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

/** Backend response type: handler-defined response. */
export interface ProfileStudentIndexGetResponse extends ApiEnvelope<JsonValue> {
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

/** Backend response type: handler-defined response. */
export interface ProfileSupportIndexGetResponse extends ApiEnvelope<JsonValue> {
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

/** Backend response type: handler-defined response. */
export interface ProfileTeacherIndexGetResponse extends ApiEnvelope<JsonValue> {
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
export interface ProfileUpdatePersonalPatchResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdatePersonalPatchResponseDataProfile extends JsonObject {
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
  "roles": ProfileUpdatePersonalPatchResponseDataProfileRoles[];
  "credential"?: ProfileUpdatePersonalPatchResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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
export interface ProfileUpdatePersonalPutResponseDataProfileParent extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
export interface ProfileUpdatePersonalPutResponseDataProfile extends JsonObject {
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
  "roles": ProfileUpdatePersonalPutResponseDataProfileRoles[];
  "credential"?: ProfileUpdatePersonalPutResponseDataProfileCredential | null;
  "meta"?: JsonValue | null;
  "app"?: JsonValue | null;
  "assessment"?: JsonValue | null;
  "properties"?: JsonValue | null;
  "services"?: JsonValue | null;
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

