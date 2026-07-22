import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: response without a declared JSON model. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: BulkAddressGet. */
export interface OptionAddressGetPostInput extends JsonObject {
}
/** Backend response type: Value. */
export interface OptionAddressGetPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: SessionResponse. */
export interface SessionGetSelfGetResponseData extends JsonObject {
  "user_id": string;
  "roles": string[];
  "permissions": string[];
}
export interface SessionGetSelfGetResponse extends ApiEnvelope<SessionGetSelfGetResponseData> {
}

/** Backend query type: models::ListQuery. */
export interface CityIndexGetQuery extends QueryParams {
  "page"?: string;
  "per_page"?: string;
  "filter[search]"?: string;
  "filter[status]"?: string;
  "filter[active]"?: string;
  "filter[name]"?: string;
  "filter[province_id]"?: string;
  "filter[trashed]"?: string;
}
/** Backend response type: models::ListData. */
export interface CityIndexGetResponseData extends JsonObject {
  "cities": JsonValue[];
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
  "latitude"?: number;
  "longitude"?: number;
}
/** Backend response type: models::SingleData. */
export interface CityStorePostResponseData extends JsonObject {
  "city": JsonValue;
}
export interface CityStorePostResponse extends ApiEnvelope<CityStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CityDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface CityShowGetResponseData extends JsonObject {
  "city": JsonValue;
}
export interface CityShowGetResponse extends ApiEnvelope<CityShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface CityUpdatePatchInput extends JsonObject {
  "province_id"?: string;
  "name"?: string;
  "latitude"?: number;
  "longitude"?: number;
  "status"?: string;
}
/** Backend response type: models::SingleData. */
export interface CityUpdatePatchResponseData extends JsonObject {
  "city": JsonValue;
}
export interface CityUpdatePatchResponse extends ApiEnvelope<CityUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface CityUpdatePutInput extends JsonObject {
  "province_id"?: string;
  "name"?: string;
  "latitude"?: number;
  "longitude"?: number;
  "status"?: string;
}
/** Backend response type: models::SingleData. */
export interface CityUpdatePutResponseData extends JsonObject {
  "city": JsonValue;
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
  "page"?: string;
  "per_page"?: string;
  "filter[search]"?: string;
  "filter[status]"?: string;
  "filter[active]"?: string;
  "filter[name]"?: string;
  "filter[trashed]"?: string;
}
/** Backend response type: models::ListData. */
export interface CountryIndexGetResponseData extends JsonObject {
  "countries": JsonValue[];
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
  "latitude"?: number;
  "longitude"?: number;
}
/** Backend response type: models::SingleData. */
export interface CountryStorePostResponseData extends JsonObject {
  "country": JsonValue;
}
export interface CountryStorePostResponse extends ApiEnvelope<CountryStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CountryDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface CountryShowGetResponseData extends JsonObject {
  "country": JsonValue;
}
export interface CountryShowGetResponse extends ApiEnvelope<CountryShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface CountryUpdatePatchInput extends JsonObject {
  "name"?: string;
  "status"?: string;
  "latitude"?: number;
  "longitude"?: number;
}
/** Backend response type: models::SingleData. */
export interface CountryUpdatePatchResponseData extends JsonObject {
  "country": JsonValue;
}
export interface CountryUpdatePatchResponse extends ApiEnvelope<CountryUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface CountryUpdatePutInput extends JsonObject {
  "name"?: string;
  "status"?: string;
  "latitude"?: number;
  "longitude"?: number;
}
/** Backend response type: models::SingleData. */
export interface CountryUpdatePutResponseData extends JsonObject {
  "country": JsonValue;
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
export interface IntegrationIntegrationDocsShowGetResponseData extends JsonObject {
  "direct": JsonValue;
  "sdk": JsonValue[];
}
export interface IntegrationIntegrationDocsShowGetResponse extends ApiEnvelope<IntegrationIntegrationDocsShowGetResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: LogActionCreate. */
export interface LogActionStorePostInput extends JsonObject {
}
/** Backend response type: Value. */
export interface LogActionStorePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: LogActionCreate. */
export interface LogActionStoreSlugPostInput extends JsonObject {
}
/** Backend response type: Value. */
export interface LogActionStoreSlugPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: LogActionCreate. */
export interface LogActionStoreDirectPostInput extends JsonObject {
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
}
/** Backend response type: Value. */
export interface OptionParentGetPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface ProfileIndexGetQuery extends QueryParams {
  "page"?: string;
  "per_page"?: string;
  "filter[search]"?: string;
  "filter[status]"?: string;
  "filter[active]"?: string;
  "filter[role]"?: string;
  "filter[trashed]"?: string;
}
/** Backend response type: models::ListData. */
export interface ProfileIndexGetResponseData extends JsonObject {
  "profiles": JsonValue[];
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
  "page"?: string;
  "per_page"?: string;
  "filter[search]"?: string;
  "filter[status]"?: string;
  "filter[active]"?: string;
  "filter[key]"?: string;
  "filter[title]"?: string;
  "filter[trashed]"?: string;
}
/** Backend response type: models::ListData. */
export interface ProfilePropertyIndexGetResponseData extends JsonObject {
  "profile_property_definitions": JsonValue[];
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
  "validator_config"?: JsonValue;
  "visible_in_list"?: boolean;
  "visible_in_get"?: boolean;
  "visible_in_full"?: boolean;
  "filterable"?: boolean;
  "index_value_kind"?: string;
  "sort_order"?: number;
}
/** Backend response type: models::SingleData. */
export interface ProfilePropertyStorePostResponseData extends JsonObject {
  "profile_property_definition": JsonValue;
}
export interface ProfilePropertyStorePostResponse extends ApiEnvelope<ProfilePropertyStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfilePropertyDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface ProfilePropertyShowGetResponseData extends JsonObject {
  "profile_property_definition": JsonValue;
}
export interface ProfilePropertyShowGetResponse extends ApiEnvelope<ProfilePropertyShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface ProfilePropertyUpdatePatchInput extends JsonObject {
  "key"?: string;
  "title"?: string;
  "validator_type"?: string;
  "validator_config"?: JsonValue;
  "visible_in_list"?: boolean;
  "visible_in_get"?: boolean;
  "visible_in_full"?: boolean;
  "filterable"?: boolean;
  "index_value_kind"?: string;
  "sort_order"?: number;
  "status"?: string;
}
/** Backend response type: models::SingleData. */
export interface ProfilePropertyUpdatePatchResponseData extends JsonObject {
  "profile_property_definition": JsonValue;
}
export interface ProfilePropertyUpdatePatchResponse extends ApiEnvelope<ProfilePropertyUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface ProfilePropertyUpdatePutInput extends JsonObject {
  "key"?: string;
  "title"?: string;
  "validator_type"?: string;
  "validator_config"?: JsonValue;
  "visible_in_list"?: boolean;
  "visible_in_get"?: boolean;
  "visible_in_full"?: boolean;
  "filterable"?: boolean;
  "index_value_kind"?: string;
  "sort_order"?: number;
  "status"?: string;
}
/** Backend response type: models::SingleData. */
export interface ProfilePropertyUpdatePutResponseData extends JsonObject {
  "profile_property_definition": JsonValue;
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
export interface ProfileShowGetResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileShowGetResponse extends ApiEnvelope<ProfileShowGetResponseData> {
}

/** Backend request type: models::ProfilePatch. */
export interface ProfileUpdatePatchInput extends JsonObject {
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "national_number"?: string | null;
  "first_name"?: JsonValue;
  "last_name"?: JsonValue;
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
  "status"?: string;
  "employee_type"?: string | null;
  "freemium_session_limit"?: number | null;
  "meta"?: JsonValue;
  "app"?: JsonValue;
  "properties"?: Record<string, JsonValue>;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdatePatchResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileUpdatePatchResponse extends ApiEnvelope<ProfileUpdatePatchResponseData> {
}

/** Backend response type: models::SingleData. */
export interface ProfileShowAdminGetResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileShowAdminGetResponse extends ApiEnvelope<ProfileShowAdminGetResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfileAvatarDeleteDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: multipart/form-data. */
export interface ProfileAvatarStorePostInput extends JsonObject {
}
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
export interface ProfileUpdateEmployeeTypePatchResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileUpdateEmployeeTypePatchResponse extends ApiEnvelope<ProfileUpdateEmployeeTypePatchResponseData> {
}

/** Backend request type: models::UpdateEmployeeType. */
export interface ProfileUpdateEmployeeTypePutInput extends JsonObject {
  "employee_type": string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateEmployeeTypePutResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileUpdateEmployeeTypePutResponse extends ApiEnvelope<ProfileUpdateEmployeeTypePutResponseData> {
}

/** Backend request type: models::UpdateFreemiumLimit. */
export interface ProfileUpdateFreemiumPatchInput extends JsonObject {
  "freemium_session_limit": number;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateFreemiumPatchResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileUpdateFreemiumPatchResponse extends ApiEnvelope<ProfileUpdateFreemiumPatchResponseData> {
}

/** Backend request type: models::UpdateFreemiumLimit. */
export interface ProfileUpdateFreemiumPutInput extends JsonObject {
  "freemium_session_limit": number;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateFreemiumPutResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileUpdateFreemiumPutResponse extends ApiEnvelope<ProfileUpdateFreemiumPutResponseData> {
}

/** Backend response type: models::SingleData. */
export interface ProfileShowFullGetResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileShowFullGetResponse extends ApiEnvelope<ProfileShowFullGetResponseData> {
}

/** Backend query type: MediaQuery. */
export interface ProfileMediaShowGetQuery extends QueryParams {
}
/** Backend response type: response without a declared JSON model. */
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
export interface ProfileUpdateStatusPatchResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileUpdateStatusPatchResponse extends ApiEnvelope<ProfileUpdateStatusPatchResponseData> {
}

/** Backend request type: models::UpdateStatus. */
export interface ProfileUpdateStatusPutInput extends JsonObject {
  "status": string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateStatusPutResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileUpdateStatusPutResponse extends ApiEnvelope<ProfileUpdateStatusPutResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface ProfileAccountantIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::AddressRequest. */
export interface ProfileAddAddressPatchInput extends JsonObject {
  "title": string;
  "country"?: string;
  "province"?: string;
  "city"?: string;
  "postal_code"?: string;
  "plate"?: string;
  "detail"?: string;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddAddressPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::AddressRequest. */
export interface ProfileAddAddressPutInput extends JsonObject {
  "title": string;
  "country"?: string;
  "province"?: string;
  "city"?: string;
  "postal_code"?: string;
  "plate"?: string;
  "detail"?: string;
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
  "parent_type"?: string;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddParentPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::ParentLinkRequest. */
export interface ProfileAddParentPutInput extends JsonObject {
  "user_id": string;
  "parent_type"?: string;
}
/** Backend response type: serde_json::Value. */
export interface ProfileAddParentPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::GeoBulkGetRequest. */
export interface ProfileCityGetPostInput extends JsonObject {
  "ids": string[];
  "user_ids"?: string[];
}
/** Backend response type: models::ListData. */
export interface ProfileCityGetPostResponseData extends JsonObject {
  "profiles": JsonValue[];
}
export interface ProfileCityGetPostResponse extends ApiEnvelope<ProfileCityGetPostResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface ProfileConsultantIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::GeoBulkGetRequest. */
export interface ProfileCountryGetPostInput extends JsonObject {
  "ids": string[];
  "user_ids"?: string[];
}
/** Backend response type: models::ListData. */
export interface ProfileCountryGetPostResponseData extends JsonObject {
  "profiles": JsonValue[];
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
export interface ProfileBulkGetPostResponseData extends JsonObject {
  "profiles": JsonValue[];
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

/** Backend response type: response without a declared JSON model. */
export interface ProfileManagerIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ProfileOtherIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ProfileParentIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: models::GeoBulkGetRequest. */
export interface ProfileProvinceGetPostInput extends JsonObject {
  "ids": string[];
  "user_ids"?: string[];
}
/** Backend response type: models::ListData. */
export interface ProfileProvinceGetPostResponseData extends JsonObject {
  "profiles": JsonValue[];
}
export interface ProfileProvinceGetPostResponse extends ApiEnvelope<ProfileProvinceGetPostResponseData> {
}

/** Backend request type: crate::profile_search::models::SearchRequest. */
export interface ProfileSearchSearchPostInput extends JsonObject {
  "search"?: string;
  "filters": JsonValue[];
  "sort": JsonValue[];
  "page"?: number;
  "per_page"?: number;
  "include": string[];
}
/** Backend response type: SearchData. */
export interface ProfileSearchSearchPostResponseData extends JsonObject {
  "results": JsonValue[];
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

/** Backend response type: response without a declared JSON model. */
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

/** Backend response type: response without a declared JSON model. */
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

/** Backend response type: response without a declared JSON model. */
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
  "first_name"?: JsonValue;
  "last_name"?: JsonValue;
  "birthday"?: string;
  "nationality"?: string;
  "religion"?: string;
  "gender"?: string;
  "marital"?: string;
  "nickname"?: string;
  "national_number"?: string;
  "description"?: string;
  "referral_source"?: string;
  "referrer_uuid"?: string;
  "country_id"?: string;
  "province_id"?: string;
  "city_id"?: string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdatePersonalPatchResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileUpdatePersonalPatchResponse extends ApiEnvelope<ProfileUpdatePersonalPatchResponseData> {
}

/** Backend request type: models::PersonalInformationUpdate. */
export interface ProfileUpdatePersonalPutInput extends JsonObject {
  "first_name"?: JsonValue;
  "last_name"?: JsonValue;
  "birthday"?: string;
  "nationality"?: string;
  "religion"?: string;
  "gender"?: string;
  "marital"?: string;
  "nickname"?: string;
  "national_number"?: string;
  "description"?: string;
  "referral_source"?: string;
  "referrer_uuid"?: string;
  "country_id"?: string;
  "province_id"?: string;
  "city_id"?: string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdatePersonalPutResponseData extends JsonObject {
  "profile": JsonValue;
}
export interface ProfileUpdatePersonalPutResponse extends ApiEnvelope<ProfileUpdatePersonalPutResponseData> {
}

/** Backend query type: models::ListQuery. */
export interface ProvinceIndexGetQuery extends QueryParams {
  "page"?: string;
  "per_page"?: string;
  "filter[search]"?: string;
  "filter[status]"?: string;
  "filter[active]"?: string;
  "filter[name]"?: string;
  "filter[country_id]"?: string;
  "filter[trashed]"?: string;
}
/** Backend response type: models::ListData. */
export interface ProvinceIndexGetResponseData extends JsonObject {
  "provinces": JsonValue[];
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
  "latitude"?: number;
  "longitude"?: number;
}
/** Backend response type: models::SingleData. */
export interface ProvinceStorePostResponseData extends JsonObject {
  "province": JsonValue;
}
export interface ProvinceStorePostResponse extends ApiEnvelope<ProvinceStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProvinceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface ProvinceShowGetResponseData extends JsonObject {
  "province": JsonValue;
}
export interface ProvinceShowGetResponse extends ApiEnvelope<ProvinceShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface ProvinceUpdatePatchInput extends JsonObject {
  "country_id"?: string;
  "name"?: string;
  "status"?: string;
  "latitude"?: number;
  "longitude"?: number;
}
/** Backend response type: models::SingleData. */
export interface ProvinceUpdatePatchResponseData extends JsonObject {
  "province": JsonValue;
}
export interface ProvinceUpdatePatchResponse extends ApiEnvelope<ProvinceUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface ProvinceUpdatePutInput extends JsonObject {
  "country_id"?: string;
  "name"?: string;
  "status"?: string;
  "latitude"?: number;
  "longitude"?: number;
}
/** Backend response type: models::SingleData. */
export interface ProvinceUpdatePutResponseData extends JsonObject {
  "province": JsonValue;
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
export interface SettingIndexGetResponseData extends JsonObject {
  "setting": JsonValue[];
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
export interface SettingStorePostResponseData extends JsonObject {
  "setting": JsonValue;
}
export interface SettingStorePostResponse extends ApiEnvelope<SettingStorePostResponseData> {
}

/** Backend response type: Value. */
export interface SurveyIndexGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateSurvey. */
export interface SurveyStorePostInput extends JsonObject {
}
/** Backend response type: Value. */
export interface SurveyStorePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: models::ListQuery. */
export interface TrustedServiceIndexGetQuery extends QueryParams {
  "page"?: string;
  "per_page"?: string;
  "filter[search]"?: string;
  "filter[status]"?: string;
  "filter[active]"?: string;
  "filter[service_key]"?: string;
  "filter[title]"?: string;
  "filter[trashed]"?: string;
}
/** Backend response type: models::ListData. */
export interface TrustedServiceIndexGetResponseData extends JsonObject {
  "trusted_services": JsonValue[];
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
export interface TrustedServiceStorePostResponseData extends JsonObject {
  "trusted_service": JsonValue;
}
export interface TrustedServiceStorePostResponse extends ApiEnvelope<TrustedServiceStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface TrustedServiceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface TrustedServiceShowGetResponseData extends JsonObject {
  "trusted_service": JsonValue;
}
export interface TrustedServiceShowGetResponse extends ApiEnvelope<TrustedServiceShowGetResponseData> {
}

/** Backend request type: models::Update. */
export interface TrustedServiceUpdatePatchInput extends JsonObject {
  "service_key"?: string;
  "title"?: string;
  "status"?: string;
}
/** Backend response type: models::SingleData. */
export interface TrustedServiceUpdatePatchResponseData extends JsonObject {
  "trusted_service": JsonValue;
}
export interface TrustedServiceUpdatePatchResponse extends ApiEnvelope<TrustedServiceUpdatePatchResponseData> {
}

/** Backend request type: models::Update. */
export interface TrustedServiceUpdatePutInput extends JsonObject {
  "service_key"?: string;
  "title"?: string;
  "status"?: string;
}
/** Backend response type: models::SingleData. */
export interface TrustedServiceUpdatePutResponseData extends JsonObject {
  "trusted_service": JsonValue;
}
export interface TrustedServiceUpdatePutResponse extends ApiEnvelope<TrustedServiceUpdatePutResponseData> {
}

/** Backend query type: models::EventListQuery. */
export interface TrustedServiceEventIndexGetQuery extends QueryParams {
  "page"?: string;
  "per_page"?: string;
  "filter[search]"?: string;
  "filter[status]"?: string;
  "filter[active]"?: string;
  "filter[event_name]"?: string;
  "filter[title]"?: string;
  "filter[trashed]"?: string;
}
/** Backend response type: models::EventListData. */
export interface TrustedServiceEventIndexGetResponseData extends JsonObject {
  "trusted_service_events": JsonValue[];
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
  "visible_in_list"?: boolean;
  "visible_in_get"?: boolean;
  "visible_in_full"?: boolean;
  "payload_schema"?: JsonValue;
}
/** Backend response type: models::EventSingleData. */
export interface TrustedServiceEventStorePostResponseData extends JsonObject {
  "trusted_service_event": JsonValue;
}
export interface TrustedServiceEventStorePostResponse extends ApiEnvelope<TrustedServiceEventStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface TrustedServiceEventDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::EventSingleData. */
export interface TrustedServiceEventShowGetResponseData extends JsonObject {
  "trusted_service_event": JsonValue;
}
export interface TrustedServiceEventShowGetResponse extends ApiEnvelope<TrustedServiceEventShowGetResponseData> {
}

/** Backend request type: models::EventUpdate. */
export interface TrustedServiceEventUpdatePatchInput extends JsonObject {
  "event_name"?: string;
  "title"?: string;
  "visible_in_list"?: boolean;
  "visible_in_get"?: boolean;
  "visible_in_full"?: boolean;
  "payload_schema"?: JsonValue;
}
/** Backend response type: models::EventSingleData. */
export interface TrustedServiceEventUpdatePatchResponseData extends JsonObject {
  "trusted_service_event": JsonValue;
}
export interface TrustedServiceEventUpdatePatchResponse extends ApiEnvelope<TrustedServiceEventUpdatePatchResponseData> {
}

/** Backend request type: models::EventUpdate. */
export interface TrustedServiceEventUpdatePutInput extends JsonObject {
  "event_name"?: string;
  "title"?: string;
  "visible_in_list"?: boolean;
  "visible_in_get"?: boolean;
  "visible_in_full"?: boolean;
  "payload_schema"?: JsonValue;
}
/** Backend response type: models::EventSingleData. */
export interface TrustedServiceEventUpdatePutResponseData extends JsonObject {
  "trusted_service_event": JsonValue;
}
export interface TrustedServiceEventUpdatePutResponse extends ApiEnvelope<TrustedServiceEventUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface RouterHealthGetHealthResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface RouterHealthGetUpResponse extends ApiEnvelope<JsonValue> {
}

