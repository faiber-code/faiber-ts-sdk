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
export interface SessionGetSelfGetResponseData extends JsonObject {
  "user_id": string;
  "roles": string[];
  "permissions": string[];
  "profile": BackendJson<"ProfileResponse">;
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
export interface CityIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface CityStorePostResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface CityStorePostResponse extends ApiEnvelope<CityStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CityDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface CityShowGetResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface CityUpdatePatchResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface CityUpdatePutResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface CountryIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface CountryStorePostResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface CountryStorePostResponse extends ApiEnvelope<CountryStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface CountryDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface CountryShowGetResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface CountryUpdatePatchResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface CountryUpdatePutResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
  "direct": BackendJson<"DirectIntegrationMeta">;
  "sdk": BackendJson<"SdkIntegrationSnippet">[];
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
export interface ProfileIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfilePropertyIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfilePropertyStorePostResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface ProfilePropertyStorePostResponse extends ApiEnvelope<ProfilePropertyStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProfilePropertyDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface ProfilePropertyShowGetResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface ProfilePropertyUpdatePatchResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface ProfilePropertyUpdatePutResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
  "city": BackendJson<"Response">;
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
export interface ProfileUpdatePatchResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface ProfileUpdatePatchResponse extends ApiEnvelope<ProfileUpdatePatchResponseData> {
}

/** Backend response type: models::SingleData. */
export interface ProfileShowAdminGetResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface ProfileUpdateEmployeeTypePatchResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface ProfileUpdateEmployeeTypePatchResponse extends ApiEnvelope<ProfileUpdateEmployeeTypePatchResponseData> {
}

/** Backend request type: models::UpdateEmployeeType. */
export interface ProfileUpdateEmployeeTypePutInput extends JsonObject {
  "employee_type": string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateEmployeeTypePutResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface ProfileUpdateEmployeeTypePutResponse extends ApiEnvelope<ProfileUpdateEmployeeTypePutResponseData> {
}

/** Backend request type: models::UpdateFreemiumLimit. */
export interface ProfileUpdateFreemiumPatchInput extends JsonObject {
  "freemium_session_limit": number;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateFreemiumPatchResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface ProfileUpdateFreemiumPatchResponse extends ApiEnvelope<ProfileUpdateFreemiumPatchResponseData> {
}

/** Backend request type: models::UpdateFreemiumLimit. */
export interface ProfileUpdateFreemiumPutInput extends JsonObject {
  "freemium_session_limit": number;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateFreemiumPutResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface ProfileUpdateFreemiumPutResponse extends ApiEnvelope<ProfileUpdateFreemiumPutResponseData> {
}

/** Backend response type: models::SingleData. */
export interface ProfileShowFullGetResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface ProfileUpdateStatusPatchResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface ProfileUpdateStatusPatchResponse extends ApiEnvelope<ProfileUpdateStatusPatchResponseData> {
}

/** Backend request type: models::UpdateStatus. */
export interface ProfileUpdateStatusPutInput extends JsonObject {
  "status": string;
}
/** Backend response type: models::SingleData. */
export interface ProfileUpdateStatusPutResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface ProfileAccountantIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfileCityGetPostResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfileConsultantIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfileCountryGetPostResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
  "cities": BackendJson<"Response">[];
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
export interface ProfileManagerIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfileOtherIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfileParentIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfileProvinceGetPostResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
}
export interface ProfileProvinceGetPostResponse extends ApiEnvelope<ProfileProvinceGetPostResponseData> {
}

/** Backend request type: crate::profile_search::models::SearchRequest. */
export interface ProfileSearchSearchPostInput extends JsonObject {
  "search"?: string | null;
  "filters"?: BackendJson<"FilterClause">[];
  "sort"?: BackendJson<"SortClause">[];
  "page"?: number | null;
  "per_page"?: number | null;
  "include"?: string[];
}
/** Backend response type: SearchData. */
export interface ProfileSearchSearchPostResponseData extends JsonObject {
  "results": BackendJson<"SearchHit">[];
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
export interface ProfileStudentIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfileSupportIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfileTeacherIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProfileUpdatePersonalPatchResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface ProfileUpdatePersonalPutResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface ProvinceIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface ProvinceStorePostResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface ProvinceStorePostResponse extends ApiEnvelope<ProvinceStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ProvinceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface ProvinceShowGetResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface ProvinceUpdatePatchResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface ProvinceUpdatePutResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
  "cities": BackendJson<"Response">[];
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
export interface SettingStorePostResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
  "filter[name]"?: string | null;
  "filter[province_id]"?: string | null;
  "filter[trashed]"?: string | null;
}
/** Backend response type: models::ListData. */
export interface TrustedServiceIndexGetResponseData extends JsonObject {
  "cities": BackendJson<"Response">[];
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
export interface TrustedServiceStorePostResponseData extends JsonObject {
  "city": BackendJson<"Response">;
}
export interface TrustedServiceStorePostResponse extends ApiEnvelope<TrustedServiceStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface TrustedServiceDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::SingleData. */
export interface TrustedServiceShowGetResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface TrustedServiceUpdatePatchResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface TrustedServiceUpdatePutResponseData extends JsonObject {
  "city": BackendJson<"Response">;
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
export interface TrustedServiceEventIndexGetResponseData extends JsonObject {
  "trusted_service_events": BackendJson<"EventResponse">[];
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
export interface TrustedServiceEventStorePostResponseData extends JsonObject {
  "trusted_service_event": BackendJson<"EventResponse">;
}
export interface TrustedServiceEventStorePostResponse extends ApiEnvelope<TrustedServiceEventStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface TrustedServiceEventDestroyDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: models::EventSingleData. */
export interface TrustedServiceEventShowGetResponseData extends JsonObject {
  "trusted_service_event": BackendJson<"EventResponse">;
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
export interface TrustedServiceEventUpdatePatchResponseData extends JsonObject {
  "trusted_service_event": BackendJson<"EventResponse">;
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
export interface TrustedServiceEventUpdatePutResponseData extends JsonObject {
  "trusted_service_event": BackendJson<"EventResponse">;
}
export interface TrustedServiceEventUpdatePutResponse extends ApiEnvelope<TrustedServiceEventUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface RouterHealthGetHealthResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export interface RouterHealthGetUpResponse extends ApiEnvelope<JsonValue> {
}

