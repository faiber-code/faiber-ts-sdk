import type { ProfileListQuery as importProfileListQuery } from "./types.js";
import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export type RouterOpenapiJsonGetResponse = import("@faiber/sdk-core").ServiceOpenApiDocument;

/** Backend request type: BulkAddressGet. */
export interface OptionAddressGetPostInput extends JsonObject {
  "user_ids": string[];
}
/** Backend response type: Value. */
export type OptionAddressGetPostResponse = ApiEnvelope<import("./wire.types.js").StoredProfileAddress[]>;

/** Backend response type: Vec<Value>. */
export type AiSummaryConfigurationsGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryConfigurationRecord[]>;

/** Backend request type: ConfigurationWrite. */
export type AiSummaryConfigurationCreatePostInput = import("./summaries.types.js").SummaryConfigurationWrite;
/** Backend response type: Value. */
export type AiSummaryConfigurationCreatePostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryConfigurationRecord>;

/** Backend response type: Value. */
export type AiSummaryConfigurationGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryConfigurationRecord>;

/** Backend request type: ConfigurationWrite. */
export type AiSummaryConfigurationPutInput = import("./summaries.types.js").SummaryConfigurationUpdate;
/** Backend response type: Value. */
export type AiSummaryConfigurationPutResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryConfigurationRecord>;

/** Backend request type: PreviewWrite. */
export type AiSummaryPreviewPostInput = import("./summaries.types.js").SummaryPreviewWrite;
/** Backend response type: Value. */
export type AiSummaryPreviewPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryPreviewResponse>;

/** Backend response type: Value. */
export type AiSummaryPublishPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryConfigurationRecord>;

/** Backend request type: StatusWrite. */
export type AiSummaryStatusPatchInput = import("./summaries.types.js").SummaryStatusWrite;
/** Backend response type: Value. */
export type AiSummaryStatusPatchResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryConfigurationRecord>;

/** Backend response type: Value. */
export type AiSummaryValidatePostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryValidation>;

/** Backend query type: ListQuery. */
export type AiSummaryJobsGetQuery = import("./summaries.types.js").SummaryListQuery;
/** Backend response type: Page. */
export type AiSummaryJobsGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryPage<import("./summaries.types.js").SummaryJob>>;

/** Backend response type: Value. */
export type AiSummaryRetryPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryRetryResponse>;

/** Backend query type: ListQuery. */
export type AiSummaryLatestGetQuery = import("./summaries.types.js").SummaryLatestQuery;
/** Backend response type: Value. */
export type AiSummaryLatestGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryLatest>;

/** Backend response type: Vec<Value>. */
export type AiSummaryModelsGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryModel[]>;

/** Backend request type: RefreshWrite. */
export type AiSummaryRefreshPostInput = import("./summaries.types.js").SummaryRefreshWrite;
/** Backend response type: Value. */
export type AiSummaryRefreshPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryRefreshResponse>;

/** Backend response type: Vec<Value>. */
export type AiSummaryRolesGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryRole[]>;

/** Backend response type: Value. */
export type AiSummaryRunGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryRun>;

/** Backend response type: Settings. */
export type AiSummarySettingsGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummarySettings>;

/** Backend request type: Settings. */
export type AiSummarySettingsPutInput = import("./summaries.types.js").SummarySettings;
/** Backend response type: Settings. */
export type AiSummarySettingsPutResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummarySettings>;

/** Backend response type: Vec<Value>. */
export type AiSummarySourcesGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryCapability[]>;

/** Backend response type: Value. */
export type AiSummarySourceCheckPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummarySourceCheck>;

/** Backend query type: ListQuery. */
export type AiSummarySummariesGetQuery = import("./summaries.types.js").SummaryListQuery;
/** Backend response type: Page. */
export type AiSummarySummariesGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./summaries.types.js").SummaryPage<import("./summaries.types.js").SummaryRun>>;

/** Backend response type: profile_methods::ChatContext. */
export type SessionGetChatContextGetResponse = ApiEnvelope<import("./wire.types.js").ProfileChatContext>;

/** Backend response type: SessionResponse. */
export type SessionGetSelfGetResponse = ApiEnvelope<import("./wire.types.js").ProfileSession>;

/** Backend request type: SelfName. */
export interface SessionUpdateSelfNamePatchInput extends JsonObject {
  "first_name": string;
  "last_name": string;
  "locale": string;
}
/** Backend response type: SessionResponse. */
export type SessionUpdateSelfNamePatchResponse = ApiEnvelope<import("./wire.types.js").ProfileSession>;

/** Backend request type: OnboardingInput. */
export interface SessionCompleteOnboardingPutInput extends JsonObject {
  "age": number;
  "height": number;
  "weight": number;
  "goal": string;
}
/** Backend response type: SessionResponse. */
export type SessionCompleteOnboardingPutResponse = ApiEnvelope<import("./wire.types.js").ProfileSession>;

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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface CityStorePostResponseData extends JsonObject {
  "city": CityStorePostResponseDataCity;
}
export interface CityStorePostResponse extends ApiEnvelope<CityStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export type CityDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: models::SingleData. */
export interface CityShowGetResponseDataCity extends JsonObject {
  "id": string;
  "province_id": string;
  "name": string;
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface CityUpdatePutResponseData extends JsonObject {
  "city": CityUpdatePutResponseDataCity;
}
export interface CityUpdatePutResponse extends ApiEnvelope<CityUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export type CityForceDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: serde_json::Value. */
export type CityRestoreGetResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface CountryStorePostResponseData extends JsonObject {
  "country": CountryStorePostResponseDataCountry;
}
export interface CountryStorePostResponse extends ApiEnvelope<CountryStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export type CountryDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: models::SingleData. */
export interface CountryShowGetResponseDataCountry extends JsonObject {
  "id": string;
  "name": string;
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface CountryUpdatePutResponseData extends JsonObject {
  "country": CountryUpdatePutResponseDataCountry;
}
export interface CountryUpdatePutResponse extends ApiEnvelope<CountryUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export type CountryForceDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: serde_json::Value. */
export type CountryRestoreGetResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend query type: models::ListQuery. */
export interface CustomTypeIndexGetQuery extends QueryParams {
  "page"?: string | null;
  "per_page"?: string | null;
  "filter[search]"?: string | null;
  "filter[status]"?: string | null;
  "filter[active]"?: string | null;
}
/** Backend response type: models::ListData. */
export type CustomTypeIndexGetResponse = import("./wire.types.js").ProfileCustomTypePage;

/** Backend request type: models::Create. */
export type CustomTypeStorePostInput = import("./types.js").CreateCustomTypeInput;
/** Backend response type: models::SingleData. */
export type CustomTypeStorePostResponse = ApiEnvelope<import("./wire.types.js").ProfileCustomTypeData>;

/** Backend response type: serde_json::Value. */
export type CustomTypeDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: models::SingleData. */
export type CustomTypeShowGetResponse = ApiEnvelope<import("./wire.types.js").ProfileCustomTypeData>;

/** Backend request type: models::Update. */
export type CustomTypeUpdatePatchInput = import("./types.js").UpdateCustomTypeInput;
/** Backend response type: models::SingleData. */
export type CustomTypeUpdatePatchResponse = ApiEnvelope<import("./wire.types.js").ProfileCustomTypeData>;

/** Backend response type: Value. */
export type OptionDependencyGetResponse = ApiEnvelope<import("./wire.types.js").ProfileDependencies>;

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
export type OptionIdentityGetResponse = ApiEnvelope<import("./types.js").Profile>;

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
export type IntegrationFlowIntegrationShowGetResponse = ApiEnvelope<import("./wire.types.js").ProfileFlowIntegration>;

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
export type LogActionStorePostResponse = ApiEnvelope<import("./wire.types.js").ProfileLogAction>;

/** Backend request type: LogActionCreate. */
export interface LogActionStoreSlugPostInput extends JsonObject {
  "action": string;
  "meta"?: JsonValue | null;
}
/** Backend response type: Value. */
export type LogActionStoreSlugPostResponse = ApiEnvelope<import("./wire.types.js").ProfileLogAction>;

/** Backend request type: LogActionCreate. */
export interface LogActionStoreDirectPostInput extends JsonObject {
  "action": string;
  "meta"?: JsonValue | null;
}
/** Backend response type: Value. */
export type LogActionStoreDirectPostResponse = ApiEnvelope<import("./wire.types.js").ProfileLogAction>;

/** Backend response type: Value. */
export type LoggerIndexGetResponse = ApiEnvelope<import("./wire.types.js").ProfileLog[]>;

/** Backend response type: Value. */
export type LoggerShowGetResponse = ApiEnvelope<import("./wire.types.js").ProfileLog | null>;

/** Backend request type: BulkParentGet. */
export interface OptionParentChildrenGetPostInput extends JsonObject {
  "user_ids": string[];
}
/** Backend response type: Value. */
export type OptionParentChildrenGetPostResponse = ApiEnvelope<import("./wire.types.js").StoredParentLink[]>;

/** Backend request type: BulkParentGet. */
export interface OptionParentGetPostInput extends JsonObject {
  "user_ids": string[];
}
/** Backend response type: Value. */
export type OptionParentGetPostResponse = ApiEnvelope<import("./wire.types.js").StoredParentLink[]>;

/** Backend query type: models::ListQuery. */
export interface ProfileIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export type ProfileIndexGetResponse = import("./types.js").ProfileListResponse;

/** Backend query type: MediaQuery. */
export interface ProfileAvatarShowGetApiV1ProfileMediaUuidAvatarQuery extends QueryParams {
  "key": string;
}
/** Backend response type: raw-response. */
export type ProfileAvatarShowGetApiV1ProfileMediaUuidAvatarResponse = ArrayBuffer | Uint8Array;

/** Backend query type: MediaQuery. */
export interface ProfileImageShowGetQuery extends QueryParams {
  "key": string;
}
/** Backend response type: raw-response. */
export type ProfileImageShowGetResponse = ArrayBuffer | Uint8Array;

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
  "validator_config": JsonValue | null;
  "custom_type_id": string | null;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "visible_in_chat": boolean;
  "filterable": boolean;
  "index_value_kind": string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "validator_config": JsonValue | null;
  "custom_type_id": string | null;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "visible_in_chat": boolean;
  "filterable": boolean;
  "index_value_kind": string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface ProfilePropertyStorePostResponseData extends JsonObject {
  "profile_property_definition": ProfilePropertyStorePostResponseDataProfilePropertyDefinition;
}
export interface ProfilePropertyStorePostResponse extends ApiEnvelope<ProfilePropertyStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export type ProfilePropertyDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: models::SingleData. */
export interface ProfilePropertyShowGetResponseDataProfilePropertyDefinition extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "validator_type": string;
  "validator_config": JsonValue | null;
  "custom_type_id": string | null;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "visible_in_chat": boolean;
  "filterable": boolean;
  "index_value_kind": string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "validator_config": JsonValue | null;
  "custom_type_id": string | null;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "visible_in_chat": boolean;
  "filterable": boolean;
  "index_value_kind": string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "validator_config": JsonValue | null;
  "custom_type_id": string | null;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "visible_in_chat": boolean;
  "filterable": boolean;
  "index_value_kind": string | null;
  "sort_order": number;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface ProfilePropertyUpdatePutResponseData extends JsonObject {
  "profile_property_definition": ProfilePropertyUpdatePutResponseDataProfilePropertyDefinition;
}
export interface ProfilePropertyUpdatePutResponse extends ApiEnvelope<ProfilePropertyUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export type ProfilePropertyForceDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: serde_json::Value. */
export type ProfilePropertyRestoreGetResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: entity::profile::Model. */
export interface ReferralShowProfileReferralGetResponseData extends JsonObject {
  "id": string;
  "user_id": string;
  "email": string | null;
  "phone": string | null;
  "national_code": string | null;
  "national_number": string | null;
  "first_name_fa": string | null;
  "first_name_en": string | null;
  "last_name_fa": string | null;
  "last_name_en": string | null;
  "birthday": string | null;
  "nationality": string | null;
  "religion": string | null;
  "gender": string | null;
  "job": string | null;
  "attendance_mode": string | null;
  "level": string | null;
  "education_id": string | null;
  "referral_source": string | null;
  "referrer_uuid": string | null;
  "referral_source_id": string | null;
  "referrer_profile_id": string | null;
  "description": string | null;
  "marital": string | null;
  "nickname": string | null;
  "country_id": string | null;
  "province_id": string | null;
  "city_id": string | null;
  "status": string;
  "employee_type": string | null;
  "freemium_session_limit": number | null;
  "avatar": string | null;
  "has_active_enrollment": boolean;
  "red_gem": number | null;
  "blue_gem": number | null;
  "green_gem": number | null;
  "account_balance": number | null;
  "wallet_balance": number | null;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "email": string | null;
  "phone": string | null;
  "national_code": string | null;
  "national_number": string | null;
  "first_name_fa": string | null;
  "first_name_en": string | null;
  "last_name_fa": string | null;
  "last_name_en": string | null;
  "birthday": string | null;
  "nationality": string | null;
  "religion": string | null;
  "gender": string | null;
  "job": string | null;
  "attendance_mode": string | null;
  "level": string | null;
  "education_id": string | null;
  "referral_source": string | null;
  "referrer_uuid": string | null;
  "referral_source_id": string | null;
  "referrer_profile_id": string | null;
  "description": string | null;
  "marital": string | null;
  "nickname": string | null;
  "country_id": string | null;
  "province_id": string | null;
  "city_id": string | null;
  "status": string;
  "employee_type": string | null;
  "freemium_session_limit": number | null;
  "avatar": string | null;
  "has_active_enrollment": boolean;
  "red_gem": number | null;
  "blue_gem": number | null;
  "green_gem": number | null;
  "account_balance": number | null;
  "wallet_balance": number | null;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface ReferralAssignPutResponse extends ApiEnvelope<ReferralAssignPutResponseData> {
}

/** Backend query type: RelationQuery. */
export interface RelationListRelationsGetQuery extends QueryParams {
  "profile_id"?: string | null;
  "active"?: boolean | null;
}
/** Backend response type: Vec<entity::profile_relation::Model>. */
export type RelationListRelationsGetResponse = ApiEnvelope<import("./wire.types.js").ProfileProfileRelation[]>;

/** Backend request type: RelationWrite. */
export type RelationCreateRelationPostInput = import("./wire.types.js").ProfileRelationInput;
/** Backend response type: Vec<entity::profile_relation::Model>. */
export type RelationCreateRelationPostResponse = ApiEnvelope<import("./wire.types.js").ProfileProfileRelation[]>;

/** Backend response type: serde_json::Value. */
export type RelationDeleteRelationDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: entity::profile_relation::Model. */
export type RelationShowRelationGetResponse = ApiEnvelope<import("./wire.types.js").ProfileProfileRelation>;

/** Backend request type: RelationUpdate. */
export type RelationUpdateRelationPutInput = import("./wire.types.js").ProfileRelationUpdateInput;
/** Backend response type: Vec<entity::profile_relation::Model>. */
export type RelationUpdateRelationPutResponse = ApiEnvelope<import("./wire.types.js").ProfileProfileRelation[]>;

/** Backend response type: serde_json::Value. */
export type ProfileDeleteParentDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: serde_json::Value. */
export type ProfileDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: models::SingleData. */
export type ProfileShowGetResponse = import("./types.js").ProfileResponse;

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
export type ProfileUpdatePatchResponse = import("./types.js").ProfileResponse;

/** Backend response type: models::SingleData. */
export type ProfileShowAdminGetResponse = import("./types.js").ProfileResponse;

/** Backend response type: serde_json::Value. */
export type ProfileAvatarDeleteDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend query type: MediaQuery. */
export interface ProfileAvatarShowGetApiV1ProfileUuidAvatarQuery extends QueryParams {
  "key": string;
}
/** Backend response type: raw-response. */
export type ProfileAvatarShowGetApiV1ProfileUuidAvatarResponse = ArrayBuffer | Uint8Array;

/** Backend request type: multipart/form-data. */
export type ProfileAvatarStorePostInput = FormData;
/** Backend response type: serde_json::Value. */
export type ProfileAvatarStorePostResponse = import("./types.js").ProfileMediaResponse;

/** Backend response type: serde_json::Value. */
export type ProfileDeleteAddressDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend request type: models::UpdateEmployeeType. */
export interface ProfileUpdateEmployeeTypePatchInput extends JsonObject {
  "employee_type": string;
}
/** Backend response type: models::SingleData. */
export type ProfileUpdateEmployeeTypePatchResponse = import("./types.js").ProfileResponse;

/** Backend request type: models::UpdateEmployeeType. */
export interface ProfileUpdateEmployeeTypePutInput extends JsonObject {
  "employee_type": string;
}
/** Backend response type: models::SingleData. */
export type ProfileUpdateEmployeeTypePutResponse = import("./types.js").ProfileResponse;

/** Backend request type: models::UpdateFreemiumLimit. */
export interface ProfileUpdateFreemiumPatchInput extends JsonObject {
  "freemium_session_limit": number;
}
/** Backend response type: models::SingleData. */
export type ProfileUpdateFreemiumPatchResponse = import("./types.js").ProfileResponse;

/** Backend request type: models::UpdateFreemiumLimit. */
export interface ProfileUpdateFreemiumPutInput extends JsonObject {
  "freemium_session_limit": number;
}
/** Backend response type: models::SingleData. */
export type ProfileUpdateFreemiumPutResponse = import("./types.js").ProfileResponse;

/** Backend response type: models::SingleData. */
export type ProfileShowFullGetResponse = import("./types.js").ProfileResponse;

/** Backend request type: multipart/form-data. */
export type ProfileImageStorePostInput = FormData;
/** Backend response type: serde_json::Value. */
export type ProfileImageStorePostResponse = import("./types.js").ProfileMediaResponse;

/** Backend query type: MediaQuery. */
export interface ProfileMediaShowGetQuery extends QueryParams {
  "key": string;
}
/** Backend response type: raw-response. */
export type ProfileMediaShowGetResponse = ArrayBuffer | Uint8Array;

/** Backend request type: property_models::PropertiesUpdate. */
export interface ProfileUpdatePropertiesPatchInput extends JsonObject {
  "properties": Record<string, JsonValue>;
}
/** Backend response type: serde_json::Value. */
export type ProfileUpdatePropertiesPatchResponse = ApiEnvelope<import("./wire.types.js").ProfilePropertyMutation>;

/** Backend request type: property_models::PropertiesUpdate. */
export interface ProfileUpdatePropertiesPutInput extends JsonObject {
  "properties": Record<string, JsonValue>;
}
/** Backend response type: serde_json::Value. */
export type ProfileUpdatePropertiesPutResponse = ApiEnvelope<import("./wire.types.js").ProfilePropertyMutation>;

/** Backend request type: models::UpdateStatus. */
export interface ProfileUpdateStatusPatchInput extends JsonObject {
  "status": string;
}
/** Backend response type: models::SingleData. */
export type ProfileUpdateStatusPatchResponse = import("./types.js").ProfileResponse;

/** Backend request type: models::UpdateStatus. */
export interface ProfileUpdateStatusPutInput extends JsonObject {
  "status": string;
}
/** Backend response type: models::SingleData. */
export type ProfileUpdateStatusPutResponse = import("./types.js").ProfileResponse;

/** Backend query type: models::ListQuery. */
export interface ProfileAccountantIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export type ProfileAccountantIndexGetResponse = import("./types.js").ProfileListResponse;

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
export type ProfileAddAddressPatchResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

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
export type ProfileAddAddressPutResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend request type: models::AppUpdate. */
export interface ProfileAddAppPatchInput extends JsonObject {
  "app": JsonValue;
}
/** Backend response type: serde_json::Value. */
export type ProfileAddAppPatchResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend request type: models::AppUpdate. */
export interface ProfileAddAppPutInput extends JsonObject {
  "app": JsonValue;
}
/** Backend response type: serde_json::Value. */
export type ProfileAddAppPutResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend request type: models::ParentLinkRequest. */
export interface ProfileAddParentPatchInput extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
/** Backend response type: serde_json::Value. */
export type ProfileAddParentPatchResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend request type: models::ParentLinkRequest. */
export interface ProfileAddParentPutInput extends JsonObject {
  "user_id": string;
  "parent_type"?: string | null;
}
/** Backend response type: serde_json::Value. */
export type ProfileAddParentPutResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend request type: models::GeoBulkGetRequest. */
export interface ProfileCityGetPostInput extends JsonObject {
  "ids": string[];
  "user_ids"?: string[] | null;
}
/** Backend response type: models::ListData. */
export type ProfileCityGetPostResponse = ApiEnvelope<import("./types.js").ProfileListData>;

/** Backend query type: models::ListQuery. */
export interface ProfileConsultantIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export type ProfileConsultantIndexGetResponse = import("./types.js").ProfileListResponse;

/** Backend request type: models::GeoBulkGetRequest. */
export interface ProfileCountryGetPostInput extends JsonObject {
  "ids": string[];
  "user_ids"?: string[] | null;
}
/** Backend response type: models::ListData. */
export type ProfileCountryGetPostResponse = ApiEnvelope<import("./types.js").ProfileListData>;

/** Backend response type: serde_json::Value. */
export type ProfileForceDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend request type: models::BulkGetRequest. */
export interface ProfileBulkGetPostInput extends JsonObject {
  "user_ids": string[];
}
/** Backend response type: models::ListData. */
export type ProfileBulkGetPostResponse = ApiEnvelope<import("./types.js").ProfileListData>;

/** Backend response type: serde_json::Value. */
export type ProfileChatListGetResponse = ApiEnvelope<never[]>;

/** Backend response type: serde_json::Value. */
export type ProfileGetAddressGetResponse = ApiEnvelope<import("./wire.types.js").StoredProfileAddress[]>;

/** Backend response type: serde_json::Value. */
export interface ProfileGetAppGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export type ProfileGetParentGetResponse = ApiEnvelope<import("./wire.types.js").StoredParentLink | null>;

/** Backend query type: models::ListQuery. */
export interface ProfileManagerIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export type ProfileManagerIndexGetResponse = import("./types.js").ProfileListResponse;

/** Backend response type: serde_json::Value. */
export type ProfileGetMyAddressesGetResponse = ApiEnvelope<import("./wire.types.js").StoredProfileAddress[]>;

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
export type ProfileSaveMyAddressPatchResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

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
export type ProfileSaveMyAddressPutResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: serde_json::Value. */
export type ProfileDeleteMyAddressDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend query type: models::ListQuery. */
export interface ProfileOtherIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export type ProfileOtherIndexGetResponse = import("./types.js").ProfileListResponse;

/** Backend query type: models::ListQuery. */
export interface ProfileParentIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export type ProfileParentIndexGetResponse = import("./types.js").ProfileListResponse;

/** Backend request type: ResolvePeople. */
export type ProfileSearchResolvePostInput = import("./types.js").ResolvePeopleInput;
/** Backend response type: PeopleResult. */
export interface ProfileSearchResolvePostResponseDataResults extends JsonObject {
  "user_id": string;
  "short_id": string;
  "first_name_fa": string | null;
  "last_name_fa": string | null;
  "first_name_en": string | null;
  "last_name_en": string | null;
  "email": string | null;
  "phone": string | null;
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
export type ProfileSearchSearchPostApiV1ProfilePeopleSearchResponse = ApiEnvelope<import("./wire.types.js").ProfilePeopleSearchResult>;

/** Backend request type: models::GeoBulkGetRequest. */
export interface ProfileProvinceGetPostInput extends JsonObject {
  "ids": string[];
  "user_ids"?: string[] | null;
}
/** Backend response type: models::ListData. */
export type ProfileProvinceGetPostResponse = ApiEnvelope<import("./types.js").ProfileListData>;

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
export type ProfileSearchSearchPostResponse = import("./wire.types.js").ProfileSearchResponse;

/** Backend query type: models::ListQuery. */
export interface ProfileStudentIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export type ProfileStudentIndexGetResponse = import("./types.js").ProfileListResponse;

/** Backend response type: models::PesResponse. */
export interface ProfileStudentPesGetResponseData extends JsonObject {
  "count": number;
  "amount": number;
}
export interface ProfileStudentPesGetResponse extends ApiEnvelope<ProfileStudentPesGetResponseData> {
}

/** Backend response type: serde_json::Value. */
export type ProfileStudentPesSchemaGetResponse = ApiEnvelope<import("./wire.types.js").PesSchema>;

/** Backend query type: models::ListQuery. */
export interface ProfileSupportIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export type ProfileSupportIndexGetResponse = import("./types.js").ProfileListResponse;

/** Backend response type: models::PesResponse. */
export interface ProfileSupportPesGetResponseData extends JsonObject {
  "count": number;
  "amount": number;
}
export interface ProfileSupportPesGetResponse extends ApiEnvelope<ProfileSupportPesGetResponseData> {
}

/** Backend response type: serde_json::Value. */
export type ProfileSupportPesSchemaGetResponse = ApiEnvelope<import("./wire.types.js").PesSchema>;

/** Backend query type: models::ListQuery. */
export interface ProfileTeacherIndexGetQuery extends importProfileListQuery {}
/** Backend response type: models::ListData. */
export type ProfileTeacherIndexGetResponse = import("./types.js").ProfileListResponse;

/** Backend response type: serde_json::Value. */
export type ProfileRestoreGetResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend request type: models::MetaUpdate. */
export interface ProfileAddMetaPatchInput extends JsonObject {
  "meta": JsonValue;
}
/** Backend response type: serde_json::Value. */
export type ProfileAddMetaPatchResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend request type: models::MetaUpdate. */
export interface ProfileAddMetaPutInput extends JsonObject {
  "meta": JsonValue;
}
/** Backend response type: serde_json::Value. */
export type ProfileAddMetaPutResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend request type: EducationInformationUpdate. */
export type EducationUpdatePutInput = import("./types.js").EducationInformationInput;
/** Backend response type: crate::profile::models::SingleData. */
export type EducationUpdatePutResponse = import("./types.js").ProfileResponse;

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
export type ProfileUpdatePersonalPatchResponse = import("./types.js").ProfileResponse;

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
export type ProfileUpdatePersonalPutResponse = import("./types.js").ProfileResponse;

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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface ProvinceStorePostResponseData extends JsonObject {
  "province": ProvinceStorePostResponseDataProvince;
}
export interface ProvinceStorePostResponse extends ApiEnvelope<ProvinceStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export type ProvinceDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: models::SingleData. */
export interface ProvinceShowGetResponseDataProvince extends JsonObject {
  "id": string;
  "country_id": string;
  "name": string;
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "latitude": number | null;
  "longitude": number | null;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface ProvinceUpdatePutResponseData extends JsonObject {
  "province": ProvinceUpdatePutResponseDataProvince;
}
export interface ProvinceUpdatePutResponse extends ApiEnvelope<ProvinceUpdatePutResponseData> {
}

/** Backend response type: serde_json::Value. */
export type ProvinceForceDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: serde_json::Value. */
export type ProvinceRestoreGetResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: Vec<entity::referral_source::Model>. */
export type ReferralListGetResponse = ApiEnvelope<import("./wire.types.js").ProfileReferralSource[]>;

/** Backend request type: SourceWrite. */
export type ReferralCreatePostInput = import("./wire.types.js").ProfileReferralSourceInput;
/** Backend response type: entity::referral_source::Model. */
export type ReferralCreatePostResponse = ApiEnvelope<import("./wire.types.js").ProfileReferralSource>;

/** Backend response type: serde_json::Value. */
export type ReferralDeleteDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: entity::referral_source::Model. */
export type ReferralShowGetResponse = ApiEnvelope<import("./wire.types.js").ProfileReferralSource>;

/** Backend request type: SourceWrite. */
export type ReferralUpdatePutInput = import("./wire.types.js").ProfileReferralSourceInput;
/** Backend response type: entity::referral_source::Model. */
export type ReferralUpdatePutResponse = ApiEnvelope<import("./wire.types.js").ProfileReferralSource>;

/** Backend response type: Vec<entity::relation_type::Model>. */
export type RelationListTypesGetResponse = ApiEnvelope<import("./wire.types.js").ProfileRelationType[]>;

/** Backend request type: RelationTypeWrite. */
export type RelationCreateTypePostInput = import("./wire.types.js").ProfileRelationTypeInput;
/** Backend response type: entity::relation_type::Model. */
export type RelationCreateTypePostResponse = ApiEnvelope<import("./wire.types.js").ProfileRelationType>;

/** Backend response type: serde_json::Value. */
export type RelationDeleteTypeDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: entity::relation_type::Model. */
export type RelationShowTypeGetResponse = ApiEnvelope<import("./wire.types.js").ProfileRelationType>;

/** Backend request type: RelationTypeWrite. */
export type RelationUpdateTypePutInput = import("./wire.types.js").ProfileRelationTypeInput;
/** Backend response type: entity::relation_type::Model. */
export type RelationUpdateTypePutResponse = ApiEnvelope<import("./wire.types.js").ProfileRelationType>;

/** Backend response type: models::ListData. */
export interface SettingIndexGetResponseDataSetting extends JsonObject {
  "id": string;
  "key": string;
  "title": string;
  "value": number;
  "created_at": string;
  "updated_at": string | null;
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
  "updated_at": string | null;
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
export type LifecycleActionsListGetResponse = ApiEnvelope<import("./wire.types.js").ProfileStateAction[]>;

/** Backend request type: ActionWrite. */
export type LifecycleCreateActionPostInput = import("./wire.types.js").ProfileLifecycleActionInput;
/** Backend response type: entity::state_action::Model. */
export type LifecycleCreateActionPostResponse = ApiEnvelope<import("./wire.types.js").ProfileStateAction>;

/** Backend response type: serde_json::Value. */
export type LifecycleDeleteActionDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: entity::state_action::Model. */
export type LifecycleShowActionGetResponse = ApiEnvelope<import("./wire.types.js").ProfileStateAction>;

/** Backend request type: ActionWrite. */
export type LifecycleUpdateActionPutInput = import("./wire.types.js").ProfileLifecycleActionInput;
/** Backend response type: entity::state_action::Model. */
export type LifecycleUpdateActionPutResponse = ApiEnvelope<import("./wire.types.js").ProfileStateAction>;

/** Backend request type: ActionWrite. */
export type LifecycleDryRunActionPostInput = import("./wire.types.js").ProfileLifecycleActionInput;
/** Backend response type: serde_json::Value. */
export type LifecycleDryRunActionPostResponse = ApiEnvelope<import("./wire.types.js").ActionDryRun>;

/** Backend query type: StateQuery. */
export interface LifecycleStatesGetQuery extends QueryParams {
  "system_id"?: string | null;
}
/** Backend response type: Vec<entity::state_definition::Model>. */
export type LifecycleStatesGetResponse = ApiEnvelope<import("./wire.types.js").ProfileStateDefinition[]>;

/** Backend request type: StateWrite. */
export type LifecycleCreateStatePostInput = import("./wire.types.js").ProfileLifecycleStateInput;
/** Backend response type: entity::state_definition::Model. */
export type LifecycleCreateStatePostResponse = ApiEnvelope<import("./wire.types.js").ProfileStateDefinition>;

/** Backend response type: serde_json::Value. */
export type LifecycleDeleteStateDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: entity::state_definition::Model. */
export type LifecycleShowStateGetResponse = ApiEnvelope<import("./wire.types.js").ProfileStateDefinition>;

/** Backend request type: StateWrite. */
export type LifecycleUpdateStatePutInput = import("./wire.types.js").ProfileLifecycleStateInput;
/** Backend response type: entity::state_definition::Model. */
export type LifecycleUpdateStatePutResponse = ApiEnvelope<import("./wire.types.js").ProfileStateDefinition>;

/** Backend query type: AttemptQuery. */
export interface LifecycleActionAttemptsGetQuery extends QueryParams {
  "outbox_id"?: string | null;
}
/** Backend response type: Vec<entity::state_action_attempt::Model>. */
export type LifecycleActionAttemptsGetResponse = ApiEnvelope<import("./wire.types.js").ProfileStateActionAttempt[]>;

/** Backend request type: EvaluationRequest. */
export type LifecycleEvaluatePostInput = import("./wire.types.js").ProfileLifecycleEvaluationInput;
/** Backend response type: EvaluationResult. */
export type LifecycleEvaluatePostResponse = ApiEnvelope<import("./wire.types.js").ProfileLifecycleEvaluation>;

/** Backend query type: OutboxQuery. */
export interface LifecycleOutboxGetQuery extends QueryParams {
  "status"?: string | null;
}
/** Backend response type: Vec<entity::state_action_outbox::Model>. */
export type LifecycleOutboxGetResponse = ApiEnvelope<import("./wire.types.js").ProfileStateActionOutbox[]>;

/** Backend response type: entity::state_action_outbox::Model. */
export type LifecycleRetryPostResponse = ApiEnvelope<import("./wire.types.js").ProfileStateActionOutbox>;

/** Backend response type: usize. */
export interface LifecycleProcessOutboxPostResponse extends ApiEnvelope<number> {
}

/** Backend request type: EvaluationRequest. */
export type LifecyclePreviewPostInput = import("./wire.types.js").ProfileLifecycleEvaluationInput;
/** Backend response type: EvaluationResult. */
export type LifecyclePreviewPostResponse = ApiEnvelope<import("./wire.types.js").ProfileLifecycleEvaluation>;

/** Backend query type: TransitionQuery. */
export interface LifecycleTransitionsGetQuery extends QueryParams {
  "profile_id"?: string | null;
  "system_id"?: string | null;
}
/** Backend response type: Vec<entity::state_transition::Model>. */
export type LifecycleTransitionsGetResponse = ApiEnvelope<import("./wire.types.js").ProfileStateTransition[]>;

/** Backend request type: RulePreviewRequest. */
export type LifecycleValidateRulePostInput = import("./wire.types.js").ProfileLifecycleRuleInput;
/** Backend response type: serde_json::Value. */
export type LifecycleValidateRulePostResponse = ApiEnvelope<import("./wire.types.js").RuleValidation>;

/** Backend response type: Vec<entity::state_system::Model>. */
export type LifecycleSystemsGetResponse = ApiEnvelope<import("./wire.types.js").ProfileStateSystem[]>;

/** Backend request type: SystemWrite. */
export type LifecycleCreateSystemPostInput = import("./wire.types.js").ProfileLifecycleSystemInput;
/** Backend response type: entity::state_system::Model. */
export type LifecycleCreateSystemPostResponse = ApiEnvelope<import("./wire.types.js").ProfileStateSystem>;

/** Backend response type: serde_json::Value. */
export type LifecycleDeleteSystemDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: entity::state_system::Model. */
export type LifecycleShowSystemGetResponse = ApiEnvelope<import("./wire.types.js").ProfileStateSystem>;

/** Backend request type: SystemWrite. */
export type LifecycleUpdateSystemPutInput = import("./wire.types.js").ProfileLifecycleSystemInput;
/** Backend response type: entity::state_system::Model. */
export type LifecycleUpdateSystemPutResponse = ApiEnvelope<import("./wire.types.js").ProfileStateSystem>;

/** Backend response type: Value. */
export type SurveyIndexGetResponse = ApiEnvelope<import("./wire.types.js").ProfileSurvey[]>;

/** Backend request type: CreateSurvey. */
export interface SurveyStorePostInput extends JsonObject {
  "user_id": string;
  "enrollment_id"?: number | null;
  "type"?: string | null;
  "meta"?: JsonValue | null;
}
/** Backend response type: Value. */
export type SurveyStorePostResponse = ApiEnvelope<import("./wire.types.js").ProfileSurvey>;

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
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface TrustedServiceStorePostResponseData extends JsonObject {
  "trusted_service": TrustedServiceStorePostResponseDataTrustedService;
}
export interface TrustedServiceStorePostResponse extends ApiEnvelope<TrustedServiceStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export type TrustedServiceDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: models::SingleData. */
export interface TrustedServiceShowGetResponseDataTrustedService extends JsonObject {
  "id": string;
  "service_key": string;
  "title": string;
  "status": string;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "payload_schema": JsonValue | null;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "payload_schema": JsonValue | null;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface TrustedServiceEventStorePostResponseData extends JsonObject {
  "trusted_service_event": TrustedServiceEventStorePostResponseDataTrustedServiceEvent;
}
export interface TrustedServiceEventStorePostResponse extends ApiEnvelope<TrustedServiceEventStorePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export type TrustedServiceEventDestroyDeleteResponse = ApiEnvelope<import("./wire.types.js").EmptyMutationData>;

/** Backend response type: models::EventSingleData. */
export interface TrustedServiceEventShowGetResponseDataTrustedServiceEvent extends JsonObject {
  "id": string;
  "service_id": string;
  "event_name": string;
  "title": string;
  "visible_in_list": boolean;
  "visible_in_get": boolean;
  "visible_in_full": boolean;
  "payload_schema": JsonValue | null;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "payload_schema": JsonValue | null;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
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
  "payload_schema": JsonValue | null;
  "created_at": string;
  "updated_at": string | null;
  "deleted_at": string | null;
}
export interface TrustedServiceEventUpdatePutResponseData extends JsonObject {
  "trusted_service_event": TrustedServiceEventUpdatePutResponseDataTrustedServiceEvent;
}
export interface TrustedServiceEventUpdatePutResponse extends ApiEnvelope<TrustedServiceEventUpdatePutResponseData> {
}

/** Backend response type: Value. */
export type CampaignIndexGetResponse = ApiEnvelope<import("./wire.types.js").ProfileCampaign[]>;

/** Backend response type: Value. */
export type CampaignMyContributionsGetResponse = ApiEnvelope<import("./wire.types.js").CampaignContribution[]>;

/** Backend response type: Value. */
export type CampaignShowGetResponse = ApiEnvelope<import("./wire.types.js").ProfileCampaign>;

/** Backend request type: ContributionRequest. */
export interface CampaignContributePostInput extends JsonObject {
  "method": string;
  "amount": number;
  "unit": string;
  "idempotency_key": string;
}
/** Backend response type: Value. */
export type CampaignContributePostResponse = ApiEnvelope<import("./wire.types.js").CampaignContributionReceipt>;

/** Backend response type: serde_json::Value. */
export type RouterHealthGetHealthResponse = import("@faiber/sdk-core").ServiceHealthResponse;

/** Backend response type: serde_json::Value. */
export type RouterHealthGetUpResponse = import("@faiber/sdk-core").ServiceHealthResponse;
